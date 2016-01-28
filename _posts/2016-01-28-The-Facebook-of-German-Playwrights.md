---
layout: post
title: "The Facebook of German Playwrights"
author: [martin, frank]
description: 
headline: 
modified: 2016-01-28
category: Updates
tags: []
imagefeature: 
mathjax: 
chart: 
comments: true
list: false
featured: false
---

This short article is a follow-up to the our last post, ["The Birth & Death of German Playwrights"](/The-Birth-and-Death-of-German-Playwrights/). To 
We had used authority-file metadata to plot birth and death places on a map to get an insight into who the 178 authors are that our corpus of 465 German-language theatre plays. Those 465 plays were written by 178 authors altogether (some of the plays/libretti have co-authorship). Now let's have a look at the faces our playwrights and generate a gallery with portraits of all of them (if available in Wikimedia Commons). We're making use of Wikidata again, but this time with nothing more than an XSLT transformation. Some simple BASH scripting was added to build the actual gallery for this blogpost. Now without further ado, this is the gallery:

<div id="portraitgallery">
 <ul>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Friederike_Caroline_Neuber_1898_Neuer_Theater-Almanch.png"><img src="{{ site.url }}/images/authorpics/1697_neuber.jpg" alt="Neuber, Friederike Caroline (1697–1760)"></figure></a><figcaption>Neuber, Friederike Caroline <br />(1697–1760)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Bodmer.jpg"><img src="{{ site.url }}/images/authorpics/1698_bodmer.jpg" alt="Bodmer, Johann Jacob (1698–1783)"></a><figcaption>Bodmer, Johann Jacob <br />(1698–1783)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Johann_Christoph_Gottsched.jpg"><img src="{{ site.url }}/images/authorpics/1700_gottsched.jpg" alt="Gottsched, Johann Christoph (1700–1766)"></a><figcaption>Gottsched, Johann Christoph <br />(1700–1766)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Borkenstein, Hinrich (1705–1777)"><figcaption>Borkenstein, Hinrich <br />(1705–1777)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Gottschedin.jpg"><img src="{{ site.url }}/images/authorpics/1713_gottsched.jpg" alt="Gottsched, Luise Adelgunde Victorie (1713–1762)"></a><figcaption>Gottsched, Luise Adelgunde Victorie <br />(1713–1762)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Christian_Fürchtegott_Gellert.jpg"><img src="{{ site.url }}/images/authorpics/1715_gellert.jpg" alt="Gellert, Christian Fürchtegott (1715–1769)"></a><figcaption>Gellert, Christian Fürchtegott <br />(1715–1769)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Kurz_Stich.jpg"><img src="{{ site.url }}/images/authorpics/1717_kurz.jpg" alt="Kurz, Joseph von (1717–1784)"></a><figcaption>Kurz, Joseph von <br />(1717–1784)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schlegel, Johann Elias (1719–1749)"><figcaption>Schlegel, Johann Elias <br />(1719–1749)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Leopold-von-auenbrugger.jpg"><img src="{{ site.url }}/images/authorpics/1722_auenbrugger.jpg" alt="Auenbrugger, Johann Leopold von (1722–1809)"></a><figcaption>Auenbrugger, Johann Leopold von <br />(1722–1809)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Mylius, Christlob (1722–1754)"><figcaption>Mylius, Christlob <br />(1722–1754)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Quistorp, Theodor Johann (1722–1776)"><figcaption>Quistorp, Theodor Johann <br />(1722–1776)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Krüger, Johann Christian (1723–1750)"><figcaption>Krüger, Johann Christian <br />(1723–1750)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Klopstock_(Füßli).jpg"><img src="{{ site.url }}/images/authorpics/1724_klopstock.jpg" alt="Klopstock, Friedrich Gottlieb (1724–1803)"></a><figcaption>Klopstock, Friedrich Gottlieb <br />(1724–1803)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Christian_felix_weisse.jpg"><img src="{{ site.url }}/images/authorpics/1726_weisse.jpg" alt="Weiße, Christian Felix (1726–1804)"></a><figcaption>Weiße, Christian Felix <br />(1726–1804)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Gotthold_Ephraim_Lessing_Kunstsammlung_Uni_Leipzig.jpg"><img src="{{ site.url }}/images/authorpics/1729_lessing.jpg" alt="Lessing, Gotthold Ephraim (1729–1781)"></a><figcaption>Lessing, Gotthold Ephraim <br />(1729–1781)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Anton_Graff_Salomon_Gessner.jpg"><img src="{{ site.url }}/images/authorpics/1730_gessner.jpg" alt="Gessner, Salomon (1730–1788)"></a><figcaption>Gessner, Salomon <br />(1730–1788)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Johann_Friedrich_Freiherr_von_Cronegk.jpg"><img src="{{ site.url }}/images/authorpics/1731_cronegk.jpg" alt="Cronegk, Johann Friedrich von (1731–1758)"></a><figcaption>Cronegk, Johann Friedrich von <br />(1731–1758)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Hafner, Philipp (1731–1764)"><figcaption>Hafner, Philipp <br />(1731–1764)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Pfeil, Johann Gottlob Benjamin (1732–1800)"><figcaption>Pfeil, Johann Gottlob Benjamin <br />(1732–1800)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Ayrenhoff,_Cornelius_von1.jpg"><img src="{{ site.url }}/images/authorpics/1733_ayrenhoff.jpg" alt="Ayrenhoff, Cornelius Hermann von (1733–1819)"></a><figcaption>Ayrenhoff, Cornelius Hermann von <br />(1733–1819)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Christoph_Martin_Wieland_by_Jagemann_1805.jpg"><img src="{{ site.url }}/images/authorpics/1733_wieland.jpg" alt="Wieland, Christoph Martin (1733–1813)"></a><figcaption>Wieland, Christoph Martin <br />(1733–1813)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Johann_Christian_Brandes.jpg"><img src="{{ site.url }}/images/authorpics/1735_brandes.jpg" alt="Brandes, Johann Christian (1735–1799)"></a><figcaption>Brandes, Johann Christian <br />(1735–1799)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Klemm, Christian Gottlob (1736–1802)"><figcaption>Klemm, Christian Gottlob <br />(1736–1802)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Helfrich_Peter_Sturz_1.jpg"><img src="{{ site.url }}/images/authorpics/1736_sturz.jpg" alt="Sturz, Helfrich Peter (1736–1779)"></a><figcaption>Sturz, Helfrich Peter <br />(1736–1779)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Heinrich_W._von_Gerstenberg.jpg"><img src="{{ site.url }}/images/authorpics/1737_gerstenberg.jpg" alt="Gerstenberg, Heinrich Wilhelm von (1737–1823)"></a><figcaption>Gerstenberg, Heinrich Wilhelm von <br />(1737–1823)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Brawe, Joachim Wilhelm von (1738–1758)"><figcaption>Brawe, Joachim Wilhelm von <br />(1738–1758)</figcaption></figure></li>
  <li><figure><a href="https://commons.wikimedia.org/wiki/File:Johann_Jacob_Engel.jpg"><img src="{{ site.url }}/images/authorpics/1741_engel.jpg" alt="Engel, Johann Jakob (1741–1802)"></a><figcaption>Engel, Johann Jakob <br />(1741–1802)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1741_hippel.jpg" alt="Hippel, Theodor Gottlieb von (1741–1796)"></a><figcaption>Hippel, Theodor Gottlieb von <br />(1741–1796)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1741_stephanie.jpg" alt="Stephanie, Johann Gottlieb (der Jüngere) (1741–1800)"></a><figcaption>Stephanie, Johann Gottlieb (d. J.) <br />(1741–1800)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1744_schroeder.jpg" alt="Schröder, Friedrich Ludwig (1744–1816)"></a><figcaption>Schröder, Friedrich Ludwig <br />(1744–1816)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Weidmann, Paul (1744–1801)"><figcaption>Weidmann, Paul <br />(1744–1801)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1746_gotter.jpg" alt="Gotter, Friedrich Wilhelm (1746–1797)"></a><figcaption>Gotter, Friedrich Wilhelm <br />(1746–1797)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Wagner, Heinrich Leopold (1747–1779)"><figcaption>Wagner, Heinrich Leopold <br />(1747–1779)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bretzner, Christoph Friedrich (1748–1807)"><figcaption>Bretzner, Christoph Friedrich <br />(1748–1807)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1749_goethe.jpg" alt="Goethe, Johann Wolfgang von (1749–1832)"></a><figcaption>Goethe, Johann Wolfgang von <br />(1749–1832)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1749_mueller.jpg" alt="Müller, Friedrich (Maler Müller) (1749–1825)"></a><figcaption>Müller, Friedrich (Maler Müller) <br />(1749–1825)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1751_lenz.jpg" alt="Lenz, Jakob Michael Reinhold (1751–1792)"></a><figcaption>Lenz, Jakob Michael Reinhold <br />(1751–1792)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1751_schikaneder.jpg" alt="Schikaneder, Johann Emanuel (1751–1812)"></a><figcaption>Schikaneder, Johann Emanuel <br />(1751–1812)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1752_klinger.jpg" alt="Klinger, Friedrich Maximilian (1752–1831)"></a><figcaption>Klinger, Friedrich Maximilian <br />(1752–1831)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1752_leisewitz.jpg" alt="Leisewitz, Johann Anton (1752–1806)"></a><figcaption>Leisewitz, Johann Anton <br />(1752–1806)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1753_toerring.jpg" alt="Törring, Josef August von (1753–1826)"></a><figcaption>Törring, Josef August von <br />(1753–1826)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Soden, Julius von (1754–1831)"><figcaption>Soden, Julius von <br />(1754–1831)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gemmingen-Hornberg, Otto Heinrich von (1755–1836)"><figcaption>Gemmingen-Hornberg, Otto Heinrich von <br />(1755–1836)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schink, Johann Friedrich (1755–1835)"><figcaption>Schink, Johann Friedrich <br />(1755–1835)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1759_iffland.jpg" alt="Iffland, August Wilhelm (1759–1814)"></a><figcaption>Iffland, August Wilhelm <br />(1759–1814)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Hensler, Karl Friedrich (1759–1825)"><figcaption>Hensler, Karl Friedrich <br />(1759–1825)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1759_schiller.jpg" alt="Schiller, Friedrich (1759–1805)"></a><figcaption>Schiller, Friedrich <br />(1759–1805)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1761_kotzebue.jpg" alt="Kotzebue, August von (1761–1819)"></a><figcaption>Kotzebue, August von <br />(1761–1819)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Benkowitz, Karl Friedrich (1764–1807)"><figcaption>Benkowitz, Karl Friedrich <br />(1764–1807)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1766_sonnleithner.jpg" alt="Sonnleithner, Joseph Ferdinand von (1766–1835)"></a><figcaption>Sonnleithner, Joseph Ferdinand von <br />(1766–1835)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1767_schlegel.jpg" alt="Schlegel, August Wilhelm (1767–1845)"></a><figcaption>Schlegel, August Wilhelm <br />(1767–1845)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1768_kind.jpg" alt="Kind, Johann Friedrich (1768–1843)"></a><figcaption>Kind, Johann Friedrich <br />(1768–1843)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1768_voss.jpg" alt="Voß, Julius von (1768–1832)"></a><figcaption>Voß, Julius von <br />(1768–1832)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1768_werner.jpg" alt="Werner, Zacharias (1768–1823)"></a><figcaption>Werner, Zacharias <br />(1768–1823)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1771_zschokke.jpg" alt="Zschokke, Heinrich (1771–1848)"></a><figcaption>Zschokke, Heinrich <br />(1771–1848)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gleich, Joseph Alois (1772–1841)"><figcaption>Gleich, Joseph Alois <br />(1772–1841)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1772_schlegel.jpg" alt="Schlegel, Friedrich (1772–1829)"></a><figcaption>Schlegel, Friedrich <br />(1772–1829)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1773_tieck.jpg" alt="Tieck, Ludwig (1773–1853)"></a><figcaption>Tieck, Ludwig <br />(1773–1853)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1773_weissenthurn.jpg" alt="Weißenthurn, Johanna von (1773–1847)"></a><figcaption>Weißenthurn, Johanna von <br />(1773–1847)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Breuning, Stephan von (1774–1827)"><figcaption>Breuning, Stephan von <br />(1774–1827)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1774_muellner.jpg" alt="Müllner, Adolph (1774–1829)"></a><figcaption>Müllner, Adolph <br />(1774–1829)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Meisl, Karl (1775–1853)"><figcaption>Meisl, Karl <br />(1775–1853)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1776_treitschke.jpg" alt="Treitschke, Georg Friedrich (1776–1842)"></a><figcaption>Treitschke, Georg Friedrich <br />(1776–1842)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1777_kleist.jpg" alt="Kleist, Heinrich von (1777–1811)"></a><figcaption>Kleist, Heinrich von <br />(1777–1811)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1777_klingemann.jpg" alt="Klingemann, Ernst August Friedrich (1777–1831)"></a><figcaption>Klingemann, Ernst August Friedrich <br />(1777–1831)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1777_motte-fouque.jpg" alt="Fouqué, Friedrich de la Motte (1777–1843)"></a><figcaption>Fouqué, Friedrich de la Motte <br />(1777–1843)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1778_brentano.jpg" alt="Brentano, Clemens (1778–1842)"></a><figcaption>Brentano, Clemens <br />(1778–1842)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bernard, Josef Karl (1780–1850)"><figcaption>Bernard, Josef Karl <br />(1780–1850)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1780_guenderode.jpg" alt="Günderode, Karoline von (1780–1806)"></a><figcaption>Günderode, Karoline von <br />(1780–1806)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1781_arnim.jpg" alt="Arnim, Ludwig Achim von (1781–1831)"></a><figcaption>Arnim, Ludwig Achim von <br />(1781–1831)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1783_chezy.jpg" alt="Chézy, Helmina von (1783–1856)"></a><figcaption>Chézy, Helmina von <br />(1783–1856)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1784_raupach.jpg" alt="Raupach, Ernst (1784–1852)"></a><figcaption>Raupach, Ernst <br />(1784–1852)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1786_baeuerle.jpg" alt="Bäuerle, Adolf (1786–1859)"></a><figcaption>Bäuerle, Adolf <br />(1786–1859)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1787_uhland.jpg" alt="Uhland, Ludwig (1787–1862)"></a><figcaption>Uhland, Ludwig <br />(1787–1862)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1788_eichendorff.jpg" alt="Eichendorff, Joseph von (1788–1857)"></a><figcaption>Eichendorff, Joseph von <br />(1788–1857)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1790_raimund.jpg" alt="Raimund, Ferdinand (1790–1836)"></a><figcaption>Raimund, Ferdinand <br />(1790–1836)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1791_grillparzer.jpg" alt="Grillparzer, Franz (1791–1872)"></a><figcaption>Grillparzer, Franz <br />(1791–1872)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1791_koerner.jpg" alt="Körner, Theodor (1791–1813)"></a><figcaption>Körner, Theodor <br />(1791–1813)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Kupelwieser, Josef (1791–1866)"><figcaption>Kupelwieser, Josef <br />(1791–1866)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1792_malss.jpg" alt="Malß, Karl (1792–1848)"><figcaption>Malß, Karl <br />(1792–1848)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gehe, Eduard Heinrich (1795–1830)"><figcaption>Gehe, Eduard Heinrich <br />(1795–1830)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Wohlbrück, Wilhelm August (1795–1848)"><figcaption>Wohlbrück, Wilhelm August <br />(1795–1848)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1796_immermann.jpg" alt="Immermann, Karl (1796–1840)"></a><figcaption>Immermann, Karl <br />(1796–1840)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1796_platen.jpg" alt="Platen, August von (1796–1835)"></a><figcaption>Platen, August von <br />(1796–1835)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1796_schober.jpg" alt="Schober, Franz von (1796–1882)"></a><figcaption>Schober, Franz von <br />(1796–1882)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1797_droste-huelshoff.jpg" alt="Droste-Hülshoff, Annette von (1797–1848)"></a><figcaption>Droste-Hülshoff, Annette von <br />(1797–1848)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1797_heine.jpg" alt="Heine, Heinrich (1797–1856)"></a><figcaption>Heine, Heinrich <br />(1797–1856)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1798_holtei.jpg" alt="Holtei, Karl von (1798–1880)"></a><figcaption>Holtei, Karl von <br />(1798–1880)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1800_beer.jpg" alt="Beer, Michael (1800–1833)"></a><figcaption>Beer, Michael <br />(1800–1833)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1800_birch-pfeiffer.jpg" alt="Birch-Pfeiffer, Charlotte (1800–1868)"></a><figcaption>Birch-Pfeiffer, Charlotte <br />(1800–1868)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1801_devrient.jpg" alt="Devrient, Philipp Eduard (1801–1877)"></a><figcaption>Devrient, Philipp Eduard <br />(1801–1877)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1801_grabbe.jpg" alt="Grabbe, Christian Dietrich (1801–1836)"></a><figcaption>Grabbe, Christian Dietrich <br />(1801–1836)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1801_lortzing.jpg" alt="Lortzing, Albert (Gustav) (1801–1851)"></a><figcaption>Lortzing, Albert (Gustav) <br />(1801–1851)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1801_nestroy.jpg" alt="Nestroy, Johann (1801–1862)"></a><figcaption>Nestroy, Johann <br />(1801–1862)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1802_bauernfeld.jpg" alt="Bauernfeld, Eduard von (1802–1890)"></a><figcaption>Bauernfeld, Eduard von <br />(1802–1890)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1802_braun_von_braunthal.jpg" alt="Braun von Braunthal, Karl Johann (1802–1866)"></a><figcaption>Braun von Braunthal, Karl Johann <br />(1802–1866)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1802_simrock.jpg" alt="Simrock, Karl (1802–1876)"></a><figcaption>Simrock, Karl <br />(1802–1876)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1803_kobell.jpg" alt="Kobell, Franz von (1803–1882)"></a><figcaption>Kobell, Franz von <br />(1803–1882)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1804_haffner.jpg" alt="Haffner, Carl (1804–1876)"></a><figcaption>Haffner, Carl <br />(1804–1876)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Riese, Friedrich Wilhelm (1805–1879)"><figcaption>Riese, Friedrich Wilhelm <br />(1805–1879)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1806_halm.jpg" alt="Halm, Friedrich (1806–1871)"></a><figcaption>Halm, Friedrich <br />(1806–1871)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1806_laube.jpg" alt="Laube, Heinrich (1806–1884)"></a><figcaption>Laube, Heinrich <br />(1806–1884)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1807_vischer.jpg" alt="Vischer, Friedrich Theodor (1807–1887)"></a><figcaption>Vischer, Friedrich Theodor <br />(1807–1887)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1810_schumann.jpg" alt="Schumann, Robert (1810–1856)"></a><figcaption>Schumann, Robert <br />(1810–1856)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1811_benedix.jpg" alt="Benedix, Julius Roderich (1811–1873)"></a><figcaption>Benedix, Julius Roderich <br />(1811–1873)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1811_gutzkow.jpg" alt="Gutzkow, Karl (1811–1878)"></a><figcaption>Gutzkow, Karl <br />(1811–1878)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1813_buechner.jpg" alt="Büchner, Georg (1813–1837)"></a><figcaption>Büchner, Georg <br />(1813–1837)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1813_hebbel.jpg" alt="Hebbel, Friedrich (1813–1863)"></a><figcaption>Hebbel, Friedrich <br />(1813–1863)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1813_ludwig.jpg" alt="Ludwig, Otto (1813–1865)"></a><figcaption>Ludwig, Otto <br />(1813–1865)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1813_wagner.jpg" alt="Wagner, Richard (1813–1883)"></a><figcaption>Wagner, Richard <br />(1813–1883)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1814_Kaiser.jpg" alt="Kaiser, Friedrich (1814–1874)"></a><figcaption>Kaiser, Friedrich <br />(1814–1874)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Niebergall, Ernst Elias (1815–1843)"><figcaption>Niebergall, Ernst Elias <br />(1815–1843)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1816_freytag.jpg" alt="Freytag, Gustav (1816–1895)"></a><figcaption>Freytag, Gustav <br />(1816–1895)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1816_prutz.jpg" alt="Prutz, Robert Eduard (1816–1872)"></a><figcaption>Prutz, Robert Eduard <br />(1816–1872)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1819_dulk.jpg" alt="Dulk, Albert (1819–1884)"></a><figcaption>Dulk, Albert <br />(1819–1884)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Roeber, Friedrich (1819–1901)"><figcaption>Roeber, Friedrich <br />(1819–1901)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1820_kalisch.jpg" alt="Kalisch, David (1820–1872)"></a><figcaption>Kalisch, David <br />(1820–1872)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1821_mosenthal.jpg" alt="Mosenthal, Salomon Hermann von (1821–1877)"></a><figcaption>Mosenthal, Salomon Hermann von <br />(1821–1877)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1823_genee.jpg" alt="Genée, Richard (1823–1895)"></a><figcaption>Genée, Richard <br />(1823–1895)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1824_cornelius.jpg" alt="Cornelius, Peter (1824–1874)"></a><figcaption>Cornelius, Peter <br />(1824–1874)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1825_lassalle.jpg" alt="Lassalle, Ferdinand (1825–1864)"></a><figcaption>Lassalle, Ferdinand <br />(1825–1864)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1825_moser.jpg" alt="Moser, Gustav von (1825–1903)"></a><figcaption>Moser, Gustav von <br />(1825–1903)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1830_heyse.jpg" alt="Heyse, Paul (1830–1914)"></a><figcaption>Heyse, Paul <br />(1830–1914)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Berg, O. F. (1833–1886)"><figcaption>Berg, O. F. <br />(1833–1886)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Schaefer, Wilhelm (1835–1908)"><figcaption>Schaefer, Wilhelm <br />(1835–1908)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bunge, Rudolf (1836–1907)"><figcaption>Bunge, Rudolf <br />(1836–1907)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1837_wilbrandt.jpg" alt="Wilbrandt, Adolf von (1837–1911)"></a><figcaption>Wilbrandt, Adolf von <br />(1837–1911)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1838_larronge.jpg" alt="L'Arronge, Adolph (1838–1908)"></a><figcaption>L'Arronge, Adolph <br />(1838–1908)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1839_anzengruber.jpg" alt="Anzengruber, Ludwig (1839–1889)"></a><figcaption>Anzengruber, Ludwig <br />(1839–1889)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1839_schnitzer.jpg" alt="Schnitzer, Ignaz (1839–1921)"></a><figcaption>Schnitzer, Ignaz <br />(1839–1921)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1840_goetz.jpg" alt="Goetz, Hermann (1840–1876)"></a><figcaption>Goetz, Hermann <br />(1840–1876)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1842_may.jpg" alt="May, Karl (1842–1912)"></a><figcaption>May, Karl <br />(1842–1912)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Widmann, Joseph Viktor (1842–1911)"><figcaption>Widmann, Joseph Viktor <br />(1842–1911)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1845_wildenbruch.jpg" alt="Wildenbruch, Ernst von (1845–1909)"></a><figcaption>Wildenbruch, Ernst von <br />(1845–1909)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1849_schoenthan.jpg" alt="Schönthan, Franz von (1849–1913)"></a><figcaption>Schönthan, Franz von <br />(1849–1913)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1851_kadelburg.jpg" alt="Kadelburg, Gustav (1851–1925)"></a><figcaption>Kadelburg, Gustav <br />(1851–1925)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1852_blumenthal.jpg" alt="Blumenthal, Oskar (1852–1917)"></a><figcaption>Blumenthal, Oskar <br />(1852–1917)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1853_panizza.jpg" alt="Panizza, Oskar (1853–1921)"></a><figcaption>Panizza, Oskar <br />(1853–1921)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1855_ganghofer.jpg" alt="Ganghofer, Ludwig (1855–1920)"></a><figcaption>Ganghofer, Ludwig <br />(1855–1920)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Jacoby, Wilhelm (1855–1925)"><figcaption>Jacoby, Wilhelm <br />(1855–1925)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1856_avenarius.jpg" alt="Avenarius, Ferdinand (1856–1923)"></a><figcaption>Avenarius, Ferdinand <br />(1856–1923)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1857_sudermann.jpg" alt="Sudermann, Hermann (1857–1928)"></a><figcaption>Sudermann, Hermann <br />(1857–1928)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1858_hauptmann.jpg" alt="Hauptmann, Carl (1858–1921)"></a><figcaption>Hauptmann, Carl <br />(1858–1921)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Laufs, Carl (1858–1900)"><figcaption>Laufs, Carl <br />(1858–1900)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_female.jpg" alt="Wette, Adelheid (1858–1916)"><figcaption>Wette, Adelheid <br />(1858–1916)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Bleibtreu, Karl (1859–1928)"><figcaption>Bleibtreu, Karl <br />(1859–1928)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Jerschke, Oskar (1861–1928)"><figcaption>Jerschke, Oskar <br />(1861–1928)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1861_ruederer.jpg" alt="Ruederer, Josef (1861–1915)"></a><figcaption>Ruederer, Josef <br />(1861–1915)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Alberti, Konrad (1862–1918)"><figcaption>Alberti, Konrad <br />(1862–1918)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1862_schlaf.jpg" alt="Schlaf, Johannes (1862–1941)"></a><figcaption>Schlaf, Johannes <br />(1862–1941)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1862_schnitzler.jpg" alt="Schnitzler, Arthur (1862–1931)"></a><figcaption>Schnitzler, Arthur <br />(1862–1931)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1863_dehmel.jpg" alt="Dehmel, Richard (1863–1920)"></a><figcaption>Dehmel, Richard <br />(1863–1920)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1863_holz.jpg" alt="Holz, Arno (1863–1929)"></a><figcaption>Holz, Arno <br />(1863–1929)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1863_scheerbart.jpg" alt="Scheerbart, Paul (1863–1915)"></a><figcaption>Scheerbart, Paul <br />(1863–1915)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1864_hartleben.jpg" alt="Hartleben, Otto Erich (1864–1905)"></a><figcaption>Hartleben, Otto Erich <br />(1864–1905)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1864_wedekind.jpg" alt="Wedekind, Frank (1864–1918)"></a><figcaption>Wedekind, Frank <br />(1864–1918)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1865_lachmann.jpg" alt="Lachmann, Hedwig (1865–1918)"></a><figcaption>Lachmann, Hedwig <br />(1865–1918)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1866_busoni.jpg" alt="Busoni, Ferruccio (1866–1924)"></a><figcaption>Busoni, Ferruccio <br />(1866–1924)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1866_dovsky.jpg" alt="Dovsky, Beatrice (1866–1923)"></a><figcaption>Dovsky, Beatrice <br />(1866–1923)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1867_thoma.jpg" alt="Thoma, Ludwig (1867–1921)"></a><figcaption>Thoma, Ludwig <br />(1867–1921)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Gerhäuser, Emil (1868–1917)"><figcaption>Gerhäuser, Emil <br />(1868–1917)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Rosenow, Emil (1871–1904)"><figcaption>Rosenow, Emil <br />(1871–1904)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1874_hofmannsthal.jpg" alt="Hofmannsthal, Hugo von (1874–1929)"></a><figcaption>Hofmannsthal, Hugo von <br />(1874–1929)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1875_heiseler.jpg" alt="Heiseler, Henry von (1875–1928)"></a><figcaption>Heiseler, Henry von <br />(1875–1928)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1875_rilke.jpg" alt="Rilke, Rainer Maria (1875–1926)"></a><figcaption>Rilke, Rainer Maria <br />(1875–1926)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1876_stavenhagen.jpg" alt="Stavenhagen, Fritz (1876–1906)"></a><figcaption>Stavenhagen, Fritz <br />(1876–1906)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Boßdorf, Hermann (1877–1921)"><figcaption>Boßdorf, Hermann <br />(1877–1921)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1878_essig.jpg" alt="Essig, Hermann (1878–1918)"></a><figcaption>Essig, Hermann <br />(1878–1918)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1878_muehsam.jpg" alt="Mühsam, Erich (1878–1934)"></a><figcaption>Mühsam, Erich <br />(1878–1934)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1880_fock.jpg" alt="Fock, Gorch (1880–1916)"></a><figcaption>Fock, Gorch <br />(1880–1916)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1881_lautensack.jpg" alt="Lautensack, Heinrich (1881–1919)"></a><figcaption>Lautensack, Heinrich <br />(1881–1919)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Rubiner, Ludwig (1881–1920)"><figcaption>Rubiner, Ludwig <br />(1881–1920)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1881_wildgans.jpg" alt="Wildgans, Anton (1881–1932)"></a><figcaption>Wildgans, Anton <br />(1881–1932)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1886_ball.jpg" alt="Ball, Hugo (1886–1927)"></a><figcaption>Ball, Hugo <br />(1886–1927)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Ertler, Bruno (1889–1927)"><figcaption>Ertler, Bruno <br />(1889–1927)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1890_klabund.jpg" alt="Klabund (1890–1928)"></a><figcaption>Klabund <br />(1890–1928)</figcaption></figure></li>
  <li><figure><a href=""><img src="{{ site.url }}/images/authorpics/1892_sorge.jpg" alt="Sorge, Reinhard (1892–1916)"></a><figcaption>Sorge, Reinhard <br />(1892–1916)</figcaption></figure></li>
  <li><figure><img src="{{ site.url }}/images/authorpics/noimage_male.jpg" alt="Kaltneker, Hans (1895–1919)"><figcaption>Kaltneker, Hans <br />(1895–1919)</figcaption></figure></li>
 </ul>
</div>
<div style="clear:left;" />

## How It Was Done

The XSLT file for the automatic generation of the gallery out of the TEI files that comprise our corpus is **[here](https://github.com/dlina/project/blob/master/apps/scripts/tei-author-portrait.xsl)**.

The renaming of the image files was done with some regexps on BASH, the conversion and crunching of the images to 150px height were done with the ImageMagick command-line tool ``convert`` like this:

{% highlight bash %}
for file in $SOURCE_DIR/*
do
  convert $file -strip -resize x150 -quality 60 $TARGET_DIR/`basename $(echo $file | sed 's/\(gif\|png\)/jpg/g')`
done
{% endhighlight %}

## Gender Data and Placeholder Images

We also extracted gender information from Wikidata. As you can see, there are only 10 female writers among the 178 authors. 

(to be continued)

