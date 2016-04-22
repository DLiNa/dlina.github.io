setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'die_stimme_des_fremden'},ab = {id: 'ab', name:'der_alte'},ac = {id: 'ac', name:'der_alte_gärtner'},ad = {id: 'ad', name:'der_junge_gärtner'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'der_alte'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'die_stimme_des_fremden'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ae af ag */ var  ac = nodes[0] ,ae = {id: 'ae', name:'der_erste_freier'},af = {id: 'af', name:'der_herr'},ag = {id: 'ag', name:'der_zweite_freier'} ; nodes.push( ae,af,ag ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: af , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','af','ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ah ai aj */ var  ah = {id: 'ah', name:'der_dritte_freier'},ai = {id: 'ai', name:'der_dichtende_freier'},aj = {id: 'aj', name:'das_fräulein'} ; nodes.push( ah,ai,aj ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ad ai aj */ var  aa = {id: 'aa', name:'die_stimme_des_fremden'},ad = {id: 'ad', name:'der_junge_gärtner'},ai = nodes[0] ,aj = nodes[1]  ; nodes.push( aa,ad ); links.push( {source: ai , target: aj },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ad },{source: ad , target: ai },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ad ae af ag ah ai aj */ var  aa = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'der_erste_freier'},af = {id: 'af', name:'der_herr'},ag = {id: 'ag', name:'der_zweite_freier'},ah = {id: 'ah', name:'der_dritte_freier'},ai = nodes[2] ,aj = nodes[3]  ; nodes.push( ae,af,ag,ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ad },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af','ae','ag','ah','ai','aj','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ak al am an */ var  ak = {id: 'ak', name:'der_erfahrene_wächter'},al = {id: 'al', name:'der_sehende_wächter'},am = {id: 'am', name:'stimme_des_ersten_geblendeten'},an = {id: 'an', name:'stimme_des_zweiten_geblendeten'} ; nodes.push( ak,al,am,an ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ak al ao ap */ var  ak = nodes[0] ,al = nodes[1] ,ao = {id: 'ao', name:'der_knecht'},ap = {id: 'ap', name:'die_stumme_sklavin'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap },{source: ak , target: ao },{source: ak , target: al },{source: ak , target: ap },{source: al , target: ao },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ah ak al am an ao ap aq ar as at */ var  ah = {id: 'ah', name:'der_dritte_freier'},ak = nodes[0] ,al = nodes[1] ,am = {id: 'am', name:'stimme_des_ersten_geblendeten'},an = {id: 'an', name:'stimme_des_zweiten_geblendeten'},ao = nodes[2] ,ap = nodes[3] ,aq = {id: 'aq', name:'belian'},ar = {id: 'ar', name:'marpalye'},as = {id: 'as', name:'die_knechte'},at = {id: 'at', name:'stimme_des_dritten_geblendeten'} ; nodes.push( ah,am,an,aq,ar,as,at ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ak , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ar },{source: ak , target: ap },{source: ak , target: as },{source: ak , target: ao },{source: ak , target: at },{source: al , target: aq },{source: al , target: am },{source: al , target: an },{source: al , target: ar },{source: al , target: ap },{source: al , target: as },{source: al , target: ao },{source: al , target: at },{source: am , target: aq },{source: am , target: an },{source: am , target: ar },{source: am , target: ap },{source: am , target: as },{source: am , target: ao },{source: am , target: at },{source: an , target: aq },{source: an , target: ar },{source: an , target: ap },{source: an , target: as },{source: an , target: ao },{source: an , target: at },{source: ah , target: aq },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ar },{source: ah , target: ap },{source: ah , target: as },{source: ah , target: ao },{source: ah , target: at },{source: ar , target: as },{source: ar , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: as , target: at },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: ap },{source: ao , target: as },{source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aq','ah','ar','ap','as','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ak al am an at */ var  aa = {id: 'aa', name:'die_stimme_des_fremden'},ak = nodes[0] ,al = nodes[1] ,am = nodes[2] ,an = nodes[3] ,at = nodes[4]  ; nodes.push( aa ); links.push( {source: al , target: an },{source: al , target: am },{source: al , target: at },{source: ak , target: al },{source: ak , target: an },{source: ak , target: am },{source: ak , target: at },{source: an , target: at },{source: am , target: an },{source: am , target: at },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: an },{source: aa , target: am },{source: aa , target: at },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: an },{source: aa , target: am },{source: aa , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'II.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'al','ak','an','am','at','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ar au */ var  ar = {id: 'ar', name:'marpalye'},au = {id: 'au', name:'der_narr'} ; nodes.push( ar,au ); links.push( {source: ar , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* al ar au */ var  al = {id: 'al', name:'der_sehende_wächter'},ar = nodes[0] ,au = nodes[1]  ; nodes.push( al ); links.push( {source: al , target: ar },{source: al , target: au },{source: ar , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'al','ar','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa av */ var  aa = {id: 'aa', name:'die_stimme_des_fremden'},av = {id: 'av', name:'der_waffenmeister'} ; nodes.push( aa,av ); links.push( {source: aa , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa al av */ var  aa = nodes[0] ,al = {id: 'al', name:'der_sehende_wächter'},av = nodes[1]  ; nodes.push( al ); links.push( {source: aa , target: al },{source: aa , target: av },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa av */ var  aa = nodes[0] ,av = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'av','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ak aq au */ var  ak = {id: 'ak', name:'der_erfahrene_wächter'},aq = {id: 'aq', name:'belian'},au = {id: 'au', name:'der_narr'} ; nodes.push( ak,aq,au ); links.push( {source: ak , target: aq },{source: ak , target: au },{source: aq , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ak','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* al aq ar */ var  al = {id: 'al', name:'der_sehende_wächter'},aq = nodes[0] ,ar = {id: 'ar', name:'marpalye'} ; nodes.push( al,ar ); links.push( {source: aq , target: ar },{source: al , target: ar },{source: al , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa al aq ar au av */ var  aa = {id: 'aa', name:'die_stimme_des_fremden'},al = nodes[0] ,aq = nodes[1] ,ar = nodes[2] ,au = {id: 'au', name:'der_narr'},av = {id: 'av', name:'der_waffenmeister'} ; nodes.push( aa,au,av ); links.push( {source: aq , target: ar },{source: aq , target: au },{source: aq , target: av },{source: aa , target: aq },{source: aa , target: al },{source: aa , target: ar },{source: aa , target: au },{source: aa , target: av },{source: al , target: aq },{source: al , target: ar },{source: al , target: au },{source: al , target: av },{source: ar , target: au },{source: ar , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aq','aa','ar','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'der_erfahrene_wächter'},al = nodes[0]  ; nodes.push( ak ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'VI.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa av */ var  aa = {id: 'aa', name:'die_stimme_des_fremden'},av = {id: 'av', name:'der_waffenmeister'} ; nodes.push( aa,av ); links.push( {source: aa , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '7. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ar */ var  aa = nodes[0] ,ar = {id: 'ar', name:'marpalye'} ; nodes.push( ar ); links.push( {source: aa , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '7. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ak am an aq at */ var  ak = {id: 'ak', name:'der_erfahrene_wächter'},am = {id: 'am', name:'stimme_des_ersten_geblendeten'},an = {id: 'an', name:'stimme_des_zweiten_geblendeten'},aq = {id: 'aq', name:'belian'},at = {id: 'at', name:'stimme_des_dritten_geblendeten'} ; nodes.push( ak,am,an,aq,at ); links.push( {source: aq , target: at },{source: ak , target: aq },{source: ak , target: am },{source: ak , target: an },{source: ak , target: at },{source: am , target: aq },{source: am , target: an },{source: am , target: at },{source: an , target: aq },{source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '8. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ak','am','an','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa aq ar au av */ var  aa = {id: 'aa', name:'die_stimme_des_fremden'},aq = nodes[0] ,ar = {id: 'ar', name:'marpalye'},au = {id: 'au', name:'der_narr'},av = {id: 'av', name:'der_waffenmeister'} ; nodes.push( aa,ar,au,av ); links.push( {source: ar , target: au },{source: ar , target: av },{source: au , target: av },{source: aq , target: ar },{source: aq , target: au },{source: aq , target: av },{source: aa , target: ar },{source: aa , target: au },{source: aa , target: aq },{source: aa , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '8. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'au','aq','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ac ad ar aw ax ay */ var  aa = nodes[0] ,ac = {id: 'ac', name:'der_alte_gärtner'},ad = {id: 'ad', name:'der_junge_gärtner'},ar = nodes[1] ,aw = {id: 'aw', name:'die_bauleute'},ax = {id: 'ax', name:'einer_der_bauleute'},ay = {id: 'ay', name:'das_mädchen'} ; nodes.push( ac,ad,aw,ax,ay ); links.push( {source: aa , target: ar },{source: aa , target: aw },{source: aa , target: ax },{source: aa , target: aw },{source: aa , target: ay },{source: aa , target: ay },{source: aa , target: ac },{source: aa , target: ad },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: aw },{source: ar , target: ay },{source: ar , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: ay },{source: ax , target: ay },{source: ax , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: ay },{source: ac , target: ar },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: aw },{source: ac , target: ay },{source: ac , target: ay },{source: ac , target: ad },{source: ad , target: ar },{source: ad , target: aw },{source: ad , target: ax },{source: ad , target: aw },{source: ad , target: ay },{source: ad , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '9. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'IX.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 125000);
