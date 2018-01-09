setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'geisterchor'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.564102564102564103%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = {id: 'ab', name:'vampyrmeister'},ac = {id: 'ac', name:'ruthwen'} ; nodes.push( ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.128205128205128205%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.692307692307692308%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'ruthwen'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.25641025641025641%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'janthe'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.820512820512820513%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ar */ var  ar = {id: 'ar', name:'allgemeiner_chor'} ; nodes.push( ar ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.384615384615384615%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ad ae ar */ var  ac = {id: 'ac', name:'ruthwen'},ad = {id: 'ad', name:'janthe'},ae = {id: 'ae', name:'berkley'},ar = nodes[0]  ; nodes.push( ac,ad,ae ); links.push( {source: ae , target: ar },{source: ad , target: ae },{source: ad , target: ar },{source: ac , target: ae },{source: ac , target: ar },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.948717948717948718%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad ae af ar */ var  ad = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'ein_diener'},ar = nodes[2]  ; nodes.push( af ); links.push( {source: ae , target: ar },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ar },{source: ad , target: af },{source: af , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.512820512820512821%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae','ad','ar','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'ruthwen'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.076923076923076923%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ag ah */ var  ac = nodes[0] ,ag = {id: 'ag', name:'aubry'},ah = {id: 'ah', name:'ruthwens'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.641025641025641026%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'malwina'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.205128205128205128%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag ai */ var  ag = {id: 'ag', name:'aubry'},ai = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.769230769230769231%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ag ai aj */ var  ag = nodes[0] ,ai = nodes[1] ,aj = {id: 'aj', name:'dauvenaut'} ; nodes.push( aj ); links.push( {source: ai , target: aj },{source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aj ak */ var  aj = nodes[0] ,ak = {id: 'ak', name:'george'} ; nodes.push( ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.897435897435897436%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ak al am an ao */ var  ak = nodes[0] ,al = {id: 'al', name:'alle_landleute'},am = {id: 'am', name:'alle_jäger'},an = {id: 'an', name:'vier_paar_landleute'},ao = {id: 'ao', name:'chor_der_jäger_und_landleute'} ; nodes.push( al,am,an,ao ); links.push( {source: al , target: an },{source: al , target: am },{source: al , target: ao },{source: an , target: ao },{source: am , target: an },{source: am , target: ao },{source: ak , target: al },{source: ak , target: an },{source: ak , target: am },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.461538461538461538%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','an','am','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac ag ai aj ao ar */ var  ac = {id: 'ac', name:'ruthwen'},ag = {id: 'ag', name:'aubry'},ai = {id: 'ai', name:'malwina'},aj = {id: 'aj', name:'dauvenaut'},ao = nodes[0] ,ar = {id: 'ar', name:'allgemeiner_chor'} ; nodes.push( ac,ag,ai,aj,ar ); links.push( {source: ao , target: ar },{source: aj , target: ao },{source: aj , target: ar },{source: ac , target: ao },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ar },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: ar },{source: ag , target: ao },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.025641025641025641%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ao','aj','ac','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ap aq ar as at au av aw */ var  ap = {id: 'ap', name:'chor_der_tänzer'},aq = {id: 'aq', name:'chor_der_trinker'},ar = nodes[0] ,as = {id: 'as', name:'gadshill'},at = {id: 'at', name:'blunt'},au = {id: 'au', name:'scrop'},av = {id: 'av', name:'perth'},aw = {id: 'aw', name:'frau_blunt'} ; nodes.push( ap,aq,as,at,au,av,aw ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: aw },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aw },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: au , target: av },{source: au , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.589743589743589744%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aq','ap','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ar at au av aw ax ay az */ var  ar = nodes[0] ,at = nodes[1] ,au = nodes[2] ,av = nodes[3] ,aw = nodes[4] ,ax = {id: 'ax', name:'emmy'},ay = {id: 'ay', name:'green'},az = {id: 'az', name:'die_mädchen'} ; nodes.push( ax,ay,az ); links.push( {source: ar , target: av },{source: ar , target: at },{source: ar , target: aw },{source: ar , target: ay },{source: ar , target: au },{source: ar , target: az },{source: ar , target: ax },{source: av , target: aw },{source: av , target: ay },{source: av , target: az },{source: av , target: ax },{source: at , target: av },{source: at , target: aw },{source: at , target: ay },{source: at , target: au },{source: at , target: az },{source: at , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ax },{source: ay , target: az },{source: au , target: av },{source: au , target: aw },{source: au , target: ay },{source: au , target: az },{source: au , target: ax },{source: ax , target: ay },{source: ax , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.153846153846153846%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ar','aw','ay','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac at av ax az */ var  ac = {id: 'ac', name:'ruthwen'},at = nodes[0] ,av = nodes[1] ,ax = nodes[2] ,az = nodes[3]  ; nodes.push( ac ); links.push( {source: ac , target: az },{source: ac , target: ax },{source: ac , target: av },{source: ac , target: at },{source: ax , target: az },{source: av , target: az },{source: av , target: ax },{source: at , target: az },{source: at , target: ax },{source: at , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.717948717948717949%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'az','av','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac ax */ var  ac = nodes[0] ,ax = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.282051282051282051%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ak ax */ var  ac = nodes[0] ,ak = {id: 'ak', name:'george'},ax = nodes[1]  ; nodes.push( ak ); links.push( {source: ak , target: ax },{source: ac , target: ak },{source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.846153846153846154%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ak ax */ var  ak = nodes[0] ,ax = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.410256410256410256%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ag ak ax */ var  ag = {id: 'ag', name:'aubry'},ak = nodes[0] ,ax = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: ak },{source: ag , target: ax },{source: ak , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.974358974358974359%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.538461538461538462%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'ruthwen'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.102564102564102564%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ag ak */ var  ag = nodes[0] ,ak = {id: 'ak', name:'george'} ; nodes.push( ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.230769230769230769%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac ax */ var  ac = {id: 'ac', name:'ruthwen'},ax = {id: 'ax', name:'emmy'} ; nodes.push( ac,ax ); links.push( {source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.794871794871794872%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ac','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ar as at au ay */ var  ar = {id: 'ar', name:'allgemeiner_chor'},as = {id: 'as', name:'gadshill'},at = {id: 'at', name:'blunt'},au = {id: 'au', name:'scrop'},ay = {id: 'ay', name:'green'} ; nodes.push( ar,as,at,au,ay ); links.push( {source: at , target: au },{source: at , target: ay },{source: au , target: ay },{source: as , target: at },{source: as , target: au },{source: as , target: ay },{source: ar , target: at },{source: ar , target: au },{source: ar , target: ay },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.358974358974358974%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'au','ay','as','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* at aw */ var  at = nodes[0] ,aw = {id: 'aw', name:'frau_blunt'} ; nodes.push( aw ); links.push( {source: at , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.923076923076923077%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ar at aw */ var  ar = {id: 'ar', name:'allgemeiner_chor'},at = nodes[0] ,aw = nodes[1]  ; nodes.push( ar ); links.push( {source: at , target: aw },{source: ar , target: at },{source: ar , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.487179487179487179%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'at','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ar as au av ay */ var  ar = nodes[0] ,as = {id: 'as', name:'gadshill'},au = {id: 'au', name:'scrop'},av = {id: 'av', name:'perth'},ay = {id: 'ay', name:'green'} ; nodes.push( as,au,av,ay ); links.push( {source: av , target: ay },{source: ar , target: av },{source: ar , target: ay },{source: ar , target: au },{source: ar , target: as },{source: au , target: av },{source: au , target: ay },{source: as , target: av },{source: as , target: ay },{source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.051282051282051282%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ay','au','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ak ar av */ var  ak = {id: 'ak', name:'george'},ar = nodes[0] ,av = nodes[1]  ; nodes.push( ak ); links.push( {source: ak , target: av },{source: ak , target: ar },{source: ar , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.615384615384615385%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ak','av','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'aubry'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.179487179487179487%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag ai */ var  ag = nodes[0] ,ai = {id: 'ai', name:'malwina'} ; nodes.push( ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.74358974358974359%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ag ai aj ba */ var  ag = nodes[0] ,ai = nodes[1] ,aj = {id: 'aj', name:'dauvenaut'},ba = {id: 'ba', name:'chor_der_gäste'} ; nodes.push( aj,ba ); links.push( {source: aj , target: ba },{source: ai , target: ba },{source: ai , target: aj },{source: ag , target: ba },{source: ag , target: aj },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.307692307692307692%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ac ag ai aj ar bb */ var  ac = {id: 'ac', name:'ruthwen'},ag = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,ar = {id: 'ar', name:'allgemeiner_chor'},bb = {id: 'bb', name:'haushofmeister'} ; nodes.push( ac,ar,bb ); links.push( {source: ai , target: bb },{source: ai , target: ar },{source: ai , target: aj },{source: ag , target: bb },{source: ag , target: ai },{source: ag , target: ar },{source: ag , target: aj },{source: ar , target: bb },{source: aj , target: bb },{source: aj , target: ar },{source: ac , target: bb },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.871794871794871795%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ac ag ai aj ar */ var  ac = nodes[0] ,ag = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ar = nodes[4]  ; /* nodes.push(); */ links.push( {source: aj , target: ar },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ar },{source: ai , target: aj },{source: ai , target: ar },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.435897435897435897%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ac ag ai aj ar */ var  ac = nodes[0] ,ag = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ar = nodes[4]  ; /* nodes.push(); */ links.push( {source: ag , target: ar },{source: ag , target: aj },{source: ag , target: ai },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: aj },{source: ac , target: ai },{source: aj , target: ar },{source: ai , target: ar },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 190000);
