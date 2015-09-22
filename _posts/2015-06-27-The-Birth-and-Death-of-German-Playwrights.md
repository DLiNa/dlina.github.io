---
layout: post
title: "The Birth and Death of German Playwrights"
author: [mathias, frank]
description: 
headline: 
modified: 2015-09-23
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
list: false
featured: false
---
Why not toy around with some metadata today?

Our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/) – which was derived from the ["Digitale Bibliothek" corpus](https://textgrid.de/digitale-bibliothek) within the TextGrid Repository – holds 465 dramatic pieces from 1731 to 1929, written by xxx authors altogether. If we would plot the places of birth and death of all the authors on a map, we would probably get an interesting result. And that is what we did. As spatio-temporal visualisation engine we used the GeoBrowser:

http://geobrowser.de.dariah.eu/beta6/?csv1=http://geobrowser.de.dariah.eu/storage/249551&csv2=http://geobrowser.de.dariah.eu/storage/249502&currentStatus=mapChanged=Historical+Map+of+1880

As with most visualisations in the Humanities, this one needs a bit of explanation. First off, orange circles indicate places of birth, purple circles indicate places of death. As background map we chose the 1880 one. Bearing in mind that our corpus covers texts from 1730 to 1930, you can also choose map layouts from 1783, 1815, 1914 and 1920 in the GeoBrowser interface.

Now what is it we can see there? One first impression is that our corpus is pretty well-balanced since there is no over-representation of authors from specific regions (like, no emphasis on Hessian, or Swabian, or Saxon, or East Prussian writers, etc.). The biggest bubbles surround Berlin (11 births, 15 deaths) and Vienna (13 births, 20 deaths), the two metropolises of the Holy Roman Empire (and later the German and Austro-Hungarian Empires). But again, the two do not dominate the whole picture. So the well-balancedness is something we can state, even if we know that birth and death places are just basic metadata not saying *anything* about where the authors spent the most part of their lifes.

## Geospatial Peculiarities

Let's take a look at geospatial extremities here. Of course, we cannot say anything about German-language literature *in general*, just about the authors whose works are contained in our corpus of 465 German dramas. The outmost places are, clockwise:

| Direction | Playwright            | Place                 |
|-----------|-----------------------|-----------------------|
| N         | J.M.R. Lenz           | born 1751 in Cesvaine |
| E         | J.M.R. Lenz           | died 1792 in Moscow   |
| S         | Ernst von Wildenbruch | born 1845 in Beirut   |
| W         | Heinrich Heine        | died 1856 in Paris    |

Another thing you can see in the visualisation is that some German-language authors liked to die in Italy:

| Author                  | Time and place           |
|-------------------------|--------------------------|
| Maler Müller            | 1825 in Rome             |
| August von Platen       | 1835 in Syracuse, Sicily |
| Friedrich Wilhelm Riese | 1879 in Naples           |
| Richard Wagner          | 1883 in Venice           |

Last not least, let's have a quick look at our visualisation method. The author information within the TextGrid Repository also feature PND numbers, so it's easy to draw all kinds of biographical metadata from other sources automatically. The PND info was missing for only 4 authors, namely

* Wilhelm Schäfer
* Philipp Hafner
* Friedrich Wilhelm Riese, and, funny enough:
* Johann Wolfgang von Goethe

We had to add these four manually. 

Now we wanted to drag the PND info into our DLINA-format XML files. First, we updated the corresponding schema (here is [the commit](https://github.com/dlina/project/commit/4811e0cd6bb81b0230a7afbd0ecfc34bc7f4b83e)). Then, we wrote the PND info into all the DLINA files. See for example Goethe's *[Faust I](https://github.com/dlina/project/blob/master/data/zwischenformat/1808-Goethe_Johann_Wolfgang-Faust._Der_Tragödie_erster_Teil-lina.xml)*, which now contains this additional line:

{% highlight xml %}
<author key="pnd:118540238">Goethe, Johann Wolfgang von</author>
{% endhighlight %}

With all the PND data assembled, ...

(to be continued)





