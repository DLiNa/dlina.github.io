setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'die_gesellen'},ab = {id: 'ab', name:'graf'},ac = {id: 'ac', name:'georg'},ad = {id: 'ad', name:'geselle'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.702702702702702703%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ae */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'stadinger'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.405405405405405405%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'graf'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.108108108108108108%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.810810810810810811%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'brenner'},ag = {id: 'ag', name:'adelhof'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.513513513513513514%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af ag ah */ var  af = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'irmentraut'} ; nodes.push( ah ); links.push( {source: ag , target: ah },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.216216216216216216%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.918918918918918919%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = {id: 'ai', name:'marie'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.621621621621621622%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ah ai */ var  ab = {id: 'ab', name:'graf'},ah = nodes[0] ,ai = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.324324324324324324%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ab ac ae ah ai */ var  aa = {id: 'aa', name:'die_gesellen'},ab = nodes[0] ,ac = {id: 'ac', name:'georg'},ae = {id: 'ae', name:'stadinger'},ah = nodes[1] ,ai = nodes[2]  ; nodes.push( aa,ac,ae ); links.push( {source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ae },{source: ah , target: ai },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ae },{source: ae , target: ai },{source: ae , target: ah },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.027027027027027027%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ac ae ah ai */ var  aa = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,ah = nodes[3] ,ai = nodes[4]  ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ah },{source: ae , target: ai },{source: ae , target: ah },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ah },{source: ah , target: ai },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.72972972972972973%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa','ae','ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.432432432432432432%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'graf'},ai = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.135135135135135135%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ah ai */ var  ab = nodes[0] ,ah = {id: 'ah', name:'irmentraut'},ai = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: ai },{source: ab , target: ah },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.837837837837837838%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac ah */ var  ac = {id: 'ac', name:'georg'},ah = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.540540540540540541%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ac ae ah ai */ var  ab = {id: 'ab', name:'graf'},ac = nodes[0] ,ae = {id: 'ae', name:'stadinger'},ah = nodes[1] ,ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ae,ai ); links.push( {source: ae , target: ah },{source: ae , target: ai },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.243243243243243243%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ac ae ag ah ai */ var  ab = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,ag = {id: 'ag', name:'adelhof'},ah = nodes[3] ,ai = nodes[4]  ; nodes.push( ag ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ah },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ah },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.945945945945945946%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ag','ae','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.648648648648648649%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ac ae */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'stadinger'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.351351351351351351%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = {id: 'ag', name:'adelhof'} ; nodes.push( ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.054054054054054054%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae af ag */ var  ae = nodes[0] ,af = {id: 'af', name:'brenner'},ag = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.756756756756756757%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ae ag ah */ var  ae = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'irmentraut'} ; nodes.push( ah ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.459459459459459459%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'brenner'},ag = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.162162162162162162%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac ad ae aj */ var  ac = {id: 'ac', name:'georg'},ad = {id: 'ad', name:'geselle'},ae = {id: 'ae', name:'stadinger'},aj = {id: 'aj', name:'chor'} ; nodes.push( ac,ad,ae,aj ); links.push( {source: ad , target: ae },{source: ad , target: aj },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: aj },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.864864864864864865%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ae af ag */ var  ac = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'brenner'},ag = {id: 'ag', name:'adelhof'} ; nodes.push( af,ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.567567567567567568%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab ac ae af ag ah ai aj ak */ var  ab = {id: 'ab', name:'graf'},ac = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ah = {id: 'ah', name:'irmentraut'},ai = {id: 'ai', name:'marie'},aj = {id: 'aj', name:'chor'},ak = {id: 'ak', name:'einige_männer'} ; nodes.push( ab,ah,ai,aj,ak ); links.push( {source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: ak },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj },{source: af , target: ai },{source: af , target: ak },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ak },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ak },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.27027027027027027%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah','ae','af','ac','ag','aj','ab','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.972972972972972973%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae af ai */ var  ae = {id: 'ae', name:'stadinger'},af = {id: 'af', name:'brenner'},ai = nodes[0]  ; nodes.push( ae,af ); links.push( {source: af , target: ai },{source: ae , target: af },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.675675675675675676%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ac ae ai */ var  ac = {id: 'ac', name:'georg'},ae = nodes[0] ,ai = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: ai },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.378378378378378378%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ad ae af */ var  ad = {id: 'ad', name:'geselle'},ae = nodes[0] ,af = {id: 'af', name:'brenner'} ; nodes.push( ad,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.081081081081081081%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ab ac ae af ah ai */ var  ab = {id: 'ab', name:'graf'},ac = {id: 'ac', name:'georg'},ae = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'irmentraut'},ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ac,ah,ai ); links.push( {source: ae , target: ai },{source: ae , target: ah },{source: ae , target: af },{source: ah , target: ai },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: af },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: af },{source: af , target: ai },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.783783783783783784%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ab ac ae af ag ah ai */ var  ab = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = {id: 'ag', name:'adelhof'},ah = nodes[4] ,ai = nodes[5]  ; nodes.push( ag ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: ah , target: ai },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ah },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.486486486486486486%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ag','ai','ah','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.189189189189189189%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ac ae ah */ var  ac = {id: 'ac', name:'georg'},ae = nodes[0] ,ah = {id: 'ah', name:'irmentraut'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ae },{source: ac , target: ah },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.891891891891891892%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ab ac ad ae af ah ai */ var  ab = {id: 'ab', name:'graf'},ac = nodes[0] ,ad = {id: 'ad', name:'geselle'},ae = nodes[1] ,af = {id: 'af', name:'brenner'},ah = nodes[2] ,ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ad,af,ai ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ah },{source: af , target: ai },{source: af , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.594594594594594595%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ad','ac','ai','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.297297297297297297%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ab ac ae af ah ai */ var  ab = {id: 'ab', name:'graf'},ac = {id: 'ac', name:'georg'},ae = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'irmentraut'},ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ac,ah,ai ); links.push( {source: ae , target: ai },{source: ae , target: af },{source: ae , target: ah },{source: af , target: ai },{source: af , target: ah },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ah },{source: ah , target: ai },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 180000);
