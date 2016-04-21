setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'mime'},ab = {id: 'ab', name:'siegfried'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'wandrer'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'siegfried'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad ae */ var  ac = {id: 'ac', name:'wandrer'},ad = {id: 'ad', name:'alberichs_stimme'},ae = {id: 'ae', name:'fafners_stimme'} ; nodes.push( ac,ad,ae ); links.push( {source: ad , target: ae },{source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ae af */ var  aa = {id: 'aa', name:'mime'},ab = {id: 'ab', name:'siegfried'},ae = nodes[0] ,af = {id: 'af', name:'stimme_des_waldvogels'} ; nodes.push( aa,ab,af ); links.push( {source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ae },{source: ab , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ad af */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'alberichs_stimme'},af = nodes[2]  ; nodes.push( ad ); links.push( {source: ad , target: af },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ad },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad','aa','ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'wandrer'},ag = {id: 'ag', name:'erda'} ; nodes.push( ac,ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ac ah */ var  ab = {id: 'ab', name:'siegfried'},ac = nodes[0] ,ah = {id: 'ah', name:'brünnhilde'} ; nodes.push( ab,ah ); links.push( {source: ac , target: ah },{source: ab , target: ac },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 35000);
