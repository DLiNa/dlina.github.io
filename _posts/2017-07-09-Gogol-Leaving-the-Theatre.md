---
layout: post
title: Network Analysis of Gogol's Metaplay "Leaving the Theatre …" (1842)
author: [frank, german, ivan]
description: 
headline: 
modified: 2017-07-09
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
list: false
featured: true
---

A couple of days ago, we presented a first version of our Russian Drama Corpus (RusDraCor) at the CORPORA 2017 conference in St. Petersburg ([slides](https://dlina.github.io/presentations/2017-spb/)). Our goal is to assemble hundreds of Russian plays from the 1740s (Sumarokov) up to the 1930s with authors like Gorky and Mayakovsky. Right in the middle, chronologically, our corpus features a number of plays by Gogol, one of which is "Театральный разъезд после представления новой комедии" ("Leaving the Theatre after the Presentation of a New Comedy"; [full text at ilibrary.ru](http://ilibrary.ru/text/1557/p.1/index.html)).

We don't concentrate so much on individual networks in our research, we're more focusing in on the structural evolution of a bulk of literary texts over time. But some networks are just special enough to warrant a bit more attention. So here is the network graph for "Leaving the Theatre", extracted from [our TEI version of the play](https://raw.githubusercontent.com/lehkost/RusDraCor/master/tei/Gogol_-_Teatralnyi_razezd_-_ilibrary.xml) and embellished with Gephi:

<figure>
  <img src="{{ site.url }}/data/gogol-leaving-the-theatre/gogol-teatralnyi-razezd-gephi.png" alt="Character Network of Gogol's 'Leaving the Theatre'" style="width:900px;">
</figure>

This is a ridicilously big social network for a theatre play (99 characters, it is hard to find plays with more characters). The reason is that Gogol's "Leaving the Theatre" is a **metaplay**. Gogol started to draft it right after his infamous ["Revizor"](https://en.wikipedia.org/wiki/The_Government_Inspector) was released in 1836, but he didn't publish "Leaving the Theatre" until 1842.

The plot, if we can call it that: A playwright is eavesdropping on the audience leaving the theatre after the presentation of his new play. We hear him comment sometimes, but he doesn't directly interact with any of the other characters, and neither do they. They are just the exiting audience, ranting or raving about the play they just saw. They have no names, Gogol uses type descriptions to launch their speech acts. They go by names such as …

- "Светский человек, щеголевато одетый" ("A society man, smartly dressed")
- "Господин, несколько беззаботный насчет литературы ("A gentleman a little careless about literature")
- "Чиновник разговорчивого свойства ("An official of talkative qualities")
- etc.

Like mentioned above, we can distinguish **99 characters (or voices)** in this play. Most of the people are just pouring out of the theatre, alone or in groups of two or three, contributing their bit, then vaporising into the evening. We cannot really apply our understanding of social interaction here (the ['digital spectator'](https://dlina.github.io/presentations/2015-sydney/sydney.html#/2/2)), but with a little tweak we can create a meaningful graph.

The play has no acts or scenes, so we segmented it to catch what Manfred Pfister called 'configurations', subsets of the character list of a play, i.e., groups of people present on the stage at a certain point during the play. For all characters present in the same segment, we would establish a relation. That way, we'd end up with many small, unconnected subnets. And here comes our tweak: Since our "author" character eavesdrop on all conversations, we added him to all **37 'configurations'**, ending up with the star-like network you've seen above.

Of course, this is an experimental extension of our approach, but it still helps to better understand the structure of Gogol's metaplay. For example, we can easily tell apart single characters uttering their opinion and larger conversations involving a group of people, something that doesn't become as clear when close-reading the play.

## A Note on Laughter

Although we spent a lot of time to get our network data right, there's still at least one shortcoming when we look at this nice quote from the concluding speech of Gogol's alter ego in the play:

> "Странно: мне жаль, что никто не заметил честного лица, бывшего в моей пьесе. Да, было одно честное, благородное лицо, действовавшее в нем во все продолжение ее. Это честное, благородное лицо был – *смех*."

>"It's strange: I regret that no one noticed the one honest person in the play. Yes, there was an honest, noble person acting in it throughout its continuance. This honest, noble person was – *laughter*." (our trans.)

Our current algorithms aren't able to extract an abstract entity like "laughter" as part of a communication network, but who knows, involving more actor–network theory might bring us a whole bunch of new ideas.

Btw, the underlying CSV file for "Leaving the Theatre" can be found **[here](https://raw.githubusercontent.com/lehkost/RusDraCor/master/csv/Gogol_-_Teatralnyi_razezd_-_ilibrary.csv)**.

## Russian Drama Network as Shiny App

On a different note, we also released a Shiny App for the analysis of our networks at the aforementioned conference. It looks like this …

<figure>
  <img src="https://dlina.github.io/presentations/2017-spb/images/Screenshot_Shinyapp_2017-06-21.jpg" alt="RusDraCor as Shiny App (screenshot)" style="width:760px;margin-top:15px;margin-bottom:30px;">
</figure>

… and can be access at **[https://rusdracor.shinyapps.io/showcase/](https://rusdracor.shinyapps.io/showcase/)**. It features live data, so to speak, continuously generated from our TEI files as the corpus grows. "Leaving the Theatre" is among the plays, as are works by Blok, Bulgakov, Chechov, Fonvizin, Gorky, Gumilyov, Krylov, Majakovsky, Ostrovsky, Plavilschikov, Prutkov ☺, Pushkin, Sumarokov, Leo Tolstoy and Turgenev. And more is to come.

Oh, our project will also be presented at the ["Digitizing the Stage" conference](https://digitizingthestage.wordpress.com/) starting tomorrow at the University of Oxford.

Etc. ect. etc.
