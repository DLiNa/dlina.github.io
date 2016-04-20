setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'major'},ab = {id: 'ab', name:'frau_bügermeister'},ac = {id: 'ac', name:'suschen'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'beringer'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = nodes[1],ae = {id: 'ae', name:'bürgermeiester'},af = {id: 'af', name:'stelzer'},ag = {id: 'ag', name:'scweigel'},ag = {id: 'ag', name:'scweigel'} ; nodes.push( ae,af,ag ); links.push( {source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ag },{source: af , target: ag },{source: af , target: ag },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'suschen'},ae = nodes[2],af = nodes[3],ag = nodes[4] ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: ag },{source: ac , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: af },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = nodes[3],ae = nodes[3],af = nodes[4],ag = nodes[5],ah = {id: 'ah', name:'heitzinger'},ai = {id: 'ai', name:'kiermayer'},aj = {id: 'aj', name:'gruber'} ; nodes.push( ah,ai,aj ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: af },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: af },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah','ai','aj','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = nodes[0],ae = nodes[0],ag = nodes[3],ak = {id: 'ak', name:'marie'} ; nodes.push( ak ); links.push( {source: ag , target: ak },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: ag },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = {id: 'aa', name:'major'},ae = nodes[0],ag = nodes[2] ; nodes.push( aa ); links.push( {source: ae , target: ag },{source: aa , target: ag },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ab = {id: 'ab', name:'frau_bügermeister'},ag = nodes[2] ; nodes.push( ab ); links.push( {source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'suschen'},ad = {id: 'ad', name:'beringer'},ae = {id: 'ae', name:'bürgermeiester'},ae = {id: 'ae', name:'bürgermeiester'},af = {id: 'af', name:'stelzer'},ag = nodes[2],ak = {id: 'ak', name:'marie'} ; nodes.push( ac,ad,ae,af,ak ); links.push( {source: ae , target: ag },{source: ae , target: ak },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: af },{source: ag , target: ak },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ak },{source: ab , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: af },{source: af , target: ag },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad','ag','ac','aa','ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = nodes[1],ae = nodes[4],al = {id: 'al', name:'hartl'} ; nodes.push( al ); links.push( {source: ae , target: al },{source: ab , target: al },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = nodes[0],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = nodes[0],ac = {id: 'ac', name:'suschen'},ae = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = nodes[0],ae = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = {id: 'ad', name:'beringer'},ae = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = {id: 'ab', name:'frau_bügermeister'},ab = {id: 'ab', name:'frau_bügermeister'},ae = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ae },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = nodes[0],ae = nodes[2],am = {id: 'am', name:'frieda'} ; nodes.push( am ); links.push( {source: ae , target: am },{source: ab , target: am },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = {id: 'aa', name:'major'},ab = nodes[0],ae = nodes[1],am = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: aa , target: am },{source: ae , target: am },{source: ab , target: ae },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ae = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],ad = {id: 'ad', name:'beringer'},ae = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: aa , target: ae },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = nodes[1],ae = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ac = {id: 'ac', name:'suschen'},ad = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ac = nodes[0],ae = {id: 'ae', name:'bürgermeiester'},ae = {id: 'ae', name:'bürgermeiester'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = {id: 'aa', name:'major'},ab = {id: 'ab', name:'frau_bügermeister'},ac = nodes[0],ae = nodes[1],am = {id: 'am', name:'frieda'} ; nodes.push( aa,ab,am ); links.push( {source: ab , target: am },{source: ab , target: ac },{source: ab , target: ae },{source: ac , target: am },{source: ac , target: ae },{source: aa , target: am },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'am','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = nodes[0],ae = nodes[3] ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ae = nodes[1],ag = {id: 'ag', name:'scweigel'} ; nodes.push( ag ); links.push( {source: aa , target: ag },{source: aa , target: ae },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = nodes[0],ab = {id: 'ab', name:'frau_bügermeister'},ae = nodes[1],ak = {id: 'ak', name:'marie'} ; nodes.push( ab,ak ); links.push( {source: ab , target: ae },{source: ab , target: ak },{source: ae , target: ak },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = nodes[0],ab = nodes[1],ak = nodes[3] ; /* nodes.push(); */ links.push( {source: ab , target: ak },{source: aa , target: ab },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = nodes[0],ak = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  af = {id: 'af', name:'stelzer'},ai = {id: 'ai', name:'kiermayer'},aj = {id: 'aj', name:'gruber'},ak = nodes[1],an = {id: 'an', name:'gschwendtner'},ao = {id: 'ao', name:'lindlacher'} ; nodes.push( af,ai,aj,an,ao ); links.push( {source: af , target: ak },{source: af , target: ai },{source: af , target: aj },{source: af , target: an },{source: af , target: ao },{source: ak , target: an },{source: ak , target: ao },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: ao },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ae = {id: 'ae', name:'bürgermeiester'},af = nodes[0],ai = nodes[1],aj = nodes[2],ak = nodes[3],an = nodes[4],ao = nodes[5] ; nodes.push( ae ); links.push( {source: ae , target: af },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: ao },{source: af , target: ak },{source: af , target: ai },{source: af , target: aj },{source: af , target: an },{source: af , target: ao },{source: ak , target: an },{source: ak , target: ao },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: ao },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ae = nodes[0],af = nodes[1],ah = {id: 'ah', name:'heitzinger'},ai = nodes[2],aj = nodes[3],an = nodes[5],ao = nodes[6] ; nodes.push( ah ); links.push( {source: ah , target: an },{source: ah , target: ao },{source: ah , target: aj },{source: ah , target: ai },{source: ae , target: ah },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: af },{source: an , target: ao },{source: aj , target: an },{source: aj , target: ao },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: aj },{source: af , target: ah },{source: af , target: an },{source: af , target: ao },{source: af , target: aj },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ah','an','ao','aj','ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = {id: 'aa', name:'major'},ae = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ab = {id: 'ab', name:'frau_bügermeister'},ae = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ab = nodes[0],ad = {id: 'ad', name:'beringer'},ae = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ae','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = {id: 'aa', name:'major'},ag = {id: 'ag', name:'scweigel'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = nodes[0],ae = {id: 'ae', name:'bürgermeiester'},ag = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ag },{source: aa , target: ae },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ab = {id: 'ab', name:'frau_bügermeister'},ac = {id: 'ac', name:'suschen'},ad = {id: 'ad', name:'beringer'},ae = nodes[1],af = {id: 'af', name:'stelzer'},ag = nodes[2],ak = {id: 'ak', name:'marie'} ; nodes.push( ab,ac,ad,af,ak ); links.push( {source: ag , target: ak },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: af },{source: af , target: ag },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 185000);
