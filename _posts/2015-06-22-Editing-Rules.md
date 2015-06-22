---
layout: post
title: "Editing Rules"
author: [dario, peer]
description: 
headline: 
modified: 2015-06-22
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
featured: true
---
## Introduction
After the structural data have been extracted to the LiNA zwischenformat, manual intervention is often necessary to improve the data quality and correct errors in the source data. Especially the TextGrid data proved to be quite problematic due to OCR errors and false tagging.

Some of the "external" problems – that is, problems not inherent to the text per se but introduced through automated or manual conversion to a computer readable text and creating the markup – we encountered are:

* No or insufficient structural data encoded;
* OCR errors in a speaker's name;
* stage directions were interpreted as part of the speaker's name

Additionally, there are a few »internal« phenomena – i.e. characteristics typical for a play – that have to be taken into account:

* Different ways of referring to a person – e.g. the full name might be given on the first appearance and only the given name afterwards;
* collectives or groups of speakers, e.g. »Alle« (all), »Einige« (some), »Andere« (others);
* indeterminate speakers, e.g. »Ein Diener« (a servant), »Erster Ritter« (first knight) which might be given the same name but are actually different characters as determined by the setting.

In order to get around these problems, we had to manually edit the LiNA data files. We established a fixed set of rules (see below) to cover the most common problems and added comments to the data files if the changes involved non-trivial interpretation.

## Rules for editing »the zwischenformat« (LiNA data files)

* Rule 1 – Add the schema files as a PI
* Rule 2 – Edit the meta data header
* Rule 3 – Identification of characters
* Rule 4 – Multiple speakers (explicit)
* Rule 5 – Multiple speakers (implicit)
* Rule 6 – Multiple speakers (collective)
* Rule 7 – Same day, different shit
* Rule 8 – Collectives as part of a collective

## Rule 1: Add the schema files as a Processing Instruction – example

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="http://raw.githubusercontent.com/DLiNa/project/master/rules/lina.rnc"?>
<?xml-model href="http://raw.githubusercontent.com/DLiNa/project/master/rules/lina.sch"?>
{% endhighlight %}

## Rule 2: Edit the meta data header – example
The TextGrid sources come with a false and / or incomplete tagging of meta data in its (usually two) tei:teiHeader. These information have to be brought into a consistent state and important information has to be added. This usually means:

