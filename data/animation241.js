setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'fritz'},ab = {id: 'ab', name:'johann'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.222222222222222222%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'pralling'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.444444444444444444%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'wolf'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.666666666666666667%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'gründling'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.888888888888888889%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'sockel'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'valentin'},ah = {id: 'ah', name:'rosa'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.333333333333333333%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ad ai aj am az */ var  ac = {id: 'ac', name:'pralling'},ad = {id: 'ad', name:'wolf'},ai = {id: 'ai', name:'helm'},aj = {id: 'aj', name:'walter'},am = {id: 'am', name:'ein_gast'},az = {id: 'az', name:'mehrere_gäste'} ; nodes.push( ac,ad,ai,aj,am,az ); links.push( {source: ai , target: az },{source: ai , target: am },{source: ai , target: aj },{source: ad , target: ai },{source: ad , target: az },{source: ad , target: am },{source: ad , target: aj },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: az },{source: ac , target: am },{source: ac , target: aj },{source: am , target: az },{source: aj , target: az },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.555555555555555556%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ad ai aj ak am az */ var  ac = nodes[0] ,ad = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ak = {id: 'ak', name:'dumont'},am = nodes[4] ,az = nodes[5]  ; nodes.push( ak ); links.push( {source: ak , target: az },{source: ak , target: am },{source: am , target: az },{source: ai , target: ak },{source: ai , target: az },{source: ai , target: am },{source: ai , target: aj },{source: ad , target: ak },{source: ad , target: az },{source: ad , target: am },{source: ad , target: ai },{source: ad , target: aj },{source: aj , target: ak },{source: aj , target: az },{source: aj , target: am },{source: ac , target: ak },{source: ac , target: az },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.777777777777777778%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ad af ag ai aj ak al am az */ var  ac = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'sockel'},ag = {id: 'ag', name:'valentin'},ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = {id: 'al', name:'flottwell'},am = nodes[5] ,az = nodes[6]  ; nodes.push( af,ag,al ); links.push( {source: al , target: az },{source: al , target: am },{source: am , target: az },{source: ai , target: al },{source: ai , target: az },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ad , target: al },{source: ad , target: az },{source: ad , target: am },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ag },{source: ad , target: af },{source: aj , target: al },{source: aj , target: az },{source: aj , target: am },{source: aj , target: ak },{source: ac , target: al },{source: ac , target: az },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: af },{source: ak , target: al },{source: ak , target: az },{source: ak , target: am },{source: ag , target: al },{source: ag , target: az },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: af , target: al },{source: af , target: az },{source: af , target: am },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'al','az','am','ai','ad','aj','ac','ak','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* an ao */ var  an = {id: 'an', name:'cheristane'},ao = {id: 'ao', name:'azur'} ; nodes.push( an,ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'valentin'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.444444444444444444%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* an */ var  an = {id: 'an', name:'cheristane'} ; nodes.push( an ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.666666666666666667%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* al an */ var  al = {id: 'al', name:'flottwell'},an = nodes[0]  ; nodes.push( al ); links.push( {source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.888888888888888889%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'al','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ah ap aq */ var  ag = {id: 'ag', name:'valentin'},ah = {id: 'ah', name:'rosa'},ap = {id: 'ap', name:'chor'},aq = {id: 'aq', name:'bettler'} ; nodes.push( ag,ah,ap,aq ); links.push( {source: ap , target: aq },{source: ap , target: aq },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: aq },{source: ag , target: ah },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.111111111111111111%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ap','aq','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* al ar */ var  al = {id: 'al', name:'flottwell'},ar = {id: 'ar', name:'haushofmeister'} ; nodes.push( al,ar ); links.push( {source: al , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* al aq as */ var  al = nodes[0] ,aq = {id: 'aq', name:'bettler'},as = {id: 'as', name:'diener_2.3'} ; nodes.push( aq,as ); links.push( {source: al , target: aq },{source: al , target: as },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.555555555555555556%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'al','aq','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ak */ var  ak = {id: 'ak', name:'dumont'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.777777777777777778%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ak au */ var  ak = nodes[0] ,au = {id: 'au', name:'weib'} ; nodes.push( au ); links.push( {source: ak , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ah ak */ var  ah = {id: 'ah', name:'rosa'},ak = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.222222222222222222%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad ag ah ak al */ var  ad = {id: 'ad', name:'wolf'},ag = {id: 'ag', name:'valentin'},ah = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'flottwell'} ; nodes.push( ad,ag,al ); links.push( {source: ak , target: al },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ag },{source: ah , target: al },{source: ah , target: ak },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ak','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad al aq av */ var  ad = nodes[0] ,al = nodes[1] ,aq = {id: 'aq', name:'bettler'},av = {id: 'av', name:'juwelier'} ; nodes.push( aq,av ); links.push( {source: al , target: av },{source: al , target: aq },{source: aq , target: av },{source: ad , target: al },{source: ad , target: av },{source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.666666666666666667%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al','av','aq','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aw ax */ var  aw = {id: 'aw', name:'klugheim'},ax = {id: 'ax', name:'amalie'} ; nodes.push( aw,ax ); links.push( {source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.888888888888888889%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* al aw ax ay */ var  al = {id: 'al', name:'flottwell'},aw = nodes[0] ,ax = nodes[1] ,ay = {id: 'ay', name:'flitterstein'} ; nodes.push( al,ay ); links.push( {source: al , target: ax },{source: al , target: aw },{source: al , target: ay },{source: al , target: ay },{source: ax , target: ay },{source: ax , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.111111111111111111%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ad aj ak al aq aw ax ay az */ var  ad = {id: 'ad', name:'wolf'},aj = {id: 'aj', name:'walter'},ak = {id: 'ak', name:'dumont'},al = nodes[0] ,aq = {id: 'aq', name:'bettler'},aw = nodes[1] ,ax = nodes[2] ,ay = nodes[3] ,az = {id: 'az', name:'mehrere_gäste'} ; nodes.push( ad,aj,ak,aq,az ); links.push( {source: al , target: aw },{source: al , target: ay },{source: al , target: az },{source: al , target: ax },{source: al , target: az },{source: al , target: az },{source: al , target: az },{source: al , target: aq },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ax },{source: aw , target: az },{source: aw , target: az },{source: aw , target: az },{source: ay , target: az },{source: ay , target: az },{source: ay , target: az },{source: ay , target: az },{source: aj , target: al },{source: aj , target: aw },{source: aj , target: ay },{source: aj , target: az },{source: aj , target: ak },{source: aj , target: ax },{source: aj , target: az },{source: aj , target: az },{source: aj , target: az },{source: aj , target: aq },{source: ak , target: al },{source: ak , target: aw },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: ax },{source: ak , target: az },{source: ak , target: az },{source: ak , target: az },{source: ak , target: aq },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: az },{source: ax , target: az },{source: ax , target: az },{source: aq , target: aw },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ax },{source: aq , target: az },{source: aq , target: az },{source: aq , target: az },{source: ad , target: al },{source: ad , target: aw },{source: ad , target: ay },{source: ad , target: az },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ax },{source: ad , target: az },{source: ad , target: az },{source: ad , target: az },{source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.333333333333333333%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'al','aw','ay','az','aj','ak','ax','aq','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag ah ba */ var  ag = {id: 'ag', name:'valentin'},ah = {id: 'ah', name:'rosa'},ba = {id: 'ba', name:'kellermeister'} ; nodes.push( ag,ah,ba ); links.push( {source: ag , target: ah },{source: ag , target: ba },{source: ah , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag','ah','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aw ax bb */ var  aw = {id: 'aw', name:'klugheim'},ax = {id: 'ax', name:'amalie'},bb = {id: 'bb', name:'arzt'} ; nodes.push( aw,ax,bb ); links.push( {source: aw , target: bb },{source: aw , target: ax },{source: ax , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.777777777777777778%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* al aw ax bc */ var  al = {id: 'al', name:'flottwell'},aw = nodes[0] ,ax = nodes[1] ,bc = {id: 'bc', name:'betti'} ; nodes.push( al,bc ); links.push( {source: aw , target: bc },{source: aw , target: ax },{source: ax , target: bc },{source: al , target: bc },{source: al , target: aw },{source: al , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bc','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad al aw */ var  ad = {id: 'ad', name:'wolf'},al = nodes[0] ,aw = nodes[1]  ; nodes.push( ad ); links.push( {source: al , target: aw },{source: ad , target: aw },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.222222222222222222%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aw','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = {id: 'ag', name:'valentin'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.444444444444444444%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ad ag ah ap bd */ var  ad = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'rosa'},ap = {id: 'ap', name:'chor'},bd = {id: 'bd', name:'bediente'} ; nodes.push( ah,ap,bd ); links.push( {source: ah , target: bd },{source: ah , target: ap },{source: ag , target: ah },{source: ag , target: bd },{source: ag , target: ap },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: bd },{source: ad , target: ap },{source: ap , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah','ag','ad','bd','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* al aq */ var  al = {id: 'al', name:'flottwell'},aq = {id: 'aq', name:'bettler'} ; nodes.push( al,aq ); links.push( {source: al , target: aq },{source: al , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.888888888888888889%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* al ax */ var  al = nodes[0] ,ax = {id: 'ax', name:'amalie'} ; nodes.push( ax ); links.push( {source: al , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.111111111111111111%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'al','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* be bf */ var  be = {id: 'be', name:'thomas'},bf = {id: 'bf', name:'max'} ; nodes.push( be,bf ); links.push( {source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.333333333333333333%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* al ax be bf */ var  al = {id: 'al', name:'flottwell'},ax = {id: 'ax', name:'amalie'},be = nodes[0] ,bf = nodes[1]  ; nodes.push( al,ax ); links.push( {source: al , target: be },{source: al , target: bf },{source: al , target: ax },{source: be , target: bf },{source: ax , target: be },{source: ax , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.555555555555555556%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'be','bf','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* al bg */ var  al = nodes[0] ,bg = {id: 'bg', name:'gärtner'} ; nodes.push( bg ); links.push( {source: al , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ad al at bg */ var  ad = {id: 'ad', name:'wolf'},al = nodes[0] ,at = {id: 'at', name:'diener_3.3'},bg = nodes[1]  ; nodes.push( ad,at ); links.push( {source: al , target: bg },{source: al , target: at },{source: ad , target: al },{source: ad , target: bg },{source: ad , target: at },{source: at , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.222222222222222222%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ad','bg','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ag al */ var  ag = {id: 'ag', name:'valentin'},al = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.444444444444444444%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ag','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* bh bi bj bk bl */ var  bh = {id: 'bh', name:'liese'},bi = {id: 'bi', name:'michael'},bj = {id: 'bj', name:'hiesel'},bk = {id: 'bk', name:'pepi'},bl = {id: 'bl', name:'hansel'} ; nodes.push( bh,bi,bj,bk,bl ); links.push( {source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bj , target: bk },{source: bj , target: bl },{source: bk , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.666666666666666667%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ag al bh bj bk bl */ var  ag = {id: 'ag', name:'valentin'},al = {id: 'al', name:'flottwell'},bh = nodes[0] ,bj = nodes[1] ,bk = nodes[2] ,bl = nodes[3]  ; nodes.push( ag,al ); links.push( {source: ag , target: bh },{source: ag , target: bl },{source: ag , target: bk },{source: ag , target: al },{source: ag , target: bj },{source: bh , target: bl },{source: bh , target: bk },{source: bh , target: bj },{source: bk , target: bl },{source: al , target: bh },{source: al , target: bl },{source: al , target: bk },{source: al , target: bj },{source: bj , target: bl },{source: bj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ag','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* al bh bj bl */ var  al = nodes[0] ,bh = nodes[1] ,bj = nodes[2] ,bl = nodes[3]  ; /* nodes.push(); */ links.push( {source: al , target: bh },{source: al , target: bl },{source: al , target: bj },{source: bh , target: bl },{source: bh , target: bj },{source: bj , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.111111111111111111%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ah al bh bl */ var  ah = {id: 'ah', name:'rosa'},al = nodes[0] ,bh = nodes[1] ,bl = nodes[2]  ; nodes.push( ah ); links.push( {source: ah , target: al },{source: ah , target: bh },{source: ah , target: bl },{source: al , target: bh },{source: al , target: bl },{source: bh , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.333333333333333333%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ag ah bh bi bj bk bl */ var  ag = {id: 'ag', name:'valentin'},ah = nodes[0] ,bh = nodes[1] ,bi = {id: 'bi', name:'michael'},bj = {id: 'bj', name:'hiesel'},bk = {id: 'bk', name:'pepi'},bl = nodes[2]  ; nodes.push( ag,bi,bj,bk ); links.push( {source: ag , target: ah },{source: ag , target: bh },{source: ag , target: bl },{source: ag , target: bj },{source: ag , target: bi },{source: ag , target: bk },{source: ah , target: bh },{source: ah , target: bl },{source: ah , target: bj },{source: ah , target: bi },{source: ah , target: bk },{source: bh , target: bl },{source: bh , target: bj },{source: bh , target: bi },{source: bh , target: bk },{source: bj , target: bl },{source: bj , target: bk },{source: bi , target: bl },{source: bi , target: bj },{source: bi , target: bk },{source: bk , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.555555555555555556%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ag','ah','bh','bl','bj','bi','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* al an aq */ var  al = {id: 'al', name:'flottwell'},an = {id: 'an', name:'cheristane'},aq = {id: 'aq', name:'bettler'} ; nodes.push( al,an,aq ); links.push( {source: al , target: aq },{source: al , target: an },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.777777777777777778%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ag ah al an ap bh bi bj bk bl bm */ var  ag = {id: 'ag', name:'valentin'},ah = {id: 'ah', name:'rosa'},al = nodes[0] ,an = nodes[1] ,ap = {id: 'ap', name:'chor'},bh = {id: 'bh', name:'liese'},bi = {id: 'bi', name:'michael'},bj = {id: 'bj', name:'hiesel'},bk = {id: 'bk', name:'pepi'},bl = {id: 'bl', name:'hansel'},bm = {id: 'bm', name:'senner_und_sennerinnen'} ; nodes.push( ag,ah,ap,bh,bi,bj,bk,bl,bm ); links.push( {source: bh , target: bi },{source: bh , target: bl },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bm },{source: al , target: bh },{source: al , target: bi },{source: al , target: bl },{source: al , target: bj },{source: al , target: bk },{source: al , target: an },{source: al , target: ap },{source: al , target: bm },{source: ag , target: bh },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: bi },{source: ag , target: bl },{source: ag , target: bj },{source: ag , target: bk },{source: ag , target: an },{source: ag , target: ap },{source: ag , target: bm },{source: ah , target: bh },{source: ah , target: al },{source: ah , target: bi },{source: ah , target: bl },{source: ah , target: bj },{source: ah , target: bk },{source: ah , target: an },{source: ah , target: ap },{source: ah , target: bm },{source: bi , target: bl },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bm },{source: bl , target: bm },{source: bj , target: bl },{source: bj , target: bk },{source: bj , target: bm },{source: bk , target: bl },{source: bk , target: bm },{source: an , target: bh },{source: an , target: bi },{source: an , target: bl },{source: an , target: bj },{source: an , target: bk },{source: an , target: ap },{source: an , target: bm },{source: ap , target: bh },{source: ap , target: bi },{source: ap , target: bl },{source: ap , target: bj },{source: ap , target: bk },{source: ap , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 220000);
