setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'lidi'},ab = {id: 'ab', name:'fee'},ac = {id: 'ac', name:'alle_nymphen'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ad = {id: 'ad', name:'quecksilber'},ae = {id: 'ae', name:'stimme_des_hornes'},af = {id: 'af', name:'stimme_der_schärpe'},ag = {id: 'ag', name:'stimme_des_stabes'},ah = {id: 'ah', name:'die_genien'} ; nodes.push( ad,ae,af,ag,ah ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','af','ag','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = nodes[0],ai = {id: 'ai', name:'alle_matrosen'},ai = {id: 'ai', name:'alle_matrosen'},aj = {id: 'aj', name:'erster_matrose'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ai','aj','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ak = {id: 'ak', name:'tutu'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ak = nodes[0],al = {id: 'al', name:'linda'} ; nodes.push( al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ak = nodes[0],am = {id: 'am', name:'zoraide'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ak = nodes[0],am = nodes[1],an = {id: 'an', name:'hassar'} ; nodes.push( an ); links.push( {source: am , target: an },{source: ak , target: an },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'an','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  al = {id: 'al', name:'linda'},am = nodes[0] ; nodes.push( al ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ao = {id: 'ao', name:'bediente'},ap = {id: 'ap', name:'volk'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ak = {id: 'ak', name:'tutu'},am = {id: 'am', name:'zoraide'},an = {id: 'an', name:'hassar'},ap = nodes[0],aq = {id: 'aq', name:'quecksilbers_diener'} ; nodes.push( ak,am,an,aq ); links.push( {source: ak , target: an },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: aq },{source: an , target: ap },{source: an , target: aq },{source: am , target: an },{source: am , target: ap },{source: am , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ad = {id: 'ad', name:'quecksilber'},ak = nodes[0],am = nodes[1],an = nodes[2] ; nodes.push( ad ); links.push( {source: ad , target: am },{source: ad , target: ak },{source: ad , target: an },{source: am , target: an },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ak','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ad = nodes[0],am = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Aufritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ad = nodes[0],al = {id: 'al', name:'linda'},am = nodes[1] ; nodes.push( al ); links.push( {source: al , target: am },{source: ad , target: al },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ad = nodes[0],ar = {id: 'ar', name:'wache'},ar = {id: 'ar', name:'wache'} ; nodes.push( ar ); links.push( {source: ad , target: ar },{source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = nodes[0],as = {id: 'as', name:'anführer'} ; nodes.push( as ); links.push( {source: ad , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = nodes[0],an = {id: 'an', name:'hassar'} ; nodes.push( an ); links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ad = nodes[0],ak = {id: 'ak', name:'tutu'},at = {id: 'at', name:'erster_husar'} ; nodes.push( ak,at ); links.push( {source: ak , target: at },{source: ad , target: at },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ad = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ak = nodes[0],am = {id: 'am', name:'zoraide'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ad = {id: 'ad', name:'quecksilber'},am = nodes[0],at = {id: 'at', name:'erster_husar'} ; nodes.push( ad,at ); links.push( {source: ad , target: am },{source: ad , target: at },{source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = nodes[0],am = nodes[1],au = {id: 'au', name:'die_amazonen'} ; nodes.push( au ); links.push( {source: am , target: au },{source: ad , target: am },{source: ad , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'am','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = nodes[0],al = {id: 'al', name:'linda'} ; nodes.push( al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ad = nodes[0],al = {id: 'al', name:'linda'},av = {id: 'av', name:'chor'} ; nodes.push( al,av ); links.push( {source: al , target: av },{source: ad , target: al },{source: ad , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ad = nodes[0],al = nodes[1],an = {id: 'an', name:'hassar'} ; nodes.push( an ); links.push( {source: al , target: an },{source: ad , target: al },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  am = {id: 'am', name:'zoraide'},an = nodes[0] ; nodes.push( am ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  am = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ad = {id: 'ad', name:'quecksilber'},am = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ad = nodes[0],am = nodes[1],an = {id: 'an', name:'hassar'},ar = {id: 'ar', name:'wache'} ; nodes.push( an,ar ); links.push( {source: am , target: an },{source: am , target: ar },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ar },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ad','an','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ak = {id: 'ak', name:'tutu'},am = nodes[0] ; nodes.push( ak ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ad = {id: 'ad', name:'quecksilber'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ad = nodes[0],aw = {id: 'aw', name:'zadi'} ; nodes.push( aw ); links.push( {source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ad = nodes[0],al = {id: 'al', name:'linda'},aw = nodes[1] ; nodes.push( al ); links.push( {source: al , target: aw },{source: ad , target: al },{source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ad = nodes[0],al = nodes[1],aw = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: aw },{source: ad , target: al },{source: al , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aw','ad','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ak = {id: 'ak', name:'tutu'},am = {id: 'am', name:'zoraide'},an = {id: 'an', name:'hassar'},ax = {id: 'ax', name:'sklave'} ; nodes.push( ak,am,an,ax ); links.push( {source: am , target: an },{source: am , target: ax },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ax },{source: an , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'am','ak','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  al = {id: 'al', name:'linda'},an = nodes[0] ; nodes.push( al ); links.push( {source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'al','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  am = {id: 'am', name:'zoraide'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ak = {id: 'ak', name:'tutu'},am = nodes[0] ; nodes.push( ak ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ak = nodes[0],al = {id: 'al', name:'linda'},am = nodes[1],an = {id: 'an', name:'hassar'} ; nodes.push( al,an ); links.push( {source: al , target: am },{source: al , target: an },{source: am , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'al','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ak = nodes[0],am = nodes[1],ay = {id: 'ay', name:'leibarzt'} ; nodes.push( ay ); links.push( {source: ak , target: am },{source: ak , target: ay },{source: am , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ak = nodes[0],am = nodes[1],an = {id: 'an', name:'hassar'} ; nodes.push( an ); links.push( {source: am , target: an },{source: ak , target: an },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigster Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ad = {id: 'ad', name:'quecksilber'},ak = nodes[0],al = {id: 'al', name:'linda'},am = nodes[1],an = nodes[2] ; nodes.push( ad,al ); links.push( {source: ad , target: ak },{source: ad , target: am },{source: ad , target: an },{source: ad , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: al },{source: am , target: an },{source: al , target: am },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigster Auftritt';
}, 205000);
