setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'bahnmeester'},ab = {id: 'ab', name:'fru'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eerste Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'holtvaagt'},ad = {id: 'ad', name:'bostterwiev'} ; nodes.push( aa,ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Twede Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3] ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Drüdde Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],aa = nodes[0],aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ad = nodes[3] ; /* nodes.push(); */ links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ad },{source: ac , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Veerde Akt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Föfte Akt';
}, 20000);
