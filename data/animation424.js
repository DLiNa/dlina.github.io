setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'theodor'},ab = {id: 'ab', name:'kuck'},ac = {id: 'ac', name:'lirándula'},ad = {id: 'ad', name:'könnicke'},ae = {id: 'ae', name:'ihlefeld'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = nodes[4],af = {id: 'af', name:'jijajópsi'} ; nodes.push( af ); links.push( {source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ae , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],ae = nodes[3] ; /* nodes.push(); */ links.push( {source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = {id: 'ab', name:'kuck'},ac = nodes[1],ad = nodes[2],ae = nodes[3] ; nodes.push( ab ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ac },{source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
}, 15000);
