setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'wirt'},ab = {id: 'ab', name:'lehnl'},ac = {id: 'ac', name:'traudl'},ad = {id: 'ad', name:'pauli'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3]  ; /* nodes.push(); */ links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ae = {id: 'ae', name:'resl'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ab },{source: ac , target: ae },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'pauli'},ae = nodes[3] ,af = {id: 'af', name:'baumiller'} ; nodes.push( ad,af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ad af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ag = {id: 'ag', name:'loni'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ad },{source: ad , target: ag },{source: ad , target: af },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = {id: 'ac', name:'traudl'},ad = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ag ah */ var  aa = nodes[0] ,ab = {id: 'ab', name:'lehnl'},ag = {id: 'ag', name:'loni'},ah = {id: 'ah', name:'röthelbachbauer'} ; nodes.push( ab,ag,ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ag },{source: ab , target: ah },{source: ab , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ad ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'pauli'},ag = nodes[2] ,ah = nodes[3] ,ai = {id: 'ai', name:'muckl'} ; nodes.push( ad,ai ); links.push( {source: ah , target: ai },{source: ag , target: ai },{source: ag , target: ah },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ab },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ag },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ab ag ah ai aj ak al */ var  aa = nodes[0] ,ab = nodes[1] ,ag = nodes[2] ,ah = nodes[3] ,ai = nodes[4] ,aj = {id: 'aj', name:'loisl'},ak = {id: 'ak', name:'toni'},al = {id: 'al', name:'modei'} ; nodes.push( aj,ak,al ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ab },{source: aa , target: al },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ak , target: al },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ak },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa','ag','ah','ab','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ai aj ak */ var  ai = nodes[0] ,aj = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ak','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ag am */ var  ab = {id: 'ab', name:'lehnl'},ag = {id: 'ag', name:'loni'},am = {id: 'am', name:'nandl'} ; nodes.push( ab,ag,am ); links.push( {source: ab , target: am },{source: ab , target: ag },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ag aj am */ var  ab = nodes[0] ,ag = nodes[1] ,aj = {id: 'aj', name:'loisl'},am = nodes[2]  ; nodes.push( aj ); links.push( {source: aj , target: am },{source: ab , target: aj },{source: ab , target: am },{source: ab , target: ag },{source: ag , target: aj },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'am','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ac aj */ var  ab = nodes[0] ,ac = {id: 'ac', name:'traudl'},aj = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: aj },{source: ab , target: aj },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac aj am */ var  ac = nodes[0] ,aj = nodes[1] ,am = {id: 'am', name:'nandl'} ; nodes.push( am ); links.push( {source: ac , target: am },{source: ac , target: aj },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ac ag */ var  ab = {id: 'ab', name:'lehnl'},ac = nodes[0] ,ag = {id: 'ag', name:'loni'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ac },{source: ab , target: ag },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ac ad af ag aj */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'pauli'},af = {id: 'af', name:'baumiller'},ag = nodes[2] ,aj = {id: 'aj', name:'loisl'} ; nodes.push( ad,af,aj ); links.push( {source: af , target: ag },{source: af , target: aj },{source: ag , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ad },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ad },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'af','ac','aj','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = {id: 'ai', name:'muckl'} ; nodes.push( ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'pauli'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ag am an */ var  aa = {id: 'aa', name:'wirt'},ag = {id: 'ag', name:'loni'},am = {id: 'am', name:'nandl'},an = {id: 'an', name:'hochzeitlader'} ; nodes.push( aa,ag,am,an ); links.push( {source: am , target: an },{source: am , target: an },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ag },{source: aa , target: an },{source: ag , target: am },{source: ag , target: an },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'am','an','aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae aj ak al ao */ var  ae = {id: 'ae', name:'resl'},aj = {id: 'aj', name:'loisl'},ak = {id: 'ak', name:'toni'},al = {id: 'al', name:'modei'},ao = {id: 'ao', name:'regerl'} ; nodes.push( ae,aj,ak,al,ao ); links.push( {source: aj , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: ao },{source: ak , target: al },{source: ae , target: aj },{source: ae , target: ao },{source: ae , target: ak },{source: ae , target: al },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ao','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ae ai aj al am */ var  aa = {id: 'aa', name:'wirt'},ae = nodes[0] ,ai = {id: 'ai', name:'muckl'},aj = nodes[1] ,al = nodes[2] ,am = {id: 'am', name:'nandl'} ; nodes.push( aa,ai,am ); links.push( {source: ai , target: al },{source: ai , target: aj },{source: ai , target: am },{source: al , target: am },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: aj },{source: ae , target: am },{source: aj , target: al },{source: aj , target: am },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: ae },{source: aa , target: aj },{source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ai','al','ae','aj','aa','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'traudl'},af = {id: 'af', name:'baumiller'} ; nodes.push( ac,af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac af ai ap */ var  ac = nodes[0] ,af = nodes[1] ,ai = {id: 'ai', name:'muckl'},ap = {id: 'ap', name:'schneider'} ; nodes.push( ai,ap ); links.push( {source: ai , target: ap },{source: af , target: ap },{source: af , target: ai },{source: ac , target: ap },{source: ac , target: ai },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ap','af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ai ak am an */ var  aa = {id: 'aa', name:'wirt'},ai = nodes[0] ,ak = {id: 'ak', name:'toni'},am = {id: 'am', name:'nandl'},an = {id: 'an', name:'hochzeitlader'} ; nodes.push( aa,ak,am,an ); links.push( {source: am , target: an },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ak },{source: aa , target: am },{source: aa , target: ai },{source: aa , target: an },{source: aa , target: ak },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'am','an','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ad ag ai aj */ var  aa = nodes[0] ,ad = {id: 'ad', name:'pauli'},ag = {id: 'ag', name:'loni'},ai = nodes[1] ,aj = {id: 'aj', name:'loisl'} ; nodes.push( ad,ag,aj ); links.push( {source: ag , target: aj },{source: ag , target: ai },{source: ai , target: aj },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ad },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ae ag ai aj an aq ar */ var  ae = {id: 'ae', name:'resl'},ag = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,an = {id: 'an', name:'hochzeitlader'},aq = {id: 'aq', name:'bursche_und_mädchen'},ar = {id: 'ar', name:'kaspar'} ; nodes.push( ae,an,aq,ar ); links.push( {source: an , target: aq },{source: an , target: ar },{source: aq , target: ar },{source: ai , target: an },{source: ai , target: aq },{source: ai , target: aj },{source: ai , target: ar },{source: ag , target: an },{source: ag , target: aq },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ar },{source: aj , target: an },{source: aj , target: aq },{source: aj , target: ar },{source: ae , target: an },{source: ae , target: aq },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'an','aq','ae','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad ag ai aj */ var  ad = {id: 'ad', name:'pauli'},ag = nodes[0] ,ai = nodes[1] ,aj = nodes[2]  ; nodes.push( ad ); links.push( {source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ai },{source: ag , target: aj },{source: ag , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aj','ad','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ah ap as at au */ var  aa = {id: 'aa', name:'wirt'},ah = {id: 'ah', name:'röthelbachbauer'},ap = {id: 'ap', name:'schneider'},as = {id: 'as', name:'huberbauer'},at = {id: 'at', name:'lehrer'},au = {id: 'au', name:'kramerlenz'} ; nodes.push( aa,ah,ap,as,at,au ); links.push( {source: aa , target: ah },{source: aa , target: as },{source: aa , target: at },{source: aa , target: au },{source: aa , target: ap },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: ap },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'au','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ah aj as at */ var  aa = nodes[0] ,ah = nodes[1] ,aj = {id: 'aj', name:'loisl'},as = nodes[2] ,at = nodes[3]  ; nodes.push( aj ); links.push( {source: aj , target: as },{source: aj , target: at },{source: aa , target: aj },{source: aa , target: as },{source: aa , target: at },{source: aa , target: ah },{source: as , target: at },{source: ah , target: aj },{source: ah , target: as },{source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aj','aa','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ab ah ap as au */ var  ab = {id: 'ab', name:'lehnl'},ah = nodes[0] ,ap = {id: 'ap', name:'schneider'},as = nodes[1] ,au = {id: 'au', name:'kramerlenz'} ; nodes.push( ab,ap,au ); links.push( {source: ab , target: ah },{source: ab , target: as },{source: ab , target: au },{source: ab , target: ap },{source: ah , target: as },{source: ah , target: au },{source: ah , target: ap },{source: as , target: au },{source: ap , target: as },{source: ap , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ab','as','au','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ah */ var  aa = {id: 'aa', name:'wirt'},ah = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab af */ var  aa = nodes[0] ,ab = {id: 'ab', name:'lehnl'},af = {id: 'af', name:'baumiller'} ; nodes.push( ab,af ); links.push( {source: ab , target: af },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab af ag */ var  ab = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'loni'} ; nodes.push( ag ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab af ag */ var  aa = {id: 'aa', name:'wirt'},ab = nodes[0] ,af = nodes[1] ,ag = nodes[2]  ; nodes.push( aa ); links.push( {source: ab , target: ag },{source: ab , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ae ag aj */ var  ae = {id: 'ae', name:'resl'},ag = nodes[0] ,aj = {id: 'aj', name:'loisl'} ; nodes.push( ae,aj ); links.push( {source: ae , target: ag },{source: ae , target: aj },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad ag */ var  ad = {id: 'ad', name:'pauli'},ag = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'wirt'},ag = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ac al an */ var  ac = {id: 'ac', name:'traudl'},al = {id: 'al', name:'modei'},an = {id: 'an', name:'hochzeitlader'} ; nodes.push( ac,al,an ); links.push( {source: al , target: an },{source: ac , target: al },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ac ad ag an */ var  aa = {id: 'aa', name:'wirt'},ac = nodes[0] ,ad = {id: 'ad', name:'pauli'},ag = {id: 'ag', name:'loni'},an = nodes[1]  ; nodes.push( aa,ad,ag ); links.push( {source: ad , target: ag },{source: ad , target: an },{source: ag , target: an },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: an },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa ad ag aj an as */ var  aa = nodes[0] ,ad = nodes[1] ,ag = nodes[2] ,aj = {id: 'aj', name:'loisl'},an = nodes[3] ,as = {id: 'as', name:'huberbauer'} ; nodes.push( aj,as ); links.push( {source: aj , target: an },{source: aj , target: as },{source: an , target: as },{source: aa , target: aj },{source: aa , target: an },{source: aa , target: as },{source: aa , target: ag },{source: aa , target: ad },{source: ag , target: aj },{source: ag , target: an },{source: ag , target: as },{source: ad , target: aj },{source: ad , target: an },{source: ad , target: as },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'as','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aa ac ah aj an */ var  aa = nodes[0] ,ac = {id: 'ac', name:'traudl'},ah = {id: 'ah', name:'röthelbachbauer'},aj = nodes[1] ,an = nodes[2]  ; nodes.push( ac,ah ); links.push( {source: ac , target: aj },{source: ac , target: ah },{source: ac , target: an },{source: aj , target: an },{source: ah , target: aj },{source: ah , target: an },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ac','aj','ah','aa','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ag ai */ var  ag = {id: 'ag', name:'loni'},ai = {id: 'ai', name:'muckl'} ; nodes.push( ag,ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ab ad ag */ var  ab = {id: 'ab', name:'lehnl'},ad = {id: 'ad', name:'pauli'},ag = nodes[0]  ; nodes.push( ab,ad ); links.push( {source: ab , target: ad },{source: ab , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ad af ag */ var  ad = nodes[0] ,af = {id: 'af', name:'baumiller'},ag = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa af aj */ var  aa = {id: 'aa', name:'wirt'},af = nodes[0] ,aj = {id: 'aj', name:'loisl'} ; nodes.push( aa,aj ); links.push( {source: aa , target: af },{source: aa , target: aj },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 230000);
