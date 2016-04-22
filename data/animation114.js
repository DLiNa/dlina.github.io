setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'der_rangälteste_hauptmann'},ab = {id: 'ab', name:'von_marschall'},ac = {id: 'ac', name:'von_grobitzsch'},ad = {id: 'ad', name:'verschiedene'},ae = {id: 'ae', name:'moritz'},af = {id: 'af', name:'die_fähnriche_und_fahnenjunker'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'peter'},ah = {id: 'ah', name:'fritz'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ae ag ai aj ak al am an */ var  ab = {id: 'ab', name:'von_marschall'},ac = {id: 'ac', name:'von_grobitzsch'},ae = {id: 'ae', name:'moritz'},ag = nodes[0] ,ai = {id: 'ai', name:'ordonnanz'},aj = {id: 'aj', name:'tiedemann'},ak = {id: 'ak', name:'paul_von_ramberg'},al = {id: 'al', name:'glahn'},am = {id: 'am', name:'benno'},an = {id: 'an', name:'meitzen'} ; nodes.push( ab,ac,ae,ai,aj,ak,al,am,an ); links.push( {source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: am },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: am },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: am },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: am },{source: al , target: am },{source: al , target: an },{source: al , target: am },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ae },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: am },{source: am , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ai','aj','ae','ak','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac al */ var  ab = nodes[0] ,ac = nodes[1] ,al = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: al },{source: ab , target: ac },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac ae ag ai ak al am an ao ap */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'moritz'},ag = {id: 'ag', name:'peter'},ai = {id: 'ai', name:'ordonnanz'},ak = {id: 'ak', name:'paul_von_ramberg'},al = nodes[2] ,am = {id: 'am', name:'benno'},an = {id: 'an', name:'meitzen'},ao = {id: 'ao', name:'hans'},ap = {id: 'ap', name:'harold'} ; nodes.push( ae,ag,ai,ak,am,an,ao,ap ); links.push( {source: ao , target: ap },{source: ab , target: ao },{source: ab , target: ao },{source: ab , target: al },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: am },{source: ab , target: ai },{source: ab , target: an },{source: ab , target: ap },{source: ao , target: ap },{source: al , target: ao },{source: al , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ap },{source: ac , target: ao },{source: ac , target: ao },{source: ac , target: al },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: an },{source: ac , target: ap },{source: ag , target: ao },{source: ag , target: ao },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: ai },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: an },{source: ag , target: ap },{source: ak , target: ao },{source: ak , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ap },{source: ai , target: ao },{source: ai , target: ao },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ap },{source: ae , target: ao },{source: ae , target: ao },{source: ae , target: al },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: am },{source: ae , target: ai },{source: ae , target: an },{source: ae , target: ap },{source: am , target: ao },{source: am , target: ao },{source: am , target: an },{source: am , target: ap },{source: ai , target: ao },{source: ai , target: ao },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ap },{source: an , target: ao },{source: an , target: ao },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab','al','ac','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ag ai ak an ao ap aq ar */ var  ae = nodes[0] ,ag = nodes[1] ,ai = nodes[2] ,ak = nodes[3] ,an = nodes[4] ,ao = nodes[5] ,ap = nodes[6] ,aq = {id: 'aq', name:'die_ordonnanz'},ar = {id: 'ar', name:'kommandostimme'} ; nodes.push( aq,ar ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: an , target: ap },{source: an , target: ao },{source: an , target: aq },{source: an , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ae , target: ap },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ak },{source: ae , target: aq },{source: ae , target: ar },{source: ag , target: ap },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: aq },{source: ag , target: ar },{source: ai , target: ap },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ak },{source: ai , target: aq },{source: ai , target: ar },{source: ak , target: ap },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: aq },{source: ak , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ap','an','ae','ag','ai','ak','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ao as */ var  ao = nodes[0] ,as = {id: 'as', name:'heinrich'} ; nodes.push( as ); links.push( {source: ao , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* as at */ var  as = nodes[0] ,at = {id: 'at', name:'joseph'} ; nodes.push( at ); links.push( {source: as , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ae ag ak am ao ap as au av */ var  ab = {id: 'ab', name:'von_marschall'},ae = {id: 'ae', name:'moritz'},ag = {id: 'ag', name:'peter'},ak = {id: 'ak', name:'paul_von_ramberg'},am = {id: 'am', name:'benno'},ao = {id: 'ao', name:'hans'},ap = {id: 'ap', name:'harold'},as = nodes[0] ,au = {id: 'au', name:'hornist'},av = {id: 'av', name:'schnitz'} ; nodes.push( ab,ae,ag,ak,am,ao,ap,au,av ); links.push( {source: ag , target: ao },{source: ag , target: au },{source: ag , target: am },{source: ag , target: ak },{source: ag , target: as },{source: ag , target: av },{source: ag , target: ap },{source: ao , target: au },{source: ao , target: as },{source: ao , target: av },{source: ao , target: ap },{source: ab , target: ag },{source: ab , target: ao },{source: ab , target: au },{source: ab , target: am },{source: ab , target: ak },{source: ab , target: as },{source: ab , target: av },{source: ab , target: ap },{source: ab , target: ae },{source: au , target: av },{source: am , target: ao },{source: am , target: au },{source: am , target: as },{source: am , target: av },{source: am , target: ap },{source: ak , target: ao },{source: ak , target: au },{source: ak , target: am },{source: ak , target: as },{source: ak , target: av },{source: ak , target: ap },{source: as , target: au },{source: as , target: av },{source: ap , target: au },{source: ap , target: as },{source: ap , target: av },{source: ae , target: ag },{source: ae , target: ao },{source: ae , target: au },{source: ae , target: am },{source: ae , target: ak },{source: ae , target: as },{source: ae , target: av },{source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab','au','am','as','ap','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag ak ao av */ var  ag = nodes[0] ,ak = nodes[1] ,ao = nodes[2] ,av = nodes[3]  ; /* nodes.push(); */ links.push( {source: ak , target: ao },{source: ak , target: av },{source: ao , target: av },{source: ag , target: ak },{source: ag , target: ao },{source: ag , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ak','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ao av */ var  ao = nodes[0] ,av = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: av },{source: ao , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae ao av */ var  ae = {id: 'ae', name:'moritz'},ao = nodes[0] ,av = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: av },{source: ae , target: ao },{source: ao , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'av','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae ag ak ap */ var  ae = nodes[0] ,ag = {id: 'ag', name:'peter'},ak = {id: 'ak', name:'paul_von_ramberg'},ap = {id: 'ap', name:'harold'} ; nodes.push( ag,ak,ap ); links.push( {source: ae , target: ag },{source: ae , target: ak },{source: ae , target: ak },{source: ae , target: ap },{source: ag , target: ak },{source: ag , target: ak },{source: ag , target: ap },{source: ak , target: ap },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ak ao ap as */ var  ag = nodes[0] ,ak = nodes[1] ,ao = {id: 'ao', name:'hans'},ap = nodes[2] ,as = {id: 'as', name:'heinrich'} ; nodes.push( ao,as ); links.push( {source: ao , target: ap },{source: ao , target: as },{source: ag , target: ao },{source: ag , target: ak },{source: ag , target: ap },{source: ag , target: as },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: as },{source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ag','ak','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ai ao as */ var  ai = {id: 'ai', name:'ordonnanz'},ao = nodes[0] ,as = nodes[1]  ; nodes.push( ai ); links.push( {source: ao , target: as },{source: ai , target: ao },{source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'as','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ao ap */ var  ao = nodes[0] ,ap = {id: 'ap', name:'harold'} ; nodes.push( ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ao ap as aw */ var  ao = nodes[0] ,ap = nodes[1] ,as = {id: 'as', name:'heinrich'},aw = {id: 'aw', name:'tränte'} ; nodes.push( as,aw ); links.push( {source: as , target: aw },{source: ap , target: as },{source: ap , target: aw },{source: ao , target: as },{source: ao , target: aw },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ao as aw */ var  ao = nodes[0] ,as = nodes[1] ,aw = nodes[2]  ; /* nodes.push(); */ links.push( {source: ao , target: aw },{source: ao , target: as },{source: as , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ao aw */ var  ac = {id: 'ac', name:'von_grobitzsch'},ao = nodes[0] ,aw = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ao },{source: ac , target: aw },{source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ao aw */ var  ao = nodes[0] ,aw = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ao ap as */ var  ao = nodes[0] ,ap = {id: 'ap', name:'harold'},as = {id: 'as', name:'heinrich'} ; nodes.push( ap,as ); links.push( {source: ao , target: ap },{source: ao , target: as },{source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ap','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ae am ao */ var  ae = {id: 'ae', name:'moritz'},am = {id: 'am', name:'benno'},ao = nodes[0]  ; nodes.push( ae,am ); links.push( {source: ae , target: ao },{source: ae , target: am },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ao aw */ var  ao = nodes[0] ,aw = {id: 'aw', name:'tränte'} ; nodes.push( aw ); links.push( {source: ao , target: aw },{source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ao ap aw ax */ var  ao = nodes[0] ,ap = {id: 'ap', name:'harold'},aw = nodes[1] ,ax = {id: 'ax', name:'die_masken'} ; nodes.push( ap,ax ); links.push( {source: aw , target: ax },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ap },{source: ap , target: aw },{source: ap , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ax','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ao aw */ var  ao = nodes[0] ,aw = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ao','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab ae ag ak al am */ var  ab = {id: 'ab', name:'von_marschall'},ae = {id: 'ae', name:'moritz'},ag = {id: 'ag', name:'peter'},ak = {id: 'ak', name:'paul_von_ramberg'},al = {id: 'al', name:'glahn'},am = {id: 'am', name:'benno'} ; nodes.push( ab,ae,ag,ak,al,am ); links.push( {source: al , target: am },{source: ab , target: al },{source: ab , target: am },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: ae },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ak },{source: ak , target: al },{source: ak , target: am },{source: ae , target: al },{source: ae , target: am },{source: ae , target: ag },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ae ag ah ak al am */ var  ac = {id: 'ac', name:'von_grobitzsch'},ae = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'fritz'},ak = nodes[2] ,al = nodes[3] ,am = nodes[4]  ; nodes.push( ac,ah ); links.push( {source: ae , target: ak },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: am },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae ag ak al am */ var  ae = nodes[0] ,ag = nodes[1] ,ak = nodes[2] ,al = nodes[3] ,am = nodes[4]  ; /* nodes.push(); */ links.push( {source: ae , target: am },{source: ae , target: al },{source: ae , target: ag },{source: ae , target: ak },{source: al , target: am },{source: ag , target: am },{source: ag , target: al },{source: ag , target: ak },{source: ak , target: am },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ae ag ak al am ao */ var  ae = nodes[0] ,ag = nodes[1] ,ak = nodes[2] ,al = nodes[3] ,am = nodes[4] ,ao = {id: 'ao', name:'hans'} ; nodes.push( ao ); links.push( {source: al , target: ao },{source: al , target: am },{source: ag , target: ao },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: am },{source: ak , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ae , target: ao },{source: ae , target: al },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: am },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'al','ag','ak','ae','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ao aw */ var  ao = nodes[0] ,aw = {id: 'aw', name:'tränte'} ; nodes.push( aw ); links.push( {source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ao','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ap as at */ var  ap = {id: 'ap', name:'harold'},as = {id: 'as', name:'heinrich'},at = {id: 'at', name:'joseph'} ; nodes.push( ap,as,at ); links.push( {source: as , target: at },{source: ap , target: as },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 150000);
