setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'herr_oronte'},ab = {id: 'ab', name:'jungfer_ohldin'},ac = {id: 'ac', name:'frau_oronte'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'lisette'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'lelio'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ae af */ var  ad = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'peter'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ae ag */ var  ad = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'clitander'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ad , target: ag },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab ag */ var  ab = {id: 'ab', name:'jungfer_ohldin'},ag = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ad ah ai */ var  ab = nodes[0] ,ad = {id: 'ad', name:'lisette'},ah = {id: 'ah', name:'herr_kräusel'},ai = {id: 'ai', name:'der_schneider'} ; nodes.push( ad,ah,ai ); links.push( {source: ad , target: ah },{source: ad , target: ai },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ad ah */ var  ab = nodes[0] ,ad = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ad },{source: ab , target: ah },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'peter'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ad af ah */ var  ad = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'herr_kräusel'} ; nodes.push( ah ); links.push( {source: ad , target: ah },{source: ad , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ae ah */ var  ab = {id: 'ab', name:'jungfer_ohldin'},ae = {id: 'ae', name:'lelio'},ah = nodes[0]  ; nodes.push( ab,ae ); links.push( {source: ab , target: ah },{source: ab , target: ae },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ad ah */ var  ab = nodes[0] ,ad = {id: 'ad', name:'lisette'},ah = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ah },{source: ab , target: ad },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ad ae af ah */ var  ab = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'lelio'},af = {id: 'af', name:'peter'},ah = nodes[2]  ; nodes.push( ae,af ); links.push( {source: af , target: ah },{source: ae , target: af },{source: ae , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ah },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ad ae af aj */ var  ab = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = nodes[3] ,aj = {id: 'aj', name:'herr_rehfuss'} ; nodes.push( aj ); links.push( {source: ad , target: aj },{source: ad , target: af },{source: ad , target: ae },{source: af , target: aj },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ae , target: aj },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aj','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ad af ah */ var  ab = nodes[0] ,ad = nodes[1] ,af = nodes[2] ,ah = {id: 'ah', name:'herr_kräusel'} ; nodes.push( ah ); links.push( {source: af , target: ah },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ah },{source: ad , target: af },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab ad ae af ah ak */ var  aa = {id: 'aa', name:'herr_oronte'},ab = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'lelio'},af = nodes[2] ,ah = nodes[3] ,ak = {id: 'ak', name:'von_schlag'} ; nodes.push( aa,ae,ak ); links.push( {source: ae , target: ak },{source: ae , target: af },{source: ae , target: ah },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: af },{source: ad , target: ah },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: af },{source: ab , target: ah },{source: af , target: ak },{source: af , target: ah },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ab ac ad ae ak */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'frau_oronte'},ad = nodes[2] ,ae = nodes[3] ,ak = nodes[4]  ; nodes.push( ac ); links.push( {source: ae , target: ak },{source: aa , target: ae },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: ad },{source: ab , target: ae },{source: ab , target: ak },{source: ab , target: ac },{source: ab , target: ad },{source: ad , target: ae },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ab ag ak */ var  aa = nodes[0] ,ab = nodes[1] ,ag = {id: 'ag', name:'clitander'},ak = nodes[2]  ; nodes.push( ag ); links.push( {source: ag , target: ak },{source: ab , target: ag },{source: ab , target: ak },{source: aa , target: ag },{source: aa , target: ak },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 110000);
