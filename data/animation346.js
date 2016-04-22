setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'levi'},ab = {id: 'ab', name:'soliman'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'mehmed'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ad ae af */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'ali'},ae = {id: 'ae', name:'mustafa'},af = {id: 'af', name:'der_begler_beg'} ; nodes.push( ad,ae,af ); links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad ae */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3]  ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ag ah */ var  ab = nodes[0] ,ag = {id: 'ag', name:'aga'},ah = {id: 'ah', name:'der_bote'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'eva'},aj = {id: 'aj', name:'helene'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ai aj ak */ var  ai = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'zriny'} ; nodes.push( ak ); links.push( {source: aj , target: ak },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ak al */ var  ak = nodes[0] ,al = {id: 'al', name:'alapi'} ; nodes.push( al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ai aj ak al am an */ var  ai = {id: 'ai', name:'eva'},aj = {id: 'aj', name:'helene'},ak = nodes[0] ,al = nodes[1] ,am = {id: 'am', name:'paprutowitsch'},an = {id: 'an', name:'bauer'} ; nodes.push( ai,aj,am,an ); links.push( {source: am , target: an },{source: ak , target: am },{source: ak , target: an },{source: ak , target: al },{source: al , target: am },{source: al , target: an },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: al },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: an },{source: ai , target: al },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ai aj ak al ao */ var  ai = nodes[0] ,aj = nodes[1] ,ak = nodes[2] ,al = nodes[3] ,ao = {id: 'ao', name:'juranitsch'} ; nodes.push( ao ); links.push( {source: ak , target: ao },{source: ak , target: al },{source: aj , target: ak },{source: aj , target: ao },{source: aj , target: al },{source: al , target: ao },{source: ai , target: ak },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ak','ao','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ai aj ak */ var  ai = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'zriny'} ; nodes.push( ak ); links.push( {source: aj , target: ak },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ai aj ak ap */ var  ai = nodes[0] ,aj = nodes[1] ,ak = nodes[2] ,ap = {id: 'ap', name:'scherenk'} ; nodes.push( ap ); links.push( {source: aj , target: ap },{source: aj , target: ak },{source: ai , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ai aj ak al am ao */ var  ai = nodes[0] ,aj = nodes[1] ,ak = nodes[2] ,al = {id: 'al', name:'alapi'},am = {id: 'am', name:'paprutowitsch'},ao = {id: 'ao', name:'juranitsch'} ; nodes.push( al,am,ao ); links.push( {source: ak , target: al },{source: ak , target: ao },{source: ak , target: am },{source: al , target: ao },{source: al , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: ao },{source: aj , target: am },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: am },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'al','aj','ao','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ak am aq */ var  ak = nodes[0] ,am = nodes[1] ,aq = {id: 'aq', name:'vilacky'} ; nodes.push( aq ); links.push( {source: ak , target: aq },{source: ak , target: am },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ai aj ak al ao aq */ var  ai = {id: 'ai', name:'eva'},aj = {id: 'aj', name:'helene'},ak = nodes[0] ,al = {id: 'al', name:'alapi'},ao = {id: 'ao', name:'juranitsch'},aq = nodes[1]  ; nodes.push( ai,aj,al,ao ); links.push( {source: al , target: aq },{source: al , target: ao },{source: ai , target: aq },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: ak },{source: aj , target: aq },{source: aj , target: al },{source: aj , target: ao },{source: aj , target: ak },{source: ao , target: aq },{source: ak , target: aq },{source: ak , target: al },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ai aj ak al am ao aq */ var  ai = nodes[0] ,aj = nodes[1] ,ak = nodes[2] ,al = nodes[3] ,am = {id: 'am', name:'paprutowitsch'},ao = nodes[4] ,aq = nodes[5]  ; nodes.push( am ); links.push( {source: am , target: aq },{source: am , target: ao },{source: ak , target: am },{source: ak , target: aq },{source: ak , target: al },{source: ak , target: ao },{source: al , target: am },{source: al , target: aq },{source: al , target: ao },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: aq },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ao },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: aq },{source: aj , target: al },{source: aj , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'am','ak','aq','al','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aj ao */ var  aj = nodes[0] ,ao = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ao','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* al am aq */ var  al = {id: 'al', name:'alapi'},am = {id: 'am', name:'paprutowitsch'},aq = {id: 'aq', name:'vilacky'} ; nodes.push( al,am,aq ); links.push( {source: al , target: am },{source: al , target: aq },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ak al am ao aq */ var  ak = {id: 'ak', name:'zriny'},al = nodes[0] ,am = nodes[1] ,ao = {id: 'ao', name:'juranitsch'},aq = nodes[2]  ; nodes.push( ak,ao ); links.push( {source: ak , target: am },{source: ak , target: aq },{source: ak , target: al },{source: ak , target: ao },{source: am , target: aq },{source: am , target: ao },{source: al , target: am },{source: al , target: aq },{source: al , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ak','am','aq','al','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'ali'},ae = {id: 'ae', name:'mustafa'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac ad ae */ var  ac = {id: 'ac', name:'mehmed'},ad = nodes[0] ,ae = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ac ad ae */ var  ab = {id: 'ab', name:'soliman'},ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2]  ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ac aq */ var  ab = nodes[0] ,ac = nodes[1] ,aq = {id: 'aq', name:'vilacky'} ; nodes.push( aq ); links.push( {source: ab , target: aq },{source: ab , target: ac },{source: ac , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ac ad ae */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'ali'},ae = {id: 'ae', name:'mustafa'} ; nodes.push( ad,ae ); links.push( {source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ab','ac','ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ak al am ao */ var  ak = {id: 'ak', name:'zriny'},al = {id: 'al', name:'alapi'},am = {id: 'am', name:'paprutowitsch'},ao = {id: 'ao', name:'juranitsch'} ; nodes.push( ak,al,am,ao ); links.push( {source: ak , target: ao },{source: ak , target: al },{source: ak , target: am },{source: al , target: ao },{source: al , target: am },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ao','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ak al ar */ var  ak = nodes[0] ,al = nodes[1] ,ar = {id: 'ar', name:'hauptmann'} ; nodes.push( ar ); links.push( {source: ak , target: ar },{source: ak , target: al },{source: al , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac ak ar */ var  ac = {id: 'ac', name:'mehmed'},ak = nodes[0] ,ar = nodes[1]  ; nodes.push( ac ); links.push( {source: ak , target: ar },{source: ac , target: ar },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ar','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ai aj ak al am as */ var  ai = {id: 'ai', name:'eva'},aj = {id: 'aj', name:'helene'},ak = nodes[0] ,al = {id: 'al', name:'alapi'},am = {id: 'am', name:'paprutowitsch'},as = {id: 'as', name:'die_männer'} ; nodes.push( ai,aj,al,am,as ); links.push( {source: ai , target: al },{source: ai , target: ak },{source: ai , target: as },{source: ai , target: aj },{source: ai , target: am },{source: al , target: as },{source: al , target: am },{source: ak , target: al },{source: ak , target: as },{source: ak , target: am },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: as },{source: aj , target: am },{source: am , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ai','al','ak','as','aj','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'levi'},ab = {id: 'ab', name:'soliman'},ac = {id: 'ac', name:'mehmed'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'mehmed'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'levi'},ab = nodes[0] ,ac = nodes[1]  ; nodes.push( aa ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ab ac ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ae = {id: 'ae', name:'mustafa'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ac , target: ae },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab ac af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,af = {id: 'af', name:'der_begler_beg'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: ac },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ac ad af */ var  ac = nodes[0] ,ad = {id: 'ad', name:'ali'},af = nodes[1]  ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ac , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ac','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ai aj ap */ var  ai = {id: 'ai', name:'eva'},aj = {id: 'aj', name:'helene'},ap = {id: 'ap', name:'scherenk'} ; nodes.push( ai,aj,ap ); links.push( {source: aj , target: ap },{source: ai , target: ap },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ai aj ak ao ap */ var  ai = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'zriny'},ao = {id: 'ao', name:'juranitsch'},ap = nodes[2]  ; nodes.push( ak,ao ); links.push( {source: ak , target: ao },{source: ak , target: ap },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: ap },{source: aj , target: ak },{source: aj , target: ao },{source: aj , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ai','aj','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ak ap */ var  ak = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ak ap */ var  ak = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ai aj ak */ var  ai = {id: 'ai', name:'eva'},aj = {id: 'aj', name:'helene'},ak = nodes[0]  ; nodes.push( ai,aj ); links.push( {source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aj ak al am ao */ var  aj = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'alapi'},am = {id: 'am', name:'paprutowitsch'},ao = {id: 'ao', name:'juranitsch'} ; nodes.push( al,am,ao ); links.push( {source: am , target: ao },{source: al , target: ao },{source: al , target: am },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: al },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: al },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'am','al','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aj ao */ var  aj = nodes[0] ,ao = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ao','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ai ak al am */ var  ai = {id: 'ai', name:'eva'},ak = {id: 'ak', name:'zriny'},al = {id: 'al', name:'alapi'},am = {id: 'am', name:'paprutowitsch'} ; nodes.push( ai,ak,al,am ); links.push( {source: ak , target: am },{source: ak , target: al },{source: al , target: am },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ai ak al am ao */ var  ai = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = nodes[3] ,ao = {id: 'ao', name:'juranitsch'} ; nodes.push( ao ); links.push( {source: ak , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ai , target: ak },{source: ai , target: ao },{source: ai , target: al },{source: ai , target: am },{source: al , target: ao },{source: al , target: am },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 220000);
