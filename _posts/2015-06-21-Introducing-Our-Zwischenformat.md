---
layout: post
title: "Introducing Our 'Zwischenformat'"
author: [dario, frank, peer]
description: 
headline: 
modified: 2015-06-21
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: true
---
Our research interest focuses primarily on *structural aspects* of dramatic texts. The structural data is extracted from [the 465 dramatic texts that constitute our Sydney corpus](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/) and then screened and edited before it can be evaluated statistically with regard to literary history.

The structural abstraction is provided by a PHP script that processes the TEI files, collects all the data needed for our purpose and puts it in our own *zwischenformat* (roughly translates as 'intermediary format', the DLINA data format we developed for this project and announced [in our previous post](/Introducing-DLINA-Corpus-15-07-Codename-Sydney/)). The script and what it produces, our *zwischenformat*, represent a structure-oriented form of data mining, so to speak.

Let's assume that the basic structure of a drama looks as follows (without paratexts):

{% highlight xml %}
<segment>
 <sp who="#speaker1"></sp>
 <sp who="#speaker2"></sp>
 <sp who="#speaker3"></sp>
 <sp who="#speaker1"></sp>
 <sp who="#speaker3"></sp>
 ...
</segment>
<segment>
 <sp who="#speaker4"></sp>
 <sp who="#speaker2"></sp>
 ...
</segment>
...
{% endhighlight %}

The `<segment>`s represent the predefined structures of a drama: acts and scenes. Our script will extract the structure of segments and speakers from the full-text TEI files and write it into our *zwischenformat*. The actual content of the speeches is disregarded and represented by the number of speech acts, words, lines, and string length (in characters) instead, each of which are summarised per occuring character identified via its `who` attribute. Now we're able to see at a glance how many words each character is contributing to a play, and we're able to do that for the whole Sydney corpus. Stay tuned for a post on the greatest chatterboxes in German literature, hehe!

Anyhow, the result looks something like this:

{% highlight xml %}
<text>
<div>
 <head>Vierte Szene</head>
  <sp who="#ferdinand">
   <amount n="7" unit="speech_acts"/>
   <amount n="481" unit="words"/>
   <amount n="2" unit="lines"/>
   <amount n="2585" unit="chars"/>
  </sp>
  <sp who="#luise">
   <amount n="7" unit="speech_acts"/>
   <amount n="208" unit="words"/>
   <amount n="3" unit="lines"/>
   <amount n="1057" unit="chars"/>
  </sp>
 </div>
</text>
{% endhighlight %}

The representation of drama structure (segmentations, speakers) is at the core of our *zwischenformat*. But it does even more. It captures metadata and it creates complete cast lists for each drama by making use of the `who` attributes.

Our *zwischenformat* consists of three main parts (each of which is required):

* `<header>` (the metadata)
* `<personae>` (a cast list created by help of all `who` attributes)
* `<text>` (drama segmentation and speakers)

Plus, there is also an optional part:

* `<documentation>` (for documenting non-trivial editing decisions)

{% highlight xml %}
<documentation>
 <change n="1" type="expandCollective" who="peertrilcke">
   <path>/play/text[1]/div[4]/div[2]/div[1]</path>
   <orig>#die_abziehenden</orig>
   <corr>#fritz_kleinmichel #berta #kämpe #frau_piepenbrink #bellmaus #bolz #piepenbrink</corr>
   <comment>Siehe Text: "Fritz Kleinmichel mit seiner Braut, Kämpe mit Kleinmichel, Frau Piepenbrink mit Bellmaus, zuletzt Bolz mit Piepenbrink"; "Braut" i.e. Berta</comment>
  </change>
</documentation>
{% endhighlight %}

A complete yet very short and simple one-act drama would be represented like this by our *zwischenformat*:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="http://raw.githubusercontent.com/DLiNa/project/master/rules/lina.rnc"?>
<?xml-model href="http://raw.githubusercontent.com/DLiNa/project/master/rules/lina.sch"?>
<play xmlns="http://lina.digital">
 <header>
  <title>Die Urgrossmutter</title>
  <subtitle>Eine Tragi-Komödie in einem Aufzuge</subtitle>
  <genretitle></genretitle>
  <author>Scheerbart, Paul</author>
  <date type="print" when="1904" />
  <date type="premiere" />
  <date type="written" />
  <source>https://textgridlab.org/1.0/tgcrud-public/rest/textgrid:tv6f.0/data</source>
 </header>
 <personae>
  <character>
   <name>URGROSSMUTTER</name>
   <alias xml:id="urgrossmutter">
    <name>URGROSSMUTTER</name>
   </alias>
  </character>
  <character>
   <name>MANELLA</name>
   <alias xml:id="manella">
    <name>MANELLA</name>
   </alias>
  </character>
  <character>
   <name>CONSTANTIN</name>
   <alias xml:id="constantin">
    <name>CONSTANTIN</name>
   </alias>
  </character>
 </personae>
 <text>
  <div>
   <head>Personen</head>
  </div>
  <div>
   <head>[Stücktext]</head>
   <div>
    <head>[Stücktext]</head>
    <sp who="#urgrossmutter">
     <amount n="17" unit="speech_acts"/>
     <amount n="497" unit="words"/>
     <amount n="7" unit="lines"/>
     <amount n="2795" unit="chars"/>
    </sp>
    <sp who="#manella">
     <amount n="3" unit="speech_acts"/>
     <amount n="22" unit="words"/>
     <amount n="3" unit="lines"/>
     <amount n="154" unit="chars"/>
    </sp>
    <sp who="#constantin">
     <amount n="13" unit="speech_acts"/>
     <amount n="154" unit="words"/>
     <amount n="10" unit="lines"/>
     <amount n="948" unit="chars"/>
    </sp>
   </div>
  </div>
 </text>
</play>
{% endhighlight %}

The *zwischenformat* is validated against:

* [http://raw.githubusercontent.com/dlina/project/master/rules/lina.rnc](http://raw.githubusercontent.com/dlina/project/master/rules/lina.rnc)
* [http://raw.githubusercontent.com/dlina/project/master/rules/lina.sch](http://raw.githubusercontent.com/dlina/project/master/rules/lina.sch)

The raw *zwischenformat* versions of our Sydney corpus can be found here (i.e., the 465 files extracted from the TextGrid Repository before we started editing them):

* [https://github.com/dlina/project/tree/master/data/zwischenformat/raw_lina_data](https://github.com/dlina/project/tree/master/data/zwischenformat/raw_lina_data)

The edited *zwischenformat* files can be found here (this is the deluxe version of our corpus, so to speak, the basis for all further analyses and visualisations; our editing rules will be published at a later point):

* [https://github.com/dlina/project/tree/master/data/zwischenformat](https://github.com/dlina/project/tree/master/data/zwischenformat)

And now:

{% highlight xml %}
<div>
 <sp="#everybody_and_their_aunt">
  <p>Long live the zwischenformat!</p>
 </sp>
</div>
{% endhighlight %}
