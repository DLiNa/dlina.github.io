setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'kneetschke'},ab = {id: 'ab', name:'postbote'},ac = {id: 'ac', name:'kathi'},ad = {id: 'ad', name:'die_beiden_domestiken'},ae = {id: 'ae', name:'wladimir'},af = {id: 'af', name:'papa'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ae af ag */ var  aa = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = {id: 'ag', name:'mama'} ; nodes.push( ag ); links.push( {source: aa , target: ac },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ae },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: af , target: ag },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ae af ag ah */ var  aa = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = {id: 'ah', name:'geist'} ; nodes.push( ah ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ai aj */ var  aa = nodes[0] ,ab = {id: 'ab', name:'postbote'},ac = nodes[1] ,ai = {id: 'ai', name:'onkel'},aj = {id: 'aj', name:'tante'} ; nodes.push( ab,ai,aj ); links.push( {source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ac },{source: ai , target: aj },{source: ac , target: ai },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac ae af ag */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'wladimir'},af = {id: 'af', name:'papa'},ag = {id: 'ag', name:'mama'} ; nodes.push( ae,af,ag ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
