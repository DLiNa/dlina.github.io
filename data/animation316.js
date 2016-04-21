setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'ganymed'},ab = {id: 'ab', name:'jupiter'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'apollo'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ad */ var  aa = {id: 'aa', name:'ganymed'},ab = nodes[0] ,ad = {id: 'ad', name:'minerva'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ae af */ var  ab = nodes[0] ,ae = {id: 'ae', name:'amor'},af = {id: 'af', name:'venus'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ae af ag */ var  ab = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'juno'} ; nodes.push( ag ); links.push( {source: ab , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: af , target: ag },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ac ae af ag ah */ var  ab = nodes[0] ,ac = {id: 'ac', name:'apollo'},ae = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ah = {id: 'ah', name:'chor'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah','ac','ab','ae','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'euridice'},aj = {id: 'aj', name:'pluto'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ai aj ak */ var  ai = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'proserpina'} ; nodes.push( ak ); links.push( {source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* al am an ao ap aq ar */ var  al = {id: 'al', name:'chor_der_verdammten'},am = {id: 'am', name:'orpheus'},an = {id: 'an', name:'cerberus'},ao = {id: 'ao', name:'danaiden'},ap = {id: 'ap', name:'tantalus'},aq = {id: 'aq', name:'sisiphus'},ar = {id: 'ar', name:'prometheus'} ; nodes.push( al,am,an,ao,ap,aq,ar ); links.push( {source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al','ao','ap','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aj am an */ var  aj = {id: 'aj', name:'pluto'},am = nodes[0] ,an = nodes[1]  ; nodes.push( aj ); links.push( {source: aj , target: an },{source: aj , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab af aj am as */ var  ab = {id: 'ab', name:'jupiter'},af = {id: 'af', name:'venus'},aj = nodes[0] ,am = nodes[1] ,as = {id: 'as', name:'merkur'} ; nodes.push( ab,af,as ); links.push( {source: am , target: as },{source: aj , target: am },{source: aj , target: as },{source: ab , target: am },{source: ab , target: aj },{source: ab , target: as },{source: ab , target: af },{source: af , target: am },{source: af , target: aj },{source: af , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab af ag ah ai aj am at */ var  ab = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'juno'},ah = {id: 'ah', name:'chor'},ai = {id: 'ai', name:'euridice'},aj = nodes[2] ,am = nodes[3] ,at = {id: 'at', name:'die_drey_furien'} ; nodes.push( ag,ah,ai,at ); links.push( {source: am , target: at },{source: ai , target: at },{source: ai , target: am },{source: ai , target: aj },{source: aj , target: at },{source: aj , target: am },{source: ab , target: at },{source: ab , target: am },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: af },{source: ah , target: at },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ag , target: at },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: af , target: at },{source: af , target: am },{source: af , target: ai },{source: af , target: aj },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'at','am','ai','aj','ab','ah','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ac as */ var  ac = {id: 'ac', name:'apollo'},as = {id: 'as', name:'merkur'} ; nodes.push( ac,as ); links.push( {source: ac , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac as */ var  aa = {id: 'aa', name:'ganymed'},ac = nodes[0] ,as = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: as },{source: ac , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aa','ac','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'jupiter'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab am */ var  ab = nodes[0] ,am = {id: 'am', name:'orpheus'} ; nodes.push( am ); links.push( {source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ai aj am */ var  ab = nodes[0] ,ai = {id: 'ai', name:'euridice'},aj = {id: 'aj', name:'pluto'},am = nodes[1]  ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: ai , target: am },{source: aj , target: am },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ai','aj','ab','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ag au */ var  ag = {id: 'ag', name:'juno'},au = {id: 'au', name:'vulkan'} ; nodes.push( ag,au ); links.push( {source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* au */ var  au = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* af au av */ var  af = {id: 'af', name:'venus'},au = nodes[0] ,av = {id: 'av', name:'mars'} ; nodes.push( af,av ); links.push( {source: af , target: av },{source: af , target: au },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac ae af ag ah au av */ var  ac = {id: 'ac', name:'apollo'},ae = {id: 'ae', name:'amor'},af = nodes[0] ,ag = {id: 'ag', name:'juno'},ah = {id: 'ah', name:'chor'},au = nodes[1] ,av = nodes[2]  ; nodes.push( ac,ae,ag,ah ); links.push( {source: ag , target: au },{source: ag , target: av },{source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: au },{source: ac , target: av },{source: ac , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: au },{source: ae , target: av },{source: ae , target: ah },{source: af , target: ag },{source: af , target: au },{source: af , target: av },{source: af , target: ah },{source: au , target: av },{source: ah , target: au },{source: ah , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ag','ac','af','au','av','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae am */ var  ae = nodes[0] ,am = {id: 'am', name:'orpheus'} ; nodes.push( am ); links.push( {source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ae ag am */ var  ae = nodes[0] ,ag = {id: 'ag', name:'juno'},am = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: am },{source: ae , target: ag },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ac ad ae af ag ah am as au */ var  ab = {id: 'ab', name:'jupiter'},ac = {id: 'ac', name:'apollo'},ad = {id: 'ad', name:'minerva'},ae = nodes[0] ,af = {id: 'af', name:'venus'},ag = nodes[1] ,ah = {id: 'ah', name:'chor'},am = nodes[2] ,as = {id: 'as', name:'merkur'},au = {id: 'au', name:'vulkan'} ; nodes.push( ab,ac,ad,af,ah,as,au ); links.push( {source: ah , target: am },{source: ah , target: au },{source: ah , target: as },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: am },{source: ae , target: au },{source: ae , target: as },{source: ag , target: ah },{source: ag , target: am },{source: ag , target: au },{source: ag , target: as },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: am },{source: ab , target: au },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: as },{source: af , target: ah },{source: af , target: ag },{source: af , target: am },{source: af , target: au },{source: af , target: as },{source: am , target: au },{source: am , target: as },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: am },{source: ac , target: au },{source: ac , target: ad },{source: ac , target: as },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: am },{source: ad , target: au },{source: ad , target: as },{source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Scene.';
}, 120000);
