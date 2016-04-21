setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'karl'},ab = {id: 'ab', name:'herr_von_dromer'},ac = {id: 'ac', name:'bedienter'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'sophie'},ae = {id: 'ae', name:'fritz'} ; nodes.push( ad,ae ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ad af */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'monheim'} ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: ad , target: af },{source: ad , target: af },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ag ah */ var  ad = nodes[0] ,ag = {id: 'ag', name:'ferdinand'},ah = {id: 'ah', name:'ein_bedienter'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ad ag ai */ var  ab = {id: 'ab', name:'herr_von_dromer'},ad = nodes[0] ,ag = nodes[1] ,ai = {id: 'ai', name:'amaldi'} ; nodes.push( ab,ai ); links.push( {source: ad , target: ai },{source: ad , target: ag },{source: ad , target: ai },{source: ag , target: ai },{source: ag , target: ai },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ag ah */ var  aa = {id: 'aa', name:'karl'},ab = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'ein_bedienter'} ; nodes.push( aa,ah ); links.push( {source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ag aj */ var  aa = nodes[0] ,ab = nodes[1] ,ag = nodes[2] ,aj = {id: 'aj', name:'der_adjutant'} ; nodes.push( aj ); links.push( {source: aa , target: ab },{source: aa , target: ag },{source: aa , target: aj },{source: ab , target: ag },{source: ab , target: aj },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ad af ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'sophie'},af = {id: 'af', name:'monheim'},ah = {id: 'ah', name:'ein_bedienter'},ai = {id: 'ai', name:'amaldi'} ; nodes.push( ad,af,ah,ai ); links.push( {source: af , target: ai },{source: af , target: ah },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ah },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ah },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af','ab','ai','aa','ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'der_maler'},al = {id: 'al', name:'lottchen'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ak al am */ var  ak = nodes[0] ,al = nodes[1] ,am = {id: 'am', name:'anne'} ; nodes.push( am ); links.push( {source: ak , target: am },{source: ak , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ad af ag ah an ao */ var  aa = {id: 'aa', name:'karl'},ad = {id: 'ad', name:'sophie'},af = {id: 'af', name:'monheim'},ag = {id: 'ag', name:'ferdinand'},ah = {id: 'ah', name:'ein_bedienter'},an = {id: 'an', name:'der_hausvater'},ao = {id: 'ao', name:'kind'} ; nodes.push( aa,ad,af,ag,ah,an,ao ); links.push( {source: an , target: ao },{source: af , target: an },{source: af , target: ag },{source: af , target: ah },{source: af , target: ao },{source: af , target: an },{source: ad , target: an },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ao },{source: ad , target: an },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: ao },{source: ag , target: an },{source: aa , target: an },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ao },{source: aa , target: an },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: an },{source: af , target: an },{source: af , target: ag },{source: af , target: ah },{source: af , target: ao },{source: af , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Handlung'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','ad','ag','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ah an */ var  aa = nodes[0] ,ah = nodes[1] ,an = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: an },{source: aa , target: ah },{source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Handlung'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* an ap */ var  an = nodes[0] ,ap = {id: 'ap', name:'bauer'} ; nodes.push( ap ); links.push( {source: an , target: ap },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Handlung'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* an ap aq */ var  an = nodes[0] ,ap = nodes[1] ,aq = {id: 'aq', name:'amtmann'} ; nodes.push( aq ); links.push( {source: ap , target: aq },{source: an , target: ap },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Handlung'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ap','an','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* af ai ar */ var  af = {id: 'af', name:'monheim'},ai = {id: 'ai', name:'amaldi'},ar = {id: 'ar', name:'kammerjungfer'} ; nodes.push( af,ai,ar ); links.push( {source: ai , target: ar },{source: af , target: ai },{source: af , target: ar },{source: af , target: ai },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Handlung'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'af','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ai */ var  aa = {id: 'aa', name:'karl'},ai = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Handlung'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = {id: 'ad', name:'sophie'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Handlung'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'monheim'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Handlung'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af an */ var  af = nodes[0] ,an = {id: 'an', name:'der_hausvater'} ; nodes.push( an ); links.push( {source: af , target: an },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Handlung'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad an */ var  ad = {id: 'ad', name:'sophie'},an = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Handlung'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ad an */ var  aa = {id: 'aa', name:'karl'},ad = nodes[0] ,an = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: an },{source: aa , target: ad },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Handlung'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab an */ var  ab = {id: 'ab', name:'herr_von_dromer'},an = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Handlung'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* al am */ var  al = {id: 'al', name:'lottchen'},am = {id: 'am', name:'anne'} ; nodes.push( al,am ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ak al am */ var  ak = {id: 'ak', name:'der_maler'},al = nodes[0] ,am = nodes[1]  ; nodes.push( ak ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ak , target: al },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aa ak al */ var  aa = {id: 'aa', name:'karl'},ak = nodes[0] ,al = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: al },{source: aa , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa ak */ var  aa = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa ak am */ var  aa = nodes[0] ,ak = nodes[1] ,am = {id: 'am', name:'anne'} ; nodes.push( am ); links.push( {source: aa , target: am },{source: aa , target: ak },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ak am an */ var  ak = nodes[0] ,am = nodes[1] ,an = {id: 'an', name:'der_hausvater'} ; nodes.push( an ); links.push( {source: ak , target: an },{source: ak , target: am },{source: ak , target: an },{source: am , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'an','ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ai al as */ var  ai = {id: 'ai', name:'amaldi'},al = {id: 'al', name:'lottchen'},as = {id: 'as', name:'die_bediente'} ; nodes.push( ai,al,as ); links.push( {source: ai , target: as },{source: ai , target: al },{source: al , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'as','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* al an */ var  al = nodes[0] ,an = {id: 'an', name:'der_hausvater'} ; nodes.push( an ); links.push( {source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ad al an */ var  ad = {id: 'ad', name:'sophie'},al = nodes[0] ,an = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: an },{source: ad , target: al },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ad ak al an ar */ var  ad = nodes[0] ,ak = {id: 'ak', name:'der_maler'},al = nodes[1] ,an = nodes[2] ,ar = {id: 'ar', name:'kammerjungfer'} ; nodes.push( ak,ar ); links.push( {source: ak , target: al },{source: ak , target: an },{source: ak , target: ar },{source: al , target: an },{source: al , target: ar },{source: an , target: ar },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: an },{source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ak','al','ad','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ab an */ var  ab = {id: 'ab', name:'herr_von_dromer'},an = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: an },{source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Handlung'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab an */ var  ab = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Handlung'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ab ag aj an */ var  ab = nodes[0] ,ag = {id: 'ag', name:'ferdinand'},aj = {id: 'aj', name:'der_adjutant'},an = nodes[1]  ; nodes.push( ag,aj ); links.push( {source: ag , target: an },{source: ag , target: aj },{source: ag , target: aj },{source: aj , target: an },{source: ab , target: ag },{source: ab , target: an },{source: ab , target: aj },{source: ab , target: aj },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Handlung'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag','aj','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa an */ var  aa = {id: 'aa', name:'karl'},an = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Handlung'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* af an */ var  af = {id: 'af', name:'monheim'},an = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: an },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Handlung'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad af an ao */ var  ad = {id: 'ad', name:'sophie'},af = nodes[0] ,an = nodes[1] ,ao = {id: 'ao', name:'kind'} ; nodes.push( ad,ao ); links.push( {source: an , target: ao },{source: an , target: ao },{source: ad , target: an },{source: ad , target: af },{source: ad , target: ao },{source: ad , target: ao },{source: af , target: an },{source: af , target: ao },{source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Handlung'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ab ad af ak al an */ var  aa = {id: 'aa', name:'karl'},ab = {id: 'ab', name:'herr_von_dromer'},ad = nodes[0] ,af = nodes[1] ,ak = {id: 'ak', name:'der_maler'},al = {id: 'al', name:'lottchen'},an = nodes[2]  ; nodes.push( aa,ab,ak,al ); links.push( {source: al , target: an },{source: ad , target: an },{source: ad , target: al },{source: ad , target: af },{source: ad , target: ak },{source: af , target: an },{source: af , target: al },{source: af , target: ak },{source: aa , target: an },{source: aa , target: al },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: ab },{source: ak , target: an },{source: ak , target: al },{source: ab , target: an },{source: ab , target: al },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Handlung'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ab ad af ai ak al an */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ai = {id: 'ai', name:'amaldi'},ak = nodes[4] ,al = nodes[5] ,an = nodes[6]  ; nodes.push( ai ); links.push( {source: al , target: an },{source: ai , target: al },{source: ai , target: an },{source: ai , target: ak },{source: ab , target: al },{source: ab , target: ai },{source: ab , target: an },{source: ab , target: ak },{source: ab , target: af },{source: ab , target: ad },{source: ak , target: al },{source: ak , target: an },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: ad },{source: af , target: al },{source: af , target: ai },{source: af , target: an },{source: af , target: ak },{source: ad , target: al },{source: ad , target: ai },{source: ad , target: an },{source: ad , target: ak },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '7. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 195000);
