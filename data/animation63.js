setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'schladritz'},ab = {id: 'ab', name:'gottsched'},ac = {id: 'ac', name:'frau_gottsched'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.030303030303030303%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'bolza'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.060606060606060606%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2]  ; nodes.push( aa ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.090909090909090909%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad ae */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'gottfried'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ac },{source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.121212121212121212%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.151515151515151515%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab af ag */ var  aa = nodes[0] ,ab = nodes[1] ,af = {id: 'af', name:'gellert'},ag = {id: 'ag', name:'cato'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: ab , target: af },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.181818181818181818%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.212121212121212121%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ac ad af ag */ var  aa = {id: 'aa', name:'schladritz'},ab = {id: 'ab', name:'gottsched'},ac = {id: 'ac', name:'frau_gottsched'},ad = {id: 'ad', name:'bolza'},af = {id: 'af', name:'gellert'},ag = nodes[0]  ; nodes.push( aa,ab,ac,ad,af ); links.push( {source: af , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.242424242424242424%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ac ag */ var  ab = nodes[0] ,ac = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ac },{source: ab , target: ag },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.272727272727272727%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'bolza'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.30303030303030303%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab ac ag */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1] ,ag = {id: 'ag', name:'cato'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ag },{source: ab , target: ac },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab ac ad ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'bolza'},ag = nodes[3] ,ah = {id: 'ah', name:'wilhelmine'},ai = {id: 'ai', name:'gräfin'} ; nodes.push( ad,ah,ai ); links.push( {source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: ag },{source: ah , target: ai },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ag },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.363636363636363636%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ac ad af ag ah ai */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'gellert'},ag = nodes[3] ,ah = nodes[4] ,ai = nodes[5]  ; nodes.push( af ); links.push( {source: ab , target: ai },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ag },{source: ah , target: ai },{source: af , target: ai },{source: af , target: ah },{source: af , target: ag },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ag },{source: ag , target: ai },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.393939393939393939%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab ac ad af ag ah ai */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = nodes[5] ,ai = nodes[6]  ; nodes.push( aa ); links.push( {source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ah },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ah },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ah },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.424242424242424242%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ab ac ad af ag ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,af = nodes[4] ,ag = nodes[5] ,ai = nodes[6] ,aj = {id: 'aj', name:'katharina'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: ag },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: ag },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ag },{source: af , target: aj },{source: af , target: ai },{source: af , target: ag },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ag },{source: ai , target: aj },{source: ag , target: aj },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.454545454545454545%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aj','aa','ab','ac','af','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = {id: 'ah', name:'wilhelmine'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.484848484848484848%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab ac ad af ag ah ai aj */ var  aa = {id: 'aa', name:'schladritz'},ab = {id: 'ab', name:'gottsched'},ac = {id: 'ac', name:'frau_gottsched'},ad = {id: 'ad', name:'bolza'},af = {id: 'af', name:'gellert'},ag = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'gräfin'},aj = {id: 'aj', name:'katharina'} ; nodes.push( aa,ab,ac,ad,af,ai,aj ); links.push( {source: ab , target: ah },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj },{source: af , target: ai },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: ai },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ai },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.515151515151515152%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ab ac ad af ag ah ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,af = nodes[4] ,ag = nodes[5] ,ah = nodes[6] ,ai = nodes[7] ,aj = nodes[8]  ; /* nodes.push(); */ links.push( {source: ai , target: aj },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: af },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: af },{source: ah , target: ai },{source: ah , target: aj },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: af },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: af },{source: af , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.545454545454545455%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ai','ad','ah','ag','aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ac af */ var  ab = nodes[0] ,ac = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: af },{source: ab , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.575757575757575758%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ac af ag aj */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'cato'},aj = {id: 'aj', name:'katharina'} ; nodes.push( aa,ag,aj ); links.push( {source: af , target: aj },{source: af , target: ag },{source: ab , target: aj },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.606060606060606061%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af','ab','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ag ah aj */ var  ad = {id: 'ad', name:'bolza'},ag = nodes[0] ,ah = {id: 'ah', name:'wilhelmine'},aj = nodes[1]  ; nodes.push( ad,ah ); links.push( {source: ag , target: aj },{source: ag , target: ah },{source: ah , target: aj },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.636363636363636364%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ab ac ad af ag aj ak */ var  aa = {id: 'aa', name:'schladritz'},ab = {id: 'ab', name:'gottsched'},ac = {id: 'ac', name:'frau_gottsched'},ad = nodes[0] ,af = {id: 'af', name:'gellert'},ag = nodes[1] ,aj = nodes[2] ,ak = {id: 'ak', name:'siegmund'} ; nodes.push( aa,ab,ac,af,ak ); links.push( {source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: aj },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: aj },{source: af , target: ag },{source: af , target: ak },{source: af , target: aj },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ak },{source: ad , target: aj },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ak },{source: aa , target: aj },{source: ag , target: ak },{source: ag , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab','ac','aa','ag','ak','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.69696969696969697%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ac af */ var  ab = {id: 'ab', name:'gottsched'},ac = {id: 'ac', name:'frau_gottsched'},af = nodes[0]  ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: ab , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.727272727272727273%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ac af ag ah */ var  ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'cato'},ah = {id: 'ah', name:'wilhelmine'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ac },{source: af , target: ag },{source: af , target: ah },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.757575757575757576%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ab ac af ag ah aj */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ah = nodes[4] ,aj = {id: 'aj', name:'katharina'} ; nodes.push( aa,aj ); links.push( {source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: aj },{source: ah , target: aj },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: aj },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: aj },{source: ag , target: ah },{source: ag , target: aj },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.787878787878787879%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ac af ag ah ai */ var  ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ah = nodes[4] ,ai = {id: 'ai', name:'gräfin'} ; nodes.push( ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: af },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.818181818181818182%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab ac ad af ag ah ai ak */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'bolza'},af = nodes[2] ,ag = nodes[3] ,ah = nodes[4] ,ai = nodes[5] ,ak = {id: 'ak', name:'siegmund'} ; nodes.push( ad,ak ); links.push( {source: ab , target: ak },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ad },{source: af , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ac , target: ak },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ad },{source: ah , target: ak },{source: ah , target: ai },{source: ai , target: ak },{source: ad , target: ak },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.848484848484848485%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ab ac af ag ai ak */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ai = nodes[4] ,ak = nodes[5]  ; nodes.push( aa ); links.push( {source: ab , target: ac },{source: ab , target: ak },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ai },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ai },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ak },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ai },{source: ag , target: ak },{source: ag , target: ai },{source: af , target: ak },{source: af , target: ag },{source: af , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.878787878787878788%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab ac ad ae af ag ai ak */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'bolza'},ae = {id: 'ae', name:'gottfried'},af = nodes[2] ,ag = nodes[3] ,ai = nodes[4] ,ak = nodes[5]  ; nodes.push( ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: ak },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ai , target: ak },{source: ae , target: ai },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ai },{source: af , target: ak },{source: af , target: ag },{source: ag , target: ai },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.909090909090909091%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ab ac ad af ag ah ai ak al am an */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = {id: 'ah', name:'wilhelmine'},ai = nodes[5] ,ak = nodes[6] ,al = {id: 'al', name:'prinz'},am = {id: 'am', name:'zastrow'},an = {id: 'an', name:'wedell'} ; nodes.push( aa,ah,al,am,an ); links.push( {source: al , target: am },{source: al , target: an },{source: am , target: an },{source: al , target: am },{source: al , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: ah , target: al },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: ai },{source: aa , target: al },{source: aa , target: am },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ai },{source: af , target: al },{source: af , target: am },{source: af , target: al },{source: af , target: ak },{source: af , target: an },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: ag , target: al },{source: ag , target: am },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: ai },{source: ac , target: al },{source: ac , target: am },{source: ac , target: al },{source: ac , target: ak },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ai },{source: ad , target: al },{source: ad , target: am },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: an },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ai },{source: ab , target: al },{source: ab , target: am },{source: ab , target: al },{source: ab , target: ak },{source: ab , target: an },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ai },{source: ai , target: al },{source: ai , target: am },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.939393939393939394%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ab ac af ag ah ai ak al am an */ var  ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ah = nodes[4] ,ai = nodes[5] ,ak = nodes[6] ,al = nodes[7] ,am = nodes[8] ,an = nodes[9]  ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: ak , target: an },{source: ak , target: am },{source: al , target: an },{source: al , target: am },{source: am , target: an },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: an },{source: ai , target: am },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: an },{source: ah , target: am },{source: ah , target: ai },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: an },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ag },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: an },{source: ab , target: am },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ag },{source: af , target: ak },{source: af , target: al },{source: af , target: an },{source: af , target: am },{source: af , target: ai },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: an },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.969696969696969697%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'an','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai ak al */ var  aa = {id: 'aa', name:'schladritz'},ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'bolza'},ae = {id: 'ae', name:'gottfried'},af = nodes[2] ,ag = nodes[3] ,ah = nodes[4] ,ai = nodes[5] ,ak = nodes[6] ,al = nodes[7]  ; nodes.push( aa,ad,ae ); links.push( {source: ak , target: al },{source: af , target: ak },{source: af , target: al },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: ai },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ai },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ai },{source: ai , target: ak },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte und letzte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 160000);
