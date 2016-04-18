setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'damon'},ab = {id: 'ab', name:'phys'},ac = {id: 'ac', name:'sirmio'},ad = {id: 'ad', name:'schmuhl'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ab = nodes[0],ac = nodes[1],ad = nodes[2],ae = {id: 'ae', name:'mopsus'} ; nodes.push( ab,ae ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'damon'},ab = nodes[0],ac = nodes[1],ad = nodes[2],ae = nodes[3],af = {id: 'af', name:'salome'} ; nodes.push( aa,af ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ae , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],ae = nodes[3] ; /* nodes.push(); */ links.push( {source: ad , target: ae },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ad = nodes[1],ae = nodes[2],af = {id: 'af', name:'salome'},ag = {id: 'ag', name:'wirth'},ag = {id: 'ag', name:'wirth'} ; nodes.push( af,ag ); links.push( {source: ad , target: ag },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: ae , target: ag },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt.';
}, 20000);
