setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'tine'},ab = {id: 'ab', name:'der_bäuerin_stimme'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'bauer_ephraim'},ad = {id: 'ad', name:'viehhändler'},ae = {id: 'ae', name:'breite'},af = {id: 'af', name:'ernsts_stimme'} ; nodes.push( ac,ad,ae,af ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ac','ab','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = {id: 'ag', name:'joseph'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ae af ag */ var  ae = {id: 'ae', name:'breite'},af = nodes[0] ,ag = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ac ad ae ah */ var  ab = {id: 'ab', name:'der_bäuerin_stimme'},ac = {id: 'ac', name:'bauer_ephraim'},ad = {id: 'ad', name:'viehhändler'},ae = nodes[0] ,ah = {id: 'ah', name:'blumig'} ; nodes.push( ab,ac,ad,ah ); links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ah },{source: ad , target: ae },{source: ad , target: ah },{source: ae , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ac ae af ag */ var  aa = {id: 'aa', name:'tine'},ab = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'ernsts_stimme'},ag = {id: 'ag', name:'joseph'} ; nodes.push( aa,af,ag ); links.push( {source: aa , target: af },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ab },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa','af','ae','ab','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ai aj ak al am an ao */ var  ai = {id: 'ai', name:'beckern'},aj = {id: 'aj', name:'wirtin'},ak = {id: 'ak', name:'kretschmer'},al = {id: 'al', name:'dorfburschen_und_dorfmädchen'},am = {id: 'am', name:'huhndorf'},an = {id: 'an', name:'die_arbeiter'},ao = {id: 'ao', name:'wirt'} ; nodes.push( ai,aj,ak,al,am,an,ao ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: an },{source: am , target: an },{source: am , target: ao },{source: am , target: an },{source: an , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai','aj','al','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ah ak am ap aq */ var  ah = {id: 'ah', name:'blumig'},ak = nodes[0] ,am = nodes[1] ,ap = {id: 'ap', name:'schindlern'},aq = {id: 'aq', name:'franzel'} ; nodes.push( ah,ap,aq ); links.push( {source: ah , target: ap },{source: ah , target: am },{source: ah , target: aq },{source: ah , target: ak },{source: ap , target: aq },{source: am , target: ap },{source: am , target: aq },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag ah ak am ao ap aq ar as */ var  ag = {id: 'ag', name:'joseph'},ah = nodes[0] ,ak = nodes[1] ,am = nodes[2] ,ao = {id: 'ao', name:'wirt'},ap = nodes[3] ,aq = nodes[4] ,ar = {id: 'ar', name:'hildebrandt'},as = {id: 'as', name:'andere'} ; nodes.push( ag,ao,ar,as ); links.push( {source: ar , target: as },{source: ar , target: as },{source: ah , target: ar },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: ak },{source: ah , target: am },{source: ah , target: ap },{source: ah , target: as },{source: ah , target: ao },{source: ah , target: as },{source: aq , target: ar },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: as },{source: ar , target: as },{source: ar , target: as },{source: ak , target: ar },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: as },{source: ak , target: ao },{source: ak , target: as },{source: am , target: ar },{source: am , target: aq },{source: am , target: ar },{source: am , target: ap },{source: am , target: as },{source: am , target: ao },{source: am , target: as },{source: ap , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: as },{source: ag , target: ar },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: ak },{source: ag , target: am },{source: ag , target: ap },{source: ag , target: as },{source: ag , target: ao },{source: ag , target: as },{source: ao , target: ar },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: ap },{source: ao , target: as },{source: ao , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ar','ak','am','ap','as','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae af ag ah aq */ var  ae = {id: 'ae', name:'breite'},af = {id: 'af', name:'ernsts_stimme'},ag = nodes[0] ,ah = nodes[1] ,aq = nodes[2]  ; nodes.push( ae,af ); links.push( {source: af , target: ah },{source: af , target: aq },{source: af , target: ag },{source: ah , target: aq },{source: ag , target: ah },{source: ag , target: aq },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: aq },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','ah','aq','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae aj */ var  ae = nodes[0] ,aj = {id: 'aj', name:'wirtin'} ; nodes.push( aj ); links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac aj */ var  ac = {id: 'ac', name:'bauer_ephraim'},aj = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac ae af aj as */ var  ac = nodes[0] ,ae = {id: 'ae', name:'breite'},af = {id: 'af', name:'ernsts_stimme'},aj = nodes[1] ,as = {id: 'as', name:'andere'} ; nodes.push( ae,af,as ); links.push( {source: af , target: aj },{source: af , target: as },{source: ac , target: af },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: as },{source: af , target: aj },{source: af , target: as },{source: ae , target: af },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: as },{source: aj , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'af','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac ae aj */ var  ac = nodes[0] ,ae = nodes[1] ,aj = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ae },{source: ac , target: aj },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'tine'},ab = {id: 'ab', name:'der_bäuerin_stimme'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab ag at */ var  aa = nodes[0] ,ab = nodes[1] ,ag = {id: 'ag', name:'joseph'},at = {id: 'at', name:'mattern'} ; nodes.push( ag,at ); links.push( {source: ab , target: at },{source: ab , target: at },{source: ab , target: ag },{source: aa , target: at },{source: aa , target: ab },{source: aa , target: at },{source: aa , target: ag },{source: ag , target: at },{source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'at','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ag */ var  aa = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ag ap aq */ var  ag = nodes[0] ,ap = {id: 'ap', name:'schindlern'},aq = {id: 'aq', name:'franzel'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq },{source: ag , target: ap },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ap','ag','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac au */ var  ac = {id: 'ac', name:'bauer_ephraim'},au = {id: 'au', name:'junge'} ; nodes.push( ac,au ); links.push( {source: ac , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = {id: 'ag', name:'joseph'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = {id: 'ae', name:'breite'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = {id: 'ag', name:'joseph'} ; nodes.push( ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ae */ var  ab = {id: 'ab', name:'der_bäuerin_stimme'},ae = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ac ae */ var  ab = nodes[0] ,ac = {id: 'ac', name:'bauer_ephraim'},ae = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ab , target: ac },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab ac ae ag ak am ap aq ar as at av aw ax ay az ba bb */ var  ab = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,ag = {id: 'ag', name:'joseph'},ak = {id: 'ak', name:'kretschmer'},am = {id: 'am', name:'huhndorf'},ap = {id: 'ap', name:'schindlern'},aq = {id: 'aq', name:'franzel'},ar = {id: 'ar', name:'hildebrandt'},as = {id: 'as', name:'andere'},at = {id: 'at', name:'mattern'},av = {id: 'av', name:'einige_mädchen'},aw = {id: 'aw', name:'ein_junger_bursche'},ax = {id: 'ax', name:'frau_glumm'},ay = {id: 'ay', name:'frau_kretschmer'},az = {id: 'az', name:'einige_andere'},ba = {id: 'ba', name:'einige_burschen'},bb = {id: 'bb', name:'frau_hildebrandt'} ; nodes.push( ag,ak,am,ap,aq,ar,as,at,av,aw,ax,ay,az,ba,bb ); links.push( {source: ac , target: at },{source: ac , target: ar },{source: ac , target: ag },{source: ac , target: ap },{source: ac , target: av },{source: ac , target: ae },{source: ac , target: am },{source: ac , target: ak },{source: ac , target: aw },{source: ac , target: as },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: az },{source: ac , target: aq },{source: ac , target: ba },{source: ac , target: as },{source: ac , target: bb },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: ab , target: ac },{source: ab , target: at },{source: ab , target: ar },{source: ab , target: ag },{source: ab , target: ap },{source: ab , target: av },{source: ab , target: ae },{source: ab , target: am },{source: ab , target: ak },{source: ab , target: aw },{source: ab , target: as },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: az },{source: ab , target: aq },{source: ab , target: ba },{source: ab , target: as },{source: ab , target: bb },{source: ar , target: at },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: as },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: az },{source: ar , target: ba },{source: ar , target: as },{source: ar , target: bb },{source: ag , target: at },{source: ag , target: ar },{source: ag , target: ap },{source: ag , target: av },{source: ag , target: am },{source: ag , target: ak },{source: ag , target: aw },{source: ag , target: as },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: az },{source: ag , target: aq },{source: ag , target: ba },{source: ag , target: as },{source: ag , target: bb },{source: ap , target: at },{source: ap , target: ar },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: as },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: az },{source: ap , target: aq },{source: ap , target: ba },{source: ap , target: as },{source: ap , target: bb },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: ae , target: at },{source: ae , target: ar },{source: ae , target: ag },{source: ae , target: ap },{source: ae , target: av },{source: ae , target: am },{source: ae , target: ak },{source: ae , target: aw },{source: ae , target: as },{source: ae , target: ax },{source: ae , target: ay },{source: ae , target: az },{source: ae , target: aq },{source: ae , target: ba },{source: ae , target: as },{source: ae , target: bb },{source: am , target: at },{source: am , target: ar },{source: am , target: ap },{source: am , target: av },{source: am , target: aw },{source: am , target: as },{source: am , target: ax },{source: am , target: ay },{source: am , target: az },{source: am , target: aq },{source: am , target: ba },{source: am , target: as },{source: am , target: bb },{source: ak , target: at },{source: ak , target: ar },{source: ak , target: ap },{source: ak , target: av },{source: ak , target: am },{source: ak , target: aw },{source: ak , target: as },{source: ak , target: ax },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: aq },{source: ak , target: ba },{source: ak , target: as },{source: ak , target: bb },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: as , target: at },{source: as , target: av },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: bb },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: az , target: ba },{source: az , target: bb },{source: aq , target: at },{source: aq , target: ar },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: as },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: aq , target: as },{source: aq , target: bb },{source: ba , target: bb },{source: as , target: at },{source: as , target: av },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '[1. Szene]'; var scene = document.getElementById('scene');scene.innerHTML = '[1. Szene]';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'at','ar','ag','ap','av','ae','am','ak','aw','as','ax','ay','az','aq','ba','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ac bc */ var  ab = nodes[0] ,ac = nodes[1] ,bc = {id: 'bc', name:'vater_jakobs'} ; nodes.push( bc ); links.push( {source: ac , target: bc },{source: ac , target: bc },{source: ac , target: bc },{source: ac , target: bc },{source: ab , target: ac },{source: ab , target: bc },{source: ab , target: ac },{source: ab , target: bc },{source: ab , target: ac },{source: ab , target: bc },{source: ab , target: ac },{source: ab , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa bc */ var  aa = {id: 'aa', name:'tine'},bc = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aa','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'breite'},ag = {id: 'ag', name:'joseph'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'tine'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'der_bäuerin_stimme'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'bauer_ephraim'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ac ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ag = {id: 'ag', name:'joseph'} ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: ab , target: ag },{source: ab , target: ac },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ab ag */ var  aa = nodes[0] ,ab = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ag },{source: aa , target: ab },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ac ae ag */ var  ac = {id: 'ac', name:'bauer_ephraim'},ae = {id: 'ae', name:'breite'},ag = nodes[0]  ; nodes.push( ac,ae ); links.push( {source: ac , target: ae },{source: ac , target: ag },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 170000);
