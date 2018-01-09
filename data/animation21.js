setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'hochheim'},ab = {id: 'ab', name:'faustin'},ac = {id: 'ac', name:'eulalia'},ad = {id: 'ad', name:'regine'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.631578947368421053%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad ae */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'haller'} ; nodes.push( ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.263157894736842105%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj */ var  aa = nodes[0] ,ab = {id: 'ab', name:'faustin'},ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'hupfer'},ag = {id: 'ag', name:'jakobs_stimme'},ah = {id: 'ah', name:'glatt'},ai = {id: 'ai', name:'robert'},aj = {id: 'aj', name:'sebastian'} ; nodes.push( ab,af,ag,ah,ai,aj ); links.push( {source: ae , target: af },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: aj },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: aj },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: aj },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: aj },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.894736842105263158%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad af ah ai aj ak al */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,af = nodes[4] ,ah = nodes[5] ,ai = nodes[6] ,aj = nodes[7] ,ak = {id: 'ak', name:'klotilde'},al = {id: 'al', name:'apollonia'} ; nodes.push( ak,al ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ai },{source: ad , target: ah },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: ah },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ai },{source: ac , target: ah },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ai },{source: ab , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: ai },{source: af , target: ah },{source: ak , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.526315789473684211%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','ad','ac','af','ak','al','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.157894736842105263%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ak */ var  ac = {id: 'ac', name:'eulalia'},ak = {id: 'ak', name:'klotilde'} ; nodes.push( ac,ak ); links.push( {source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.789473684210526316%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ai ak */ var  ad = {id: 'ad', name:'regine'},ai = {id: 'ai', name:'robert'},ak = nodes[0]  ; nodes.push( ad,ai ); links.push( {source: ai , target: ak },{source: ad , target: ak },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.421052631578947368%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad ai ak */ var  ad = nodes[0] ,ai = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: ad , target: ak },{source: ad , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.052631578947368421%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ad ai aj am */ var  ab = {id: 'ab', name:'faustin'},ad = nodes[0] ,ai = nodes[1] ,aj = {id: 'aj', name:'sebastian'},am = {id: 'am', name:'der_kapellmeister'} ; nodes.push( ab,aj,am ); links.push( {source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: am },{source: aj , target: am },{source: ai , target: aj },{source: ai , target: am },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.684210526315789474%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ai aj am an */ var  ai = nodes[0] ,aj = nodes[1] ,am = nodes[2] ,an = {id: 'an', name:'eine_menge_gäste'} ; nodes.push( an ); links.push( {source: aj , target: am },{source: aj , target: am },{source: aj , target: an },{source: am , target: an },{source: ai , target: aj },{source: ai , target: am },{source: ai , target: am },{source: ai , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.315789473684210526%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am','ai','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ac aj ao */ var  aa = {id: 'aa', name:'hochheim'},ac = {id: 'ac', name:'eulalia'},aj = nodes[0] ,ao = {id: 'ao', name:'graf_von_flambourg'} ; nodes.push( aa,ac,ao ); links.push( {source: aj , target: ao },{source: aa , target: aj },{source: aa , target: ao },{source: aa , target: ac },{source: ac , target: aj },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.947368421052631579%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aj','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab ac ai ak */ var  aa = nodes[0] ,ab = {id: 'ab', name:'faustin'},ac = nodes[1] ,ai = {id: 'ai', name:'robert'},ak = {id: 'ak', name:'klotilde'} ; nodes.push( ab,ai,ak ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: ai },{source: ac , target: ak },{source: ac , target: ai },{source: ab , target: ac },{source: ab , target: ak },{source: ab , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.578947368421052632%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ac ai ak */ var  aa = nodes[0] ,ac = nodes[1] ,ai = nodes[2] ,ak = nodes[3]  ; /* nodes.push(); */ links.push( {source: ai , target: ak },{source: ac , target: ai },{source: ac , target: ak },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.210526315789473684%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'sebastian'},ak = nodes[0]  ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.842105263157894737%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aj ak */ var  aj = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.473684210526315789%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ad aj */ var  ad = {id: 'ad', name:'regine'},aj = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.105263157894736842%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ad af aj */ var  ad = nodes[0] ,af = {id: 'af', name:'hupfer'},aj = nodes[1]  ; nodes.push( af ); links.push( {source: ad , target: aj },{source: ad , target: af },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.736842105263157895%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad af aj al */ var  ad = nodes[0] ,af = nodes[1] ,aj = nodes[2] ,al = {id: 'al', name:'apollonia'} ; nodes.push( al ); links.push( {source: af , target: al },{source: af , target: aj },{source: ad , target: af },{source: ad , target: al },{source: ad , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.368421052631578947%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af al */ var  af = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.631578947368421053%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab ae ai */ var  aa = {id: 'aa', name:'hochheim'},ab = {id: 'ab', name:'faustin'},ae = {id: 'ae', name:'haller'},ai = {id: 'ai', name:'robert'} ; nodes.push( aa,ab,ae,ai ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ae },{source: ab , target: ai },{source: ab , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.263157894736842105%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ae ag ah ai */ var  aa = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'jakobs_stimme'},ah = {id: 'ah', name:'glatt'},ai = nodes[2]  ; nodes.push( ag,ah ); links.push( {source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.894736842105263158%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ah ai */ var  aa = nodes[0] ,ah = nodes[1] ,ai = nodes[2]  ; /* nodes.push(); */ links.push( {source: ah , target: ai },{source: aa , target: ah },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.526315789473684211%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'sebastian'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.157894736842105263%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa aj al */ var  aa = nodes[0] ,aj = nodes[1] ,al = {id: 'al', name:'apollonia'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: aa , target: aj },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.789473684210526316%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab aj al */ var  ab = {id: 'ab', name:'faustin'},aj = nodes[0] ,al = nodes[1]  ; nodes.push( ab ); links.push( {source: aj , target: al },{source: ab , target: al },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.421052631578947368%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab aj al */ var  ab = nodes[0] ,aj = nodes[1] ,al = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: aj },{source: ab , target: al },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.052631578947368421%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.684210526315789474%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ac ah ai ap */ var  ac = {id: 'ac', name:'eulalia'},ah = {id: 'ah', name:'glatt'},ai = {id: 'ai', name:'robert'},ap = {id: 'ap', name:'wellenschlag'} ; nodes.push( ac,ah,ai,ap ); links.push( {source: ac , target: ap },{source: ac , target: ai },{source: ac , target: ah },{source: ai , target: ap },{source: ah , target: ap },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.315789473684210526%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ae ah ai ap */ var  aa = {id: 'aa', name:'hochheim'},ae = {id: 'ae', name:'haller'},ah = nodes[0] ,ai = nodes[1] ,ap = nodes[2]  ; nodes.push( aa,ae ); links.push( {source: ai , target: ap },{source: ah , target: ai },{source: ah , target: ap },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ap },{source: aa , target: ae },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.947368421052631579%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ai','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ae ag ah aj */ var  aa = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'jakobs_stimme'},ah = nodes[2] ,aj = {id: 'aj', name:'sebastian'} ; nodes.push( ag,aj ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ae , target: aj },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: aj },{source: ah , target: aj },{source: ag , target: ah },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.578947368421052632%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ac ah ai aj ak ap */ var  aa = nodes[0] ,ac = {id: 'ac', name:'eulalia'},ah = nodes[1] ,ai = {id: 'ai', name:'robert'},aj = nodes[2] ,ak = {id: 'ak', name:'klotilde'},ap = {id: 'ap', name:'wellenschlag'} ; nodes.push( ac,ai,ak,ap ); links.push( {source: ai , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ah , target: ap },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ac , target: ap },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ak },{source: aa , target: ap },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ak },{source: aj , target: ap },{source: aj , target: ak },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.210526315789473684%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ap','ai','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ad ah aj ak al */ var  ad = {id: 'ad', name:'regine'},ah = nodes[0] ,aj = nodes[1] ,ak = nodes[2] ,al = {id: 'al', name:'apollonia'} ; nodes.push( ad,al ); links.push( {source: ak , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: ah },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.842105263157894737%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ak','ad','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ae ah aj */ var  ae = {id: 'ae', name:'haller'},ah = nodes[0] ,aj = nodes[1]  ; nodes.push( ae ); links.push( {source: ah , target: aj },{source: ae , target: ah },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.473684210526315789%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ae ah aj */ var  aa = {id: 'aa', name:'hochheim'},ae = nodes[0] ,ah = nodes[1] ,aj = nodes[2]  ; nodes.push( aa ); links.push( {source: ae , target: aj },{source: ae , target: ah },{source: ah , target: aj },{source: aa , target: ae },{source: aa , target: aj },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.105263157894736842%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ai aj ak ap */ var  aa = nodes[0] ,ai = {id: 'ai', name:'robert'},aj = nodes[1] ,ak = {id: 'ak', name:'klotilde'},ap = {id: 'ap', name:'wellenschlag'} ; nodes.push( ai,ak,ap ); links.push( {source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ap },{source: aa , target: ai },{source: aj , target: ak },{source: aj , target: ap },{source: ak , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.736842105263157895%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ai aj ak ap */ var  aa = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,ak = nodes[3] ,ap = nodes[4]  ; /* nodes.push(); */ links.push( {source: ai , target: ap },{source: ai , target: ak },{source: ai , target: aj },{source: ak , target: ap },{source: aa , target: ai },{source: aa , target: ap },{source: aa , target: ak },{source: aa , target: aj },{source: aj , target: ap },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.368421052631578947%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ac ae ah ai aj ak ap aq ar */ var  aa = nodes[0] ,ac = {id: 'ac', name:'eulalia'},ae = {id: 'ae', name:'haller'},ah = {id: 'ah', name:'glatt'},ai = nodes[1] ,aj = nodes[2] ,ak = nodes[3] ,ap = nodes[4] ,aq = {id: 'aq', name:'sie'},ar = {id: 'ar', name:'er'} ; nodes.push( ac,ae,ah,aq,ar ); links.push( {source: aa , target: ap },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: aq },{source: aa , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: ai , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: aq },{source: ai , target: ar },{source: aj , target: ap },{source: aj , target: ak },{source: aj , target: aq },{source: aj , target: ar },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ae , target: ap },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: aq },{source: ae , target: ar },{source: ah , target: ap },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: aq },{source: ah , target: ar },{source: ac , target: ap },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: aq },{source: ac , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 185000);
