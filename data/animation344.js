setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'sturmwald_ruft_hinterher'},ab = {id: 'ab', name:'leonore_für_sich'},ac = {id: 'ac', name:'claudia_zu_stößel'},ad = {id: 'ad', name:'rosalie_leise_zu_leonore'},ai = {id: 'ai', name:'stößel'} ; nodes.push( aa,ab,ac,ad,ai ); links.push( {source: ad , target: ai },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ai },{source: ac , target: ad },{source: ac , target: ai },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ad','ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],aa = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ac },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ae = {id: 'ae', name:'gotthold_für_sich'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ae = nodes[0],af = {id: 'af', name:'sichel'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = nodes[0],ae = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = {id: 'aa', name:'sturmwald_ruft_hinterher'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = {id: 'ab', name:'leonore_für_sich'},ac = {id: 'ac', name:'claudia_zu_stößel'},ad = {id: 'ad', name:'rosalie_leise_zu_leonore'} ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ad = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = {id: 'ab', name:'leonore_für_sich'},ad = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = nodes[0],ab = nodes[0],ac = {id: 'ac', name:'claudia_zu_stößel'},ad = nodes[1],ae = {id: 'ae', name:'gotthold_für_sich'},af = {id: 'af', name:'sichel'} ; nodes.push( ab,ac,ae,af ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = nodes[1],ad = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = {id: 'ab', name:'leonore_für_sich'},ac = nodes[0],ad = nodes[1],ad = nodes[1],ae = {id: 'ae', name:'gotthold_für_sich'},af = {id: 'af', name:'sichel'} ; nodes.push( ab,ad,ae,af ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ac , target: ad },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = nodes[0],ac = nodes[1],ac = nodes[1],ad = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = nodes[0],ac = nodes[1],ac = nodes[1],ad = nodes[2],ad = nodes[2],ae = {id: 'ae', name:'gotthold_für_sich'},af = {id: 'af', name:'sichel'} ; nodes.push( ac,ad,ae,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'sturmwald_ruft_hinterher'},aa = {id: 'aa', name:'sturmwald_ruft_hinterher'},ab = nodes[1],ab = nodes[1],ac = nodes[2],ac = nodes[2],ad = nodes[3],ae = nodes[4],af = nodes[5] ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','ab','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = {id: 'ae', name:'gotthold_für_sich'},af = {id: 'af', name:'sichel'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ag = {id: 'ag', name:'krautmann_zu_claudia'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ag = nodes[0],ah = {id: 'ah', name:'gallus'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ae = {id: 'ae', name:'gotthold_für_sich'},af = {id: 'af', name:'sichel'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ae = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ad = {id: 'ad', name:'rosalie_leise_zu_leonore'},ae = nodes[0],af = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ae = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = {id: 'ac', name:'claudia_zu_stößel'},ac = {id: 'ac', name:'claudia_zu_stößel'},af = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = {id: 'ab', name:'leonore_für_sich'},ab = {id: 'ab', name:'leonore_für_sich'},ac = nodes[1],ac = nodes[1],ad = {id: 'ad', name:'rosalie_leise_zu_leonore'},ad = {id: 'ad', name:'rosalie_leise_zu_leonore'},ae = {id: 'ae', name:'gotthold_für_sich'},af = nodes[3],ai = {id: 'ai', name:'stößel'} ; nodes.push( ab,ac,ad,ae,ai ); links.push( {source: ac , target: ai },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: af , target: ai },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: ai },{source: ae , target: af },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = nodes[0],ad = nodes[2],ae = nodes[3],af = nodes[4] ; /* nodes.push(); */ links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ae','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = {id: 'aa', name:'sturmwald_ruft_hinterher'},af = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = nodes[0],ac = {id: 'ac', name:'claudia_zu_stößel'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  af = {id: 'af', name:'sichel'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ag = {id: 'ag', name:'krautmann_zu_claudia'},ai = {id: 'ai', name:'stößel'} ; nodes.push( ag,ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ab = {id: 'ab', name:'leonore_für_sich'},ad = {id: 'ad', name:'rosalie_leise_zu_leonore'},ae = {id: 'ae', name:'gotthold_für_sich'} ; nodes.push( ab,ad,ae ); links.push( {source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ab = nodes[0],ad = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ab = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'gotthold_für_sich'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ab = nodes[0],ad = nodes[1],ae = nodes[2],af = {id: 'af', name:'sichel'} ; nodes.push( af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ab = nodes[0],ad = nodes[1],ae = nodes[2],af = nodes[3] ; /* nodes.push(); */ links.push( {source: ab , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = {id: 'aa', name:'sturmwald_ruft_hinterher'},ab = nodes[0],ad = nodes[1],ae = nodes[2],af = nodes[3],aj = {id: 'aj', name:'kommissär_tritt_etwas_vor'},aj = {id: 'aj', name:'kommissär_tritt_etwas_vor'} ; nodes.push( aa,aj ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: aj },{source: aa , target: aj },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: aj },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: aj },{source: af , target: aj },{source: af , target: aj },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'claudia_zu_stößel'},ad = nodes[2],ae = nodes[3],af = nodes[4],ai = {id: 'ai', name:'stößel'},aj = nodes[5] ; nodes.push( ac,ai ); links.push( {source: ac , target: aj },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: ai , target: aj },{source: af , target: aj },{source: af , target: ai },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: af },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ae },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ac = nodes[2],ad = nodes[3],ae = nodes[4],af = nodes[5],ag = {id: 'ag', name:'krautmann_zu_claudia'},ag = {id: 'ag', name:'krautmann_zu_claudia'},ag = {id: 'ag', name:'krautmann_zu_claudia'},ai = nodes[7],aj = nodes[8] ; nodes.push( ac,ag ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: ag },{source: af , target: ag },{source: af , target: ai },{source: af , target: ag },{source: af , target: aj },{source: af , target: ag },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ac },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: ag },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ac },{source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ag },{source: ag , target: ai },{source: ag , target: aj },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigster Auftritt.';
}, 210000);
