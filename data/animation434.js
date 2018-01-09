setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'friedrich'},ab = {id: 'ab', name:'ludwig'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.052631578947368421%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'jakob'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.105263157894736842%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.157894736842105263%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'leopold'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.210526315789473684%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.263157894736842105%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ac ae */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'greif'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.315789473684210526%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ac af ag */ var  ab = nodes[0] ,ac = nodes[1] ,af = {id: 'af', name:'baronesse'},ag = {id: 'ag', name:'stock'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.368421052631578947%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab af ag ah an ao */ var  ab = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'baptist'},an = {id: 'an', name:'alle_bediente'},ao = {id: 'ao', name:'bedienter'} ; nodes.push( ah,an,ao ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ah },{source: af , target: ag },{source: af , target: an },{source: af , target: ao },{source: af , target: ah },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ah },{source: an , target: ao },{source: ah , target: an },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.421052631578947368%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','ag','an','ao','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'greif'},af = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.473684210526315789%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ac ae af ag ai */ var  aa = {id: 'aa', name:'friedrich'},ac = {id: 'ac', name:'jakob'},ae = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'stock'},ai = {id: 'ai', name:'wiener'} ; nodes.push( aa,ac,ag,ai ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ai },{source: af , target: ai },{source: af , target: ag },{source: af , target: ai },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ai },{source: ag , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.526315789473684211%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aa','ai','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.578947368421052632%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ae af */ var  ab = {id: 'ab', name:'ludwig'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.631578947368421053%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac ai */ var  ac = {id: 'ac', name:'jakob'},ai = {id: 'ai', name:'wiener'} ; nodes.push( ac,ai ); links.push( {source: ac , target: ai },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.684210526315789474%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'ludwig'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.736842105263157895%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* af aj */ var  af = {id: 'af', name:'baronesse'},aj = {id: 'aj', name:'figaro'} ; nodes.push( af,aj ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.789473684210526316%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* af ai aj */ var  af = nodes[0] ,ai = {id: 'ai', name:'wiener'},aj = nodes[1]  ; nodes.push( ai ); links.push( {source: ai , target: aj },{source: af , target: ai },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.842105263157894737%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa af aj ak */ var  aa = {id: 'aa', name:'friedrich'},af = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'hyazinthe'} ; nodes.push( aa,ak ); links.push( {source: aa , target: af },{source: aa , target: aj },{source: aa , target: ak },{source: af , target: aj },{source: af , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.894736842105263158%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac af ak */ var  ac = {id: 'ac', name:'jakob'},af = nodes[0] ,ak = nodes[1]  ; nodes.push( ac ); links.push( {source: af , target: ak },{source: ac , target: ak },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.947368421052631579%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'figaro'},ak = nodes[0]  ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ae aj ak */ var  ae = {id: 'ae', name:'greif'},aj = nodes[0] ,ak = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ak },{source: ae , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.052631578947368421%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aj ak */ var  aj = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.105263157894736842%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ah aj ak */ var  ah = {id: 'ah', name:'baptist'},aj = nodes[0] ,ak = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: ak },{source: ah , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.157894736842105263%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aj ak al */ var  aj = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'christoph'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.210526315789473684%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ab ac ae ah ak al */ var  aa = {id: 'aa', name:'friedrich'},ab = {id: 'ab', name:'ludwig'},ac = {id: 'ac', name:'jakob'},ae = {id: 'ae', name:'greif'},ah = {id: 'ah', name:'baptist'},ak = nodes[0] ,al = nodes[1]  ; nodes.push( aa,ab,ac,ae,ah ); links.push( {source: ak , target: al },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ah },{source: ah , target: ak },{source: ah , target: al },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: al },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: al },{source: ac , target: ah },{source: ab , target: ak },{source: ab , target: ae },{source: ab , target: al },{source: ab , target: ah },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.263157894736842105%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae','aa','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah ak al am */ var  ah = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = {id: 'am', name:'bardenrode'} ; nodes.push( am ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.315789473684210526%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ak','al','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac ae am */ var  ac = {id: 'ac', name:'jakob'},ae = {id: 'ae', name:'greif'},am = nodes[0]  ; nodes.push( ac,ae ); links.push( {source: ae , target: am },{source: ac , target: am },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.368421052631578947%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ae ak am */ var  ae = nodes[0] ,ak = {id: 'ak', name:'hyazinthe'},am = nodes[1]  ; nodes.push( ak ); links.push( {source: ak , target: am },{source: ae , target: ak },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.421052631578947368%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* af am */ var  af = {id: 'af', name:'baronesse'},am = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.473684210526315789%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ad am */ var  ad = {id: 'ad', name:'leopold'},am = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.526315789473684211%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ad aj am */ var  ad = nodes[0] ,aj = {id: 'aj', name:'figaro'},am = nodes[1]  ; nodes.push( aj ); links.push( {source: aj , target: am },{source: ad , target: aj },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.578947368421052632%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aj am */ var  aj = nodes[0] ,am = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.631578947368421053%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* af aj */ var  af = {id: 'af', name:'baronesse'},aj = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.684210526315789474%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac ae af aj */ var  ac = {id: 'ac', name:'jakob'},ae = {id: 'ae', name:'greif'},af = nodes[0] ,aj = nodes[1]  ; nodes.push( ac,ae ); links.push( {source: af , target: aj },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: aj },{source: ae , target: af },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.736842105263157895%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'af','ac','ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'hyazinthe'},al = {id: 'al', name:'christoph'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.789473684210526316%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'figaro'},ak = nodes[0]  ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.842105263157894737%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ae aj ak */ var  ae = {id: 'ae', name:'greif'},aj = nodes[0] ,ak = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ak },{source: ae , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.894736842105263158%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ae ai aj ak */ var  ae = nodes[0] ,ai = {id: 'ai', name:'wiener'},aj = nodes[1] ,ak = nodes[2]  ; nodes.push( ai ); links.push( {source: ae , target: ak },{source: ae , target: aj },{source: ae , target: ai },{source: aj , target: ak },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.947368421052631579%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ak','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ae ai */ var  ae = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ai },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ad ae af ai */ var  ad = {id: 'ad', name:'leopold'},ae = nodes[0] ,af = {id: 'af', name:'baronesse'},ai = nodes[1]  ; nodes.push( ad,af ); links.push( {source: af , target: ai },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.052631578947368421%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.105263157894736842%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ad af al */ var  ad = nodes[0] ,af = nodes[1] ,al = {id: 'al', name:'christoph'} ; nodes.push( al ); links.push( {source: af , target: al },{source: ad , target: al },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.157894736842105263%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ad al */ var  ad = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.210526315789473684%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ad aj ak */ var  ad = nodes[0] ,aj = {id: 'aj', name:'figaro'},ak = {id: 'ak', name:'hyazinthe'} ; nodes.push( aj,ak ); links.push( {source: ad , target: ak },{source: ad , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.263157894736842105%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ad af ak */ var  ad = nodes[0] ,af = {id: 'af', name:'baronesse'},ak = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ak },{source: ad , target: af },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.315789473684210526%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* af al */ var  af = nodes[0] ,al = {id: 'al', name:'christoph'} ; nodes.push( al ); links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.368421052631578947%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* af ah ak al */ var  af = nodes[0] ,ah = {id: 'ah', name:'baptist'},ak = {id: 'ak', name:'hyazinthe'},al = nodes[1]  ; nodes.push( ah,ak ); links.push( {source: ah , target: ak },{source: ah , target: al },{source: ak , target: al },{source: af , target: ah },{source: af , target: ak },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.421052631578947368%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* af ag ah an ao */ var  af = nodes[0] ,ag = {id: 'ag', name:'stock'},ah = nodes[1] ,an = {id: 'an', name:'alle_bediente'},ao = {id: 'ao', name:'bedienter'} ; nodes.push( ag,an,ao ); links.push( {source: ag , target: an },{source: ag , target: ao },{source: ag , target: ah },{source: an , target: ao },{source: af , target: ag },{source: af , target: an },{source: af , target: ao },{source: af , target: ah },{source: ah , target: an },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.473684210526315789%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ag','an','ao','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ad af aj ak al */ var  ad = {id: 'ad', name:'leopold'},af = nodes[0] ,aj = {id: 'aj', name:'figaro'},ak = {id: 'ak', name:'hyazinthe'},al = {id: 'al', name:'christoph'} ; nodes.push( ad,aj,ak,al ); links.push( {source: af , target: aj },{source: af , target: al },{source: af , target: ak },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: ak },{source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.526315789473684211%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* af ak al */ var  af = nodes[0] ,ak = nodes[1] ,al = nodes[2]  ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: af , target: al },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.578947368421052632%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'al','ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ad am */ var  ad = {id: 'ad', name:'leopold'},am = {id: 'am', name:'bardenrode'} ; nodes.push( ad,am ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.631578947368421053%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* af aj ak al am an ao */ var  af = {id: 'af', name:'baronesse'},aj = {id: 'aj', name:'figaro'},ak = {id: 'ak', name:'hyazinthe'},al = {id: 'al', name:'christoph'},am = nodes[0] ,an = {id: 'an', name:'alle_bediente'},ao = {id: 'ao', name:'bedienter'} ; nodes.push( af,aj,ak,al,an,ao ); links.push( {source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: al },{source: an , target: ao },{source: am , target: an },{source: am , target: ao },{source: af , target: aj },{source: af , target: an },{source: af , target: ao },{source: af , target: am },{source: af , target: ak },{source: af , target: al },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: al },{source: al , target: an },{source: al , target: ao },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.684210526315789474%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'an','ao','am','af','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'wiener'},aj = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.736842105263157895%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ag ai aj */ var  ag = {id: 'ag', name:'stock'},ai = nodes[0] ,aj = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: aj },{source: ag , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.789473684210526316%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ag','aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'friedrich'},ac = {id: 'ac', name:'jakob'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.842105263157894737%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'ludwig'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.894736842105263158%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ab aj */ var  ab = nodes[0] ,aj = {id: 'aj', name:'figaro'} ; nodes.push( aj ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.947368421052631579%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'wiener'},aj = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ab ai aj */ var  ab = {id: 'ab', name:'ludwig'},ai = nodes[0] ,aj = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ai },{source: ai , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.052631578947368421%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* aj am */ var  aj = nodes[0] ,am = {id: 'am', name:'bardenrode'} ; nodes.push( am ); links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.105263157894736842%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* aj al */ var  aj = nodes[0] ,al = {id: 'al', name:'christoph'} ; nodes.push( al ); links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.157894736842105263%' ;
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ab aj */ var  ab = {id: 'ab', name:'ludwig'},aj = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.210526315789473684%' ;
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* af aj */ var  af = {id: 'af', name:'baronesse'},aj = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.263157894736842105%' ;
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* ae af aj al */ var  ae = {id: 'ae', name:'greif'},af = nodes[0] ,aj = nodes[1] ,al = {id: 'al', name:'christoph'} ; nodes.push( ae,al ); links.push( {source: af , target: al },{source: af , target: aj },{source: ae , target: al },{source: ae , target: af },{source: ae , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.315789473684210526%' ;
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'al','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* af aj */ var  af = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.368421052631578947%' ;
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* ad af aj */ var  ad = {id: 'ad', name:'leopold'},af = nodes[0] ,aj = nodes[1]  ; nodes.push( ad ); links.push( {source: af , target: aj },{source: ad , target: af },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.421052631578947368%' ;
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* ab af ag aj */ var  ab = {id: 'ab', name:'ludwig'},af = nodes[0] ,ag = {id: 'ag', name:'stock'},aj = nodes[1]  ; nodes.push( ab,ag ); links.push( {source: ag , target: aj },{source: af , target: ag },{source: af , target: aj },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.473684210526315789%' ;
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* af ag aj am ao */ var  af = nodes[0] ,ag = nodes[1] ,aj = nodes[2] ,am = {id: 'am', name:'bardenrode'},ao = {id: 'ao', name:'bedienter'} ; nodes.push( am,ao ); links.push( {source: am , target: ao },{source: aj , target: am },{source: aj , target: ao },{source: af , target: am },{source: af , target: aj },{source: af , target: ag },{source: af , target: ao },{source: ag , target: am },{source: ag , target: aj },{source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.526315789473684211%' ;
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'am','ag','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68');nodes.sort(compare); /* af aj */ var  af = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.578947368421052632%' ;
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69');nodes.sort(compare); /* ae aj */ var  ae = {id: 'ae', name:'greif'},aj = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.631578947368421053%' ;
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'wiener'},aj = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.684210526315789474%' ;
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71');nodes.sort(compare); /* ai aj ak ap */ var  ai = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'hyazinthe'},ap = {id: 'ap', name:'der_alte_bauer'} ; nodes.push( ak,ap ); links.push( {source: ak , target: ap },{source: ai , target: ap },{source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ap },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.736842105263157895%' ;
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72');nodes.sort(compare); /* ae ak ap */ var  ae = {id: 'ae', name:'greif'},ak = nodes[0] ,ap = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ak },{source: ae , target: ap },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.789473684210526316%' ;
}, 355000);

setTimeout(function() { console.log('remv72'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 358750);

setTimeout(function() { console.log('load73');nodes.sort(compare); /* ae af ak */ var  ae = nodes[0] ,af = {id: 'af', name:'baronesse'},ak = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ak },{source: ae , target: af },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.842105263157894737%' ;
}, 360000);

setTimeout(function() { console.log('remv73'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 363750);

setTimeout(function() { console.log('load74');nodes.sort(compare); /* ae ak */ var  ae = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.894736842105263158%' ;
}, 365000);

setTimeout(function() { console.log('remv74'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 368750);

setTimeout(function() { console.log('load75');nodes.sort(compare); /* af aj */ var  af = {id: 'af', name:'baronesse'},aj = {id: 'aj', name:'figaro'} ; nodes.push( af,aj ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.947368421052631579%' ;
}, 370000);

setTimeout(function() { console.log('remv75'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 373750);

setTimeout(function() { console.log('load76');nodes.sort(compare); /* aa af */ var  aa = {id: 'aa', name:'friedrich'},af = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 375000);

setTimeout(function() { console.log('remv76'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 378750);

setTimeout(function() { console.log('load77');nodes.sort(compare); /* aa af ak aq */ var  aa = nodes[0] ,af = nodes[1] ,ak = {id: 'ak', name:'hyazinthe'},aq = {id: 'aq', name:'laufer'} ; nodes.push( ak,aq ); links.push( {source: af , target: ak },{source: af , target: aq },{source: ak , target: aq },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.052631578947368421%' ;
}, 380000);

setTimeout(function() { console.log('remv77'); var rm = [ 'aa','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 383750);

setTimeout(function() { console.log('load78');nodes.sort(compare); /* af ak */ var  af = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.105263157894736842%' ;
}, 385000);

setTimeout(function() { console.log('remv78'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 388750);

setTimeout(function() { console.log('load79');nodes.sort(compare); /* af aj */ var  af = nodes[0] ,aj = {id: 'aj', name:'figaro'} ; nodes.push( aj ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.157894736842105263%' ;
}, 390000);

setTimeout(function() { console.log('remv79'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 393750);

setTimeout(function() { console.log('load80');nodes.sort(compare); /* ae aj al */ var  ae = {id: 'ae', name:'greif'},aj = nodes[0] ,al = {id: 'al', name:'christoph'} ; nodes.push( ae,al ); links.push( {source: ae , target: al },{source: ae , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.210526315789473684%' ;
}, 395000);

setTimeout(function() { console.log('remv80'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 398750);

setTimeout(function() { console.log('load81');nodes.sort(compare); /* aj al */ var  aj = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.263157894736842105%' ;
}, 400000);

setTimeout(function() { console.log('remv81'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 403750);

setTimeout(function() { console.log('load82');nodes.sort(compare); /* ah aj */ var  ah = {id: 'ah', name:'baptist'},aj = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.315789473684210526%' ;
}, 405000);

setTimeout(function() { console.log('remv82'); var rm = [ 'ah','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 408750);

setTimeout(function() { console.log('load83');nodes.sort(compare); /* ae ak */ var  ae = {id: 'ae', name:'greif'},ak = {id: 'ak', name:'hyazinthe'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.368421052631578947%' ;
}, 410000);

setTimeout(function() { console.log('remv83'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 413750);

setTimeout(function() { console.log('load84');nodes.sort(compare); /* ah ak al */ var  ah = {id: 'ah', name:'baptist'},ak = nodes[0] ,al = {id: 'al', name:'christoph'} ; nodes.push( ah,al ); links.push( {source: ah , target: ak },{source: ah , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.421052631578947368%' ;
}, 415000);

setTimeout(function() { console.log('remv84'); var rm = [ 'ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 418750);

setTimeout(function() { console.log('load85');nodes.sort(compare); /* ad ae ak am */ var  ad = {id: 'ad', name:'leopold'},ae = {id: 'ae', name:'greif'},ak = nodes[0] ,am = {id: 'am', name:'bardenrode'} ; nodes.push( ad,ae,am ); links.push( {source: ak , target: am },{source: ad , target: am },{source: ad , target: ak },{source: ad , target: ae },{source: ae , target: am },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.473684210526315789%' ;
}, 420000);

setTimeout(function() { console.log('remv85'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 423750);

setTimeout(function() { console.log('load86');nodes.sort(compare); /* ad ae ah aj ak al am */ var  ad = nodes[0] ,ae = nodes[1] ,ah = {id: 'ah', name:'baptist'},aj = {id: 'aj', name:'figaro'},ak = nodes[2] ,al = {id: 'al', name:'christoph'},am = nodes[3]  ; nodes.push( ah,aj,al ); links.push( {source: al , target: am },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: aj },{source: ah , target: ak },{source: ak , target: al },{source: ak , target: am },{source: ad , target: al },{source: ad , target: am },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: ae },{source: ae , target: al },{source: ae , target: am },{source: ae , target: aj },{source: ae , target: ah },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.526315789473684211%' ;
}, 425000);

setTimeout(function() { console.log('remv86'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 428750);

setTimeout(function() { console.log('load87');nodes.sort(compare); /* ad ae af ah aj ak al am */ var  ad = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'baronesse'},ah = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = nodes[5] ,am = nodes[6]  ; nodes.push( af ); links.push( {source: af , target: ak },{source: af , target: aj },{source: af , target: al },{source: af , target: ah },{source: af , target: am },{source: ak , target: al },{source: ak , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: am },{source: al , target: am },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: am },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: al },{source: ad , target: ah },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.578947368421052632%' ;
}, 430000);

setTimeout(function() { console.log('remv87'); var rm = [ 'aj','ae','ad','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 433750);

setTimeout(function() { console.log('load88');nodes.sort(compare); /* af ah ak al */ var  af = nodes[0] ,ah = nodes[1] ,ak = nodes[2] ,al = nodes[3]  ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: af , target: ak },{source: af , target: al },{source: af , target: ah },{source: af , target: ak },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.631578947368421053%' ;
}, 435000);

setTimeout(function() { console.log('remv88'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 438750);

setTimeout(function() { console.log('load89');nodes.sort(compare); /* af ag aj ak al */ var  af = nodes[0] ,ag = {id: 'ag', name:'stock'},aj = {id: 'aj', name:'figaro'},ak = nodes[1] ,al = nodes[2]  ; nodes.push( ag,aj ); links.push( {source: ak , target: al },{source: aj , target: ak },{source: aj , target: al },{source: af , target: ak },{source: af , target: al },{source: af , target: aj },{source: af , target: ag },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.684210526315789474%' ;
}, 440000);

setTimeout(function() { console.log('remv89'); var rm = [ 'aj','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 443750);

setTimeout(function() { console.log('load90');nodes.sort(compare); /* ah ak al */ var  ah = {id: 'ah', name:'baptist'},ak = nodes[0] ,al = nodes[1]  ; nodes.push( ah ); links.push( {source: ak , target: al },{source: ah , target: ak },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.736842105263157895%' ;
}, 445000);

setTimeout(function() { console.log('remv90'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 448750);

setTimeout(function() { console.log('load91');nodes.sort(compare); /* ah ak al am */ var  ah = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = {id: 'am', name:'bardenrode'} ; nodes.push( am ); links.push( {source: ak , target: am },{source: ak , target: al },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.789473684210526316%' ;
}, 450000);

setTimeout(function() { console.log('remv91'); var rm = [ 'ak','ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 453750);

setTimeout(function() { console.log('load92');nodes.sort(compare); /* ad am */ var  ad = {id: 'ad', name:'leopold'},am = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.842105263157894737%' ;
}, 455000);

setTimeout(function() { console.log('remv92'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 458750);

setTimeout(function() { console.log('load93');nodes.sort(compare); /* ad ah aj ak al am */ var  ad = nodes[0] ,ah = {id: 'ah', name:'baptist'},aj = {id: 'aj', name:'figaro'},ak = {id: 'ak', name:'hyazinthe'},al = {id: 'al', name:'christoph'},am = nodes[1]  ; nodes.push( ah,aj,ak,al ); links.push( {source: aj , target: am },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: am },{source: ak , target: al },{source: ad , target: aj },{source: ad , target: am },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ah },{source: al , target: am },{source: ah , target: aj },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.894736842105263158%' ;
}, 460000);

setTimeout(function() { console.log('remv93'); var rm = [ 'aj','ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 463750);

setTimeout(function() { console.log('load94');nodes.sort(compare); /* ad af al am */ var  ad = nodes[0] ,af = {id: 'af', name:'baronesse'},al = nodes[1] ,am = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: al },{source: af , target: am },{source: al , target: am },{source: ad , target: af },{source: ad , target: al },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.947368421052631579%' ;
}, 465000);

setTimeout(function() { console.log('remv94'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 468750);

setTimeout(function() { console.log('load95');nodes.sort(compare); /* ad af ai ak am */ var  ad = nodes[0] ,af = nodes[1] ,ai = {id: 'ai', name:'wiener'},ak = {id: 'ak', name:'hyazinthe'},am = nodes[2]  ; nodes.push( ai,ak ); links.push( {source: af , target: ai },{source: af , target: ak },{source: af , target: ai },{source: af , target: am },{source: ai , target: ak },{source: ai , target: am },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: am },{source: ak , target: am },{source: ai , target: ak },{source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 470000);
