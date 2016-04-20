setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'zenobius'},ab = {id: 'ab', name:'bustorius'},ac = {id: 'ac', name:'borax'},ad = {id: 'ad', name:'antimonia'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ag = {id: 'ag', name:'diener'} ; nodes.push( ag ); links.push( {source: ab , target: ag },{source: aa , target: ag },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'borax'},ad = {id: 'ad', name:'antimonia'},ae = {id: 'ae', name:'lakrimosa'},af = {id: 'af', name:'ajaxerle'},ag = nodes[2],ag = nodes[2],ag = nodes[2],ah = {id: 'ah', name:'fiaker'},ai = {id: 'ai', name:'genius'},ai = {id: 'ai', name:'genius'} ; nodes.push( ac,ad,ae,af,ah,ai ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ag },{source: af , target: ag },{source: af , target: ai },{source: af , target: ai },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ai },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ag },{source: aa , target: ai },{source: aa , target: ai },{source: ah , target: ai },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ab','ag','ac','ad','ae','aa','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aj = {id: 'aj', name:'stimme_von_unten'},ak = {id: 'ak', name:'lorenz'},al = {id: 'al', name:'habakuk'} ; nodes.push( aj,ak,al ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ak = nodes[0],am = {id: 'am', name:'lottchen'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ak = nodes[0],al = {id: 'al', name:'habakuk'},am = nodes[1] ; nodes.push( al ); links.push( {source: al , target: am },{source: ak , target: al },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'al','ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  an = {id: 'an', name:'wurzel'} ; nodes.push( an ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ak = {id: 'ak', name:'lorenz'},an = nodes[0] ; nodes.push( ak ); links.push( {source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  am = {id: 'am', name:'lottchen'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  af = {id: 'af', name:'ajaxerle'},am = nodes[0],an = {id: 'an', name:'wurzel'},ao = {id: 'ao', name:'karl'} ; nodes.push( af,an,ao ); links.push( {source: am , target: ao },{source: am , target: an },{source: af , target: ao },{source: af , target: am },{source: af , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  af = nodes[0],am = nodes[1],an = nodes[2],ap = {id: 'ap', name:'satyr'} ; nodes.push( ap ); links.push( {source: an , target: ap },{source: af , target: an },{source: af , target: am },{source: af , target: ap },{source: am , target: an },{source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an','af','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  am = nodes[0],ao = {id: 'ao', name:'karl'} ; nodes.push( ao ); links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  am = nodes[0],an = {id: 'an', name:'wurzel'},ao = nodes[1],aq = {id: 'aq', name:'schlosser'},ar = {id: 'ar', name:'tischler'} ; nodes.push( an,aq,ar ); links.push( {source: an , target: ao },{source: an , target: aq },{source: an , target: ar },{source: ao , target: aq },{source: ao , target: ar },{source: am , target: an },{source: am , target: ao },{source: am , target: aq },{source: am , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'an','ao','am','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  as = {id: 'as', name:'illi'} ; nodes.push( as ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  am = {id: 'am', name:'lottchen'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  am = nodes[0],at = {id: 'at', name:'zufriedenheit'} ; nodes.push( at ); links.push( {source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'at','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  al = {id: 'al', name:'habakuk'},an = {id: 'an', name:'wurzel'},au = {id: 'au', name:'schmeichelfeld'},av = {id: 'av', name:'musensohn'},aw = {id: 'aw', name:'afterling'},ax = {id: 'ax', name:'chor'} ; nodes.push( al,an,au,av,aw,ax ); links.push( {source: an , target: au },{source: an , target: av },{source: an , target: aw },{source: an , target: ax },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: av , target: aw },{source: av , target: ax },{source: aw , target: ax },{source: al , target: an },{source: al , target: au },{source: al , target: av },{source: al , target: aw },{source: al , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'au','av','aw','al','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ak = {id: 'ak', name:'lorenz'},an = nodes[0],ay = {id: 'ay', name:'alle_bedienten'} ; nodes.push( ak,ay ); links.push( {source: an , target: ay },{source: ak , target: an },{source: ak , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ak','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  an = nodes[0],az = {id: 'az', name:'jugend'} ; nodes.push( az ); links.push( {source: an , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ak = {id: 'ak', name:'lorenz'},al = {id: 'al', name:'habakuk'},an = nodes[0],ba = {id: 'ba', name:'alter'},ba = {id: 'ba', name:'alter'} ; nodes.push( ak,al,ba ); links.push( {source: ak , target: an },{source: ak , target: al },{source: ak , target: ba },{source: ak , target: ba },{source: an , target: ba },{source: an , target: ba },{source: al , target: an },{source: al , target: ba },{source: al , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'al','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ak = nodes[0],an = nodes[1] ; /* nodes.push(); */ links.push( {source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  an = nodes[0],bb = {id: 'bb', name:'neid'} ; nodes.push( bb ); links.push( {source: an , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  bb = nodes[0],bc = {id: 'bc', name:'hass'} ; nodes.push( bc ); links.push( {source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  bb = nodes[0],bc = nodes[1],bd = {id: 'bd', name:'tophan'} ; nodes.push( bd ); links.push( {source: bc , target: bd },{source: bb , target: bc },{source: bb , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'bc','bd','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  be = {id: 'be', name:'nigowitz'} ; nodes.push( be ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ao = {id: 'ao', name:'karl'},be = nodes[0],bf = {id: 'bf', name:'papagei'} ; nodes.push( ao,bf ); links.push( {source: ao , target: bf },{source: ao , target: be },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bf','ao','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  bc = {id: 'bc', name:'hass'},bd = {id: 'bd', name:'tophan'} ; nodes.push( bc,bd ); links.push( {source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  am = {id: 'am', name:'lottchen'},at = {id: 'at', name:'zufriedenheit'},bc = nodes[0],bd = nodes[1],bg = {id: 'bg', name:'amor'} ; nodes.push( am,at,bg ); links.push( {source: at , target: bg },{source: at , target: bd },{source: at , target: bc },{source: am , target: bg },{source: am , target: at },{source: am , target: bd },{source: am , target: bc },{source: bd , target: bg },{source: bc , target: bg },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bg','at','am','bd','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  af = {id: 'af', name:'ajaxerle'},an = {id: 'an', name:'wurzel'} ; nodes.push( af,an ); links.push( {source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  an = nodes[0],at = {id: 'at', name:'zufriedenheit'} ; nodes.push( at ); links.push( {source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  af = {id: 'af', name:'ajaxerle'},am = {id: 'am', name:'lottchen'},at = nodes[0],bh = {id: 'bh', name:'lärmen'} ; nodes.push( af,am,bh ); links.push( {source: at , target: bh },{source: af , target: at },{source: af , target: bh },{source: af , target: am },{source: am , target: at },{source: am , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'af','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = {id: 'ab', name:'bustorius'},am = nodes[0],ao = {id: 'ao', name:'karl'},at = nodes[1],bc = {id: 'bc', name:'hass'} ; nodes.push( ab,ao,bc ); links.push( {source: ao , target: bc },{source: ao , target: at },{source: at , target: bc },{source: am , target: bc },{source: am , target: ao },{source: am , target: at },{source: ab , target: bc },{source: ab , target: ao },{source: ab , target: at },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ab = nodes[0],ae = {id: 'ae', name:'lakrimosa'},af = {id: 'af', name:'ajaxerle'},am = nodes[1],an = {id: 'an', name:'wurzel'},ao = nodes[2],at = nodes[3],ax = {id: 'ax', name:'chor'},bc = nodes[4],bi = {id: 'bi', name:'hymen'} ; nodes.push( ae,af,an,ax,bi ); links.push( {source: bc , target: bi },{source: at , target: bc },{source: at , target: bi },{source: at , target: ax },{source: ao , target: bc },{source: ao , target: at },{source: ao , target: bi },{source: ao , target: ax },{source: am , target: bc },{source: am , target: at },{source: am , target: ao },{source: am , target: an },{source: am , target: bi },{source: am , target: ax },{source: an , target: bc },{source: an , target: at },{source: an , target: ao },{source: an , target: bi },{source: an , target: ax },{source: ab , target: bc },{source: ab , target: at },{source: ab , target: ao },{source: ab , target: am },{source: ab , target: an },{source: ab , target: bi },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ax },{source: ae , target: bc },{source: ae , target: at },{source: ae , target: ao },{source: ae , target: am },{source: ae , target: an },{source: ae , target: bi },{source: ae , target: af },{source: ae , target: ax },{source: af , target: bc },{source: af , target: at },{source: af , target: ao },{source: af , target: am },{source: af , target: an },{source: af , target: bi },{source: af , target: ax },{source: ax , target: bc },{source: ax , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 160000);
