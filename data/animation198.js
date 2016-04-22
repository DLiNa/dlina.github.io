setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'die_marquise'},ab = {id: 'ab', name:'der_domherr'},ac = {id: 'ac', name:'bedienter'},ad = {id: 'ad', name:'bediente'},ae = {id: 'ae', name:'die_frauen'},af = {id: 'af', name:'der_ritter'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ae af ag ah ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = {id: 'ag', name:'der_graf'},ah = {id: 'ah', name:'die_männer'},ai = {id: 'ai', name:'ein_mädchen'},aj = {id: 'aj', name:'die_andre'} ; nodes.push( ag,ah,ai,aj ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: af },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: aj },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ai },{source: af , target: aj },{source: ai , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','ah','ab','aa','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* af ag ak al */ var  af = nodes[0] ,ag = nodes[1] ,ak = {id: 'ak', name:'erster_schüler'},al = {id: 'al', name:'zweiter_schüler'} ; nodes.push( ak,al ); links.push( {source: ag , target: ak },{source: ag , target: al },{source: af , target: ag },{source: af , target: ak },{source: af , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'der_domherr'},ag = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ag am */ var  ag = nodes[0] ,am = {id: 'am', name:'st'} ; nodes.push( am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* an ao */ var  an = {id: 'an', name:'marquis'},ao = {id: 'ao', name:'la_fleur'} ; nodes.push( an,ao ); links.push( {source: an , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa an ap */ var  aa = {id: 'aa', name:'die_marquise'},an = nodes[0] ,ap = {id: 'ap', name:'jäck'} ; nodes.push( aa,ap ); links.push( {source: aa , target: an },{source: aa , target: ap },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa an ap aq */ var  aa = nodes[0] ,an = nodes[1] ,ap = nodes[2] ,aq = {id: 'aq', name:'die_nichte'} ; nodes.push( aq ); links.push( {source: aa , target: aq },{source: aa , target: an },{source: aa , target: ap },{source: an , target: aq },{source: an , target: ap },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa af an aq */ var  aa = nodes[0] ,af = {id: 'af', name:'der_ritter'},an = nodes[1] ,aq = nodes[2]  ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: aq },{source: aa , target: an },{source: af , target: aq },{source: af , target: an },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa af ag an ap aq */ var  aa = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'der_graf'},an = nodes[2] ,ap = {id: 'ap', name:'jäck'},aq = nodes[3]  ; nodes.push( ag,ap ); links.push( {source: ap , target: aq },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: an },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: an },{source: af , target: ap },{source: af , target: ag },{source: af , target: ag },{source: af , target: aq },{source: af , target: an },{source: an , target: ap },{source: an , target: aq },{source: aa , target: ap },{source: aa , target: ag },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: aq },{source: aa , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap','ag','af','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa aq */ var  aa = nodes[0] ,aq = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'der_domherr'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ac ar */ var  ab = nodes[0] ,ac = {id: 'ac', name:'bedienter'},ar = {id: 'ar', name:'juwelier'} ; nodes.push( ac,ar ); links.push( {source: ac , target: ar },{source: ab , target: ac },{source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ac ap */ var  ab = nodes[0] ,ac = nodes[1] ,ap = {id: 'ap', name:'jäck'} ; nodes.push( ap ); links.push( {source: ab , target: ac },{source: ab , target: ap },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab af am */ var  ab = nodes[0] ,af = {id: 'af', name:'der_ritter'},am = {id: 'am', name:'st'} ; nodes.push( af,am ); links.push( {source: ab , target: am },{source: ab , target: af },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab af ag */ var  ab = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'der_graf'} ; nodes.push( ag ); links.push( {source: ab , target: ag },{source: ab , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'bedienter'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* as at au */ var  as = {id: 'as', name:'chor_der_kinder'},at = {id: 'at', name:'chor_der_jünglinge'},au = {id: 'au', name:'chor_von_innen'} ; nodes.push( as,at,au ); links.push( {source: as , target: at },{source: as , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'as','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab af ag an aq */ var  aa = {id: 'aa', name:'die_marquise'},ab = {id: 'ab', name:'der_domherr'},af = {id: 'af', name:'der_ritter'},ag = {id: 'ag', name:'der_graf'},an = {id: 'an', name:'marquis'},aq = {id: 'aq', name:'die_nichte'} ; nodes.push( aa,ab,af,ag,an,aq ); links.push( {source: ab , target: af },{source: ab , target: an },{source: ab , target: aq },{source: ab , target: ag },{source: af , target: an },{source: af , target: aq },{source: af , target: ag },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: an },{source: aa , target: aq },{source: aa , target: ag },{source: an , target: aq },{source: ag , target: an },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ab','af','aa','an','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aq av */ var  aq = nodes[0] ,av = {id: 'av', name:'mädchen'} ; nodes.push( av ); links.push( {source: aq , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ap aq */ var  ap = {id: 'ap', name:'jäck'},aq = nodes[0]  ; nodes.push( ap ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aq */ var  aq = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa aq */ var  aa = {id: 'aa', name:'die_marquise'},aq = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ap aq */ var  ap = {id: 'ap', name:'jäck'},aq = nodes[0]  ; nodes.push( ap ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* af aq */ var  af = {id: 'af', name:'der_ritter'},aq = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* an aq */ var  an = {id: 'an', name:'marquis'},aq = nodes[0]  ; nodes.push( an ); links.push( {source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'an','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'der_ritter'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ag ao */ var  ag = {id: 'ag', name:'der_graf'},ao = {id: 'ao', name:'la_fleur'} ; nodes.push( ag,ao ); links.push( {source: ag , target: ao },{source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* af aw ax */ var  af = {id: 'af', name:'der_ritter'},aw = {id: 'aw', name:'der_oberste'},ax = {id: 'ax', name:'schweizer'} ; nodes.push( af,aw,ax ); links.push( {source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ax },{source: af , target: aw },{source: af , target: ax },{source: af , target: aw },{source: af , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aw','ax','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa aq */ var  aa = {id: 'aa', name:'die_marquise'},aq = {id: 'aq', name:'die_nichte'} ; nodes.push( aa,aq ); links.push( {source: aa , target: aq },{source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ab aq */ var  aa = nodes[0] ,ab = {id: 'ab', name:'der_domherr'},aq = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: aq },{source: ab , target: aq },{source: aa , target: ab },{source: aa , target: ab },{source: aa , target: aq },{source: aa , target: aq },{source: ab , target: aq },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab an aq aw */ var  aa = nodes[0] ,ab = nodes[1] ,an = {id: 'an', name:'marquis'},aq = nodes[2] ,aw = {id: 'aw', name:'der_oberste'} ; nodes.push( an,aw ); links.push( {source: aa , target: ab },{source: aa , target: an },{source: aa , target: aq },{source: aa , target: an },{source: aa , target: aq },{source: aa , target: aw },{source: aa , target: aw },{source: ab , target: an },{source: ab , target: aq },{source: ab , target: an },{source: ab , target: aq },{source: ab , target: aw },{source: ab , target: aw },{source: an , target: aq },{source: an , target: aq },{source: an , target: aw },{source: an , target: aw },{source: aq , target: aw },{source: aq , target: aw },{source: an , target: aq },{source: an , target: aq },{source: an , target: aw },{source: an , target: aw },{source: aq , target: aw },{source: aq , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab ag an aw ax */ var  aa = nodes[0] ,ab = nodes[1] ,ag = {id: 'ag', name:'der_graf'},an = nodes[2] ,aw = nodes[3] ,ax = {id: 'ax', name:'schweizer'} ; nodes.push( ag,ax ); links.push( {source: ag , target: ax },{source: ag , target: aw },{source: ag , target: an },{source: ag , target: ax },{source: ag , target: aw },{source: ag , target: an },{source: ab , target: ag },{source: ab , target: ax },{source: ab , target: ag },{source: ab , target: aw },{source: ab , target: an },{source: aw , target: ax },{source: aa , target: ag },{source: aa , target: ax },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: aw },{source: aa , target: an },{source: an , target: ax },{source: an , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ab af ag an aq aw ax ay */ var  aa = nodes[0] ,ab = nodes[1] ,af = {id: 'af', name:'der_ritter'},ag = nodes[2] ,an = nodes[3] ,aq = {id: 'aq', name:'die_nichte'},aw = nodes[4] ,ax = nodes[5] ,ay = {id: 'ay', name:'die_schweizer'} ; nodes.push( af,aq,ay ); links.push( {source: af , target: aq },{source: af , target: aw },{source: af , target: an },{source: af , target: ax },{source: af , target: ag },{source: af , target: ax },{source: af , target: aw },{source: af , target: ay },{source: aq , target: aw },{source: aq , target: ax },{source: aq , target: ax },{source: aq , target: aw },{source: aq , target: ay },{source: ab , target: af },{source: ab , target: aq },{source: ab , target: aw },{source: ab , target: an },{source: ab , target: ax },{source: ab , target: ag },{source: ab , target: ax },{source: ab , target: aw },{source: ab , target: ay },{source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ay },{source: an , target: aq },{source: an , target: aw },{source: an , target: ax },{source: an , target: ax },{source: an , target: aw },{source: an , target: ay },{source: ax , target: ay },{source: aa , target: af },{source: aa , target: aq },{source: aa , target: ab },{source: aa , target: aw },{source: aa , target: an },{source: aa , target: ax },{source: aa , target: ag },{source: aa , target: ax },{source: aa , target: aw },{source: aa , target: ay },{source: ag , target: aq },{source: ag , target: aw },{source: ag , target: an },{source: ag , target: ax },{source: ag , target: ax },{source: ag , target: aw },{source: ag , target: ay },{source: ax , target: ay },{source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 180000);
