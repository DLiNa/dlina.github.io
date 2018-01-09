setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'grossknecht'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.846153846153846154%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'vroni'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Auftrittslied';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.692307692307692308%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.538461538461538462%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad ae af */ var  ab = nodes[0] ,ac = {id: 'ac', name:'crescenz'},ad = {id: 'ad', name:'toni'},ae = {id: 'ae', name:'fernerl'},af = {id: 'af', name:'höllerer'} ; nodes.push( ac,ad,ae,af ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.384615384615384615%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.230769230769230769%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ag ah ai aj ak al am */ var  ab = {id: 'ab', name:'vroni'},ag = {id: 'ag', name:'mirzl'},ah = {id: 'ah', name:'muckerl'},ai = {id: 'ai', name:'burgei'},aj = {id: 'aj', name:'annerl'},ak = {id: 'ak', name:'waberl'},al = {id: 'al', name:'gretl'},am = {id: 'am', name:'chor'} ; nodes.push( ab,ag,ah,ai,aj,ak,al,am ); links.push( {source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: am },{source: ak , target: al },{source: ak , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: al , target: am },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: am },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: al },{source: ab , target: ah },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.076923076923076923%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai','ag','ak','aj','al','ah','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab an */ var  aa = {id: 'aa', name:'grossknecht'},ab = nodes[0] ,an = {id: 'an', name:'franz'} ; nodes.push( aa,an ); links.push( {source: aa , target: ab },{source: aa , target: an },{source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.923076923076923077%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa','ab','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'levy'},ap = {id: 'ap', name:'liese'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.769230769230769231%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ap */ var  ab = {id: 'ab', name:'vroni'},ap = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.615384615384615385%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ap aq */ var  ab = nodes[0] ,ap = nodes[1] ,aq = {id: 'aq', name:'jakob'} ; nodes.push( aq ); links.push( {source: ap , target: aq },{source: ab , target: ap },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.461538461538461538%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ap','ab','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ae af */ var  ac = {id: 'ac', name:'crescenz'},ae = {id: 'ae', name:'fernerl'},af = {id: 'af', name:'höllerer'} ; nodes.push( ac,ae,af ); links.push( {source: ae , target: af },{source: ac , target: af },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.307692307692307692%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac ae af an */ var  ac = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,an = {id: 'an', name:'franz'} ; nodes.push( an ); links.push( {source: ae , target: an },{source: ae , target: af },{source: af , target: an },{source: ac , target: an },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.153846153846153846%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae an */ var  ae = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: an },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ae an */ var  ab = {id: 'ab', name:'vroni'},ae = nodes[0] ,an = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: an },{source: ab , target: ae },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.846153846153846154%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'an','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.692307692307692308%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'toni'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.538461538461538462%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ad an */ var  ab = nodes[0] ,ad = nodes[1] ,an = {id: 'an', name:'franz'} ; nodes.push( an ); links.push( {source: ad , target: an },{source: ab , target: an },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.384615384615384615%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab an */ var  ab = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.230769230769230769%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'fernerl'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.076923076923076923%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ae an ar as */ var  ae = nodes[0] ,an = {id: 'an', name:'franz'},ar = {id: 'ar', name:'erster_schwärzer'},as = {id: 'as', name:'zweiter_schwärzer'} ; nodes.push( an,ar,as ); links.push( {source: ar , target: as },{source: an , target: ar },{source: an , target: as },{source: ae , target: ar },{source: ae , target: an },{source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.923076923076923077%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ar','an','as','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* at au av aw */ var  at = {id: 'at', name:'bader'},au = {id: 'au', name:'mahm'},av = {id: 'av', name:'rosl'},aw = {id: 'aw', name:'kathrein'} ; nodes.push( at,au,av,aw ); links.push( {source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: au , target: av },{source: au , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.769230769230769231%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ae at au av aw */ var  ae = {id: 'ae', name:'fernerl'},at = nodes[0] ,au = nodes[1] ,av = nodes[2] ,aw = nodes[3]  ; nodes.push( ae ); links.push( {source: ae , target: aw },{source: ae , target: av },{source: ae , target: au },{source: ae , target: at },{source: av , target: aw },{source: au , target: aw },{source: au , target: av },{source: at , target: aw },{source: at , target: av },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.615384615384615385%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae','aw','av','au','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ap */ var  ab = {id: 'ab', name:'vroni'},ap = {id: 'ap', name:'liese'} ; nodes.push( ab,ap ); links.push( {source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.461538461538461538%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab an ap */ var  ab = nodes[0] ,an = {id: 'an', name:'franz'},ap = nodes[1]  ; nodes.push( an ); links.push( {source: ab , target: an },{source: ab , target: ap },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.307692307692307692%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab an */ var  ab = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.153846153846153846%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab ac af an ap */ var  ab = nodes[0] ,ac = {id: 'ac', name:'crescenz'},af = {id: 'af', name:'höllerer'},an = nodes[1] ,ap = {id: 'ap', name:'liese'} ; nodes.push( ac,af,ap ); links.push( {source: af , target: ap },{source: af , target: an },{source: ac , target: ap },{source: ac , target: af },{source: ac , target: an },{source: an , target: ap },{source: ab , target: ap },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 125000);
