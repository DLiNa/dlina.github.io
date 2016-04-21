setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'orgon'},ab = {id: 'ab', name:'philipp'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'lisette'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'philipp'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'timant'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ad ae */ var  ab = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'damon'} ; nodes.push( ae ); links.push( {source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ad ae af */ var  aa = {id: 'aa', name:'orgon'},ab = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'geronte'} ; nodes.push( aa,af ); links.push( {source: aa , target: af },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ab },{source: ad , target: af },{source: ad , target: af },{source: ad , target: ae },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ab },{source: ae , target: af },{source: ae , target: af },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'lisette'},ae = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = {id: 'ag', name:'climene'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ac ad ag */ var  ab = {id: 'ab', name:'philipp'},ac = nodes[0] ,ad = {id: 'ad', name:'timant'},ag = nodes[1]  ; nodes.push( ab,ad ); links.push( {source: ad , target: ag },{source: ac , target: ad },{source: ac , target: ag },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab ad */ var  aa = {id: 'aa', name:'orgon'},ab = nodes[0] ,ad = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'geronte'},ag = {id: 'ag', name:'climene'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa af ag */ var  aa = {id: 'aa', name:'orgon'},af = nodes[0] ,ag = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: af },{source: aa , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aa','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'philipp'},ad = {id: 'ad', name:'timant'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'lisette'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'timant'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'philipp'},ad = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ad ae af */ var  aa = {id: 'aa', name:'orgon'},ad = nodes[0] ,ae = {id: 'ae', name:'damon'},af = {id: 'af', name:'geronte'} ; nodes.push( aa,ae,af ); links.push( {source: aa , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: ae , target: af },{source: ad , target: af },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'philipp'},ad = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'lisette'},ae = {id: 'ae', name:'damon'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac ae ag */ var  ac = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'climene'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ac , target: ag },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ac af ag */ var  aa = {id: 'aa', name:'orgon'},ac = nodes[0] ,af = {id: 'af', name:'geronte'},ag = nodes[1]  ; nodes.push( aa,af ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = nodes[0] ,ab = {id: 'ab', name:'philipp'},ac = nodes[1] ,ad = {id: 'ad', name:'timant'},ae = {id: 'ae', name:'damon'},af = nodes[2] ,ag = nodes[3]  ; nodes.push( ab,ad,ae ); links.push( {source: af , target: ag },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ad },{source: ae , target: af },{source: ae , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'af','ac','ag','aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = {id: 'aa', name:'orgon'},ab = nodes[0] ,ac = {id: 'ac', name:'lisette'},ad = nodes[1] ,ae = {id: 'ae', name:'damon'},af = {id: 'af', name:'geronte'},ag = {id: 'ag', name:'climene'} ; nodes.push( aa,ac,ae,af,ag ); links.push( {source: af , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ab },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ae },{source: ae , target: af },{source: ae , target: ag },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'af','ad','ag','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ae af */ var  aa = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'geronte'} ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ac ae af ag */ var  aa = nodes[0] ,ac = {id: 'ac', name:'lisette'},ae = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'climene'} ; nodes.push( ac,ag ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ae , target: af },{source: ae , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ab ad af ag */ var  aa = nodes[0] ,ab = {id: 'ab', name:'philipp'},ad = {id: 'ad', name:'timant'},af = nodes[1] ,ag = nodes[2]  ; nodes.push( ab,ad ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: af , target: ag },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ad','aa','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'lisette'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'damon'},ag = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa af ag */ var  aa = {id: 'aa', name:'orgon'},af = {id: 'af', name:'geronte'},ag = nodes[0]  ; nodes.push( aa,af ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = nodes[0] ,ab = {id: 'ab', name:'philipp'},ac = {id: 'ac', name:'lisette'},ad = {id: 'ad', name:'timant'},ae = {id: 'ae', name:'damon'},af = nodes[1] ,ag = nodes[2]  ; nodes.push( ab,ac,ad,ae ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: af , target: ag },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ag },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter und letzter Auftritt';
}, 170000);
