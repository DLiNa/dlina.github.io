setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'abellino'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = {id: 'ab', name:'matteo'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = {id: 'ac', name:'doge'},ad = {id: 'ad', name:'dandolo'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ac = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'canari'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  af = {id: 'af', name:'iduella'},ag = {id: 'ag', name:'rosamunde'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'abellino'},ag = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ab = {id: 'ab', name:'matteo'},ag = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ae = {id: 'ae', name:'canari'},af = {id: 'af', name:'iduella'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ae = nodes[0],ah = {id: 'ah', name:'flodoardo'} ; nodes.push( ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ac = {id: 'ac', name:'doge'},ae = nodes[0],ah = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ah },{source: ac , target: ae },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ac = nodes[0],ad = {id: 'ad', name:'dandolo'},ae = nodes[1],ah = nodes[2] ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: ah },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ag = {id: 'ag', name:'rosamunde'},ah = nodes[3] ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ai = {id: 'ai', name:'parozzi'},aj = {id: 'aj', name:'memmo'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ai = nodes[0],aj = nodes[1],ak = {id: 'ak', name:'falieri'} ; nodes.push( ak ); links.push( {source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ai = nodes[0],aj = nodes[1],ak = nodes[2],al = {id: 'al', name:'contarino'} ; nodes.push( al ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'abellino'},ai = nodes[0],aj = nodes[1],ak = nodes[2],al = nodes[3] ; nodes.push( aa ); links.push( {source: aa , target: ai },{source: aa , target: al },{source: aa , target: aj },{source: aa , target: ak },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa','ai','al','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = {id: 'ac', name:'doge'},ah = {id: 'ah', name:'flodoardo'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = nodes[0],ad = {id: 'ad', name:'dandolo'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ag = {id: 'ag', name:'rosamunde'},am = {id: 'am', name:'tolomeo'} ; nodes.push( ag,am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ac = {id: 'ac', name:'doge'},am = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ac = nodes[0],af = {id: 'af', name:'iduella'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = {id: 'aa', name:'abellino'},ac = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = nodes[1],ag = {id: 'ag', name:'rosamunde'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = nodes[0],ah = {id: 'ah', name:'flodoardo'} ; nodes.push( ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ah = nodes[1],ai = {id: 'ai', name:'parozzi'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = {id: 'ac', name:'doge'},ai = nodes[1],an = {id: 'an', name:'paroli'} ; nodes.push( ac,an ); links.push( {source: ai , target: an },{source: ac , target: ai },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ai','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = nodes[0],ao = {id: 'ao', name:'diener'} ; nodes.push( ao ); links.push( {source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = nodes[0],ah = {id: 'ah', name:'flodoardo'} ; nodes.push( ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ag = {id: 'ag', name:'rosamunde'},ah = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ac = {id: 'ac', name:'doge'},ag = nodes[0],ah = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ah },{source: ac , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ac = nodes[0],ap = {id: 'ap', name:'senator'} ; nodes.push( ap ); links.push( {source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ap','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ai = {id: 'ai', name:'parozzi'},aj = {id: 'aj', name:'memmo'},ak = {id: 'ak', name:'falieri'},am = {id: 'am', name:'tolomeo'} ; nodes.push( ai,aj,ak,am ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: am },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = {id: 'aa', name:'abellino'},ai = nodes[0],aj = nodes[1],ak = nodes[2],al = {id: 'al', name:'contarino'},am = nodes[3] ; nodes.push( aa,al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: aj , target: am },{source: al , target: am },{source: aa , target: aj },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: am },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: am },{source: ak , target: al },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aa','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ac = {id: 'ac', name:'doge'},ag = {id: 'ag', name:'rosamunde'},ai = nodes[1],aj = nodes[2],ak = nodes[3],al = nodes[4],ap = {id: 'ap', name:'senator'},ap = {id: 'ap', name:'senator'} ; nodes.push( ac,ag,ap ); links.push( {source: aj , target: al },{source: aj , target: ap },{source: aj , target: ap },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: ap },{source: ai , target: ap },{source: ai , target: ak },{source: al , target: ap },{source: al , target: ap },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: ag },{source: ac , target: ap },{source: ac , target: ap },{source: ac , target: ak },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: ap },{source: ag , target: ap },{source: ag , target: ak },{source: ak , target: al },{source: ak , target: ap },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = nodes[0],ai = nodes[2],aj = nodes[3],ak = nodes[4],al = nodes[5],am = {id: 'am', name:'tolomeo'},an = {id: 'an', name:'paroli'},ap = nodes[6],ap = nodes[6] ; nodes.push( am,an ); links.push( {source: ak , target: an },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: ap },{source: ak , target: al },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: am },{source: ai , target: ap },{source: ai , target: ap },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: am },{source: aj , target: ap },{source: aj , target: ap },{source: aj , target: al },{source: ac , target: ak },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: an },{source: ac , target: am },{source: ac , target: ap },{source: ac , target: ap },{source: ac , target: al },{source: an , target: ap },{source: an , target: ap },{source: am , target: an },{source: am , target: ap },{source: am , target: ap },{source: al , target: an },{source: al , target: am },{source: al , target: ap },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aj','an','am','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ac = nodes[0],ag = {id: 'ag', name:'rosamunde'},ah = {id: 'ah', name:'flodoardo'},ai = nodes[1],ak = nodes[3],al = nodes[4] ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: ak },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: ak },{source: ai , target: al },{source: ai , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = {id: 'aa', name:'abellino'},ac = nodes[0],ag = nodes[1],ah = nodes[2],ai = nodes[3],aj = {id: 'aj', name:'memmo'},ak = nodes[4],al = nodes[5],am = {id: 'am', name:'tolomeo'},aq = {id: 'aq', name:'die_verschwornen'} ; nodes.push( aa,aj,am,aq ); links.push( {source: al , target: am },{source: al , target: aq },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: aq },{source: ac , target: al },{source: ac , target: aj },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: aq },{source: ag , target: al },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: am },{source: ag , target: ah },{source: ag , target: aq },{source: aa , target: al },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: am },{source: aa , target: ah },{source: aa , target: aq },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: aq },{source: am , target: aq },{source: ah , target: al },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: am },{source: ah , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'al','aj','aa','ak','am','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ac = nodes[1],ad = {id: 'ad', name:'dandolo'},ae = {id: 'ae', name:'canari'},ag = nodes[2],ah = nodes[3],ai = nodes[4],ap = {id: 'ap', name:'senator'},ap = {id: 'ap', name:'senator'} ; nodes.push( ad,ae,ap ); links.push( {source: ai , target: ap },{source: ai , target: ap },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ap },{source: ac , target: ah },{source: ac , target: ap },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ap },{source: ae , target: ah },{source: ae , target: ap },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ap },{source: ad , target: ah },{source: ad , target: ap },{source: ag , target: ai },{source: ag , target: ap },{source: ag , target: ah },{source: ag , target: ap },{source: ah , target: ai },{source: ah , target: ap },{source: ah , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 190000);
