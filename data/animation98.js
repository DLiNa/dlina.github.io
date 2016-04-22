setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'stüve'},ab = {id: 'ab', name:'kleewitz'},ac = {id: 'ac', name:'frau_von_kleewitz'},ad = {id: 'ad', name:'scheibler'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ad ae */ var  aa = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'schaffner'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = nodes[0] ,ab = {id: 'ab', name:'kleewitz'},ac = {id: 'ac', name:'frau_von_kleewitz'},ad = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'zugführer'} ; nodes.push( ab,ac,af ); links.push( {source: aa , target: af },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae ag ah */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,ag = {id: 'ag', name:'filser'},ah = {id: 'ah', name:'frau_filser'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ae , target: ag },{source: ae , target: ah },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad ae ag ai */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,ag = nodes[5] ,ai = {id: 'ai', name:'gsottmaier'} ; nodes.push( ai ); links.push( {source: ag , target: ai },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: ae },{source: ae , target: ag },{source: ae , target: ai },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ab },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ac ad ae af ag ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = {id: 'af', name:'zugführer'},ag = nodes[5] ,ai = nodes[6] ,aj = {id: 'aj', name:'die_rekruten'} ; nodes.push( af,aj ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aj },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: aj },{source: af , target: ag },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: aj },{source: ai , target: aj },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: aj },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 25000);
