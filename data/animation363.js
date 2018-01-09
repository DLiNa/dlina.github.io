setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'licht'},ab = {id: 'ab', name:'adam'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.692307692307692308%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'der_bediente'},ad = {id: 'ad', name:'die_magd'},ae = {id: 'ae', name:'die_zweite_magd'} ; nodes.push( ac,ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ae },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ae },{source: ad , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.384615384615384615%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.076923076923076923%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab af */ var  aa = nodes[0] ,ab = nodes[1] ,af = {id: 'af', name:'walter'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: aa , target: af },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.769230769230769231%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ae af ag */ var  ab = nodes[0] ,ae = {id: 'ae', name:'die_zweite_magd'},af = nodes[1] ,ag = {id: 'ag', name:'der_büttel'} ; nodes.push( ae,ag ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.461538461538461538%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ab','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ah ai aj ak */ var  ah = {id: 'ah', name:'frau_marthe'},ai = {id: 'ai', name:'veit'},aj = {id: 'aj', name:'ruprecht'},ak = {id: 'ak', name:'eve'} ; nodes.push( ah,ai,aj,ak ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.153846153846153846%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab af ah ai aj ak */ var  aa = {id: 'aa', name:'licht'},ab = {id: 'ab', name:'adam'},af = {id: 'af', name:'walter'},ah = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,ak = nodes[3]  ; nodes.push( aa,ab,af ); links.push( {source: ab , target: ak },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ai },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ai },{source: af , target: ak },{source: af , target: ah },{source: af , target: aj },{source: af , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: aj , target: ak },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.846153846153846154%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ak','aa','ah','aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ad af */ var  ab = nodes[0] ,ad = {id: 'ad', name:'die_magd'},af = nodes[1]  ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: ab , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.538461538461538462%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ab af ah ai aj ak */ var  aa = {id: 'aa', name:'licht'},ab = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'frau_marthe'},ai = {id: 'ai', name:'veit'},aj = {id: 'aj', name:'ruprecht'},ak = {id: 'ak', name:'eve'} ; nodes.push( aa,ah,ai,aj,ak ); links.push( {source: ab , target: af },{source: ab , target: ah },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: ai },{source: af , target: ah },{source: af , target: ak },{source: af , target: aj },{source: af , target: ai },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: aj , target: ak },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.230769230769230769%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa','ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ad af ah aj */ var  ab = nodes[0] ,ad = {id: 'ad', name:'die_magd'},af = nodes[1] ,ah = nodes[2] ,aj = nodes[3]  ; nodes.push( ad ); links.push( {source: ab , target: af },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ah },{source: af , target: aj },{source: af , target: ah },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.923076923076923077%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab af ah ai aj ak al */ var  aa = {id: 'aa', name:'licht'},ab = nodes[0] ,af = nodes[1] ,ah = nodes[2] ,ai = {id: 'ai', name:'veit'},aj = nodes[3] ,ak = {id: 'ak', name:'eve'},al = {id: 'al', name:'frau_brigitte'} ; nodes.push( aa,ai,ak,al ); links.push( {source: aa , target: af },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: ak },{source: af , target: ah },{source: af , target: aj },{source: af , target: al },{source: af , target: ai },{source: af , target: ak },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: al },{source: ab , target: ai },{source: ab , target: ak },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: ak },{source: aj , target: al },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.615384615384615385%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa af ai aj ak al am */ var  aa = nodes[0] ,af = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = nodes[5] ,am = {id: 'am', name:'mehrere'} ; nodes.push( am ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: ai },{source: af , target: am },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: am },{source: al , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.307692307692307692%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj','ak','aa','al','ai','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af ah */ var  af = nodes[0] ,ah = {id: 'ah', name:'frau_marthe'} ; nodes.push( ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 60000);
