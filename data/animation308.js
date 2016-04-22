setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab bd */ var  aa = {id: 'aa', name:'astragalus'},ab = {id: 'ab', name:'linarius'},bd = {id: 'bd', name:'alpengeister'} ; nodes.push( aa,ab,bd ); links.push( {source: aa , target: ab },{source: aa , target: bd },{source: ab , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.857142857142857143%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.714285714285714286%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'malchen'},ad = {id: 'ad', name:'lischen'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.571428571428571429%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ac ae */ var  aa = {id: 'aa', name:'astragalus'},ac = nodes[0] ,ae = {id: 'ae', name:'august'} ; nodes.push( aa,ae ); links.push( {source: ac , target: ae },{source: aa , target: ae },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.428571428571428571%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.285714285714285714%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'sophie'},ag = {id: 'ag', name:'kutscher'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.142857142857142857%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* af ag ah ai */ var  af = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'habakuk'},ai = {id: 'ai', name:'sabine'} ; nodes.push( ah,ai ); links.push( {source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah','ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad af */ var  ad = {id: 'ad', name:'lischen'},af = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.857142857142857143%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad ah */ var  ad = nodes[0] ,ah = {id: 'ah', name:'habakuk'} ; nodes.push( ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.714285714285714286%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'rappelkopf'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.571428571428571429%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ad aj */ var  ad = {id: 'ad', name:'lischen'},aj = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.428571428571428571%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* af aj */ var  af = {id: 'af', name:'sophie'},aj = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.285714285714285714%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ah aj */ var  ah = {id: 'ah', name:'habakuk'},aj = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.142857142857142857%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ah','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ak al am an ao ap aq ar as at */ var  ak = {id: 'ak', name:'salchen'},al = {id: 'al', name:'christian'},am = {id: 'am', name:'marthe'},an = {id: 'an', name:'das_kind'},ao = {id: 'ao', name:'die_katze'},ap = {id: 'ap', name:'der_hund'},aq = {id: 'aq', name:'hänschen'},ar = {id: 'ar', name:'andresel'},as = {id: 'as', name:'christoph'},at = {id: 'at', name:'die_grossmutter'} ; nodes.push( ak,al,am,an,ao,ap,aq,ar,as,at ); links.push( {source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ar , target: as },{source: ar , target: at },{source: as , target: at },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: at },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: at },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: at },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: ap },{source: ao , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'an','ao','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aj ak al am ap aq ar as au av */ var  aj = {id: 'aj', name:'rappelkopf'},ak = nodes[0] ,al = nodes[1] ,am = nodes[2] ,ap = nodes[3] ,aq = nodes[4] ,ar = nodes[5] ,as = nodes[6] ,au = {id: 'au', name:'der_bub_unterm_bett'},av = {id: 'av', name:'franzel'} ; nodes.push( aj,au,av ); links.push( {source: aj , target: ak },{source: aj , target: am },{source: aj , target: al },{source: aj , target: ar },{source: aj , target: au },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: as },{source: aj , target: av },{source: ak , target: am },{source: ak , target: al },{source: ak , target: ar },{source: ak , target: au },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: as },{source: ak , target: av },{source: am , target: ar },{source: am , target: au },{source: am , target: ap },{source: am , target: aq },{source: am , target: as },{source: am , target: av },{source: al , target: am },{source: al , target: ar },{source: al , target: au },{source: al , target: ap },{source: al , target: aq },{source: al , target: as },{source: al , target: av },{source: ar , target: au },{source: ar , target: as },{source: ar , target: av },{source: au , target: av },{source: ap , target: ar },{source: ap , target: au },{source: ap , target: aq },{source: ap , target: as },{source: ap , target: av },{source: aq , target: ar },{source: aq , target: au },{source: aq , target: as },{source: aq , target: av },{source: as , target: au },{source: as , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.857142857142857143%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ak','am','al','ar','au','aq','as','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aj ap */ var  aj = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.714285714285714286%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ac ad ae af ah */ var  aa = {id: 'aa', name:'astragalus'},ac = {id: 'ac', name:'malchen'},ad = {id: 'ad', name:'lischen'},ae = {id: 'ae', name:'august'},af = {id: 'af', name:'sophie'},ah = {id: 'ah', name:'habakuk'} ; nodes.push( aa,ac,ad,ae,af,ah ); links.push( {source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ah },{source: af , target: ah },{source: ae , target: af },{source: ae , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ah },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.571428571428571429%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','af','ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ad ah */ var  ad = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.428571428571428571%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aj */ var  aj = {id: 'aj', name:'rappelkopf'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.285714285714285714%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa aj aw ax ay */ var  aa = {id: 'aa', name:'astragalus'},aj = nodes[0] ,aw = {id: 'aw', name:'victorinens_geist'},ax = {id: 'ax', name:'wallburgas_geist'},ay = {id: 'ay', name:'emerentias_geist'} ; nodes.push( aa,aw,ax,ay ); links.push( {source: aa , target: aj },{source: aa , target: aw },{source: aa , target: ax },{source: aa , target: ay },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.142857142857142857%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aw','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa aj az ba */ var  aa = nodes[0] ,aj = nodes[1] ,az = {id: 'az', name:'alpanor'},ba = {id: 'ba', name:'ein_alpengeist'} ; nodes.push( az,ba ); links.push( {source: aa , target: az },{source: aa , target: ba },{source: aa , target: aj },{source: az , target: ba },{source: aj , target: az },{source: aj , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aa','az','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ba bb bc bd */ var  ab = {id: 'ab', name:'linarius'},ba = nodes[0] ,bb = {id: 'bb', name:'silberkern'},bc = {id: 'bc', name:'echo'},bd = {id: 'bd', name:'alpengeister'} ; nodes.push( ab,bb,bc,bd ); links.push( {source: bb , target: bc },{source: bb , target: bd },{source: ab , target: bb },{source: ab , target: bc },{source: ab , target: bd },{source: ab , target: ba },{source: bc , target: bd },{source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.857142857142857143%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'bb','ab','bc','bd','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* af be */ var  af = {id: 'af', name:'sophie'},be = {id: 'be', name:'dienstleute'} ; nodes.push( af,be ); links.push( {source: af , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.714285714285714286%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* af aj */ var  af = nodes[0] ,aj = {id: 'aj', name:'rappelkopf'} ; nodes.push( aj ); links.push( {source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.571428571428571429%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac ae af aj */ var  ac = {id: 'ac', name:'malchen'},ae = {id: 'ae', name:'august'},af = nodes[0] ,aj = nodes[1]  ; nodes.push( ac,ae ); links.push( {source: ac , target: aj },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: aj },{source: ae , target: af },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.428571428571428571%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ah aj */ var  ah = {id: 'ah', name:'habakuk'},aj = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.285714285714285714%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ad aj */ var  ad = {id: 'ad', name:'lischen'},aj = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.142857142857142857%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ad af aj */ var  aa = {id: 'aa', name:'astragalus'},ad = nodes[0] ,af = {id: 'af', name:'sophie'},aj = nodes[1]  ; nodes.push( aa,af ); links.push( {source: af , target: aj },{source: ad , target: af },{source: ad , target: aj },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ad af aj */ var  aa = nodes[0] ,ad = nodes[1] ,af = nodes[2] ,aj = nodes[3]  ; /* nodes.push(); */ links.push( {source: aa , target: aj },{source: aa , target: af },{source: aa , target: ad },{source: af , target: aj },{source: ad , target: aj },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.857142857142857143%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ae ah aj */ var  aa = nodes[0] ,ae = {id: 'ae', name:'august'},ah = {id: 'ah', name:'habakuk'},aj = nodes[1]  ; nodes.push( ae,ah ); links.push( {source: ah , target: aj },{source: aa , target: ah },{source: aa , target: aj },{source: aa , target: ae },{source: ae , target: ah },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.714285714285714286%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae aj */ var  ae = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.571428571428571429%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ah aj */ var  ah = {id: 'ah', name:'habakuk'},aj = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.428571428571428571%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ac ad af aj */ var  aa = {id: 'aa', name:'astragalus'},ac = {id: 'ac', name:'malchen'},ad = {id: 'ad', name:'lischen'},af = {id: 'af', name:'sophie'},aj = nodes[0]  ; nodes.push( aa,ac,ad,af ); links.push( {source: af , target: aj },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: aj },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.285714285714285714%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ac ad af ah aj */ var  aa = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ah = {id: 'ah', name:'habakuk'},aj = nodes[4]  ; nodes.push( ah ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ah },{source: af , target: aj },{source: af , target: ah },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: ah },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.142857142857142857%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab ac ae af aj bb */ var  aa = nodes[0] ,ab = {id: 'ab', name:'linarius'},ac = nodes[1] ,ae = {id: 'ae', name:'august'},af = nodes[2] ,aj = nodes[3] ,bb = {id: 'bb', name:'silberkern'} ; nodes.push( ab,ae,bb ); links.push( {source: aj , target: bb },{source: aa , target: aj },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: bb },{source: aa , target: ae },{source: af , target: aj },{source: af , target: bb },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: bb },{source: ac , target: ae },{source: ab , target: aj },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: bb },{source: ab , target: ae },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 170000);
