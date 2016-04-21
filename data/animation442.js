setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'soest'},ab = {id: 'ab', name:'jetter'},ac = {id: 'ac', name:'buyck'},ad = {id: 'ad', name:'ruysum'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'regentin'},af = {id: 'af', name:'machiavell'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ag ah as */ var  ag = {id: 'ag', name:'brackenburg'},ah = {id: 'ah', name:'mutter'},as = {id: 'as', name:'klare'} ; nodes.push( ag,ah,as ); links.push( {source: ag , target: as },{source: ag , target: ah },{source: ah , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'as','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ai aj ak al am an ao ap */ var  aa = {id: 'aa', name:'soest'},ab = {id: 'ab', name:'jetter'},ai = {id: 'ai', name:'zimmermeister'},aj = {id: 'aj', name:'seifensieder'},ak = {id: 'ak', name:'vansen'},al = {id: 'al', name:'ein_bürger'},am = {id: 'am', name:'ein_anderer'},an = {id: 'an', name:'andere'},ao = {id: 'ao', name:'bürger'},ap = {id: 'ap', name:'egmont'} ; nodes.push( aa,ab,ai,aj,ak,al,am,an,ao,ap ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: an },{source: ai , target: an },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: an },{source: ab , target: an },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: an },{source: aa , target: an },{source: aa , target: al },{source: aa , target: am },{source: aa , target: an },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ap },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: an },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: ak , target: an },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: an , target: ao },{source: an , target: ap },{source: an , target: ao },{source: an , target: ap },{source: al , target: an },{source: al , target: an },{source: al , target: am },{source: al , target: an },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: am , target: an },{source: am , target: an },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: am , target: an },{source: am , target: an },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ai','ab','aa','aj','ak','an','al','am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ap aq ar */ var  ap = nodes[0] ,aq = {id: 'aq', name:'sekretär'},ar = {id: 'ar', name:'oranien'} ; nodes.push( aq,ar ); links.push( {source: aq , target: ar },{source: ap , target: aq },{source: ap , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aq','ap','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'regentin'},af = {id: 'af', name:'machiavell'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ah ap as */ var  ah = {id: 'ah', name:'mutter'},ap = {id: 'ap', name:'egmont'},as = {id: 'as', name:'klare'} ; nodes.push( ah,ap,as ); links.push( {source: ah , target: as },{source: ah , target: ap },{source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah','as','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ai ak */ var  aa = {id: 'aa', name:'soest'},ab = {id: 'ab', name:'jetter'},ai = {id: 'ai', name:'zimmermeister'},ak = {id: 'ak', name:'vansen'} ; nodes.push( aa,ab,ai,ak ); links.push( {source: ab , target: ai },{source: ab , target: ak },{source: ai , target: ak },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vierter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','ai','aa','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ap at au av aw */ var  ap = {id: 'ap', name:'egmont'},at = {id: 'at', name:'silva'},au = {id: 'au', name:'gomez'},av = {id: 'av', name:'ferdinand'},aw = {id: 'aw', name:'alba'} ; nodes.push( ap,at,au,av,aw ); links.push( {source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vierter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'at','au','av','aw','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ab ag ai as */ var  aa = {id: 'aa', name:'soest'},ab = {id: 'ab', name:'jetter'},ag = {id: 'ag', name:'brackenburg'},ai = {id: 'ai', name:'zimmermeister'},as = {id: 'as', name:'klare'} ; nodes.push( aa,ab,ag,ai,as ); links.push( {source: ag , target: as },{source: ag , target: ai },{source: ai , target: as },{source: ab , target: ag },{source: ab , target: as },{source: ab , target: ai },{source: aa , target: ag },{source: aa , target: as },{source: aa , target: ai },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag','as','ai','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ap */ var  ap = {id: 'ap', name:'egmont'} ; nodes.push( ap ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ag as */ var  ag = {id: 'ag', name:'brackenburg'},as = {id: 'as', name:'klare'} ; nodes.push( ag,as ); links.push( {source: ag , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'as','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ap at av */ var  ap = {id: 'ap', name:'egmont'},at = {id: 'at', name:'silva'},av = {id: 'av', name:'ferdinand'} ; nodes.push( ap,at,av ); links.push( {source: ap , target: at },{source: ap , target: av },{source: at , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Aufzug'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 60000);
