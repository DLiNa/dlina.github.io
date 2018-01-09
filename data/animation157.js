setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = {id: 'aa', name:'clavigo'},ab = {id: 'ab', name:'carlos'},ac = {id: 'ac', name:'buenco'},ad = {id: 'ad', name:'sophie'},ae = {id: 'ae', name:'marie'},af = {id: 'af', name:'guilbert'},ag = {id: 'ag', name:'beaumarchais'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'bedienter'},ai = {id: 'ai', name:'saint_george'} ; nodes.push( ah,ai ); links.push( {source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ab },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ah','ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad ae af ag */ var  aa = nodes[0] ,ac = {id: 'ac', name:'buenco'},ad = {id: 'ad', name:'sophie'},ae = {id: 'ae', name:'marie'},af = {id: 'af', name:'guilbert'},ag = nodes[1]  ; nodes.push( ac,ad,ae,af ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: af , target: ag },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = nodes[0] ,ab = {id: 'ab', name:'carlos'},ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = nodes[4] ,ag = nodes[5]  ; nodes.push( ab ); links.push( {source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ac },{source: ae , target: ag },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: af , target: ag },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad af ag ah aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,af = nodes[4] ,ag = nodes[5] ,ah = {id: 'ah', name:'bedienter'},aj = {id: 'aj', name:'die_männer'} ; nodes.push( ah,aj ); links.push( {source: aa , target: ah },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ab },{source: ah , target: aj },{source: af , target: ah },{source: af , target: aj },{source: af , target: ag },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ag , target: ah },{source: ag , target: aj },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ag },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
