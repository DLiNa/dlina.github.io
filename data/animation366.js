setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'anton'},ab = {id: 'ab', name:'joseph'},ac = {id: 'ac', name:'christian'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ad = {id: 'ad', name:'gluthammer'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = nodes[0],ae = {id: 'ae', name:'kathi'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'anton'},ad = nodes[0],ae = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa','ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  af = {id: 'af', name:'stifter'},ag = {id: 'ag', name:'wixer'},ah = {id: 'ah', name:'lips'},ai = {id: 'ai', name:'sporner'} ; nodes.push( af,ag,ah,ai ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = {id: 'aa', name:'anton'},af = nodes[0],ah = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ah },{source: aa , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  af = nodes[0],ag = {id: 'ag', name:'wixer'},ah = nodes[1],ai = {id: 'ai', name:'sporner'} ; nodes.push( ag,ai ); links.push( {source: ah , target: ai },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = {id: 'aa', name:'anton'},ah = nodes[0],aj = {id: 'aj', name:'madame_schleier'} ; nodes.push( aa,aj ); links.push( {source: aa , target: ah },{source: aa , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ae = {id: 'ae', name:'kathi'},ah = nodes[0],aj = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ah },{source: ae , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ae = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = nodes[0],af = {id: 'af', name:'stifter'},aj = nodes[1] ; nodes.push( af ); links.push( {source: af , target: aj },{source: ae , target: af },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ad = {id: 'ad', name:'gluthammer'},ae = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ae = nodes[0],af = {id: 'af', name:'stifter'},ag = {id: 'ag', name:'wixer'},aj = {id: 'aj', name:'madame_schleier'} ; nodes.push( af,ag,aj ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: aj },{source: af , target: ag },{source: af , target: aj },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  af = nodes[0],ag = nodes[1],ai = {id: 'ai', name:'sporner'},aj = nodes[2] ; nodes.push( ai ); links.push( {source: af , target: aj },{source: af , target: ag },{source: af , target: ai },{source: ag , target: aj },{source: ag , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'af','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ah = {id: 'ah', name:'lips'},aj = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = {id: 'ad', name:'gluthammer'},ah = nodes[0],aj = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ah },{source: ad , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  af = {id: 'af', name:'stifter'},ag = {id: 'ag', name:'wixer'},aj = nodes[0],ak = {id: 'ak', name:'die_herren'} ; nodes.push( af,ag,ak ); links.push( {source: af , target: ag },{source: af , target: aj },{source: af , target: ak },{source: ag , target: aj },{source: ag , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  af = nodes[0],ai = {id: 'ai', name:'sporner'},aj = nodes[1] ; nodes.push( ai ); links.push( {source: af , target: aj },{source: af , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  af = nodes[0],ag = {id: 'ag', name:'wixer'},ai = nodes[1],aj = nodes[2],ak = {id: 'ak', name:'die_herren'} ; nodes.push( ag,ak ); links.push( {source: ag , target: ak },{source: ag , target: aj },{source: ag , target: ai },{source: af , target: ag },{source: af , target: ak },{source: af , target: aj },{source: af , target: ai },{source: aj , target: ak },{source: ai , target: ak },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag','af','aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ah = {id: 'ah', name:'lips'},ak = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ah','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ae = {id: 'ae', name:'kathi'},al = {id: 'al', name:'krautkopf'},am = {id: 'am', name:'erster_knecht'},an = {id: 'an', name:'zweiter_knecht'},ao = {id: 'ao', name:'dritter_knecht'},ap = {id: 'ap', name:'vierter_knecht'} ; nodes.push( ae,al,am,an,ao,ap ); links.push( {source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al','am','an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ae = nodes[0],ah = {id: 'ah', name:'lips'} ; nodes.push( ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ae = nodes[0],ah = nodes[1],al = {id: 'al', name:'krautkopf'} ; nodes.push( al ); links.push( {source: ae , target: al },{source: ae , target: ah },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ae = nodes[0],ah = nodes[1],al = nodes[2],am = {id: 'am', name:'erster_knecht'},an = {id: 'an', name:'zweiter_knecht'},ao = {id: 'ao', name:'dritter_knecht'} ; nodes.push( am,an,ao ); links.push( {source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: am , target: an },{source: am , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah','ae','am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ad = {id: 'ad', name:'gluthammer'},al = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ae = {id: 'ae', name:'kathi'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ae = nodes[0],al = {id: 'al', name:'krautkopf'} ; nodes.push( al ); links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ad = {id: 'ad', name:'gluthammer'},al = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ae = {id: 'ae', name:'kathi'},ah = {id: 'ah', name:'lips'} ; nodes.push( ae,ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ae = nodes[0],ah = nodes[1],al = {id: 'al', name:'krautkopf'} ; nodes.push( al ); links.push( {source: ah , target: al },{source: ae , target: al },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'al','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ae = {id: 'ae', name:'kathi'},af = {id: 'af', name:'stifter'},ag = {id: 'ag', name:'wixer'},ah = nodes[0],ai = {id: 'ai', name:'sporner'},al = {id: 'al', name:'krautkopf'},aq = {id: 'aq', name:'justitiär'} ; nodes.push( ae,af,ag,ai,al,aq ); links.push( {source: al , target: aq },{source: af , target: al },{source: af , target: aq },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: ah , target: al },{source: ah , target: aq },{source: ah , target: ai },{source: ag , target: al },{source: ag , target: aq },{source: ag , target: ah },{source: ag , target: ai },{source: ai , target: al },{source: ai , target: aq },{source: ae , target: al },{source: ae , target: af },{source: ae , target: aq },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'al','af','aq','ag','ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ad = {id: 'ad', name:'gluthammer'},al = {id: 'al', name:'krautkopf'} ; nodes.push( ad,al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  af = {id: 'af', name:'stifter'},ag = {id: 'ag', name:'wixer'},ai = {id: 'ai', name:'sporner'},aq = {id: 'aq', name:'justitiär'} ; nodes.push( af,ag,ai,aq ); links.push( {source: af , target: ai },{source: af , target: ag },{source: af , target: aq },{source: ai , target: aq },{source: ag , target: ai },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  af = nodes[0],ag = nodes[1],al = {id: 'al', name:'krautkopf'},aq = nodes[2] ; nodes.push( al ); links.push( {source: al , target: aq },{source: af , target: al },{source: af , target: aq },{source: af , target: ag },{source: ag , target: al },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  af = nodes[0],ag = nodes[1],ah = {id: 'ah', name:'lips'},ai = {id: 'ai', name:'sporner'},al = nodes[2],aq = nodes[3] ; nodes.push( ah,ai ); links.push( {source: ai , target: aq },{source: ai , target: al },{source: ag , target: ai },{source: ag , target: aq },{source: ag , target: al },{source: ag , target: ah },{source: al , target: aq },{source: af , target: ai },{source: af , target: aq },{source: af , target: ag },{source: af , target: al },{source: af , target: ah },{source: ah , target: ai },{source: ah , target: aq },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ae = {id: 'ae', name:'kathi'},af = nodes[0],af = nodes[0],ag = nodes[1],ai = nodes[2],al = nodes[3],aq = nodes[4] ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: al },{source: ae , target: af },{source: ae , target: aq },{source: af , target: ai },{source: af , target: ag },{source: af , target: al },{source: af , target: aq },{source: ai , target: al },{source: ai , target: aq },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: aq },{source: al , target: aq },{source: af , target: ai },{source: af , target: ag },{source: af , target: al },{source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ae','af','ai','ag','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ah = {id: 'ah', name:'lips'},al = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ae = {id: 'ae', name:'kathi'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ae = nodes[0],ah = {id: 'ah', name:'lips'} ; nodes.push( ah ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ae = nodes[0],af = {id: 'af', name:'stifter'},ag = {id: 'ag', name:'wixer'},ah = nodes[1],ai = {id: 'ai', name:'sporner'},aq = {id: 'aq', name:'justitiär'} ; nodes.push( af,ag,ai,aq ); links.push( {source: af , target: ag },{source: af , target: aq },{source: af , target: ai },{source: af , target: ah },{source: ag , target: aq },{source: ag , target: ai },{source: ag , target: ah },{source: ai , target: aq },{source: ah , target: aq },{source: ah , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: aq },{source: ae , target: ai },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'af','ag','aq','ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ad = {id: 'ad', name:'gluthammer'},ah = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ae = {id: 'ae', name:'kathi'},al = {id: 'al', name:'krautkopf'},aq = {id: 'aq', name:'justitiär'} ; nodes.push( ae,al,aq ); links.push( {source: al , target: aq },{source: ae , target: al },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ad = {id: 'ad', name:'gluthammer'},af = {id: 'af', name:'stifter'},ah = {id: 'ah', name:'lips'},al = nodes[0],aq = nodes[1] ; nodes.push( ad,af,ah ); links.push( {source: ad , target: al },{source: ad , target: ah },{source: ad , target: aq },{source: ad , target: af },{source: al , target: aq },{source: ah , target: al },{source: ah , target: aq },{source: af , target: al },{source: af , target: ah },{source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 230000);
