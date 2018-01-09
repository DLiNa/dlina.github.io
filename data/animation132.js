setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae aq */ var  aa = {id: 'aa', name:'der_mann'},ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ac = {id: 'ac', name:'der_alte_mann'},ad = {id: 'ad', name:'ein_herr'},ae = {id: 'ae', name:'der_junge_aus_der_menge'},aq = {id: 'aq', name:'andere_simmen'} ; nodes.push( aa,ab,ac,ad,ae,aq ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: aq },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: aq },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: aq },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: aq },{source: ac , target: ad },{source: ac , target: aq },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: aq },{source: ad , target: aq },{source: ad , target: ae },{source: ad , target: ae },{source: ad , target: aq },{source: ae , target: aq },{source: ae , target: aq },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: aq },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: aq },{source: ac , target: ad },{source: ac , target: aq },{source: ac , target: ae },{source: ac , target: ae },{source: ac , target: aq },{source: ae , target: aq },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.44927536231884058%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ad','aq','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.898550724637681159%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.347826086956521739%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'der_mann'},ab = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.797101449275362319%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa af ah */ var  aa = nodes[0] ,af = {id: 'af', name:'soldaten'},ah = {id: 'ah', name:'ein_soldat'} ; nodes.push( af,ah ); links.push( {source: af , target: ah },{source: aa , target: af },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.246376811594202899%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'der_offizier'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.695652173913043478%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'ein_soldat'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.144927536231884058%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'gouverneur'},aj = {id: 'aj', name:'klotz'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.594202898550724638%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ak al */ var  ak = {id: 'ak', name:'erster_wächter'},al = {id: 'al', name:'zweiter_wächter'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.043478260869565217%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ak al */ var  aa = {id: 'aa', name:'der_mann'},ak = nodes[0] ,al = nodes[1]  ; nodes.push( aa ); links.push( {source: ak , target: al },{source: aa , target: al },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.492753623188405797%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ak */ var  aa = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.942028985507246377%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa al */ var  aa = nodes[0] ,al = {id: 'al', name:'zweiter_wächter'} ; nodes.push( al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.391304347826086957%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa am an */ var  aa = nodes[0] ,am = {id: 'am', name:'anna'},an = {id: 'an', name:'das_kind'} ; nodes.push( am,an ); links.push( {source: aa , target: am },{source: aa , target: an },{source: aa , target: an },{source: am , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.840579710144927536%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa an */ var  aa = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.289855072463768116%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'an','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'stimme_des_nauke'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.739130434782608696%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab aj ao */ var  ab = {id: 'ab', name:'eine_frau_aus_der_menge'},aj = {id: 'aj', name:'klotz'},ao = nodes[0]  ; nodes.push( ab,aj ); links.push( {source: aj , target: ao },{source: ab , target: ao },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.188405797101449275%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ai ao */ var  ab = nodes[0] ,ai = {id: 'ai', name:'gouverneur'},ao = nodes[1]  ; nodes.push( ai ); links.push( {source: ai , target: ao },{source: ab , target: ai },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.637681159420289855%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ae ao */ var  ac = {id: 'ac', name:'der_alte_mann'},ae = {id: 'ae', name:'der_junge_aus_der_menge'},ao = nodes[0]  ; nodes.push( ac,ae ); links.push( {source: ae , target: ao },{source: ac , target: ae },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.086956521739130435%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ae ak al ao */ var  ac = nodes[0] ,ae = nodes[1] ,ak = {id: 'ak', name:'erster_wächter'},al = {id: 'al', name:'zweiter_wächter'},ao = nodes[2]  ; nodes.push( ak,al ); links.push( {source: ak , target: ao },{source: ak , target: al },{source: al , target: ao },{source: ac , target: ak },{source: ac , target: ao },{source: ac , target: al },{source: ac , target: ae },{source: ae , target: ak },{source: ae , target: ao },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.536231884057971014%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ak','al','ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ao aq */ var  ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ao = nodes[0] ,aq = {id: 'aq', name:'andere_simmen'} ; nodes.push( ab,aq ); links.push( {source: ao , target: aq },{source: ab , target: aq },{source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.985507246376811594%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aq','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* am ao */ var  am = {id: 'am', name:'anna'},ao = nodes[0]  ; nodes.push( am ); links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.434782608695652174%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ae ap */ var  ae = {id: 'ae', name:'der_junge_aus_der_menge'},ap = {id: 'ap', name:'kapitän'} ; nodes.push( ae,ap ); links.push( {source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.884057971014492754%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ap','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ai am */ var  ai = {id: 'ai', name:'gouverneur'},am = {id: 'am', name:'anna'} ; nodes.push( ai,am ); links.push( {source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ai','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa aq */ var  aa = {id: 'aa', name:'der_mann'},aq = {id: 'aq', name:'andere_simmen'} ; nodes.push( aa,aq ); links.push( {source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.782608695652173913%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aa','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* am */ var  am = {id: 'am', name:'anna'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.231884057971014493%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ae ag ai aj ak al am ap aq ar */ var  ae = {id: 'ae', name:'der_junge_aus_der_menge'},ag = {id: 'ag', name:'der_offizier'},ai = {id: 'ai', name:'gouverneur'},aj = {id: 'aj', name:'klotz'},ak = {id: 'ak', name:'erster_wächter'},al = {id: 'al', name:'zweiter_wächter'},am = nodes[0] ,ap = {id: 'ap', name:'kapitän'},aq = {id: 'aq', name:'andere_simmen'},ar = {id: 'ar', name:'alle_brüder'} ; nodes.push( ae,ag,ai,aj,ak,al,ap,aq,ar ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: ai , target: ap },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: aq },{source: ai , target: ar },{source: ag , target: ap },{source: ag , target: ai },{source: ag , target: am },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: aj },{source: ag , target: aq },{source: ag , target: ar },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: al },{source: ak , target: aq },{source: ak , target: ar },{source: al , target: ap },{source: al , target: am },{source: al , target: aq },{source: al , target: ar },{source: aj , target: ap },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: aq },{source: aj , target: ar },{source: aq , target: ar },{source: ae , target: ap },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: am },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: aj },{source: ae , target: aq },{source: ae , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.681159420289855072%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ap','aq','ae','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa ab ag ai aj ak al am ao as */ var  aa = {id: 'aa', name:'der_mann'},ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ag = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,ak = nodes[3] ,al = nodes[4] ,am = nodes[5] ,ao = {id: 'ao', name:'stimme_des_nauke'},as = {id: 'as', name:'matrosen'} ; nodes.push( aa,ab,ao,as ); links.push( {source: ag , target: ak },{source: ag , target: al },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: as },{source: ag , target: am },{source: ag , target: ao },{source: ak , target: al },{source: ak , target: as },{source: ak , target: am },{source: ak , target: ao },{source: al , target: as },{source: al , target: am },{source: al , target: ao },{source: aa , target: ag },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: as },{source: aa , target: am },{source: aa , target: ao },{source: ab , target: ag },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: as },{source: ab , target: am },{source: ab , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: as },{source: aj , target: am },{source: aj , target: ao },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: as },{source: ai , target: am },{source: ai , target: ao },{source: am , target: as },{source: am , target: ao },{source: ao , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.130434782608695652%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','al','aa','ab','aj','ai','as','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ag ao at au av aw */ var  ag = nodes[0] ,ao = nodes[1] ,at = {id: 'at', name:'der_erste_gefangene'},au = {id: 'au', name:'zweiter_gefangener'},av = {id: 'av', name:'offizier'},aw = {id: 'aw', name:'meuterer'} ; nodes.push( at,au,av,aw ); links.push( {source: ao , target: at },{source: ao , target: au },{source: ao , target: at },{source: ao , target: av },{source: ao , target: aw },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: au , target: av },{source: au , target: aw },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: av , target: aw },{source: ag , target: ao },{source: ag , target: at },{source: ag , target: au },{source: ag , target: at },{source: ag , target: av },{source: ag , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.579710144927536232%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ag','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* am ao at au av */ var  am = {id: 'am', name:'anna'},ao = nodes[0] ,at = nodes[1] ,au = nodes[2] ,av = nodes[3]  ; nodes.push( am ); links.push( {source: am , target: ao },{source: am , target: at },{source: am , target: au },{source: am , target: av },{source: ao , target: at },{source: ao , target: au },{source: ao , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.028985507246376812%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'am','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ab ao av */ var  aa = {id: 'aa', name:'der_mann'},ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ao = nodes[0] ,av = nodes[1]  ; nodes.push( aa,ab ); links.push( {source: aa , target: ao },{source: aa , target: ab },{source: aa , target: av },{source: ao , target: av },{source: ab , target: ao },{source: ab , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.478260869565217391%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ag ak ao at au */ var  aa = nodes[0] ,ag = {id: 'ag', name:'der_offizier'},ak = {id: 'ak', name:'erster_wächter'},ao = nodes[1] ,at = {id: 'at', name:'der_erste_gefangene'},au = {id: 'au', name:'zweiter_gefangener'} ; nodes.push( ag,ak,at,au ); links.push( {source: at , target: au },{source: ak , target: at },{source: ak , target: au },{source: ak , target: ao },{source: ao , target: at },{source: ao , target: au },{source: aa , target: at },{source: aa , target: au },{source: aa , target: ak },{source: aa , target: ao },{source: aa , target: ag },{source: ag , target: at },{source: ag , target: au },{source: ag , target: ak },{source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.927536231884057971%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'at','au','ak','aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ai ao av */ var  ai = {id: 'ai', name:'gouverneur'},ao = nodes[0] ,av = {id: 'av', name:'offizier'} ; nodes.push( ai,av ); links.push( {source: ao , target: av },{source: ai , target: ao },{source: ai , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.376811594202898551%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ai aj ak al am ao at au av aw */ var  aa = {id: 'aa', name:'der_mann'},ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ai = nodes[0] ,aj = {id: 'aj', name:'klotz'},ak = {id: 'ak', name:'erster_wächter'},al = {id: 'al', name:'zweiter_wächter'},am = {id: 'am', name:'anna'},ao = nodes[1] ,at = {id: 'at', name:'der_erste_gefangene'},au = {id: 'au', name:'zweiter_gefangener'},av = nodes[2] ,aw = {id: 'aw', name:'meuterer'} ; nodes.push( aa,ab,aj,ak,al,am,at,au,aw ); links.push( {source: aj , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: av },{source: aj , target: am },{source: aj , target: at },{source: aj , target: au },{source: aj , target: aw },{source: aj , target: aw },{source: ao , target: av },{source: ao , target: at },{source: ao , target: au },{source: ao , target: aw },{source: ao , target: aw },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: av },{source: ai , target: am },{source: ai , target: at },{source: ai , target: au },{source: ai , target: aw },{source: ai , target: aw },{source: aa , target: aj },{source: aa , target: ao },{source: aa , target: ai },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: av },{source: aa , target: am },{source: aa , target: ab },{source: aa , target: at },{source: aa , target: au },{source: aa , target: aw },{source: aa , target: aw },{source: ak , target: ao },{source: ak , target: al },{source: ak , target: av },{source: ak , target: am },{source: ak , target: at },{source: ak , target: au },{source: ak , target: aw },{source: ak , target: aw },{source: al , target: ao },{source: al , target: av },{source: al , target: am },{source: al , target: at },{source: al , target: au },{source: al , target: aw },{source: al , target: aw },{source: av , target: aw },{source: av , target: aw },{source: am , target: ao },{source: am , target: av },{source: am , target: at },{source: am , target: au },{source: am , target: aw },{source: am , target: aw },{source: ab , target: aj },{source: ab , target: ao },{source: ab , target: ai },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: av },{source: ab , target: am },{source: ab , target: at },{source: ab , target: au },{source: ab , target: aw },{source: ab , target: aw },{source: at , target: av },{source: at , target: au },{source: at , target: aw },{source: at , target: aw },{source: au , target: av },{source: au , target: aw },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.82608695652173913%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'al','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ab ai aj ak am ao at au av */ var  aa = nodes[0] ,ab = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,am = nodes[5] ,ao = nodes[6] ,at = nodes[7] ,au = nodes[8] ,av = nodes[9]  ; /* nodes.push(); */ links.push( {source: ai , target: av },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: at },{source: ai , target: au },{source: ao , target: av },{source: ao , target: at },{source: ao , target: au },{source: aj , target: av },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: at },{source: aj , target: au },{source: ak , target: av },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: at },{source: ak , target: au },{source: am , target: av },{source: am , target: ao },{source: am , target: at },{source: am , target: au },{source: ab , target: av },{source: ab , target: ai },{source: ab , target: ao },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: am },{source: ab , target: at },{source: ab , target: au },{source: aa , target: av },{source: aa , target: ai },{source: aa , target: ao },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: am },{source: aa , target: ab },{source: aa , target: at },{source: aa , target: au },{source: aa , target: ab },{source: at , target: av },{source: at , target: au },{source: au , target: av },{source: ab , target: av },{source: ab , target: ai },{source: ab , target: ao },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: am },{source: ab , target: at },{source: ab , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.27536231884057971%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aj','am','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ai ak al ao at au av aw */ var  ai = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'zweiter_wächter'},ao = nodes[2] ,at = nodes[3] ,au = nodes[4] ,av = nodes[5] ,aw = {id: 'aw', name:'meuterer'} ; nodes.push( al,aw ); links.push( {source: ao , target: aw },{source: ao , target: aw },{source: ao , target: av },{source: ao , target: aw },{source: ao , target: at },{source: ao , target: au },{source: av , target: aw },{source: av , target: aw },{source: av , target: aw },{source: ai , target: aw },{source: ai , target: ao },{source: ai , target: aw },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: at },{source: ai , target: au },{source: ak , target: aw },{source: ak , target: ao },{source: ak , target: aw },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: al },{source: ak , target: at },{source: ak , target: au },{source: al , target: aw },{source: al , target: ao },{source: al , target: aw },{source: al , target: av },{source: al , target: aw },{source: al , target: at },{source: al , target: au },{source: at , target: aw },{source: at , target: aw },{source: at , target: av },{source: at , target: aw },{source: at , target: au },{source: au , target: aw },{source: au , target: aw },{source: au , target: av },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.72463768115942029%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'av','ak','al','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ai ao aw */ var  ai = nodes[0] ,ao = nodes[1] ,aw = nodes[2]  ; /* nodes.push(); */ links.push( {source: ao , target: aw },{source: ai , target: aw },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.17391304347826087%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ag ai aj am ao av aw ax */ var  aa = {id: 'aa', name:'der_mann'},ag = {id: 'ag', name:'der_offizier'},ai = nodes[0] ,aj = {id: 'aj', name:'klotz'},am = {id: 'am', name:'anna'},ao = nodes[1] ,av = {id: 'av', name:'offizier'},aw = nodes[2] ,ax = {id: 'ax', name:'kranker'} ; nodes.push( aa,ag,aj,am,av,ax ); links.push( {source: aw , target: ax },{source: aw , target: ax },{source: ai , target: aw },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: av },{source: ai , target: ax },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: am },{source: ai , target: aw },{source: ai , target: aw },{source: aw , target: ax },{source: aw , target: ax },{source: av , target: aw },{source: av , target: aw },{source: av , target: ax },{source: av , target: ax },{source: av , target: aw },{source: av , target: aw },{source: ai , target: aw },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: av },{source: ai , target: ax },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: am },{source: ai , target: aw },{source: ai , target: aw },{source: ag , target: aw },{source: ag , target: ai },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: av },{source: ag , target: ai },{source: ag , target: ax },{source: ag , target: ao },{source: ag , target: aj },{source: ag , target: am },{source: ag , target: aw },{source: ag , target: aw },{source: ao , target: aw },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: av },{source: ao , target: ax },{source: ao , target: aw },{source: ao , target: aw },{source: aj , target: aw },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: av },{source: aj , target: ax },{source: aj , target: ao },{source: aj , target: am },{source: aj , target: aw },{source: aj , target: aw },{source: aa , target: aw },{source: aa , target: ai },{source: aa , target: aw },{source: aa , target: ax },{source: aa , target: av },{source: aa , target: ai },{source: aa , target: ax },{source: aa , target: ag },{source: aa , target: ao },{source: aa , target: aj },{source: aa , target: am },{source: aa , target: aw },{source: aa , target: aw },{source: am , target: aw },{source: am , target: aw },{source: am , target: ax },{source: am , target: av },{source: am , target: ax },{source: am , target: ao },{source: am , target: aw },{source: am , target: aw },{source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.623188405797101449%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aw','av','ag','aj','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ai ao ax */ var  aa = nodes[0] ,ai = nodes[1] ,ao = nodes[2] ,ax = nodes[3]  ; /* nodes.push(); */ links.push( {source: ao , target: ax },{source: ao , target: ax },{source: ai , target: ax },{source: ai , target: ao },{source: ai , target: ax },{source: aa , target: ax },{source: aa , target: ao },{source: aa , target: ai },{source: aa , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.072463768115942029%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ax','ao','ai','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ay az ba */ var  ay = {id: 'ay', name:'die_stimme_der_ersten_revolutionärin'},az = {id: 'az', name:'die_stimme_der_zweiten_revolutionärin'},ba = {id: 'ba', name:'dritte_revolutionärin'} ; nodes.push( ay,az,ba ); links.push( {source: ay , target: az },{source: ay , target: ba },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.521739130434782609%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* am ay az ba */ var  am = {id: 'am', name:'anna'},ay = nodes[0] ,az = nodes[1] ,ba = nodes[2]  ; nodes.push( am ); links.push( {source: ay , target: az },{source: ay , target: ba },{source: az , target: ba },{source: am , target: ay },{source: am , target: az },{source: am , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.971014492753623188%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* am aq ay az ba */ var  am = nodes[0] ,aq = {id: 'aq', name:'andere_simmen'},ay = nodes[1] ,az = nodes[2] ,ba = nodes[3]  ; nodes.push( aq ); links.push( {source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: ay , target: az },{source: ay , target: ba },{source: az , target: ba },{source: am , target: aq },{source: am , target: ay },{source: am , target: az },{source: am , target: ba },{source: am , target: aq },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.420289855072463768%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* am ay az ba bb */ var  am = nodes[0] ,ay = nodes[1] ,az = nodes[2] ,ba = nodes[3] ,bb = {id: 'bb', name:'der_junge_mensch'} ; nodes.push( bb ); links.push( {source: ba , target: bb },{source: ay , target: bb },{source: ay , target: ba },{source: ay , target: az },{source: ay , target: az },{source: az , target: bb },{source: az , target: ba },{source: am , target: bb },{source: am , target: ba },{source: am , target: ay },{source: am , target: az },{source: am , target: ay },{source: am , target: az },{source: ay , target: bb },{source: ay , target: ba },{source: ay , target: az },{source: ay , target: az },{source: az , target: bb },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.869565217391304348%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ba','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* am bb */ var  am = nodes[0] ,bb = nodes[1]  ; /* nodes.push(); */ links.push( {source: am , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.318840579710144928%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'bb','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ao bc */ var  ao = {id: 'ao', name:'stimme_des_nauke'},bc = {id: 'bc', name:'stimme_des_führers_der_bükger'} ; nodes.push( ao,bc ); links.push( {source: ao , target: bc },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: bc },{source: ao , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.768115942028985507%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'bc','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aa ai */ var  aa = {id: 'aa', name:'der_mann'},ai = {id: 'ai', name:'gouverneur'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.217391304347826087%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = {id: 'aj', name:'klotz'} ; nodes.push( aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* aa ab ae aj aq at bd be bf bg bl bm */ var  aa = nodes[0] ,ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ae = {id: 'ae', name:'der_junge_aus_der_menge'},aj = nodes[1] ,aq = {id: 'aq', name:'andere_simmen'},at = {id: 'at', name:'der_erste_gefangene'},bd = {id: 'bd', name:'greis'},be = {id: 'be', name:'ein_junge_aus_dem_volk'},bf = {id: 'bf', name:'der_krüppel'},bg = {id: 'bg', name:'der_bucklige'},bl = {id: 'bl', name:'stimmen_aus_der_ersten_gruppe'},bm = {id: 'bm', name:'stimmen_aus_der_andern_gruppe'} ; nodes.push( ab,ae,aq,at,bd,be,bf,bg,bl,bm ); links.push( {source: aq , target: bl },{source: aq , target: bm },{source: aq , target: bl },{source: aq , target: bm },{source: aq , target: bd },{source: aq , target: be },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bd },{source: aq , target: at },{source: ab , target: aq },{source: ab , target: bl },{source: ab , target: bm },{source: ab , target: bl },{source: ab , target: bm },{source: ab , target: bd },{source: ab , target: be },{source: ab , target: bf },{source: ab , target: bg },{source: ab , target: ae },{source: ab , target: bd },{source: ab , target: aq },{source: ab , target: aj },{source: ab , target: at },{source: bl , target: bm },{source: bl , target: bm },{source: bl , target: bm },{source: bl , target: bm },{source: aa , target: aq },{source: aa , target: ab },{source: aa , target: bl },{source: aa , target: bm },{source: aa , target: bl },{source: aa , target: bm },{source: aa , target: bd },{source: aa , target: be },{source: aa , target: bf },{source: aa , target: bg },{source: aa , target: ae },{source: aa , target: bd },{source: aa , target: aq },{source: aa , target: aj },{source: aa , target: at },{source: bd , target: bl },{source: bd , target: bm },{source: bd , target: bl },{source: bd , target: bm },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: be , target: bl },{source: be , target: bm },{source: be , target: bl },{source: be , target: bm },{source: be , target: bf },{source: be , target: bg },{source: bf , target: bl },{source: bf , target: bm },{source: bf , target: bl },{source: bf , target: bm },{source: bf , target: bg },{source: bg , target: bl },{source: bg , target: bm },{source: bg , target: bl },{source: bg , target: bm },{source: ae , target: aq },{source: ae , target: bl },{source: ae , target: bm },{source: ae , target: bl },{source: ae , target: bm },{source: ae , target: bd },{source: ae , target: be },{source: ae , target: bf },{source: ae , target: bg },{source: ae , target: bd },{source: ae , target: aq },{source: ae , target: aj },{source: ae , target: at },{source: bd , target: bl },{source: bd , target: bm },{source: bd , target: bl },{source: bd , target: bm },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: aq , target: bl },{source: aq , target: bm },{source: aq , target: bl },{source: aq , target: bm },{source: aq , target: bd },{source: aq , target: be },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bd },{source: aq , target: at },{source: aj , target: aq },{source: aj , target: bl },{source: aj , target: bm },{source: aj , target: bl },{source: aj , target: bm },{source: aj , target: bd },{source: aj , target: be },{source: aj , target: bf },{source: aj , target: bg },{source: aj , target: bd },{source: aj , target: aq },{source: aj , target: at },{source: at , target: bl },{source: at , target: bm },{source: at , target: bl },{source: at , target: bm },{source: at , target: bd },{source: at , target: be },{source: at , target: bf },{source: at , target: bg },{source: at , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.115942028985507246%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ab','bl','bm','bd','be','bf','bg','ae','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* aa aj ao aq */ var  aa = nodes[0] ,aj = nodes[1] ,ao = {id: 'ao', name:'stimme_des_nauke'},aq = nodes[2]  ; nodes.push( ao ); links.push( {source: ao , target: aq },{source: ao , target: aq },{source: aa , target: ao },{source: aa , target: aq },{source: aa , target: aj },{source: aa , target: aq },{source: aj , target: ao },{source: aj , target: aq },{source: aj , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.565217391304347826%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ao','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aa aj */ var  aa = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.014492753623188406%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'aj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'eine_frau_aus_der_menge'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.463768115942028986%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'der_mann'},ab = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.913043478260869565%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* aa ab bh */ var  aa = nodes[0] ,ab = nodes[1] ,bh = {id: 'bh', name:'der_schiffsgepangene'} ; nodes.push( bh ); links.push( {source: aa , target: bh },{source: aa , target: ab },{source: aa , target: bh },{source: ab , target: bh },{source: ab , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.362318840579710145%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'bh','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* aa am */ var  aa = nodes[0] ,am = {id: 'am', name:'anna'} ; nodes.push( am ); links.push( {source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.811594202898550725%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'am','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ao bc */ var  ao = {id: 'ao', name:'stimme_des_nauke'},bc = {id: 'bc', name:'stimme_des_führers_der_bükger'} ; nodes.push( ao,bc ); links.push( {source: ao , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.260869565217391304%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* aa ao bc */ var  aa = {id: 'aa', name:'der_mann'},ao = nodes[0] ,bc = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ao },{source: aa , target: bc },{source: ao , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.710144927536231884%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* aa ab ag ai aj am bc bi bj bk */ var  aa = nodes[0] ,ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ag = {id: 'ag', name:'der_offizier'},ai = {id: 'ai', name:'gouverneur'},aj = {id: 'aj', name:'klotz'},am = {id: 'am', name:'anna'},bc = nodes[1] ,bi = {id: 'bi', name:'die_anderen_bürger'},bj = {id: 'bj', name:'erster_alter_gefangener'},bk = {id: 'bk', name:'zweiter_alter_gefangener'} ; nodes.push( ab,ag,ai,aj,am,bi,bj,bk ); links.push( {source: bc , target: bi },{source: bc , target: bj },{source: bc , target: bk },{source: aa , target: bc },{source: aa , target: bi },{source: aa , target: ab },{source: aa , target: am },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ag },{source: aa , target: bj },{source: aa , target: bk },{source: bi , target: bj },{source: bi , target: bk },{source: ab , target: bc },{source: ab , target: bi },{source: ab , target: am },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ag },{source: ab , target: bj },{source: ab , target: bk },{source: am , target: bc },{source: am , target: bi },{source: am , target: bj },{source: am , target: bk },{source: ai , target: bc },{source: ai , target: bi },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: bj },{source: ai , target: bk },{source: aj , target: bc },{source: aj , target: bi },{source: aj , target: am },{source: aj , target: bj },{source: aj , target: bk },{source: ag , target: bc },{source: ag , target: bi },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: bj },{source: ag , target: bk },{source: bj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.159420289855072464%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'bc','bi','am','ag','bj','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* aa ab ai aj ao */ var  aa = nodes[0] ,ab = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ao = {id: 'ao', name:'stimme_des_nauke'} ; nodes.push( ao ); links.push( {source: aa , target: ao },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ai },{source: ab , target: ao },{source: ab , target: aj },{source: ab , target: ai },{source: aj , target: ao },{source: ai , target: ao },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.608695652173913043%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ao','ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* aa aj bj */ var  aa = nodes[0] ,aj = nodes[1] ,bj = {id: 'bj', name:'erster_alter_gefangener'} ; nodes.push( bj ); links.push( {source: aa , target: bj },{source: aa , target: aj },{source: aj , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.057971014492753623%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* aa ai aj aq bb bj */ var  aa = nodes[0] ,ai = {id: 'ai', name:'gouverneur'},aj = nodes[1] ,aq = {id: 'aq', name:'andere_simmen'},bb = {id: 'bb', name:'der_junge_mensch'},bj = nodes[2]  ; nodes.push( ai,aq,bb ); links.push( {source: aq , target: bb },{source: aq , target: bj },{source: bb , target: bj },{source: aa , target: aq },{source: aa , target: bb },{source: aa , target: bj },{source: aa , target: ai },{source: aa , target: aj },{source: ai , target: aq },{source: ai , target: bb },{source: ai , target: bj },{source: ai , target: aj },{source: aj , target: aq },{source: aj , target: bb },{source: aj , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.507246376811594203%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'aq','bj','aa','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* bb bd */ var  bb = nodes[0] ,bd = {id: 'bd', name:'greis'} ; nodes.push( bd ); links.push( {source: bb , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.956521739130434783%' ;
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* aa ab ai aj aq bb bd bf bg */ var  aa = {id: 'aa', name:'der_mann'},ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ai = {id: 'ai', name:'gouverneur'},aj = {id: 'aj', name:'klotz'},aq = {id: 'aq', name:'andere_simmen'},bb = nodes[0] ,bd = nodes[1] ,bf = {id: 'bf', name:'der_krüppel'},bg = {id: 'bg', name:'der_bucklige'} ; nodes.push( aa,ab,ai,aj,aq,bf,bg ); links.push( {source: bb , target: bd },{source: bb , target: bg },{source: bb , target: bf },{source: bd , target: bg },{source: bd , target: bf },{source: aq , target: bb },{source: aq , target: bd },{source: aq , target: bg },{source: aq , target: bf },{source: aq , target: bb },{source: aq , target: bd },{source: aq , target: bg },{source: aq , target: bf },{source: bf , target: bg },{source: ab , target: bb },{source: ab , target: bd },{source: ab , target: aq },{source: ab , target: aq },{source: ab , target: bg },{source: ab , target: bf },{source: ab , target: aj },{source: ab , target: aq },{source: ab , target: aq },{source: ab , target: ai },{source: aa , target: bb },{source: aa , target: bd },{source: aa , target: aq },{source: aa , target: aq },{source: aa , target: bg },{source: aa , target: bf },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: aq },{source: aa , target: aq },{source: aa , target: ai },{source: aj , target: bb },{source: aj , target: bd },{source: aj , target: aq },{source: aj , target: aq },{source: aj , target: bg },{source: aj , target: bf },{source: aj , target: aq },{source: aj , target: aq },{source: ab , target: bb },{source: ab , target: bd },{source: ab , target: aq },{source: ab , target: aq },{source: ab , target: bg },{source: ab , target: bf },{source: ab , target: aj },{source: ab , target: aq },{source: ab , target: aq },{source: ab , target: ai },{source: aq , target: bb },{source: aq , target: bd },{source: aq , target: bg },{source: aq , target: bf },{source: aq , target: bb },{source: aq , target: bd },{source: aq , target: bg },{source: aq , target: bf },{source: ai , target: bb },{source: ai , target: bd },{source: ai , target: aq },{source: ai , target: aq },{source: ai , target: bg },{source: ai , target: bf },{source: ai , target: aj },{source: ai , target: aq },{source: ai , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.405797101449275362%' ;
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* aa ab ai aj am ao aq bb bf bg bl bm */ var  aa = nodes[0] ,ab = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,am = {id: 'am', name:'anna'},ao = {id: 'ao', name:'stimme_des_nauke'},aq = nodes[4] ,bb = nodes[5] ,bf = nodes[6] ,bg = nodes[7] ,bl = {id: 'bl', name:'stimmen_aus_der_ersten_gruppe'},bm = {id: 'bm', name:'stimmen_aus_der_andern_gruppe'} ; nodes.push( am,ao,bl,bm ); links.push( {source: ao , target: bf },{source: ao , target: bg },{source: ao , target: aq },{source: ao , target: aq },{source: ao , target: aq },{source: ao , target: bb },{source: ao , target: aq },{source: ao , target: bl },{source: ao , target: bm },{source: ao , target: aq },{source: aa , target: ao },{source: aa , target: bf },{source: aa , target: bg },{source: aa , target: aj },{source: aa , target: aq },{source: aa , target: aq },{source: aa , target: ab },{source: aa , target: am },{source: aa , target: aq },{source: aa , target: ai },{source: aa , target: bb },{source: aa , target: aq },{source: aa , target: bl },{source: aa , target: bm },{source: aa , target: aq },{source: bf , target: bg },{source: bf , target: bl },{source: bf , target: bm },{source: bg , target: bl },{source: bg , target: bm },{source: aj , target: ao },{source: aj , target: bf },{source: aj , target: bg },{source: aj , target: aq },{source: aj , target: aq },{source: aj , target: am },{source: aj , target: aq },{source: aj , target: bb },{source: aj , target: aq },{source: aj , target: bl },{source: aj , target: bm },{source: aj , target: aq },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bb },{source: aq , target: bl },{source: aq , target: bm },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bb },{source: aq , target: bl },{source: aq , target: bm },{source: ab , target: ao },{source: ab , target: bf },{source: ab , target: bg },{source: ab , target: aj },{source: ab , target: aq },{source: ab , target: aq },{source: ab , target: am },{source: ab , target: aq },{source: ab , target: ai },{source: ab , target: bb },{source: ab , target: aq },{source: ab , target: bl },{source: ab , target: bm },{source: ab , target: aq },{source: am , target: ao },{source: am , target: bf },{source: am , target: bg },{source: am , target: aq },{source: am , target: aq },{source: am , target: aq },{source: am , target: bb },{source: am , target: aq },{source: am , target: bl },{source: am , target: bm },{source: am , target: aq },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bb },{source: aq , target: bl },{source: aq , target: bm },{source: ai , target: ao },{source: ai , target: bf },{source: ai , target: bg },{source: ai , target: aj },{source: ai , target: aq },{source: ai , target: aq },{source: ai , target: am },{source: ai , target: aq },{source: ai , target: bb },{source: ai , target: aq },{source: ai , target: bl },{source: ai , target: bm },{source: ai , target: aq },{source: bb , target: bf },{source: bb , target: bg },{source: bb , target: bl },{source: bb , target: bm },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bb },{source: aq , target: bl },{source: aq , target: bm },{source: bl , target: bm },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bb },{source: aq , target: bl },{source: aq , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene [1]'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.855072463768115942%' ;
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'bf','bl','bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* aa ab ai aj am ao aq at bb bd bg */ var  aa = nodes[0] ,ab = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,am = nodes[4] ,ao = nodes[5] ,aq = nodes[6] ,at = {id: 'at', name:'der_erste_gefangene'},bb = nodes[7] ,bd = {id: 'bd', name:'greis'},bg = nodes[8]  ; nodes.push( at,bd ); links.push( {source: am , target: at },{source: am , target: bb },{source: am , target: aq },{source: am , target: aq },{source: am , target: bd },{source: am , target: ao },{source: am , target: bg },{source: ab , target: am },{source: ab , target: at },{source: ab , target: aj },{source: ab , target: bb },{source: ab , target: aq },{source: ab , target: ai },{source: ab , target: aq },{source: ab , target: bd },{source: ab , target: ao },{source: ab , target: bg },{source: at , target: bb },{source: at , target: bd },{source: at , target: bg },{source: aj , target: am },{source: aj , target: at },{source: aj , target: bb },{source: aj , target: aq },{source: aj , target: aq },{source: aj , target: bd },{source: aj , target: ao },{source: aj , target: bg },{source: bb , target: bd },{source: bb , target: bg },{source: aa , target: am },{source: aa , target: ab },{source: aa , target: at },{source: aa , target: aj },{source: aa , target: bb },{source: aa , target: aq },{source: aa , target: ai },{source: aa , target: aq },{source: aa , target: bd },{source: aa , target: ao },{source: aa , target: bg },{source: aq , target: at },{source: aq , target: bb },{source: aq , target: bd },{source: aq , target: bg },{source: ai , target: am },{source: ai , target: at },{source: ai , target: aj },{source: ai , target: bb },{source: ai , target: aq },{source: ai , target: aq },{source: ai , target: bd },{source: ai , target: ao },{source: ai , target: bg },{source: aq , target: at },{source: aq , target: bb },{source: aq , target: bd },{source: aq , target: bg },{source: bd , target: bg },{source: ao , target: at },{source: ao , target: bb },{source: ao , target: aq },{source: ao , target: aq },{source: ao , target: bd },{source: ao , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.304347826086956522%' ;
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'am','ab','at','aj','aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* ao aq bb bd bf bg bj */ var  ao = nodes[0] ,aq = nodes[1] ,bb = nodes[2] ,bd = nodes[3] ,bf = {id: 'bf', name:'der_krüppel'},bg = nodes[4] ,bj = {id: 'bj', name:'erster_alter_gefangener'} ; nodes.push( bf,bj ); links.push( {source: aq , target: bb },{source: aq , target: bg },{source: aq , target: bf },{source: aq , target: bd },{source: aq , target: bj },{source: bb , target: bg },{source: bb , target: bf },{source: bb , target: bd },{source: bb , target: bj },{source: bg , target: bj },{source: bf , target: bg },{source: bf , target: bj },{source: bd , target: bg },{source: bd , target: bf },{source: bd , target: bj },{source: aq , target: bb },{source: aq , target: bg },{source: aq , target: bf },{source: aq , target: bd },{source: aq , target: bj },{source: ao , target: aq },{source: ao , target: bb },{source: ao , target: bg },{source: ao , target: bf },{source: ao , target: bd },{source: ao , target: aq },{source: ao , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.753623188405797101%' ;
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'bd','ao','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* ak aq at au bb bf bg */ var  ak = {id: 'ak', name:'erster_wächter'},aq = nodes[0] ,at = {id: 'at', name:'der_erste_gefangene'},au = {id: 'au', name:'zweiter_gefangener'},bb = nodes[1] ,bf = nodes[2] ,bg = nodes[3]  ; nodes.push( ak,at,au ); links.push( {source: bb , target: bf },{source: bb , target: bg },{source: aq , target: bb },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: au },{source: aq , target: at },{source: bf , target: bg },{source: au , target: bb },{source: au , target: bf },{source: au , target: bg },{source: ak , target: bb },{source: ak , target: aq },{source: ak , target: bf },{source: ak , target: bg },{source: ak , target: au },{source: ak , target: at },{source: at , target: bb },{source: at , target: bf },{source: at , target: bg },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.202898550724637681%' ;
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'bf','bg','au','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* ag aq at ay az ba bb */ var  ag = {id: 'ag', name:'der_offizier'},aq = nodes[0] ,at = nodes[1] ,ay = {id: 'ay', name:'die_stimme_der_ersten_revolutionärin'},az = {id: 'az', name:'die_stimme_der_zweiten_revolutionärin'},ba = {id: 'ba', name:'dritte_revolutionärin'},bb = nodes[2]  ; nodes.push( ag,ay,az,ba ); links.push( {source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: az , target: ba },{source: az , target: bb },{source: ba , target: bb },{source: ag , target: ay },{source: ag , target: az },{source: ag , target: ba },{source: ag , target: bb },{source: ag , target: at },{source: ag , target: aq },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: aq , target: bb },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.652173913043478261%' ;
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ay','az','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* ag aq at bb */ var  ag = nodes[0] ,aq = nodes[1] ,at = nodes[2] ,bb = nodes[3]  ; /* nodes.push(); */ links.push( {source: ag , target: bb },{source: ag , target: bb },{source: ag , target: aq },{source: ag , target: at },{source: ag , target: at },{source: aq , target: bb },{source: aq , target: bb },{source: aq , target: at },{source: aq , target: at },{source: at , target: bb },{source: at , target: bb },{source: at , target: bb },{source: at , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.101449275362318841%' ;
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'aq','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68');nodes.sort(compare); /* ab ag bb */ var  ab = {id: 'ab', name:'eine_frau_aus_der_menge'},ag = nodes[0] ,bb = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ag },{source: ab , target: bb },{source: ag , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.55072463768115942%' ;
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [ 'ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69');nodes.sort(compare); /* am bb */ var  am = {id: 'am', name:'anna'},bb = nodes[0]  ; nodes.push( am ); links.push( {source: am , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 340000);
