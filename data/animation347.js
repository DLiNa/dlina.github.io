setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'sittenreich'},ab = {id: 'ab', name:'susanna'},ac = {id: 'ac', name:'agneta'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweeter Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'grobian'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ae af */ var  aa = nodes[0] ,ae = {id: 'ae', name:'ehrenwert'},af = {id: 'af', name:'carolina'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: aa , target: ae },{source: aa , target: ae },{source: aa , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ad ae af */ var  aa = nodes[0] ,ad = {id: 'ad', name:'grobian'},ae = nodes[1] ,af = nodes[2]  ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'agneta'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ac ad ag */ var  ab = {id: 'ab', name:'susanna'},ac = nodes[0] ,ad = nodes[1] ,ag = {id: 'ag', name:'charlotte'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'sittenreich'},ag = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'susanna'},ac = {id: 'ac', name:'agneta'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'grobian'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweeter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'sittenreich'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ad ah */ var  aa = nodes[0] ,ad = nodes[1] ,ah = {id: 'ah', name:'gutherz'} ; nodes.push( ah ); links.push( {source: ad , target: ah },{source: aa , target: ah },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ac ah */ var  aa = nodes[0] ,ac = {id: 'ac', name:'agneta'},ah = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ah },{source: aa , target: ac },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ac ae af ah */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'ehrenwert'},af = {id: 'af', name:'carolina'},ah = nodes[2]  ; nodes.push( ae,af ); links.push( {source: aa , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ah },{source: ae , target: af },{source: ae , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ah },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac af */ var  aa = nodes[0] ,ac = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: af },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ae af */ var  aa = nodes[0] ,ae = {id: 'ae', name:'ehrenwert'},af = nodes[1]  ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ae af ag */ var  aa = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'charlotte'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: af , target: ag },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ae ag ah */ var  ae = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'gutherz'} ; nodes.push( ah ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'agneta'},ad = {id: 'ad', name:'grobian'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'sittenreich'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweeter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = {id: 'ab', name:'susanna'},ac = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ab ac ah */ var  ab = nodes[0] ,ac = nodes[1] ,ah = {id: 'ah', name:'gutherz'} ; nodes.push( ah ); links.push( {source: ac , target: ah },{source: ab , target: ah },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ad ah */ var  ad = {id: 'ad', name:'grobian'},ah = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'agneta'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ac ad */ var  ab = {id: 'ab', name:'susanna'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'carolina'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'sittenreich'},ab = {id: 'ab', name:'susanna'},ac = {id: 'ac', name:'agneta'},ad = nodes[0] ,ae = {id: 'ae', name:'ehrenwert'},af = nodes[1] ,ag = {id: 'ag', name:'charlotte'},ah = {id: 'ah', name:'gutherz'} ; nodes.push( aa,ab,ac,ae,ag,ah ); links.push( {source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: af },{source: ag , target: ah },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 125000);
