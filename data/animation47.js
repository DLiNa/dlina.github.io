setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'rose'},ab = {id: 'ab', name:'brünnow'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.040816326530612245%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'heinrich'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.08163265306122449%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'die_mutter'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.122448979591836735%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac ad ae */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'nettelbeck'} ; nodes.push( ae ); links.push( {source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.16326530612244898%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ae af */ var  ad = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'arndt'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.204081632653061224%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'rose'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.244897959183673469%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ae ag */ var  aa = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'gefreite'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: aa , target: ag },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.285714285714285714%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ad ae ag */ var  aa = nodes[0] ,ad = {id: 'ad', name:'die_mutter'},ae = nodes[1] ,ag = nodes[2]  ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: ad , target: ag },{source: ae , target: ag },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.326530612244897959%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae ag ah */ var  ae = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'würges'} ; nodes.push( ah ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.367346938775510204%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ae ag ah */ var  ae = nodes[0] ,ag = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: ag , target: ah },{source: ae , target: ah },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.408163265306122449%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ae af ag ah */ var  aa = {id: 'aa', name:'rose'},ae = nodes[0] ,af = {id: 'af', name:'arndt'},ag = nodes[1] ,ah = nodes[2]  ; nodes.push( aa,af ); links.push( {source: af , target: ag },{source: af , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.448979591836734694%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ad ae af ah */ var  aa = nodes[0] ,ad = {id: 'ad', name:'die_mutter'},ae = nodes[1] ,af = nodes[2] ,ah = nodes[3]  ; nodes.push( ad ); links.push( {source: ae , target: af },{source: ae , target: ah },{source: af , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ad },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.489795918367346939%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae','af','aa','ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'brünnow'},ai = {id: 'ai', name:'gneisenau'} ; nodes.push( ab,ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.530612244897959184%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = {id: 'aj', name:'kellermeister'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.571428571428571429%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac ah ai aj ak al am an */ var  ac = {id: 'ac', name:'heinrich'},ah = {id: 'ah', name:'würges'},ai = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'grüneberg'},al = {id: 'al', name:'schröder'},am = {id: 'am', name:'geertz'},an = {id: 'an', name:'rector'} ; nodes.push( ac,ah,ak,al,am,an ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ai },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.612244897959183673%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','am','an','ai','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ae ah aj ak */ var  ae = {id: 'ae', name:'nettelbeck'},ah = nodes[0] ,aj = nodes[1] ,ak = nodes[2]  ; nodes.push( ae ); links.push( {source: ae , target: ah },{source: ae , target: aj },{source: ae , target: ak },{source: ah , target: aj },{source: ah , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.653061224489795918%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ac ad ae ah ai ak */ var  aa = {id: 'aa', name:'rose'},ac = {id: 'ac', name:'heinrich'},ad = {id: 'ad', name:'die_mutter'},ae = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'gneisenau'},ak = nodes[2]  ; nodes.push( aa,ac,ad,ai ); links.push( {source: ae , target: ak },{source: ae , target: ai },{source: ae , target: ah },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: ah },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ak },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ac },{source: ai , target: ak },{source: ah , target: ak },{source: ah , target: ai },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: ai },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.693877551020408163%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ad ae ah ai ak al am an */ var  ab = {id: 'ab', name:'brünnow'},ad = nodes[0] ,ae = nodes[1] ,ah = nodes[2] ,ai = nodes[3] ,ak = nodes[4] ,al = {id: 'al', name:'schröder'},am = {id: 'am', name:'geertz'},an = {id: 'an', name:'rector'} ; nodes.push( ab,al,am,an ); links.push( {source: ab , target: ai },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: an },{source: ab , target: am },{source: ab , target: al },{source: ab , target: ak },{source: ai , target: an },{source: ai , target: am },{source: ai , target: al },{source: ai , target: ak },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: an },{source: ae , target: am },{source: ae , target: al },{source: ae , target: ak },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: an },{source: ad , target: am },{source: ad , target: al },{source: ad , target: ak },{source: ah , target: ai },{source: ah , target: an },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ak },{source: am , target: an },{source: al , target: an },{source: al , target: am },{source: ak , target: an },{source: ak , target: am },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.734693877551020408%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','ai','ae','ad','ah','an','am','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac al */ var  ac = {id: 'ac', name:'heinrich'},al = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.775510204081632653%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'al','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* af ah */ var  af = {id: 'af', name:'arndt'},ah = {id: 'ah', name:'würges'} ; nodes.push( af,ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.816326530612244898%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* af ah an */ var  af = nodes[0] ,ah = nodes[1] ,an = {id: 'an', name:'rector'} ; nodes.push( an ); links.push( {source: ah , target: an },{source: af , target: ah },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.857142857142857143%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'an','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ah */ var  ab = {id: 'ab', name:'brünnow'},ah = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.897959183673469388%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ae ao */ var  aa = {id: 'aa', name:'rose'},ae = {id: 'ae', name:'nettelbeck'},ao = {id: 'ao', name:'soldat'} ; nodes.push( aa,ae,ao ); links.push( {source: aa , target: ao },{source: aa , target: ae },{source: ae , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.938775510204081633%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ae al */ var  aa = nodes[0] ,ae = nodes[1] ,al = {id: 'al', name:'schröder'} ; nodes.push( al ); links.push( {source: ae , target: al },{source: aa , target: al },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.979591836734693878%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'al','ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ak am ap aq ar as */ var  ac = {id: 'ac', name:'heinrich'},ak = {id: 'ak', name:'grüneberg'},am = {id: 'am', name:'geertz'},ap = {id: 'ap', name:'erster_bürger'},aq = {id: 'aq', name:'zweiter_bürger'},ar = {id: 'ar', name:'dritter_bürger'},as = {id: 'as', name:'vierter_bürger'} ; nodes.push( ac,ak,am,ap,aq,ar,as ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: am },{source: ak , target: ar },{source: ak , target: as },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ak },{source: ac , target: am },{source: ac , target: ar },{source: ac , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.020408163265306122%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ap','aq','ak','am','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'rose'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.061224489795918367%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa ac ai ak am ap aq ar as */ var  aa = nodes[0] ,ac = nodes[1] ,ai = {id: 'ai', name:'gneisenau'},ak = {id: 'ak', name:'grüneberg'},am = {id: 'am', name:'geertz'},ap = {id: 'ap', name:'erster_bürger'},aq = {id: 'aq', name:'zweiter_bürger'},ar = {id: 'ar', name:'dritter_bürger'},as = {id: 'as', name:'vierter_bürger'} ; nodes.push( ai,ak,am,ap,aq,ar,as ); links.push( {source: ai , target: ak },{source: ai , target: am },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: am },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: as },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.102040816326530612%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ac','aa','am','ap','aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'nettelbeck'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.142857142857142857%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ae at */ var  ae = nodes[0] ,at = {id: 'at', name:'weber'} ; nodes.push( at ); links.push( {source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.183673469387755102%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ae ai at */ var  ae = nodes[0] ,ai = {id: 'ai', name:'gneisenau'},at = nodes[1]  ; nodes.push( ai ); links.push( {source: ai , target: at },{source: ae , target: ai },{source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.224489795918367347%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae ai au */ var  ae = nodes[0] ,ai = nodes[1] ,au = {id: 'au', name:'offizier'} ; nodes.push( au ); links.push( {source: ai , target: au },{source: ae , target: ai },{source: ae , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.265306122448979592%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'au','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.306122448979591837%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'nettelbeck'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.346938775510204082%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ad ae ai at */ var  aa = {id: 'aa', name:'rose'},ad = {id: 'ad', name:'die_mutter'},ae = nodes[0] ,ai = nodes[1] ,at = {id: 'at', name:'weber'} ; nodes.push( aa,ad,at ); links.push( {source: ai , target: at },{source: ae , target: at },{source: ae , target: ai },{source: ad , target: at },{source: ad , target: ai },{source: ad , target: ae },{source: aa , target: at },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.387755102040816327%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'at','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ac ad ai */ var  aa = nodes[0] ,ac = {id: 'ac', name:'heinrich'},ad = nodes[1] ,ai = nodes[2]  ; nodes.push( ac ); links.push( {source: ad , target: ai },{source: ac , target: ad },{source: ac , target: ai },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.428571428571428571%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ac ai */ var  ac = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.469387755102040816%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ab ac ae ah ai ak al am an at av */ var  ab = {id: 'ab', name:'brünnow'},ac = nodes[0] ,ae = {id: 'ae', name:'nettelbeck'},ah = {id: 'ah', name:'würges'},ai = nodes[1] ,ak = {id: 'ak', name:'grüneberg'},al = {id: 'al', name:'schröder'},am = {id: 'am', name:'geertz'},an = {id: 'an', name:'rector'},at = {id: 'at', name:'weber'},av = {id: 'av', name:'steinmetz'} ; nodes.push( ab,ae,ah,ak,al,am,an,at,av ); links.push( {source: ai , target: av },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: an },{source: ai , target: am },{source: ai , target: at },{source: ae , target: ai },{source: ae , target: av },{source: ae , target: al },{source: ae , target: ak },{source: ae , target: an },{source: ae , target: ah },{source: ae , target: am },{source: ae , target: at },{source: ab , target: ai },{source: ab , target: av },{source: ab , target: ae },{source: ab , target: al },{source: ab , target: ak },{source: ab , target: an },{source: ab , target: ah },{source: ab , target: am },{source: ab , target: at },{source: ab , target: ac },{source: al , target: av },{source: al , target: an },{source: al , target: am },{source: al , target: at },{source: ak , target: av },{source: ak , target: al },{source: ak , target: an },{source: ak , target: am },{source: ak , target: at },{source: an , target: av },{source: an , target: at },{source: ah , target: ai },{source: ah , target: av },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: am },{source: ah , target: at },{source: am , target: av },{source: am , target: an },{source: am , target: at },{source: at , target: av },{source: ac , target: ai },{source: ac , target: av },{source: ac , target: ae },{source: ac , target: al },{source: ac , target: ak },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: am },{source: ac , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.510204081632653061%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'av','ab','al','ak','an','ah','am','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ae ai at */ var  ae = nodes[0] ,ai = nodes[1] ,at = nodes[2]  ; /* nodes.push(); */ links.push( {source: ai , target: at },{source: ae , target: ai },{source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.551020408163265306%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ai','ae','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'rose'},ad = {id: 'ad', name:'die_mutter'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.591836734693877551%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ad an */ var  aa = nodes[0] ,ad = nodes[1] ,an = {id: 'an', name:'rector'} ; nodes.push( an ); links.push( {source: aa , target: an },{source: aa , target: ad },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.632653061224489796%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ad ae */ var  aa = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'nettelbeck'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.673469387755102041%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ae','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ah an */ var  ah = {id: 'ah', name:'würges'},an = {id: 'an', name:'rector'} ; nodes.push( ah,an ); links.push( {source: ah , target: an },{source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.714285714285714286%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'an','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'rose'},ac = {id: 'ac', name:'heinrich'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.755102040816326531%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aa ah ak am */ var  aa = nodes[0] ,ah = {id: 'ah', name:'würges'},ak = {id: 'ak', name:'grüneberg'},am = {id: 'am', name:'geertz'} ; nodes.push( ah,ak,am ); links.push( {source: ah , target: ak },{source: ah , target: am },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: am },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.795918367346938776%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aa ae ah */ var  aa = nodes[0] ,ae = {id: 'ae', name:'nettelbeck'},ah = nodes[1]  ; nodes.push( ae ); links.push( {source: aa , target: ah },{source: aa , target: ae },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.83673469387755102%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = {id: 'ad', name:'die_mutter'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.877551020408163265%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa ad ai au */ var  aa = nodes[0] ,ad = nodes[1] ,ai = {id: 'ai', name:'gneisenau'},au = {id: 'au', name:'offizier'} ; nodes.push( ai,au ); links.push( {source: ai , target: au },{source: aa , target: ai },{source: aa , target: au },{source: aa , target: ad },{source: ad , target: ai },{source: ad , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.91836734693877551%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'au','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ai aw ax ay */ var  ai = nodes[0] ,aw = {id: 'aw', name:'erste_ordonnanz'},ax = {id: 'ax', name:'zweite_ordonnanz'},ay = {id: 'ay', name:'dritte_ordonnanz'} ; nodes.push( aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.959183673469387755%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'aw','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aa ac ae ai */ var  aa = {id: 'aa', name:'rose'},ac = {id: 'ac', name:'heinrich'},ae = {id: 'ae', name:'nettelbeck'},ai = nodes[0]  ; nodes.push( aa,ac,ae ); links.push( {source: ac , target: ai },{source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 240000);
