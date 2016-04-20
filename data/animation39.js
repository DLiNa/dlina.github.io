setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'erster_schreiber'},ab = {id: 'ab', name:'zweiter_schreiber'},ac = {id: 'ac', name:'die_anderen'},ad = {id: 'ad', name:'schraube'},ae = {id: 'ae', name:'fähnlein'},ah = {id: 'ah', name:'hammer'} ; nodes.push( aa,ab,ac,ad,ae,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: ah },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  af = {id: 'af', name:'hermine'},ah = nodes[0] ; nodes.push( af ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  af = nodes[0],ag = {id: 'ag', name:'zänker'},ah = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  af = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = {id: 'ae', name:'fähnlein'},ah = {id: 'ah', name:'hammer'} ; nodes.push( ae,ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ah = nodes[0],ai = {id: 'ai', name:'alwine'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ah = nodes[0],ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  af = {id: 'af', name:'hermine'},ag = {id: 'ag', name:'zänker'},ai = {id: 'ai', name:'alwine'},aj = {id: 'aj', name:'ein_teil_der_gesellschaft'},ak = {id: 'ak', name:'die_andern'},al = {id: 'al', name:'rost'},am = {id: 'am', name:'rellmann'} ; nodes.push( af,ag,ai,aj,ak,al,am ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: ag },{source: af , target: al },{source: af , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '10. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ai','af','aj','ak','ag','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  an = {id: 'an', name:'seitzer'},ao = {id: 'ao', name:'frau_seitzer'},ap = {id: 'ap', name:'taterl'},aq = {id: 'aq', name:'frau_xandl'},ar = {id: 'ar', name:'arbeiter'},as = {id: 'as', name:'bursche'},at = {id: 'at', name:'sein_weib'},au = {id: 'au', name:'adalgise'},av = {id: 'av', name:'frau_holler'},aw = {id: 'aw', name:'thomas'},ax = {id: 'ax', name:'dienstmann'} ; nodes.push( an,ao,ap,aq,ar,as,at,au,av,aw,ax ); links.push( {source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: av },{source: an , target: aw },{source: an , target: ax },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: av },{source: ao , target: aw },{source: ao , target: ax },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: ax },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: ax },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: ax },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: as , target: ax },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: ax },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: av , target: aw },{source: av , target: ax },{source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an','ao','ap','ar','as','at','au','av','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aq = nodes[0],aw = nodes[1] ; /* nodes.push(); */ links.push( {source: aq , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aw = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '13. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = {id: 'ae', name:'fähnlein'},ah = {id: 'ah', name:'hammer'},aw = nodes[0] ; nodes.push( ae,ah ); links.push( {source: ae , target: ah },{source: ae , target: aw },{source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ah = nodes[0],ay = {id: 'ay', name:'strolch'},ay = {id: 'ay', name:'strolch'} ; nodes.push( ay ); links.push( {source: ah , target: ay },{source: ah , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ah = nodes[0],aw = {id: 'aw', name:'thomas'} ; nodes.push( aw ); links.push( {source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  az = {id: 'az', name:'florian'},ba = {id: 'ba', name:'alte_hammer'} ; nodes.push( az,ba ); links.push( {source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aq = {id: 'aq', name:'frau_xandl'},az = nodes[0] ; nodes.push( aq ); links.push( {source: aq , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aq = nodes[0],ba = {id: 'ba', name:'alte_hammer'} ; nodes.push( ba ); links.push( {source: aq , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  az = {id: 'az', name:'florian'},ba = nodes[0] ; nodes.push( az ); links.push( {source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ah = {id: 'ah', name:'hammer'},aq = {id: 'aq', name:'frau_xandl'},aw = {id: 'aw', name:'thomas'},az = nodes[0],ba = nodes[1] ; nodes.push( ah,aq,aw ); links.push( {source: aw , target: ba },{source: aw , target: az },{source: aq , target: aw },{source: aq , target: ba },{source: aq , target: az },{source: ah , target: aw },{source: ah , target: ba },{source: ah , target: aq },{source: ah , target: az },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aq = nodes[0],aw = nodes[1],ba = nodes[2] ; /* nodes.push(); */ links.push( {source: aw , target: ba },{source: aq , target: ba },{source: aq , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ah = {id: 'ah', name:'hammer'},aw = nodes[0],ba = nodes[1] ; nodes.push( ah ); links.push( {source: aw , target: ba },{source: ah , target: aw },{source: ah , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ah = nodes[0],aw = nodes[1] ; /* nodes.push(); */ links.push( {source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ah = nodes[0],ba = {id: 'ba', name:'alte_hammer'} ; nodes.push( ba ); links.push( {source: ah , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ba','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  af = {id: 'af', name:'hermine'},ai = {id: 'ai', name:'alwine'},bb = {id: 'bb', name:'jette'} ; nodes.push( af,ai,bb ); links.push( {source: ai , target: bb },{source: af , target: ai },{source: af , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ad = {id: 'ad', name:'schraube'},ae = {id: 'ae', name:'fähnlein'},af = nodes[0],ai = nodes[1] ; nodes.push( ad,ae ); links.push( {source: af , target: ai },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ae },{source: ae , target: af },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ad = nodes[0],ad = nodes[0],af = nodes[1],ai = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: ai },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: af },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ad = nodes[0],af = nodes[1],ai = nodes[2],aw = {id: 'aw', name:'thomas'} ; nodes.push( aw ); links.push( {source: ai , target: aw },{source: af , target: aw },{source: af , target: ai },{source: ad , target: aw },{source: ad , target: ai },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ad = nodes[0],aw = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ad = nodes[0],ai = {id: 'ai', name:'alwine'},aw = nodes[1] ; nodes.push( ai ); links.push( {source: ai , target: aw },{source: ad , target: ai },{source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ad = nodes[0],af = {id: 'af', name:'hermine'},ai = nodes[1],aw = nodes[2] ; nodes.push( af ); links.push( {source: af , target: aw },{source: af , target: ai },{source: ai , target: aw },{source: ad , target: af },{source: ad , target: aw },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '7. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'af','aw','ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ae = {id: 'ae', name:'fähnlein'},ah = {id: 'ah', name:'hammer'},az = {id: 'az', name:'florian'},ba = {id: 'ba', name:'alte_hammer'} ; nodes.push( ae,ah,az,ba ); links.push( {source: ah , target: ba },{source: ah , target: az },{source: ae , target: ah },{source: ae , target: ba },{source: ae , target: az },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ad = {id: 'ad', name:'schraube'},ae = nodes[0],ah = nodes[1],aw = {id: 'aw', name:'thomas'},az = nodes[2],ba = nodes[3] ; nodes.push( ad,aw ); links.push( {source: aw , target: ba },{source: aw , target: az },{source: az , target: ba },{source: ah , target: aw },{source: ah , target: ba },{source: ah , target: az },{source: ae , target: aw },{source: ae , target: ba },{source: ae , target: az },{source: ae , target: ah },{source: ad , target: aw },{source: ad , target: ba },{source: ad , target: az },{source: ad , target: ah },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ad = nodes[0],ae = nodes[1],af = {id: 'af', name:'hermine'},ah = nodes[2],ai = {id: 'ai', name:'alwine'},aw = nodes[3],ba = nodes[4] ; nodes.push( af,ai ); links.push( {source: ai , target: ba },{source: ai , target: aw },{source: ah , target: ai },{source: ah , target: ba },{source: ah , target: aw },{source: af , target: ai },{source: af , target: ah },{source: af , target: ba },{source: af , target: aw },{source: aw , target: ba },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ba },{source: ad , target: af },{source: ad , target: aw },{source: ad , target: ae },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: ba },{source: ae , target: af },{source: ae , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '10. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 170000);
