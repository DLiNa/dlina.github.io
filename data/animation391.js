setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'wumshäter'},ab = {id: 'ab', name:'lisette'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'valer'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'lelio_oder_hilaria'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'wumshäter'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ac ad ae */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'laura'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'lelio_oder_hilaria'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'laura'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'wumshäter'},ac = {id: 'ac', name:'valer'},ad = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ac ad af */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'solbist'} ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: aa , target: ad },{source: ac , target: af },{source: ac , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'lisette'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'wumshäter'},ab = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'laura'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab ae */ var  aa = {id: 'aa', name:'wumshäter'},ab = nodes[0] ,ae = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ab },{source: aa , target: ae },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ac ae */ var  aa = nodes[0] ,ac = {id: 'ac', name:'valer'},ae = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ac ad ae */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'lelio_oder_hilaria'},ae = nodes[2]  ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ae */ var  ab = {id: 'ab', name:'lisette'},ae = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab ae ag */ var  aa = {id: 'aa', name:'wumshäter'},ab = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'leander'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ab },{source: ae , target: ag },{source: ab , target: ag },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ac ae ag */ var  aa = nodes[0] ,ac = {id: 'ac', name:'valer'},ae = nodes[1] ,ag = nodes[2]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: ag },{source: ae , target: ag },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ab ac ad ae ag */ var  aa = nodes[0] ,ab = {id: 'ab', name:'lisette'},ac = nodes[1] ,ad = {id: 'ad', name:'lelio_oder_hilaria'},ae = nodes[2] ,ag = nodes[3]  ; nodes.push( ab,ad ); links.push( {source: ad , target: ae },{source: ad , target: ag },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ag },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 110000);
