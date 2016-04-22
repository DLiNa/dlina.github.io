setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'marianens_stimme'},ab = {id: 'ab', name:'lotte'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.777777777777777778%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'stolzius'},ad = {id: 'ad', name:'mutter'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.555555555555555556%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ae af */ var  aa = {id: 'aa', name:'marianens_stimme'},ae = {id: 'ae', name:'desportes'},af = {id: 'af', name:'wesener'} ; nodes.push( aa,ae,af ); links.push( {source: ae , target: af },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ag ah ai aj ak al */ var  ag = {id: 'ag', name:'junger_graf'},ah = {id: 'ah', name:'haudy'},ai = {id: 'ai', name:'hofmeister'},aj = {id: 'aj', name:'eisenhardt'},ak = {id: 'ak', name:'obriste'},al = {id: 'al', name:'marys_stimme'} ; nodes.push( ag,ah,ai,aj,ak,al ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ag','ah','ai','aj','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab af */ var  aa = {id: 'aa', name:'marianens_stimme'},ab = {id: 'ab', name:'lotte'},af = {id: 'af', name:'wesener'} ; nodes.push( aa,ab,af ); links.push( {source: aa , target: af },{source: aa , target: ab },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.888888888888888889%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ah */ var  ac = {id: 'ac', name:'stolzius'},ah = {id: 'ah', name:'haudy'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.444444444444444444%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ah aj al am an ao ap */ var  ac = nodes[0] ,ah = nodes[1] ,aj = {id: 'aj', name:'eisenhardt'},al = {id: 'al', name:'marys_stimme'},am = {id: 'am', name:'pirzel'},an = {id: 'an', name:'einer_aus_dem_haufen'},ao = {id: 'ao', name:'ein_andrer'},ap = {id: 'ap', name:'rammleer'} ; nodes.push( aj,al,am,an,ao,ap ); links.push( {source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: ap },{source: aj , target: ap },{source: aj , target: al },{source: aj , target: ao },{source: am , target: an },{source: am , target: ao },{source: am , target: an },{source: am , target: ap },{source: am , target: ap },{source: am , target: ao },{source: an , target: ao },{source: an , target: ap },{source: an , target: ap },{source: an , target: ao },{source: ao , target: ap },{source: ao , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ap },{source: an , target: ao },{source: ah , target: aj },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ap },{source: ah , target: ap },{source: ah , target: al },{source: ah , target: ao },{source: ac , target: aj },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: ap },{source: ac , target: ap },{source: ac , target: al },{source: ac , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: an },{source: al , target: ap },{source: al , target: ap },{source: al , target: ao },{source: ao , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aj','am','an','ao','ah','ap','ac','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ae af aq ar */ var  aa = {id: 'aa', name:'marianens_stimme'},ae = {id: 'ae', name:'desportes'},af = {id: 'af', name:'wesener'},aq = {id: 'aq', name:'junger_zipfersaat'},ar = {id: 'ar', name:'weseners_alte_mutter'} ; nodes.push( aa,ae,af,aq,ar ); links.push( {source: ae , target: af },{source: ae , target: aq },{source: ae , target: ar },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: aq },{source: aa , target: ar },{source: af , target: aq },{source: af , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae','aa','af','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ah al ap as */ var  ah = {id: 'ah', name:'haudy'},al = {id: 'al', name:'marys_stimme'},ap = {id: 'ap', name:'rammleer'},as = {id: 'as', name:'aaron'} ; nodes.push( ah,al,ap,as ); links.push( {source: ap , target: as },{source: al , target: ap },{source: al , target: as },{source: ah , target: ap },{source: ah , target: as },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.777777777777777778%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ap','as','al','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'stolzius'},ad = {id: 'ad', name:'mutter'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.555555555555555556%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab af aq at */ var  aa = {id: 'aa', name:'marianens_stimme'},ab = {id: 'ab', name:'lotte'},af = {id: 'af', name:'wesener'},aq = {id: 'aq', name:'junger_zipfersaat'},at = {id: 'at', name:'magd'} ; nodes.push( aa,ab,af,aq,at ); links.push( {source: aq , target: at },{source: aa , target: aq },{source: aa , target: at },{source: aa , target: af },{source: aa , target: aq },{source: aa , target: ab },{source: af , target: aq },{source: af , target: at },{source: af , target: aq },{source: aq , target: at },{source: ab , target: aq },{source: ab , target: at },{source: ab , target: af },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aq','at','aa','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aj am */ var  aj = {id: 'aj', name:'eisenhardt'},am = {id: 'am', name:'pirzel'} ; nodes.push( aj,am ); links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.111111111111111111%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aj','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac al */ var  ac = {id: 'ac', name:'stolzius'},al = {id: 'al', name:'marys_stimme'} ; nodes.push( ac,al ); links.push( {source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.888888888888888889%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ab al au */ var  aa = {id: 'aa', name:'marianens_stimme'},ab = {id: 'ab', name:'lotte'},al = nodes[0] ,au = {id: 'au', name:'frau_wesenern'} ; nodes.push( aa,ab,au ); links.push( {source: aa , target: au },{source: aa , target: ab },{source: aa , target: au },{source: aa , target: ab },{source: aa , target: al },{source: ab , target: au },{source: ab , target: au },{source: ab , target: al },{source: ab , target: au },{source: ab , target: au },{source: ab , target: al },{source: al , target: au },{source: al , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'au','aa','ab','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'desportes'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ag av aw */ var  ag = {id: 'ag', name:'junger_graf'},av = {id: 'av', name:'gräfin'},aw = {id: 'aw', name:'bedienter'} ; nodes.push( ag,av,aw ); links.push( {source: av , target: aw },{source: ag , target: av },{source: ag , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.222222222222222222%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'av','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa au aw */ var  aa = {id: 'aa', name:'marianens_stimme'},au = {id: 'au', name:'frau_wesenern'},aw = nodes[0]  ; nodes.push( aa,au ); links.push( {source: aa , target: au },{source: aa , target: aw },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'au','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa av */ var  aa = nodes[0] ,av = {id: 'av', name:'gräfin'} ; nodes.push( av ); links.push( {source: aa , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.777777777777777778%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aa','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac al */ var  ac = {id: 'ac', name:'stolzius'},al = {id: 'al', name:'marys_stimme'} ; nodes.push( ac,al ); links.push( {source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'al','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae ah */ var  ae = {id: 'ae', name:'desportes'},ah = {id: 'ah', name:'haudy'} ; nodes.push( ae,ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa al av */ var  aa = {id: 'aa', name:'marianens_stimme'},al = {id: 'al', name:'marys_stimme'},av = {id: 'av', name:'gräfin'} ; nodes.push( aa,al,av ); links.push( {source: al , target: av },{source: aa , target: av },{source: aa , target: al },{source: aa , target: al },{source: al , target: av },{source: aa , target: av },{source: aa , target: al },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.111111111111111111%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'av','al','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'desportes'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.888888888888888889%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'wesener'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac al */ var  ac = {id: 'ac', name:'stolzius'},al = {id: 'al', name:'marys_stimme'} ; nodes.push( ac,al ); links.push( {source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.444444444444444444%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'lotte'},af = {id: 'af', name:'wesener'} ; nodes.push( ab,af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.222222222222222222%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ax */ var  ax = {id: 'ax', name:'jäger'} ; nodes.push( ax ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac ae ah al ap ay az ba */ var  ac = {id: 'ac', name:'stolzius'},ae = {id: 'ae', name:'desportes'},ah = {id: 'ah', name:'haudy'},al = {id: 'al', name:'marys_stimme'},ap = {id: 'ap', name:'rammleer'},ay = {id: 'ay', name:'madame_bischof'},az = {id: 'az', name:'gilbert'},ba = {id: 'ba', name:'alle_offiziers'} ; nodes.push( ac,ae,ah,al,ap,ay,az,ba ); links.push( {source: ay , target: az },{source: ay , target: ba },{source: ap , target: ay },{source: ap , target: ay },{source: ap , target: az },{source: ap , target: ba },{source: ah , target: ay },{source: ah , target: ap },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ba },{source: ah , target: al },{source: ay , target: az },{source: ay , target: ba },{source: az , target: ba },{source: ae , target: ay },{source: ae , target: ap },{source: ae , target: ah },{source: ae , target: ay },{source: ae , target: az },{source: ae , target: ba },{source: ae , target: al },{source: al , target: ay },{source: al , target: ap },{source: al , target: ay },{source: al , target: az },{source: al , target: ba },{source: ac , target: ay },{source: ac , target: ap },{source: ac , target: ah },{source: ac , target: ay },{source: ac , target: az },{source: ac , target: ba },{source: ac , target: ae },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ay','ap','ah','az','ba','ae','al','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* au */ var  au = {id: 'au', name:'frau_wesenern'} ; nodes.push( au ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.555555555555555556%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'stolzius'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'wesener'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.111111111111111111%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'marianens_stimme'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac ae al */ var  ac = {id: 'ac', name:'stolzius'},ae = {id: 'ae', name:'desportes'},al = {id: 'al', name:'marys_stimme'} ; nodes.push( ac,ae,al ); links.push( {source: ae , target: al },{source: ac , target: ae },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ae','al','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa af bb */ var  aa = {id: 'aa', name:'marianens_stimme'},af = {id: 'af', name:'wesener'},bb = {id: 'bb', name:'weibsperson'} ; nodes.push( aa,af,bb ); links.push( {source: af , target: bb },{source: af , target: bb },{source: aa , target: af },{source: aa , target: bb },{source: aa , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.444444444444444444%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'af','bb','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ak av */ var  ak = {id: 'ak', name:'obriste'},av = {id: 'av', name:'gräfin'} ; nodes.push( ak,av ); links.push( {source: ak , target: av },{source: ak , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte und letzte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.222222222222222222%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ak av */ var  ak = nodes[0] ,av = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Fassung der Schlußszene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 175000);
