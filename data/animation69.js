setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'kissling'},ab = {id: 'ab', name:'kellner'},ac = {id: 'ac', name:'gröber'},ad = {id: 'ad', name:'jean'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ad ae af ag ah */ var  aa = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'bernhardy'},af = {id: 'af', name:'josephine'},ag = {id: 'ag', name:'erster_gast'},ah = {id: 'ah', name:'eugen'} ; nodes.push( ae,af,ag,ah ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','ad','aa','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ai aj ak */ var  ab = {id: 'ab', name:'kellner'},ai = {id: 'ai', name:'ulrike'},aj = {id: 'aj', name:'ida'},ak = {id: 'ak', name:'franziska'} ; nodes.push( ab,ai,aj,ak ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aj','ak','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ai al */ var  aa = {id: 'aa', name:'kissling'},ai = nodes[0] ,al = {id: 'al', name:'alfred'} ; nodes.push( aa,al ); links.push( {source: aa , target: al },{source: aa , target: ai },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ag ai aj ak al am an ao */ var  aa = nodes[0] ,ag = {id: 'ag', name:'erster_gast'},ai = nodes[1] ,aj = {id: 'aj', name:'ida'},ak = {id: 'ak', name:'franziska'},al = nodes[2] ,am = {id: 'am', name:'klapproth_drängend'},an = {id: 'an', name:'zweiter_gast'},ao = {id: 'ao', name:'blumenmädchen'} ; nodes.push( ag,aj,ak,am,an,ao ); links.push( {source: am , target: an },{source: am , target: ao },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: am },{source: ag , target: ao },{source: an , target: ao },{source: ai , target: am },{source: ai , target: an },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: am },{source: ai , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: am },{source: al , target: ao },{source: ak , target: am },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: ao },{source: aj , target: am },{source: aj , target: an },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: ao },{source: am , target: an },{source: am , target: ao },{source: aa , target: am },{source: aa , target: ag },{source: aa , target: an },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: am },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','an','ai','ak','aj','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa al am */ var  aa = nodes[0] ,al = nodes[1] ,am = nodes[2]  ; /* nodes.push(); */ links.push( {source: al , target: am },{source: aa , target: am },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'am','al','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ap aq */ var  ap = {id: 'ap', name:'schölle'},aq = {id: 'aq', name:'amalie'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa al am ap */ var  aa = {id: 'aa', name:'kissling'},al = {id: 'al', name:'alfred'},am = {id: 'am', name:'klapproth_drängend'},ap = nodes[0]  ; nodes.push( aa,al,am ); links.push( {source: al , target: am },{source: al , target: ap },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ap },{source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac al am ap */ var  aa = nodes[0] ,ac = {id: 'ac', name:'gröber'},al = nodes[1] ,am = nodes[2] ,ap = nodes[3]  ; nodes.push( ac ); links.push( {source: am , target: ap },{source: ac , target: ap },{source: ac , target: am },{source: ac , target: al },{source: aa , target: ap },{source: aa , target: am },{source: aa , target: ac },{source: aa , target: al },{source: al , target: ap },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac af am ap */ var  ac = nodes[0] ,af = {id: 'af', name:'josephine'},am = nodes[1] ,ap = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: ap },{source: af , target: am },{source: ac , target: af },{source: ac , target: ap },{source: ac , target: am },{source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae af am */ var  ae = {id: 'ae', name:'bernhardy'},af = nodes[0] ,am = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: af },{source: ae , target: am },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa am aq */ var  aa = {id: 'aa', name:'kissling'},am = nodes[0] ,aq = {id: 'aq', name:'amalie'} ; nodes.push( aa,aq ); links.push( {source: aa , target: aq },{source: aa , target: am },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae am aq */ var  ae = {id: 'ae', name:'bernhardy'},am = nodes[0] ,aq = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: aq },{source: ae , target: am },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae','aq','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa al */ var  aa = {id: 'aa', name:'kissling'},al = {id: 'al', name:'alfred'} ; nodes.push( aa,al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa al ar */ var  aa = nodes[0] ,al = nodes[1] ,ar = {id: 'ar', name:'friederike'} ; nodes.push( ar ); links.push( {source: al , target: ar },{source: aa , target: al },{source: aa , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','aa','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* am */ var  am = {id: 'am', name:'klapproth_drängend'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac am */ var  ac = {id: 'ac', name:'gröber'},am = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ae ah am */ var  ae = {id: 'ae', name:'bernhardy'},ah = {id: 'ah', name:'eugen'},am = nodes[0]  ; nodes.push( ae,ah ); links.push( {source: ah , target: am },{source: ae , target: ah },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','am','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ai aj ak */ var  ai = {id: 'ai', name:'ulrike'},aj = {id: 'aj', name:'ida'},ak = {id: 'ak', name:'franziska'} ; nodes.push( ai,aj,ak ); links.push( {source: aj , target: ak },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ai aj am */ var  ai = nodes[0] ,aj = nodes[1] ,am = {id: 'am', name:'klapproth_drängend'} ; nodes.push( am ); links.push( {source: ai , target: am },{source: ai , target: aj },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae am */ var  ae = {id: 'ae', name:'bernhardy'},am = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ai am */ var  ai = {id: 'ai', name:'ulrike'},am = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac am */ var  ac = {id: 'ac', name:'gröber'},am = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ai am */ var  ai = {id: 'ai', name:'ulrike'},am = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ae am */ var  ae = {id: 'ae', name:'bernhardy'},am = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ae','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'ulrike'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = {id: 'aj', name:'ida'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* af ai aj */ var  af = {id: 'af', name:'josephine'},ai = nodes[0] ,aj = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: aj },{source: af , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* af ai aj am */ var  af = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,am = {id: 'am', name:'klapproth_drängend'} ; nodes.push( am ); links.push( {source: af , target: am },{source: af , target: ai },{source: af , target: aj },{source: ai , target: am },{source: ai , target: aj },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ah ai aj am */ var  ah = {id: 'ah', name:'eugen'},ai = nodes[0] ,aj = nodes[1] ,am = nodes[2]  ; nodes.push( ah ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: am },{source: ai , target: aj },{source: ai , target: am },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ai aj am aq */ var  ai = nodes[0] ,aj = nodes[1] ,am = nodes[2] ,aq = {id: 'aq', name:'amalie'} ; nodes.push( aq ); links.push( {source: aj , target: aq },{source: aj , target: am },{source: ai , target: aq },{source: ai , target: aj },{source: ai , target: am },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '13. Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aq','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ai aj ap */ var  ai = nodes[0] ,aj = nodes[1] ,ap = {id: 'ap', name:'schölle'} ; nodes.push( ap ); links.push( {source: ai , target: ap },{source: ai , target: aj },{source: ai , target: ap },{source: aj , target: ap },{source: aj , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '14. Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ap','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ai al */ var  ai = nodes[0] ,al = {id: 'al', name:'alfred'} ; nodes.push( al ); links.push( {source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '15. Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ah ai aj al am */ var  aa = {id: 'aa', name:'kissling'},ah = {id: 'ah', name:'eugen'},ai = nodes[0] ,aj = {id: 'aj', name:'ida'},al = nodes[1] ,am = {id: 'am', name:'klapproth_drängend'} ; nodes.push( aa,ah,aj,am ); links.push( {source: al , target: am },{source: aa , target: am },{source: aa , target: al },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ah },{source: ai , target: am },{source: ai , target: al },{source: ai , target: aj },{source: aj , target: am },{source: aj , target: al },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '16. Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aa','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* af ah al am ap */ var  af = {id: 'af', name:'josephine'},ah = nodes[0] ,al = nodes[1] ,am = nodes[2] ,ap = {id: 'ap', name:'schölle'} ; nodes.push( af,ap ); links.push( {source: ah , target: al },{source: ah , target: ap },{source: ah , target: am },{source: af , target: ah },{source: af , target: al },{source: af , target: ap },{source: af , target: am },{source: al , target: ap },{source: al , target: am },{source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '17. Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ah','af','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ae am ap aq ar */ var  ae = {id: 'ae', name:'bernhardy'},am = nodes[0] ,ap = nodes[1] ,aq = {id: 'aq', name:'amalie'},ar = {id: 'ar', name:'friederike'} ; nodes.push( ae,aq,ar ); links.push( {source: ae , target: am },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: ap },{source: aq , target: ar },{source: ap , target: aq },{source: ap , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '18. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = '18. Auftritt';
}, 175000);
