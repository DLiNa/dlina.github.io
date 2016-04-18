setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'ambrosio'},ab = {id: 'ab', name:'bartolino'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ac = {id: 'ac', name:'angiolina'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'ambrosio'},ab = {id: 'ab', name:'bartolino'},ac = nodes[0],ad = {id: 'ad', name:'eine_stimme_von_draussen'} ; nodes.push( aa,ab,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ae = {id: 'ae', name:'sebastiano'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'ambrosio'},ab = {id: 'ab', name:'bartolino'},ae = nodes[0] ; nodes.push( aa,ab ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1],ae = nodes[2],af = {id: 'af', name:'herr_gregorio'},ag = {id: 'ag', name:'anselmo'},ah = {id: 'ah', name:'ein_soldat'} ; nodes.push( af,ag,ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: ag , target: ah },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ah },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1],ae = nodes[2],af = nodes[3],ag = nodes[4],ai = {id: 'ai', name:'der_bauer'},ai = {id: 'ai', name:'der_bauer'} ; nodes.push( ai ); links.push( {source: af , target: ai },{source: af , target: ai },{source: af , target: ag },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ag },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: ag },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag },{source: ag , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);
