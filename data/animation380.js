setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'der_schulmeister'},ab = {id: 'ab', name:'tobies'},ac = {id: 'ac', name:'gottliebchen'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'der_teufel'},ae = {id: 'ae', name:'der_erste_naturhistoriker'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad ae af ag ah ai aj ak al am */ var  aa = {id: 'aa', name:'der_schulmeister'},ac = {id: 'ac', name:'gottliebchen'},ad = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'zweiter_naturhistoriker'},ag = {id: 'ag', name:'dritter_naturhistoriker'},ah = {id: 'ah', name:'vierter_naturhistoriker'},ai = {id: 'ai', name:'rattengift'},aj = {id: 'aj', name:'liddy'},ak = {id: 'ak', name:'wernthal'},al = {id: 'al', name:'baron'},am = {id: 'am', name:'ein_diener'} ; nodes.push( aa,ac,af,ag,ah,ai,aj,ak,al,am ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ad },{source: aa , target: am },{source: aa , target: ac },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','af','ag','ah','ai','aj','ak','al','am','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad an ao */ var  ad = nodes[0] ,an = {id: 'an', name:'der_bediente'},ao = {id: 'ao', name:'schmied'} ; nodes.push( an,ao ); links.push( {source: ad , target: an },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ao },{source: an , target: ao },{source: an , target: ao },{source: ad , target: an },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ao },{source: an , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ak ap */ var  ad = nodes[0] ,ak = {id: 'ak', name:'wernthal'},ap = {id: 'ap', name:'freiherr'} ; nodes.push( ak,ap ); links.push( {source: ad , target: ap },{source: ad , target: ak },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ap','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad ai */ var  ad = nodes[0] ,ai = {id: 'ai', name:'rattengift'} ; nodes.push( ai ); links.push( {source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab aq */ var  aa = {id: 'aa', name:'der_schulmeister'},ab = {id: 'ab', name:'tobies'},aq = {id: 'aq', name:'mollfels'} ; nodes.push( aa,ab,aq ); links.push( {source: aa , target: aq },{source: aa , target: ab },{source: aa , target: aq },{source: aa , target: ab },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aj al an aq */ var  aj = {id: 'aj', name:'liddy'},al = {id: 'al', name:'baron'},an = {id: 'an', name:'der_bediente'},aq = nodes[0]  ; nodes.push( aj,al,an ); links.push( {source: al , target: an },{source: al , target: an },{source: al , target: aq },{source: aj , target: al },{source: aj , target: an },{source: aj , target: an },{source: aj , target: aq },{source: an , target: aq },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'al','aj','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac ai ao aq ar */ var  aa = {id: 'aa', name:'der_schulmeister'},ac = {id: 'ac', name:'gottliebchen'},ai = {id: 'ai', name:'rattengift'},ao = {id: 'ao', name:'schmied'},aq = nodes[0] ,ar = {id: 'ar', name:'gretchen'} ; nodes.push( aa,ac,ai,ao,ar ); links.push( {source: ao , target: ar },{source: ao , target: aq },{source: aa , target: ao },{source: aa , target: ar },{source: aa , target: ai },{source: aa , target: aq },{source: aa , target: ac },{source: ai , target: ao },{source: ai , target: ar },{source: ai , target: aq },{source: aq , target: ar },{source: ac , target: ao },{source: ac , target: ar },{source: ac , target: ai },{source: ac , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ao','ar','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ae af ag ah ai aq */ var  aa = nodes[0] ,ae = {id: 'ae', name:'der_erste_naturhistoriker'},af = {id: 'af', name:'zweiter_naturhistoriker'},ag = {id: 'ag', name:'dritter_naturhistoriker'},ah = {id: 'ah', name:'vierter_naturhistoriker'},ai = nodes[1] ,aq = nodes[2]  ; nodes.push( ae,af,ag,ah ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: aq },{source: ae , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: aq },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ai },{source: ah , target: aq },{source: ah , target: ai },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: aq },{source: aa , target: ai },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae','af','ag','ah','aa','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = {id: 'aj', name:'liddy'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ad ap aq as */ var  aa = {id: 'aa', name:'der_schulmeister'},ad = {id: 'ad', name:'der_teufel'},ap = {id: 'ap', name:'freiherr'},aq = {id: 'aq', name:'mollfels'},as = {id: 'as', name:'die_spiessgesellen'} ; nodes.push( aa,ad,ap,aq,as ); links.push( {source: aa , target: ad },{source: aa , target: ap },{source: aa , target: as },{source: aa , target: aq },{source: ad , target: ap },{source: ad , target: as },{source: ad , target: aq },{source: ap , target: as },{source: ap , target: aq },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ad ai aj al am an ap aq at au av aw */ var  aa = nodes[0] ,ad = nodes[1] ,ai = {id: 'ai', name:'rattengift'},aj = {id: 'aj', name:'liddy'},al = {id: 'al', name:'baron'},am = {id: 'am', name:'ein_diener'},an = {id: 'an', name:'der_bediente'},ap = nodes[2] ,aq = nodes[3] ,at = {id: 'at', name:'der_hauswirt'},au = {id: 'au', name:'des_teufels_grossmutter'},av = {id: 'av', name:'nero'},aw = {id: 'aw', name:'grabbe'} ; nodes.push( ai,aj,al,am,an,at,au,av,aw ); links.push( {source: aj , target: al },{source: aj , target: at },{source: aj , target: aq },{source: aj , target: ap },{source: aj , target: am },{source: aj , target: au },{source: aj , target: av },{source: aj , target: av },{source: aj , target: an },{source: aj , target: aw },{source: al , target: at },{source: al , target: aq },{source: al , target: ap },{source: al , target: am },{source: al , target: au },{source: al , target: av },{source: al , target: av },{source: al , target: an },{source: al , target: aw },{source: at , target: au },{source: at , target: av },{source: at , target: av },{source: at , target: aw },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: at },{source: ai , target: aq },{source: ai , target: ap },{source: ai , target: am },{source: ai , target: au },{source: ai , target: av },{source: ai , target: av },{source: ai , target: an },{source: ai , target: aw },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: av },{source: aq , target: aw },{source: ap , target: at },{source: ap , target: aq },{source: ap , target: au },{source: ap , target: av },{source: ap , target: av },{source: ap , target: aw },{source: aa , target: aj },{source: aa , target: al },{source: aa , target: at },{source: aa , target: ai },{source: aa , target: aq },{source: aa , target: ap },{source: aa , target: ad },{source: aa , target: am },{source: aa , target: au },{source: aa , target: av },{source: aa , target: av },{source: aa , target: an },{source: aa , target: aw },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: at },{source: ad , target: ai },{source: ad , target: aq },{source: ad , target: ap },{source: ad , target: am },{source: ad , target: au },{source: ad , target: av },{source: ad , target: av },{source: ad , target: an },{source: ad , target: aw },{source: am , target: at },{source: am , target: aq },{source: am , target: ap },{source: am , target: au },{source: am , target: av },{source: am , target: av },{source: am , target: an },{source: am , target: aw },{source: au , target: av },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: av , target: aw },{source: an , target: at },{source: an , target: aq },{source: an , target: ap },{source: an , target: au },{source: an , target: av },{source: an , target: av },{source: an , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 60000);
