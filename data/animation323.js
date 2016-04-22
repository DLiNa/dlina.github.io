setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'mutter'},ab = {id: 'ab', name:'franziska'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.761904761904761905%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'dr_hofmiller'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.52380952380952381%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab af ag */ var  ab = nodes[0] ,af = {id: 'af', name:'die_männerstimme'},ag = {id: 'ag', name:'veit_kunz'} ; nodes.push( af,ag ); links.push( {source: ab , target: af },{source: ab , target: af },{source: ab , target: ag },{source: af , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.285714285714285714%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ad ag ah ai aj ak al am an ao ap aq ar */ var  ab = nodes[0] ,ad = {id: 'ad', name:'dr_malkolm'},ag = nodes[1] ,ah = {id: 'ah', name:'gespensterschreck'},ai = {id: 'ai', name:'rohrdommel'},aj = {id: 'aj', name:'kiesgräber'},ak = {id: 'ak', name:'spreizfüsschen'},al = {id: 'al', name:'mausi'},am = {id: 'am', name:'kullmann'},an = {id: 'an', name:'chorus'},ao = {id: 'ao', name:'laurus_bein'},ap = {id: 'ap', name:'hagelmeier'},aq = {id: 'aq', name:'karaminka'},ar = {id: 'ar', name:'haglmeier'} ; nodes.push( ad,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ar },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweites Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.047619047619047619%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ai','aj','ad','ag','ak','al','am','an','ao','ap','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab as */ var  ab = nodes[0] ,as = {id: 'as', name:'sophie'} ; nodes.push( as ); links.push( {source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.809523809523809524%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab as at */ var  ab = nodes[0] ,as = nodes[1] ,at = {id: 'at', name:'lydia'} ; nodes.push( at ); links.push( {source: as , target: at },{source: ab , target: at },{source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.571428571428571429%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ag as at */ var  ab = nodes[0] ,ag = {id: 'ag', name:'veit_kunz'},as = nodes[1] ,at = nodes[2]  ; nodes.push( ag ); links.push( {source: ab , target: as },{source: ab , target: ag },{source: ab , target: at },{source: as , target: at },{source: ag , target: as },{source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.095238095238095238%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ac ag as au */ var  ab = nodes[0] ,ac = {id: 'ac', name:'dr_hofmiller'},ag = nodes[1] ,as = {id: 'as', name:'sophie'},au = {id: 'au', name:'drickens'} ; nodes.push( ac,as,au ); links.push( {source: as , target: au },{source: as , target: au },{source: ag , target: as },{source: ag , target: au },{source: ag , target: au },{source: ab , target: as },{source: ab , target: au },{source: ab , target: au },{source: ab , target: ag },{source: ab , target: ac },{source: ac , target: as },{source: ac , target: au },{source: ac , target: au },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.857142857142857143%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'as','au','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag av aw ax */ var  ag = nodes[0] ,av = {id: 'av', name:'pater'},aw = {id: 'aw', name:'herzogin'},ax = {id: 'ax', name:'herzog'} ; nodes.push( av,aw,ax ); links.push( {source: av , target: aw },{source: av , target: ax },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: ax },{source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Viertes Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.619047619047619048%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'av','ag','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ax ay */ var  ax = nodes[0] ,ay = {id: 'ay', name:'gislind'} ; nodes.push( ay ); links.push( {source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.380952380952380952%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ax */ var  ab = {id: 'ab', name:'franziska'},ax = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.142857142857142857%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = {id: 'ag', name:'veit_kunz'} ; nodes.push( ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.904761904761904762%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ag aw ax ay az ba bb bc */ var  ab = nodes[0] ,ag = nodes[1] ,aw = {id: 'aw', name:'herzogin'},ax = {id: 'ax', name:'herzog'},ay = {id: 'ay', name:'gislind'},az = {id: 'az', name:'das_kind'},ba = {id: 'ba', name:'der_hundekopf'},bb = {id: 'bb', name:'der_schweinekopf'},bc = {id: 'bc', name:'polizeipräsident'} ; nodes.push( aw,ax,ay,az,ba,bb,bc ); links.push( {source: ag , target: az },{source: ag , target: ay },{source: ag , target: ba },{source: ag , target: bb },{source: ag , target: ax },{source: ag , target: bc },{source: ag , target: aw },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: ab , target: ag },{source: ab , target: az },{source: ab , target: ay },{source: ab , target: ba },{source: ab , target: bb },{source: ab , target: ax },{source: ab , target: bc },{source: ab , target: aw },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: bb , target: bc },{source: ax , target: az },{source: ax , target: ay },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: aw , target: az },{source: aw , target: ay },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: ax },{source: aw , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechstes Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'az','ay','ba','bb','ax','bc','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebentes Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.428571428571428571%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ag bd be bf bg bh bi bj */ var  ab = nodes[0] ,ag = nodes[1] ,bd = {id: 'bd', name:'breitenbach'},be = {id: 'be', name:'fahrstuhl'},bf = {id: 'bf', name:'regisseur'},bg = {id: 'bg', name:'die_mädchen'},bh = {id: 'bh', name:'der_regisseur'},bi = {id: 'bi', name:'hohenkemnath'},bj = {id: 'bj', name:'der_diener'} ; nodes.push( bd,be,bf,bg,bh,bi,bj ); links.push( {source: ab , target: bd },{source: ab , target: ag },{source: ab , target: be },{source: ab , target: bf },{source: ab , target: bg },{source: ab , target: bh },{source: ab , target: bi },{source: ab , target: bj },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bh },{source: bd , target: bi },{source: bd , target: bj },{source: ag , target: bd },{source: ag , target: be },{source: ag , target: bf },{source: ag , target: bg },{source: ag , target: bh },{source: ag , target: bi },{source: ag , target: bj },{source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: be , target: bi },{source: be , target: bj },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bi },{source: bf , target: bj },{source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bh , target: bi },{source: bh , target: bj },{source: bi , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '8. Bild'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtes Bild';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.190476190476190476%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'bd','ag','be','bf','bg','bh','bi','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ae bk */ var  ab = nodes[0] ,ae = {id: 'ae', name:'dr_hornstein'},bk = {id: 'bk', name:'veitralf'} ; nodes.push( ae,bk ); links.push( {source: ae , target: bk },{source: ab , target: ae },{source: ab , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.952380952380952381%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = {id: 'ag', name:'veit_kunz'} ; nodes.push( ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.714285714285714286%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ag bd */ var  ab = nodes[0] ,ag = nodes[1] ,bd = {id: 'bd', name:'breitenbach'} ; nodes.push( bd ); links.push( {source: ab , target: bd },{source: ab , target: ag },{source: ag , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.47619047619047619%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab bd */ var  ab = nodes[0] ,bd = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Bild'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.238095238095238095%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ab bk bl */ var  ab = nodes[0] ,bk = {id: 'bk', name:'veitralf'},bl = {id: 'bl', name:'almer'} ; nodes.push( bk,bl ); links.push( {source: bk , target: bl },{source: ab , target: bk },{source: ab , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Bild'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 100000);
