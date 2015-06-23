---
layout: post
title: "200 Years of Literary Network Data"
author: [peer, frank, dario]
description: 
headline: 
modified: 2015-07-24
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
* **Density**, i.e., the ratio of the number of *actual* co-presences to the number of *possible* co-presences among all the characters of a play; the density value is always somewhere between 0 and 1: if it is 1, then every character speaks to every other character at least once.
* **Average path length**, which is ([quote Wikipedia:](https://en.wikipedia.org/wiki/Network_science#Average_path_length)) "calculated by finding the shortest path between all pairs of nodes, adding them up, and then dividing by the total number of pairs. This shows us, on average, the number of steps it takes to get from one member of the network to another."

As stated before, these are very basic measures. But let's go ahead and have a look at what these measures tell us about our [Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/) that includes 465 German-language plays from about 1730 to 1930.

For our Sydney talk, we grouped the dramas by decades. This decision is contingent, of course, and we will also experiment with other periodisations. But for a first look into the data, this approach will fulfill its purpose.

First example, a table referring to the "Number of characters" of a play, revealing the average, median and standard-deviation values:

## Table: Number of characters 
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


Let's put the data into a diagram: 

## Fig. 01: Number of characters (Median)
{% include blog-barchart.html id="1" tsv="lit-history-figs/lit-history-fig01.tsv" %}

The standard-deviation values look like this:

...


