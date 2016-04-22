setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = {id: 'aa', name:'chor_der_mädchen'},ab = {id: 'ab', name:'chor_der_jünglinge'},ac = {id: 'ac', name:'rupert'},ad = {id: 'ad', name:'ottokar'},ae = {id: 'ae', name:'eustache'},af = {id: 'af', name:'jeronimus'},ag = {id: 'ag', name:'kirchenvogt'},ah = {id: 'ah', name:'der_diener'},ai = {id: 'ai', name:'johann'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae','ag','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* af aj ak al am an ao ap */ var  af = nodes[0] ,aj = {id: 'aj', name:'sylvius'},ak = {id: 'ak', name:'agnes'},al = {id: 'al', name:'gertrude'},am = {id: 'am', name:'sylvester'},an = {id: 'an', name:'gärtner'},ao = {id: 'ao', name:'ein_knappe'},ap = {id: 'ap', name:'aldöbern'} ; nodes.push( aj,ak,al,am,an,ao,ap ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aj','al','am','an','ao','ap','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad ai ak */ var  ad = {id: 'ad', name:'ottokar'},ai = {id: 'ai', name:'johann'},ak = nodes[0]  ; nodes.push( ad,ai ); links.push( {source: ad , target: ak },{source: ad , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ak','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* af al am aq */ var  af = {id: 'af', name:'jeronimus'},al = {id: 'al', name:'gertrude'},am = {id: 'am', name:'sylvester'},aq = {id: 'aq', name:'theistiner'} ; nodes.push( af,al,am,aq ); links.push( {source: al , target: am },{source: al , target: aq },{source: am , target: aq },{source: af , target: al },{source: af , target: am },{source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* af ah ai ak al am */ var  af = nodes[0] ,ah = {id: 'ah', name:'der_diener'},ai = {id: 'ai', name:'johann'},ak = {id: 'ak', name:'agnes'},al = nodes[1] ,am = nodes[2]  ; nodes.push( ah,ai,ak ); links.push( {source: ak , target: am },{source: ak , target: al },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: al },{source: af , target: ak },{source: af , target: ai },{source: af , target: am },{source: af , target: al },{source: af , target: ah },{source: al , target: am },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: am },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ai','af','am','al','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad ak */ var  ad = {id: 'ad', name:'ottokar'},ak = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ae af ah ar as at */ var  ac = {id: 'ac', name:'rupert'},ae = {id: 'ae', name:'eustache'},af = {id: 'af', name:'jeronimus'},ah = {id: 'ah', name:'der_diener'},ar = {id: 'ar', name:'santing'},as = {id: 'as', name:'der_wanderer'},at = {id: 'at', name:'zweiter_wanderer'} ; nodes.push( ac,ae,af,ah,ar,as,at ); links.push( {source: ac , target: ae },{source: ac , target: ar },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: as },{source: ac , target: at },{source: ac , target: af },{source: ae , target: ar },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: as },{source: ae , target: at },{source: ae , target: af },{source: ar , target: as },{source: ar , target: at },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: as , target: at },{source: af , target: ar },{source: af , target: ah },{source: af , target: ah },{source: af , target: as },{source: af , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'as','at','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ae ah ar au */ var  ac = nodes[0] ,ae = nodes[1] ,ah = nodes[2] ,ar = nodes[3] ,au = {id: 'au', name:'die_kammerzofe'} ; nodes.push( au ); links.push( {source: ac , target: ar },{source: ac , target: ae },{source: ac , target: au },{source: ac , target: ah },{source: ar , target: au },{source: ae , target: ar },{source: ae , target: au },{source: ae , target: ah },{source: ah , target: ar },{source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ac','ar','ae','au','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ak al am aq */ var  ak = {id: 'ak', name:'agnes'},al = {id: 'al', name:'gertrude'},am = {id: 'am', name:'sylvester'},aq = {id: 'aq', name:'theistiner'} ; nodes.push( ak,al,am,aq ); links.push( {source: al , target: am },{source: al , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: aq },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'al','ak','am','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ad av aw */ var  ad = {id: 'ad', name:'ottokar'},av = {id: 'av', name:'barnabe'},aw = {id: 'aw', name:'ursula'} ; nodes.push( ad,av,aw ); links.push( {source: av , target: aw },{source: ad , target: av },{source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aw','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ar av */ var  ac = {id: 'ac', name:'rupert'},ar = {id: 'ar', name:'santing'},av = nodes[0]  ; nodes.push( ac,ar ); links.push( {source: ar , target: av },{source: ac , target: ar },{source: ac , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ar','ac','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ad ae ax */ var  ad = {id: 'ad', name:'ottokar'},ae = {id: 'ae', name:'eustache'},ax = {id: 'ax', name:'fintenring'} ; nodes.push( ad,ae,ax ); links.push( {source: ad , target: ax },{source: ad , target: ae },{source: ae , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac ad ae ai aj ak al am aq ar av aw ay */ var  ac = {id: 'ac', name:'rupert'},ad = nodes[0] ,ae = nodes[1] ,ai = {id: 'ai', name:'johann'},aj = {id: 'aj', name:'sylvius'},ak = {id: 'ak', name:'agnes'},al = {id: 'al', name:'gertrude'},am = {id: 'am', name:'sylvester'},aq = {id: 'aq', name:'theistiner'},ar = {id: 'ar', name:'santing'},av = {id: 'av', name:'barnabe'},aw = {id: 'aw', name:'ursula'},ay = {id: 'ay', name:'ein_ritter'} ; nodes.push( ac,ai,aj,ak,al,am,aq,ar,av,aw,ay ); links.push( {source: ak , target: av },{source: ak , target: ar },{source: ak , target: am },{source: ak , target: aq },{source: ak , target: ay },{source: ak , target: al },{source: ak , target: aw },{source: av , target: ay },{source: av , target: aw },{source: ad , target: ak },{source: ad , target: av },{source: ad , target: ar },{source: ad , target: am },{source: ad , target: aq },{source: ad , target: ay },{source: ad , target: al },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: aw },{source: ac , target: ak },{source: ac , target: av },{source: ac , target: ad },{source: ac , target: ar },{source: ac , target: am },{source: ac , target: aq },{source: ac , target: ay },{source: ac , target: al },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: aw },{source: ar , target: av },{source: ar , target: ay },{source: ar , target: aw },{source: am , target: av },{source: am , target: ar },{source: am , target: aq },{source: am , target: ay },{source: am , target: aw },{source: aq , target: av },{source: aq , target: ar },{source: aq , target: ay },{source: aq , target: aw },{source: al , target: av },{source: al , target: ar },{source: al , target: am },{source: al , target: aq },{source: al , target: ay },{source: al , target: aw },{source: ae , target: ak },{source: ae , target: av },{source: ae , target: ar },{source: ae , target: am },{source: ae , target: aq },{source: ae , target: ay },{source: ae , target: al },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: aw },{source: aj , target: ak },{source: aj , target: av },{source: aj , target: ar },{source: aj , target: am },{source: aj , target: aq },{source: aj , target: ay },{source: aj , target: al },{source: aj , target: aw },{source: ai , target: ak },{source: ai , target: av },{source: ai , target: ar },{source: ai , target: am },{source: ai , target: aq },{source: ai , target: ay },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: aw },{source: aw , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 60000);
