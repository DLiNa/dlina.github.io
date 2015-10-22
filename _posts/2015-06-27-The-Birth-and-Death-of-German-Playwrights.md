---
layout: post
title: "The Birth and Death of German Playwrights"
author: [mathias, frank]
description: 
headline: 
modified: 2015-09-30
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

Our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/) – which was derived from the ["Digitale Bibliothek" corpus](https://textgrid.de/digitale-bibliothek) within the TextGrid Repository – holds 465 dramatic pieces from 1731 to 1929, written by xxx authors altogether. If we would plot the places of birth and death of all the authors on a map, we would probably get an interesting result. And that is what we did.

All the documents in our repository contain informations about the authors and additional to the names we find so called pnd identificators. These are stored in an xml attribute value called key like the following.
{% highlight xml %}
<author key="pnd:118540238">Goethe, Johann Wolfgang von</author>
{% endhighlight %}
During the last weeks we updateted our schema to insert this attribute in our [Zwischenformat](/Introducing-Our-Zwischenformat/), see the corresponding [commit](https://github.com/dlina/project/commit/4811e0cd6bb81b0230a7afbd0ecfc34bc7f4b83e) and irrespective of an internet connection that is all we need to start collecting some additional data - so called [Linked Open Data (LOD)](http://www.univerlag.uni-goettingen.de/bitstream/handle/3/Neuroth_TextGrid/TextGrid_book.pdf) (S. 91ff).
This number we find in `@key` is related to an entry in the authority file "Gemeinsame Normdatei" (GND) at the German National Library. They provide an html view as well as RDF versions of the data. Go ahead by adding the number to the URL [http://d-nb.info/gnd/](http://d-nb.info/gnd/118540238). There are many informations about the person: alias names, the lifespan, professions as well as geographic relations that contians place of birth and place of death in the most cases. These geographic relations presented as place names in the html versions but the RDF data set contains a GND id per place name as well. So we have to go deeper in this database to retreive coordinates. For example we follow the link to the GND above, we can download the RDF file. There we find the place of birth and an information where to get more data about this place:
{% highlight xml %}
<gndo:placeOfBirth>
  <rdf:Description rdf:about="http://d-nb.info/gnd/4018118-2">
    <gndo:preferredNameForThePlaceOrGeographicName>Frankfurt am Main</gndo:preferredNameForThePlaceOrGeographicName>
  </rdf:Description>
</gndo:placeOfBirth>
{% endhighlight %}
and finally in the file about "Frankfurt am Main" there are the coordinates
{% highlight xml %}
<geo:hasGeometry rdf:parseType="Resource">
<rdf:type rdf:resource="http://www.opengis.net/ont/sf#Point" />
<geo:asWKT rdf:datatype="http://www.opengis.net/ont/geosparql#wktLiteral">Point ( +008.684166 +050.115277 )</geo:asWKT>
</geo:hasGeometry>
{% endhighlight %}
and we just have to trim the string here to `+008.684166 +050.115277` and pass this over to a new KML file. The Keyhole Markup Language is a very common format based on XML.

As spatio-temporal visualisation playground we used the GeoBrowser which supports KML as welll as CSV files. There is also a pretty nice datasheet editor (with autofill of coordinates) for those who want to copy/paste lists of place names. You can also prepare the KML file with some HTML elements and link back to your edition or whereever you like.

<iframe id="geobrowser" src="https://geobrowser.de.dariah.eu/embed/?kml1=https://dlina.github.io/data/geobrowser/lina-birth.kml&kml2=https://dlina.github.io/data/geobrowser/lina-death.kml&currentStatus=mapChanged=Contemporary+Map+%282010%29"></iframe>

As with most visualisations in the Humanities, this one needs a bit of explanation. First off, orange circles indicate places of birth, purple circles indicate places of death. As background map we chose the 1880 one. Bearing in mind that our corpus covers texts from 1730 to 1930, you can also choose map layouts from 1783, 1815, 1914 and 1920 in the GeoBrowser interface.

Now what is it we can see there? One first impression is that our corpus is pretty well-balanced since there is no regional bias, i.e., no over-representation of authors from specific regions (like, no emphasis on Hessian, or Swabian, or Saxon, or East Prussian writers, etc., and a fair handful of Swiss and Austrian writers). The biggest bubbles surround Berlin (11 births, 15 deaths) and Vienna (13 births, 20 deaths), the two metropolises of the Holy Roman Empire (and later the German and Austro-Hungarian Empires). But again, the two do not dominate the whole picture. So the well-balancedness is something we can state, even if we know that birth and death places are just basic metadata not saying *anything* about where the authors spent the most part of their lifes.

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

Notes:

Next to the regional well-balancedness of the corpus, there is also a temporal one, if we might say so. Have a look at the time-bar diagram right underneath the map. The first author appearing on the time bar, born in 1697, is Caroline Neuber. She is also the first one to die, in 1760. Our youngest author is Hugo Ball, born in 1886. The author who lived the longest is Johannes Schlaf who died in 1941. The reason for him being the most recent author are copyright issues (German copyright expires 70 years after the author's death).

Conclusion: By automatically visualising the birth and death places of the playwrights that build our corpus of dramatic texts, we added a useful layer of description. (...)

Automatically retreived birth places (when GND data was available):
* http://geobrowser.de.dariah.eu/storage/249551

Automatically retreived death places (when GND data was available):
* http://geobrowser.de.dariah.eu/storage/249502

what we could add:
* backlinks to sources

to check:
* wilhelm schäfer probably wrong, died in 1952 which would exclude his works due to copyright reasons – author of "Faustine" could be this one (lived from 1835 to 1908): http://d-nb.info/gnd/117099309
* so far we got 116 birth dates and 109 death dates, who's missing?
* elegant way to find out how many authors we've got, probably via eXist
