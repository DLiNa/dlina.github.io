setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'diether'},ab = {id: 'ab', name:'käthe_allein'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'wagner'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'fausts_stimme'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ae = {id: 'ae', name:'gesang'},ae = {id: 'ae', name:'gesang'} ; nodes.push( ae ); links.push( {source: ad , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],af = {id: 'af', name:'fremder'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'diether'},ab = {id: 'ab', name:'käthe_allein'},ac = {id: 'ac', name:'wagner'} ; nodes.push( aa,ab,ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'wagner'},ad = {id: 'ad', name:'fausts_stimme'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ac','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ad = nodes[0],ag = {id: 'ag', name:'stimme'},ag = {id: 'ag', name:'stimme'} ; nodes.push( ad,ag ); links.push( {source: ad , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = {id: 'aa', name:'diether'},ab = {id: 'ab', name:'käthe_allein'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'wagner'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ab = nodes[1],ad = {id: 'ad', name:'fausts_stimme'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = {id: 'ac', name:'wagner'},ad = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene [2]'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = {id: 'ab', name:'käthe_allein'},ac = nodes[0],ad = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ac = {id: 'ac', name:'wagner'},ad = nodes[0],af = {id: 'af', name:'fremder'},ai = {id: 'ai', name:'studentenchor'},aj = {id: 'aj', name:'studenten'},ak = {id: 'ak', name:'erster_student'},al = {id: 'al', name:'zweiter_student'},am = {id: 'am', name:'dritter_student'} ; nodes.push( ac,af,ai,aj,ak,al,am ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: af },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ad },{source: ac , target: af },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai','aj','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = nodes[0],ad = nodes[1],af = nodes[2],af = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ac , target: af },{source: ac , target: af },{source: ad , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ad = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ad = nodes[0],an = {id: 'an', name:'helenens_stimme'} ; nodes.push( an ); links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ad = nodes[0],af = {id: 'af', name:'fremder'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = nodes[0],an = {id: 'an', name:'helenens_stimme'} ; nodes.push( an ); links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = {id: 'aa', name:'diether'},ab = {id: 'ab', name:'käthe_allein'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = {id: 'ac', name:'wagner'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ab = {id: 'ab', name:'käthe_allein'},ac = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = nodes[0],ad = {id: 'ad', name:'fausts_stimme'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = {id: 'ab', name:'käthe_allein'},ad = nodes[0],an = {id: 'an', name:'helenens_stimme'} ; nodes.push( ab,an ); links.push( {source: ab , target: ad },{source: ab , target: an },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ad','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = {id: 'aa', name:'diether'},ab = nodes[0] ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ad = {id: 'ad', name:'fausts_stimme'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ad = nodes[0],af = {id: 'af', name:'fremder'},af = {id: 'af', name:'fremder'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ac = {id: 'ac', name:'wagner'},ad = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ad = nodes[0],ao = {id: 'ao', name:'erster_leichenträger'},ap = {id: 'ap', name:'zweiter_leichenträger'} ; nodes.push( ao,ap ); links.push( {source: ad , target: ao },{source: ad , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = {id: 'aa', name:'diether'},ad = nodes[0],ao = nodes[1],ap = nodes[2],aq = {id: 'aq', name:'leichenträger'},aq = {id: 'aq', name:'leichenträger'} ; nodes.push( aa,aq ); links.push( {source: aa , target: ao },{source: aa , target: ad },{source: aa , target: aq },{source: aa , target: ap },{source: aa , target: aq },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ad , target: ao },{source: ad , target: aq },{source: ad , target: ap },{source: ad , target: aq },{source: ap , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa','ad','aq','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ao = nodes[0],ar = {id: 'ar', name:'anführer'} ; nodes.push( ar ); links.push( {source: ao , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ar','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ad = {id: 'ad', name:'fausts_stimme'},ah = {id: 'ah', name:'stimme_5.7'},as = {id: 'as', name:'erste_maske'},at = {id: 'at', name:'zweite_maske'},au = {id: 'au', name:'dritte_maske'} ; nodes.push( ad,ah,as,at,au ); links.push( {source: ad , target: as },{source: ad , target: at },{source: ad , target: au },{source: ad , target: ah },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'as','at','au','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ad = nodes[0],ar = {id: 'ar', name:'anführer'} ; nodes.push( ar ); links.push( {source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  af = {id: 'af', name:'fremder'},ar = nodes[0],av = {id: 'av', name:'gerichtsdiener'} ; nodes.push( af,av ); links.push( {source: af , target: ar },{source: af , target: av },{source: ar , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ar','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ad = {id: 'ad', name:'fausts_stimme'},af = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ad = nodes[0],an = {id: 'an', name:'helenens_stimme'} ; nodes.push( an ); links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ad = nodes[0],af = {id: 'af', name:'fremder'},af = {id: 'af', name:'fremder'},af = {id: 'af', name:'fremder'},af = {id: 'af', name:'fremder'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ad , target: af },{source: ad , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '13. Scene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
}, 210000);
