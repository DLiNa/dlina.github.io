---
layout: post
title: "Network Values by Genre"
author: [peer, frank, mathias, dario]
description: 
headline: 
modified: 2015-07-29
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

The resulting set of genre titles included the classic genres "Tragödie" and "Komödie", or, "Trauerspiel" und "Lustspiel", but also the general "Schauspiel", "Posse" or "Oper". These genre titles help us to better describe our corpus. If just talking about the two classical genres, we see that of 465 dramas in our Sydney corpus,

- 101 are marked as tragedy ("Tragödie" or "Trauerspiel") and
- 92 are marked as comedy ("Komödie" or "Lustspiel").

En plus, we were interested in how many of the texts were combined with music of any sort (i.e., "Opern", "Operetten", "Singspiele", "Musikdramen", etc.). For reasons of simplicity, we marked these texts as "Libretti". Not all of these texts bear a corresponding genre indication in their subtitle. Wagner's "Master-Singers of Nuremberg", for example, don't feature a subtitle we could directly use as `<genretitlte>`. In these cases we did a little research to identify all libretti. The results is that

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

...

### Fig. 2: Density (Average), by Genre

{% include blog-barchart.html id="2" tsv="lit-genre-figs/lit-genre-fig02.tsv" height="75" %}

...

### Fig. 3: Number of Characters (SD), by Genre

{% include blog-barchart.html id="3" tsv="lit-genre-figs/lit-genre-fig03.tsv" height="75" %}

...

### Fig. 4: Chart Density (SD), by Genre

{% include blog-barchart.html id="4" tsv="lit-genre-figs/lit-genre-fig04.tsv" height="75" %}

...

### Table 2: Number of Characters (Median), by Genre and Century

| Genre    | 18th Century | 19th Century | 20th Century |
|----------|--------------|--------------|--------------|
| Tragedy  | 11,00        | 24,50        | 20,00        |
| Comedy   | 9,00         | 16,50        | 16,00        |
| Libretto | 10,00        | 16,00        | 17,50        |

### Fig. 5: Number of Characters (Median), by Genre and Century

{% include blog-multiline.html id="5" tsv="lit-genre-figs/lit-genre-fig05-transposed.tsv" label="Genre" tension="0.3" height="70" %}
{% include blog-multiline.html id="5" tsv="lit-genre-figs/lit-genre-fig05.tsv" label="Genre" tension="0.3" height="65" %}

Have a look at the corresponding table plus diagram for the density values:

### Table 3: Density (Average), by Genre and Century

| Genre    | 18th Century | 19th Century | 20th Century |
|----------|--------------|--------------|--------------|
| Tragedy  | 0,56         | 0,49         | 0,58         |
| Comedy   | 0,71         | 0,59         | 0,75         |
| Libretto | 0,67         | 0,60         | 0,75         |

### Fig. 6: Density (Average), by Genre and Century

{% include blog-multiline.html id="6" tsv="lit-genre-figs/lit-genre-fig06-transposed.tsv" label="Genre" tension="0.3" height="65" %}

...

### Fig. 7: Number of Characters (SD), by Genre and Century

{% include blog-multiline.html id="7" tsv="lit-genre-figs/lit-genre-fig07-transposed.tsv" label="Genre" tension="0.3" height="60" %}
