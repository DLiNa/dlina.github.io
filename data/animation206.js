setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'zangler'},ab = {id: 'ab', name:'sonders'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'gertrud'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = {id: 'ad', name:'kraps'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'gertrud'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = {id: 'ae', name:'melchior'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ae af */ var  aa = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'hupfer'} ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'gertrud'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'weinberl'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ag ah */ var  aa = {id: 'aa', name:'zangler'},ag = nodes[0] ,ah = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ah },{source: aa , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'gertrud'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = {id: 'ah', name:'weinberl'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'zangler'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ah ai */ var  ab = {id: 'ab', name:'sonders'},ah = {id: 'ah', name:'weinberl'},ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ah,ai ); links.push( {source: ah , target: ai },{source: ab , target: ah },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah','ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'gertrud'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'sonders'},ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ag ah ai */ var  aa = {id: 'aa', name:'zangler'},ab = nodes[0] ,ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'weinberl'},ai = nodes[1]  ; nodes.push( aa,ag,ah ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ag },{source: ab , target: ai },{source: ab , target: ah },{source: ab , target: ag },{source: ah , target: ai },{source: ag , target: ai },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa','ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ag ah aj */ var  ag = nodes[0] ,ah = nodes[1] ,aj = {id: 'aj', name:'hausmeister'} ; nodes.push( aj ); links.push( {source: ag , target: aj },{source: ag , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aj','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ak */ var  aa = {id: 'aa', name:'zangler'},ak = {id: 'ak', name:'brunninger'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aa','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ag ah al */ var  ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'weinberl'},al = {id: 'al', name:'philippine'} ; nodes.push( ag,ah,al ); links.push( {source: ah , target: al },{source: ag , target: al },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag ah al am */ var  ag = nodes[0] ,ah = nodes[1] ,al = nodes[2] ,am = {id: 'am', name:'madam_knorr'} ; nodes.push( am ); links.push( {source: al , target: am },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: am },{source: ah , target: al },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ag ah al am */ var  ag = nodes[0] ,ah = nodes[1] ,al = nodes[2] ,am = nodes[3]  ; /* nodes.push(); */ links.push( {source: al , target: am },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: am },{source: ah , target: al },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ag ah al am an */ var  ag = nodes[0] ,ah = nodes[1] ,al = nodes[2] ,am = nodes[3] ,an = {id: 'an', name:'frau_von_fischer'} ; nodes.push( an ); links.push( {source: al , target: am },{source: al , target: an },{source: al , target: am },{source: am , target: an },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: am },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'al','am','an','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ae ao */ var  aa = {id: 'aa', name:'zangler'},ae = {id: 'ae', name:'melchior'},ao = {id: 'ao', name:'kutscher'} ; nodes.push( aa,ae,ao ); links.push( {source: aa , target: ae },{source: aa , target: ao },{source: ae , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ae ao */ var  aa = nodes[0] ,ae = nodes[1] ,ao = nodes[2]  ; /* nodes.push(); */ links.push( {source: aa , target: ao },{source: aa , target: ae },{source: ae , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ao','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ab ae ai */ var  ab = {id: 'ab', name:'sonders'},ae = nodes[0] ,ai = {id: 'ai', name:'marie'} ; nodes.push( ab,ai ); links.push( {source: ae , target: ai },{source: ab , target: ae },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ab ai ap */ var  ab = nodes[0] ,ai = nodes[1] ,ap = {id: 'ap', name:'kellner'} ; nodes.push( ap ); links.push( {source: ab , target: ap },{source: ab , target: ai },{source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ap','ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'melchior'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ag ah am an */ var  ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'weinberl'},am = {id: 'am', name:'madam_knorr'},an = {id: 'an', name:'frau_von_fischer'} ; nodes.push( ag,ah,am,an ); links.push( {source: am , target: an },{source: ag , target: an },{source: ag , target: am },{source: ag , target: ah },{source: ah , target: an },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag ah am an ap */ var  ag = nodes[0] ,ah = nodes[1] ,am = nodes[2] ,an = nodes[3] ,ap = {id: 'ap', name:'kellner'} ; nodes.push( ap ); links.push( {source: ah , target: ap },{source: ah , target: an },{source: ah , target: am },{source: ag , target: ap },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: am },{source: an , target: ap },{source: am , target: ap },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ag ah am an */ var  ag = nodes[0] ,ah = nodes[1] ,am = nodes[2] ,an = nodes[3]  ; /* nodes.push(); */ links.push( {source: am , target: an },{source: ag , target: an },{source: ag , target: am },{source: ag , target: ah },{source: ah , target: an },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ae ag ah am an ap aq */ var  ae = {id: 'ae', name:'melchior'},ag = nodes[0] ,ah = nodes[1] ,am = nodes[2] ,an = nodes[3] ,ap = {id: 'ap', name:'kellner'},aq = {id: 'aq', name:'zweiter_kellner'} ; nodes.push( ae,ap,aq ); links.push( {source: ap , target: aq },{source: an , target: ap },{source: an , target: aq },{source: ah , target: ap },{source: ah , target: an },{source: ah , target: aq },{source: ah , target: am },{source: ag , target: ap },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: am },{source: ae , target: ap },{source: ae , target: an },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: aq },{source: ae , target: am },{source: am , target: ap },{source: am , target: an },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ae ag ah am an */ var  aa = {id: 'aa', name:'zangler'},ae = nodes[0] ,ag = nodes[1] ,ah = nodes[2] ,am = nodes[3] ,an = nodes[4]  ; nodes.push( aa ); links.push( {source: aa , target: ae },{source: aa , target: am },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: an },{source: ae , target: am },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: an },{source: am , target: an },{source: ah , target: am },{source: ah , target: an },{source: ag , target: am },{source: ag , target: ah },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ab ae ai am an */ var  aa = nodes[0] ,ab = {id: 'ab', name:'sonders'},ae = nodes[1] ,ai = {id: 'ai', name:'marie'},am = nodes[2] ,an = nodes[3]  ; nodes.push( ab,ai ); links.push( {source: ab , target: ai },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ae },{source: ai , target: am },{source: ai , target: an },{source: am , target: an },{source: ae , target: ai },{source: ae , target: am },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aa','ai','am','an','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ab ar */ var  ab = nodes[0] ,ar = {id: 'ar', name:'lisett'} ; nodes.push( ar ); links.push( {source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ar as */ var  ar = nodes[0] ,as = {id: 'as', name:'fräulein_blumenblatt'} ; nodes.push( as ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ag ah ao as at */ var  ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'weinberl'},ao = {id: 'ao', name:'kutscher'},as = nodes[0] ,at = {id: 'at', name:'wachter'} ; nodes.push( ag,ah,ao,at ); links.push( {source: ah , target: at },{source: ah , target: as },{source: ah , target: ao },{source: as , target: at },{source: ao , target: at },{source: ao , target: as },{source: ag , target: at },{source: ag , target: ah },{source: ag , target: as },{source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'at','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ag ah as */ var  ag = nodes[0] ,ah = nodes[1] ,as = nodes[2]  ; /* nodes.push(); */ links.push( {source: ah , target: as },{source: ag , target: ah },{source: ag , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ae ag ah ar as */ var  ae = {id: 'ae', name:'melchior'},ag = nodes[0] ,ah = nodes[1] ,ar = {id: 'ar', name:'lisett'},as = nodes[2]  ; nodes.push( ae,ar ); links.push( {source: ar , target: as },{source: ae , target: ar },{source: ae , target: as },{source: ae , target: ah },{source: ae , target: ag },{source: ah , target: ar },{source: ah , target: as },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ae ah ar as */ var  ae = nodes[0] ,ah = nodes[1] ,ar = nodes[2] ,as = nodes[3]  ; /* nodes.push(); */ links.push( {source: ar , target: as },{source: ah , target: ar },{source: ah , target: as },{source: ae , target: ar },{source: ae , target: ah },{source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ab ae ag ah as */ var  ab = {id: 'ab', name:'sonders'},ae = nodes[0] ,ag = {id: 'ag', name:'christoph'},ah = nodes[1] ,as = nodes[2]  ; nodes.push( ab,ag ); links.push( {source: ab , target: as },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ag },{source: ah , target: as },{source: ae , target: as },{source: ae , target: ah },{source: ae , target: ag },{source: ag , target: as },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ae ah ar as at */ var  ae = nodes[0] ,ah = nodes[1] ,ar = {id: 'ar', name:'lisett'},as = nodes[2] ,at = {id: 'at', name:'wachter'} ; nodes.push( ar,at ); links.push( {source: as , target: at },{source: ae , target: at },{source: ae , target: as },{source: ae , target: ah },{source: ae , target: ar },{source: ah , target: at },{source: ah , target: as },{source: ah , target: ar },{source: ar , target: at },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'at','ah','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* aa ae am an as */ var  aa = {id: 'aa', name:'zangler'},ae = nodes[0] ,am = {id: 'am', name:'madam_knorr'},an = {id: 'an', name:'frau_von_fischer'},as = nodes[1]  ; nodes.push( aa,am,an ); links.push( {source: aa , target: as },{source: aa , target: ae },{source: aa , target: an },{source: aa , target: am },{source: ae , target: as },{source: ae , target: an },{source: ae , target: am },{source: an , target: as },{source: am , target: as },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ae','an','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aa ai as */ var  aa = nodes[0] ,ai = {id: 'ai', name:'marie'},as = nodes[1]  ; nodes.push( ai ); links.push( {source: aa , target: as },{source: aa , target: ai },{source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* aa am an ar as at */ var  aa = nodes[0] ,am = {id: 'am', name:'madam_knorr'},an = {id: 'an', name:'frau_von_fischer'},ar = {id: 'ar', name:'lisett'},as = nodes[1] ,at = {id: 'at', name:'wachter'} ; nodes.push( am,an,ar,at ); links.push( {source: ar , target: as },{source: ar , target: at },{source: as , target: at },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: an },{source: aa , target: am },{source: aa , target: at },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: am , target: ar },{source: am , target: as },{source: am , target: an },{source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ar','as','aa','an','am','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'weinberl'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* aa ab ag ah at */ var  aa = {id: 'aa', name:'zangler'},ab = {id: 'ab', name:'sonders'},ag = nodes[0] ,ah = nodes[1] ,at = {id: 'at', name:'wachter'} ; nodes.push( aa,ab,at ); links.push( {source: ab , target: ah },{source: ab , target: ag },{source: ab , target: at },{source: ah , target: at },{source: ag , target: ah },{source: ag , target: at },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ab','ah','ag','aa','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'gertrud'},ae = {id: 'ae', name:'melchior'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ae','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'weinberl'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ad au */ var  ad = {id: 'ad', name:'kraps'},au = {id: 'au', name:'rab'} ; nodes.push( ad,au ); links.push( {source: ad , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ad ag ah au */ var  ad = nodes[0] ,ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'weinberl'},au = nodes[1]  ; nodes.push( ag,ah ); links.push( {source: ah , target: au },{source: ag , target: ah },{source: ag , target: au },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ad ag ah */ var  ad = nodes[0] ,ag = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: ad , target: ah },{source: ad , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ag ah au */ var  ag = nodes[0] ,ah = nodes[1] ,au = {id: 'au', name:'rab'} ; nodes.push( au ); links.push( {source: ah , target: au },{source: ag , target: ah },{source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ah','ag','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'melchior'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ae ah au */ var  ae = nodes[0] ,ah = {id: 'ah', name:'weinberl'},au = {id: 'au', name:'rab'} ; nodes.push( ah,au ); links.push( {source: ae , target: au },{source: ae , target: ah },{source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* aa ab ae ag ah ai am an */ var  aa = {id: 'aa', name:'zangler'},ab = {id: 'ab', name:'sonders'},ae = nodes[0] ,ag = {id: 'ag', name:'christoph'},ah = nodes[1] ,ai = {id: 'ai', name:'marie'},am = {id: 'am', name:'madam_knorr'},an = {id: 'an', name:'frau_von_fischer'} ; nodes.push( aa,ab,ag,ai,am,an ); links.push( {source: ag , target: ah },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ai },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ai },{source: aa , target: ab },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ai },{source: am , target: an },{source: ai , target: am },{source: ai , target: an },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 305000);
