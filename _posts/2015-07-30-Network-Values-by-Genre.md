---
layout: post
title: "Network Values by Genre"
author: [peer, frank, mathias, dario]
description: 
headline: 
modified: 2015-07-30
category: 
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
list: false
featured: false
---
As described in [a previous post](/Introducing-Our-Zwischenformat/), our DLINA intermediary format stores structural data extracted from the full-text TEI files of the TextGrid Repository as well as various metadata, including the author's name and date of origin of a play (and its publication and/or premiere date). In addition, the DLINA format also stores specific title information, three in total: the main title of a play, its subtitle (if available) and a genre title (only if a genre can be derived from the official subtitle of a play). To give an example, the first piece of our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/), Gottsched's "Der sterbende Cato" from 1731, looks something like this:

{% highlight xml %}
<header>
 <title>Der sterbende Cato</title>
 <subtitle>Ein Trauerspiel</subtitle>
 <genretitle>Trauerspiel</genretitle>
 [...]
</header>
{% endhighlight %}

As said before, we only inserted a `<genretitle>` if the subtitle of a play contained a definite and largely conventional genre indication. Terms like "dramatische Skizze" (dramatic sketch) or an unspecified indication like "Drama" we did not regard as conventional genres, in the same way as we neglected unconventionally specified genres like "Ein Ammenmärchen in vier Akten" (An Old Wives' Tale in Four Acts) or "Arabische Fantasia in zwei Akten" (Arabian Fantasy in Two Acts).

The resulting set of genre titles included the classic genres "Tragödie" and "Komödie", or, "Trauerspiel" and "Lustspiel", but also the general "Schauspiel", "Posse" or "Oper". These genre titles help us to better describe our corpus. If just talking about the two classical genres, we see that of 465 dramas in our Sydney corpus,

- 101 are marked as tragedy ("Tragödie" or "Trauerspiel") and
- 92 are marked as comedy ("Komödie" or "Lustspiel").

En plus, we were interested in how many of the texts were combined with music of any sort (i.e., "Opern", "Operetten", "Singspiele", "Musikdramen", etc.). For reasons of simplicity, we marked these texts as "Libretti". Not all of these texts bear a corresponding genre indication in their subtitle. Wagner's "Master-Singers of Nuremberg", for example, don't feature a subtitle we could directly use as `<genretitle>`. In these cases we did a little research to identify all libretti. The results is that

- 56 texts from our Sydney corpus are marked as "Libretti".

With this kind of metadata, we could now easily build generic subcorpora and have a differentiated look at the network data by genre. The corresponding median values or averages look like this:

### Table 1: Network Measures, by Genre

|          | N=  | Number of Characters (Median) | Max Degree (Median) | Average Degree (Average) | Density (Average) | Average Path Length (Average) |
|----------|-----|-------------------------------|---------------------|--------------------------|-------------------|-------------------------------|
| Corpus   | 465 | 16                            | 13                  | 9,01                     | 0,59              | 1,46                          |
| Tragedy  | 101 | 19                            | 16                  | 9,57                     | 0,52              | 1,56                          |
| Comedy   | 92  | 14                            | 11                  | 8,61                     | 0,67              | 1,36                          |
| Libretto | 56  | 16                            | 13,5                | 9,09                     | 0,64              | 1,39                          |
| Other    | 216 | 17                            | 14                  | 8,88                     | 0,59              | 1,48                          |

Let's have a look at some corresponding diagrams:

### Fig. 1: Network Size (Median), by Genre

{% include blog-barchart.html id="1" tsv="lit-genre-figs/lit-genre-fig01.tsv" height="75" %}

We can see that comedy peaks, while tragedy troughs. This trend is also confirmed when looking at other values like the network density, only this time comedy values are peaking and tragedy values troughing:

### Fig. 2: Density (Mean), by Genre

{% include blog-barchart.html id="2" tsv="lit-genre-figs/lit-genre-fig02.tsv" height="75" %}

Results for the other values ​​are similar, suggesting that there is an evident connection between the size of a network and the other values. But we still need to further examine this connection, because it isn't as simple as it looks. It can be assumed that typical genre conventions have a strong influence on the values: Like, in tragedies, we often have two (or more) opposing groups of people who don't share the stage too often, and if they do, it is mainly in shape of single representatives. Comedies, on the other hand, have a tendency to make as many characters as possible once more appear on stage, together, at the end, perhaps for the purpose of a wedding (or even mutliple weddings). These genre conventions have a crucial influence on, e.g., the density values (many characters on stage at the same time would make for higher density values, but the density decreases if characters from two antagonising parties hardly ever meet).

Regarding the density values, Figure 2 suggests a proximity between comedy and libretto. This is confirmed if we don't consider the median, but the mean values:

### Fig. 3: Network Size (Mean), by Genre

{% include blog-barchart.html id="3" tsv="lit-genre-figs/lit-genre-fig03.tsv" height="75" %}

The structural similarity of comedy and libretto and their coinciding distance to the tragedy is showing up even if we look at the temporal evolution over two centuries, another simple subdivision of our corpus:

### Table 2: Network Size (Median), by Genre and Century

| Genre    | 18th Century | 19th Century | 20th Century |
|----------|--------------|--------------|--------------|
| Tragedy  | 11,00        | 24,50        | 20,00        |
| Comedy   | 9,00         | 16,50        | 16,00        |
| Libretto | 10,00        | 16,00        | 17,50        |

### Fig. 4: Network Size (Median), by Genre and Century

{% include blog-multiline.html id="5" tsv="lit-genre-figs/lit-genre-fig05-transposed.tsv" label="Genre" tension="0.3" height="70" %}
<!-- {% include blog-multiline.html id="5" tsv="lit-genre-figs/lit-genre-fig05.tsv" label="Genre" tension="0.3" height="65" %} -->

Have a look at the corresponding table plus diagram for the density values:

### Table 3: Density (Mean), by Genre and Century

| Genre    | 18th Century | 19th Century | 20th Century |
|----------|--------------|--------------|--------------|
| Tragedy  | 0,56         | 0,49         | 0,58         |
| Comedy   | 0,71         | 0,59         | 0,75         |
| Libretto | 0,67         | 0,60         | 0,75         |

### Fig. 5: Density (Mean), by Genre and Century

{% include blog-multiline.html id="6" tsv="lit-genre-figs/lit-genre-fig06-transposed.tsv" label="Genre" tension="0.3" height="65" %}

So a closer look at the development over the centuries shows even more clearly the proximity of comedy and libretto and the persistent distance from the tragedy. Let's keep in mind that our corpus only contains texts from 1731 to 1929, therefore, the 18th and the 20th century are only partially covered. Nevertheless, we can recognise some particularities at second glance.

First, it is interesting that the distances regarding the network densities remain fairly constant (Fig. 5), but not regarding network sizes (Fig. 4). Especially in the 18th century, network-size differences between the three genres are not as clear as in the 19th century, whereas differences regarding network densities are even slightly bigger than in the 19th century. This would be further proof that the network size, i.e., the number of characters in a play, is indeed an important factor for all other values, but there is no strict correlation. Because if there was one, the density values of the three genres would have to be very close to each other in the 18th century. Yet this is not the case, which could indicate that the above-mentioned genre conventions are another crucial factor for all network values and shouldn't be underestimated.

Second, we can observe how the tragedy of the 19th century stands out. In other words: when looking at our network data, the 19th century proves to be a time of strong generic differences, at least in regard to the structural data we elevated.

All in all, what we presented in this post are so far mere indications. We will have to look further into our data in order to better understand the evolution of subgenres over time as well as the impact of genre conventions on network measures. We also want to build larger generic subcorpora in the future. For example, it is very tempting to analyse the structure of the corpus of bourgeois tragedies discussed in Cornelia Mönch's dissertation ["Abschrecken oder Mitleiden. Das deutsche bürgerliche Trauerspiel im 18. Jahrhundert. Versuch einer Typologie"](https://books.google.com/books?id=mVXbspJS54kC&printsec=frontcover) (1993). But, as they say, a lot of water will certainly flow down the river Rhine before we get there. We will continue to report in this blog. Stay tuned.

<figure>
  <img src="{{ site.url }}/images/rheinschleife.jpg" alt="Great bow in the Rhine at Boppard. Source: Wikimedia Commons." style="width:56.25rem">
</figure>
<center><small>Great bow in the Rhine at Boppard. Source: <a href="https://commons.wikimedia.org/wiki/File:Boppard_Rheinschleife.jpg">Wikimedia Commons</a>.</small></center>

<!-- ### Fig. 7: Number of Characters (SD), by Genre and Century -->

<!-- {% include blog-multiline.html id="7" tsv="lit-genre-figs/lit-genre-fig07-transposed.tsv" label="Genre" tension="0.3" height="60" %} -->
