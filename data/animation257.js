setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'lux_st_st'},ab = {id: 'ab', name:'adam'},ac = {id: 'ac', name:'magarethe'},ad = {id: 'ad', name:'schneider'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ad },{source: aa , target: ac },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad },{source: ac , target: ad },{source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 1. Introduktion'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 1. Introduktion.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.692307692307692308%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 2. Arie'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 2. Arie.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.384615384615384615%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 3. Arie'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 3. Arie.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.076923076923076923%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'lux_st_st'},ae = {id: 'ae', name:'suschen'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 4. Arie des Suschen'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 4. Arie des Suschen.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.769230769230769231%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ae af */ var  aa = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'joseph'} ; nodes.push( af ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 5. Duett'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 5. Duett.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.461538461538461538%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ae af ag ah */ var  aa = nodes[0] ,ab = {id: 'ab', name:'adam'},ae = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'die_bauern'},ah = {id: 'ah', name:'schulmeister'} ; nodes.push( ab,ag,ah ); links.push( {source: ag , target: ah },{source: ag , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ah },{source: af , target: ag },{source: af , target: ag },{source: af , target: ah },{source: af , target: ah },{source: ag , target: ah },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ah },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 6. Septett'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 6. Septett.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.153846153846153846%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ae af ag ah ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = nodes[5] ,ai = {id: 'ai', name:'thomas'},aj = {id: 'aj', name:'philipp'} ; nodes.push( ai,aj ); links.push( {source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ag },{source: ah , target: ai },{source: ah , target: aj },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ag },{source: ai , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 7. Terzett'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 7. Terzett.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.846153846153846154%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ah','ai','aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ac ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'magarethe'},ae = nodes[2]  ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 8. Arie'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 8. Arie.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.538461538461538462%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 9. Arie'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 9. Arie.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.230769230769230769%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ab ae af ah */ var  aa = nodes[0] ,ab = {id: 'ab', name:'adam'},ae = nodes[1] ,af = {id: 'af', name:'joseph'},ah = {id: 'ah', name:'schulmeister'} ; nodes.push( ab,af,ah ); links.push( {source: ae , target: af },{source: ae , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ab },{source: af , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 10. Arie'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 10. Arie.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.923076923076923077%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab af ag ah ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'die_bauern'},ah = nodes[3] ,ai = {id: 'ai', name:'thomas'},aj = {id: 'aj', name:'philipp'} ; nodes.push( ag,ai,aj ); links.push( {source: aa , target: af },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: ah },{source: af , target: aj },{source: af , target: ai },{source: af , target: ag },{source: af , target: ah },{source: ab , target: af },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: ah },{source: ai , target: aj },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ah },{source: ah , target: aj },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 11. Duett'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 11. Duett.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.615384615384615385%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aj','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab af ah */ var  aa = nodes[0] ,ab = nodes[1] ,af = nodes[2] ,ah = nodes[3]  ; /* nodes.push(); */ links.push( {source: af , target: ah },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ab },{source: ab , target: ah },{source: ab , target: af },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 12. Lied'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 12. Lied.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.307692307692307692%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ah','af','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ak */ var  ak = {id: 'ak', name:'chor'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Nr. 13. Schluß-Chor'; var scene = document.getElementById('scene');scene.innerHTML = 'Nr. 13. Schluß-Chor.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 60000);
