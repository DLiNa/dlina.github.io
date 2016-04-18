setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'miranda'},ab = {id: 'ab', name:'geister_chor'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = {id: 'ac', name:'prosero'},ad = {id: 'ad', name:'ariose'} ; nodes.push( ac,ad ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = nodes[0],ae = {id: 'ae', name:'ariel'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'miranda'},ac = nodes[0],af = {id: 'af', name:'caliban'} ; nodes.push( aa,af ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ac = nodes[1],ae = {id: 'ae', name:'ariel'},af = nodes[2],ag = {id: 'ag', name:'chor_der_schiffer'} ; nodes.push( ae,ag ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ag },{source: af , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','af','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = nodes[0],ah = {id: 'ah', name:'fernando'} ; nodes.push( ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = {id: 'ac', name:'prosero'},ah = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ac = nodes[0],ae = {id: 'ae', name:'ariel'},ah = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ah },{source: ac , target: ae },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = {id: 'aa', name:'miranda'},ac = nodes[0],ac = nodes[0],ah = nodes[1] ; nodes.push( aa,ac ); links.push( {source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ac },{source: ac , target: ah },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ac = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = {id: 'ae', name:'ariel'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ai = {id: 'ai', name:'romanze'},aj = {id: 'aj', name:'oronzio'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ai = nodes[0],ai = nodes[0],aj = nodes[1],ak = {id: 'ak', name:'stefano'} ; nodes.push( ai,ak ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aj = nodes[1],ak = nodes[2] ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ae = {id: 'ae', name:'ariel'},af = {id: 'af', name:'caliban'},aj = nodes[0],ak = nodes[1] ; nodes.push( ae,af ); links.push( {source: aj , target: ak },{source: af , target: aj },{source: af , target: ak },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ae = nodes[0],af = nodes[1],ai = {id: 'ai', name:'romanze'},aj = nodes[2],ak = nodes[3] ; nodes.push( ai ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: aj , target: ak },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai','af','aj','ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'miranda'},ah = {id: 'ah', name:'fernando'} ; nodes.push( aa,ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0],ac = {id: 'ac', name:'prosero'},ae = {id: 'ae', name:'ariel'},af = {id: 'af', name:'caliban'},ah = nodes[1],al = {id: 'al', name:'cavatina'} ; nodes.push( ac,ae,af,al ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: ae },{source: af , target: ah },{source: af , target: al },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: al },{source: ac , target: ae },{source: ah , target: al },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af','ac','al','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ab = {id: 'ab', name:'geister_chor'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ac = {id: 'ac', name:'prosero'},ae = {id: 'ae', name:'ariel'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ah = {id: 'ah', name:'fernando'},ai = {id: 'ai', name:'romanze'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ac = {id: 'ac', name:'prosero'},ae = {id: 'ae', name:'ariel'},af = {id: 'af', name:'caliban'},aj = {id: 'aj', name:'oronzio'},ak = {id: 'ak', name:'stefano'} ; nodes.push( ac,ae,af,aj,ak ); links.push( {source: af , target: aj },{source: af , target: ak },{source: aj , target: ak },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = {id: 'aa', name:'miranda'},ac = nodes[0],ae = nodes[1],af = nodes[2],ah = {id: 'ah', name:'fernando'},ai = {id: 'ai', name:'romanze'},aj = nodes[3],ak = nodes[4] ; nodes.push( aa,ah,ai ); links.push( {source: ae , target: aj },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ah },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ah },{source: aj , target: ak },{source: af , target: aj },{source: af , target: ak },{source: af , target: ai },{source: af , target: ah },{source: ai , target: aj },{source: ai , target: ak },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ah },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae','ac','aj','ak','af','ai','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ag = {id: 'ag', name:'chor_der_schiffer'},am = {id: 'am', name:'chor'} ; nodes.push( ag,am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = {id: 'aa', name:'miranda'},ac = {id: 'ac', name:'prosero'},ah = {id: 'ah', name:'fernando'},ai = {id: 'ai', name:'romanze'},aj = {id: 'aj', name:'oronzio'},ak = {id: 'ak', name:'stefano'},am = nodes[0],an = {id: 'an', name:'ruperro'},an = {id: 'an', name:'ruperro'},ao = {id: 'ao', name:'matrosen'} ; nodes.push( aa,ac,ah,ai,aj,ak,an,ao ); links.push( {source: ac , target: an },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: aa , target: ac },{source: aa , target: an },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: am },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: an , target: ao },{source: an , target: ao },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: ah , target: an },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: an },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: an },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: ak },{source: ak , target: an },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aa','an','ao','am','ah','ai','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = nodes[0],ae = {id: 'ae', name:'ariel'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
}, 130000);
