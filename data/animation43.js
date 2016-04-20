setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'theobald'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = {id: 'ab', name:'agnes'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'knippeldollinger'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = nodes[1],ad = {id: 'ad', name:'barbara'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1],ae = {id: 'ae', name:'caspar_bernauer'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: aa , target: ae },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = {id: 'aa', name:'theobald'},ac = {id: 'ac', name:'knippeldollinger'},ae = nodes[0] ; nodes.push( aa,ac ); links.push( {source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ab = {id: 'ab', name:'agnes'},ac = nodes[0],ae = nodes[1] ; nodes.push( ab ); links.push( {source: ac , target: ae },{source: ab , target: ac },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = {id: 'aa', name:'theobald'},ae = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ae = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  af = {id: 'af', name:'albrecht'},ag = {id: 'ag', name:'bürgermeister_nördlinger'},ah = {id: 'ah', name:'nothhafft_von_wernberg'},ai = {id: 'ai', name:'frauenhoven'} ; nodes.push( af,ag,ah,ai ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  af = nodes[0],ah = nodes[1],ai = nodes[2],aj = {id: 'aj', name:'törring'} ; nodes.push( aj ); links.push( {source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'af','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ag = {id: 'ag', name:'bürgermeister_nördlinger'},ah = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ag = nodes[0],ai = {id: 'ai', name:'frauenhoven'},aj = {id: 'aj', name:'törring'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  af = {id: 'af', name:'albrecht'},ag = nodes[0],ah = {id: 'ah', name:'nothhafft_von_wernberg'},ai = nodes[1] ; nodes.push( af,ah ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ab = {id: 'ab', name:'agnes'},ac = {id: 'ac', name:'knippeldollinger'},ad = {id: 'ad', name:'barbara'},ae = {id: 'ae', name:'caspar_bernauer'},af = nodes[0],ag = nodes[1],ah = nodes[2],ai = nodes[3],aj = {id: 'aj', name:'törring'},ak = {id: 'ak', name:'martha'},bg = {id: 'bg', name:'nothhafft'} ; nodes.push( ab,ac,ad,ae,aj,ak,bg ); links.push( {source: ab , target: af },{source: ab , target: bg },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ac },{source: af , target: bg },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: ah },{source: af , target: ag },{source: ai , target: bg },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: bg },{source: aj , target: ak },{source: ae , target: af },{source: ae , target: bg },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ag },{source: ad , target: af },{source: ad , target: bg },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ag },{source: ak , target: bg },{source: ah , target: bg },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ag , target: bg },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ah },{source: ac , target: af },{source: ac , target: bg },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','af','bg','ae','ad','ak','ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ah = nodes[0],ai = nodes[1],aj = nodes[2] ; /* nodes.push(); */ links.push( {source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  af = {id: 'af', name:'albrecht'},ah = nodes[0] ; nodes.push( af ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ab = {id: 'ab', name:'agnes'},ae = {id: 'ae', name:'caspar_bernauer'} ; nodes.push( ab,ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = {id: 'aa', name:'theobald'},ab = nodes[0],ae = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ab = nodes[0],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = nodes[0],ae = nodes[1],aj = {id: 'aj', name:'törring'} ; nodes.push( aj ); links.push( {source: ab , target: aj },{source: ab , target: ae },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ae = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = {id: 'ab', name:'agnes'},ae = nodes[0],aj = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: aj },{source: ab , target: ae },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = nodes[0],ae = nodes[1],af = {id: 'af', name:'albrecht'},aj = nodes[2] ; nodes.push( af ); links.push( {source: af , target: aj },{source: ab , target: af },{source: ab , target: aj },{source: ab , target: ae },{source: ae , target: af },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = nodes[0],ae = nodes[1],af = nodes[2],ah = {id: 'ah', name:'nothhafft_von_wernberg'},ai = {id: 'ai', name:'frauenhoven'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: af , target: ai },{source: af , target: ah },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ae },{source: ae , target: ai },{source: ae , target: ah },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ai','ah','af','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  al = {id: 'al', name:'ernst'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  al = nodes[0],am = {id: 'am', name:'stachus'} ; nodes.push( am ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  al = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  al = nodes[0],am = {id: 'am', name:'stachus'} ; nodes.push( am ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  al = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  al = nodes[0],an = {id: 'an', name:'der_kanzler_preising'},an = {id: 'an', name:'der_kanzler_preising'} ; nodes.push( an ); links.push( {source: al , target: an },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'an','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  af = {id: 'af', name:'albrecht'},ao = {id: 'ao', name:'kastellan'} ; nodes.push( af,ao ); links.push( {source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ab = {id: 'ab', name:'agnes'},af = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ab = nodes[0],af = nodes[1],ao = {id: 'ao', name:'kastellan'} ; nodes.push( ao ); links.push( {source: af , target: ao },{source: ab , target: af },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ab','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  af = nodes[0],an = {id: 'an', name:'der_kanzler_preising'} ; nodes.push( an ); links.push( {source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ab = {id: 'ab', name:'agnes'},af = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  af = nodes[0],al = {id: 'al', name:'ernst'},an = {id: 'an', name:'der_kanzler_preising'},ap = {id: 'ap', name:'marschall'},aq = {id: 'aq', name:'wolfram_von_pienzenau'},ar = {id: 'ar', name:'hans_von_läubelfing'},ay = {id: 'ay', name:'ignaz_von_seyboltstorff'} ; nodes.push( al,an,ap,aq,ar,ay ); links.push( {source: al , target: an },{source: al , target: ap },{source: al , target: aq },{source: al , target: ay },{source: al , target: ar },{source: an , target: ap },{source: an , target: aq },{source: an , target: ay },{source: an , target: ar },{source: ap , target: aq },{source: ap , target: ay },{source: ap , target: ar },{source: aq , target: ay },{source: aq , target: ar },{source: af , target: al },{source: af , target: an },{source: af , target: ap },{source: af , target: aq },{source: af , target: ay },{source: af , target: ar },{source: ar , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'al','ap','aq','af','ay','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  an = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  am = {id: 'am', name:'stachus'},an = nodes[0] ; nodes.push( am ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  an = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  al = {id: 'al', name:'ernst'},an = nodes[0] ; nodes.push( al ); links.push( {source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'al','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ah = {id: 'ah', name:'nothhafft_von_wernberg'},ao = {id: 'ao', name:'kastellan'} ; nodes.push( ah,ao ); links.push( {source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ah = nodes[0],ai = {id: 'ai', name:'frauenhoven'},aj = {id: 'aj', name:'törring'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ai','aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ab = {id: 'ab', name:'agnes'},af = {id: 'af', name:'albrecht'} ; nodes.push( ab,af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ab = nodes[0],af = nodes[1],aj = {id: 'aj', name:'törring'} ; nodes.push( aj ); links.push( {source: af , target: aj },{source: ab , target: aj },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'aj','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  aa = {id: 'aa', name:'theobald'},ab = nodes[0],aj = {id: 'aj', name:'törring'} ; nodes.push( aa,aj ); links.push( {source: ab , target: aj },{source: aa , target: aj },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  aa = nodes[0],ab = nodes[1],as = {id: 'as', name:'der_kastellan'} ; nodes.push( as ); links.push( {source: ab , target: as },{source: aa , target: as },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  aa = nodes[0],ab = nodes[1],aj = {id: 'aj', name:'törring'},an = {id: 'an', name:'der_kanzler_preising'},at = {id: 'at', name:'pappenheim'},au = {id: 'au', name:'die_knechte'},av = {id: 'av', name:'die_reisigen'} ; nodes.push( aj,an,at,au,av ); links.push( {source: at , target: au },{source: at , target: av },{source: aj , target: at },{source: aj , target: au },{source: aj , target: av },{source: aj , target: an },{source: aa , target: at },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: au },{source: aa , target: av },{source: aa , target: an },{source: ab , target: at },{source: ab , target: aj },{source: ab , target: au },{source: ab , target: av },{source: ab , target: an },{source: au , target: av },{source: an , target: at },{source: an , target: au },{source: an , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'at','aj','aa','au','av','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  ab = nodes[0],an = {id: 'an', name:'der_kanzler_preising'} ; nodes.push( an ); links.push( {source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  ab = nodes[0],an = nodes[1],aw = {id: 'aw', name:'emeran_nusperger_zu_kalmperg'},ax = {id: 'ax', name:'ein_häscher'} ; nodes.push( aw,ax ); links.push( {source: ab , target: aw },{source: ab , target: an },{source: ab , target: ax },{source: aw , target: ax },{source: an , target: aw },{source: an , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ab','aw','an','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  al = {id: 'al', name:'ernst'},aq = {id: 'aq', name:'wolfram_von_pienzenau'},ay = {id: 'ay', name:'ignaz_von_seyboltstorff'},az = {id: 'az', name:'otto_von_bern'} ; nodes.push( al,aq,ay,az ); links.push( {source: al , target: aq },{source: al , target: ay },{source: al , target: az },{source: aq , target: ay },{source: aq , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'aq','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  al = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  al = nodes[0],an = {id: 'an', name:'der_kanzler_preising'},at = {id: 'at', name:'pappenheim'} ; nodes.push( an,at ); links.push( {source: an , target: at },{source: al , target: an },{source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'an','al','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ba = {id: 'ba', name:'einige'},bb = {id: 'bb', name:'andere'} ; nodes.push( ba,bb ); links.push( {source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ba','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  aa = {id: 'aa', name:'theobald'},af = {id: 'af', name:'albrecht'},ah = {id: 'ah', name:'nothhafft_von_wernberg'},ai = {id: 'ai', name:'frauenhoven'},at = {id: 'at', name:'pappenheim'},bc = {id: 'bc', name:'rolf_von_frauenhoven'} ; nodes.push( aa,af,ah,ai,at,bc ); links.push( {source: af , target: at },{source: af , target: ah },{source: af , target: bc },{source: af , target: ai },{source: at , target: bc },{source: aa , target: af },{source: aa , target: at },{source: aa , target: ah },{source: aa , target: bc },{source: aa , target: ai },{source: ah , target: at },{source: ah , target: bc },{source: ah , target: ai },{source: ai , target: at },{source: ai , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'at','aa','ah','bc','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  af = nodes[0],al = {id: 'al', name:'ernst'},bd = {id: 'bd', name:'stimmen'},be = {id: 'be', name:'andere_stimmen'} ; nodes.push( al,bd,be ); links.push( {source: al , target: bd },{source: al , target: be },{source: af , target: al },{source: af , target: bd },{source: af , target: be },{source: bd , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  af = nodes[0],ah = {id: 'ah', name:'nothhafft_von_wernberg'},ai = {id: 'ai', name:'frauenhoven'},al = nodes[1],an = {id: 'an', name:'der_kanzler_preising'},at = {id: 'at', name:'pappenheim'},bd = nodes[2],bf = {id: 'bf', name:'der_herold'},bg = {id: 'bg', name:'nothhafft'},bh = {id: 'bh', name:'viele_stimmen'} ; nodes.push( ah,ai,an,at,bf,bg,bh ); links.push( {source: bf , target: bg },{source: bf , target: bh },{source: at , target: bf },{source: at , target: bg },{source: at , target: bd },{source: at , target: bh },{source: bg , target: bh },{source: ai , target: bf },{source: ai , target: at },{source: ai , target: bg },{source: ai , target: an },{source: ai , target: al },{source: ai , target: bd },{source: ai , target: bh },{source: af , target: bf },{source: af , target: at },{source: af , target: bg },{source: af , target: ai },{source: af , target: an },{source: af , target: al },{source: af , target: bd },{source: af , target: bh },{source: af , target: ah },{source: an , target: bf },{source: an , target: at },{source: an , target: bg },{source: an , target: bd },{source: an , target: bh },{source: al , target: bf },{source: al , target: at },{source: al , target: bg },{source: al , target: an },{source: al , target: bd },{source: al , target: bh },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bh },{source: ah , target: bf },{source: ah , target: at },{source: ah , target: bg },{source: ah , target: ai },{source: ah , target: an },{source: ah , target: al },{source: ah , target: bd },{source: ah , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 310000);
