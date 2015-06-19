---
layout: post
title: "Introducing DLINA Corpus 15.07 (Codename: Sydney)"
author: [frank, peer]
description: 
headline: 
modified: 2015-06-20
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: true
---
When we started to build our working corpus, we started with the 666 dramas extracted from the TextGrid Repository ([the not-so simple extraction process was described by Frank and Mathias in an earlier post](http://dlina.github.io/A-Not-So-Simple-Question/)). This blog post will describe the criteria for selecting **465 dramas** from the TextGrid Rep to represent our working corpus.

We started with a quick survey and picked out 497 plays that seemed suitable for our Sydney corpus. I.e., we ruled out 169 of the plays by following these assumptions:

* Our corpus should be limited to a special time span: We will start with the German Enlightenment drama and focus on the modernisation of the drama in the first hald of the 18th century, a process associated with the name of Gottsched. It is a well established academic position that the dramatic writings as well as the dramatic theory of Johann Christoph Gottsched hallmark a turning point in the history of German drama (see, for example, Rochow 1994; Catholy 1982; Koopmann 1979). Accordingly, we have ruled out all dramas that saw the day of light *before* Gottsched’s *Der sterbende Cato* (printed in 1732). That way, we discarded 147 dramas.

* We also discarded:
    * foreign-language originals,
    * translations,
    * mere pantomime plays, that is to say, plays that don’t feature <sp>eech elements,
    * fragments, that is to say, texts that were clearly left unfinished by the author.

While we were editing our data using our very own *zwischenformat* (roughly translatable as "intermediate format", an according blog post will be published shortly) we sorted out another 32 texts for the following reasons:

* if the TEI markup was too defective (missing `<speaker>` elements and such),
* more texts that turned out to be fragments and had slipped our attention before,
* a couple of texts (11, altogether) that proved to be too complicated so we had to postpone their treatment.

All in all, our DLINA Corpus 15.07 (Codename: Sydney) comprises 465 dramatic texts in shape of 465 XML *zwischenformat* files.

## Bibliography

* Christian Rochow, *Das Drama hohen Stils. Aufklärung und Tragödie in Deutschland (1730–1790)*, Heidelberg 1994 ([DNB]())
* Eckehard Catholy, *Das deutsche Lustspiel von der Aufklärung bis zur Romantik*, Stuttgart 1982 ([DNB]())
* Helmut Koopmann, *Drama der Aufklärung. Kommentar zu einer Epoche*, München 1979 ([DNB]())
