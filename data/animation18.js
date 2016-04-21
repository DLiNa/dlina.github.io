setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'lieschen'},ab = {id: 'ab', name:'gretchen'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'capitain'},ad = {id: 'ad', name:'miller'} ; nodes.push( ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ad ae */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'buchdrucker'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = {id: 'af', name:'der_cornet'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa af */ var  aa = {id: 'aa', name:'lieschen'},af = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'gretchen'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'weigenand'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'miller'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'lieschen'},ag = {id: 'ag', name:'weigenand'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'capitain'},ad = {id: 'ad', name:'miller'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ac ah ai */ var  aa = {id: 'aa', name:'lieschen'},ac = nodes[0] ,ah = {id: 'ah', name:'eppelmeier'},ai = {id: 'ai', name:'dappelius'} ; nodes.push( aa,ah,ai ); links.push( {source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ai },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac ad ah ai aj ak */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'miller'},ah = nodes[2] ,ai = nodes[3] ,aj = {id: 'aj', name:'knorzheimer'},ak = {id: 'ak', name:'schmuttler'} ; nodes.push( ad,aj,ak ); links.push( {source: aj , target: ak },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ai },{source: ai , target: aj },{source: ai , target: ak },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac ad ah ai aj ak al am an */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ah = nodes[3] ,ai = nodes[4] ,aj = nodes[5] ,ak = nodes[6] ,al = {id: 'al', name:'leimpfann'},am = {id: 'am', name:'mehrere_andere'},an = {id: 'an', name:'eine_stimme'} ; nodes.push( al,am,an ); links.push( {source: al , target: am },{source: al , target: an },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: an },{source: am , target: an },{source: aa , target: al },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: an },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: an },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: an },{source: ad , target: al },{source: ad , target: am },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','am','ah','ai','ak','aj','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ac ad ao ap */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ao = {id: 'ao', name:'pompier'},ap = {id: 'ap', name:'tambour'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: ad },{source: ad , target: ao },{source: ad , target: ap },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: ap },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ao','ac','ap','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'gretchen'},af = {id: 'af', name:'der_cornet'} ; nodes.push( ab,af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'miller'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'capitain'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'miller'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'lieschen'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'knorzheimer'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ac aj */ var  aa = nodes[0] ,ac = {id: 'ac', name:'capitain'},aj = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: aj },{source: aa , target: ac },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'weigenand'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'lieschen'},ag = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ac ag */ var  aa = nodes[0] ,ac = {id: 'ac', name:'capitain'},ag = nodes[1]  ; nodes.push( ac ); links.push( {source: aa , target: ag },{source: aa , target: ac },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ac ad ag */ var  ac = nodes[0] ,ad = {id: 'ad', name:'miller'},ag = nodes[1]  ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ab ac ad ag ah */ var  aa = {id: 'aa', name:'lieschen'},ab = {id: 'ab', name:'gretchen'},ac = nodes[0] ,ad = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'eppelmeier'} ; nodes.push( aa,ab,ah ); links.push( {source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ad },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ad },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ad },{source: ag , target: ah },{source: ad , target: ah },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ab ac ad ag ah aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ag = nodes[4] ,ah = nodes[5] ,aj = {id: 'aj', name:'knorzheimer'} ; nodes.push( aj ); links.push( {source: ac , target: aj },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ah },{source: ag , target: aj },{source: ag , target: ah },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ah },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ah },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '15. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 155000);
