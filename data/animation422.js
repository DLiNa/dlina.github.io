setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'die_gemeinde'},ab = {id: 'ab', name:'walther'},ac = {id: 'ac', name:'magdalene'},ad = {id: 'ad', name:'eva'},ae = {id: 'ae', name:'david'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ae = nodes[1],af = {id: 'af', name:'zweiter_lehrbube'},ag = {id: 'ag', name:'erster_lehrbube'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ah = {id: 'ah', name:'ein_paar_lehrbuben'} ; nodes.push( af,ag,ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ah },{source: af , target: ah },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ah },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ae = nodes[1],ah = nodes[2],ai = {id: 'ai', name:'pogners_stimme'},aj = {id: 'aj', name:'beckmesser'},ak = {id: 'ak', name:'sachs'},al = {id: 'al', name:'vogelgesang'},am = {id: 'am', name:'nachtigall'},an = {id: 'an', name:'kothner'},an = {id: 'an', name:'kothner'},ao = {id: 'ao', name:'ortel'},ap = {id: 'ap', name:'zorn'},aq = {id: 'aq', name:'moser'},ar = {id: 'ar', name:'der_lehrbube'},ar = {id: 'ar', name:'der_lehrbube'},as = {id: 'as', name:'eisslinger'},at = {id: 'at', name:'foltz'},au = {id: 'au', name:'schwarz'},av = {id: 'av', name:'mehrere_meister'},av = {id: 'av', name:'mehrere_meister'},av = {id: 'av', name:'mehrere_meister'} ; nodes.push( ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: av },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av },{source: ai , target: av },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: av },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: aj , target: au },{source: aj , target: av },{source: aj , target: av },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: av },{source: ab , target: ar },{source: ab , target: ae },{source: ab , target: as },{source: ab , target: at },{source: ab , target: au },{source: ab , target: av },{source: ab , target: ah },{source: ab , target: av },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: av },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: ak , target: av },{source: al , target: am },{source: al , target: an },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: av },{source: al , target: ar },{source: al , target: as },{source: al , target: at },{source: al , target: au },{source: al , target: av },{source: al , target: av },{source: am , target: an },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: av },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: am , target: av },{source: am , target: av },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: av },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: av },{source: an , target: av },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: av },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: av },{source: an , target: av },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: av },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: av },{source: ao , target: av },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: av },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: av },{source: aq , target: ar },{source: aq , target: av },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: av },{source: ar , target: av },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: av },{source: ar , target: av },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: av },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ar },{source: ae , target: av },{source: ae , target: ar },{source: ae , target: as },{source: ae , target: at },{source: ae , target: au },{source: ae , target: av },{source: ae , target: ah },{source: ae , target: av },{source: as , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: av },{source: at , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: av },{source: au , target: av },{source: au , target: av },{source: au , target: av },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: av },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: av },{source: ah , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ai','aj','ab','al','am','an','ao','ap','aq','ar','av','as','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = {id: 'ac', name:'magdalene'},ae = nodes[0],ah = nodes[1],ah = nodes[1],ak = nodes[2] ; nodes.push( ac ); links.push( {source: ah , target: ak },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ak },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ak },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ac = nodes[0],ad = {id: 'ad', name:'eva'},ai = {id: 'ai', name:'pogners_stimme'} ; nodes.push( ad,ai ); links.push( {source: ad , target: ai },{source: ac , target: ai },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ai','ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = {id: 'ae', name:'david'},ak = {id: 'ak', name:'sachs'} ; nodes.push( ae,ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = {id: 'ac', name:'magdalene'},ad = {id: 'ad', name:'eva'},ai = {id: 'ai', name:'pogners_stimme'},ak = nodes[0] ; nodes.push( ac,ad,ai ); links.push( {source: ad , target: ak },{source: ad , target: ai },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = {id: 'ab', name:'walther'},ac = nodes[0],ad = nodes[1],ak = nodes[2],aw = {id: 'aw', name:'der_nachtwächter'} ; nodes.push( ab,aw ); links.push( {source: ad , target: aw },{source: ad , target: ak },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: aw },{source: ab , target: ak },{source: ac , target: ad },{source: ac , target: aw },{source: ac , target: ak },{source: ak , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = nodes[0],ac = nodes[1],ad = nodes[2],ae = {id: 'ae', name:'david'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ai = {id: 'ai', name:'pogners_stimme'},aj = {id: 'aj', name:'beckmesser'},ak = nodes[4],av = {id: 'av', name:'mehrere_meister'},aw = nodes[5],ax = {id: 'ax', name:'andere_nachbarn'},ax = {id: 'ax', name:'andere_nachbarn'},ax = {id: 'ax', name:'andere_nachbarn'},ay = {id: 'ay', name:'erster_nachbar'},ay = {id: 'ay', name:'erster_nachbar'},az = {id: 'az', name:'zweiter_nachbar'},az = {id: 'az', name:'zweiter_nachbar'},ba = {id: 'ba', name:'gesellen'},bb = {id: 'bb', name:'die_nachbarinnen'} ; nodes.push( ae,ah,ai,aj,av,ax,ay,az,ba,bb ); links.push( {source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ae },{source: ad , target: ax },{source: ad , target: ax },{source: ad , target: ay },{source: ad , target: az },{source: ad , target: ay },{source: ad , target: az },{source: ad , target: ah },{source: ad , target: ah },{source: ad , target: ah },{source: ad , target: ah },{source: ad , target: ah },{source: ad , target: ax },{source: ad , target: ba },{source: ad , target: av },{source: ad , target: bb },{source: ad , target: ai },{source: ad , target: aw },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: ae },{source: ab , target: ax },{source: ab , target: ac },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: az },{source: ab , target: ay },{source: ab , target: az },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ax },{source: ab , target: ba },{source: ab , target: av },{source: ab , target: bb },{source: ab , target: ai },{source: ab , target: aw },{source: ak , target: ax },{source: ak , target: ax },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: ax },{source: ak , target: ba },{source: ak , target: av },{source: ak , target: bb },{source: ak , target: aw },{source: aj , target: ak },{source: aj , target: ax },{source: aj , target: ax },{source: aj , target: ay },{source: aj , target: az },{source: aj , target: ay },{source: aj , target: az },{source: aj , target: ax },{source: aj , target: ba },{source: aj , target: av },{source: aj , target: bb },{source: aj , target: aw },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: ax },{source: ae , target: ax },{source: ae , target: ay },{source: ae , target: az },{source: ae , target: ay },{source: ae , target: az },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ax },{source: ae , target: ba },{source: ae , target: av },{source: ae , target: bb },{source: ae , target: ai },{source: ae , target: aw },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ae },{source: ac , target: ax },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: az },{source: ac , target: ay },{source: ac , target: az },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: ax },{source: ac , target: ba },{source: ac , target: av },{source: ac , target: bb },{source: ac , target: ai },{source: ac , target: aw },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ay , target: az },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: az , target: ba },{source: az , target: bb },{source: ay , target: az },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: az , target: ba },{source: az , target: bb },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ax },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ax },{source: ah , target: ba },{source: ah , target: av },{source: ah , target: bb },{source: ah , target: ai },{source: ah , target: aw },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ax },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ax },{source: ah , target: ba },{source: ah , target: av },{source: ah , target: bb },{source: ah , target: ai },{source: ah , target: aw },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ax },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ax },{source: ah , target: ba },{source: ah , target: av },{source: ah , target: bb },{source: ah , target: ai },{source: ah , target: aw },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ax },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ax },{source: ah , target: ba },{source: ah , target: av },{source: ah , target: bb },{source: ah , target: ai },{source: ah , target: aw },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ax },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ax },{source: ah , target: ba },{source: ah , target: av },{source: ah , target: bb },{source: ah , target: ai },{source: ah , target: aw },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ba , target: bb },{source: av , target: ax },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ay },{source: av , target: az },{source: av , target: ax },{source: av , target: ba },{source: av , target: bb },{source: av , target: aw },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: ax },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: az },{source: ai , target: ay },{source: ai , target: az },{source: ai , target: ax },{source: ai , target: ba },{source: ai , target: av },{source: ai , target: bb },{source: ai , target: aw },{source: aw , target: ax },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ax },{source: aw , target: ba },{source: aw , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ad','ab','aj','ax','ac','ay','az','ah','ba','av','bb','ai','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ae = nodes[0],ak = nodes[2] ; /* nodes.push(); */ links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = {id: 'ab', name:'walther'},ak = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aj = {id: 'aj', name:'beckmesser'},ak = nodes[0] ; nodes.push( aj ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'walther'},ac = {id: 'ac', name:'magdalene'},ad = {id: 'ad', name:'eva'},ae = {id: 'ae', name:'david'},ak = nodes[0] ; nodes.push( ab,ac,ad,ae ); links.push( {source: ad , target: ak },{source: ad , target: ae },{source: ab , target: ak },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ae , target: ak },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = nodes[0],ad = nodes[1],ae = nodes[2],ah = {id: 'ah', name:'ein_paar_lehrbuben'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ah = {id: 'ah', name:'ein_paar_lehrbuben'},ai = {id: 'ai', name:'pogners_stimme'},aj = {id: 'aj', name:'beckmesser'},ak = nodes[4],al = {id: 'al', name:'vogelgesang'},am = {id: 'am', name:'nachtigall'},an = {id: 'an', name:'kothner'},ao = {id: 'ao', name:'ortel'},at = {id: 'at', name:'foltz'},av = {id: 'av', name:'mehrere_meister'},ba = {id: 'ba', name:'gesellen'},bc = {id: 'bc', name:'die_schuster'},bd = {id: 'bd', name:'die_schneider'},be = {id: 'be', name:'die_bäcker'},bf = {id: 'bf', name:'alles_volk'},bf = {id: 'bf', name:'alles_volk'},bf = {id: 'bf', name:'alles_volk'},bg = {id: 'bg', name:'die_meistersinger'},bg = {id: 'bg', name:'die_meistersinger'} ; nodes.push( ah,ai,aj,al,am,an,ao,at,av,ba,bc,bd,be,bf,bg ); links.push( {source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bf },{source: bc , target: bf },{source: bc , target: bg },{source: bc , target: bg },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bf },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bg },{source: be , target: bf },{source: be , target: bf },{source: be , target: bf },{source: be , target: bg },{source: be , target: bg },{source: ah , target: bc },{source: ah , target: bd },{source: ah , target: be },{source: ah , target: ba },{source: ah , target: bf },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: bf },{source: ah , target: av },{source: ah , target: bf },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ao },{source: ah , target: at },{source: ah , target: bg },{source: ah , target: bg },{source: ae , target: bc },{source: ae , target: bd },{source: ae , target: be },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ba },{source: ae , target: bf },{source: ae , target: ak },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: an },{source: ae , target: bf },{source: ae , target: ah },{source: ae , target: av },{source: ae , target: bf },{source: ae , target: am },{source: ae , target: al },{source: ae , target: ao },{source: ae , target: at },{source: ae , target: bg },{source: ae , target: bg },{source: ah , target: bc },{source: ah , target: bd },{source: ah , target: be },{source: ah , target: ba },{source: ah , target: bf },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: bf },{source: ah , target: av },{source: ah , target: bf },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ao },{source: ah , target: at },{source: ah , target: bg },{source: ah , target: bg },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: be },{source: ba , target: bf },{source: ba , target: bf },{source: ba , target: bf },{source: ba , target: bg },{source: ba , target: bg },{source: bf , target: bg },{source: bf , target: bg },{source: ak , target: bc },{source: ak , target: bd },{source: ak , target: be },{source: ak , target: ba },{source: ak , target: bf },{source: ak , target: an },{source: ak , target: bf },{source: ak , target: av },{source: ak , target: bf },{source: ak , target: am },{source: ak , target: al },{source: ak , target: ao },{source: ak , target: at },{source: ak , target: bg },{source: ak , target: bg },{source: ai , target: bc },{source: ai , target: bd },{source: ai , target: be },{source: ai , target: ba },{source: ai , target: bf },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: an },{source: ai , target: bf },{source: ai , target: av },{source: ai , target: bf },{source: ai , target: am },{source: ai , target: al },{source: ai , target: ao },{source: ai , target: at },{source: ai , target: bg },{source: ai , target: bg },{source: aj , target: bc },{source: aj , target: bd },{source: aj , target: be },{source: aj , target: ba },{source: aj , target: bf },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: bf },{source: aj , target: av },{source: aj , target: bf },{source: aj , target: am },{source: aj , target: al },{source: aj , target: ao },{source: aj , target: at },{source: aj , target: bg },{source: aj , target: bg },{source: an , target: bc },{source: an , target: bd },{source: an , target: be },{source: an , target: ba },{source: an , target: bf },{source: an , target: bf },{source: an , target: av },{source: an , target: bf },{source: an , target: ao },{source: an , target: at },{source: an , target: bg },{source: an , target: bg },{source: bf , target: bg },{source: bf , target: bg },{source: ah , target: bc },{source: ah , target: bd },{source: ah , target: be },{source: ah , target: ba },{source: ah , target: bf },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: bf },{source: ah , target: av },{source: ah , target: bf },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ao },{source: ah , target: at },{source: ah , target: bg },{source: ah , target: bg },{source: av , target: bc },{source: av , target: bd },{source: av , target: be },{source: av , target: ba },{source: av , target: bf },{source: av , target: bf },{source: av , target: bf },{source: av , target: bg },{source: av , target: bg },{source: bf , target: bg },{source: bf , target: bg },{source: am , target: bc },{source: am , target: bd },{source: am , target: be },{source: am , target: ba },{source: am , target: bf },{source: am , target: an },{source: am , target: bf },{source: am , target: av },{source: am , target: bf },{source: am , target: ao },{source: am , target: at },{source: am , target: bg },{source: am , target: bg },{source: al , target: bc },{source: al , target: bd },{source: al , target: be },{source: al , target: ba },{source: al , target: bf },{source: al , target: an },{source: al , target: bf },{source: al , target: av },{source: al , target: bf },{source: al , target: am },{source: al , target: ao },{source: al , target: at },{source: al , target: bg },{source: al , target: bg },{source: ao , target: bc },{source: ao , target: bd },{source: ao , target: be },{source: ao , target: ba },{source: ao , target: bf },{source: ao , target: bf },{source: ao , target: av },{source: ao , target: bf },{source: ao , target: at },{source: ao , target: bg },{source: ao , target: bg },{source: at , target: bc },{source: at , target: bd },{source: at , target: be },{source: at , target: ba },{source: at , target: bf },{source: at , target: bf },{source: at , target: av },{source: at , target: bf },{source: at , target: bg },{source: at , target: bg },{source: ab , target: bc },{source: ab , target: bd },{source: ab , target: be },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ba },{source: ab , target: bf },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: an },{source: ab , target: bf },{source: ab , target: ah },{source: ab , target: av },{source: ab , target: bf },{source: ab , target: am },{source: ab , target: al },{source: ab , target: ao },{source: ab , target: at },{source: ab , target: bg },{source: ab , target: bg },{source: ab , target: ad },{source: ad , target: bc },{source: ad , target: bd },{source: ad , target: be },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ba },{source: ad , target: bf },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: an },{source: ad , target: bf },{source: ad , target: ah },{source: ad , target: av },{source: ad , target: bf },{source: ad , target: am },{source: ad , target: al },{source: ad , target: ao },{source: ad , target: at },{source: ad , target: bg },{source: ad , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 65000);
