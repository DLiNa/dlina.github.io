setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'schön'},ab = {id: 'ab', name:'schwarz'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'goll'},ad = {id: 'ad', name:'lulu'} ; nodes.push( ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad ae */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'alwa'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad */ var  ab = {id: 'ab', name:'schwarz'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'schwarz'},ad = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'lulu'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ad af */ var  ab = {id: 'ab', name:'schwarz'},ad = nodes[0] ,af = {id: 'af', name:'henriette'} ; nodes.push( ab,af ); links.push( {source: ab , target: ad },{source: ab , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = {id: 'ag', name:'schigold'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'schön'},ad = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'schwarz'},ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ad ae af */ var  aa = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'alwa'},af = {id: 'af', name:'henriette'} ; nodes.push( ae,af ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ae','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ah */ var  aa = nodes[0] ,ah = {id: 'ah', name:'escherich'} ; nodes.push( ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ad ae */ var  aa = nodes[0] ,ad = {id: 'ad', name:'lulu'},ae = {id: 'ae', name:'alwa'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: aa , target: ae },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ae ai */ var  ae = nodes[0] ,ai = {id: 'ai', name:'escerny'} ; nodes.push( ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad ae ai */ var  ad = {id: 'ad', name:'lulu'},ae = nodes[0] ,ai = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ai },{source: ad , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ai */ var  ad = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'alwa'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ad ae */ var  aa = {id: 'aa', name:'schön'},ad = {id: 'ad', name:'lulu'},ae = nodes[0]  ; nodes.push( aa,ad ); links.push( {source: ad , target: ae },{source: aa , target: ae },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ad aj */ var  aa = nodes[0] ,ad = nodes[1] ,aj = {id: 'aj', name:'gräfin_geschwitz'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ad },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aj','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = {id: 'ad', name:'lulu'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'gräfin_geschwitz'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ag ak al */ var  ag = {id: 'ag', name:'schigold'},ak = {id: 'ak', name:'rodrigo'},al = {id: 'al', name:'hugenberg'} ; nodes.push( ag,ak,al ); links.push( {source: ag , target: ak },{source: ag , target: al },{source: ak , target: al },{source: ag , target: ak },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ad ag ak al am */ var  ad = {id: 'ad', name:'lulu'},ag = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = {id: 'am', name:'ferdinand'} ; nodes.push( ad,am ); links.push( {source: ad , target: ag },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ag','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ad ae am */ var  ad = nodes[0] ,ae = {id: 'ae', name:'alwa'},am = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: am },{source: ad , target: ae },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ad ae aj ak al am */ var  aa = {id: 'aa', name:'schön'},ad = nodes[0] ,ae = nodes[1] ,aj = {id: 'aj', name:'gräfin_geschwitz'},ak = {id: 'ak', name:'rodrigo'},al = {id: 'al', name:'hugenberg'},am = nodes[2]  ; nodes.push( aa,aj,ak,al ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: aa , target: am },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: aj },{source: ae , target: am },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: aj },{source: ad , target: ae },{source: ad , target: am },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: aj },{source: ak , target: am },{source: ak , target: al },{source: al , target: am },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 160000);
