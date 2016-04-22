setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'hagen'},ab = {id: 'ab', name:'gunther'},ac = {id: 'ac', name:'giselher'},ad = {id: 'ad', name:'gerenot'},ae = {id: 'ae', name:'volker'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ae af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'siegfried'},ag = {id: 'ag', name:'dankwart'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ae },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ab','ag','aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'ute'},ai = {id: 'ai', name:'kriemhild'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'hagen'},ab = {id: 'ab', name:'gunther'},ac = {id: 'ac', name:'giselher'},ad = {id: 'ad', name:'gerenot'},ae = {id: 'ae', name:'volker'},af = {id: 'af', name:'siegfried'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: ab , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: ae , target: af },{source: ad , target: af },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 15000);
