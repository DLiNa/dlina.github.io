setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'der_dichter'},ab = {id: 'ab', name:'musa'},ab = {id: 'ab', name:'musa'},ac = {id: 'ac', name:'die_aftermuse'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Prolog'; var scene = document.getElementById('scene');scene.innerHTML = 'noName';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ad = {id: 'ad', name:'barbara'},ae = {id: 'ae', name:'jacob'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ae = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = {id: 'ad', name:'barbara'},ae = nodes[0],af = {id: 'af', name:'benjamin'} ; nodes.push( ad,af ); links.push( {source: ae , target: af },{source: ad , target: af },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  af = nodes[2] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ad = {id: 'ad', name:'barbara'},ae = {id: 'ae', name:'jacob'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ag = {id: 'ag', name:'königin'},ah = {id: 'ah', name:'die_prinzessin'},ai = {id: 'ai', name:'der_könig'},aj = {id: 'aj', name:'der_prinz'} ; nodes.push( ag,ah,ai,aj ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','ah','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ak = {id: 'ak', name:'block'},al = {id: 'al', name:'doktor_pfeffer'} ; nodes.push( ak,al ); links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  af = {id: 'af', name:'benjamin'},ak = nodes[0],al = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ak },{source: af , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ae = {id: 'ae', name:'jacob'},af = nodes[0],ak = nodes[1],al = nodes[2] ; nodes.push( ae ); links.push( {source: ak , target: al },{source: ae , target: al },{source: ae , target: ak },{source: ae , target: af },{source: af , target: al },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al','ak','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aj = {id: 'aj', name:'der_prinz'},am = {id: 'am', name:'der_graf'} ; nodes.push( aj,am ); links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'am','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  an = {id: 'an', name:'kilian'},ao = {id: 'ao', name:'jörg'} ; nodes.push( an,ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  an = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  an = nodes[0],ap = {id: 'ap', name:'schlüter'} ; nodes.push( ap ); links.push( {source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ae = {id: 'ae', name:'jacob'},af = {id: 'af', name:'benjamin'},ak = {id: 'ak', name:'block'},al = {id: 'al', name:'doktor_pfeffer'},an = nodes[0],ap = nodes[1] ; nodes.push( ae,af,ak,al ); links.push( {source: af , target: al },{source: af , target: an },{source: af , target: ak },{source: af , target: ap },{source: al , target: an },{source: al , target: ap },{source: an , target: ap },{source: ae , target: af },{source: ae , target: al },{source: ae , target: an },{source: ae , target: ak },{source: ae , target: ap },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','an','ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  af = nodes[1],ap = nodes[5] ; /* nodes.push(); */ links.push( {source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  af = nodes[0],ap = {id: 'ap', name:'schlüter'} ; nodes.push( ap ); links.push( {source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'af','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = {id: 'ae', name:'jacob'},ak = {id: 'ak', name:'block'},al = {id: 'al', name:'doktor_pfeffer'},an = {id: 'an', name:'kilian'} ; nodes.push( ae,ak,al,an ); links.push( {source: al , target: an },{source: ak , target: al },{source: ak , target: an },{source: ae , target: al },{source: ae , target: an },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'al','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = nodes[0],an = nodes[3],ao = {id: 'ao', name:'jörg'} ; nodes.push( ao ); links.push( {source: an , target: ao },{source: ae , target: ao },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ae = nodes[0],aj = {id: 'aj', name:'der_prinz'},ak = {id: 'ak', name:'block'},al = {id: 'al', name:'doktor_pfeffer'},am = {id: 'am', name:'der_graf'},an = nodes[1] ; nodes.push( aj,ak,al,am ); links.push( {source: am , target: an },{source: al , target: am },{source: al , target: an },{source: ak , target: am },{source: ak , target: an },{source: ak , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: al },{source: aj , target: ak },{source: ae , target: am },{source: ae , target: an },{source: ae , target: al },{source: ae , target: ak },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'am','an','al','ak','aj','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  af = {id: 'af', name:'benjamin'},ap = {id: 'ap', name:'schlüter'} ; nodes.push( af,ap ); links.push( {source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  af = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ae = {id: 'ae', name:'jacob'},af = nodes[0],aj = {id: 'aj', name:'der_prinz'},ak = {id: 'ak', name:'block'},al = {id: 'al', name:'doktor_pfeffer'},am = {id: 'am', name:'der_graf'},an = {id: 'an', name:'kilian'},aq = {id: 'aq', name:'der_jäger'} ; nodes.push( ae,aj,ak,al,am,an,aq ); links.push( {source: ae , target: af },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: al },{source: ae , target: am },{source: ae , target: ak },{source: ae , target: aq },{source: af , target: aj },{source: af , target: an },{source: af , target: al },{source: af , target: am },{source: af , target: ak },{source: af , target: aq },{source: aj , target: an },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: aq },{source: an , target: aq },{source: al , target: an },{source: al , target: am },{source: al , target: aq },{source: am , target: an },{source: am , target: aq },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ae = nodes[0],af = nodes[1],aj = nodes[2],ak = nodes[3],al = nodes[4],am = nodes[5],an = nodes[6],ao = {id: 'ao', name:'jörg'},ap = {id: 'ap', name:'schlüter'},aq = nodes[7] ; nodes.push( ao,ap ); links.push( {source: an , target: aq },{source: an , target: ap },{source: an , target: ao },{source: af , target: aq },{source: af , target: an },{source: af , target: ak },{source: af , target: al },{source: af , target: ap },{source: af , target: aj },{source: af , target: am },{source: af , target: ao },{source: ak , target: aq },{source: ak , target: an },{source: ak , target: al },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: ao },{source: ae , target: aq },{source: ae , target: an },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ap },{source: ae , target: aj },{source: ae , target: am },{source: ae , target: ao },{source: al , target: aq },{source: al , target: an },{source: al , target: ap },{source: al , target: am },{source: al , target: ao },{source: ap , target: aq },{source: aj , target: aq },{source: aj , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: ap },{source: aj , target: am },{source: aj , target: ao },{source: am , target: aq },{source: am , target: an },{source: am , target: ap },{source: am , target: ao },{source: ao , target: aq },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aq','an','af','ak','ae','al','ap','aj','am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ar = {id: 'ar', name:'erste_dame'},as = {id: 'as', name:'zweite_dame'},at = {id: 'at', name:'dritte_dame'},au = {id: 'au', name:'erster_kavalier'},av = {id: 'av', name:'zweiter_kavalier'} ; nodes.push( ar,as,at,au,av ); links.push( {source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ar = nodes[0],as = nodes[1],at = nodes[2],au = nodes[3],aw = {id: 'aw', name:'die_hofmeisterin'} ; nodes.push( aw ); links.push( {source: ar , target: aw },{source: ar , target: au },{source: ar , target: at },{source: ar , target: as },{source: au , target: aw },{source: at , target: aw },{source: at , target: au },{source: as , target: aw },{source: as , target: au },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aw','ar','au','at','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ah = {id: 'ah', name:'die_prinzessin'},ai = {id: 'ai', name:'der_könig'},aj = {id: 'aj', name:'der_prinz'},am = {id: 'am', name:'der_graf'} ; nodes.push( ah,ai,aj,am ); links.push( {source: ai , target: am },{source: ai , target: aj },{source: ah , target: ai },{source: ah , target: am },{source: ah , target: aj },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ae = {id: 'ae', name:'jacob'},ah = nodes[0],ai = nodes[1],am = nodes[3] ; nodes.push( ae ); links.push( {source: ae , target: ah },{source: ae , target: ai },{source: ae , target: am },{source: ah , target: ai },{source: ah , target: am },{source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 140000);
