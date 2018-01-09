setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'lorenz'},ab = {id: 'ab', name:'dünne'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.030303030303030303%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'guttenberg'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.060606060606060606%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'bertha'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.090909090909090909%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = {id: 'ae', name:'sebaldus'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.121212121212121212%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'bertha'},ae = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.151515151515151515%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ac ae */ var  aa = {id: 'aa', name:'lorenz'},ac = {id: 'ac', name:'guttenberg'},ae = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.181818181818181818%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = {id: 'af', name:'rieffe'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.212121212121212121%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'bertha'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.242424242424242424%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'fust'},ah = {id: 'ah', name:'peter'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.272727272727272727%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ag ah ai */ var  ac = {id: 'ac', name:'guttenberg'},ag = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'beildeck'} ; nodes.push( ac,ai ); links.push( {source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.30303030303030303%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'peter'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.363636363636363636%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ah aj */ var  ah = nodes[0] ,aj = {id: 'aj', name:'käthe'} ; nodes.push( aj ); links.push( {source: ah , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.393939393939393939%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ah aj */ var  ag = {id: 'ag', name:'fust'},ah = nodes[0] ,aj = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: aj },{source: ag , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.424242424242424242%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aj','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'lorenz'},ac = {id: 'ac', name:'guttenberg'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.454545454545454545%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac aj */ var  ac = nodes[0] ,aj = {id: 'aj', name:'käthe'} ; nodes.push( aj ); links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.484848484848484848%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ac aj */ var  aa = {id: 'aa', name:'lorenz'},ac = nodes[0] ,aj = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: aj },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.515151515151515152%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.545454545454545455%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ah aj ak al */ var  aa = nodes[0] ,ah = {id: 'ah', name:'peter'},aj = {id: 'aj', name:'käthe'},ak = {id: 'ak', name:'barbara'},al = {id: 'al', name:'else'} ; nodes.push( ah,aj,ak,al ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ak , target: al },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.575757575757575758%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ah','ak','al','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aj am */ var  aj = nodes[0] ,am = {id: 'am', name:'klara'} ; nodes.push( am ); links.push( {source: aj , target: am },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.606060606060606061%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad aj */ var  ad = {id: 'ad', name:'bertha'},aj = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.636363636363636364%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ag ak */ var  ag = {id: 'ag', name:'fust'},ak = {id: 'ak', name:'barbara'} ; nodes.push( ag,ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.69696969696969697%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ag aj */ var  ag = nodes[0] ,aj = {id: 'aj', name:'käthe'} ; nodes.push( aj ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.727272727272727273%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag ah aj */ var  ag = nodes[0] ,ah = {id: 'ah', name:'peter'},aj = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: aj },{source: ag , target: ah },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.757575757575757576%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ag ah ak */ var  ag = nodes[0] ,ah = nodes[1] ,ak = {id: 'ak', name:'barbara'} ; nodes.push( ak ); links.push( {source: ag , target: ak },{source: ag , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.787878787878787879%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ak','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'käthe'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.818181818181818182%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'guttenberg'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.848484848484848485%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'lorenz'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.878787878787878788%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ac aj */ var  ac = nodes[0] ,aj = {id: 'aj', name:'käthe'} ; nodes.push( aj ); links.push( {source: ac , target: aj },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '8. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.909090909090909091%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'lorenz'},ac = nodes[0] ,ad = {id: 'ad', name:'bertha'} ; nodes.push( aa,ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.939393939393939394%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ac ad an */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,an = {id: 'an', name:'humery'} ; nodes.push( an ); links.push( {source: ad , target: an },{source: ac , target: an },{source: ac , target: ad },{source: aa , target: an },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.969696969696969697%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac ad ag ah an */ var  ac = nodes[0] ,ad = nodes[1] ,ag = {id: 'ag', name:'fust'},ah = {id: 'ah', name:'peter'},an = nodes[2]  ; nodes.push( ag,ah ); links.push( {source: ag , target: an },{source: ag , target: ah },{source: ad , target: ag },{source: ad , target: an },{source: ad , target: ah },{source: ah , target: an },{source: ac , target: ag },{source: ac , target: an },{source: ac , target: ad },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Scene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 160000);
