---
layout: post
title: "Network Values by Genre"
author: [peer, frank, mathias, dario]
description: 
headline: 
modified: 2015-06-25
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

### Table 01: Network Measures, divided by genre

|          | N=  | Number of Characters (Median) | Max Degree (Median) | Average Degree (Average) | Density (Average) | Average Path Length (Average) |
|----------|-----|-------------------------------|---------------------|--------------------------|-------------------|-------------------------------|
| Corpus   | 465 | 16                            | 13                  | 9,01                     | 0,59              | 1,46                          |
| Tragedy  | 101 | 19                            | 16                  | 9,57                     | 0,52              | 1,56                          |
| Comedy   | 92  | 14                            | 11                  | 8,61                     | 0,67              | 1,36                          |
| Libretto | 56  | 16                            | 13,5                | 9,09                     | 0,64              | 1,39                          |
| Other    | 216 | 17                            | 14                  | 8,88                     | 0,59              | 1,48                          | 

Let's have a look at some corresponding diagrams:

### Fig. 01: Chart Number of characters (Median), divided by genre

{% include blog-barchart.html id="1" tsv="lit-genre-figs/lit-genre-fig01.tsv" %}

...

