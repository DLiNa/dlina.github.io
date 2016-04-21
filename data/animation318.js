setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'die_diener'},ab = {id: 'ab', name:'nureddin'},ac = {id: 'ac', name:'chor'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'bostana'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'abul'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'die_diener'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab ae */ var  ab = {id: 'ab', name:'nureddin'},ae = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ab ae */ var  aa = {id: 'aa', name:'die_diener'},ab = {id: 'ab', name:'nureddin'},ae = nodes[0]  ; nodes.push( aa,ab ); links.push( {source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ab ae */ var  aa = nodes[0] ,ab = nodes[1] ,ae = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ab','aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ad af ag ah ai aj */ var  ad = {id: 'ad', name:'bostana'},af = {id: 'af', name:'margiana'},ag = {id: 'ag', name:'kadi'},ah = {id: 'ah', name:'muezzin'},ai = {id: 'ai', name:'der_kadi'},aj = {id: 'aj', name:'stimme_des_sklaven'} ; nodes.push( ad,af,ag,ah,ai,aj ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: aj },{source: af , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag','ah','aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ad ae af */ var  ab = {id: 'ab', name:'nureddin'},ad = nodes[0] ,ae = {id: 'ae', name:'abul'},af = nodes[1]  ; nodes.push( ab,ae ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ae , target: af },{source: ad , target: af },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ae af ak */ var  ab = nodes[0] ,ae = {id: 'ae', name:'abul'},af = {id: 'af', name:'margiana'},ak = {id: 'ak', name:'stimme_eines_sklaven'} ; nodes.push( ae,af,ak ); links.push( {source: ab , target: ae },{source: ab , target: af },{source: ab , target: ak },{source: ae , target: af },{source: ae , target: ak },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab ad ae af aj al */ var  ab = nodes[0] ,ad = {id: 'ad', name:'bostana'},ae = nodes[1] ,af = nodes[2] ,aj = {id: 'aj', name:'stimme_des_sklaven'},al = {id: 'al', name:'stimmen'} ; nodes.push( ad,aj,al ); links.push( {source: ad , target: aj },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: al },{source: aj , target: al },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: al },{source: af , target: aj },{source: af , target: al },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aj','af','ab','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = {id: 'ag', name:'kadi'} ; nodes.push( ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ae ag ai am an ao */ var  aa = {id: 'aa', name:'die_diener'},ae = nodes[0] ,ag = nodes[1] ,ai = {id: 'ai', name:'der_kadi'},am = {id: 'am', name:'freunde_des_kadi'},an = {id: 'an', name:'klagefrauen'},ao = {id: 'ao', name:'bewohner_bagdads'} ; nodes.push( aa,ai,am,an,ao ); links.push( {source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ai },{source: ae , target: ag },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ai },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ai },{source: am , target: an },{source: am , target: ao },{source: an , target: ao },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa','am','an','ao','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ae ag ap aq */ var  ac = {id: 'ac', name:'chor'},ae = nodes[0] ,ag = nodes[1] ,ap = {id: 'ap', name:'vier_bewaffnete'},aq = {id: 'aq', name:'kalif'} ; nodes.push( ac,ap,aq ); links.push( {source: ap , target: aq },{source: ap , target: aq },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: aq },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: aq },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ag },{source: ac , target: aq },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ac ad ae af ag aq */ var  ab = {id: 'ab', name:'nureddin'},ac = nodes[0] ,ad = {id: 'ad', name:'bostana'},ae = nodes[1] ,af = {id: 'af', name:'margiana'},ag = nodes[2] ,aq = nodes[3]  ; nodes.push( ab,ad,af ); links.push( {source: ag , target: aq },{source: af , target: ag },{source: af , target: aq },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: aq },{source: ac , target: ad },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: aq },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: aq },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: aq },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 95000);
