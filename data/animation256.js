setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'tamino'},ab = {id: 'ab', name:'erste_dame'},ac = {id: 'ac', name:'zweyte_dame'},ad = {id: 'ad', name:'dritte_dame'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ae = {id: 'ae', name:'papageno'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = {id: 'ab', name:'erste_dame'},ac = {id: 'ac', name:'zweyte_dame'},ad = {id: 'ad', name:'dritte_dame'},ae = nodes[1] ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = {id: 'ab', name:'erste_dame'},ac = {id: 'ac', name:'zweyte_dame'},ad = {id: 'ad', name:'dritte_dame'} ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab','ac','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  af = {id: 'af', name:'koniginn'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'tamino'},ae = {id: 'ae', name:'papageno'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ab = {id: 'ab', name:'erste_dame'},ac = {id: 'ac', name:'zweyte_dame'},ad = {id: 'ad', name:'dritte_dame'},ae = nodes[1] ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','ae','ac','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ag = {id: 'ag', name:'dritter_sclav'},ah = {id: 'ah', name:'erster_sclav'},ai = {id: 'ai', name:'zweyter_sclav'} ; nodes.push( ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ag = nodes[0],ah = nodes[1],ai = nodes[2],aj = {id: 'aj', name:'monostatos'} ; nodes.push( aj ); links.push( {source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aj = nodes[3],ak = {id: 'ak', name:'pamina'} ; nodes.push( ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ae = {id: 'ae', name:'papageno'},aj = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ak = {id: 'ak', name:'pamina'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = {id: 'ae', name:'papageno'},ak = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = {id: 'aa', name:'tamino'},al = {id: 'al', name:'stimme'},am = {id: 'am', name:'priester'},an = {id: 'an', name:'die_stimmen'},an = {id: 'an', name:'die_stimmen'},aw = {id: 'aw', name:'erster_knabe'},ax = {id: 'ax', name:'zweyter_knabe'},ay = {id: 'ay', name:'dritter_knabe'} ; nodes.push( aa,al,am,an,aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay },{source: aa , target: aw },{source: aa , target: ax },{source: aa , target: ay },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: an },{source: al , target: aw },{source: al , target: ax },{source: al , target: ay },{source: al , target: am },{source: al , target: an },{source: al , target: an },{source: am , target: aw },{source: am , target: ax },{source: am , target: ay },{source: am , target: an },{source: am , target: an },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aw','ax','ay','aa','al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ae = {id: 'ae', name:'papageno'},ak = {id: 'ak', name:'pamina'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ae = nodes[0],ag = {id: 'ag', name:'dritter_sclav'},ah = {id: 'ah', name:'erster_sclav'},ai = {id: 'ai', name:'zweyter_sclav'},aj = {id: 'aj', name:'monostatos'},ak = nodes[1] ; nodes.push( ag,ah,ai,aj ); links.push( {source: aj , target: ak },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ag },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: ai , target: aj },{source: ai , target: ak },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aj','ae','ah','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ak = nodes[5],ao = {id: 'ao', name:'sarastro'},au = {id: 'au', name:'chorus'} ; nodes.push( ao,au ); links.push( {source: ak , target: au },{source: ak , target: ao },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = {id: 'aa', name:'tamino'},aj = {id: 'aj', name:'monostatos'},ak = nodes[0],ao = nodes[1],au = nodes[2] ; nodes.push( aa,aj ); links.push( {source: aj , target: ak },{source: aj , target: ao },{source: aj , target: au },{source: ak , target: ao },{source: ak , target: au },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ao },{source: aa , target: au },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aj','ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ao = nodes[3],ap = {id: 'ap', name:'erster_priester'},aq = {id: 'aq', name:'zweyter_priest'},ar = {id: 'ar', name:'dritter_priester'},as = {id: 'as', name:'sprecher'},au = nodes[4] ; nodes.push( ap,aq,ar,as ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: au },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: au },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: au },{source: ar , target: as },{source: ar , target: au },{source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ao','ap','aq','ar','as','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = {id: 'aa', name:'tamino'},ae = {id: 'ae', name:'papageno'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = nodes[0],ae = nodes[1],aq = {id: 'aq', name:'zweyter_priest'},as = {id: 'as', name:'sprecher'} ; nodes.push( aq,as ); links.push( {source: aa , target: as },{source: aa , target: aq },{source: aa , target: ae },{source: aq , target: as },{source: ae , target: as },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'as','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],ab = {id: 'ab', name:'erste_dame'},ac = {id: 'ac', name:'zweyte_dame'},ad = {id: 'ad', name:'dritte_dame'},ae = nodes[1],am = {id: 'am', name:'priester'} ; nodes.push( ab,ac,ad,am ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: am },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: am },{source: ad , target: ae },{source: ad , target: am },{source: ae , target: am },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab','ac','ad','aa','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ae = nodes[4],aq = {id: 'aq', name:'zweyter_priest'},aq = {id: 'aq', name:'zweyter_priest'},as = {id: 'as', name:'sprecher'} ; nodes.push( aq,as ); links.push( {source: aq , target: as },{source: ae , target: as },{source: ae , target: aq },{source: ae , target: aq },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'as','aq','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aj = {id: 'aj', name:'monostatos'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  af = {id: 'af', name:'koniginn'},af = {id: 'af', name:'koniginn'},aj = nodes[0],ak = {id: 'ak', name:'pamina'} ; nodes.push( af,ak ); links.push( {source: af , target: ak },{source: af , target: aj },{source: aj , target: ak },{source: af , target: ak },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'af','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ak = nodes[3] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aj = {id: 'aj', name:'monostatos'},ak = nodes[0] ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aj = nodes[0],ao = {id: 'ao', name:'sarastro'} ; nodes.push( ao ); links.push( {source: aj , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ak = {id: 'ak', name:'pamina'},ao = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ak','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aq = {id: 'aq', name:'zweyter_priest'},as = {id: 'as', name:'sprecher'} ; nodes.push( aq,as ); links.push( {source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'as','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = {id: 'aa', name:'tamino'},ae = {id: 'ae', name:'papageno'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ae = nodes[1],at = {id: 'at', name:'weib'} ; nodes.push( at ); links.push( {source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ae','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aw = {id: 'aw', name:'erster_knabe'},ax = {id: 'ax', name:'zweyter_knabe'},ay = {id: 'ay', name:'dritter_knabe'} ; nodes.push( aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aw','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ae = {id: 'ae', name:'papageno'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = {id: 'aa', name:'tamino'},ae = nodes[0],ak = {id: 'ak', name:'pamina'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ak },{source: aa , target: ae },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ae = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  au = {id: 'au', name:'chorus'} ; nodes.push( au ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = {id: 'aa', name:'tamino'},ak = {id: 'ak', name:'pamina'},ao = {id: 'ao', name:'sarastro'} ; nodes.push( aa,ak,ao ); links.push( {source: ak , target: ao },{source: aa , target: ao },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Ein und zwanzigster Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ao','ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ae = {id: 'ae', name:'papageno'},av = {id: 'av', name:'die_stimme'},av = {id: 'av', name:'die_stimme'} ; nodes.push( ae,av ); links.push( {source: ae , target: av },{source: ae , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwei und zwanzigster Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ae = nodes[0],as = {id: 'as', name:'sprecher'} ; nodes.push( as ); links.push( {source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Drey und zwanzigster Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ae = nodes[0],at = {id: 'at', name:'weib'} ; nodes.push( at ); links.push( {source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vier und zwanzigster Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ae = nodes[0],as = {id: 'as', name:'sprecher'} ; nodes.push( as ); links.push( {source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünf und zwanzigster Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'as','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  aw = {id: 'aw', name:'erster_knabe'},ax = {id: 'ax', name:'zweyter_knabe'},ay = {id: 'ay', name:'dritter_knabe'} ; nodes.push( aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechs und zwanzigster Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ak = {id: 'ak', name:'pamina'},aw = nodes[0],ax = nodes[1],ay = nodes[2] ; nodes.push( ak ); links.push( {source: ak , target: aw },{source: ak , target: ax },{source: ak , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sieben und zwanzigster Auftritt.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'aw','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  aa = {id: 'aa', name:'tamino'},ak = nodes[0],au = {id: 'au', name:'chorus'},az = {id: 'az', name:'zwey_männer'},az = {id: 'az', name:'zwey_männer'},az = {id: 'az', name:'zwey_männer'} ; nodes.push( aa,au,az ); links.push( {source: aa , target: az },{source: aa , target: ak },{source: aa , target: az },{source: aa , target: az },{source: aa , target: au },{source: ak , target: az },{source: ak , target: az },{source: ak , target: az },{source: ak , target: au },{source: au , target: az },{source: au , target: az },{source: au , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '28. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Acht und zwanzigster Auftritt.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'az','aa','ak','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ae = {id: 'ae', name:'papageno'},at = {id: 'at', name:'weib'},aw = {id: 'aw', name:'erster_knabe'},ax = {id: 'ax', name:'zweyter_knabe'},ay = {id: 'ay', name:'dritter_knabe'} ; nodes.push( ae,at,aw,ax,ay ); links.push( {source: ae , target: aw },{source: ae , target: ax },{source: ae , target: ay },{source: ae , target: at },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '29. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neun und zwanzigster Auftritt.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ae','aw','ax','ay','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ab = {id: 'ab', name:'erste_dame'},ac = {id: 'ac', name:'zweyte_dame'},ad = {id: 'ad', name:'dritte_dame'},af = {id: 'af', name:'koniginn'},ao = {id: 'ao', name:'sarastro'},ba = {id: 'ba', name:'mohr'},bb = {id: 'bb', name:'chor_von_priestern'} ; nodes.push( ab,ac,ad,af,ao,ba,bb ); links.push( {source: ba , target: bb },{source: ab , target: ba },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ao },{source: ab , target: bb },{source: ac , target: ba },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ao },{source: ac , target: bb },{source: ad , target: ba },{source: ad , target: af },{source: ad , target: ao },{source: ad , target: bb },{source: af , target: ba },{source: af , target: ao },{source: af , target: bb },{source: ao , target: ba },{source: ao , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '30. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyßigster Auftritt.';
}, 240000);
