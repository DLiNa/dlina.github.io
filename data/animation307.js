setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'dienerinnen'},ab = {id: 'ab', name:'nancy'},ac = {id: 'ac', name:'lady'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'erster_diener'},ae = {id: 'ae', name:'zweiter_diener'},af = {id: 'af', name:'dritter_diener'},ag = {id: 'ag', name:'tristan'},ag = {id: 'ag', name:'tristan'},ah = {id: 'ah', name:'weitere_mägde'} ; nodes.push( ad,ae,af,ag,ah ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ag },{source: af , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ag },{source: ac , target: ah },{source: ag , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ag },{source: ab , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ae','af','ac','ag','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ai = {id: 'ai', name:'männer'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ah = {id: 'ah', name:'weitere_mägde'},aj = {id: 'aj', name:'pächter'},ak = {id: 'ak', name:'plumkett'},al = {id: 'al', name:'lyonel'} ; nodes.push( ah,aj,ak,al ); links.push( {source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ah = nodes[0],ah = nodes[0],ah = nodes[0],aj = nodes[1],am = {id: 'am', name:'volk'},an = {id: 'an', name:'richter'},ao = {id: 'ao', name:'erste_magd'},ap = {id: 'ap', name:'ein_pächter'},aq = {id: 'aq', name:'zweite_magd'},ar = {id: 'ar', name:'eine_pächterin'},as = {id: 'as', name:'dritte_magd'},at = {id: 'at', name:'vier_mägde'},au = {id: 'au', name:'pächter_und_pächterinnen'} ; nodes.push( ah,am,an,ao,ap,aq,ar,as,at,au ); links.push( {source: am , target: an },{source: am , target: au },{source: am , target: ar },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: as },{source: am , target: at },{source: an , target: au },{source: an , target: ar },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: as },{source: an , target: at },{source: aj , target: am },{source: aj , target: an },{source: aj , target: au },{source: aj , target: ar },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: as },{source: aj , target: at },{source: ar , target: au },{source: ar , target: as },{source: ar , target: at },{source: ah , target: am },{source: ah , target: an },{source: ah , target: au },{source: ah , target: aj },{source: ah , target: ar },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: as },{source: ah , target: at },{source: ao , target: au },{source: ao , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: as },{source: ao , target: at },{source: ap , target: au },{source: ap , target: ar },{source: ap , target: aq },{source: ap , target: as },{source: ap , target: at },{source: aq , target: au },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: as , target: au },{source: as , target: at },{source: at , target: au },{source: ah , target: am },{source: ah , target: an },{source: ah , target: au },{source: ah , target: aj },{source: ah , target: ar },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: as },{source: ah , target: at },{source: ah , target: am },{source: ah , target: an },{source: ah , target: au },{source: ah , target: aj },{source: ah , target: ar },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: as },{source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'am','an','au','aj','ar','ao','ap','aq','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = {id: 'ab', name:'nancy'},ac = {id: 'ac', name:'lady'},ag = {id: 'ag', name:'tristan'},ah = nodes[0],ak = {id: 'ak', name:'plumkett'},al = {id: 'al', name:'lyonel'} ; nodes.push( ab,ac,ag,ak,al ); links.push( {source: ac , target: ag },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ah },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ah },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ah },{source: ak , target: al },{source: ah , target: ak },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = nodes[0],ac = nodes[1],ag = nodes[2],aj = {id: 'aj', name:'pächter'},ak = nodes[3],al = nodes[4],am = {id: 'am', name:'volk'},an = {id: 'an', name:'richter'} ; nodes.push( aj,am,an ); links.push( {source: ag , target: ak },{source: ag , target: al },{source: ag , target: an },{source: ag , target: am },{source: ag , target: aj },{source: ak , target: al },{source: ak , target: an },{source: ak , target: am },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: an },{source: ac , target: am },{source: ac , target: aj },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: an },{source: ab , target: am },{source: ab , target: aj },{source: al , target: an },{source: al , target: am },{source: am , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: an },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','an','am','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = nodes[0],ac = nodes[1],ak = nodes[2],al = nodes[3] ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: ac , target: ak },{source: ac , target: al },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ac = nodes[0],al = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = {id: 'ab', name:'nancy'},ac = nodes[0],ak = {id: 'ak', name:'plumkett'},al = nodes[1] ; nodes.push( ab,ak ); links.push( {source: ak , target: al },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ac },{source: ac , target: ak },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = nodes[0],ac = nodes[1],ag = {id: 'ag', name:'tristan'} ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: ab , target: ac },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ac','ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ak = {id: 'ak', name:'plumkett'},al = {id: 'al', name:'lyonel'},av = {id: 'av', name:'einige_knechte'},av = {id: 'av', name:'einige_knechte'},av = {id: 'av', name:'einige_knechte'},av = {id: 'av', name:'einige_knechte'},aw = {id: 'aw', name:'das_gesinde'} ; nodes.push( ak,al,av,aw ); links.push( {source: ak , target: al },{source: ak , target: av },{source: ak , target: av },{source: ak , target: av },{source: ak , target: av },{source: ak , target: aw },{source: al , target: av },{source: al , target: av },{source: al , target: av },{source: al , target: av },{source: al , target: aw },{source: av , target: aw },{source: av , target: aw },{source: av , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'al','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ai = {id: 'ai', name:'männer'},ak = nodes[0] ; nodes.push( ai ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = {id: 'ab', name:'nancy'},ax = {id: 'ax', name:'jägerinnen'} ; nodes.push( ab,ax ); links.push( {source: ab , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = nodes[0],ak = {id: 'ak', name:'plumkett'},ax = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: ax },{source: ab , target: ak },{source: ab , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ak','ab','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  al = {id: 'al', name:'lyonel'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = {id: 'ac', name:'lady'},ag = {id: 'ag', name:'tristan'} ; nodes.push( ac,ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = nodes[0],al = {id: 'al', name:'lyonel'} ; nodes.push( al ); links.push( {source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = nodes[0],ag = {id: 'ag', name:'tristan'},al = nodes[1],ay = {id: 'ay', name:'hofgesellschaft'} ; nodes.push( ag,ay ); links.push( {source: ag , target: al },{source: ag , target: ay },{source: ac , target: ag },{source: ac , target: al },{source: ac , target: ay },{source: al , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ab = {id: 'ab', name:'nancy'},ac = nodes[0],ag = nodes[1],ak = {id: 'ak', name:'plumkett'},al = nodes[2],ay = nodes[3] ; nodes.push( ab,ak ); links.push( {source: ak , target: al },{source: ak , target: ay },{source: al , target: ay },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ay },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ay },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ag },{source: ac , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak','al','ab','ag','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = {id: 'ab', name:'nancy'},ac = nodes[0],ak = {id: 'ak', name:'plumkett'} ; nodes.push( ab,ak ); links.push( {source: ab , target: ak },{source: ab , target: ac },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = nodes[0],al = {id: 'al', name:'lyonel'} ; nodes.push( al ); links.push( {source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = {id: 'ab', name:'nancy'},ac = nodes[0],ak = {id: 'ak', name:'plumkett'} ; nodes.push( ab,ak ); links.push( {source: ab , target: ak },{source: ab , target: ac },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = nodes[0],ac = {id: 'ac', name:'lady'},ah = {id: 'ah', name:'weitere_mägde'},ai = {id: 'ai', name:'männer'},ai = {id: 'ai', name:'männer'},ai = {id: 'ai', name:'männer'},aj = {id: 'aj', name:'pächter'},ak = nodes[2],al = {id: 'al', name:'lyonel'} ; nodes.push( ac,ah,ai,aj,al ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ac , target: ai },{source: ac , target: ai },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebter Auftritt';
}, 135000);
