---
layout: post
title: "The Facebook of German Playwrights"
author: [martin, frank]
description: 
headline: 
modified: 2016-01-26
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
list: false
featured: false
---

This short article is an addition to the our last blogpost, ["The Birth & Death of German Playwrights"](/The-Birth-and-Death-of-German-Playwrights/), where we used authority-file metadata to plot birth and death places on a GeoBrowser map to get an impression of who the authors are that build our corpus of 465 German-language theatre plays. Those 465 plays were written by 178 authors altogether (some of the plays/libretti have co-authorship). Now let's have a look at the faces our playwrights and generate a gallery with portraits of all of them (if available in Wikimedia Commons). We're making use of Wikidata again, but this time with nothing more than an XSLT transformation. Some simple BASH scripting was added to build the actual gallery for this blogpost. Now without further ado, this is the gallery:

<div>
 <ul style="list-style-type:none;">
  <li style="float:left;width:25%;border:0px;text-align: center;;margin-bottom:20px;font-size:9px;"><img src="{{ site.url }}/images/authorpics/1697_neuber.jpg" alt="Neuber, Friederike Caroline (geb. 1697)" style="height:150px">Neuber, Friederike Caroline (geb. 1697)</li>
  <li style="float:left;width:25%;border:0px;text-align: center;;margin-bottom:20px;font-size:9px;"><img src="{{ site.url }}/images/authorpics/1698_bodmer.jpg" alt="Bodmer, Johann Jacob (geb. 1798)" style="height:150px">Bodmer, Johann Jacob (geb. 1798)</li>
  <li style="float:left;width:25%;border:0px;text-align: center;;margin-bottom:20px;font-size:9px;"><img src="{{ site.url }}/images/authorpics/1700_gottsched.jpg" alt="Gottsched, Johann Christoph (geb. 1700)" style="height:150px">Gottsched, Johann Christoph (geb. 1700)</li>
  <li style="float:left;width:25%;border:0px;text-align: center;;margin-bottom:20px;font-size:9px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Borkenstein, Hinrich (geb. 1705)" style="height:150px">Borkenstein, Hinrich (geb. 1705)</li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1713_gottsched.jpg" alt="Gottsched, Luise Adelgunde Victorie (geb. 1713)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1715_gellert.jpg" alt="Gellert, Christian Fürchtegott (geb. 1715)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1717_kurz.jpg" alt="Kurz, Joseph von (geb. 1717)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schlegel, Johann Elias (geb. 1719)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1722_auenbrugger.jpg" alt="Auenbrugger, Johann Leopold von (geb. 1722)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Mylius, Christlob (geb. 1722)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Quistorp, Theodor Johann (geb. 1722)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Krüger, Johann Christian (geb. 1723)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1724_klopstock.jpg" alt="Klopstock, Friedrich Gottlieb (geb. 1724)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1726_weisse.jpg" alt="Weiße, Christian Felix (geb. 1726)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1729_lessing.jpg" alt="Lessing, Gotthold Ephraim (geb. 1729)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1730_gessner.jpg" alt="Gessner, Salomon (geb. 1730)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1731_cronegk.jpg" alt="Cronegk, Johann Friedrich von (geb. 1731)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Hafner, Philipp (geb. 1731)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Pfeil, Johann Gottlob Benjamin (geb. 1732)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1733_ayrenhoff.jpg" alt="Ayrenhoff, Cornelius Hermann von (geb. 1733)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1733_wieland.jpg" alt="Wieland, Christoph Martin (geb. 1733)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1735_brandes.jpg" alt="Brandes, Johann Christian (geb. 1735)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Klemm, Christian Gottlob (geb. 1736)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1736_sturz.jpg" alt="Sturz, Helfrich Peter (geb. 1736)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1737_gerstenberg.jpg" alt="Gerstenberg, Heinrich Wilhelm von (geb. 1737)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Brawe, Joachim Wilhelm von (geb. 1738)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1741_engel.jpg" alt="Engel, Johann Jakob (geb. 1741)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1741_hippel.jpg" alt="Hippel, Theodor Gottlieb von (geb. 1741)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1741_stephanie.jpg" alt="Stephanie, Johann Gottlieb (der Jüngere) (geb. 1741)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1744_schroeder.jpg" alt="Schröder, Friedrich Ludwig (geb. 1744)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Weidmann, Paul (geb. 1744)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1746_gotter.jpg" alt="Gotter, Friedrich Wilhelm (geb. 1746)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Wagner, Heinrich Leopold (geb. 1747)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bretzner, Christoph Friedrich (geb. 1748)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1749_goethe.jpg" alt="Goethe, Johann Wolfgang von (geb. 1749)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1749_mueller.jpg" alt="Müller, Friedrich (Maler Müller) (geb. 1749)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1751_lenz.jpg" alt="Lenz, Jakob Michael Reinhold (geb. 1751)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1751_schikaneder.jpg" alt="Schikaneder, Johann Emanuel (geb. 1751)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1752_klinger.jpg" alt="Klinger, Friedrich Maximilian (geb. 1752)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1752_leisewitz.jpg" alt="Leisewitz, Johann Anton (geb. 1752)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1753_toerring.jpg" alt="Törring, Josef August von (geb. 1753)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Soden, Julius von (geb. 1754)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gemmingen-Hornberg, Otto Heinrich von (geb. 1755)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schink, Johann Friedrich (geb. 1755)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1759_iffland.jpg" alt="Iffland, August Wilhelm (geb. 1759)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Hensler, Karl Friedrich (geb. 1759)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1759_schiller.jpg" alt="Schiller, Friedrich (geb. 1759)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1761_kotzebue.jpg" alt="Kotzebue, August von (geb. 1761)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Benkowitz, Karl Friedrich (geb. 1764)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1766_sonnleithner.jpg" alt="Sonnleithner, Joseph Ferdinand von (geb. 1766)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1767_schlegel.jpg" alt="Schlegel, August Wilhelm (geb. 1767)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1768_kind.jpg" alt="Kind, Johann Friedrich (geb. 1768)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1768_voss.jpg" alt="Voß, Julius von (geb. 1768)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1768_werner.jpg" alt="Werner, Zacharias (geb. 1768)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1771_zschokke.jpg" alt="Zschokke, Heinrich (geb. 1771)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gleich, Joseph Alois (geb. 1772)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1772_schlegel.jpg" alt="Schlegel, Friedrich (geb. 1772)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1773_tieck.jpg" alt="Tieck, Ludwig (geb. 1773)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1773_weissenthurn.jpg" alt="Weißenthurn, Johanna von (geb. 1773)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Breuning, Stephan von (geb. 1774)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1774_muellner.jpg" alt="Müllner, Adolph (geb. 1774)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Meisl, Karl (geb. 1775)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1776_treitschke.jpg" alt="Treitschke, Georg Friedrich (geb. 1776)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1777_kleist.jpg" alt="Kleist, Heinrich von (geb. 1777)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1777_klingemann.jpg" alt="Klingemann, August (geb. 1777)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1777_motte-fouque.jpg" alt="Fouqué, Friedrich de la Motte (geb. 1777)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1778_brentano.jpg" alt="Brentano, Clemens (geb. 1778)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bernard, Josef Karl (geb. 1780)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1780_guenderode.jpg" alt="Günderode, Karoline von (geb. 1780)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1781_arnim.jpg" alt="Arnim, Ludwig Achim von (geb. 1781)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1783_chezy.jpg" alt="Chézy, Helmina von (geb. 1783)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1784_raupach.jpg" alt="Raupach, Ernst (geb. 1784)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1786_baeuerle.jpg" alt="Bäuerle, Adolf (geb. 1786)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1787_uhland.jpg" alt="Uhland, Ludwig (geb. 1787)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1788_eichendorff.jpg" alt="Eichendorff, Joseph von (geb. 1788)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1790_raimund.jpg" alt="Raimund, Ferdinand (geb. 1790)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1791_grillparzer.jpg" alt="Grillparzer, Franz (geb. 1791)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1791_koerner.jpg" alt="Körner, Theodor (geb. 1791)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Kupelwieser, Josef (geb. 1791)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1792_malss.jpg" alt="Malß, Karl (geb. 1792)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gehe, Eduard Heinrich (geb. 1795)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1796_immermann.jpg" alt="Immermann, Karl (geb. 1796)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1796_platen.jpg" alt="Platen, August von (geb. 1796)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1796_schober.jpg" alt="Schober, Franz von (geb. 1796)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1797_droste-huelshoff.jpg" alt="Droste-Hülshoff, Annette von (geb. 1797)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1797_heine.jpg" alt="Heine, Heinrich (geb. 1797)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1798_holtei.jpg" alt="Holtei, Karl von (geb. 1798)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1800_beer.jpg" alt="Beer, Michael (geb. 1800)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1800_birch-pfeiffer.jpg" alt="Birch-Pfeiffer, Charlotte (geb. 1800)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1801_devrient.jpg" alt="Devrient, Philipp Eduard (geb. 1801)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1801_grabbe.jpg" alt="Grabbe, Christian Dietrich (geb. 1801)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1801_lortzing.jpg" alt="Lortzing, Albert (Gustav) (geb. 1801)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1801_nestroy.jpg" alt="Nestroy, Johann (geb. 1801)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1802_bauernfeld.jpg" alt="Bauernfeld, Eduard von (geb. 1802)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1802_braun_von_braunthal.jpg" alt="Braun von Braunthal, Karl Johann (geb. 1802)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1802_simrock.jpg" alt="Simrock, Karl (geb. 1802)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1803_kobell.jpg" alt="Kobell, Franz von (geb. 1803)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1804_haffner.jpg" alt="Haffner, Carl (geb. 1804)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Wohlbrück, Wilhelm August (geb. 1805)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Riese, Friedrich Wilhelm (geb. 1805)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1806_halm.jpg" alt="Halm, Friedrich (geb. 1806)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1806_laube.jpg" alt="Laube, Heinrich (geb. 1806)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1807_vischer.jpg" alt="Vischer, Friedrich Theodor (geb. 1807)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1810_schumann.jpg" alt="Schumann, Robert (geb. 1810)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1811_benedix.jpg" alt="Benedix, Julius Roderich (geb. 1811)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1811_gutzkow.jpg" alt="Gutzkow, Karl (geb. 1811)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1813_buechner.jpg" alt="Büchner, Georg (geb. 1813)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1813_hebbel.jpg" alt="Hebbel, Friedrich (geb. 1813)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1813_ludwig.jpg" alt="Ludwig, Otto (geb. 1813)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1813_wagner.jpg" alt="Wagner, Richard (geb. 1813)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1814_Kaiser.jpg" alt="Kaiser, Friedrich (geb. 1814)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Niebergall, Ernst Elias (geb. 1815)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1816_freytag.jpg" alt="Freytag, Gustav (geb. 1816)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1816_prutz.jpg" alt="Prutz, Robert Eduard (geb. 1816)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1819_dulk.jpg" alt="Dulk, Albert (geb. 1819)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Roeber, Friedrich (geb. 1819)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1820_kalisch.jpg" alt="Kalisch, David (geb. 1820)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1821_mosenthal.jpg" alt="Mosenthal, Salomon Hermann von (geb. 1821)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1823_genee.jpg" alt="Genée, Richard (geb. 1823)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1824_cornelius.jpg" alt="Cornelius, Peter (geb. 1824)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1825_lassalle.jpg" alt="Lassalle, Ferdinand (geb. 1825)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1825_moser.jpg" alt="Moser, Gustav von (geb. 1825)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1830_heyse.jpg" alt="Heyse, Paul (geb. 1830)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Berg, O. F. (geb. 1833)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schäfer, Wilhelm (geb. 1835)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bunge, Rudolf (geb. 1836)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1837_wilbrandt.jpg" alt="Wilbrandt, Adolf von (geb. 1837)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1838_larronge.jpg" alt="L'Arronge, Adolph (geb. 1838)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1839_anzengruber.jpg" alt="Anzengruber, Ludwig (geb. 1839)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1839_schnitzer.jpg" alt="Schnitzer, Ignaz (geb. 1839)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1840_goetz.jpg" alt="Goetz, Hermann (geb. 1840)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1842_may.jpg" alt="May, Karl (geb. 1842)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Widmann, Joseph Viktor (geb. 1842)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1845_wildenbruch.jpg" alt="Wildenbruch, Ernst von (geb. 1845)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1849_schoenthan.jpg" alt="Schönthan, Franz und Paul von (geb. 1849)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1851_kadelburg.jpg" alt="Kadelburg, Gustav (geb. 1851)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1852_blumenthal.jpg" alt="Blumenthal, Oskar (geb. 1852)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1853_panizza.jpg" alt="Panizza, Oskar (geb. 1853)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1855_ganghofer.jpg" alt="Ganghofer, Ludwig (geb. 1855)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Jacoby, Wilhelm (geb. 1855)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1856_avenarius.jpg" alt="Avenarius, Ferdinand (geb. 1856)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1857_sudermann.jpg" alt="Sudermann, Hermann (geb. 1857)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1858_hauptmann.jpg" alt="Hauptmann, Carl (geb. 1858)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Laufs, Carl (geb. 1858)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_female.jpg" alt="Wette, Adelheid (geb. 1858)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bleibtreu, Karl (geb. 1859)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Jerschke, Oskar (geb. 1861)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1861_ruederer.jpg" alt="Ruederer, Josef (geb. 1861)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Alberti, Konrad (geb. 1862)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1862_schlaf.jpg" alt="Schlaf, Johannes (geb. 1862)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1862_schnitzler.jpg" alt="Schnitzler, Arthur (geb. 1862)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1863_dehmel.jpg" alt="Dehmel, Richard (geb. 1863)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1863_holz.jpg" alt="Holz, Arno (geb. 1863)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1863_scheerbart.jpg" alt="Scheerbart, Paul (geb. 1863)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1864_hartleben.jpg" alt="Hartleben, Otto Erich (geb. 1864)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1864_wedekind.jpg" alt="Wedekind, Frank (geb. 1864)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1865_lachmann.jpg" alt="Lachmann, Hedwig (geb. 1865)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1866_busoni.jpg" alt="Busoni, Ferruccio (geb. 1866)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1866_dovsky.jpg" alt="Dovsky, Beatrice (geb. 1866)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1867_thoma.jpg" alt="Thoma, Ludwig (geb. 1867)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gerhäuser, Emil (geb. 1868)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Rosenow, Emil (geb. 1871)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1874_hofmannsthal.jpg" alt="Hofmannsthal, Hugo von (geb. 1874)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1875_heiseler.jpg" alt="Heiseler, Henry von (geb. 1875)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1875_rilke.jpg" alt="Rilke, Rainer Maria (geb. 1875)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1876_stavenhagen.jpg" alt="Stavenhagen, Fritz (geb. 1876)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Boßdorf, Hermann (geb. 1877)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1878_essig.jpg" alt="Essig, Hermann (geb. 1878)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1878_muehsam.jpg" alt="Mühsam, Erich (geb. 1878)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1880_fock.jpg" alt="Fock, Gorch (geb. 1880)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1881_lautensack.jpg" alt="Lautensack, Heinrich (geb. 1881)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Rubiner, Ludwig (geb. 1881)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1881_wildgans.jpg" alt="Wildgans, Anton (geb. 1881)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1886_ball.jpg" alt="Ball, Hugo (geb. 1886)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Ertler, Bruno (geb. 1889)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1890_klabund.jpg" alt="Klabund (geb. 1890)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1892_sorge.jpg" alt="Sorge, Reinhard (geb. 1892)" style="height:150px"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Kaltneker, Hans (geb. 1895)" style="height:150px"></li>
 </ul>
</div>

## Gender Data and Placeholder Images

We also extracted gender information from Wikidata. As you can see, there are only 10 female writers among the 178 authors. 

(to be continued)

