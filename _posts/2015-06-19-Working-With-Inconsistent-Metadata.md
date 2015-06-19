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
featured: true
---
Like we <u>underlined</u> before, we can't stop celebrating the fact that you can find so many literary corpora on the web today. Just a fortnight ago, Martin Müller released the [Shakespeare His Contemporares (SHC) collection](https://scalablereading.northwestern.edu/2015/06/07/shakespeare-his-contemporaries-shc-released/), a corpus of early English modern drama, encoded in [TEI Simple](https://github.com/TEIC/TEI-Simple). We will definitely look into this corpus at a later point, but today we will again be bothering you with the depths of the [TextGrid Repository](https://textgridrep.de/). No worries, today's blog entry won't be as excessive as the one we published [yesterday](/A-Not-So-Simple-Question/). ;)

If you're trying to work with corpora you didn't create yourself, you will always have the problem of inconsistent metadata. They may be inconsistent or incomplete (or simply missing). Maybe the corpus builders just didn't have the same metadata needs as you.

So let's get back to our drama collection derived from the TextGrid Repository, kind of picking up our recent blog post on the [top 10 longest German-language theatre plays contained in this very corpus](/Longest-German-Language-Theatre-Plays/). Today we want to look at the available metadata and try to put all the hundreds of play in a chronological order by just relying on the (inconsistent) metadata provided in the documents.

There are many purposes for doing so, one being the creation of a subcorpus of, let's say, 18th-century drama. For this, you will need metadata that tells you when a theatre piece was written, or published, or when it premiered. Now, TEI provides a [`<creation>`](http://www.tei-c.org/release/doc/tei-p5-doc/de/html/ref-creation.html) element to include information like that. Yet, it is not used consistently in the TextGrid Repository. In many cases, the `<creation>` slot is left empty. In other cases, it features something like this: `<date notBefore="1837" notAfter="1872"/>`, the mentioned years being the lifespan of an author. In a way, this information is still helpful to narrow down a text's date of origin, but it is as vague as can be, of course.

So for the sake of putting all the hundreds of theatre pieces in chronological order, we had to work around this problem. Luckily, the TextGrid Repository also provides some publication info within the `<note>` element, something like this:

{% highlight xml %}
<note>Erstdruck in: »Urania«, 1826. Uraufführung am 22.12.1823, Königliches Theater, Berlin.</note>
{% endhighlight %}

In this example, we've got two year specifications, 1823 for the premiere, 1826 for the first print. It is always possible that a piece was written years or decades before it premiered or before it was printed (take, for example, [Goethe's "Urfaust"](https://de.wikipedia.org/wiki/Urfaust)). If we had the resources, we would definitely try to add the missing metadata by hand. But what we were trying to do here is working with what we have to narrow down the date of origin of a play. So in the mentioned example, we would opt for the earlier date, 1823.

Our decision tree would thus look something like this:

1. Look for an exact year in `<creation>`. If no such year is provided then:
2. Look for the earliest year mentioned within the `<note>` element. If that doesn't yield a satisfactory result then:
3. Take the author's year of death as the latest possible year of creation of a piece.

For easier processing, we decided to use the detected year as part of the filename, followed by the name of the author and the title of the play. You can have a look at the result [at the respective GitHub folder](https://github.com/DLiNa/project/tree/master/data/textgrid-repository-dramas). Due to our treatment, the plays are automatically listed in chronological order, with the little exception of the 10 Greek and Roman plays written BC (to be found at the end of the file list).

As we stressed before, we chose this approach just to approximate the dates of origin. Such an approach never replaces the proper integration of metadata. For example, all Shakespeare plays are referenced by the year 1616 (rule 3 of our decision tree), due to the lack of better metadata. Again, we could start to repair this by hand, but that was not the purpose of this venture. If your corpus is big enough and you can't just fix all the metadata with your bare hands, this is what you can do to get an approximation.

But let's cut to the chase. Let's have a look at the XQuery we used to work out the year specifications from the metadata provided. The query creates a list of [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) commands to replace the original filenames with the filename schema we described above. The last five lines starting with the `mv` command feature problematic filenames. It was a bit late yesterday and we, errm, decided to hardcode so we could eventually call it a day (the collection is still the same we used [for our previous post](/A-Not-So-Simple-Question/)):

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

Let's conclude this rather dry blog post with some eye candy. We will introduce our [**"dramavis"**](https://github.com/lehkost/dramavis) script at a later point, but here is what it does. Among other things, it creates network graphs out of theatre pieces. The resulting PNGs can be glued together using ImageMagick and this is what we did to create a superposter of all the 666 dramas contained in the TextGrid Repository. Attention: In this initial version of the poster, the graphs are mostly erroneous due to inconsistent markup. We mainly used these graphs to find and correct markup errors since it's a lot easier to look at a graph than read thousands of lines of TEI markup. The cleaning of dirty network data based on problematic markup is something we will address later. But for now, here's a small version of our superposter in JPG format, the actual PNG version weighs almost 100 MB and will be uploaded somewhere else:

<figure>
  <img src="{{ site.url }}/images/tgrep-untouched-dirty-data-superposter-900px.jpg" alt="TextGrid Repository Superposter" style="width:56.25rem">
</figure>

Well, this must be how [Núñez de Balboa](https://en.wikipedia.org/wiki/Vasco_Núñez_de_Balboa) felt when he first saw the Pacific Ocean. ;) But apart from looking nice, this little superposter of 666 theatre plays can definitely be part of a distant-reading strategy once it is based on reliable network data, and this is definitely where we're headed.

 
