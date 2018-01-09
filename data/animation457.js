setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'bolzau'},ab = {id: 'ab', name:'hertha'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.923076923076923077%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.846153846153846154%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'schuake'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.769230769230769231%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.692307692307692308%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'scheffler'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.615384615384615385%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.538461538461538462%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'schuake'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.461538461538461538%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.384615384615384615%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad ae af */ var  ad = nodes[0] ,ae = {id: 'ae', name:'hartwig'},af = {id: 'af', name:'steinkirch'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.307692307692307692%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'hertha'},ad = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.230769230769230769%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = {id: 'af', name:'steinkirch'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.153846153846153846%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* af ag ah */ var  af = nodes[0] ,ag = {id: 'ag', name:'diener'},ah = {id: 'ah', name:'ludmilla'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.076923076923076923%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af ag ah */ var  af = nodes[0] ,ag = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: ag , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '13. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'hartwig'},af = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '14. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.923076923076923077%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ah */ var  ab = {id: 'ab', name:'hertha'},ah = {id: 'ah', name:'ludmilla'} ; nodes.push( ab,ah ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '15. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.846153846153846154%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = {id: 'ai', name:'brimkorius'} ; nodes.push( ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '16. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.769230769230769231%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'scheffler'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '17. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.692307692307692308%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'steinkirch'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '18. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.615384615384615385%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa aj */ var  aa = {id: 'aa', name:'bolzau'},aj = {id: 'aj', name:'wilhelmine'} ; nodes.push( aa,aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.538461538461538462%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ah aj */ var  aa = nodes[0] ,ah = {id: 'ah', name:'ludmilla'},aj = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: aj },{source: aa , target: ah },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.461538461538461538%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ac ah aj ak */ var  aa = nodes[0] ,ac = {id: 'ac', name:'schuake'},ah = nodes[1] ,aj = nodes[2] ,ak = {id: 'ak', name:'franz'} ; nodes.push( ac,ak ); links.push( {source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ah },{source: aj , target: ak },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ah },{source: ah , target: ak },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.384615384615384615%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ah ai aj */ var  aa = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'brimkorius'},aj = nodes[2]  ; nodes.push( ai ); links.push( {source: ai , target: aj },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ah },{source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.307692307692307692%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ai','aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ab ak */ var  aa = nodes[0] ,ab = {id: 'ab', name:'hertha'},ak = {id: 'ak', name:'franz'} ; nodes.push( ab,ak ); links.push( {source: aa , target: ak },{source: aa , target: ab },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.230769230769230769%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ad ak */ var  ad = {id: 'ad', name:'scheffler'},ak = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.153846153846153846%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ad ak */ var  aa = {id: 'aa', name:'bolzau'},ad = nodes[0] ,ak = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ak },{source: aa , target: ad },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.076923076923076923%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'hartwig'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ad ae ak */ var  ac = {id: 'ac', name:'schuake'},ad = nodes[0] ,ae = nodes[1] ,ak = {id: 'ak', name:'franz'} ; nodes.push( ac,ak ); links.push( {source: ac , target: ak },{source: ac , target: ae },{source: ac , target: ad },{source: ae , target: ak },{source: ad , target: ak },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.923076923076923077%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ab ae ah aj */ var  aa = {id: 'aa', name:'bolzau'},ab = {id: 'ab', name:'hertha'},ae = nodes[0] ,ah = {id: 'ah', name:'ludmilla'},aj = {id: 'aj', name:'wilhelmine'} ; nodes.push( aa,ab,ah,aj ); links.push( {source: aa , target: aj },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ab },{source: ae , target: aj },{source: ae , target: ah },{source: ah , target: aj },{source: ab , target: aj },{source: ab , target: ae },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.846153846153846154%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ae aj */ var  aa = nodes[0] ,ae = nodes[1] ,aj = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: aj },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.769230769230769231%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = {id: 'ad', name:'scheffler'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.692307692307692308%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ad ai */ var  aa = nodes[0] ,ad = nodes[1] ,ai = {id: 'ai', name:'brimkorius'} ; nodes.push( ai ); links.push( {source: ad , target: ai },{source: aa , target: ai },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '13. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.615384615384615385%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'wilhelmine'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '14. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.538461538461538462%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa af ah */ var  aa = nodes[0] ,af = {id: 'af', name:'steinkirch'},ah = {id: 'ah', name:'ludmilla'} ; nodes.push( af,ah ); links.push( {source: aa , target: ah },{source: aa , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '15. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.461538461538461538%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa af ah aj */ var  aa = nodes[0] ,af = nodes[1] ,ah = nodes[2] ,aj = {id: 'aj', name:'wilhelmine'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ah },{source: aa , target: af },{source: ah , target: aj },{source: af , target: aj },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '16. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.384615384615384615%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.307692307692307692%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab ah aj */ var  aa = nodes[0] ,ab = {id: 'ab', name:'hertha'},ah = {id: 'ah', name:'ludmilla'},aj = {id: 'aj', name:'wilhelmine'} ; nodes.push( ab,ah,aj ); links.push( {source: ah , target: aj },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ab },{source: ab , target: ah },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.230769230769230769%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ab ah aj */ var  aa = nodes[0] ,ab = nodes[1] ,ah = nodes[2] ,aj = nodes[3]  ; /* nodes.push(); */ links.push( {source: ah , target: aj },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ab },{source: ab , target: ah },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.153846153846153846%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ah','aj','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'steinkirch'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.076923076923076923%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ae ai */ var  aa = nodes[0] ,ae = {id: 'ae', name:'hartwig'},ai = {id: 'ai', name:'brimkorius'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai },{source: aa , target: ae },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ac ae ai */ var  aa = nodes[0] ,ac = {id: 'ac', name:'schuake'},ae = nodes[1] ,ai = nodes[2]  ; nodes.push( ac ); links.push( {source: ac , target: ai },{source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ac },{source: ae , target: ai },{source: ac , target: ai },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.923076923076923077%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ac','aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'scheffler'},ae = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.846153846153846154%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa ai */ var  aa = {id: 'aa', name:'bolzau'},ai = {id: 'ai', name:'brimkorius'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.769230769230769231%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'steinkirch'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.692307692307692308%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'hertha'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.615384615384615385%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = {id: 'af', name:'steinkirch'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.538461538461538462%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'bolzau'},ad = {id: 'ad', name:'scheffler'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.461538461538461538%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa ab ad af */ var  aa = nodes[0] ,ab = {id: 'ab', name:'hertha'},ad = nodes[1] ,af = {id: 'af', name:'steinkirch'} ; nodes.push( ab,af ); links.push( {source: ab , target: ad },{source: ab , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '13. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.384615384615384615%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ab','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* aa ac ah aj */ var  aa = nodes[0] ,ac = {id: 'ac', name:'schuake'},ah = {id: 'ah', name:'ludmilla'},aj = {id: 'aj', name:'wilhelmine'} ; nodes.push( ac,ah,aj ); links.push( {source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ac },{source: ah , target: aj },{source: ac , target: aj },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '14. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.307692307692307692%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'aa','ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ae aj */ var  ae = {id: 'ae', name:'hartwig'},aj = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '15. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.230769230769230769%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ab ad ae aj */ var  ab = {id: 'ab', name:'hertha'},ad = {id: 'ad', name:'scheffler'},ae = nodes[0] ,aj = nodes[1]  ; nodes.push( ab,ad ); links.push( {source: ae , target: aj },{source: ad , target: ae },{source: ad , target: aj },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '16. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.153846153846153846%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* aa ab ac ad ae af ah aj */ var  aa = {id: 'aa', name:'bolzau'},ab = nodes[0] ,ac = {id: 'ac', name:'schuake'},ad = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'steinkirch'},ah = {id: 'ah', name:'ludmilla'},aj = nodes[3]  ; nodes.push( aa,ac,af,ah ); links.push( {source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ah , target: aj },{source: af , target: aj },{source: af , target: ah },{source: ae , target: aj },{source: ae , target: ah },{source: ae , target: af },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '17. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.076923076923076923%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* aa ab ac ad ae af ah ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = nodes[5] ,ah = nodes[6] ,ai = {id: 'ai', name:'brimkorius'},aj = nodes[7]  ; nodes.push( ai ); links.push( {source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: af },{source: ai , target: aj },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: af },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: af },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ah },{source: ae , target: af },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: af },{source: ah , target: ai },{source: ah , target: aj },{source: af , target: ai },{source: af , target: aj },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '18. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 255000);
