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
Our working corpus is based on the 666 dramas extracted from the TextGrid Repository ([the not-so simple extraction process was described by Frank and Mathias in an earlier post](http://dlina.github.io/A-Not-So-Simple-Question/)). This blog post will describe the criteria for selecting **465 dramas** from said repository to represent our working corpus. The version number **15.07** is referring to 'July 2015' as we're going to present our results at the DH2015 conference on July 2, 2015. Further versions of the DLINA Corpus will receive according versioning numbers. As the imminent reason for needing a reliable corpus with clean data is the upcoming conference in Sydney, it was also very easy to pick a codename for the corpus.

Anyway, in order to build our corpus for Sydney we started with a quick survey and picked out 497 plays that seemed suitable. I.e., we ruled out 169 of the TextGrid plays by following these assumptions:

* Our corpus should be limited to a specific time span: We will start with the German Enlightenment drama focussing on the modernisation of the German drama in the first half of the 18th century, a process associated with the name of [Johann Christoph Gottsched](https://en.wikipedia.org/wiki/Johann_Christoph_Gottsched). It is a well-established academic position that Gottsched's dramatic writings as well as his dramatic theory hallmark a turning point in the history of German drama (see, for example, Rochow 1994, Catholy 1982, Koopmann 1979). Therefore, we ruled out 147 dramas that saw the day of light *before* Gottsched’s *Der sterbende Cato* (printed in 1732).

* We also discarded:
    * foreign-language originals,
    * translations,
    * mere pantomime plays, that is to say, plays that don’t feature `<sp>`eech elements,
    * fragments, i.e., texts that were clearly left unfinished by their author.

While we were editing our data using our very own *zwischenformat* (roughly translatable as "intermediate format", an according blog post will be published shortly) we sorted out another 32 texts for the following reasons:

* if the TEI markup was too defective (missing `<speaker>` elements and such),
* if additional texts turned out to be fragments that had slipped our attention before,
* if the structure of a text proved to be too complicated (the treatment of 11 dramas had to be postponed for this reason).

All in all, our **DLINA Corpus 15.07 (Codename: Sydney)** comprises **465 dramatic texts**, in the shape of 465 XML *zwischenformat* files.

### Bibliography

* Christian Rochow, *Das Drama hohen Stils. Aufklärung und Tragödie in Deutschland (1730–1790)*, Heidelberg 1994 ([DNB](http://d-nb.info/940506319))
* Eckehard Catholy, *Das deutsche Lustspiel. Von der Aufklärung bis zur Romantik*, Stuttgart 1982 ([DNB](http://d-nb.info/820164496))
* Helmut Koopmann, *Drama der Aufklärung. Kommentar zu einer Epoche*, München 1979 ([DNB](http://d-nb.info/790381419))
