setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'dietrich'},ab = {id: 'ab', name:'helldrungen'},ac = {id: 'ac', name:'erich'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.777777777777777778%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'gräfin'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.555555555555555556%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'erich'},ad = nodes[2] ,ae = {id: 'ae', name:'liborius'},af = {id: 'af', name:'rüdiger'} ; nodes.push( ac,ae,af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.333333333333333333%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','af','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ae ag */ var  aa = nodes[0] ,ae = nodes[1] ,ag = {id: 'ag', name:'probst'} ; nodes.push( ag ); links.push( {source: aa , target: ag },{source: aa , target: ae },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.111111111111111111%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ad ae ag ah ai */ var  aa = nodes[0] ,ad = {id: 'ad', name:'gräfin'},ae = nodes[1] ,ag = nodes[2] ,ah = {id: 'ah', name:'gerlind'},ai = {id: 'ai', name:'ein_knappe'} ; nodes.push( ad,ah,ai ); links.push( {source: ah , target: ai },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ai },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: ai },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ai },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.888888888888888889%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ac ae af ag ah aj ak al am an ao ap aq ar av */ var  aa = nodes[0] ,ac = {id: 'ac', name:'erich'},ae = nodes[1] ,af = {id: 'af', name:'rüdiger'},ag = nodes[2] ,ah = nodes[3] ,aj = {id: 'aj', name:'die_alte_steimann'},ak = {id: 'ak', name:'frau_hüfer'},al = {id: 'al', name:'blinte'},am = {id: 'am', name:'einige_bauern'},an = {id: 'an', name:'engel'},ao = {id: 'ao', name:'thomä'},ap = {id: 'ap', name:'sander'},aq = {id: 'aq', name:'reinhard'},ar = {id: 'ar', name:'storch'},av = {id: 'av', name:'wenige_stimmen'} ; nodes.push( ac,af,aj,ak,al,am,an,ao,ap,aq,ar,av ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: av },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: av },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: am },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: am },{source: aa , target: ae },{source: aa , target: an },{source: aa , target: av },{source: aa , target: af },{source: aa , target: ao },{source: aa , target: ag },{source: aa , target: ap },{source: aa , target: aq },{source: aa , target: ar },{source: aa , target: am },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: al },{source: ac , target: am },{source: ac , target: ae },{source: ac , target: an },{source: ac , target: av },{source: ac , target: af },{source: ac , target: ao },{source: ac , target: ag },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: am },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: av },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: am },{source: al , target: am },{source: al , target: an },{source: al , target: av },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: am },{source: am , target: an },{source: am , target: av },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: av },{source: ae , target: af },{source: ae , target: ao },{source: ae , target: ag },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: am },{source: an , target: av },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: af , target: aj },{source: af , target: ak },{source: af , target: ah },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: av },{source: af , target: ao },{source: af , target: ag },{source: af , target: ap },{source: af , target: aq },{source: af , target: ar },{source: af , target: am },{source: ao , target: av },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: av },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: am },{source: ap , target: av },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: av },{source: aq , target: ar },{source: ar , target: av },{source: am , target: an },{source: am , target: av },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.666666666666666667%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aj','ac','ah','al','ae','an','av','ag','ap','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa af ak am ao as */ var  aa = nodes[0] ,af = nodes[1] ,ak = nodes[2] ,am = nodes[3] ,ao = nodes[4] ,as = {id: 'as', name:'pfeifer'} ; nodes.push( as ); links.push( {source: ao , target: as },{source: af , target: as },{source: af , target: ao },{source: af , target: ak },{source: af , target: am },{source: aa , target: as },{source: aa , target: ao },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: am },{source: ak , target: as },{source: ak , target: ao },{source: ak , target: am },{source: am , target: as },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.444444444444444444%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ao','af','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ac ae ah ak al an as at */ var  aa = nodes[0] ,ac = {id: 'ac', name:'erich'},ae = {id: 'ae', name:'liborius'},ah = {id: 'ah', name:'gerlind'},ak = nodes[1] ,al = {id: 'al', name:'blinte'},an = {id: 'an', name:'engel'},as = nodes[2] ,at = {id: 'at', name:'hans'} ; nodes.push( ac,ae,ah,al,an,at ); links.push( {source: ak , target: at },{source: ak , target: as },{source: ak , target: an },{source: ak , target: al },{source: aa , target: ak },{source: aa , target: at },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: as },{source: aa , target: an },{source: aa , target: al },{source: ac , target: ak },{source: ac , target: at },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: as },{source: ac , target: an },{source: ac , target: al },{source: ah , target: ak },{source: ah , target: at },{source: ah , target: as },{source: ah , target: an },{source: ah , target: al },{source: ae , target: ak },{source: ae , target: at },{source: ae , target: ah },{source: ae , target: as },{source: ae , target: an },{source: ae , target: al },{source: as , target: at },{source: an , target: at },{source: an , target: as },{source: al , target: at },{source: al , target: as },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.222222222222222222%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac ae ah al am as at au */ var  aa = nodes[0] ,ac = nodes[1] ,ae = nodes[2] ,ah = nodes[3] ,al = nodes[4] ,am = {id: 'am', name:'einige_bauern'},as = nodes[5] ,at = nodes[6] ,au = {id: 'au', name:'münzer'} ; nodes.push( am,au ); links.push( {source: ae , target: au },{source: ae , target: as },{source: ae , target: am },{source: ae , target: ah },{source: ae , target: al },{source: ae , target: at },{source: ae , target: am },{source: as , target: au },{source: as , target: at },{source: am , target: au },{source: am , target: as },{source: am , target: at },{source: ah , target: au },{source: ah , target: as },{source: ah , target: am },{source: ah , target: al },{source: ah , target: at },{source: ah , target: am },{source: al , target: au },{source: al , target: as },{source: al , target: am },{source: al , target: at },{source: al , target: am },{source: aa , target: au },{source: aa , target: ae },{source: aa , target: as },{source: aa , target: am },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: ac },{source: aa , target: at },{source: aa , target: am },{source: ac , target: au },{source: ac , target: ae },{source: ac , target: as },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: al },{source: ac , target: at },{source: ac , target: am },{source: at , target: au },{source: am , target: au },{source: am , target: as },{source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'au','ae','am','ah','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* al an aq as at */ var  al = nodes[0] ,an = {id: 'an', name:'engel'},aq = {id: 'aq', name:'reinhard'},as = nodes[1] ,at = nodes[2]  ; nodes.push( an,aq ); links.push( {source: al , target: as },{source: al , target: an },{source: al , target: aq },{source: al , target: at },{source: as , target: at },{source: an , target: as },{source: an , target: aq },{source: an , target: at },{source: aq , target: as },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.777777777777777778%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al','an','aq','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* as au av */ var  as = nodes[0] ,au = {id: 'au', name:'münzer'},av = {id: 'av', name:'wenige_stimmen'} ; nodes.push( au,av ); links.push( {source: au , target: av },{source: as , target: au },{source: as , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.555555555555555556%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* al am an as at au aw */ var  al = {id: 'al', name:'blinte'},am = {id: 'am', name:'einige_bauern'},an = {id: 'an', name:'engel'},as = nodes[0] ,at = {id: 'at', name:'hans'},au = nodes[1] ,aw = {id: 'aw', name:'lärm'} ; nodes.push( al,am,an,at,aw ); links.push( {source: an , target: au },{source: an , target: as },{source: an , target: at },{source: an , target: aw },{source: au , target: aw },{source: al , target: an },{source: al , target: au },{source: al , target: as },{source: al , target: am },{source: al , target: at },{source: al , target: am },{source: al , target: aw },{source: as , target: au },{source: as , target: at },{source: as , target: aw },{source: am , target: an },{source: am , target: au },{source: am , target: as },{source: am , target: at },{source: am , target: aw },{source: at , target: au },{source: at , target: aw },{source: am , target: an },{source: am , target: au },{source: am , target: as },{source: am , target: at },{source: am , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'as','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac al am an ap at au ax */ var  ac = {id: 'ac', name:'erich'},al = nodes[0] ,am = nodes[1] ,an = nodes[2] ,ap = {id: 'ap', name:'sander'},at = nodes[3] ,au = nodes[4] ,ax = {id: 'ax', name:'roder'} ; nodes.push( ac,ap,ax ); links.push( {source: ac , target: ap },{source: ac , target: an },{source: ac , target: am },{source: ac , target: au },{source: ac , target: ax },{source: ac , target: al },{source: ac , target: at },{source: ap , target: au },{source: ap , target: ax },{source: ap , target: at },{source: an , target: ap },{source: an , target: au },{source: an , target: ax },{source: an , target: at },{source: am , target: ap },{source: am , target: an },{source: am , target: au },{source: am , target: ax },{source: am , target: at },{source: au , target: ax },{source: al , target: ap },{source: al , target: an },{source: al , target: am },{source: al , target: au },{source: al , target: ax },{source: al , target: at },{source: at , target: au },{source: at , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.111111111111111111%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac','ap','an','am','ax','al','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ah au aw */ var  ah = {id: 'ah', name:'gerlind'},au = nodes[0] ,aw = {id: 'aw', name:'lärm'} ; nodes.push( ah,aw ); links.push( {source: au , target: aw },{source: ah , target: au },{source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.888888888888888889%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ah aj ak al am an ao ap as at au ax ay */ var  ah = nodes[0] ,aj = {id: 'aj', name:'die_alte_steimann'},ak = {id: 'ak', name:'frau_hüfer'},al = {id: 'al', name:'blinte'},am = {id: 'am', name:'einige_bauern'},an = {id: 'an', name:'engel'},ao = {id: 'ao', name:'thomä'},ap = {id: 'ap', name:'sander'},as = {id: 'as', name:'pfeifer'},at = {id: 'at', name:'hans'},au = nodes[1] ,ax = {id: 'ax', name:'roder'},ay = {id: 'ay', name:'weiber'} ; nodes.push( aj,ak,al,am,an,ao,ap,as,at,ax,ay ); links.push( {source: an , target: au },{source: an , target: ay },{source: an , target: as },{source: an , target: ap },{source: an , target: ax },{source: an , target: ao },{source: an , target: at },{source: am , target: an },{source: am , target: au },{source: am , target: ay },{source: am , target: as },{source: am , target: ap },{source: am , target: ax },{source: am , target: ao },{source: am , target: at },{source: au , target: ay },{source: au , target: ax },{source: al , target: an },{source: al , target: am },{source: al , target: au },{source: al , target: ay },{source: al , target: as },{source: al , target: ap },{source: al , target: ax },{source: al , target: ao },{source: al , target: at },{source: as , target: au },{source: as , target: ay },{source: as , target: ax },{source: as , target: at },{source: ap , target: au },{source: ap , target: ay },{source: ap , target: as },{source: ap , target: ax },{source: ap , target: at },{source: ax , target: ay },{source: ao , target: au },{source: ao , target: ay },{source: ao , target: as },{source: ao , target: ap },{source: ao , target: ax },{source: ao , target: at },{source: ak , target: an },{source: ak , target: am },{source: ak , target: au },{source: ak , target: al },{source: ak , target: ay },{source: ak , target: as },{source: ak , target: ap },{source: ak , target: ax },{source: ak , target: ao },{source: ak , target: at },{source: aj , target: an },{source: aj , target: am },{source: aj , target: au },{source: aj , target: al },{source: aj , target: ay },{source: aj , target: as },{source: aj , target: ap },{source: aj , target: ax },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: at },{source: ah , target: an },{source: ah , target: am },{source: ah , target: au },{source: ah , target: al },{source: ah , target: ay },{source: ah , target: as },{source: ah , target: ap },{source: ah , target: ax },{source: ah , target: ao },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: at },{source: at , target: au },{source: at , target: ay },{source: at , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.666666666666666667%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'an','am','al','ay','as','ap','ax','ao','ak','aj','ah','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* au av az ba */ var  au = nodes[0] ,av = {id: 'av', name:'wenige_stimmen'},az = {id: 'az', name:'luther'},ba = {id: 'ba', name:'anderer_chor'} ; nodes.push( av,az,ba ); links.push( {source: az , target: ba },{source: au , target: az },{source: au , target: av },{source: au , target: av },{source: au , target: ba },{source: av , target: az },{source: av , target: ba },{source: av , target: az },{source: av , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.444444444444444444%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'az','au','av','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab ad ah bb */ var  aa = {id: 'aa', name:'dietrich'},ab = {id: 'ab', name:'helldrungen'},ad = {id: 'ad', name:'gräfin'},ah = {id: 'ah', name:'gerlind'},bb = {id: 'bb', name:'jacobe'} ; nodes.push( aa,ab,ad,ah,bb ); links.push( {source: ab , target: ad },{source: ab , target: ah },{source: ab , target: bb },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: bb },{source: ad , target: ah },{source: ad , target: bb },{source: ah , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.222222222222222222%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ab','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ah bb */ var  ah = nodes[0] ,bb = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ah au */ var  ah = nodes[0] ,au = {id: 'au', name:'münzer'} ; nodes.push( au ); links.push( {source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.777777777777777778%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ad ah au bb bc bd */ var  aa = {id: 'aa', name:'dietrich'},ad = {id: 'ad', name:'gräfin'},ah = nodes[0] ,au = nodes[1] ,bb = {id: 'bb', name:'jacobe'},bc = {id: 'bc', name:'frauen'},bd = {id: 'bd', name:'knecht'} ; nodes.push( aa,ad,bb,bc,bd ); links.push( {source: bb , target: bc },{source: bb , target: bd },{source: bb , target: bd },{source: aa , target: bb },{source: aa , target: ad },{source: aa , target: au },{source: aa , target: ah },{source: aa , target: bc },{source: aa , target: bd },{source: aa , target: bd },{source: ad , target: bb },{source: ad , target: au },{source: ad , target: ah },{source: ad , target: bc },{source: ad , target: bd },{source: ad , target: bd },{source: au , target: bb },{source: au , target: bc },{source: au , target: bd },{source: au , target: bd },{source: ah , target: bb },{source: ah , target: au },{source: ah , target: bc },{source: ah , target: bd },{source: ah , target: bd },{source: bc , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.555555555555555556%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'bb','au','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab ad ah bd */ var  aa = nodes[0] ,ab = {id: 'ab', name:'helldrungen'},ad = nodes[1] ,ah = nodes[2] ,bd = nodes[3]  ; nodes.push( ab ); links.push( {source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: bd },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: bd },{source: ah , target: bd },{source: ad , target: ah },{source: ad , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.333333333333333333%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aa','ab','ah','ad','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* al am ao ar */ var  al = {id: 'al', name:'blinte'},am = {id: 'am', name:'einige_bauern'},ao = {id: 'ao', name:'thomä'},ar = {id: 'ar', name:'storch'} ; nodes.push( al,am,ao,ar ); links.push( {source: al , target: ar },{source: al , target: am },{source: al , target: ao },{source: am , target: ar },{source: am , target: ao },{source: ao , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.111111111111111111%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* al am an ao ap ar as au */ var  al = nodes[0] ,am = nodes[1] ,an = {id: 'an', name:'engel'},ao = nodes[2] ,ap = {id: 'ap', name:'sander'},ar = nodes[3] ,as = {id: 'as', name:'pfeifer'},au = {id: 'au', name:'münzer'} ; nodes.push( an,ap,as,au ); links.push( {source: as , target: au },{source: ar , target: as },{source: ar , target: au },{source: ap , target: as },{source: ap , target: au },{source: ap , target: ar },{source: an , target: as },{source: an , target: au },{source: an , target: ar },{source: an , target: ap },{source: an , target: ao },{source: al , target: as },{source: al , target: au },{source: al , target: ar },{source: al , target: ap },{source: al , target: an },{source: al , target: am },{source: al , target: ao },{source: am , target: as },{source: am , target: au },{source: am , target: ar },{source: am , target: ap },{source: am , target: an },{source: am , target: ao },{source: ao , target: as },{source: ao , target: au },{source: ao , target: ar },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.888888888888888889%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ar','ap','an','al','am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* as at au */ var  as = nodes[0] ,at = {id: 'at', name:'hans'},au = nodes[1]  ; nodes.push( at ); links.push( {source: at , target: au },{source: as , target: au },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'at','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* au */ var  au = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.444444444444444444%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* as au ax */ var  as = {id: 'as', name:'pfeifer'},au = nodes[0] ,ax = {id: 'ax', name:'roder'} ; nodes.push( as,ax ); links.push( {source: as , target: au },{source: as , target: ax },{source: au , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.222222222222222222%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'as','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* at au */ var  at = {id: 'at', name:'hans'},au = nodes[0]  ; nodes.push( at ); links.push( {source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* au bb be */ var  au = nodes[0] ,bb = {id: 'bb', name:'jacobe'},be = {id: 'be', name:'wache'} ; nodes.push( bb,be ); links.push( {source: au , target: be },{source: au , target: bb },{source: bb , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.777777777777777778%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* am as at au bb be */ var  am = {id: 'am', name:'einige_bauern'},as = {id: 'as', name:'pfeifer'},at = {id: 'at', name:'hans'},au = nodes[0] ,bb = nodes[1] ,be = nodes[2]  ; nodes.push( am,as,at ); links.push( {source: as , target: au },{source: as , target: bb },{source: as , target: be },{source: as , target: at },{source: au , target: bb },{source: au , target: be },{source: bb , target: be },{source: at , target: au },{source: at , target: bb },{source: at , target: be },{source: am , target: as },{source: am , target: au },{source: am , target: bb },{source: am , target: be },{source: am , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.555555555555555556%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'as','bb','be','at','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* al au */ var  al = {id: 'al', name:'blinte'},au = nodes[0]  ; nodes.push( al ); links.push( {source: al , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.333333333333333333%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'au','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ab ag bf */ var  aa = {id: 'aa', name:'dietrich'},ab = {id: 'ab', name:'helldrungen'},ag = {id: 'ag', name:'probst'},bf = {id: 'bf', name:'landgraf'} ; nodes.push( aa,ab,ag,bf ); links.push( {source: ab , target: bf },{source: ab , target: ag },{source: ag , target: bf },{source: aa , target: bf },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.111111111111111111%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'bf','ab','ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ah au */ var  ah = {id: 'ah', name:'gerlind'},au = {id: 'au', name:'münzer'} ; nodes.push( ah,au ); links.push( {source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.888888888888888889%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ah am at au */ var  ah = nodes[0] ,am = {id: 'am', name:'einige_bauern'},at = {id: 'at', name:'hans'},au = nodes[1]  ; nodes.push( am,at ); links.push( {source: at , target: au },{source: am , target: at },{source: am , target: au },{source: ah , target: at },{source: ah , target: au },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.666666666666666667%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'at','au','am','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ab ag bf bg */ var  aa = {id: 'aa', name:'dietrich'},ab = {id: 'ab', name:'helldrungen'},ag = {id: 'ag', name:'probst'},bf = {id: 'bf', name:'landgraf'},bg = {id: 'bg', name:'einige_landsknechte'} ; nodes.push( aa,ab,ag,bf,bg ); links.push( {source: bf , target: bg },{source: ab , target: bf },{source: ab , target: ag },{source: ab , target: bg },{source: ag , target: bf },{source: ag , target: bg },{source: aa , target: bf },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.444444444444444444%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'bf','ab','ag','aa','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ah as at au */ var  ah = {id: 'ah', name:'gerlind'},as = {id: 'as', name:'pfeifer'},at = {id: 'at', name:'hans'},au = {id: 'au', name:'münzer'} ; nodes.push( ah,as,at,au ); links.push( {source: as , target: au },{source: as , target: at },{source: ah , target: as },{source: ah , target: au },{source: ah , target: at },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.222222222222222222%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'as','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab ag at au ax bf */ var  aa = {id: 'aa', name:'dietrich'},ab = {id: 'ab', name:'helldrungen'},ag = {id: 'ag', name:'probst'},at = nodes[0] ,au = nodes[1] ,ax = {id: 'ax', name:'roder'},bf = {id: 'bf', name:'landgraf'} ; nodes.push( aa,ab,ag,ax,bf ); links.push( {source: ab , target: at },{source: ab , target: ag },{source: ab , target: bf },{source: ab , target: au },{source: ab , target: ax },{source: at , target: bf },{source: at , target: au },{source: at , target: ax },{source: aa , target: ab },{source: aa , target: at },{source: aa , target: ag },{source: aa , target: bf },{source: aa , target: au },{source: aa , target: ax },{source: ag , target: at },{source: ag , target: bf },{source: ag , target: au },{source: ag , target: ax },{source: au , target: bf },{source: au , target: ax },{source: ax , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Scene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 175000);
