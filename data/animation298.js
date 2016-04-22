setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'zenobius'},ab = {id: 'ab', name:'bustorius'},ac = {id: 'ac', name:'borax'},ad = {id: 'ad', name:'antimonia'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.030303030303030303%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ag */ var  aa = nodes[0] ,ab = nodes[1] ,ag = {id: 'ag', name:'diener'} ; nodes.push( ag ); links.push( {source: ab , target: ag },{source: aa , target: ag },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.060606060606060606%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'borax'},ad = {id: 'ad', name:'antimonia'},ae = {id: 'ae', name:'lakrimosa'},af = {id: 'af', name:'ajaxerle'},ag = nodes[2] ,ah = {id: 'ah', name:'fiaker'},ai = {id: 'ai', name:'genius'} ; nodes.push( ac,ad,ae,af,ah,ai ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ag },{source: af , target: ag },{source: af , target: ai },{source: af , target: ai },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ai },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ai },{source: ah , target: ai },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.090909090909090909%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ab','ag','ac','ad','ae','aa','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aj ak al */ var  aj = {id: 'aj', name:'stimme_von_unten'},ak = {id: 'ak', name:'lorenz'},al = {id: 'al', name:'habakuk'} ; nodes.push( aj,ak,al ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.121212121212121212%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ak am */ var  ak = nodes[0] ,am = {id: 'am', name:'lottchen'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.151515151515151515%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ak al am */ var  ak = nodes[0] ,al = {id: 'al', name:'habakuk'},am = nodes[1]  ; nodes.push( al ); links.push( {source: al , target: am },{source: ak , target: al },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.181818181818181818%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'al','ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* an */ var  an = {id: 'an', name:'wurzel'} ; nodes.push( an ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.212121212121212121%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ak an */ var  ak = {id: 'ak', name:'lorenz'},an = nodes[0]  ; nodes.push( ak ); links.push( {source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.242424242424242424%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* am */ var  am = {id: 'am', name:'lottchen'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.272727272727272727%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* af am an ao */ var  af = {id: 'af', name:'ajaxerle'},am = nodes[0] ,an = {id: 'an', name:'wurzel'},ao = {id: 'ao', name:'karl'} ; nodes.push( af,an,ao ); links.push( {source: am , target: ao },{source: am , target: an },{source: af , target: ao },{source: af , target: am },{source: af , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.30303030303030303%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* af am an ap */ var  af = nodes[0] ,am = nodes[1] ,an = nodes[2] ,ap = {id: 'ap', name:'satyr'} ; nodes.push( ap ); links.push( {source: an , target: ap },{source: af , target: an },{source: af , target: am },{source: af , target: ap },{source: am , target: an },{source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an','af','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* am ao */ var  am = nodes[0] ,ao = {id: 'ao', name:'karl'} ; nodes.push( ao ); links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.363636363636363636%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* am an ao aq ar */ var  am = nodes[0] ,an = {id: 'an', name:'wurzel'},ao = nodes[1] ,aq = {id: 'aq', name:'schlosser'},ar = {id: 'ar', name:'tischler'} ; nodes.push( an,aq,ar ); links.push( {source: an , target: ao },{source: an , target: aq },{source: an , target: ar },{source: ao , target: aq },{source: ao , target: ar },{source: am , target: an },{source: am , target: ao },{source: am , target: aq },{source: am , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.393939393939393939%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'an','ao','am','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* as */ var  as = {id: 'as', name:'illi'} ; nodes.push( as ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.424242424242424242%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* am */ var  am = {id: 'am', name:'lottchen'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.454545454545454545%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* am at */ var  am = nodes[0] ,at = {id: 'at', name:'zufriedenheit'} ; nodes.push( at ); links.push( {source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.484848484848484848%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'at','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* al an au av aw ax */ var  al = {id: 'al', name:'habakuk'},an = {id: 'an', name:'wurzel'},au = {id: 'au', name:'schmeichelfeld'},av = {id: 'av', name:'musensohn'},aw = {id: 'aw', name:'afterling'},ax = {id: 'ax', name:'chor'} ; nodes.push( al,an,au,av,aw,ax ); links.push( {source: an , target: au },{source: an , target: av },{source: an , target: aw },{source: an , target: ax },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: av , target: aw },{source: av , target: ax },{source: aw , target: ax },{source: al , target: an },{source: al , target: au },{source: al , target: av },{source: al , target: aw },{source: al , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.515151515151515152%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'au','av','aw','al','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ak an ay */ var  ak = {id: 'ak', name:'lorenz'},an = nodes[0] ,ay = {id: 'ay', name:'alle_bedienten'} ; nodes.push( ak,ay ); links.push( {source: an , target: ay },{source: ak , target: an },{source: ak , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.545454545454545455%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ak','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* an az */ var  an = nodes[0] ,az = {id: 'az', name:'jugend'} ; nodes.push( az ); links.push( {source: an , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.575757575757575758%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ak al an ba */ var  ak = {id: 'ak', name:'lorenz'},al = {id: 'al', name:'habakuk'},an = nodes[0] ,ba = {id: 'ba', name:'alter'} ; nodes.push( ak,al,ba ); links.push( {source: ak , target: an },{source: ak , target: al },{source: ak , target: ba },{source: ak , target: ba },{source: an , target: ba },{source: an , target: ba },{source: al , target: an },{source: al , target: ba },{source: al , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.606060606060606061%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'al','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ak an */ var  ak = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.636363636363636364%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* an bb */ var  an = nodes[0] ,bb = {id: 'bb', name:'neid'} ; nodes.push( bb ); links.push( {source: an , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* bb bc */ var  bb = nodes[0] ,bc = {id: 'bc', name:'hass'} ; nodes.push( bc ); links.push( {source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.69696969696969697%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* bb bc bd */ var  bb = nodes[0] ,bc = nodes[1] ,bd = {id: 'bd', name:'tophan'} ; nodes.push( bd ); links.push( {source: bc , target: bd },{source: bb , target: bc },{source: bb , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.727272727272727273%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'bc','bd','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* be */ var  be = {id: 'be', name:'nigowitz'} ; nodes.push( be ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.757575757575757576%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ao be bf */ var  ao = {id: 'ao', name:'karl'},be = nodes[0] ,bf = {id: 'bf', name:'papagei'} ; nodes.push( ao,bf ); links.push( {source: ao , target: bf },{source: ao , target: be },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.787878787878787879%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bf','ao','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* bc bd */ var  bc = {id: 'bc', name:'hass'},bd = {id: 'bd', name:'tophan'} ; nodes.push( bc,bd ); links.push( {source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.818181818181818182%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* am at bc bd bg */ var  am = {id: 'am', name:'lottchen'},at = {id: 'at', name:'zufriedenheit'},bc = nodes[0] ,bd = nodes[1] ,bg = {id: 'bg', name:'amor'} ; nodes.push( am,at,bg ); links.push( {source: at , target: bg },{source: at , target: bd },{source: at , target: bc },{source: am , target: bg },{source: am , target: at },{source: am , target: bd },{source: am , target: bc },{source: bd , target: bg },{source: bc , target: bg },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.848484848484848485%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bg','at','am','bd','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* af an */ var  af = {id: 'af', name:'ajaxerle'},an = {id: 'an', name:'wurzel'} ; nodes.push( af,an ); links.push( {source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.878787878787878788%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* an at */ var  an = nodes[0] ,at = {id: 'at', name:'zufriedenheit'} ; nodes.push( at ); links.push( {source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.909090909090909091%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* af am at bh */ var  af = {id: 'af', name:'ajaxerle'},am = {id: 'am', name:'lottchen'},at = nodes[0] ,bh = {id: 'bh', name:'lärmen'} ; nodes.push( af,am,bh ); links.push( {source: at , target: bh },{source: af , target: at },{source: af , target: bh },{source: af , target: am },{source: am , target: at },{source: am , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.939393939393939394%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'af','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ab am ao at bc */ var  ab = {id: 'ab', name:'bustorius'},am = nodes[0] ,ao = {id: 'ao', name:'karl'},at = nodes[1] ,bc = {id: 'bc', name:'hass'} ; nodes.push( ab,ao,bc ); links.push( {source: ao , target: bc },{source: ao , target: at },{source: at , target: bc },{source: am , target: bc },{source: am , target: ao },{source: am , target: at },{source: ab , target: bc },{source: ab , target: ao },{source: ab , target: at },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.969696969696969697%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ab ae af am an ao at ax bc bi */ var  ab = nodes[0] ,ae = {id: 'ae', name:'lakrimosa'},af = {id: 'af', name:'ajaxerle'},am = nodes[1] ,an = {id: 'an', name:'wurzel'},ao = nodes[2] ,at = nodes[3] ,ax = {id: 'ax', name:'chor'},bc = nodes[4] ,bi = {id: 'bi', name:'hymen'} ; nodes.push( ae,af,an,ax,bi ); links.push( {source: bc , target: bi },{source: at , target: bc },{source: at , target: bi },{source: at , target: ax },{source: ao , target: bc },{source: ao , target: at },{source: ao , target: bi },{source: ao , target: ax },{source: am , target: bc },{source: am , target: at },{source: am , target: ao },{source: am , target: an },{source: am , target: bi },{source: am , target: ax },{source: an , target: bc },{source: an , target: at },{source: an , target: ao },{source: an , target: bi },{source: an , target: ax },{source: ab , target: bc },{source: ab , target: at },{source: ab , target: ao },{source: ab , target: am },{source: ab , target: an },{source: ab , target: bi },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ax },{source: ae , target: bc },{source: ae , target: at },{source: ae , target: ao },{source: ae , target: am },{source: ae , target: an },{source: ae , target: bi },{source: ae , target: af },{source: ae , target: ax },{source: af , target: bc },{source: af , target: at },{source: af , target: ao },{source: af , target: am },{source: af , target: an },{source: af , target: bi },{source: af , target: ax },{source: ax , target: bc },{source: ax , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 160000);
