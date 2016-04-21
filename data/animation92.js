setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'baron'},ab = {id: 'ab', name:'krabbe'},ac = {id: 'ac', name:'pellmann'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'pellmann'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'emma'},ae = {id: 'ae', name:'fritze'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'gustav'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad af ag */ var  ad = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'julius'} ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad ae ag */ var  ad = nodes[0] ,ae = {id: 'ae', name:'fritze'},ag = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ag },{source: ad , target: ae },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = {id: 'ah', name:'julius_krabbe'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae ag ah */ var  ae = {id: 'ae', name:'fritze'},ag = nodes[0] ,ah = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ad ag ah ai */ var  ad = {id: 'ad', name:'emma'},ag = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'eweline'} ; nodes.push( ad,ai ); links.push( {source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ag },{source: ah , target: ai },{source: ag , target: ai },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag aj */ var  ag = nodes[0] ,aj = {id: 'aj', name:'barbara'} ; nodes.push( aj ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ad ag aj */ var  ad = {id: 'ad', name:'emma'},ag = nodes[0] ,aj = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: aj },{source: ad , target: ag },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Scene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ad','aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab ak */ var  aa = {id: 'aa', name:'baron'},ab = {id: 'ab', name:'krabbe'},ak = {id: 'ak', name:'magister'} ; nodes.push( aa,ab,ak ); links.push( {source: aa , target: ak },{source: aa , target: ab },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ak','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa al */ var  aa = nodes[0] ,al = {id: 'al', name:'gottlieb'} ; nodes.push( al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ab ak */ var  aa = nodes[0] ,ab = {id: 'ab', name:'krabbe'},ak = {id: 'ak', name:'magister'} ; nodes.push( ab,ak ); links.push( {source: ab , target: ak },{source: aa , target: ab },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ah */ var  ab = nodes[0] ,ah = {id: 'ah', name:'julius_krabbe'} ; nodes.push( ah ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ag ah */ var  aa = {id: 'aa', name:'baron'},ab = nodes[0] ,ag = {id: 'ag', name:'julius'},ah = nodes[1]  ; nodes.push( aa,ag ); links.push( {source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab ag ah al */ var  aa = nodes[0] ,ab = nodes[1] ,ag = nodes[2] ,ah = nodes[3] ,al = {id: 'al', name:'gottlieb'} ; nodes.push( al ); links.push( {source: aa , target: al },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ah },{source: ag , target: al },{source: ag , target: ah },{source: ab , target: al },{source: ab , target: ag },{source: ab , target: ah },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ab al */ var  aa = nodes[0] ,ab = nodes[1] ,al = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: al },{source: aa , target: ab },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ab af */ var  aa = nodes[0] ,ab = nodes[1] ,af = {id: 'af', name:'gustav'} ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: ab },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ab al */ var  aa = nodes[0] ,ab = nodes[1] ,al = {id: 'al', name:'gottlieb'} ; nodes.push( al ); links.push( {source: aa , target: al },{source: aa , target: ab },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'al','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'fritze'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'baron'},ab = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad aj */ var  ad = {id: 'ad', name:'emma'},aj = {id: 'aj', name:'barbara'} ; nodes.push( ad,aj ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ad ag aj */ var  aa = {id: 'aa', name:'baron'},ad = nodes[0] ,ag = {id: 'ag', name:'julius'},aj = nodes[1]  ; nodes.push( aa,ag ); links.push( {source: ad , target: ag },{source: ad , target: aj },{source: ag , target: aj },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ad aj */ var  aa = nodes[0] ,ad = nodes[1] ,aj = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: aj },{source: aa , target: ad },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aj','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'eweline'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ai am */ var  ai = nodes[0] ,am = {id: 'am', name:'klara'} ; nodes.push( am ); links.push( {source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'krabbe'},ai = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ah ai */ var  ab = nodes[0] ,ah = {id: 'ah', name:'julius_krabbe'},ai = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: ai },{source: ab , target: ah },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ab ai am */ var  ab = nodes[0] ,ai = nodes[1] ,am = {id: 'am', name:'klara'} ; nodes.push( am ); links.push( {source: ai , target: am },{source: ab , target: am },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab ai */ var  aa = {id: 'aa', name:'baron'},ab = nodes[0] ,ai = nodes[1]  ; nodes.push( aa ); links.push( {source: ab , target: ai },{source: aa , target: ai },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ab ai am */ var  aa = nodes[0] ,ab = nodes[1] ,ai = nodes[2] ,am = {id: 'am', name:'klara'} ; nodes.push( am ); links.push( {source: ai , target: am },{source: aa , target: am },{source: aa , target: ai },{source: aa , target: ab },{source: ab , target: am },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'am','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ad ai */ var  aa = nodes[0] ,ad = {id: 'ad', name:'emma'},ai = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ai },{source: aa , target: ad },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'krabbe'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ab ai */ var  aa = nodes[0] ,ab = nodes[1] ,ai = {id: 'ai', name:'eweline'} ; nodes.push( ai ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'emma'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa ab ae */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'fritze'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Scene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aa ab ag ah */ var  aa = nodes[0] ,ab = nodes[1] ,ag = {id: 'ag', name:'julius'},ah = {id: 'ah', name:'julius_krabbe'} ; nodes.push( ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnte Scene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aa ag ah aj */ var  aa = nodes[0] ,ag = nodes[1] ,ah = nodes[2] ,aj = {id: 'aj', name:'barbara'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ag },{source: ah , target: aj },{source: ag , target: aj },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Scene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aa ab ad ae ag ah ai aj */ var  aa = nodes[0] ,ab = {id: 'ab', name:'krabbe'},ad = {id: 'ad', name:'emma'},ae = {id: 'ae', name:'fritze'},ag = nodes[1] ,ah = nodes[2] ,ai = {id: 'ai', name:'eweline'},aj = nodes[3]  ; nodes.push( ab,ad,ae,ai ); links.push( {source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ae },{source: ai , target: aj },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ae },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: ae },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '18. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Scene';
}, 220000);
