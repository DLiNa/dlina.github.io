setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'die_dienerin'},ab = {id: 'ab', name:'tozi'},ac = {id: 'ac', name:'giwau'},ad = {id: 'ad', name:'der_kaiser'},ae = {id: 'ae', name:'stimme'},af = {id: 'af', name:'der_diener'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Vorgang'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Vorgang';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac ad ae af ag */ var  ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = {id: 'ag', name:'die_kammerfrau'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Vorgang'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Vorgang';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ag','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ae ah ai */ var  ab = {id: 'ab', name:'tozi'},ac = nodes[0] ,ae = nodes[1] ,ah = {id: 'ah', name:'ginyo'},ai = {id: 'ai', name:'die_bettlerin'} ; nodes.push( ab,ah,ai ); links.push( {source: ah , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ae },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ae },{source: ae , target: ah },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Vorgang'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Vorgang';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 10000);
