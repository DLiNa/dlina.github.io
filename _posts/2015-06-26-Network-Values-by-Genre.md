---
layout: post
title: "Network Values by Genre"
author: [peer, frank, mathias, dario]
description: 
headline: 
modified: 2015-07-07
category:
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
list: false
featured: false
---
As described in [a previous post](/Introducing-Our-Zwischenformat/), our DLINA *zwischenformat* stores structural data extracted from the full-text TEI files of the TextGrid Repository as well as various metadata, including the author's name and date of origin of a play (and its publication and/or premiere date). In addition, the DLINA format also stores specific title information, three in total: the main title of a play, its subtitle (if available) and a genre title (only if a genre can be derived from the official subtitle of a play). To give an example, the first piece of our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/), Gottsched's "Der sterbende Cato", looks something like this:

{% highlight xml %}
<header>
 <title>Der sterbende Cato</title>
 <subtitle>Ein Trauerspiel</subtitle>  
 <genretitle>Trauerspiel</genretitle>
 [...]
</header>
{% endhighlight %}




...

### Table 1: Network Measures, by Genre

|          | N=  | Number of Characters (Median) | Max Degree (Median) | Average Degree (Average) | Density (Average) | Average Path Length (Average) |
|----------|-----|-------------------------------|---------------------|--------------------------|-------------------|-------------------------------|
| Corpus   | 465 | 16                            | 13                  | 9,01                     | 0,59              | 1,46                          |
| Tragedy  | 101 | 19                            | 16                  | 9,57                     | 0,52              | 1,56                          |
| Comedy   | 92  | 14                            | 11                  | 8,61                     | 0,67              | 1,36                          |
| Libretto | 56  | 16                            | 13,5                | 9,09                     | 0,64              | 1,39                          |
| Other    | 216 | 17                            | 14                  | 8,88                     | 0,59              | 1,48                          | 

Let's have a look at some corresponding diagrams:

### Fig. 1: Number of Characters (Median), by Genre

{% include blog-barchart.html id="1" tsv="lit-genre-figs/lit-genre-fig01.tsv" %}

...

### Fig. 2: Density (Average), by Genre

{% include blog-barchart.html id="2" tsv="lit-genre-figs/lit-genre-fig02.tsv" %}

...

### Fig. 3: Number of Characters (SD), by Genre

{% include blog-barchart.html id="3" tsv="lit-genre-figs/lit-genre-fig03.tsv" %}

...

### Fig. 4: Chart Density (SD), by Genre

{% include blog-barchart.html id="4" tsv="lit-genre-figs/lit-genre-fig04.tsv" %}

...

### Table 2: Number of Characters (Median), by Genre and Century

| Genre    | 18th Century | 19th Century | 20th Century |
|----------|--------------|--------------|--------------|
| Tragedy  | 11,00        | 24,50        | 20,00        |
| Comedy   | 9,00         | 16,50        | 16,00        |
| Libretto | 10,00        | 16,00        | 17,50        |

### Fig. 5: Number of Characters (Median), by Genre and Century

{% include blog-multiline.html id="5" tsv="lit-genre-figs/lit-genre-fig05.tsv" label="Genre" tension="0.3" height="75" %}

Have a look at the corresponding table plus diagram for the density values:

### Table 3: Density (Average), by Genre and Century

| Genre    | 18th Century | 19th Century | 20th Century |
|----------|--------------|--------------|--------------|
| Tragedy  | 0,56         | 0,49         | 0,58         |
| Comedy   | 0,71         | 0,59         | 0,75         |
| Libretto | 0,67         | 0,60         | 0,75         |

### Fig. 6: Density (Average), by Genre and Century

{% include blog-multiline.html id="6" tsv="lit-genre-figs/lit-genre-fig06.tsv" label="Genre" tension="0.3" height="75" %}

...

### Fig. 7: Number of Characters (SD), by Genre and Century

{% include blog-multiline.html id="7" tsv="lit-genre-figs/lit-genre-fig07.tsv" label="Genre" tension="0.3" height="75" %}

{% include blog-multiline.html id="5" tsv="lit-genre-figs/lit-genre-fig05.tsv" label="Genre" tension="0.3" height="75" %}
