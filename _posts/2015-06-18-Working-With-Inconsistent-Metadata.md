---
layout: post
title: "Working With Inconsistent Metadata"
author: [frank, mathias]
description: 
headline: 
modified: 2015-06-18
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: false
---
We can't stop celebrating the fact that you can find so many literary corpora on the web today. Just a couple of days ago, Martin Müller released the [Shakespeare His Contemporares (SHC) collection](https://scalablereading.northwestern.edu/2015/06/07/shakespeare-his-contemporaries-shc-released/), a corpus of early English modern drama, encoded in TEI Simple. We will definitely look into this at a later point, but today we will again be bothering you with the depths of the TextGrid Repository.

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

!!!... your code ...!!!

{% endhighlight %}

Let's conclude this rather dry blog post (hehe) with a little announcement: Building on what we established today, we've got some visual candy for you in the next post!


P.S.
und wollten wir noch dieses Beispiel bringen: Wolfram, "Faust" (alle Datumsangaben vergeben). -- hab vergessen, wozu das dienen sollte...?


