setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'mana'},ab = {id: 'ab', name:'sora'},ac = {id: 'ac', name:'feria'},ad = {id: 'ad', name:'lato'},ae = {id: 'ae', name:'andrason'},af = {id: 'af', name:'mela'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ag = {id: 'ag', name:'bedienter'},ah = {id: 'ah', name:'merkulo'},ai = {id: 'ai', name:'bediente'} ; nodes.push( ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ab','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ah aj */ var  ac = {id: 'ac', name:'feria'},ah = nodes[0] ,aj = {id: 'aj', name:'prinz'} ; nodes.push( ac,aj ); links.push( {source: ah , target: aj },{source: ac , target: ah },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ah','aj','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ak al am */ var  ak = {id: 'ak', name:'mandandane'},al = {id: 'al', name:'parzen'},am = {id: 'am', name:'proserpina'} ; nodes.push( ak,al,am ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: al },{source: al , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad ae af ak */ var  aa = {id: 'aa', name:'mana'},ab = {id: 'ab', name:'sora'},ac = {id: 'ac', name:'feria'},ad = {id: 'ad', name:'lato'},ae = {id: 'ae', name:'andrason'},af = {id: 'af', name:'mela'},ak = nodes[0]  ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ak },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ak },{source: aa , target: ac },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ak },{source: af , target: ak },{source: ae , target: af },{source: ae , target: ak },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab','aa','ad','af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ah aj ak */ var  ae = nodes[0] ,ah = {id: 'ah', name:'merkulo'},aj = {id: 'aj', name:'prinz'},ak = nodes[1]  ; nodes.push( ah,aj ); links.push( {source: ah , target: aj },{source: ah , target: ak },{source: aj , target: ak },{source: ae , target: ah },{source: ae , target: aj },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 25000);
