setTimeout(function() { console.log('load1');nodes.sort(compare); /* ab ac ai */ var  ab = {id: 'ab', name:'therese'},ac = {id: 'ac', name:'christine'},ai = {id: 'ai', name:'chor_der_mädchen'} ; nodes.push( ab,ac,ai ); links.push( {source: ab , target: ai },{source: ab , target: ac },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'bombardon'},ae = {id: 'ae', name:'gontran'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ad ae */ var  ab = {id: 'ab', name:'therese'},ad = nodes[0] ,ae = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac ad ae af */ var  ab = nodes[0] ,ac = {id: 'ac', name:'christine'},ad = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'colas'} ; nodes.push( ac,af ); links.push( {source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ae , target: af },{source: ad , target: af },{source: ad , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ac ae af ag ah */ var  aa = {id: 'aa', name:'der_chor'},ab = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = {id: 'ag', name:'chor_der_männer'},ah = {id: 'ah', name:'chor_der_frauen'} ; nodes.push( aa,ag,ah ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: af , target: ag },{source: af , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ac ad ae af ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'bombardon'},ae = nodes[3] ,af = nodes[4] ,ai = {id: 'ai', name:'chor_der_mädchen'},aj = {id: 'aj', name:'chor_der_soldaten'} ; nodes.push( ad,ai,aj ); links.push( {source: af , target: ai },{source: af , target: aj },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ae },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ae },{source: ai , target: aj },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ae },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad','ac','ai','aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ae af */ var  ab = nodes[0] ,ae = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: af },{source: ab , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ac ae af */ var  ab = {id: 'ab', name:'therese'},ac = {id: 'ac', name:'christine'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( ab,ac ); links.push( {source: ac , target: ae },{source: ac , target: af },{source: ae , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ac af */ var  ab = {id: 'ab', name:'therese'},ac = nodes[0] ,af = {id: 'af', name:'colas'} ; nodes.push( ab,af ); links.push( {source: ab , target: af },{source: ab , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ac ad ae af */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'bombardon'},ae = {id: 'ae', name:'gontran'},af = nodes[2]  ; nodes.push( ad,ae ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'der_chor'},ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = nodes[4]  ; nodes.push( aa ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ae },{source: ae , target: af },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 65000);
