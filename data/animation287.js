setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'marie'},ab = {id: 'ab', name:'falkenstein'},ac = {id: 'ac', name:'franz'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'diener'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ae = {id: 'ae', name:'ulrich'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','ac','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'karl'},ag = {id: 'ag', name:'renner'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ag */ var  ac = {id: 'ac', name:'franz'},ag = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = {id: 'ah', name:'erzbischof'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ai aj ak */ var  ac = {id: 'ac', name:'franz'},ai = {id: 'ai', name:'pfalzgraf_ludwig'},aj = {id: 'aj', name:'richard_von_trier'},ak = {id: 'ak', name:'philipp_von_hessen'} ; nodes.push( ac,ai,aj,ak ); links.push( {source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ag ai aj ak */ var  ac = nodes[0] ,ag = {id: 'ag', name:'renner'},ai = nodes[1] ,aj = nodes[2] ,ak = nodes[3]  ; nodes.push( ag ); links.push( {source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ai },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','aj','ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = {id: 'af', name:'karl'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ah al */ var  ah = {id: 'ah', name:'erzbischof'},al = {id: 'al', name:'legat'} ; nodes.push( ah,al ); links.push( {source: ah , target: al },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'ulrich'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'marie'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae am */ var  ae = nodes[0] ,am = {id: 'am', name:'oecolampadius'} ; nodes.push( am ); links.push( {source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa am */ var  aa = {id: 'aa', name:'marie'},am = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'franz'},ae = {id: 'ae', name:'ulrich'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'marie'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ac an ao ap aq ar as at */ var  ab = {id: 'ab', name:'falkenstein'},ac = {id: 'ac', name:'franz'},an = {id: 'an', name:'dhan'},ao = {id: 'ao', name:'dalberg'},ap = {id: 'ap', name:'rüdesheim'},aq = {id: 'aq', name:'schwarzenberg'},ar = {id: 'ar', name:'türkheim'},as = {id: 'as', name:'fürstenberg'},at = {id: 'at', name:'lorch'} ; nodes.push( ab,ac,an,ao,ap,aq,ar,as,at ); links.push( {source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ar , target: as },{source: ar , target: at },{source: ab , target: ac },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'an','ao','ap','aq','ar','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ai au av */ var  ai = {id: 'ai', name:'pfalzgraf_ludwig'},au = {id: 'au', name:'geheimschreiber'},av = {id: 'av', name:'ritter'} ; nodes.push( ai,au,av ); links.push( {source: au , target: av },{source: ai , target: au },{source: ai , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'au','av','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* as aw ax ay */ var  as = {id: 'as', name:'fürstenberg'},aw = {id: 'aw', name:'eitelfritz'},ax = {id: 'ax', name:'hartmuth'},ay = {id: 'ay', name:'frowin'} ; nodes.push( as,aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ac as aw az */ var  ac = {id: 'ac', name:'franz'},as = nodes[0] ,aw = nodes[1] ,az = {id: 'az', name:'ein_lanzknecht'} ; nodes.push( ac,az ); links.push( {source: ac , target: as },{source: ac , target: aw },{source: ac , target: az },{source: as , target: aw },{source: as , target: az },{source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'as','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac aw bb bc bd */ var  ac = nodes[0] ,aw = nodes[1] ,bb = {id: 'bb', name:'herold'},bc = {id: 'bc', name:'jörg'},bd = {id: 'bd', name:'sombreff'} ; nodes.push( bb,bc,bd ); links.push( {source: bb , target: bc },{source: bb , target: bd },{source: ac , target: bb },{source: ac , target: aw },{source: ac , target: bc },{source: ac , target: bd },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'bb','ac','aw','bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* be bf bg bh bi bj bk bl */ var  be = {id: 'be', name:'erste_frau'},bf = {id: 'bf', name:'zweite_frau'},bg = {id: 'bg', name:'dritte_frau'},bh = {id: 'bh', name:'erster_bürger'},bi = {id: 'bi', name:'zweiter_bürger'},bj = {id: 'bj', name:'dritter_bürger'},bk = {id: 'bk', name:'vierter_bürger'},bl = {id: 'bl', name:'mehrere_stimmen'} ; nodes.push( be,bf,bg,bh,bi,bj,bk,bl ); links.push( {source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: be , target: bi },{source: be , target: bj },{source: be , target: bk },{source: be , target: bl },{source: be , target: bl },{source: be , target: bl },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bk },{source: bf , target: bl },{source: bf , target: bl },{source: bf , target: bl },{source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bl },{source: bg , target: bl },{source: bg , target: bl },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bh , target: bl },{source: bh , target: bl },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bl },{source: bi , target: bl },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bl },{source: bj , target: bl },{source: bk , target: bl },{source: bk , target: bl },{source: bk , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'be','bf','bg','bh','bi','bj','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aj bk */ var  aj = {id: 'aj', name:'richard_von_trier'},bk = nodes[0]  ; nodes.push( aj ); links.push( {source: aj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* aj bj bm bn bo bp */ var  aj = nodes[0] ,bj = {id: 'bj', name:'dritter_bürger'},bm = {id: 'bm', name:'hauptmann'},bn = {id: 'bn', name:'lanzknecht_sickingen_4_7'},bo = {id: 'bo', name:'ein_söldner'},bp = {id: 'bp', name:'choral'} ; nodes.push( bj,bm,bn,bo,bp ); links.push( {source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bp },{source: aj , target: bm },{source: aj , target: bn },{source: aj , target: bo },{source: aj , target: bj },{source: aj , target: bp },{source: bn , target: bo },{source: bn , target: bp },{source: bo , target: bp },{source: bj , target: bm },{source: bj , target: bn },{source: bj , target: bo },{source: bj , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bm','aj','bn','bo','bj','bp' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ae bd bq br */ var  ae = {id: 'ae', name:'ulrich'},bd = {id: 'bd', name:'sombreff'},bq = {id: 'bq', name:'erster_lanzknecht'},br = {id: 'br', name:'zweiter_landsknecht'} ; nodes.push( ae,bd,bq,br ); links.push( {source: bd , target: bq },{source: bd , target: br },{source: bq , target: br },{source: ae , target: bd },{source: ae , target: bq },{source: ae , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bd','bq','br','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac as aw az bc bs */ var  ac = {id: 'ac', name:'franz'},as = {id: 'as', name:'fürstenberg'},aw = {id: 'aw', name:'eitelfritz'},az = {id: 'az', name:'ein_lanzknecht'},bc = {id: 'bc', name:'jörg'},bs = {id: 'bs', name:'frowin_von_hutten'} ; nodes.push( ac,as,aw,az,bc,bs ); links.push( {source: ac , target: aw },{source: ac , target: as },{source: ac , target: bs },{source: ac , target: bc },{source: ac , target: bc },{source: ac , target: az },{source: aw , target: bs },{source: aw , target: bc },{source: aw , target: bc },{source: aw , target: az },{source: as , target: aw },{source: as , target: bs },{source: as , target: bc },{source: as , target: bc },{source: as , target: az },{source: bc , target: bs },{source: bc , target: bs },{source: az , target: bs },{source: az , target: bc },{source: az , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bs','bc','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac as aw ay ba bt bu bv bw */ var  ac = nodes[0] ,as = nodes[1] ,aw = nodes[2] ,ay = {id: 'ay', name:'frowin'},ba = {id: 'ba', name:'lanzknecht_10'},bt = {id: 'bt', name:'erster_bote'},bu = {id: 'bu', name:'zweiter_bote'},bv = {id: 'bv', name:'reisiger'},bw = {id: 'bw', name:'kurt'} ; nodes.push( ay,ba,bt,bu,bv,bw ); links.push( {source: ba , target: bt },{source: ba , target: bu },{source: ba , target: bv },{source: ba , target: bw },{source: bt , target: bu },{source: bt , target: bv },{source: bt , target: bw },{source: bu , target: bv },{source: bu , target: bw },{source: ac , target: ba },{source: ac , target: bt },{source: ac , target: bu },{source: ac , target: ay },{source: ac , target: bv },{source: ac , target: bw },{source: ac , target: as },{source: ac , target: aw },{source: ay , target: ba },{source: ay , target: bt },{source: ay , target: bu },{source: ay , target: bv },{source: ay , target: bw },{source: bv , target: bw },{source: as , target: ba },{source: as , target: bt },{source: as , target: bu },{source: as , target: ay },{source: as , target: bv },{source: as , target: bw },{source: as , target: aw },{source: aw , target: ba },{source: aw , target: bt },{source: aw , target: bu },{source: aw , target: ay },{source: aw , target: bv },{source: aw , target: bw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ba','bt','bu','ay','bv','bw','as','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ab ac ak */ var  aa = {id: 'aa', name:'marie'},ab = {id: 'ab', name:'falkenstein'},ac = nodes[0] ,ak = {id: 'ak', name:'philipp_von_hessen'} ; nodes.push( aa,ab,ak ); links.push( {source: ac , target: ak },{source: ab , target: ak },{source: ab , target: ac },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* bx by bz ca cb cc cd ce */ var  bx = {id: 'bx', name:'wirt'},by = {id: 'by', name:'jos_fritz'},bz = {id: 'bz', name:'erster_bauer'},ca = {id: 'ca', name:'zweiter_bauer'},cb = {id: 'cb', name:'dritter_bauer'},cc = {id: 'cc', name:'ein_bauer'},cd = {id: 'cd', name:'vierter_bauer'},ce = {id: 'ce', name:'mehre_bauern'} ; nodes.push( bx,by,bz,ca,cb,cc,cd,ce ); links.push( {source: bx , target: by },{source: bx , target: bz },{source: bx , target: ca },{source: bx , target: cb },{source: bx , target: cc },{source: bx , target: cd },{source: bx , target: ce },{source: bx , target: ce },{source: by , target: bz },{source: by , target: ca },{source: by , target: cb },{source: by , target: cc },{source: by , target: cd },{source: by , target: ce },{source: by , target: ce },{source: bz , target: ca },{source: bz , target: cb },{source: bz , target: cc },{source: bz , target: cd },{source: bz , target: ce },{source: bz , target: ce },{source: ca , target: cb },{source: ca , target: cc },{source: ca , target: cd },{source: ca , target: ce },{source: ca , target: ce },{source: cb , target: cc },{source: cb , target: cd },{source: cb , target: ce },{source: cb , target: ce },{source: cc , target: cd },{source: cc , target: ce },{source: cc , target: ce },{source: cd , target: ce },{source: cd , target: ce } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'cc','cd' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ae bl bx by bz ca cb ce */ var  ae = {id: 'ae', name:'ulrich'},bl = {id: 'bl', name:'mehrere_stimmen'},bx = nodes[0] ,by = nodes[1] ,bz = nodes[2] ,ca = nodes[3] ,cb = nodes[4] ,ce = nodes[5]  ; nodes.push( ae,bl ); links.push( {source: ae , target: by },{source: ae , target: bx },{source: ae , target: ca },{source: ae , target: bz },{source: ae , target: cb },{source: ae , target: ce },{source: ae , target: bl },{source: by , target: ca },{source: by , target: bz },{source: by , target: cb },{source: by , target: ce },{source: bx , target: by },{source: bx , target: ca },{source: bx , target: bz },{source: bx , target: cb },{source: bx , target: ce },{source: ca , target: cb },{source: ca , target: ce },{source: bz , target: ca },{source: bz , target: cb },{source: bz , target: ce },{source: cb , target: ce },{source: bl , target: by },{source: bl , target: bx },{source: bl , target: ca },{source: bl , target: bz },{source: bl , target: cb },{source: bl , target: ce } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ae','by','bx','ca','bz','cb','ce','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'franz'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ac cf */ var  ab = {id: 'ab', name:'falkenstein'},ac = nodes[0] ,cf = {id: 'cf', name:'ein_knappe'} ; nodes.push( ab,cf ); links.push( {source: ab , target: ac },{source: ab , target: cf },{source: ac , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'cf' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab ac ak */ var  aa = {id: 'aa', name:'marie'},ab = nodes[0] ,ac = nodes[1] ,ak = {id: 'ak', name:'philipp_von_hessen'} ; nodes.push( aa,ak ); links.push( {source: ac , target: ak },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ak },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ak','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab cg */ var  aa = nodes[0] ,ab = nodes[1] ,cg = {id: 'cg', name:'mari'} ; nodes.push( cg ); links.push( {source: ab , target: cg },{source: aa , target: ab },{source: aa , target: cg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ab','cg' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ac ak bb ch */ var  aa = nodes[0] ,ac = {id: 'ac', name:'franz'},ak = {id: 'ak', name:'philipp_von_hessen'},bb = {id: 'bb', name:'herold'},ch = {id: 'ch', name:'arzt'} ; nodes.push( ac,ak,bb,ch ); links.push( {source: ac , target: ak },{source: ac , target: ch },{source: ac , target: bb },{source: aa , target: ac },{source: aa , target: ak },{source: aa , target: ch },{source: aa , target: bb },{source: ak , target: ch },{source: ak , target: bb },{source: bb , target: ch } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ch','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ab ac ai aj ak */ var  aa = nodes[0] ,ab = {id: 'ab', name:'falkenstein'},ac = nodes[1] ,ai = {id: 'ai', name:'pfalzgraf_ludwig'},aj = {id: 'aj', name:'richard_von_trier'},ak = nodes[2]  ; nodes.push( ab,ai,aj ); links.push( {source: ai , target: ak },{source: ai , target: aj },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ak },{source: ab , target: aj },{source: ac , target: ai },{source: ac , target: ak },{source: ac , target: aj },{source: aj , target: ak },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ak },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '0%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ai','ab','ak','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa ac ae */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'ulrich'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: aa , target: ae },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 190000);
