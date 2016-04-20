setTimeout(function() { console.log('load1'); var  ac = {id: 'ac', name:'k4_Oskar'},ah = {id: 'ah', name:'k4_Havlitschek'},al = {id: 'al', name:'k4_Ida'} ; nodes.push( ac,ah,al ); links.push( {source: ah , target: al },{source: ac , target: ah },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = {id: 'ab', name:'k4_Marianne'},ac = nodes[0],ad = {id: 'ad', name:'k4_Mathilde'},af = {id: 'af', name:'k4_Der_Rittmeister'},ah = nodes[1],ai = {id: 'ai', name:'k4_Eine_gnädige_Frau'} ; nodes.push( ab,ad,af,ai ); links.push( {source: af , target: ah },{source: af , target: ai },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ai },{source: ah , target: ai },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ai },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ah','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ab = nodes[0],af = nodes[3] ; nodes.push( aa ); links.push( {source: aa , target: ab },{source: aa , target: af },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = nodes[1],af = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: af },{source: aa , target: ab },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],af = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ac = {id: 'ac', name:'k4_Oskar'},af = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: af },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = {id: 'ab', name:'k4_Marianne'},ac = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = nodes[1],ac = nodes[2],ah = {id: 'ah', name:'k4_Havlitschek'} ; nodes.push( ah ); links.push( {source: ac , target: ah },{source: ab , target: ah },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ab = nodes[0],ac = nodes[1],ae = {id: 'ae', name:'k4_Alfred'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ae },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ab = nodes[1],ad = {id: 'ad', name:'k4_Mathilde'},ae = nodes[3] ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ab = nodes[0],ac = {id: 'ac', name:'k4_Oskar'},ad = nodes[1],ae = nodes[2],ag = {id: 'ag', name:'k4_Erich'},aj = {id: 'aj', name:'k4_Erste_Tante'},ak = {id: 'ak', name:'k4_Zweite_Tante'},al = {id: 'al', name:'k4_Ida'} ; nodes.push( aa,ac,ag,aj,ak,al ); links.push( {source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: al },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: al },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: al },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ag },{source: ae , target: al },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa','ac','aj','ak','ab','ag','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ad = nodes[3],ae = nodes[4] ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ad = nodes[0],ae = nodes[1],ag = {id: 'ag', name:'k4_Erich'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ad },{source: ae , target: ag },{source: ad , target: ae },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aa','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = {id: 'ab', name:'k4_Marianne'},ae = nodes[2] ; nodes.push( ab ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = {id: 'ad', name:'k4_Mathilde'},ag = {id: 'ag', name:'k4_Erich'} ; nodes.push( ad,ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = {id: 'ab', name:'k4_Marianne'},ac = {id: 'ac', name:'k4_Oskar'},ae = {id: 'ae', name:'k4_Alfred'} ; nodes.push( ab,ac,ae ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = nodes[1],ae = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ab = {id: 'ab', name:'k4_Marianne'},ac = nodes[0],ad = {id: 'ad', name:'k4_Mathilde'},ae = nodes[1],ag = {id: 'ag', name:'k4_Erich'},aj = {id: 'aj', name:'k4_Erste_Tante'},ak = {id: 'ak', name:'k4_Zweite_Tante'},al = {id: 'al', name:'k4_Ida'} ; nodes.push( aa,ab,ad,ag,aj,ak,al ); links.push( {source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: al },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: al },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: al },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ag },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = nodes[4],ag = nodes[5],aj = nodes[6],ak = nodes[7] ; /* nodes.push(); */ links.push( {source: ad , target: ag },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ae },{source: ag , target: aj },{source: ag , target: ak },{source: aj , target: ak },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ae },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ac },{source: ab , target: ae },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag','aj','ak','ac','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],ad = nodes[3] ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = nodes[0],ad = nodes[1],ag = {id: 'ag', name:'k4_Erich'} ; nodes.push( ag ); links.push( {source: aa , target: ag },{source: aa , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = nodes[1],ag = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ab = {id: 'ab', name:'k4_Marianne'},ae = {id: 'ae', name:'k4_Alfred'} ; nodes.push( aa,ab,ae ); links.push( {source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'k4_Oskar'},ad = {id: 'ad', name:'k4_Mathilde'},ae = nodes[2] ; nodes.push( ac,ad ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ac','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ab = nodes[1],ae = nodes[4] ; /* nodes.push(); */ links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = nodes[0],ae = nodes[1],am = {id: 'am', name:'k4_Ein_Crétin'} ; nodes.push( am ); links.push( {source: ae , target: am },{source: ab , target: ae },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Drittes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ae','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = nodes[0],an = {id: 'an', name:'k4_Beichtvater'} ; nodes.push( an ); links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Drittes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ab','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ah = {id: 'ah', name:'k4_Havlitschek'},ao = {id: 'ao', name:'k4_Emma'} ; nodes.push( ah,ao ); links.push( {source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = {id: 'ac', name:'k4_Oskar'},af = {id: 'af', name:'k4_Der_Rittmeister'},ah = nodes[0] ; nodes.push( ac,af ); links.push( {source: ac , target: ah },{source: ac , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ad = {id: 'ad', name:'k4_Mathilde'},af = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ac = {id: 'ac', name:'k4_Oskar'},ad = nodes[0],af = nodes[1],ag = {id: 'ag', name:'k4_Erich'} ; nodes.push( ac,ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: af , target: ag },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ad = nodes[1],af = nodes[2],ai = {id: 'ai', name:'k4_Eine_gnädige_Frau'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ai },{source: aa , target: af },{source: aa , target: ad },{source: af , target: ai },{source: ad , target: ai },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ai','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ac = {id: 'ac', name:'k4_Oskar'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ac = nodes[1],ad = {id: 'ad', name:'k4_Mathilde'},ae = {id: 'ae', name:'k4_Alfred'} ; nodes.push( ad,ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ac = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = nodes[0],ah = {id: 'ah', name:'k4_Havlitschek'} ; nodes.push( ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ad = {id: 'ad', name:'k4_Mathilde'},ag = {id: 'ag', name:'k4_Erich'} ; nodes.push( aa,ad,ag ); links.push( {source: aa , target: ad },{source: aa , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = nodes[0],ad = nodes[1],af = {id: 'af', name:'k4_Der_Rittmeister'},ag = nodes[2] ; nodes.push( af ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ag },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = nodes[0],ad = nodes[1],af = nodes[2],ag = nodes[3],ap = {id: 'ap', name:'k4_Der_Mister'} ; nodes.push( ap ); links.push( {source: ag , target: ap },{source: ad , target: ap },{source: ad , target: ag },{source: ad , target: af },{source: af , target: ap },{source: af , target: ag },{source: aa , target: ap },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ap','ag','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ad = nodes[1],aq = {id: 'aq', name:'k4_Der_Conférencier'} ; nodes.push( aq ); links.push( {source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ad = nodes[0],af = {id: 'af', name:'k4_Der_Rittmeister'},ap = {id: 'ap', name:'k4_Der_Mister'} ; nodes.push( aa,af,ap ); links.push( {source: aa , target: af },{source: aa , target: ap },{source: aa , target: ad },{source: af , target: ap },{source: ad , target: af },{source: ad , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aa = nodes[0],ab = {id: 'ab', name:'k4_Marianne'},ad = nodes[1],af = nodes[2],ap = nodes[3],aq = {id: 'aq', name:'k4_Der_Conférencier'} ; nodes.push( ab,aq ); links.push( {source: ad , target: aq },{source: ad , target: ap },{source: ad , target: af },{source: ab , target: aq },{source: ab , target: ad },{source: ab , target: ap },{source: ab , target: af },{source: ap , target: aq },{source: aa , target: aq },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ap },{source: aa , target: af },{source: af , target: aq },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aq','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  aa = nodes[0],af = nodes[3],ap = nodes[4] ; /* nodes.push(); */ links.push( {source: aa , target: af },{source: aa , target: ap },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'af','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  aa = nodes[0],ab = {id: 'ab', name:'k4_Marianne'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ab = nodes[1],ap = {id: 'ap', name:'k4_Der_Mister'} ; nodes.push( ap ); links.push( {source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ab = nodes[0],ap = nodes[1],aq = {id: 'aq', name:'k4_Der_Conférencier'} ; nodes.push( aa,aq ); links.push( {source: aa , target: aq },{source: aa , target: ap },{source: aa , target: ab },{source: ap , target: aq },{source: ab , target: aq },{source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Fuenftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'aa','aq','ap','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ad = {id: 'ad', name:'k4_Mathilde'},af = {id: 'af', name:'k4_Der_Rittmeister'} ; nodes.push( ad,af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ad = nodes[0],ag = {id: 'ag', name:'k4_Erich'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ad = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ac = {id: 'ac', name:'k4_Oskar'},ae = {id: 'ae', name:'k4_Alfred'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ac = nodes[0],ad = {id: 'ad', name:'k4_Mathilde'} ; nodes.push( aa,ad ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ac = nodes[1],ad = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ac = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'k4_Alfred'} ; nodes.push( ae ); links.push( {source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  ab = {id: 'ab', name:'k4_Marianne'},ac = nodes[0],ad = nodes[1],ae = nodes[2] ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ab = nodes[0],ac = nodes[1],ad = nodes[2],ae = nodes[3] ; nodes.push( aa ); links.push( {source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'aa','ad','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  ae = nodes[4],at = {id: 'at', name:'k4_Die_Tochter'} ; nodes.push( at ); links.push( {source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  ae = nodes[0],as = {id: 'as', name:'k4_Die_Mutter'},at = nodes[1] ; nodes.push( as ); links.push( {source: as , target: at },{source: ae , target: as },{source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'at','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  ar = {id: 'ar', name:'k4_Die_Großmutter'},as = nodes[1] ; nodes.push( ar ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  ae = {id: 'ae', name:'k4_Alfred'},at = {id: 'at', name:'k4_Die_Tochter'} ; nodes.push( ae,at ); links.push( {source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'at','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ar = {id: 'ar', name:'k4_Die_Großmutter'},as = {id: 'as', name:'k4_Die_Mutter'} ; nodes.push( ar,as ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  ae = {id: 'ae', name:'k4_Alfred'},ar = nodes[0],at = {id: 'at', name:'k4_Die_Tochter'} ; nodes.push( ae,at ); links.push( {source: ae , target: at },{source: ae , target: ar },{source: ar , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  ae = nodes[0],at = nodes[2] ; /* nodes.push(); */ links.push( {source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'at','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  ar = {id: 'ar', name:'k4_Die_Großmutter'},as = {id: 'as', name:'k4_Die_Mutter'} ; nodes.push( ar,as ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64'); var  aa = {id: 'aa', name:'k4_Zauberkönig'},ab = {id: 'ab', name:'k4_Marianne'},ac = {id: 'ac', name:'k4_Oskar'},ad = {id: 'ad', name:'k4_Mathilde'},ar = nodes[0],as = nodes[1] ; nodes.push( aa,ab,ac,ad ); links.push( {source: ab , target: as },{source: ab , target: ar },{source: ab , target: ad },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: as },{source: aa , target: ar },{source: aa , target: ad },{source: aa , target: ac },{source: ar , target: as },{source: ad , target: as },{source: ad , target: ar },{source: ac , target: as },{source: ac , target: ar },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'aa','as','ar','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65'); var  ab = nodes[1],ac = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66'); var  ad = {id: 'ad', name:'k4_Mathilde'},ae = {id: 'ae', name:'k4_Alfred'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'body'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Absatz';
}, 325000);
