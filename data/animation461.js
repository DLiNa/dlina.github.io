setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'lykon'},ab = {id: 'ab', name:'der_zeltwächter'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = {id: 'ac', name:'arratos'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'der_hauptmann'},ae = {id: 'ae', name:'mago'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ac = nodes[1],af = {id: 'af', name:'stimme_philaretes'} ; nodes.push( af ); links.push( {source: aa , target: ac },{source: aa , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ac = nodes[1],af = nodes[2],ag = {id: 'ag', name:'diokles'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ag },{source: ac , target: af },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],af = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ac = {id: 'ac', name:'arratos'},af = nodes[1],ag = {id: 'ag', name:'diokles'},ah = {id: 'ah', name:'myrrha'} ; nodes.push( ac,ag,ah ); links.push( {source: ac , target: af },{source: ac , target: ah },{source: ac , target: ag },{source: af , target: ah },{source: af , target: ag },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac','af','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ai = {id: 'ai', name:'die_erscheinung'} ; nodes.push( ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aj = {id: 'aj', name:'menesto'},ak = {id: 'ak', name:'bio'},al = {id: 'al', name:'phenippe'} ; nodes.push( aj,ak,al ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ah = {id: 'ah', name:'myrrha'},aj = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aj = nodes[1],ak = {id: 'ak', name:'bio'},al = {id: 'al', name:'phenippe'} ; nodes.push( ak,al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'al','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ah = {id: 'ah', name:'myrrha'},am = {id: 'am', name:'artemidor'} ; nodes.push( ah,am ); links.push( {source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ac = {id: 'ac', name:'arratos'},af = {id: 'af', name:'stimme_philaretes'},ah = nodes[0],am = nodes[1] ; nodes.push( ac,af ); links.push( {source: ah , target: am },{source: ac , target: ah },{source: ac , target: am },{source: ac , target: af },{source: af , target: ah },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ac = nodes[0],af = nodes[1],ag = {id: 'ag', name:'diokles'},ah = nodes[2],am = nodes[3] ; nodes.push( ag ); links.push( {source: ag , target: am },{source: ag , target: ah },{source: ac , target: ag },{source: ac , target: am },{source: ac , target: af },{source: ac , target: ah },{source: af , target: ag },{source: af , target: am },{source: af , target: ah },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','am','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ac = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = nodes[0],an = {id: 'an', name:'der_türhüter'} ; nodes.push( an ); links.push( {source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = nodes[0],af = {id: 'af', name:'stimme_philaretes'},ao = {id: 'ao', name:'der_erste_späher'},ap = {id: 'ap', name:'der_zweite_späher'} ; nodes.push( af,ao,ap ); links.push( {source: ac , target: ao },{source: ac , target: ap },{source: ac , target: af },{source: ao , target: ap },{source: af , target: ao },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aq = {id: 'aq', name:'die_bettler'},ar = {id: 'ar', name:'der_reisende'},as = {id: 'as', name:'deonax'},at = {id: 'at', name:'sosthenes'},au = {id: 'au', name:'einer_2.1'} ; nodes.push( aq,ar,as,at,au ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: as , target: at },{source: as , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ar','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aq = nodes[0],as = nodes[2],at = nodes[3],av = {id: 'av', name:'eurytimos'},aw = {id: 'aw', name:'einer_der_bettler'},ax = {id: 'ax', name:'der_erste_2.2'},ax = {id: 'ax', name:'der_erste_2.2'},ay = {id: 'ay', name:'ein_anderer_2.2'},az = {id: 'az', name:'rufe_2.2'},ba = {id: 'ba', name:'der_blinde'},bb = {id: 'bb', name:'mandros'},bc = {id: 'bc', name:'gemurmel'} ; nodes.push( av,aw,ax,ay,az,ba,bb,bc ); links.push( {source: aq , target: av },{source: aq , target: at },{source: aq , target: aw },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: aq , target: as },{source: aq , target: bb },{source: aq , target: bc },{source: aq , target: ax },{source: aq , target: ax },{source: av , target: aw },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: ax },{source: av , target: ax },{source: at , target: av },{source: at , target: aw },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: at , target: bc },{source: at , target: ax },{source: at , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: ax },{source: aw , target: ax },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: as , target: av },{source: as , target: at },{source: as , target: aw },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: bb },{source: as , target: bc },{source: as , target: ax },{source: as , target: ax },{source: bb , target: bc },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'at','ay','az','bb','bc','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ae = {id: 'ae', name:'mago'},ap = {id: 'ap', name:'der_zweite_späher'},ap = {id: 'ap', name:'der_zweite_späher'},aq = nodes[0],as = nodes[1],av = nodes[3],aw = nodes[4],ba = nodes[9],bd = {id: 'bd', name:'gubal'},be = {id: 'be', name:'der_karthagische_diener'} ; nodes.push( ae,ap,bd,be ); links.push( {source: ae , target: bd },{source: ae , target: aq },{source: ae , target: ap },{source: ae , target: ba },{source: ae , target: be },{source: ae , target: av },{source: ae , target: aw },{source: ae , target: as },{source: ae , target: ap },{source: bd , target: be },{source: aq , target: bd },{source: aq , target: ba },{source: aq , target: be },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: as },{source: ap , target: bd },{source: ap , target: aq },{source: ap , target: ba },{source: ap , target: be },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: as },{source: ba , target: bd },{source: ba , target: be },{source: av , target: bd },{source: av , target: ba },{source: av , target: be },{source: av , target: aw },{source: aw , target: bd },{source: aw , target: ba },{source: aw , target: be },{source: as , target: bd },{source: as , target: ba },{source: as , target: be },{source: as , target: av },{source: as , target: aw },{source: ap , target: bd },{source: ap , target: aq },{source: ap , target: ba },{source: ap , target: be },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae','bd','ap','be','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aq = nodes[3],as = nodes[4],av = nodes[5],ba = nodes[7],bf = {id: 'bf', name:'einer_aus_dem_volke'},bg = {id: 'bg', name:'ein_anderer_aus_dem_volke'},bh = {id: 'bh', name:'ein_dritter_aus_dem_volke'},bi = {id: 'bi', name:'mehrere_aus_dem_volke'} ; nodes.push( bf,bg,bh,bi ); links.push( {source: ba , target: bf },{source: ba , target: bg },{source: ba , target: bi },{source: ba , target: bh },{source: av , target: ba },{source: av , target: bf },{source: av , target: bg },{source: av , target: bi },{source: av , target: bh },{source: as , target: ba },{source: as , target: av },{source: as , target: bf },{source: as , target: bg },{source: as , target: bi },{source: as , target: bh },{source: aq , target: ba },{source: aq , target: av },{source: aq , target: as },{source: aq , target: bf },{source: aq , target: bg },{source: aq , target: bi },{source: aq , target: bh },{source: bf , target: bg },{source: bf , target: bi },{source: bf , target: bh },{source: bg , target: bi },{source: bg , target: bh },{source: bh , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'as','aq','bg','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = {id: 'ac', name:'arratos'},ag = {id: 'ag', name:'diokles'},am = {id: 'am', name:'artemidor'},ap = {id: 'ap', name:'der_zweite_späher'},av = nodes[2],ba = nodes[3],bf = nodes[4],bi = nodes[7],bi = nodes[7],bj = {id: 'bj', name:'hegesias'} ; nodes.push( ac,ag,am,ap,bj ); links.push( {source: bi , target: bj },{source: ac , target: bi },{source: ac , target: ba },{source: ac , target: av },{source: ac , target: am },{source: ac , target: ag },{source: ac , target: bj },{source: ac , target: bf },{source: ac , target: ap },{source: ac , target: bi },{source: ba , target: bi },{source: ba , target: bj },{source: ba , target: bf },{source: ba , target: bi },{source: av , target: bi },{source: av , target: ba },{source: av , target: bj },{source: av , target: bf },{source: av , target: bi },{source: am , target: bi },{source: am , target: ba },{source: am , target: av },{source: am , target: bj },{source: am , target: bf },{source: am , target: ap },{source: am , target: bi },{source: ag , target: bi },{source: ag , target: ba },{source: ag , target: av },{source: ag , target: am },{source: ag , target: bj },{source: ag , target: bf },{source: ag , target: ap },{source: ag , target: bi },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bi },{source: ap , target: bi },{source: ap , target: ba },{source: ap , target: av },{source: ap , target: bj },{source: ap , target: bf },{source: ap , target: bi },{source: bi , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'bi','av','am','ag','bj','bf','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = nodes[0],ae = {id: 'ae', name:'mago'},ba = nodes[5] ; nodes.push( ae ); links.push( {source: ae , target: ba },{source: ac , target: ae },{source: ac , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ac = nodes[0],ag = {id: 'ag', name:'diokles'},am = {id: 'am', name:'artemidor'},ba = nodes[2],bk = {id: 'bk', name:'erster_wächter'} ; nodes.push( ag,am,bk ); links.push( {source: ba , target: bk },{source: am , target: ba },{source: am , target: bk },{source: ac , target: ba },{source: ac , target: am },{source: ac , target: ag },{source: ac , target: bk },{source: ag , target: ba },{source: ag , target: am },{source: ag , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ba','am','ag','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = nodes[0],ae = {id: 'ae', name:'mago'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = nodes[0],af = {id: 'af', name:'stimme_philaretes'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = nodes[0],ba = {id: 'ba', name:'der_blinde'},bk = {id: 'bk', name:'erster_wächter'} ; nodes.push( ba,bk ); links.push( {source: ba , target: bk },{source: ac , target: bk },{source: ac , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'bk','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ba = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  af = {id: 'af', name:'stimme_philaretes'},ba = nodes[0] ; nodes.push( af ); links.push( {source: af , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  af = nodes[0],ba = nodes[1] ; /* nodes.push(); */ links.push( {source: af , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ah = {id: 'ah', name:'myrrha'},ba = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ah = nodes[0],am = {id: 'am', name:'artemidor'},ba = nodes[1] ; nodes.push( am ); links.push( {source: ah , target: ba },{source: ah , target: am },{source: am , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ah = nodes[0],aj = {id: 'aj', name:'menesto'},am = nodes[1] ; nodes.push( aj ); links.push( {source: aj , target: am },{source: ah , target: am },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'am','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ah = nodes[0],ba = {id: 'ba', name:'der_blinde'},bl = {id: 'bl', name:'der_erste_sklave'},bm = {id: 'bm', name:'der_zweite_sklave'},bn = {id: 'bn', name:'der_dritte_sklave'},bo = {id: 'bo', name:'der_vierte_sklave'},bp = {id: 'bp', name:'ein_sehr_alter_sklave'} ; nodes.push( ba,bl,bm,bn,bo,bp ); links.push( {source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bo },{source: bl , target: bp },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bp },{source: bn , target: bo },{source: bn , target: bp },{source: bo , target: bp },{source: ba , target: bl },{source: ba , target: bm },{source: ba , target: bn },{source: ba , target: bo },{source: ba , target: bp },{source: ah , target: bl },{source: ah , target: bm },{source: ah , target: bn },{source: ah , target: bo },{source: ah , target: ba },{source: ah , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'bl','bm','bn','bo','ba','bp','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ag = {id: 'ag', name:'diokles'},am = {id: 'am', name:'artemidor'},bq = {id: 'bq', name:'der_ältere_diener'},bq = {id: 'bq', name:'der_ältere_diener'},br = {id: 'br', name:'zwei_flötenspielerinnen'},bs = {id: 'bs', name:'einer_4.1'},bt = {id: 'bt', name:'ktesias'},bu = {id: 'bu', name:'lysimachos'},bv = {id: 'bv', name:'hermachos'} ; nodes.push( ag,am,bq,br,bs,bt,bu,bv ); links.push( {source: am , target: bq },{source: am , target: bq },{source: am , target: br },{source: am , target: bs },{source: am , target: bt },{source: am , target: bu },{source: am , target: bv },{source: ag , target: am },{source: ag , target: bq },{source: ag , target: bq },{source: ag , target: br },{source: ag , target: bs },{source: ag , target: bt },{source: ag , target: bu },{source: ag , target: bv },{source: bq , target: br },{source: bq , target: bs },{source: bq , target: bt },{source: bq , target: bu },{source: bq , target: bv },{source: bq , target: br },{source: bq , target: bs },{source: bq , target: bt },{source: bq , target: bu },{source: bq , target: bv },{source: br , target: bs },{source: br , target: bt },{source: br , target: bu },{source: br , target: bv },{source: bs , target: bt },{source: bs , target: bu },{source: bs , target: bv },{source: bt , target: bu },{source: bt , target: bv },{source: bu , target: bv } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'bq','br','bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ag = nodes[0],am = nodes[1],bt = nodes[6],bu = nodes[7],bv = nodes[8],bw = {id: 'bw', name:'eins_der_mädchen'},bw = {id: 'bw', name:'eins_der_mädchen'},bx = {id: 'bx', name:'die_zweite'},by = {id: 'by', name:'die_dritte'},bz = {id: 'bz', name:'die_mädchen'},ca = {id: 'ca', name:'einer_4.2'},cb = {id: 'cb', name:'ein_zweiter_4.2'},cc = {id: 'cc', name:'ein_dritter_4.2'},cd = {id: 'cd', name:'phaino'},ce = {id: 'ce', name:'strution'},cf = {id: 'cf', name:'wirre_rufe'},cf = {id: 'cf', name:'wirre_rufe'} ; nodes.push( bw,bx,by,bz,ca,cb,cc,cd,ce,cf ); links.push( {source: ag , target: bw },{source: ag , target: bx },{source: ag , target: by },{source: ag , target: bz },{source: ag , target: ca },{source: ag , target: cb },{source: ag , target: cc },{source: ag , target: bu },{source: ag , target: bv },{source: ag , target: bw },{source: ag , target: cd },{source: ag , target: am },{source: ag , target: ce },{source: ag , target: cf },{source: ag , target: bt },{source: ag , target: cf },{source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bw , target: ca },{source: bw , target: cb },{source: bw , target: cc },{source: bw , target: cd },{source: bw , target: ce },{source: bw , target: cf },{source: bw , target: cf },{source: bx , target: by },{source: bx , target: bz },{source: bx , target: ca },{source: bx , target: cb },{source: bx , target: cc },{source: bx , target: cd },{source: bx , target: ce },{source: bx , target: cf },{source: bx , target: cf },{source: by , target: bz },{source: by , target: ca },{source: by , target: cb },{source: by , target: cc },{source: by , target: cd },{source: by , target: ce },{source: by , target: cf },{source: by , target: cf },{source: bz , target: ca },{source: bz , target: cb },{source: bz , target: cc },{source: bz , target: cd },{source: bz , target: ce },{source: bz , target: cf },{source: bz , target: cf },{source: ca , target: cb },{source: ca , target: cc },{source: ca , target: cd },{source: ca , target: ce },{source: ca , target: cf },{source: ca , target: cf },{source: cb , target: cc },{source: cb , target: cd },{source: cb , target: ce },{source: cb , target: cf },{source: cb , target: cf },{source: cc , target: cd },{source: cc , target: ce },{source: cc , target: cf },{source: cc , target: cf },{source: bu , target: bw },{source: bu , target: bx },{source: bu , target: by },{source: bu , target: bz },{source: bu , target: ca },{source: bu , target: cb },{source: bu , target: cc },{source: bu , target: bv },{source: bu , target: bw },{source: bu , target: cd },{source: bu , target: ce },{source: bu , target: cf },{source: bu , target: cf },{source: bv , target: bw },{source: bv , target: bx },{source: bv , target: by },{source: bv , target: bz },{source: bv , target: ca },{source: bv , target: cb },{source: bv , target: cc },{source: bv , target: bw },{source: bv , target: cd },{source: bv , target: ce },{source: bv , target: cf },{source: bv , target: cf },{source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bw , target: ca },{source: bw , target: cb },{source: bw , target: cc },{source: bw , target: cd },{source: bw , target: ce },{source: bw , target: cf },{source: bw , target: cf },{source: cd , target: ce },{source: cd , target: cf },{source: cd , target: cf },{source: am , target: bw },{source: am , target: bx },{source: am , target: by },{source: am , target: bz },{source: am , target: ca },{source: am , target: cb },{source: am , target: cc },{source: am , target: bu },{source: am , target: bv },{source: am , target: bw },{source: am , target: cd },{source: am , target: ce },{source: am , target: cf },{source: am , target: bt },{source: am , target: cf },{source: ce , target: cf },{source: ce , target: cf },{source: bt , target: bw },{source: bt , target: bx },{source: bt , target: by },{source: bt , target: bz },{source: bt , target: ca },{source: bt , target: cb },{source: bt , target: cc },{source: bt , target: bu },{source: bt , target: bv },{source: bt , target: bw },{source: bt , target: cd },{source: bt , target: ce },{source: bt , target: cf },{source: bt , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'bw','bx','by','bz','ca','cb','cc' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ag = nodes[0],am = nodes[1],av = {id: 'av', name:'eurytimos'},ba = {id: 'ba', name:'der_blinde'},bt = nodes[2],bu = nodes[3],bv = nodes[4],cd = nodes[13],ce = nodes[14],cf = nodes[15],cf = nodes[15] ; nodes.push( av,ba ); links.push( {source: ag , target: bt },{source: ag , target: ba },{source: ag , target: bu },{source: ag , target: cd },{source: ag , target: am },{source: ag , target: cf },{source: ag , target: av },{source: ag , target: bv },{source: ag , target: ce },{source: ag , target: cf },{source: bt , target: bu },{source: bt , target: cd },{source: bt , target: cf },{source: bt , target: bv },{source: bt , target: ce },{source: bt , target: cf },{source: ba , target: bt },{source: ba , target: bu },{source: ba , target: cd },{source: ba , target: cf },{source: ba , target: bv },{source: ba , target: ce },{source: ba , target: cf },{source: bu , target: cd },{source: bu , target: cf },{source: bu , target: bv },{source: bu , target: ce },{source: bu , target: cf },{source: cd , target: cf },{source: cd , target: ce },{source: cd , target: cf },{source: am , target: bt },{source: am , target: ba },{source: am , target: bu },{source: am , target: cd },{source: am , target: cf },{source: am , target: av },{source: am , target: bv },{source: am , target: ce },{source: am , target: cf },{source: av , target: bt },{source: av , target: ba },{source: av , target: bu },{source: av , target: cd },{source: av , target: cf },{source: av , target: bv },{source: av , target: ce },{source: av , target: cf },{source: bv , target: cd },{source: bv , target: cf },{source: bv , target: ce },{source: bv , target: cf },{source: ce , target: cf },{source: ce , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'bu','cd','cf','bv','ce' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ae = {id: 'ae', name:'mago'},ag = nodes[0],am = nodes[1],av = nodes[2],ba = nodes[3],bk = {id: 'bk', name:'erster_wächter'},bk = {id: 'bk', name:'erster_wächter'},bt = nodes[4] ; nodes.push( ae,bk ); links.push( {source: ae , target: ag },{source: ae , target: bt },{source: ae , target: am },{source: ae , target: ba },{source: ae , target: av },{source: ae , target: bk },{source: ae , target: bk },{source: ag , target: bt },{source: ag , target: am },{source: ag , target: ba },{source: ag , target: av },{source: ag , target: bk },{source: ag , target: bk },{source: am , target: bt },{source: am , target: ba },{source: am , target: av },{source: am , target: bk },{source: am , target: bk },{source: ba , target: bt },{source: ba , target: bk },{source: ba , target: bk },{source: av , target: bt },{source: av , target: ba },{source: av , target: bk },{source: av , target: bk },{source: bk , target: bt },{source: bk , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ae','ag','bt','am','ba','av','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ac = {id: 'ac', name:'arratos'},an = {id: 'an', name:'der_türhüter'} ; nodes.push( ac,an ); links.push( {source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ac = nodes[0],ao = {id: 'ao', name:'der_erste_späher'} ; nodes.push( ao ); links.push( {source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ac = nodes[0],ao = nodes[1],ap = {id: 'ap', name:'der_zweite_späher'} ; nodes.push( ap ); links.push( {source: ac , target: ap },{source: ac , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ac = nodes[0],af = {id: 'af', name:'stimme_philaretes'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ac = nodes[0],ao = {id: 'ao', name:'der_erste_späher'},ap = {id: 'ap', name:'der_zweite_späher'} ; nodes.push( ao,ap ); links.push( {source: ac , target: ao },{source: ac , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ac = nodes[0],af = {id: 'af', name:'stimme_philaretes'},an = {id: 'an', name:'der_türhüter'} ; nodes.push( af,an ); links.push( {source: af , target: an },{source: ac , target: af },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'af','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ac = nodes[0],ah = {id: 'ah', name:'myrrha'} ; nodes.push( ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ac = nodes[0],ag = {id: 'ag', name:'diokles'},bj = {id: 'bj', name:'hegesias'},bt = {id: 'bt', name:'ktesias'} ; nodes.push( ag,bj,bt ); links.push( {source: ac , target: bj },{source: ac , target: ag },{source: ac , target: bt },{source: bj , target: bt },{source: ag , target: bj },{source: ag , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'bj','bt' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ac = nodes[0],ag = nodes[1],ah = {id: 'ah', name:'myrrha'},an = {id: 'an', name:'der_türhüter'},cg = {id: 'cg', name:'rufe_5.10'} ; nodes.push( ah,an,cg ); links.push( {source: ac , target: an },{source: ac , target: ag },{source: ac , target: cg },{source: ac , target: ah },{source: an , target: cg },{source: ag , target: an },{source: ag , target: cg },{source: ag , target: ah },{source: ah , target: an },{source: ah , target: cg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ac = nodes[0],af = {id: 'af', name:'stimme_philaretes'},ag = nodes[1],ah = nodes[2],av = {id: 'av', name:'eurytimos'},ba = {id: 'ba', name:'der_blinde'},cg = nodes[4] ; nodes.push( af,av,ba ); links.push( {source: ag , target: ba },{source: ag , target: cg },{source: ag , target: ah },{source: ag , target: av },{source: ba , target: cg },{source: ac , target: ag },{source: ac , target: ba },{source: ac , target: cg },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: av },{source: ah , target: ba },{source: ah , target: cg },{source: ah , target: av },{source: af , target: ag },{source: af , target: ba },{source: af , target: cg },{source: af , target: ah },{source: af , target: av },{source: av , target: ba },{source: av , target: cg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 245000);
