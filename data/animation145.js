setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'balaf'},ab = {id: 'ab', name:'karak'},ac = {id: 'ac', name:'königinmutter'},ad = {id: 'ad', name:'klageweiber'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Erstes Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ae af ag ah ai aj ak al am an */ var  aa = nodes[0] ,ae = {id: 'ae', name:'truffaldino'},af = {id: 'af', name:'die_doktoren'},ag = {id: 'ag', name:'chor'},ah = {id: 'ah', name:'altoum'},ai = {id: 'ai', name:'pantalone'},aj = {id: 'aj', name:'tartaglia'},ak = {id: 'ak', name:'turandot'},al = {id: 'al', name:'adelma'},am = {id: 'am', name:'männerchor'},an = {id: 'an', name:'frauenchor'} ; nodes.push( ae,af,ag,ah,ai,aj,ak,al,am,an ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: af },{source: ae , target: am },{source: ae , target: an },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: af },{source: aa , target: am },{source: aa , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweites Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ag','aa','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ae ah ai aj ak al ao */ var  ae = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = nodes[5] ,ao = {id: 'ao', name:'mädchenchor'} ; nodes.push( ao ); links.push( {source: ak , target: ao },{source: ak , target: al },{source: al , target: ao },{source: ae , target: ao },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ah , target: ao },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: ao },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: aj },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Drittes Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ae ag ah ai aj ak al an ap */ var  aa = {id: 'aa', name:'balaf'},ae = nodes[0] ,ag = {id: 'ag', name:'chor'},ah = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = nodes[5] ,an = {id: 'an', name:'frauenchor'},ap = {id: 'ap', name:'eunuchen'} ; nodes.push( aa,ag,an,ap ); links.push( {source: aj , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: ap },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: ap },{source: an , target: ap },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: al },{source: aa , target: ap },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: an },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ap },{source: ak , target: an },{source: ak , target: al },{source: ak , target: ap },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ap },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: an },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: ag },{source: ae , target: al },{source: ae , target: ap },{source: al , target: an },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Letztes Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 15000);
