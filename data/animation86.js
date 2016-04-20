setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'illo'},ab = {id: 'ab', name:'isolani'},ac = {id: 'ac', name:'buttler'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'octavio'},ae = {id: 'ae', name:'questenberg'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = nodes[3],ae = nodes[4] ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ae = nodes[1],af = {id: 'af', name:'max'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ag = {id: 'ag', name:'zweiter_bedienter'},ah = {id: 'ah', name:'bedienter'},ah = {id: 'ah', name:'bedienter'},ai = {id: 'ai', name:'seni'},aj = {id: 'aj', name:'dritter_bedienter'} ; nodes.push( ag,ah,ai,aj ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah','ag','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ak = {id: 'ak', name:'wallenstein'},al = {id: 'al', name:'herzogin'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ak = nodes[0],al = nodes[1],am = {id: 'am', name:'gräfin'},an = {id: 'an', name:'thekla'} ; nodes.push( am,an ); links.push( {source: am , target: an },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: al , target: am },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  af = {id: 'af', name:'max'},ak = nodes[0],am = nodes[2],an = nodes[3],ao = {id: 'ao', name:'terzky'} ; nodes.push( af,ao ); links.push( {source: am , target: an },{source: am , target: ao },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: af , target: am },{source: af , target: ak },{source: af , target: an },{source: af , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'am','af','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ak = nodes[1],ao = nodes[4] ; /* nodes.push(); */ links.push( {source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = {id: 'aa', name:'illo'},ak = nodes[0],ao = nodes[1],ap = {id: 'ap', name:'kammerdiener'} ; nodes.push( aa,ap ); links.push( {source: ak , target: ao },{source: ak , target: ap },{source: aa , target: ak },{source: aa , target: ao },{source: aa , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ab = {id: 'ab', name:'isolani'},ac = {id: 'ac', name:'buttler'},ae = {id: 'ae', name:'questenberg'},af = {id: 'af', name:'max'},ak = nodes[1],ao = nodes[2],aq = {id: 'aq', name:'götz'},ar = {id: 'ar', name:'tiefenbach'},as = {id: 'as', name:'colalto'} ; nodes.push( ab,ac,ae,af,aq,ar,as ); links.push( {source: ak , target: ao },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: ao },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: as },{source: af , target: ak },{source: af , target: ao },{source: af , target: aq },{source: af , target: ar },{source: af , target: as },{source: ac , target: ak },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ao },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: as },{source: ab , target: ak },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ao },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: as },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ak','ae','af','ac','ab','aq','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = nodes[0],ao = nodes[6] ; /* nodes.push(); */ links.push( {source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = nodes[0],ah = {id: 'ah', name:'bedienter'},am = {id: 'am', name:'gräfin'},ao = nodes[1] ; nodes.push( ah,am ); links.push( {source: am , target: ao },{source: ah , target: ao },{source: ah , target: am },{source: aa , target: ao },{source: aa , target: am },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ao','ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  af = {id: 'af', name:'max'},am = nodes[2] ; nodes.push( af ); links.push( {source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  af = nodes[0],am = nodes[1],an = {id: 'an', name:'thekla'} ; nodes.push( an ); links.push( {source: af , target: an },{source: af , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  af = nodes[0],an = nodes[2] ; /* nodes.push(); */ links.push( {source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  af = nodes[0],am = {id: 'am', name:'gräfin'},an = nodes[1] ; nodes.push( am ); links.push( {source: am , target: an },{source: af , target: am },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  am = nodes[1],an = nodes[2] ; /* nodes.push(); */ links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ab = {id: 'ab', name:'isolani'},af = {id: 'af', name:'max'},ao = {id: 'ao', name:'terzky'},aq = {id: 'aq', name:'götz'},as = {id: 'as', name:'colalto'} ; nodes.push( ab,af,ao,aq,as ); links.push( {source: ab , target: as },{source: ab , target: aq },{source: ab , target: ao },{source: ab , target: af },{source: aq , target: as },{source: ao , target: as },{source: ao , target: aq },{source: af , target: as },{source: af , target: aq },{source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab','as','aq','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ao = nodes[2],at = {id: 'at', name:'neumann'} ; nodes.push( at ); links.push( {source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = {id: 'aa', name:'illo'},ao = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ac = {id: 'ac', name:'buttler'},ao = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ao },{source: aa , target: ac },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ac','aa','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ag = {id: 'ag', name:'zweiter_bedienter'},ah = {id: 'ah', name:'bedienter'},ah = {id: 'ah', name:'bedienter'},aj = {id: 'aj', name:'dritter_bedienter'},at = {id: 'at', name:'neumann'},au = {id: 'au', name:'kellermeister'},av = {id: 'av', name:'vierter_bedienter'} ; nodes.push( ag,ah,aj,at,au,av ); links.push( {source: au , target: av },{source: at , target: au },{source: at , target: av },{source: ah , target: au },{source: ah , target: at },{source: ah , target: aj },{source: ah , target: av },{source: ag , target: au },{source: ag , target: at },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: av },{source: ah , target: au },{source: ah , target: at },{source: ah , target: aj },{source: ah , target: av },{source: aj , target: au },{source: aj , target: at },{source: aj , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'au','at','ah','ag','aj','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ab = {id: 'ab', name:'isolani'},ac = {id: 'ac', name:'buttler'},ad = {id: 'ad', name:'octavio'},af = {id: 'af', name:'max'},ao = {id: 'ao', name:'terzky'},aq = {id: 'aq', name:'götz'},ar = {id: 'ar', name:'tiefenbach'} ; nodes.push( ab,ac,ad,af,ao,aq,ar ); links.push( {source: ab , target: aq },{source: ab , target: ar },{source: ab , target: ao },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: aq , target: ar },{source: ao , target: aq },{source: ao , target: ar },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: ao },{source: ad , target: af },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: ao },{source: ac , target: ad },{source: ac , target: af },{source: af , target: aq },{source: af , target: ar },{source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = {id: 'aa', name:'illo'},ab = nodes[0],ac = nodes[1],ad = nodes[2],af = nodes[3],ao = nodes[4],aq = nodes[5],ar = nodes[6] ; nodes.push( aa ); links.push( {source: aa , target: aq },{source: aa , target: ac },{source: aa , target: ao },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ar },{source: aq , target: ar },{source: ac , target: aq },{source: ac , target: ao },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ar },{source: ao , target: aq },{source: ao , target: ar },{source: ab , target: aq },{source: ab , target: ac },{source: ab , target: ao },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ar },{source: af , target: aq },{source: af , target: ao },{source: af , target: ar },{source: ad , target: aq },{source: ad , target: ao },{source: ad , target: af },{source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aa','aq','ac','ao','ab','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ad = nodes[3],af = nodes[4],ap = {id: 'ap', name:'kammerdiener'} ; nodes.push( ap ); links.push( {source: ad , target: ap },{source: ad , target: af },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ad = nodes[0],ap = nodes[2],aw = {id: 'aw', name:'kornett'} ; nodes.push( aw ); links.push( {source: ad , target: ap },{source: ad , target: aw },{source: ap , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ap','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ad = nodes[0],af = {id: 'af', name:'max'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 140000);
