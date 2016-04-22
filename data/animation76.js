setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'fee_aprikosa'},ac = {id: 'ac', name:'erster_zauberer'},ad = {id: 'ad', name:'zweiter_zauberer'},ae = {id: 'ae', name:'fee_amarillis'},af = {id: 'af', name:'feuergeist'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.083333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = nodes[5] ,ag = {id: 'ag', name:'pamphilius'},ah = {id: 'ah', name:'alle_weiber'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: af , target: ag },{source: af , target: ah },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.166666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae ag */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,ag = nodes[5]  ; /* nodes.push(); */ links.push( {source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ag },{source: ad , target: ae },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ae , target: ag },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.25%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ag','ac','ad','ab','ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'longimanus'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ag ai */ var  ag = {id: 'ag', name:'pamphilius'},ai = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.416666666666666667%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.5%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.583333333333333333%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ai aj ak */ var  ai = nodes[0] ,aj = {id: 'aj', name:'die_druden'},ak = {id: 'ak', name:'erste_drude'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.75%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag ai */ var  ag = {id: 'ag', name:'pamphilius'},ai = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.833333333333333333%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ai */ var  ai = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.916666666666666667%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ai al */ var  ai = nodes[0] ,al = {id: 'al', name:'zephises'} ; nodes.push( al ); links.push( {source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ag ai al */ var  ag = {id: 'ag', name:'pamphilius'},ai = nodes[0] ,al = nodes[1]  ; nodes.push( ag ); links.push( {source: ai , target: al },{source: ag , target: ai },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.083333333333333333%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ai am an ao ap */ var  ai = nodes[0] ,am = {id: 'am', name:'winter'},an = {id: 'an', name:'herbst'},ao = {id: 'ao', name:'sommer'},ap = {id: 'ap', name:'frühling'} ; nodes.push( am,an,ao,ap ); links.push( {source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.166666666666666667%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ai','am','an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aq */ var  aq = {id: 'aq', name:'florian'} ; nodes.push( aq ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.25%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aq ar */ var  aq = nodes[0] ,ar = {id: 'ar', name:'mariandels_gestalt'} ; nodes.push( ar ); links.push( {source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aq ar as */ var  aq = nodes[0] ,ar = nodes[1] ,as = {id: 'as', name:'eduard'} ; nodes.push( as ); links.push( {source: ar , target: as },{source: aq , target: as },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.416666666666666667%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ar','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* as at */ var  as = nodes[0] ,at = {id: 'at', name:'hoffnung'} ; nodes.push( at ); links.push( {source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.5%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* as au */ var  as = nodes[0] ,au = {id: 'au', name:'kolibri'} ; nodes.push( au ); links.push( {source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.583333333333333333%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa aq ar as av aw */ var  aa = {id: 'aa', name:'chor'},aq = {id: 'aq', name:'florian'},ar = {id: 'ar', name:'mariandels_gestalt'},as = nodes[0] ,av = {id: 'av', name:'ein_nachbar'},aw = {id: 'aw', name:'alle_nachbarn'} ; nodes.push( aa,aq,ar,av,aw ); links.push( {source: aa , target: aq },{source: aa , target: as },{source: aa , target: ar },{source: aa , target: av },{source: aa , target: aw },{source: aq , target: as },{source: aq , target: ar },{source: aq , target: av },{source: aq , target: aw },{source: as , target: av },{source: as , target: aw },{source: ar , target: as },{source: ar , target: av },{source: ar , target: aw },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aa','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aq ar as */ var  aq = nodes[0] ,ar = nodes[1] ,as = nodes[2]  ; /* nodes.push(); */ links.push( {source: aq , target: as },{source: aq , target: ar },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.75%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aq ar */ var  aq = nodes[0] ,ar = nodes[1]  ; /* nodes.push(); */ links.push( {source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.833333333333333333%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aq as au */ var  aq = nodes[0] ,as = {id: 'as', name:'eduard'},au = {id: 'au', name:'kolibri'} ; nodes.push( as,au ); links.push( {source: as , target: au },{source: aq , target: au },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.916666666666666667%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aq ar as au */ var  aq = nodes[0] ,ar = {id: 'ar', name:'mariandels_gestalt'},as = nodes[1] ,au = nodes[2]  ; nodes.push( ar ); links.push( {source: ar , target: au },{source: ar , target: as },{source: as , target: au },{source: aq , target: ar },{source: aq , target: au },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'au','as','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ar */ var  ar = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.083333333333333333%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ax */ var  ax = {id: 'ax', name:'koliphonius'} ; nodes.push( ax ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.166666666666666667%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aq ar as au ax ay az ba */ var  aq = {id: 'aq', name:'florian'},ar = {id: 'ar', name:'mariandels_gestalt'},as = {id: 'as', name:'eduard'},au = {id: 'au', name:'kolibri'},ax = nodes[0] ,ay = {id: 'ay', name:'mädchen'},az = {id: 'az', name:'der_korporal'},ba = {id: 'ba', name:'ein_kellner'} ; nodes.push( aq,ar,as,au,ay,az,ba ); links.push( {source: as , target: au },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: ax },{source: aq , target: as },{source: aq , target: au },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: aq , target: ar },{source: aq , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: au , target: ax },{source: ay , target: az },{source: ay , target: ba },{source: az , target: ba },{source: ar , target: as },{source: ar , target: au },{source: ar , target: ay },{source: ar , target: az },{source: ar , target: ba },{source: ar , target: ax },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.25%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'as','aq','au','ay','az','ba','ar','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'longimanus'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ag ai */ var  ag = {id: 'ag', name:'pamphilius'},ai = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.416666666666666667%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ag ai */ var  ag = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.5%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ai aq as */ var  ai = nodes[0] ,aq = {id: 'aq', name:'florian'},as = {id: 'as', name:'eduard'} ; nodes.push( aq,as ); links.push( {source: ai , target: as },{source: ai , target: aq },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.583333333333333333%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ag ai aq as */ var  ag = {id: 'ag', name:'pamphilius'},ai = nodes[0] ,aq = nodes[1] ,as = nodes[2]  ; nodes.push( ag ); links.push( {source: ai , target: as },{source: ai , target: aq },{source: ag , target: ai },{source: ag , target: as },{source: ag , target: aq },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'as','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ag ai */ var  ag = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.75%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ai','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* bb */ var  bb = {id: 'bb', name:'chor_von_einwohnern'} ; nodes.push( bb ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.833333333333333333%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa bc */ var  aa = {id: 'aa', name:'chor'},bc = {id: 'bc', name:'herold'} ; nodes.push( aa,bc ); links.push( {source: aa , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.916666666666666667%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'bc','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aq as au */ var  aq = {id: 'aq', name:'florian'},as = {id: 'as', name:'eduard'},au = {id: 'au', name:'kolibri'} ; nodes.push( aq,as,au ); links.push( {source: as , target: au },{source: aq , target: au },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aq as bd */ var  aq = nodes[0] ,as = nodes[1] ,bd = {id: 'bd', name:'aladin'} ; nodes.push( bd ); links.push( {source: as , target: bd },{source: aq , target: bd },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.083333333333333333%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aq as */ var  aq = nodes[0] ,as = nodes[1]  ; /* nodes.push(); */ links.push( {source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.166666666666666667%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aq as be bf */ var  aq = nodes[0] ,as = nodes[1] ,be = {id: 'be', name:'osillis'},bf = {id: 'bf', name:'amazilli'} ; nodes.push( be,bf ); links.push( {source: as , target: be },{source: as , target: bf },{source: aq , target: as },{source: aq , target: be },{source: aq , target: bf },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.25%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'be','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aq as */ var  aq = nodes[0] ,as = nodes[1]  ; /* nodes.push(); */ links.push( {source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aq as bd */ var  aq = nodes[0] ,as = nodes[1] ,bd = {id: 'bd', name:'aladin'} ; nodes.push( bd ); links.push( {source: as , target: bd },{source: aq , target: bd },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.416666666666666667%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa aq as bg bh bi */ var  aa = {id: 'aa', name:'chor'},aq = nodes[0] ,as = nodes[1] ,bg = {id: 'bg', name:'veritatius'},bh = {id: 'bh', name:'modestina'},bi = {id: 'bi', name:'aminens_stimme'} ; nodes.push( aa,bg,bh,bi ); links.push( {source: aa , target: bg },{source: aa , target: as },{source: aa , target: aq },{source: aa , target: bh },{source: aa , target: bi },{source: bg , target: bh },{source: bg , target: bi },{source: as , target: bg },{source: as , target: bh },{source: as , target: bi },{source: aq , target: bg },{source: aq , target: as },{source: aq , target: bh },{source: aq , target: bi },{source: bh , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.5%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aa aq as au bd bg bh bi */ var  aa = nodes[0] ,aq = nodes[1] ,as = nodes[2] ,au = {id: 'au', name:'kolibri'},bd = {id: 'bd', name:'aladin'},bg = nodes[3] ,bh = nodes[4] ,bi = nodes[5]  ; nodes.push( au,bd ); links.push( {source: bg , target: bi },{source: bg , target: bh },{source: bd , target: bi },{source: bd , target: bg },{source: bd , target: bh },{source: as , target: bi },{source: as , target: bg },{source: as , target: bd },{source: as , target: bh },{source: as , target: au },{source: aq , target: bi },{source: aq , target: bg },{source: aq , target: bd },{source: aq , target: as },{source: aq , target: bh },{source: aq , target: au },{source: bh , target: bi },{source: au , target: bi },{source: au , target: bg },{source: au , target: bd },{source: au , target: bh },{source: aa , target: bi },{source: aa , target: bg },{source: aa , target: bd },{source: aa , target: as },{source: aa , target: aq },{source: aa , target: bh },{source: aa , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.583333333333333333%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'bg','bd','as','bh','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aq au bi */ var  aq = nodes[0] ,au = nodes[1] ,bi = nodes[2]  ; /* nodes.push(); */ links.push( {source: au , target: bi },{source: aq , target: au },{source: aq , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aq as bi */ var  aq = nodes[0] ,as = {id: 'as', name:'eduard'},bi = nodes[1]  ; nodes.push( as ); links.push( {source: as , target: bi },{source: aq , target: bi },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.75%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* al aq as bi */ var  al = {id: 'al', name:'zephises'},aq = nodes[0] ,as = nodes[1] ,bi = nodes[2]  ; nodes.push( al ); links.push( {source: as , target: bi },{source: al , target: as },{source: al , target: aq },{source: al , target: bi },{source: aq , target: as },{source: aq , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.833333333333333333%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ai aq as bi */ var  ai = {id: 'ai', name:'longimanus'},aq = nodes[0] ,as = nodes[1] ,bi = nodes[2]  ; nodes.push( ai ); links.push( {source: ai , target: as },{source: ai , target: bi },{source: ai , target: aq },{source: as , target: bi },{source: aq , target: as },{source: aq , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.916666666666666667%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* aa ai aq ar as au */ var  aa = {id: 'aa', name:'chor'},ai = nodes[0] ,aq = nodes[1] ,ar = {id: 'ar', name:'mariandels_gestalt'},as = nodes[2] ,au = {id: 'au', name:'kolibri'} ; nodes.push( aa,ar,au ); links.push( {source: as , target: au },{source: ar , target: au },{source: ar , target: as },{source: aq , target: au },{source: aq , target: as },{source: aq , target: ar },{source: ai , target: au },{source: ai , target: as },{source: ai , target: ar },{source: ai , target: aq },{source: aa , target: au },{source: aa , target: as },{source: aa , target: ar },{source: aa , target: aq },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 235000);
