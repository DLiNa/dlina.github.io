---
layout: post
title: "The Birth and Death of German Playwrights"
author: [mathias, frank]
description: 
headline: 
modified: 2015-10-22
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
list: false
featured: true
---
"If your metadata is good, it can help you in many ways," mumbled Captain Obvious when we last met, and we couldn't agree more. So let's toy around with some metadata today to get a better impression of what our corpus of roughly half a thousand German-language theatre plays actually contains.

You surely have seen the piece in *Science*, ["A Network Framework of Cultural History"](http://www.sciencemag.org/content/345/6196/558), and the corresponding [lifetime-curve videos](https://www.youtube.com/watch?v=4gIhRkCcD4U). Max Schich et al. set out to visualise "intellectual mobility" based on "spatiotemporal birth and death information (…) of more than 150,000 notable individuals". That's a lot of people, and we wouldn't even dare to compare this little blog post to what they did. But anyway, we dabbled in telling the story of **the birth and death of German playwrights** by using a similar method with a much (like, *much*) smaller set of people – 178 authors altogether who wrote 465 plays published between 1731 and 1929.

The **tl;dr version** of how we did that: Wrote an XQuery script that uses the [GND identifier](http://www.dnb.de/gnd) for each author in our XML files to find our way to corresponding Wikidata objects where we extracted dates and places of birth and death of all the authors contained in our corpus. Generated two KML files and put them into the GeoBrowser – mission accomplished (feel free to zoom in a bit):

<iframe id="geobrowser" src="https://geobrowser.de.dariah.eu/embed/?kml1=https://dlina.github.io/data/geobrowser/lina-birth.kml&kml2=https://dlina.github.io/data/geobrowser/lina-death.kml&currentStatus=mapChanged=Historical+Map+of+1880"></iframe>
<a href="https://geobrowser.de.dariah.eu/embed/?kml1=https://dlina.github.io/data/geobrowser/lina-birth.kml&kml2=https://dlina.github.io/data/geobrowser/lina-death.kml&currentStatus=mapChanged=Historical+Map+of+1880" traget="_blank">view full screen</a>

## Workflow, Bit More Detailed

Our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/) – which was derived from the ["Digitale Bibliothek" corpus](https://textgrid.de/digitale-bibliothek) within the TextGrid Repository – holds **465 dramatic pieces from 1731 to 1929**, written by **178 authors** altogether. By plotting the places of birth and death of all of them onto a map we would probably find out if our corpus was balanced or if there were any (regional) biases we weren't aware of.

All the documents in our repository contain authorship information, including GND identifiers. Their values are stored in an XML attribute (`key`) as follows ([for legacy reasons](http://www.dnb.de/EN/gnd), the value starts with `pnd`, not `GND`):

{% highlight xml %}
<author key="pnd:118540238">Goethe, Johann Wolfgang von</author>
{% endhighlight %}

We had to update our schema to insert this attribute into our [intermediary format](/Introducing-Our-Zwischenformat/) ([here's the commit](https://github.com/dlina/project/commit/4811e0cd6bb81b0230a7afbd0ecfc34bc7f4b83e)) to fully benefit from the beauty of linked open data (LOD). If you read German, there's a nice chapter on the topic in the [TextGrid compendium](http://www.univerlag.uni-goettingen.de/bitstream/handle/3/Neuroth_TextGrid/TextGrid_book.pdf) published last year (pp. 91, "Metadaten, LOD und der Mehrwert standardisierter und vernetzter Daten", authored by [Martin de la Iglesia](https://twitter.com/delaiglesia), Nicolas Moretto and Max Brodhun).

The identifier stored in `@key` is related to an entry in the Integrated Authority File (which is the translation for GND, Gemeinsame NormDatei) hosted by the German National Library. They provide an HTML view of the data, but you can also directly download the RDF and other representations. Let's have a look at the data set on Goethe at [http://d-nb.info/gnd/118540238](http://d-nb.info/gnd/118540238). You'll find basic info on him: aliases, occupation, dates and places of birth and death. In most cases, given places have an own GND identifier contained in the RDF file to each personal record. In the case of Goethe we're pointed to his birthplace Frankfurt am Main like this:

{% highlight xml %}
<gndo:placeOfBirth>
  <rdf:Description rdf:about="http://d-nb.info/gnd/4018118-2">
    <gndo:preferredNameForThePlaceOrGeographicName>Frankfurt am Main</gndo:preferredNameForThePlaceOrGeographicName>
  </rdf:Description>
</gndo:placeOfBirth>
{% endhighlight %}

Eventually, the Frankfurt am Main record gives away the geographical coordinates of the city:

{% highlight xml %}
<geo:hasGeometry rdf:parseType="Resource">
<rdf:type rdf:resource="http://www.opengis.net/ont/sf#Point" />
<geo:asWKT rdf:datatype="http://www.opengis.net/ont/geosparql#wktLiteral">Point ( +008.684166 +050.115277 )</geo:asWKT>
</geo:hasGeometry>
{% endhighlight %}

We just had to trim the string to `+008.684166 +050.115277` and hand it over to a KML file (which can be interpreted by the majority of geo-visualisation tools) like this:

{% highlight xml %}
<kml>
  <Placemark>
    <address>Frankfurt am Main</address>
    <description>Place of Birth; 28 August 1749</description>
    <name>Gūta, Yūhān Wulfgāng fun</name>
    <Point>
      <coordinates>+008.684166 +050.115277</coordinates>
    </Point>
    <TimeStamp>
        <when>1749</when>
    </TimeStamp>
  </Placemark>
<kml>
{% endhighlight %}

Easy enough, we just had to repeat this for the other authors to fill up our KML file and we'd be all set, we thought.

## Wikidata Comes Into Play

But there was a catch. We only found coordinates for about two thirds of the places. Now, instead of manually adding the missing data, we wanted to try out if *Wikidata* was a good way out of this problem. We are keen followers of Magnus Manske's [Twitter](https://twitter.com/MagnusManske) and [blog](http://magnusmanske.de/wordpress/) and he's undertaking great efforts to enhance Wikidata, so our expectations were high.

There's probably a more elegant way to do this, but we went in brute force, extracted the Wikipedia link from the RDF representations over at the GND, fetched the Wikipedia page, extracted the Q identifier from it and went over to the corresponding Wikidata record. Luckily, there's a simple way to obtain the RDF representation of a single Wikidata object, [something that Magnus helped us find out via Twitter](https://twitter.com/umblaetterer/status/656836110107213824) (thanks again!).

Once we could directly examine the XML/RDF representation it was dead easy to get hold of all the geographical coordinates. We put the two resulting KML files on our GitHub:

* https://dlina.github.io/data/geobrowser/lina-birth.kml
* https://dlina.github.io/data/geobrowser/lina-death.kml

## Pushing Our Data Into the GeoBrowser

Now we could finally feed the files into the GeoBrowser, our spatio-temporal visualisation playground of choice (after years in beta, [it finally went 1.0 just this month](http://dhd-blog.org/?p=5705)). GeoBrowser supports both CSV and KML files. There is a pretty nice datasheet editor with autofill of coordinates based on the [Getty Thesaurus of Geographic Names](https://en.wikipedia.org/wiki/Getty_Thesaurus_of_Geographic_Names) for those who want to copy/paste lists of place names. You can also spice up your KML files with HTML elements and link back to your edition or to wherever you like. And btw, if you want to feed the GeoBrowser directly from your own server, just [ask the developers](https://wiki.de.dariah.eu/display/publicde/Geo-Browser+FAQ#Geo-BrowserFAQ-WarumkannichunterLoadDatakeineKML,KMZundCSV-Dateien%C3%BCberKML/KMZ/CSVFileURLeinbinden?) to add your domain to the whitelist.

You already viewed the result and thus the story of the birth and death of (some) German playwrights in the 18th, 19th and 20th century in the iframe above.

# Analysis

As with most visualisations in the Humanities, this one needs a bit of explanation. First off, orange circles indicate places of birth, purple circles indicate places of death. As background map we chose the 1880 one. Bearing in mind that our corpus covers texts from ca. 1730 to 1930, you can also change the layout to a 1783, 1815, 1914 or 1920 map up in the GeoBrowser interface.

Now what is it we can see there? Feel free to zoom in and out as you please. One first impression is that our corpus is pretty well-balanced since there is no regional bias, i.e., no over-representation of authors from specific regions (like, no emphasis on Hessian, or Swabian, or Saxon, or East Prussian writers, etc., plus we've got a fair handful of Swiss and Austrian writers, too).

The biggest bubbles surround Berlin (11 births, 15 deaths) and Vienna (13 births, 20 deaths), the two metropolises of the Holy Roman Empire (and later the German and Austro-Hungarian Empires). But again, the two do not dominate the whole picture. So the well-balancedness is something we can state, even if we know that birth and death places are just basic metadata not saying anything about where the authors spent the most part of their lives.

## Some Geospatial Peculiarities

Let's take a look at **geospatial extremities** here. Of course, we cannot say anything about German-language literature *in general*, just about the 178 authors whose works are contained in our corpus of 465 German dramas. The outmost places are, clockwise:

| Direction | Playwright            | Place                       |
|-----------|-----------------------|-----------------------------|
| N         | Henry von Heiseler    | born 1751 in St. Petersburg |
| E         | J.M.R. Lenz           | died 1792 in Moscow         |
| S         | Ernst von Wildenbruch | born 1845 in Beirut         |
| W         | Christlob Mylius      | died 1752 in London         |

Lenz and Mylius surely add behavioural and artistic extremism to their geographical one (btw, there are some nice passages on Mylius in Hugh Barr Nisbet's 2008 biography on Lessing, [start reading here, pp. 51](https://books.google.de/books?id=hcyc5ZA5KQYC&pg=PA51)). Oh, and let's not forget Heinrich Heine being the westward runner-up having died in Paris in 1856.

Another thing you can see in the visualisation is that some German-language authors preferred to die in Italy:

| Author                  | Time and place           |
|-------------------------|--------------------------|
| Maler Müller            | 1825 in Rome             |
| August von Platen       | 1835 in Syracuse, Sicily |
| Friedrich Wilhelm Riese | 1879 in Naples           |
| Richard Wagner          | 1883 in Venice           |
| Otto Erich Hartleben    | 1905 in Salò             |

# Some More Notes on the Balancedness of Our Corpus

In addition to the regional well-balancedness of the corpus, there is also a temporal one, if we might say so. Have a look at the time-bar diagram right underneath the map (you can use the pull-down menus to change the scale). The first author appearing on the time bar, born in 1697, is Caroline Neuber. The first one to die is Johann Elias Schlegel, in 1749. Our youngest author is Hans Kaltneker, born in 1895. The author who lived the longest is Johannes Schlaf who died in 1941. The reason for him being the most recent author are copyright issues, of course (German copyright expires 70 years after the author's death).

# Obstacles

Some of the minor issues we encountered on our way were the usual amounts of strange (unrelatable) values and nonexistent data, like missing Wikipedia entries or missing properties on Wikidata (they were not many and we fixed them while we went along, i.e., two playwrights finally got their Wikipedia aticle, and Wikidata was filled with some new properties).

While building our bridge from the GND entries to the corresponding Wikipedia articles, we found an accordant relation in the RDF file – good. Yet it turned out not every RDF file contains something like

{% highlight xml %}
<foaf:page rdf:resource="http://de.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe"/>
{% endhighlight %}

Instead, the HTML presentation of the data contains a link to Wikipedia, automatically generated by help of a [BEACON file](https://de.wikipedia.org/wiki/Wikipedia:BEACON). So we had to parse the entire webpage. If we had encountered an XHTML page we could have made use of the `doc()` function. Alas, the German National Library uses redirects (not supported by the `doc()` function) rather than URL rewriting (supported by the `doc()` function), so we had to let the EXPath HTTP client grab the page.

The case of [Karl Haffner](https://de.wikipedia.org/wiki/Karl_Haffner_(Dramatiker)) was a tad more complicated. The [RDF file](http://d-nb.info/gnd/120430231/about/lds) did contain a link to Wikipedia, but it nowadays leads to a disambiguation page where we obviously wouldn't find the corresponding Wikidata object. So we had to add an exception (just this one) to our crawler.

One last thing, in our initial data set we found an author who died in 1952, undercutting the 70-year copyright rule. A very early adaptor in terms of open-source publishing, we thought. 😉 But the Wilhelm Schäfer [(pnd:118794868)](http://d-nb.info/gnd/118794868) referenced in our source was not the author who should be referenced for writing *[Faustine, der weibliche Faust](https://www.textgridrep.de/browse.html?id=textgrid:trwv.0)*. So we [corrected the data](https://github.com/dlina/project/commit/da414793101e9187d53cb4b04feb57062adb7121) and pointed to the real Wilhelm Schaefer [(pnd:117099309)](http://d-nb.info/gnd/117099309) instead. Same happened with one of Arno Schmidt's favourite authors, Friedrich de la Motte Fouqué, who was mistaken with his grandson ([correcting commit here](https://github.com/dlina/project/commit/304c26aa30cdbad0aa0f71def6a11be814ea079e)). When we started, we took over the wrong PNDs from the TextGrid Repository, and things can go wrong any time, sure, especially when you (have to) apply automated tagging. In this case, we only found two wrong identifiers, but just imagine a slightly bigger project where you cannot double-check everything anymore, a wee bit of a nightmare for LOD.

# Conclusion

So what did we achieve here? Nothing much, really. This is just one possible response to the imperative: **"Know your data!"** By automatically visualising the birth and death places of the playwrights that build our corpus of dramatic texts, we added a useful layer of description. And this will help us to classify any new results that our research on the corpus might yield in the future.

(End of transmission.)
