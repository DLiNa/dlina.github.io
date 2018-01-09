setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'andere'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.225806451612903226%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'fasanella'},ac = {id: 'ac', name:'ghismonde'},ad = {id: 'ad', name:'alle_verbannte'} ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.451612903225806452%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ae af */ var  ac = nodes[0] ,ae = {id: 'ae', name:'eine_nonne'},af = {id: 'af', name:'nonnenchor'} ; nodes.push( ae,af ); links.push( {source: ac , target: ae },{source: ac , target: af },{source: ac , target: af },{source: ae , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.677419354838709677%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ag ah ai av */ var  ac = nodes[0] ,ag = {id: 'ag', name:'manfred'},ah = {id: 'ah', name:'ein_theil_der_ritter_manfreds'},ai = {id: 'ai', name:'eckart'},av = {id: 'av', name:'chor_der_frauen'} ; nodes.push( ag,ah,ai,av ); links.push( {source: ag , target: ah },{source: ag , target: av },{source: ag , target: ai },{source: ah , target: av },{source: ah , target: ai },{source: ai , target: av },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: av },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.903225806451612903%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac af ag ah ai aj av */ var  ac = nodes[0] ,af = {id: 'af', name:'nonnenchor'},ag = nodes[1] ,ah = nodes[2] ,ai = nodes[3] ,aj = {id: 'aj', name:'kardinal'},av = nodes[4]  ; nodes.push( af,aj ); links.push( {source: aj , target: av },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: av },{source: ag , target: ai },{source: ah , target: aj },{source: ah , target: av },{source: ah , target: ai },{source: af , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: av },{source: af , target: ai },{source: ac , target: aj },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: av },{source: ac , target: af },{source: ac , target: ai },{source: ai , target: aj },{source: ai , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.129032258064516129%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aj','ah','av','af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ag ai */ var  ag = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.354838709677419355%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag ak */ var  ag = nodes[0] ,ak = {id: 'ak', name:'helene'} ; nodes.push( ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.580645161290322581%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad aj */ var  ad = {id: 'ad', name:'alle_verbannte'},aj = {id: 'aj', name:'kardinal'} ; nodes.push( ad,aj ); links.push( {source: ad , target: aj },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.806451612903225806%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad ag al am */ var  ad = nodes[0] ,ag = {id: 'ag', name:'manfred'},al = {id: 'al', name:'borello'},am = {id: 'am', name:'fulco'} ; nodes.push( ag,al,am ); links.push( {source: ad , target: al },{source: ad , target: am },{source: ad , target: ag },{source: al , target: am },{source: ag , target: al },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.032258064516129032%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ad','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag ai */ var  ag = nodes[0] ,ai = {id: 'ai', name:'eckart'} ; nodes.push( ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.258064516129032258%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.483870967741935484%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab an */ var  ab = {id: 'ab', name:'fasanella'},an = {id: 'an', name:'annibaldi'} ; nodes.push( ab,an ); links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.70967741935483871%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac ad ag ai al */ var  ac = {id: 'ac', name:'ghismonde'},ad = {id: 'ad', name:'alle_verbannte'},ag = {id: 'ag', name:'manfred'},ai = {id: 'ai', name:'eckart'},al = {id: 'al', name:'borello'} ; nodes.push( ac,ad,ag,ai,al ); links.push( {source: ag , target: al },{source: ag , target: ai },{source: ac , target: ag },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: ai },{source: ad , target: ag },{source: ad , target: al },{source: ad , target: ai },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.935483870967741935%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'al','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.161290322580645161%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'chor_der_landleute'},ap = {id: 'ap', name:'chor_der_schiffer'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.387096774193548387%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ai ak aq */ var  ai = {id: 'ai', name:'eckart'},ak = {id: 'ak', name:'helene'},aq = {id: 'aq', name:'page'} ; nodes.push( ai,ak,aq ); links.push( {source: ak , target: aq },{source: ai , target: ak },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.612903225806451613%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ak','ai','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac ag ar as */ var  ac = {id: 'ac', name:'ghismonde'},ag = {id: 'ag', name:'manfred'},ar = {id: 'ar', name:'chor_der_bacchantinnen'},as = {id: 'as', name:'chor_der_priester_und_chorknaben'} ; nodes.push( ac,ag,ar,as ); links.push( {source: ar , target: as },{source: ag , target: ar },{source: ag , target: as },{source: ac , target: ar },{source: ac , target: ag },{source: ac , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.838709677419354839%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ag ah aj av */ var  ac = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'ein_theil_der_ritter_manfreds'},aj = {id: 'aj', name:'kardinal'},av = {id: 'av', name:'chor_der_frauen'} ; nodes.push( ah,aj,av ); links.push( {source: aj , target: av },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: av },{source: ah , target: aj },{source: ah , target: av },{source: ah , target: aj },{source: ah , target: av },{source: ac , target: aj },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.064516129032258065%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aj','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac at av */ var  ac = nodes[0] ,at = {id: 'at', name:'chor_der_mädchen'},av = nodes[1]  ; nodes.push( at ); links.push( {source: at , target: av },{source: ac , target: at },{source: ac , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.29032258064516129%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'at','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.516129032258064516%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = {id: 'ag', name:'manfred'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.741935483870967742%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.967741935483870968%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'manfred'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.193548387096774194%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'eckart'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.419354838709677419%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag ai au */ var  ag = {id: 'ag', name:'manfred'},ai = nodes[0] ,au = {id: 'au', name:'chor_der_sarazenen'} ; nodes.push( ag,au ); links.push( {source: ag , target: ai },{source: ag , target: au },{source: ai , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.645161290322580645%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag','ai','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ak aq */ var  ak = {id: 'ak', name:'helene'},aq = {id: 'aq', name:'page'} ; nodes.push( ak,aq ); links.push( {source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.870967741935483871%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ag ai ak aq */ var  ac = {id: 'ac', name:'ghismonde'},ag = {id: 'ag', name:'manfred'},ai = {id: 'ai', name:'eckart'},ak = nodes[0] ,aq = nodes[1]  ; nodes.push( ac,ag,ai ); links.push( {source: ac , target: ak },{source: ac , target: aq },{source: ac , target: ag },{source: ac , target: ai },{source: ak , target: aq },{source: ag , target: ak },{source: ag , target: aq },{source: ag , target: ai },{source: ai , target: ak },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.096774193548387097%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac','ak','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ag ai au */ var  ag = nodes[0] ,ai = nodes[1] ,au = {id: 'au', name:'chor_der_sarazenen'} ; nodes.push( au ); links.push( {source: ag , target: ai },{source: ag , target: au },{source: ai , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.322580645161290323%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ag','ai','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'ghismonde'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.548387096774193548%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ak */ var  ak = {id: 'ak', name:'helene'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.774193548387096774%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ad aj ak av aw */ var  ad = {id: 'ad', name:'alle_verbannte'},aj = {id: 'aj', name:'kardinal'},ak = nodes[0] ,av = {id: 'av', name:'chor_der_frauen'},aw = {id: 'aw', name:'chor_der_französischen_ritter'} ; nodes.push( ad,aj,av,aw ); links.push( {source: aj , target: ak },{source: aj , target: av },{source: aj , target: aw },{source: ak , target: av },{source: ak , target: aw },{source: av , target: aw },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: av },{source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 150000);
