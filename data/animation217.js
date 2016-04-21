setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'domingo'},ab = {id: 'ab', name:'carlos'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'marquis'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad ae af ak */ var  ad = {id: 'ad', name:'königin'},ae = {id: 'ae', name:'mondekar'},af = {id: 'af', name:'olivarez'},ak = {id: 'ak', name:'eboli'} ; nodes.push( ad,ae,af,ak ); links.push( {source: ad , target: ak },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: ak },{source: ae , target: af },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad ae ak */ var  ac = {id: 'ac', name:'marquis'},ad = nodes[0] ,ae = nodes[1] ,ak = nodes[2]  ; nodes.push( ac ); links.push( {source: ad , target: ak },{source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: ae },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac ad */ var  ab = {id: 'ab', name:'carlos'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad ae ag ah ai */ var  ad = nodes[0] ,ae = {id: 'ae', name:'mondekar'},ag = {id: 'ag', name:'philipp'},ah = {id: 'ah', name:'alba'},ai = {id: 'ai', name:'lerma'} ; nodes.push( ae,ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','ad','ae','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'carlos'},ac = {id: 'ac', name:'marquis'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ac ai */ var  ab = nodes[0] ,ac = nodes[1] ,ai = {id: 'ai', name:'lerma'} ; nodes.push( ai ); links.push( {source: ab , target: ai },{source: ab , target: ac },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = {id: 'ag', name:'philipp'} ; nodes.push( ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = {id: 'ah', name:'alba'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab aj */ var  ab = {id: 'ab', name:'carlos'},aj = {id: 'aj', name:'page'} ; nodes.push( ab,aj ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ah */ var  ab = nodes[0] ,ah = {id: 'ah', name:'alba'} ; nodes.push( ah ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ad ah */ var  ab = nodes[0] ,ad = {id: 'ad', name:'königin'},ah = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ah },{source: ab , target: ad },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ad','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'page'},ak = {id: 'ak', name:'eboli'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ak */ var  ab = {id: 'ab', name:'carlos'},ak = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ak */ var  ak = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ah */ var  aa = {id: 'aa', name:'domingo'},ah = {id: 'ah', name:'alba'} ; nodes.push( aa,ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ak */ var  aa = nodes[0] ,ak = {id: 'ak', name:'eboli'} ; nodes.push( ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ah ak */ var  aa = nodes[0] ,ah = {id: 'ah', name:'alba'},ak = nodes[1]  ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: ak },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ah */ var  aa = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab al */ var  ab = {id: 'ab', name:'carlos'},al = {id: 'al', name:'prior'} ; nodes.push( ab,al ); links.push( {source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'marquis'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'philipp'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ag ai */ var  ag = nodes[0] ,ai = {id: 'ai', name:'lerma'} ; nodes.push( ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = {id: 'ah', name:'alba'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ag ah */ var  aa = {id: 'aa', name:'domingo'},ag = nodes[0] ,ah = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ag },{source: aa , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab ah am */ var  ab = {id: 'ab', name:'carlos'},ah = {id: 'ah', name:'alba'},am = {id: 'am', name:'medina_sidonia'} ; nodes.push( ab,ah,am ); links.push( {source: ah , target: am },{source: ab , target: am },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ag ah ai am an ao ap aq ar */ var  ag = {id: 'ag', name:'philipp'},ah = nodes[0] ,ai = {id: 'ai', name:'lerma'},am = nodes[1] ,an = {id: 'an', name:'parma'},ao = {id: 'ao', name:'feria'},ap = {id: 'ap', name:'der_erste'},aq = {id: 'aq', name:'ein_zweiter'},ar = {id: 'ar', name:'ein_dritter'} ; nodes.push( ag,ai,an,ao,ap,aq,ar ); links.push( {source: ag , target: an },{source: ag , target: ao },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: ap },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: ap },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: am },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: ap },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: ap },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar },{source: ap , target: aq },{source: ap , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ag','an','ao','am','ai','ap','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac ah */ var  ac = {id: 'ac', name:'marquis'},ah = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = {id: 'ag', name:'philipp'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ad af ak as */ var  ad = {id: 'ad', name:'königin'},af = {id: 'af', name:'olivarez'},ak = {id: 'ak', name:'eboli'},as = {id: 'as', name:'fuentes'} ; nodes.push( ad,af,ak,as ); links.push( {source: ad , target: as },{source: ad , target: af },{source: ad , target: ak },{source: af , target: as },{source: af , target: ak },{source: ak , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'as','af','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'marquis'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'carlos'},ai = {id: 'ai', name:'lerma'} ; nodes.push( ab,ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'marquis'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'philipp'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ag ai */ var  ag = nodes[0] ,ai = {id: 'ai', name:'lerma'} ; nodes.push( ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ad ag at */ var  ad = {id: 'ad', name:'königin'},ag = nodes[0] ,at = {id: 'at', name:'infantin'} ; nodes.push( ad,at ); links.push( {source: ad , target: ag },{source: ad , target: at },{source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ad','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aa ac ag ah */ var  aa = {id: 'aa', name:'domingo'},ac = {id: 'ac', name:'marquis'},ag = nodes[0] ,ah = {id: 'ah', name:'alba'} ; nodes.push( aa,ac,ah ); links.push( {source: ag , target: ah },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ac },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ah','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ac ag ai */ var  ac = {id: 'ac', name:'marquis'},ag = nodes[0] ,ai = {id: 'ai', name:'lerma'} ; nodes.push( ac,ai ); links.push( {source: ac , target: ag },{source: ac , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'carlos'},ai = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa ad ah */ var  aa = {id: 'aa', name:'domingo'},ad = {id: 'ad', name:'königin'},ah = {id: 'ah', name:'alba'} ; nodes.push( aa,ad,ah ); links.push( {source: ad , target: ah },{source: aa , target: ah },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ah','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ab ak */ var  ab = {id: 'ab', name:'carlos'},ak = {id: 'ak', name:'eboli'} ; nodes.push( ab,ak ); links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'marquis'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ac ak */ var  ac = nodes[0] ,ak = {id: 'ak', name:'eboli'} ; nodes.push( ak ); links.push( {source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ad ak */ var  ad = {id: 'ad', name:'königin'},ak = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* af ak */ var  af = {id: 'af', name:'olivarez'},ak = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'marquis'},ad = {id: 'ad', name:'königin'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* aa ah ai au */ var  aa = {id: 'aa', name:'domingo'},ah = {id: 'ah', name:'alba'},ai = {id: 'ai', name:'lerma'},au = {id: 'au', name:'taxis'} ; nodes.push( aa,ah,ai,au ); links.push( {source: ai , target: au },{source: ah , target: ai },{source: ah , target: au },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* aa ah ai am an ao aw */ var  aa = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,am = {id: 'am', name:'medina_sidonia'},an = {id: 'an', name:'parma'},ao = {id: 'ao', name:'feria'},aw = {id: 'aw', name:'die_übrigen_granden'} ; nodes.push( am,an,ao,aw ); links.push( {source: an , target: ao },{source: an , target: aw },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: aw },{source: ah , target: ai },{source: ao , target: aw },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ao },{source: aa , target: am },{source: aa , target: aw },{source: aa , target: ai },{source: am , target: an },{source: am , target: ao },{source: am , target: aw },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: am },{source: ai , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'an','am','aw','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* aa ah ak ao */ var  aa = nodes[0] ,ah = nodes[1] ,ak = {id: 'ak', name:'eboli'},ao = nodes[2]  ; nodes.push( ak ); links.push( {source: ak , target: ao },{source: aa , target: ak },{source: aa , target: ao },{source: aa , target: ah },{source: aa , target: ah },{source: ah , target: ak },{source: ah , target: ao },{source: ah , target: ak },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ak','ao','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'carlos'},ac = {id: 'ac', name:'marquis'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ab ah */ var  ab = nodes[0] ,ah = {id: 'ah', name:'alba'} ; nodes.push( ah ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'marquis'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ab ag ah ai aw */ var  ab = nodes[0] ,ag = {id: 'ag', name:'philipp'},ah = {id: 'ah', name:'alba'},ai = {id: 'ai', name:'lerma'},aw = {id: 'aw', name:'die_übrigen_granden'} ; nodes.push( ag,ah,ai,aw ); links.push( {source: ag , target: aw },{source: ag , target: ah },{source: ag , target: ai },{source: ab , target: ag },{source: ab , target: aw },{source: ab , target: ah },{source: ab , target: ai },{source: ah , target: aw },{source: ah , target: ai },{source: ai , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ag ah ai ao av aw */ var  ag = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,ao = {id: 'ao', name:'feria'},av = {id: 'av', name:'offizier'},aw = nodes[3]  ; nodes.push( ao,av ); links.push( {source: av , target: aw },{source: ah , target: av },{source: ah , target: aw },{source: ah , target: ai },{source: ah , target: ao },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ao },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: ao },{source: ao , target: av },{source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'av','aw','ah','ag','ai','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* ab ax */ var  ab = {id: 'ab', name:'carlos'},ax = {id: 'ax', name:'merkado'} ; nodes.push( ab,ax ); links.push( {source: ab , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = {id: 'ai', name:'lerma'} ; nodes.push( ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* ah ao */ var  ah = {id: 'ah', name:'alba'},ao = {id: 'ao', name:'feria'} ; nodes.push( ah,ao ); links.push( {source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* aa ag ah aj ao au av */ var  aa = {id: 'aa', name:'domingo'},ag = {id: 'ag', name:'philipp'},ah = nodes[0] ,aj = {id: 'aj', name:'page'},ao = nodes[1] ,au = {id: 'au', name:'taxis'},av = {id: 'av', name:'offizier'} ; nodes.push( aa,ag,aj,au,av ); links.push( {source: ag , target: ah },{source: ag , target: ao },{source: ag , target: au },{source: ag , target: av },{source: ag , target: aj },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ao },{source: aa , target: au },{source: aa , target: av },{source: aa , target: aj },{source: ah , target: ao },{source: ah , target: au },{source: ah , target: av },{source: ah , target: aj },{source: ao , target: au },{source: ao , target: av },{source: au , target: av },{source: aj , target: ao },{source: aj , target: au },{source: aj , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'aa','ah','ao','au','av','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* ag ay */ var  ag = nodes[0] ,ay = {id: 'ay', name:'grossinquisitor'} ; nodes.push( ay ); links.push( {source: ag , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* ab ad ag */ var  ab = {id: 'ab', name:'carlos'},ad = {id: 'ad', name:'königin'},ag = nodes[0]  ; nodes.push( ab,ad ); links.push( {source: ab , target: ad },{source: ab , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt';
}, 330000);
