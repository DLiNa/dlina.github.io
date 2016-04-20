setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'sabine'},ab = {id: 'ab', name:'die_magd'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ac = {id: 'ac', name:'frau_staar'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'herr_staar'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],ak = {id: 'ak', name:'bürgermeister'} ; nodes.push( ak ); links.push( {source: aa , target: ak },{source: aa , target: ad },{source: aa , target: ac },{source: ad , target: ak },{source: ac , target: ak },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],ak = nodes[3] ; /* nodes.push(); */ links.push( {source: aa , target: ac },{source: aa , target: ak },{source: aa , target: ad },{source: ac , target: ak },{source: ac , target: ad },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ab = {id: 'ab', name:'die_magd'},ac = nodes[1],ak = nodes[2] ; nodes.push( ab ); links.push( {source: ab , target: ak },{source: ab , target: ac },{source: ac , target: ak },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'herr_staar'},ae = {id: 'ae', name:'bauer'},ak = nodes[2] ; nodes.push( ad,ae ); links.push( {source: ae , target: ak },{source: ad , target: ae },{source: ad , target: ak },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: ad },{source: aa , target: ae },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae','ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = {id: 'ab', name:'die_magd'},ac = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ac = nodes[0],af = {id: 'af', name:'frau_brendel'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = nodes[0],af = nodes[1],ag = {id: 'ag', name:'frau_morgenroth'} ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ac = nodes[0],af = nodes[1],ag = nodes[2],ah = {id: 'ah', name:'sperling'} ; nodes.push( ah ); links.push( {source: ac , target: ah },{source: ac , target: af },{source: ac , target: ag },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ac = nodes[0],af = nodes[1],ag = nodes[2],ah = nodes[3],ai = {id: 'ai', name:'die_kinder'} ; nodes.push( ai ); links.push( {source: ac , target: ah },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ai },{source: ah , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = {id: 'aa', name:'sabine'},ac = nodes[0],ad = {id: 'ad', name:'herr_staar'},af = nodes[1],ag = nodes[2],ah = nodes[3],ai = nodes[4],ak = {id: 'ak', name:'bürgermeister'} ; nodes.push( aa,ad,ak ); links.push( {source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ah , target: ak },{source: ah , target: ai },{source: aa , target: ad },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: ai , target: ak },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: af , target: ak },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ad','ak','ah','aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = nodes[0],af = nodes[1],ag = nodes[2] ; /* nodes.push(); */ links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = {id: 'aa', name:'sabine'},ac = nodes[0],ad = {id: 'ad', name:'herr_staar'},af = nodes[1],ag = nodes[2],ah = {id: 'ah', name:'sperling'},aj = {id: 'aj', name:'olmers'},ak = {id: 'ak', name:'bürgermeister'} ; nodes.push( aa,ad,ah,aj,ak ); links.push( {source: aj , target: ak },{source: af , target: ak },{source: af , target: aj },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: ah },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ah },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ah },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ah , target: ak },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ak','aj','aa','ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = nodes[0],af = nodes[1],ag = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: af },{source: ac , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ac = nodes[0],ad = {id: 'ad', name:'herr_staar'},ah = {id: 'ah', name:'sperling'},ak = {id: 'ak', name:'bürgermeister'} ; nodes.push( ad,ah,ak ); links.push( {source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ah },{source: ad , target: ak },{source: ad , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ac = nodes[0],ad = nodes[1],ah = nodes[2],aj = {id: 'aj', name:'olmers'},ak = nodes[3] ; nodes.push( aj ); links.push( {source: aj , target: ak },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ah },{source: ah , target: aj },{source: ah , target: ak },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ab = {id: 'ab', name:'die_magd'},ac = nodes[0],ad = nodes[1],aj = nodes[2],ak = nodes[3] ; nodes.push( ab ); links.push( {source: ab , target: ak },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ad },{source: aj , target: ak },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ad },{source: ad , target: ak },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ab','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = {id: 'aa', name:'sabine'},ac = nodes[0],ad = nodes[1],ah = {id: 'ah', name:'sperling'},ak = nodes[2] ; nodes.push( aa,ah ); links.push( {source: aa , target: ak },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ah },{source: ad , target: ak },{source: ad , target: ah },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ak','ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ah = nodes[1],aj = {id: 'aj', name:'olmers'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = {id: 'ac', name:'frau_staar'},ah = nodes[0],aj = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: aj },{source: ac , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = nodes[0],af = {id: 'af', name:'frau_brendel'},ag = {id: 'ag', name:'frau_morgenroth'} ; nodes.push( af,ag ); links.push( {source: ac , target: af },{source: ac , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ac = nodes[0],ad = {id: 'ad', name:'herr_staar'},af = nodes[1],ag = nodes[2] ; nodes.push( ad ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: af , target: ag },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ac = nodes[0],ad = nodes[1],af = nodes[2],ag = nodes[3],ah = {id: 'ah', name:'sperling'} ; nodes.push( ah ); links.push( {source: ad , target: ah },{source: ad , target: af },{source: ad , target: ag },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ah },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = {id: 'aa', name:'sabine'},ac = nodes[0],ad = nodes[1],af = nodes[2],ag = nodes[3],ah = nodes[4] ; nodes.push( aa ); links.push( {source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],af = nodes[3],ag = nodes[4],ah = nodes[5],aj = {id: 'aj', name:'olmers'},ak = {id: 'ak', name:'bürgermeister'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ag },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ag },{source: ah , target: ak },{source: ah , target: aj },{source: af , target: ak },{source: af , target: aj },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa','ac','ad','ah','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aj = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = {id: 'ac', name:'frau_staar'},ad = {id: 'ad', name:'herr_staar'},af = {id: 'af', name:'frau_brendel'},ag = {id: 'ag', name:'frau_morgenroth'},ak = nodes[0] ; nodes.push( ac,ad,af,ag ); links.push( {source: af , target: ak },{source: af , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: ag },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: ag },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ac = nodes[0],ad = nodes[1],af = nodes[2],ag = nodes[3],aj = {id: 'aj', name:'olmers'},ak = nodes[4] ; nodes.push( aj ); links.push( {source: aj , target: ak },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: af },{source: ad , target: ag },{source: af , target: aj },{source: af , target: ak },{source: af , target: ag },{source: ag , target: aj },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ak','ac','ad','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aj = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = {id: 'aa', name:'sabine'},aj = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = nodes[0],ah = {id: 'ah', name:'sperling'},aj = nodes[1] ; nodes.push( ah ); links.push( {source: aa , target: aj },{source: aa , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aj = {id: 'aj', name:'olmers'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  aa = {id: 'aa', name:'sabine'},aj = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  aa = nodes[0],ah = {id: 'ah', name:'sperling'},aj = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: aj },{source: aa , target: ah },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ah = nodes[0],al = {id: 'al', name:'nachtwächter'} ; nodes.push( al ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ac = {id: 'ac', name:'frau_staar'},ah = nodes[0],al = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: al },{source: ac , target: ah },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  aa = {id: 'aa', name:'sabine'},ac = nodes[0],ad = {id: 'ad', name:'herr_staar'},ah = nodes[1],aj = {id: 'aj', name:'olmers'} ; nodes.push( aa,ad,aj ); links.push( {source: ad , target: ah },{source: ad , target: aj },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: aj },{source: ah , target: aj },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ad','ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  aa = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ak = {id: 'ak', name:'bürgermeister'},am = {id: 'am', name:'klaus'} ; nodes.push( ak,am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ad = {id: 'ad', name:'herr_staar'},ak = nodes[0],am = nodes[1] ; nodes.push( ad ); links.push( {source: ak , target: am },{source: ad , target: ak },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  ad = nodes[0],ah = {id: 'ah', name:'sperling'},ak = nodes[1],am = nodes[2] ; nodes.push( ah ); links.push( {source: ad , target: ak },{source: ad , target: am },{source: ad , target: ah },{source: ak , target: am },{source: ah , target: ak },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  aa = {id: 'aa', name:'sabine'},ac = {id: 'ac', name:'frau_staar'},ad = nodes[0],ah = nodes[1],aj = {id: 'aj', name:'olmers'},ak = nodes[2],am = nodes[3] ; nodes.push( aa,ac,aj ); links.push( {source: ah , target: ak },{source: ah , target: am },{source: ah , target: aj },{source: ak , target: am },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: am },{source: ad , target: aj },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: am },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: aj },{source: ac , target: ah },{source: ac , target: ak },{source: ac , target: am },{source: ac , target: ad },{source: ac , target: aj },{source: aj , target: ak },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],ah = nodes[3],aj = nodes[4],ak = nodes[5],am = nodes[6] ; /* nodes.push(); */ links.push( {source: ac , target: ah },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: aj },{source: ac , target: am },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: am },{source: ak , target: am },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: am },{source: aj , target: ak },{source: aj , target: am },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: aj },{source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 260000);
