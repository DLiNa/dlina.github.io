setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'fischer'},ab = {id: 'ab', name:'müller'},ac = {id: 'ac', name:'schlosser'},ad = {id: 'ad', name:'leutner'},ae = {id: 'ae', name:'stimmen'},ae = {id: 'ae', name:'stimmen'},af = {id: 'af', name:'bötticher'},ag = {id: 'ag', name:'wiesener'},ah = {id: 'ah', name:'lampenputzer'},ai = {id: 'ai', name:'dichter'},aj = {id: 'aj', name:'nachbar'},ak = {id: 'ak', name:'stimme_von_der_galerie'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Prolog'; var scene = document.getElementById('scene');scene.innerHTML = 'Prolog';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ae','af','ag','ah','ai','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],al = {id: 'al', name:'lorenz'},am = {id: 'am', name:'barthel'},an = {id: 'an', name:'gottlieb'},ao = {id: 'ao', name:'hinze'},ao = {id: 'ao', name:'hinze'},ap = {id: 'ap', name:'die_kunstrichter'},aq = {id: 'aq', name:'schuhmacher'} ; nodes.push( al,am,an,ao,ap,aq ); links.push( {source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: ao },{source: al , target: aq },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: ao },{source: ad , target: aq },{source: ab , target: al },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: ao },{source: ab , target: aq },{source: ac , target: al },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: ao },{source: ac , target: aq },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: ao },{source: am , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: ao },{source: an , target: aq },{source: aa , target: al },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ap },{source: aa , target: ao },{source: aa , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ap , target: aq },{source: ao , target: ap },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'al','am','an','ao','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ar = {id: 'ar', name:'der_könig'},as = {id: 'as', name:'die_prinzessin'},as = {id: 'as', name:'die_prinzessin'},at = {id: 'at', name:'leander'},au = {id: 'au', name:'kammerdiener'},av = {id: 'av', name:'nathanael'} ; nodes.push( ar,as,at,au,av ); links.push( {source: ar , target: as },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: as },{source: aa , target: at },{source: aa , target: au },{source: aa , target: av },{source: aa , target: ad },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: ad },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: ac },{source: ab , target: as },{source: ab , target: at },{source: ab , target: au },{source: ab , target: av },{source: ab , target: ad },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: as },{source: ad , target: at },{source: ad , target: au },{source: ad , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ar','as','aa','ac','ab','at','au','av','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  al = {id: 'al', name:'lorenz'},aw = {id: 'aw', name:'der_wirt'},ax = {id: 'ax', name:'kunz'},ay = {id: 'ay', name:'michel'},az = {id: 'az', name:'soldat'},ba = {id: 'ba', name:'erster_husar'},bb = {id: 'bb', name:'zweiter_husar'} ; nodes.push( al,aw,ax,ay,az,ba,bb ); links.push( {source: al , target: aw },{source: al , target: ax },{source: al , target: ay },{source: al , target: az },{source: al , target: ba },{source: al , target: bb },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: az , target: ba },{source: az , target: bb },{source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'al','aw','ax','ay','az','ba','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'fischer'},ab = {id: 'ab', name:'müller'},ac = {id: 'ac', name:'schlosser'},ad = {id: 'ad', name:'leutner'},af = {id: 'af', name:'bötticher'},ag = {id: 'ag', name:'wiesener'},aj = {id: 'aj', name:'nachbar'} ; nodes.push( aa,ab,ac,ad,af,ag,aj ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: af },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: af },{source: ag , target: aj },{source: af , target: ag },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zwischenakt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwischenakt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','aj','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],an = {id: 'an', name:'gottlieb'},ao = {id: 'ao', name:'hinze'} ; nodes.push( an,ao ); links.push( {source: an , target: ao },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ad , target: an },{source: ad , target: ao },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ag = {id: 'ag', name:'wiesener'},aj = {id: 'aj', name:'nachbar'},ao = nodes[4],bc = {id: 'bc', name:'er'},bd = {id: 'bd', name:'sie'} ; nodes.push( ag,aj,bc,bd ); links.push( {source: ao , target: bc },{source: ao , target: bd },{source: bc , target: bd },{source: ag , target: ao },{source: ag , target: bc },{source: ag , target: bd },{source: ag , target: aj },{source: aj , target: ao },{source: aj , target: bc },{source: aj , target: bd },{source: aa , target: ao },{source: aa , target: bc },{source: aa , target: bd },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ad , target: ao },{source: ad , target: bc },{source: ad , target: bd },{source: ad , target: ag },{source: ad , target: aj },{source: ab , target: ao },{source: ab , target: bc },{source: ab , target: bd },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ao },{source: ac , target: bc },{source: ac , target: bd },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'bc','bd','ag','aj','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ac = nodes[1],ad = nodes[2],ao = nodes[3],ar = {id: 'ar', name:'der_könig'},as = {id: 'as', name:'die_prinzessin'},au = {id: 'au', name:'kammerdiener'},av = {id: 'av', name:'nathanael'},be = {id: 'be', name:'koch'},bf = {id: 'bf', name:'historiograph'} ; nodes.push( ar,as,au,av,be,bf ); links.push( {source: ar , target: be },{source: ar , target: as },{source: ar , target: au },{source: ar , target: av },{source: ar , target: bf },{source: be , target: bf },{source: as , target: be },{source: as , target: au },{source: as , target: av },{source: as , target: bf },{source: aa , target: ar },{source: aa , target: be },{source: aa , target: as },{source: aa , target: au },{source: aa , target: ao },{source: aa , target: av },{source: aa , target: bf },{source: aa , target: ad },{source: aa , target: ac },{source: au , target: be },{source: au , target: av },{source: au , target: bf },{source: ao , target: ar },{source: ao , target: be },{source: ao , target: as },{source: ao , target: au },{source: ao , target: av },{source: ao , target: bf },{source: av , target: be },{source: av , target: bf },{source: ad , target: ar },{source: ad , target: be },{source: ad , target: as },{source: ad , target: au },{source: ad , target: ao },{source: ad , target: av },{source: ad , target: bf },{source: ac , target: ar },{source: ac , target: be },{source: ac , target: as },{source: ac , target: au },{source: ac , target: ao },{source: ac , target: av },{source: ac , target: bf },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'be','au','av','bf','ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ag = {id: 'ag', name:'wiesener'},ai = {id: 'ai', name:'dichter'},aj = {id: 'aj', name:'nachbar'},ao = nodes[1],ar = nodes[2],as = nodes[3],at = {id: 'at', name:'leander'},bg = {id: 'bg', name:'ein_bedienter'},bh = {id: 'bh', name:'hanswurst'},bi = {id: 'bi', name:'ein_hofmann'},bj = {id: 'bj', name:'im_parterre'},bk = {id: 'bk', name:'die_vierfüssigen'},bl = {id: 'bl', name:'die_vögel'},bm = {id: 'bm', name:'vereinigtes_chor'},bn = {id: 'bn', name:'besänftiger'} ; nodes.push( ag,ai,aj,at,bg,bh,bi,bj,bk,bl,bm,bn ); links.push( {source: ar , target: bg },{source: ar , target: bh },{source: ar , target: at },{source: ar , target: as },{source: ar , target: bi },{source: ar , target: bj },{source: ar , target: bk },{source: ar , target: bl },{source: ar , target: bm },{source: ar , target: bn },{source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bl },{source: bg , target: bm },{source: bg , target: bn },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bh , target: bm },{source: bh , target: bn },{source: ao , target: ar },{source: ao , target: bg },{source: ao , target: bh },{source: ao , target: at },{source: ao , target: as },{source: ao , target: bi },{source: ao , target: bj },{source: ao , target: bk },{source: ao , target: bl },{source: ao , target: bm },{source: ao , target: bn },{source: at , target: bg },{source: at , target: bh },{source: at , target: bi },{source: at , target: bj },{source: at , target: bk },{source: at , target: bl },{source: at , target: bm },{source: at , target: bn },{source: as , target: bg },{source: as , target: bh },{source: as , target: at },{source: as , target: bi },{source: as , target: bj },{source: as , target: bk },{source: as , target: bl },{source: as , target: bm },{source: as , target: bn },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bm },{source: bi , target: bn },{source: ai , target: ar },{source: ai , target: bg },{source: ai , target: bh },{source: ai , target: ao },{source: ai , target: at },{source: ai , target: as },{source: ai , target: bi },{source: ai , target: bj },{source: ai , target: aj },{source: ai , target: bk },{source: ai , target: bl },{source: ai , target: bm },{source: ai , target: bn },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: bj , target: bn },{source: aa , target: ar },{source: aa , target: bg },{source: aa , target: bh },{source: aa , target: ao },{source: aa , target: at },{source: aa , target: as },{source: aa , target: bi },{source: aa , target: ai },{source: aa , target: bj },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: bk },{source: aa , target: bl },{source: aa , target: bm },{source: aa , target: bn },{source: ag , target: ar },{source: ag , target: bg },{source: ag , target: bh },{source: ag , target: ao },{source: ag , target: at },{source: ag , target: as },{source: ag , target: bi },{source: ag , target: ai },{source: ag , target: bj },{source: ag , target: aj },{source: ag , target: bk },{source: ag , target: bl },{source: ag , target: bm },{source: ag , target: bn },{source: aj , target: ar },{source: aj , target: bg },{source: aj , target: bh },{source: aj , target: ao },{source: aj , target: at },{source: aj , target: as },{source: aj , target: bi },{source: aj , target: bj },{source: aj , target: bk },{source: aj , target: bl },{source: aj , target: bm },{source: aj , target: bn },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bl , target: bm },{source: bl , target: bn },{source: bm , target: bn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ar','bg','bh','ao','at','as','bi','ai','bj','bk','bl','bm','bn' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ab = {id: 'ab', name:'müller'},ac = {id: 'ac', name:'schlosser'},ad = {id: 'ad', name:'leutner'},af = {id: 'af', name:'bötticher'},ag = nodes[1],aj = nodes[2] ; nodes.push( ab,ac,ad,af ); links.push( {source: ag , target: aj },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: af },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ab },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: ad },{source: ac , target: af },{source: af , target: ag },{source: af , target: aj },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zwischenakt [1]'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwischenakt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],af = nodes[3],ag = nodes[4],aj = nodes[5],an = {id: 'an', name:'gottlieb'},ao = {id: 'ao', name:'hinze'} ; nodes.push( an,ao ); links.push( {source: an , target: ao },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: af },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: af },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: aj },{source: ab , target: af },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: aj },{source: aj , target: an },{source: aj , target: ao },{source: af , target: an },{source: af , target: ao },{source: af , target: ag },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an','aa','ab','ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ac = nodes[0],af = nodes[1],ao = nodes[2],bc = {id: 'bc', name:'er'},bd = {id: 'bd', name:'sie'} ; nodes.push( bc,bd ); links.push( {source: ao , target: bc },{source: ao , target: bd },{source: bc , target: bd },{source: af , target: ao },{source: af , target: bc },{source: af , target: bd },{source: ac , target: ao },{source: ac , target: bc },{source: ac , target: bd },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = {id: 'aa', name:'fischer'},ab = {id: 'ab', name:'müller'},ac = nodes[0],ad = {id: 'ad', name:'leutner'},af = nodes[1],ao = nodes[2],ar = {id: 'ar', name:'der_könig'},as = {id: 'as', name:'die_prinzessin'},at = {id: 'at', name:'leander'},bh = {id: 'bh', name:'hanswurst'} ; nodes.push( aa,ab,ad,ar,as,at,bh ); links.push( {source: ar , target: as },{source: ar , target: at },{source: ar , target: bh },{source: as , target: at },{source: as , target: bh },{source: at , target: bh },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: at },{source: ad , target: bh },{source: ad , target: ao },{source: ad , target: af },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: at },{source: ab , target: bh },{source: ab , target: ad },{source: ab , target: ao },{source: ab , target: ac },{source: ab , target: af },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: at },{source: aa , target: bh },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: af },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: bh },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ac , target: bh },{source: ac , target: ad },{source: ac , target: ao },{source: ac , target: af },{source: af , target: ar },{source: af , target: as },{source: af , target: at },{source: af , target: bh },{source: af , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'at','bh','ad','ab','aa','ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ao = nodes[0],ar = nodes[1],as = nodes[2],aw = {id: 'aw', name:'der_wirt'},aw = {id: 'aw', name:'der_wirt'} ; nodes.push( aw ); links.push( {source: ao , target: aw },{source: ao , target: aw },{source: ao , target: as },{source: ao , target: ar },{source: as , target: aw },{source: as , target: aw },{source: ar , target: aw },{source: ar , target: aw },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = {id: 'aa', name:'fischer'},ac = {id: 'ac', name:'schlosser'},ao = nodes[0],ar = nodes[1],as = nodes[2],ax = {id: 'ax', name:'kunz'} ; nodes.push( aa,ac,ax ); links.push( {source: ao , target: ax },{source: ao , target: ar },{source: ao , target: as },{source: aa , target: ax },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: ar },{source: aa , target: as },{source: ac , target: ax },{source: ac , target: ao },{source: ac , target: ar },{source: ac , target: as },{source: ar , target: ax },{source: ar , target: as },{source: as , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ax','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = {id: 'ad', name:'leutner'},ag = {id: 'ag', name:'wiesener'},aj = {id: 'aj', name:'nachbar'},an = {id: 'an', name:'gottlieb'},ao = nodes[0],ar = nodes[1],as = nodes[2],bg = {id: 'bg', name:'ein_bedienter'} ; nodes.push( ad,ag,aj,an,bg ); links.push( {source: an , target: ao },{source: an , target: ar },{source: an , target: as },{source: an , target: bg },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: bg },{source: ar , target: as },{source: ar , target: bg },{source: as , target: bg },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: bg },{source: ad , target: ag },{source: ad , target: aj },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: bg },{source: ag , target: aj },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'bg','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'fischer'},ab = {id: 'ab', name:'müller'},ac = {id: 'ac', name:'schlosser'},ad = nodes[0],af = {id: 'af', name:'bötticher'},ag = nodes[1],ai = {id: 'ai', name:'dichter'},an = nodes[2],ao = nodes[3],ar = nodes[4],as = nodes[5],at = {id: 'at', name:'leander'},bn = {id: 'bn', name:'besänftiger'},bo = {id: 'bo', name:'bauer'},bp = {id: 'bp', name:'popanz'},bq = {id: 'bq', name:'amtmann'} ; nodes.push( aa,ab,ac,af,ai,at,bn,bo,bp,bq ); links.push( {source: bo , target: bp },{source: bo , target: bq },{source: bp , target: bq },{source: ao , target: bo },{source: ao , target: bp },{source: ao , target: bq },{source: ao , target: bn },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ac , target: bo },{source: ac , target: bp },{source: ac , target: bq },{source: ac , target: ao },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: bn },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: an },{source: ac , target: as },{source: ac , target: at },{source: af , target: bo },{source: af , target: bp },{source: af , target: bq },{source: af , target: ao },{source: af , target: ai },{source: af , target: bn },{source: af , target: ag },{source: af , target: ar },{source: af , target: an },{source: af , target: as },{source: af , target: at },{source: aa , target: bo },{source: aa , target: bp },{source: aa , target: bq },{source: aa , target: ao },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: bn },{source: aa , target: ag },{source: aa , target: ar },{source: aa , target: an },{source: aa , target: as },{source: aa , target: at },{source: ab , target: bo },{source: ab , target: bp },{source: ab , target: bq },{source: ab , target: ao },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: bn },{source: ab , target: ag },{source: ab , target: ar },{source: ab , target: an },{source: ab , target: as },{source: ab , target: at },{source: ad , target: bo },{source: ad , target: bp },{source: ad , target: bq },{source: ad , target: ao },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: bn },{source: ad , target: ag },{source: ad , target: ar },{source: ad , target: an },{source: ad , target: as },{source: ad , target: at },{source: ai , target: bo },{source: ai , target: bp },{source: ai , target: bq },{source: ai , target: ao },{source: ai , target: bn },{source: ai , target: ar },{source: ai , target: an },{source: ai , target: as },{source: ai , target: at },{source: bn , target: bo },{source: bn , target: bp },{source: bn , target: bq },{source: ag , target: bo },{source: ag , target: bp },{source: ag , target: bq },{source: ag , target: ao },{source: ag , target: ai },{source: ag , target: bn },{source: ag , target: ar },{source: ag , target: an },{source: ag , target: as },{source: ag , target: at },{source: ar , target: bo },{source: ar , target: bp },{source: ar , target: bq },{source: ar , target: bn },{source: ar , target: as },{source: ar , target: at },{source: an , target: bo },{source: an , target: bp },{source: an , target: bq },{source: an , target: ao },{source: an , target: bn },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: as , target: bo },{source: as , target: bp },{source: as , target: bq },{source: as , target: bn },{source: as , target: at },{source: at , target: bo },{source: at , target: bp },{source: at , target: bq },{source: at , target: bn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'bo','bp','bq','ao','bn','ag','an','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],af = nodes[4],ai = nodes[5],ar = nodes[6],ar = nodes[6],bh = {id: 'bh', name:'hanswurst'},br = {id: 'br', name:'hinter_dem_vorhange'},bs = {id: 'bs', name:'souffleur'} ; nodes.push( bh,br,bs ); links.push( {source: ar , target: br },{source: ar , target: bh },{source: ar , target: bs },{source: aa , target: ar },{source: aa , target: ar },{source: aa , target: br },{source: aa , target: bh },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: bs },{source: aa , target: af },{source: ar , target: br },{source: ar , target: bh },{source: ar , target: bs },{source: br , target: bs },{source: bh , target: br },{source: bh , target: bs },{source: ai , target: ar },{source: ai , target: ar },{source: ai , target: br },{source: ai , target: bh },{source: ai , target: bs },{source: ab , target: ar },{source: ab , target: ar },{source: ab , target: br },{source: ab , target: bh },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: bs },{source: ab , target: af },{source: ac , target: ar },{source: ac , target: ar },{source: ac , target: br },{source: ac , target: bh },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: bs },{source: ac , target: af },{source: ad , target: ar },{source: ad , target: ar },{source: ad , target: br },{source: ad , target: bh },{source: ad , target: ai },{source: ad , target: bs },{source: ad , target: af },{source: af , target: ar },{source: af , target: ar },{source: af , target: br },{source: af , target: bh },{source: af , target: ai },{source: af , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Epilog'; var scene = document.getElementById('scene');scene.innerHTML = 'Epilog';
}, 85000);
