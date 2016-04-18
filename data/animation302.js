setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'dichter'},ab = {id: 'ab', name:'direktor'},ac = {id: 'ac', name:'schauspieler'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel im Theaterdirektionszimmer'; var act = document.getElementById('act');act.innerHTML = '[Vorspiel]'; var scene = document.getElementById('scene');scene.innerHTML = '[Vorspiel]';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ad = {id: 'ad', name:'bombax'},ae = {id: 'ae', name:'praktinski'},af = {id: 'af', name:'asafötida'},ag = {id: 'ag', name:'suffimentum'},ah = {id: 'ah', name:'rhamphastus'},ai = {id: 'ai', name:'lepidanthos'},aj = {id: 'aj', name:'ventriculus'} ; nodes.push( ad,ae,af,ag,ah,ai,aj ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Prolog in der Hölle'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Prolog in der Hölle.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ae','af','ag','ah','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ak = {id: 'ak', name:'faustine'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 1.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ak = nodes[0],al = {id: 'al', name:'der_lebenstrieb'} ; nodes.push( al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 2.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 3.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ak = nodes[0],am = {id: 'am', name:'die_unabänderlichkeit'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 4.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 5.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ak = nodes[0],an = {id: 'an', name:'schabholz'} ; nodes.push( an ); links.push( {source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 6.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 7.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ak = nodes[0],ao = {id: 'ao', name:'waisenkinder'} ; nodes.push( ao ); links.push( {source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 8.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ak = nodes[0],ao = nodes[1],ap = {id: 'ap', name:'irma'} ; nodes.push( ap ); links.push( {source: ak , target: ap },{source: ak , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'I, 9.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap','ak','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aq = {id: 'aq', name:'erste_dame'},ar = {id: 'ar', name:'zweite_dame'},as = {id: 'as', name:'dritte_dame'},at = {id: 'at', name:'erster_offizier'},au = {id: 'au', name:'zweiter_offizier'},av = {id: 'av', name:'dritter_offizier'} ; nodes.push( aq,ar,as,at,au,av ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 1.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aq','ar','as','at','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aw = {id: 'aw', name:'schalk'},ax = {id: 'ax', name:'die_maurergesellen'} ; nodes.push( aw,ax ); links.push( {source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 2.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ak = {id: 'ak', name:'faustine'},aw = nodes[0] ; nodes.push( ak ); links.push( {source: ak , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 3.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ak = nodes[0],ay = {id: 'ay', name:'ronober'} ; nodes.push( ay ); links.push( {source: ak , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 4.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 5.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ak = nodes[0],az = {id: 'az', name:'musarion'} ; nodes.push( az ); links.push( {source: ak , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 6.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  az = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 7.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ak = {id: 'ak', name:'faustine'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 8.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = {id: 'ae', name:'praktinski'},ak = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 9.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'II, 10.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 1.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ae = {id: 'ae', name:'praktinski'},ak = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 2.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 3.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ae = nodes[0],ba = {id: 'ba', name:'fuchs'} ; nodes.push( ba ); links.push( {source: ae , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 4.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 5.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ae = nodes[0],az = {id: 'az', name:'musarion'} ; nodes.push( az ); links.push( {source: ae , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 6.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ae = nodes[0],ak = {id: 'ak', name:'faustine'},az = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: az },{source: ae , target: ak },{source: ae , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 7.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ae = nodes[0],ak = nodes[1],ba = {id: 'ba', name:'fuchs'} ; nodes.push( ba ); links.push( {source: ak , target: ba },{source: ae , target: ba },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 8.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ba','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ak = nodes[0],az = {id: 'az', name:'musarion'} ; nodes.push( az ); links.push( {source: ak , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 9.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 10.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ae = {id: 'ae', name:'praktinski'},ak = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'III, 11.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  bb = {id: 'bb', name:'führiana'},bc = {id: 'bc', name:'klettina'},bd = {id: 'bd', name:'magrona'},be = {id: 'be', name:'sattilka'} ; nodes.push( bb,bc,bd,be ); links.push( {source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bc , target: bd },{source: bc , target: be },{source: bd , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV, 1.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'bb','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ba = {id: 'ba', name:'fuchs'},bc = nodes[0],be = nodes[1] ; nodes.push( ba ); links.push( {source: ba , target: be },{source: ba , target: bc },{source: bc , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV, 2.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ae = {id: 'ae', name:'praktinski'},ak = {id: 'ak', name:'faustine'},bb = {id: 'bb', name:'führiana'},bc = nodes[0],be = nodes[1] ; nodes.push( ae,ak,bb ); links.push( {source: ae , target: bb },{source: ae , target: bc },{source: ae , target: be },{source: ae , target: ak },{source: bb , target: bc },{source: bb , target: be },{source: bc , target: be },{source: ak , target: bb },{source: ak , target: bc },{source: ak , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV, 3.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ae','bc','be','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ba = {id: 'ba', name:'fuchs'},bb = nodes[0] ; nodes.push( ba ); links.push( {source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV, 4.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'bb','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  bf = {id: 'bf', name:'der_erste'},bg = {id: 'bg', name:'der_zweite'},bh = {id: 'bh', name:'der_dritte'} ; nodes.push( bf,bg,bh ); links.push( {source: bf , target: bg },{source: bf , target: bh },{source: bg , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV, 5.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'bf','bg','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ae = {id: 'ae', name:'praktinski'},ak = {id: 'ak', name:'faustine'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV, 6.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ae = nodes[0],ak = nodes[1],bi = {id: 'bi', name:'der_müller'} ; nodes.push( bi ); links.push( {source: ae , target: bi },{source: ae , target: ak },{source: ak , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'IV, 7.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'bi','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ak = nodes[0],az = {id: 'az', name:'musarion'} ; nodes.push( az ); links.push( {source: ak , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 1.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ae = {id: 'ae', name:'praktinski'},ak = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 2.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  az = {id: 'az', name:'musarion'} ; nodes.push( az ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 3.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  bj = {id: 'bj', name:'innocentia'} ; nodes.push( bj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 4.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  az = {id: 'az', name:'musarion'},bj = nodes[0] ; nodes.push( az ); links.push( {source: az , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 5.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ak = {id: 'ak', name:'faustine'},az = nodes[0],bj = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: bj },{source: ak , target: az },{source: az , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 6.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ae = {id: 'ae', name:'praktinski'},ak = nodes[0],bj = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: bj },{source: ae , target: ak },{source: ak , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 7.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  az = {id: 'az', name:'musarion'},bj = nodes[0] ; nodes.push( az ); links.push( {source: az , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 8.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'bj','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  bk = {id: 'bk', name:'hertha'} ; nodes.push( bk ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 9.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  bj = {id: 'bj', name:'innocentia'},bk = nodes[0] ; nodes.push( bj ); links.push( {source: bj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 10.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ae = {id: 'ae', name:'praktinski'},bj = nodes[0],bk = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: bk },{source: ae , target: bj },{source: bj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 11.';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ae','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  bj = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 12.';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ae = {id: 'ae', name:'praktinski'},ak = {id: 'ak', name:'faustine'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 13.';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 14.';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  ae = nodes[0],az = {id: 'az', name:'musarion'} ; nodes.push( az ); links.push( {source: ae , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 15.';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  ak = {id: 'ak', name:'faustine'},az = nodes[0] ; nodes.push( ak ); links.push( {source: ak , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 16.';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  ae = {id: 'ae', name:'praktinski'},ak = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 17.';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  ak = nodes[0],bj = {id: 'bj', name:'innocentia'} ; nodes.push( bj ); links.push( {source: ak , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 18.';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  bj = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 19.';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  ae = {id: 'ae', name:'praktinski'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 20.';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ak = {id: 'ak', name:'faustine'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 21.';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  ak = nodes[0],bl = {id: 'bl', name:'melancholia'} ; nodes.push( bl ); links.push( {source: ak , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 22.';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  ae = {id: 'ae', name:'praktinski'},ak = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 23.';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 24.';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64'); var  ae = nodes[0],az = {id: 'az', name:'musarion'} ; nodes.push( az ); links.push( {source: ae , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 25.';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65'); var  ae = nodes[0],ak = {id: 'ak', name:'faustine'} ; nodes.push( ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 26.';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66'); var  ae = nodes[0],ak = nodes[1],bj = {id: 'bj', name:'innocentia'} ; nodes.push( bj ); links.push( {source: ak , target: bj },{source: ae , target: bj },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 27.';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67'); var  bj = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '28. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'V, 28.';
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68'); var  ae = {id: 'ae', name:'praktinski'},ak = {id: 'ak', name:'faustine'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VI, 1.';
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69'); var  ae = nodes[0],ak = nodes[1],bj = {id: 'bj', name:'innocentia'} ; nodes.push( bj ); links.push( {source: ak , target: bj },{source: ae , target: bj },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VI, 2.';
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70'); var  ae = nodes[0],ak = nodes[1],ap = {id: 'ap', name:'irma'},bj = nodes[2],bm = {id: 'bm', name:'elektra'} ; nodes.push( ap,bm ); links.push( {source: ak , target: bm },{source: ak , target: ap },{source: ak , target: bj },{source: ap , target: bm },{source: ap , target: bj },{source: ae , target: ak },{source: ae , target: bm },{source: ae , target: ap },{source: ae , target: bj },{source: bj , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VI, 3.';
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [ 'ak','bm','ap','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71'); var  an = {id: 'an', name:'schabholz'},ay = {id: 'ay', name:'ronober'},bj = nodes[0] ; nodes.push( an,ay ); links.push( {source: ay , target: bj },{source: an , target: ay },{source: an , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'VI, 4.';
}, 350000);
