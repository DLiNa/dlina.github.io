setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'datterich'},ab = {id: 'ab', name:'bennelbächer'},ac = {id: 'ac', name:'spirwes'},ad = {id: 'ad', name:'lisette'},ae = {id: 'ae', name:'knerz'},af = {id: 'af', name:'junge'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ad ae ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,ag = {id: 'ag', name:'erster_handlanger'},ah = {id: 'ah', name:'zweiter_handlanger'},ai = {id: 'ai', name:'dritter_handlanger'} ; nodes.push( ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ah , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ab },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ag','ah','ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad ae */ var  aa = nodes[0] ,ac = {id: 'ac', name:'spirwes'},ad = nodes[1] ,ae = nodes[2]  ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ad aj */ var  aa = nodes[0] ,ad = nodes[1] ,aj = {id: 'aj', name:'schmidt'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ad },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Bild'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa','aj','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac ak al am */ var  ab = {id: 'ab', name:'bennelbächer'},ac = {id: 'ac', name:'spirwes'},ak = {id: 'ak', name:'dummbach'},al = {id: 'al', name:'marie'},am = {id: 'am', name:'frau_dummbach'} ; nodes.push( ab,ac,ak,al,am ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ac aj ak al am */ var  aa = {id: 'aa', name:'datterich'},ab = nodes[0] ,ac = nodes[1] ,aj = {id: 'aj', name:'schmidt'},ak = nodes[2] ,al = nodes[3] ,am = nodes[4]  ; nodes.push( aa,aj ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: ac },{source: ab , target: aj },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ac aj ak al am an */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = nodes[5] ,am = nodes[6] ,an = {id: 'an', name:'der_geiger'} ; nodes.push( an ); links.push( {source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ak },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ak },{source: ac , target: aj },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ak },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ak },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aj','ac','ab','al','am','an','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ao */ var  aa = nodes[0] ,ao = {id: 'ao', name:'steifschächter'} ; nodes.push( ao ); links.push( {source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ap */ var  aa = nodes[0] ,ap = {id: 'ap', name:'wirthsjunge'} ; nodes.push( ap ); links.push( {source: aa , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa aq */ var  aa = nodes[0] ,aq = {id: 'aq', name:'bengler'} ; nodes.push( aq ); links.push( {source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'schmidt'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ak al am */ var  ak = {id: 'ak', name:'dummbach'},al = {id: 'al', name:'marie'},am = {id: 'am', name:'frau_dummbach'} ; nodes.push( ak,al,am ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* al ar */ var  al = nodes[0] ,ar = {id: 'ar', name:'evchen'} ; nodes.push( ar ); links.push( {source: al , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Bild'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa aj */ var  aa = {id: 'aa', name:'datterich'},aj = {id: 'aj', name:'schmidt'} ; nodes.push( aa,aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ad aj */ var  aa = nodes[0] ,ad = {id: 'ad', name:'lisette'},aj = nodes[1]  ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: aj },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad aq */ var  ad = nodes[0] ,aq = {id: 'aq', name:'bengler'} ; nodes.push( aq ); links.push( {source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa aj */ var  aa = {id: 'aa', name:'datterich'},aj = {id: 'aj', name:'schmidt'} ; nodes.push( aa,aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Bild'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa aj al ar */ var  aa = nodes[0] ,aj = nodes[1] ,al = {id: 'al', name:'marie'},ar = {id: 'ar', name:'evchen'} ; nodes.push( al,ar ); links.push( {source: aj , target: ar },{source: aj , target: al },{source: aa , target: ar },{source: aa , target: aj },{source: aa , target: al },{source: al , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Bild'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ar','aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Bild'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'spirwes'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Bild'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* al */ var  al = {id: 'al', name:'marie'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* al as */ var  al = nodes[0] ,as = {id: 'as', name:'knippelius'} ; nodes.push( as ); links.push( {source: al , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'dummbach'},al = nodes[0]  ; nodes.push( ak ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'dummbach'},al = nodes[0]  ; nodes.push( ak ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ak al am */ var  ak = nodes[0] ,al = nodes[1] ,am = {id: 'am', name:'frau_dummbach'} ; nodes.push( am ); links.push( {source: ak , target: am },{source: ak , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'am','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aj al */ var  aj = {id: 'aj', name:'schmidt'},al = nodes[0]  ; nodes.push( aj ); links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'dummbach'},al = nodes[0]  ; nodes.push( ak ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ak am */ var  ak = nodes[0] ,am = {id: 'am', name:'frau_dummbach'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ak am ar */ var  ak = nodes[0] ,am = nodes[1] ,ar = {id: 'ar', name:'evchen'} ; nodes.push( ar ); links.push( {source: ak , target: ar },{source: ak , target: am },{source: am , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Bild'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ar','ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'datterich'},ac = {id: 'ac', name:'spirwes'},ad = {id: 'ad', name:'lisette'} ; nodes.push( aa,ac,ad ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ab ad ae */ var  ab = {id: 'ab', name:'bennelbächer'},ad = nodes[0] ,ae = {id: 'ae', name:'knerz'} ; nodes.push( ab,ae ); links.push( {source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ab ad ae aq */ var  ab = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,aq = {id: 'aq', name:'bengler'} ; nodes.push( aq ); links.push( {source: ae , target: aq },{source: ad , target: aq },{source: ad , target: ae },{source: ab , target: aq },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aq','ae','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* at au */ var  at = {id: 'at', name:'erster'},au = {id: 'au', name:'zweiter'} ; nodes.push( at,au ); links.push( {source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'datterich'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aa at au */ var  aa = nodes[0] ,at = {id: 'at', name:'erster'},au = {id: 'au', name:'zweiter'} ; nodes.push( at,au ); links.push( {source: at , target: au },{source: aa , target: at },{source: aa , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'at','au','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ak al am */ var  ak = {id: 'ak', name:'dummbach'},al = {id: 'al', name:'marie'},am = {id: 'am', name:'frau_dummbach'} ; nodes.push( ak,al,am ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ak al am as */ var  ak = nodes[0] ,al = nodes[1] ,am = nodes[2] ,as = {id: 'as', name:'knippelius'} ; nodes.push( as ); links.push( {source: ak , target: as },{source: ak , target: am },{source: ak , target: al },{source: am , target: as },{source: al , target: as },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aj ak al am as */ var  aj = {id: 'aj', name:'schmidt'},ak = nodes[0] ,al = nodes[1] ,am = nodes[2] ,as = nodes[3]  ; nodes.push( aj ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: as },{source: ak , target: al },{source: ak , target: am },{source: ak , target: as },{source: al , target: am },{source: al , target: as },{source: am , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa aj ak am as */ var  aa = {id: 'aa', name:'datterich'},aj = nodes[0] ,ak = nodes[1] ,am = nodes[2] ,as = nodes[3]  ; nodes.push( aa ); links.push( {source: aa , target: as },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: am },{source: aj , target: as },{source: aj , target: ak },{source: aj , target: am },{source: ak , target: as },{source: ak , target: am },{source: am , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '6. Bild'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Scene';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'aa','aj','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ak as */ var  ak = nodes[0] ,as = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '12. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene';
}, 235000);
