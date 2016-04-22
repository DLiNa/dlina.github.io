setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ai */ var  aa = {id: 'aa', name:'frauen'},ai = {id: 'ai', name:'einzelne_männer'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.555555555555555556%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ai','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'hirams_stimme'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad ae */ var  ac = nodes[0] ,ad = {id: 'ad', name:'volk'},ae = {id: 'ae', name:'wolf'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad ae af */ var  ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'teuts_stimme'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = {id: 'ag', name:'theoda'} ; nodes.push( ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.777777777777777778%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ac ad af ah ai */ var  aa = {id: 'aa', name:'frauen'},ac = {id: 'ac', name:'hirams_stimme'},ad = {id: 'ad', name:'volk'},af = nodes[0] ,ah = {id: 'ah', name:'velleda'},ai = {id: 'ai', name:'einzelne_männer'} ; nodes.push( aa,ac,ad,ah,ai ); links.push( {source: ac , target: ad },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ai },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ai },{source: af , target: ah },{source: af , target: ai },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac','ad','af','aa','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'wolf'},ag = {id: 'ag', name:'theoda'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.888888888888888889%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ac ad af ai */ var  aa = {id: 'aa', name:'frauen'},ac = {id: 'ac', name:'hirams_stimme'},ad = {id: 'ad', name:'volk'},af = {id: 'af', name:'teuts_stimme'},ai = {id: 'ai', name:'einzelne_männer'} ; nodes.push( aa,ac,ad,af,ai ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ac , target: ai },{source: af , target: ai },{source: ad , target: af },{source: ad , target: ai },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ad ae af ag aj ak al an ao */ var  ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'wolf'},af = nodes[2] ,ag = {id: 'ag', name:'theoda'},aj = {id: 'aj', name:'krieger'},ak = {id: 'ak', name:'könig'},al = {id: 'al', name:'ein_junger_krieger'},an = {id: 'an', name:'ein_krieger'},ao = {id: 'ao', name:'ein_anderer'} ; nodes.push( ae,ag,aj,ak,al,an,ao ); links.push( {source: aj , target: al },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ak },{source: al , target: an },{source: al , target: ao },{source: an , target: ao },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: ag },{source: ad , target: ae },{source: af , target: aj },{source: af , target: al },{source: af , target: an },{source: af , target: ao },{source: af , target: ak },{source: af , target: ag },{source: ac , target: aj },{source: ac , target: al },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: ae },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ao },{source: ag , target: aj },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ak },{source: ae , target: aj },{source: ae , target: al },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj','al','an','ao','af','ak','ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = {id: 'af', name:'teuts_stimme'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.111111111111111111%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'frauen'},ad = {id: 'ad', name:'volk'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ac ad af ai aj al am an ao */ var  aa = nodes[0] ,ac = {id: 'ac', name:'hirams_stimme'},ad = nodes[1] ,af = {id: 'af', name:'teuts_stimme'},ai = {id: 'ai', name:'einzelne_männer'},aj = {id: 'aj', name:'krieger'},al = {id: 'al', name:'ein_junger_krieger'},am = {id: 'am', name:'priester'},an = {id: 'an', name:'ein_krieger'},ao = {id: 'ao', name:'ein_anderer'} ; nodes.push( ac,af,ai,aj,al,am,an,ao ); links.push( {source: ac , target: al },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: aj },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ai },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: af , target: al },{source: af , target: am },{source: af , target: aj },{source: af , target: an },{source: af , target: ao },{source: af , target: ai },{source: ad , target: al },{source: ad , target: af },{source: ad , target: am },{source: ad , target: aj },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ai },{source: am , target: an },{source: am , target: ao },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: am },{source: aa , target: aj },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ai },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: an , target: ao },{source: ai , target: al },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.222222222222222222%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac','af','ad','am','aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ae aj al an ao */ var  ae = {id: 'ae', name:'wolf'},aj = nodes[0] ,al = nodes[1] ,an = nodes[2] ,ao = nodes[3]  ; nodes.push( ae ); links.push( {source: ae , target: an },{source: ae , target: ao },{source: ae , target: aj },{source: ae , target: al },{source: an , target: ao },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: al },{source: al , target: an },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae','an','ao','aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'teuts_stimme'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* af ag ap */ var  af = nodes[0] ,ag = {id: 'ag', name:'theoda'},ap = {id: 'ap', name:'eine_stimme'} ; nodes.push( ag,ap ); links.push( {source: af , target: ap },{source: af , target: ag },{source: ag , target: ap },{source: af , target: ap },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ap','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac af */ var  ac = {id: 'ac', name:'hirams_stimme'},af = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.444444444444444444%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ad ae af ag aj ak al am an ao */ var  aa = {id: 'aa', name:'frauen'},ad = {id: 'ad', name:'volk'},ae = {id: 'ae', name:'wolf'},af = nodes[0] ,ag = {id: 'ag', name:'theoda'},aj = {id: 'aj', name:'krieger'},ak = {id: 'ak', name:'könig'},al = {id: 'al', name:'ein_junger_krieger'},am = {id: 'am', name:'priester'},an = {id: 'an', name:'ein_krieger'},ao = {id: 'ao', name:'ein_anderer'} ; nodes.push( aa,ad,ae,ag,aj,ak,al,am,an,ao ); links.push( {source: ae , target: am },{source: ae , target: aj },{source: ae , target: al },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: am },{source: am , target: an },{source: am , target: ao },{source: aa , target: ae },{source: aa , target: am },{source: aa , target: aj },{source: aa , target: al },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ak },{source: aa , target: am },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: am },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: am },{source: an , target: ao },{source: ad , target: ae },{source: ad , target: am },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ak },{source: ad , target: am },{source: af , target: am },{source: af , target: aj },{source: af , target: al },{source: af , target: an },{source: af , target: ao },{source: af , target: ag },{source: af , target: ak },{source: af , target: am },{source: ag , target: am },{source: ag , target: aj },{source: ag , target: al },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ak },{source: ag , target: am },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: am },{source: am , target: an },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 85000);
