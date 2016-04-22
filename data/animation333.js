setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'lucentio'},ab = {id: 'ab', name:'chor'},ac = {id: 'ac', name:'baptista'},ad = {id: 'ad', name:'katharine'},ae = {id: 'ae', name:'nachbarinnen'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'bianca'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac af ag */ var  aa = nodes[0] ,ac = {id: 'ac', name:'baptista'},af = nodes[1] ,ag = {id: 'ag', name:'hortensio'} ; nodes.push( ac,ag ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ag */ var  aa = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ag ah ai */ var  ac = {id: 'ac', name:'baptista'},ag = nodes[0] ,ah = {id: 'ah', name:'petruchio'},ai = {id: 'ai', name:'grumio'} ; nodes.push( ac,ah,ai ); links.push( {source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ai','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ad af ag ah */ var  aa = {id: 'aa', name:'lucentio'},ad = {id: 'ad', name:'katharine'},af = {id: 'af', name:'bianca'},ag = nodes[0] ,ah = nodes[1]  ; nodes.push( aa,ad,af ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: af , target: ag },{source: af , target: ah },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ac ah */ var  aa = nodes[0] ,ac = {id: 'ac', name:'baptista'},ah = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ah },{source: aa , target: ac },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ac ad ag ah */ var  ab = {id: 'ab', name:'chor'},ac = nodes[0] ,ad = {id: 'ad', name:'katharine'},ag = {id: 'ag', name:'hortensio'},ah = nodes[1]  ; nodes.push( ab,ad,ag ); links.push( {source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ad },{source: ag , target: ah },{source: ad , target: ah },{source: ad , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ac','ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad ah */ var  ad = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ac ad ag ah */ var  aa = {id: 'aa', name:'lucentio'},ac = {id: 'ac', name:'baptista'},ad = nodes[0] ,ag = {id: 'ag', name:'hortensio'},ah = nodes[1]  ; nodes.push( aa,ac,ag ); links.push( {source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: ag , target: ah },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ad },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab ac ad af */ var  aa = nodes[0] ,ab = {id: 'ab', name:'chor'},ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'bianca'} ; nodes.push( ab,af ); links.push( {source: ad , target: af },{source: ac , target: ad },{source: ac , target: af },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ab },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa af ag */ var  aa = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'hortensio'} ; nodes.push( ag ); links.push( {source: aa , target: ag },{source: aa , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ac ad ag */ var  aa = nodes[0] ,ac = {id: 'ac', name:'baptista'},ad = {id: 'ad', name:'katharine'},ag = nodes[1]  ; nodes.push( ac,ad ); links.push( {source: ac , target: ag },{source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac ad af ag ah */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'bianca'},ag = nodes[3] ,ah = {id: 'ah', name:'petruchio'} ; nodes.push( af,ah ); links.push( {source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: af },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: af },{source: ag , target: ah },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ah','ad','ac','aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ag aj ak */ var  ab = {id: 'ab', name:'chor'},ag = nodes[0] ,aj = {id: 'aj', name:'haushofmeister'},ak = {id: 'ak', name:'haushälterin'} ; nodes.push( ab,aj,ak ); links.push( {source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ag },{source: aj , target: ak },{source: ag , target: aj },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab ac ad af ag ah ai */ var  aa = {id: 'aa', name:'lucentio'},ab = nodes[0] ,ac = {id: 'ac', name:'baptista'},ad = {id: 'ad', name:'katharine'},af = {id: 'af', name:'bianca'},ag = nodes[1] ,ah = {id: 'ah', name:'petruchio'},ai = {id: 'ai', name:'grumio'} ; nodes.push( aa,ac,ad,af,ah,ai ); links.push( {source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ai },{source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ai },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah','ac','aa','ag','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ai al */ var  ab = nodes[0] ,ai = nodes[1] ,al = {id: 'al', name:'chor_der_diener'} ; nodes.push( al ); links.push( {source: ai , target: al },{source: ai , target: al },{source: ab , target: al },{source: ab , target: ai },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'al','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad ah ai */ var  ad = {id: 'ad', name:'katharine'},ah = {id: 'ah', name:'petruchio'},ai = nodes[0]  ; nodes.push( ad,ah ); links.push( {source: ah , target: ai },{source: ad , target: ah },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad ah ai am */ var  ad = nodes[0] ,ah = {id: 'ah', name:'petruchio'},ai = {id: 'ai', name:'grumio'},am = {id: 'am', name:'schneider'} ; nodes.push( ah,ai,am ); links.push( {source: ai , target: am },{source: ad , target: ai },{source: ad , target: am },{source: ad , target: ah },{source: ah , target: ai },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ai','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ah */ var  ad = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ac ad af ah ai */ var  ab = {id: 'ab', name:'chor'},ac = {id: 'ac', name:'baptista'},ad = nodes[0] ,af = {id: 'af', name:'bianca'},ah = nodes[1] ,ai = {id: 'ai', name:'grumio'} ; nodes.push( ab,ac,af,ai ); links.push( {source: ah , target: ai },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: af },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: af },{source: af , target: ai },{source: af , target: ah },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 105000);
