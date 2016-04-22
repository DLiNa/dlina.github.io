setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'silenus'},ab = {id: 'ab', name:'thalia'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.5%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad ae af */ var  aa = nodes[0] ,ac = {id: 'ac', name:'melpomene'},ad = {id: 'ad', name:'tharsus'},ae = {id: 'ae', name:'sedulius'},af = {id: 'af', name:'alethea'} ; nodes.push( ac,ad,ae,af ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Andrer Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad ae af ag */ var  ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,ag = {id: 'ag', name:'obsequens'} ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.5%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac','ag','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'silenus'},ab = {id: 'ab', name:'thalia'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac af ah ai aj ak al am */ var  ac = {id: 'ac', name:'melpomene'},af = {id: 'af', name:'alethea'},ah = {id: 'ah', name:'arete'},ai = {id: 'ai', name:'vigilantia'},aj = {id: 'aj', name:'meletander'},ak = {id: 'ak', name:'euphrosyne'},al = {id: 'al', name:'apollo'},am = {id: 'am', name:'themis'} ; nodes.push( ac,af,ah,ai,aj,ak,al,am ); links.push( {source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.5%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ah','ac','ai','aj','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af an */ var  af = nodes[0] ,an = {id: 'an', name:'pseudolus'} ; nodes.push( an ); links.push( {source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'an','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ah ai aj al am */ var  ah = {id: 'ah', name:'arete'},ai = {id: 'ai', name:'vigilantia'},aj = {id: 'aj', name:'meletander'},al = {id: 'al', name:'apollo'},am = {id: 'am', name:'themis'} ; nodes.push( ah,ai,aj,al,am ); links.push( {source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: aj , target: al },{source: aj , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.5%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai','aj','ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ac ad ae af am */ var  ab = {id: 'ab', name:'thalia'},ac = {id: 'ac', name:'melpomene'},ad = {id: 'ad', name:'tharsus'},ae = {id: 'ae', name:'sedulius'},af = {id: 'af', name:'alethea'},am = nodes[0]  ; nodes.push( ab,ac,ad,ae,af ); links.push( {source: af , target: am },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: am },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: am },{source: ae , target: af },{source: ae , target: am },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter und lezter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 35000);
