setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'lefêvre'},ab = {id: 'ab', name:'germain'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'chapelle'} ; nodes.push( ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = nodes[0],ad = {id: 'ad', name:'matthieu'},ae = {id: 'ae', name:'madeleine'} ; nodes.push( ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = {id: 'ab', name:'germain'},ac = nodes[0],ae = nodes[1] ; nodes.push( ab ); links.push( {source: ac , target: ae },{source: ab , target: ac },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = nodes[0],af = {id: 'af', name:'la_roquette'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'lefêvre'},ac = {id: 'ac', name:'chapelle'},ae = nodes[0],af = nodes[1] ; nodes.push( aa,ac ); links.push( {source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ac = nodes[0],ad = {id: 'ad', name:'matthieu'},ae = nodes[1],af = nodes[2] ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = {id: 'aa', name:'lefêvre'},ae = nodes[0],ag = {id: 'ag', name:'armande'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag },{source: aa , target: ae },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ah = {id: 'ah', name:'molière'} ; nodes.push( ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ad = {id: 'ad', name:'matthieu'},ah = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ah },{source: aa , target: ad },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ad = nodes[1],ah = nodes[2],ai = {id: 'ai', name:'dubois'} ; nodes.push( ai ); links.push( {source: ad , target: ah },{source: ad , target: ai },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = nodes[0],ah = nodes[1],ai = nodes[2],aj = {id: 'aj', name:'lionne'},ak = {id: 'ak', name:'bedienter'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ah','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = nodes[0],af = {id: 'af', name:'la_roquette'},ai = nodes[1],aj = nodes[2] ; nodes.push( af ); links.push( {source: af , target: aj },{source: af , target: ai },{source: ai , target: aj },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'af','ai','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aj = nodes[0],al = {id: 'al', name:'delarive'},am = {id: 'am', name:'lakai'} ; nodes.push( al,am ); links.push( {source: al , target: am },{source: aj , target: al },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','am','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ae = {id: 'ae', name:'madeleine'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ae = nodes[0],al = {id: 'al', name:'delarive'} ; nodes.push( al ); links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aj = {id: 'aj', name:'lionne'},al = nodes[0],am = {id: 'am', name:'lakai'},an = {id: 'an', name:'ludwig'} ; nodes.push( aj,am,an ); links.push( {source: aj , target: an },{source: aj , target: al },{source: aj , target: am },{source: al , target: an },{source: al , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  af = {id: 'af', name:'la_roquette'},aj = nodes[0],an = nodes[1] ; nodes.push( af ); links.push( {source: af , target: an },{source: af , target: aj },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = {id: 'aa', name:'lefêvre'},ac = {id: 'ac', name:'chapelle'},af = nodes[0],ai = {id: 'ai', name:'dubois'},aj = nodes[1],al = {id: 'al', name:'delarive'},an = nodes[2] ; nodes.push( aa,ac,ai,al ); links.push( {source: ai , target: an },{source: ai , target: al },{source: ai , target: aj },{source: aa , target: an },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: aj },{source: al , target: an },{source: ac , target: an },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: af },{source: ac , target: aj },{source: af , target: an },{source: af , target: ai },{source: af , target: al },{source: af , target: aj },{source: aj , target: an },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'an','ai','aa','al','ac','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ae = {id: 'ae', name:'madeleine'},af = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  af = nodes[0],al = {id: 'al', name:'delarive'} ; nodes.push( al ); links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  al = nodes[0],am = {id: 'am', name:'lakai'},an = {id: 'an', name:'ludwig'} ; nodes.push( am,an ); links.push( {source: al , target: an },{source: al , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ah = {id: 'ah', name:'molière'},al = nodes[0],an = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: an },{source: ah , target: al },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'an','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ad = {id: 'ad', name:'matthieu'},ah = nodes[0],ao = {id: 'ao', name:'offizier'} ; nodes.push( ad,ao ); links.push( {source: ad , target: ah },{source: ad , target: ao },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ad','ah','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  af = {id: 'af', name:'la_roquette'},ap = {id: 'ap', name:'louison'} ; nodes.push( af,ap ); links.push( {source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ae = {id: 'ae', name:'madeleine'},af = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ae = nodes[0],af = nodes[1],ag = {id: 'ag', name:'armande'},ah = {id: 'ah', name:'molière'},aq = {id: 'aq', name:'ein_theaterdiener'} ; nodes.push( ag,ah,aq ); links.push( {source: ah , target: aq },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: aq },{source: ag , target: ah },{source: ag , target: aq },{source: af , target: ah },{source: af , target: ag },{source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ae = nodes[0],af = nodes[1],ag = nodes[2],ah = nodes[3],an = {id: 'an', name:'ludwig'} ; nodes.push( an ); links.push( {source: ag , target: ah },{source: ag , target: an },{source: af , target: ag },{source: af , target: ah },{source: af , target: an },{source: ah , target: an },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ag','af','an','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = {id: 'aa', name:'lefêvre'},ac = {id: 'ac', name:'chapelle'},ai = {id: 'ai', name:'dubois'},aj = {id: 'aj', name:'lionne'},al = {id: 'al', name:'delarive'} ; nodes.push( aa,ac,ai,aj,al ); links.push( {source: ai , target: al },{source: ai , target: aj },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: aj },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = nodes[0],ac = nodes[1],ah = {id: 'ah', name:'molière'},ai = nodes[2],aj = nodes[3],al = nodes[4] ; nodes.push( ah ); links.push( {source: aj , target: al },{source: ai , target: aj },{source: ai , target: al },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: ah },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: ah },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ac = nodes[1],af = {id: 'af', name:'la_roquette'},ai = nodes[2],aj = nodes[3],al = nodes[4] ; nodes.push( af ); links.push( {source: af , target: aj },{source: af , target: al },{source: af , target: ai },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: al },{source: ac , target: ai },{source: aj , target: al },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: al },{source: aa , target: ai },{source: ai , target: aj },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = nodes[0],ac = nodes[1],af = nodes[2],ai = nodes[3],aj = nodes[4],al = nodes[5],an = {id: 'an', name:'ludwig'} ; nodes.push( an ); links.push( {source: aj , target: an },{source: aj , target: al },{source: af , target: an },{source: af , target: aj },{source: af , target: ai },{source: af , target: al },{source: ai , target: an },{source: ai , target: aj },{source: ai , target: al },{source: ac , target: an },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: al },{source: al , target: an },{source: aa , target: an },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aj','ai','al','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ac = nodes[0],ad = {id: 'ad', name:'matthieu'},ae = {id: 'ae', name:'madeleine'},af = nodes[1],ag = {id: 'ag', name:'armande'},ah = {id: 'ah', name:'molière'},an = nodes[2] ; nodes.push( ad,ae,ag,ah ); links.push( {source: af , target: ah },{source: af , target: an },{source: af , target: ag },{source: ah , target: an },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: an },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: an },{source: ae , target: ag },{source: ag , target: ah },{source: ag , target: an },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: an },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt';
}, 170000);
