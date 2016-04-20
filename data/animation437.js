setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'sosias'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = {id: 'ab', name:'merkur'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = {id: 'ac', name:'jupiter'},ad = {id: 'ad', name:'alkmene'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = {id: 'ab', name:'merkur'},ae = {id: 'ae', name:'charis'} ; nodes.push( ab,ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'sosias'},af = {id: 'af', name:'amphitryon'} ; nodes.push( aa,af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ad = {id: 'ad', name:'alkmene'},ae = {id: 'ae', name:'charis'},af = nodes[1] ; nodes.push( ad,ae ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ae = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ad = {id: 'ad', name:'alkmene'},ae = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = {id: 'aa', name:'sosias'},ac = {id: 'ac', name:'jupiter'},ad = nodes[0] ; nodes.push( aa,ac ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ae = {id: 'ae', name:'charis'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  af = {id: 'af', name:'amphitryon'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'merkur'},af = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  af = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = {id: 'aa', name:'sosias'},af = nodes[0],ag = {id: 'ag', name:'erster_feldherr'},ah = {id: 'ah', name:'zweiter_feldherr'} ; nodes.push( aa,ag,ah ); links.push( {source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],ac = {id: 'ac', name:'jupiter'},af = nodes[1],ag = nodes[2],ah = nodes[3],ai = {id: 'ai', name:'dritter_feldherr'} ; nodes.push( ac,ai ); links.push( {source: ac , target: af },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'af','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = nodes[0],ac = nodes[1],ag = nodes[3] ; /* nodes.push(); */ links.push( {source: ac , target: ag },{source: aa , target: ac },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ab = {id: 'ab', name:'merkur'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = nodes[0],af = {id: 'af', name:'amphitryon'},aj = {id: 'aj', name:'derselbe'},aj = {id: 'aj', name:'derselbe'},ak = {id: 'ak', name:'zweiter_oberster'},al = {id: 'al', name:'erster_oberster'},am = {id: 'am', name:'volk'},am = {id: 'am', name:'volk'} ; nodes.push( af,aj,ak,al,am ); links.push( {source: af , target: aj },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: ak , target: am },{source: al , target: am },{source: al , target: am },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = nodes[0],ab = {id: 'ab', name:'merkur'},ac = {id: 'ac', name:'jupiter'},ad = {id: 'ad', name:'alkmene'},af = nodes[1],ag = {id: 'ag', name:'erster_feldherr'},ah = {id: 'ah', name:'zweiter_feldherr'},ai = {id: 'ai', name:'dritter_feldherr'},ak = nodes[4],al = nodes[5],am = nodes[6],am = nodes[6],an = {id: 'an', name:'die_obersten'},ao = {id: 'ao', name:'die_feldherren'} ; nodes.push( ab,ac,ad,ag,ah,ai,an,ao ); links.push( {source: ad , target: am },{source: ad , target: af },{source: ad , target: an },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: am },{source: ad , target: ai },{source: ad , target: ao },{source: am , target: an },{source: am , target: ao },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: af },{source: ac , target: an },{source: ac , target: al },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: ao },{source: af , target: am },{source: af , target: an },{source: af , target: al },{source: af , target: ak },{source: af , target: ah },{source: af , target: ag },{source: af , target: am },{source: af , target: ai },{source: af , target: ao },{source: an , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: am },{source: al , target: ao },{source: ak , target: am },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: ao },{source: ah , target: am },{source: ah , target: an },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: ao },{source: ag , target: am },{source: ag , target: an },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: ao },{source: am , target: an },{source: am , target: ao },{source: aa , target: ad },{source: aa , target: am },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: an },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: am },{source: aa , target: ai },{source: aa , target: ao },{source: aa , target: ab },{source: ai , target: am },{source: ai , target: an },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: ao },{source: ab , target: ad },{source: ab , target: am },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: an },{source: ab , target: al },{source: ab , target: ak },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: am },{source: ab , target: ai },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 105000);
