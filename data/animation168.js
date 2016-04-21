setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'hugo'},ab = {id: 'ab', name:'elsabe'},ac = {id: 'ac', name:'willem_wütend'},ad = {id: 'ad', name:'mudder'},ae = {id: 'ae', name:'lisbeth'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,af = {id: 'af', name:'kinder'} ; nodes.push( af ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: ad , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ag = {id: 'ag', name:'junge'} ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ac },{source: ac , target: ad },{source: ac , target: ag },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ae ah */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ae = {id: 'ae', name:'lisbeth'},ah = {id: 'ah', name:'hein'} ; nodes.push( ae,ah ); links.push( {source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ac },{source: ae , target: ah },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ah },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'mudder'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ac },{source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt.';
}, 20000);
