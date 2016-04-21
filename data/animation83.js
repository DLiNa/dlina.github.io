setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'die_mädchen'},ab = {id: 'ab', name:'die_bursche'},ac = {id: 'ac', name:'christoph'},ad = {id: 'ad', name:'hanns'},ae = {id: 'ae', name:'hannerl'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ae },{source: ac , target: ad },{source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad ae af ag */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = {id: 'af', name:'salome'},ag = {id: 'ag', name:'seppel'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','ae','aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'flora'},ai = {id: 'ai', name:'plutzerkern'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = {id: 'aj', name:'titus'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* af aj */ var  af = {id: 'af', name:'salome'},aj = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'titus'},ak = {id: 'ak', name:'marquis'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ak */ var  ak = {id: 'ak', name:'marquis'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'titus'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af aj */ var  af = {id: 'af', name:'salome'},aj = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'flora'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ah aj */ var  ah = nodes[0] ,aj = {id: 'aj', name:'titus'} ; nodes.push( aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = {id: 'ai', name:'plutzerkern'} ; nodes.push( ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ah al */ var  ah = nodes[0] ,al = {id: 'al', name:'constantia'} ; nodes.push( al ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ah aj al */ var  ah = nodes[0] ,aj = {id: 'aj', name:'titus'},al = nodes[1]  ; nodes.push( aj ); links.push( {source: aj , target: al },{source: ah , target: aj },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ah ai aj al */ var  ah = nodes[0] ,ai = {id: 'ai', name:'plutzerkern'},aj = nodes[1] ,al = nodes[2]  ; nodes.push( ai ); links.push( {source: ai , target: aj },{source: ai , target: al },{source: aj , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ah aj al am */ var  ah = nodes[0] ,aj = nodes[1] ,al = nodes[2] ,am = {id: 'am', name:'erster_knecht'} ; nodes.push( am ); links.push( {source: ah , target: am },{source: ah , target: al },{source: ah , target: aj },{source: al , target: am },{source: aj , target: am },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ah aj al an ao */ var  ah = nodes[0] ,aj = nodes[1] ,al = nodes[2] ,an = {id: 'an', name:'die_knechte'},ao = {id: 'ao', name:'chor'} ; nodes.push( an,ao ); links.push( {source: an , target: ao },{source: aj , target: an },{source: aj , target: al },{source: aj , target: ao },{source: al , target: an },{source: al , target: ao },{source: ah , target: an },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aj','al','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ai am an ao */ var  ai = {id: 'ai', name:'plutzerkern'},am = {id: 'am', name:'erster_knecht'},an = nodes[0] ,ao = nodes[1]  ; nodes.push( ai,am ); links.push( {source: ai , target: ao },{source: ai , target: am },{source: ai , target: an },{source: am , target: ao },{source: am , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ao','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ah ai an */ var  ah = {id: 'ah', name:'flora'},ai = nodes[0] ,an = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: an },{source: ah , target: ai },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ah aj */ var  ah = nodes[0] ,aj = {id: 'aj', name:'titus'} ; nodes.push( aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ah ai aj */ var  ah = nodes[0] ,ai = {id: 'ai', name:'plutzerkern'},aj = nodes[1]  ; nodes.push( ai ); links.push( {source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aj al */ var  aj = nodes[0] ,al = {id: 'al', name:'constantia'} ; nodes.push( al ); links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* af aj al */ var  af = {id: 'af', name:'salome'},aj = nodes[0] ,al = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: aj },{source: af , target: al },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aj al */ var  aj = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aj ak al */ var  aj = nodes[0] ,ak = {id: 'ak', name:'marquis'},al = nodes[1]  ; nodes.push( ak ); links.push( {source: ak , target: al },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aj ak */ var  aj = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aj ak */ var  aj = nodes[0] ,ak = {id: 'ak', name:'marquis'} ; nodes.push( ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ap aq */ var  ap = {id: 'ap', name:'frau_von_cypressenburg'},aq = {id: 'aq', name:'emma'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aj ap aq */ var  aj = {id: 'aj', name:'titus'},ap = nodes[0] ,aq = nodes[1]  ; nodes.push( aj ); links.push( {source: aj , target: aq },{source: aj , target: ap },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aj ap */ var  aj = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* al ap */ var  al = {id: 'al', name:'constantia'},ap = nodes[0]  ; nodes.push( al ); links.push( {source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aj al ap */ var  aj = {id: 'aj', name:'titus'},al = nodes[0] ,ap = nodes[1]  ; nodes.push( aj ); links.push( {source: aj , target: al },{source: aj , target: ap },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aj ap */ var  aj = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aj ap aq */ var  aj = nodes[0] ,ap = nodes[1] ,aq = {id: 'aq', name:'emma'} ; nodes.push( aq ); links.push( {source: aj , target: aq },{source: aj , target: ap },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'aq','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'chor'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aj ap ar */ var  aj = {id: 'aj', name:'titus'},ap = {id: 'ap', name:'frau_von_cypressenburg'},ar = {id: 'ar', name:'herr_von_platt'} ; nodes.push( aj,ap,ar ); links.push( {source: ap , target: ar },{source: aj , target: ap },{source: aj , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ah aj ap ar */ var  ah = {id: 'ah', name:'flora'},aj = nodes[0] ,ap = nodes[1] ,ar = nodes[2]  ; nodes.push( ah ); links.push( {source: ah , target: ap },{source: ah , target: aj },{source: ah , target: ar },{source: ap , target: ar },{source: aj , target: ap },{source: aj , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ah aj al ap aq ar */ var  ah = nodes[0] ,aj = nodes[1] ,al = {id: 'al', name:'constantia'},ap = nodes[2] ,aq = {id: 'aq', name:'emma'},ar = nodes[3]  ; nodes.push( al,aq ); links.push( {source: al , target: aq },{source: al , target: ap },{source: al , target: ar },{source: aq , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aj , target: al },{source: aj , target: aq },{source: aj , target: ap },{source: aj , target: ar },{source: ah , target: al },{source: ah , target: aq },{source: ah , target: ap },{source: ah , target: aj },{source: ah , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigster Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ah aj ak al ap aq ar as */ var  ah = nodes[0] ,aj = nodes[1] ,ak = {id: 'ak', name:'marquis'},al = nodes[2] ,ap = nodes[3] ,aq = nodes[4] ,ar = nodes[5] ,as = {id: 'as', name:'chor_der_gesellschaft'} ; nodes.push( ak,as ); links.push( {source: ak , target: ap },{source: ak , target: ar },{source: ak , target: al },{source: ak , target: aq },{source: ak , target: as },{source: ap , target: ar },{source: ap , target: aq },{source: ap , target: as },{source: aj , target: ak },{source: aj , target: ap },{source: aj , target: ar },{source: aj , target: al },{source: aj , target: aq },{source: aj , target: as },{source: ar , target: as },{source: ah , target: ak },{source: ah , target: ap },{source: ah , target: aj },{source: ah , target: ar },{source: ah , target: al },{source: ah , target: aq },{source: ah , target: as },{source: al , target: ap },{source: al , target: ar },{source: al , target: aq },{source: al , target: as },{source: aq , target: ar },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigster Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ak','ap','ar','ah','al','aq','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ai aj at */ var  ai = {id: 'ai', name:'plutzerkern'},aj = nodes[0] ,at = {id: 'at', name:'georg'} ; nodes.push( ai,at ); links.push( {source: aj , target: at },{source: ai , target: at },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ai aj */ var  ai = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* af au */ var  af = {id: 'af', name:'salome'},au = {id: 'au', name:'spund'} ; nodes.push( af,au ); links.push( {source: af , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'af','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ah ai aj */ var  ah = {id: 'ah', name:'flora'},ai = {id: 'ai', name:'plutzerkern'},aj = {id: 'aj', name:'titus'} ; nodes.push( ah,ai,aj ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ah ai aj */ var  ah = nodes[0] ,ai = nodes[1] ,aj = nodes[2]  ; /* nodes.push(); */ links.push( {source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* aj at */ var  aj = nodes[0] ,at = {id: 'at', name:'georg'} ; nodes.push( at ); links.push( {source: aj , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'flora'},ai = {id: 'ai', name:'plutzerkern'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ah at */ var  ah = nodes[0] ,at = {id: 'at', name:'georg'} ; nodes.push( at ); links.push( {source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* af ah aj */ var  af = {id: 'af', name:'salome'},ah = nodes[0] ,aj = {id: 'aj', name:'titus'} ; nodes.push( af,aj ); links.push( {source: ah , target: aj },{source: af , target: ah },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ah','aj','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* al */ var  al = {id: 'al', name:'constantia'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* al ap */ var  al = nodes[0] ,ap = {id: 'ap', name:'frau_von_cypressenburg'} ; nodes.push( ap ); links.push( {source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ap','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* aj av */ var  aj = {id: 'aj', name:'titus'},av = {id: 'av', name:'konrad'} ; nodes.push( aj,av ); links.push( {source: aj , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* aj av */ var  aj = nodes[0] ,av = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* aj */ var  aj = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* aj al ap */ var  aj = nodes[0] ,al = {id: 'al', name:'constantia'},ap = {id: 'ap', name:'frau_von_cypressenburg'} ; nodes.push( al,ap ); links.push( {source: al , target: ap },{source: aj , target: ap },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ap','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* aj au av */ var  aj = nodes[0] ,au = {id: 'au', name:'spund'},av = {id: 'av', name:'konrad'} ; nodes.push( au,av ); links.push( {source: aj , target: au },{source: aj , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68');nodes.sort(compare); /* aj al ap au */ var  aj = nodes[0] ,al = {id: 'al', name:'constantia'},ap = {id: 'ap', name:'frau_von_cypressenburg'},au = nodes[1]  ; nodes.push( al,ap ); links.push( {source: ap , target: au },{source: al , target: ap },{source: al , target: au },{source: aj , target: ap },{source: aj , target: al },{source: aj , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69');nodes.sort(compare); /* ah aj al ap au */ var  ah = {id: 'ah', name:'flora'},aj = nodes[0] ,al = nodes[1] ,ap = nodes[2] ,au = nodes[3]  ; nodes.push( ah ); links.push( {source: ah , target: ap },{source: ah , target: al },{source: ah , target: au },{source: ah , target: aj },{source: ap , target: au },{source: al , target: ap },{source: al , target: au },{source: aj , target: ap },{source: aj , target: al },{source: aj , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70');nodes.sort(compare); /* af ah aj al ap au aw */ var  af = {id: 'af', name:'salome'},ah = nodes[0] ,aj = nodes[1] ,al = nodes[2] ,ap = nodes[3] ,au = nodes[4] ,aw = {id: 'aw', name:'notarius'} ; nodes.push( af,aw ); links.push( {source: af , target: ap },{source: af , target: aw },{source: af , target: al },{source: af , target: au },{source: af , target: aj },{source: af , target: ah },{source: ap , target: aw },{source: ap , target: au },{source: al , target: ap },{source: al , target: aw },{source: al , target: au },{source: au , target: aw },{source: aj , target: ap },{source: aj , target: aw },{source: aj , target: al },{source: aj , target: au },{source: ah , target: ap },{source: ah , target: aw },{source: ah , target: al },{source: ah , target: au },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 345000);
