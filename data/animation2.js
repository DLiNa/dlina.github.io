setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'hauswurst'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'odoardo'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'riepel'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'hauswurst'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'leander'},ab = nodes[0] ,ac = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'riepel'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'angela'},af = {id: 'af', name:'colombina'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ae af */ var  ab = {id: 'ab', name:'hauswurst'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'odoardo'},ae = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac ae af ag */ var  ac = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'colombina'},ag = {id: 'ag', name:'anselmo'} ; nodes.push( af,ag ); links.push( {source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac','ag','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'hauswurst'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab ah */ var  aa = nodes[0] ,ab = nodes[1] ,ah = {id: 'ah', name:'mägera'} ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '12. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ab ah */ var  aa = nodes[0] ,ab = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ab },{source: aa , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '12. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Aria I.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aa','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'angela'},af = {id: 'af', name:'colombina'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ae af */ var  ab = {id: 'ab', name:'hauswurst'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ac ad ae af ag */ var  ab = nodes[0] ,ac = {id: 'ac', name:'odoardo'},ad = {id: 'ad', name:'riepel'},ae = nodes[1] ,af = nodes[2] ,ag = {id: 'ag', name:'anselmo'} ; nodes.push( ac,ad,ag ); links.push( {source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ac','ag','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'leander'},ab = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ad ae af ag */ var  ac = {id: 'ac', name:'odoardo'},ad = {id: 'ad', name:'riepel'},ae = {id: 'ae', name:'angela'},af = {id: 'af', name:'colombina'},ag = {id: 'ag', name:'anselmo'} ; nodes.push( ac,ad,ae,af,ag ); links.push( {source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ac','ag','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'mägera'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'angela'},af = {id: 'af', name:'colombina'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ae af ah */ var  ad = {id: 'ad', name:'riepel'},ae = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'mägera'} ; nodes.push( ad,ah ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ah },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae','af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac ad ag */ var  ac = {id: 'ac', name:'odoardo'},ad = nodes[0] ,ag = {id: 'ag', name:'anselmo'} ; nodes.push( ac,ag ); links.push( {source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'hauswurst'},ac = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '10. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Aria II.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac ae ag */ var  ac = nodes[0] ,ae = {id: 'ae', name:'angela'},ag = {id: 'ag', name:'anselmo'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag },{source: ac , target: ae },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ad ag */ var  ac = nodes[0] ,ad = {id: 'ad', name:'riepel'},ag = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ag },{source: ac , target: ad },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac ad ag */ var  ac = nodes[0] ,ad = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ag },{source: ac , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ab ac ad ag */ var  ab = {id: 'ab', name:'hauswurst'},ac = nodes[0] ,ad = nodes[1] ,ag = nodes[2]  ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ad },{source: ac , target: ag },{source: ac , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '17. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '17. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Aria III.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ac ad ag ai aj */ var  ac = {id: 'ac', name:'odoardo'},ad = {id: 'ad', name:'riepel'},ag = {id: 'ag', name:'anselmo'},ai = {id: 'ai', name:'richter'},aj = {id: 'aj', name:'schulmeister'} ; nodes.push( ac,ad,ag,ai,aj ); links.push( {source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ag },{source: ac , target: ad },{source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ac','ai','aj','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'angela'},af = {id: 'af', name:'colombina'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ah */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'hauswurst'},ah = {id: 'ah', name:'mägera'} ; nodes.push( aa,ab,ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'odoardo'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab ah */ var  aa = {id: 'aa', name:'leander'},ab = nodes[0] ,ah = {id: 'ah', name:'mägera'} ; nodes.push( aa,ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab ae af ah */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'angela'},af = {id: 'af', name:'colombina'},ah = nodes[2]  ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ae , target: ah },{source: af , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ae','af','ah','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'richter'},aj = {id: 'aj', name:'schulmeister'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'odoardo'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'mägera'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'leander'},ab = {id: 'ab', name:'hauswurst'},ac = {id: 'ac', name:'odoardo'},ad = {id: 'ad', name:'riepel'},ae = {id: 'ae', name:'angela'},af = {id: 'af', name:'colombina'},ag = {id: 'ag', name:'anselmo'},ah = nodes[0]  ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ah },{source: af , target: ag },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ad },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ad },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ag , target: ah },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 195000);
