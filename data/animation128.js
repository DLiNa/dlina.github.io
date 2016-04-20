setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'eisleben'},ab = {id: 'ab', name:'schlepper'},ac = {id: 'ac', name:'ferdinand'},ad = {id: 'ad', name:'bernhard'},ae = {id: 'ae', name:'köhler'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Erstes Bild'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = nodes[2],ad = nodes[3],ae = nodes[4],af = {id: 'af', name:'dümmler'},ag = {id: 'ag', name:'kohlrepp'} ; nodes.push( af,ag ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ad },{source: af , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Erstes Bild'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','ac','aa','af','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ah = {id: 'ah', name:'frauenchor'},ai = {id: 'ai', name:'chor_der_arbeiter'},ai = {id: 'ai', name:'chor_der_arbeiter'},aj = {id: 'aj', name:'männerchor'} ; nodes.push( ah,ai,aj ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zweites Bild'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ah','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = {id: 'ac', name:'ferdinand'},ak = {id: 'ak', name:'karoline'},al = {id: 'al', name:'fraun_nünecke'},al = {id: 'al', name:'fraun_nünecke'} ; nodes.push( ac,ak,al ); links.push( {source: ac , target: al },{source: ac , target: ak },{source: ac , target: al },{source: ak , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zweites Bild'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ac = nodes[0],ak = nodes[1],am = {id: 'am', name:'stramberger'} ; nodes.push( am ); links.push( {source: ak , target: am },{source: ac , target: ak },{source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zweites Bild'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = nodes[0],an = {id: 'an', name:'brand'} ; nodes.push( an ); links.push( {source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zweites Bild'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  an = nodes[1],ao = {id: 'ao', name:'agnes'} ; nodes.push( ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zweites Bild'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  an = nodes[0],ao = nodes[1] ; /* nodes.push(); */ links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zweites Bild'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ac = {id: 'ac', name:'ferdinand'},an = nodes[0],ap = {id: 'ap', name:'schultze'},aq = {id: 'aq', name:'hahnekamm'} ; nodes.push( ac,ap,aq ); links.push( {source: an , target: ap },{source: an , target: aq },{source: ac , target: an },{source: ac , target: ap },{source: ac , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zweites Bild'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'an','ac','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ad = {id: 'ad', name:'bernhard'},ar = {id: 'ar', name:'quiksenow'},as = {id: 'as', name:'auguste'} ; nodes.push( ad,ar,as ); links.push( {source: ar , target: as },{source: ad , target: ar },{source: ad , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Drittes Bild'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ad = nodes[0],ar = nodes[1],as = nodes[2] ; /* nodes.push(); */ links.push( {source: ar , target: as },{source: ad , target: as },{source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Drittes Bild'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ao = {id: 'ao', name:'agnes'},ar = nodes[1],as = nodes[2] ; nodes.push( ao ); links.push( {source: ar , target: as },{source: ao , target: ar },{source: ao , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Drittes Bild'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ao = nodes[0],ar = nodes[1],as = nodes[2] ; /* nodes.push(); */ links.push( {source: ao , target: ar },{source: ao , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Drittes Bild'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ar = nodes[1],as = nodes[2] ; /* nodes.push(); */ links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Drittes Bild'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = {id: 'ad', name:'bernhard'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Drittes Bild'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = nodes[0],ao = {id: 'ao', name:'agnes'} ; nodes.push( ao ); links.push( {source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Viertes Bild'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = {id: 'ac', name:'ferdinand'},ao = nodes[1],at = {id: 'at', name:'minna'} ; nodes.push( ac,at ); links.push( {source: ac , target: ao },{source: ac , target: at },{source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Viertes Bild'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  at = nodes[2] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Viertes Bild'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = {id: 'ac', name:'ferdinand'},ao = {id: 'ao', name:'agnes'},ar = {id: 'ar', name:'quiksenow'},as = {id: 'as', name:'auguste'},at = nodes[0] ; nodes.push( ac,ao,ar,as ); links.push( {source: ac , target: ao },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ar , target: as },{source: ar , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Viertes Bild'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = nodes[0],an = {id: 'an', name:'brand'},ao = nodes[1],ar = nodes[2],as = nodes[3],at = nodes[4] ; nodes.push( an ); links.push( {source: ac , target: as },{source: ac , target: ao },{source: ac , target: ar },{source: ac , target: at },{source: ac , target: an },{source: as , target: at },{source: ao , target: as },{source: ao , target: ar },{source: ao , target: at },{source: ar , target: as },{source: ar , target: at },{source: an , target: as },{source: an , target: ao },{source: an , target: ar },{source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Viertes Bild'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ac','as','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  an = nodes[1],ao = nodes[2],at = nodes[5] ; /* nodes.push(); */ links.push( {source: an , target: ao },{source: an , target: at },{source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Viertes Bild'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ak = {id: 'ak', name:'karoline'},an = nodes[0],ao = nodes[1],aq = {id: 'aq', name:'hahnekamm'},as = {id: 'as', name:'auguste'},au = {id: 'au', name:'kommissar'},av = {id: 'av', name:'frau_döse'},aw = {id: 'aw', name:'frau_ribbecke'},ax = {id: 'ax', name:'eine_nachbarin'} ; nodes.push( ak,aq,as,au,av,aw,ax ); links.push( {source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: as , target: ax },{source: an , target: au },{source: an , target: as },{source: an , target: av },{source: an , target: aq },{source: an , target: aw },{source: an , target: ao },{source: an , target: ax },{source: ak , target: au },{source: ak , target: as },{source: ak , target: an },{source: ak , target: av },{source: ak , target: aq },{source: ak , target: aw },{source: ak , target: ao },{source: ak , target: ax },{source: av , target: aw },{source: av , target: ax },{source: aq , target: au },{source: aq , target: as },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: ax },{source: aw , target: ax },{source: ao , target: au },{source: ao , target: as },{source: ao , target: av },{source: ao , target: aq },{source: ao , target: aw },{source: ao , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Viertes Bild'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'au','as','an','ak','av','aq','aw','ao','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ad = {id: 'ad', name:'bernhard'},ay = {id: 'ay', name:'schlicht'},az = {id: 'az', name:'schröpfer'} ; nodes.push( ad,ay,az ); links.push( {source: ay , target: az },{source: ad , target: ay },{source: ad , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Fünftes Bild'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ad = nodes[0],as = {id: 'as', name:'auguste'},ay = nodes[1] ; nodes.push( as ); links.push( {source: ad , target: ay },{source: ad , target: as },{source: as , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Fünftes Bild'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  as = nodes[1],ay = nodes[2] ; /* nodes.push(); */ links.push( {source: as , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Fünftes Bild'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  al = {id: 'al', name:'fraun_nünecke'},ay = nodes[1],ba = {id: 'ba', name:'nünecke'} ; nodes.push( al,ba ); links.push( {source: ay , target: ba },{source: al , target: ay },{source: al , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Fünftes Bild'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ba','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ay = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Fünftes Bild'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  bb = {id: 'bb', name:'bremser'},bc = {id: 'bc', name:'schneppke'} ; nodes.push( bb,bc ); links.push( {source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  bb = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  an = {id: 'an', name:'brand'},bb = nodes[0] ; nodes.push( an ); links.push( {source: an , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  an = nodes[0],ao = {id: 'ao', name:'agnes'},bb = nodes[1] ; nodes.push( ao ); links.push( {source: an , target: bb },{source: an , target: ao },{source: ao , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  bb = nodes[2] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  an = {id: 'an', name:'brand'},ao = {id: 'ao', name:'agnes'} ; nodes.push( an,ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  al = {id: 'al', name:'fraun_nünecke'},ba = {id: 'ba', name:'nünecke'},bb = {id: 'bb', name:'bremser'},bc = {id: 'bc', name:'schneppke'},bd = {id: 'bd', name:'gendarm'} ; nodes.push( al,ba,bb,bc,bd ); links.push( {source: bb , target: bd },{source: bb , target: bc },{source: ba , target: bb },{source: ba , target: bd },{source: ba , target: bc },{source: bc , target: bd },{source: al , target: bb },{source: al , target: ba },{source: al , target: bd },{source: al , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'bd','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  al = nodes[0],ao = {id: 'ao', name:'agnes'},ba = nodes[1],bb = nodes[2],be = {id: 'be', name:'gefängniswärter'} ; nodes.push( ao,be ); links.push( {source: bb , target: be },{source: ba , target: bb },{source: ba , target: be },{source: al , target: bb },{source: al , target: ba },{source: al , target: ao },{source: al , target: be },{source: ao , target: bb },{source: ao , target: ba },{source: ao , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'bb','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  al = nodes[0],ao = nodes[1],ba = nodes[2] ; /* nodes.push(); */ links.push( {source: ao , target: ba },{source: al , target: ao },{source: al , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  al = nodes[0],ba = nodes[2],bb = {id: 'bb', name:'bremser'} ; nodes.push( bb ); links.push( {source: al , target: ba },{source: al , target: bb },{source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Sechstes Bild'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'al','ba','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ac = {id: 'ac', name:'ferdinand'},ak = {id: 'ak', name:'karoline'},aq = {id: 'aq', name:'hahnekamm'},av = {id: 'av', name:'frau_döse'},aw = {id: 'aw', name:'frau_ribbecke'},bf = {id: 'bf', name:'chor'},bg = {id: 'bg', name:'der_mann'} ; nodes.push( ac,ak,aq,av,aw,bf,bg ); links.push( {source: bf , target: bg },{source: ac , target: bf },{source: ac , target: ak },{source: ac , target: aw },{source: ac , target: av },{source: ac , target: aq },{source: ac , target: bg },{source: ak , target: bf },{source: ak , target: aw },{source: ak , target: av },{source: ak , target: aq },{source: ak , target: bg },{source: aw , target: bf },{source: aw , target: bg },{source: av , target: bf },{source: av , target: aw },{source: av , target: bg },{source: aq , target: bf },{source: aq , target: aw },{source: aq , target: av },{source: aq , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Siebentes Bild'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ac = nodes[0],ak = nodes[1],ao = {id: 'ao', name:'agnes'},aq = nodes[2],av = nodes[3],aw = nodes[4],ay = {id: 'ay', name:'schlicht'},bf = nodes[5] ; nodes.push( ao,ay ); links.push( {source: ac , target: bf },{source: ac , target: ak },{source: ac , target: aw },{source: ac , target: av },{source: ac , target: aq },{source: ac , target: ay },{source: ac , target: ao },{source: ak , target: bf },{source: ak , target: aw },{source: ak , target: av },{source: ak , target: aq },{source: ak , target: ay },{source: ak , target: ao },{source: aw , target: bf },{source: aw , target: ay },{source: av , target: bf },{source: av , target: aw },{source: av , target: ay },{source: aq , target: bf },{source: aq , target: aw },{source: aq , target: av },{source: aq , target: ay },{source: ay , target: bf },{source: ao , target: bf },{source: ao , target: aw },{source: ao , target: av },{source: ao , target: aq },{source: ao , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Siebentes Bild'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'bf','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ac = nodes[0],ak = nodes[1],ao = nodes[2],aq = nodes[3],av = nodes[4],aw = nodes[5] ; /* nodes.push(); */ links.push( {source: aq , target: av },{source: aq , target: aw },{source: av , target: aw },{source: ak , target: aq },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: ao },{source: ac , target: aq },{source: ac , target: av },{source: ac , target: ak },{source: ac , target: aw },{source: ac , target: ao },{source: ao , target: aq },{source: ao , target: av },{source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Siebentes Bild'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ac = nodes[0],ak = nodes[1],ao = nodes[2],aq = nodes[3],av = nodes[4],aw = nodes[5],bf = {id: 'bf', name:'chor'} ; nodes.push( bf ); links.push( {source: aq , target: av },{source: aq , target: aw },{source: aq , target: bf },{source: av , target: aw },{source: av , target: bf },{source: ak , target: aq },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: ao },{source: ak , target: bf },{source: ac , target: aq },{source: ac , target: av },{source: ac , target: ak },{source: ac , target: aw },{source: ac , target: ao },{source: ac , target: bf },{source: aw , target: bf },{source: ao , target: aq },{source: ao , target: av },{source: ao , target: aw },{source: ao , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Siebentes Bild'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aq','av','ak','ac','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ao = nodes[2],ar = {id: 'ar', name:'quiksenow'},bf = nodes[6] ; nodes.push( ar ); links.push( {source: ar , target: bf },{source: ao , target: bf },{source: ao , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Achtes Bild'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'bf','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ao = nodes[0],bh = {id: 'bh', name:'theodor'} ; nodes.push( bh ); links.push( {source: ao , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Achtes Bild'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ad = {id: 'ad', name:'bernhard'},bh = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Achtes Bild'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'bh','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ar = {id: 'ar', name:'quiksenow'},as = {id: 'as', name:'auguste'},ay = {id: 'ay', name:'schlicht'},bi = {id: 'bi', name:'berta'} ; nodes.push( ar,as,ay,bi ); links.push( {source: ar , target: as },{source: ar , target: bi },{source: ar , target: ay },{source: as , target: bi },{source: as , target: ay },{source: ay , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Neuntes Bild'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ar = nodes[0],as = nodes[1],ay = nodes[2] ; /* nodes.push(); */ links.push( {source: ar , target: ay },{source: ar , target: as },{source: as , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Neuntes Bild'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ay','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ar = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Neuntes Bild'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ac = {id: 'ac', name:'ferdinand'},an = {id: 'an', name:'brand'},ay = {id: 'ay', name:'schlicht'} ; nodes.push( ac,an,ay ); links.push( {source: ac , target: ay },{source: ac , target: an },{source: an , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zehntes Bild'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ay','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  an = nodes[1],bj = {id: 'bj', name:'karlchen'} ; nodes.push( bj ); links.push( {source: an , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zehntes Bild'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  an = nodes[0],ao = {id: 'ao', name:'agnes'},ay = {id: 'ay', name:'schlicht'} ; nodes.push( ao,ay ); links.push( {source: an , target: ay },{source: an , target: ao },{source: ao , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zehntes Bild'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  an = nodes[0],ao = nodes[1],ay = nodes[2] ; /* nodes.push(); */ links.push( {source: ao , target: ay },{source: an , target: ao },{source: an , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Zehntes Bild'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ao','an','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ak = {id: 'ak', name:'karoline'},aq = {id: 'aq', name:'hahnekamm'},av = {id: 'av', name:'frau_döse'},aw = {id: 'aw', name:'frau_ribbecke'} ; nodes.push( ak,aq,av,aw ); links.push( {source: ak , target: aq },{source: ak , target: av },{source: ak , target: aw },{source: aq , target: av },{source: aq , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Elftes Bild'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ak','aq','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ac = {id: 'ac', name:'ferdinand'},al = {id: 'al', name:'fraun_nünecke'},an = {id: 'an', name:'brand'},ao = {id: 'ao', name:'agnes'},ar = {id: 'ar', name:'quiksenow'},ar = {id: 'ar', name:'quiksenow'},as = {id: 'as', name:'auguste'},at = {id: 'at', name:'minna'},ay = {id: 'ay', name:'schlicht'},ba = {id: 'ba', name:'nünecke'},bf = {id: 'bf', name:'chor'} ; nodes.push( ac,al,an,ao,ar,as,at,ay,ba,bf ); links.push( {source: ac , target: bf },{source: ac , target: ao },{source: ac , target: an },{source: ac , target: ba },{source: ac , target: al },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: ay },{source: ac , target: at },{source: ac , target: ar },{source: ao , target: bf },{source: ao , target: ba },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: ay },{source: ao , target: at },{source: ao , target: ar },{source: an , target: bf },{source: an , target: ao },{source: an , target: ba },{source: an , target: ar },{source: an , target: as },{source: an , target: ay },{source: an , target: at },{source: an , target: ar },{source: ba , target: bf },{source: al , target: bf },{source: al , target: ao },{source: al , target: an },{source: al , target: ba },{source: al , target: ar },{source: al , target: as },{source: al , target: ay },{source: al , target: at },{source: al , target: ar },{source: ar , target: bf },{source: ar , target: ba },{source: ar , target: as },{source: ar , target: ay },{source: ar , target: at },{source: as , target: bf },{source: as , target: ba },{source: as , target: ay },{source: as , target: at },{source: ay , target: bf },{source: ay , target: ba },{source: at , target: bf },{source: at , target: ba },{source: at , target: ay },{source: ar , target: bf },{source: ar , target: ba },{source: ar , target: as },{source: ar , target: ay },{source: ar , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 260000);
