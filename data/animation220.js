setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'fräulein_amalie'},ab = {id: 'ab', name:'fräulein_karoline'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'dr'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'frau_von_tiefenborn'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ac = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ad = nodes[0],ae = {id: 'ae', name:'heinrich'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'fräulein_amalie'},af = {id: 'af', name:'herr_von_kaltenbrunn'} ; nodes.push( aa,af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ab = {id: 'ab', name:'fräulein_karoline'},af = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: af },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],af = nodes[1],ag = {id: 'ag', name:'herr_von_kreuzweg'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: aa , target: ag },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ab = {id: 'ab', name:'fräulein_karoline'},ag = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = nodes[0],af = {id: 'af', name:'herr_von_kaltenbrunn'},ag = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ag },{source: ab , target: af },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = nodes[0],ad = {id: 'ad', name:'frau_von_tiefenborn'},ah = {id: 'ah', name:'herr_von_ziegendorf'} ; nodes.push( ad,ah ); links.push( {source: ad , target: ah },{source: ab , target: ad },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ad = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ad = nodes[0],ae = {id: 'ae', name:'heinrich'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = nodes[0],ah = {id: 'ah', name:'herr_von_ziegendorf'} ; nodes.push( ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ac = {id: 'ac', name:'dr'},ad = nodes[0],ah = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ac , target: ah },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ad = nodes[0],ae = {id: 'ae', name:'heinrich'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = {id: 'aa', name:'fräulein_amalie'},ac = {id: 'ac', name:'dr'},af = {id: 'af', name:'herr_von_kaltenbrunn'} ; nodes.push( aa,ac,af ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ab = {id: 'ab', name:'fräulein_karoline'},ac = nodes[1],af = nodes[2] ; nodes.push( ab ); links.push( {source: aa , target: ab },{source: aa , target: af },{source: aa , target: ac },{source: ab , target: af },{source: ab , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = nodes[0],ab = nodes[1],ad = {id: 'ad', name:'frau_von_tiefenborn'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ab = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ad = nodes[0],ah = {id: 'ah', name:'herr_von_ziegendorf'} ; nodes.push( ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ad = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = {id: 'ac', name:'dr'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = {id: 'aa', name:'fräulein_amalie'},ac = nodes[0],af = {id: 'af', name:'herr_von_kaltenbrunn'} ; nodes.push( aa,af ); links.push( {source: aa , target: ac },{source: aa , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = nodes[0],ac = nodes[1],af = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: af },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = nodes[0],ai = {id: 'ai', name:'herr_von_wagehals'} ; nodes.push( ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ad = {id: 'ad', name:'frau_von_tiefenborn'},ai = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = {id: 'aa', name:'fräulein_amalie'},ah = {id: 'ah', name:'herr_von_ziegendorf'} ; nodes.push( aa,ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = nodes[0],ag = {id: 'ag', name:'herr_von_kreuzweg'},ah = nodes[1] ; nodes.push( ag ); links.push( {source: aa , target: ah },{source: aa , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ah = nodes[1],aj = {id: 'aj', name:'der_diener'} ; nodes.push( aj ); links.push( {source: ah , target: aj },{source: aa , target: aj },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = nodes[0],ag = {id: 'ag', name:'herr_von_kreuzweg'} ; nodes.push( ag ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = nodes[0],af = {id: 'af', name:'herr_von_kaltenbrunn'},ag = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = nodes[0],ab = {id: 'ab', name:'fräulein_karoline'},af = nodes[1],ag = nodes[2] ; nodes.push( ab ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = nodes[0],ac = {id: 'ac', name:'dr'},af = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: af },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = nodes[0],ab = {id: 'ab', name:'fräulein_karoline'},ac = nodes[1],ad = {id: 'ad', name:'frau_von_tiefenborn'},af = nodes[2],ag = {id: 'ag', name:'herr_von_kreuzweg'},ah = {id: 'ah', name:'herr_von_ziegendorf'},ai = {id: 'ai', name:'herr_von_wagehals'},ak = {id: 'ak', name:'notarius'} ; nodes.push( ab,ad,ag,ah,ai,ak ); links.push( {source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: af },{source: ah , target: ak },{source: ah , target: ai },{source: ai , target: ak },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: af },{source: aa , target: ad },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: af },{source: af , target: ak },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ak','ah','ai','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = nodes[0],ab = nodes[1],ad = nodes[2],af = nodes[3],ag = nodes[4] ; /* nodes.push(); */ links.push( {source: ad , target: af },{source: ad , target: ag },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: af , target: ag },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 190000);
