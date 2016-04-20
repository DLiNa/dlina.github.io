setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'wild'},ab = {id: 'ab', name:'blasius'},ac = {id: 'ac', name:'la_feu'},ad = {id: 'ad', name:'wirt'},ad = {id: 'ad', name:'wirt'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ad },{source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ae = {id: 'ae', name:'berkley'},af = {id: 'af', name:'miss_caroline'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  af = nodes[0],ag = {id: 'ag', name:'louise'} ; nodes.push( ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  af = nodes[0],ag = nodes[1],ah = {id: 'ah', name:'lady_kathrin'} ; nodes.push( ah ); links.push( {source: ag , target: ah },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'wild'},ab = {id: 'ab', name:'blasius'},ac = {id: 'ac', name:'la_feu'},ai = {id: 'ai', name:'betty'} ; nodes.push( aa,ab,ac,ai ); links.push( {source: ac , target: ai },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ai },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ag = {id: 'ag', name:'louise'},ah = {id: 'ah', name:'lady_kathrin'} ; nodes.push( ag,ah ); links.push( {source: ac , target: ah },{source: ac , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ag },{source: ag , target: ah },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac','ah','ab','ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  af = {id: 'af', name:'miss_caroline'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = {id: 'aa', name:'wild'},af = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ae = {id: 'ae', name:'berkley'},af = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: af },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae','aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ab = {id: 'ab', name:'blasius'},ac = {id: 'ac', name:'la_feu'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = {id: 'aa', name:'wild'},ab = nodes[0],ac = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'wirt'},aj = {id: 'aj', name:'kapitän'},ak = {id: 'ak', name:'mohr'} ; nodes.push( ad,aj,ak ); links.push( {source: ad , target: aj },{source: ad , target: ak },{source: aj , target: ak },{source: ac , target: ad },{source: ac , target: aj },{source: ac , target: ak },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = {id: 'aa', name:'wild'},ab = nodes[0],ac = nodes[1],aj = nodes[2] ; nodes.push( aa ); links.push( {source: ab , target: ac },{source: ab , target: aj },{source: ac , target: aj },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab','ac','aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ag = {id: 'ag', name:'louise'},ah = {id: 'ah', name:'lady_kathrin'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ac = {id: 'ac', name:'la_feu'},ag = nodes[0],ah = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ag },{source: ac , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = {id: 'aa', name:'wild'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = nodes[0],af = {id: 'af', name:'miss_caroline'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0],ab = {id: 'ab', name:'blasius'},ac = {id: 'ac', name:'la_feu'},af = nodes[1],ag = {id: 'ag', name:'louise'},ah = {id: 'ah', name:'lady_kathrin'} ; nodes.push( ab,ac,ag,ah ); links.push( {source: ag , target: ah },{source: af , target: ag },{source: af , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ah },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ag','af','aa','ah','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = {id: 'ae', name:'berkley'},al = {id: 'al', name:'bediente'} ; nodes.push( ae,al ); links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = nodes[0],aj = {id: 'aj', name:'kapitän'} ; nodes.push( aj ); links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ae = nodes[0],af = {id: 'af', name:'miss_caroline'},aj = nodes[1],ak = {id: 'ak', name:'mohr'} ; nodes.push( af,ak ); links.push( {source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: af , target: aj },{source: af , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = {id: 'aa', name:'wild'},ae = nodes[0],af = nodes[1],aj = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: aj },{source: aa , target: ae },{source: aa , target: af },{source: ae , target: aj },{source: ae , target: af },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ae = nodes[1],af = nodes[2],ag = {id: 'ag', name:'louise'},ah = {id: 'ah', name:'lady_kathrin'},aj = nodes[3],ak = {id: 'ak', name:'mohr'} ; nodes.push( ag,ah,ak ); links.push( {source: ah , target: aj },{source: ah , target: ak },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ak },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ak },{source: aj , target: ak },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ak },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ah','ae','ag','aj','aa','af','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = {id: 'ab', name:'blasius'},ac = {id: 'ac', name:'la_feu'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = {id: 'aa', name:'wild'},ab = nodes[0],ac = nodes[1] ; nodes.push( aa ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ab','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  af = {id: 'af', name:'miss_caroline'},ai = {id: 'ai', name:'betty'} ; nodes.push( af,ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  af = nodes[0],ak = {id: 'ak', name:'mohr'} ; nodes.push( ak ); links.push( {source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = {id: 'ac', name:'la_feu'},ah = {id: 'ah', name:'lady_kathrin'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = {id: 'ab', name:'blasius'},ac = nodes[0],ag = {id: 'ag', name:'louise'},ah = nodes[1] ; nodes.push( ab,ag ); links.push( {source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ac },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ac = nodes[0],ae = {id: 'ae', name:'berkley'},ah = nodes[1],aj = {id: 'aj', name:'kapitän'} ; nodes.push( ae,aj ); links.push( {source: ae , target: aj },{source: ae , target: ah },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ae = nodes[0],af = {id: 'af', name:'miss_caroline'},aj = nodes[1] ; nodes.push( af ); links.push( {source: ae , target: aj },{source: ae , target: af },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ae = nodes[0],aj = nodes[1],ak = {id: 'ak', name:'mohr'} ; nodes.push( ak ); links.push( {source: aj , target: ak },{source: ae , target: ak },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = {id: 'aa', name:'wild'},ae = nodes[0],af = {id: 'af', name:'miss_caroline'},aj = nodes[1] ; nodes.push( aa,af ); links.push( {source: aa , target: af },{source: aa , target: aj },{source: aa , target: ae },{source: af , target: aj },{source: ae , target: af },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aj','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = nodes[0],af = nodes[1],ak = {id: 'ak', name:'mohr'} ; nodes.push( ak ); links.push( {source: aa , target: ak },{source: aa , target: af },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehente Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = nodes[0],af = nodes[1],ak = nodes[2],am = {id: 'am', name:'lord_bushy'} ; nodes.push( am ); links.push( {source: aa , target: am },{source: aa , target: af },{source: aa , target: ak },{source: af , target: am },{source: af , target: ak },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = nodes[0],ae = {id: 'ae', name:'berkley'},af = nodes[1],aj = {id: 'aj', name:'kapitän'},ak = nodes[2],am = nodes[3] ; nodes.push( ae,aj ); links.push( {source: ae , target: aj },{source: ae , target: am },{source: ae , target: af },{source: ae , target: ak },{source: aj , target: am },{source: aj , target: ak },{source: aa , target: ae },{source: aa , target: aj },{source: aa , target: am },{source: aa , target: af },{source: aa , target: ak },{source: af , target: aj },{source: af , target: am },{source: af , target: ak },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 180000);
