setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag */ var  aa = {id: 'aa', name:'ahasverus'},ab = {id: 'ab', name:'gevatterin'},ac = {id: 'ac', name:'suppius'},ad = {id: 'ad', name:'dienemann'},ae = {id: 'ae', name:'meyer'},af = {id: 'af', name:'waisenhäuser'},ag = {id: 'ag', name:'pamphilio'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.040816326530612245%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac ad ae af ah ai aj ak al am an */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = nodes[4] ,ah = {id: 'ah', name:'pferdephilister'},ai = {id: 'ai', name:'cardenio'},aj = {id: 'aj', name:'becker'},ak = {id: 'ak', name:'ein_waisenhäuser'},al = {id: 'al', name:'kümmeltürke'},am = {id: 'am', name:'magister'},an = {id: 'an', name:'philister'} ; nodes.push( ah,ai,aj,ak,al,am,an ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: an },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: an },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: af },{source: ad , target: al },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: an },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: al },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: an },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: af },{source: ab , target: al },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: an },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: af },{source: ac , target: al },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: an },{source: ak , target: al },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: an },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: an },{source: al , target: am },{source: al , target: an },{source: al , target: an },{source: al , target: am },{source: al , target: an },{source: al , target: an },{source: am , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.08163265306122449%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ah','ad','ae','ac','aj','ak','af','al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ai ao ap */ var  ab = nodes[0] ,ai = nodes[1] ,ao = {id: 'ao', name:'doris'},ap = {id: 'ap', name:'olympie'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap },{source: ai , target: ao },{source: ai , target: ap },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.122448979591836735%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ao','ap','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ai aq ar */ var  ad = {id: 'ad', name:'dienemann'},ai = nodes[0] ,aq = {id: 'aq', name:'studenten'},ar = {id: 'ar', name:'wagner'} ; nodes.push( ad,aq,ar ); links.push( {source: ai , target: aq },{source: ai , target: ar },{source: aq , target: ar },{source: ad , target: ai },{source: ad , target: aq },{source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.16326530612244898%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac ad ae ag ai aj as at au */ var  ab = {id: 'ab', name:'gevatterin'},ac = {id: 'ac', name:'suppius'},ad = nodes[0] ,ae = {id: 'ae', name:'meyer'},ag = {id: 'ag', name:'pamphilio'},ai = nodes[1] ,aj = {id: 'aj', name:'becker'},as = {id: 'as', name:'erster_musikant'},at = {id: 'at', name:'musikanten'},au = {id: 'au', name:'schmidt'} ; nodes.push( ab,ac,ae,ag,aj,as,at,au ); links.push( {source: ab , target: ad },{source: ab , target: as },{source: ab , target: at },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: au },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ag },{source: ad , target: as },{source: ad , target: at },{source: ad , target: ae },{source: ad , target: au },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ag },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: ac , target: ad },{source: ac , target: as },{source: ac , target: at },{source: ac , target: ae },{source: ac , target: au },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ag },{source: ae , target: as },{source: ae , target: at },{source: ae , target: au },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ag },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: aj },{source: aj , target: as },{source: aj , target: at },{source: aj , target: au },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.204081632653061224%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad','as','at','ac','ae','au','ai','aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ao av */ var  ab = nodes[0] ,ao = {id: 'ao', name:'doris'},av = {id: 'av', name:'lysander'} ; nodes.push( ao,av ); links.push( {source: ao , target: av },{source: ab , target: ao },{source: ab , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '12.244897959183673469%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ao','ab','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ap aw */ var  ap = {id: 'ap', name:'olympie'},aw = {id: 'aw', name:'vieren'} ; nodes.push( ap,aw ); links.push( {source: ap , target: aw },{source: ap , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.285714285714285714%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aw','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ao av */ var  ao = {id: 'ao', name:'doris'},av = {id: 'av', name:'lysander'} ; nodes.push( ao,av ); links.push( {source: ao , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.326530612244897959%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ao','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ag ai ap as ax ay az ba */ var  ag = {id: 'ag', name:'pamphilio'},ai = {id: 'ai', name:'cardenio'},ap = {id: 'ap', name:'olympie'},as = {id: 'as', name:'erster_musikant'},ax = {id: 'ax', name:'jungfrau'},ay = {id: 'ay', name:'frau'},az = {id: 'az', name:'lindor'},ba = {id: 'ba', name:'zuschauer'} ; nodes.push( ag,ai,ap,as,ax,ay,az,ba ); links.push( {source: ap , target: as },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: az },{source: ap , target: ba },{source: as , target: ax },{source: as , target: ay },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: ag , target: ap },{source: ag , target: as },{source: ag , target: ai },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: az },{source: ag , target: ba },{source: ai , target: ap },{source: ai , target: as },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: az },{source: ai , target: ba },{source: ax , target: ay },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ay , target: az },{source: ay , target: ba },{source: ax , target: ay },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ay , target: az },{source: ay , target: ba },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.367346938775510204%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ap','as','ag','ai','ax','ay','az','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ao av */ var  ao = {id: 'ao', name:'doris'},av = {id: 'av', name:'lysander'} ; nodes.push( ao,av ); links.push( {source: ao , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.408163265306122449%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ap av */ var  ap = {id: 'ap', name:'olympie'},av = nodes[0]  ; nodes.push( ap ); links.push( {source: ap , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.448979591836734694%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'doris'},ap = nodes[0]  ; nodes.push( ao ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.489795918367346939%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ap av */ var  ap = nodes[0] ,av = {id: 'av', name:'lysander'} ; nodes.push( av ); links.push( {source: ap , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.530612244897959184%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ap','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'cardenio'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.571428571428571429%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ag ai ao ap as aw bb bc bd */ var  ag = {id: 'ag', name:'pamphilio'},ai = nodes[0] ,ao = {id: 'ao', name:'doris'},ap = {id: 'ap', name:'olympie'},as = {id: 'as', name:'erster_musikant'},aw = {id: 'aw', name:'vieren'},bb = {id: 'bb', name:'bediente'},bc = {id: 'bc', name:'musiker'},bd = {id: 'bd', name:'ein_anderer_musikant'} ; nodes.push( ag,ao,ap,as,aw,bb,bc,bd ); links.push( {source: ao , target: aw },{source: ao , target: ap },{source: ao , target: bb },{source: ao , target: bc },{source: ao , target: as },{source: ao , target: bd },{source: ai , target: ao },{source: ai , target: aw },{source: ai , target: ap },{source: ai , target: bb },{source: ai , target: bc },{source: ai , target: as },{source: ai , target: bd },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: bd },{source: ap , target: aw },{source: ap , target: bb },{source: ap , target: bc },{source: ap , target: as },{source: ap , target: bd },{source: bb , target: bc },{source: bb , target: bd },{source: ag , target: ao },{source: ag , target: ai },{source: ag , target: aw },{source: ag , target: ap },{source: ag , target: bb },{source: ag , target: bc },{source: ag , target: as },{source: ag , target: bd },{source: bc , target: bd },{source: as , target: aw },{source: as , target: bb },{source: as , target: bc },{source: as , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.612244897959183673%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ao','bb','ag','bc','as','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ai ap aw */ var  ai = nodes[0] ,ap = nodes[1] ,aw = nodes[2]  ; /* nodes.push(); */ links.push( {source: ai , target: aw },{source: ai , target: ap },{source: ap , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.653061224489795918%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ao ap aw */ var  ao = {id: 'ao', name:'doris'},ap = nodes[0] ,aw = nodes[1]  ; nodes.push( ao ); links.push( {source: ao , target: aw },{source: ao , target: ap },{source: ap , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.693877551020408163%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ao','aw','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ac ad af ai aj be bf bg bh */ var  aa = {id: 'aa', name:'ahasverus'},ac = {id: 'ac', name:'suppius'},ad = {id: 'ad', name:'dienemann'},af = {id: 'af', name:'waisenhäuser'},ai = {id: 'ai', name:'cardenio'},aj = {id: 'aj', name:'becker'},be = {id: 'be', name:'präses_der_studenten'},bf = {id: 'bf', name:'alle_1.18'},bg = {id: 'bg', name:'viele_1.18'},bh = {id: 'bh', name:'einer_1.18'} ; nodes.push( aa,ac,ad,af,ai,aj,be,bf,bg,bh ); links.push( {source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: bf , target: bg },{source: bf , target: bh },{source: ai , target: be },{source: ai , target: bf },{source: ai , target: bg },{source: ai , target: aj },{source: ai , target: bh },{source: bg , target: bh },{source: aj , target: be },{source: aj , target: bf },{source: aj , target: bg },{source: aj , target: bh },{source: ac , target: be },{source: ac , target: bf },{source: ac , target: ai },{source: ac , target: bg },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: bh },{source: ad , target: be },{source: ad , target: bf },{source: ad , target: ai },{source: ad , target: bg },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: bh },{source: af , target: be },{source: af , target: bf },{source: af , target: ai },{source: af , target: bg },{source: af , target: aj },{source: af , target: bh },{source: aa , target: be },{source: aa , target: bf },{source: aa , target: ai },{source: aa , target: bg },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.734693877551020408%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'be','bf','ai','bg','aj','ac','ad','af','bh','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'doris'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.775510204081632653%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ao aw */ var  ao = nodes[0] ,aw = {id: 'aw', name:'vieren'} ; nodes.push( aw ); links.push( {source: ao , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.816326530612244898%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ap aw */ var  ap = {id: 'ap', name:'olympie'},aw = nodes[0]  ; nodes.push( ap ); links.push( {source: ap , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.857142857142857143%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ap av aw */ var  ap = nodes[0] ,av = {id: 'av', name:'lysander'},aw = nodes[1]  ; nodes.push( av ); links.push( {source: av , target: aw },{source: ap , target: av },{source: ap , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.897959183673469388%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'av','ap','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* bi bj bk bl */ var  bi = {id: 'bi', name:'kinder'},bj = {id: 'bj', name:'nathan'},bk = {id: 'bk', name:'kind'},bl = {id: 'bl', name:'der_andere_knabe'} ; nodes.push( bi,bj,bk,bl ); links.push( {source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bj , target: bk },{source: bj , target: bl },{source: bk , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.938775510204081633%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bi','bk','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* av bj */ var  av = {id: 'av', name:'lysander'},bj = nodes[0]  ; nodes.push( av ); links.push( {source: av , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.979591836734693878%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ag bj */ var  ag = {id: 'ag', name:'pamphilio'},bj = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.020408163265306122%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ai bj */ var  ai = {id: 'ai', name:'cardenio'},bj = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.061224489795918367%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa av bi bj bk bm */ var  aa = {id: 'aa', name:'ahasverus'},av = {id: 'av', name:'lysander'},bi = {id: 'bi', name:'kinder'},bj = nodes[0] ,bk = {id: 'bk', name:'kind'},bm = {id: 'bm', name:'edelchen'} ; nodes.push( aa,av,bi,bk,bm ); links.push( {source: bj , target: bm },{source: bj , target: bk },{source: av , target: bm },{source: av , target: bj },{source: av , target: bk },{source: av , target: bi },{source: aa , target: bm },{source: aa , target: bj },{source: aa , target: av },{source: aa , target: bk },{source: aa , target: bi },{source: bk , target: bm },{source: bi , target: bm },{source: bi , target: bj },{source: bi , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.102040816326530612%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bm','bj','av','bk','bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ab ag ai bn co cp cq cr cu */ var  aa = nodes[0] ,ab = {id: 'ab', name:'gevatterin'},ag = {id: 'ag', name:'pamphilio'},ai = {id: 'ai', name:'cardenio'},bn = {id: 'bn', name:'gast'},co = {id: 'co', name:'die_häscher'},cp = {id: 'cp', name:'ein_häscher'},cq = {id: 'cq', name:'der_andre'},cr = {id: 'cr', name:'ein_dritter'},cu = {id: 'cu', name:'einer_ii10'} ; nodes.push( ab,ag,ai,bn,co,cp,cq,cr,cu ); links.push( {source: ai , target: bn },{source: ai , target: cu },{source: ai , target: co },{source: ai , target: cp },{source: ai , target: cq },{source: ai , target: cr },{source: bn , target: cu },{source: bn , target: co },{source: bn , target: cp },{source: bn , target: cq },{source: bn , target: cr },{source: ag , target: ai },{source: ag , target: bn },{source: ag , target: cu },{source: ag , target: co },{source: ag , target: cp },{source: ag , target: cq },{source: ag , target: cr },{source: aa , target: ai },{source: aa , target: bn },{source: aa , target: ag },{source: aa , target: cu },{source: aa , target: co },{source: aa , target: cp },{source: aa , target: cq },{source: aa , target: cr },{source: aa , target: ab },{source: co , target: cu },{source: co , target: cp },{source: co , target: cq },{source: co , target: cr },{source: cp , target: cu },{source: cp , target: cq },{source: cp , target: cr },{source: cq , target: cu },{source: cq , target: cr },{source: cr , target: cu },{source: ab , target: ai },{source: ab , target: bn },{source: ab , target: ag },{source: ab , target: cu },{source: ab , target: co },{source: ab , target: cp },{source: ab , target: cq },{source: ab , target: cr } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.142857142857142857%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ai','bn','ag','cu','aa','co','cp','cq','cr','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ap av aw bo bp bq br bs */ var  ap = {id: 'ap', name:'olympie'},av = {id: 'av', name:'lysander'},aw = {id: 'aw', name:'vieren'},bo = {id: 'bo', name:'prediger'},bp = {id: 'bp', name:'die_versammlung'},bq = {id: 'bq', name:'eine_alte_frau'},br = {id: 'br', name:'halloren'},bs = {id: 'bs', name:'hallor'} ; nodes.push( ap,av,aw,bo,bp,bq,br,bs ); links.push( {source: bo , target: bp },{source: bo , target: bq },{source: bo , target: br },{source: bo , target: bs },{source: bo , target: bs },{source: bo , target: bs },{source: av , target: bo },{source: av , target: bp },{source: av , target: bq },{source: av , target: br },{source: av , target: bs },{source: av , target: bs },{source: av , target: bs },{source: av , target: aw },{source: ap , target: bo },{source: ap , target: av },{source: ap , target: bp },{source: ap , target: bq },{source: ap , target: br },{source: ap , target: bs },{source: ap , target: bs },{source: ap , target: bs },{source: ap , target: aw },{source: bp , target: bq },{source: bp , target: br },{source: bp , target: bs },{source: bp , target: bs },{source: bp , target: bs },{source: bq , target: br },{source: bq , target: bs },{source: bq , target: bs },{source: bq , target: bs },{source: br , target: bs },{source: br , target: bs },{source: br , target: bs },{source: aw , target: bo },{source: aw , target: bp },{source: aw , target: bq },{source: aw , target: br },{source: aw , target: bs },{source: aw , target: bs },{source: aw , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.183673469387755102%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'bo','bp','bq','br','bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ag ai ap av aw bu bv bw bx */ var  ag = {id: 'ag', name:'pamphilio'},ai = {id: 'ai', name:'cardenio'},ap = nodes[0] ,av = nodes[1] ,aw = nodes[2] ,bu = {id: 'bu', name:'herold'},bv = {id: 'bv', name:'prinzessin'},bw = {id: 'bw', name:'weissprinz'},bx = {id: 'bx', name:'mohrenprinz'} ; nodes.push( ag,ai,bu,bv,bw,bx ); links.push( {source: bu , target: bv },{source: bu , target: bw },{source: bu , target: bx },{source: ap , target: bu },{source: ap , target: aw },{source: ap , target: bv },{source: ap , target: bw },{source: ap , target: bx },{source: ap , target: av },{source: aw , target: bu },{source: aw , target: bv },{source: aw , target: bw },{source: aw , target: bx },{source: ag , target: bu },{source: ag , target: ap },{source: ag , target: aw },{source: ag , target: ai },{source: ag , target: bv },{source: ag , target: bw },{source: ag , target: bx },{source: ag , target: av },{source: ai , target: bu },{source: ai , target: ap },{source: ai , target: aw },{source: ai , target: bv },{source: ai , target: bw },{source: ai , target: bx },{source: ai , target: av },{source: bv , target: bw },{source: bv , target: bx },{source: bw , target: bx },{source: av , target: bu },{source: av , target: aw },{source: av , target: bv },{source: av , target: bw },{source: av , target: bx } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.224489795918367347%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bu','ap','ag','ai','bv','bw','bx','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aw by bz ca */ var  aw = nodes[0] ,by = {id: 'by', name:'gelinde'},bz = {id: 'bz', name:'hallorenweiber'},ca = {id: 'ca', name:'dicke_magd'} ; nodes.push( by,bz,ca ); links.push( {source: aw , target: by },{source: aw , target: bz },{source: aw , target: ca },{source: by , target: bz },{source: by , target: ca },{source: bz , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.265306122448979592%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'bz' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ai aw by ca cb */ var  aa = {id: 'aa', name:'ahasverus'},ai = {id: 'ai', name:'cardenio'},aw = nodes[0] ,by = nodes[1] ,ca = nodes[2] ,cb = {id: 'cb', name:'hallorenweib'} ; nodes.push( aa,ai,cb ); links.push( {source: ai , target: ca },{source: ai , target: by },{source: ai , target: aw },{source: ai , target: cb },{source: ca , target: cb },{source: by , target: ca },{source: by , target: cb },{source: aw , target: ca },{source: aw , target: by },{source: aw , target: cb },{source: aa , target: ai },{source: aa , target: ca },{source: aa , target: by },{source: aa , target: aw },{source: aa , target: cb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.306122448979591837%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ca','aw','cb','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ai by */ var  ai = nodes[0] ,by = nodes[1]  ; /* nodes.push(); */ links.push( {source: ai , target: by } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.346938775510204082%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ai bo by cc */ var  ai = nodes[0] ,bo = {id: 'bo', name:'prediger'},by = nodes[1] ,cc = {id: 'cc', name:'der_prediger'} ; nodes.push( bo,cc ); links.push( {source: by , target: cc },{source: ai , target: cc },{source: ai , target: by },{source: ai , target: bo },{source: bo , target: cc },{source: bo , target: by } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.387755102040816327%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'cc','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ai by */ var  ai = nodes[0] ,by = nodes[1]  ; /* nodes.push(); */ links.push( {source: ai , target: by } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.428571428571428571%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ag ai ao ap av br bs bt by cd ce cf cv */ var  aa = {id: 'aa', name:'ahasverus'},ag = {id: 'ag', name:'pamphilio'},ai = nodes[0] ,ao = {id: 'ao', name:'doris'},ap = {id: 'ap', name:'olympie'},av = {id: 'av', name:'lysander'},br = {id: 'br', name:'halloren'},bs = {id: 'bs', name:'hallor'},bt = {id: 'bt', name:'zweiter'},by = nodes[1] ,cd = {id: 'cd', name:'einer_aus_dem_volke'},ce = {id: 'ce', name:'ein_anderer_aus_dem_volke'},cf = {id: 'cf', name:'die_menge'},cv = {id: 'cv', name:'viele_iii1'} ; nodes.push( aa,ag,ao,ap,av,br,bs,bt,cd,ce,cf,cv ); links.push( {source: br , target: bs },{source: br , target: bt },{source: br , target: cd },{source: br , target: ce },{source: br , target: by },{source: br , target: cf },{source: br , target: bs },{source: br , target: cv },{source: bs , target: bt },{source: bs , target: cd },{source: bs , target: ce },{source: bs , target: by },{source: bs , target: cf },{source: bs , target: cv },{source: bt , target: cd },{source: bt , target: ce },{source: bt , target: by },{source: bt , target: cf },{source: bt , target: cv },{source: cd , target: ce },{source: cd , target: cf },{source: cd , target: cv },{source: ce , target: cf },{source: ce , target: cv },{source: ai , target: br },{source: ai , target: bs },{source: ai , target: bt },{source: ai , target: cd },{source: ai , target: ce },{source: ai , target: by },{source: ai , target: ao },{source: ai , target: cf },{source: ai , target: bs },{source: ai , target: ap },{source: ai , target: av },{source: ai , target: cv },{source: ag , target: br },{source: ag , target: bs },{source: ag , target: bt },{source: ag , target: cd },{source: ag , target: ce },{source: ag , target: ai },{source: ag , target: by },{source: ag , target: ao },{source: ag , target: cf },{source: ag , target: bs },{source: ag , target: ap },{source: ag , target: av },{source: ag , target: cv },{source: by , target: cd },{source: by , target: ce },{source: by , target: cf },{source: by , target: cv },{source: ao , target: br },{source: ao , target: bs },{source: ao , target: bt },{source: ao , target: cd },{source: ao , target: ce },{source: ao , target: by },{source: ao , target: cf },{source: ao , target: bs },{source: ao , target: ap },{source: ao , target: av },{source: ao , target: cv },{source: cf , target: cv },{source: bs , target: bt },{source: bs , target: cd },{source: bs , target: ce },{source: bs , target: by },{source: bs , target: cf },{source: bs , target: cv },{source: ap , target: br },{source: ap , target: bs },{source: ap , target: bt },{source: ap , target: cd },{source: ap , target: ce },{source: ap , target: by },{source: ap , target: cf },{source: ap , target: bs },{source: ap , target: av },{source: ap , target: cv },{source: av , target: br },{source: av , target: bs },{source: av , target: bt },{source: av , target: cd },{source: av , target: ce },{source: av , target: by },{source: av , target: cf },{source: av , target: bs },{source: av , target: cv },{source: aa , target: br },{source: aa , target: bs },{source: aa , target: bt },{source: aa , target: cd },{source: aa , target: ce },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: by },{source: aa , target: ao },{source: aa , target: cf },{source: aa , target: bs },{source: aa , target: ap },{source: aa , target: av },{source: aa , target: cv } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.469387755102040816%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'br','bs','bt','cd','ce','ag','by','ao','cf','ap','av','cv','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ai cg ch ci */ var  ai = nodes[0] ,cg = {id: 'cg', name:'kümmermann'},ch = {id: 'ch', name:'stürmer'},ci = {id: 'ci', name:'marschal'} ; nodes.push( cg,ch,ci ); links.push( {source: cg , target: ch },{source: cg , target: ci },{source: ch , target: ci },{source: ai , target: cg },{source: ai , target: ch },{source: ai , target: ci } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.510204081632653061%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'cg','ch','ci' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ag ai */ var  ag = {id: 'ag', name:'pamphilio'},ai = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.551020408163265306%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ai cj */ var  aa = {id: 'aa', name:'ahasverus'},ai = nodes[0] ,cj = {id: 'cj', name:'diener'} ; nodes.push( aa,cj ); links.push( {source: aa , target: ai },{source: aa , target: cj },{source: aa , target: cj },{source: ai , target: cj },{source: ai , target: cj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.591836734693877551%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aa','ai','cj' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* by */ var  by = {id: 'by', name:'gelinde'} ; nodes.push( by ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.632653061224489796%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* by ck */ var  by = nodes[0] ,ck = {id: 'ck', name:'tyche'} ; nodes.push( ck ); links.push( {source: by , target: ck } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.673469387755102041%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ck','by' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ai ap av aw cl cm */ var  ai = {id: 'ai', name:'cardenio'},ap = {id: 'ap', name:'olympie'},av = {id: 'av', name:'lysander'},aw = {id: 'aw', name:'vieren'},cl = {id: 'cl', name:'die_gestalt'},cm = {id: 'cm', name:'anton'} ; nodes.push( ai,ap,av,aw,cl,cm ); links.push( {source: ap , target: aw },{source: ap , target: cl },{source: ap , target: av },{source: ap , target: cm },{source: aw , target: cl },{source: aw , target: cm },{source: ai , target: ap },{source: ai , target: aw },{source: ai , target: cl },{source: ai , target: av },{source: ai , target: cm },{source: cl , target: cm },{source: av , target: aw },{source: av , target: cl },{source: av , target: cm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.714285714285714286%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ap','aw','av','cm' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ai by ck cl cn */ var  ai = nodes[0] ,by = {id: 'by', name:'gelinde'},ck = {id: 'ck', name:'tyche'},cl = nodes[1] ,cn = {id: 'cn', name:'cleon'} ; nodes.push( by,ck,cn ); links.push( {source: ai , target: cl },{source: ai , target: ck },{source: ai , target: cn },{source: ai , target: by },{source: cl , target: cn },{source: ck , target: cl },{source: ck , target: cn },{source: by , target: cl },{source: by , target: ck },{source: by , target: cn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '87.755102040816326531%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'cl' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ai bo by ck cn */ var  ai = nodes[0] ,bo = {id: 'bo', name:'prediger'},by = nodes[1] ,ck = nodes[2] ,cn = nodes[3]  ; nodes.push( bo ); links.push( {source: ck , target: cn },{source: by , target: ck },{source: by , target: cn },{source: by , target: ck },{source: by , target: cn },{source: bo , target: ck },{source: bo , target: by },{source: bo , target: cn },{source: bo , target: by },{source: ai , target: ck },{source: ai , target: by },{source: ai , target: cn },{source: ai , target: by },{source: ai , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.795918367346938776%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ck','cn','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aa ai by */ var  aa = {id: 'aa', name:'ahasverus'},ai = nodes[0] ,by = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: ai },{source: aa , target: by },{source: ai , target: by } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.83673469387755102%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* aa ai ap av by */ var  aa = nodes[0] ,ai = nodes[1] ,ap = {id: 'ap', name:'olympie'},av = {id: 'av', name:'lysander'},by = nodes[2]  ; nodes.push( ap,av ); links.push( {source: av , target: by },{source: ap , target: av },{source: ap , target: by },{source: ai , target: av },{source: ai , target: ap },{source: ai , target: by },{source: aa , target: av },{source: aa , target: ap },{source: aa , target: ai },{source: aa , target: by } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.877551020408163265%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ai','aa','by' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ap av */ var  ap = nodes[0] ,av = nodes[1]  ; /* nodes.push(); */ links.push( {source: ap , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.91836734693877551%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ap av aw */ var  ap = nodes[0] ,av = nodes[1] ,aw = {id: 'aw', name:'vieren'} ; nodes.push( aw ); links.push( {source: av , target: aw },{source: ap , target: aw },{source: ap , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.959183673469387755%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ag ap av aw cp cq cr cs ct cw cx */ var  ag = {id: 'ag', name:'pamphilio'},ap = nodes[0] ,av = nodes[1] ,aw = nodes[2] ,cp = {id: 'cp', name:'ein_häscher'},cq = {id: 'cq', name:'der_andre'},cr = {id: 'cr', name:'ein_dritter'},cs = {id: 'cs', name:'nathanael'},ct = {id: 'ct', name:'chor'},cw = {id: 'cw', name:'viele_iii14'},cx = {id: 'cx', name:'einer_iii14'} ; nodes.push( ag,cp,cq,cr,cs,ct,cw,cx ); links.push( {source: ag , target: av },{source: ag , target: cp },{source: ag , target: cq },{source: ag , target: cr },{source: ag , target: cq },{source: ag , target: cs },{source: ag , target: cw },{source: ag , target: cx },{source: ag , target: aw },{source: ag , target: ap },{source: ag , target: ct },{source: ag , target: ct },{source: av , target: cp },{source: av , target: cq },{source: av , target: cr },{source: av , target: cq },{source: av , target: cs },{source: av , target: cw },{source: av , target: cx },{source: av , target: aw },{source: av , target: ct },{source: av , target: ct },{source: cp , target: cq },{source: cp , target: cr },{source: cp , target: cq },{source: cp , target: cs },{source: cp , target: cw },{source: cp , target: cx },{source: cp , target: ct },{source: cp , target: ct },{source: cq , target: cr },{source: cq , target: cs },{source: cq , target: cw },{source: cq , target: cx },{source: cq , target: ct },{source: cq , target: ct },{source: cr , target: cs },{source: cr , target: cw },{source: cr , target: cx },{source: cr , target: ct },{source: cr , target: ct },{source: cq , target: cr },{source: cq , target: cs },{source: cq , target: cw },{source: cq , target: cx },{source: cq , target: ct },{source: cq , target: ct },{source: cs , target: cw },{source: cs , target: cx },{source: cs , target: ct },{source: cs , target: ct },{source: cw , target: cx },{source: aw , target: cp },{source: aw , target: cq },{source: aw , target: cr },{source: aw , target: cq },{source: aw , target: cs },{source: aw , target: cw },{source: aw , target: cx },{source: aw , target: ct },{source: aw , target: ct },{source: ap , target: av },{source: ap , target: cp },{source: ap , target: cq },{source: ap , target: cr },{source: ap , target: cq },{source: ap , target: cs },{source: ap , target: cw },{source: ap , target: cx },{source: ap , target: aw },{source: ap , target: ct },{source: ap , target: ct },{source: ct , target: cw },{source: ct , target: cx },{source: ct , target: cw },{source: ct , target: cx } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierterzehnter Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 240000);
