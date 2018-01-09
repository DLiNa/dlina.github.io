setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'philemon'},ab = {id: 'ab', name:'phillis'},ac = {id: 'ac', name:'sylvia'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Eintritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.754385964912280702%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.508771929824561404%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'mirtillo'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.263157894736842105%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ae af ag */ var  aa = nodes[0] ,ae = {id: 'ae', name:'sylvan'},af = {id: 'af', name:'seladon'},ag = {id: 'ag', name:'mirta'} ; nodes.push( ae,af,ag ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.017543859649122807%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.771929824561403509%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ah ai */ var  ae = {id: 'ae', name:'sylvan'},ah = {id: 'ah', name:'mops'},ai = {id: 'ai', name:'silen'} ; nodes.push( ae,ah,ai ); links.push( {source: ae , target: ah },{source: ae , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.526315789473684211%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ae ai */ var  ae = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.280701754385964912%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad ah */ var  ad = {id: 'ad', name:'mirtillo'},ah = {id: 'ah', name:'mops'} ; nodes.push( ad,ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.035087719298245614%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad ag ah */ var  ad = nodes[0] ,ag = {id: 'ag', name:'mirta'},ah = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: ah },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.789473684210526316%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.543859649122807018%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'sylvan'},ag = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.298245614035087719%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.052631578947368421%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = {id: 'af', name:'seladon'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.807017543859649123%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ad ae */ var  ab = {id: 'ab', name:'phillis'},ad = {id: 'ad', name:'mirtillo'},ae = nodes[0]  ; nodes.push( ab,ad ); links.push( {source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.561403508771929825%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ac ad ae */ var  ab = nodes[0] ,ac = {id: 'ac', name:'sylvia'},ad = nodes[1] ,ae = nodes[2]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.315789473684210526%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ad aj ak */ var  ad = nodes[0] ,aj = {id: 'aj', name:'damon'},ak = {id: 'ak', name:'galathe'} ; nodes.push( aj,ak ); links.push( {source: ad , target: aj },{source: ad , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.070175438596491228%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ad ak */ var  ad = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.82456140350877193%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad ah ak */ var  ad = nodes[0] ,ah = {id: 'ah', name:'mops'},ak = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: ak },{source: ad , target: ah },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.578947368421052632%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','ad','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa aj */ var  aa = {id: 'aa', name:'philemon'},aj = {id: 'aj', name:'damon'} ; nodes.push( aa,aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad al */ var  ad = {id: 'ad', name:'mirtillo'},al = {id: 'al', name:'doris'} ; nodes.push( ad,al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.087719298245614035%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ak al */ var  ad = nodes[0] ,ak = {id: 'ak', name:'galathe'},al = nodes[1]  ; nodes.push( ak ); links.push( {source: ak , target: al },{source: ad , target: ak },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.842105263157894737%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ad ak */ var  ad = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.596491228070175439%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ad ak al */ var  ad = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'doris'} ; nodes.push( al ); links.push( {source: ak , target: al },{source: ad , target: al },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.35087719298245614%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ad al */ var  ad = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.105263157894736842%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ad ai */ var  ad = nodes[0] ,ai = {id: 'ai', name:'silen'} ; nodes.push( ai ); links.push( {source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.859649122807017544%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa al */ var  aa = {id: 'aa', name:'philemon'},al = {id: 'al', name:'doris'} ; nodes.push( aa,al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.614035087719298246%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa al */ var  aa = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.368421052631578947%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* af al */ var  af = {id: 'af', name:'seladon'},al = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.122807017543859649%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'damon'},ak = {id: 'ak', name:'galathe'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.877192982456140351%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aj ak al */ var  aj = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'doris'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.631578947368421053%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aj al */ var  aj = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.385964912280701754%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ai aj al */ var  ai = {id: 'ai', name:'silen'},aj = nodes[0] ,al = nodes[1]  ; nodes.push( ai ); links.push( {source: aj , target: al },{source: ai , target: aj },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.140350877192982456%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ai','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ag aj */ var  ag = {id: 'ag', name:'mirta'},aj = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.894736842105263158%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ad al */ var  ad = {id: 'ad', name:'mirtillo'},al = {id: 'al', name:'doris'} ; nodes.push( ad,al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.64912280701754386%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ad ae al */ var  ad = nodes[0] ,ae = {id: 'ae', name:'sylvan'},al = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: al },{source: ad , target: ae },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.403508771929824561%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ae al */ var  ae = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.157894736842105263%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ae af al */ var  ae = nodes[0] ,af = {id: 'af', name:'seladon'},al = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: al },{source: ae , target: al },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.912280701754385965%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ae af */ var  aa = {id: 'aa', name:'philemon'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( aa ); links.push( {source: ae , target: af },{source: aa , target: af },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.421052631578947368%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'damon'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.17543859649122807%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ae al */ var  aa = nodes[0] ,ae = {id: 'ae', name:'sylvan'},al = {id: 'al', name:'doris'} ; nodes.push( ae,al ); links.push( {source: aa , target: al },{source: aa , target: ae },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.929824561403508772%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aa','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.684210526315789474%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ad ae ak */ var  ad = {id: 'ad', name:'mirtillo'},ae = nodes[0] ,ak = {id: 'ak', name:'galathe'} ; nodes.push( ad,ak ); links.push( {source: ad , target: ak },{source: ad , target: ae },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.438596491228070175%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'seladon'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.192982456140350877%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ae ag ak */ var  ae = {id: 'ae', name:'sylvan'},ag = {id: 'ag', name:'mirta'},ak = {id: 'ak', name:'galathe'} ; nodes.push( ae,ag,ak ); links.push( {source: ae , target: ag },{source: ae , target: ak },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.947368421052631579%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ae','ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aa ad af al */ var  aa = {id: 'aa', name:'philemon'},ad = {id: 'ad', name:'mirtillo'},af = {id: 'af', name:'seladon'},al = {id: 'al', name:'doris'} ; nodes.push( aa,ad,af,al ); links.push( {source: aa , target: al },{source: aa , target: af },{source: aa , target: ad },{source: af , target: al },{source: ad , target: al },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.701754385964912281%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.456140350877192982%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = {id: 'ae', name:'sylvan'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.210526315789473684%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = {id: 'ab', name:'phillis'},ac = {id: 'ac', name:'sylvia'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.964912280701754386%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.719298245614035088%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ab ac ae ag */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'sylvan'},ag = {id: 'ag', name:'mirta'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ac },{source: ac , target: ae },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.473684210526315789%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ae ag ah ai */ var  ae = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'mops'},ai = {id: 'ai', name:'silen'} ; nodes.push( ah,ai ); links.push( {source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.228070175438596491%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.982456140350877193%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* aa ac ae ai aj */ var  aa = {id: 'aa', name:'philemon'},ac = {id: 'ac', name:'sylvia'},ae = nodes[0] ,ai = {id: 'ai', name:'silen'},aj = {id: 'aj', name:'damon'} ; nodes.push( aa,ac,ai,aj ); links.push( {source: aa , target: aj },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: ae , target: aj },{source: ae , target: ai },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.736842105263157895%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'aj','ae','ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.491228070175438596%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj ak al */ var  aa = nodes[0] ,ab = {id: 'ab', name:'phillis'},ac = {id: 'ac', name:'sylvia'},ad = {id: 'ad', name:'mirtillo'},ae = {id: 'ae', name:'sylvan'},af = {id: 'af', name:'seladon'},ag = {id: 'ag', name:'mirta'},ah = {id: 'ah', name:'mops'},ai = {id: 'ai', name:'silen'},aj = {id: 'aj', name:'damon'},ak = {id: 'ak', name:'galathe'},al = {id: 'al', name:'doris'} ; nodes.push( ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al ); links.push( {source: ac , target: al },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ai },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ai },{source: af , target: al },{source: af , target: ag },{source: af , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: ai },{source: ad , target: al },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ai },{source: ae , target: al },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ai },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ai },{source: ah , target: al },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: aj , target: al },{source: aj , target: ak },{source: ak , target: al },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.245614035087719298%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ac','aa','ab','al','af','ad','ae','ag','ah','aj','ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* am an ao ap aq */ var  am = {id: 'am', name:'oktober'},an = {id: 'an', name:'verehrung'},ao = {id: 'ao', name:'treue'},ap = {id: 'ap', name:'liebe'},aq = {id: 'aq', name:'freude'} ; nodes.push( am,an,ao,ap,aq ); links.push( {source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Nachspiel]'; var scene = document.getElementById('scene');scene.innerHTML = '[Nachspiel]';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 280000);
