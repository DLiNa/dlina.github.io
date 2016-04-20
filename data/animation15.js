setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'neurath'},ab = {id: 'ab', name:'horfmann'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'bedienter'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[1],ad = {id: 'ad', name:'delomer'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[1],ae = {id: 'ae', name:'dominiq'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],ae = nodes[1],af = {id: 'af', name:'mad'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: ad , target: af },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = {id: 'ab', name:'horfmann'},ae = nodes[1],af = nodes[2] ; nodes.push( ab ); links.push( {source: ae , target: af },{source: ab , target: af },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = nodes[1],af = nodes[2],af = nodes[2],ag = {id: 'ag', name:'graf'},ah = {id: 'ah', name:'gräfin'} ; nodes.push( ag,ah ); links.push( {source: ae , target: ag },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: af },{source: ag , target: ah },{source: af , target: ag },{source: af , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = {id: 'aa', name:'neurath'},ab = {id: 'ab', name:'horfmann'},ad = {id: 'ad', name:'delomer'},ae = nodes[0],af = nodes[1],ag = nodes[3],ah = nodes[4],ai = {id: 'ai', name:'die_bauern'},aj = {id: 'aj', name:'schulz'},ak = {id: 'ak', name:'das_kind'} ; nodes.push( aa,ab,ad,ai,aj,ak ); links.push( {source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ak },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: aj },{source: ab , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','ag','ah','ae','ab','ai','af','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ac = {id: 'ac', name:'bedienter'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ae = {id: 'ae', name:'dominiq'},aj = {id: 'aj', name:'schulz'} ; nodes.push( ae,aj ); links.push( {source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = nodes[0],al = {id: 'al', name:'marquis'} ; nodes.push( al ); links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = {id: 'ab', name:'horfmann'},ae = nodes[0],al = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: al },{source: ab , target: ae },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ae = nodes[1],al = nodes[2],am = {id: 'am', name:'gärtner'} ; nodes.push( am ); links.push( {source: ae , target: am },{source: ae , target: al },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = nodes[0],af = {id: 'af', name:'mad'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = {id: 'ad', name:'delomer'},ae = nodes[0],ae = nodes[0],af = nodes[1],ag = {id: 'ag', name:'graf'},ah = {id: 'ah', name:'gräfin'},ak = {id: 'ak', name:'das_kind'},an = {id: 'an', name:'dominique_v'},ao = {id: 'ao', name:'etliche'} ; nodes.push( ad,ag,ah,ak,an,ao ); links.push( {source: ak , target: an },{source: ak , target: ao },{source: af , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: an },{source: af , target: ao },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: ao },{source: ad , target: ak },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: an },{source: ad , target: ao },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: an },{source: ae , target: ao },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: ao },{source: ae , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: an },{source: ae , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','ad','ah','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ae = nodes[1],af = nodes[3],ak = nodes[6],an = nodes[7] ; /* nodes.push(); */ links.push( {source: ae , target: an },{source: ae , target: af },{source: ae , target: ak },{source: af , target: an },{source: af , target: ak },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ad = {id: 'ad', name:'delomer'},ae = nodes[0],af = nodes[1],an = nodes[3] ; nodes.push( ad ); links.push( {source: ad , target: an },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: an },{source: ae , target: af },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ad = nodes[0],an = nodes[3] ; /* nodes.push(); */ links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ab = {id: 'ab', name:'horfmann'},ad = nodes[0],an = nodes[1] ; nodes.push( ab ); links.push( {source: ad , target: an },{source: ab , target: ad },{source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ad = nodes[1],ae = {id: 'ae', name:'dominiq'},af = {id: 'af', name:'mad'},an = nodes[2] ; nodes.push( ae,af ); links.push( {source: ad , target: an },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: an },{source: ae , target: af },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = nodes[0],ae = nodes[1],af = nodes[2],af = nodes[2],al = {id: 'al', name:'marquis'},an = nodes[3] ; nodes.push( al ); links.push( {source: al , target: an },{source: ad , target: al },{source: ad , target: af },{source: ad , target: an },{source: ad , target: af },{source: ad , target: ae },{source: af , target: al },{source: af , target: an },{source: af , target: al },{source: af , target: an },{source: ae , target: al },{source: ae , target: af },{source: ae , target: an },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al','ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ae = nodes[1],ag = {id: 'ag', name:'graf'},an = nodes[5] ; nodes.push( ag ); links.push( {source: ag , target: an },{source: ae , target: ag },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ae = nodes[0],ag = nodes[1],an = nodes[2] ; /* nodes.push(); */ links.push( {source: ae , target: ag },{source: ae , target: an },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ag = nodes[1],ah = {id: 'ah', name:'gräfin'},an = nodes[2] ; nodes.push( ah ); links.push( {source: ah , target: an },{source: ag , target: ah },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ag = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ae = {id: 'ae', name:'dominiq'},af = {id: 'af', name:'mad'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ae = nodes[0],an = {id: 'an', name:'dominique_v'} ; nodes.push( an ); links.push( {source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ad = {id: 'ad', name:'delomer'},ae = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = {id: 'aa', name:'neurath'},aj = {id: 'aj', name:'schulz'} ; nodes.push( aa,aj ); links.push( {source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = nodes[0],ac = {id: 'ac', name:'bedienter'},ad = {id: 'ad', name:'delomer'},aj = nodes[1] ; nodes.push( ac,ad ); links.push( {source: ad , target: aj },{source: aa , target: ad },{source: aa , target: aj },{source: aa , target: ac },{source: ac , target: ad },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aj','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = nodes[0],ab = {id: 'ab', name:'horfmann'},ad = nodes[2] ; nodes.push( ab ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = nodes[1],ac = {id: 'ac', name:'bedienter'},ad = nodes[2] ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ac','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ad = nodes[2],ag = {id: 'ag', name:'graf'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ab = {id: 'ab', name:'horfmann'},ad = nodes[0],ag = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ad = nodes[1],af = {id: 'af', name:'mad'},af = {id: 'af', name:'mad'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ad = nodes[0],ae = {id: 'ae', name:'dominiq'},af = nodes[1] ; nodes.push( ae ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ad = nodes[0],ae = nodes[1],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ad = nodes[0],ae = nodes[1],ae = nodes[1],al = {id: 'al', name:'marquis'},an = {id: 'an', name:'dominique_v'} ; nodes.push( al,an ); links.push( {source: ae , target: an },{source: ae , target: al },{source: al , target: an },{source: ad , target: an },{source: ad , target: ae },{source: ad , target: al },{source: ad , target: ae },{source: ae , target: an },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ae','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ad = nodes[0],an = nodes[4] ; /* nodes.push(); */ links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ad = nodes[0],ae = {id: 'ae', name:'dominiq'},an = nodes[1] ; nodes.push( ae ); links.push( {source: ad , target: an },{source: ad , target: ae },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ad = nodes[0],ae = nodes[1],af = {id: 'af', name:'mad'},an = nodes[2] ; nodes.push( af ); links.push( {source: af , target: an },{source: ad , target: af },{source: ad , target: an },{source: ad , target: ae },{source: ae , target: af },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ae = nodes[1],ak = {id: 'ak', name:'das_kind'},an = nodes[3] ; nodes.push( ak ); links.push( {source: ak , target: an },{source: ae , target: ak },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ad = {id: 'ad', name:'delomer'},ak = nodes[1],an = nodes[2] ; nodes.push( ad ); links.push( {source: ad , target: an },{source: ad , target: ak },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '15'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ad = nodes[0],ah = {id: 'ah', name:'gräfin'},an = nodes[2] ; nodes.push( ah ); links.push( {source: ah , target: an },{source: ad , target: ah },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ad = nodes[0],ae = {id: 'ae', name:'dominiq'},an = nodes[2] ; nodes.push( ae ); links.push( {source: ad , target: ae },{source: ad , target: an },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '17'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ac = {id: 'ac', name:'bedienter'},ad = nodes[0],ae = nodes[1] ; nodes.push( ac ); links.push( {source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '18'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ad = nodes[1],ae = nodes[2],af = {id: 'af', name:'mad'},an = {id: 'an', name:'dominique_v'} ; nodes.push( af,an ); links.push( {source: ae , target: an },{source: ae , target: af },{source: af , target: an },{source: ad , target: ae },{source: ad , target: an },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '19'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ad = nodes[0],af = nodes[2],an = nodes[3] ; /* nodes.push(); */ links.push( {source: ad , target: an },{source: ad , target: af },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '20'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ab = {id: 'ab', name:'horfmann'},ad = nodes[0],ak = {id: 'ak', name:'das_kind'},an = nodes[2] ; nodes.push( ab,ak ); links.push( {source: ab , target: ak },{source: ab , target: ad },{source: ab , target: an },{source: ak , target: an },{source: ad , target: ak },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '21'; var scene = document.getElementById('scene');scene.innerHTML = 'Ein und zwanzigster Auftritt.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ab','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ad = nodes[1],ae = {id: 'ae', name:'dominiq'},al = {id: 'al', name:'marquis'},an = nodes[3] ; nodes.push( ae,al ); links.push( {source: al , target: an },{source: ad , target: al },{source: ad , target: an },{source: ad , target: ae },{source: ae , target: al },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '22'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
}, 245000);
