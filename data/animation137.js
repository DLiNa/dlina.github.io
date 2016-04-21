setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'zoe'},ab = {id: 'ab', name:'frau'},ac = {id: 'ac', name:'blinder'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'pausanias'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ad ae af ag */ var  aa = {id: 'aa', name:'zoe'},ad = nodes[0] ,ae = {id: 'ae', name:'greis'},af = {id: 'af', name:'stimmen'},ag = {id: 'ag', name:'apelles'} ; nodes.push( aa,ae,af,ag ); links.push( {source: ad , target: ae },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ad ae ag ah ai aj */ var  aa = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,ag = nodes[3] ,ah = {id: 'ah', name:'longinus'},ai = {id: 'ai', name:'aurelius_wahballath'},aj = {id: 'aj', name:'septimius_malku'} ; nodes.push( ah,ai,aj ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: aj },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ag','ah','ae','aa','ad','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'bolana'},al = {id: 'al', name:'sklavin'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ak am */ var  ak = nodes[0] ,am = {id: 'am', name:'timolaos'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag ah ai aj ak am an ao */ var  ag = {id: 'ag', name:'apelles'},ah = {id: 'ah', name:'longinus'},ai = {id: 'ai', name:'aurelius_wahballath'},aj = {id: 'aj', name:'septimius_malku'},ak = nodes[0] ,am = nodes[1] ,an = {id: 'an', name:'saturninus'},ao = {id: 'ao', name:'volk'} ; nodes.push( ag,ah,ai,aj,an,ao ); links.push( {source: an , target: ao },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: aj },{source: am , target: an },{source: am , target: ao },{source: ag , target: an },{source: ag , target: ai },{source: ag , target: ao },{source: ag , target: am },{source: ag , target: ak },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: aj },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: aj },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: ak },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: aj },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'an','ai','ao','am','aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad ag ak */ var  ad = {id: 'ad', name:'pausanias'},ag = nodes[0] ,ak = nodes[1]  ; nodes.push( ad ); links.push( {source: ag , target: ak },{source: ad , target: ak },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ad ag ai ao ap aq */ var  aa = {id: 'aa', name:'zoe'},ad = nodes[0] ,ag = nodes[1] ,ai = {id: 'ai', name:'aurelius_wahballath'},ao = {id: 'ao', name:'volk'},ap = {id: 'ap', name:'erste_bürger'},aq = {id: 'aq', name:'zweite_bürger'} ; nodes.push( aa,ai,ao,ap,aq ); links.push( {source: ap , target: aq },{source: ap , target: aq },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ap },{source: ag , target: ao },{source: ag , target: aq },{source: ag , target: ai },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ag },{source: aa , target: ap },{source: aa , target: ao },{source: aa , target: aq },{source: aa , target: ad },{source: aa , target: ai },{source: ap , target: aq },{source: ap , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ag },{source: ad , target: ap },{source: ad , target: ao },{source: ad , target: aq },{source: ad , target: ai },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ap },{source: ai , target: ao },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ap','aq','ag','aa','ao','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ah am */ var  ah = {id: 'ah', name:'longinus'},am = {id: 'am', name:'timolaos'} ; nodes.push( ah,am ); links.push( {source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ah ai aj am */ var  ah = nodes[0] ,ai = {id: 'ai', name:'aurelius_wahballath'},aj = {id: 'aj', name:'septimius_malku'},am = nodes[1]  ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: ai , target: am },{source: aj , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag ah ai aj am ar */ var  ag = {id: 'ag', name:'apelles'},ah = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,am = nodes[3] ,ar = {id: 'ar', name:'phöbe'} ; nodes.push( ag,ar ); links.push( {source: ag , target: ar },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: am },{source: ag , target: ah },{source: aj , target: ar },{source: aj , target: am },{source: ai , target: ar },{source: ai , target: aj },{source: ai , target: am },{source: am , target: ar },{source: ah , target: ar },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj','ai','am','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ag ar */ var  ag = nodes[0] ,ar = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ak */ var  ag = nodes[0] ,ak = {id: 'ak', name:'bolana'} ; nodes.push( ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ad ag ak */ var  ad = {id: 'ad', name:'pausanias'},ag = nodes[0] ,ak = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: ag },{source: ad , target: ak },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ad','ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ar as */ var  ar = {id: 'ar', name:'phöbe'},as = {id: 'as', name:'sklave'} ; nodes.push( ar,as ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ah ar */ var  ah = {id: 'ah', name:'longinus'},ar = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad ah ar */ var  ad = {id: 'ad', name:'pausanias'},ah = nodes[0] ,ar = nodes[1]  ; nodes.push( ad ); links.push( {source: ah , target: ar },{source: ad , target: ah },{source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ad ag ah */ var  ad = nodes[0] ,ag = {id: 'ag', name:'apelles'},ah = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: ah },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ah at */ var  ah = nodes[0] ,at = {id: 'at', name:'jamlichus'} ; nodes.push( at ); links.push( {source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ah am at */ var  ah = nodes[0] ,am = {id: 'am', name:'timolaos'},at = nodes[1]  ; nodes.push( am ); links.push( {source: am , target: at },{source: ah , target: at },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'at','am','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ag ai au av aw */ var  ag = {id: 'ag', name:'apelles'},ai = {id: 'ai', name:'aurelius_wahballath'},au = {id: 'au', name:'herennianos'},av = {id: 'av', name:'persida'},aw = {id: 'aw', name:'tryphena'} ; nodes.push( ag,ai,au,av,aw ); links.push( {source: au , target: av },{source: au , target: aw },{source: ag , target: au },{source: ag , target: ai },{source: ag , target: av },{source: ag , target: aw },{source: ai , target: au },{source: ai , target: av },{source: ai , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ag','ai','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* au av */ var  au = nodes[0] ,av = nodes[1]  ; /* nodes.push(); */ links.push( {source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ag ah at */ var  ag = {id: 'ag', name:'apelles'},ah = {id: 'ah', name:'longinus'},at = {id: 'at', name:'jamlichus'} ; nodes.push( ag,ah,at ); links.push( {source: ag , target: ah },{source: ag , target: at },{source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag ao au av aw ax ay */ var  ag = nodes[0] ,ao = {id: 'ao', name:'volk'},au = {id: 'au', name:'herennianos'},av = {id: 'av', name:'persida'},aw = {id: 'aw', name:'tryphena'},ax = {id: 'ax', name:'jarchai'},ay = {id: 'ay', name:'ein_bürger'} ; nodes.push( ao,au,av,aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: ag , target: aw },{source: ag , target: av },{source: ag , target: ax },{source: ag , target: au },{source: ag , target: ao },{source: ag , target: ay },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: ax , target: ay },{source: au , target: aw },{source: au , target: av },{source: au , target: ax },{source: au , target: ay },{source: ao , target: aw },{source: ao , target: av },{source: ao , target: ax },{source: ao , target: au },{source: ao , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aw','av','ax','au','ao','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = {id: 'ah', name:'longinus'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ag ah az */ var  ag = nodes[0] ,ah = nodes[1] ,az = {id: 'az', name:'nymphas'} ; nodes.push( az ); links.push( {source: ag , target: az },{source: ag , target: ah },{source: ah , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad ag ah az */ var  ad = {id: 'ad', name:'pausanias'},ag = nodes[0] ,ah = nodes[1] ,az = nodes[2]  ; nodes.push( ad ); links.push( {source: ag , target: az },{source: ag , target: ah },{source: ah , target: az },{source: ad , target: ag },{source: ad , target: az },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ag','ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* az ba */ var  az = nodes[0] ,ba = {id: 'ba', name:'zabbäos'} ; nodes.push( ba ); links.push( {source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ag ah az */ var  ag = {id: 'ag', name:'apelles'},ah = {id: 'ah', name:'longinus'},az = nodes[0]  ; nodes.push( ag,ah ); links.push( {source: ag , target: az },{source: ag , target: ah },{source: ah , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ag','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ah bb */ var  ah = nodes[0] ,bb = {id: 'bb', name:'stimme'} ; nodes.push( bb ); links.push( {source: ah , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ag az ba bb bc */ var  ag = {id: 'ag', name:'apelles'},az = {id: 'az', name:'nymphas'},ba = {id: 'ba', name:'zabbäos'},bb = nodes[0] ,bc = {id: 'bc', name:'agrippa'} ; nodes.push( ag,az,ba,bc ); links.push( {source: ag , target: ba },{source: ag , target: bb },{source: ag , target: az },{source: ag , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: bb , target: bc },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ag az bb bc */ var  ag = nodes[0] ,az = nodes[1] ,bb = nodes[2] ,bc = nodes[3]  ; /* nodes.push(); */ links.push( {source: ag , target: bc },{source: ag , target: bb },{source: ag , target: az },{source: bb , target: bc },{source: az , target: bc },{source: az , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'bc','ag','bb','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ba bd be */ var  ba = {id: 'ba', name:'zabbäos'},bd = {id: 'bd', name:'mäonios'},be = {id: 'be', name:'seleukos'} ; nodes.push( ba,bd,be ); links.push( {source: bd , target: be },{source: ba , target: bd },{source: ba , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag ba bd be */ var  ag = {id: 'ag', name:'apelles'},ba = nodes[0] ,bd = nodes[1] ,be = nodes[2]  ; nodes.push( ag ); links.push( {source: ba , target: be },{source: ba , target: bd },{source: bd , target: be },{source: ag , target: be },{source: ag , target: ba },{source: ag , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'be','ba','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ad ag */ var  ad = {id: 'ad', name:'pausanias'},ag = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ag bf */ var  ag = nodes[0] ,bf = {id: 'bf', name:'zenobia'} ; nodes.push( bf ); links.push( {source: ag , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vieter Auftritt.';
}, 180000);
