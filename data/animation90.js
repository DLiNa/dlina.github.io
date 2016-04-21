setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'stimmen_der_soldaten'},ab = {id: 'ab', name:'erster_diener'},ac = {id: 'ac', name:'detlev'},ad = {id: 'ad', name:'dritter_diener'},ae = {id: 'ae', name:'vierter_diener'},af = {id: 'af', name:'zweiter_diener'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','af','ad','ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'struensee'},ah = {id: 'ah', name:'köller'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ag ai */ var  ag = nodes[0] ,ai = {id: 'ai', name:'page'} ; nodes.push( ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'köller'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ah aj ak */ var  ah = nodes[0] ,aj = {id: 'aj', name:'diener'},ak = {id: 'ak', name:'ranzau'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: ah , target: aj },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aj ak */ var  aj = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ah ak */ var  ah = {id: 'ah', name:'köller'},ak = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'ranzau'},al = {id: 'al', name:'ein_kammerdiener'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'struensee'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ag ak */ var  ag = nodes[0] ,ak = {id: 'ak', name:'ranzau'} ; nodes.push( ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ag am */ var  ag = nodes[0] ,am = {id: 'am', name:'pfarrer'} ; nodes.push( am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* an ao ap */ var  an = {id: 'an', name:'mathilde'},ao = {id: 'ao', name:'gräfin_uhlfeld'},ap = {id: 'ap', name:'gräfin_reez'} ; nodes.push( an,ao,ap ); links.push( {source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ag an ao aq */ var  ag = {id: 'ag', name:'struensee'},an = nodes[0] ,ao = nodes[1] ,aq = {id: 'aq', name:'brandt'} ; nodes.push( ag,aq ); links.push( {source: an , target: ao },{source: an , target: aq },{source: ao , target: aq },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ag an aq */ var  ag = nodes[0] ,an = nodes[1] ,aq = nodes[2]  ; /* nodes.push(); */ links.push( {source: an , target: aq },{source: ag , target: an },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ag an ao aq */ var  ag = nodes[0] ,an = nodes[1] ,ao = {id: 'ao', name:'gräfin_uhlfeld'},aq = nodes[2]  ; nodes.push( ao ); links.push( {source: an , target: ao },{source: an , target: aq },{source: ao , target: aq },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ao','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ag an */ var  ag = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ag an ar */ var  ag = nodes[0] ,an = nodes[1] ,ar = {id: 'ar', name:'hauptmann'} ; nodes.push( ar ); links.push( {source: ag , target: ar },{source: ag , target: an },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ar','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ag ao ap as */ var  ag = nodes[0] ,ao = {id: 'ao', name:'gräfin_uhlfeld'},ap = {id: 'ap', name:'gräfin_reez'},as = {id: 'as', name:'damen'} ; nodes.push( ao,ap,as ); links.push( {source: ao , target: as },{source: ao , target: ap },{source: ap , target: as },{source: ag , target: as },{source: ag , target: ao },{source: ag , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'as','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ag an */ var  ag = nodes[0] ,an = {id: 'an', name:'mathilde'} ; nodes.push( an ); links.push( {source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ag an ao as */ var  ag = nodes[0] ,an = nodes[1] ,ao = {id: 'ao', name:'gräfin_uhlfeld'},as = {id: 'as', name:'damen'} ; nodes.push( ao,as ); links.push( {source: an , target: ao },{source: an , target: as },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: as },{source: ao , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ao','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ag an at */ var  ag = nodes[0] ,an = nodes[1] ,at = {id: 'at', name:'keith'} ; nodes.push( at ); links.push( {source: ag , target: at },{source: ag , target: an },{source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ag an ar at */ var  ag = nodes[0] ,an = nodes[1] ,ar = {id: 'ar', name:'hauptmann'},at = nodes[2]  ; nodes.push( ar ); links.push( {source: ag , target: an },{source: ag , target: ar },{source: ag , target: at },{source: an , target: ar },{source: an , target: at },{source: ar , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ag','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* an at */ var  an = nodes[0] ,at = nodes[1]  ; /* nodes.push(); */ links.push( {source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* an ao */ var  an = nodes[0] ,ao = {id: 'ao', name:'gräfin_uhlfeld'} ; nodes.push( ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ag an at */ var  ag = {id: 'ag', name:'struensee'},an = nodes[0] ,at = {id: 'at', name:'keith'} ; nodes.push( ag,at ); links.push( {source: an , target: at },{source: ag , target: an },{source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ag an */ var  ag = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* an */ var  an = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* au av */ var  au = {id: 'au', name:'schack'},av = {id: 'av', name:'juliane'} ; nodes.push( au,av ); links.push( {source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aj ak al av aw ax */ var  aj = {id: 'aj', name:'diener'},ak = {id: 'ak', name:'ranzau'},al = {id: 'al', name:'ein_kammerdiener'},av = nodes[0] ,aw = {id: 'aw', name:'guldberg'},ax = {id: 'ax', name:'kammerdiener'} ; nodes.push( aj,ak,al,aw,ax ); links.push( {source: av , target: aw },{source: av , target: ax },{source: aw , target: ax },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: al },{source: ak , target: ax },{source: al , target: av },{source: al , target: aw },{source: al , target: ax },{source: aj , target: av },{source: aj , target: aw },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Scene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'al','ax','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ah ai ak av aw */ var  ah = {id: 'ah', name:'köller'},ai = {id: 'ai', name:'page'},ak = nodes[0] ,av = nodes[1] ,aw = nodes[2]  ; nodes.push( ah,ai ); links.push( {source: ai , target: av },{source: ai , target: ak },{source: ai , target: aw },{source: av , target: aw },{source: ak , target: av },{source: ak , target: aw },{source: ah , target: ai },{source: ah , target: av },{source: ah , target: ak },{source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Scene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ai','av','ak','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'struensee'},ah = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ag aq */ var  ag = nodes[0] ,aq = {id: 'aq', name:'brandt'} ; nodes.push( aq ); links.push( {source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'detlev'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ab ad af aj ay az */ var  ab = {id: 'ab', name:'erster_diener'},ad = {id: 'ad', name:'dritter_diener'},af = {id: 'af', name:'zweiter_diener'},aj = {id: 'aj', name:'diener'},ay = {id: 'ay', name:'haushofmeister'},az = {id: 'az', name:'ein_diener'} ; nodes.push( ab,ad,af,aj,ay,az ); links.push( {source: ay , target: az },{source: aj , target: ay },{source: aj , target: az },{source: af , target: ay },{source: af , target: az },{source: af , target: aj },{source: ad , target: ay },{source: ad , target: az },{source: ad , target: aj },{source: ad , target: af },{source: ab , target: ay },{source: ab , target: az },{source: ab , target: aj },{source: ab , target: af },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ay','az','aj','af','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* an at ba */ var  an = {id: 'an', name:'mathilde'},at = {id: 'at', name:'keith'},ba = {id: 'ba', name:'fürst'} ; nodes.push( an,at,ba ); links.push( {source: an , target: ba },{source: an , target: at },{source: at , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ba','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* an ao aq av */ var  an = nodes[0] ,ao = {id: 'ao', name:'gräfin_uhlfeld'},aq = {id: 'aq', name:'brandt'},av = {id: 'av', name:'juliane'} ; nodes.push( ao,aq,av ); links.push( {source: an , target: av },{source: an , target: aq },{source: an , target: ao },{source: aq , target: av },{source: ao , target: av },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'av','an','aq','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ah aw */ var  ah = {id: 'ah', name:'köller'},aw = {id: 'aw', name:'guldberg'} ; nodes.push( ah,aw ); links.push( {source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ah','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ag an */ var  ag = {id: 'ag', name:'struensee'},an = {id: 'an', name:'mathilde'} ; nodes.push( ag,an ); links.push( {source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ag bb bc */ var  ag = nodes[0] ,bb = {id: 'bb', name:'maske'},bc = {id: 'bc', name:'ein_kammerherr'} ; nodes.push( bb,bc ); links.push( {source: ag , target: bb },{source: ag , target: bc },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ag','bb','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ak */ var  ak = {id: 'ak', name:'ranzau'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Scene.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ah ak aw bd */ var  ah = {id: 'ah', name:'köller'},ak = nodes[0] ,aw = {id: 'aw', name:'guldberg'},bd = {id: 'bd', name:'mehrere_masken'} ; nodes.push( ah,aw,bd ); links.push( {source: ah , target: ak },{source: ah , target: aw },{source: ah , target: bd },{source: ak , target: aw },{source: ak , target: bd },{source: aw , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Scene.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ac ah ak av aw be bf */ var  ac = {id: 'ac', name:'detlev'},ah = nodes[0] ,ak = nodes[1] ,av = {id: 'av', name:'juliane'},aw = nodes[2] ,be = {id: 'be', name:'ein_officier'},bf = {id: 'bf', name:'alle_officiere'} ; nodes.push( ac,av,be,bf ); links.push( {source: ac , target: ah },{source: ac , target: be },{source: ac , target: aw },{source: ac , target: av },{source: ac , target: ak },{source: ac , target: be },{source: ac , target: bf },{source: ah , target: be },{source: ah , target: aw },{source: ah , target: av },{source: ah , target: ak },{source: ah , target: be },{source: ah , target: bf },{source: be , target: bf },{source: aw , target: be },{source: aw , target: be },{source: aw , target: bf },{source: av , target: be },{source: av , target: aw },{source: av , target: be },{source: av , target: bf },{source: ak , target: be },{source: ak , target: aw },{source: ak , target: av },{source: ak , target: be },{source: ak , target: bf },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Scene.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ac','ah','be','aw','av','ak','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* am bg bh bi bj bk bl bm bn bo bp */ var  am = {id: 'am', name:'pfarrer'},bg = {id: 'bg', name:'schulmeister'},bh = {id: 'bh', name:'svenne'},bi = {id: 'bi', name:'babe'},bj = {id: 'bj', name:'flyns'},bk = {id: 'bk', name:'hooge'},bl = {id: 'bl', name:'alle_bauern'},bm = {id: 'bm', name:'wirthin'},bn = {id: 'bn', name:'conrad'},bo = {id: 'bo', name:'andreas'},bp = {id: 'bp', name:'johannes'} ; nodes.push( am,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp ); links.push( {source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bl },{source: bg , target: bm },{source: bg , target: bn },{source: bg , target: bo },{source: bg , target: bp },{source: bg , target: bm },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bh , target: bm },{source: bh , target: bn },{source: bh , target: bo },{source: bh , target: bp },{source: bh , target: bm },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bm },{source: bi , target: bn },{source: bi , target: bo },{source: bi , target: bp },{source: bi , target: bm },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: bj , target: bn },{source: bj , target: bo },{source: bj , target: bp },{source: bj , target: bm },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bk , target: bo },{source: bk , target: bp },{source: bk , target: bm },{source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bo },{source: bl , target: bp },{source: bl , target: bm },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bp },{source: bn , target: bo },{source: bn , target: bp },{source: bo , target: bp },{source: am , target: bg },{source: am , target: bh },{source: am , target: bi },{source: am , target: bj },{source: am , target: bk },{source: am , target: bl },{source: am , target: bm },{source: am , target: bn },{source: am , target: bo },{source: am , target: bp },{source: am , target: bm },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bp },{source: am , target: bg },{source: am , target: bh },{source: am , target: bi },{source: am , target: bj },{source: am , target: bk },{source: am , target: bl },{source: am , target: bm },{source: am , target: bn },{source: am , target: bo },{source: am , target: bp },{source: am , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'bg','bh','bi','bj','bk','bl','bm','bn','bo','bp','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ah ak aw bc */ var  ah = {id: 'ah', name:'köller'},ak = {id: 'ak', name:'ranzau'},aw = {id: 'aw', name:'guldberg'},bc = {id: 'bc', name:'ein_kammerherr'} ; nodes.push( ah,ak,aw,bc ); links.push( {source: ak , target: aw },{source: ak , target: bc },{source: ah , target: ak },{source: ah , target: aw },{source: ah , target: bc },{source: aw , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'aw','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ah ak au av ba */ var  ah = nodes[0] ,ak = nodes[1] ,au = {id: 'au', name:'schack'},av = {id: 'av', name:'juliane'},ba = {id: 'ba', name:'fürst'} ; nodes.push( au,av,ba ); links.push( {source: av , target: ba },{source: ak , target: av },{source: ak , target: ba },{source: ak , target: au },{source: ah , target: av },{source: ah , target: ak },{source: ah , target: ba },{source: ah , target: au },{source: au , target: av },{source: au , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ak','ba','ah','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* av */ var  av = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ai av aw */ var  ai = {id: 'ai', name:'page'},av = nodes[0] ,aw = {id: 'aw', name:'guldberg'} ; nodes.push( ai,aw ); links.push( {source: av , target: aw },{source: ai , target: aw },{source: ai , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'aw','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* at av */ var  at = {id: 'at', name:'keith'},av = nodes[0]  ; nodes.push( at ); links.push( {source: at , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* av */ var  av = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* an bq */ var  an = {id: 'an', name:'mathilde'},bq = {id: 'bq', name:'emmy'} ; nodes.push( an,bq ); links.push( {source: an , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* an bq */ var  an = nodes[0] ,bq = nodes[1]  ; /* nodes.push(); */ links.push( {source: an , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* an au */ var  an = nodes[0] ,au = {id: 'au', name:'schack'} ; nodes.push( au ); links.push( {source: an , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Scene.';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'au','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* av */ var  av = {id: 'av', name:'juliane'} ; nodes.push( av ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ah au av */ var  ah = {id: 'ah', name:'köller'},au = {id: 'au', name:'schack'},av = nodes[0]  ; nodes.push( ah,au ); links.push( {source: au , target: av },{source: ah , target: av },{source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'av','au','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ak br */ var  ak = {id: 'ak', name:'ranzau'},br = {id: 'br', name:'kerkermeister'} ; nodes.push( ak,br ); links.push( {source: ak , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'br' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ag ak */ var  ag = {id: 'ag', name:'struensee'},ak = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ag be */ var  ag = nodes[0] ,be = {id: 'be', name:'ein_officier'} ; nodes.push( be ); links.push( {source: ag , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* be */ var  be = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* ag ah be */ var  ag = {id: 'ag', name:'struensee'},ah = {id: 'ah', name:'köller'},be = nodes[0]  ; nodes.push( ag,ah ); links.push( {source: ah , target: be },{source: ag , target: be },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'be','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* ag am */ var  ag = nodes[0] ,am = {id: 'am', name:'pfarrer'} ; nodes.push( am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 315000);
