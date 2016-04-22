setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'faust'},ab = {id: 'ab', name:'stimme_zur_linken'},ac = {id: 'ac', name:'stimme_zur_rechten'},ad = {id: 'ad', name:'mehrere_stimmen_zur_linken'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = {id: 'ae', name:'wagner'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'casperle'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'wagner'},af = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ag ah ai aj ak al am an ao */ var  aa = {id: 'aa', name:'faust'},ag = {id: 'ag', name:'der_erste_geist'},ah = {id: 'ah', name:'der_zweite_geist'},ai = {id: 'ai', name:'der_dritte_geist'},aj = {id: 'aj', name:'der_vierte_geist'},ak = {id: 'ak', name:'der_fünfte_geist'},al = {id: 'al', name:'der_sechste_geist'},am = {id: 'am', name:'der_siebende_geist'},an = {id: 'an', name:'achter_geist'},ao = {id: 'ao', name:'schutzgeist'} ; nodes.push( aa,ag,ah,ai,aj,ak,al,am,an,ao ); links.push( {source: aa , target: ag },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: al },{source: aa , target: am },{source: aa , target: am },{source: aa , target: an },{source: aa , target: an },{source: aa , target: an },{source: aa , target: ao },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: al },{source: ag , target: am },{source: ag , target: am },{source: ag , target: an },{source: ag , target: an },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: al },{source: ag , target: am },{source: ag , target: am },{source: ag , target: an },{source: ag , target: an },{source: ag , target: an },{source: ag , target: ao },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: al },{source: ah , target: am },{source: ah , target: am },{source: ah , target: an },{source: ah , target: an },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: al },{source: ah , target: am },{source: ah , target: am },{source: ah , target: an },{source: ah , target: an },{source: ah , target: an },{source: ah , target: ao },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: al },{source: ai , target: am },{source: ai , target: am },{source: ai , target: an },{source: ai , target: an },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: al },{source: ai , target: am },{source: ai , target: am },{source: ai , target: an },{source: ai , target: an },{source: ai , target: an },{source: ai , target: ao },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: aj , target: an },{source: aj , target: an },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: aj , target: an },{source: aj , target: an },{source: aj , target: an },{source: aj , target: ao },{source: ak , target: al },{source: ak , target: al },{source: ak , target: am },{source: ak , target: am },{source: ak , target: an },{source: ak , target: an },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: al },{source: ak , target: al },{source: ak , target: am },{source: ak , target: am },{source: ak , target: an },{source: ak , target: an },{source: ak , target: an },{source: ak , target: ao },{source: al , target: am },{source: al , target: am },{source: al , target: an },{source: al , target: an },{source: al , target: an },{source: al , target: ao },{source: al , target: am },{source: al , target: am },{source: al , target: an },{source: al , target: an },{source: al , target: an },{source: al , target: ao },{source: am , target: an },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: am , target: an },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: an , target: ao },{source: an , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af ag ah ai aj ak al am ap aq */ var  af = {id: 'af', name:'casperle'},ag = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = nodes[5] ,am = nodes[6] ,ap = {id: 'ap', name:'teufelchen'},aq = {id: 'aq', name:'xerxes'} ; nodes.push( af,ap,aq ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: ag },{source: af , target: ai },{source: af , target: ap },{source: af , target: aq },{source: af , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ak },{source: ak , target: al },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: aq },{source: al , target: am },{source: al , target: ap },{source: al , target: aq },{source: am , target: ap },{source: am , target: aq },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ak },{source: ap , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','ah','ai','aj','ak','al','am','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* af ar */ var  af = nodes[0] ,ar = {id: 'ar', name:'don_carlos'} ; nodes.push( ar ); links.push( {source: af , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* af ar as at */ var  af = nodes[0] ,ar = nodes[1] ,as = {id: 'as', name:'herzog'},at = {id: 'at', name:'herzogin'} ; nodes.push( as,at ); links.push( {source: as , target: at },{source: ar , target: as },{source: ar , target: at },{source: af , target: as },{source: af , target: at },{source: af , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa an ar as at */ var  aa = {id: 'aa', name:'faust'},an = {id: 'an', name:'achter_geist'},ar = nodes[0] ,as = nodes[1] ,at = nodes[2]  ; nodes.push( aa,an ); links.push( {source: an , target: at },{source: an , target: as },{source: an , target: ar },{source: aa , target: an },{source: aa , target: at },{source: aa , target: as },{source: aa , target: ar },{source: as , target: at },{source: ar , target: at },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'an','at','aa','as','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* af ak au av */ var  af = {id: 'af', name:'casperle'},ak = {id: 'ak', name:'der_fünfte_geist'},au = {id: 'au', name:'das_frauenzimmer'},av = {id: 'av', name:'altes_weib'} ; nodes.push( af,ak,au,av ); links.push( {source: af , target: ak },{source: af , target: au },{source: af , target: av },{source: ak , target: au },{source: ak , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'af','ak','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa an */ var  aa = {id: 'aa', name:'faust'},an = {id: 'an', name:'achter_geist'} ; nodes.push( aa,an ); links.push( {source: aa , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa an aw */ var  aa = nodes[0] ,an = nodes[1] ,aw = {id: 'aw', name:'dumpfe_stimme'} ; nodes.push( aw ); links.push( {source: an , target: aw },{source: aa , target: an },{source: aa , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'an','aa','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'casperle'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa aw */ var  aa = {id: 'aa', name:'faust'},aw = {id: 'aw', name:'dumpfe_stimme'} ; nodes.push( aa,aw ); links.push( {source: aa , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'casperle'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa an aw */ var  aa = nodes[0] ,an = {id: 'an', name:'achter_geist'},aw = {id: 'aw', name:'dumpfe_stimme'} ; nodes.push( an,aw ); links.push( {source: aa , target: aw },{source: aa , target: an },{source: an , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aa','aw','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'casperle'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa aw */ var  aa = {id: 'aa', name:'faust'},aw = {id: 'aw', name:'dumpfe_stimme'} ; nodes.push( aa,aw ); links.push( {source: aa , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af ax */ var  af = {id: 'af', name:'casperle'},ax = {id: 'ax', name:'gretl'} ; nodes.push( af,ax ); links.push( {source: af , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ae ag ah ai aj ak al am an ay az */ var  aa = {id: 'aa', name:'faust'},ae = {id: 'ae', name:'wagner'},ag = {id: 'ag', name:'der_erste_geist'},ah = {id: 'ah', name:'der_zweite_geist'},ai = {id: 'ai', name:'der_dritte_geist'},aj = {id: 'aj', name:'der_vierte_geist'},ak = {id: 'ak', name:'der_fünfte_geist'},al = {id: 'al', name:'der_sechste_geist'},am = {id: 'am', name:'der_siebende_geist'},an = {id: 'an', name:'achter_geist'},ay = {id: 'ay', name:'kasper'},az = {id: 'az', name:'teufel'} ; nodes.push( aa,ae,ag,ah,ai,aj,ak,al,am,an,ay,az ); links.push( {source: ay , target: az },{source: ae , target: ay },{source: ae , target: ay },{source: ae , target: az },{source: ae , target: an },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ay , target: az },{source: an , target: ay },{source: an , target: ay },{source: an , target: az },{source: aa , target: ay },{source: aa , target: ae },{source: aa , target: ay },{source: aa , target: az },{source: aa , target: an },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: al },{source: aa , target: am },{source: ag , target: ay },{source: ag , target: ay },{source: ag , target: az },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ah , target: ay },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ai , target: ay },{source: ai , target: ay },{source: ai , target: az },{source: ai , target: an },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ay },{source: aj , target: ay },{source: aj , target: az },{source: aj , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: ay },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: al , target: ay },{source: al , target: ay },{source: al , target: az },{source: al , target: an },{source: al , target: am },{source: am , target: ay },{source: am , target: ay },{source: am , target: az },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Anhang'; var scene = document.getElementById('scene');scene.innerHTML = 'Anhang.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 95000);
