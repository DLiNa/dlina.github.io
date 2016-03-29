---
layout: post
title: "\"Distant Reading Showcase\": Designing Our DHd2016 Conference Poster"
author: frank
description: 
headline: 
modified: 2016-03-29
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
list: false
featured: true
---
Roughly two weeks ago, we attended the annual Digital Humanities conference of the German-speaking countries ([DHd2016](http://www.dhd2016.de/)), this time around taking place at the University of Leipzig. We delivered two papers (more on them later) and a poster. And were really excited [to be awarded the price for the best poster](http://www.dig-hum.de/gewinner-des-posterawards-2016) out of 78 poster submissions ([listed in this PDF](http://dhd2016.de/sites/default/files/dhd2016/files/PosterAward_Leipzig_2016.pdf)). Here I will try to quickly explain what we tried to do when creating our poster. First and foremost, *this* is the poster we're talking about, its full title goes as follows: "Distant-Reading-Showcase: 200 Years of German Drama History at a Glance".

<figure>
  <img src="{{ site.url }}/images/distant-reading-showcase-poster-dhd2016-leipzig-900px.jpg" alt="Distant Reading Showcase, poster fore DHd2016, 900px version" style="width:900px; border-width:1px;">
</figure>

A full-res version can be downloaded **[from Figshare](https://dx.doi.org/10.6084/m9.figshare.3101203.v1)** (PDF; 28.88 MB).

What we set out to do with this poster was to produce a data-driven showcase for what can be regarded *distant reading*. We have a working definition of 'distant reading' that differs from the one that Franco Moretti is using since he first coined the term in 2000. Just recently, Peer and I gave a talk on the matter, last November in Vienna, at [a workshop dedicated to "Distant Reading and Discourse Analysis"](http://www.iwk.ac.at/events/distant-reading-und-diskursanalyse). (Said talk will appear shortly, just finished the final editing.) Just two aspects, Moretti never talks about programming or code and neither describes nor provides his working corpus so that anybody could reproduce his findings, two things we consider essential and tried to address throughout the course of the DLINA project ([see our older postings](/recent/)). 'Data-driven' means that we wanted the computer to generate the better part of the poster, a job done by our tool **[dramavis](https://github.com/lehkost/dramavis)** which was revamped and rewritten from scratch just weeks before the conference (current version is v0.2).

In order to be a convincing "Distant Reading Showcase" our poster should really *show* visualised data that could actually *be read* by viewers. The 465 character networks showing German-language dramas written/published between 1730 and 1930 are sorted chronologically, and one thing people should be able to see is when German authors started to read Shakespeare. All of a sudden  in the 1770s, they start to build character networks far bigger than the ones before: Goethe's play ["Götz von Berlichingen"](https://en.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen_(Goethe)) is one of the first that, instead of only 8 or 12 or 16 characters, started to let more than 70 characters appear on stage. You can witness this explosion in the 3rd row from above, 3rd column from the right. There are other things you can actually recognise in the poster, just take the network built from Schnitzler's "Der Reigen" (["La Ronde"](https://en.wikipedia.org/wiki/La_Ronde_(play))), which describes a circle in correspondence with the symptomatic course of the play (6th line from below, 7th column from the right; see also [Gerrit Imsieke's tweet on the matter](https://twitter.com/gimsieke/status/707855735070322688)).

At some point (when pottering about with Illustrator trying to open and convert a 20+ MB SVG) we had the idea that next time we should aim at generating the entire poster as script-driven SVG. But this time a little bit of extra RAM (summing up to 32 GB) helped us undertake the finishing steps using InDesign to properly fill the rest of the poster with descriptive info and some additional stuff, like, the two diagrams in the lower left of the sidebar already show further parts of our research, one of them the number of dramas with 'small world' characteristics, something [we will also talk about at the DH2016 in Krakow, in July](https://www.conftool.pro/dh2016/index.php?page=browseSessions&form_session=42).

To add a bit of suspense, we arrived in Leipzig with a still unfinished poster. A tiny little night shift at [Café Telegraph](http://www.cafe-telegraph.de/) settled things and on Wednesday, the day before the presentation, we printed the actual poster on glossy paper in [A0 format](https://en.wikipedia.org/wiki/ISO_216#A_series) at the local print shop [*sedruck*](https://www.sedruck-leipzig.de/), their store at Beethovenstraße 23. The result was amazing, one of the best A0 printing experiences we had so far.

## Some Criticism

It was [keynote speaker](http://www.dhd2016.de/Abschluss) Daniel Keim himself who uttered some criticism when discussing the poster with us. And we couldn't agree more. Spring embedders have "an undeniable aesthetic appeal, [...] yet a random layout is nearly always the default" ([source](http://gdea.informatik.uni-koeln.de/1327/)). One side effect of this is that graphs always look a tad different when generating them anew. Thus, similar graphs don't always look similar. This is a mere graph-visualisation problem and not too relevant for the actual research we're conducting with the network measures we calculate with our *dramavis* tool. But feel free to give us a hint on how to normalise graphs generated with spring-embedding algorithms.

## Closing Words

Albeit the usual time pressure, it was great fun to plan, design and discuss our poster and to face some real competition. A big shout-out to our fellow winners who ranked 2nd (["Digitales Publizieren. Bedingungen – Optionen – Empfehlungen"](https://twitter.com/cutuchiqueno/status/707839351720419328)) and 3rd (["Das Tool LAKomp und seine Anwendung auf Texte nichtstandardisierter Sprachstufen"](https://twitter.com/ARockenberger/status/707584563447513088)). Right after the ceremony, we enjoyed a nice little dinner with the runners-up and some other friends at the dimly lit restaurant located in the [Alte Nikolaischule building](https://de.wikipedia.org/wiki/Alte_Nikolaischule_(Leipzig)) of which there is a twitpic [here](https://twitter.com/peertrilcke/status/707997860386750464).

See y'all next year at the [DHd2017 conference in Berne, CH](http://www.dig-hum.de/dhd-2017).
