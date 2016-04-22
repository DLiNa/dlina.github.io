setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'marianel'},ab = {id: 'ab', name:'frau_humbrecht'},ac = {id: 'ac', name:'von_gröningseck'},ad = {id: 'ad', name:'evchen'},ae = {id: 'ae', name:'wirtin'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad af ag */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'humbrecht'},ag = {id: 'ag', name:'magister'} ; nodes.push( af,ag ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: af , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ag ah ai */ var  ac = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'von_hasenpoth'},ai = {id: 'ai', name:'major'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ah','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad af */ var  ab = {id: 'ab', name:'frau_humbrecht'},ac = nodes[0] ,ad = {id: 'ad', name:'evchen'},af = {id: 'af', name:'humbrecht'} ; nodes.push( ab,ad,af ); links.push( {source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: ad , target: af },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ad af ag aj ak al */ var  ab = nodes[0] ,ad = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'magister'},aj = {id: 'aj', name:'lissel'},ak = {id: 'ak', name:'fausthammer'},al = {id: 'al', name:'fiskal'} ; nodes.push( ag,aj,ak,al ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: al },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: af , target: aj },{source: af , target: ag },{source: af , target: ak },{source: af , target: al },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aj','ab','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ad af ag al am */ var  ac = {id: 'ac', name:'von_gröningseck'},ad = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,al = nodes[3] ,am = {id: 'am', name:'frau_marthan'} ; nodes.push( ac,am ); links.push( {source: ad , target: am },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: al },{source: af , target: am },{source: af , target: ag },{source: af , target: al },{source: ag , target: am },{source: ag , target: al },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 25000);
