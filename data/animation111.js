setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'fust'},ab = {id: 'ab', name:'frowald'},ac = {id: 'ac', name:'günther'},ad = {id: 'ad', name:'käsperle'},ae = {id: 'ae', name:'hans'},af = {id: 'af', name:'bodo'},ag = {id: 'ag', name:'wallberg'},ah = {id: 'ah', name:'eckhard'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.785714285714285714%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac ad af ag ah ai */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ag = nodes[4] ,ah = nodes[5] ,ai = {id: 'ai', name:'rudolph'} ; nodes.push( ai ); links.push( {source: aa , target: ai },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ad },{source: af , target: ai },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: ah , target: ai },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.571428571428571429%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai','aa','af','ag','ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac aj */ var  ab = {id: 'ab', name:'frowald'},ac = nodes[0] ,aj = {id: 'aj', name:'veit'} ; nodes.push( ab,aj ); links.push( {source: ab , target: ac },{source: ab , target: aj },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.357142857142857143%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac aj ak */ var  ab = nodes[0] ,ac = nodes[1] ,aj = nodes[2] ,ak = {id: 'ak', name:'wallfahrer'} ; nodes.push( ak ); links.push( {source: ac , target: ak },{source: ac , target: aj },{source: aj , target: ak },{source: ab , target: ak },{source: ab , target: ac },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.142857142857142857%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ak al am */ var  ac = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'jeriel'},am = {id: 'am', name:'die_stimme_des_geistes'} ; nodes.push( al,am ); links.push( {source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.928571428571428571%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'käsperle'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.714285714285714286%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'hans'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.5%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ae an */ var  ae = nodes[0] ,an = {id: 'an', name:'örtchen'} ; nodes.push( an ); links.push( {source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.285714285714285714%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ao */ var  ac = {id: 'ac', name:'günther'},ao = {id: 'ao', name:'ritter_hans'} ; nodes.push( ac,ao ); links.push( {source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.071428571428571429%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ap aq */ var  ap = {id: 'ap', name:'bertha'},aq = {id: 'aq', name:'mathilde'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.857142857142857143%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* al ap aq */ var  al = {id: 'al', name:'jeriel'},ap = nodes[0] ,aq = nodes[1]  ; nodes.push( al ); links.push( {source: al , target: ap },{source: al , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.642857142857142857%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac ap aq */ var  ac = {id: 'ac', name:'günther'},ap = nodes[0] ,aq = nodes[1]  ; nodes.push( ac ); links.push( {source: ap , target: aq },{source: ac , target: aq },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.428571428571428571%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac ae am aq as */ var  ac = nodes[0] ,ae = {id: 'ae', name:'hans'},am = {id: 'am', name:'die_stimme_des_geistes'},aq = nodes[1] ,as = {id: 'as', name:'löbenstein'} ; nodes.push( ae,am,as ); links.push( {source: aq , target: as },{source: ac , target: as },{source: ac , target: aq },{source: ac , target: ae },{source: ac , target: am },{source: ae , target: as },{source: ae , target: aq },{source: ae , target: am },{source: am , target: as },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.214285714285714286%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'as','aq','ac','ae','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa af ag ar bd */ var  aa = {id: 'aa', name:'fust'},af = {id: 'af', name:'bodo'},ag = {id: 'ag', name:'wallberg'},ar = {id: 'ar', name:'eckard'},bd = {id: 'bd', name:'hanns'} ; nodes.push( aa,af,ag,ar,bd ); links.push( {source: ag , target: bd },{source: ag , target: ar },{source: aa , target: ag },{source: aa , target: bd },{source: aa , target: af },{source: aa , target: ar },{source: af , target: ag },{source: af , target: bd },{source: af , target: ar },{source: ar , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ad af ag ar */ var  aa = nodes[0] ,ad = {id: 'ad', name:'käsperle'},af = nodes[1] ,ag = nodes[2] ,ar = nodes[3]  ; nodes.push( ad ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: ad , target: ar },{source: ag , target: ar },{source: af , target: ag },{source: af , target: ar },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.785714285714285714%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','af','ar','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'günther'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.571428571428571429%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac ad aj */ var  ac = nodes[0] ,ad = nodes[1] ,aj = {id: 'aj', name:'veit'} ; nodes.push( aj ); links.push( {source: ac , target: aj },{source: ac , target: ad },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.357142857142857143%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aj','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad al */ var  ad = nodes[0] ,al = {id: 'al', name:'jeriel'} ; nodes.push( al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.142857142857142857%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ae aj */ var  ab = {id: 'ab', name:'frowald'},ae = {id: 'ae', name:'hans'},aj = {id: 'aj', name:'veit'} ; nodes.push( ab,ae,aj ); links.push( {source: ab , target: aj },{source: ab , target: ae },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.928571428571428571%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab','aj','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aq */ var  aq = {id: 'aq', name:'mathilde'} ; nodes.push( aq ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.714285714285714286%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae aq as */ var  ae = {id: 'ae', name:'hans'},aq = nodes[0] ,as = {id: 'as', name:'löbenstein'} ; nodes.push( ae,as ); links.push( {source: ae , target: aq },{source: ae , target: as },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.5%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae','aq','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* at bd */ var  at = {id: 'at', name:'burgvogt'},bd = {id: 'bd', name:'hanns'} ; nodes.push( at,bd ); links.push( {source: at , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.285714285714285714%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* al as at bd */ var  al = {id: 'al', name:'jeriel'},as = {id: 'as', name:'löbenstein'},at = nodes[0] ,bd = nodes[1]  ; nodes.push( al,as ); links.push( {source: al , target: bd },{source: al , target: as },{source: al , target: at },{source: as , target: bd },{source: as , target: at },{source: at , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.071428571428571429%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'al','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* as au bd */ var  as = nodes[0] ,au = {id: 'au', name:'weib'},bd = nodes[1]  ; nodes.push( au ); links.push( {source: au , target: bd },{source: as , target: au },{source: as , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.857142857142857143%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'au','bd','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ad al */ var  ac = {id: 'ac', name:'günther'},ad = {id: 'ad', name:'käsperle'},al = {id: 'al', name:'jeriel'} ; nodes.push( ac,ad,al ); links.push( {source: ad , target: al },{source: ac , target: al },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.642857142857142857%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ac ad am av */ var  ac = nodes[0] ,ad = nodes[1] ,am = {id: 'am', name:'die_stimme_des_geistes'},av = {id: 'av', name:'stimme'} ; nodes.push( am,av ); links.push( {source: ac , target: ad },{source: ac , target: av },{source: ac , target: am },{source: ad , target: av },{source: ad , target: am },{source: am , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.428571428571428571%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ad al am */ var  ac = nodes[0] ,ad = nodes[1] ,al = {id: 'al', name:'jeriel'},am = nodes[2]  ; nodes.push( al ); links.push( {source: ac , target: am },{source: ac , target: al },{source: ac , target: ad },{source: al , target: am },{source: ad , target: am },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.214285714285714286%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ac','am','al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa aj ar */ var  aa = {id: 'aa', name:'fust'},aj = {id: 'aj', name:'veit'},ar = {id: 'ar', name:'eckard'} ; nodes.push( aa,aj,ar ); links.push( {source: aa , target: aj },{source: aa , target: ar },{source: aj , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa af ag aj ar aw */ var  aa = nodes[0] ,af = {id: 'af', name:'bodo'},ag = {id: 'ag', name:'wallberg'},aj = nodes[1] ,ar = nodes[2] ,aw = {id: 'aw', name:'ritter'} ; nodes.push( af,ag,aw ); links.push( {source: af , target: aw },{source: af , target: ar },{source: af , target: aj },{source: af , target: ag },{source: ar , target: aw },{source: aj , target: aw },{source: aj , target: ar },{source: aa , target: aw },{source: aa , target: af },{source: aa , target: ar },{source: aa , target: aj },{source: aa , target: ag },{source: ag , target: aw },{source: ag , target: ar },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.785714285714285714%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa af ag aj ar */ var  aa = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,aj = nodes[3] ,ar = nodes[4]  ; /* nodes.push(); */ links.push( {source: af , target: aj },{source: af , target: ar },{source: af , target: ag },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ar },{source: aa , target: ag },{source: aj , target: ar },{source: ag , target: aj },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.571428571428571429%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'af','aa','ar','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aj an */ var  aj = nodes[0] ,an = {id: 'an', name:'örtchen'} ; nodes.push( an ); links.push( {source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.357142857142857143%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ae aj */ var  ae = {id: 'ae', name:'hans'},aj = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.142857142857142857%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aj','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'günther'},ad = {id: 'ad', name:'käsperle'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.928571428571428571%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.714285714285714286%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ad al */ var  ad = nodes[0] ,al = {id: 'al', name:'jeriel'} ; nodes.push( al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.5%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ad ax ay */ var  ad = nodes[0] ,ax = {id: 'ax', name:'mädchen'},ay = {id: 'ay', name:'die_alte'} ; nodes.push( ax,ay ); links.push( {source: ad , target: ax },{source: ad , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.285714285714285714%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ad','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ac az ba */ var  ac = {id: 'ac', name:'günther'},az = {id: 'az', name:'boodsheim'},ba = {id: 'ba', name:'erster_knappe'} ; nodes.push( ac,az,ba ); links.push( {source: az , target: ba },{source: ac , target: az },{source: ac , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.071428571428571429%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'az','ac','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad bd */ var  ad = {id: 'ad', name:'käsperle'},bd = {id: 'bd', name:'hanns'} ; nodes.push( ad,bd ); links.push( {source: ad , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.857142857142857143%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ae al an bd */ var  ae = {id: 'ae', name:'hans'},al = {id: 'al', name:'jeriel'},an = {id: 'an', name:'örtchen'},bd = nodes[0]  ; nodes.push( ae,al,an ); links.push( {source: ae , target: an },{source: ae , target: al },{source: ae , target: bd },{source: an , target: bd },{source: al , target: an },{source: al , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.642857142857142857%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ab aj al an bd */ var  ab = {id: 'ab', name:'frowald'},aj = {id: 'aj', name:'veit'},al = nodes[0] ,an = nodes[1] ,bd = nodes[2]  ; nodes.push( ab,aj ); links.push( {source: aj , target: bd },{source: aj , target: an },{source: aj , target: al },{source: an , target: bd },{source: ab , target: bd },{source: ab , target: aj },{source: ab , target: an },{source: ab , target: al },{source: al , target: bd },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.428571428571428571%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aj','an','ab','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* as bb bd */ var  as = {id: 'as', name:'löbenstein'},bb = {id: 'bb', name:'knecht'},bd = nodes[0]  ; nodes.push( as,bb ); links.push( {source: as , target: bd },{source: as , target: bb },{source: bb , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.214285714285714286%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa af ag ah as bd */ var  aa = {id: 'aa', name:'fust'},af = {id: 'af', name:'bodo'},ag = {id: 'ag', name:'wallberg'},ah = {id: 'ah', name:'eckhard'},as = nodes[0] ,bd = nodes[1]  ; nodes.push( aa,af,ag,ah ); links.push( {source: aa , target: bd },{source: aa , target: as },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: as },{source: as , target: bd },{source: af , target: bd },{source: af , target: as },{source: af , target: ag },{source: af , target: ah },{source: af , target: as },{source: ag , target: bd },{source: ag , target: as },{source: ag , target: ah },{source: ag , target: as },{source: ah , target: bd },{source: ah , target: as },{source: ah , target: as },{source: as , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aa','bd','as','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ac bc */ var  ac = {id: 'ac', name:'günther'},bc = {id: 'bc', name:'mann'} ; nodes.push( ac,bc ); links.push( {source: ac , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.785714285714285714%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ac am as az bc bd be */ var  ac = nodes[0] ,am = {id: 'am', name:'die_stimme_des_geistes'},as = {id: 'as', name:'löbenstein'},az = {id: 'az', name:'boodsheim'},bc = nodes[1] ,bd = {id: 'bd', name:'hanns'},be = {id: 'be', name:'greiss'} ; nodes.push( am,as,az,bd,be ); links.push( {source: az , target: bc },{source: az , target: bd },{source: az , target: bd },{source: az , target: be },{source: ac , target: az },{source: ac , target: bc },{source: ac , target: bd },{source: ac , target: bd },{source: ac , target: as },{source: ac , target: am },{source: ac , target: be },{source: bc , target: bd },{source: bc , target: bd },{source: bc , target: be },{source: bd , target: be },{source: bd , target: be },{source: as , target: az },{source: as , target: bc },{source: as , target: bd },{source: as , target: bd },{source: as , target: be },{source: am , target: az },{source: am , target: bc },{source: am , target: bd },{source: am , target: bd },{source: am , target: as },{source: am , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.571428571428571429%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'az','ac','bc','bd','as','am','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'frowald'},ad = {id: 'ad', name:'käsperle'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.357142857142857143%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = {id: 'ac', name:'günther'},ad = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.142857142857142857%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ac','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* bd bf */ var  bd = {id: 'bd', name:'hanns'},bf = {id: 'bf', name:'berthold'} ; nodes.push( bd,bf ); links.push( {source: bd , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.928571428571428571%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ae al aq bd bf */ var  ae = {id: 'ae', name:'hans'},al = {id: 'al', name:'jeriel'},aq = {id: 'aq', name:'mathilde'},bd = nodes[0] ,bf = nodes[1]  ; nodes.push( ae,al,aq ); links.push( {source: bd , target: bf },{source: aq , target: bd },{source: aq , target: bf },{source: al , target: bd },{source: al , target: aq },{source: al , target: bf },{source: ae , target: bd },{source: ae , target: aq },{source: ae , target: al },{source: ae , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.714285714285714286%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'bd','aq','al','ae','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ah aj ar */ var  ah = {id: 'ah', name:'eckhard'},aj = {id: 'aj', name:'veit'},ar = {id: 'ar', name:'eckard'} ; nodes.push( ah,aj,ar ); links.push( {source: aj , target: ar },{source: ah , target: aj },{source: ah , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.5%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'aj','ar','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ae an */ var  ae = {id: 'ae', name:'hans'},an = {id: 'an', name:'örtchen'} ; nodes.push( ae,an ); links.push( {source: ae , target: an },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.285714285714285714%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ae','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'günther'},ad = {id: 'ad', name:'käsperle'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.071428571428571429%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ac ad am */ var  ac = nodes[0] ,ad = nodes[1] ,am = {id: 'am', name:'die_stimme_des_geistes'} ; nodes.push( am ); links.push( {source: ac , target: am },{source: ac , target: ad },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.857142857142857143%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ac ad am */ var  ac = nodes[0] ,ad = nodes[1] ,am = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ac , target: am },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.642857142857142857%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ac','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ad al */ var  ad = nodes[0] ,al = {id: 'al', name:'jeriel'} ; nodes.push( al ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.428571428571428571%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ad','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ac am bg */ var  ac = {id: 'ac', name:'günther'},am = {id: 'am', name:'die_stimme_des_geistes'},bg = {id: 'bg', name:'kilian'} ; nodes.push( ac,am,bg ); links.push( {source: ac , target: bg },{source: ac , target: am },{source: am , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.214285714285714286%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ac bg */ var  ac = nodes[0] ,bg = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 275000);
