setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'herrmann'},ab = {id: 'ab', name:'caroline'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'arnold'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'herrmann'},ab = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'arnold'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ad ae */ var  ac = nodes[0] ,ad = {id: 'ad', name:'der_graf'},ae = {id: 'ae', name:'valentin'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'caroline'},af = {id: 'af', name:'die_gräfinn'} ; nodes.push( ab,af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'valentin'},af = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'caroline'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'herrmann'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ag */ var  aa = nodes[0] ,ag = {id: 'ag', name:'chrysander'} ; nodes.push( ag ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = {id: 'ad', name:'der_graf'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = {id: 'ag', name:'chrysander'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'herrmann'},ad = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'caroline'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'johann'},ai = {id: 'ai', name:'valere'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ad ah */ var  ab = {id: 'ab', name:'caroline'},ad = {id: 'ad', name:'der_graf'},ah = nodes[0]  ; nodes.push( ab,ad ); links.push( {source: ab , target: ah },{source: ab , target: ad },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ah */ var  ab = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac ad ah */ var  ac = {id: 'ac', name:'arnold'},ad = {id: 'ad', name:'der_graf'},ah = nodes[0]  ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ac , target: ah },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'die_gräfinn'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'herrmann'},ad = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'caroline'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ae ah */ var  ae = {id: 'ae', name:'valentin'},ah = {id: 'ah', name:'johann'} ; nodes.push( ae,ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'chrysander'},ah = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = {id: 'ai', name:'valere'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* af ai */ var  af = {id: 'af', name:'die_gräfinn'},ai = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad af ai */ var  ad = {id: 'ad', name:'der_graf'},af = nodes[0] ,ai = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ai },{source: ad , target: af },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* af ai */ var  af = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa af */ var  aa = {id: 'aa', name:'herrmann'},af = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'johann'},ai = {id: 'ai', name:'valere'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'chrysander'},ah = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aa ad ah */ var  aa = {id: 'aa', name:'herrmann'},ad = {id: 'ad', name:'der_graf'},ah = nodes[0]  ; nodes.push( aa,ad ); links.push( {source: ad , target: ah },{source: aa , target: ad },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ad ag ah aj */ var  ad = nodes[0] ,ag = {id: 'ag', name:'chrysander'},ah = nodes[1] ,aj = {id: 'aj', name:'fräulein_christinchen'} ; nodes.push( ag,aj ); links.push( {source: ah , target: aj },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: ag },{source: ag , target: ah },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* af ag ah aj */ var  af = {id: 'af', name:'die_gräfinn'},ag = nodes[0] ,ah = nodes[1] ,aj = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: aj },{source: af , target: ag },{source: af , target: ah },{source: ag , target: aj },{source: ag , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ab ad af ah */ var  ab = {id: 'ab', name:'caroline'},ad = {id: 'ad', name:'der_graf'},af = nodes[0] ,ah = nodes[1]  ; nodes.push( ab,ad ); links.push( {source: af , target: ah },{source: ad , target: af },{source: ad , target: ah },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ab af ah ai */ var  ab = nodes[0] ,af = nodes[1] ,ah = nodes[2] ,ai = {id: 'ai', name:'valere'} ; nodes.push( ai ); links.push( {source: af , target: ai },{source: af , target: ah },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* aa ab af ah ai */ var  aa = {id: 'aa', name:'herrmann'},ab = nodes[0] ,af = nodes[1] ,ah = nodes[2] ,ai = nodes[3]  ; nodes.push( aa ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ah },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ah },{source: af , target: ai },{source: af , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 245000);
