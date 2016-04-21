setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'dörthe'},ab = {id: 'ab', name:'ehrenthal'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = {id: 'ac', name:'gustav'},ad = {id: 'ad', name:'amélie'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac ad ae af */ var  ab = {id: 'ab', name:'ehrenthal'},ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'richard'},af = {id: 'af', name:'philippine'} ; nodes.push( ab,ae,af ); links.push( {source: ae , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ad ae */ var  aa = {id: 'aa', name:'dörthe'},ad = nodes[0] ,ae = nodes[1]  ; nodes.push( aa ); links.push( {source: ad , target: ae },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ae ag */ var  ad = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'lämmlein'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ad , target: ag },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* af ag ah */ var  af = {id: 'af', name:'philippine'},ag = nodes[0] ,ah = {id: 'ah', name:'august'} ; nodes.push( af,ah ); links.push( {source: ag , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ai */ var  aa = {id: 'aa', name:'dörthe'},ai = {id: 'ai', name:'franz'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ac ah ai aj ak */ var  ab = {id: 'ab', name:'ehrenthal'},ac = {id: 'ac', name:'gustav'},ah = {id: 'ah', name:'august'},ai = nodes[0] ,aj = {id: 'aj', name:'nante'},ak = {id: 'ak', name:'mine'} ; nodes.push( ab,ac,ah,aj,ak ); links.push( {source: ab , target: ac },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ak },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ab','ac','ah','aj','ai','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ad af */ var  aa = {id: 'aa', name:'dörthe'},ad = {id: 'ad', name:'amélie'},af = {id: 'af', name:'philippine'} ; nodes.push( aa,ad,af ); links.push( {source: ad , target: af },{source: aa , target: af },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ad ae af ag ah */ var  aa = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'richard'},af = nodes[2] ,ag = {id: 'ag', name:'lämmlein'},ah = {id: 'ah', name:'august'} ; nodes.push( ae,ag,ah ); links.push( {source: ad , target: ah },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: af , target: ah },{source: af , target: ag },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: ag , target: ah },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ah','aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ad ae af */ var  ad = nodes[0] ,ae = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab ac ad ae af ah */ var  aa = {id: 'aa', name:'dörthe'},ab = {id: 'ab', name:'ehrenthal'},ac = {id: 'ac', name:'gustav'},ad = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ah = {id: 'ah', name:'august'} ; nodes.push( aa,ab,ac,ah ); links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ah },{source: af , target: ah },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab','ad','ae','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* af ah */ var  af = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'dörthe'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* af ah aj */ var  af = {id: 'af', name:'philippine'},ah = {id: 'ah', name:'august'},aj = {id: 'aj', name:'nante'} ; nodes.push( af,ah,aj ); links.push( {source: ah , target: aj },{source: af , target: ah },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa af ah */ var  aa = {id: 'aa', name:'dörthe'},af = nodes[0] ,ah = nodes[1]  ; nodes.push( aa ); links.push( {source: af , target: ah },{source: aa , target: ah },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa aj ak */ var  aa = nodes[0] ,aj = {id: 'aj', name:'nante'},ak = {id: 'ak', name:'mine'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: aa , target: ak },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ak','aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'franz'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'amélie'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'richard'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae ai */ var  ae = nodes[0] ,ai = {id: 'ai', name:'franz'} ; nodes.push( ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ac ae al */ var  ab = {id: 'ab', name:'ehrenthal'},ac = {id: 'ac', name:'gustav'},ae = nodes[0] ,al = {id: 'al', name:'geschrei'} ; nodes.push( ab,ac,al ); links.push( {source: ae , target: al },{source: ac , target: ae },{source: ac , target: al },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae','ac','ab','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'nante'},ak = {id: 'ak', name:'mine'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ah aj */ var  ah = {id: 'ah', name:'august'},aj = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa am an ao */ var  aa = {id: 'aa', name:'dörthe'},am = {id: 'am', name:'kind'},an = {id: 'an', name:'gefreiter'},ao = {id: 'ao', name:'gemeiner'} ; nodes.push( aa,am,an,ao ); links.push( {source: aa , target: am },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: am , target: an },{source: am , target: ao },{source: am , target: an },{source: am , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa an ao */ var  aa = nodes[0] ,an = nodes[1] ,ao = nodes[2]  ; /* nodes.push(); */ links.push( {source: an , target: ao },{source: aa , target: an },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'an','aa','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ag ak */ var  ag = {id: 'ag', name:'lämmlein'},ak = {id: 'ak', name:'mine'} ; nodes.push( ag,ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab ap */ var  ab = {id: 'ab', name:'ehrenthal'},ap = {id: 'ap', name:'commissair'} ; nodes.push( ab,ap ); links.push( {source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ab ap */ var  ab = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ab ac am ap */ var  aa = {id: 'aa', name:'dörthe'},ab = nodes[0] ,ac = {id: 'ac', name:'gustav'},am = {id: 'am', name:'kind'},ap = nodes[1]  ; nodes.push( aa,ac,am ); links.push( {source: ab , target: ap },{source: ab , target: ac },{source: ab , target: am },{source: ab , target: am },{source: ac , target: ap },{source: ac , target: am },{source: ac , target: am },{source: am , target: ap },{source: aa , target: ap },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: am },{source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'am','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ab ac ae ap */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'richard'},ap = nodes[2]  ; nodes.push( ae ); links.push( {source: ae , target: ap },{source: ab , target: ae },{source: ab , target: ap },{source: ab , target: ac },{source: ac , target: ae },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ae af ap */ var  ab = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'philippine'},ap = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: ap },{source: ab , target: ap },{source: ab , target: af },{source: ab , target: ae },{source: ae , target: ap },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ab ap ar */ var  ab = nodes[0] ,ap = nodes[1] ,ar = {id: 'ar', name:'beamter'} ; nodes.push( ar ); links.push( {source: ap , target: ar },{source: ab , target: ar },{source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab ae ag ah aj ak ap ar */ var  ab = nodes[0] ,ae = {id: 'ae', name:'richard'},ag = {id: 'ag', name:'lämmlein'},ah = {id: 'ah', name:'august'},aj = {id: 'aj', name:'nante'},ak = {id: 'ak', name:'mine'},ap = nodes[1] ,ar = nodes[2]  ; nodes.push( ae,ag,ah,aj,ak ); links.push( {source: aj , target: ap },{source: aj , target: ar },{source: aj , target: ak },{source: ap , target: ar },{source: ah , target: aj },{source: ah , target: ap },{source: ah , target: ar },{source: ah , target: ak },{source: ak , target: ap },{source: ak , target: ar },{source: ab , target: aj },{source: ab , target: ap },{source: ab , target: ah },{source: ab , target: ar },{source: ab , target: ak },{source: ab , target: ag },{source: ab , target: ae },{source: ag , target: aj },{source: ag , target: ap },{source: ag , target: ah },{source: ag , target: ar },{source: ag , target: ak },{source: ae , target: aj },{source: ae , target: ap },{source: ae , target: ah },{source: ae , target: ar },{source: ae , target: ak },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aj','ah','ar','ak','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ab ae ai ap */ var  ab = nodes[0] ,ae = nodes[1] ,ai = {id: 'ai', name:'franz'},ap = nodes[2]  ; nodes.push( ai ); links.push( {source: ai , target: ap },{source: ab , target: ai },{source: ab , target: ap },{source: ab , target: ae },{source: ae , target: ai },{source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ab ae ai ap */ var  aa = {id: 'aa', name:'dörthe'},ab = nodes[0] ,ae = nodes[1] ,ai = nodes[2] ,ap = nodes[3]  ; nodes.push( aa ); links.push( {source: ai , target: ap },{source: aa , target: ai },{source: aa , target: ap },{source: aa , target: ab },{source: aa , target: ae },{source: ab , target: ai },{source: ab , target: ap },{source: ab , target: ae },{source: ae , target: ai },{source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ac ae ai ap as */ var  aa = nodes[0] ,ac = {id: 'ac', name:'gustav'},ae = nodes[1] ,ai = nodes[2] ,ap = nodes[3] ,as = {id: 'as', name:'der_schliesser'} ; nodes.push( ac,as ); links.push( {source: ac , target: ai },{source: ac , target: ap },{source: ac , target: as },{source: ac , target: ae },{source: ai , target: ap },{source: ai , target: as },{source: ap , target: as },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ap },{source: aa , target: as },{source: aa , target: ae },{source: ae , target: ai },{source: ae , target: ap },{source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
}, 190000);
