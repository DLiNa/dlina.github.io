setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'sidney'},ab = {id: 'ab', name:'lady'},ab = {id: 'ab', name:'lady'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ac = {id: 'ac', name:'guilford'},ac = {id: 'ac', name:'guilford'},ac = {id: 'ac', name:'guilford'},ac = {id: 'ac', name:'guilford'},ad = {id: 'ad', name:'der_officier_zu_guilford'} ; nodes.push( ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ac },{source: ac , target: ad },{source: ac , target: ad },{source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ae = {id: 'ae', name:'northumberland'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = {id: 'ab', name:'lady'},ab = {id: 'ab', name:'lady'},ae = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ae },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = nodes[0],af = {id: 'af', name:'lady_suffolk'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = nodes[0],ac = {id: 'ac', name:'guilford'},ag = {id: 'ag', name:'suffolk'},ah = {id: 'ah', name:'johanna'} ; nodes.push( ac,ag,ah ); links.push( {source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ae = {id: 'ae', name:'northumberland'},ag = nodes[0],ah = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = {id: 'aa', name:'sidney'},ab = {id: 'ab', name:'lady'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = nodes[0],ac = {id: 'ac', name:'guilford'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = nodes[0],ac = nodes[1],ag = {id: 'ag', name:'suffolk'} ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: ab , target: ag },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = nodes[0],af = {id: 'af', name:'lady_suffolk'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = nodes[0],ac = {id: 'ac', name:'guilford'},af = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ab , target: ac },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ac = nodes[0],af = nodes[1],ai = {id: 'ai', name:'gardiner'} ; nodes.push( ai ); links.push( {source: af , target: ai },{source: ac , target: ai },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = {id: 'ab', name:'lady'},ac = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ab = nodes[0],ac = nodes[1],ag = {id: 'ag', name:'suffolk'},ah = {id: 'ah', name:'johanna'} ; nodes.push( ag,ah ); links.push( {source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ab = nodes[0],ac = nodes[1],ag = nodes[2],ah = nodes[3],ai = {id: 'ai', name:'gardiner'} ; nodes.push( ai ); links.push( {source: ah , target: ai },{source: ag , target: ai },{source: ag , target: ah },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ag },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = nodes[0],ag = nodes[1],ah = nodes[2] ; /* nodes.push(); */ links.push( {source: ag , target: ah },{source: ac , target: ah },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ab = {id: 'ab', name:'lady'},af = {id: 'af', name:'lady_suffolk'},ag = nodes[0] ; nodes.push( ab,af ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ab = nodes[0],ac = {id: 'ac', name:'guilford'},ag = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ag },{source: ab , target: ac },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ab = nodes[0],ac = nodes[1],ai = {id: 'ai', name:'gardiner'} ; nodes.push( ai ); links.push( {source: ac , target: ai },{source: ab , target: ai },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = nodes[0],ac = nodes[1],ag = {id: 'ag', name:'suffolk'} ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: ab , target: ac },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ac','ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = {id: 'aa', name:'sidney'},af = {id: 'af', name:'lady_suffolk'} ; nodes.push( aa,af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ab = {id: 'ab', name:'lady'},af = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: af },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = nodes[0],ac = {id: 'ac', name:'guilford'},ah = {id: 'ah', name:'johanna'} ; nodes.push( ac,ah ); links.push( {source: ab , target: ac },{source: ab , target: ah },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'der_officier_zu_guilford'},af = {id: 'af', name:'lady_suffolk'} ; nodes.push( ad,af ); links.push( {source: ad , target: af },{source: ac , target: ad },{source: ac , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ad','ac','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ah = {id: 'ah', name:'johanna'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = {id: 'aa', name:'sidney'},ab = {id: 'ab', name:'lady'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 145000);
