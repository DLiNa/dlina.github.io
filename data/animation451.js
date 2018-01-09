setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'leonore'},ab = {id: 'ab', name:'arabella'},ac = {id: 'ac', name:'rosa'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.333333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'gianettino'},ae = {id: 'ae', name:'mohr'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.666666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'julia'},ai = {id: 'ai', name:'fiesco'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.333333333333333333%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad aj ak */ var  ad = {id: 'ad', name:'gianettino'},aj = {id: 'aj', name:'gäste'},ak = {id: 'ak', name:'lomellin'} ; nodes.push( ad,aj,ak ); links.push( {source: ad , target: aj },{source: ad , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.666666666666666667%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad ai aj ak am */ var  ad = nodes[0] ,ai = {id: 'ai', name:'fiesco'},aj = nodes[1] ,ak = nodes[2] ,am = {id: 'am', name:'eine_von_den_drei_masken'} ; nodes.push( ai,am ); links.push( {source: ai , target: ak },{source: ai , target: am },{source: ai , target: aj },{source: ak , target: am },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: am },{source: ad , target: aj },{source: aj , target: ak },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ak','ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* af ag ai al am an */ var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'},ai = nodes[0] ,al = {id: 'al', name:'masken'},am = nodes[1] ,an = {id: 'an', name:'verrina'} ; nodes.push( af,ag,al,an ); links.push( {source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: af , target: ai },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ag },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.333333333333333333%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'al','an','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ai am ao */ var  ai = nodes[0] ,am = nodes[1] ,ao = {id: 'ao', name:'bourgognino'} ; nodes.push( ao ); links.push( {source: am , target: ao },{source: ai , target: am },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.666666666666666667%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'mohr'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* an ap */ var  an = {id: 'an', name:'verrina'},ap = {id: 'ap', name:'berta'} ; nodes.push( an,ap ); links.push( {source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.333333333333333333%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* af ag an ap */ var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'},an = nodes[0] ,ap = nodes[1]  ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: af , target: an },{source: af , target: ap },{source: ag , target: an },{source: ag , target: ap },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.666666666666666667%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* af ag an ao */ var  af = nodes[0] ,ag = nodes[1] ,an = nodes[2] ,ao = {id: 'ao', name:'bourgognino'} ; nodes.push( ao ); links.push( {source: an , target: ao },{source: af , target: ao },{source: af , target: an },{source: af , target: ag },{source: ag , target: ao },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af an ao */ var  af = nodes[0] ,an = nodes[1] ,ao = nodes[2]  ; /* nodes.push(); */ links.push( {source: af , target: an },{source: af , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.333333333333333333%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'leonore'},ab = {id: 'ab', name:'arabella'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.666666666666666667%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ab ah */ var  aa = nodes[0] ,ab = nodes[1] ,ah = {id: 'ah', name:'julia'} ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'calcagno'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.333333333333333333%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'mohr'},ai = {id: 'ai', name:'fiesco'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.666666666666666667%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ai aq ar as */ var  ai = nodes[0] ,aq = {id: 'aq', name:'zibo'},ar = {id: 'ar', name:'zenturione'},as = {id: 'as', name:'asserato'} ; nodes.push( aq,ar,as ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: ar , target: as },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.333333333333333333%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'mohr'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.666666666666666667%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ai at au av aw */ var  ai = nodes[0] ,at = {id: 'at', name:'einige'},au = {id: 'au', name:'erster_bürger'},av = {id: 'av', name:'zweiter'},aw = {id: 'aw', name:'ein_dritter'} ; nodes.push( at,au,av,aw ); links.push( {source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: au },{source: at , target: au },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: au },{source: ai , target: au },{source: au , target: av },{source: au , target: aw },{source: au , target: av },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'at','au','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'mohr'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.333333333333333333%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'leonore'},ac = {id: 'ac', name:'rosa'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.666666666666666667%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ac ax */ var  aa = nodes[0] ,ac = nodes[1] ,ax = {id: 'ax', name:'bella'} ; nodes.push( ax ); links.push( {source: aa , target: ax },{source: aa , target: ac },{source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ax','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ad ak ay */ var  ad = {id: 'ad', name:'gianettino'},ak = {id: 'ak', name:'lomellin'},ay = {id: 'ay', name:'andreas'} ; nodes.push( ad,ak,ay ); links.push( {source: ad , target: ak },{source: ad , target: ay },{source: ak , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ad ay */ var  ad = nodes[0] ,ay = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.666666666666666667%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ad ak */ var  ad = nodes[0] ,ak = {id: 'ak', name:'lomellin'} ; nodes.push( ak ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'mohr'},ai = {id: 'ai', name:'fiesco'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.333333333333333333%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.666666666666666667%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ai an ao az */ var  ai = nodes[0] ,an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'},az = {id: 'az', name:'romano'} ; nodes.push( an,ao,az ); links.push( {source: ai , target: an },{source: ai , target: ao },{source: ai , target: az },{source: an , target: ao },{source: an , target: az },{source: ao , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ai an ao */ var  ai = nodes[0] ,an = nodes[1] ,ao = nodes[2]  ; /* nodes.push(); */ links.push( {source: ai , target: an },{source: ai , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.333333333333333333%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.666666666666666667%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* an ao */ var  an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'} ; nodes.push( an,ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ao','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'fiesco'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.333333333333333333%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ai */ var  aa = {id: 'aa', name:'leonore'},ai = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.666666666666666667%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'mohr'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* af ag ai an ao */ var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'},ai = nodes[0] ,an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'} ; nodes.push( af,ag,an,ao ); links.push( {source: ai , target: an },{source: ai , target: ao },{source: an , target: ao },{source: af , target: ai },{source: af , target: an },{source: af , target: ao },{source: af , target: ag },{source: ag , target: ai },{source: ag , target: an },{source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.333333333333333333%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'an','ao','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'mohr'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.666666666666666667%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ad ah */ var  ad = {id: 'ad', name:'gianettino'},ah = {id: 'ah', name:'julia'} ; nodes.push( ad,ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.333333333333333333%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ad ah ak */ var  ad = nodes[0] ,ah = nodes[1] ,ak = {id: 'ak', name:'lomellin'} ; nodes.push( ak ); links.push( {source: ad , target: ak },{source: ad , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.666666666666666667%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ad ah ai */ var  ad = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'fiesco'} ; nodes.push( ai ); links.push( {source: ad , target: ai },{source: ad , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ad ah ai ba */ var  ad = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,ba = {id: 'ba', name:'teutscher'} ; nodes.push( ba ); links.push( {source: ad , target: ba },{source: ad , target: ai },{source: ad , target: ah },{source: ai , target: ba },{source: ah , target: ba },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.333333333333333333%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ad','ba','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'bourgognino'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.666666666666666667%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ar bb bc */ var  ar = {id: 'ar', name:'zenturione'},bb = {id: 'bb', name:'wachen'},bc = {id: 'bc', name:'schildwachen_am_hoftor'} ; nodes.push( ar,bb,bc ); links.push( {source: bb , target: bc },{source: ar , target: bb },{source: ar , target: bc },{source: ar , target: bb },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aq ar bb bc */ var  aq = {id: 'aq', name:'zibo'},ar = nodes[0] ,bb = nodes[1] ,bc = nodes[2]  ; nodes.push( aq ); links.push( {source: aq , target: ar },{source: aq , target: bb },{source: aq , target: bc },{source: ar , target: bb },{source: ar , target: bc },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.333333333333333333%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aq ar as bb bc */ var  aq = nodes[0] ,ar = nodes[1] ,as = {id: 'as', name:'asserato'},bb = nodes[2] ,bc = nodes[3]  ; nodes.push( as ); links.push( {source: as , target: bc },{source: as , target: bb },{source: aq , target: as },{source: aq , target: ar },{source: aq , target: bc },{source: aq , target: bb },{source: ar , target: as },{source: ar , target: bc },{source: ar , target: bb },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.666666666666666667%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'as','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ag an ao aq ar bc */ var  ag = {id: 'ag', name:'sacco'},an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'},aq = nodes[0] ,ar = nodes[1] ,bc = nodes[2]  ; nodes.push( ag,an,ao ); links.push( {source: an , target: bc },{source: an , target: bc },{source: an , target: aq },{source: an , target: ar },{source: an , target: ao },{source: aq , target: bc },{source: aq , target: bc },{source: aq , target: ar },{source: ag , target: bc },{source: ag , target: bc },{source: ag , target: an },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: ao },{source: ar , target: bc },{source: ar , target: bc },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: aq },{source: ao , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* af ag ai an ao aq ar as bc */ var  af = {id: 'af', name:'calcagno'},ag = nodes[0] ,ai = {id: 'ai', name:'fiesco'},an = nodes[1] ,ao = nodes[2] ,aq = nodes[3] ,ar = nodes[4] ,as = {id: 'as', name:'asserato'},bc = nodes[5]  ; nodes.push( af,ai,as ); links.push( {source: ai , target: an },{source: ai , target: ao },{source: ai , target: ar },{source: ai , target: aq },{source: ai , target: as },{source: ai , target: bc },{source: ai , target: bc },{source: an , target: ao },{source: an , target: ar },{source: an , target: aq },{source: an , target: as },{source: an , target: bc },{source: an , target: bc },{source: ao , target: ar },{source: ao , target: aq },{source: ao , target: as },{source: ao , target: bc },{source: ao , target: bc },{source: ag , target: ai },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ar },{source: ag , target: aq },{source: ag , target: as },{source: ag , target: bc },{source: ag , target: bc },{source: ar , target: as },{source: ar , target: bc },{source: ar , target: bc },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: bc },{source: aq , target: bc },{source: as , target: bc },{source: as , target: bc },{source: af , target: ai },{source: af , target: an },{source: af , target: ao },{source: af , target: ag },{source: af , target: ar },{source: af , target: aq },{source: af , target: as },{source: af , target: bc },{source: af , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.333333333333333333%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ag','ar','aq','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* af ai an ao bc bd */ var  af = nodes[0] ,ai = nodes[1] ,an = nodes[2] ,ao = nodes[3] ,bc = nodes[4] ,bd = {id: 'bd', name:'eine_stimme'} ; nodes.push( bd ); links.push( {source: af , target: ao },{source: af , target: ai },{source: af , target: an },{source: af , target: bc },{source: af , target: bc },{source: af , target: bd },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: bd },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: bc },{source: ai , target: bc },{source: ai , target: bd },{source: an , target: ao },{source: an , target: bc },{source: an , target: bc },{source: an , target: bd },{source: bc , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'af','ao','an','bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ae ai ba */ var  ae = {id: 'ae', name:'mohr'},ai = nodes[0] ,ba = {id: 'ba', name:'teutscher'} ; nodes.push( ae,ba ); links.push( {source: ai , target: ba },{source: ae , target: ai },{source: ae , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ae af ai an ao be bh */ var  ae = nodes[0] ,af = {id: 'af', name:'calcagno'},ai = nodes[1] ,an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'},be = {id: 'be', name:'verschworene'},bh = {id: 'bh', name:'einige_verschworene'} ; nodes.push( af,an,ao,be,bh ); links.push( {source: be , target: bh },{source: ai , target: be },{source: ai , target: bh },{source: ai , target: an },{source: ai , target: ao },{source: an , target: be },{source: an , target: bh },{source: an , target: ao },{source: ao , target: be },{source: ao , target: bh },{source: af , target: be },{source: af , target: bh },{source: af , target: ai },{source: af , target: an },{source: af , target: ao },{source: ae , target: be },{source: ae , target: bh },{source: ae , target: ai },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.333333333333333333%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'be','bh','an','ao','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ai bf */ var  ai = nodes[0] ,bf = {id: 'bf', name:'bedienter'} ; nodes.push( bf ); links.push( {source: ai , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.666666666666666667%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'bf','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* aa ac ax */ var  aa = {id: 'aa', name:'leonore'},ac = {id: 'ac', name:'rosa'},ax = {id: 'ax', name:'bella'} ; nodes.push( aa,ac,ax ); links.push( {source: aa , target: ac },{source: aa , target: ax },{source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'aa','ac','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'julia'},ai = {id: 'ai', name:'fiesco'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.333333333333333333%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* aa ah ai */ var  aa = {id: 'aa', name:'leonore'},ah = nodes[0] ,ai = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ai },{source: aa , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.666666666666666667%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* aa ai */ var  aa = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ai ao be bh */ var  ai = nodes[0] ,ao = {id: 'ao', name:'bourgognino'},be = {id: 'be', name:'verschworene'},bh = {id: 'bh', name:'einige_verschworene'} ; nodes.push( ao,be,bh ); links.push( {source: be , target: bh },{source: ai , target: be },{source: ai , target: bh },{source: ai , target: ao },{source: ao , target: be },{source: ao , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.333333333333333333%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'be','bh','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ai ay */ var  ai = nodes[0] ,ay = {id: 'ay', name:'andreas'} ; nodes.push( ay ); links.push( {source: ai , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.666666666666666667%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ai','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ad ak */ var  ad = {id: 'ad', name:'gianettino'},ak = {id: 'ak', name:'lomellin'} ; nodes.push( ad,ak ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ad ak ao ar */ var  ad = nodes[0] ,ak = nodes[1] ,ao = {id: 'ao', name:'bourgognino'},ar = {id: 'ar', name:'zenturione'} ; nodes.push( ao,ar ); links.push( {source: ao , target: ar },{source: ad , target: ao },{source: ad , target: ar },{source: ad , target: ak },{source: ak , target: ao },{source: ak , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.333333333333333333%' ;
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ao','ar','ad','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* af ay ba bg */ var  af = {id: 'af', name:'calcagno'},ay = {id: 'ay', name:'andreas'},ba = {id: 'ba', name:'teutscher'},bg = {id: 'bg', name:'teutsche'} ; nodes.push( af,ay,ba,bg ); links.push( {source: ba , target: bg },{source: ay , target: ba },{source: ay , target: bg },{source: af , target: ba },{source: af , target: ay },{source: af , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.666666666666666667%' ;
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ba','ay','af','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* aa ab ag */ var  aa = {id: 'aa', name:'leonore'},ab = {id: 'ab', name:'arabella'},ag = {id: 'ag', name:'sacco'} ; nodes.push( aa,ab,ag ); links.push( {source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84%' ;
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'calcagno'},ag = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.333333333333333333%' ;
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'mohr'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.666666666666666667%' ;
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'bourgognino'},ap = {id: 'ap', name:'berta'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88%' ;
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* ai aq */ var  ai = {id: 'ai', name:'fiesco'},aq = {id: 'aq', name:'zibo'} ; nodes.push( ai,aq ); links.push( {source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.333333333333333333%' ;
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68');nodes.sort(compare); /* ae ag ai */ var  ae = {id: 'ae', name:'mohr'},ag = {id: 'ag', name:'sacco'},ai = nodes[0]  ; nodes.push( ae,ag ); links.push( {source: ag , target: ai },{source: ae , target: ag },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.666666666666666667%' ;
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92%' ;
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70');nodes.sort(compare); /* af ag ai aq ar */ var  af = {id: 'af', name:'calcagno'},ag = {id: 'ag', name:'sacco'},ai = nodes[0] ,aq = {id: 'aq', name:'zibo'},ar = {id: 'ar', name:'zenturione'} ; nodes.push( af,ag,aq,ar ); links.push( {source: ai , target: aq },{source: ai , target: ar },{source: af , target: ai },{source: af , target: aq },{source: af , target: ar },{source: af , target: ag },{source: aq , target: ar },{source: ag , target: ai },{source: ag , target: aq },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.333333333333333333%' ;
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [ 'ar','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71');nodes.sort(compare); /* ab af ai aq bh */ var  ab = {id: 'ab', name:'arabella'},af = nodes[0] ,ai = nodes[1] ,aq = nodes[2] ,bh = {id: 'bh', name:'einige_verschworene'} ; nodes.push( ab,bh ); links.push( {source: ab , target: ai },{source: ab , target: bh },{source: ab , target: af },{source: ab , target: aq },{source: ai , target: bh },{source: ai , target: aq },{source: af , target: ai },{source: af , target: bh },{source: af , target: aq },{source: aq , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.666666666666666667%' ;
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [ 'ab','ai','bh','af','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72');nodes.sort(compare); /* ak ay */ var  ak = {id: 'ak', name:'lomellin'},ay = {id: 'ay', name:'andreas'} ; nodes.push( ak,ay ); links.push( {source: ak , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96%' ;
}, 355000);

setTimeout(function() { console.log('remv72'); var rm = [ 'ay','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 358750);

setTimeout(function() { console.log('load73');nodes.sort(compare); /* an ao ap */ var  an = {id: 'an', name:'verrina'},ao = {id: 'ao', name:'bourgognino'},ap = {id: 'ap', name:'berta'} ; nodes.push( an,ao,ap ); links.push( {source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.333333333333333333%' ;
}, 360000);

setTimeout(function() { console.log('remv73'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 363750);

setTimeout(function() { console.log('load74');nodes.sort(compare); /* ai an */ var  ai = {id: 'ai', name:'fiesco'},an = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.666666666666666667%' ;
}, 365000);

setTimeout(function() { console.log('remv74'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 368750);

setTimeout(function() { console.log('load75');nodes.sort(compare); /* af an ar */ var  af = {id: 'af', name:'calcagno'},an = nodes[0] ,ar = {id: 'ar', name:'zenturione'} ; nodes.push( af,ar ); links.push( {source: af , target: an },{source: af , target: ar },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 370000);
