setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'albrecht'},ab = {id: 'ab', name:'zenger'},ac = {id: 'ac', name:'percifal_zenger'},ad = {id: 'ad', name:'agnes'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'zenger'},ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ae af */ var  aa = nodes[0] ,ab = {id: 'ab', name:'zenger'},ae = {id: 'ae', name:'emershofen'},af = {id: 'af', name:'preisinger'} ; nodes.push( ab,ae,af ); links.push( {source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: ae , target: af },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'percifal_zenger'},ad = {id: 'ad', name:'agnes'} ; nodes.push( ac,ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad','aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag ah ai aj ak al am an ao */ var  ag = {id: 'ag', name:'ernst'},ah = {id: 'ah', name:'sandizeller'},ai = {id: 'ai', name:'tuchsenhauser'},aj = {id: 'aj', name:'pienzenauer'},ak = {id: 'ak', name:'tore'},al = {id: 'al', name:'maxelrainer'},am = {id: 'am', name:'gundelfing'},an = {id: 'an', name:'seibelstorfer'},ao = {id: 'ao', name:'vicedom'} ; nodes.push( ag,ah,ai,aj,ak,al,am,an,ao ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: am , target: an },{source: am , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','ah','ai','aj','ak','al','am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'agnes'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab ad ap */ var  ab = {id: 'ab', name:'zenger'},ad = nodes[0] ,ap = {id: 'ap', name:'wache'} ; nodes.push( ab,ap ); links.push( {source: ab , target: ad },{source: ab , target: ap },{source: ad , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab','ad','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa af ag aj al am an ao aq ar as */ var  aa = {id: 'aa', name:'albrecht'},af = {id: 'af', name:'preisinger'},ag = {id: 'ag', name:'ernst'},aj = {id: 'aj', name:'pienzenauer'},al = {id: 'al', name:'maxelrainer'},am = {id: 'am', name:'gundelfing'},an = {id: 'an', name:'seibelstorfer'},ao = {id: 'ao', name:'vicedom'},aq = {id: 'aq', name:'erster_marschall'},ar = {id: 'ar', name:'zweiter_marschall'},as = {id: 'as', name:'die_ritter'} ; nodes.push( aa,af,ag,aj,al,am,an,ao,aq,ar,as ); links.push( {source: aa , target: aq },{source: aa , target: ar },{source: aa , target: ao },{source: aa , target: aj },{source: aa , target: ag },{source: aa , target: as },{source: aa , target: am },{source: aa , target: al },{source: aa , target: an },{source: aa , target: af },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: as },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: ao },{source: aj , target: as },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: ao },{source: ag , target: aj },{source: ag , target: as },{source: ag , target: am },{source: ag , target: al },{source: ag , target: an },{source: am , target: aq },{source: am , target: ar },{source: am , target: ao },{source: am , target: as },{source: am , target: an },{source: al , target: aq },{source: al , target: ar },{source: al , target: ao },{source: al , target: as },{source: al , target: am },{source: al , target: an },{source: an , target: aq },{source: an , target: ar },{source: an , target: ao },{source: an , target: as },{source: af , target: aq },{source: af , target: ar },{source: af , target: ao },{source: af , target: aj },{source: af , target: ag },{source: af , target: as },{source: af , target: am },{source: af , target: al },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aa','aq','ar','ao','aj','ag','as','am','al','an','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ad at */ var  ab = {id: 'ab', name:'zenger'},ad = {id: 'ad', name:'agnes'},at = {id: 'at', name:'wachen'} ; nodes.push( ab,ad,at ); links.push( {source: ab , target: at },{source: ab , target: ad },{source: ad , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ac ad as */ var  aa = {id: 'aa', name:'albrecht'},ac = {id: 'ac', name:'percifal_zenger'},ad = nodes[0] ,as = {id: 'as', name:'die_ritter'} ; nodes.push( aa,ac,as ); links.push( {source: ad , target: as },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: as },{source: ac , target: ad },{source: ac , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ac','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'zenger'},ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa am */ var  aa = nodes[0] ,am = {id: 'am', name:'gundelfing'} ; nodes.push( am ); links.push( {source: aa , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa am au */ var  aa = nodes[0] ,am = nodes[1] ,au = {id: 'au', name:'thorringer'} ; nodes.push( au ); links.push( {source: aa , target: au },{source: aa , target: am },{source: am , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aa','au','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ag ai aj al an ao */ var  ag = {id: 'ag', name:'ernst'},ai = {id: 'ai', name:'tuchsenhauser'},aj = {id: 'aj', name:'pienzenauer'},al = {id: 'al', name:'maxelrainer'},an = {id: 'an', name:'seibelstorfer'},ao = {id: 'ao', name:'vicedom'} ; nodes.push( ag,ai,aj,al,an,ao ); links.push( {source: ag , target: ao },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: an },{source: ag , target: al },{source: ai , target: ao },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: al },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: al },{source: an , target: ao },{source: al , target: ao },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ag','ao','aj','an','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ai ak */ var  aa = {id: 'aa', name:'albrecht'},ai = nodes[0] ,ak = {id: 'ak', name:'tore'} ; nodes.push( aa,ak ); links.push( {source: aa , target: ai },{source: aa , target: ak },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ai ak */ var  ai = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ai','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'albrecht'},ab = {id: 'ab', name:'zenger'},ac = {id: 'ac', name:'percifal_zenger'},ad = {id: 'ad', name:'agnes'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aa ab ai ak */ var  aa = nodes[0] ,ab = nodes[1] ,ai = {id: 'ai', name:'tuchsenhauser'},ak = {id: 'ak', name:'tore'} ; nodes.push( ai,ak ); links.push( {source: aa , target: ak },{source: aa , target: ab },{source: aa , target: ai },{source: ab , target: ak },{source: ab , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'percifal_zenger'},ad = {id: 'ad', name:'agnes'} ; nodes.push( ac,ad ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aa','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ad av */ var  ad = nodes[0] ,av = {id: 'av', name:'frauen'} ; nodes.push( av ); links.push( {source: ad , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'zenger'},ad = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ad ai */ var  ad = nodes[0] ,ai = {id: 'ai', name:'tuchsenhauser'} ; nodes.push( ai ); links.push( {source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ad ai ak */ var  ad = nodes[0] ,ai = nodes[1] ,ak = {id: 'ak', name:'tore'} ; nodes.push( ak ); links.push( {source: ai , target: ak },{source: ad , target: ak },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'zenger'},ai = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab ak */ var  ab = nodes[0] ,ak = {id: 'ak', name:'tore'} ; nodes.push( ak ); links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ab','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ai ao */ var  ai = {id: 'ai', name:'tuchsenhauser'},ao = {id: 'ao', name:'vicedom'} ; nodes.push( ai,ao ); links.push( {source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ao','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ad aw */ var  ad = {id: 'ad', name:'agnes'},aw = {id: 'aw', name:'waffenknecht'} ; nodes.push( ad,aw ); links.push( {source: ad , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ao ax ay */ var  ao = {id: 'ao', name:'vicedom'},ax = {id: 'ax', name:'bürgermeister'},ay = {id: 'ay', name:'zweiter_bürgermeister'} ; nodes.push( ao,ax,ay ); links.push( {source: ao , target: ax },{source: ao , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ad ao az */ var  ad = {id: 'ad', name:'agnes'},ao = nodes[0] ,az = {id: 'az', name:'oberrichter'} ; nodes.push( ad,az ); links.push( {source: ad , target: az },{source: ad , target: ao },{source: ao , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'az','ad','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'albrecht'},ab = {id: 'ab', name:'zenger'},ac = {id: 'ac', name:'percifal_zenger'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa','ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ad ao */ var  ad = {id: 'ad', name:'agnes'},ao = {id: 'ao', name:'vicedom'} ; nodes.push( ad,ao ); links.push( {source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ad','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'albrecht'},ac = {id: 'ac', name:'percifal_zenger'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ac ag ah ak al am as */ var  aa = nodes[0] ,ac = nodes[1] ,ag = {id: 'ag', name:'ernst'},ah = {id: 'ah', name:'sandizeller'},ak = {id: 'ak', name:'tore'},al = {id: 'al', name:'maxelrainer'},am = {id: 'am', name:'gundelfing'},as = {id: 'as', name:'die_ritter'} ; nodes.push( ag,ah,ak,al,am,as ); links.push( {source: ag , target: am },{source: ag , target: ah },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: as },{source: aa , target: ag },{source: aa , target: am },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: al },{source: aa , target: ak },{source: aa , target: as },{source: am , target: as },{source: ac , target: ag },{source: ac , target: am },{source: ac , target: ah },{source: ac , target: al },{source: ac , target: ak },{source: ac , target: as },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: as },{source: al , target: am },{source: al , target: as },{source: ak , target: am },{source: ak , target: al },{source: ak , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 175000);
