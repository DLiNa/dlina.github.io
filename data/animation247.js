setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'beata'},ab = {id: 'ab', name:'bandini'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.702702702702702703%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'rösel'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.405405405405405405%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'jutta'},ae = {id: 'ae', name:'amalgundis'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.108108108108108108%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac af */ var  aa = nodes[0] ,ac = nodes[1] ,af = {id: 'af', name:'sonnenberg'} ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.810810810810810811%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ad af ag ah ai aj ak al am an ao ap aq ar as */ var  aa = nodes[0] ,ab = {id: 'ab', name:'bandini'},ac = nodes[1] ,ad = {id: 'ad', name:'jutta'},af = nodes[2] ,ag = {id: 'ag', name:'narr'},ah = {id: 'ah', name:'ein_schauspieler'},ai = {id: 'ai', name:'zweiter_schauspieler'},aj = {id: 'aj', name:'dritter_schauspieler'},ak = {id: 'ak', name:'vierter_schauspieler'},al = {id: 'al', name:'ein_bürger'},am = {id: 'am', name:'ralph'},an = {id: 'an', name:'die_obenstehenden'},ao = {id: 'ao', name:'judith'},ap = {id: 'ap', name:'einer'},aq = {id: 'aq', name:'esther'},ar = {id: 'ar', name:'ein_anderer'},as = {id: 'as', name:'dritter'} ; nodes.push( ab,ad,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as ); links.push( {source: aa , target: ac },{source: aa , target: ag },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: ap },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: an },{source: aa , target: aq },{source: aa , target: an },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ar },{source: aa , target: as },{source: ac , target: ag },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ap },{source: ac , target: an },{source: ac , target: an },{source: ac , target: aq },{source: ac , target: an },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ar },{source: ac , target: as },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ao },{source: ag , target: an },{source: ag , target: ap },{source: ag , target: an },{source: ag , target: an },{source: ag , target: aq },{source: ag , target: an },{source: ag , target: ar },{source: ag , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ap },{source: ah , target: an },{source: ah , target: an },{source: ah , target: aq },{source: ah , target: an },{source: ah , target: ar },{source: ah , target: as },{source: ai , target: an },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: ap },{source: ai , target: an },{source: ai , target: an },{source: ai , target: aq },{source: ai , target: an },{source: ai , target: ar },{source: ai , target: as },{source: aj , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: ap },{source: aj , target: an },{source: aj , target: an },{source: aj , target: aq },{source: aj , target: an },{source: aj , target: ar },{source: aj , target: as },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: ao },{source: ak , target: an },{source: ak , target: ap },{source: ak , target: an },{source: ak , target: an },{source: ak , target: aq },{source: ak , target: an },{source: ak , target: ar },{source: ak , target: as },{source: al , target: an },{source: al , target: am },{source: al , target: ao },{source: al , target: an },{source: al , target: ap },{source: al , target: an },{source: al , target: an },{source: al , target: aq },{source: al , target: an },{source: al , target: ar },{source: al , target: as },{source: am , target: an },{source: am , target: ao },{source: am , target: an },{source: am , target: ap },{source: am , target: an },{source: am , target: an },{source: am , target: aq },{source: am , target: an },{source: am , target: ar },{source: am , target: as },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: an },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: ao },{source: ab , target: an },{source: ab , target: ap },{source: ab , target: an },{source: ab , target: an },{source: ab , target: aq },{source: ab , target: an },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ar },{source: ab , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: aq , target: ar },{source: aq , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: af , target: ag },{source: af , target: an },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: ao },{source: af , target: an },{source: af , target: ap },{source: af , target: an },{source: af , target: an },{source: af , target: aq },{source: af , target: an },{source: af , target: ar },{source: af , target: as },{source: ad , target: ag },{source: ad , target: an },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: ao },{source: ad , target: an },{source: ad , target: ap },{source: ad , target: an },{source: ad , target: an },{source: ad , target: aq },{source: ad , target: an },{source: ad , target: af },{source: ad , target: ar },{source: ad , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.513513513513513514%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','ag','an','ah','ai','aj','ak','al','ao','ap','aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ac ad ae af am at au av */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'amalgundis'},af = nodes[3] ,am = nodes[4] ,at = {id: 'at', name:'schultheiss'},au = {id: 'au', name:'schelm'},av = {id: 'av', name:'nollingen'} ; nodes.push( ae,at,au,av ); links.push( {source: at , target: au },{source: at , target: au },{source: at , target: av },{source: ad , target: at },{source: ad , target: am },{source: ad , target: af },{source: ad , target: au },{source: ad , target: au },{source: ad , target: av },{source: ad , target: ae },{source: ab , target: at },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: am },{source: ab , target: af },{source: ab , target: au },{source: ab , target: au },{source: ab , target: av },{source: ab , target: ae },{source: ac , target: at },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: af },{source: ac , target: au },{source: ac , target: au },{source: ac , target: av },{source: ac , target: ae },{source: am , target: at },{source: am , target: au },{source: am , target: au },{source: am , target: av },{source: af , target: at },{source: af , target: am },{source: af , target: au },{source: af , target: au },{source: af , target: av },{source: au , target: av },{source: au , target: av },{source: ae , target: at },{source: ae , target: am },{source: ae , target: af },{source: ae , target: au },{source: ae , target: au },{source: ae , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.216216216216216216%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'at','ad','am','au','av','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ac af */ var  ab = nodes[0] ,ac = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: af },{source: ab , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.918918918918918919%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aw */ var  aw = {id: 'aw', name:'alessandro'} ; nodes.push( aw ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.621621621621621622%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aw az */ var  aw = nodes[0] ,az = {id: 'az', name:'kaiser'} ; nodes.push( az ); links.push( {source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.324324324324324324%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* af au aw az */ var  af = {id: 'af', name:'sonnenberg'},au = {id: 'au', name:'schelm'},aw = nodes[0] ,az = nodes[1]  ; nodes.push( af,au ); links.push( {source: au , target: az },{source: au , target: aw },{source: af , target: au },{source: af , target: az },{source: af , target: aw },{source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.027027027027027027%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'au','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* av aw az */ var  av = {id: 'av', name:'nollingen'},aw = nodes[0] ,az = nodes[1]  ; nodes.push( av ); links.push( {source: av , target: az },{source: av , target: aw },{source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.72972972972972973%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* au av ax az */ var  au = {id: 'au', name:'schelm'},av = nodes[0] ,ax = {id: 'ax', name:'geheimschreiber'},az = nodes[1]  ; nodes.push( au,ax ); links.push( {source: ax , target: az },{source: av , target: az },{source: av , target: ax },{source: au , target: az },{source: au , target: ax },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.432432432432432432%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ax','av','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae at az */ var  ae = {id: 'ae', name:'amalgundis'},at = {id: 'at', name:'schultheiss'},az = nodes[0]  ; nodes.push( ae,at ); links.push( {source: at , target: az },{source: ae , target: az },{source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.135135135135135135%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'at','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* av az */ var  av = {id: 'av', name:'nollingen'},az = nodes[0]  ; nodes.push( av ); links.push( {source: av , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.837837837837837838%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* av aw az */ var  av = nodes[0] ,aw = {id: 'aw', name:'alessandro'},az = nodes[1]  ; nodes.push( aw ); links.push( {source: aw , target: az },{source: av , target: aw },{source: av , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.540540540540540541%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aw','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* av */ var  av = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.243243243243243243%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ay */ var  ab = {id: 'ab', name:'bandini'},ay = {id: 'ay', name:'giulio'} ; nodes.push( ab,ay ); links.push( {source: ab , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.945945945945945946%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'rösel'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.648648648648648649%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'sonnenberg'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.351351351351351351%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'bandini'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.054054054054054054%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* az */ var  az = {id: 'az', name:'kaiser'} ; nodes.push( az ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.756756756756756757%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab af am */ var  ab = {id: 'ab', name:'bandini'},af = {id: 'af', name:'sonnenberg'},am = {id: 'am', name:'ralph'} ; nodes.push( ab,af,am ); links.push( {source: ab , target: af },{source: ab , target: am },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.459459459459459459%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab af am */ var  ab = nodes[0] ,af = nodes[1] ,am = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: am },{source: ab , target: af },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.162162162162162162%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* af am ba */ var  af = nodes[0] ,am = nodes[1] ,ba = {id: 'ba', name:'ritter'} ; nodes.push( ba ); links.push( {source: am , target: ba },{source: am , target: ba },{source: af , target: ba },{source: af , target: am },{source: af , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.864864864864864865%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ba','am','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* av bb */ var  av = {id: 'av', name:'nollingen'},bb = {id: 'bb', name:'leibdiener'} ; nodes.push( av,bb ); links.push( {source: av , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.567567567567567568%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* av bc */ var  av = nodes[0] ,bc = {id: 'bc', name:'thorwärtel'} ; nodes.push( bc ); links.push( {source: av , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.27027027027027027%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* av aw az bb */ var  av = nodes[0] ,aw = {id: 'aw', name:'alessandro'},az = {id: 'az', name:'kaiser'},bb = {id: 'bb', name:'leibdiener'} ; nodes.push( aw,az,bb ); links.push( {source: av , target: bb },{source: av , target: az },{source: av , target: aw },{source: az , target: bb },{source: aw , target: bb },{source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.972972972972972973%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* av aw az bd */ var  av = nodes[0] ,aw = nodes[1] ,az = nodes[2] ,bd = {id: 'bd', name:'trabant'} ; nodes.push( bd ); links.push( {source: az , target: bd },{source: av , target: az },{source: av , target: bd },{source: av , target: aw },{source: aw , target: az },{source: aw , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.675675675675675676%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'az','bd','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'rösel'},af = {id: 'af', name:'sonnenberg'} ; nodes.push( ac,af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.378378378378378378%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ac af av */ var  ac = nodes[0] ,af = nodes[1] ,av = {id: 'av', name:'nollingen'} ; nodes.push( av ); links.push( {source: af , target: av },{source: ac , target: av },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.081081081081081081%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'av','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.783783783783783784%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa be bf */ var  aa = {id: 'aa', name:'beata'},be = {id: 'be', name:'daniel'},bf = {id: 'bf', name:'grieche'} ; nodes.push( aa,be,bf ); links.push( {source: aa , target: be },{source: aa , target: bf },{source: aa , target: bf },{source: be , target: bf },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.486486486486486486%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ac be */ var  aa = nodes[0] ,ac = {id: 'ac', name:'rösel'},be = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: be },{source: aa , target: ac },{source: aa , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.189189189189189189%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac','aa','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aw az */ var  aw = {id: 'aw', name:'alessandro'},az = {id: 'az', name:'kaiser'} ; nodes.push( aw,az ); links.push( {source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.891891891891891892%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ae at az bb */ var  ae = {id: 'ae', name:'amalgundis'},at = {id: 'at', name:'schultheiss'},az = nodes[0] ,bb = {id: 'bb', name:'leibdiener'} ; nodes.push( ae,at,bb ); links.push( {source: az , target: bb },{source: ae , target: bb },{source: ae , target: az },{source: ae , target: at },{source: at , target: bb },{source: at , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.594594594594594595%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'bb','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab ac ad ae ag au av aw az bg bh bi */ var  ab = {id: 'ab', name:'bandini'},ac = {id: 'ac', name:'rösel'},ad = {id: 'ad', name:'jutta'},ae = nodes[0] ,ag = {id: 'ag', name:'narr'},au = {id: 'au', name:'schelm'},av = {id: 'av', name:'nollingen'},aw = {id: 'aw', name:'alessandro'},az = nodes[1] ,bg = {id: 'bg', name:'spruchsprecher'},bh = {id: 'bh', name:'conrad_von_stade'},bi = {id: 'bi', name:'die_ritter'} ; nodes.push( ab,ac,ad,ag,au,av,aw,bg,bh,bi ); links.push( {source: az , target: bg },{source: az , target: bh },{source: az , target: bi },{source: av , target: az },{source: av , target: aw },{source: av , target: bg },{source: av , target: bh },{source: av , target: bi },{source: ae , target: az },{source: ae , target: av },{source: ae , target: aw },{source: ae , target: bg },{source: ae , target: bh },{source: ae , target: bi },{source: ae , target: ag },{source: ae , target: au },{source: ad , target: az },{source: ad , target: av },{source: ad , target: ae },{source: ad , target: aw },{source: ad , target: bg },{source: ad , target: bh },{source: ad , target: bi },{source: ad , target: ag },{source: ad , target: au },{source: aw , target: az },{source: aw , target: bg },{source: aw , target: bh },{source: aw , target: bi },{source: bg , target: bh },{source: bg , target: bi },{source: bh , target: bi },{source: ag , target: az },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: bg },{source: ag , target: bh },{source: ag , target: bi },{source: ag , target: au },{source: ac , target: az },{source: ac , target: av },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: aw },{source: ac , target: bg },{source: ac , target: bh },{source: ac , target: bi },{source: ac , target: ag },{source: ac , target: au },{source: au , target: az },{source: au , target: av },{source: au , target: aw },{source: au , target: bg },{source: au , target: bh },{source: au , target: bi },{source: ab , target: az },{source: ab , target: av },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: aw },{source: ab , target: bg },{source: ab , target: bh },{source: ab , target: bi },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.297297297297297297%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'av','ad','bg','bh','bi','ag','au','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ac ae af aw az */ var  ac = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'sonnenberg'},aw = nodes[2] ,az = nodes[3]  ; nodes.push( af ); links.push( {source: aw , target: az },{source: af , target: aw },{source: af , target: az },{source: ac , target: aw },{source: ac , target: az },{source: ac , target: af },{source: ac , target: ae },{source: ae , target: aw },{source: ae , target: az },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 180000);
