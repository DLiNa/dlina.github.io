setTimeout(function() { console.log('load1');nodes.sort(compare); /* ab ac ad ae ag */ var  ab = {id: 'ab', name:'idun'},ac = {id: 'ac', name:'chalkol'},ad = {id: 'ad', name:'zepho'},ae = {id: 'ae', name:'oberpriester'},ag = {id: 'ag', name:'priester'} ; nodes.push( ab,ac,ad,ae,ag ); links.push( {source: ae , target: ag },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ag },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.347826086956521739%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'holofernes'},ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3]  ; nodes.push( aa ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.695652173913043478%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.043478260869565217%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'herold'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.391304347826086957%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.739130434782608696%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ae ag */ var  aa = nodes[0] ,ae = {id: 'ae', name:'oberpriester'},ag = {id: 'ag', name:'priester'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag },{source: aa , target: ae },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.086956521739130435%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.434782608695652174%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ah */ var  aa = nodes[0] ,ah = {id: 'ah', name:'achior'} ; nodes.push( ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.782608695652173913%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ab ai */ var  aa = nodes[0] ,ab = {id: 'ab', name:'idun'},ai = {id: 'ai', name:'der_gesandte'} ; nodes.push( ab,ai ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.130434782608695652%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aj ak */ var  aj = {id: 'aj', name:'ammon'},ak = {id: 'ak', name:'hosea'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.478260869565217391%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aj ak al */ var  aj = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'assad'} ; nodes.push( al ); links.push( {source: ak , target: al },{source: aj , target: al },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.82608695652173913%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aj ak al am */ var  aj = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = {id: 'am', name:'jojakim'} ; nodes.push( am ); links.push( {source: aj , target: am },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: am },{source: ak , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.17391304347826087%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* am */ var  am = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.521739130434782609%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* am an */ var  am = nodes[0] ,an = {id: 'an', name:'joab_als_judith'} ; nodes.push( an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.869565217391304348%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* am ao ap aq ar */ var  am = nodes[0] ,ao = {id: 'ao', name:'sara'},ap = {id: 'ap', name:'rachel'},aq = {id: 'aq', name:'nazael'},ar = {id: 'ar', name:'ben'} ; nodes.push( ao,ap,aq,ar ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.217391304347826087%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ao','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aj ak al am ap as at au */ var  aj = {id: 'aj', name:'ammon'},ak = {id: 'ak', name:'hosea'},al = {id: 'al', name:'assad'},am = nodes[0] ,ap = nodes[1] ,as = {id: 'as', name:'nabal'},at = {id: 'at', name:'mehrere_aus_dem_volk'},au = {id: 'au', name:'daniel'} ; nodes.push( aj,ak,al,as,at,au ); links.push( {source: al , target: ap },{source: al , target: as },{source: al , target: am },{source: al , target: at },{source: al , target: au },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ak , target: al },{source: ak , target: ap },{source: ak , target: as },{source: ak , target: am },{source: ak , target: at },{source: ak , target: au },{source: as , target: at },{source: as , target: au },{source: aj , target: al },{source: aj , target: ap },{source: aj , target: ak },{source: aj , target: as },{source: aj , target: am },{source: aj , target: at },{source: aj , target: au },{source: am , target: ap },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.565217391304347826%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aj ak al am ao ap as at au av */ var  aj = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = nodes[3] ,ao = {id: 'ao', name:'sara'},ap = nodes[4] ,as = nodes[5] ,at = nodes[6] ,au = nodes[7] ,av = {id: 'av', name:'nathan'} ; nodes.push( ao,av ); links.push( {source: al , target: am },{source: al , target: at },{source: al , target: as },{source: al , target: ap },{source: al , target: av },{source: al , target: au },{source: al , target: at },{source: al , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ak , target: at },{source: ak , target: as },{source: ak , target: ap },{source: ak , target: av },{source: ak , target: au },{source: ak , target: at },{source: ak , target: ao },{source: am , target: at },{source: am , target: as },{source: am , target: ap },{source: am , target: av },{source: am , target: au },{source: am , target: at },{source: am , target: ao },{source: at , target: av },{source: at , target: au },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: at },{source: aj , target: as },{source: aj , target: ap },{source: aj , target: av },{source: aj , target: au },{source: aj , target: at },{source: aj , target: ao },{source: as , target: at },{source: as , target: av },{source: as , target: au },{source: as , target: at },{source: ap , target: at },{source: ap , target: as },{source: ap , target: av },{source: ap , target: au },{source: ap , target: at },{source: au , target: av },{source: at , target: av },{source: at , target: au },{source: ao , target: at },{source: ao , target: as },{source: ao , target: ap },{source: ao , target: av },{source: ao , target: au },{source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.913043478260869565%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'al','ak','ap','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aj am ao as at au aw */ var  aj = nodes[0] ,am = nodes[1] ,ao = nodes[2] ,as = nodes[3] ,at = nodes[4] ,au = nodes[5] ,aw = {id: 'aw', name:'heman'} ; nodes.push( aw ); links.push( {source: aj , target: aw },{source: aj , target: as },{source: aj , target: at },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: au },{source: aj , target: at },{source: as , target: aw },{source: as , target: at },{source: as , target: au },{source: as , target: at },{source: at , target: aw },{source: at , target: au },{source: am , target: aw },{source: am , target: as },{source: am , target: at },{source: am , target: ao },{source: am , target: au },{source: am , target: at },{source: ao , target: aw },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: at },{source: au , target: aw },{source: at , target: aw },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.260869565217391304%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aw','aj','as','ao','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ak al am at */ var  ak = {id: 'ak', name:'hosea'},al = {id: 'al', name:'assad'},am = nodes[0] ,at = nodes[1]  ; nodes.push( ak,al ); links.push( {source: ak , target: al },{source: ak , target: at },{source: ak , target: am },{source: al , target: at },{source: al , target: am },{source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.608695652173913043%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ak','al','at','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ah */ var  aa = {id: 'aa', name:'holofernes'},ab = {id: 'ab', name:'idun'},ah = {id: 'ah', name:'achior'} ; nodes.push( aa,ab,ah ); links.push( {source: aa , target: ab },{source: aa , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.956521739130434783%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'chalkol'},ad = {id: 'ad', name:'zepho'} ; nodes.push( ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '22. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.304347826086956522%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ah */ var  aa = nodes[0] ,ah = {id: 'ah', name:'achior'} ; nodes.push( ah ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '23. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.652173913043478261%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ah an ax ay */ var  aa = nodes[0] ,ah = nodes[1] ,an = {id: 'an', name:'joab_als_judith'},ax = {id: 'ax', name:'mirza'},ay = {id: 'ay', name:'stimmen'} ; nodes.push( an,ax,ay ); links.push( {source: an , target: ax },{source: an , target: ay },{source: aa , target: an },{source: aa , target: ah },{source: aa , target: ax },{source: aa , target: ay },{source: ah , target: an },{source: ah , target: ax },{source: ah , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '24. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 110000);
