setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'jaquino'},ab = {id: 'ab', name:'marzelline'},ac = {id: 'ac', name:'rocco'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'jaquino'},ab = nodes[0] ,ac = {id: 'ac', name:'rocco'} ; nodes.push( aa,ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'leonore'} ; nodes.push( ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ae af */ var  ac = nodes[0] ,ae = {id: 'ae', name:'pizarro'},af = {id: 'af', name:'chor_der_wache'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'jaquino'},ab = {id: 'ab', name:'marzelline'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'rocco'},ad = {id: 'ad', name:'leonore'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac','ab','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ag ah ai */ var  ag = {id: 'ag', name:'erster_gefangener'},ah = {id: 'ah', name:'zweiter_gefangener'},ai = {id: 'ai', name:'chor_der_gefangenen'} ; nodes.push( ag,ah,ai ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'rocco'},ad = {id: 'ad', name:'leonore'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'jaquino'},ab = {id: 'ab', name:'marzelline'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( aa,ab ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab ac ad ae ai */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = {id: 'ae', name:'pizarro'},ai = {id: 'ai', name:'chor_der_gefangenen'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ad },{source: ad , target: ae },{source: ad , target: ai },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae','ac','ai','ab','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'florestan'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac ad aj */ var  ac = {id: 'ac', name:'rocco'},ad = {id: 'ad', name:'leonore'},aj = nodes[0]  ; nodes.push( ac,ad ); links.push( {source: ad , target: aj },{source: ac , target: ad },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac ad ae aj */ var  ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'pizarro'},aj = nodes[2]  ; nodes.push( ae ); links.push( {source: ae , target: aj },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: aj },{source: ad , target: ae },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac ad ae aj */ var  aa = {id: 'aa', name:'jaquino'},ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,aj = nodes[3]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: aa , target: aj },{source: aa , target: ae },{source: ac , target: ad },{source: ac , target: aj },{source: ac , target: ae },{source: ad , target: aj },{source: ad , target: ae },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aa','ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ad aj */ var  ad = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac ad aj */ var  ac = {id: 'ac', name:'rocco'},ad = nodes[0] ,aj = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: aj },{source: ac , target: ad },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','aj','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'chor'},al = {id: 'al', name:'fernando'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ac ad ae aj ak al */ var  ab = {id: 'ab', name:'marzelline'},ac = {id: 'ac', name:'rocco'},ad = {id: 'ad', name:'leonore'},ae = {id: 'ae', name:'pizarro'},aj = {id: 'aj', name:'florestan'},ak = nodes[0] ,al = nodes[1]  ; nodes.push( ab,ac,ad,ae,aj ); links.push( {source: ac , target: ae },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: aj },{source: ae , target: al },{source: ae , target: ak },{source: ae , target: aj },{source: ad , target: ae },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: aj },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: al },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: aj },{source: ak , target: al },{source: aj , target: al },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 90000);
