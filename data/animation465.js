setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'danilow'},ab = {id: 'ab', name:'mehrere_deputierte'},ac = {id: 'ac', name:'einer_der_deputierten'},ad = {id: 'ad', name:'ein_andrer_der_deputierten'},ae = {id: 'ae', name:'ein_dritter_deputierter'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = {id: 'af', name:'aaron'},ag = {id: 'ag', name:'der_bote'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','aa','ag','ac','ad','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ah ai aj ak al am an ao */ var  ah = {id: 'ah', name:'peter'},ai = {id: 'ai', name:'theophanes'},aj = {id: 'aj', name:'jaguschinsky'},ak = {id: 'ak', name:'menzikof'},al = {id: 'al', name:'schaphirow'},am = {id: 'am', name:'ostermann'},an = {id: 'an', name:'einige'},ao = {id: 'ao', name:'andre_1.3'} ; nodes.push( ah,ai,aj,ak,al,am,an,ao ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: am , target: an },{source: am , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ai','aj','ak','al','am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ah aq */ var  ah = nodes[0] ,aq = {id: 'aq', name:'tolstoi'} ; nodes.push( aq ); links.push( {source: ah , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aq */ var  aq = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ar as */ var  ar = {id: 'ar', name:'therese'},as = {id: 'as', name:'anna'} ; nodes.push( ar,as ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ar as at */ var  ar = nodes[0] ,as = nodes[1] ,at = {id: 'at', name:'katharina'} ; nodes.push( at ); links.push( {source: ar , target: at },{source: ar , target: as },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* at au */ var  at = nodes[0] ,au = {id: 'au', name:'mons'} ; nodes.push( au ); links.push( {source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* at au */ var  at = nodes[0] ,au = nodes[1]  ; /* nodes.push(); */ links.push( {source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ah ar at au */ var  ah = {id: 'ah', name:'peter'},ar = {id: 'ar', name:'therese'},at = nodes[0] ,au = nodes[1]  ; nodes.push( ah,ar ); links.push( {source: ar , target: at },{source: ar , target: au },{source: at , target: au },{source: ah , target: ar },{source: ah , target: at },{source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ar','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ah at */ var  ah = nodes[0] ,at = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ah ak at */ var  ah = nodes[0] ,ak = {id: 'ak', name:'menzikof'},at = nodes[1]  ; nodes.push( ak ); links.push( {source: ah , target: ak },{source: ah , target: at },{source: ak , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ah','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* at */ var  at = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* av aw */ var  av = {id: 'av', name:'euphrosyne'},aw = {id: 'aw', name:'costa'} ; nodes.push( av,aw ); links.push( {source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ak av */ var  ak = {id: 'ak', name:'menzikof'},av = nodes[0]  ; nodes.push( ak ); links.push( {source: ak , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ak','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ax ay */ var  ax = {id: 'ax', name:'schepelew'},ay = {id: 'ay', name:'alexis'} ; nodes.push( ax,ay ); links.push( {source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aw ay */ var  aw = {id: 'aw', name:'costa'},ay = nodes[0]  ; nodes.push( aw ); links.push( {source: aw , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ax ay */ var  ax = {id: 'ax', name:'schepelew'},ay = nodes[0]  ; nodes.push( ax ); links.push( {source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* at au ay */ var  at = {id: 'at', name:'katharina'},au = {id: 'au', name:'mons'},ay = nodes[0]  ; nodes.push( at,au ); links.push( {source: at , target: ay },{source: at , target: au },{source: au , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ay','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* az ba */ var  az = {id: 'az', name:'erster_türsteher'},ba = {id: 'ba', name:'zweiter_türsteher'} ; nodes.push( az,ba ); links.push( {source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ak aq az bb */ var  ak = {id: 'ak', name:'menzikof'},aq = {id: 'aq', name:'tolstoi'},az = nodes[0] ,bb = {id: 'bb', name:'dentschik'} ; nodes.push( ak,aq,bb ); links.push( {source: aq , target: az },{source: aq , target: bb },{source: az , target: bb },{source: ak , target: aq },{source: ak , target: az },{source: ak , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'az','ak','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ah aq av */ var  ah = {id: 'ah', name:'peter'},aq = nodes[0] ,av = {id: 'av', name:'euphrosyne'} ; nodes.push( ah,av ); links.push( {source: ah , target: av },{source: ah , target: aq },{source: aq , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ah ai aj ak al am ap aq ay bc bd be bf bg bh bi */ var  ah = nodes[0] ,ai = {id: 'ai', name:'theophanes'},aj = {id: 'aj', name:'jaguschinsky'},ak = {id: 'ak', name:'menzikof'},al = {id: 'al', name:'schaphirow'},am = {id: 'am', name:'ostermann'},ap = {id: 'ap', name:'andre_4.4'},aq = nodes[1] ,ay = {id: 'ay', name:'alexis'},bc = {id: 'bc', name:'der_sekretär'},bd = {id: 'bd', name:'der_nachbar'},be = {id: 'be', name:'die_geistlichen'},bf = {id: 'bf', name:'ein_general'},bg = {id: 'bg', name:'die_generale'},bh = {id: 'bh', name:'die_senatoren'},bi = {id: 'bi', name:'allgemeiner_ruf'} ; nodes.push( ai,aj,ak,al,am,ap,ay,bc,bd,be,bf,bg,bh,bi ); links.push( {source: aj , target: aq },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: bc },{source: aj , target: bd },{source: aj , target: ay },{source: aj , target: ap },{source: aj , target: be },{source: aj , target: bg },{source: aj , target: bf },{source: aj , target: bh },{source: aj , target: bi },{source: aq , target: bc },{source: aq , target: bd },{source: aq , target: ay },{source: aq , target: be },{source: aq , target: bg },{source: aq , target: bf },{source: aq , target: bh },{source: aq , target: bi },{source: ak , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: bc },{source: ak , target: bd },{source: ak , target: ay },{source: ak , target: ap },{source: ak , target: be },{source: ak , target: bg },{source: ak , target: bf },{source: ak , target: bh },{source: ak , target: bi },{source: al , target: aq },{source: al , target: am },{source: al , target: bc },{source: al , target: bd },{source: al , target: ay },{source: al , target: ap },{source: al , target: be },{source: al , target: bg },{source: al , target: bf },{source: al , target: bh },{source: al , target: bi },{source: am , target: aq },{source: am , target: bc },{source: am , target: bd },{source: am , target: ay },{source: am , target: ap },{source: am , target: be },{source: am , target: bg },{source: am , target: bf },{source: am , target: bh },{source: am , target: bi },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bg },{source: bc , target: bf },{source: bc , target: bh },{source: bc , target: bi },{source: ai , target: aj },{source: ai , target: aq },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: bc },{source: ai , target: bd },{source: ai , target: ay },{source: ai , target: ap },{source: ai , target: be },{source: ai , target: bg },{source: ai , target: bf },{source: ai , target: bh },{source: ai , target: bi },{source: bd , target: be },{source: bd , target: bg },{source: bd , target: bf },{source: bd , target: bh },{source: bd , target: bi },{source: ay , target: bc },{source: ay , target: bd },{source: ay , target: be },{source: ay , target: bg },{source: ay , target: bf },{source: ay , target: bh },{source: ay , target: bi },{source: ap , target: aq },{source: ap , target: bc },{source: ap , target: bd },{source: ap , target: ay },{source: ap , target: be },{source: ap , target: bg },{source: ap , target: bf },{source: ap , target: bh },{source: ap , target: bi },{source: be , target: bg },{source: be , target: bf },{source: be , target: bh },{source: be , target: bi },{source: bg , target: bh },{source: bg , target: bi },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bi },{source: bh , target: bi },{source: ah , target: aj },{source: ah , target: aq },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: bc },{source: ah , target: ai },{source: ah , target: bd },{source: ah , target: ay },{source: ah , target: ap },{source: ah , target: be },{source: ah , target: bg },{source: ah , target: bf },{source: ah , target: bh },{source: ah , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aj','aq','ak','al','am','bc','ai','bd','ay','ap','be','bg','bf','bh','bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ah au bj bk */ var  ah = nodes[0] ,au = {id: 'au', name:'mons'},bj = {id: 'bj', name:'arzt'},bk = {id: 'bk', name:'sekretär'} ; nodes.push( au,bj,bk ); links.push( {source: ah , target: bj },{source: ah , target: au },{source: ah , target: bk },{source: bj , target: bk },{source: au , target: bj },{source: au , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'bj','au','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah at */ var  ah = nodes[0] ,at = {id: 'at', name:'katharina'} ; nodes.push( at ); links.push( {source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* at */ var  at = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aj al */ var  aj = {id: 'aj', name:'jaguschinsky'},al = {id: 'al', name:'schaphirow'} ; nodes.push( aj,al ); links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa af ah bl */ var  aa = {id: 'aa', name:'danilow'},af = {id: 'af', name:'aaron'},ah = {id: 'ah', name:'peter'},bl = {id: 'bl', name:'gordon'} ; nodes.push( aa,af,ah,bl ); links.push( {source: aa , target: bl },{source: aa , target: ah },{source: aa , target: af },{source: ah , target: bl },{source: af , target: bl },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aa','bl','ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ax ay bj */ var  ax = {id: 'ax', name:'schepelew'},ay = {id: 'ay', name:'alexis'},bj = {id: 'bj', name:'arzt'} ; nodes.push( ax,ay,bj ); links.push( {source: ax , target: bj },{source: ax , target: ay },{source: ay , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ax ay bj */ var  ax = nodes[0] ,ay = nodes[1] ,bj = nodes[2]  ; /* nodes.push(); */ links.push( {source: ax , target: ay },{source: ax , target: bj },{source: ay , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ah bj */ var  ah = {id: 'ah', name:'peter'},bj = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ah ay */ var  ah = nodes[0] ,ay = {id: 'ay', name:'alexis'} ; nodes.push( ay ); links.push( {source: ah , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ah ai aj al am aq bf bg bh */ var  aa = {id: 'aa', name:'danilow'},ah = nodes[0] ,ai = {id: 'ai', name:'theophanes'},aj = {id: 'aj', name:'jaguschinsky'},al = {id: 'al', name:'schaphirow'},am = {id: 'am', name:'ostermann'},aq = {id: 'aq', name:'tolstoi'},bf = {id: 'bf', name:'ein_general'},bg = {id: 'bg', name:'die_generale'},bh = {id: 'bh', name:'die_senatoren'} ; nodes.push( aa,ai,aj,al,am,aq,bf,bg,bh ); links.push( {source: aj , target: al },{source: aj , target: am },{source: aj , target: aq },{source: aj , target: bg },{source: aj , target: bf },{source: aj , target: bh },{source: al , target: am },{source: al , target: aq },{source: al , target: bg },{source: al , target: bf },{source: al , target: bh },{source: am , target: aq },{source: am , target: bg },{source: am , target: bf },{source: am , target: bh },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: aq },{source: ai , target: bg },{source: ai , target: bf },{source: ai , target: bh },{source: aq , target: bg },{source: aq , target: bf },{source: aq , target: bh },{source: bg , target: bh },{source: bf , target: bg },{source: bf , target: bh },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: aq },{source: ah , target: bg },{source: ah , target: bf },{source: ah , target: bh },{source: aa , target: aj },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ai },{source: aa , target: aq },{source: aa , target: bg },{source: aa , target: bf },{source: aa , target: bh },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 160000);
