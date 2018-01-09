setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'lieschen'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.777777777777777778%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'faust'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.555555555555555556%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'gesang_der_geister'},ad = {id: 'ad', name:'mephistopheles'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'valentin'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ad },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'unsichtbare_gute_geister'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: af },{source: ab , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ae },{source: ae , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.888888888888888889%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ab','aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad ag ah ai aj */ var  ad = {id: 'ad', name:'mephistopheles'},ag = {id: 'ag', name:'knaben'},ah = {id: 'ah', name:'karlchen'},ai = {id: 'ai', name:'fritzchen'},aj = {id: 'aj', name:'gustelchen'} ; nodes.push( ad,ag,ah,ai,aj ); links.push( {source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ad af ag ah ai */ var  aa = {id: 'aa', name:'lieschen'},ab = {id: 'ab', name:'faust'},ad = nodes[0] ,af = {id: 'af', name:'unsichtbare_gute_geister'},ag = nodes[1] ,ah = nodes[2] ,ai = nodes[3]  ; nodes.push( aa,ab,af ); links.push( {source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: af },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: af },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.444444444444444444%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','ah','ai','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ak */ var  aa = nodes[0] ,ab = nodes[1] ,ak = {id: 'ak', name:'dieselbe_stimme'} ; nodes.push( ak ); links.push( {source: ab , target: ak },{source: ab , target: ak },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ab ae */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'valentin'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: aa , target: ae },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ab ae al */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2] ,al = {id: 'al', name:'kaminfeger'} ; nodes.push( al ); links.push( {source: aa , target: al },{source: aa , target: ae },{source: aa , target: ab },{source: ae , target: al },{source: ab , target: al },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.777777777777777778%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al','aa','ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ad am an ao */ var  ad = {id: 'ad', name:'mephistopheles'},am = {id: 'am', name:'mutter_a'},an = {id: 'an', name:'mutter_b'},ao = {id: 'ao', name:'mutter_c'} ; nodes.push( ad,am,an,ao ); links.push( {source: am , target: an },{source: am , target: ao },{source: an , target: ao },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.555555555555555556%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ad ae am an ao */ var  ab = {id: 'ab', name:'faust'},ad = nodes[0] ,ae = {id: 'ae', name:'valentin'},am = nodes[1] ,an = nodes[2] ,ao = nodes[3]  ; nodes.push( ab,ae ); links.push( {source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ae },{source: am , target: an },{source: am , target: ao },{source: an , target: ao },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ab , target: ad },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad','am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.111111111111111111%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ap */ var  ab = nodes[0] ,ap = {id: 'ap', name:'helena'} ; nodes.push( ap ); links.push( {source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.888888888888888889%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ae af ap aq */ var  ab = nodes[0] ,ae = {id: 'ae', name:'valentin'},af = {id: 'af', name:'unsichtbare_gute_geister'},ap = nodes[1] ,aq = {id: 'aq', name:'euphorion'} ; nodes.push( ae,af,aq ); links.push( {source: ap , target: aq },{source: ae , target: aq },{source: ae , target: ap },{source: ae , target: af },{source: ab , target: aq },{source: ab , target: ap },{source: ab , target: ae },{source: ab , target: af },{source: af , target: aq },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aq','ap','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ae ar as */ var  ab = nodes[0] ,ae = nodes[1] ,ar = {id: 'ar', name:'männchen'},as = {id: 'as', name:'der_bauer'} ; nodes.push( ar,as ); links.push( {source: ar , target: as },{source: ab , target: ar },{source: ab , target: ae },{source: ab , target: as },{source: ae , target: ar },{source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ae as at au av */ var  ab = nodes[0] ,ae = nodes[1] ,as = nodes[2] ,at = {id: 'at', name:'gestalt'},au = {id: 'au', name:'der_mann_mit_stierkopf'},av = {id: 'av', name:'gesang_unsichtbarer_geister'} ; nodes.push( at,au,av ); links.push( {source: at , target: au },{source: at , target: av },{source: ab , target: at },{source: ab , target: au },{source: ab , target: as },{source: ab , target: ae },{source: ab , target: at },{source: ab , target: as },{source: ab , target: av },{source: au , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: at },{source: as , target: av },{source: ae , target: at },{source: ae , target: au },{source: ae , target: as },{source: ae , target: at },{source: ae , target: as },{source: ae , target: av },{source: at , target: au },{source: at , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: at },{source: as , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.222222222222222222%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'at','au','as','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ae aw ax ay az */ var  ab = nodes[0] ,ae = nodes[1] ,aw = {id: 'aw', name:'stimme'},ax = {id: 'ax', name:'schemen'},ay = {id: 'ay', name:'der_grosse_hund'},az = {id: 'az', name:'der_kleine_fuchs'} ; nodes.push( aw,ax,ay,az ); links.push( {source: ae , target: aw },{source: ae , target: ax },{source: ae , target: ay },{source: ae , target: az },{source: ab , target: ae },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: az },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aw','ax','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ae af am an ao av ba bb bc */ var  ab = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'unsichtbare_gute_geister'},am = {id: 'am', name:'mutter_a'},an = {id: 'an', name:'mutter_b'},ao = {id: 'ao', name:'mutter_c'},av = {id: 'av', name:'gesang_unsichtbarer_geister'},ba = {id: 'ba', name:'erster_mann'},bb = {id: 'bb', name:'zweiter_mann'},bc = {id: 'bc', name:'chorus_mysticus'} ; nodes.push( af,am,an,ao,av,ba,bb,bc ); links.push( {source: ba , target: bb },{source: ba , target: bc },{source: ae , target: ba },{source: ae , target: bb },{source: ae , target: af },{source: ae , target: bc },{source: ae , target: af },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: av },{source: bb , target: bc },{source: ab , target: ba },{source: ab , target: ae },{source: ab , target: bb },{source: ab , target: af },{source: ab , target: bc },{source: ab , target: af },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: av },{source: af , target: ba },{source: af , target: bb },{source: af , target: bc },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: av },{source: af , target: ba },{source: af , target: bb },{source: af , target: bc },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: av },{source: am , target: ba },{source: am , target: bb },{source: am , target: bc },{source: am , target: an },{source: am , target: ao },{source: am , target: av },{source: an , target: ba },{source: an , target: bb },{source: an , target: bc },{source: an , target: ao },{source: an , target: av },{source: ao , target: ba },{source: ao , target: bb },{source: ao , target: bc },{source: ao , target: av },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.777777777777777778%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ba','ae','bb','ab','af','bc','am','an','ao','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad bd be */ var  ad = {id: 'ad', name:'mephistopheles'},bd = {id: 'bd', name:'stimme_des_herrn'},be = {id: 'be', name:'erzengel_michael'} ; nodes.push( ad,bd,be ); links.push( {source: ad , target: bd },{source: ad , target: be },{source: bd , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ad','bd','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* bf */ var  bf = {id: 'bf', name:'bärbelchen'} ; nodes.push( bf ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ab bf */ var  aa = {id: 'aa', name:'lieschen'},ab = {id: 'ab', name:'faust'},bf = nodes[0]  ; nodes.push( aa,ab ); links.push( {source: aa , target: bf },{source: aa , target: ab },{source: ab , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.111111111111111111%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ab ad bf bg */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'mephistopheles'},bf = nodes[2] ,bg = {id: 'bg', name:'dr'} ; nodes.push( ad,bg ); links.push( {source: ab , target: bg },{source: ab , target: ad },{source: ab , target: bf },{source: ad , target: bg },{source: ad , target: bf },{source: aa , target: bg },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: bf },{source: bf , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.888888888888888889%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bg','aa','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ad ae */ var  ab = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'valentin'} ; nodes.push( ae ); links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ae bg */ var  ab = nodes[0] ,ae = nodes[1] ,bg = {id: 'bg', name:'dr'} ; nodes.push( bg ); links.push( {source: ae , target: bg },{source: ab , target: ae },{source: ab , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.444444444444444444%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ab ae bg bh bi bj bk */ var  aa = {id: 'aa', name:'lieschen'},ab = nodes[0] ,ae = nodes[1] ,bg = nodes[2] ,bh = {id: 'bh', name:'pater_ecstaticus'},bi = {id: 'bi', name:'pater_profundus'},bj = {id: 'bj', name:'pater_seraphicus'},bk = {id: 'bk', name:'chor'} ; nodes.push( aa,bh,bi,bj,bk ); links.push( {source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bk },{source: ae , target: bg },{source: ae , target: bh },{source: ae , target: bi },{source: ae , target: bj },{source: ae , target: bk },{source: ae , target: bk },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bk },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bk },{source: bj , target: bk },{source: bj , target: bk },{source: ab , target: bg },{source: ab , target: ae },{source: ab , target: bh },{source: ab , target: bi },{source: ab , target: bj },{source: ab , target: bk },{source: ab , target: bk },{source: aa , target: bg },{source: aa , target: ae },{source: aa , target: bh },{source: aa , target: bi },{source: aa , target: bj },{source: aa , target: ab },{source: aa , target: bk },{source: aa , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.222222222222222222%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ae','bh','bi','bj','aa','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ad bg bl bm bn bo bp bq br bs */ var  ab = nodes[0] ,ad = {id: 'ad', name:'mephistopheles'},bg = nodes[1] ,bl = {id: 'bl', name:'seismos'},bm = {id: 'bm', name:'thales'},bn = {id: 'bn', name:'nereide'},bo = {id: 'bo', name:'zwei_tritonen'},bp = {id: 'bp', name:'pindaros'},bq = {id: 'bq', name:'werner'},br = {id: 'br', name:'lyell'},bs = {id: 'bs', name:'priesnitz'} ; nodes.push( ad,bl,bm,bn,bo,bp,bq,br,bs ); links.push( {source: ad , target: bl },{source: ad , target: bg },{source: ad , target: bm },{source: ad , target: bn },{source: ad , target: bo },{source: ad , target: bp },{source: ad , target: bq },{source: ad , target: br },{source: ad , target: bs },{source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bo },{source: bl , target: bp },{source: bl , target: bq },{source: bl , target: br },{source: bl , target: bs },{source: bg , target: bl },{source: bg , target: bm },{source: bg , target: bn },{source: bg , target: bo },{source: bg , target: bp },{source: bg , target: bq },{source: bg , target: br },{source: bg , target: bs },{source: ab , target: ad },{source: ab , target: bl },{source: ab , target: bg },{source: ab , target: bm },{source: ab , target: bn },{source: ab , target: bo },{source: ab , target: bp },{source: ab , target: bq },{source: ab , target: br },{source: ab , target: bs },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bp },{source: bm , target: bq },{source: bm , target: br },{source: bm , target: bs },{source: bn , target: bo },{source: bn , target: bp },{source: bn , target: bq },{source: bn , target: br },{source: bn , target: bs },{source: bo , target: bp },{source: bo , target: bq },{source: bo , target: br },{source: bo , target: bs },{source: bp , target: bq },{source: bp , target: br },{source: bp , target: bs },{source: bq , target: br },{source: bq , target: bs },{source: br , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bl','bg','ab','bm','bn','bo','bp','bq','br','bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad af bt */ var  ad = nodes[0] ,af = {id: 'af', name:'unsichtbare_gute_geister'},bt = {id: 'bt', name:'homunculus'} ; nodes.push( af,bt ); links.push( {source: ad , target: bt },{source: ad , target: af },{source: af , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bt','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ab ae bf bg bh bi bj */ var  aa = {id: 'aa', name:'lieschen'},ab = {id: 'ab', name:'faust'},ae = {id: 'ae', name:'valentin'},bf = {id: 'bf', name:'bärbelchen'},bg = {id: 'bg', name:'dr'},bh = {id: 'bh', name:'pater_ecstaticus'},bi = {id: 'bi', name:'pater_profundus'},bj = {id: 'bj', name:'pater_seraphicus'} ; nodes.push( aa,ab,ae,bf,bg,bh,bi,bj ); links.push( {source: bg , target: bj },{source: bg , target: bh },{source: bg , target: bi },{source: ab , target: bg },{source: ab , target: ae },{source: ab , target: bj },{source: ab , target: bf },{source: ab , target: bh },{source: ab , target: bi },{source: aa , target: bg },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: bj },{source: aa , target: bf },{source: aa , target: bh },{source: aa , target: bi },{source: ae , target: bg },{source: ae , target: bj },{source: ae , target: bf },{source: ae , target: bh },{source: ae , target: bi },{source: bf , target: bg },{source: bf , target: bj },{source: bf , target: bh },{source: bf , target: bi },{source: bh , target: bj },{source: bh , target: bi },{source: bi , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.555555555555555556%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ab ae bc bf bg bh bi bj bu bv bw bx by bz ca cb cc cd */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2] ,bc = {id: 'bc', name:'chorus_mysticus'},bf = nodes[3] ,bg = nodes[4] ,bh = nodes[5] ,bi = nodes[6] ,bj = nodes[7] ,bu = {id: 'bu', name:'chor_a'},bv = {id: 'bv', name:'chor_b'},bw = {id: 'bw', name:'stiefel_a'},bx = {id: 'bx', name:'stiefel_b'},by = {id: 'by', name:'selige_knaben'},bz = {id: 'bz', name:'stiefelknecht'},ca = {id: 'ca', name:'null'},cb = {id: 'cb', name:'jünglingsgeister'},cc = {id: 'cc', name:'vollendetere_frauengeister'},cd = {id: 'cd', name:'greisengeister'} ; nodes.push( bc,bu,bv,bw,bx,by,bz,ca,cb,cc,cd ); links.push( {source: bu , target: bv },{source: bu , target: bw },{source: bu , target: bx },{source: bu , target: by },{source: bu , target: bz },{source: bu , target: ca },{source: bu , target: cb },{source: bu , target: cc },{source: bu , target: cd },{source: bv , target: bw },{source: bv , target: bx },{source: bv , target: by },{source: bv , target: bz },{source: bv , target: ca },{source: bv , target: cb },{source: bv , target: cc },{source: bv , target: cd },{source: aa , target: bu },{source: aa , target: bv },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: bg },{source: aa , target: bw },{source: aa , target: bx },{source: aa , target: bh },{source: aa , target: bj },{source: aa , target: bi },{source: aa , target: by },{source: aa , target: bz },{source: aa , target: bf },{source: aa , target: ca },{source: aa , target: cb },{source: aa , target: cc },{source: aa , target: cd },{source: aa , target: bc },{source: ae , target: bu },{source: ae , target: bv },{source: ae , target: bg },{source: ae , target: bw },{source: ae , target: bx },{source: ae , target: bh },{source: ae , target: bj },{source: ae , target: bi },{source: ae , target: by },{source: ae , target: bz },{source: ae , target: bf },{source: ae , target: ca },{source: ae , target: cb },{source: ae , target: cc },{source: ae , target: cd },{source: ae , target: bc },{source: ab , target: bu },{source: ab , target: bv },{source: ab , target: ae },{source: ab , target: bg },{source: ab , target: bw },{source: ab , target: bx },{source: ab , target: bh },{source: ab , target: bj },{source: ab , target: bi },{source: ab , target: by },{source: ab , target: bz },{source: ab , target: bf },{source: ab , target: ca },{source: ab , target: cb },{source: ab , target: cc },{source: ab , target: cd },{source: ab , target: bc },{source: bg , target: bu },{source: bg , target: bv },{source: bg , target: bw },{source: bg , target: bx },{source: bg , target: bh },{source: bg , target: bj },{source: bg , target: bi },{source: bg , target: by },{source: bg , target: bz },{source: bg , target: ca },{source: bg , target: cb },{source: bg , target: cc },{source: bg , target: cd },{source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bw , target: ca },{source: bw , target: cb },{source: bw , target: cc },{source: bw , target: cd },{source: bx , target: by },{source: bx , target: bz },{source: bx , target: ca },{source: bx , target: cb },{source: bx , target: cc },{source: bx , target: cd },{source: bh , target: bu },{source: bh , target: bv },{source: bh , target: bw },{source: bh , target: bx },{source: bh , target: bj },{source: bh , target: bi },{source: bh , target: by },{source: bh , target: bz },{source: bh , target: ca },{source: bh , target: cb },{source: bh , target: cc },{source: bh , target: cd },{source: bj , target: bu },{source: bj , target: bv },{source: bj , target: bw },{source: bj , target: bx },{source: bj , target: by },{source: bj , target: bz },{source: bj , target: ca },{source: bj , target: cb },{source: bj , target: cc },{source: bj , target: cd },{source: bi , target: bu },{source: bi , target: bv },{source: bi , target: bw },{source: bi , target: bx },{source: bi , target: bj },{source: bi , target: by },{source: bi , target: bz },{source: bi , target: ca },{source: bi , target: cb },{source: bi , target: cc },{source: bi , target: cd },{source: by , target: bz },{source: by , target: ca },{source: by , target: cb },{source: by , target: cc },{source: by , target: cd },{source: bz , target: ca },{source: bz , target: cb },{source: bz , target: cc },{source: bz , target: cd },{source: bf , target: bu },{source: bf , target: bv },{source: bf , target: bg },{source: bf , target: bw },{source: bf , target: bx },{source: bf , target: bh },{source: bf , target: bj },{source: bf , target: bi },{source: bf , target: by },{source: bf , target: bz },{source: bf , target: ca },{source: bf , target: cb },{source: bf , target: cc },{source: bf , target: cd },{source: ca , target: cb },{source: ca , target: cc },{source: ca , target: cd },{source: cb , target: cc },{source: cb , target: cd },{source: cc , target: cd },{source: bc , target: bu },{source: bc , target: bv },{source: bc , target: bg },{source: bc , target: bw },{source: bc , target: bx },{source: bc , target: bh },{source: bc , target: bj },{source: bc , target: bi },{source: bc , target: by },{source: bc , target: bz },{source: bc , target: bf },{source: bc , target: ca },{source: bc , target: cb },{source: bc , target: cc },{source: bc , target: cd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bu','bv','aa','ab','bg','bw','bx','bh','bj','bi','by','bz','bf','ca','cb','cc','cd','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae ce */ var  ae = nodes[0] ,ce = {id: 'ce', name:'bärbel'} ; nodes.push( ce ); links.push( {source: ae , target: ce } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Nachspiel'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.111111111111111111%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ae bk ce cf cg ch ci cj ck cl cm cn co */ var  ae = nodes[0] ,bk = {id: 'bk', name:'chor'},ce = nodes[1] ,cf = {id: 'cf', name:'denkerke'},cg = {id: 'cg', name:'grübelwitz'},ch = {id: 'ch', name:'brösamle'},ci = {id: 'ci', name:'hascherl'},cj = {id: 'cj', name:'deuterke'},ck = {id: 'ck', name:'scharrer'},cl = {id: 'cl', name:'karrer'},cm = {id: 'cm', name:'gesang_der_stoffhuber'},cn = {id: 'cn', name:'gesang_der_sinnhuber'},co = {id: 'co', name:'andere'} ; nodes.push( bk,cf,cg,ch,ci,cj,ck,cl,cm,cn,co ); links.push( {source: cf , target: cg },{source: cf , target: ch },{source: cf , target: ci },{source: cf , target: cj },{source: cf , target: ck },{source: cf , target: cl },{source: cf , target: cm },{source: cf , target: co },{source: cf , target: cn },{source: ae , target: cf },{source: ae , target: cg },{source: ae , target: ce },{source: ae , target: ch },{source: ae , target: ci },{source: ae , target: cj },{source: ae , target: ck },{source: ae , target: cl },{source: ae , target: cm },{source: ae , target: bk },{source: ae , target: co },{source: ae , target: cn },{source: cg , target: ch },{source: cg , target: ci },{source: cg , target: cj },{source: cg , target: ck },{source: cg , target: cl },{source: cg , target: cm },{source: cg , target: co },{source: cg , target: cn },{source: ce , target: cf },{source: ce , target: cg },{source: ce , target: ch },{source: ce , target: ci },{source: ce , target: cj },{source: ce , target: ck },{source: ce , target: cl },{source: ce , target: cm },{source: ce , target: co },{source: ce , target: cn },{source: ch , target: ci },{source: ch , target: cj },{source: ch , target: ck },{source: ch , target: cl },{source: ch , target: cm },{source: ch , target: co },{source: ch , target: cn },{source: ci , target: cj },{source: ci , target: ck },{source: ci , target: cl },{source: ci , target: cm },{source: ci , target: co },{source: ci , target: cn },{source: cj , target: ck },{source: cj , target: cl },{source: cj , target: cm },{source: cj , target: co },{source: cj , target: cn },{source: ck , target: cl },{source: ck , target: cm },{source: ck , target: co },{source: ck , target: cn },{source: cl , target: cm },{source: cl , target: co },{source: cl , target: cn },{source: cm , target: co },{source: cm , target: cn },{source: bk , target: cf },{source: bk , target: cg },{source: bk , target: ce },{source: bk , target: ch },{source: bk , target: ci },{source: bk , target: cj },{source: bk , target: ck },{source: bk , target: cl },{source: bk , target: cm },{source: bk , target: co },{source: bk , target: cn },{source: cn , target: co } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Nachspiel'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'cm','bk','cn' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae ce cf cg ch ci cj ck cl co cp cq */ var  ae = nodes[0] ,ce = nodes[1] ,cf = nodes[2] ,cg = nodes[3] ,ch = nodes[4] ,ci = nodes[5] ,cj = nodes[6] ,ck = nodes[7] ,cl = nodes[8] ,co = nodes[9] ,cp = {id: 'cp', name:'mr'},cq = {id: 'cq', name:'steinzänger'} ; nodes.push( cp,cq ); links.push( {source: cp , target: cq },{source: cf , target: cp },{source: cf , target: cl },{source: cf , target: ci },{source: cf , target: co },{source: cf , target: cq },{source: cf , target: cj },{source: cf , target: cg },{source: cf , target: ch },{source: cf , target: ck },{source: cf , target: co },{source: cf , target: co },{source: cf , target: co },{source: cf , target: co },{source: cl , target: cp },{source: cl , target: co },{source: cl , target: cq },{source: cl , target: co },{source: cl , target: co },{source: cl , target: co },{source: cl , target: co },{source: ci , target: cp },{source: ci , target: cl },{source: ci , target: co },{source: ci , target: cq },{source: ci , target: cj },{source: ci , target: ck },{source: ci , target: co },{source: ci , target: co },{source: ci , target: co },{source: ci , target: co },{source: co , target: cp },{source: co , target: cq },{source: ae , target: cp },{source: ae , target: cf },{source: ae , target: cl },{source: ae , target: ci },{source: ae , target: co },{source: ae , target: cq },{source: ae , target: cj },{source: ae , target: cg },{source: ae , target: ce },{source: ae , target: ch },{source: ae , target: ck },{source: ae , target: co },{source: ae , target: co },{source: ae , target: co },{source: ae , target: co },{source: cj , target: cp },{source: cj , target: cl },{source: cj , target: co },{source: cj , target: cq },{source: cj , target: ck },{source: cj , target: co },{source: cj , target: co },{source: cj , target: co },{source: cj , target: co },{source: cg , target: cp },{source: cg , target: cl },{source: cg , target: ci },{source: cg , target: co },{source: cg , target: cq },{source: cg , target: cj },{source: cg , target: ch },{source: cg , target: ck },{source: cg , target: co },{source: cg , target: co },{source: cg , target: co },{source: cg , target: co },{source: ce , target: cp },{source: ce , target: cf },{source: ce , target: cl },{source: ce , target: ci },{source: ce , target: co },{source: ce , target: cq },{source: ce , target: cj },{source: ce , target: cg },{source: ce , target: ch },{source: ce , target: ck },{source: ce , target: co },{source: ce , target: co },{source: ce , target: co },{source: ce , target: co },{source: ch , target: cp },{source: ch , target: cl },{source: ch , target: ci },{source: ch , target: co },{source: ch , target: cq },{source: ch , target: cj },{source: ch , target: ck },{source: ch , target: co },{source: ch , target: co },{source: ch , target: co },{source: ch , target: co },{source: ck , target: cp },{source: ck , target: cl },{source: ck , target: co },{source: ck , target: cq },{source: ck , target: co },{source: ck , target: co },{source: ck , target: co },{source: ck , target: co },{source: co , target: cp },{source: co , target: cq },{source: co , target: cp },{source: co , target: cq },{source: co , target: cp },{source: co , target: cq },{source: co , target: cp },{source: co , target: cq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Nachspiel'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'cp','cf','cl','ci','co','cq','cj','cg','ch','ck' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ae ce cr */ var  ae = nodes[0] ,ce = nodes[1] ,cr = {id: 'cr', name:'alter_herr'} ; nodes.push( cr ); links.push( {source: ce , target: cr },{source: ae , target: cr },{source: ae , target: ce } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Nachspiel'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.444444444444444444%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ae ce cr cs */ var  ae = nodes[0] ,ce = nodes[1] ,cr = nodes[2] ,cs = {id: 'cs', name:'unbekannter'} ; nodes.push( cs ); links.push( {source: ae , target: cs },{source: ae , target: cr },{source: ae , target: ce },{source: cr , target: cs },{source: ce , target: cs },{source: ce , target: cr } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Nachspiel'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.222222222222222222%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ad ae ce cr cs ct cu cv cw cx */ var  ad = {id: 'ad', name:'mephistopheles'},ae = nodes[0] ,ce = nodes[1] ,cr = nodes[2] ,cs = nodes[3] ,ct = {id: 'ct', name:'rufe_der_priester'},cu = {id: 'cu', name:'packan'},cv = {id: 'cv', name:'fuchs'},cw = {id: 'cw', name:'katzen'},cx = {id: 'cx', name:'philister'} ; nodes.push( ad,ct,cu,cv,cw,cx ); links.push( {source: ad , target: cs },{source: ad , target: ct },{source: ad , target: cu },{source: ad , target: cv },{source: ad , target: cw },{source: ad , target: cx },{source: ad , target: ce },{source: ad , target: ae },{source: ad , target: cr },{source: cs , target: ct },{source: cs , target: cu },{source: cs , target: cv },{source: cs , target: cw },{source: cs , target: cx },{source: ct , target: cu },{source: ct , target: cv },{source: ct , target: cw },{source: ct , target: cx },{source: cu , target: cv },{source: cu , target: cw },{source: cu , target: cx },{source: cv , target: cw },{source: cv , target: cx },{source: cw , target: cx },{source: ce , target: cs },{source: ce , target: ct },{source: ce , target: cu },{source: ce , target: cv },{source: ce , target: cw },{source: ce , target: cx },{source: ce , target: cr },{source: ae , target: cs },{source: ae , target: ct },{source: ae , target: cu },{source: ae , target: cv },{source: ae , target: cw },{source: ae , target: cx },{source: ae , target: ce },{source: ae , target: cr },{source: cr , target: cs },{source: cr , target: ct },{source: cr , target: cu },{source: cr , target: cv },{source: cr , target: cw },{source: cr , target: cx } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Nachspiel'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 175000);
