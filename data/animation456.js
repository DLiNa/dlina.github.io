setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'sten'},ab = {id: 'ab', name:'hasko'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'richers'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = {id: 'ad', name:'botwid'},ae = {id: 'ae', name:'their'},af = {id: 'af', name:'struen'} ; nodes.push( ad,ae,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'sten'},ac = {id: 'ac', name:'richers'},ad = nodes[0],ae = nodes[1],af = nodes[2] ; nodes.push( aa,ac ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = {id: 'ab', name:'hasko'},ac = nodes[0],ad = nodes[1],ae = nodes[2],ae = nodes[2],af = nodes[3],ag = {id: 'ag', name:'jöran'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ae },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = nodes[0],ad = nodes[1],ae = nodes[2],af = nodes[3] ; /* nodes.push(); */ links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad','ae','af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ag = {id: 'ag', name:'jöran'},ah = {id: 'ah', name:'edelknabe'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ag = nodes[0],ai = {id: 'ai', name:'erik'},aj = {id: 'aj', name:'die_königinn'},aj = {id: 'aj', name:'die_königinn'} ; nodes.push( ai,aj ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj },{source: ai , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ai = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aj = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ac = {id: 'ac', name:'richers'},ad = {id: 'ad', name:'botwid'},ae = {id: 'ae', name:'their'},af = {id: 'af', name:'struen'} ; nodes.push( ac,ad,ae,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ac = nodes[0],ag = {id: 'ag', name:'jöran'},ah = {id: 'ah', name:'edelknabe'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = nodes[0],ad = {id: 'ad', name:'botwid'},ae = {id: 'ae', name:'their'},ag = nodes[1],ai = {id: 'ai', name:'erik'},ak = {id: 'ak', name:'wolowsky'} ; nodes.push( ad,ae,ai,ak ); links.push( {source: ai , target: ak },{source: ag , target: ai },{source: ag , target: ak },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: ak },{source: ad , target: ae },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','ag','ak','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ad = nodes[0],ae = nodes[1],af = {id: 'af', name:'struen'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ac = {id: 'ac', name:'richers'},ad = nodes[0],ae = nodes[1],af = nodes[2] ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  al = {id: 'al', name:'catharina'},am = {id: 'am', name:'siegmund'},an = {id: 'an', name:'johann'} ; nodes.push( al,am,an ); links.push( {source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  al = nodes[0],am = nodes[1],an = nodes[2],ao = {id: 'ao', name:'gruskel'} ; nodes.push( ao ); links.push( {source: an , target: ao },{source: al , target: ao },{source: al , target: an },{source: al , target: am },{source: am , target: ao },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ao','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ak = {id: 'ak', name:'wolowsky'},al = nodes[0],am = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  al = nodes[0],an = {id: 'an', name:'johann'} ; nodes.push( an ); links.push( {source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  al = nodes[0],am = {id: 'am', name:'siegmund'},an = nodes[1],ao = {id: 'ao', name:'gruskel'},ap = {id: 'ap', name:'hauptmann'} ; nodes.push( am,ao,ap ); links.push( {source: an , target: ap },{source: an , target: ao },{source: al , target: ap },{source: al , target: an },{source: al , target: am },{source: al , target: ao },{source: am , target: ap },{source: am , target: an },{source: am , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ap','an','al','am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ag = {id: 'ag', name:'jöran'},aq = {id: 'aq', name:'rathsdiener'} ; nodes.push( ag,aq ); links.push( {source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ac = {id: 'ac', name:'richers'},ag = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ag = nodes[0],ar = {id: 'ar', name:'braske'} ; nodes.push( ar ); links.push( {source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ag = nodes[0],aq = {id: 'aq', name:'rathsdiener'},ar = nodes[1],as = {id: 'as', name:'einige_räthe'},at = {id: 'at', name:'einer'},au = {id: 'au', name:'einige'} ; nodes.push( aq,as,at,au ); links.push( {source: ag , target: ar },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au },{source: ag , target: aq },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'as','at','au','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ag = nodes[0],an = {id: 'an', name:'johann'},ap = {id: 'ap', name:'hauptmann'},ar = nodes[1] ; nodes.push( an,ap ); links.push( {source: an , target: ap },{source: an , target: ar },{source: ap , target: ar },{source: ag , target: an },{source: ag , target: ap },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'an','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ag = nodes[0],ar = nodes[1],av = {id: 'av', name:'ein_rath'},aw = {id: 'aw', name:'mehrere_räthe'} ; nodes.push( av,aw ); links.push( {source: ag , target: av },{source: ag , target: aw },{source: ag , target: ar },{source: av , target: aw },{source: ar , target: av },{source: ar , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ag','av','aw','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ak = {id: 'ak', name:'wolowsky'},ax = {id: 'ax', name:'page'} ; nodes.push( ak,ax ); links.push( {source: ak , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aj = {id: 'aj', name:'die_königinn'},ak = nodes[0] ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aj = nodes[0],ak = nodes[1],al = {id: 'al', name:'catharina'} ; nodes.push( al ); links.push( {source: ak , target: al },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ak','aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ai = {id: 'ai', name:'erik'},ay = {id: 'ay', name:'kammerherr'} ; nodes.push( ai,ay ); links.push( {source: ai , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ai = nodes[0],ap = {id: 'ap', name:'hauptmann'} ; nodes.push( ap ); links.push( {source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ai = nodes[0],ar = {id: 'ar', name:'braske'},ay = {id: 'ay', name:'kammerherr'} ; nodes.push( ar,ay ); links.push( {source: ai , target: ay },{source: ai , target: ar },{source: ar , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ag = {id: 'ag', name:'jöran'},ai = nodes[0],ar = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: ai },{source: ag , target: ar },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ag = nodes[0],ai = nodes[1],ap = {id: 'ap', name:'hauptmann'} ; nodes.push( ap ); links.push( {source: ag , target: ap },{source: ag , target: ai },{source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ac = {id: 'ac', name:'richers'},ag = nodes[0],ai = nodes[1],ar = {id: 'ar', name:'braske'} ; nodes.push( ac,ar ); links.push( {source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ar },{source: ag , target: ai },{source: ag , target: ar },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = nodes[0],ag = nodes[1],ai = nodes[2],aj = {id: 'aj', name:'die_königinn'} ; nodes.push( aj ); links.push( {source: ai , target: aj },{source: ag , target: aj },{source: ag , target: ai },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ai = nodes[0],ai = nodes[0],aj = nodes[1],al = {id: 'al', name:'catharina'},am = {id: 'am', name:'siegmund'},an = {id: 'an', name:'johann'} ; nodes.push( al,am,an ); links.push( {source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ag = {id: 'ag', name:'jöran'},ai = nodes[0],ai = nodes[0],aj = nodes[1],al = nodes[2],am = nodes[3],an = nodes[4],ar = {id: 'ar', name:'braske'} ; nodes.push( ag,ar ); links.push( {source: ag , target: ar },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ai },{source: ai , target: ar },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: aj , target: ar },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: al , target: ar },{source: al , target: am },{source: al , target: an },{source: am , target: ar },{source: am , target: an },{source: an , target: ar },{source: ai , target: ar },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt';
}, 185000);
