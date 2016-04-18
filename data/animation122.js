setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'philemon'},ab = {id: 'ab', name:'phillis'},ac = {id: 'ac', name:'sylvia'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Eintritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ad = {id: 'ad', name:'mirtillo'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ae = {id: 'ae', name:'sylvan'},af = {id: 'af', name:'seladon'},ag = {id: 'ag', name:'mirta'} ; nodes.push( ae,af,ag ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = {id: 'ae', name:'sylvan'},ah = {id: 'ah', name:'mops'},ai = {id: 'ai', name:'silen'} ; nodes.push( ae,ah,ai ); links.push( {source: ae , target: ah },{source: ae , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ad = {id: 'ad', name:'mirtillo'},ah = {id: 'ah', name:'mops'} ; nodes.push( ad,ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ad = nodes[0],ag = {id: 'ag', name:'mirta'},ah = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: ah },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = {id: 'ae', name:'sylvan'},ag = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ae = nodes[0],af = {id: 'af', name:'seladon'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = {id: 'ab', name:'phillis'},ad = {id: 'ad', name:'mirtillo'},ae = nodes[0] ; nodes.push( ab,ad ); links.push( {source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = nodes[0],ac = {id: 'ac', name:'sylvia'},ad = nodes[1],ae = nodes[2] ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehender Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = nodes[0],aj = {id: 'aj', name:'damon'},ak = {id: 'ak', name:'galathe'} ; nodes.push( aj,ak ); links.push( {source: ad , target: aj },{source: ad , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ad = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ad = nodes[0],ah = {id: 'ah', name:'mops'},ak = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: ak },{source: ad , target: ah },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehenter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','ad','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = {id: 'aa', name:'philemon'},aj = {id: 'aj', name:'damon'} ; nodes.push( aa,aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ad = {id: 'ad', name:'mirtillo'},al = {id: 'al', name:'doris'} ; nodes.push( ad,al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = nodes[0],ak = {id: 'ak', name:'galathe'},al = nodes[1] ; nodes.push( ak ); links.push( {source: ak , target: al },{source: ad , target: ak },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ad = nodes[0],ak = nodes[1],al = {id: 'al', name:'doris'} ; nodes.push( al ); links.push( {source: ak , target: al },{source: ad , target: al },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ad = nodes[0],al = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ad = nodes[0],ai = {id: 'ai', name:'silen'} ; nodes.push( ai ); links.push( {source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = {id: 'aa', name:'philemon'},al = {id: 'al', name:'doris'} ; nodes.push( aa,al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = nodes[0],al = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  af = {id: 'af', name:'seladon'},al = nodes[0] ; nodes.push( af ); links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehender Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aj = {id: 'aj', name:'damon'},ak = {id: 'ak', name:'galathe'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aj = nodes[0],ak = nodes[1],al = {id: 'al', name:'doris'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aj = nodes[0],al = nodes[1] ; /* nodes.push(); */ links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ai = {id: 'ai', name:'silen'},aj = nodes[0],al = nodes[1] ; nodes.push( ai ); links.push( {source: aj , target: al },{source: ai , target: aj },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ai','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ag = {id: 'ag', name:'mirta'},aj = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ad = {id: 'ad', name:'mirtillo'},al = {id: 'al', name:'doris'} ; nodes.push( ad,al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ad = nodes[0],ae = {id: 'ae', name:'sylvan'},al = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: al },{source: ad , target: ae },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ae = nodes[0],al = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ae = nodes[0],af = {id: 'af', name:'seladon'},al = nodes[1] ; nodes.push( af ); links.push( {source: af , target: al },{source: ae , target: al },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = {id: 'aa', name:'philemon'},ae = nodes[0],af = nodes[1] ; nodes.push( aa ); links.push( {source: ae , target: af },{source: aa , target: af },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = nodes[0],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehender Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = nodes[0],aj = {id: 'aj', name:'damon'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = nodes[0],ae = {id: 'ae', name:'sylvan'},al = {id: 'al', name:'doris'} ; nodes.push( ae,al ); links.push( {source: aa , target: al },{source: aa , target: ae },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aa','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehender Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ad = {id: 'ad', name:'mirtillo'},ae = nodes[0],ak = {id: 'ak', name:'galathe'} ; nodes.push( ad,ak ); links.push( {source: ad , target: ak },{source: ad , target: ae },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehenter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ad = nodes[0],af = {id: 'af', name:'seladon'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehender Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ae = {id: 'ae', name:'sylvan'},ag = {id: 'ag', name:'mirta'},ak = {id: 'ak', name:'galathe'} ; nodes.push( ae,ag,ak ); links.push( {source: ae , target: ag },{source: ae , target: ak },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehenter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ae','ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  aa = {id: 'aa', name:'philemon'},ad = {id: 'ad', name:'mirtillo'},af = {id: 'af', name:'seladon'},al = {id: 'al', name:'doris'} ; nodes.push( aa,ad,af,al ); links.push( {source: aa , target: al },{source: aa , target: af },{source: aa , target: ad },{source: af , target: al },{source: ad , target: al },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  aa = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Anderter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  aa = nodes[0],ae = {id: 'ae', name:'sylvan'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  aa = nodes[0],ab = {id: 'ab', name:'phillis'},ac = {id: 'ac', name:'sylvia'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ab = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  ab = nodes[0],ac = nodes[1],ae = {id: 'ae', name:'sylvan'},ag = {id: 'ag', name:'mirta'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ac },{source: ac , target: ae },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ae = nodes[0],ag = nodes[1],ah = {id: 'ah', name:'mops'},ai = {id: 'ai', name:'silen'} ; nodes.push( ah,ai ); links.push( {source: ae , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ae = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  aa = {id: 'aa', name:'philemon'},ac = {id: 'ac', name:'sylvia'},ae = nodes[0],ai = {id: 'ai', name:'silen'},aj = {id: 'aj', name:'damon'} ; nodes.push( aa,ac,ai,aj ); links.push( {source: aa , target: aj },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ai },{source: ae , target: aj },{source: ae , target: ai },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'aj','ae','ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehender Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  aa = nodes[0],ab = {id: 'ab', name:'phillis'},ac = {id: 'ac', name:'sylvia'},ad = {id: 'ad', name:'mirtillo'},ae = {id: 'ae', name:'sylvan'},af = {id: 'af', name:'seladon'},ag = {id: 'ag', name:'mirta'},ah = {id: 'ah', name:'mops'},ai = {id: 'ai', name:'silen'},aj = {id: 'aj', name:'damon'},ak = {id: 'ak', name:'galathe'},al = {id: 'al', name:'doris'} ; nodes.push( ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al ); links.push( {source: ac , target: al },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ai },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ai },{source: af , target: al },{source: af , target: ag },{source: af , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: ai },{source: ad , target: al },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ai },{source: ae , target: al },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ai },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ai },{source: ah , target: al },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: aj , target: al },{source: aj , target: ak },{source: ak , target: al },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ac','aa','ab','al','af','ad','ae','ag','ah','aj','ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  am = {id: 'am', name:'oktober'},an = {id: 'an', name:'verehrung'},ao = {id: 'ao', name:'treue'},ap = {id: 'ap', name:'liebe'},aq = {id: 'aq', name:'freude'} ; nodes.push( am,an,ao,ap,aq ); links.push( {source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Nachspiel]'; var scene = document.getElementById('scene');scene.innerHTML = '[Nachspiel]';
}, 280000);
