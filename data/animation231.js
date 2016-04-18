setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'rübezahl'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = {id: 'ab', name:'raxer'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ac = {id: 'ac', name:'rüffel'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = nodes[0],ad = {id: 'ad', name:'quiwi'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],ae = {id: 'ae', name:'erste_fee'},af = {id: 'af', name:'die_andern_feen'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'rübezahl'},ad = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = {id: 'ab', name:'raxer'},ad = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = {id: 'ab', name:'raxer'},ac = {id: 'ac', name:'rüffel'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'quiwi'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ac = nodes[0],ad = nodes[1],ag = {id: 'ag', name:'von_schmalz'} ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ac , target: ad },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ac = nodes[0],ad = nodes[1],ag = nodes[2],ah = {id: 'ah', name:'paschke'} ; nodes.push( ah ); links.push( {source: ad , target: ag },{source: ad , target: ah },{source: ag , target: ah },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = {id: 'ab', name:'raxer'},ac = {id: 'ac', name:'rüffel'},ad = nodes[0],ai = {id: 'ai', name:'betty'} ; nodes.push( ab,ac,ai ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ai },{source: ad , target: ai },{source: ac , target: ad },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = nodes[0],ad = nodes[1],ai = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: ai },{source: ac , target: ad },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = {id: 'aa', name:'rübezahl'},ac = nodes[0],ah = {id: 'ah', name:'paschke'},ai = nodes[1] ; nodes.push( aa,ah ); links.push( {source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ac },{source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aa','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ab = {id: 'ab', name:'raxer'},ac = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = {id: 'aa', name:'rübezahl'},ad = {id: 'ad', name:'quiwi'} ; nodes.push( aa,ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = nodes[0],ad = nodes[1],ag = {id: 'ag', name:'von_schmalz'} ; nodes.push( ag ); links.push( {source: aa , target: ag },{source: aa , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ag = nodes[0],ah = {id: 'ah', name:'paschke'},ai = {id: 'ai', name:'betty'} ; nodes.push( ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = {id: 'aa', name:'rübezahl'},ab = {id: 'ab', name:'raxer'},ag = nodes[0],ai = nodes[1] ; nodes.push( aa,ab ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ag },{source: ab , target: ai },{source: ab , target: ag },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = nodes[0],ab = {id: 'ab', name:'raxer'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = nodes[0],ah = {id: 'ah', name:'paschke'} ; nodes.push( ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = nodes[0],ab = {id: 'ab', name:'raxer'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ai = {id: 'ai', name:'betty'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = {id: 'aa', name:'rübezahl'},ad = {id: 'ad', name:'quiwi'},ai = nodes[0] ; nodes.push( aa,ad ); links.push( {source: ad , target: ai },{source: aa , target: ad },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ae = {id: 'ae', name:'erste_fee'},af = {id: 'af', name:'die_andern_feen'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ab = {id: 'ab', name:'raxer'},ad = {id: 'ad', name:'quiwi'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = {id: 'aa', name:'rübezahl'},aj = {id: 'aj', name:'ein_zwerg'},ak = {id: 'ak', name:'die_zwerge'} ; nodes.push( aa,aj,ak ); links.push( {source: aa , target: aj },{source: aa , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = nodes[0],ac = {id: 'ac', name:'rüffel'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ag = {id: 'ag', name:'von_schmalz'},ah = {id: 'ah', name:'paschke'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ag = nodes[0],ah = nodes[1],ai = {id: 'ai', name:'betty'} ; nodes.push( ai ); links.push( {source: ah , target: ai },{source: ag , target: ai },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = {id: 'aa', name:'rübezahl'},ab = {id: 'ab', name:'raxer'},ag = nodes[0],ah = nodes[1],ai = nodes[2] ; nodes.push( aa,ab ); links.push( {source: ab , target: ai },{source: ab , target: ag },{source: ab , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ab','ai','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = nodes[0],ac = {id: 'ac', name:'rüffel'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'quiwi'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ab = {id: 'ab', name:'raxer'},ad = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  aa = {id: 'aa', name:'rübezahl'},ab = nodes[0],ac = {id: 'ac', name:'rüffel'},ad = nodes[1] ; nodes.push( aa,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  aa = {id: 'aa', name:'rübezahl'},ab = {id: 'ab', name:'raxer'},ac = {id: 'ac', name:'rüffel'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  aa = nodes[0],ab = nodes[1],al = {id: 'al', name:'der_kleine_schornsteinfeger'},am = {id: 'am', name:'der_alte_schornsteinfeger'} ; nodes.push( al,am ); links.push( {source: al , target: am },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ab },{source: ab , target: al },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'rüffel'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  aa = nodes[0],ac = nodes[1],an = {id: 'an', name:'milchmann'} ; nodes.push( an ); links.push( {source: ac , target: an },{source: aa , target: an },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  aa = nodes[0],ab = {id: 'ab', name:'raxer'},ac = nodes[1],ao = {id: 'ao', name:'erster_tourist'} ; nodes.push( ab,ao ); links.push( {source: aa , target: ab },{source: aa , target: ao },{source: aa , target: ac },{source: ab , target: ao },{source: ab , target: ac },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  aa = nodes[0],ac = nodes[1],ao = nodes[2],ap = {id: 'ap', name:'zweiter_tourist'},aq = {id: 'aq', name:'dritter_tourist'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ao },{source: aa , target: ap },{source: aa , target: ac },{source: aa , target: aq },{source: aa , target: ao },{source: ao , target: ap },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ap','ac','aq','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  aa = nodes[0],al = {id: 'al', name:'der_kleine_schornsteinfeger'} ; nodes.push( al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  al = nodes[0],am = {id: 'am', name:'der_alte_schornsteinfeger'} ; nodes.push( am ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  aa = {id: 'aa', name:'rübezahl'},ab = {id: 'ab', name:'raxer'},ac = {id: 'ac', name:'rüffel'},ao = {id: 'ao', name:'erster_tourist'},ap = {id: 'ap', name:'zweiter_tourist'},aq = {id: 'aq', name:'dritter_tourist'} ; nodes.push( aa,ab,ac,ao,ap,aq ); links.push( {source: ao , target: aq },{source: ao , target: ap },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: aq },{source: aa , target: ap },{source: ac , target: ao },{source: ac , target: aq },{source: ac , target: ap },{source: ab , target: ao },{source: ab , target: ac },{source: ab , target: aq },{source: ab , target: ap },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ao','ac','ab','aq','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  aa = nodes[0],al = {id: 'al', name:'der_kleine_schornsteinfeger'} ; nodes.push( al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  aa = nodes[0],ab = {id: 'ab', name:'raxer'},ac = {id: 'ac', name:'rüffel'},aq = {id: 'aq', name:'dritter_tourist'} ; nodes.push( ab,ac,aq ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: aq },{source: ab , target: ac },{source: ab , target: aq },{source: ac , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'aa','ab','ac','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  ad = {id: 'ad', name:'quiwi'},aj = {id: 'aj', name:'ein_zwerg'} ; nodes.push( ad,aj ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  aa = {id: 'aa', name:'rübezahl'},ab = {id: 'ab', name:'raxer'},ac = {id: 'ac', name:'rüffel'},ad = nodes[0] ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ad','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  aa = nodes[0],ag = {id: 'ag', name:'von_schmalz'},ah = {id: 'ah', name:'paschke'},ai = {id: 'ai', name:'betty'} ; nodes.push( ag,ah,ai ); links.push( {source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  aa = nodes[0],ac = {id: 'ac', name:'rüffel'},ad = {id: 'ad', name:'quiwi'},ah = nodes[1] ; nodes.push( ac,ad ); links.push( {source: ad , target: ah },{source: ac , target: ad },{source: ac , target: ah },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  aa = nodes[0],ab = {id: 'ab', name:'raxer'},ac = nodes[1],ad = nodes[2],ai = {id: 'ai', name:'betty'} ; nodes.push( ab,ai ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ai },{source: ac , target: ad },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3] ; /* nodes.push(); */ links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ab','ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64'); var  aa = nodes[0],ac = {id: 'ac', name:'rüffel'},ad = {id: 'ad', name:'quiwi'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65'); var  aa = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66'); var  aa = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 325000);
