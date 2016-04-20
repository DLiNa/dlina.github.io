setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'friedrich'},ab = {id: 'ab', name:'ludwig'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'jakob'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[1],ac = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'leopold'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = nodes[0],ac = nodes[1],ae = {id: 'ae', name:'greif'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = nodes[0],ac = nodes[1],af = {id: 'af', name:'baronesse'},ag = {id: 'ag', name:'stock'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = nodes[0],af = nodes[2],ag = nodes[3],ah = {id: 'ah', name:'baptist'},an = {id: 'an', name:'alle_bediente'},ao = {id: 'ao', name:'bedienter'} ; nodes.push( ah,an,ao ); links.push( {source: ab , target: af },{source: ab , target: ag },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ah },{source: af , target: ag },{source: af , target: an },{source: af , target: ao },{source: af , target: ah },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ah },{source: an , target: ao },{source: ah , target: an },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','ag','an','ao','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ae = {id: 'ae', name:'greif'},af = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = {id: 'aa', name:'friedrich'},ac = {id: 'ac', name:'jakob'},ae = nodes[0],af = nodes[1],ag = {id: 'ag', name:'stock'},ai = {id: 'ai', name:'wiener'},ai = {id: 'ai', name:'wiener'} ; nodes.push( aa,ac,ag,ai ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ai },{source: af , target: ai },{source: af , target: ag },{source: af , target: ai },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: ai },{source: ag , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aa','ai','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = nodes[2],af = nodes[3] ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = {id: 'ab', name:'ludwig'},ae = nodes[0],af = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = {id: 'ac', name:'jakob'},ai = {id: 'ai', name:'wiener'},ai = {id: 'ai', name:'wiener'} ; nodes.push( ac,ai ); links.push( {source: ac , target: ai },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = {id: 'ab', name:'ludwig'},ac = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  af = {id: 'af', name:'baronesse'},aj = {id: 'aj', name:'figaro'} ; nodes.push( af,aj ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  af = nodes[0],ai = {id: 'ai', name:'wiener'},aj = nodes[1] ; nodes.push( ai ); links.push( {source: ai , target: aj },{source: af , target: ai },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'friedrich'},af = nodes[0],aj = nodes[2],ak = {id: 'ak', name:'hyazinthe'} ; nodes.push( aa,ak ); links.push( {source: aa , target: af },{source: aa , target: aj },{source: aa , target: ak },{source: af , target: aj },{source: af , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = {id: 'ac', name:'jakob'},af = nodes[1],ak = nodes[3] ; nodes.push( ac ); links.push( {source: af , target: ak },{source: ac , target: ak },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aj = {id: 'aj', name:'figaro'},ak = nodes[2] ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = {id: 'ae', name:'greif'},aj = nodes[0],ak = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ak },{source: ae , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aj = nodes[1],ak = nodes[2] ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ah = {id: 'ah', name:'baptist'},aj = nodes[0],ak = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: ak },{source: ah , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aj = nodes[1],ak = nodes[2],al = {id: 'al', name:'christoph'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = {id: 'aa', name:'friedrich'},ab = {id: 'ab', name:'ludwig'},ac = {id: 'ac', name:'jakob'},ae = {id: 'ae', name:'greif'},ah = {id: 'ah', name:'baptist'},ak = nodes[1],al = nodes[2] ; nodes.push( aa,ab,ac,ae,ah ); links.push( {source: ak , target: al },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ah },{source: ah , target: ak },{source: ah , target: al },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: al },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: al },{source: ac , target: ah },{source: ab , target: ak },{source: ab , target: ae },{source: ab , target: al },{source: ab , target: ah },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae','aa','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ah = nodes[4],ak = nodes[5],al = nodes[6],am = {id: 'am', name:'bardenrode'} ; nodes.push( am ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ak','al','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ac = {id: 'ac', name:'jakob'},ae = {id: 'ae', name:'greif'},am = nodes[3] ; nodes.push( ac,ae ); links.push( {source: ae , target: am },{source: ac , target: am },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ae = nodes[1],ak = {id: 'ak', name:'hyazinthe'},am = nodes[2] ; nodes.push( ak ); links.push( {source: ak , target: am },{source: ae , target: ak },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  af = {id: 'af', name:'baronesse'},am = nodes[2] ; nodes.push( af ); links.push( {source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ad = {id: 'ad', name:'leopold'},am = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ad = nodes[0],aj = {id: 'aj', name:'figaro'},am = nodes[1] ; nodes.push( aj ); links.push( {source: aj , target: am },{source: ad , target: aj },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aj = nodes[1],am = nodes[2] ; /* nodes.push(); */ links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  af = {id: 'af', name:'baronesse'},aj = nodes[0] ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ac = {id: 'ac', name:'jakob'},ae = {id: 'ae', name:'greif'},af = nodes[0],aj = nodes[1] ; nodes.push( ac,ae ); links.push( {source: af , target: aj },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: aj },{source: ae , target: af },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'af','ac','ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ak = {id: 'ak', name:'hyazinthe'},al = {id: 'al', name:'christoph'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aj = {id: 'aj', name:'figaro'},ak = nodes[0] ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ae = {id: 'ae', name:'greif'},aj = nodes[0],ak = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ak },{source: ae , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ae = nodes[0],ai = {id: 'ai', name:'wiener'},aj = nodes[1],ak = nodes[2] ; nodes.push( ai ); links.push( {source: ae , target: ak },{source: ae , target: aj },{source: ae , target: ai },{source: aj , target: ak },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ak','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ae = nodes[0],ai = nodes[1],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ai },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ad = {id: 'ad', name:'leopold'},ad = {id: 'ad', name:'leopold'},ae = nodes[0],af = {id: 'af', name:'baronesse'},ai = nodes[1] ; nodes.push( ad,af ); links.push( {source: af , target: ai },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ad = nodes[0],af = nodes[3] ; /* nodes.push(); */ links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ad = nodes[0],af = nodes[1],al = {id: 'al', name:'christoph'} ; nodes.push( al ); links.push( {source: af , target: al },{source: ad , target: al },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ad = nodes[0],al = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ad = nodes[0],aj = {id: 'aj', name:'figaro'},ak = {id: 'ak', name:'hyazinthe'} ; nodes.push( aj,ak ); links.push( {source: ad , target: ak },{source: ad , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ad = nodes[0],af = {id: 'af', name:'baronesse'},ak = nodes[2] ; nodes.push( af ); links.push( {source: af , target: ak },{source: ad , target: af },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  af = nodes[1],al = {id: 'al', name:'christoph'} ; nodes.push( al ); links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  af = nodes[0],ah = {id: 'ah', name:'baptist'},ak = {id: 'ak', name:'hyazinthe'},al = nodes[1] ; nodes.push( ah,ak ); links.push( {source: ah , target: ak },{source: ah , target: al },{source: ak , target: al },{source: af , target: ah },{source: af , target: ak },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  af = nodes[0],ag = {id: 'ag', name:'stock'},ah = nodes[1],an = {id: 'an', name:'alle_bediente'},ao = {id: 'ao', name:'bedienter'} ; nodes.push( ag,an,ao ); links.push( {source: ag , target: an },{source: ag , target: ao },{source: ag , target: ah },{source: an , target: ao },{source: af , target: ag },{source: af , target: an },{source: af , target: ao },{source: af , target: ah },{source: ah , target: an },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ag','an','ao','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ad = {id: 'ad', name:'leopold'},af = nodes[0],aj = {id: 'aj', name:'figaro'},ak = {id: 'ak', name:'hyazinthe'},al = {id: 'al', name:'christoph'} ; nodes.push( ad,aj,ak,al ); links.push( {source: af , target: aj },{source: af , target: al },{source: af , target: ak },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: al },{source: ad , target: ak },{source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ad','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  af = nodes[1],ak = nodes[3],al = nodes[4] ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: af , target: al },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'al','ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ad = {id: 'ad', name:'leopold'},am = {id: 'am', name:'bardenrode'} ; nodes.push( ad,am ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  af = {id: 'af', name:'baronesse'},aj = {id: 'aj', name:'figaro'},ak = {id: 'ak', name:'hyazinthe'},al = {id: 'al', name:'christoph'},am = nodes[1],an = {id: 'an', name:'alle_bediente'},ao = {id: 'ao', name:'bedienter'} ; nodes.push( af,aj,ak,al,an,ao ); links.push( {source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: al },{source: an , target: ao },{source: am , target: an },{source: am , target: ao },{source: af , target: aj },{source: af , target: an },{source: af , target: ao },{source: af , target: am },{source: af , target: ak },{source: af , target: al },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: al },{source: al , target: an },{source: al , target: ao },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'an','ao','am','af','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ai = {id: 'ai', name:'wiener'},aj = nodes[1] ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ag = {id: 'ag', name:'stock'},ai = nodes[0],aj = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: aj },{source: ag , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ag','aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  aa = {id: 'aa', name:'friedrich'},ac = {id: 'ac', name:'jakob'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  aa = nodes[0],ab = {id: 'ab', name:'ludwig'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  ab = nodes[1],aj = {id: 'aj', name:'figaro'} ; nodes.push( aj ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  ai = {id: 'ai', name:'wiener'},aj = nodes[1] ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  ab = {id: 'ab', name:'ludwig'},ai = nodes[0],ai = nodes[0],aj = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ai },{source: ai , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  aj = nodes[3],am = {id: 'am', name:'bardenrode'} ; nodes.push( am ); links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  aj = nodes[0],al = {id: 'al', name:'christoph'} ; nodes.push( al ); links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  ab = {id: 'ab', name:'ludwig'},aj = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  af = {id: 'af', name:'baronesse'},aj = nodes[1] ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  ae = {id: 'ae', name:'greif'},af = nodes[0],aj = nodes[1],al = {id: 'al', name:'christoph'} ; nodes.push( ae,al ); links.push( {source: af , target: al },{source: af , target: aj },{source: ae , target: al },{source: ae , target: af },{source: ae , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'al','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64'); var  af = nodes[1],aj = nodes[2] ; /* nodes.push(); */ links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65'); var  ad = {id: 'ad', name:'leopold'},af = nodes[0],aj = nodes[1] ; nodes.push( ad ); links.push( {source: af , target: aj },{source: ad , target: af },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66'); var  ab = {id: 'ab', name:'ludwig'},af = nodes[1],ag = {id: 'ag', name:'stock'},aj = nodes[2] ; nodes.push( ab,ag ); links.push( {source: ag , target: aj },{source: af , target: ag },{source: af , target: aj },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67'); var  af = nodes[1],ag = nodes[2],aj = nodes[3],am = {id: 'am', name:'bardenrode'},ao = {id: 'ao', name:'bedienter'} ; nodes.push( am,ao ); links.push( {source: am , target: ao },{source: aj , target: am },{source: aj , target: ao },{source: af , target: am },{source: af , target: aj },{source: af , target: ag },{source: af , target: ao },{source: ag , target: am },{source: ag , target: aj },{source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'am','ag','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68'); var  af = nodes[0],aj = nodes[2] ; /* nodes.push(); */ links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69'); var  ae = {id: 'ae', name:'greif'},aj = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70'); var  ai = {id: 'ai', name:'wiener'},aj = nodes[1] ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71'); var  ai = nodes[0],aj = nodes[1],ak = {id: 'ak', name:'hyazinthe'},ap = {id: 'ap', name:'der_alte_bauer'} ; nodes.push( ak,ap ); links.push( {source: ak , target: ap },{source: ai , target: ap },{source: ai , target: ak },{source: ai , target: aj },{source: aj , target: ap },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72'); var  ae = {id: 'ae', name:'greif'},ak = nodes[2],ap = nodes[3] ; nodes.push( ae ); links.push( {source: ae , target: ak },{source: ae , target: ap },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 355000);

setTimeout(function() { console.log('remv72'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 358750);

setTimeout(function() { console.log('load73'); var  ae = nodes[0],af = {id: 'af', name:'baronesse'},ak = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ak },{source: ae , target: af },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 360000);

setTimeout(function() { console.log('remv73'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 363750);

setTimeout(function() { console.log('load74'); var  ae = nodes[0],ak = nodes[2] ; /* nodes.push(); */ links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt.';
}, 365000);

setTimeout(function() { console.log('remv74'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 368750);

setTimeout(function() { console.log('load75'); var  af = {id: 'af', name:'baronesse'},aj = {id: 'aj', name:'figaro'} ; nodes.push( af,aj ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 370000);

setTimeout(function() { console.log('remv75'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 373750);

setTimeout(function() { console.log('load76'); var  aa = {id: 'aa', name:'friedrich'},af = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 375000);

setTimeout(function() { console.log('remv76'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 378750);

setTimeout(function() { console.log('load77'); var  aa = nodes[0],af = nodes[1],ak = {id: 'ak', name:'hyazinthe'},aq = {id: 'aq', name:'laufer'} ; nodes.push( ak,aq ); links.push( {source: af , target: ak },{source: af , target: aq },{source: ak , target: aq },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 380000);

setTimeout(function() { console.log('remv77'); var rm = [ 'aa','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 383750);

setTimeout(function() { console.log('load78'); var  af = nodes[1],ak = nodes[2] ; /* nodes.push(); */ links.push( {source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 385000);

setTimeout(function() { console.log('remv78'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 388750);

setTimeout(function() { console.log('load79'); var  af = nodes[0],aj = {id: 'aj', name:'figaro'} ; nodes.push( aj ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 390000);

setTimeout(function() { console.log('remv79'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 393750);

setTimeout(function() { console.log('load80'); var  ae = {id: 'ae', name:'greif'},aj = nodes[1],al = {id: 'al', name:'christoph'} ; nodes.push( ae,al ); links.push( {source: ae , target: al },{source: ae , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 395000);

setTimeout(function() { console.log('remv80'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 398750);

setTimeout(function() { console.log('load81'); var  aj = nodes[1],al = nodes[2] ; /* nodes.push(); */ links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 400000);

setTimeout(function() { console.log('remv81'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 403750);

setTimeout(function() { console.log('load82'); var  ah = {id: 'ah', name:'baptist'},aj = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 405000);

setTimeout(function() { console.log('remv82'); var rm = [ 'ah','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 408750);

setTimeout(function() { console.log('load83'); var  ae = {id: 'ae', name:'greif'},ak = {id: 'ak', name:'hyazinthe'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 410000);

setTimeout(function() { console.log('remv83'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 413750);

setTimeout(function() { console.log('load84'); var  ah = {id: 'ah', name:'baptist'},ak = nodes[1],al = {id: 'al', name:'christoph'} ; nodes.push( ah,al ); links.push( {source: ah , target: ak },{source: ah , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 415000);

setTimeout(function() { console.log('remv84'); var rm = [ 'ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 418750);

setTimeout(function() { console.log('load85'); var  ad = {id: 'ad', name:'leopold'},ae = {id: 'ae', name:'greif'},ak = nodes[1],am = {id: 'am', name:'bardenrode'} ; nodes.push( ad,ae,am ); links.push( {source: ak , target: am },{source: ad , target: am },{source: ad , target: ak },{source: ad , target: ae },{source: ae , target: am },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 420000);

setTimeout(function() { console.log('remv85'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 423750);

setTimeout(function() { console.log('load86'); var  ad = nodes[0],ae = nodes[1],ah = {id: 'ah', name:'baptist'},aj = {id: 'aj', name:'figaro'},ak = nodes[2],al = {id: 'al', name:'christoph'},am = nodes[3] ; nodes.push( ah,aj,al ); links.push( {source: al , target: am },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: aj },{source: ah , target: ak },{source: ak , target: al },{source: ak , target: am },{source: ad , target: al },{source: ad , target: am },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: ae },{source: ae , target: al },{source: ae , target: am },{source: ae , target: aj },{source: ae , target: ah },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 425000);

setTimeout(function() { console.log('remv86'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 428750);

setTimeout(function() { console.log('load87'); var  ad = nodes[0],ae = nodes[1],af = {id: 'af', name:'baronesse'},ah = nodes[2],aj = nodes[3],ak = nodes[4],al = nodes[5],am = nodes[6] ; nodes.push( af ); links.push( {source: af , target: ak },{source: af , target: aj },{source: af , target: al },{source: af , target: ah },{source: af , target: am },{source: ak , target: al },{source: ak , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: am },{source: al , target: am },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: am },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: al },{source: ad , target: ah },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 430000);

setTimeout(function() { console.log('remv87'); var rm = [ 'aj','ae','ad','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 433750);

setTimeout(function() { console.log('load88'); var  af = nodes[2],ah = nodes[3],ak = nodes[5],ak = nodes[5],al = nodes[6] ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: af , target: ak },{source: af , target: al },{source: af , target: ah },{source: af , target: ak },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 435000);

setTimeout(function() { console.log('remv88'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 438750);

setTimeout(function() { console.log('load89'); var  af = nodes[0],ag = {id: 'ag', name:'stock'},aj = {id: 'aj', name:'figaro'},ak = nodes[2],al = nodes[4] ; nodes.push( ag,aj ); links.push( {source: ak , target: al },{source: aj , target: ak },{source: aj , target: al },{source: af , target: ak },{source: af , target: al },{source: af , target: aj },{source: af , target: ag },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 440000);

setTimeout(function() { console.log('remv89'); var rm = [ 'aj','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 443750);

setTimeout(function() { console.log('load90'); var  ah = {id: 'ah', name:'baptist'},ak = nodes[3],al = nodes[4] ; nodes.push( ah ); links.push( {source: ak , target: al },{source: ah , target: ak },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
}, 445000);

setTimeout(function() { console.log('remv90'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 448750);

setTimeout(function() { console.log('load91'); var  ah = nodes[0],ak = nodes[1],al = nodes[2],am = {id: 'am', name:'bardenrode'} ; nodes.push( am ); links.push( {source: ak , target: am },{source: ak , target: al },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 450000);

setTimeout(function() { console.log('remv91'); var rm = [ 'ak','ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 453750);

setTimeout(function() { console.log('load92'); var  ad = {id: 'ad', name:'leopold'},am = nodes[3] ; nodes.push( ad ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 455000);

setTimeout(function() { console.log('remv92'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 458750);

setTimeout(function() { console.log('load93'); var  ad = nodes[0],ah = {id: 'ah', name:'baptist'},aj = {id: 'aj', name:'figaro'},ak = {id: 'ak', name:'hyazinthe'},al = {id: 'al', name:'christoph'},am = nodes[1] ; nodes.push( ah,aj,ak,al ); links.push( {source: aj , target: am },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: am },{source: ak , target: al },{source: ad , target: aj },{source: ad , target: am },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ah },{source: al , target: am },{source: ah , target: aj },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 460000);

setTimeout(function() { console.log('remv93'); var rm = [ 'aj','ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 463750);

setTimeout(function() { console.log('load94'); var  ad = nodes[0],af = {id: 'af', name:'baronesse'},al = nodes[4],am = nodes[5] ; nodes.push( af ); links.push( {source: af , target: al },{source: af , target: am },{source: al , target: am },{source: ad , target: af },{source: ad , target: al },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 465000);

setTimeout(function() { console.log('remv94'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 468750);

setTimeout(function() { console.log('load95'); var  ad = nodes[0],af = nodes[1],ai = {id: 'ai', name:'wiener'},ai = {id: 'ai', name:'wiener'},ak = {id: 'ak', name:'hyazinthe'},am = nodes[3] ; nodes.push( ai,ak ); links.push( {source: af , target: ai },{source: af , target: ak },{source: af , target: ai },{source: af , target: am },{source: ai , target: ak },{source: ai , target: am },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: am },{source: ak , target: am },{source: ai , target: ak },{source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt.';
}, 470000);
