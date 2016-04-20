setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'luzifer'},ab = {id: 'ab', name:'satan'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vorspiel'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ac = {id: 'ac', name:'placidus'},ad = {id: 'ad', name:'candidas_stimme'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vorspiel'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = nodes[0],ad = nodes[1],ad = nodes[1],ae = {id: 'ae', name:'kirchengesang'} ; nodes.push( ae ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ad },{source: ad , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vorspiel'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = nodes[0],af = {id: 'af', name:'merlins_gesang'},af = {id: 'af', name:'merlins_gesang'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = {id: 'ab', name:'satan'},af = nodes[0],ag = {id: 'ag', name:'kay'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ag },{source: ab , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ag = nodes[0],ah = {id: 'ah', name:'klingsor'},ai = {id: 'ai', name:'zwerg'},aj = {id: 'aj', name:'antinous'},ak = {id: 'ak', name:'die_götter'},al = {id: 'al', name:'hamadryaden'} ; nodes.push( ah,ai,aj,ak,al ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah','ai','aj','ak','al','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ab = {id: 'ab', name:'satan'},af = {id: 'af', name:'merlins_gesang'} ; nodes.push( ab,af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ag = {id: 'ag', name:'kay'},am = {id: 'am', name:'artus'},am = {id: 'am', name:'artus'},an = {id: 'an', name:'minstrel'} ; nodes.push( ag,am,an ); links.push( {source: am , target: an },{source: ag , target: am },{source: ag , target: am },{source: ag , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '5';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  am = nodes[0],an = nodes[1],ao = {id: 'ao', name:'der_seneschal'},ap = {id: 'ap', name:'gawein'},aq = {id: 'aq', name:'gareis'},ar = {id: 'ar', name:'erek'},as = {id: 'as', name:'andre'} ; nodes.push( ao,ap,aq,ar,as ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ar , target: as },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: an },{source: am , target: as },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '6';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ao','ap','aq','ar','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  am = nodes[0],as = nodes[1],at = {id: 'at', name:'ginevra'},au = {id: 'au', name:'lanzelot'} ; nodes.push( at,au ); links.push( {source: am , target: at },{source: am , target: au },{source: am , target: as },{source: at , target: au },{source: as , target: at },{source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '7';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am','at','au','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = {id: 'ab', name:'satan'},af = {id: 'af', name:'merlins_gesang'},ah = {id: 'ah', name:'klingsor'} ; nodes.push( ab,af,ah ); links.push( {source: af , target: ah },{source: ab , target: ah },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '8';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ah','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  af = nodes[0],am = {id: 'am', name:'artus'},ap = {id: 'ap', name:'gawein'},aq = {id: 'aq', name:'gareis'},ar = {id: 'ar', name:'erek'},at = {id: 'at', name:'ginevra'},au = {id: 'au', name:'lanzelot'},av = {id: 'av', name:'niniana'} ; nodes.push( am,ap,aq,ar,at,au,av ); links.push( {source: am , target: av },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: at },{source: am , target: au },{source: ap , target: av },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: at },{source: ap , target: au },{source: aq , target: av },{source: aq , target: ar },{source: aq , target: at },{source: aq , target: au },{source: ar , target: av },{source: ar , target: at },{source: ar , target: au },{source: at , target: av },{source: at , target: au },{source: au , target: av },{source: af , target: av },{source: af , target: am },{source: af , target: ap },{source: af , target: aq },{source: af , target: ar },{source: af , target: at },{source: af , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Der Gral'; var scene = document.getElementById('scene');scene.innerHTML = '9';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'av','am','ap','aq','ar','at','au','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ah = {id: 'ah', name:'klingsor'},ai = {id: 'ai', name:'zwerg'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Castel Merveil'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aw = {id: 'aw', name:'parzifal'},ax = {id: 'ax', name:'lohengrin'},ay = {id: 'ay', name:'titurel'} ; nodes.push( aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Castel Merveil'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aw','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  am = {id: 'am', name:'artus'},ap = {id: 'ap', name:'gawein'},aq = {id: 'aq', name:'gareis'},ar = {id: 'ar', name:'erek'},as = {id: 'as', name:'andre'},as = {id: 'as', name:'andre'},at = {id: 'at', name:'ginevra'},au = {id: 'au', name:'lanzelot'},az = {id: 'az', name:'ein_ritter'} ; nodes.push( am,ap,aq,ar,as,at,au,az ); links.push( {source: at , target: au },{source: at , target: az },{source: am , target: at },{source: am , target: au },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: az },{source: am , target: as },{source: am , target: as },{source: au , target: az },{source: ap , target: at },{source: ap , target: au },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: az },{source: ap , target: as },{source: ap , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: ar },{source: aq , target: az },{source: aq , target: as },{source: aq , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: az },{source: ar , target: as },{source: ar , target: as },{source: as , target: at },{source: as , target: au },{source: as , target: az },{source: as , target: at },{source: as , target: au },{source: as , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Castel Merveil'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'at','am','au','ap','aq','ar','az','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  af = {id: 'af', name:'merlins_gesang'},av = {id: 'av', name:'niniana'} ; nodes.push( af,av ); links.push( {source: af , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Castel Merveil'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'av','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  am = {id: 'am', name:'artus'},ap = {id: 'ap', name:'gawein'},at = {id: 'at', name:'ginevra'},au = {id: 'au', name:'lanzelot'},az = {id: 'az', name:'ein_ritter'},ba = {id: 'ba', name:'speisemeister'} ; nodes.push( am,ap,at,au,az,ba ); links.push( {source: at , target: au },{source: at , target: ba },{source: at , target: az },{source: am , target: at },{source: am , target: au },{source: am , target: ba },{source: am , target: ap },{source: am , target: az },{source: au , target: ba },{source: au , target: az },{source: ap , target: at },{source: ap , target: au },{source: ap , target: ba },{source: ap , target: az },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Castel Merveil'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'at','am','au','ba','ap','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  af = {id: 'af', name:'merlins_gesang'},as = {id: 'as', name:'andre'},as = {id: 'as', name:'andre'},av = {id: 'av', name:'niniana'} ; nodes.push( af,as,av ); links.push( {source: af , target: av },{source: af , target: as },{source: af , target: as },{source: as , target: av },{source: as , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Castel Merveil'; var scene = document.getElementById('scene');scene.innerHTML = '5';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'av','af','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = {id: 'ac', name:'placidus'},an = {id: 'an', name:'minstrel'},ax = {id: 'ax', name:'lohengrin'} ; nodes.push( ac,an,ax ); links.push( {source: an , target: ax },{source: ac , target: ax },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Merlin der Dulder'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ax','an','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ab = {id: 'ab', name:'satan'},af = {id: 'af', name:'merlins_gesang'} ; nodes.push( ab,af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Merlin der Dulder'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 95000);
