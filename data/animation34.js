setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'urban'},ab = {id: 'ab', name:'haeser'},ac = {id: 'ac', name:'alter_herr'},ad = {id: 'ad', name:'zweiter_alter_herr'},ae = {id: 'ae', name:'dr'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ae */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ab },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'alter_herr'},af = {id: 'af', name:'junge_dame'},ag = {id: 'ag', name:'alte_dame'} ; nodes.push( ac,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ag },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: af , target: ag },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ae */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'dr'} ; nodes.push( ae ); links.push( {source: aa , target: ab },{source: aa , target: ae },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ae ah */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2] ,ah = {id: 'ah', name:'polizist'} ; nodes.push( ah ); links.push( {source: ae , target: ah },{source: ab , target: ae },{source: ab , target: ah },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
}, 20000);
