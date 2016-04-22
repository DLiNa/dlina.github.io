setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'prinzessin_trull'},ab = {id: 'ab', name:'die_alte_raschke'},ac = {id: 'ac', name:'rapunzel'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'christel'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ae af */ var  ab = {id: 'ab', name:'die_alte_raschke'},ae = {id: 'ae', name:'der_alte_raschke'},af = {id: 'af', name:'die_junge_raschke'} ; nodes.push( ab,ae,af ); links.push( {source: ab , target: ae },{source: ab , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ae af */ var  ab = nodes[0] ,ae = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: af },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ae af ag */ var  ab = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'der_gendarm'} ; nodes.push( ag ); links.push( {source: ab , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: af , target: ag },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ah */ var  ae = nodes[0] ,ah = {id: 'ah', name:'hermann_raschke'} ; nodes.push( ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ae af ag ah */ var  ae = nodes[0] ,af = {id: 'af', name:'die_junge_raschke'},ag = {id: 'ag', name:'der_gendarm'},ah = nodes[1]  ; nodes.push( af,ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ag , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ae af ah */ var  ab = {id: 'ab', name:'die_alte_raschke'},ae = nodes[0] ,af = nodes[1] ,ah = nodes[2]  ; nodes.push( ab ); links.push( {source: ae , target: af },{source: ae , target: ah },{source: af , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af','ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'prinzessin_trull'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ab ac ae ai aj ak al am an ao ap */ var  aa = nodes[0] ,ab = {id: 'ab', name:'die_alte_raschke'},ac = {id: 'ac', name:'rapunzel'},ae = nodes[1] ,ai = {id: 'ai', name:'die_frau_pastorin'},aj = {id: 'aj', name:'die_gräfin'},ak = {id: 'ak', name:'der_dorfpastor'},al = {id: 'al', name:'das_armselige_dorfgesindel'},am = {id: 'am', name:'einer_aus_dem_gesindel'},an = {id: 'an', name:'der_amtssekretär'},ao = {id: 'ao', name:'der_apostel_petrus'},ap = {id: 'ap', name:'die_vier_beamten'} ; nodes.push( ab,ac,ai,aj,ak,al,am,an,ao,ap ); links.push( {source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ao , target: ap },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae','ai','aj','ak','ac','al','am','an','ab','ao','ap','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ag aq ar */ var  ag = {id: 'ag', name:'der_gendarm'},aq = {id: 'aq', name:'der_wirt'},ar = {id: 'ar', name:'die_wirtin'} ; nodes.push( ag,aq,ar ); links.push( {source: aq , target: ar },{source: ag , target: aq },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag aq as at */ var  ag = nodes[0] ,aq = nodes[1] ,as = {id: 'as', name:'der_fremde'},at = {id: 'at', name:'der_eine_diener'} ; nodes.push( as,at ); links.push( {source: aq , target: as },{source: aq , target: at },{source: as , target: at },{source: ag , target: aq },{source: ag , target: as },{source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aq','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ag as au */ var  ag = nodes[0] ,as = nodes[1] ,au = {id: 'au', name:'der_bauer'} ; nodes.push( au ); links.push( {source: as , target: au },{source: ag , target: as },{source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'as','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac ag av */ var  ac = {id: 'ac', name:'rapunzel'},ag = nodes[0] ,av = {id: 'av', name:'einer_der_bauern'} ; nodes.push( ac,av ); links.push( {source: ag , target: av },{source: ac , target: av },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac ag aq ar aw ax ay */ var  ac = nodes[0] ,ag = nodes[1] ,aq = {id: 'aq', name:'der_wirt'},ar = {id: 'ar', name:'die_wirtin'},aw = {id: 'aw', name:'ein_bauernbursche'},ax = {id: 'ax', name:'ein_anderer_bursche'},ay = {id: 'ay', name:'ein_mädchen'} ; nodes.push( aq,ar,aw,ax,ay ); links.push( {source: ar , target: aw },{source: ar , target: ax },{source: ar , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay },{source: aq , target: ar },{source: aq , target: aw },{source: aq , target: ax },{source: aq , target: ay },{source: ac , target: ar },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: aq },{source: ac , target: ag },{source: ac , target: ay },{source: ag , target: ar },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: aq },{source: ag , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aw','ax','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aq ar au av ay az */ var  aq = nodes[0] ,ar = nodes[1] ,au = {id: 'au', name:'der_bauer'},av = {id: 'av', name:'einer_der_bauern'},ay = nodes[2] ,az = {id: 'az', name:'ein_anderes_mädchen'} ; nodes.push( au,av,az ); links.push( {source: av , target: ay },{source: av , target: az },{source: ay , target: az },{source: au , target: av },{source: au , target: ay },{source: au , target: az },{source: aq , target: av },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: au },{source: aq , target: ar },{source: ar , target: av },{source: ar , target: ay },{source: ar , target: az },{source: ar , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'av','ay','az','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ag as au ba */ var  ag = {id: 'ag', name:'der_gendarm'},as = {id: 'as', name:'der_fremde'},au = nodes[0] ,ba = {id: 'ba', name:'ein_bauernmädchen'} ; nodes.push( ag,as,ba ); links.push( {source: as , target: au },{source: as , target: au },{source: as , target: ba },{source: au , target: ba },{source: au , target: ba },{source: ag , target: as },{source: ag , target: au },{source: ag , target: au },{source: ag , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'as','au','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ag aq ar bb */ var  ac = {id: 'ac', name:'rapunzel'},ag = nodes[0] ,aq = {id: 'aq', name:'der_wirt'},ar = {id: 'ar', name:'die_wirtin'},bb = {id: 'bb', name:'die_leute'} ; nodes.push( ac,aq,ar,bb ); links.push( {source: ac , target: bb },{source: ac , target: ar },{source: ac , target: aq },{source: ac , target: ag },{source: ar , target: bb },{source: aq , target: bb },{source: aq , target: ar },{source: ag , target: bb },{source: ag , target: ar },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'bb','ac','ar','aq','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* an bc */ var  an = {id: 'an', name:'der_amtssekretär'},bc = {id: 'bc', name:'der_polizist'} ; nodes.push( an,bc ); links.push( {source: an , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ae ag an bc */ var  ae = {id: 'ae', name:'der_alte_raschke'},ag = {id: 'ag', name:'der_gendarm'},an = nodes[0] ,bc = nodes[1]  ; nodes.push( ae,ag ); links.push( {source: ae , target: an },{source: ae , target: bc },{source: ae , target: ag },{source: an , target: bc },{source: ag , target: an },{source: ag , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'bc','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae ah an */ var  ae = nodes[0] ,ah = {id: 'ah', name:'hermann_raschke'},an = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: an },{source: ae , target: ah },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ae af an */ var  ab = {id: 'ab', name:'die_alte_raschke'},ae = nodes[0] ,af = {id: 'af', name:'die_junge_raschke'},an = nodes[1]  ; nodes.push( ab,af ); links.push( {source: ab , target: af },{source: ab , target: an },{source: ab , target: ae },{source: af , target: an },{source: ae , target: af },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ac ae af ag an */ var  ab = nodes[0] ,ac = {id: 'ac', name:'rapunzel'},ae = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'der_gendarm'},an = nodes[3]  ; nodes.push( ac,ag ); links.push( {source: ag , target: an },{source: ac , target: an },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: an },{source: ae , target: ag },{source: ae , target: af },{source: af , target: an },{source: af , target: ag },{source: ab , target: an },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ag','ac','ae','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* an bd */ var  an = nodes[0] ,bd = {id: 'bd', name:'der_diener'} ; nodes.push( bd ); links.push( {source: an , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* an bc */ var  an = nodes[0] ,bc = {id: 'bc', name:'der_polizist'} ; nodes.push( bc ); links.push( {source: an , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'an','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'prinzessin_trull'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa be */ var  aa = nodes[0] ,be = {id: 'be', name:'die_stimme'} ; nodes.push( be ); links.push( {source: aa , target: be },{source: aa , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ac be */ var  aa = nodes[0] ,ac = {id: 'ac', name:'rapunzel'},be = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: be },{source: aa , target: ac },{source: aa , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ab ac be */ var  aa = nodes[0] ,ab = {id: 'ab', name:'die_alte_raschke'},ac = nodes[1] ,be = nodes[2]  ; nodes.push( ab ); links.push( {source: aa , target: ab },{source: aa , target: be },{source: aa , target: ac },{source: ab , target: be },{source: ab , target: ac },{source: ac , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab af ah be */ var  ab = nodes[0] ,af = {id: 'af', name:'die_junge_raschke'},ah = {id: 'ah', name:'hermann_raschke'},be = nodes[1]  ; nodes.push( af,ah ); links.push( {source: af , target: ah },{source: af , target: be },{source: ah , target: be },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'af','ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae be */ var  ae = {id: 'ae', name:'der_alte_raschke'},be = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac ae as bf */ var  ac = {id: 'ac', name:'rapunzel'},ae = nodes[0] ,as = {id: 'as', name:'der_fremde'},bf = {id: 'bf', name:'johannes_habundus'} ; nodes.push( ac,as,bf ); links.push( {source: as , target: bf },{source: ae , target: as },{source: ae , target: bf },{source: ac , target: as },{source: ac , target: ae },{source: ac , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'as','ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* bf */ var  bf = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ac bf */ var  ac = {id: 'ac', name:'rapunzel'},bf = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 170000);
