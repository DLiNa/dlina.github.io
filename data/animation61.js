setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'miranda'},ab = {id: 'ab', name:'geister_chor'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.703703703703703704%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = {id: 'ac', name:'prosero'},ad = {id: 'ad', name:'ariose'} ; nodes.push( ac,ad ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.407407407407407407%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = {id: 'ae', name:'ariel'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac af */ var  aa = {id: 'aa', name:'miranda'},ac = nodes[0] ,af = {id: 'af', name:'caliban'} ; nodes.push( aa,af ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.814814814814814815%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac ae af ag */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'ariel'},af = nodes[2] ,ag = {id: 'ag', name:'chor_der_schiffer'} ; nodes.push( ae,ag ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ag },{source: af , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.518518518518518519%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','af','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ah */ var  ae = nodes[0] ,ah = {id: 'ah', name:'fernando'} ; nodes.push( ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ah */ var  ac = {id: 'ac', name:'prosero'},ah = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.925925925925925926%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ae ah */ var  ac = nodes[0] ,ae = {id: 'ae', name:'ariel'},ah = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ah },{source: ac , target: ae },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.62962962962962963%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac ah */ var  aa = {id: 'aa', name:'miranda'},ac = nodes[0] ,ah = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ac },{source: ac , target: ah },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ah */ var  ac = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.037037037037037037%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'ariel'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.740740740740740741%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'romanze'},aj = {id: 'aj', name:'oronzio'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ai aj ak */ var  ai = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'stefano'} ; nodes.push( ak ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.148148148148148148%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aj ak */ var  aj = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.851851851851851852%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ae af aj ak */ var  ae = {id: 'ae', name:'ariel'},af = {id: 'af', name:'caliban'},aj = nodes[0] ,ak = nodes[1]  ; nodes.push( ae,af ); links.push( {source: aj , target: ak },{source: af , target: aj },{source: af , target: ak },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ae af ai aj ak */ var  ae = nodes[0] ,af = nodes[1] ,ai = {id: 'ai', name:'romanze'},aj = nodes[2] ,ak = nodes[3]  ; nodes.push( ai ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: aj , target: ak },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.259259259259259259%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai','af','aj','ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ah */ var  aa = {id: 'aa', name:'miranda'},ah = {id: 'ah', name:'fernando'} ; nodes.push( aa,ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.962962962962962963%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ac ae af ah al */ var  aa = nodes[0] ,ac = {id: 'ac', name:'prosero'},ae = {id: 'ae', name:'ariel'},af = {id: 'af', name:'caliban'},ah = nodes[1] ,al = {id: 'al', name:'cavatina'} ; nodes.push( ac,ae,af,al ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: ae },{source: af , target: ah },{source: af , target: al },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: al },{source: ac , target: ae },{source: ah , target: al },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af','ac','al','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ah */ var  aa = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.37037037037037037%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'geister_chor'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.074074074074074074%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'prosero'},ae = {id: 'ae', name:'ariel'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'fernando'},ai = {id: 'ai', name:'romanze'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.481481481481481481%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac ae af aj ak */ var  ac = {id: 'ac', name:'prosero'},ae = {id: 'ae', name:'ariel'},af = {id: 'af', name:'caliban'},aj = {id: 'aj', name:'oronzio'},ak = {id: 'ak', name:'stefano'} ; nodes.push( ac,ae,af,aj,ak ); links.push( {source: af , target: aj },{source: af , target: ak },{source: aj , target: ak },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.185185185185185185%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ac ae af ah ai aj ak */ var  aa = {id: 'aa', name:'miranda'},ac = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ah = {id: 'ah', name:'fernando'},ai = {id: 'ai', name:'romanze'},aj = nodes[3] ,ak = nodes[4]  ; nodes.push( aa,ah,ai ); links.push( {source: ae , target: aj },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ah },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ah },{source: aj , target: ak },{source: af , target: aj },{source: af , target: ak },{source: af , target: ai },{source: af , target: ah },{source: ai , target: aj },{source: ai , target: ak },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ah },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae','ac','aj','ak','af','ai','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag am */ var  ag = {id: 'ag', name:'chor_der_schiffer'},am = {id: 'am', name:'chor'} ; nodes.push( ag,am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.592592592592592593%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ac ah ai aj ak am an ao */ var  aa = {id: 'aa', name:'miranda'},ac = {id: 'ac', name:'prosero'},ah = {id: 'ah', name:'fernando'},ai = {id: 'ai', name:'romanze'},aj = {id: 'aj', name:'oronzio'},ak = {id: 'ak', name:'stefano'},am = nodes[0] ,an = {id: 'an', name:'ruperro'},ao = {id: 'ao', name:'matrosen'} ; nodes.push( aa,ac,ah,ai,aj,ak,an,ao ); links.push( {source: ac , target: an },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: aa , target: ac },{source: aa , target: an },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: am },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: an , target: ao },{source: an , target: ao },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: ah , target: an },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: an },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: an },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: ak },{source: ak , target: an },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.296296296296296296%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aa','an','ao','am','ah','ai','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = {id: 'ae', name:'ariel'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 130000);
