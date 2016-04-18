setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'herr_reinhart'},ac = {id: 'ac', name:'jungfer_hottchen'},ac = {id: 'ac', name:'jungfer_hottchen'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = {id: 'ab', name:'der_junge_reinhart'},ac = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'herr_reinhart'},ac = nodes[0],ad = {id: 'ad', name:'herr_vielwitz'},ae = {id: 'ae', name:'paul'} ; nodes.push( aa,ad,ae ); links.push( {source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],af = {id: 'af', name:'herr_sinnreich'},ag = {id: 'ag', name:'herr_jambus'} ; nodes.push( af,ag ); links.push( {source: aa , target: af },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ac },{source: af , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ad = nodes[1],af = nodes[2],ag = nodes[3] ; /* nodes.push(); */ links.push( {source: af , target: ag },{source: ad , target: ag },{source: ad , target: af },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = {id: 'ac', name:'jungfer_hottchen'},ad = nodes[0],ag = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'herr_reinhart'},ac = nodes[0],ad = nodes[1],af = {id: 'af', name:'herr_sinnreich'} ; nodes.push( aa,af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 35000);
