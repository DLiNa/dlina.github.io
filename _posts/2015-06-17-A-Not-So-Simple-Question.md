---
layout: post
title: "A (Not So) Simple Question and a Somewhat Diabolic Answer"
author: [frank, mathias]
description: 
headline: 
modified: 2015-06-17
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: false
---
# How Many Dramatic Pieces Are Contained in the TextGrid Repository?

Simple question, seemingly. Before we try to answer it, a little heads-up: This blog post is **ridiculously long**. It can be regarded a proof-of-concept of what [Mareike König](https://twitter.com/mareike2405) recently said at the "Wissensspeicher" conference: "A blog post has no borders, it can be as long as you want." (In [this video, 12:4x mins. in](http://www.lisa.gerda-henkel-stiftung.de/blogs_als_wissensorte_der_forschung?nav_id=5594).) True that! So here we go:

Corpus building is a crucial task of many Digital Humanities projects and it is great to see a number of new corpora appear on a fairly regular basis. Many of these text collections feature markup following the [TEI Guidelines](http://www.tei-c.org/Guidelines/). Yet, the mere existence of a corpus and its use of standardised formats doesn't release you from working your way through its peculiarities. The purpose of this article is to demonstrate how to start, our example being the vast TextGrid Repository and its subset of German-language drama.

The TextGrid Repository is the largest TEI-tagged corpus of German literature released freely under a CC-by 3.0 licence. It contains thousands of literary texts from around 1500 to the 1930ies: novels, theatre pieces, poems, etc. The corpus is accessible through [a web interface here](http://www.textgridrep.de/), but it can also be downloaded in its entirety so you can toy around with it in your own environment.

## Using The Web Interface

The answer to the question posed in the title of this post seems to be a piece of cake. But it really isn't, for several reasons. By trying to find the correct answer we turn the corpus upside down, which will help us to gain insights on what to expect from the corpus when we start to build our theories around it.

Now, the first approach to answer our seemingly simple question leads us to [the TextGrid Rep search form](http://www.textgridrep.de/). If we look for [`genre:"drama"`](http://www.textgridrep.de/results.html?query=genre%3A"drama"&target=both), the TextGrid Rep search engine returns 1462 results. These are far too many since a search in the repository also considers the work objects, according to TextGrid's metadata schema ([see the corresponding cheat sheet here](https://dev2.dariah.eu/wiki/download/attachments/12189756/Metadata-Cheatsheet.pdf?api=v2)).

If we limit our search to just XML documents, we get a much better approximation: [`genre:"drama" format:"text/xml"`](http://www.textgridrep.de/results.html?query=genre%3A"drama"+format%3A"text%2Fxml"&target=both). **And we're down to 690!** This is a promising answer and the good news is that we're halfway there. Easy as pie, so far. But wait. We wouldn't have written this article if it was that easy, right? The second half of our trip will take a lot (like, a lot) longer. But we will learn a plethora of things about our corpus.

When we worked our way through the corpus we found that there are certain anomalies:

* Some dramas are split into parts, each of which comes in its own xml document and has an own TEI header with the genre information we took advantage of before. These parts are counted as own drama when just looking for genre info in TEI headers and, for this reason, distort our results.
* The second big problem are doublets. There are several dramatic pieces that appear two or even three times. This happens due to co-authorship. E.g., O. F. Berg und David Kalisch both authored the dramatic text "Berlin, wie es weint und lacht". The full text appears only once in the corpus, but there's a reference to the text for every co-author and it features another genre value which falsely increases the number of dramatic pieces we are counting.

To get rid of those things, we need to dive deep and therefore we need tools that are a bit more flexible, in this case, an XML database where we can build our own queries. So let's download the whole corpus and load it into a local eXist-db instance.

## eXist-db, An Open-Source Native XML Database

If you haven't done so already, please go ahead and [download eXist-db](http://exist-db.org/exist/apps/homepage/index.html). After installing and starting it, you can access it via your browser [on port 8080 of localhost](http://localhost:8080). Just let it run for the time being.

## Loading The Data Into Our Own XML Database

The corpus can be downloaded in one integral zip file [from the TextGrid website](http://www.textgrid.de/Digitale-Bibliothek). There are two versions of the corpus. The differences are explained on the website but aren't that noteworthy, let's just go ahead and download [the second version (390 MB, zipped)](http://www.textgrid.de/fileadmin/digitale-bibliothek/literatur-nur-texte-2.zip). Unzip the file. All XML files are contained in the "12-publication" folder. There is one XML file for every author, 695 altogether (there are several Goethe files, but nevermind). Apart from these exceptions, all the works of the same author are all contained in one file.

Let's load all the XML files into our XML database:

On the eXist-db [dashboard](http://localhost:8080), click on "Collections" and enter login and password (if you haven't specified any login data, enter enter "admin" as login and leave the password field empty). Once there, click on the icon "New collection" (third from right) and then create a new folder for our collection. Let's call it "data", where from now on we will put all our data (hence the name, for good practice!). Let's create a subfolder called "tgrep" for our repository and then click on "Upload resources" (the icon on the far right). Look for the folder we unzipped earlier, change into the "12-publication" folder, mark all XML files (CTRL + A is your friend) so all of them will be loaded into our collection. This will take some time, around 5 minutes, exactly the time you need to squeeze two or three oranges and set you up with a glass of fresh juice.

If you wonder what's contained in the XML files, just double click on one. It'll open a new browser tab and show you the plain XML with some syntax highlighting to easily differentiate between TEI elements, plain text, URLs, etc. The document starts with the `<teiCorpus>` element, meaning that the file contains several works. According to the TextGrid metadata schema based on FRBR there may be several `<teiCorpus>` nested within the root element. So there are several hierarchies that in this case are not uniform, but let's leave that for now.

The genre of a text is specified within the TEI element [textClass](http://www.tei-c.org/release/doc/tei-p5-doc/de/html/ref-textClass.html), the schema ([an .xsd file](https://projects.gwdg.de/projects/digitale-bibliothek/repository/revisions/master/entry/schemas/tei_digibib.xsd#L6924)) specifies that the genre info in this corpus is contained within `<tei:term>`.

So once again, how many dramatic pieces are contained in the TextGrid Repository???

## Building An XQuery

Let's start with reproducing our 690-result with a basic XQuery. This is to show you that we can easily reproduce by ourself the results of the search form.

So we want to find all works that are marked as "drama" in the genre metadata. As indicated before, the TEI element `<textClass>` contains info on the genre. So let's count all occurrences in the whole TextGrid Repository by using **eXide**, "a cool, handy, fully integrated editor for working with XQuery, XML, and other resources stored in eXist" ([O'Reilly](https://books.google.de/books?id=0evSBQAAQBAJ&pg=PA29)). Close the Collection Browser and click on the "eXide – XQuery IDE" logo. You should see a fresh sheet for your own queries.

First of all, we need to declare a namespace for technical reasons, just insert as line two:

{% highlight xquery %}
declare namespace tei = "http://www.tei-c.org/ns/1.0";
{% endhighlight %}

To address our imported collection we write in the next line:

{% highlight xquery %}
collection('/db/data/tgrep/')
{% endhighlight %}

If we now want to count the occurences, we can use a count function. Just wrap a `count()` around the specified collection. Then we have to determine what to count, so let's have a look on the genre information as described above: `//tei:textClass/tei:keywords/tei:term[text() = 'drama'])`

Eventually, our query looks like this:

{% highlight xquery %}
count(collection('/db/data/tgrep/')//tei:textClass/tei:keywords/tei:term[text() = 'drama'])
{% endhighlight %}

To evaluate it, just click on the "Eval" button and see what happens (after some seconds, anyway).

Most of the stuff in this query is a so-called XPath. Basically, XPath is a language for browsing through and operate on your XML documents. XPath, XSLT and XQuery share the same function set. We can get the same results by using a loop, which helps us generating more readable and sometimes more efficient queries. This is becoming more important in a further step.

{% highlight xquery %}
count(
    for $occurrence in collection('/db/data/tgrep/')//tei:textClass/tei:keywords/tei:term[text() = 'drama']
    return $occurrence)
{% endhighlight %}

Click on "Eval" and wait some seconds after which the output window returns a number, but what is this: 703? **Are there, all of a sudden, 703 dramas in our corpus?** Rhetorical question, of course not. So what happened? Obviously, there are some appearances of "drama" outside of TEI documents. So let's specify our query and look just for occurrences of "drama" as a genre in TEI documents:

{% highlight xquery %}
count(collection('/db/data/tgrep/')//tei:textClass[ancestor::tei:TEI]/tei:keywords/tei:term[text() = 'drama'])
{% endhighlight %}

We added the part `[ancestor::tei:TEI]` which tells the engine that we look for the occurrence in TEI documents only, and we leave the teiCorpus uncounted. "TEI" here is the root element of a TEI document. **And look, we end up with 690.** So we just reproduced the result we got from the search form. The nice thing about reproducing this result is that we don't stop here. With XQuery we can do much more.

For example, let's try substract the 690 from the 703 pieces found earlier. This is interesting as it points us to a bunch of subcorpora in the repository containing a number of dramas. By executing the following query ...

{% highlight xquery %}
collection('/db/data/tgrep/')//tei:textClass[*not*(ancestor::tei:TEI)]/tei:keywords/tei:term[text() = 'drama']/base-uri()
{% endhighlight %}

... we get 13 evidences. More precisely, we get the resource address in the database (comparable to the file name):

* /db/data/tgrep/Literatur-Arnim%2C-Ludwig-Achim-von.xml
* /db/data/tgrep/Literatur-Goethe%2C-Johann-Wolfgang-001.xml
* /db/data/tgrep/Literatur-Grabbe%2C-Christian-Dietrich.xml
* /db/data/tgrep/Literatur-Hauptmann%2C-Carl.xml
* /db/data/tgrep/Literatur-Hauptmann%2C-Carl.xml
* /db/data/tgrep/Literatur-Hebbel%2C-Friedrich.xml
* /db/data/tgrep/Literatur-Immermann%2C-Karl.xml
* /db/data/tgrep/Literatur-Metastasio%2C-Pietro.xml
* /db/data/tgrep/Literatur-Scheerbart%2C-Paul.xml
* /db/data/tgrep/Literatur-Schiller%2C-Friedrich.xml
* /db/data/tgrep/Literatur-Schnitzler%2C-Arthur.xml
* /db/data/tgrep/Literatur-Scribe%2C-Eugene.xml
* /db/data/tgrep/Literatur-Wagner%2C-Richard.xml

So what about these 13 evidences? They describe a `teiCorpus`, but they are not part of a TEI document themselves. So they describe a subcorpus aggregating several dramatic texts.

Why does this happen? Because some dramas are split into several TEI subdocuments. How do we find out which? Here's our query:

{% highlight xquery %}
collection('/db/data/tgrep/')//tei:textClass[not(ancestor::tei:TEI)]/tei:keywords/tei:term[text() = 'drama']/concat(base-uri(), ': ', (ancestor::tei:teiCorpus[1]//tei:fileDesc[1]/tei:titleStmt/tei:title/string())[1], ' >  ', count(ancestor::tei:teiCorpus[1]//tei:TEI))
{% endhighlight %}

Yields the following output:

* /db/data/tgrep/Literatur-Arnim%2C-Ludwig-Achim-von.xml: Halle und Jerusalem > 4
* /db/data/tgrep/Literatur-Goethe%2C-Johann-Wolfgang-001.xml: Faust. Eine Tragödie > 5
* /db/data/tgrep/Literatur-Grabbe%2C-Christian-Dietrich.xml: Die Hohenstaufen > 2
* /db/data/tgrep/Literatur-Hauptmann%2C-Carl.xml: Panspiele > 4
* /db/data/tgrep/Literatur-Hauptmann%2C-Carl.xml: Die goldnen Straßen > 3
* /db/data/tgrep/Literatur-Hebbel%2C-Friedrich.xml: Die Nibelungen > 5
* /db/data/tgrep/Literatur-Immermann%2C-Karl.xml: Alexis > 3
* /db/data/tgrep/Literatur-Metastasio%2C-Pietro.xml: L'isola disabitata > 2
* /db/data/tgrep/Literatur-Scheerbart%2C-Paul.xml: Revolutionäre Theaterbibliothek > 23
* /db/data/tgrep/Literatur-Schiller%2C-Friedrich.xml: Wallenstein > 4
* /db/data/tgrep/Literatur-Schnitzler%2C-Arthur.xml: Marionetten > 3
* /db/data/tgrep/Literatur-Scribe%2C-Eugene.xml: La dame blanche > 2
* /db/data/tgrep/Literatur-Wagner%2C-Richard.xml: Der Ring des Nibelungen > 4

The number at the end of each line shows us how many dramas are contained in each subcorpus. So, Wagner's "Ring of the Nibelungs": check. Etc. etc. But there are still problems. E.g., Hebbel's ["Nibelungs"](https://de.wikipedia.org/wiki/Die_Nibelungen_(Hebbel)), in reality, consist of merely 3 parts. So let's refine our query to leave out all TEI documents that aren't marked as "drama":

{% highlight xquery %}
collection('/db/data/tgrep/')//tei:textClass[not(ancestor::tei:TEI)]/tei:keywords/tei:term[text() = 'drama']/concat(base-uri(), ': ', (ancestor::tei:teiCorpus[1]//tei:fileDesc[1]/tei:titleStmt/tei:title/string())[1], ' >  ', count(ancestor::tei:teiCorpus[1]//tei:TEI[descendant::tei:term/text() = 'drama']))
{% endhighlight %}

* /db/data/tgrep/Literatur-Arnim%2C-Ludwig-Achim-von.xml: Halle und Jerusalem > 2
* /db/data/tgrep/Literatur-Goethe%2C-Johann-Wolfgang-001.xml: Faust. Eine Tragödie > 5
* /db/data/tgrep/Literatur-Grabbe%2C-Christian-Dietrich.xml: Die Hohenstaufen > 2
* /db/data/tgrep/Literatur-Hauptmann%2C-Carl.xml: Panspiele > 4
* /db/data/tgrep/Literatur-Hauptmann%2C-Carl.xml: Die goldnen Straßen > 3
* /db/data/tgrep/Literatur-Hebbel%2C-Friedrich.xml: Die Nibelungen > 3
* /db/data/tgrep/Literatur-Immermann%2C-Karl.xml: Alexis > 3
* /db/data/tgrep/Literatur-Metastasio%2C-Pietro.xml: L'isola disabitata > 2
* /db/data/tgrep/Literatur-Scheerbart%2C-Paul.xml: Revolutionäre Theaterbibliothek > 22
* /db/data/tgrep/Literatur-Schiller%2C-Friedrich.xml: Wallenstein > 4
* /db/data/tgrep/Literatur-Schnitzler%2C-Arthur.xml: Marionetten > 3
* /db/data/tgrep/Literatur-Scribe%2C-Eugene.xml: La dame blanche > 2
* /db/data/tgrep/Literatur-Wagner%2C-Richard.xml: Der Ring des Nibelungen > 4


What do we have here? We received a list with all segmented dramas. Case in point, this one is not for the computer to solve, but, well, for the humanist's eye. Goethe's "Faust", in our repository, consists of [5 files](http://www.textgridrep.de/browse.html?id=textgrid:11d4b.0):

* Zueignung
* Vorspiel auf dem Theater
* Prolog im Himmel
* Faust. Der Tragödie erster Teil
* Faust. Der Tragödie zweiter Teil

We could argue that the whole "Faust" is *one* integral piece. We could argue that Wagner's "Ring of the Nibelung" is *one* piece. But we probably can't declare the same thing for Scheerbart's "Revolutionäre Theaterbibliothek" which consists of 22 pieces, and we probably shouldn't count them as one.

Why this strange segmentation of some of the plays? This has to do with the origin of the TextGrid Repository, the zeno.org project. As we can see [at the zeno.org website](http://www.zeno.org/Literatur/M/Goethe,+Johann+Wolfgang/Dramen/Faust.+Eine+Tragödie), Goethe's Faust is split into 5 parts there when it really should be split into 2 parts only, "Faust, part 1", and "Faust, part 2".

So let's use the human brain and some semesters of studying literature (hehe) and decide what to count as a separate text and what not:

* /db/data/tgrep/Literatur-Arnim%2C-Ludwig-Achim-von.xml: Halle und Jerusalem > 2 (double drama, new amount of plays: 1)
* /db/data/tgrep/Literatur-Goethe%2C-Johann-Wolfgang-001.xml: Faust. Eine Tragödie > 5 (two originary parts, new amount of plays: 2)
* /db/data/tgrep/Literatur-Grabbe%2C-Christian-Dietrich.xml: Die Hohenstaufen > 2 (remains 2)
* /db/data/tgrep/Literatur-Hauptmann%2C-Carl.xml: Panspiele > 4 (no overlaps in personnel, remains 4)
* /db/data/tgrep/Literatur-Hauptmann%2C-Carl.xml: Die goldnen Straßen > 3 (no overlaps in personnel, remains 3)
* /db/data/tgrep/Literatur-Hebbel%2C-Friedrich.xml: Die Nibelungen > 3 (Hebbel himself describes the 3 parts as "one integral tragedy", new amount of plays: 1)
* /db/data/tgrep/Literatur-Immermann%2C-Karl.xml: Alexis > 3 (overlaps in personnel, new amount of plays: 1)
* /db/data/tgrep/Literatur-Metastasio%2C-Pietro.xml: L'isola disabitata > 2 (one of the 2 parts is the Italian original, new amount of plays: 1)
* /db/data/tgrep/Literatur-Scheerbart%2C-Paul.xml: Revolutionäre Theaterbibliothek > 22 (completely several dramas, remains 22)
* /db/data/tgrep/Literatur-Schiller%2C-Friedrich.xml: Wallenstein > 4 (= new amount of plays: 1)
* /db/data/tgrep/Literatur-Schnitzler%2C-Arthur.xml: Marionetten > 3 (no overlaps in personnel, new amount of plays: 3)
* /db/data/tgrep/Literatur-Scribe%2C-Eugene.xml: La dame blanche > 2 (one of the 2 parts is the French original, new amount of plays: 1)
* /db/data/tgrep/Literatur-Wagner%2C-Richard.xml: Der Ring des Nibelungen > 4 (remains 4)

You will notice that some of our decisions are contingent. E.g., there *are* overlaps in personnel in the two parts of Goethe's "Faust". And the two parts of "Faust" *have been* put on stage together. Yet we would still argue that they are two different pieces. Others may think otherwise.

So we have to substract the results of this equation from our 690 found dramas:

`690-((2-1)+(5-2)+(2-2)+(4-4)+(3-3)+(3-1)+(3-1)+(2-1)+(22-22)+(4-1)+(3-3)+(2-1)+(4-4)) = 690–13`

**And we're down to 677 dramas.** We're almost there! But there's another thing we came across while working on the corpus: doublets.

## How to Find Doublets

Due to the specific mapping in the repository every work is assigned to all of its authors which falsely doubles the number of dramas in cases of co-authorship. The full text can be found in only one of those documents and the others just contain the title and a reference (`tei:ref`) to the full text. If a piece has two authors, it has got two TEI headers. So when looking for occurrences of the string "genre" in the TEI element `textClass`, we're counting the drama twice. But altogether, that one's easy-peasy, we just have to substract the redundant item.

But how do we find out how many theatre pieces are counted twice when using our previous query? This is the last step in order to answer our question!

To determine the differences of the documents created by more than one author we have to look at the TEI code. The `<text>` node we find in Kalisch's document is not empty which makes it a bit more complicated:

{% highlight xml %}
<text>
 <body>
  <div type="text" xml:id="tg4.3">
   <milestone unit="sigel" n="Berg-Berlin" xml:id="tg4.3.1"/>
    <head type="h4" xml:id="tg4.3.3">O. F. Berg / David Kalisch</head>
    <head type="h2" xml:id="tg4.3.4">
     <ref cRef="/Literatur/M/Berg, O. F./Drama/Berlin, wie es weint und lacht" xml:id="tg4.3.4.1">Berlin, wie es weint und lacht</ref>
    </head>
    <head type="h4" xml:id="tg4.3.5">Volksstück mit Gesang</head>
    <head type="h4" xml:id="tg4.3.6">in 3 Aufzügen und 11 Bildern</head>
  </div>
 </body>
</text>
{% endhighlight %}

The referenced TEI document contains a `<div>` structure where in the most cases at least a single `div` element has an attribute like `subtype="work:no"` (sounds confusing, but that way it is made sure that single scenes are not marked as separate "works"). So we can execute a query that gives us all the documents lacking the named attribute:

{% highlight xquery %}
for $item in collection('/db/data/tgrep')//tei:TEI
    where $item/tei:teiHeader//tei:keywords/tei:term/string() = 'drama' and not($item//tei:text//tei:div/@subtype="work:no")
    return ($item//tei:title)[1]
{% endhighlight %}

The result is a list of 27 `tei:title` elements:

* <title xmlns="http://www.tei-c.org/ns/1.0">Der gefesselte Proemetheus</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Fidelio</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Die Geisterinsel</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Iphigenie in Aulis</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Medea</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Die Fledermaus</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Die jüngste Walpurgisnacht</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Zueignung</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Vorspiel auf dem Theater</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Prolog im Himmel</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Der Widerspenstigen Zähmung</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Pension Schöller</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Traumulus</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Im weißen Rößl</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Berlin, wie es weint und lacht</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Die Pfandung</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Der Besuch um Mitternacht</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Ablaßkrämer</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Doktor Faustus</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Das Mirakel</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Prolog</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Die Familie Selicke</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Genoveva</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">König Ödipus</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Antigone</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Gespenstersonate</title>
* <title xmlns="http://www.tei-c.org/ns/1.0">Fidelio</title>

The goal of our query was to find out documents, that do not contain the main text. But the very first in the results shows us that we have to refine our query, because we find a different structure in some cases, where no `<div>` element with a specified `subtype="work:no"` was used. To correct our results, we exclude all documents that contain a `<tei:l>` or a `<tei:p>` (because, obviously, then they do contain running text).

{% highlight xquery %}
count(for $item in collection('/db/data/tgrep')//tei:TEI
    where $item/tei:teiHeader//tei:keywords/tei:term/string() = 'drama'
       and not($item//tei:text//tei:div/@subtype="work:no")
       and not($item//tei:text//tei:l)
       and not($item//tei:text//tei:p)
    return $item)
{% endhighlight %}

Ok, let's try to translate this query into a more readable form:

First off, we use a *for loop* like explained before. This seperates the single TEI documents (`//tei:TEI`), that usually start with a TEI node from our whole data set (`collection('/db/data/tgrep')`). We now operate on single documents until the loop finishes. Then we specify a condition for the documents we like to take into focus (where). We ...

* select all documents where the genre information is "drama",
* exclude all documents that contain a tei:div where the attribute subtype has a "work:no" value,
* also exclude every document that contains at least a single tei:l and last not least,
* finally exclude all documents with at least a single paragraph.

For the exclusion, we are aware of the ancestor elements of the node, so we exclude documents only, if we find the `tei:div`, `tei:l` and `tei:p` inside `tei:text`.
Finally, we prepare an output for every document that fits into the schema/matches our pattern: First the title information from the `teiHeader` (`tei:sourceDesc/tei:biblFull/tei:titleStmt/tei:title`) and the author information as well. To get more than one result, one can seperate different outputs with a comma, but the brackets around the term are mandatory. If you forget these engine will leave the loop and ask why no `$item` variable was set for the second expression. So we have to combine both queries inside the brackets.

So, our repository contains 11 doublets. The output tells us that there are eleven items (presumably eleven items that refer to others and doublets for this reason):

* Arno Holz und Oskar Jerschke: Traumulus. Achtes bis zehntes Tausend, Dresden: Carl Reißner, 1909.Author in TG Rep: Jerschke, Oskar [link](http://textgridrep.de/browse.html?id=textgrid:qmsf.0)
* Carl Laufs: Pension Schöller. Nach einer Idee von W. Jacoby, elfte Auflage, Berlin: Eduard Bloch Theaterverlag, [o.J.].Author in TG Rep: Jacoby, Wilhelm [link](http://textgridrep.de/browse.html?id=textgrid:qm9f.0)
* Hermann Goetz: Der Widerspenstigen Zähmung. Komische Oper in vier Akten, nach Shakespeares gleichnamigen Lustspiel frei bearbeitet von Joseph Viktor Widmann, Musik von Hermann Goetz, Zürich, Wien, München: Apollo-Verlag, [ca. 1925].Author in TG Rep: Goetz, Hermann Gustav [link](http://textgridrep.de/browse.html?id=textgrid:nkbw.0)
* Johann Friedrich Reichardt: Die Geisterinsel. Ein Singspiel in drey Akten, in: Friedrich Wilhelm Gotter: Literarischer Nachlass, Gotha: J. Perthes, 1802, S. 419–564.Author in TG Rep: Einsiedel, Friedrich Hildebrand von [link](http://textgridrep.de/browse.html?id=textgrid:mv72.0)
* Johann Strauß: Die Fledermaus. Operette in drei Aufzügen, Text nach H. Meilhac und L. Halévy von C. Haffner und Richard Genée, hg. v. Wilhelm Zentner, Stuttgart: Reclam, 1976.Author in TG Rep: Genée, Richard [link](http://textgridrep.de/browse.html?id=textgrid:n7s2.0)
* Ludwig van Beethoven: Fidelio. Oper in zwei Aufzügen, hg. v. Wilhelm Zentner, Stuttgart: Reclam, 1970.Author in TG Rep: Breuning, Stephan von [link](http://textgridrep.de/browse.html?id=textgrid:krfk.0)
* Ludwig van Beethoven: Fidelio. Oper in zwei Aufzügen, hg. v. Wilhelm Zentner, Stuttgart: Reclam, 1970.Author in TG Rep: Treitschke, Georg Friedrich [link](http://textgridrep.de/browse.html?id=textgrid:wfsf.0)
* Naturalismus_– Dramen. Lyrik. Prosa. Herausgegeben und mit einem Nachwort von Ursula Münchow, Band 1: 1885–1891, Berlin und Weimar: Aufbau, 1970.Author in TG Rep: Schlaf, Johannes [link](http://textgridrep.de/browse.html?id=textgrid:v18n.0)
* O.F. Berg und D[avid] Kalisch: Berlin, wie es weint und lacht. Leipzig: Verlag von Phillipp Reclam jun., [o.J.] [Universal-Bibliothek Nr. 4689].Author in TG Rep: Kalisch, David [link](http://textgridrep.de/browse.html?id=textgrid:qn2n.0)
* Oskar Blumenthal und Gustav Kadelburg: Im weißen Rössl. 16. Auflage, Berlin: Eduard Bloch Verlag, [o.J.].Author in TG Rep: Kadelburg, Gustav [link](http://textgridrep.de/browse.html?id=textgrid:qmt8.0)
* Robert Schumann: Genoveva. Oper in vier Akten nach Tieck und Hebbel, Berlin: Eduard Bloch, [1960].Author in TG Rep: Schumann, Robert Alexander [link](http://textgridrep.de/browse.html?id=textgrid:vkgs.0)

The majority of these texts are opera libretti written by two and one work written by three authors ("Fidelio", that is).

But let's head back to our question and on to the final answer. How many dramas are contained in the TextGrid Rep? For that to answer, we just have to substract these 11 doublets and we end up at: **666 dramas!** A bit diabolic, but, in the end, just a number. (Speaking of which, do you know the story of Route 666 and how it was renamed to Route 491? [It's a fun story, see Wikipedia.](https://en.wikipedia.org/wiki/U.S._Route_491#U.S._Route_666))

A list with all the 666 dramas can be obtained via our GitHub account. Or you can generate it yourself using the following XQuery, where we also added an option in order to prepare this list for a website. You can store this query (Shift+Ctrl+s) for example in the collection `/db/apps/` with the name `tgrep.xql` and call it via [this link](http://localhost:8080/exist/rest/db/apps/tgrep.xql).

{% highlight xquery %}
xquery version "3.0";
declare namespace tei = "http://www.tei-c.org/ns/1.0";
declare option exist:serialize "method=html5 media-type=text/html";
<ol>
{for $item in collection('/db/data/tgrep')//tei:TEI
    where
        $item/tei:teiHeader//tei:keywords/tei:term/string() = 'drama'
        and ($item//tei:text//tei:div/@subtype="work:no"
        or $item//tei:text//tei:l
        or $item//tei:text//tei:p)
    order by ($item//tei:author)[1] || $item//tei:fileDesc[1]/tei:titleStmt/tei:title
    return
    <li>
	    {($item//tei:author)[1]/string() || ': ' || $item//tei:fileDesc[1]/tei:titleStmt/tei:title/string()}
	</li>
}
</ol>
{% endhighlight %}

Please mind that this list still contains 679 texts. We still have to substract the texts that belong to an integral play. As described before, we decided to bundle 5 dramatic pieces that consist of several parts and glued them together in a new XML file:

* Arnim: "Halle und Jerusalem",
* Goethe: "Faust, Teil 1",
* Hebbel: "Nibelungen",
* Immermann: "Alexis",
* Schiller: "Wallenstein".

Plus, we had to delete the two original (non-German) pieces (a French and an Italian one) to get down to 666 pieces. Now our list only contains German-language texts of the genre 'drama'. We uploaded the 666 XML files to our Github [**here**](https://github.com/DLiNa/project/tree/master/data/textgrid-repository-dramas). A list of all the plays can be found [**here** (in a .txt file)](https://github.com/DLiNa/project/blob/master/data/TextGrid-Repository---List-of-all-dramatic-texts.txt).

## Conclusion

Whenever you obtain a corpus on the web, one that you didn't build yourself, you have to deeply look into it to know your way around it. It is by far not obvious to find less texts than TEI documents in a corpus, especially when a prior selection based on metadata should constrain the collection.

You made it. This paragraph concludes this 30.000-character blog post. Tomorrow we will deliver a shorter piece revolving around inconsistent metadata and what you can do about it. Howgh!
