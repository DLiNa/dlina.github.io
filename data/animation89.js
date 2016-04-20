setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'max'},ab = {id: 'ab', name:'anatol'},ac = {id: 'ac', name:'cora'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Die Frage an das Schicksal'; var scene = document.getElementById('scene');scene.innerHTML = 'Die Frage an das Schicksal';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[1],ad = {id: 'ad', name:'gabriele'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Weihnachtseinkäufe'; var scene = document.getElementById('scene');scene.innerHTML = 'Weihnachtseinkäufe';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'max'},ab = nodes[0],ae = {id: 'ae', name:'bianca'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ab },{source: aa , target: ae },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Episode'; var scene = document.getElementById('scene');scene.innerHTML = 'Episode';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[1],af = {id: 'af', name:'emllie'},af = {id: 'af', name:'emllie'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Denksteine'; var scene = document.getElementById('scene');scene.innerHTML = 'Denksteine';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'max'},ab = nodes[0],ag = {id: 'ag', name:'annie'},ah = {id: 'ah', name:'kellner'} ; nodes.push( aa,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Abschiedssouper'; var scene = document.getElementById('scene');scene.innerHTML = 'Abschiedssouper';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1],ai = {id: 'ai', name:'else'} ; nodes.push( ai ); links.push( {source: aa , target: ab },{source: aa , target: ai },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Agonie'; var scene = document.getElementById('scene');scene.innerHTML = 'Agonie';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1],aj = {id: 'aj', name:'franz'},ak = {id: 'ak', name:'ilonas_stimme'},ak = {id: 'ak', name:'ilonas_stimme'} ; nodes.push( aj,ak ); links.push( {source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ak },{source: aj , target: ak },{source: aj , target: ak },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Anatols Hochzeitsmorgen'; var scene = document.getElementById('scene');scene.innerHTML = 'Anatols Hochzeitsmorgen';
}, 30000);
