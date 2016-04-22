setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'douglas'},ab = {id: 'ab', name:'margarete'},ac = {id: 'ac', name:'maria'},ad = {id: 'ad', name:'lesley'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zimmer in Mac-Gregors Schloß'; var scene = document.getElementById('scene');scene.innerHTML = 'Zimmer in Mac-Gregors Schloß';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ad ae af ag ah ai aj ak al am */ var  ad = nodes[0] ,ae = {id: 'ae', name:'tom'},af = {id: 'af', name:'willie'},ag = {id: 'ag', name:'ratcliff'},ah = {id: 'ah', name:'mehrere'},ai = {id: 'ai', name:'robin'},aj = {id: 'aj', name:'dick'},ak = {id: 'ak', name:'bill'},al = {id: 'al', name:'john'},am = {id: 'am', name:'taddie'} ; nodes.push( ae,af,ag,ah,ai,aj,ak,al,am ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Diebesherberge'; var scene = document.getElementById('scene');scene.innerHTML = 'Diebesherberge';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','af','ad','ah','ai','aj','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'douglas'},ag = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Wilde Gegend am Schwarzenstein. Nacht'; var scene = document.getElementById('scene');scene.innerHTML = 'Wilde Gegend am Schwarzenstein. Nacht';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ag an ao */ var  aa = nodes[0] ,ab = {id: 'ab', name:'margarete'},ac = {id: 'ac', name:'maria'},ag = nodes[1] ,an = {id: 'an', name:'ein_diener'},ao = {id: 'ao', name:'viele_stimmen'} ; nodes.push( ab,ac,an,ao ); links.push( {source: ac , target: ag },{source: ac , target: an },{source: ac , target: ao },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: an },{source: ab , target: ao },{source: ag , target: an },{source: ag , target: ao },{source: an , target: ao },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: an },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Mac-Gregors Schloß'; var scene = document.getElementById('scene');scene.innerHTML = 'Mac-Gregors Schloß';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 15000);
