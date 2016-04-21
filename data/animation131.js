setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'nachtwächter'},ac = {id: 'ac', name:'pemperl'},ad = {id: 'ad', name:'schabenfellner'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ae af */ var  ab = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'klaus'},af = {id: 'af', name:'die_bürger'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: af },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ae ag ah */ var  ab = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'cäcilie'},ah = {id: 'ah', name:'walpurga'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ae },{source: ae , target: ag },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ae ag ai aj */ var  ae = nodes[0] ,ag = nodes[1] ,ai = {id: 'ai', name:'sigmund'},aj = {id: 'aj', name:'willibald'} ; nodes.push( ai,aj ); links.push( {source: ae , target: ag },{source: ae , target: ai },{source: ae , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ai aj */ var  ae = nodes[0] ,ai = nodes[1] ,aj = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: aj },{source: ae , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'pfiffspitz'},al = {id: 'al', name:'ultra'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ae ak al */ var  ae = {id: 'ae', name:'klaus'},ak = nodes[0] ,al = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ak },{source: ae , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ak al am */ var  ac = {id: 'ac', name:'pemperl'},ak = nodes[0] ,al = nodes[1] ,am = {id: 'am', name:'die_krähwinkler'} ; nodes.push( ac,am ); links.push( {source: ak , target: am },{source: ak , target: al },{source: al , target: am },{source: ac , target: am },{source: ac , target: ak },{source: ac , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'am','ak','al','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ai an */ var  ai = {id: 'ai', name:'sigmund'},an = {id: 'an', name:'reakzerl'} ; nodes.push( ai,an ); links.push( {source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ai aj al */ var  ai = nodes[0] ,aj = {id: 'aj', name:'willibald'},al = {id: 'al', name:'ultra'} ; nodes.push( aj,al ); links.push( {source: aj , target: al },{source: ai , target: al },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ai aj ao */ var  ai = nodes[0] ,aj = nodes[1] ,ao = {id: 'ao', name:'frau_von_frankenfrei'} ; nodes.push( ao ); links.push( {source: aj , target: ao },{source: ai , target: aj },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* al ao ap */ var  al = {id: 'al', name:'ultra'},ao = nodes[0] ,ap = {id: 'ap', name:'bürgermeister'} ; nodes.push( al,ap ); links.push( {source: al , target: ap },{source: al , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ai aj al */ var  ai = {id: 'ai', name:'sigmund'},aj = {id: 'aj', name:'willibald'},al = nodes[0]  ; nodes.push( ai,aj ); links.push( {source: aj , target: al },{source: ai , target: al },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'al','aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ae aq */ var  ae = {id: 'ae', name:'klaus'},aq = {id: 'aq', name:'emerenzia'} ; nodes.push( ae,aq ); links.push( {source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ae al aq */ var  ae = nodes[0] ,al = {id: 'al', name:'ultra'},aq = nodes[1]  ; nodes.push( al ); links.push( {source: al , target: aq },{source: ae , target: aq },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ae ag al aq */ var  ae = nodes[0] ,ag = {id: 'ag', name:'cäcilie'},al = nodes[1] ,aq = nodes[2]  ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ae , target: al },{source: ae , target: aq },{source: ag , target: al },{source: ag , target: aq },{source: al , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ae ag aq */ var  ae = nodes[0] ,ag = nodes[1] ,aq = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: aq },{source: ae , target: ag },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ae ag ap aq */ var  ae = nodes[0] ,ag = nodes[1] ,ap = {id: 'ap', name:'bürgermeister'},aq = nodes[2]  ; nodes.push( ap ); links.push( {source: ap , target: aq },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ag },{source: ag , target: ap },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ae','aq','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ap */ var  ap = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae ap */ var  ae = {id: 'ae', name:'klaus'},ap = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ap */ var  ap = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae ap */ var  ae = {id: 'ae', name:'klaus'},ap = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ap */ var  ap = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'sigmund'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ai ar as */ var  ai = nodes[0] ,ar = {id: 'ar', name:'sperling'},as = {id: 'as', name:'rummelpuff'} ; nodes.push( ar,as ); links.push( {source: ar , target: as },{source: ai , target: ar },{source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ai ap ar as */ var  ai = nodes[0] ,ap = {id: 'ap', name:'bürgermeister'},ar = nodes[1] ,as = nodes[2]  ; nodes.push( ap ); links.push( {source: ap , target: as },{source: ap , target: ar },{source: ar , target: as },{source: ai , target: ap },{source: ai , target: as },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'as','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab aj al ap ar */ var  ab = {id: 'ab', name:'nachtwächter'},aj = {id: 'aj', name:'willibald'},al = {id: 'al', name:'ultra'},ap = nodes[0] ,ar = nodes[1]  ; nodes.push( ab,aj,al ); links.push( {source: al , target: ar },{source: al , target: ap },{source: ap , target: ar },{source: aj , target: al },{source: aj , target: ar },{source: aj , target: ap },{source: ab , target: al },{source: ab , target: ar },{source: ab , target: ap },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ap','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aj al ar as */ var  aj = nodes[0] ,al = nodes[1] ,ar = nodes[2] ,as = {id: 'as', name:'rummelpuff'} ; nodes.push( as ); links.push( {source: ar , target: as },{source: al , target: ar },{source: al , target: as },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Aufritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'as','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* al ap ar */ var  al = nodes[0] ,ap = {id: 'ap', name:'bürgermeister'},ar = nodes[1]  ; nodes.push( ap ); links.push( {source: ap , target: ar },{source: al , target: ap },{source: al , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ai al ap ar as */ var  ai = {id: 'ai', name:'sigmund'},al = nodes[0] ,ap = nodes[1] ,ar = nodes[2] ,as = {id: 'as', name:'rummelpuff'} ; nodes.push( ai,as ); links.push( {source: ai , target: ap },{source: ai , target: as },{source: ai , target: ar },{source: ai , target: al },{source: ap , target: as },{source: ap , target: ar },{source: ar , target: as },{source: al , target: ap },{source: al , target: as },{source: al , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ap','as','ar','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'klaus'},ai = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ae','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ac ad am */ var  ac = {id: 'ac', name:'pemperl'},ad = {id: 'ad', name:'schabenfellner'},am = {id: 'am', name:'die_krähwinkler'} ; nodes.push( ac,ad,am ); links.push( {source: ad , target: am },{source: ac , target: ad },{source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ac ad at au av */ var  ac = nodes[0] ,ad = nodes[1] ,at = {id: 'at', name:'frau_pemperl'},au = {id: 'au', name:'frau_schabenfellner'},av = {id: 'av', name:'frau_klöppl'} ; nodes.push( at,au,av ); links.push( {source: at , target: au },{source: at , target: av },{source: au , target: av },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: ad },{source: ad , target: at },{source: ad , target: au },{source: ad , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* at au av */ var  at = nodes[0] ,au = nodes[1] ,av = nodes[2]  ; /* nodes.push(); */ links.push( {source: at , target: av },{source: at , target: au },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ab ac ad at au */ var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'nachtwächter'},ac = {id: 'ac', name:'pemperl'},ad = {id: 'ad', name:'schabenfellner'},at = nodes[0] ,au = nodes[1]  ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: at },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: au },{source: aa , target: ad },{source: at , target: au },{source: ac , target: at },{source: ac , target: au },{source: ac , target: ad },{source: ab , target: at },{source: ab , target: ac },{source: ab , target: au },{source: ab , target: ad },{source: ad , target: at },{source: ad , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aa','at','ac','au','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ab ap ar */ var  ab = nodes[0] ,ap = {id: 'ap', name:'bürgermeister'},ar = {id: 'ar', name:'sperling'} ; nodes.push( ap,ar ); links.push( {source: ap , target: ar },{source: ab , target: ar },{source: ab , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ae ap ar */ var  ae = {id: 'ae', name:'klaus'},ap = nodes[0] ,ar = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: ap },{source: ae , target: ar },{source: ap , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* al ap */ var  al = {id: 'al', name:'ultra'},ap = nodes[0]  ; nodes.push( al ); links.push( {source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'al','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ah an ao ar at au aw ax ay az */ var  ah = {id: 'ah', name:'walpurga'},an = {id: 'an', name:'reakzerl'},ao = {id: 'ao', name:'frau_von_frankenfrei'},ar = {id: 'ar', name:'sperling'},at = {id: 'at', name:'frau_pemperl'},au = {id: 'au', name:'frau_schabenfellner'},aw = {id: 'aw', name:'babette'},ax = {id: 'ax', name:'adele'},ay = {id: 'ay', name:'frau_von_schnabelbeiss'},az = {id: 'az', name:'kathi'} ; nodes.push( ah,an,ao,ar,at,au,aw,ax,ay,az ); links.push( {source: an , target: ao },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: an , target: at },{source: an , target: ar },{source: an , target: au },{source: an , target: az },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ao , target: at },{source: ao , target: ar },{source: ao , target: au },{source: ao , target: az },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ay , target: az },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: aw },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: at },{source: ah , target: ar },{source: ah , target: au },{source: ah , target: az },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay },{source: at , target: au },{source: at , target: az },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: at },{source: ar , target: au },{source: ar , target: az },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aw','ax','at','ar','au','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ah al an ao ay ba */ var  ah = nodes[0] ,al = {id: 'al', name:'ultra'},an = nodes[1] ,ao = nodes[2] ,ay = nodes[3] ,ba = {id: 'ba', name:'ein_bedienter'} ; nodes.push( al,ba ); links.push( {source: al , target: an },{source: al , target: ao },{source: al , target: ay },{source: al , target: ba },{source: an , target: ao },{source: an , target: ay },{source: an , target: ba },{source: ao , target: ay },{source: ao , target: ba },{source: ay , target: ba },{source: ah , target: al },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ay },{source: ah , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ah','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* al an ao ap ar at ay */ var  al = nodes[0] ,an = nodes[1] ,ao = nodes[2] ,ap = {id: 'ap', name:'bürgermeister'},ar = {id: 'ar', name:'sperling'},at = {id: 'at', name:'frau_pemperl'},ay = nodes[3]  ; nodes.push( ap,ar,at ); links.push( {source: ap , target: ar },{source: ap , target: ay },{source: ap , target: at },{source: ao , target: ap },{source: ao , target: ar },{source: ao , target: ay },{source: ao , target: at },{source: ar , target: ay },{source: ar , target: at },{source: al , target: ap },{source: al , target: ao },{source: al , target: ar },{source: al , target: ay },{source: al , target: at },{source: al , target: an },{source: at , target: ay },{source: an , target: ap },{source: an , target: ao },{source: an , target: ar },{source: an , target: ay },{source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ap','ar','ay','at','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* al ao aw ax az */ var  al = nodes[0] ,ao = nodes[1] ,aw = {id: 'aw', name:'babette'},ax = {id: 'ax', name:'adele'},az = {id: 'az', name:'kathi'} ; nodes.push( aw,ax,az ); links.push( {source: ao , target: ax },{source: ao , target: aw },{source: ao , target: az },{source: al , target: ao },{source: al , target: ax },{source: al , target: aw },{source: al , target: az },{source: ax , target: az },{source: aw , target: ax },{source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ao','al','ax','aw','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ab ac ad ag aq */ var  ab = {id: 'ab', name:'nachtwächter'},ac = {id: 'ac', name:'pemperl'},ad = {id: 'ad', name:'schabenfellner'},ag = {id: 'ag', name:'cäcilie'},aq = {id: 'aq', name:'emerenzia'} ; nodes.push( ab,ac,ad,ag,aq ); links.push( {source: ad , target: aq },{source: ad , target: ag },{source: ac , target: ad },{source: ac , target: aq },{source: ac , target: ag },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: aq },{source: ab , target: ag },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ab ac ad ap aq */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ap = {id: 'ap', name:'bürgermeister'},aq = nodes[3]  ; nodes.push( ap ); links.push( {source: ap , target: aq },{source: ad , target: ap },{source: ad , target: aq },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'aq','ad','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ap bb */ var  ap = nodes[0] ,bb = {id: 'bb', name:'kellner'} ; nodes.push( bb ); links.push( {source: ap , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'bb','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ag ai aq */ var  ag = {id: 'ag', name:'cäcilie'},ai = {id: 'ai', name:'sigmund'},aq = {id: 'aq', name:'emerenzia'} ; nodes.push( ag,ai,aq ); links.push( {source: ai , target: aq },{source: ag , target: ai },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ag ap aq bb */ var  ag = nodes[0] ,ap = {id: 'ap', name:'bürgermeister'},aq = nodes[1] ,bb = {id: 'bb', name:'kellner'} ; nodes.push( ap,bb ); links.push( {source: aq , target: bb },{source: ag , target: aq },{source: ag , target: ap },{source: ag , target: bb },{source: ap , target: aq },{source: ap , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ag','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ab ac ap aq */ var  ab = {id: 'ab', name:'nachtwächter'},ac = {id: 'ac', name:'pemperl'},ap = nodes[0] ,aq = nodes[1]  ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: ab , target: ap },{source: ab , target: aq },{source: ac , target: ap },{source: ac , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ab ae am ap aq */ var  ab = nodes[0] ,ae = {id: 'ae', name:'klaus'},am = {id: 'am', name:'die_krähwinkler'},ap = nodes[1] ,aq = nodes[2]  ; nodes.push( ae,am ); links.push( {source: ab , target: ae },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: am },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: am },{source: ap , target: aq },{source: am , target: ap },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ab','ap','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* aa ac ae aq */ var  aa = {id: 'aa', name:'chor'},ac = {id: 'ac', name:'pemperl'},ae = nodes[0] ,aq = nodes[1]  ; nodes.push( aa,ac ); links.push( {source: ac , target: aq },{source: ac , target: ae },{source: ae , target: aq },{source: aa , target: ac },{source: aa , target: aq },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ac','aq','ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ar bb */ var  ar = {id: 'ar', name:'sperling'},bb = {id: 'bb', name:'kellner'} ; nodes.push( ar,bb ); links.push( {source: ar , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ar','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* al ap */ var  al = {id: 'al', name:'ultra'},ap = {id: 'ap', name:'bürgermeister'} ; nodes.push( al,ap ); links.push( {source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ae al ap */ var  ae = {id: 'ae', name:'klaus'},al = nodes[0] ,ap = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: al },{source: ae , target: ap },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ae al */ var  ae = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ae','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ab aj */ var  ab = {id: 'ab', name:'nachtwächter'},aj = {id: 'aj', name:'willibald'} ; nodes.push( ab,aj ); links.push( {source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ab','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ae ag ai */ var  ae = {id: 'ae', name:'klaus'},ag = {id: 'ag', name:'cäcilie'},ai = {id: 'ai', name:'sigmund'} ; nodes.push( ae,ag,ai ); links.push( {source: ae , target: ai },{source: ae , target: ag },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ae al */ var  ae = nodes[0] ,al = {id: 'al', name:'ultra'} ; nodes.push( al ); links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* al aq */ var  al = nodes[0] ,aq = {id: 'aq', name:'emerenzia'} ; nodes.push( aq ); links.push( {source: al , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* ae ao ap */ var  ae = {id: 'ae', name:'klaus'},ao = {id: 'ao', name:'frau_von_frankenfrei'},ap = {id: 'ap', name:'bürgermeister'} ; nodes.push( ae,ao,ap ); links.push( {source: ae , target: ap },{source: ae , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* ab ae ai aj al ao */ var  ab = {id: 'ab', name:'nachtwächter'},ae = nodes[0] ,ai = {id: 'ai', name:'sigmund'},aj = {id: 'aj', name:'willibald'},al = {id: 'al', name:'ultra'},ao = nodes[1]  ; nodes.push( ab,ai,aj,al ); links.push( {source: al , target: ao },{source: aj , target: al },{source: aj , target: ao },{source: ab , target: al },{source: ab , target: ao },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ae },{source: ai , target: al },{source: ai , target: ao },{source: ai , target: aj },{source: ae , target: al },{source: ae , target: ao },{source: ae , target: aj },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
}, 315000);
