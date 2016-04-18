setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'lux'},ab = {id: 'ab', name:'finsterberg'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ac = {id: 'ac', name:'hell'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = {id: 'ad', name:'wirt'},ae = {id: 'ae', name:'wirtin'},af = {id: 'af', name:'hannsl'},ag = {id: 'ag', name:'wallfahrerchor'},ah = {id: 'ah', name:'hochzeitsreigen'},ai = {id: 'ai', name:'schulmeister'},aj = {id: 'aj', name:'michel'},ak = {id: 'ak', name:'loisl'},al = {id: 'al', name:'chor'},am = {id: 'am', name:'hochzeitschor'} ; nodes.push( ad,ae,af,ag,ah,ai,aj,ak,al,am ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ah','ai','aj','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ae = nodes[1],af = nodes[2],an = {id: 'an', name:'sepp'} ; nodes.push( an ); links.push( {source: af , target: an },{source: ad , target: an },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: an },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],an = nodes[1],ao = {id: 'ao', name:'annerl'} ; nodes.push( ao ); links.push( {source: an , target: ao },{source: ad , target: an },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'an','ao','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = {id: 'ac', name:'hell'},ap = {id: 'ap', name:'vetter'} ; nodes.push( ac,ap ); links.push( {source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = nodes[0],ap = nodes[1],aq = {id: 'aq', name:'brigitte'} ; nodes.push( aq ); links.push( {source: ap , target: aq },{source: ac , target: aq },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ac = nodes[0],ao = {id: 'ao', name:'annerl'},ap = nodes[1] ; nodes.push( ao ); links.push( {source: ao , target: ap },{source: ac , target: ap },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ac = nodes[0],ao = nodes[1],aq = {id: 'aq', name:'brigitte'} ; nodes.push( aq ); links.push( {source: ao , target: aq },{source: ac , target: ao },{source: ac , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ac = nodes[0],ao = nodes[1],aq = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: aq },{source: ac , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aq','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ac = nodes[0],an = {id: 'an', name:'sepp'},aq = {id: 'aq', name:'brigitte'} ; nodes.push( an,aq ); links.push( {source: ac , target: an },{source: ac , target: aq },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ac','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ao = {id: 'ao', name:'annerl'},aq = nodes[0] ; nodes.push( ao ); links.push( {source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ao = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aj = {id: 'aj', name:'michel'},ao = nodes[0] ; nodes.push( aj ); links.push( {source: aj , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ac = {id: 'ac', name:'hell'},aj = nodes[0],ao = nodes[1] ; nodes.push( ac ); links.push( {source: aj , target: ao },{source: ac , target: ao },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ao','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = nodes[0],aq = {id: 'aq', name:'brigitte'} ; nodes.push( aq ); links.push( {source: ac , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = nodes[0],an = {id: 'an', name:'sepp'},aq = nodes[1] ; nodes.push( an ); links.push( {source: an , target: aq },{source: ac , target: aq },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = nodes[0],an = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ac = nodes[0],aj = {id: 'aj', name:'michel'},ao = {id: 'ao', name:'annerl'} ; nodes.push( aj,ao ); links.push( {source: aj , target: ao },{source: ac , target: aj },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aj','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ai = {id: 'ai', name:'schulmeister'},an = {id: 'an', name:'sepp'},ar = {id: 'ar', name:'einige_bauern'},as = {id: 'as', name:'bauern'},at = {id: 'at', name:'junge_bursche'},at = {id: 'at', name:'junge_bursche'},au = {id: 'au', name:'der_alte_bauer'},au = {id: 'au', name:'der_alte_bauer'},av = {id: 'av', name:'mehrere_alte_bauern'} ; nodes.push( ai,an,ar,as,at,au,av ); links.push( {source: ai , target: an },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av },{source: ai , target: at },{source: ai , target: au },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: av },{source: an , target: at },{source: an , target: au },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: at },{source: ar , target: au },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: au , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ar','as','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = {id: 'ac', name:'hell'},ai = nodes[0],an = nodes[1],ao = {id: 'ao', name:'annerl'},at = nodes[2] ; nodes.push( ac,ao ); links.push( {source: ac , target: ai },{source: ac , target: an },{source: ac , target: at },{source: ac , target: ao },{source: ai , target: an },{source: ai , target: at },{source: ai , target: ao },{source: an , target: at },{source: an , target: ao },{source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ac','an','at','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ab = {id: 'ab', name:'finsterberg'},ai = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ac = {id: 'ac', name:'hell'},aj = {id: 'aj', name:'michel'},an = {id: 'an', name:'sepp'},ao = {id: 'ao', name:'annerl'} ; nodes.push( ac,aj,an,ao ); links.push( {source: ac , target: an },{source: ac , target: ao },{source: ac , target: aj },{source: an , target: ao },{source: aj , target: an },{source: aj , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 125000);
