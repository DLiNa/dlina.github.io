setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'käthchen'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'karl'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'redlich'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'staberl'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ad ae */ var  ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'therese'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = {id: 'af', name:'müller'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ae af */ var  aa = {id: 'aa', name:'käthchen'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ae ag */ var  ac = {id: 'ac', name:'redlich'},ae = nodes[0] ,ag = {id: 'ag', name:'hans'} ; nodes.push( ac,ag ); links.push( {source: ac , target: ae },{source: ac , target: ag },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ac ae af */ var  aa = {id: 'aa', name:'käthchen'},ac = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'müller'} ; nodes.push( aa,af ); links.push( {source: ac , target: af },{source: ac , target: ae },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac ad af ah */ var  ac = nodes[0] ,ad = {id: 'ad', name:'staberl'},af = nodes[1] ,ah = {id: 'ah', name:'toloysky'} ; nodes.push( ad,ah ); links.push( {source: ad , target: ah },{source: ad , target: af },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ac ad ae ai */ var  aa = {id: 'aa', name:'käthchen'},ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'therese'},ai = {id: 'ai', name:'ferdinand'} ; nodes.push( aa,ae,ai ); links.push( {source: ad , target: ai },{source: ad , target: ae },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ae , target: ai },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ac ad af ag ah aj ak al am an */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = {id: 'af', name:'müller'},ag = {id: 'ag', name:'hans'},ah = {id: 'ah', name:'toloysky'},aj = {id: 'aj', name:'mehrere'},ak = {id: 'ak', name:'ein_bürger'},al = {id: 'al', name:'ein_anderer'},am = {id: 'am', name:'ein_dritter'},an = {id: 'an', name:'ein_vierter_bürger'} ; nodes.push( af,ag,ah,aj,ak,al,am,an ); links.push( {source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: aj },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: aj },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: aj },{source: af , target: ah },{source: af , target: ag },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: aj },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: aj },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ad','ah','ag','af','aa','ak','al','am','an','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'staberl'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = {id: 'ag', name:'hans'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'therese'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'redlich'},ae = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'staberl'},ae = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'müller'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ad ae af */ var  ad = nodes[0] ,ae = {id: 'ae', name:'therese'},af = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ad */ var  aa = {id: 'aa', name:'käthchen'},ad = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'therese'},af = {id: 'af', name:'müller'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ae af */ var  aa = {id: 'aa', name:'käthchen'},ae = {id: 'ae', name:'therese'},af = nodes[0]  ; nodes.push( aa,ae ); links.push( {source: ae , target: af },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ab ae */ var  ab = {id: 'ab', name:'karl'},ae = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'staberl'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ab ad ah */ var  aa = {id: 'aa', name:'käthchen'},ab = {id: 'ab', name:'karl'},ad = nodes[0] ,ah = {id: 'ah', name:'toloysky'} ; nodes.push( aa,ab,ah ); links.push( {source: ad , target: ah },{source: ab , target: ah },{source: ab , target: ad },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigste Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ah','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigste Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ab ac ad ah */ var  aa = {id: 'aa', name:'käthchen'},ab = {id: 'ab', name:'karl'},ac = {id: 'ac', name:'redlich'},ad = nodes[0] ,ah = {id: 'ah', name:'toloysky'} ; nodes.push( aa,ab,ac,ah ); links.push( {source: ad , target: ah },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ah },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ab ac ad af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,af = {id: 'af', name:'müller'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ac , target: ad },{source: ac , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ac','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ad af ah */ var  ad = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'toloysky'} ; nodes.push( ah ); links.push( {source: af , target: ah },{source: ad , target: af },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ac ad af ah ao */ var  ac = {id: 'ac', name:'redlich'},ad = nodes[0] ,af = nodes[1] ,ah = nodes[2] ,ao = {id: 'ao', name:'kommissär'} ; nodes.push( ac,ao ); links.push( {source: ac , target: ao },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ah },{source: af , target: ao },{source: af , target: ah },{source: ad , target: ao },{source: ad , target: af },{source: ad , target: ah },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ac','ao','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ag ah ak */ var  ag = {id: 'ag', name:'hans'},ah = nodes[0] ,ak = {id: 'ak', name:'ein_bürger'} ; nodes.push( ag,ak ); links.push( {source: ah , target: ak },{source: ag , target: ah },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ag ah ap aq */ var  ag = nodes[0] ,ah = nodes[1] ,ap = {id: 'ap', name:'erste_bürgerin'},aq = {id: 'aq', name:'die_weiber'} ; nodes.push( ap,aq ); links.push( {source: ah , target: ap },{source: ah , target: aq },{source: ap , target: aq },{source: ag , target: ah },{source: ag , target: ap },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ad ag ah ap aq ar */ var  ad = {id: 'ad', name:'staberl'},ag = nodes[0] ,ah = nodes[1] ,ap = nodes[2] ,aq = nodes[3] ,ar = {id: 'ar', name:'zweite_bürgerin'} ; nodes.push( ad,ar ); links.push( {source: ah , target: aq },{source: ah , target: ap },{source: ah , target: ar },{source: ad , target: ah },{source: ad , target: aq },{source: ad , target: ap },{source: ad , target: ag },{source: ad , target: ar },{source: aq , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: ag , target: ah },{source: ag , target: aq },{source: ag , target: ap },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ah','ad','aq','ap','ag','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'redlich'},ae = {id: 'ae', name:'therese'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'staberl'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ac ad ae ah ak al am an ap ar */ var  ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'therese'},ah = {id: 'ah', name:'toloysky'},ak = {id: 'ak', name:'ein_bürger'},al = {id: 'al', name:'ein_anderer'},am = {id: 'am', name:'ein_dritter'},an = {id: 'an', name:'ein_vierter_bürger'},ap = {id: 'ap', name:'erste_bürgerin'},ar = {id: 'ar', name:'zweite_bürgerin'} ; nodes.push( ae,ah,ak,al,am,an,ap,ar ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ap },{source: ac , target: ar },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ae , target: ah },{source: ae , target: ap },{source: ae , target: ar },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ap },{source: ad , target: ar },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ah , target: ap },{source: ah , target: ar },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ap , target: ar },{source: ak , target: ap },{source: ak , target: ar },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: ap },{source: al , target: ar },{source: al , target: am },{source: al , target: an },{source: am , target: ap },{source: am , target: ar },{source: am , target: an },{source: an , target: ap },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ad','ah','ap','ar','ak','al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aa ab ac ae */ var  aa = {id: 'aa', name:'käthchen'},ab = {id: 'ab', name:'karl'},ac = nodes[0] ,ae = nodes[1]  ; nodes.push( aa,ab ); links.push( {source: ac , target: ae },{source: ab , target: ac },{source: ab , target: ae },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* aa ab ac ad ae ag ah ak al am an ap ar as */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'staberl'},ae = nodes[3] ,ag = {id: 'ag', name:'hans'},ah = {id: 'ah', name:'toloysky'},ak = {id: 'ak', name:'ein_bürger'},al = {id: 'al', name:'ein_anderer'},am = {id: 'am', name:'ein_dritter'},an = {id: 'an', name:'ein_vierter_bürger'},ap = {id: 'ap', name:'erste_bürgerin'},ar = {id: 'ar', name:'zweite_bürgerin'},as = {id: 'as', name:'chor'} ; nodes.push( ad,ag,ah,ak,al,am,an,ap,ar,as ); links.push( {source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ap },{source: ad , target: ar },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: as },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ap },{source: ac , target: ar },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: as },{source: ag , target: ah },{source: ag , target: ap },{source: ag , target: ar },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: as },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ap },{source: ae , target: ar },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: as },{source: ah , target: ap },{source: ah , target: ar },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: as },{source: ap , target: ar },{source: ap , target: as },{source: ar , target: as },{source: ak , target: ap },{source: ak , target: ar },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: as },{source: al , target: ap },{source: al , target: ar },{source: al , target: am },{source: al , target: an },{source: al , target: as },{source: am , target: ap },{source: am , target: ar },{source: am , target: an },{source: am , target: as },{source: an , target: ap },{source: an , target: ar },{source: an , target: as },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ap },{source: ab , target: ar },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: as },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ap },{source: aa , target: ar },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 245000);
