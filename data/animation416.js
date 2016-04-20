setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'affriduro'},ac = {id: 'ac', name:'odi'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'distichon'},ae = {id: 'ae', name:'mehrere'} ; nodes.push( ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[1],ac = nodes[2],ad = nodes[3],ag = {id: 'ag', name:'narr'} ; nodes.push( ag ); links.push( {source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ac },{source: ad , target: ag },{source: ac , target: ag },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'chor'},ab = nodes[0],ac = nodes[1],ad = nodes[2],ag = nodes[3],ah = {id: 'ah', name:'hermione'} ; nodes.push( aa,ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ac },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ac },{source: ad , target: ah },{source: ad , target: ag },{source: ag , target: ah },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[3],ag = nodes[4],ah = nodes[5] ; /* nodes.push(); */ links.push( {source: ad , target: ah },{source: ad , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = {id: 'ab', name:'affriduro'},ac = {id: 'ac', name:'odi'},ad = nodes[0],ag = nodes[1],ah = nodes[2],ai = {id: 'ai', name:'vipria'},aj = {id: 'aj', name:'arrogantia'} ; nodes.push( ab,ac,ai,aj ); links.push( {source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ac },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ah },{source: ad , target: ag },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = nodes[0],ac = nodes[1],ad = nodes[2],af = {id: 'af', name:'volk'},ag = nodes[3],ah = nodes[4],ai = nodes[5],aj = nodes[6] ; nodes.push( af ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ac },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','af','ad','ah','ai','aj','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ak = {id: 'ak', name:'amphio'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ah = {id: 'ah', name:'hermione'},ak = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ab = {id: 'ab', name:'affriduro'},ac = {id: 'ac', name:'odi'},ag = {id: 'ag', name:'narr'},ah = nodes[0] ; nodes.push( ab,ac,ag ); links.push( {source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ac },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','ah','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ai = {id: 'ai', name:'vipria'},aj = {id: 'aj', name:'arrogantia'},al = {id: 'al', name:'phantasie'} ; nodes.push( ai,aj,al ); links.push( {source: ai , target: aj },{source: ai , target: al },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ak = {id: 'ak', name:'amphio'},al = nodes[2] ; nodes.push( ak ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ai = {id: 'ai', name:'vipria'},aj = {id: 'aj', name:'arrogantia'},al = nodes[1] ; nodes.push( ai,aj ); links.push( {source: ai , target: al },{source: ai , target: aj },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','al','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = {id: 'aa', name:'chor'},am = {id: 'am', name:'mehrere_gäste'},an = {id: 'an', name:'wirt'},ao = {id: 'ao', name:'schuster'},ap = {id: 'ap', name:'spengler'},aq = {id: 'aq', name:'fremder'},ar = {id: 'ar', name:'kellner'} ; nodes.push( aa,am,an,ao,ap,aq,ar ); links.push( {source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aa','am','an','ao','ap','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  as = {id: 'as', name:'nachtigall'} ; nodes.push( as ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '15. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  an = {id: 'an', name:'wirt'},ao = {id: 'ao', name:'schuster'},aq = {id: 'aq', name:'fremder'},ar = {id: 'ar', name:'kellner'},as = nodes[0] ; nodes.push( an,ao,aq,ar ); links.push( {source: an , target: as },{source: an , target: ao },{source: an , target: ar },{source: an , target: aq },{source: ao , target: as },{source: ao , target: ar },{source: ao , target: aq },{source: ar , target: as },{source: aq , target: as },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '15. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Lied.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'chor'},ai = {id: 'ai', name:'vipria'},an = nodes[0],ao = nodes[1],aq = nodes[2],as = nodes[4] ; nodes.push( aa,ai ); links.push( {source: aq , target: as },{source: ao , target: aq },{source: ao , target: as },{source: an , target: aq },{source: an , target: as },{source: an , target: ao },{source: ai , target: aq },{source: ai , target: as },{source: ai , target: ao },{source: ai , target: an },{source: aa , target: aq },{source: aa , target: as },{source: aa , target: ao },{source: aa , target: an },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '15. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Lied.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aq','ao','an','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ai = nodes[1],as = nodes[5] ; /* nodes.push(); */ links.push( {source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ai = nodes[0],aj = {id: 'aj', name:'arrogantia'},as = nodes[1] ; nodes.push( aj ); links.push( {source: aj , target: as },{source: ai , target: aj },{source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aj','as','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = {id: 'aa', name:'chor'},ac = {id: 'ac', name:'odi'},at = {id: 'at', name:'ein_dichter'} ; nodes.push( aa,ac,at ); links.push( {source: aa , target: ac },{source: aa , target: at },{source: ac , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'distichon'},ag = {id: 'ag', name:'narr'},at = nodes[2] ; nodes.push( ad,ag ); links.push( {source: ag , target: at },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: at },{source: aa , target: ad },{source: ac , target: ag },{source: ac , target: at },{source: ac , target: ad },{source: ad , target: ag },{source: ad , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],ag = nodes[3],ah = {id: 'ah', name:'hermione'},at = nodes[4] ; nodes.push( ah ); links.push( {source: ah , target: at },{source: ag , target: ah },{source: ag , target: at },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: at },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: at },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad','aa','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ac = nodes[1],ag = nodes[3],ah = nodes[4] ; /* nodes.push(); */ links.push( {source: ac , target: ag },{source: ac , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ac','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  as = {id: 'as', name:'nachtigall'} ; nodes.push( as ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '7. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ag = {id: 'ag', name:'narr'},ah = {id: 'ah', name:'hermione'},as = nodes[0] ; nodes.push( ag,ah ); links.push( {source: ah , target: as },{source: ag , target: ah },{source: ag , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '7. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Arie';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'as','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ah = nodes[1],ak = {id: 'ak', name:'amphio'} ; nodes.push( ak ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ai = {id: 'ai', name:'vipria'},aj = {id: 'aj', name:'arrogantia'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ai = nodes[0],aj = nodes[1],al = {id: 'al', name:'phantasie'},as = {id: 'as', name:'nachtigall'} ; nodes.push( al,as ); links.push( {source: aj , target: as },{source: aj , target: al },{source: ai , target: as },{source: ai , target: aj },{source: ai , target: al },{source: al , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ai = nodes[0],aj = nodes[1],al = nodes[2],as = nodes[3] ; /* nodes.push(); */ links.push( {source: aj , target: al },{source: aj , target: as },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: as },{source: al , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = {id: 'aa', name:'chor'},ad = {id: 'ad', name:'distichon'},ag = {id: 'ag', name:'narr'},ah = {id: 'ah', name:'hermione'},ai = nodes[0],aj = nodes[1],ak = {id: 'ak', name:'amphio'},al = nodes[2],as = nodes[3],at = {id: 'at', name:'ein_dichter'},au = {id: 'au', name:'alle_dichter'},av = {id: 'av', name:'zauberschwestern'},aw = {id: 'aw', name:'apoll'},aw = {id: 'aw', name:'apoll'} ; nodes.push( aa,ad,ag,ah,ak,at,au,av,aw ); links.push( {source: au , target: av },{source: au , target: aw },{source: au , target: aw },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: at , target: aw },{source: ai , target: au },{source: ai , target: at },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: as },{source: ai , target: al },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: aw },{source: ah , target: au },{source: ah , target: at },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: as },{source: ah , target: al },{source: ah , target: av },{source: ah , target: aw },{source: ah , target: aw },{source: ak , target: au },{source: ak , target: at },{source: ak , target: as },{source: ak , target: al },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: aw },{source: ag , target: au },{source: ag , target: at },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: as },{source: ag , target: al },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: aw },{source: aj , target: au },{source: aj , target: at },{source: aj , target: ak },{source: aj , target: as },{source: aj , target: al },{source: aj , target: av },{source: aj , target: aw },{source: aj , target: aw },{source: as , target: au },{source: as , target: at },{source: as , target: av },{source: as , target: aw },{source: as , target: aw },{source: ad , target: au },{source: ad , target: at },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: as },{source: ad , target: al },{source: ad , target: av },{source: ad , target: aw },{source: ad , target: aw },{source: aa , target: au },{source: aa , target: at },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: ak },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: as },{source: aa , target: ad },{source: aa , target: al },{source: aa , target: av },{source: aa , target: aw },{source: aa , target: aw },{source: al , target: au },{source: al , target: at },{source: al , target: as },{source: al , target: av },{source: al , target: aw },{source: al , target: aw },{source: av , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 145000);
