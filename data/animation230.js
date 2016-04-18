setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'fleis'},ab = {id: 'ab', name:'alterthum'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'trauerspiel'},ad = {id: 'ad', name:'rege'},ad = {id: 'ad', name:'rege'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'liebe'} ; nodes.push( ae ); links.push( {source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = nodes[0],ad = nodes[1],ad = nodes[1],ae = nodes[2],af = {id: 'af', name:'verstand'},ag = {id: 'ag', name:'vollkommenheit'} ; nodes.push( ad,af,ag ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: af , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);
