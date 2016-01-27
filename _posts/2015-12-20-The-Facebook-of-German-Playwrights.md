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
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1697_neuber.jpg" alt="Neuber, Friederike Caroline (1697–1760)" height="150"><figcaption style="font-size:0.6em;">Neuber, Friederike Caroline <br />(1697–1760)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1698_bodmer.jpg" alt="Bodmer, Johann Jacob (1698–1783)" height="150"><figcaption style="font-size:0.6em;">Bodmer, Johann Jacob <br />(1698–1784)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1700_gottsched.jpg" alt="Gottsched, Johann Christoph (1700–1766)" height="150"><figcaption style="font-size:0.6em;">Gottsched, Johann Christoph <br />(1700–1766)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Borkenstein, Hinrich (1705–1777)" height="150"><figcaption style="font-size:0.6em;">Borkenstein, Hinrich <br />(1705–1777)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1713_gottsched.jpg" alt="Gottsched, Luise Adelgunde Victorie (1713–1762)" height="150"><figcaption style="font-size:0.6em;">Gottsched, Luise Adelgunde Victorie <br />(1713–1762)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1715_gellert.jpg" alt="Gellert, Christian Fürchtegott (1715–1769)" height="150"><figcaption style="font-size:0.6em;">Gellert, Christian Fürchtegott <br />(1715–1769)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1717_kurz.jpg" alt="Kurz, Joseph von (1717–1784)" height="150"><figcaption style="font-size:0.6em;">Kurz, Joseph von <br />(1717–1784)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schlegel, Johann Elias (1719–1749)" height="150"><figcaption style="font-size:0.6em;">Schlegel, Johann Elias <br />(1719–1749)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1722_auenbrugger.jpg" alt="Auenbrugger, Johann Leopold von (1722–1809)" height="150"><figcaption style="font-size:0.6em;">Auenbrugger, Johann Leopold von <br />(1722–1809)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Mylius, Christlob (1722–1754)" height="150"><figcaption style="font-size:0.6em;">Mylius, Christlob <br />(1722–1754)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Quistorp, Theodor Johann (1722–1776)" height="150"><figcaption style="font-size:0.6em;">Quistorp, Theodor Johann <br />(1722–1776)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Krüger, Johann Christian (1723–1750)" height="150"><figcaption style="font-size:0.6em;">Krüger, Johann Christian <br />(1723–1750)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1724_klopstock.jpg" alt="Klopstock, Friedrich Gottlieb (1724–1803)" height="150"><figcaption style="font-size:0.6em;">Klopstock, Friedrich Gottlieb <br />(1724–1803)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1726_weisse.jpg" alt="Weiße, Christian Felix (1726–1804)" height="150"><figcaption style="font-size:0.6em;">Weiße, Christian Felix <br />(1726–1804)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1729_lessing.jpg" alt="Lessing, Gotthold Ephraim (1729–1781)" height="150"><figcaption style="font-size:0.6em;">Lessing, Gotthold Ephraim <br />(1729–1781)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1730_gessner.jpg" alt="Gessner, Salomon (1730–1788)" height="150"><figcaption style="font-size:0.6em;">Gessner, Salomon <br />(1730–1788)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1731_cronegk.jpg" alt="Cronegk, Johann Friedrich von (1731–1758)" height="150"><figcaption style="font-size:0.6em;">Cronegk, Johann Friedrich von <br />(1731–1758)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Hafner, Philipp (1731–1764)" height="150"><figcaption style="font-size:0.6em;">Hafner, Philipp <br />(1731–1764)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Pfeil, Johann Gottlob Benjamin (1732–1800)" height="150"><figcaption style="font-size:0.6em;">Pfeil, Johann Gottlob Benjamin <br />(1732–1800)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1733_ayrenhoff.jpg" alt="Ayrenhoff, Cornelius Hermann von (1733–1819)" height="150"><figcaption style="font-size:0.6em;">Ayrenhoff, Cornelius Hermann von <br />(1733–1819)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1733_wieland.jpg" alt="Wieland, Christoph Martin (1733–1813)" height="150"><figcaption style="font-size:0.6em;">Wieland, Christoph Martin <br />(1733–1813)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1735_brandes.jpg" alt="Brandes, Johann Christian (1735–1799)" height="150"><figcaption style="font-size:0.6em;">Brandes, Johann Christian <br />(1735–1799)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Klemm, Christian Gottlob (1736–1802)" height="150"><figcaption style="font-size:0.6em;">Klemm, Christian Gottlob <br />(1736–1802)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1736_sturz.jpg" alt="Sturz, Helfrich Peter (1736–1779)" height="150"><figcaption style="font-size:0.6em;">Sturz, Helfrich Peter <br />(1736–1779)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1737_gerstenberg.jpg" alt="Gerstenberg, Heinrich Wilhelm von (1737–1823)" height="150"><figcaption style="font-size:0.6em;">Gerstenberg, Heinrich Wilhelm von <br />(1737–1823)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Brawe, Joachim Wilhelm von (1738–1758)" height="150"><figcaption style="font-size:0.6em;">Brawe, Joachim Wilhelm von <br />(1738–1758)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1741_engel.jpg" alt="Engel, Johann Jakob (1741–1802)" height="150"><figcaption style="font-size:0.6em;">Engel, Johann Jakob <br />(1741–1802)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1741_hippel.jpg" alt="Hippel, Theodor Gottlieb von (1741–1796)" height="150"><figcaption style="font-size:0.6em;">Hippel, Theodor Gottlieb von <br />(1741–1796)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1741_stephanie.jpg" alt="Stephanie, Johann Gottlieb (der Jüngere) (1741–1800)" height="150"><figcaption style="font-size:0.6em;">Stephanie, Johann Gottlieb (d. J.) <br />(1741–1800)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1744_schroeder.jpg" alt="Schröder, Friedrich Ludwig (1744–1816)" height="150"><figcaption style="font-size:0.6em;">Schröder, Friedrich Ludwig <br />(1744–1816)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Weidmann, Paul (1744–1801)" height="150"><figcaption style="font-size:0.6em;">Weidmann, Paul <br />(1744–1801)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1746_gotter.jpg" alt="Gotter, Friedrich Wilhelm (1746–1797)" height="150"><figcaption style="font-size:0.6em;">Gotter, Friedrich Wilhelm <br />(1746–1797)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Wagner, Heinrich Leopold (1747–1779)" height="150"><figcaption style="font-size:0.6em;">Wagner, Heinrich Leopold <br />(1747–1779)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bretzner, Christoph Friedrich (1748–1807)" height="150"><figcaption style="font-size:0.6em;">Bretzner, Christoph Friedrich <br />(1748–1807)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1749_goethe.jpg" alt="Goethe, Johann Wolfgang von (1749–1832)" height="150"><figcaption style="font-size:0.6em;">Goethe, Johann Wolfgang von <br />(1749–1832)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;text-align:center;margin-top:20px;margin-bottom:20px;"><figure><img src="{{ site.url }}/images/authorpics/1749_mueller.jpg" alt="Müller, Friedrich (Maler Müller) (1749–1825)" height="150"><figcaption style="font-size:0.6em;">Müller, Friedrich (Maler Müller) <br />(1749–1825)</figcaption></figure></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1751_lenz.jpg" alt="Lenz, Jakob Michael Reinhold (1751–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1751_schikaneder.jpg" alt="Schikaneder, Johann Emanuel (1751–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1752_klinger.jpg" alt="Klinger, Friedrich Maximilian (1752–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1752_leisewitz.jpg" alt="Leisewitz, Johann Anton (1752–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1753_toerring.jpg" alt="Törring, Josef August von (1753–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Soden, Julius von (1754–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gemmingen-Hornberg, Otto Heinrich von (1755–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schink, Johann Friedrich (1755–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1759_iffland.jpg" alt="Iffland, August Wilhelm (1759–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Hensler, Karl Friedrich (1759–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1759_schiller.jpg" alt="Schiller, Friedrich (1759–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1761_kotzebue.jpg" alt="Kotzebue, August von (1761–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Benkowitz, Karl Friedrich (1764–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1766_sonnleithner.jpg" alt="Sonnleithner, Joseph Ferdinand von (1766–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1767_schlegel.jpg" alt="Schlegel, August Wilhelm (1767–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1768_kind.jpg" alt="Kind, Johann Friedrich (1768–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1768_voss.jpg" alt="Voß, Julius von (1768–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1768_werner.jpg" alt="Werner, Zacharias (1768–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1771_zschokke.jpg" alt="Zschokke, Heinrich (1771–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gleich, Joseph Alois (1772–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1772_schlegel.jpg" alt="Schlegel, Friedrich (1772–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1773_tieck.jpg" alt="Tieck, Ludwig (1773–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1773_weissenthurn.jpg" alt="Weißenthurn, Johanna von (1773–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Breuning, Stephan von (1774–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1774_muellner.jpg" alt="Müllner, Adolph (1774–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Meisl, Karl (1775–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1776_treitschke.jpg" alt="Treitschke, Georg Friedrich (1776–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1777_kleist.jpg" alt="Kleist, Heinrich von (1777–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1777_klingemann.jpg" alt="Klingemann, August (1777–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1777_motte-fouque.jpg" alt="Fouqué, Friedrich de la Motte (1777–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1778_brentano.jpg" alt="Brentano, Clemens (1778–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bernard, Josef Karl (1780–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1780_guenderode.jpg" alt="Günderode, Karoline von (1780–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1781_arnim.jpg" alt="Arnim, Ludwig Achim von (1781–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1783_chezy.jpg" alt="Chézy, Helmina von (1783–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1784_raupach.jpg" alt="Raupach, Ernst (1784–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1786_baeuerle.jpg" alt="Bäuerle, Adolf (1786–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1787_uhland.jpg" alt="Uhland, Ludwig (1787–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1788_eichendorff.jpg" alt="Eichendorff, Joseph von (1788–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1790_raimund.jpg" alt="Raimund, Ferdinand (1790–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1791_grillparzer.jpg" alt="Grillparzer, Franz (1791–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1791_koerner.jpg" alt="Körner, Theodor (1791–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Kupelwieser, Josef (1791–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1792_malss.jpg" alt="Malß, Karl (1792–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gehe, Eduard Heinrich (1795–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1796_immermann.jpg" alt="Immermann, Karl (1796–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1796_platen.jpg" alt="Platen, August von (1796–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1796_schober.jpg" alt="Schober, Franz von (1796–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1797_droste-huelshoff.jpg" alt="Droste-Hülshoff, Annette von (1797–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1797_heine.jpg" alt="Heine, Heinrich (1797–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1798_holtei.jpg" alt="Holtei, Karl von (1798–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1800_beer.jpg" alt="Beer, Michael (1800–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1800_birch-pfeiffer.jpg" alt="Birch-Pfeiffer, Charlotte (1800–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1801_devrient.jpg" alt="Devrient, Philipp Eduard (1801–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1801_grabbe.jpg" alt="Grabbe, Christian Dietrich (1801–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1801_lortzing.jpg" alt="Lortzing, Albert (Gustav) (1801–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1801_nestroy.jpg" alt="Nestroy, Johann (1801–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1802_bauernfeld.jpg" alt="Bauernfeld, Eduard von (1802–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1802_braun_von_braunthal.jpg" alt="Braun von Braunthal, Karl Johann (1802–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1802_simrock.jpg" alt="Simrock, Karl (1802–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1803_kobell.jpg" alt="Kobell, Franz von (1803–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1804_haffner.jpg" alt="Haffner, Carl (1804–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Wohlbrück, Wilhelm August (1805–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Riese, Friedrich Wilhelm (1805–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1806_halm.jpg" alt="Halm, Friedrich (1806–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1806_laube.jpg" alt="Laube, Heinrich (1806–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1807_vischer.jpg" alt="Vischer, Friedrich Theodor (1807–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1810_schumann.jpg" alt="Schumann, Robert (1810–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1811_benedix.jpg" alt="Benedix, Julius Roderich (1811–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1811_gutzkow.jpg" alt="Gutzkow, Karl (1811–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1813_buechner.jpg" alt="Büchner, Georg (1813–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1813_hebbel.jpg" alt="Hebbel, Friedrich (1813–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1813_ludwig.jpg" alt="Ludwig, Otto (1813–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1813_wagner.jpg" alt="Wagner, Richard (1813–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1814_Kaiser.jpg" alt="Kaiser, Friedrich (1814–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Niebergall, Ernst Elias (1815–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1816_freytag.jpg" alt="Freytag, Gustav (1816–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1816_prutz.jpg" alt="Prutz, Robert Eduard (1816–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1819_dulk.jpg" alt="Dulk, Albert (1819–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Roeber, Friedrich (1819–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1820_kalisch.jpg" alt="Kalisch, David (1820–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1821_mosenthal.jpg" alt="Mosenthal, Salomon Hermann von (1821–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1823_genee.jpg" alt="Genée, Richard (1823–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1824_cornelius.jpg" alt="Cornelius, Peter (1824–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1825_lassalle.jpg" alt="Lassalle, Ferdinand (1825–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1825_moser.jpg" alt="Moser, Gustav von (1825–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1830_heyse.jpg" alt="Heyse, Paul (1830–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Berg, O. F. (1833–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schäfer, Wilhelm (1835–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bunge, Rudolf (1836–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1837_wilbrandt.jpg" alt="Wilbrandt, Adolf von (1837–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1838_larronge.jpg" alt="L'Arronge, Adolph (1838–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1839_anzengruber.jpg" alt="Anzengruber, Ludwig (1839–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1839_schnitzer.jpg" alt="Schnitzer, Ignaz (1839–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1840_goetz.jpg" alt="Goetz, Hermann (1840–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1842_may.jpg" alt="May, Karl (1842–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Widmann, Joseph Viktor (1842–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1845_wildenbruch.jpg" alt="Wildenbruch, Ernst von (1845–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1849_schoenthan.jpg" alt="Schönthan, Franz und Paul von (1849–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1851_kadelburg.jpg" alt="Kadelburg, Gustav (1851–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1852_blumenthal.jpg" alt="Blumenthal, Oskar (1852–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1853_panizza.jpg" alt="Panizza, Oskar (1853–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1855_ganghofer.jpg" alt="Ganghofer, Ludwig (1855–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Jacoby, Wilhelm (1855–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1856_avenarius.jpg" alt="Avenarius, Ferdinand (1856–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1857_sudermann.jpg" alt="Sudermann, Hermann (1857–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1858_hauptmann.jpg" alt="Hauptmann, Carl (1858–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Laufs, Carl (1858–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_female.jpg" alt="Wette, Adelheid (1858–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bleibtreu, Karl (1859–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Jerschke, Oskar (1861–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1861_ruederer.jpg" alt="Ruederer, Josef (1861–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Alberti, Konrad (1862–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1862_schlaf.jpg" alt="Schlaf, Johannes (1862–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1862_schnitzler.jpg" alt="Schnitzler, Arthur (1862–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1863_dehmel.jpg" alt="Dehmel, Richard (1863–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1863_holz.jpg" alt="Holz, Arno (1863–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1863_scheerbart.jpg" alt="Scheerbart, Paul (1863–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1864_hartleben.jpg" alt="Hartleben, Otto Erich (1864–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1864_wedekind.jpg" alt="Wedekind, Frank (1864–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1865_lachmann.jpg" alt="Lachmann, Hedwig (1865–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1866_busoni.jpg" alt="Busoni, Ferruccio (1866–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1866_dovsky.jpg" alt="Dovsky, Beatrice (1866–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1867_thoma.jpg" alt="Thoma, Ludwig (1867–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gerhäuser, Emil (1868–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Rosenow, Emil (1871–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1874_hofmannsthal.jpg" alt="Hofmannsthal, Hugo von (1874–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1875_heiseler.jpg" alt="Heiseler, Henry von (1875–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1875_rilke.jpg" alt="Rilke, Rainer Maria (1875–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1876_stavenhagen.jpg" alt="Stavenhagen, Fritz (1876–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Boßdorf, Hermann (1877–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1878_essig.jpg" alt="Essig, Hermann (1878–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1878_muehsam.jpg" alt="Mühsam, Erich (1878–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1880_fock.jpg" alt="Fock, Gorch (1880–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1881_lautensack.jpg" alt="Lautensack, Heinrich (1881–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Rubiner, Ludwig (1881–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1881_wildgans.jpg" alt="Wildgans, Anton (1881–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1886_ball.jpg" alt="Ball, Hugo (1886–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Ertler, Bruno (1889–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1890_klabund.jpg" alt="Klabund (1890–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/1892_sorge.jpg" alt="Sorge, Reinhard (1892–)" height="150"></li>
  <li style="float:left;width:25%;border:0px;"><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Kaltneker, Hans (1895–)" height="150"></li>
 </ul>
</div>
<div style="clear:left;" />

## Gender Data and Placeholder Images

We also extracted gender information from Wikidata. As you can see, there are only 10 female writers among the 178 authors. 

(to be continued)

