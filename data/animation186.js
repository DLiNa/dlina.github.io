setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'röse'},ab = {id: 'ab', name:'marthe'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'michel_allein'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'töffel_allein'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = nodes[1],ad = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ad },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],aa = nodes[0],ab = nodes[1],ad = nodes[2],ad = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ad },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ad = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ad = nodes[0],ae = {id: 'ae', name:'hannchen'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ac = {id: 'ac', name:'michel_allein'},ad = nodes[0],ao = {id: 'ao', name:'alle_bauren'} ; nodes.push( ac,ad,ao ); links.push( {source: ac , target: ao },{source: ac , target: ad },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ad = nodes[0],af = {id: 'af', name:'gürge'},ag = {id: 'ag', name:'quaas'} ; nodes.push( af,ag ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = {id: 'aa', name:'röse'},ab = {id: 'ab', name:'marthe'},ac = {id: 'ac', name:'michel_allein'},ad = nodes[0] ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = nodes[0],ae = {id: 'ae', name:'hannchen'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = nodes[0],ah = {id: 'ah', name:'christel'} ; nodes.push( ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],ae = {id: 'ae', name:'hannchen'},ah = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ah },{source: aa , target: ae },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ae = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ai = {id: 'ai', name:'könig'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ai = nodes[0],aj = {id: 'aj', name:'der_erste'},ak = {id: 'ak', name:'der_zweyte'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = {id: 'ac', name:'michel_allein'},ai = nodes[0],ai = nodes[0] ; nodes.push( ac,ai ); links.push( {source: ac , target: ai },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Anftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = {id: 'aa', name:'röse'},ab = {id: 'ab', name:'marthe'},ah = {id: 'ah', name:'christel'} ; nodes.push( aa,ab,ah ); links.push( {source: aa , target: ab },{source: aa , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'michel_allein'},ah = nodes[2] ; nodes.push( ac ); links.push( {source: ab , target: ah },{source: ab , target: ac },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ah = nodes[3],ai = {id: 'ai', name:'könig'} ; nodes.push( ai ); links.push( {source: ac , target: ai },{source: ac , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = nodes[0],ah = nodes[1],ai = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: ai },{source: ac , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = {id: 'aa', name:'röse'},ac = nodes[0],ai = nodes[1] ; nodes.push( aa ); links.push( {source: ac , target: ai },{source: aa , target: ac },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = nodes[0],ab = {id: 'ab', name:'marthe'},ac = {id: 'ac', name:'michel_allein'},ai = nodes[1] ; nodes.push( ab,ac ); links.push( {source: ac , target: ai },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebender Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = {id: 'aa', name:'röse'},ab = {id: 'ab', name:'marthe'},ac = nodes[0],ac = nodes[0],ah = {id: 'ah', name:'christel'},ai = nodes[1],al = {id: 'al', name:'der_ganze_chor'} ; nodes.push( aa,ab,ac,ah,al ); links.push( {source: ac , target: ai },{source: ac , target: ah },{source: ac , target: al },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: al },{source: ab , target: ac },{source: ai , target: al },{source: ah , target: ai },{source: ah , target: al },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: ac },{source: ac , target: ai },{source: ac , target: ah },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ab','aa','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ac = nodes[0],ae = {id: 'ae', name:'hannchen'},ah = nodes[1],ai = nodes[2] ; nodes.push( ae ); links.push( {source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ai },{source: ae , target: ah },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = {id: 'aa', name:'röse'},ab = {id: 'ab', name:'marthe'},ac = nodes[0],ad = {id: 'ad', name:'töffel_allein'},ai = nodes[1] ; nodes.push( aa,ab,ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ai },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ai },{source: ad , target: ai },{source: ac , target: ad },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = nodes[0],aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = {id: 'ae', name:'hannchen'},ah = {id: 'ah', name:'christel'},ai = nodes[4],am = {id: 'am', name:'graf'},am = {id: 'am', name:'graf'},an = {id: 'an', name:'treuwerth'},an = {id: 'an', name:'treuwerth'},ao = {id: 'ao', name:'alle_bauren'} ; nodes.push( aa,ae,ah,am,an,ao ); links.push( {source: ae , target: am },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: an },{source: ae , target: ao },{source: ac , target: ae },{source: ac , target: am },{source: ac , target: am },{source: ac , target: ad },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: an },{source: ac , target: ao },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: ad , target: ae },{source: ad , target: am },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: an },{source: ad , target: ao },{source: an , target: ao },{source: ah , target: am },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: an },{source: ah , target: ao },{source: ai , target: am },{source: ai , target: am },{source: ai , target: an },{source: ai , target: an },{source: ai , target: ao },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: am },{source: aa , target: ad },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ab },{source: an , target: ao },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: am },{source: ab , target: am },{source: ab , target: ad },{source: ab , target: an },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: an },{source: ab , target: ao },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: am },{source: aa , target: ad },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ac','am','an','ai','ao','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ad = nodes[1],ae = nodes[2],ah = nodes[3] ; /* nodes.push(); */ links.push( {source: ae , target: ah },{source: ad , target: ah },{source: ad , target: ae },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = nodes[0],ab = {id: 'ab', name:'marthe'},ac = {id: 'ac', name:'michel_allein'},ad = nodes[1],ae = nodes[2],ah = nodes[3],al = {id: 'al', name:'der_ganze_chor'},al = {id: 'al', name:'der_ganze_chor'} ; nodes.push( ab,ac,al ); links.push( {source: ac , target: al },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: al },{source: ab , target: ac },{source: ab , target: al },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: al },{source: ah , target: al },{source: ah , target: al },{source: ae , target: al },{source: ae , target: ah },{source: ae , target: al },{source: ad , target: al },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: al },{source: aa , target: ac },{source: aa , target: al },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt';
}, 165000);
