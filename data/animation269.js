setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'landleute'},ab = {id: 'ab', name:'gretchen'},ac = {id: 'ac', name:'baculas'},ad = {id: 'ad', name:'ein_hochzeitsgast'},ae = {id: 'ae', name:'chor'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  af = {id: 'af', name:'nanette'},ag = {id: 'ag', name:'baronin'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = {id: 'ab', name:'gretchen'},ac = {id: 'ac', name:'baculas'},af = nodes[0],ag = nodes[1] ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: ab , target: ag },{source: ab , target: af },{source: ac , target: ag },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = nodes[0],ac = {id: 'ac', name:'baculas'},af = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ab , target: ac },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac','ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ah = {id: 'ah', name:'graf'},ai = {id: 'ai', name:'baron'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = {id: 'aa', name:'landleute'},ah = nodes[0],ai = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ah },{source: aa , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ab = {id: 'ab', name:'gretchen'},ac = {id: 'ac', name:'baculas'},ah = nodes[1],ai = nodes[2] ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ac , target: ah },{source: ac , target: ai },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ag = {id: 'ag', name:'baronin'},ah = nodes[3],ai = nodes[4] ; nodes.push( ag ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: ah , target: ai },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ag = nodes[3],ah = nodes[4],ai = nodes[5],aj = {id: 'aj', name:'jäger'} ; nodes.push( aj ); links.push( {source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj },{source: aa , target: aj },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: ac },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ah','ai','aa','ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = nodes[0],ae = {id: 'ae', name:'chor'},aj = nodes[1],ak = {id: 'ak', name:'dienerchor'},ak = {id: 'ak', name:'dienerchor'},al = {id: 'al', name:'gräfin'},am = {id: 'am', name:'pancracius'} ; nodes.push( ae,ak,al,am ); links.push( {source: ak , target: am },{source: ak , target: al },{source: ak , target: am },{source: ak , target: al },{source: ac , target: am },{source: ac , target: ak },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ae },{source: ac , target: aj },{source: al , target: am },{source: ae , target: am },{source: ae , target: ak },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: aj },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak','al','ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ac = nodes[0],am = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ag = {id: 'ag', name:'baronin'},ai = {id: 'ai', name:'baron'},al = {id: 'al', name:'gräfin'} ; nodes.push( ag,ai,al ); links.push( {source: ai , target: al },{source: ag , target: al },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  al = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  al = nodes[0],am = {id: 'am', name:'pancracius'} ; nodes.push( am ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = {id: 'ac', name:'baculas'},al = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = nodes[0],ah = {id: 'ah', name:'graf'},al = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: al },{source: ac , target: ah },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = nodes[0],ah = nodes[1],ai = {id: 'ai', name:'baron'},al = nodes[2] ; nodes.push( ai ); links.push( {source: ai , target: al },{source: ah , target: ai },{source: ah , target: al },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ac = nodes[0],ag = {id: 'ag', name:'baronin'},ah = nodes[1],ai = nodes[2],al = nodes[3] ; nodes.push( ag ); links.push( {source: ah , target: ai },{source: ah , target: al },{source: ai , target: al },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: al },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ac = nodes[0],ag = nodes[1],ai = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: ag },{source: ac , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ac = nodes[0],ag = nodes[1],ai = nodes[2],am = {id: 'am', name:'pancracius'},am = {id: 'am', name:'pancracius'} ; nodes.push( am ); links.push( {source: ai , target: am },{source: ai , target: am },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: am },{source: ac , target: ag },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'am','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ag = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = {id: 'ac', name:'baculas'},ai = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ac = nodes[0],ag = {id: 'ag', name:'baronin'},ah = {id: 'ah', name:'graf'},ai = nodes[1] ; nodes.push( ag,ah ); links.push( {source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ag },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = nodes[0],ag = nodes[1],ah = nodes[2],ai = nodes[3],al = {id: 'al', name:'gräfin'},am = {id: 'am', name:'pancracius'} ; nodes.push( al,am ); links.push( {source: al , target: am },{source: ai , target: am },{source: ai , target: al },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ai },{source: ag , target: am },{source: ag , target: al },{source: ag , target: ai },{source: ag , target: ah },{source: ac , target: am },{source: ac , target: al },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'am','al','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ah = {id: 'ah', name:'graf'},ai = {id: 'ai', name:'baron'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ah = nodes[0],ai = nodes[1],an = {id: 'an', name:'andere'},an = {id: 'an', name:'andere'},an = {id: 'an', name:'andere'},an = {id: 'an', name:'andere'},an = {id: 'an', name:'andere'},an = {id: 'an', name:'andere'},ao = {id: 'ao', name:'erstes_mädchen'},ap = {id: 'ap', name:'zweites_mädchen'} ; nodes.push( an,ao,ap ); links.push( {source: an , target: ao },{source: an , target: ap },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: an },{source: ah , target: an },{source: ah , target: an },{source: ah , target: an },{source: ah , target: an },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: an },{source: ai , target: an },{source: ai , target: an },{source: ai , target: an },{source: ai , target: an },{source: ao , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ao },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ah = nodes[0],ai = nodes[1],al = {id: 'al', name:'gräfin'} ; nodes.push( al ); links.push( {source: ah , target: al },{source: ah , target: ai },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ah = nodes[0],ai = nodes[1],am = {id: 'am', name:'pancracius'} ; nodes.push( am ); links.push( {source: ai , target: am },{source: ah , target: am },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'am','ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ab = {id: 'ab', name:'gretchen'},ac = {id: 'ac', name:'baculas'},ac = {id: 'ac', name:'baculas'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = nodes[0],ai = {id: 'ai', name:'baron'} ; nodes.push( ai ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ab = {id: 'ab', name:'gretchen'},ac = nodes[0],ai = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ai },{source: ab , target: ac },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ag = {id: 'ag', name:'baronin'},ai = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ai = nodes[0],al = {id: 'al', name:'gräfin'} ; nodes.push( al ); links.push( {source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'al','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ag = {id: 'ag', name:'baronin'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ag = nodes[0],ah = {id: 'ah', name:'graf'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ag = nodes[0],ah = nodes[1],ai = {id: 'ai', name:'baron'},al = {id: 'al', name:'gräfin'} ; nodes.push( ai,al ); links.push( {source: ah , target: al },{source: ah , target: ai },{source: ai , target: al },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  aa = {id: 'aa', name:'landleute'},ab = {id: 'ab', name:'gretchen'},ac = {id: 'ac', name:'baculas'},ag = nodes[0],ah = nodes[1],ai = nodes[2],al = nodes[3],am = {id: 'am', name:'pancracius'},aq = {id: 'aq', name:'schuljugend'} ; nodes.push( aa,ab,ac,am,aq ); links.push( {source: aa , target: ah },{source: aa , target: aq },{source: aa , target: al },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: am },{source: ah , target: aq },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: am },{source: al , target: aq },{source: al , target: am },{source: ac , target: ah },{source: ac , target: aq },{source: ac , target: al },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: am },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: al },{source: ag , target: ai },{source: ag , target: am },{source: ab , target: ah },{source: ab , target: aq },{source: ab , target: al },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: am },{source: ai , target: aq },{source: ai , target: al },{source: ai , target: am },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 210000);
