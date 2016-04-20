setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'haller'},ab = {id: 'ab', name:'winter'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'emilie'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[1],ad = {id: 'ad', name:'fledermaus'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'haller'},ae = {id: 'ae', name:'stadtdir'},af = {id: 'af', name:'joseph'} ; nodes.push( aa,ae,af ); links.push( {source: ae , target: af },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ac = {id: 'ac', name:'emilie'},ae = nodes[1],af = nodes[2] ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ac , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','af','aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = {id: 'ab', name:'winter'},ad = {id: 'ad', name:'fledermaus'},ag = {id: 'ag', name:'rosel'} ; nodes.push( ab,ad,ag ); links.push( {source: ab , target: ag },{source: ab , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ah = {id: 'ah', name:'vikt'},ai = {id: 'ai', name:'wirth'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ai = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ag = {id: 'ag', name:'rosel'},ai = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ag = nodes[0],aj = {id: 'aj', name:'zachariesel'} ; nodes.push( aj ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'winter'},ad = {id: 'ad', name:'fledermaus'},ag = nodes[0] ; nodes.push( ab,ad ); links.push( {source: ad , target: ag },{source: ab , target: ad },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = nodes[0],ad = nodes[1],ag = nodes[2],aj = {id: 'aj', name:'zachariesel'} ; nodes.push( aj ); links.push( {source: ad , target: aj },{source: ad , target: ag },{source: ag , target: aj },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = nodes[0],ad = nodes[1],ag = nodes[2],ai = {id: 'ai', name:'wirth'},ak = {id: 'ak', name:'haush_wollen_sich_losmachen'} ; nodes.push( ai,ak ); links.push( {source: ai , target: ak },{source: ag , target: ak },{source: ag , target: ai },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: ag },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = nodes[0],ag = nodes[2],ai = nodes[3],ak = nodes[4],ak = nodes[4],al = {id: 'al', name:'erster_gerichtsdiener'},am = {id: 'am', name:'zweyter_gerichtsdiener'},an = {id: 'an', name:'gerichtsdiener'} ; nodes.push( al,am,an ); links.push( {source: ab , target: al },{source: ab , target: am },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: ak },{source: ab , target: ag },{source: ab , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: ak },{source: ai , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ak },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ab','al','am','ak','ai','ag','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'haller'},ac = {id: 'ac', name:'emilie'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = nodes[1],ae = {id: 'ae', name:'stadtdir'},af = {id: 'af', name:'joseph'},an = {id: 'an', name:'gerichtsdiener'} ; nodes.push( ae,af,an ); links.push( {source: ae , target: an },{source: ae , target: af },{source: ac , target: an },{source: ac , target: ae },{source: ac , target: af },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'an','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = {id: 'aa', name:'haller'},ab = {id: 'ab', name:'winter'},ad = {id: 'ad', name:'fledermaus'},ae = nodes[1],af = nodes[2],aj = {id: 'aj', name:'zachariesel'} ; nodes.push( aa,ab,ad,aj ); links.push( {source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: aj },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: aj },{source: af , target: aj },{source: ae , target: af },{source: ae , target: aj },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab','ad','af','ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aj = nodes[5] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyundzwanzigste Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = {id: 'aa', name:'haller'},ab = {id: 'ab', name:'winter'},ad = {id: 'ad', name:'fledermaus'},ae = {id: 'ae', name:'stadtdir'},af = {id: 'af', name:'joseph'} ; nodes.push( aa,ab,ad,ae,af ); links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ad , target: ae },{source: ad , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyundzwanzigste Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ab','ad','aa','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ag = {id: 'ag', name:'rosel'},ao = {id: 'ao', name:'dienstleute'} ; nodes.push( ag,ao ); links.push( {source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyte Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ad = {id: 'ad', name:'fledermaus'},ag = nodes[0],ap = {id: 'ap', name:'jäger'} ; nodes.push( ad,ap ); links.push( {source: ag , target: ap },{source: ad , target: ap },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ad = nodes[0],ag = nodes[1],aj = {id: 'aj', name:'zachariesel'} ; nodes.push( aj ); links.push( {source: ad , target: aj },{source: ad , target: ag },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ag = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = {id: 'ab', name:'winter'},aq = {id: 'aq', name:'sophie'} ; nodes.push( ab,aq ); links.push( {source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ab','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = {id: 'aa', name:'haller'},ac = {id: 'ac', name:'emilie'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = {id: 'ab', name:'winter'},ad = {id: 'ad', name:'fledermaus'},ar = {id: 'ar', name:'chor'},ar = {id: 'ar', name:'chor'},at = {id: 'at', name:'spieler'},at = {id: 'at', name:'spieler'},au = {id: 'au', name:'treuhold'},av = {id: 'av', name:'die_mädchen'} ; nodes.push( ab,ad,ar,at,au,av ); links.push( {source: ar , target: at },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ad , target: ar },{source: ad , target: ar },{source: ad , target: at },{source: ad , target: at },{source: ad , target: au },{source: ad , target: av },{source: ar , target: at },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ab , target: ar },{source: ab , target: ad },{source: ab , target: ar },{source: ab , target: at },{source: ab , target: at },{source: ab , target: au },{source: ab , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ar','ad','at','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ac = {id: 'ac', name:'emilie'},aj = {id: 'aj', name:'zachariesel'} ; nodes.push( ac,aj ); links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ac','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = {id: 'ab', name:'winter'},at = {id: 'at', name:'spieler'},aw = {id: 'aw', name:'ein_and'},ax = {id: 'ax', name:'andere'} ; nodes.push( ab,at,aw,ax ); links.push( {source: ab , target: at },{source: ab , target: aw },{source: ab , target: ax },{source: at , target: aw },{source: at , target: ax },{source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'at','aw','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ab = nodes[0],ag = {id: 'ag', name:'rosel'},aj = {id: 'aj', name:'zachariesel'} ; nodes.push( ag,aj ); links.push( {source: ag , target: aj },{source: ab , target: ag },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ab = nodes[0],aj = nodes[2],at = {id: 'at', name:'spieler'},aw = {id: 'aw', name:'ein_and'},aw = {id: 'aw', name:'ein_and'},ax = {id: 'ax', name:'andere'},ax = {id: 'ax', name:'andere'} ; nodes.push( at,aw,ax ); links.push( {source: at , target: ax },{source: at , target: aw },{source: at , target: ax },{source: at , target: aw },{source: ab , target: at },{source: ab , target: ax },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: aw },{source: ab , target: aj },{source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ax },{source: aj , target: at },{source: aj , target: ax },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnte Scene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ax','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ab = nodes[0],aj = nodes[1],at = nodes[2] ; /* nodes.push(); */ links.push( {source: aj , target: at },{source: ab , target: aj },{source: ab , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ab = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Scene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aj = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Scene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ah = {id: 'ah', name:'vikt'},ah = {id: 'ah', name:'vikt'},ah = {id: 'ah', name:'vikt'},aj = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: aj },{source: ah , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Scene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ah = nodes[0],ah = nodes[0],ai = {id: 'ai', name:'wirth'},aj = nodes[3] ; nodes.push( ai ); links.push( {source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Scene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ai','ah','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ad = {id: 'ad', name:'fledermaus'},aq = {id: 'aq', name:'sophie'} ; nodes.push( ad,aq ); links.push( {source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Scene.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ad = nodes[0],ag = {id: 'ag', name:'rosel'},aq = nodes[1] ; nodes.push( ag ); links.push( {source: ad , target: aq },{source: ad , target: ag },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Scene.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ab = {id: 'ab', name:'winter'},ad = nodes[0],ag = nodes[1] ; nodes.push( ab ); links.push( {source: ad , target: ag },{source: ab , target: ag },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Scene.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  aa = {id: 'aa', name:'haller'},ab = nodes[0],ac = {id: 'ac', name:'emilie'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyundzwanzigste Scene.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ad = {id: 'ad', name:'fledermaus'},aq = {id: 'aq', name:'sophie'} ; nodes.push( ad,aq ); links.push( {source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyundzwanzigste Scene.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigste Scene.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ab = {id: 'ab', name:'winter'},ad = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigste Scene.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ab = nodes[0],ad = nodes[1],aq = {id: 'aq', name:'sophie'} ; nodes.push( aq ); links.push( {source: ab , target: aq },{source: ab , target: ad },{source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigste Scene.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ab = nodes[0],ad = nodes[1],aq = nodes[2],at = {id: 'at', name:'spieler'},at = {id: 'at', name:'spieler'} ; nodes.push( at ); links.push( {source: ad , target: at },{source: ad , target: at },{source: ad , target: aq },{source: ab , target: at },{source: ab , target: ad },{source: ab , target: at },{source: ab , target: aq },{source: aq , target: at },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigste Scene.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'at','ad','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ab = nodes[0],as = {id: 'as', name:'chor_2.28'} ; nodes.push( as ); links.push( {source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '28. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtundzwanzigste Scene.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  aa = {id: 'aa', name:'haller'},ab = nodes[0],ac = {id: 'ac', name:'emilie'},ad = {id: 'ad', name:'fledermaus'},ag = {id: 'ag', name:'rosel'},aq = {id: 'aq', name:'sophie'},at = {id: 'at', name:'spieler'} ; nodes.push( aa,ac,ad,ag,aq,at ); links.push( {source: aq , target: at },{source: ab , target: at },{source: ab , target: aq },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ag },{source: ac , target: at },{source: ac , target: aq },{source: ac , target: ad },{source: ac , target: ag },{source: ad , target: at },{source: ad , target: aq },{source: ad , target: ag },{source: ag , target: at },{source: ag , target: aq },{source: aa , target: at },{source: aa , target: aq },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '29. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunundzwanzigste Scene.';
}, 245000);
