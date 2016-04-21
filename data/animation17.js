setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'johanna'},ab = {id: 'ab', name:'felix'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'sala'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'doktor_reumann'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad ae */ var  ab = {id: 'ab', name:'felix'},ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'frau_wegrat'} ; nodes.push( ab,ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'johanna'},ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'wegrat'} ; nodes.push( aa,af ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ae , target: af },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ab','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'johanna'},ac = {id: 'ac', name:'sala'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ag ai */ var  ac = nodes[0] ,ag = {id: 'ag', name:'diener_fichtner'},ai = {id: 'ai', name:'julian'} ; nodes.push( ag,ai ); links.push( {source: ag , target: ai },{source: ac , target: ag },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ag ai aj */ var  ac = nodes[0] ,ag = nodes[1] ,ai = nodes[2] ,aj = {id: 'aj', name:'irene'} ; nodes.push( aj ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ag ai aj */ var  ab = {id: 'ab', name:'felix'},ag = {id: 'ag', name:'diener_fichtner'},ai = nodes[0] ,aj = nodes[1]  ; nodes.push( ab,ag ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ai , target: aj },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'johanna'},ac = {id: 'ac', name:'sala'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'felix'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'johanna'},ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'doktor_reumann'} ; nodes.push( aa,ad ); links.push( {source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ai */ var  aa = nodes[0] ,ai = {id: 'ai', name:'julian'} ; nodes.push( ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ab af ai ak */ var  aa = nodes[0] ,ab = {id: 'ab', name:'felix'},af = {id: 'af', name:'wegrat'},ai = nodes[1] ,ak = {id: 'ak', name:'stubenmädchen'} ; nodes.push( ab,af,ak ); links.push( {source: af , target: ai },{source: af , target: ak },{source: ai , target: ak },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ak },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','aa','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'johanna'},ac = {id: 'ac', name:'sala'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac ai */ var  ac = nodes[0] ,ai = {id: 'ai', name:'julian'} ; nodes.push( ai ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ac ah ai */ var  ab = {id: 'ab', name:'felix'},ac = nodes[0] ,ah = {id: 'ah', name:'diener_sala'},ai = nodes[1]  ; nodes.push( ab,ah ); links.push( {source: ac , target: ai },{source: ac , target: ah },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ac aj */ var  ab = nodes[0] ,ac = {id: 'ac', name:'sala'},aj = {id: 'aj', name:'irene'} ; nodes.push( ac,aj ); links.push( {source: ac , target: aj },{source: ab , target: aj },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'julian'},aj = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ac ai aj */ var  ab = {id: 'ab', name:'felix'},ac = {id: 'ac', name:'sala'},ai = nodes[0] ,aj = nodes[1]  ; nodes.push( ab,ac ); links.push( {source: ac , target: aj },{source: ac , target: ai },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ab','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac ai */ var  ac = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ad ai */ var  ad = {id: 'ad', name:'doktor_reumann'},ai = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab ad ai */ var  ab = {id: 'ab', name:'felix'},ad = nodes[0] ,ai = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ai },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ab ad af */ var  ab = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'wegrat'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ab af ai */ var  ab = nodes[0] ,af = nodes[1] ,ai = {id: 'ai', name:'julian'} ; nodes.push( ai ); links.push( {source: af , target: ai },{source: ab , target: af },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'sala'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ac ai */ var  ac = nodes[0] ,ai = {id: 'ai', name:'julian'} ; nodes.push( ai ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab af ai */ var  ab = {id: 'ab', name:'felix'},af = {id: 'af', name:'wegrat'},ai = nodes[0]  ; nodes.push( ab,af ); links.push( {source: ab , target: ai },{source: ab , target: af },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 175000);
