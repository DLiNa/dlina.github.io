setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'leonce'},ab = {id: 'ab', name:'hofmeister'},ac = {id: 'ac', name:'valerio'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ad ae af ag ah ai */ var  ad = {id: 'ad', name:'könig'},ae = {id: 'ae', name:'erster_kammerdiener'},af = {id: 'af', name:'zweiter_kammerdiener'},ag = {id: 'ag', name:'diener'},ah = {id: 'ah', name:'präsident'},ai = {id: 'ai', name:'der_ganze_staatsrat_im_chor'} ; nodes.push( ad,ae,af,ag,ah,ai ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ae','af','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ah aj */ var  aa = {id: 'aa', name:'leonce'},ac = {id: 'ac', name:'valerio'},ah = nodes[0] ,aj = {id: 'aj', name:'rosetta'} ; nodes.push( aa,ac,aj ); links.push( {source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ah },{source: ac , target: aj },{source: ac , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','aj','ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'lena'},al = {id: 'al', name:'gouvernante'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac ak al */ var  aa = {id: 'aa', name:'leonce'},ac = {id: 'ac', name:'valerio'},ak = nodes[0] ,al = nodes[1]  ; nodes.push( aa,ac ); links.push( {source: ac , target: al },{source: ac , target: ak },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ac ak al */ var  aa = nodes[0] ,ac = nodes[1] ,ak = nodes[2] ,al = nodes[3]  ; /* nodes.push(); */ links.push( {source: ac , target: al },{source: ac , target: ak },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ak al */ var  ak = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ac ak */ var  aa = {id: 'aa', name:'leonce'},ac = {id: 'ac', name:'valerio'},ak = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: ac , target: ak },{source: aa , target: ac },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* am an ao */ var  am = {id: 'am', name:'landrat'},an = {id: 'an', name:'schulmeister'},ao = {id: 'ao', name:'die_bauern'} ; nodes.push( am,an,ao ); links.push( {source: am , target: an },{source: am , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ac ad ah ak al ap aq ar as at au */ var  aa = {id: 'aa', name:'leonce'},ac = {id: 'ac', name:'valerio'},ad = {id: 'ad', name:'könig'},ah = {id: 'ah', name:'präsident'},ak = {id: 'ak', name:'lena'},al = {id: 'al', name:'gouvernante'},ap = {id: 'ap', name:'zeremonienmeister'},aq = {id: 'aq', name:'erster_bedienter'},ar = {id: 'ar', name:'zweiter_bedienter'},as = {id: 'as', name:'dritter_bedienter'},at = {id: 'at', name:'vierter_diener'},au = {id: 'au', name:'hofprediger'} ; nodes.push( aa,ac,ad,ah,ak,al,ap,aq,ar,as,at,au ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: at },{source: ad , target: ah },{source: ad , target: au },{source: ad , target: ak },{source: ad , target: al },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: ak },{source: ah , target: al },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: ad },{source: ac , target: as },{source: ac , target: at },{source: ac , target: ah },{source: ac , target: au },{source: ac , target: ak },{source: ac , target: al },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: al },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: ad },{source: aa , target: as },{source: aa , target: at },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: au },{source: aa , target: ak },{source: aa , target: al },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: at },{source: al , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 50000);
