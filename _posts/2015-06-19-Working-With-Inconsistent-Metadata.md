---
layout: post
title: "Working With Inconsistent Metadata"
author: [frank, mathias]
description: 
headline: 
modified: 2015-06-19
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: false
---
Like we wrote yesterday, we can't stop celebrating the fact that you can find so many literary corpora on the web today. Just a couple of days ago, Martin Müller released the [Shakespeare His Contemporares (SHC) collection](https://scalablereading.northwestern.edu/2015/06/07/shakespeare-his-contemporaries-shc-released/), a corpus of early English modern drama, encoded in [TEI Simple}(https://github.com/TEIC/TEI-Simple). We will definitely look into this corpus at a later point, but today we will again be bothering you with the depths of the TextGrid Repository. No worries, today's blog entry won't be as excessive as the one we published yesterday. ;)

If you're trying to work with corpora you didn't build yourself, you will always have the problem of missing metadata. They may be inconsistent or incomplete (or missing), and maybe the corpus builders just didn't have the same metadata needs as yourself.

So let's get back to our drama collection derived from the TextGrid Repository, kind of picking up our last blog post on the [top 10 longest German-language theatre plays contained in this very corpus](/Longest-German-Language-Theatre-Plays/). Today we want to look at the metadata and try to put all the hundreds of play in a chronological order by just relying on the (inconsistent) metadata provided in the documents.

There are many purposes for doing so, one being the creation of a subcorpus of, let's say, 18th century drama. For this, you will need metadata that tells you when a theatre piece was written, or published, or when it premiered. Now, TEI provides a [`<creation>`](http://www.tei-c.org/release/doc/tei-p5-doc/de/html/ref-creation.html) element to include information like that. Yet, in the TextGrid Repository, it is not used consistently. In many cases, the `<creation>` slot is left empty. In other cases, it features something like this: `<date notBefore="1837" notAfter="1872"/>`, the mentioned years being the lifespan of an author. In a way, this information is still helpful to narrow down the date of origin of a play, but it is as vague as can be, of course.

So for the sake of putting all the hundreds of theatre pieces in chronological order, we had to work around this problem. Luckily, the TextGrid Repository also provides some publication info within the `<note>` element, something like this:

{% highlight xml %}
<note>Erstdruck in: »Urania«, 1826. Uraufführung am 22.12.1823, Königliches Theater, Berlin.</note>
{% endhighlight %}

In this example, we've got two year specifications, 1823 for the premiere, 1826 for the first print. It is always possible that a piece was written years or decades before it premiered or before it was printed (take, for example, [Goethe's "Urfaust"](https://de.wikipedia.org/wiki/Urfaust)). And if we had the resources, we would definitely try to add the missing metadata by hand. What we were trying to do here, though, was working with what we had to narrow down the date of origin of a play. So in the mentioned example, we would opt for the earlier date, 1823.

Our decision three would thus look something like this:

1. Look for an exact year in `<creation>`. If no such year is provided then:
2. Look for the earliest year mentioned within the `<note>` element. If that doesn't yield a satisfactory result then:
3. Take the author's year of death as the latest possible year of creation of a piece.

For easier processing, we decided to use the detected year as part of the filename, followed by the author and the title of a play. You can have a look at the result [at the respective GitHub folder](https://github.com/DLiNa/project/tree/master/data/textgrid-repository-dramas). You will note that, without further ado, the plays are listed in chronological order, with the little exception of the 10 Greek and Roman plays written BC (to be found at the end of the file list).

As we stressed before, we chose this approach just to narrow down the dates of origin. Such an approach never replaces the proper integration of metadata. For example, all Shakespeare plays were referenced with the year 1616, due to the lack of better metadata. Again, we could start to repair this by hand, but that was not the purpose of this venture. If your corpus is big enough and you can't just fix all the metadata, this is what you can do to get an approximation.

But let's cut to the chase. This is the XQuery we used to work out the year specifications from the metadata provided:

{% highlight xquery %}
xquery version "3.0";
declare namespace tei = "http://www.tei-c.org/ns/1.0";
let $collection := '/db/data/textgrid-repository-dramas/'
return

((for $filename in xmldb:get-child-resources($collection)
let $doc := doc($collection || $filename)
let $noteStmt := for $item in tokenize($doc//tei:notesStmt/tei:note, '\W')[matches(., '\d{3,4}')] return number($item)
let $noteStmt := number(min($noteStmt))[1]
let $noteStmt := if ($doc//tei:creation/tei:date/@when or $doc//tei:creation/tei:date/string-length() = 4)
                    then min((number(min($doc//tei:creation/tei:date/@when)), if ($doc//tei:creation/tei:date/string-length() = 4) then number($doc//tei:creation/tei:date/string()) else ()) )
                    else $noteStmt
let $noteStmt := if ($noteStmt gt min($doc//tei:profileDesc/tei:creation/tei:date/number(@notAfter)))
                    then $doc//tei:profileDesc/tei:creation/tei:date/@notAfter
                    else $noteStmt
(: ok, if we still have no date, we look for the pubStmt and compare with creation@notAfter :)
let $noteStmt :=
        if (string($noteStmt) = 'NaN') 
            then 
                let $pub := number($doc//tei:biblFull/tei:publicationStmt/tei:date/@when)
                let $creation := number($doc//tei:profileDesc/tei:creation/tei:date/@notAfter)
                return 
                min(($pub, $creation))
            else 
            $noteStmt
let $noteStmt :=
        if (string($noteStmt) = 'NaN') then number($doc//tei:profileDesc/tei:creation/tei:date/@notAfter) else $noteStmt
let $noteStmt := if (string-length($noteStmt) = 3) then 'BC0' || $noteStmt else $noteStmt

let $target := $noteStmt || '_' || replace(string(($doc//tei:author)[1]), '\s+', '_') || '_-_' || replace(($doc//tei:fileDesc[1]/tei:titleStmt/tei:title/string())[1], '\s+', '_')
let $mv  :=
"mv '" || replace(xmldb:decode($filename), "[']",  "'\\$0'") || "' '" || replace($target, "[']",  "'\\$0'") || ".xml'
"

(:replace($mv, "[!|\(|\)|,|'|:|;|-]", '\\$0'):)
return
    $mv)
    ,   "
mv 'Aischylos_-_Der_gefesselte_Proemetheus_(-0525--0456).xml' 'BC0470_Aischylos_-_Der_gefesselte_Proemetheus.xml'
mv 'Aischylos_-_Die_Orestie_(-0525--0456).xml' 'BC0456_Aischylos_-_Die_Orestie.xml'
mv 'Euripides_-_Iphigenie_in_Aulis_(-0480--0406).xml' 'BC0406_Euripides_-_Iphigenie_in_Aulis.xml'
mv 'Euripides_-_Medea_(-0480--0406).xml' 'BC0431_Euripides_-_Medea.xml'
mv 'Plautus,_Titus_Maccius_-_Amphitryon_(-0250--0184).xml' 'BC0207_Plautus,_Titus_Maccius_-_Amphitryon.xml'
" )
{% endhighlight %}

Let's conclude this rather dry blog post (hehe) with a little announcement: Building on what we established today, we've got some visual candy for you in the next post!


P.S.
und wollten wir noch dieses Beispiel bringen: Wolfram, "Faust" (alle Datumsangaben vergeben). -- hab vergessen, wozu das dienen sollte...?


