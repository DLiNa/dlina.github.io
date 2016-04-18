setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'gertrud'},ab = {id: 'ab', name:'dorle'},ab = {id: 'ab', name:'dorle'},ac = {id: 'ac', name:'peter'},aq = {id: 'aq', name:'michel'} ; nodes.push( aa,ab,ac,aq ); links.push( {source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: aq },{source: ab , target: ac },{source: ab , target: aq },{source: ab , target: ac },{source: ab , target: aq },{source: ac , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ab = nodes[1],ad = {id: 'ad', name:'lisbeth'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ae = {id: 'ae', name:'veit'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: aa , target: ae },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[0],af = {id: 'af', name:'graf'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = nodes[0],af = nodes[1],ag = {id: 'ag', name:'steffen'} ; nodes.push( ag ); links.push( {source: ab , target: ag },{source: ab , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'gertrud'},ab = nodes[0],ab = nodes[0],ad = {id: 'ad', name:'lisbeth'},ae = {id: 'ae', name:'veit'},af = nodes[1],ag = nodes[2],ah = {id: 'ah', name:'bastian'} ; nodes.push( aa,ab,ad,ae,ah ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: af },{source: ag , target: ah },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af },{source: af , target: ah },{source: af , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','aa','ah','ag','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = nodes[0],ai = {id: 'ai', name:'kathrin'} ; nodes.push( ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aj = {id: 'aj', name:'charles'},ak = {id: 'ak', name:'adolph'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aj = nodes[0],ak = nodes[1],al = {id: 'al', name:'denise'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aj = nodes[0],al = nodes[1],am = {id: 'am', name:'leblanc'} ; nodes.push( am ); links.push( {source: al , target: am },{source: aj , target: am },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  af = {id: 'af', name:'graf'},am = nodes[0],an = {id: 'an', name:'diener'} ; nodes.push( af,an ); links.push( {source: am , target: an },{source: af , target: an },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  af = nodes[0],aj = {id: 'aj', name:'charles'},ak = {id: 'ak', name:'adolph'},al = {id: 'al', name:'denise'},am = nodes[1],ao = {id: 'ao', name:'rose'},ap = {id: 'ap', name:'amélie'},ar = {id: 'ar', name:'fleure'} ; nodes.push( aj,ak,al,ao,ap,ar ); links.push( {source: al , target: ao },{source: al , target: ap },{source: al , target: am },{source: al , target: ar },{source: ao , target: ap },{source: ao , target: ar },{source: aj , target: al },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: ap },{source: aj , target: am },{source: aj , target: ar },{source: ak , target: al },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: ar },{source: ap , target: ar },{source: af , target: al },{source: af , target: ao },{source: af , target: aj },{source: af , target: ak },{source: af , target: ap },{source: af , target: am },{source: af , target: ar },{source: am , target: ao },{source: am , target: ap },{source: am , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'al','ap','af','am','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aj = nodes[0],ak = nodes[1],ao = nodes[2] ; /* nodes.push(); */ links.push( {source: ak , target: ao },{source: aj , target: ao },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ah = {id: 'ah', name:'bastian'},aj = nodes[0],ak = nodes[1],am = {id: 'am', name:'leblanc'},an = {id: 'an', name:'diener'},ao = nodes[2] ; nodes.push( ah,am,an ); links.push( {source: aj , target: ak },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: am },{source: ak , target: ao },{source: ak , target: an },{source: ak , target: am },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: am },{source: an , target: ao },{source: am , target: ao },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ah = nodes[0],aj = nodes[1],ak = nodes[2],am = nodes[3],ao = nodes[4] ; /* nodes.push(); */ links.push( {source: am , target: ao },{source: ah , target: am },{source: ah , target: ao },{source: ah , target: ak },{source: ah , target: aj },{source: ak , target: am },{source: ak , target: ao },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'am','ah','ak','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  al = {id: 'al', name:'denise'},ao = nodes[0] ; nodes.push( al ); links.push( {source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ao = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  al = {id: 'al', name:'denise'},ao = nodes[0] ; nodes.push( al ); links.push( {source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ak = {id: 'ak', name:'adolph'},al = nodes[0] ; nodes.push( ak ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aj = {id: 'aj', name:'charles'},ak = nodes[0] ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ak = nodes[0],al = {id: 'al', name:'denise'},ao = {id: 'ao', name:'rose'} ; nodes.push( al,ao ); links.push( {source: al , target: ao },{source: ak , target: al },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aj = {id: 'aj', name:'charles'},ak = nodes[0],ao = nodes[1] ; nodes.push( aj ); links.push( {source: aj , target: ao },{source: aj , target: ak },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aj = nodes[0],ak = nodes[1],al = {id: 'al', name:'denise'},ao = nodes[2] ; nodes.push( al ); links.push( {source: al , target: ao },{source: ak , target: al },{source: ak , target: ao },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = {id: 'ab', name:'dorle'},aj = nodes[0],ak = nodes[1],al = nodes[2],ao = nodes[3] ; nodes.push( ab ); links.push( {source: ab , target: ao },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: al },{source: ak , target: ao },{source: ak , target: al },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab','ao','ak','aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = {id: 'aa', name:'gertrud'},ae = {id: 'ae', name:'veit'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ab = {id: 'ab', name:'dorle'},ae = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = nodes[0],ae = nodes[1],ao = {id: 'ao', name:'rose'} ; nodes.push( ao ); links.push( {source: ae , target: ao },{source: aa , target: ae },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = nodes[0],ab = {id: 'ab', name:'dorle'},ae = nodes[1],ao = nodes[2] ; nodes.push( ab ); links.push( {source: ab , target: ao },{source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: ae },{source: ae , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = nodes[0],ao = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ab = nodes[0],ah = {id: 'ah', name:'bastian'},ao = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: ao },{source: ab , target: ah },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = {id: 'aa', name:'gertrud'},ab = nodes[0],ad = {id: 'ad', name:'lisbeth'},ao = nodes[1] ; nodes.push( aa,ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ao },{source: ad , target: ao },{source: ab , target: ad },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = nodes[0],ab = nodes[1],ad = nodes[2],ag = {id: 'ag', name:'steffen'},ao = nodes[3] ; nodes.push( ag ); links.push( {source: ag , target: ao },{source: ad , target: ag },{source: ad , target: ao },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ao },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ag','ad','ab','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ae = {id: 'ae', name:'veit'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = nodes[0],ab = {id: 'ab', name:'dorle'},ae = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ab','ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  af = {id: 'af', name:'graf'},an = {id: 'an', name:'diener'},ao = {id: 'ao', name:'rose'} ; nodes.push( af,an,ao ); links.push( {source: af , target: an },{source: af , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'af','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ai = {id: 'ai', name:'kathrin'},al = {id: 'al', name:'denise'},ao = nodes[0] ; nodes.push( ai,al ); links.push( {source: ai , target: al },{source: ai , target: ao },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ak = {id: 'ak', name:'adolph'},al = nodes[0],ao = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: ao },{source: ak , target: al },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = {id: 'aa', name:'gertrud'},ab = {id: 'ab', name:'dorle'},ae = {id: 'ae', name:'veit'},ag = {id: 'ag', name:'steffen'},ak = nodes[0],al = nodes[1],ao = nodes[2] ; nodes.push( aa,ab,ae,ag ); links.push( {source: ae , target: ao },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ag },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ag },{source: ab , target: ae },{source: ab , target: ao },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ag },{source: ak , target: ao },{source: ak , target: al },{source: al , target: ao },{source: ag , target: ao },{source: ag , target: ak },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = nodes[0],ab = nodes[1],ae = nodes[2],af = {id: 'af', name:'graf'},ak = nodes[3],al = nodes[4],ao = nodes[5] ; nodes.push( af ); links.push( {source: af , target: ak },{source: af , target: ao },{source: af , target: al },{source: ak , target: ao },{source: ak , target: al },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: ao },{source: ae , target: al },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: ae },{source: ab , target: ao },{source: ab , target: al },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: al },{source: al , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '7. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Scene';
}, 190000);
