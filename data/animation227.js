setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'thibaut'},ab = {id: 'ab', name:'louison'},ac = {id: 'ac', name:'claude_marie'},ad = {id: 'ad', name:'margot'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Prolog'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.666666666666666667%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ae */ var  aa = nodes[0] ,ae = {id: 'ae', name:'raimond'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Prolog'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.333333333333333333%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ae af ag */ var  aa = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'bertrand'},ag = {id: 'ag', name:'johanna'} ; nodes.push( af,ag ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: af , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Prolog'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','af','aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'dunois'},ai = {id: 'ai', name:'du_chatel'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.666666666666666667%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ah ai aj ak */ var  ah = nodes[0] ,ai = nodes[1] ,aj = {id: 'aj', name:'könig'},ak = {id: 'ak', name:'edelknecht'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ah ai aj al */ var  ah = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,al = {id: 'al', name:'ratsherr'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: ai },{source: ai , target: aj },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ah ai aj am */ var  ah = nodes[0] ,ai = nodes[1] ,aj = nodes[2] ,am = {id: 'am', name:'sorel'} ; nodes.push( am ); links.push( {source: aj , target: am },{source: ai , target: aj },{source: ai , target: am },{source: ah , target: aj },{source: ah , target: am },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.666666666666666667%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ah aj al am an */ var  ah = nodes[0] ,aj = nodes[1] ,al = {id: 'al', name:'ratsherr'},am = nodes[2] ,an = {id: 'an', name:'la_hire'} ; nodes.push( al,an ); links.push( {source: aj , target: an },{source: aj , target: am },{source: aj , target: al },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: am },{source: ah , target: al },{source: am , target: an },{source: al , target: an },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.333333333333333333%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'an','ah','am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ai aj */ var  ai = {id: 'ai', name:'du_chatel'},aj = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aj am */ var  aj = nodes[0] ,am = {id: 'am', name:'sorel'} ; nodes.push( am ); links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aj am an */ var  aj = nodes[0] ,am = nodes[1] ,an = {id: 'an', name:'la_hire'} ; nodes.push( an ); links.push( {source: am , target: an },{source: aj , target: am },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.333333333333333333%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aj am ao ap aq */ var  aj = nodes[0] ,am = nodes[1] ,ao = {id: 'ao', name:'erzbischof'},ap = {id: 'ap', name:'raoul'},aq = {id: 'aq', name:'viele_stimmen'} ; nodes.push( ao,ap,aq ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: am },{source: aj , target: aq },{source: ap , target: aq },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ap','am','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ag ah aj ak an ao */ var  ag = {id: 'ag', name:'johanna'},ah = {id: 'ah', name:'dunois'},aj = nodes[0] ,ak = {id: 'ak', name:'edelknecht'},an = {id: 'an', name:'la_hire'},ao = nodes[1]  ; nodes.push( ag,ah,ak,an ); links.push( {source: ah , target: aj },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ak },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ao },{source: ag , target: an },{source: ag , target: ak },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: ak },{source: an , target: ao },{source: ak , target: ao },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.666666666666666667%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ao','an','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ah aj ar */ var  ag = nodes[0] ,ah = nodes[1] ,aj = nodes[2] ,ar = {id: 'ar', name:'herold'} ; nodes.push( ar ); links.push( {source: aj , target: ar },{source: ah , target: aj },{source: ah , target: ar },{source: ag , target: aj },{source: ag , target: ar },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.333333333333333333%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aj','ar','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* as at au */ var  as = {id: 'as', name:'talbot'},at = {id: 'at', name:'lionel'},au = {id: 'au', name:'burgund'} ; nodes.push( as,at,au ); links.push( {source: as , target: at },{source: as , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* as at au av */ var  as = nodes[0] ,at = nodes[1] ,au = nodes[2] ,av = {id: 'av', name:'isabeau'} ; nodes.push( av ); links.push( {source: at , target: av },{source: at , target: au },{source: as , target: av },{source: as , target: at },{source: as , target: au },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.666666666666666667%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* as at au */ var  as = nodes[0] ,at = nodes[1] ,au = nodes[2]  ; /* nodes.push(); */ links.push( {source: as , target: at },{source: as , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.333333333333333333%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'as','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ag ah an aw bf */ var  ag = {id: 'ag', name:'johanna'},ah = {id: 'ah', name:'dunois'},an = {id: 'an', name:'la_hire'},aw = {id: 'aw', name:'schildwache'},bf = {id: 'bf', name:'ritter'} ; nodes.push( ag,ah,an,aw,bf ); links.push( {source: ag , target: aw },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: bf },{source: aw , target: bf },{source: ah , target: aw },{source: ah , target: an },{source: ah , target: bf },{source: an , target: aw },{source: an , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ag','aw','ah','an','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* as ax ay az ba bb bc */ var  as = {id: 'as', name:'talbot'},ax = {id: 'ax', name:'erster'},ay = {id: 'ay', name:'zweiter'},az = {id: 'az', name:'dritter'},ba = {id: 'ba', name:'vierter'},bb = {id: 'bb', name:'fünfter'},bc = {id: 'bc', name:'soldat_2.5'} ; nodes.push( as,ax,ay,az,ba,bb,bc ); links.push( {source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: bb , target: bc },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: bb },{source: as , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.666666666666666667%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ax','ay','az','ba','bb','as','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* be */ var  be = {id: 'be', name:'montgomery'} ; nodes.push( be ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ag be */ var  ag = {id: 'ag', name:'johanna'},be = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ag bf */ var  ag = nodes[0] ,bf = {id: 'bf', name:'ritter'} ; nodes.push( bf ); links.push( {source: ag , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.666666666666666667%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ag ah an au */ var  ag = nodes[0] ,ah = {id: 'ah', name:'dunois'},an = {id: 'an', name:'la_hire'},au = {id: 'au', name:'burgund'} ; nodes.push( ah,an,au ); links.push( {source: ah , target: an },{source: ah , target: au },{source: an , target: au },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.333333333333333333%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'au','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ah an */ var  ah = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah aj ak am ao bg */ var  ah = nodes[0] ,aj = {id: 'aj', name:'könig'},ak = {id: 'ak', name:'edelknecht'},am = {id: 'am', name:'sorel'},ao = {id: 'ao', name:'erzbischof'},bg = {id: 'bg', name:'chatillon'} ; nodes.push( aj,ak,am,ao,bg ); links.push( {source: aj , target: bg },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: ao },{source: am , target: bg },{source: am , target: ao },{source: ak , target: bg },{source: ak , target: am },{source: ak , target: ao },{source: ah , target: aj },{source: ah , target: bg },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: ao },{source: ao , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bg','ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aj am ao au */ var  aj = nodes[0] ,am = nodes[1] ,ao = nodes[2] ,au = {id: 'au', name:'burgund'} ; nodes.push( au ); links.push( {source: aj , target: au },{source: aj , target: am },{source: aj , target: ao },{source: am , target: au },{source: am , target: ao },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.333333333333333333%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ag ah aj am an ao au */ var  ag = {id: 'ag', name:'johanna'},ah = {id: 'ah', name:'dunois'},aj = nodes[0] ,am = nodes[1] ,an = {id: 'an', name:'la_hire'},ao = nodes[2] ,au = nodes[3]  ; nodes.push( ag,ah,an ); links.push( {source: aj , target: au },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: ag , target: aj },{source: ag , target: au },{source: ag , target: am },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: ao },{source: am , target: au },{source: am , target: an },{source: am , target: ao },{source: ah , target: aj },{source: ah , target: au },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: an , target: au },{source: an , target: ao },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ag ah aj au bf bh */ var  ag = nodes[0] ,ah = nodes[1] ,aj = nodes[2] ,au = nodes[3] ,bf = {id: 'bf', name:'ritter'},bh = {id: 'bh', name:'agnes'} ; nodes.push( bf,bh ); links.push( {source: aj , target: bf },{source: aj , target: au },{source: aj , target: bh },{source: bf , target: bh },{source: ag , target: aj },{source: ag , target: bf },{source: ag , target: ah },{source: ag , target: au },{source: ag , target: bh },{source: ah , target: aj },{source: ah , target: bf },{source: ah , target: au },{source: ah , target: bh },{source: au , target: bf },{source: au , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.666666666666666667%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aj','bf','ag','ah','au','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* as at bi */ var  as = {id: 'as', name:'talbot'},at = {id: 'at', name:'lionel'},bi = {id: 'bi', name:'fastolf'} ; nodes.push( as,at,bi ); links.push( {source: as , target: bi },{source: as , target: at },{source: at , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.333333333333333333%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ah aj au bi */ var  ah = {id: 'ah', name:'dunois'},aj = {id: 'aj', name:'könig'},au = {id: 'au', name:'burgund'},bi = nodes[0]  ; nodes.push( ah,aj,au ); links.push( {source: au , target: bi },{source: ah , target: au },{source: ah , target: aj },{source: ah , target: bi },{source: aj , target: au },{source: aj , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ah aj an au */ var  ah = nodes[0] ,aj = nodes[1] ,an = {id: 'an', name:'la_hire'},au = nodes[2]  ; nodes.push( an ); links.push( {source: ah , target: an },{source: ah , target: au },{source: ah , target: aj },{source: an , target: au },{source: aj , target: an },{source: aj , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.666666666666666667%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ah','an','au','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ag bj */ var  ag = {id: 'ag', name:'johanna'},bj = {id: 'bj', name:'schwarzer_ritter'} ; nodes.push( ag,bj ); links.push( {source: ag , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.333333333333333333%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ag at */ var  ag = nodes[0] ,at = {id: 'at', name:'lionel'} ; nodes.push( at ); links.push( {source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ag ah an */ var  ag = nodes[0] ,ah = {id: 'ah', name:'dunois'},an = {id: 'an', name:'la_hire'} ; nodes.push( ah,an ); links.push( {source: ah , target: an },{source: ag , target: an },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.666666666666666667%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'an','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ag am */ var  ag = nodes[0] ,am = {id: 'am', name:'sorel'} ; nodes.push( am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ag ah ai am an */ var  ag = nodes[0] ,ah = {id: 'ah', name:'dunois'},ai = {id: 'ai', name:'du_chatel'},am = nodes[1] ,an = {id: 'an', name:'la_hire'} ; nodes.push( ah,ai,an ); links.push( {source: ah , target: an },{source: ah , target: am },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: am },{source: ag , target: ai },{source: am , target: an },{source: ai , target: an },{source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.666666666666666667%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ah','an','ag','am','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ac af bk */ var  ac = {id: 'ac', name:'claude_marie'},af = {id: 'af', name:'bertrand'},bk = {id: 'bk', name:'etienne'} ; nodes.push( ac,af,bk ); links.push( {source: af , target: bk },{source: ac , target: af },{source: ac , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.333333333333333333%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'bk','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ab ad af */ var  ab = {id: 'ab', name:'louison'},ad = {id: 'ad', name:'margot'},af = nodes[0]  ; nodes.push( ab,ad ); links.push( {source: ab , target: ad },{source: ab , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ab ac ad af */ var  ab = nodes[0] ,ac = {id: 'ac', name:'claude_marie'},ad = nodes[1] ,af = nodes[2]  ; nodes.push( ac ); links.push( {source: ad , target: af },{source: ac , target: ad },{source: ac , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ad','ac','ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'thibaut'},ae = {id: 'ae', name:'raimond'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.333333333333333333%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ab ac ad af ag */ var  ab = {id: 'ab', name:'louison'},ac = {id: 'ac', name:'claude_marie'},ad = {id: 'ad', name:'margot'},af = {id: 'af', name:'bertrand'},ag = {id: 'ag', name:'johanna'} ; nodes.push( ab,ac,ad,af,ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: af , target: ag },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ad','ab','af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ag ah ai aj am an ao au bl */ var  ag = nodes[0] ,ah = {id: 'ah', name:'dunois'},ai = {id: 'ai', name:'du_chatel'},aj = {id: 'aj', name:'könig'},am = {id: 'am', name:'sorel'},an = {id: 'an', name:'la_hire'},ao = {id: 'ao', name:'erzbischof'},au = {id: 'au', name:'burgund'},bl = {id: 'bl', name:'volk'} ; nodes.push( ah,ai,aj,am,an,ao,au,bl ); links.push( {source: am , target: bl },{source: am , target: ao },{source: am , target: au },{source: am , target: an },{source: ao , target: bl },{source: ao , target: au },{source: au , target: bl },{source: ah , target: bl },{source: ah , target: am },{source: ah , target: ao },{source: ah , target: au },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: aj },{source: an , target: bl },{source: an , target: ao },{source: an , target: au },{source: ai , target: bl },{source: ai , target: am },{source: ai , target: ao },{source: ai , target: au },{source: ai , target: an },{source: ai , target: aj },{source: aj , target: bl },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: au },{source: aj , target: an },{source: ag , target: bl },{source: ag , target: am },{source: ag , target: ao },{source: ag , target: au },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.666666666666666667%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'bl','aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aa ah ai am an ao au bm */ var  aa = {id: 'aa', name:'thibaut'},ah = nodes[0] ,ai = nodes[1] ,am = nodes[2] ,an = nodes[3] ,ao = nodes[4] ,au = nodes[5] ,bm = {id: 'bm', name:'mehrere_stimmen'} ; nodes.push( aa,bm ); links.push( {source: aa , target: bm },{source: aa , target: au },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: au , target: bm },{source: ai , target: bm },{source: ai , target: au },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ah , target: bm },{source: ah , target: au },{source: ah , target: ai },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: am , target: bm },{source: am , target: au },{source: am , target: an },{source: am , target: ao },{source: an , target: bm },{source: an , target: au },{source: an , target: ao },{source: ao , target: bm },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.333333333333333333%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'bm','aa','au','ai','am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ae ai */ var  ae = {id: 'ae', name:'raimond'},ai = {id: 'ai', name:'du_chatel'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.666666666666666667%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* bn bo */ var  bn = {id: 'bn', name:'köhler'},bo = {id: 'bo', name:'köhlerweib'} ; nodes.push( bn,bo ); links.push( {source: bn , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.333333333333333333%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ae bn bo */ var  ae = {id: 'ae', name:'raimond'},bn = nodes[0] ,bo = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: bn },{source: ae , target: bo },{source: bn , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* bn bo bp */ var  bn = nodes[0] ,bo = nodes[1] ,bp = {id: 'bp', name:'köhlerbub'} ; nodes.push( bp ); links.push( {source: bo , target: bp },{source: bn , target: bo },{source: bn , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.666666666666666667%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'bo','bn','bp' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'raimond'},ag = {id: 'ag', name:'johanna'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ae ag av bq br */ var  ae = nodes[0] ,ag = nodes[1] ,av = {id: 'av', name:'isabeau'},bq = {id: 'bq', name:'soldaten'},br = {id: 'br', name:'anführer_der_soldaten'} ; nodes.push( av,bq,br ); links.push( {source: av , target: bq },{source: av , target: br },{source: ae , target: av },{source: ae , target: bq },{source: ae , target: br },{source: ae , target: ag },{source: bq , target: br },{source: ag , target: av },{source: ag , target: bq },{source: ag , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'av','ae','bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ag br */ var  ag = nodes[0] ,br = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.666666666666666667%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ag','br' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ah ai ao */ var  ah = {id: 'ah', name:'dunois'},ai = {id: 'ai', name:'du_chatel'},ao = {id: 'ao', name:'erzbischof'} ; nodes.push( ah,ai,ao ); links.push( {source: ah , target: ao },{source: ah , target: ai },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.333333333333333333%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ae ah ao bs */ var  ae = {id: 'ae', name:'raimond'},ah = nodes[0] ,ao = nodes[1] ,bs = {id: 'bs', name:'edelmann'} ; nodes.push( ae,bs ); links.push( {source: ah , target: bs },{source: ah , target: ao },{source: ae , target: bs },{source: ae , target: ah },{source: ae , target: ao },{source: ao , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'bs','ah','ae','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ag at av bi */ var  ag = {id: 'ag', name:'johanna'},at = {id: 'at', name:'lionel'},av = {id: 'av', name:'isabeau'},bi = {id: 'bi', name:'fastolf'} ; nodes.push( ag,at,av,bi ); links.push( {source: av , target: bi },{source: at , target: bi },{source: at , target: av },{source: ag , target: bi },{source: ag , target: av },{source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ag at av bi bt */ var  ag = nodes[0] ,at = nodes[1] ,av = nodes[2] ,bi = nodes[3] ,bt = {id: 'bt', name:'hauptmann'} ; nodes.push( bt ); links.push( {source: ag , target: bt },{source: ag , target: bi },{source: ag , target: at },{source: ag , target: av },{source: bi , target: bt },{source: at , target: bt },{source: at , target: bi },{source: at , target: av },{source: av , target: bt },{source: av , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.333333333333333333%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'bt','bi','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ag av bd */ var  ag = nodes[0] ,av = nodes[1] ,bd = {id: 'bd', name:'soldat_5.11'} ; nodes.push( bd ); links.push( {source: ag , target: av },{source: ag , target: bd },{source: av , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* av bd */ var  av = nodes[0] ,bd = nodes[1]  ; /* nodes.push(); */ links.push( {source: av , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.666666666666666667%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* an av */ var  an = {id: 'an', name:'la_hire'},av = nodes[0]  ; nodes.push( an ); links.push( {source: an , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.333333333333333333%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'an','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ag aj am au */ var  ag = {id: 'ag', name:'johanna'},aj = {id: 'aj', name:'könig'},am = {id: 'am', name:'sorel'},au = {id: 'au', name:'burgund'} ; nodes.push( ag,aj,am,au ); links.push( {source: am , target: au },{source: aj , target: am },{source: aj , target: au },{source: ag , target: am },{source: ag , target: aj },{source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 295000);
