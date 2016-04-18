setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'franz'},ab = {id: 'ab', name:'kotzeluch'},ac = {id: 'ac', name:'louise'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ad = {id: 'ad', name:'briefträger'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ae = {id: 'ae', name:'lorenz'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ae = nodes[0],af = {id: 'af', name:'fritz'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'franz'},ab = {id: 'ab', name:'kotzeluch'},ac = {id: 'ac', name:'louise'},ae = nodes[0],af = nodes[1] ; nodes.push( aa,ab,ac ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ae , target: af },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: af },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ae = nodes[3] ; /* nodes.push(); */ links.push( {source: ab , target: ae },{source: ab , target: ac },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ac = nodes[1],ae = nodes[2],af = {id: 'af', name:'fritz'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: af },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ab = {id: 'ab', name:'kotzeluch'},ac = nodes[1],ae = nodes[2],af = nodes[3],ag = {id: 'ag', name:'die_träger'},ah = {id: 'ah', name:'magd'} ; nodes.push( ab,ag,ah ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ae = nodes[3],af = nodes[4],ag = nodes[5],ah = nodes[6] ; /* nodes.push(); */ links.push( {source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ae = nodes[3],af = nodes[4] ; /* nodes.push(); */ links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ae , target: af },{source: ac , target: ae },{source: ac , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
}, 50000);
