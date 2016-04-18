setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'heiling'},ab = {id: 'ab', name:'königin'},ac = {id: 'ac', name:'geister'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = {id: 'aa', name:'heiling'},ab = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'gertrud'},ae = {id: 'ae', name:'anna'} ; nodes.push( aa,ac,ad,ae ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ad = nodes[1],ae = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'heiling'},ad = {id: 'ad', name:'gertrud'},ae = nodes[0] ; nodes.push( aa,ad ); links.push( {source: aa , target: ad },{source: aa , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  af = {id: 'af', name:'ein_bursche'},ag = {id: 'ag', name:'niklas'},ah = {id: 'ah', name:'stephan'},aj = {id: 'aj', name:'bauernchor'},aj = {id: 'aj', name:'bauernchor'} ; nodes.push( af,ag,ah,aj ); links.push( {source: af , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: aj },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: aj },{source: ah , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ag = nodes[0],ah = nodes[1],ai = {id: 'ai', name:'konrad'},aj = nodes[2],ak = {id: 'ak', name:'chor'} ; nodes.push( ai,aj,ak ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = {id: 'aa', name:'heiling'},ad = {id: 'ad', name:'gertrud'},ae = {id: 'ae', name:'anna'},ag = nodes[0],ah = nodes[1],ai = nodes[2],aj = nodes[3],al = {id: 'al', name:'die_jäger'} ; nodes.push( aa,ad,ae,al ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: aj },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: al },{source: aa , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: aj },{source: ai , target: al },{source: ai , target: aj },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: aj },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: al },{source: ad , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ah','al','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ad = nodes[1],ae = nodes[2],ai = nodes[3] ; /* nodes.push(); */ links.push( {source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ae },{source: ad , target: ai },{source: ad , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ai','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = {id: 'ac', name:'geister'},ae = {id: 'ae', name:'anna'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = {id: 'ab', name:'königin'},ac = nodes[0],ae = nodes[1],ai = {id: 'ai', name:'konrad'} ; nodes.push( ab,ai ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ai },{source: ae , target: ai },{source: ac , target: ae },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ae = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = {id: 'ad', name:'gertrud'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ad = nodes[0],ae = {id: 'ae', name:'anna'},ai = {id: 'ai', name:'konrad'} ; nodes.push( ae,ai ); links.push( {source: ad , target: ai },{source: ad , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = {id: 'aa', name:'heiling'},ad = nodes[0],ae = nodes[1],ai = nodes[2] ; nodes.push( aa ); links.push( {source: ae , target: ai },{source: ad , target: ae },{source: ad , target: ai },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ae','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],ac = {id: 'ac', name:'geister'},am = {id: 'am', name:'sechs_zwerge'} ; nodes.push( ac,am ); links.push( {source: ac , target: am },{source: aa , target: ac },{source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ac','aa','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ah = {id: 'ah', name:'stephan'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = {id: 'ad', name:'gertrud'},ae = {id: 'ae', name:'anna'},ah = nodes[0],ai = {id: 'ai', name:'konrad'},ak = {id: 'ak', name:'chor'} ; nodes.push( ad,ae,ai,ak ); links.push( {source: ah , target: ai },{source: ah , target: ak },{source: ai , target: ak },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: ae },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = {id: 'aa', name:'heiling'},ae = nodes[0],ai = nodes[1],ak = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ai },{source: ae , target: ak },{source: ae , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ae = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ae = nodes[0],ah = {id: 'ah', name:'stephan'},ai = nodes[1],an = {id: 'an', name:'die_brautjungfern'} ; nodes.push( ah,an ); links.push( {source: ah , target: ai },{source: ah , target: an },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: an },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ae = nodes[0],ah = nodes[1],an = nodes[2] ; /* nodes.push(); */ links.push( {source: ah , target: an },{source: ae , target: ah },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = {id: 'aa', name:'heiling'},ae = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = nodes[0],ac = {id: 'ac', name:'geister'},ah = {id: 'ah', name:'stephan'},ai = {id: 'ai', name:'konrad'},ak = {id: 'ak', name:'chor'},ao = {id: 'ao', name:'chor_der_hochzeitsleute'} ; nodes.push( ac,ah,ai,ak,ao ); links.push( {source: ai , target: ak },{source: ai , target: ao },{source: ak , target: ao },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ao },{source: aa , target: ac },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: ao },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = nodes[0],ab = {id: 'ab', name:'königin'},ac = nodes[1],ae = {id: 'ae', name:'anna'},ai = nodes[2],ao = nodes[3],ao = nodes[3] ; nodes.push( ab,ae,ao ); links.push( {source: ab , target: ao },{source: ab , target: ac },{source: ab , target: ao },{source: ab , target: ai },{source: ab , target: ae },{source: ac , target: ao },{source: ac , target: ao },{source: ac , target: ai },{source: ac , target: ae },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: ao },{source: aa , target: ai },{source: aa , target: ae },{source: ai , target: ao },{source: ai , target: ao },{source: ae , target: ao },{source: ae , target: ao },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 140000);
