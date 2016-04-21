setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'jakob'},ab = {id: 'ab', name:'hofrath'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'frau_von_wallenfeld'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'jakob'},ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'sekretär'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = {id: 'ae', name:'karl'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ae af */ var  ac = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'herr_von_wallenfeld'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: ac , target: af },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'jakob'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac ag */ var  aa = nodes[0] ,ac = nodes[1] ,ag = {id: 'ag', name:'herr_von_posert'} ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: aa , target: ag },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac af ag */ var  ac = nodes[0] ,af = {id: 'af', name:'herr_von_wallenfeld'},ag = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac af ag */ var  ac = nodes[0] ,af = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'karl'},af = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'hofrath'},ad = {id: 'ad', name:'sekretär'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ad ah */ var  ab = nodes[0] ,ad = nodes[1] ,ah = {id: 'ah', name:'geheimerath'} ; nodes.push( ah ); links.push( {source: ad , target: ah },{source: ab , target: ah },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ad ah ai */ var  ad = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'kammerdiener'} ; nodes.push( ai ); links.push( {source: ad , target: ah },{source: ad , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ad ah ai aj ak al */ var  ad = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,aj = {id: 'aj', name:'jean'},ak = {id: 'ak', name:'haushofmeister'},al = {id: 'al', name:'bedienter'} ; nodes.push( aj,ak,al ); links.push( {source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ai },{source: aj , target: ak },{source: aj , target: al },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ai },{source: ak , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad af ah ai aj al am */ var  ad = nodes[0] ,af = {id: 'af', name:'herr_von_wallenfeld'},ah = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,al = nodes[4] ,am = {id: 'am', name:'stallmeister'} ; nodes.push( af,am ); links.push( {source: af , target: ah },{source: af , target: am },{source: af , target: aj },{source: af , target: ai },{source: af , target: al },{source: ah , target: am },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: am },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: al },{source: aj , target: am },{source: aj , target: al },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','am','aj','ai','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'jakob'},ab = {id: 'ab', name:'hofrath'},ac = {id: 'ac', name:'frau_von_wallenfeld'} ; nodes.push( aa,ab,ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ab an */ var  ab = nodes[0] ,an = {id: 'an', name:'rektor'} ; nodes.push( an ); links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* af an */ var  af = {id: 'af', name:'herr_von_wallenfeld'},an = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ac af */ var  aa = {id: 'aa', name:'jakob'},ac = {id: 'ac', name:'frau_von_wallenfeld'},af = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: ac , target: af },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ac ae */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'karl'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: aa , target: ae },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ao */ var  ac = nodes[0] ,ao = {id: 'ao', name:'lieutenant'} ; nodes.push( ao ); links.push( {source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = {id: 'af', name:'herr_von_wallenfeld'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac af ao */ var  ac = nodes[0] ,af = nodes[1] ,ao = {id: 'ao', name:'lieutenant'} ; nodes.push( ao ); links.push( {source: af , target: ao },{source: ac , target: ao },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* af ao */ var  af = nodes[0] ,ao = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ac af */ var  aa = {id: 'aa', name:'jakob'},ac = {id: 'ac', name:'frau_von_wallenfeld'},af = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: ac , target: af },{source: aa , target: af },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa af ag */ var  aa = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'herr_von_posert'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa af ag ap */ var  aa = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,ap = {id: 'ap', name:'unteroffizier'} ; nodes.push( ap ); links.push( {source: aa , target: af },{source: aa , target: ag },{source: aa , target: ap },{source: af , target: ag },{source: af , target: ap },{source: ag , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aa','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac af ag */ var  ac = {id: 'ac', name:'frau_von_wallenfeld'},af = nodes[0] ,ag = nodes[1]  ; nodes.push( ac ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'af','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'hofrath'},ad = {id: 'ad', name:'sekretär'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ad al ao */ var  ad = nodes[0] ,al = {id: 'al', name:'bedienter'},ao = {id: 'ao', name:'lieutenant'} ; nodes.push( al,ao ); links.push( {source: al , target: ao },{source: ad , target: al },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ad ah ao */ var  ad = nodes[0] ,ah = {id: 'ah', name:'geheimerath'},ao = nodes[1]  ; nodes.push( ah ); links.push( {source: ad , target: ao },{source: ad , target: ah },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ad ah */ var  ad = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ad ah an */ var  ad = nodes[0] ,ah = nodes[1] ,an = {id: 'an', name:'rektor'} ; nodes.push( an ); links.push( {source: ad , target: ah },{source: ad , target: an },{source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad ah al an */ var  ad = nodes[0] ,ah = nodes[1] ,al = {id: 'al', name:'bedienter'},an = nodes[2]  ; nodes.push( al ); links.push( {source: al , target: an },{source: ah , target: al },{source: ah , target: an },{source: ad , target: al },{source: ad , target: ah },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'al','ah','an','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa af */ var  aa = {id: 'aa', name:'jakob'},af = {id: 'af', name:'herr_von_wallenfeld'} ; nodes.push( aa,af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ac ae af */ var  ac = {id: 'ac', name:'frau_von_wallenfeld'},ae = {id: 'ae', name:'karl'},af = nodes[0]  ; nodes.push( ac,ae ); links.push( {source: ae , target: af },{source: ac , target: af },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ac ad af */ var  aa = {id: 'aa', name:'jakob'},ac = nodes[0] ,ad = {id: 'ad', name:'sekretär'},af = nodes[1]  ; nodes.push( aa,ad ); links.push( {source: ad , target: af },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ac },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ac af ao */ var  ac = nodes[0] ,af = nodes[1] ,ao = {id: 'ao', name:'lieutenant'} ; nodes.push( ao ); links.push( {source: af , target: ao },{source: ac , target: ao },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ae af ao aq */ var  ae = {id: 'ae', name:'karl'},af = nodes[0] ,ao = nodes[1] ,aq = {id: 'aq', name:'adjutant'} ; nodes.push( ae,aq ); links.push( {source: ae , target: af },{source: ae , target: aq },{source: ae , target: ao },{source: af , target: aq },{source: af , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'af','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ac ae ao */ var  ac = {id: 'ac', name:'frau_von_wallenfeld'},ae = nodes[0] ,ao = nodes[1]  ; nodes.push( ac ); links.push( {source: ae , target: ao },{source: ac , target: ae },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ae','ac','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ad aq */ var  ad = {id: 'ad', name:'sekretär'},aq = {id: 'aq', name:'adjutant'} ; nodes.push( ad,aq ); links.push( {source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ai aq */ var  ai = {id: 'ai', name:'kammerdiener'},aq = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ad ai */ var  ad = {id: 'ad', name:'sekretär'},ai = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ad an ar */ var  ad = nodes[0] ,an = {id: 'an', name:'rektor'},ar = {id: 'ar', name:'general'} ; nodes.push( an,ar ); links.push( {source: ad , target: ar },{source: ad , target: an },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ad','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aq ar */ var  aq = {id: 'aq', name:'adjutant'},ar = nodes[0]  ; nodes.push( aq ); links.push( {source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ao ar as */ var  ao = {id: 'ao', name:'lieutenant'},ar = nodes[0] ,as = {id: 'as', name:'major_stern'} ; nodes.push( ao,as ); links.push( {source: ao , target: ar },{source: ao , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ao','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* aq ar */ var  aq = {id: 'aq', name:'adjutant'},ar = nodes[0]  ; nodes.push( aq ); links.push( {source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ai aq ar */ var  ai = {id: 'ai', name:'kammerdiener'},aq = nodes[0] ,ar = nodes[1]  ; nodes.push( ai ); links.push( {source: ai , target: ar },{source: ai , target: aq },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ai','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ab ah aq */ var  ab = {id: 'ab', name:'hofrath'},ah = {id: 'ah', name:'geheimerath'},aq = nodes[0]  ; nodes.push( ab,ah ); links.push( {source: ah , target: aq },{source: ab , target: aq },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ab ah */ var  ab = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ab ah ai ar */ var  ab = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'kammerdiener'},ar = {id: 'ar', name:'general'} ; nodes.push( ai,ar ); links.push( {source: ah , target: ar },{source: ah , target: ai },{source: ab , target: ar },{source: ab , target: ah },{source: ab , target: ai },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ai aq ar */ var  ai = nodes[0] ,aq = {id: 'aq', name:'adjutant'},ar = nodes[1]  ; nodes.push( aq ); links.push( {source: aq , target: ar },{source: ai , target: ar },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ag aq ar */ var  ag = {id: 'ag', name:'herr_von_posert'},aq = nodes[0] ,ar = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: ar },{source: ag , target: aq },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* af ag aq ar */ var  af = {id: 'af', name:'herr_von_wallenfeld'},ag = nodes[0] ,aq = nodes[1] ,ar = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: ar },{source: af , target: ag },{source: af , target: aq },{source: ag , target: ar },{source: ag , target: aq },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* af ai aq ar */ var  af = nodes[0] ,ai = {id: 'ai', name:'kammerdiener'},aq = nodes[1] ,ar = nodes[2]  ; nodes.push( ai ); links.push( {source: af , target: ar },{source: af , target: aq },{source: af , target: ai },{source: aq , target: ar },{source: ai , target: ar },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'af','aq','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ah an ar */ var  ah = {id: 'ah', name:'geheimerath'},an = {id: 'an', name:'rektor'},ar = nodes[0]  ; nodes.push( ah,an ); links.push( {source: an , target: ar },{source: ah , target: an },{source: ah , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ab ah ar */ var  ab = {id: 'ab', name:'hofrath'},ah = nodes[0] ,ar = nodes[1]  ; nodes.push( ab ); links.push( {source: ah , target: ar },{source: ab , target: ah },{source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ah','ar','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* af ag al ao aq at */ var  af = {id: 'af', name:'herr_von_wallenfeld'},ag = {id: 'ag', name:'herr_von_posert'},al = {id: 'al', name:'bedienter'},ao = {id: 'ao', name:'lieutenant'},aq = {id: 'aq', name:'adjutant'},at = {id: 'at', name:'bediente'} ; nodes.push( af,ag,al,ao,aq,at ); links.push( {source: aq , target: at },{source: ag , target: aq },{source: ag , target: ao },{source: ag , target: at },{source: ag , target: al },{source: ao , target: aq },{source: ao , target: at },{source: al , target: aq },{source: al , target: ao },{source: al , target: at },{source: af , target: aq },{source: af , target: ag },{source: af , target: ao },{source: af , target: at },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ao','at','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* ab af ag ah aq ar */ var  ab = {id: 'ab', name:'hofrath'},af = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'geheimerath'},aq = nodes[2] ,ar = {id: 'ar', name:'general'} ; nodes.push( ab,ah,ar ); links.push( {source: ah , target: ar },{source: ah , target: aq },{source: ag , target: ah },{source: ag , target: ar },{source: ag , target: aq },{source: af , target: ah },{source: af , target: ar },{source: af , target: ag },{source: af , target: aq },{source: ab , target: ah },{source: ab , target: ar },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: aq },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* ab ac ae af ag ah aq ar as */ var  ab = nodes[0] ,ac = {id: 'ac', name:'frau_von_wallenfeld'},ae = {id: 'ae', name:'karl'},af = nodes[1] ,ag = nodes[2] ,ah = nodes[3] ,aq = nodes[4] ,ar = nodes[5] ,as = {id: 'as', name:'major_stern'} ; nodes.push( ac,ae,as ); links.push( {source: ag , target: ar },{source: ag , target: aq },{source: ag , target: ah },{source: ag , target: as },{source: ar , target: as },{source: af , target: ag },{source: af , target: ar },{source: af , target: aq },{source: af , target: ah },{source: af , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ah , target: ar },{source: ah , target: aq },{source: ah , target: as },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: af },{source: ac , target: aq },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: as },{source: ae , target: ag },{source: ae , target: ar },{source: ae , target: af },{source: ae , target: aq },{source: ae , target: ah },{source: ae , target: as },{source: ab , target: ag },{source: ab , target: ar },{source: ab , target: af },{source: ab , target: aq },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* ab ac af ah aq ar as */ var  ab = nodes[0] ,ac = nodes[1] ,af = nodes[2] ,ah = nodes[3] ,aq = nodes[4] ,ar = nodes[5] ,as = nodes[6]  ; /* nodes.push(); */ links.push( {source: aq , target: ar },{source: aq , target: as },{source: ar , target: as },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: as },{source: af , target: aq },{source: af , target: ar },{source: af , target: ah },{source: af , target: as },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt.';
}, 320000);
