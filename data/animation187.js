setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'marie'},ab = {id: 'ab', name:'gottfried'},ac = {id: 'ac', name:'die_mutter'},ad = {id: 'ad', name:'spuller'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Actus primus quasi Prooemium';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ae = {id: 'ae', name:'goldsohn'},af = {id: 'af', name:'doktor'} ; nodes.push( ae,af ); links.push( {source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: af },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Actus secundus';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ae','ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ag ah */ var  aa = nodes[0] ,ag = {id: 'ag', name:'stanck'},ah = {id: 'ah', name:'strantz'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: aa , target: ag },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Actus tertius';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad ai */ var  ab = {id: 'ab', name:'gottfried'},ac = {id: 'ac', name:'die_mutter'},ad = {id: 'ad', name:'spuller'},ai = {id: 'ai', name:'der_fremde'} ; nodes.push( ab,ac,ad,ai ); links.push( {source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ai },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ai },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Actus mysticus';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac ah aj ak al */ var  aa = {id: 'aa', name:'marie'},ab = nodes[0] ,ac = nodes[1] ,ah = {id: 'ah', name:'strantz'},aj = {id: 'aj', name:'vogt'},ak = {id: 'ak', name:'vox_coelestis'},al = {id: 'al', name:'voces_de_profundis'} ; nodes.push( aa,ah,aj,ak,al ); links.push( {source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Actus quintus';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
