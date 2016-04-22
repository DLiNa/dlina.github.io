setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'sirenen'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.090909090909090909%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = {id: 'ab', name:'venus'},ac = {id: 'ac', name:'tannhäuser'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.181818181818181818%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad ae ap */ var  ac = nodes[0] ,ad = {id: 'ad', name:'der_hirt'},ae = {id: 'ae', name:'die_älteren_pilger'},ap = {id: 'ap', name:'gesang_der_jüngeren_pilger'} ; nodes.push( ad,ae,ap ); links.push( {source: ad , target: ae },{source: ad , target: ap },{source: ae , target: ap },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.272727272727272727%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ae','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac af ag ah ai */ var  ac = nodes[0] ,af = {id: 'af', name:'landgraf'},ag = {id: 'ag', name:'walther_von_der_vogelweide'},ah = {id: 'ah', name:'biterolf'},ai = {id: 'ai', name:'wolfram'} ; nodes.push( af,ag,ah,ai ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: af },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.363636363636363636%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af','ag','ah','ai','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'elisabeth'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.454545454545454545%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ai aj */ var  ac = {id: 'ac', name:'tannhäuser'},ai = {id: 'ai', name:'wolfram'},aj = nodes[0]  ; nodes.push( ac,ai ); links.push( {source: ai , target: aj },{source: ac , target: ai },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.545454545454545455%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* af aj */ var  af = {id: 'af', name:'landgraf'},aj = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.636363636363636364%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac af ag ah ai aj ak al am an ap */ var  ac = {id: 'ac', name:'tannhäuser'},af = nodes[0] ,ag = {id: 'ag', name:'walther_von_der_vogelweide'},ah = {id: 'ah', name:'biterolf'},ai = {id: 'ai', name:'wolfram'},aj = nodes[1] ,ak = {id: 'ak', name:'chor'},al = {id: 'al', name:'die_ritter'},am = {id: 'am', name:'vier_edelknaben'},an = {id: 'an', name:'die_edelfrauen'},ap = {id: 'ap', name:'gesang_der_jüngeren_pilger'} ; nodes.push( ac,ag,ah,ai,ak,al,am,an,ap ); links.push( {source: ak , target: al },{source: ak , target: an },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ap },{source: af , target: ak },{source: af , target: al },{source: af , target: an },{source: af , target: am },{source: af , target: ai },{source: af , target: al },{source: af , target: an },{source: af , target: ag },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj },{source: af , target: ap },{source: al , target: an },{source: al , target: am },{source: al , target: an },{source: al , target: ap },{source: an , target: ap },{source: am , target: an },{source: am , target: an },{source: am , target: ap },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: an },{source: ai , target: am },{source: ai , target: al },{source: ai , target: an },{source: ai , target: aj },{source: ai , target: ap },{source: al , target: an },{source: al , target: am },{source: al , target: an },{source: al , target: ap },{source: an , target: ap },{source: ac , target: ak },{source: ac , target: af },{source: ac , target: al },{source: ac , target: an },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: an },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ap },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: an },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ap },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: an },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: an },{source: ah , target: aj },{source: ah , target: ap },{source: af , target: ak },{source: af , target: al },{source: af , target: an },{source: af , target: am },{source: af , target: ai },{source: af , target: al },{source: af , target: an },{source: af , target: ag },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj },{source: af , target: ap },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: an },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ap },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: an },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.727272727272727273%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak','af','al','an','am','ac','ag','ah','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae ai aj */ var  ae = {id: 'ae', name:'die_älteren_pilger'},ai = nodes[0] ,aj = nodes[1]  ; nodes.push( ae ); links.push( {source: ai , target: aj },{source: ae , target: ai },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.818181818181818182%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.909090909090909091%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ac ai ao ap */ var  ab = {id: 'ab', name:'venus'},ac = {id: 'ac', name:'tannhäuser'},ai = nodes[0] ,ao = {id: 'ao', name:'männergesang'},ap = {id: 'ap', name:'gesang_der_jüngeren_pilger'} ; nodes.push( ab,ac,ao,ap ); links.push( {source: ac , target: ai },{source: ac , target: ao },{source: ac , target: ap },{source: ai , target: ao },{source: ai , target: ap },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ao },{source: ab , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 50000);