* removing surplus `<title>` tags,
* adding, if applicable `<subtitle>` and `<genretitle>` (the former usually including a self-attributed genre like »Ein Trauerspiel in 5 Akten« and the latter containing the genre in a normalized way, here »Trauerspiel«; to make things comparable, we're considering adding attribute lists for the major genres),
* adding known dates (when the play was written, first printed and premiered),
* adding the URI of the data source(s) – in case we had to add strucutral information, a second `<source>` tag is added.

### Before editing

{% highlight xml %}
  <head>
    <title>Dramen</title>
    <title>Gottsched, Johann Christoph</title>
    <title>Der sterbende Cato</title>
    <author>Gottsched, Johann Christoph</author>
    <date when="1730"/>
    <source> </source>
  </head>
{% endhighlight %}

### After editing

{% highlight xml %}
<header>
    <title>Der sterbende Cato</title>
    <subtitle>Ein Trauerspiel</subtitle>
    <genretitle>Trauerspiel</genretitle>
    <author>Gottsched, Johann Christoph</author>
    <date type="print" when="1732">1732</date>
    <date type="premiere" when="1731">1731</date>
    <date type="written" when="1730">1730</date>
    <source>https://textgridlab.org/1.0/tgcrud-public/rest/textgrid:nks0.0/data</source>
  </header>
{% endhighlight %}

## Rule 3: Identification of characters – example 1
The easiest case is two similar and easily understandable names for one character. Often, a character is introduced by a full name, possibly including a title or an article, and later referred to only by the given name or the title alone. Another possibility is a simple typo in a character's name.
Here, we move the `<alias>` of one, usually the less frequent, `<character>` (or the one containing a typo) to the »right« one.

### Before editing

{% highlight xml %}
</personae>
  <character>
      <name>ODOARDO GALOTTI</name>
      <alias xml:id="odoardo_galotti">
        <name>ODOARDO GALOTTI</name>
      </alias>
  </character>
  <character>
      <name>ODOARDO </name>
      <alias xml:id="odoardo">
        <name>ODOARDO</name>
      </alias>
  </character>
</personae>
{% endhighlight %}

### After editing

{% highlight xml %}
<personae>
  <character>
      <name>ODOARDO GALOTTI</name>
      <alias xml:id="odoardo_galotti">
        <name>ODOARDO GALOTTI</name>
      </alias>
      <alias xml:id="odoardo">
        <name>ODOARDO</name>
      </alias>
  </character>
</personae>
{% endhighlight %}

## Rule 3: Identification of characters – example 2
A second, yet less obvious, possibility is that a character is not visible on stage but their voice can be heard. In these cases, we add an `<alias>` to the lina:character and add an `@ytpe="voiceOf"`.
The idea behind the attribute is to be later able to differentiate between a character actually on stage and one merely heard.

### Before editing

{% highlight xml %}
<personae>
  <character>
      <name>MARIANE</name>
      <alias xml:id="mariane">
        <name>MARIANE</name>
      </alias>
    </character>
    <character>
      <name> MARIANENS STIMME </name>
      <alias xml:id="marianens_stimme">
        <name>MARIANENS STIMME</name>
      </alias>
  </character>
</personae>
{% endhighlight %}

### After editing

{% highlight xml %}
</personae>
  <character>
      <name>MARIANE</name>
      <alias xml:id="mariane">
        <name>MARIANE</name>
      </alias>
      <alias xml:id="marianens_stimme" type="voiceOf">
        <name>MARIANENS STIMME</name>
      </alias>
  </character>
</personae>
{% endhighlight %}

## Rule 4: Multiple speakers (explicit) – example

A common »internal« phenomenon of plays is two or more characters speaking at the same time. In the easy cases they are explicitly name, separated by comma or a conjunction like »und«/»and«. In these cases, in the `//lina:text//lina:sp` we partition `@who` to its constituents, removing any comma or conjunction. Additionally, the `lina:character` in `lina:personae` is deleted.

### Before editing

{% highlight xml %}
<text>
  <sp who="#madame_welldorf_und_luise">
    <amount n="1" unit="speech_acts"/>
    <amount n="5" unit="words"/>
    <amount n="1" unit="lines"/>
    <amount n="21" unit="chars"/>
  </sp>
</text>
{% endhighlight %}

### After editing

{% highlight xml %}
<text>
  <sp who="#madame_welldorf #luise">
    <amount n="1" unit="speech_acts"/>
    <amount n="5" unit="words"/>
    <amount n="1" unit="lines"/>
    <amount n="21" unit="chars"/>
  </sp>
</text>
{% endhighlight %}

## Rule 5: Multiple speakers (implicit) – example

In the »implicit« case, no names are given for the speakers, but are referred to by their role or some attribute they have in common.
Here, the surplus `<character>` is deleted and the `@who` expanded to contain a pointer to all the individual characters.

### Before editing

{% highlight xml %}
<personae>
  <character>
    <name>ERSTE MAGD</name>
    <alias xml:id="erste_magd">
      <name>ERSTE MAGD</name>
    </alias>
  </character>
  <character>
    <name>ZWEITE MAGD</name>
    <alias xml:id="zweite_magd">
      <name>ZWEITE MAGD</name>
    </alias>
  </character>
  <character>
    <name>DIE BEIDEN MÄGDE</name>
    <alias xml:id="die_beiden_mägde">
      <name>DIE BEIDEN MÄGDE</name>
    </alias>
  </character>
</personae>
<text>
  <sp who="#die_beiden_mägde">
    <amount n="1" unit="speech_acts"/>
    <amount n="7" unit="words"/>
    <amount n="1" unit="lines"/>
    <amount n="32" unit="chars"/>
  </sp>			
</text>
{% endhighlight %}

### After editing

{% highlight xml %}
<personae>
  <character>
    <name>ERSTE MAGD</name>
    <alias xml:id="erste_magd">
      <name>ERSTE MAGD</name>
    </alias>
  </character>
  <character>
    <name>ZWEITE MAGD</name>
    <alias xml:id="zweite_magd">
      <name>ZWEITE MAGD</name>
    </alias>
  </character>
</personae>
<text>
  <sp who="#erste_magd #zweite_magd">
    <amount n="1" unit="speech_acts"/>
      <amount n="7" unit="words"/>
      <amount n="1" unit="lines"/>
      <amount n="32" unit="chars"/>
  </sp>
</text>
{% endhighlight %}

## Rule 6: Multiple speakers (collective) – example 1

When no explicit names are given but an easily discernable collective, the `<character>` for the collective name is deleted and the `@who` edited to contain the names of all characters speaking.

### Before editing

{% highlight xml %}
<personae>
  <character>
    <name>MADAME WELLDORF</name>
    <alias xml:id="madame_welldorf">
      <name>MADAME WELLDORF</name>
    </alias>
  </character>
  <character>
    <name>LUISE</name>
    <alias xml:id="luise">
      <name>LUISE</name>
    </alias>
  </character>
  <character>
    <name>BEIDE</name>
    <alias xml:id="beide">
      <name>BEIDE</name>
    </alias>
  </character>
</personae>
<text>
  <sp who="#beide">
    <amount n="1" unit="speech_acts"/>
    <amount n="5" unit="words"/>
    <amount n="1" unit="lines"/>
    <amount n="21" unit="chars"/>
  </sp>
</text>
{% endhighlight %}

### After editing

{% highlight xml %}
<personae>
  <character>
    <name>MADAME WELLDORF</name>
    <alias xml:id="madame_welldorf">
      <name>MADAME WELLDORF</name>
    </alias>
  </character>
  <character>
    <name>LUISE</name>
    <alias xml:id="luise">
      <name>LUISE</name>
    </alias>
  </character>
</personae>
<text>
  <sp who="#madame_welldorf #luise">
    <amount n="1" unit="speech_acts"/>
    <amount n="5" unit="words"/>
    <amount n="1" unit="lines"/>
    <amount n="21" unit="chars"/>
  </sp>
</text>
{% endhighlight %}

## Rule 6: Multiple speakers (collective) – example 2
Often, multiple speakers are not given explicitly but rather a collective reference is given, e.g. »Einige« (»some«), »Alle« (»all«), »the Borg«, etc.
In these cases it often is necessary to revert to close reading to discern who is actually meant. Usually, we add a `<change>` to the `<documentation>` section if the expansion to explicit names is not obvious, requires lengthy close reading or a lot of interpretation.

### Before editing

{% highlight xml %}
<div>
    <head>1. Akt</head>
  <div>
    <head>Erster Akt</head>
    <sp who="#mana">
      <amount n="12" unit="speech_acts"/>
      <amount n="177" unit="words"/>
      <amount n="10" unit="lines"/>
      <amount n="966" unit="chars"/>
    </sp>
    <sp who="#sora">
      <amount n="18" unit="speech_acts"/>
      <amount n="193" unit="words"/>
      <amount n="15" unit="lines"/>
      <amount n="972" unit="chars"/>
    </sp>
    <sp who="#feria">
      <amount n="14" unit="speech_acts"/>
      <amount n="168" unit="words"/>
      <amount n="11" unit="lines"/>
      <amount n="958" unit="chars"/>
    </sp>
    <sp who="#lato">
      <amount n="13" unit="speech_acts"/>
      <amount n="88" unit="words"/>
      <amount n="13" unit="lines"/>
      <amount n="439" unit="chars"/>
    </sp>
    <sp who="#alle">
      <amount n="3" unit="speech_acts"/>
      <amount n="9" unit="words"/>
      <amount n="3" unit="lines"/>
      <amount n="41" unit="chars"/>
    </sp>
    <sp who="#andrason">
      <amount n="39" unit="speech_acts"/>
      <amount n="1428" unit="words"/>
      <amount n="23" unit="lines"/>
      <amount n="7989" unit="chars"/>
    </sp>
    <sp who="#mela">
      <amount n="6" unit="speech_acts"/>
      <amount n="38" unit="words"/>
      <amount n="6" unit="lines"/>
      <amount n="228" unit="chars"/>
    </sp>
  </div>
</div>
{% endhighlight %}

Inspecting speech act and stage direction

> *Andrason kommt.*
> FERIA.
> Sei uns willkommen! herzlich willkommen!
> ALLE.
> Willkommen!
> ANDRASON.
> Ich umarme dich, meine Schwester! Ich grüße euch, meine Kinder!
> Eure Freude macht mich glücklich, eure Liebe tröstet mich.

### After editing

{% highlight xml %}
<div>
    <head>1. Akt</head>
  <div>
    <head>Erster Akt</head>
    <sp who="#mana">
      <amount n="12" unit="speech_acts"/>
      <amount n="177" unit="words"/>
      <amount n="10" unit="lines"/>
      <amount n="966" unit="chars"/>
    </sp>
    <sp who="#sora">
      <amount n="18" unit="speech_acts"/>
      <amount n="193" unit="words"/>
      <amount n="15" unit="lines"/>
      <amount n="972" unit="chars"/>
    </sp>
    <sp who="#feria">
      <amount n="14" unit="speech_acts"/>
      <amount n="168" unit="words"/>
      <amount n="11" unit="lines"/>
      <amount n="958" unit="chars"/>
    </sp>
    <sp who="#lato">
      <amount n="13" unit="speech_acts"/>
      <amount n="88" unit="words"/>
      <amount n="13" unit="lines"/>
      <amount n="439" unit="chars"/>
    </sp>
    <sp who="#mana #sora #feria #lato #mela">
      <amount n="3" unit="speech_acts"/>
      <amount n="9" unit="words"/>
      <amount n="3" unit="lines"/>
      <amount n="41" unit="chars"/>
    </sp>
    <sp who="#andrason">
      <amount n="39" unit="speech_acts"/>
      <amount n="1428" unit="words"/>
      <amount n="23" unit="lines"/>
      <amount n="7989" unit="chars"/>
    </sp>
    <sp who="#mela">
      <amount n="6" unit="speech_acts"/>
      <amount n="38" unit="words"/>
      <amount n="6" unit="lines"/>
      <amount n="228" unit="chars"/>
    </sp>
  </div>
</div>
{% endhighlight %}

## Rule 7: Same name for different characters – example
Sometimes, two different characters are referred to by the same name, e.g. a servant to the president and a servant to the prince are both name »servant«.
Here, it is necessary to add a `<character>` for the second individuum, give both an easily recognizable name and ID and edit the `@who` attributes to reflect which of these it refers to.

### Before editing

{% highlight xml %}
<personae>
  <character>
    <name>EIN KAMMERDIENER</name>
    <alias xml:id="ein_kammerdiener">
      <name>EIN KAMMERDIENER</name>
    </alias>
  </character>
  <character>
    <name>KAMMERDIENER</name>
    <alias xml:id="kammerdiener">
      <name>KAMMERDIENER</name>
    </alias>
  </character>
</personae>
{% endhighlight %}

Inspecting speech acts and stage directions

> **1. Akt**
> **Fünfte Szene**
> [...]
> PRÄSIDENT.
> Zwar du bist mir gewiß. Ich halte dich an deiner eigenen Schurkerei, wie den Schröter am Faden!
> EIN KAMMERDIENER
> tritt herein.
> Hofmarschall von Kalb –
> PRÄSIDENT.
> Kommt, wie gerufen. – Er soll mir angenehm sein.
> *Kammerdiener geht.*

>**2. Akt**
>**Zweite Szene**
>*Ein alter Kammerdiener des Fürsten, der ein Schmuckkästchen trägt.*
> [...]
> KAMMERDIENER.
> Seine Durchlaucht der Herzog empfehlen sich Mylady zu Gnaden, und
> schicken Ihnen diese Brillanten zur Hochzeit. Sie kommen soeben erst aus Venedig.

### After editing

{% highlight xml %}
<personae>
  <character>
    <name>EIN KAMMERDIENER (PRÄSIDENT)</name>
    <alias xml:id="ein_kammerdiener_präsident">
      <name>EIN KAMMERDIENER</name>
    </alias>
  </character>
  <character>
    <name>EIN KAMMERDIENER (FÜRST)</name>
    <alias xml:id="kammerdiener_fürst">
      <name>EIN KAMMERDIENER (FÜRST)</name>
    </alias>
  </character>
</personae>
{% endhighlight %}

## Rule 8: Collectives as part of a collective – example

Especially in dramas where large crowds play a major role, there are often subdivisions of the crowds speaking while there is no explicit reference to which people this part of the larger collective consists of (no Six of Twekve here). Usually, this includes none of the major characters and the utterances, while important for the atmosphere of the setting, are quite short.
Here, we decided to not partition the collective, but rather to build it up: »Some of the crowd«, »Others of the crowd« etc. are considered an `<alias>` of the larger collectives `<character>`.

### Before editing

{% highlight xml %}
<personae>
  <character>
    <name>DAS VOLK</name>
    <alias xml:id="das_volk">
      <name>DAS VOLK</name>
    </alias>
  </character>
  <character>
    <name>DAS GANZE VOLK</name>
    <alias xml:id="das_ganze_volk">
      <name>DAS GANZE VOLK</name>
    </alias>
  </character>
  <character>
    <name>EINIGE VOM VOLK</name>
    <alias xml:id="einige_vom_volk">
      <name>EINIGE VOM VOLK</name>
    </alias>
  </character>
  <character>
    <name>STIMMEN AUS DEM VOLK</name>
    <alias xml:id="stimmen_aus_dem_volk">
      <name>STIMMEN AUS DEM VOLK</name>
    </alias>
  </character>
</personae>
{% endhighlight %}

### After editing

{% highlight xml %}
<character>
  <name>DAS VOLK name>
  <alias xml:id="das_volk">
    <name>DAS VOLK</name>
  </alias>
  <alias xml:id="das_ganze_volk">
    <name>DAS GANZE VOLK</name>
  </alias>
  <alias xml:id="stimmen_aus_dem_volk">
    <name>STIMMEN AUS DEM VOLK</name>
  </alias>
  <alias xml:id="einige_vom_volk">
    <name>EINIGE VOM VOLK</name>
  </alias>
</character>
{% endhighlight %}

## Conclusion and caveat

Using these rules, we were able to work around many of the problems. The resulting data are much more consistent than what we started out with.
But one always has to bear in mind that that improving the data is still limited by some constraints of the source texts:

* We had to assume that the structure as given in the source files was generally correct; in a few cases we manually added the missing information to the sources as the results were grossly wrong as was the case with Goethe's »Götz von Berlichingen« where no scenes were tagged.
* Characters that are not tagged as a speaker will not be recognized. If two speakers speak collectively and are tagged `<sp>Kolja und Mitja</sp>` in the source, the script will correctly recognize both speakers. However, there are instances of incorrect tagging where only one speaker is tagged (and the other might »disappear« into a stage direction). In these cases, the second speaker will not be recognized and thus not present in the zwischenformat data. Usually, it is impossible to recognize these errors on the first glance.
* Stage directions might be tagged as parts of a speech, and vice versa. This will result in erroneous amounts in the zwischenformat's lina:sp. The worst case is a missing speaker if all that character's utterances were tagged as stage directions.
