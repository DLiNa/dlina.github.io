setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'valeria'},ab = {id: 'ab', name:'ponce'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0.826446280991735537%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.652892561983471074%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'valerio'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.479338842975206612%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = {id: 'ab', name:'ponce'},ac = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.305785123966942149%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.132231404958677686%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.958677685950413223%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'valeria'},ac = nodes[0] ,ad = {id: 'ad', name:'sarmiento'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.78512396694214876%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.611570247933884298%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ad ae */ var  ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'porporino'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.438016528925619835%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.264462809917355372%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'valeria'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.090909090909090909%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.917355371900826446%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'porporino'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.743801652892561983%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac ad ae */ var  aa = {id: 'aa', name:'valeria'},ac = {id: 'ac', name:'valerio'},ad = nodes[0] ,ae = nodes[1]  ; nodes.push( aa,ac ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.570247933884297521%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aa','ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'ponce'},af = {id: 'af', name:'erster'} ; nodes.push( ab,af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.396694214876033058%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab af ag ah ai */ var  ab = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'aquilar'},ah = {id: 'ah', name:'zweiter'},ai = {id: 'ai', name:'dame'} ; nodes.push( ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ah , target: ai },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.223140495867768595%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ag','ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac ae af ah */ var  ac = {id: 'ac', name:'valerio'},ae = {id: 'ae', name:'porporino'},af = nodes[0] ,ah = nodes[1]  ; nodes.push( ac,ae ); links.push( {source: ac , target: af },{source: ac , target: ah },{source: ac , target: ae },{source: af , target: ah },{source: ae , target: af },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.049586776859504132%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ab ac ad ae ag */ var  aa = {id: 'aa', name:'valeria'},ab = {id: 'ab', name:'ponce'},ac = nodes[0] ,ad = {id: 'ad', name:'sarmiento'},ae = nodes[1] ,ag = {id: 'ag', name:'aquilar'} ; nodes.push( aa,ab,ad,ag ); links.push( {source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ae , target: ag },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ag },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.876033057851239669%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ac ad ag */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ag = nodes[3]  ; /* nodes.push(); */ links.push( {source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ag },{source: ac , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.702479338842975207%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ag aj */ var  ab = nodes[0] ,ag = nodes[1] ,aj = {id: 'aj', name:'ein_diener'} ; nodes.push( aj ); links.push( {source: ag , target: aj },{source: ab , target: aj },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.528925619834710744%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aj','ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'valerio'},ad = {id: 'ad', name:'sarmiento'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.355371900826446281%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ac ad ag ak */ var  ab = {id: 'ab', name:'ponce'},ac = nodes[0] ,ad = nodes[1] ,ag = {id: 'ag', name:'aquilar'},ak = {id: 'ak', name:'felix'} ; nodes.push( ab,ag,ak ); links.push( {source: ag , target: ak },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: ad },{source: ab , target: ac },{source: ad , target: ag },{source: ad , target: ak },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.181818181818181818%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ag ak */ var  ab = nodes[0] ,ag = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ak },{source: ab , target: ag },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.008264462809917355%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ab','ak','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* af ah */ var  af = {id: 'af', name:'erster'},ah = {id: 'ah', name:'zweiter'} ; nodes.push( af,ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.834710743801652893%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ad ak */ var  ad = {id: 'ad', name:'sarmiento'},ak = {id: 'ak', name:'felix'} ; nodes.push( ad,ak ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.66115702479338843%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab ad ag ak al */ var  ab = {id: 'ab', name:'ponce'},ad = nodes[0] ,ag = {id: 'ag', name:'aquilar'},ak = nodes[1] ,al = {id: 'al', name:'bedienter'} ; nodes.push( ab,ag,al ); links.push( {source: ag , target: ak },{source: ag , target: al },{source: ad , target: ag },{source: ad , target: ak },{source: ad , target: al },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.487603305785123967%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ag','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.314049586776859504%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'valeria'},ag = {id: 'ag', name:'aquilar'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.140495867768595041%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ae ag */ var  aa = nodes[0] ,ae = {id: 'ae', name:'porporino'},ag = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ag },{source: aa , target: ag },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.966942148760330579%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ad ae */ var  aa = nodes[0] ,ad = {id: 'ad', name:'sarmiento'},ae = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.793388429752066116%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.619834710743801653%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'valerio'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.44628099173553719%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'sarmiento'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.272727272727272727%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'porporino'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.099173553719008264%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'valeria'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.925619834710743802%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'ponce'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.752066115702479339%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ab ad af ag aj */ var  ab = nodes[0] ,ad = {id: 'ad', name:'sarmiento'},af = {id: 'af', name:'erster'},ag = {id: 'ag', name:'aquilar'},aj = {id: 'aj', name:'ein_diener'} ; nodes.push( ad,af,ag,aj ); links.push( {source: ag , target: aj },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: af },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: af },{source: af , target: ag },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.578512396694214876%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ad','aj','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.404958677685950413%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'valerio'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.23140495867768595%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'valeria'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.057851239669421488%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'porporino'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.884297520661157025%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'valeria'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.710743801652892562%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'ponce'},ag = {id: 'ag', name:'aquilar'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.537190082644628099%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = {id: 'af', name:'erster'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.363636363636363636%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'porporino'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.190082644628099174%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.016528925619834711%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'valeria'},ac = {id: 'ac', name:'valerio'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.842975206611570248%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.669421487603305785%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ac am an ao ap */ var  ac = nodes[0] ,am = {id: 'am', name:'juanna'},an = {id: 'an', name:'perez'},ao = {id: 'ao', name:'melanie'},ap = {id: 'ap', name:'isidora'} ; nodes.push( am,an,ao,ap ); links.push( {source: am , target: an },{source: am , target: ap },{source: am , target: ao },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ap },{source: ac , target: ao },{source: an , target: ap },{source: an , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.495867768595041322%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* aa ac ao ap */ var  aa = {id: 'aa', name:'valeria'},ac = nodes[0] ,ao = nodes[1] ,ap = nodes[2]  ; nodes.push( aa ); links.push( {source: ac , target: ao },{source: ac , target: ap },{source: aa , target: ac },{source: aa , target: ao },{source: aa , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.32231404958677686%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* aa ac ao ap */ var  aa = nodes[0] ,ac = nodes[1] ,ao = nodes[2] ,ap = nodes[3]  ; /* nodes.push(); */ links.push( {source: ao , target: ap },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: ap },{source: ac , target: ao },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.148760330578512397%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ac','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* aa ae ao */ var  aa = nodes[0] ,ae = {id: 'ae', name:'porporino'},ao = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ao },{source: aa , target: ae },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.975206611570247934%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* aa ac ae ao ap aq */ var  aa = nodes[0] ,ac = {id: 'ac', name:'valerio'},ae = nodes[1] ,ao = nodes[2] ,ap = {id: 'ap', name:'isidora'},aq = {id: 'aq', name:'isabella'} ; nodes.push( ac,ap,aq ); links.push( {source: ao , target: aq },{source: ao , target: ap },{source: ae , target: aq },{source: ae , target: ao },{source: ae , target: ap },{source: ap , target: aq },{source: aa , target: aq },{source: aa , target: ao },{source: aa , target: ae },{source: aa , target: ap },{source: aa , target: ac },{source: ac , target: aq },{source: ac , target: ao },{source: ac , target: ae },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.801652892561983471%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ac ae ao ap aq */ var  ac = nodes[0] ,ae = nodes[1] ,ao = nodes[2] ,ap = nodes[3] ,aq = nodes[4]  ; /* nodes.push(); */ links.push( {source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.628099173553719008%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ao','ap','aq','ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* af ah */ var  af = {id: 'af', name:'erster'},ah = {id: 'ah', name:'zweiter'} ; nodes.push( af,ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.454545454545454545%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'valerio'},ae = {id: 'ae', name:'porporino'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.280991735537190083%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ao ap aq */ var  ao = {id: 'ao', name:'melanie'},ap = {id: 'ap', name:'isidora'},aq = {id: 'aq', name:'isabella'} ; nodes.push( ao,ap,aq ); links.push( {source: ap , target: aq },{source: ao , target: aq },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.10743801652892562%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ac ae aq */ var  ac = {id: 'ac', name:'valerio'},ae = {id: 'ae', name:'porporino'},aq = nodes[0]  ; nodes.push( ac,ae ); links.push( {source: ac , target: aq },{source: ac , target: ae },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.933884297520661157%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ac','aq','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* aa ao ap */ var  aa = {id: 'aa', name:'valeria'},ao = {id: 'ao', name:'melanie'},ap = {id: 'ap', name:'isidora'} ; nodes.push( aa,ao,ap ); links.push( {source: ao , target: ap },{source: aa , target: ap },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.760330578512396694%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ao','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ac ap */ var  ac = {id: 'ac', name:'valerio'},ap = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.586776859504132231%' ;
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ap','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'ponce'},ag = {id: 'ag', name:'aquilar'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.413223140495867769%' ;
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'valeria'},ac = {id: 'ac', name:'valerio'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.239669421487603306%' ;
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* aa ac ae */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'porporino'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: aa , target: ae },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.066115702479338843%' ;
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'ponce'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.89256198347107438%' ;
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.719008264462809917%' ;
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = {id: 'ag', name:'aquilar'} ; nodes.push( ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.545454545454545455%' ;
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* ab ae ag */ var  ab = nodes[0] ,ae = {id: 'ae', name:'porporino'},ag = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ag },{source: ab , target: ae },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.371900826446280992%' ;
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.198347107438016529%' ;
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69');nodes.sort(compare); /* ab ae ag ar */ var  ab = nodes[0] ,ae = {id: 'ae', name:'porporino'},ag = nodes[1] ,ar = {id: 'ar', name:'träger'} ; nodes.push( ae,ar ); links.push( {source: ae , target: ag },{source: ae , target: ar },{source: ag , target: ar },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.024793388429752066%' ;
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [ 'ae','ag','ab','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'valeria'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.851239669421487603%' ;
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71');nodes.sort(compare); /* aa ac ae */ var  aa = nodes[0] ,ac = {id: 'ac', name:'valerio'},ae = {id: 'ae', name:'porporino'} ; nodes.push( ac,ae ); links.push( {source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.67768595041322314%' ;
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.504132231404958678%' ;
}, 355000);

setTimeout(function() { console.log('remv72'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 358750);

setTimeout(function() { console.log('load73');nodes.sort(compare); /* ab ag aq */ var  ab = {id: 'ab', name:'ponce'},ag = {id: 'ag', name:'aquilar'},aq = {id: 'aq', name:'isabella'} ; nodes.push( ab,ag,aq ); links.push( {source: ag , target: aq },{source: ab , target: ag },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.330578512396694215%' ;
}, 360000);

setTimeout(function() { console.log('remv73'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 363750);

setTimeout(function() { console.log('load74');nodes.sort(compare); /* ab ag ao ap aq */ var  ab = nodes[0] ,ag = nodes[1] ,ao = {id: 'ao', name:'melanie'},ap = {id: 'ap', name:'isidora'},aq = nodes[2]  ; nodes.push( ao,ap ); links.push( {source: ag , target: aq },{source: ag , target: ap },{source: ag , target: ao },{source: ab , target: aq },{source: ab , target: ag },{source: ab , target: ap },{source: ab , target: ao },{source: ap , target: aq },{source: ao , target: aq },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.157024793388429752%' ;
}, 365000);

setTimeout(function() { console.log('remv74'); var rm = [ 'aq','ag','ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 368750);

setTimeout(function() { console.log('load75');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.983471074380165289%' ;
}, 370000);

setTimeout(function() { console.log('remv75'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 373750);

setTimeout(function() { console.log('load76');nodes.sort(compare); /* ab ae af ag */ var  ab = nodes[0] ,ae = {id: 'ae', name:'porporino'},af = {id: 'af', name:'erster'},ag = {id: 'ag', name:'aquilar'} ; nodes.push( ae,af,ag ); links.push( {source: ab , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: af , target: ag },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.809917355371900826%' ;
}, 375000);

setTimeout(function() { console.log('remv76'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 378750);

setTimeout(function() { console.log('load77');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.636363636363636364%' ;
}, 380000);

setTimeout(function() { console.log('remv77'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 383750);

setTimeout(function() { console.log('load78');nodes.sort(compare); /* aa ab ag */ var  aa = {id: 'aa', name:'valeria'},ab = nodes[0] ,ag = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ag },{source: aa , target: ab },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.462809917355371901%' ;
}, 385000);

setTimeout(function() { console.log('remv78'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 388750);

setTimeout(function() { console.log('load79');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.289256198347107438%' ;
}, 390000);

setTimeout(function() { console.log('remv79'); var rm = [ 'ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 393750);

setTimeout(function() { console.log('load80');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'melanie'},ap = {id: 'ap', name:'isidora'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.115702479338842975%' ;
}, 395000);

setTimeout(function() { console.log('remv80'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 398750);

setTimeout(function() { console.log('load81');nodes.sort(compare); /* aa ao ap */ var  aa = {id: 'aa', name:'valeria'},ao = nodes[0] ,ap = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ap },{source: aa , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.942148760330578512%' ;
}, 400000);

setTimeout(function() { console.log('remv81'); var rm = [ 'aa','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 403750);

setTimeout(function() { console.log('load82');nodes.sort(compare); /* ab ap */ var  ab = {id: 'ab', name:'ponce'},ap = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.76859504132231405%' ;
}, 405000);

setTimeout(function() { console.log('remv82'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 408750);

setTimeout(function() { console.log('load83');nodes.sort(compare); /* ab ap */ var  ab = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.595041322314049587%' ;
}, 410000);

setTimeout(function() { console.log('remv83'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 413750);

setTimeout(function() { console.log('load84');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.421487603305785124%' ;
}, 415000);

setTimeout(function() { console.log('remv84'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 418750);

setTimeout(function() { console.log('load85');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = {id: 'ag', name:'aquilar'} ; nodes.push( ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.247933884297520661%' ;
}, 420000);

setTimeout(function() { console.log('remv85'); var rm = [ 'ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 423750);

setTimeout(function() { console.log('load86');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'melanie'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.074380165289256198%' ;
}, 425000);

setTimeout(function() { console.log('remv86'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 428750);

setTimeout(function() { console.log('load87');nodes.sort(compare); /* ao ap */ var  ao = nodes[0] ,ap = {id: 'ap', name:'isidora'} ; nodes.push( ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.900826446280991736%' ;
}, 430000);

setTimeout(function() { console.log('remv87'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 433750);

setTimeout(function() { console.log('load88');nodes.sort(compare); /* aa ao ap */ var  aa = {id: 'aa', name:'valeria'},ao = nodes[0] ,ap = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ap },{source: aa , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.727272727272727273%' ;
}, 435000);

setTimeout(function() { console.log('remv88'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 438750);

setTimeout(function() { console.log('load89');nodes.sort(compare); /* aa ap */ var  aa = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.55371900826446281%' ;
}, 440000);

setTimeout(function() { console.log('remv89'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 443750);

setTimeout(function() { console.log('load90');nodes.sort(compare); /* ac ap */ var  ac = {id: 'ac', name:'valerio'},ap = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.380165289256198347%' ;
}, 445000);

setTimeout(function() { console.log('remv90'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 448750);

setTimeout(function() { console.log('load91');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'valeria'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.206611570247933884%' ;
}, 450000);

setTimeout(function() { console.log('remv91'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 453750);

setTimeout(function() { console.log('load92');nodes.sort(compare); /* aa ac ae */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'porporino'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.033057851239669421%' ;
}, 455000);

setTimeout(function() { console.log('remv92'); var rm = [ 'ae','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 458750);

setTimeout(function() { console.log('load93');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'melanie'},ap = {id: 'ap', name:'isidora'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.859504132231404959%' ;
}, 460000);

setTimeout(function() { console.log('remv93'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 463750);

setTimeout(function() { console.log('load94');nodes.sort(compare); /* aa ab ag */ var  aa = {id: 'aa', name:'valeria'},ab = {id: 'ab', name:'ponce'},ag = {id: 'ag', name:'aquilar'} ; nodes.push( aa,ab,ag ); links.push( {source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.685950413223140496%' ;
}, 465000);

setTimeout(function() { console.log('remv94'); var rm = [ 'ab','ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 468750);

setTimeout(function() { console.log('load95');nodes.sort(compare); /* ak as */ var  ak = {id: 'ak', name:'felix'},as = {id: 'as', name:'lucilla'} ; nodes.push( ak,as ); links.push( {source: ak , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.512396694214876033%' ;
}, 470000);

setTimeout(function() { console.log('remv95'); var rm = [ 'ak','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 473750);

setTimeout(function() { console.log('load96');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'ponce'},ag = {id: 'ag', name:'aquilar'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.33884297520661157%' ;
}, 475000);

setTimeout(function() { console.log('remv96'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 478750);

setTimeout(function() { console.log('load97');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '28. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.165289256198347107%' ;
}, 480000);

setTimeout(function() { console.log('remv97'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 483750);

setTimeout(function() { console.log('load98');nodes.sort(compare); /* ak as */ var  ak = {id: 'ak', name:'felix'},as = {id: 'as', name:'lucilla'} ; nodes.push( ak,as ); links.push( {source: ak , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '29. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.991735537190082645%' ;
}, 485000);

setTimeout(function() { console.log('remv98'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 488750);

setTimeout(function() { console.log('load99');nodes.sort(compare); /* ag ak as */ var  ag = {id: 'ag', name:'aquilar'},ak = nodes[0] ,as = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: ak },{source: ag , target: as },{source: ak , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '30. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreißigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.818181818181818182%' ;
}, 490000);

setTimeout(function() { console.log('remv99'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 493750);

setTimeout(function() { console.log('load100');nodes.sort(compare); /* ab ag ak */ var  ab = {id: 'ab', name:'ponce'},ag = nodes[0] ,ak = nodes[1]  ; nodes.push( ab ); links.push( {source: ag , target: ak },{source: ab , target: ag },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '31. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einunddreißigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.644628099173553719%' ;
}, 495000);

setTimeout(function() { console.log('remv100'); var rm = [ 'ag','ak','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 498750);

setTimeout(function() { console.log('load101');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'valeria'},ac = {id: 'ac', name:'valerio'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.471074380165289256%' ;
}, 500000);

setTimeout(function() { console.log('remv101'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 503750);

setTimeout(function() { console.log('load102');nodes.sort(compare); /* aa ac at */ var  aa = nodes[0] ,ac = nodes[1] ,at = {id: 'at', name:'alonso'} ; nodes.push( at ); links.push( {source: ac , target: at },{source: aa , target: at },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.297520661157024793%' ;
}, 505000);

setTimeout(function() { console.log('remv102'); var rm = [ 'at','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 508750);

setTimeout(function() { console.log('load103');nodes.sort(compare); /* ak aq */ var  ak = {id: 'ak', name:'felix'},aq = {id: 'aq', name:'isabella'} ; nodes.push( ak,aq ); links.push( {source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.123966942148760331%' ;
}, 510000);

setTimeout(function() { console.log('remv103'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 513750);

setTimeout(function() { console.log('load104');nodes.sort(compare); /* ak */ var  ak = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.950413223140495868%' ;
}, 515000);

setTimeout(function() { console.log('remv104'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 518750);

setTimeout(function() { console.log('load105');nodes.sort(compare); /* af ak as */ var  af = {id: 'af', name:'erster'},ak = nodes[0] ,as = {id: 'as', name:'lucilla'} ; nodes.push( af,as ); links.push( {source: ak , target: as },{source: af , target: as },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.776859504132231405%' ;
}, 520000);

setTimeout(function() { console.log('remv105'); var rm = [ 'ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 523750);

setTimeout(function() { console.log('load106');nodes.sort(compare); /* as */ var  as = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.603305785123966942%' ;
}, 525000);

setTimeout(function() { console.log('remv106'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 528750);

setTimeout(function() { console.log('load107');nodes.sort(compare); /* aa ac as */ var  aa = {id: 'aa', name:'valeria'},ac = {id: 'ac', name:'valerio'},as = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: ac , target: as },{source: aa , target: ac },{source: aa , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.429752066115702479%' ;
}, 530000);

setTimeout(function() { console.log('remv107'); var rm = [ 'aa','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 533750);

setTimeout(function() { console.log('load108');nodes.sort(compare); /* ac af au */ var  ac = nodes[0] ,af = {id: 'af', name:'erster'},au = {id: 'au', name:'der_alte_diener'} ; nodes.push( af,au ); links.push( {source: ac , target: au },{source: ac , target: af },{source: af , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.256198347107438017%' ;
}, 535000);

setTimeout(function() { console.log('remv108'); var rm = [ 'au','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 538750);

setTimeout(function() { console.log('load109');nodes.sort(compare); /* aa ac as */ var  aa = {id: 'aa', name:'valeria'},ac = nodes[0] ,as = {id: 'as', name:'lucilla'} ; nodes.push( aa,as ); links.push( {source: ac , target: as },{source: aa , target: as },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.082644628099173554%' ;
}, 540000);

setTimeout(function() { console.log('remv109'); var rm = [ 'as','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 543750);

setTimeout(function() { console.log('load110');nodes.sort(compare); /* at av */ var  at = {id: 'at', name:'alonso'},av = {id: 'av', name:'pfeifer'} ; nodes.push( at,av ); links.push( {source: at , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.909090909090909091%' ;
}, 545000);

setTimeout(function() { console.log('remv110'); var rm = [ 'av','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 548750);

setTimeout(function() { console.log('load111');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'ponce'},ag = {id: 'ag', name:'aquilar'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.735537190082644628%' ;
}, 550000);

setTimeout(function() { console.log('remv111'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 553750);

setTimeout(function() { console.log('load112');nodes.sort(compare); /* aa ab ac af ag as */ var  aa = {id: 'aa', name:'valeria'},ab = nodes[0] ,ac = {id: 'ac', name:'valerio'},af = {id: 'af', name:'erster'},ag = nodes[1] ,as = {id: 'as', name:'lucilla'} ; nodes.push( aa,ac,af,as ); links.push( {source: ac , target: as },{source: ac , target: ag },{source: ac , target: af },{source: ag , target: as },{source: ab , target: ac },{source: ab , target: as },{source: ab , target: ag },{source: ab , target: af },{source: aa , target: ac },{source: aa , target: as },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: af },{source: af , target: as },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.561983471074380165%' ;
}, 555000);

setTimeout(function() { console.log('remv112'); var rm = [ 'as','ag','ab','aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 558750);

setTimeout(function() { console.log('load113');nodes.sort(compare); /* ac at av aw */ var  ac = nodes[0] ,at = {id: 'at', name:'alonso'},av = {id: 'av', name:'pfeifer'},aw = {id: 'aw', name:'geiger'} ; nodes.push( at,av,aw ); links.push( {source: at , target: av },{source: at , target: aw },{source: ac , target: at },{source: ac , target: av },{source: ac , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.388429752066115702%' ;
}, 560000);

setTimeout(function() { console.log('remv113'); var rm = [ 'at','ac','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 563750);

setTimeout(function() { console.log('load114');nodes.sort(compare); /* aa ab as */ var  aa = {id: 'aa', name:'valeria'},ab = {id: 'ab', name:'ponce'},as = {id: 'as', name:'lucilla'} ; nodes.push( aa,ab,as ); links.push( {source: ab , target: as },{source: aa , target: ab },{source: aa , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.21487603305785124%' ;
}, 565000);

setTimeout(function() { console.log('remv114'); var rm = [ 'as','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 568750);

setTimeout(function() { console.log('load115');nodes.sort(compare); /* ab ac af av aw */ var  ab = nodes[0] ,ac = {id: 'ac', name:'valerio'},af = {id: 'af', name:'erster'},av = {id: 'av', name:'pfeifer'},aw = {id: 'aw', name:'geiger'} ; nodes.push( ac,af,av,aw ); links.push( {source: ac , target: aw },{source: ac , target: av },{source: ac , target: af },{source: av , target: aw },{source: af , target: aw },{source: af , target: av },{source: ab , target: ac },{source: ab , target: aw },{source: ab , target: av },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.041322314049586777%' ;
}, 570000);

setTimeout(function() { console.log('remv115'); var rm = [ 'aw','av','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 573750);

setTimeout(function() { console.log('load116');nodes.sort(compare); /* ab ac ae ax */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'porporino'},ax = {id: 'ax', name:'ritter'} ; nodes.push( ae,ax ); links.push( {source: ab , target: ax },{source: ab , target: ac },{source: ab , target: ae },{source: ac , target: ax },{source: ac , target: ae },{source: ae , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.867768595041322314%' ;
}, 575000);

setTimeout(function() { console.log('remv116'); var rm = [ 'ax','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 578750);

setTimeout(function() { console.log('load117');nodes.sort(compare); /* ab ae aq */ var  ab = nodes[0] ,ae = nodes[1] ,aq = {id: 'aq', name:'isabella'} ; nodes.push( aq ); links.push( {source: ab , target: aq },{source: ab , target: ae },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.694214876033057851%' ;
}, 580000);

setTimeout(function() { console.log('remv117'); var rm = [ 'aq','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 583750);

setTimeout(function() { console.log('load118');nodes.sort(compare); /* ab ac ay az */ var  ab = nodes[0] ,ac = {id: 'ac', name:'valerio'},ay = {id: 'ay', name:'zigeunerin'},az = {id: 'az', name:'viele'} ; nodes.push( ac,ay,az ); links.push( {source: ac , target: ay },{source: ac , target: az },{source: ab , target: ac },{source: ab , target: ay },{source: ab , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.520661157024793388%' ;
}, 585000);

setTimeout(function() { console.log('remv118'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 588750);

setTimeout(function() { console.log('load119');nodes.sort(compare); /* ab ac ae ag am aq ay */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'porporino'},ag = {id: 'ag', name:'aquilar'},am = {id: 'am', name:'juanna'},aq = {id: 'aq', name:'isabella'},ay = nodes[2]  ; nodes.push( ae,ag,am,aq ); links.push( {source: ag , target: am },{source: ag , target: aq },{source: ag , target: ay },{source: ab , target: ag },{source: ab , target: am },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: aq },{source: ab , target: ay },{source: am , target: aq },{source: am , target: ay },{source: ac , target: ag },{source: ac , target: am },{source: ac , target: ae },{source: ac , target: aq },{source: ac , target: ay },{source: ae , target: ag },{source: ae , target: am },{source: ae , target: aq },{source: ae , target: ay },{source: aq , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.347107438016528926%' ;
}, 590000);

setTimeout(function() { console.log('remv119'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 593750);

setTimeout(function() { console.log('load120');nodes.sort(compare); /* aa ab ac ad ae ag ak am aq as ay */ var  aa = {id: 'aa', name:'valeria'},ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'sarmiento'},ae = nodes[2] ,ag = nodes[3] ,ak = {id: 'ak', name:'felix'},am = nodes[4] ,aq = nodes[5] ,as = {id: 'as', name:'lucilla'},ay = nodes[6]  ; nodes.push( aa,ad,ak,as ); links.push( {source: ak , target: aq },{source: ak , target: as },{source: ak , target: am },{source: ak , target: ay },{source: aq , target: as },{source: aq , target: ay },{source: ae , target: ak },{source: ae , target: aq },{source: ae , target: as },{source: ae , target: am },{source: ae , target: ag },{source: ae , target: ay },{source: ab , target: ak },{source: ab , target: aq },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: as },{source: ab , target: ad },{source: ab , target: am },{source: ab , target: ag },{source: ab , target: ay },{source: aa , target: ak },{source: aa , target: aq },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: as },{source: aa , target: ad },{source: aa , target: am },{source: aa , target: ag },{source: aa , target: ay },{source: ac , target: ak },{source: ac , target: aq },{source: ac , target: ae },{source: ac , target: as },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: ag },{source: ac , target: ay },{source: as , target: ay },{source: ad , target: ak },{source: ad , target: aq },{source: ad , target: ae },{source: ad , target: as },{source: ad , target: am },{source: ad , target: ag },{source: ad , target: ay },{source: am , target: aq },{source: am , target: as },{source: am , target: ay },{source: ag , target: ak },{source: ag , target: aq },{source: ag , target: as },{source: ag , target: am },{source: ag , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '99.173553719008264463%' ;
}, 595000);

setTimeout(function() { console.log('remv120'); var rm = [ 'ak','aq','ae','ab','ac','as','ad','am','ag','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 598750);

setTimeout(function() { console.log('load121');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zugabe'; var scene = document.getElementById('scene');scene.innerHTML = 'Zugabe';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 600000);
