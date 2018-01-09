setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'brunhild'},ab = {id: 'ab', name:'frigga'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.17391304347826087%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'siegfried'},ad = {id: 'ad', name:'gunther'},ae = {id: 'ae', name:'hagen'},af = {id: 'af', name:'volker'} ; nodes.push( ac,ad,ae,af ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.347826086956521739%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ac','ad','ae','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ag ah ai */ var  ag = {id: 'ag', name:'giselher'},ah = {id: 'ah', name:'rumolt'},ai = {id: 'ai', name:'gerenot'} ; nodes.push( ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.521739130434782609%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'siegfried'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.695652173913043478%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ag aj ak */ var  ac = nodes[0] ,ag = nodes[1] ,aj = {id: 'aj', name:'ute'},ak = {id: 'ak', name:'kriemhild'} ; nodes.push( aj,ak ); links.push( {source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ak },{source: ag , target: aj },{source: ag , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.869565217391304348%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.043478260869565217%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac al */ var  ac = nodes[0] ,al = {id: 'al', name:'kaplan'} ; nodes.push( al ); links.push( {source: ac , target: al },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.217391304347826087%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ac ad ae af aj ak */ var  aa = {id: 'aa', name:'brunhild'},ab = {id: 'ab', name:'frigga'},ac = nodes[0] ,ad = {id: 'ad', name:'gunther'},ae = {id: 'ae', name:'hagen'},af = {id: 'af', name:'volker'},aj = {id: 'aj', name:'ute'},ak = {id: 'ak', name:'kriemhild'} ; nodes.push( aa,ab,ad,ae,af,aj,ak ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ak },{source: af , target: aj },{source: af , target: ak },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ak },{source: aj , target: ak },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ab },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.391304347826086957%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','af','ae','ac','aj','ak','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* am an */ var  am = {id: 'am', name:'truchs'},an = {id: 'an', name:'wulf'} ; nodes.push( am,an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.565217391304347826%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ad ae */ var  ac = {id: 'ac', name:'siegfried'},ad = {id: 'ad', name:'gunther'},ae = {id: 'ae', name:'hagen'} ; nodes.push( ac,ad,ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.739130434782608696%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac','ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ah ao */ var  ah = {id: 'ah', name:'rumolt'},ao = {id: 'ao', name:'dankwart'} ; nodes.push( ah,ao ); links.push( {source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.913043478260869565%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ah ao */ var  ah = nodes[0] ,ao = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.086956521739130435%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ah','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac ak */ var  ac = {id: 'ac', name:'siegfried'},ak = {id: 'ak', name:'kriemhild'} ; nodes.push( ac,ak ); links.push( {source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.260869565217391304%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'brunhild'},ad = {id: 'ad', name:'gunther'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.434782608695652174%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab aj */ var  ab = {id: 'ab', name:'frigga'},aj = {id: 'aj', name:'ute'} ; nodes.push( ab,aj ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.608695652173913043%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aj','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ak */ var  aa = {id: 'aa', name:'brunhild'},ak = {id: 'ak', name:'kriemhild'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.782608695652173913%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'frigga'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.956521739130434783%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ab ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'gunther'},ae = {id: 'ae', name:'hagen'} ; nodes.push( ad,ae ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.130434782608695652%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ac ad ae ak */ var  aa = nodes[0] ,ac = {id: 'ac', name:'siegfried'},ad = nodes[1] ,ae = nodes[2] ,ak = {id: 'ak', name:'kriemhild'} ; nodes.push( ac,ak ); links.push( {source: ad , target: ak },{source: ad , target: ae },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ae },{source: ae , target: ak },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.304347826086956522%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ak','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ad ae ag ai */ var  aa = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,ag = {id: 'ag', name:'giselher'},ai = {id: 'ai', name:'gerenot'} ; nodes.push( ag,ai ); links.push( {source: ae , target: ag },{source: ae , target: ai },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ai },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.478260869565217391%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ae','ad','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'frigga'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.652173913043478261%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'hagen'},ag = {id: 'ag', name:'giselher'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.82608695652173913%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac ad ae af ag */ var  ac = {id: 'ac', name:'siegfried'},ad = {id: 'ad', name:'gunther'},ae = nodes[0] ,af = {id: 'af', name:'volker'},ag = nodes[1]  ; nodes.push( ac,ad,af ); links.push( {source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ad ae ag */ var  ad = nodes[0] ,ae = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: ag },{source: ad , target: ae },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.17391304347826087%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ad af ag ao */ var  ad = nodes[0] ,af = {id: 'af', name:'volker'},ag = nodes[1] ,ao = {id: 'ao', name:'dankwart'} ; nodes.push( af,ao ); links.push( {source: ag , target: ao },{source: af , target: ag },{source: af , target: ao },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.347826086956521739%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag','ad','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.521739130434782609%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ae ak */ var  ae = {id: 'ae', name:'hagen'},ak = {id: 'ak', name:'kriemhild'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.695652173913043478%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.869565217391304348%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aj ak al */ var  aj = {id: 'aj', name:'ute'},ak = {id: 'ak', name:'kriemhild'},al = {id: 'al', name:'kaplan'} ; nodes.push( aj,ak,al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.043478260869565217%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'al','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ad ae ag */ var  ad = {id: 'ad', name:'gunther'},ae = {id: 'ae', name:'hagen'},ag = {id: 'ag', name:'giselher'} ; nodes.push( ad,ae,ag ); links.push( {source: ad , target: ag },{source: ad , target: ae },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.217391304347826087%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ac ae ag ai */ var  ac = {id: 'ac', name:'siegfried'},ae = nodes[0] ,ag = nodes[1] ,ai = {id: 'ai', name:'gerenot'} ; nodes.push( ac,ai ); links.push( {source: ae , target: ag },{source: ae , target: ai },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.391304347826086957%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac ae ak */ var  ac = nodes[0] ,ae = nodes[1] ,ak = {id: 'ak', name:'kriemhild'} ; nodes.push( ak ); links.push( {source: ac , target: ak },{source: ac , target: ae },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.565217391304347826%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac ae ak */ var  ac = nodes[0] ,ae = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ak },{source: ac , target: ae },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.739130434782608696%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ak */ var  ak = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.913043478260869565%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag ai ak */ var  ag = {id: 'ag', name:'giselher'},ai = {id: 'ai', name:'gerenot'},ak = nodes[0]  ; nodes.push( ag,ai ); links.push( {source: ai , target: ak },{source: ag , target: ak },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.086956521739130435%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab ak */ var  ab = {id: 'ab', name:'frigga'},ak = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.260869565217391304%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ak */ var  ak = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.434782608695652174%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'gunther'},ae = {id: 'ae', name:'hagen'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.608695652173913043%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ac ad ae af ao */ var  ac = {id: 'ac', name:'siegfried'},ad = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'volker'},ao = {id: 'ao', name:'dankwart'} ; nodes.push( ac,af,ao ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ao },{source: ae , target: af },{source: ae , target: ao },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ao },{source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.782608695652173913%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ac','ae','ad','af','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ak */ var  ak = {id: 'ak', name:'kriemhild'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.956521739130434783%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'ute'},ak = nodes[0]  ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.130434782608695652%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aj ak ap */ var  aj = nodes[0] ,ak = nodes[1] ,ap = {id: 'ap', name:'kämmerer'} ; nodes.push( ap ); links.push( {source: aj , target: ap },{source: aj , target: ak },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.304347826086956522%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ap','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ad aj ao */ var  ad = {id: 'ad', name:'gunther'},aj = nodes[0] ,ao = {id: 'ao', name:'dankwart'} ; nodes.push( ad,ao ); links.push( {source: aj , target: ao },{source: ad , target: aj },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.478260869565217391%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ad ah aj ak al ao */ var  ad = nodes[0] ,ah = {id: 'ah', name:'rumolt'},aj = nodes[1] ,ak = {id: 'ak', name:'kriemhild'},al = {id: 'al', name:'kaplan'},ao = nodes[2]  ; nodes.push( ah,ak,al ); links.push( {source: al , target: ao },{source: ad , target: al },{source: ad , target: ao },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ah },{source: aj , target: al },{source: aj , target: ao },{source: aj , target: ak },{source: ak , target: al },{source: ak , target: ao },{source: ah , target: al },{source: ah , target: ao },{source: ah , target: aj },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.652173913043478261%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'al','ao','aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ad ak */ var  ad = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.82608695652173913%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ad ae ag aj ak al aq */ var  ad = nodes[0] ,ae = {id: 'ae', name:'hagen'},ag = {id: 'ag', name:'giselher'},aj = {id: 'aj', name:'ute'},ak = nodes[1] ,al = {id: 'al', name:'kaplan'},aq = {id: 'aq', name:'antwort_von_draussen'} ; nodes.push( ae,ag,aj,al,aq ); links.push( {source: al , target: aq },{source: ak , target: al },{source: ak , target: aq },{source: ae , target: al },{source: ae , target: aq },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: ag },{source: ad , target: al },{source: ad , target: aq },{source: ad , target: ak },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ag },{source: aj , target: al },{source: aj , target: aq },{source: aj , target: ak },{source: ag , target: al },{source: ag , target: aq },{source: ag , target: ak },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 225000);
