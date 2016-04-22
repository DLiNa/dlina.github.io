setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'ottokar'},ab = {id: 'ab', name:'czipra'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad ae af ag */ var  ab = nodes[0] ,ac = {id: 'ac', name:'chor_der_schiffer'},ad = {id: 'ad', name:'barinkay'},ae = {id: 'ae', name:'chor'},af = {id: 'af', name:'carnero'},ag = {id: 'ag', name:'saffi'} ; nodes.push( ac,ad,ae,af,ag ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ae af ah ai */ var  ae = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'zsupán'},ai = {id: 'ai', name:'mirabella'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: af , target: ah },{source: af , target: ai },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae af ah ai aj ak */ var  ad = {id: 'ad', name:'barinkay'},ae = nodes[0] ,af = nodes[1] ,ah = nodes[2] ,ai = nodes[3] ,aj = {id: 'aj', name:'arsena'},ak = {id: 'ak', name:'chor_der_mädchen'} ; nodes.push( ad,aj,ak ); links.push( {source: ae , target: aj },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: ai },{source: aj , target: ak },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: af , target: aj },{source: af , target: ah },{source: af , target: ak },{source: af , target: ai },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','aj','ah','af','ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = {id: 'ag', name:'saffi'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ad ae ag aj */ var  aa = {id: 'aa', name:'ottokar'},ab = {id: 'ab', name:'czipra'},ad = nodes[0] ,ae = {id: 'ae', name:'chor'},ag = nodes[1] ,aj = {id: 'aj', name:'arsena'} ; nodes.push( aa,ab,ae,aj ); links.push( {source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ae },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ae },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ae },{source: ag , target: aj },{source: ae , target: aj },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa','aj','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ad ag an */ var  ab = nodes[0] ,ad = nodes[1] ,ag = nodes[2] ,an = {id: 'an', name:'zigeuner'} ; nodes.push( an ); links.push( {source: ad , target: ag },{source: ad , target: an },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: an },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ad ae af ag ah ai aj al am an */ var  aa = {id: 'aa', name:'ottokar'},ab = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'chor'},af = {id: 'af', name:'carnero'},ag = nodes[2] ,ah = {id: 'ah', name:'zsupán'},ai = {id: 'ai', name:'mirabella'},aj = {id: 'aj', name:'arsena'},al = {id: 'al', name:'chor_zsupáns'},am = {id: 'am', name:'barinkays_gruppe'},an = nodes[3]  ; nodes.push( aa,ae,af,ah,ai,aj,al,am ); links.push( {source: ah , target: al },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: an },{source: ah , target: am },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: al },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: al },{source: ad , target: af },{source: ad , target: an },{source: ad , target: am },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: al },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: af },{source: ae , target: an },{source: ae , target: am },{source: ag , target: ah },{source: ag , target: al },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: an },{source: ag , target: am },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: al },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: al },{source: ab , target: af },{source: ab , target: an },{source: ab , target: am },{source: al , target: an },{source: al , target: am },{source: aj , target: al },{source: aj , target: al },{source: aj , target: an },{source: aj , target: am },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: an },{source: ai , target: am },{source: al , target: an },{source: al , target: am },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: al },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: af },{source: aa , target: an },{source: aa , target: am },{source: af , target: ah },{source: af , target: ag },{source: af , target: al },{source: af , target: aj },{source: af , target: ai },{source: af , target: al },{source: af , target: an },{source: af , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ah','ae','al','aj','ai','aa','af','an','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ad ag */ var  ab = nodes[0] ,ad = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ad },{source: ab , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab','ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* an ao ap */ var  an = {id: 'an', name:'zigeuner'},ao = {id: 'ao', name:'der_alte_pali'},ap = {id: 'ap', name:'allgemeiner_schlußchor'} ; nodes.push( an,ao,ap ); links.push( {source: ao , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ao },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab ad ae af ag ah ai aj an aq ar */ var  aa = {id: 'aa', name:'ottokar'},ab = {id: 'ab', name:'czipra'},ad = {id: 'ad', name:'barinkay'},ae = {id: 'ae', name:'chor'},af = {id: 'af', name:'carnero'},ag = {id: 'ag', name:'saffi'},ah = {id: 'ah', name:'zsupán'},ai = {id: 'ai', name:'mirabella'},aj = {id: 'aj', name:'arsena'},an = nodes[0] ,aq = {id: 'aq', name:'homonay'},ar = {id: 'ar', name:'chor_der_soldaten'} ; nodes.push( aa,ab,ad,ae,af,ag,ah,ai,aj,aq,ar ); links.push( {source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: aq },{source: af , target: aj },{source: af , target: ar },{source: af , target: aq },{source: af , target: an },{source: af , target: ar },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: aq },{source: ad , target: aj },{source: ad , target: ar },{source: ad , target: aq },{source: ad , target: an },{source: ad , target: ar },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: aj },{source: ag , target: ar },{source: ag , target: aq },{source: ag , target: an },{source: ag , target: ar },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: aq },{source: ae , target: aj },{source: ae , target: ar },{source: ae , target: aq },{source: ae , target: an },{source: ae , target: ar },{source: ai , target: aq },{source: ai , target: aj },{source: ai , target: ar },{source: ai , target: aq },{source: ai , target: an },{source: ai , target: ar },{source: ah , target: ai },{source: ah , target: aq },{source: ah , target: aj },{source: ah , target: ar },{source: ah , target: aq },{source: ah , target: an },{source: ah , target: ar },{source: aq , target: ar },{source: aq , target: ar },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: aq },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: ar },{source: aa , target: aq },{source: aa , target: an },{source: aa , target: ar },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: aq },{source: aj , target: an },{source: aj , target: ar },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: aq },{source: ab , target: aj },{source: ab , target: ar },{source: ab , target: aq },{source: ab , target: an },{source: ab , target: ar },{source: aq , target: ar },{source: aq , target: ar },{source: an , target: aq },{source: an , target: ar },{source: an , target: aq },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','ae','ai','ah','aq','aa','ar','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ad ag aj ap */ var  ab = nodes[0] ,ad = nodes[1] ,ag = nodes[2] ,aj = nodes[3] ,ap = {id: 'ap', name:'allgemeiner_schlußchor'} ; nodes.push( ap ); links.push( {source: aj , target: ap },{source: ag , target: ap },{source: ag , target: aj },{source: ad , target: ap },{source: ad , target: aj },{source: ad , target: ag },{source: ab , target: ap },{source: ab , target: aj },{source: ab , target: ag },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ad ae ag ah ap */ var  ad = nodes[0] ,ae = {id: 'ae', name:'chor'},ag = nodes[1] ,ah = {id: 'ah', name:'zsupán'},ap = nodes[2]  ; nodes.push( ae,ah ); links.push( {source: ah , target: ap },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: ap },{source: ag , target: ah },{source: ag , target: ap },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 60000);
