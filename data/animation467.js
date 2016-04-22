setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'k5_Alfred'},ab = {id: 'ab', name:'k5_Die_Mutter'},ac = {id: 'ac', name:'k5_Die_Grossmutter'},ad = {id: 'ad', name:'k5_Der_Hierlinger_Ferdinand'},ae = {id: 'ae', name:'k5_Valerie'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'I.Draussen in der Wachau.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ae af ag ah ai aj ak al */ var  aa = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'k5_Oskar'},ag = {id: 'ag', name:'k5_Ida'},ah = {id: 'ah', name:'k5_Havlitschek'},ai = {id: 'ai', name:'k5_Rittmeister'},aj = {id: 'aj', name:'k5_Eine_gnädige_Frau'},ak = {id: 'ak', name:'k5_Marianne'},al = {id: 'al', name:'k5_Zauberkönig'} ; nodes.push( af,ag,ah,ai,aj,ak,al ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ak },{source: af , target: aj },{source: af , target: al },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: al },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: al },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: al },{source: ak , target: al },{source: aj , target: ak },{source: aj , target: al },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'II.Stille Strasse im achten Bezirk.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ah','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ae af ag ak al am */ var  aa = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,ak = nodes[4] ,al = nodes[5] ,am = {id: 'am', name:'k5_Erich'} ; nodes.push( am ); links.push( {source: al , target: am },{source: af , target: al },{source: af , target: ak },{source: af , target: am },{source: af , target: ag },{source: ak , target: al },{source: ak , target: am },{source: ae , target: al },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: am },{source: ae , target: ag },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: ae },{source: aa , target: am },{source: aa , target: ag },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'III.Am naechsten Sonntag im Wiener Wald.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'am','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ae af ak al */ var  aa = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ak = nodes[3] ,al = nodes[4]  ; /* nodes.push(); */ links.push( {source: aa , target: ak },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ae },{source: ak , target: al },{source: af , target: ak },{source: af , target: al },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'IV.An der schoenen blauen Donau.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa','ak','al','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* af ah an */ var  af = nodes[0] ,ah = {id: 'ah', name:'k5_Havlitschek'},an = {id: 'an', name:'k5_Emma'} ; nodes.push( ah,an ); links.push( {source: ah , target: an },{source: af , target: ah },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'I.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ah','an','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ak */ var  aa = {id: 'aa', name:'k5_Alfred'},ak = {id: 'ak', name:'k5_Marianne'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'II. Moebliertes Zimmer im achtzehnten Bezirk.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ad ak */ var  aa = nodes[0] ,ad = {id: 'ad', name:'k5_Der_Hierlinger_Ferdinand'},ak = nodes[1]  ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ak },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'III. Kleines Café im zweiten                           Bezirk.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad ak ao ap aq */ var  ad = nodes[0] ,ak = nodes[1] ,ao = {id: 'ao', name:'k5_Helene'},ap = {id: 'ap', name:'k5_Der_Dienstbot'},aq = {id: 'aq', name:'k5_Baronin'} ; nodes.push( ao,ap,aq ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: ak },{source: ad , target: aq },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'IV. Bei der Baronin mit den internationalen Verbindungen.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ao','ap','ad','ak','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'k5_Alfred'},ab = {id: 'ab', name:'k5_Die_Mutter'},ac = {id: 'ac', name:'k5_Die_Grossmutter'} ; nodes.push( aa,ab,ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'V. Draussen in der Wachau.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ae af ah ai aj al am */ var  aa = nodes[0] ,ae = {id: 'ae', name:'k5_Valerie'},af = {id: 'af', name:'k5_Oskar'},ah = {id: 'ah', name:'k5_Havlitschek'},ai = {id: 'ai', name:'k5_Rittmeister'},aj = {id: 'aj', name:'k5_Eine_gnädige_Frau'},al = {id: 'al', name:'k5_Zauberkönig'},am = {id: 'am', name:'k5_Erich'} ; nodes.push( ae,af,ah,ai,aj,al,am ); links.push( {source: af , target: ai },{source: af , target: al },{source: af , target: aj },{source: af , target: am },{source: af , target: ah },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: am },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: aj },{source: ae , target: am },{source: ae , target: ah },{source: al , target: am },{source: aj , target: al },{source: aj , target: am },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: al },{source: aa , target: aj },{source: aa , target: am },{source: aa , target: ah },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: aj },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'VI. Und wieder in der stillen Strasse im achten Bezirk.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'af','ai','ae','al','aj','am','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ak ar */ var  ak = {id: 'ak', name:'k5_Marianne'},ar = {id: 'ar', name:'k5_Beichtvater'} ; nodes.push( ak,ar ); links.push( {source: ak , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Teil'; var scene = document.getElementById('scene');scene.innerHTML = 'VII. Im Stephansdom.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae ai ak al am aq as at */ var  ae = {id: 'ae', name:'k5_Valerie'},ai = {id: 'ai', name:'k5_Rittmeister'},ak = nodes[0] ,al = {id: 'al', name:'k5_Zauberkönig'},am = {id: 'am', name:'k5_Erich'},aq = {id: 'aq', name:'k5_Baronin'},as = {id: 'as', name:'k5_Der_Mister'},at = {id: 'at', name:'k5_Der_Conférencier'} ; nodes.push( ae,ai,al,am,aq,as,at ); links.push( {source: am , target: as },{source: am , target: at },{source: am , target: aq },{source: al , target: am },{source: al , target: as },{source: al , target: at },{source: al , target: aq },{source: ae , target: am },{source: ae , target: al },{source: ae , target: ai },{source: ae , target: as },{source: ae , target: at },{source: ae , target: ak },{source: ae , target: aq },{source: ai , target: am },{source: ai , target: al },{source: ai , target: as },{source: ai , target: at },{source: ai , target: ak },{source: ai , target: aq },{source: as , target: at },{source: ak , target: am },{source: ak , target: al },{source: ak , target: as },{source: ak , target: at },{source: ak , target: aq },{source: aq , target: as },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Teil.'; var scene = document.getElementById('scene');scene.innerHTML = 'I.Beim Heurigen.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'am','al','ae','ai','as','at','ak','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'k5_Alfred'},ab = {id: 'ab', name:'k5_Die_Mutter'},ac = {id: 'ac', name:'k5_Die_Grossmutter'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Teil.'; var scene = document.getElementById('scene');scene.innerHTML = 'II.Draussen in der Wachau.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ae af ai ak al am */ var  aa = nodes[0] ,ae = {id: 'ae', name:'k5_Valerie'},af = {id: 'af', name:'k5_Oskar'},ai = {id: 'ai', name:'k5_Rittmeister'},ak = {id: 'ak', name:'k5_Marianne'},al = {id: 'al', name:'k5_Zauberkönig'},am = {id: 'am', name:'k5_Erich'} ; nodes.push( ae,af,ai,ak,al,am ); links.push( {source: ae , target: ai },{source: ae , target: am },{source: ae , target: af },{source: ae , target: al },{source: ae , target: ak },{source: ai , target: am },{source: ai , target: al },{source: ai , target: ak },{source: af , target: ai },{source: af , target: am },{source: af , target: al },{source: af , target: ak },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: am },{source: aa , target: af },{source: aa , target: al },{source: aa , target: ak },{source: al , target: am },{source: ak , target: am },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Teil.'; var scene = document.getElementById('scene');scene.innerHTML = 'III.Und abermals in der stillen Strasse im achten Bezirk.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ai','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ab ac ae af ak al */ var  aa = nodes[0] ,ab = {id: 'ab', name:'k5_Die_Mutter'},ac = {id: 'ac', name:'k5_Die_Grossmutter'},ae = nodes[1] ,af = nodes[2] ,ak = nodes[3] ,al = nodes[4]  ; nodes.push( ab,ac ); links.push( {source: ac , target: ak },{source: ac , target: al },{source: ac , target: ae },{source: ac , target: af },{source: ab , target: ac },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ae },{source: ab , target: af },{source: ak , target: al },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: ae },{source: aa , target: af },{source: af , target: ak },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Teil.'; var scene = document.getElementById('scene');scene.innerHTML = 'IV.Draussen in der Wachau.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 70000);
