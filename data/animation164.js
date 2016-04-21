setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'solisa'},ab = {id: 'ab', name:'alvaro'},ac = {id: 'ac', name:'laura'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'ricardo'},ae = {id: 'ae', name:'octavio'},af = {id: 'af', name:'der_könig'} ; nodes.push( ad,ae,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad ae af ag */ var  ad = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'alarcos'} ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ag','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ah ai aj ak */ var  ah = {id: 'ah', name:'clara'},ai = {id: 'ai', name:'dagobert'},aj = {id: 'aj', name:'eine_wärterin'},ak = {id: 'ak', name:'cornelia'} ; nodes.push( ah,ai,aj,ak ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ai','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'alvaro'},ag = {id: 'ag', name:'alarcos'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'solisa'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ad ae ag ah ai ak */ var  ab = {id: 'ab', name:'alvaro'},ad = {id: 'ad', name:'ricardo'},ae = {id: 'ae', name:'octavio'},ag = {id: 'ag', name:'alarcos'},ah = {id: 'ah', name:'clara'},ai = {id: 'ai', name:'dagobert'},ak = {id: 'ak', name:'cornelia'} ; nodes.push( ab,ad,ae,ag,ah,ai,ak ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ak },{source: ai , target: ak },{source: ah , target: ai },{source: ah , target: ak },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ak },{source: ab , target: ad },{source: ab , target: ae },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: ae },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt.';
}, 30000);
