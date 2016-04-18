setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'langenberg'},ab = {id: 'ab', name:'constanze'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'gustchen'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'backes'},ae = {id: 'ae', name:'hahnenbein'},af = {id: 'af', name:'moritz'} ; nodes.push( ad,ae,af ); links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[0],ac = nodes[1],af = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: af },{source: ab , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = nodes[0],af = nodes[1],ag = {id: 'ag', name:'fr'} ; nodes.push( ag ); links.push( {source: ab , target: ag },{source: ab , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = nodes[0],ac = {id: 'ac', name:'gustchen'},ad = {id: 'ad', name:'backes'},ae = {id: 'ae', name:'hahnenbein'},af = nodes[1] ; nodes.push( ac,ad,ae ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = nodes[0],ac = nodes[1],ad = nodes[2],ae = nodes[3],af = nodes[4],ah = {id: 'ah', name:'hauptmann'} ; nodes.push( ah ); links.push( {source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: ah },{source: ae , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = {id: 'aa', name:'langenberg'},ab = nodes[0],ac = nodes[1],ad = nodes[2],ae = nodes[3],af = nodes[4],ah = nodes[5] ; nodes.push( aa ); links.push( {source: aa , target: ab },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: af , target: ah },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ae },{source: ae , target: af },{source: ae , target: ah },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);
