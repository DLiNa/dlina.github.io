setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'emma'},ac = {id: 'ac', name:'eine_spinnerin'},ai = {id: 'ai', name:'jungfrauen'} ; nodes.push( aa,ab,ac,ai ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ai },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ad = {id: 'ad', name:'eginhard'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'chor'},ae = {id: 'ae', name:'frauen'},af = {id: 'af', name:'karl'},ag = {id: 'ag', name:'roland'},ah = {id: 'ah', name:'fierrabras'},ai = {id: 'ai', name:'jungfrauen'},aj = {id: 'aj', name:'männerchor'},ak = {id: 'ak', name:'chor_der_ritter_und_krieger'} ; nodes.push( aa,ae,af,ag,ah,ai,aj,ak ); links.push( {source: aj , target: ak },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ai , target: aj },{source: ai , target: ak },{source: af , target: aj },{source: af , target: ak },{source: af , target: ai },{source: af , target: ag },{source: af , target: ah },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ai },{source: ag , target: ah },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aj','ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = {id: 'ab', name:'emma'},af = nodes[1],ag = nodes[2],ah = nodes[3],ai = nodes[4] ; nodes.push( ab ); links.push( {source: ab , target: ai },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: ag },{source: ah , target: ai },{source: ag , target: ai },{source: ag , target: ah },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','ai','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ag = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = {id: 'ab', name:'emma'},ad = {id: 'ad', name:'eginhard'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ah = {id: 'ah', name:'fierrabras'},aj = {id: 'aj', name:'männerchor'} ; nodes.push( ah,aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = {id: 'ab', name:'emma'},ad = {id: 'ad', name:'eginhard'},ah = nodes[0],aj = nodes[1] ; nodes.push( ab,ad ); links.push( {source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ah },{source: ad , target: aj },{source: ad , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ab = nodes[0],af = {id: 'af', name:'karl'},ah = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ah },{source: ab , target: af },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = nodes[0],af = nodes[1],ag = {id: 'ag', name:'roland'},ah = nodes[2],ak = {id: 'ak', name:'chor_der_ritter_und_krieger'} ; nodes.push( ag,ak ); links.push( {source: ab , target: ah },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ak },{source: ah , target: ak },{source: af , target: ah },{source: af , target: ag },{source: af , target: ak },{source: ag , target: ah },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab','ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ad = {id: 'ad', name:'eginhard'},ag = nodes[0],ak = nodes[1],ak = nodes[1],ak = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ak },{source: ad , target: ag },{source: ad , target: ak },{source: ad , target: ak },{source: ag , target: ak },{source: ag , target: ak },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ak','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ad = nodes[0],al = {id: 'al', name:'brutamonte'},ap = {id: 'ap', name:'chor_der_mauren'} ; nodes.push( al,ap ); links.push( {source: al , target: ap },{source: ad , target: al },{source: ad , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'al','ap','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  am = {id: 'am', name:'florinda'},an = {id: 'an', name:'maragond'} ; nodes.push( am,an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = {id: 'ad', name:'eginhard'},al = {id: 'al', name:'brutamonte'},am = nodes[0],ao = {id: 'ao', name:'boland'} ; nodes.push( ad,al,ao ); links.push( {source: am , target: ao },{source: al , target: ao },{source: al , target: am },{source: ad , target: ao },{source: ad , target: am },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'chor'},ag = {id: 'ag', name:'roland'},ak = {id: 'ak', name:'chor_der_ritter_und_krieger'},am = nodes[0],ao = nodes[1],ap = {id: 'ap', name:'chor_der_mauren'} ; nodes.push( aa,ag,ak,ap ); links.push( {source: aa , target: ag },{source: aa , target: am },{source: aa , target: ao },{source: aa , target: ak },{source: aa , target: ap },{source: ag , target: am },{source: ag , target: ao },{source: ag , target: ak },{source: ag , target: ap },{source: am , target: ao },{source: am , target: ap },{source: ao , target: ap },{source: ak , target: am },{source: ak , target: ao },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa','ag','ao','ak','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ad = {id: 'ad', name:'eginhard'},am = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'am','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ag = {id: 'ag', name:'roland'},ak = {id: 'ak', name:'chor_der_ritter_und_krieger'} ; nodes.push( ag,ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ag = nodes[0],am = {id: 'am', name:'florinda'} ; nodes.push( am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ag = nodes[0],ak = {id: 'ak', name:'chor_der_ritter_und_krieger'},ak = {id: 'ak', name:'chor_der_ritter_und_krieger'},am = nodes[2] ; nodes.push( ak ); links.push( {source: ag , target: am },{source: ag , target: ak },{source: ag , target: ak },{source: ak , target: am },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ak = nodes[0],am = nodes[1],ao = {id: 'ao', name:'boland'} ; nodes.push( ao ); links.push( {source: am , target: ao },{source: ak , target: am },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'am','ak','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ab = {id: 'ab', name:'emma'},ai = {id: 'ai', name:'jungfrauen'} ; nodes.push( ab,ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = nodes[0],af = {id: 'af', name:'karl'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ab = nodes[0],af = nodes[1],ah = {id: 'ah', name:'fierrabras'} ; nodes.push( ah ); links.push( {source: af , target: ah },{source: ab , target: af },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = nodes[0],ad = {id: 'ad', name:'eginhard'},af = nodes[1],ah = nodes[2] ; nodes.push( ad ); links.push( {source: af , target: ah },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ad },{source: ad , target: af },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = nodes[0],ad = nodes[1],ah = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: ah },{source: ab , target: ad },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ad','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  am = {id: 'am', name:'florinda'},an = {id: 'an', name:'maragond'} ; nodes.push( am,an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ap = {id: 'ap', name:'chor_der_mauren'} ; nodes.push( ap ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ag = {id: 'ag', name:'roland'},ak = {id: 'ak', name:'chor_der_ritter_und_krieger'},ak = {id: 'ak', name:'chor_der_ritter_und_krieger'},al = {id: 'al', name:'brutamonte'},am = {id: 'am', name:'florinda'},ao = {id: 'ao', name:'boland'},ap = nodes[1],ap = nodes[1],ap = nodes[1] ; nodes.push( ag,ak,al,am,ao ); links.push( {source: ao , target: ap },{source: ao , target: ap },{source: ao , target: ap },{source: ag , target: ap },{source: ag , target: ao },{source: ag , target: ak },{source: ag , target: am },{source: ag , target: ap },{source: ag , target: al },{source: ag , target: ap },{source: ag , target: ak },{source: ak , target: ap },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: al },{source: ak , target: ap },{source: am , target: ap },{source: am , target: ao },{source: am , target: ap },{source: am , target: ap },{source: al , target: ap },{source: al , target: ao },{source: al , target: am },{source: al , target: ap },{source: al , target: ap },{source: ak , target: ap },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: al },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ap','ag','ak','am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ah = {id: 'ah', name:'fierrabras'},ao = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'emma'},ad = {id: 'ad', name:'eginhard'},af = {id: 'af', name:'karl'},ah = nodes[0],ao = nodes[1] ; nodes.push( aa,ab,ad,af ); links.push( {source: ah , target: ao },{source: af , target: ah },{source: af , target: ao },{source: aa , target: ah },{source: aa , target: ao },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ah },{source: ab , target: ao },{source: ab , target: af },{source: ab , target: ad },{source: ad , target: ah },{source: ad , target: ao },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 155000);
