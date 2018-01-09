setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'einsiedler'},ab = {id: 'ab', name:'satyros'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ad ae ag ah ai */ var  ab = nodes[0] ,ac = {id: 'ac', name:'arsinoe'},ad = {id: 'ad', name:'psyche'},ae = {id: 'ae', name:'hermes'},ag = {id: 'ag', name:'volk'},ah = {id: 'ah', name:'einer_des_volks'},ai = {id: 'ai', name:'ein_andrer'} ; nodes.push( ac,ad,ae,ag,ah,ai ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ag },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ad ae ag ah ai */ var  aa = {id: 'aa', name:'einsiedler'},ab = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,ag = nodes[3] ,ah = nodes[4] ,ai = nodes[5]  ; nodes.push( aa ); links.push( {source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ad },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ad ae af ag ah ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'eudora'},ag = nodes[4] ,ah = nodes[5] ,ai = nodes[6] ,aj = {id: 'aj', name:'ein_dritter'} ; nodes.push( af,aj ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ag },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: ag },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
