setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'hochheim'},ab = {id: 'ab', name:'faustin'},ac = {id: 'ac', name:'eulalia'},ad = {id: 'ad', name:'regine'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = nodes[2],ad = nodes[3],ae = {id: 'ae', name:'haller'} ; nodes.push( ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = {id: 'ab', name:'faustin'},ac = nodes[1],ad = nodes[2],ae = nodes[3],af = {id: 'af', name:'hupfer'},af = {id: 'af', name:'hupfer'},ag = {id: 'ag', name:'jakobs_stimme'},ah = {id: 'ah', name:'glatt'},ai = {id: 'ai', name:'robert'},aj = {id: 'aj', name:'sebastian'} ; nodes.push( ab,af,ag,ah,ai,aj ); links.push( {source: ae , target: af },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: aj },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: aj },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: aj },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: aj },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],af = nodes[5],ah = nodes[8],ai = nodes[9],aj = nodes[10],ak = {id: 'ak', name:'klotilde'},al = {id: 'al', name:'apollonia'} ; nodes.push( ak,al ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ai },{source: ad , target: ah },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: ah },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ai },{source: ac , target: ah },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ai },{source: ab , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: ai },{source: af , target: ah },{source: ak , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','ad','ac','af','ak','al','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = {id: 'ac', name:'eulalia'},ak = {id: 'ak', name:'klotilde'} ; nodes.push( ac,ak ); links.push( {source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ad = {id: 'ad', name:'regine'},ai = {id: 'ai', name:'robert'},ak = nodes[1] ; nodes.push( ad,ai ); links.push( {source: ai , target: ak },{source: ad , target: ak },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ad = nodes[0],ai = nodes[1],ak = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: ak },{source: ad , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = {id: 'ab', name:'faustin'},ad = nodes[0],ai = nodes[1],aj = {id: 'aj', name:'sebastian'},am = {id: 'am', name:'der_kapellmeister'} ; nodes.push( ab,aj,am ); links.push( {source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: am },{source: aj , target: am },{source: ai , target: aj },{source: ai , target: am },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ai = nodes[2],aj = nodes[3],am = nodes[4],am = nodes[4],an = {id: 'an', name:'eine_menge_gäste'} ; nodes.push( an ); links.push( {source: aj , target: am },{source: aj , target: am },{source: aj , target: an },{source: am , target: an },{source: ai , target: aj },{source: ai , target: am },{source: ai , target: am },{source: ai , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am','ai','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = {id: 'aa', name:'hochheim'},ac = {id: 'ac', name:'eulalia'},aj = nodes[1],ao = {id: 'ao', name:'graf_von_flambourg'} ; nodes.push( aa,ac,ao ); links.push( {source: aj , target: ao },{source: aa , target: aj },{source: aa , target: ao },{source: aa , target: ac },{source: ac , target: aj },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aj','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ab = {id: 'ab', name:'faustin'},ac = nodes[1],ai = {id: 'ai', name:'robert'},ak = {id: 'ak', name:'klotilde'} ; nodes.push( ab,ai,ak ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: ai },{source: ac , target: ak },{source: ac , target: ai },{source: ab , target: ac },{source: ab , target: ak },{source: ab , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = nodes[0],ac = nodes[2],ai = nodes[3],ak = nodes[4] ; /* nodes.push(); */ links.push( {source: ai , target: ak },{source: ac , target: ai },{source: ac , target: ak },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aj = {id: 'aj', name:'sebastian'},ak = nodes[3] ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aj = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = {id: 'ad', name:'regine'},aj = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ad = nodes[0],af = {id: 'af', name:'hupfer'},aj = nodes[1] ; nodes.push( af ); links.push( {source: ad , target: aj },{source: ad , target: af },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ad = nodes[0],af = nodes[1],aj = nodes[2],al = {id: 'al', name:'apollonia'} ; nodes.push( al ); links.push( {source: af , target: al },{source: af , target: aj },{source: ad , target: af },{source: ad , target: al },{source: ad , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  af = nodes[1],al = nodes[3] ; /* nodes.push(); */ links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  al = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = {id: 'aa', name:'hochheim'},ab = {id: 'ab', name:'faustin'},ae = {id: 'ae', name:'haller'},ai = {id: 'ai', name:'robert'} ; nodes.push( aa,ab,ae,ai ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ae },{source: ab , target: ai },{source: ab , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = nodes[0],ae = nodes[2],ag = {id: 'ag', name:'jakobs_stimme'},ah = {id: 'ah', name:'glatt'},ai = nodes[3] ; nodes.push( ag,ah ); links.push( {source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ah = nodes[3],ai = nodes[4] ; /* nodes.push(); */ links.push( {source: ah , target: ai },{source: aa , target: ah },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],aj = {id: 'aj', name:'sebastian'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = nodes[0],aj = nodes[1],al = {id: 'al', name:'apollonia'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: aa , target: aj },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = {id: 'ab', name:'faustin'},aj = nodes[1],al = nodes[2] ; nodes.push( ab ); links.push( {source: aj , target: al },{source: ab , target: al },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = nodes[0],aj = nodes[1],al = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: aj },{source: ab , target: al },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = {id: 'ac', name:'eulalia'},ah = {id: 'ah', name:'glatt'},ai = {id: 'ai', name:'robert'},ap = {id: 'ap', name:'wellenschlag'} ; nodes.push( ac,ah,ai,ap ); links.push( {source: ac , target: ap },{source: ac , target: ai },{source: ac , target: ah },{source: ai , target: ap },{source: ah , target: ap },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = {id: 'aa', name:'hochheim'},ae = {id: 'ae', name:'haller'},ah = nodes[1],ai = nodes[2],ap = nodes[3] ; nodes.push( aa,ae ); links.push( {source: ai , target: ap },{source: ah , target: ai },{source: ah , target: ap },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ap },{source: aa , target: ae },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ai','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = nodes[0],ae = nodes[1],ag = {id: 'ag', name:'jakobs_stimme'},ah = nodes[2],aj = {id: 'aj', name:'sebastian'} ; nodes.push( ag,aj ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ae , target: aj },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: aj },{source: ah , target: aj },{source: ag , target: ah },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = nodes[0],ac = {id: 'ac', name:'eulalia'},ah = nodes[3],ai = {id: 'ai', name:'robert'},aj = nodes[4],ak = {id: 'ak', name:'klotilde'},ap = {id: 'ap', name:'wellenschlag'} ; nodes.push( ac,ai,ak,ap ); links.push( {source: ai , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ah , target: ap },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ac , target: ap },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ak },{source: aa , target: ap },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ak },{source: aj , target: ap },{source: aj , target: ak },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ap','ai','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ad = {id: 'ad', name:'regine'},ah = nodes[2],aj = nodes[4],ak = nodes[5],al = {id: 'al', name:'apollonia'} ; nodes.push( ad,al ); links.push( {source: ak , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: ah },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ak','ad','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ae = {id: 'ae', name:'haller'},ah = nodes[1],aj = nodes[2] ; nodes.push( ae ); links.push( {source: ah , target: aj },{source: ae , target: ah },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = {id: 'aa', name:'hochheim'},ae = nodes[0],ah = nodes[1],aj = nodes[2] ; nodes.push( aa ); links.push( {source: ae , target: aj },{source: ae , target: ah },{source: ah , target: aj },{source: aa , target: ae },{source: aa , target: aj },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = nodes[0],ai = {id: 'ai', name:'robert'},aj = nodes[3],ak = {id: 'ak', name:'klotilde'},ap = {id: 'ap', name:'wellenschlag'} ; nodes.push( ai,ak,ap ); links.push( {source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ap },{source: aa , target: ai },{source: aj , target: ak },{source: aj , target: ap },{source: ak , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = nodes[0],ai = nodes[1],aj = nodes[2],ak = nodes[3],ap = nodes[4] ; /* nodes.push(); */ links.push( {source: ai , target: ap },{source: ai , target: ak },{source: ai , target: aj },{source: ak , target: ap },{source: aa , target: ai },{source: aa , target: ap },{source: aa , target: ak },{source: aa , target: aj },{source: aj , target: ap },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = nodes[0],ac = {id: 'ac', name:'eulalia'},ae = {id: 'ae', name:'haller'},ah = {id: 'ah', name:'glatt'},ai = nodes[1],aj = nodes[2],ak = nodes[3],ap = nodes[4],aq = {id: 'aq', name:'sie'},ar = {id: 'ar', name:'er'} ; nodes.push( ac,ae,ah,aq,ar ); links.push( {source: aa , target: ap },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: aq },{source: aa , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: ai , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: aq },{source: ai , target: ar },{source: aj , target: ap },{source: aj , target: ak },{source: aj , target: aq },{source: aj , target: ar },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ae , target: ap },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: aq },{source: ae , target: ar },{source: ah , target: ap },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: aq },{source: ah , target: ar },{source: ac , target: ap },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: aq },{source: ac , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 185000);
