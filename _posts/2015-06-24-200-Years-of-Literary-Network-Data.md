---
layout: post
title: "200 Years of Literary Network Data"
author: [peer, frank, mathias, dario]
description: 
headline: 
modified: 2015-06-24
category: 
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: false
---
After putting together [our corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/) and [extracting the structural data](/Introducing-Our-Zwischenformat/) that are of interest to us it's time to run some statistics. Unfortunately (or fortunately perhaps), statistics can say a lot of things and sometimes has the inclination to speak in riddles. We will certainly need a few months to make sense of all the values we collected. But we're prepared to give at least some insights already. All of this is still very much a work in progress, and the statistical analyses quite rudimentary, but more complex calculations are to follow. Some things, though, we can already see in our data, or at least we can put them in front of you and open them for discussion.

We already gave an example of how to ask our data [in our last posting](/The-Biggest-Chatterbox-in-German-Literature/). However, such rankings are only one thing; our main purpose is to compute our data by applying by means of Social Network Analysis (SNA). Again, we will start with very rudimentary data and concentrate on the following five measures:

* **Number of characters**, i.e., the number of actors contained in each drama network; you can also call this the 'size' of each drama network.
* **Maximum degree**, i.e., the highest degree of an actor of a drama network; degree here refers to the sum of scenic co-presences of a character in a drama (that is, how many of the other characters does a character 'meet'/'speak to' throughout the whole play).
* **Average degree**, i.e., the average of all character degrees of a dramatic text.
* **Density**, i.e., the ratio of the number of *actual* co-presences to the number of *potential* co-presences among all the characters of a play; the density value is always somewhere between 0 and 1: if it is 1, then every character speaks to every other character at least once.
* **Average path length**, which is ([quote Wikipedia:](https://en.wikipedia.org/wiki/Network_science#Average_path_length)) "calculated by finding the shortest path between all pairs of nodes, adding them up, and then dividing by the total number of pairs. This shows us, on average, the number of steps it takes to get from one member of the network to another."

As stated before, these are very basic measures. But let's go ahead and have a look at what these measures tell us about our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/) that includes 465 German-language plays from about 1730 to 1930.

For our Sydney talk, we grouped the dramas by decades. This decision is contingent, of course, and we will also experiment with other periodisations. But for a first look into the data, this approach will fulfill its purpose.

First example, a table referring to the "Number of characters" of a play, revealing the average, median and standard-deviation values:

### Table: Number of characters

| Decade | N  | Average | Median | Standard Deviation |
|--------|----|---------|--------|--------------------|
| 1730   | 5  | 11,6    | 11     | 3,51               |
| 1740   | 18 | 8,33    | 8      | 2,4                |
| 1750   | 10 | 9,2     | 8,5    | 3,58               |
| 1760   | 15 | 11,2    | 10     | 9,65               |
| 1770   | 36 | 13,42   | 12,5   | 11,74              |
| 1780   | 20 | 18,1    | 15,5   | 11,36              |
| 1790   | 20 | 27,1    | 20,5   | 28,42              |
| 1800   | 23 | 27,96   | 15     | 27,26              |
| 1810   | 24 | 32,75   | 23     | 22,62              |
| 1820   | 31 | 27,29   | 25     | 14,24              |
| 1830   | 31 | 39,55   | 25     | 45,32              |
| 1840   | 43 | 19,35   | 17     | 11,09              |
| 1850   | 16 | 21,81   | 17,5   | 13,47              |
| 1860   | 11 | 24,45   | 21     | 18,83              |
| 1870   | 14 | 21,29   | 23     | 6,28               |
| 1880   | 14 | 24,86   | 23     | 12,7               |
| 1890   | 36 | 18,06   | 15     | 13,2               |
| 1900   | 49 | 11,88   | 9      | 8,83               |
| 1910   | 33 | 22,85   | 18     | 17,46              |
| 1920   | 16 | 29,25   | 24,5   | 15,7               |

Let's put the data into some diagrams:

### Fig. 01: Number of characters (Median)

{% include blog-barchart.html id="1" tsv="lit-history-figs/lit-history-fig01.tsv" %}

The standard-deviation values look like this:

### Fig. 02: Number of characters (SD)

{% include blog-barchart.html id="2" tsv="lit-history-figs/lit-history-fig02.tsv" %}

As you can see, there is something going on in our corpus. For example, in the second half of the 18th century, we witness a period of gradual increase in the number of characters that can be brought in connection with the renunciation of classical drama poetics and the beginning reception of Shakespeare. We also recognise a peak in the 1830s, not least due to the success of the historical drama in this period. In the late 19th century, we can observe a significant reduction in the number of characters, probably an effect owed to the naturalistic drama and its recourse to the classical poetics and their idea of the [three unities](https://en.wikipedia.org/wiki/Classical_unities).

At the same time, it is significant how the standard deviation goes up towards the end of the 18th century. This indicates an increased number of different structural styles of drama composition. What we can observe here is a differentiation of dramatic production, in structural terms, away from the uniformity of the 1730s and 1750s. This, however, changes again in the mid-19th century.

We don't want to further discuss these statistical values ​​at this point, especially because we don't want to espouse any monocausal explanations.

Instead, let's throw a glance at some more charts dedicated the other values, i.e., Max Degree, Average Degree, Density and Average Path Length.

### Fig. 03: Max Degree (Median)

{% include blog-barchart.html id="3" tsv="lit-history-figs/lit-history-fig03.tsv" %}

### Fig. 04: Average Degree (Average)

{% include blog-barchart.html id="4" tsv="lit-history-figs/lit-history-fig04.tsv" %}

### Fig. 05: Density (Average)

{% include blog-barchart.html id="5" tsv="lit-history-figs/lit-history-fig05.tsv" %}

### Fig. 06: Average Path Length (Average)

{% include blog-barchart.html id="6" tsv="lit-history-figs/lit-history-fig06.tsv" %}

As stated above, we will evaluate and discuss these results later.

Before closing this post, we want to suggest one more way to analyse our data. We already mentioned that the classification by decades is rather arbitrary. However, there's another option to pursue this idea. Why don't we sort our corpus by already established periodisations of German literature and take it from there? Does our data reproduce established divisions into literary epochs?

This question must be approached with great caution. Established divisions into literary epochs do not just rely on a set of very specific structural elements (like our approach), no, they are, of course, much richer. We are absolutely not able to evaluate whether the known divisons into literary epochs are 'correct' or anything. That sort of thing is not possible with that kind of structural data. But anyhow, we can always check how our data relates to the established division into literary.

For that purpose, we picked two different divisions into epochs. The first was developed in the context of German Structuralism (cf., inter alia, Titzmann 1991a, Titzmann 1991b, Titzmann 2002, Titzmann 2012a, Titzmann 2012b, Wünsch 1991, Wünsch 1998, Wünsch 2007). The other classification was pulled from the timespans of the separate volumes of "Hansers Sozialgeschichte der deutschen Literatur vom 16. Jahrhundert bis in die Gegenwart" (Grimminger 1980-2009).

In the context of German structuralism following epoch classification are discussed (all time spans are give or take, of course):

* 1720–1745: Literatursystem 'Frühaufklärung'
* 1745–1770: Literatursystem 'Empfindsamkeit'
* 1770–1830: Literatursystem 'Goethezeit'
* 1830–1850: Literatursystem 'Biedermeier'
* 1850–1890: Literatursystem 'Realismus'
* 1890–1930: Literatursystem 'Frühe Moderne'

The separate volumes of "Hansers Sozialgeschichte der deutschen Literatur" are divided like this:

* 1680–1789 (Vol. 3)
* 1789–1815 (Vol. 4)
* 1815–1848 (Vol. 5)
* 1848–1890 (Vol. 6)
* 1890–1918 (Vol. 7)
* 1918–1933 (Vol. 8)

So let's see how our network values relate to these periodisations (this time around, we're limiting this venture to the number of characters and network density).

The first four charts are dedicated to the Structuralist periodisation:

### Fig. 07: Number of Characters (Median), time spans according to Structuralist approach

{% include blog-barchart.html id="7" tsv="lit-history-figs/lit-history-fig07.tsv" %}

### Fig. 08: Number of Characters (Standard Deviation), time spans according to Structuralist approach

{% include blog-barchart.html id="8" tsv="lit-history-figs/lit-history-fig08.tsv" %}

### Fig. 09: Density (Average), time spans according to Structuralist approach

{% include blog-barchart.html id="9" tsv="lit-history-figs/lit-history-fig09.tsv" %}

### Fig. 10: Density (Standard Deviation), time spans according to Structuralist approach

{% include blog-barchart.html id="10" tsv="lit-history-figs/lit-history-fig10.tsv" %}

Let's now map our values onto the time spans suggested by the volumes of "Hansers Sozialgeschichte":

### Fig. 11: Number of Characters (Median), time spans according to "Hansers Sozialgeschichte"

{% include blog-barchart.html id="11" tsv="lit-history-figs/lit-history-fig11.tsv" %}

### Fig. 12: Number of Characters (Standard Deviation), time spans according to "Hansers Sozialgeschichte"

{% include blog-barchart.html id="12" tsv="lit-history-figs/lit-history-fig12.tsv" %}

### Fig. 13: Density (Average), time spans according to "Hansers Sozialgeschichte"

{% include blog-barchart.html id="13" tsv="lit-history-figs/lit-history-fig13.tsv" %}

### Fig. 14: Density (Average), time spans according to "Hansers Sozialgeschichte"

{% include blog-barchart.html id="14" tsv="lit-history-figs/lit-history-fig14.tsv" %}

## Disclaimer

All results we're presenting here are initial explorations of our corpus of 465 dramatic pieces and the network data we pulled out of the texts. Their significance is limited. But we do have network data that can be toyed around with, and that is what we are going to do in the course of the next time. We will have to readjust and we will have te recalculate things. On that note, always bear in mind to never trust any statistics you didn't forge yourself.

### Bibliography

* Rolf Grimminger et al., *Hansers Sozialgeschichte der deutschen Literatur vom 16. Jahrhundert bis in die Gegenwart*, München 1980–2009.
* Michael Titzmann (ed.), *Modelle des literarischen Strukturwandels*, Tübingen 1991.
* Michael Titzmann, *Skizze einer integrativen Literaturgeschichte und ihres Ortes in einer Systematik der Literaturwissenschaft*, in: Michael Titzmann (ed.), *Modelle des literarischen Strukturwandels*, Tübingen 1991, 395–438.
* Michael Titzmann, *Epoche und Literatursystem. Ein terminologisch-methodologischer Vorschlag*, in: *Epochen. Mitteilungen des Deutschen Germanistenverbandes* 49.3 (2002), 294–307.
* Michael Titzmann: *Probleme des Epochenbegriffs in der Literaturgeschichtsschreibung*, in: Michael Titzmann, *Anthropologie der Goethezeit. Studien zur Literatur und Wissensgeschichte*, Berlin/Boston 2012, 31–67.
* Michael Titzmann, *"Empfindung" und "Leidenschaft". Strukturen, Kontexte, Transformationen der Affektivität/Emotionalität in der deutschen Literatur in der 2. Hälfte des 18. Jahrhunderts*, in: Michael Titzmann: *Anthropologie der Goethezeit. Studien zur Literatur und Wissensgeschichte*, Berlin/Boston 2012, 333–371.
* Marianne Wünsch, *Vom späten "Realismus" zur "Frühen Moderne". Versuch eines Modells des literarischen Strukturwandels*, in: Michael Titzmann (ed.): *Modelle des literarischen Strukturwandels*, Tübingen 1991, 187–203.
* Marianne Wünsch, *Die Fantastische Literatur der Frühen Moderne (1890–1930). Definition. Denkgeschichtlicher Kontext. Strukturen*, München 1998.
* Marianne Wünsch, *Realismus (1850–1890). Zugänge zu einer literarischen Epoche*, Kiel 2007.

### Test, Test

This is just to test if the TSV/CSV engine works (to be deleted when finished):

{% include blog-barchart.html id="15" tsv="blogpost-genre-fig01.tsv" %}

