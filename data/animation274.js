setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'heymon'},ab = {id: 'ab', name:'martin'},ac = {id: 'ac', name:'konrad'},ad = {id: 'ad', name:'klaus'},ae = {id: 'ae', name:'ratgeber'},af = {id: 'af', name:'ein_ritter'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.666666666666666667%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ag ah ai aj ak al */ var  ag = {id: 'ag', name:'agnes'},ah = {id: 'ah', name:'anne'},ai = {id: 'ai', name:'anton'},aj = {id: 'aj', name:'leopold'},ak = {id: 'ak', name:'simon'},al = {id: 'al', name:'arzt'} ; nodes.push( ag,ah,ai,aj,ak,al ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.333333333333333333%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ag','ah','ai','aj','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad am an ao */ var  aa = {id: 'aa', name:'heymon'},ab = {id: 'ab', name:'martin'},ac = {id: 'ac', name:'konrad'},ad = {id: 'ad', name:'klaus'},am = {id: 'am', name:'peter'},an = {id: 'an', name:'knechte'},ao = {id: 'ao', name:'knecht'} ; nodes.push( aa,ab,ac,ad,am,an,ao ); links.push( {source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: ao },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: am },{source: ab , target: ao },{source: ab , target: an },{source: ab , target: ao },{source: ad , target: am },{source: ad , target: ao },{source: ad , target: an },{source: ad , target: ao },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ao },{source: am , target: ao },{source: am , target: an },{source: am , target: ao },{source: an , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab','ad','ac','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aj ao ap aq ar */ var  aj = {id: 'aj', name:'leopold'},ao = nodes[0] ,ap = {id: 'ap', name:'brigitte'},aq = {id: 'aq', name:'hans'},ar = {id: 'ar', name:'kaspar'} ; nodes.push( aj,ap,aq,ar ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.666666666666666667%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ap','ar','ao','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ag ah ai ak al am aq */ var  ag = {id: 'ag', name:'agnes'},ah = {id: 'ah', name:'anne'},ai = {id: 'ai', name:'anton'},ak = {id: 'ak', name:'simon'},al = {id: 'al', name:'arzt'},am = {id: 'am', name:'peter'},aq = nodes[0]  ; nodes.push( ag,ah,ai,ak,al,am ); links.push( {source: ag , target: am },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: aq },{source: am , target: aq },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: aq },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: aq },{source: ak , target: am },{source: ak , target: al },{source: ak , target: aq },{source: al , target: am },{source: al , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','am','ai','ah','ak','al','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'klaus'},ae = {id: 'ae', name:'ratgeber'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag ah ai ak am aq */ var  ag = {id: 'ag', name:'agnes'},ah = {id: 'ah', name:'anne'},ai = {id: 'ai', name:'anton'},ak = {id: 'ak', name:'simon'},am = {id: 'am', name:'peter'},aq = {id: 'aq', name:'hans'} ; nodes.push( ag,ah,ai,ak,am,aq ); links.push( {source: am , target: aq },{source: ak , target: aq },{source: ak , target: am },{source: ag , target: aq },{source: ag , target: am },{source: ag , target: ak },{source: ag , target: ai },{source: ag , target: ah },{source: ai , target: aq },{source: ai , target: am },{source: ai , target: ak },{source: ah , target: aq },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.666666666666666667%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aq','ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad ae ag ah am as at */ var  ad = {id: 'ad', name:'klaus'},ae = {id: 'ae', name:'ratgeber'},ag = nodes[0] ,ah = nodes[1] ,am = nodes[2] ,as = {id: 'as', name:'mechthilde'},at = {id: 'at', name:'chor'} ; nodes.push( ad,ae,as,at ); links.push( {source: as , target: at },{source: ag , target: as },{source: ag , target: am },{source: ag , target: ah },{source: ag , target: at },{source: am , target: as },{source: am , target: at },{source: ad , target: as },{source: ad , target: ag },{source: ad , target: am },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: at },{source: ae , target: as },{source: ae , target: ag },{source: ae , target: am },{source: ae , target: ah },{source: ae , target: at },{source: ah , target: as },{source: ah , target: am },{source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.333333333333333333%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'as','ag','am','ad','ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aj ap aq ar at */ var  aj = {id: 'aj', name:'leopold'},ap = {id: 'ap', name:'brigitte'},aq = {id: 'aq', name:'hans'},ar = {id: 'ar', name:'kaspar'},at = nodes[0]  ; nodes.push( aj,ap,aq,ar ); links.push( {source: aj , target: at },{source: aj , target: ar },{source: aj , target: ap },{source: aj , target: aq },{source: ar , target: at },{source: ap , target: at },{source: ap , target: ar },{source: ap , target: aq },{source: aq , target: at },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj','at','ar','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ad ae ag ah as */ var  ad = {id: 'ad', name:'klaus'},ae = {id: 'ae', name:'ratgeber'},ag = {id: 'ag', name:'agnes'},ah = {id: 'ah', name:'anne'},as = {id: 'as', name:'mechthilde'} ; nodes.push( ad,ae,ag,ah,as ); links.push( {source: ag , target: ah },{source: ag , target: as },{source: ah , target: as },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: as },{source: ad , target: ae },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ag ah as */ var  ag = nodes[0] ,ah = nodes[1] ,as = nodes[2]  ; /* nodes.push(); */ links.push( {source: ag , target: ah },{source: ag , target: as },{source: ah , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.333333333333333333%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag','ah','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ai ak */ var  ai = {id: 'ai', name:'anton'},ak = {id: 'ak', name:'simon'} ; nodes.push( ai,ak ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aj ap aq ar au */ var  aj = {id: 'aj', name:'leopold'},ap = {id: 'ap', name:'brigitte'},aq = {id: 'aq', name:'hans'},ar = {id: 'ar', name:'kaspar'},au = {id: 'au', name:'reinhold'} ; nodes.push( aj,ap,aq,ar,au ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: ap , target: au },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: au },{source: aq , target: ar },{source: aq , target: au },{source: ar , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.666666666666666667%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ap','aj','aq','ar','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ah am as */ var  ag = {id: 'ag', name:'agnes'},ah = {id: 'ah', name:'anne'},am = {id: 'am', name:'peter'},as = {id: 'as', name:'mechthilde'} ; nodes.push( ag,ah,am,as ); links.push( {source: ah , target: am },{source: ah , target: as },{source: ag , target: ah },{source: ag , target: am },{source: ag , target: as },{source: am , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.333333333333333333%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ad ae ag ah ai aj ak ap aq au */ var  ad = {id: 'ad', name:'klaus'},ae = {id: 'ae', name:'ratgeber'},ag = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'anton'},aj = {id: 'aj', name:'leopold'},ak = {id: 'ak', name:'simon'},ap = {id: 'ap', name:'brigitte'},aq = {id: 'aq', name:'hans'},au = {id: 'au', name:'reinhold'} ; nodes.push( ad,ae,ai,aj,ak,ap,aq,au ); links.push( {source: ak , target: ap },{source: ak , target: aq },{source: ak , target: au },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: au },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: au },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: au },{source: aj , target: ak },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: au },{source: ap , target: aq },{source: ap , target: au },{source: aq , target: au },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: au },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: au },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 70000);
