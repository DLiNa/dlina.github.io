setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = {id: 'aa', name:'holland'},ab = {id: 'ab', name:'beermann'},ac = {id: 'ac', name:'wasner'},ad = {id: 'ad', name:'effie'},ae = {id: 'ae', name:'frau_bolland'},af = {id: 'af', name:'fräulein_koch-pinneberg'},ag = {id: 'ag', name:'dobler'},ah = {id: 'ah', name:'frau_beermann'},ai = {id: 'ai', name:'hauser'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad','ae','af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ag ai */ var  aa = nodes[0] ,ab = nodes[1] ,ag = nodes[2] ,ai = nodes[3]  ; /* nodes.push(); */ links.push( {source: ab , target: ai },{source: ab , target: ag },{source: ag , target: ai },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ag ah aj */ var  aa = nodes[0] ,ab = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'frau_beermann'},aj = {id: 'aj', name:'frau_lund'} ; nodes.push( ah,aj ); links.push( {source: ah , target: aj },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ag },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: ag },{source: ag , target: ah },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ad ae ag ah aj */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'effie'},ae = {id: 'ae', name:'frau_bolland'},ag = nodes[2] ,ah = nodes[3] ,aj = nodes[4]  ; nodes.push( ad,ae ); links.push( {source: ae , target: aj },{source: ae , target: ah },{source: ae , target: ag },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: ag },{source: ah , target: aj },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ab },{source: ag , target: aj },{source: ag , target: ah },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad','ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ae ah aj */ var  aa = nodes[0] ,ae = nodes[1] ,ah = nodes[2] ,aj = nodes[3]  ; /* nodes.push(); */ links.push( {source: ah , target: aj },{source: ae , target: aj },{source: ae , target: ah },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ac ah ai aj */ var  aa = nodes[0] ,ab = {id: 'ab', name:'beermann'},ac = {id: 'ac', name:'wasner'},ah = nodes[1] ,ai = {id: 'ai', name:'hauser'},aj = nodes[2]  ; nodes.push( ab,ac,ai ); links.push( {source: ai , target: aj },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ah , target: aj },{source: ah , target: ai },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ac },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ah },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aj','ai','ab','ah','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'assessor'},al = {id: 'al', name:'reisacher'} ; nodes.push( ak,al ); links.push( {source: ak , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ak am */ var  ak = nodes[0] ,am = {id: 'am', name:'präsident'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ak al */ var  ak = nodes[0] ,al = {id: 'al', name:'reisacher'} ; nodes.push( al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ak al an ao */ var  ak = nodes[0] ,al = nodes[1] ,an = {id: 'an', name:'hauteville'},ao = {id: 'ao', name:'schutzmann'} ; nodes.push( an,ao ); links.push( {source: an , target: ao },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: al },{source: al , target: an },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ak al */ var  ab = {id: 'ab', name:'beermann'},ak = nodes[0] ,al = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ak },{source: ab , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ak al */ var  ab = nodes[0] ,ak = nodes[1] ,al = nodes[2]  ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: ab , target: ak },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ak','ab','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* am */ var  am = {id: 'am', name:'präsident'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ak am ap */ var  ak = {id: 'ak', name:'assessor'},am = nodes[0] ,ap = {id: 'ap', name:'schmettau'} ; nodes.push( ak,ap ); links.push( {source: am , target: ap },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am','ap','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ah */ var  ab = {id: 'ab', name:'beermann'},ah = {id: 'ah', name:'frau_beermann'} ; nodes.push( ab,ah ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ad ah */ var  ab = nodes[0] ,ad = {id: 'ad', name:'effie'},ah = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ah },{source: ab , target: ad },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ah */ var  ab = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ai aq */ var  ab = nodes[0] ,ai = {id: 'ai', name:'hauser'},aq = {id: 'aq', name:'betty'} ; nodes.push( ai,aq ); links.push( {source: ai , target: aq },{source: ab , target: ai },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ai','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'wasner'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ab aq */ var  ab = nodes[0] ,aq = {id: 'aq', name:'betty'} ; nodes.push( aq ); links.push( {source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'wasner'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ac ak */ var  ab = nodes[0] ,ac = nodes[1] ,ak = {id: 'ak', name:'assessor'} ; nodes.push( ak ); links.push( {source: ab , target: ak },{source: ab , target: ac },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ak */ var  ab = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ak ap */ var  ab = nodes[0] ,ak = nodes[1] ,ap = {id: 'ap', name:'schmettau'} ; nodes.push( ap ); links.push( {source: ak , target: ap },{source: ab , target: ap },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 120000);
