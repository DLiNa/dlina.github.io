setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = {id: 'aa', name:'mariechen'},ab = {id: 'ab', name:'pauline'},ac = {id: 'ac', name:'frau_weidenhammer'},ad = {id: 'ad', name:'rese'},ae = {id: 'ae', name:'meister_oelze'},af = {id: 'af', name:'emil'},ag = {id: 'ag', name:'frau_kramer'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ad ae af ah */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = nodes[4] ,ah = {id: 'ah', name:'patschke'} ; nodes.push( ah ); links.push( {source: af , target: ah },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ae },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ae },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ae },{source: ae , target: af },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ad ae af */ var  ab = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = nodes[3]  ; /* nodes.push(); */ links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 10000);
