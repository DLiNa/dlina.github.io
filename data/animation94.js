setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'zar'},ab = {id: 'ab', name:'iwanow'},ac = {id: 'ac', name:'chor'},ah = {id: 'ah', name:'chor_der_zimmerleute'} ; nodes.push( aa,ab,ac,ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ah },{source: ab , target: ac },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ad = {id: 'ad', name:'marie'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ae = {id: 'ae', name:'lefort'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = {id: 'ab', name:'iwanow'},af = {id: 'af', name:'meisterin_browe'} ; nodes.push( ab,af ); links.push( {source: ab , target: af },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1],af = nodes[2],ag = {id: 'ag', name:'van_bett'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ab },{source: ab , target: ag },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'chor'},ag = nodes[3],ah = {id: 'ah', name:'chor_der_zimmerleute'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ag },{source: ac , target: ah },{source: ag , target: ah },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac','aa','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  af = {id: 'af', name:'meisterin_browe'},ag = nodes[3] ; nodes.push( af ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  af = nodes[0],ag = nodes[1],ai = {id: 'ai', name:'lord'} ; nodes.push( ai ); links.push( {source: af , target: ai },{source: af , target: ag },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ag = nodes[1],ai = nodes[2] ; /* nodes.push(); */ links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = {id: 'ab', name:'iwanow'},ag = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = nodes[0],ad = {id: 'ad', name:'marie'},aj = {id: 'aj', name:'marquis'} ; nodes.push( ad,aj ); links.push( {source: ad , target: aj },{source: ab , target: aj },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = {id: 'aa', name:'zar'},ab = nodes[0],ad = nodes[1],aj = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: aj },{source: ad , target: aj },{source: ab , target: ad },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'chor'},ad = nodes[2],af = {id: 'af', name:'meisterin_browe'},aj = nodes[3],ak = {id: 'ak', name:'die_mädchen'} ; nodes.push( ac,af,ak ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: aj },{source: af , target: ak },{source: af , target: aj },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: aj },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: aj },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'af','ad','ab','ak','aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = nodes[2],al = {id: 'al', name:'einzelne_stimmen'},am = {id: 'am', name:'männer'},an = {id: 'an', name:'frauen'} ; nodes.push( al,am,an ); links.push( {source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = {id: 'aa', name:'zar'},ab = {id: 'ab', name:'iwanow'},ae = {id: 'ae', name:'lefort'},aq = {id: 'aq', name:'mehrere_gäste'} ; nodes.push( aa,ab,ae,aq ); links.push( {source: ab , target: ae },{source: ab , target: aq },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: aq },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ae','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ab = nodes[1],aj = {id: 'aj', name:'marquis'} ; nodes.push( aj ); links.push( {source: aa , target: aj },{source: aa , target: ab },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],ab = nodes[1],ad = {id: 'ad', name:'marie'},ae = {id: 'ae', name:'lefort'},aj = nodes[2],ao = {id: 'ao', name:'andere'},aq = {id: 'aq', name:'mehrere_gäste'} ; nodes.push( ad,ae,ao,aq ); links.push( {source: ad , target: aj },{source: ad , target: ae },{source: ad , target: aq },{source: ad , target: ao },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ae },{source: ab , target: aq },{source: ab , target: ao },{source: aj , target: aq },{source: aj , target: ao },{source: ae , target: aj },{source: ae , target: aq },{source: ae , target: ao },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ae },{source: aa , target: aq },{source: aa , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aj','ae','aa','aq','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ab = nodes[1],ad = nodes[2],af = {id: 'af', name:'meisterin_browe'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ab , target: af },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = nodes[1],af = nodes[2],ag = {id: 'ag', name:'van_bett'} ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = {id: 'aa', name:'zar'},ab = {id: 'ab', name:'iwanow'},ae = {id: 'ae', name:'lefort'},ag = nodes[2],ai = {id: 'ai', name:'lord'},aj = {id: 'aj', name:'marquis'} ; nodes.push( aa,ab,ae,ai,aj ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ai , target: aj },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ae },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ae },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ab','aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = {id: 'ac', name:'chor'},ad = {id: 'ad', name:'marie'},af = {id: 'af', name:'meisterin_browe'},ag = nodes[3],ai = nodes[4],aj = nodes[5],ao = {id: 'ao', name:'andere'},ap = {id: 'ap', name:'einige'},aq = {id: 'aq', name:'mehrere_gäste'} ; nodes.push( ac,ad,af,ao,ap,aq ); links.push( {source: af , target: aj },{source: af , target: ai },{source: af , target: ap },{source: af , target: ao },{source: af , target: ag },{source: af , target: aq },{source: aj , target: ap },{source: aj , target: ao },{source: aj , target: aq },{source: ai , target: aj },{source: ai , target: ap },{source: ai , target: ao },{source: ai , target: aq },{source: ap , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: ap },{source: ag , target: ao },{source: ag , target: aq },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: ap },{source: ad , target: ao },{source: ad , target: ag },{source: ad , target: aq },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ap },{source: ac , target: ao },{source: ac , target: ag },{source: ac , target: aq },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aj','ai','ap','ao','aq','ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = {id: 'aa', name:'zar'},ae = {id: 'ae', name:'lefort'},af = nodes[2],ag = nodes[3] ; nodes.push( aa,ae ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ab = {id: 'ab', name:'iwanow'},ac = {id: 'ac', name:'chor'},ad = {id: 'ad', name:'marie'},ae = nodes[1],af = nodes[2],ag = nodes[3],ai = {id: 'ai', name:'lord'},aj = {id: 'aj', name:'marquis'},ar = {id: 'ar', name:'offizier'} ; nodes.push( ab,ac,ad,ai,aj,ar ); links.push( {source: ag , target: ar },{source: ag , target: aj },{source: ag , target: ai },{source: ae , target: ag },{source: ae , target: ar },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: af },{source: aa , target: ag },{source: aa , target: ar },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: af },{source: ab , target: ag },{source: ab , target: ar },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: af },{source: aj , target: ar },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: af },{source: ai , target: ar },{source: ai , target: aj },{source: ad , target: ag },{source: ad , target: ar },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: af },{source: af , target: ag },{source: af , target: ar },{source: af , target: aj },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ar','ae','aa','ab','aj','ai','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = nodes[2],ag = nodes[6],ak = {id: 'ak', name:'die_mädchen'} ; nodes.push( ak ); links.push( {source: ag , target: ak },{source: ac , target: ag },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = {id: 'aa', name:'zar'},ag = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = nodes[0],ad = {id: 'ad', name:'marie'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = {id: 'ab', name:'iwanow'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ab = nodes[0],ad = {id: 'ad', name:'marie'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = {id: 'aa', name:'zar'},ab = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = nodes[0],ab = nodes[1],ae = {id: 'ae', name:'lefort'},aj = {id: 'aj', name:'marquis'} ; nodes.push( ae,aj ); links.push( {source: aa , target: aj },{source: aa , target: ae },{source: aa , target: ab },{source: ae , target: aj },{source: ab , target: aj },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa','aj','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ab = nodes[1],ac = {id: 'ac', name:'chor'},ad = {id: 'ad', name:'marie'},ag = {id: 'ag', name:'van_bett'},as = {id: 'as', name:'ratsdiener'} ; nodes.push( ac,ad,ag,as ); links.push( {source: ac , target: ag },{source: ac , target: ad },{source: ac , target: as },{source: ag , target: as },{source: ad , target: ag },{source: ad , target: as },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ac','ad','ab','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = {id: 'aa', name:'zar'},ae = {id: 'ae', name:'lefort'},ag = nodes[3],aj = {id: 'aj', name:'marquis'} ; nodes.push( aa,ae,aj ); links.push( {source: ag , target: aj },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: aj },{source: ae , target: ag },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 180000);
