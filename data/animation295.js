setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'geisterchor'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = {id: 'ab', name:'vampyrmeister'},ac = {id: 'ac', name:'ruthwen'} ; nodes.push( ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = {id: 'ac', name:'ruthwen'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ac = nodes[0],ad = {id: 'ad', name:'janthe'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ar = {id: 'ar', name:'allgemeiner_chor'} ; nodes.push( ar ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = {id: 'ac', name:'ruthwen'},ad = {id: 'ad', name:'janthe'},ae = {id: 'ae', name:'berkley'},ar = nodes[0] ; nodes.push( ac,ad,ae ); links.push( {source: ae , target: ar },{source: ad , target: ae },{source: ad , target: ar },{source: ac , target: ae },{source: ac , target: ar },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ad = nodes[0],ae = nodes[1],af = {id: 'af', name:'ein_diener'},ar = nodes[2] ; nodes.push( af ); links.push( {source: ae , target: ar },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ar },{source: ad , target: af },{source: af , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae','ad','ar','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ac = {id: 'ac', name:'ruthwen'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ac = nodes[0],ag = {id: 'ag', name:'aubry'},ah = {id: 'ah', name:'ruthwens'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ai = {id: 'ai', name:'malwina'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ag = {id: 'ag', name:'aubry'},ai = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ag = nodes[0],ai = nodes[1],aj = {id: 'aj', name:'dauvenaut'},aj = {id: 'aj', name:'dauvenaut'} ; nodes.push( aj ); links.push( {source: ai , target: aj },{source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aj = nodes[0],ak = {id: 'ak', name:'george'} ; nodes.push( ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ak = nodes[0],al = {id: 'al', name:'alle_landleute'},am = {id: 'am', name:'alle_jäger'},an = {id: 'an', name:'vier_paar_landleute'},ao = {id: 'ao', name:'chor_der_jäger_und_landleute'} ; nodes.push( al,am,an,ao ); links.push( {source: al , target: an },{source: al , target: am },{source: al , target: ao },{source: an , target: ao },{source: am , target: an },{source: am , target: ao },{source: ak , target: al },{source: ak , target: an },{source: ak , target: am },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','an','am','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ac = {id: 'ac', name:'ruthwen'},ag = {id: 'ag', name:'aubry'},ai = {id: 'ai', name:'malwina'},aj = {id: 'aj', name:'dauvenaut'},ao = nodes[0],ar = {id: 'ar', name:'allgemeiner_chor'} ; nodes.push( ac,ag,ai,aj,ar ); links.push( {source: ao , target: ar },{source: aj , target: ao },{source: aj , target: ar },{source: ac , target: ao },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ar },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: ar },{source: ag , target: ao },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ao','aj','ac','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ap = {id: 'ap', name:'chor_der_tänzer'},aq = {id: 'aq', name:'chor_der_trinker'},ar = nodes[0],as = {id: 'as', name:'gadshill'},at = {id: 'at', name:'blunt'},au = {id: 'au', name:'scrop'},av = {id: 'av', name:'perth'},aw = {id: 'aw', name:'frau_blunt'} ; nodes.push( ap,aq,as,at,au,av,aw ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: aw },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aw },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: au , target: av },{source: au , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aq','ap','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ar = nodes[0],at = nodes[1],au = nodes[2],av = nodes[3],aw = nodes[4],ax = {id: 'ax', name:'emmy'},ay = {id: 'ay', name:'green'},az = {id: 'az', name:'die_mädchen'} ; nodes.push( ax,ay,az ); links.push( {source: ar , target: av },{source: ar , target: at },{source: ar , target: aw },{source: ar , target: ay },{source: ar , target: au },{source: ar , target: az },{source: ar , target: ax },{source: av , target: aw },{source: av , target: ay },{source: av , target: az },{source: av , target: ax },{source: at , target: av },{source: at , target: aw },{source: at , target: ay },{source: at , target: au },{source: at , target: az },{source: at , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ax },{source: ay , target: az },{source: au , target: av },{source: au , target: aw },{source: au , target: ay },{source: au , target: az },{source: au , target: ax },{source: ax , target: ay },{source: ax , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ar','aw','ay','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = {id: 'ac', name:'ruthwen'},at = nodes[0],av = nodes[1],ax = nodes[2],az = nodes[3] ; nodes.push( ac ); links.push( {source: ac , target: az },{source: ac , target: ax },{source: ac , target: av },{source: ac , target: at },{source: ax , target: az },{source: av , target: az },{source: av , target: ax },{source: at , target: az },{source: at , target: ax },{source: at , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'az','av','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = nodes[0],ax = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ac = nodes[0],ak = {id: 'ak', name:'george'},ax = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: ax },{source: ac , target: ak },{source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ak = nodes[0],ax = nodes[1] ; /* nodes.push(); */ links.push( {source: ak , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ag = {id: 'ag', name:'aubry'},ak = nodes[0],ax = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: ak },{source: ag , target: ax },{source: ak , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = {id: 'ac', name:'ruthwen'},ag = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ag = nodes[0],ak = {id: 'ak', name:'george'} ; nodes.push( ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = {id: 'ac', name:'ruthwen'},ax = {id: 'ax', name:'emmy'} ; nodes.push( ac,ax ); links.push( {source: ac , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ac','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ar = {id: 'ar', name:'allgemeiner_chor'},as = {id: 'as', name:'gadshill'},at = {id: 'at', name:'blunt'},au = {id: 'au', name:'scrop'},ay = {id: 'ay', name:'green'} ; nodes.push( ar,as,at,au,ay ); links.push( {source: at , target: au },{source: at , target: ay },{source: au , target: ay },{source: as , target: at },{source: as , target: au },{source: as , target: ay },{source: ar , target: at },{source: ar , target: au },{source: ar , target: ay },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'au','ay','as','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  at = nodes[0],aw = {id: 'aw', name:'frau_blunt'} ; nodes.push( aw ); links.push( {source: at , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ar = {id: 'ar', name:'allgemeiner_chor'},at = nodes[0],aw = nodes[1] ; nodes.push( ar ); links.push( {source: at , target: aw },{source: ar , target: at },{source: ar , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'at','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ar = nodes[0],as = {id: 'as', name:'gadshill'},au = {id: 'au', name:'scrop'},av = {id: 'av', name:'perth'},ay = {id: 'ay', name:'green'} ; nodes.push( as,au,av,ay ); links.push( {source: av , target: ay },{source: ar , target: av },{source: ar , target: ay },{source: ar , target: au },{source: ar , target: as },{source: au , target: av },{source: au , target: ay },{source: as , target: av },{source: as , target: ay },{source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ay','au','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ak = {id: 'ak', name:'george'},ar = nodes[0],av = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: av },{source: ak , target: ar },{source: ar , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ak','av','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ag = {id: 'ag', name:'aubry'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ag = nodes[0],ai = {id: 'ai', name:'malwina'} ; nodes.push( ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ag = nodes[0],ai = nodes[1],aj = {id: 'aj', name:'dauvenaut'},ba = {id: 'ba', name:'chor_der_gäste'} ; nodes.push( aj,ba ); links.push( {source: aj , target: ba },{source: ai , target: ba },{source: ai , target: aj },{source: ag , target: ba },{source: ag , target: aj },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ac = {id: 'ac', name:'ruthwen'},ag = nodes[0],ai = nodes[1],aj = nodes[2],ar = {id: 'ar', name:'allgemeiner_chor'},bb = {id: 'bb', name:'haushofmeister'} ; nodes.push( ac,ar,bb ); links.push( {source: ai , target: bb },{source: ai , target: ar },{source: ai , target: aj },{source: ag , target: bb },{source: ag , target: ai },{source: ag , target: ar },{source: ag , target: aj },{source: ar , target: bb },{source: aj , target: bb },{source: aj , target: ar },{source: ac , target: bb },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ac = nodes[0],ag = nodes[1],ai = nodes[2],aj = nodes[3],ar = nodes[4] ; /* nodes.push(); */ links.push( {source: aj , target: ar },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ar },{source: ai , target: aj },{source: ai , target: ar },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ac = nodes[0],ag = nodes[1],ai = nodes[2],aj = nodes[3],ar = nodes[4] ; /* nodes.push(); */ links.push( {source: ag , target: ar },{source: ag , target: aj },{source: ag , target: ai },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: aj },{source: ac , target: ai },{source: aj , target: ar },{source: ai , target: ar },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 190000);
