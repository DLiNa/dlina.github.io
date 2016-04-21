setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'bernhard'},ab = {id: 'ab', name:'knecht'},ac = {id: 'ac', name:'wächter'},ad = {id: 'ad', name:'soldat'},ae = {id: 'ae', name:'ulrich'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* af ag ah ai */ var  af = {id: 'af', name:'anne'},ag = {id: 'ag', name:'julie'},ah = {id: 'ah', name:'adolf'},ai = {id: 'ai', name:'carl'} ; nodes.push( af,ag,ah,ai ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ah aj ak al am */ var  ah = nodes[0] ,aj = {id: 'aj', name:'mädchen'},ak = {id: 'ak', name:'genovefa'},al = {id: 'al', name:'siegfried'},am = {id: 'am', name:'golo'} ; nodes.push( aj,ak,al,am ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aj','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ae ah ai an */ var  aa = {id: 'aa', name:'bernhard'},ae = {id: 'ae', name:'ulrich'},ah = nodes[0] ,ai = {id: 'ai', name:'carl'},an = {id: 'an', name:'heinrich'} ; nodes.push( aa,ae,ai,an ); links.push( {source: ae , target: an },{source: ae , target: ai },{source: ae , target: ah },{source: aa , target: ae },{source: aa , target: an },{source: aa , target: ai },{source: aa , target: ah },{source: ai , target: an },{source: ah , target: an },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','aa','an','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* af ag ak am ao */ var  af = {id: 'af', name:'anne'},ag = {id: 'ag', name:'julie'},ak = {id: 'ak', name:'genovefa'},am = {id: 'am', name:'golo'},ao = {id: 'ao', name:'kammerfrau'} ; nodes.push( af,ag,ak,am,ao ); links.push( {source: am , target: ao },{source: ak , target: am },{source: ak , target: ao },{source: ag , target: am },{source: ag , target: ao },{source: ag , target: ak },{source: af , target: am },{source: af , target: ao },{source: af , target: ak },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'am','ao','ak','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ap aq ar */ var  ap = {id: 'ap', name:'mathilde'},aq = {id: 'aq', name:'im_wald'},ar = {id: 'ar', name:'dragones'} ; nodes.push( ap,aq,ar ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ap','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aq as at */ var  aq = nodes[0] ,as = {id: 'as', name:'wallrod'},at = {id: 'at', name:'steffen'} ; nodes.push( as,at ); links.push( {source: aq , target: as },{source: aq , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aq','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* am ap au */ var  am = {id: 'am', name:'golo'},ap = {id: 'ap', name:'mathilde'},au = {id: 'au', name:'brandfuchs'} ; nodes.push( am,ap,au ); links.push( {source: am , target: au },{source: am , target: ap },{source: ap , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* am ap ar av */ var  am = nodes[0] ,ap = nodes[1] ,ar = {id: 'ar', name:'dragones'},av = {id: 'av', name:'knappe'} ; nodes.push( ar,av ); links.push( {source: ar , target: av },{source: am , target: ar },{source: am , target: av },{source: am , target: ap },{source: ap , target: ar },{source: ap , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ar','av','am','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* af ag ah as */ var  af = {id: 'af', name:'anne'},ag = {id: 'ag', name:'julie'},ah = {id: 'ah', name:'adolf'},as = {id: 'as', name:'wallrod'} ; nodes.push( af,ag,ah,as ); links.push( {source: ag , target: ah },{source: ag , target: as },{source: ah , target: as },{source: af , target: ag },{source: af , target: ah },{source: af , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ak am ap ar as au aw ax ay az ba */ var  ak = {id: 'ak', name:'genovefa'},am = {id: 'am', name:'golo'},ap = {id: 'ap', name:'mathilde'},ar = {id: 'ar', name:'dragones'},as = nodes[0] ,au = {id: 'au', name:'brandfuchs'},aw = {id: 'aw', name:'adam'},ax = {id: 'ax', name:'chor'},ay = {id: 'ay', name:'zwey_stimmen'},az = {id: 'az', name:'eine_stimme'},ba = {id: 'ba', name:'drey_stimmen'} ; nodes.push( ak,am,ap,ar,au,aw,ax,ay,az,ba ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: ar , target: aw },{source: ar , target: as },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: az },{source: ar , target: ba },{source: ar , target: au },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: au },{source: ap , target: aw },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: az },{source: ap , target: ba },{source: ap , target: au },{source: ak , target: aw },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: ax },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: ba },{source: ak , target: au },{source: am , target: aw },{source: am , target: ar },{source: am , target: as },{source: am , target: ap },{source: am , target: ax },{source: am , target: ay },{source: am , target: az },{source: am , target: ba },{source: am , target: au },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ay , target: az },{source: ay , target: ba },{source: az , target: ba },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aw','ap','ak','am','ax','ay','az','ba','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ar as */ var  ar = nodes[0] ,as = nodes[1]  ; /* nodes.push(); */ links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ap aq as */ var  ap = {id: 'ap', name:'mathilde'},aq = {id: 'aq', name:'im_wald'},as = nodes[0]  ; nodes.push( ap,aq ); links.push( {source: ap , target: aq },{source: ap , target: as },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aq','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* am ap at */ var  am = {id: 'am', name:'golo'},ap = nodes[0] ,at = {id: 'at', name:'steffen'} ; nodes.push( am,at ); links.push( {source: am , target: ap },{source: am , target: at },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am','ap','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* af ag ak ar */ var  af = {id: 'af', name:'anne'},ag = {id: 'ag', name:'julie'},ak = {id: 'ak', name:'genovefa'},ar = {id: 'ar', name:'dragones'} ; nodes.push( af,ag,ak,ar ); links.push( {source: ak , target: ar },{source: ag , target: ak },{source: ag , target: ar },{source: af , target: ak },{source: af , target: ar },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ak','ar','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ah aw */ var  ah = {id: 'ah', name:'adolf'},aw = {id: 'aw', name:'adam'} ; nodes.push( ah,aw ); links.push( {source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ah ak am ap ar aw */ var  ah = nodes[0] ,ak = {id: 'ak', name:'genovefa'},am = {id: 'am', name:'golo'},ap = {id: 'ap', name:'mathilde'},ar = {id: 'ar', name:'dragones'},aw = nodes[1]  ; nodes.push( ak,am,ap,ar ); links.push( {source: ar , target: aw },{source: ap , target: ar },{source: ap , target: aw },{source: am , target: ar },{source: am , target: ap },{source: am , target: aw },{source: ah , target: ar },{source: ah , target: ap },{source: ah , target: am },{source: ah , target: aw },{source: ah , target: ak },{source: ak , target: ar },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ar','ah','aw','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* am ap aq as */ var  am = nodes[0] ,ap = nodes[1] ,aq = {id: 'aq', name:'im_wald'},as = {id: 'as', name:'wallrod'} ; nodes.push( aq,as ); links.push( {source: am , target: ap },{source: am , target: aq },{source: am , target: as },{source: ap , target: aq },{source: ap , target: as },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'am','ap','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af aq */ var  af = {id: 'af', name:'anne'},aq = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac ag ah ak */ var  ac = {id: 'ac', name:'wächter'},ag = {id: 'ag', name:'julie'},ah = {id: 'ah', name:'adolf'},ak = {id: 'ak', name:'genovefa'} ; nodes.push( ac,ag,ah,ak ); links.push( {source: ag , target: ak },{source: ag , target: ah },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ak','ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ah bb bc bd */ var  ah = nodes[0] ,bb = {id: 'bb', name:'erster_wächter'},bc = {id: 'bc', name:'zweyter_wächter'},bd = {id: 'bd', name:'dritter_wächter'} ; nodes.push( bb,bc,bd ); links.push( {source: ah , target: bb },{source: ah , target: bc },{source: ah , target: bd },{source: bb , target: bc },{source: bb , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah','bb','bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* am ap at be */ var  am = {id: 'am', name:'golo'},ap = {id: 'ap', name:'mathilde'},at = {id: 'at', name:'steffen'},be = {id: 'be', name:'margrethe'} ; nodes.push( am,ap,at,be ); links.push( {source: ap , target: at },{source: ap , target: be },{source: am , target: ap },{source: am , target: at },{source: am , target: be },{source: at , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ap','am','at','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ar au aw */ var  ar = {id: 'ar', name:'dragones'},au = {id: 'au', name:'brandfuchs'},aw = {id: 'aw', name:'adam'} ; nodes.push( ar,au,aw ); links.push( {source: au , target: aw },{source: ar , target: au },{source: ar , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'au','aw','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ap as */ var  ap = {id: 'ap', name:'mathilde'},as = {id: 'as', name:'wallrod'} ; nodes.push( ap,as ); links.push( {source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'as','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ai al at bf */ var  ai = {id: 'ai', name:'carl'},al = {id: 'al', name:'siegfried'},at = {id: 'at', name:'steffen'},bf = {id: 'bf', name:'christoph'} ; nodes.push( ai,al,at,bf ); links.push( {source: at , target: bf },{source: ai , target: at },{source: ai , target: bf },{source: ai , target: al },{source: al , target: at },{source: al , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'at','bf','ai','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ae an */ var  aa = {id: 'aa', name:'bernhard'},ae = {id: 'ae', name:'ulrich'},an = {id: 'an', name:'heinrich'} ; nodes.push( aa,ae,an ); links.push( {source: aa , target: an },{source: aa , target: ae },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'an','aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ai aq */ var  ai = {id: 'ai', name:'carl'},aq = {id: 'aq', name:'im_wald'} ; nodes.push( ai,aq ); links.push( {source: ai , target: aq },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ai','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ag ah bg */ var  ag = {id: 'ag', name:'julie'},ah = {id: 'ah', name:'adolf'},bg = {id: 'bg', name:'reitknecht'} ; nodes.push( ag,ah,bg ); links.push( {source: ah , target: bg },{source: ag , target: ah },{source: ag , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ah','ag','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* am ap at */ var  am = {id: 'am', name:'golo'},ap = {id: 'ap', name:'mathilde'},at = {id: 'at', name:'steffen'} ; nodes.push( am,ap,at ); links.push( {source: ap , target: at },{source: am , target: ap },{source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ap','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ak am aw */ var  ak = {id: 'ak', name:'genovefa'},am = nodes[0] ,aw = {id: 'aw', name:'adam'} ; nodes.push( ak,aw ); links.push( {source: ak , target: am },{source: ak , target: aw },{source: am , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ak','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ag ah ai am ap bh */ var  ag = {id: 'ag', name:'julie'},ah = {id: 'ah', name:'adolf'},ai = {id: 'ai', name:'carl'},am = nodes[0] ,ap = {id: 'ap', name:'mathilde'},bh = {id: 'bh', name:'alle_ritter'} ; nodes.push( ag,ah,ai,ap,bh ); links.push( {source: am , target: ap },{source: am , target: bh },{source: ap , target: bh },{source: ai , target: am },{source: ai , target: ap },{source: ai , target: bh },{source: ag , target: am },{source: ag , target: ap },{source: ag , target: ai },{source: ag , target: bh },{source: ag , target: ah },{source: ah , target: am },{source: ah , target: ap },{source: ah , target: ai },{source: ah , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'am','ap','ai','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ag ah aw be bi bj bk bl bm */ var  ag = nodes[0] ,ah = nodes[1] ,aw = {id: 'aw', name:'adam'},be = {id: 'be', name:'margrethe'},bi = {id: 'bi', name:'herold'},bj = {id: 'bj', name:'volk'},bk = {id: 'bk', name:'ein_weib'},bl = {id: 'bl', name:'ein_mann'},bm = {id: 'bm', name:'ein_andrer'} ; nodes.push( aw,be,bi,bj,bk,bl,bm ); links.push( {source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bj },{source: bi , target: bl },{source: bi , target: bm },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: bk , target: bl },{source: bk , target: bm },{source: aw , target: bi },{source: aw , target: bj },{source: aw , target: bk },{source: aw , target: be },{source: aw , target: bj },{source: aw , target: bl },{source: aw , target: bm },{source: be , target: bi },{source: be , target: bj },{source: be , target: bk },{source: be , target: bj },{source: be , target: bl },{source: be , target: bm },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: ah , target: bi },{source: ah , target: bj },{source: ah , target: bk },{source: ah , target: aw },{source: ah , target: be },{source: ah , target: bj },{source: ah , target: bl },{source: ah , target: bm },{source: bl , target: bm },{source: ag , target: bi },{source: ag , target: bj },{source: ag , target: bk },{source: ag , target: aw },{source: ag , target: be },{source: ag , target: bj },{source: ag , target: ah },{source: ag , target: bl },{source: ag , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bi','bk','aw','be','ah','bl','bm','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ai am at bj */ var  ai = {id: 'ai', name:'carl'},am = {id: 'am', name:'golo'},at = {id: 'at', name:'steffen'},bj = nodes[0]  ; nodes.push( ai,am,at ); links.push( {source: am , target: at },{source: am , target: bj },{source: ai , target: am },{source: ai , target: at },{source: ai , target: bj },{source: at , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ai','at','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* am ap bi bn */ var  am = nodes[0] ,ap = {id: 'ap', name:'mathilde'},bi = {id: 'bi', name:'herold'},bn = {id: 'bn', name:'ritter'} ; nodes.push( ap,bi,bn ); links.push( {source: ap , target: bn },{source: ap , target: bi },{source: bi , target: bn },{source: am , target: ap },{source: am , target: bn },{source: am , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ap','bn','bi','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag aq */ var  ag = {id: 'ag', name:'julie'},aq = {id: 'aq', name:'im_wald'} ; nodes.push( ag,aq ); links.push( {source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* au aw be bo bp */ var  au = {id: 'au', name:'brandfuchs'},aw = {id: 'aw', name:'adam'},be = {id: 'be', name:'margrethe'},bo = {id: 'bo', name:'erster_mörder'},bp = {id: 'bp', name:'zweyter_mörder'} ; nodes.push( au,aw,be,bo,bp ); links.push( {source: au , target: aw },{source: au , target: be },{source: au , target: bo },{source: au , target: bp },{source: aw , target: be },{source: aw , target: bo },{source: aw , target: bp },{source: be , target: bo },{source: be , target: bp },{source: bo , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ak aw be bo bp */ var  ak = {id: 'ak', name:'genovefa'},aw = nodes[0] ,be = nodes[1] ,bo = nodes[2] ,bp = nodes[3]  ; nodes.push( ak ); links.push( {source: bo , target: bp },{source: ak , target: bo },{source: ak , target: bp },{source: ak , target: aw },{source: ak , target: be },{source: aw , target: bo },{source: aw , target: bp },{source: aw , target: be },{source: be , target: bo },{source: be , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnte Scene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ak','aw','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* am ap at bo bp bq br bw */ var  am = {id: 'am', name:'golo'},ap = {id: 'ap', name:'mathilde'},at = {id: 'at', name:'steffen'},bo = nodes[0] ,bp = nodes[1] ,bq = {id: 'bq', name:'erster_bedienter'},br = {id: 'br', name:'zweyter_bediente'},bw = {id: 'bw', name:'bedienter'} ; nodes.push( am,ap,at,bq,br,bw ); links.push( {source: ap , target: bo },{source: ap , target: bp },{source: ap , target: at },{source: ap , target: bw },{source: ap , target: br },{source: ap , target: bq },{source: ap , target: br },{source: am , target: ap },{source: am , target: bo },{source: am , target: bp },{source: am , target: at },{source: am , target: bw },{source: am , target: br },{source: am , target: bq },{source: am , target: br },{source: bo , target: bp },{source: bo , target: bw },{source: bo , target: br },{source: bo , target: bq },{source: bo , target: br },{source: bp , target: bw },{source: bp , target: br },{source: bp , target: bq },{source: bp , target: br },{source: at , target: bo },{source: at , target: bp },{source: at , target: bw },{source: at , target: br },{source: at , target: bq },{source: at , target: br },{source: br , target: bw },{source: bq , target: bw },{source: bq , target: br },{source: bq , target: br },{source: br , target: bw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ap','am','bo','bp','at','bw','br','bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ah aq */ var  ah = {id: 'ah', name:'adolf'},aq = {id: 'aq', name:'im_wald'} ; nodes.push( ah,aq ); links.push( {source: ah , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Scene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ah','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* am ap at bw */ var  am = {id: 'am', name:'golo'},ap = {id: 'ap', name:'mathilde'},at = {id: 'at', name:'steffen'},bw = {id: 'bw', name:'bedienter'} ; nodes.push( am,ap,at,bw ); links.push( {source: ap , target: at },{source: ap , target: bw },{source: am , target: ap },{source: am , target: at },{source: am , target: bw },{source: at , target: bw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Scene.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ap','am','at','bw' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'anne'},ag = {id: 'ag', name:'julie'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ak bs */ var  ak = {id: 'ak', name:'genovefa'},bs = {id: 'bs', name:'schmerzenreich'} ; nodes.push( ak,bs ); links.push( {source: ak , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ak','bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* af ag ah al an aq bt */ var  af = {id: 'af', name:'anne'},ag = {id: 'ag', name:'julie'},ah = {id: 'ah', name:'adolf'},al = {id: 'al', name:'siegfried'},an = {id: 'an', name:'heinrich'},aq = {id: 'aq', name:'im_wald'},bt = {id: 'bt', name:'der_junge_erwin'} ; nodes.push( af,ag,ah,al,an,aq,bt ); links.push( {source: al , target: an },{source: al , target: bt },{source: al , target: bt },{source: al , target: aq },{source: an , target: bt },{source: an , target: bt },{source: an , target: aq },{source: ah , target: al },{source: ah , target: an },{source: ah , target: bt },{source: ah , target: bt },{source: ah , target: aq },{source: aq , target: bt },{source: aq , target: bt },{source: ag , target: al },{source: ag , target: an },{source: ag , target: bt },{source: ag , target: bt },{source: ag , target: ah },{source: ag , target: aq },{source: af , target: al },{source: af , target: an },{source: af , target: bt },{source: af , target: bt },{source: af , target: ah },{source: af , target: aq },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'an','bt','ah','aq','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aa ae al bf bu bv ca */ var  aa = {id: 'aa', name:'bernhard'},ae = {id: 'ae', name:'ulrich'},al = nodes[0] ,bf = {id: 'bf', name:'christoph'},bu = {id: 'bu', name:'blutrichter'},bv = {id: 'bv', name:'förster'},ca = {id: 'ca', name:'jäger'} ; nodes.push( aa,ae,bf,bu,bv,ca ); links.push( {source: al , target: bf },{source: al , target: bu },{source: al , target: bv },{source: al , target: ca },{source: bf , target: bu },{source: bf , target: bv },{source: bf , target: ca },{source: bu , target: bv },{source: bu , target: ca },{source: ae , target: al },{source: ae , target: bf },{source: ae , target: bu },{source: ae , target: bv },{source: ae , target: ca },{source: aa , target: al },{source: aa , target: bf },{source: aa , target: bu },{source: aa , target: ae },{source: aa , target: bv },{source: aa , target: ca },{source: bv , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'bf','bu','ae','aa','bv','ca' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* af ah al */ var  af = {id: 'af', name:'anne'},ah = {id: 'ah', name:'adolf'},al = nodes[0]  ; nodes.push( af,ah ); links.push( {source: af , target: ah },{source: af , target: al },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfte Scene.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'af','ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* am at au bw bx */ var  am = {id: 'am', name:'golo'},at = {id: 'at', name:'steffen'},au = {id: 'au', name:'brandfuchs'},bw = {id: 'bw', name:'bedienter'},bx = {id: 'bx', name:'andrer_bedienter'} ; nodes.push( am,at,au,bw,bx ); links.push( {source: am , target: au },{source: am , target: bw },{source: am , target: bx },{source: am , target: at },{source: au , target: bw },{source: au , target: bx },{source: bw , target: bx },{source: at , target: au },{source: at , target: bw },{source: at , target: bx } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'au','bx','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* am ap as bw by bz */ var  am = nodes[0] ,ap = {id: 'ap', name:'mathilde'},as = {id: 'as', name:'wallrod'},bw = nodes[1] ,by = {id: 'by', name:'doctor'},bz = {id: 'bz', name:'franciskaner'} ; nodes.push( ap,as,by,bz ); links.push( {source: by , target: bz },{source: ap , target: by },{source: ap , target: bz },{source: ap , target: bw },{source: ap , target: as },{source: am , target: by },{source: am , target: bz },{source: am , target: ap },{source: am , target: bw },{source: am , target: as },{source: bw , target: by },{source: bw , target: bz },{source: as , target: by },{source: as , target: bz },{source: as , target: bw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'by','bz','ap','bw','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* am at */ var  am = nodes[0] ,at = {id: 'at', name:'steffen'} ; nodes.push( at ); links.push( {source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'am','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aa al an bv ca */ var  aa = {id: 'aa', name:'bernhard'},al = {id: 'al', name:'siegfried'},an = {id: 'an', name:'heinrich'},bv = {id: 'bv', name:'förster'},ca = {id: 'ca', name:'jäger'} ; nodes.push( aa,al,an,bv,ca ); links.push( {source: aa , target: bv },{source: aa , target: an },{source: aa , target: al },{source: aa , target: ca },{source: bv , target: ca },{source: an , target: bv },{source: an , target: ca },{source: al , target: bv },{source: al , target: an },{source: al , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'an','al','ca' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* aa ae am bv cb */ var  aa = nodes[0] ,ae = {id: 'ae', name:'ulrich'},am = {id: 'am', name:'golo'},bv = nodes[1] ,cb = {id: 'cb', name:'oberjäger'} ; nodes.push( ae,am,cb ); links.push( {source: bv , target: cb },{source: am , target: bv },{source: am , target: cb },{source: aa , target: bv },{source: aa , target: cb },{source: aa , target: am },{source: aa , target: ae },{source: ae , target: bv },{source: ae , target: cb },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'cb' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* aa ae ak al am an bs bv ca */ var  aa = nodes[0] ,ae = nodes[1] ,ak = {id: 'ak', name:'genovefa'},al = {id: 'al', name:'siegfried'},am = nodes[2] ,an = {id: 'an', name:'heinrich'},bs = {id: 'bs', name:'schmerzenreich'},bv = nodes[3] ,ca = {id: 'ca', name:'jäger'} ; nodes.push( ak,al,an,bs,ca ); links.push( {source: ak , target: bs },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ca },{source: ak , target: bv },{source: bs , target: ca },{source: bs , target: bv },{source: am , target: bs },{source: am , target: an },{source: am , target: ca },{source: am , target: bv },{source: aa , target: ak },{source: aa , target: bs },{source: aa , target: am },{source: aa , target: ae },{source: aa , target: al },{source: aa , target: an },{source: aa , target: ca },{source: aa , target: bv },{source: ae , target: ak },{source: ae , target: bs },{source: ae , target: am },{source: ae , target: al },{source: ae , target: an },{source: ae , target: ca },{source: ae , target: bv },{source: al , target: bs },{source: al , target: am },{source: al , target: an },{source: al , target: ca },{source: al , target: bv },{source: an , target: bs },{source: an , target: ca },{source: an , target: bv },{source: bv , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ak','bs','al','an','ca','bv' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* aa ae am */ var  aa = nodes[0] ,ae = nodes[1] ,am = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: am },{source: aa , target: am },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 255000);
