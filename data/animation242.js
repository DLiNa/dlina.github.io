setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'faust'},ab = {id: 'ab', name:'mephisto'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = {id: 'ac', name:'wagner'},ad = {id: 'ad', name:'kaylinger'},ae = {id: 'ae', name:'moor'},au = {id: 'au', name:'wohlhaldt'} ; nodes.push( ac,ad,ae,au ); links.push( {source: ac , target: au },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: au },{source: ad , target: ae },{source: ae , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'au','ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'faust'},af = {id: 'af', name:'röschen'} ; nodes.push( aa,af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = {id: 'ab', name:'mephisto'},af = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: af },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ag = {id: 'ag', name:'franz'},ah = {id: 'ah', name:'ganzer_chor'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: aa , target: ag },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ai = {id: 'ai', name:'kunigunde'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ai = nodes[0],aj = {id: 'aj', name:'gulf'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ah = {id: 'ah', name:'ganzer_chor'},ak = {id: 'ak', name:'hugo'} ; nodes.push( ah,ak ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ak = nodes[1],al = {id: 'al', name:'knappe'} ; nodes.push( al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  af = {id: 'af', name:'röschen'},ag = {id: 'ag', name:'franz'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'mephisto'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = {id: 'aa', name:'faust'},ak = {id: 'ak', name:'hugo'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = nodes[0],aj = {id: 'aj', name:'gulf'},ak = nodes[1] ; nodes.push( aj ); links.push( {source: aj , target: ak },{source: aa , target: ak },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],ak = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = nodes[0],ab = {id: 'ab', name:'mephisto'},ai = {id: 'ai', name:'kunigunde'},aj = {id: 'aj', name:'gulf'},ak = nodes[1],am = {id: 'am', name:'kunigundens_dienerin'} ; nodes.push( ab,ai,aj,am ); links.push( {source: ai , target: ak },{source: ai , target: aj },{source: ai , target: am },{source: ak , target: am },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: am },{source: ab , target: ai },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: am },{source: aj , target: ak },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ai','aj','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0],ab = nodes[1],ah = {id: 'ah', name:'ganzer_chor'},ak = nodes[4],an = {id: 'an', name:'chor_der_begleiter_hugos'},an = {id: 'an', name:'chor_der_begleiter_hugos'} ; nodes.push( ah,an ); links.push( {source: ab , target: an },{source: ab , target: ak },{source: ab , target: an },{source: ab , target: ah },{source: ak , target: an },{source: ak , target: an },{source: aa , target: ab },{source: aa , target: an },{source: aa , target: ak },{source: aa , target: an },{source: aa , target: ah },{source: ah , target: an },{source: ah , target: ak },{source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'an','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ab = nodes[1],ai = {id: 'ai', name:'kunigunde'},aj = {id: 'aj', name:'gulf'},ak = nodes[3] ; nodes.push( ai,aj ); links.push( {source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ab },{source: ab , target: ai },{source: ab , target: ak },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],ab = nodes[1],ah = {id: 'ah', name:'ganzer_chor'},ai = nodes[2],aj = nodes[3],ak = nodes[4],ao = {id: 'ao', name:'chor_der_geister'} ; nodes.push( ah,ao ); links.push( {source: aj , target: ao },{source: aj , target: ak },{source: ah , target: ao },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: ak },{source: ak , target: ao },{source: aa , target: ao },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: ab },{source: ab , target: ao },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ao','aj','ai','ak','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ah = nodes[2],ap = {id: 'ap', name:'eine_hexe'} ; nodes.push( ap ); links.push( {source: ah , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = {id: 'aa', name:'faust'},ab = {id: 'ab', name:'mephisto'},ah = nodes[0],aq = {id: 'aq', name:'sycorax'} ; nodes.push( aa,ab,aq ); links.push( {source: ah , target: aq },{source: ab , target: ah },{source: ab , target: aq },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ab = nodes[1],ah = nodes[2],aq = nodes[3],ar = {id: 'ar', name:'drei_hexen'},ar = {id: 'ar', name:'drei_hexen'} ; nodes.push( ar ); links.push( {source: aq , target: ar },{source: aq , target: ar },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: ah },{source: ab , target: ar },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ar },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aq','ar','ab','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  af = {id: 'af', name:'röschen'},ag = {id: 'ag', name:'franz'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  af = nodes[0],ag = {id: 'ag', name:'franz'} ; nodes.push( ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = {id: 'ac', name:'wagner'},ad = {id: 'ad', name:'kaylinger'},ae = {id: 'ae', name:'moor'},af = nodes[0],ag = nodes[1],au = {id: 'au', name:'wohlhaldt'} ; nodes.push( ac,ad,ae,au ); links.push( {source: ad , target: au },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: ae , target: au },{source: ae , target: ag },{source: ae , target: af },{source: ag , target: au },{source: af , target: au },{source: af , target: ag },{source: ac , target: au },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = {id: 'aa', name:'faust'},ac = nodes[0],af = nodes[3],ag = nodes[4],ai = {id: 'ai', name:'kunigunde'},ak = {id: 'ak', name:'hugo'},au = nodes[5] ; nodes.push( aa,ai,ak ); links.push( {source: ag , target: ak },{source: ag , target: ai },{source: ag , target: au },{source: ak , target: au },{source: ai , target: ak },{source: ai , target: au },{source: aa , target: ag },{source: aa , target: ak },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: au },{source: aa , target: af },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: ai },{source: ac , target: au },{source: ac , target: af },{source: af , target: ag },{source: af , target: ak },{source: af , target: ai },{source: af , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ag','ak','ai','ac','au','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ai = {id: 'ai', name:'kunigunde'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ah = {id: 'ah', name:'ganzer_chor'},ai = nodes[0],ak = {id: 'ak', name:'hugo'},as = {id: 'as', name:'hochzeitsgäste'} ; nodes.push( ah,ak,as ); links.push( {source: ak , target: as },{source: ai , target: as },{source: ai , target: ak },{source: ah , target: as },{source: ah , target: ak },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'as','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = {id: 'aa', name:'faust'},ah = nodes[0],ak = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ak },{source: aa , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ab = {id: 'ab', name:'mephisto'},af = {id: 'af', name:'röschen'},ag = {id: 'ag', name:'franz'},ah = nodes[1],ah = nodes[1],ai = {id: 'ai', name:'kunigunde'},ak = nodes[2],at = {id: 'at', name:'chor_der_männer'} ; nodes.push( ab,af,ag,ai,at ); links.push( {source: af , target: ai },{source: af , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: at },{source: af , target: ah },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: at },{source: aa , target: ah },{source: ai , target: ak },{source: ai , target: at },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ak },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: at },{source: ab , target: ah },{source: ak , target: at },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: at },{source: ag , target: ah },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: at },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'af','aa','ai','ak','ag','ah','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ab = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ab = nodes[0],ah = {id: 'ah', name:'ganzer_chor'},aq = {id: 'aq', name:'sycorax'} ; nodes.push( ah,aq ); links.push( {source: ah , target: aq },{source: ab , target: ah },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ah','ab','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = {id: 'aa', name:'faust'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = nodes[0],ac = {id: 'ac', name:'wagner'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ai = {id: 'ai', name:'kunigunde'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ab = {id: 'ab', name:'mephisto'},af = {id: 'af', name:'röschen'},ag = {id: 'ag', name:'franz'},ai = nodes[0],au = {id: 'au', name:'wohlhaldt'} ; nodes.push( ab,af,ag,au ); links.push( {source: af , target: ai },{source: af , target: au },{source: af , target: ag },{source: ai , target: au },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: au },{source: ab , target: ag },{source: ag , target: ai },{source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = {id: 'aa', name:'faust'},ab = nodes[0],ab = nodes[0],ac = {id: 'ac', name:'wagner'},af = nodes[1],ag = nodes[2],ai = nodes[3] ; nodes.push( aa,ac ); links.push( {source: af , target: ai },{source: af , target: ag },{source: ag , target: ai },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'af','ag','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = nodes[0],ai = nodes[6],au = {id: 'au', name:'wohlhaldt'} ; nodes.push( au ); links.push( {source: aa , target: au },{source: aa , target: ai },{source: ai , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aa = nodes[0],ab = {id: 'ab', name:'mephisto'},ad = {id: 'ad', name:'kaylinger'},ai = nodes[1],au = nodes[2] ; nodes.push( ab,ad ); links.push( {source: ad , target: ai },{source: ad , target: au },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: au },{source: aa , target: ab },{source: ai , target: au },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  aa = nodes[0],ab = nodes[1],ab = nodes[1],ac = {id: 'ac', name:'wagner'},ad = nodes[2],ai = nodes[3],au = nodes[4] ; nodes.push( ac ); links.push( {source: ac , target: au },{source: ac , target: ad },{source: ac , target: ai },{source: aa , target: ac },{source: aa , target: au },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ab },{source: ad , target: au },{source: ad , target: ai },{source: ai , target: au },{source: ab , target: ac },{source: ab , target: au },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: au },{source: ab , target: ad },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ac','au','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  aa = nodes[0],ab = nodes[1],ao = {id: 'ao', name:'chor_der_geister'} ; nodes.push( ao ); links.push( {source: aa , target: ab },{source: aa , target: ao },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 215000);
