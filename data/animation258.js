setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'geisterchor'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = {id: 'ab', name:'faust'},ac = {id: 'ac', name:'guttenberg'},ad = {id: 'ad', name:'geisterstimme'} ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ae af ag ah ai aj */ var  ab = nodes[0] ,ae = {id: 'ae', name:'furien'},af = {id: 'af', name:'wandrer'},ag = {id: 'ag', name:'weibliche_stimme'},ah = {id: 'ah', name:'plutus'},ai = {id: 'ai', name:'amor'},aj = {id: 'aj', name:'ruhm'} ; nodes.push( ae,af,ag,ah,ai,aj ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','af','ag','ah','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ak al am an */ var  ab = nodes[0] ,ak = {id: 'ak', name:'mönch'},al = {id: 'al', name:'einer_der_männer'},am = {id: 'am', name:'männer'},an = {id: 'an', name:'vater'} ; nodes.push( ak,al,am,an ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ak','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* al am an */ var  al = nodes[0] ,am = nodes[1] ,an = nodes[2]  ; /* nodes.push(); */ links.push( {source: am , target: an },{source: al , target: an },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'an','am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ao ap aq */ var  aa = {id: 'aa', name:'geisterchor'},ab = {id: 'ab', name:'faust'},ao = {id: 'ao', name:'leviathan'},ap = {id: 'ap', name:'geisterstimmen'},aq = {id: 'aq', name:'seraphine'} ; nodes.push( aa,ab,ao,ap,aq ); links.push( {source: ab , target: aq },{source: ab , target: ao },{source: ab , target: ap },{source: aa , target: ab },{source: aa , target: aq },{source: aa , target: ao },{source: aa , target: ap },{source: ao , target: aq },{source: ao , target: ap },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab','aa','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aq */ var  aq = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac aq */ var  ac = {id: 'ac', name:'guttenberg'},aq = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: aq },{source: ac , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aq','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ao bz */ var  ao = {id: 'ao', name:'leviathan'},bz = {id: 'bz', name:'unterirdisch_lachender_chor'} ; nodes.push( ao,bz ); links.push( {source: ao , target: bz } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ao','bz' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'faust'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac ar as at */ var  ac = {id: 'ac', name:'guttenberg'},ar = {id: 'ar', name:'erster'},as = {id: 'as', name:'zweiter'},at = {id: 'at', name:'dritter_künstler'} ; nodes.push( ac,ar,as,at ); links.push( {source: ar , target: as },{source: ar , target: at },{source: as , target: at },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ac ar as at au av aw */ var  ab = {id: 'ab', name:'faust'},ac = nodes[0] ,ar = nodes[1] ,as = nodes[2] ,at = nodes[3] ,au = {id: 'au', name:'erster_gelehrter'},av = {id: 'av', name:'zweiter_gelehrter'},aw = {id: 'aw', name:'dritter_gelehrter'} ; nodes.push( ab,au,av,aw ); links.push( {source: ac , target: au },{source: ac , target: av },{source: ac , target: aw },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: ar , target: au },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: as },{source: ar , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: aw },{source: as , target: at },{source: at , target: au },{source: at , target: av },{source: at , target: aw },{source: ab , target: ac },{source: ab , target: au },{source: ab , target: av },{source: ab , target: aw },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ac','au','av','aw','ar','as','at','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* aq */ var  aq = {id: 'aq', name:'seraphine'} ; nodes.push( aq ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ab aq */ var  ab = {id: 'ab', name:'faust'},aq = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ax ay az */ var  ab = nodes[0] ,ax = {id: 'ax', name:'chor'},ay = {id: 'ay', name:'andrer_bürger'},az = {id: 'az', name:'bürger'} ; nodes.push( ax,ay,az ); links.push( {source: ax , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ab , target: ax },{source: ab , target: az },{source: ab , target: ay },{source: ab , target: az },{source: ay , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ax','ab','az','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ba */ var  ba = {id: 'ba', name:'robertus'} ; nodes.push( ba ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ba bb */ var  ab = {id: 'ab', name:'faust'},ba = nodes[0] ,bb = {id: 'bb', name:'kerkermeister'} ; nodes.push( ab,bb ); links.push( {source: ab , target: ba },{source: ab , target: bb },{source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','ba','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'guttenberg'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* bc bd */ var  bc = {id: 'bc', name:'volkschor'},bd = {id: 'bd', name:'chor_der_soldaten'} ; nodes.push( bc,bd ); links.push( {source: bc , target: bd },{source: bc , target: bd },{source: bc , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ba bc bd be bf bg bh */ var  ba = {id: 'ba', name:'robertus'},bc = nodes[0] ,bd = nodes[1] ,be = {id: 'be', name:'die_priester'},bf = {id: 'bf', name:'richter'},bg = {id: 'bg', name:'machiavelli'},bh = {id: 'bh', name:'einige_stimmen'} ; nodes.push( ba,be,bf,bg,bh ); links.push( {source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: bf , target: bg },{source: bf , target: bh },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bd },{source: bc , target: bg },{source: bc , target: bh },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bh },{source: bg , target: bh },{source: ba , target: be },{source: ba , target: bf },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: bg },{source: ba , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'be','bf','bd','bh','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ax bc bg bi bj */ var  ab = {id: 'ab', name:'faust'},ax = {id: 'ax', name:'chor'},bc = nodes[0] ,bg = nodes[1] ,bi = {id: 'bi', name:'einzelne_stimmen'},bj = {id: 'bj', name:'brutus_geist'} ; nodes.push( ab,ax,bi,bj ); links.push( {source: ab , target: bc },{source: ab , target: bg },{source: ab , target: bi },{source: ab , target: bj },{source: ab , target: ax },{source: bc , target: bg },{source: bc , target: bi },{source: bc , target: bj },{source: bg , target: bi },{source: bg , target: bj },{source: bi , target: bj },{source: ax , target: bc },{source: ax , target: bg },{source: ax , target: bi },{source: ax , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnte Szene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab','bg','bi','bj','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* bc bk */ var  bc = nodes[0] ,bk = {id: 'bk', name:'aurelia'} ; nodes.push( bk ); links.push( {source: bc , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ba bk */ var  ab = {id: 'ab', name:'faust'},ba = {id: 'ba', name:'robertus'},bk = nodes[0]  ; nodes.push( ab,ba ); links.push( {source: ba , target: bk },{source: ab , target: ba },{source: ab , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab ba bk */ var  ab = nodes[0] ,ba = nodes[1] ,bk = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ba },{source: ab , target: bk },{source: ba , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab aq bk */ var  ab = nodes[0] ,aq = {id: 'aq', name:'seraphine'},bk = nodes[1]  ; nodes.push( aq ); links.push( {source: ab , target: bk },{source: ab , target: aq },{source: aq , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ab','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ao ba bk */ var  ao = {id: 'ao', name:'leviathan'},ba = {id: 'ba', name:'robertus'},bk = nodes[0]  ; nodes.push( ao,ba ); links.push( {source: ba , target: bk },{source: ao , target: ba },{source: ao , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ba','bk','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab aq */ var  ab = {id: 'ab', name:'faust'},aq = {id: 'aq', name:'seraphine'} ; nodes.push( ab,aq ); links.push( {source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ab ao aq */ var  ab = nodes[0] ,ao = {id: 'ao', name:'leviathan'},aq = nodes[1]  ; nodes.push( ao ); links.push( {source: ao , target: aq },{source: ab , target: ao },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ao','ab','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ar as */ var  ar = {id: 'ar', name:'erster'},as = {id: 'as', name:'zweiter'} ; nodes.push( ar,as ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* an ar as */ var  an = {id: 'an', name:'vater'},ar = nodes[0] ,as = nodes[1]  ; nodes.push( an ); links.push( {source: ar , target: as },{source: ar , target: as },{source: an , target: ar },{source: an , target: as },{source: an , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ar','as','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* bl bm */ var  bl = {id: 'bl', name:'ildephonse'},bm = {id: 'bm', name:'erzbischof'} ; nodes.push( bl,bm ); links.push( {source: bl , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bl','bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* bn bo */ var  bn = {id: 'bn', name:'cavatine'},bo = {id: 'bo', name:'clara'} ; nodes.push( bn,bo ); links.push( {source: bn , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'bn','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ab ao */ var  ab = {id: 'ab', name:'faust'},ao = {id: 'ao', name:'leviathan'} ; nodes.push( ab,ao ); links.push( {source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ab','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* bo bp */ var  bo = {id: 'bo', name:'clara'},bp = {id: 'bp', name:'cinthio'} ; nodes.push( bo,bp ); links.push( {source: bo , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'bp','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab ao */ var  ab = {id: 'ab', name:'faust'},ao = {id: 'ao', name:'leviathan'} ; nodes.push( ab,ao ); links.push( {source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ab ao bq */ var  ab = nodes[0] ,ao = nodes[1] ,bq = {id: 'bq', name:'pabsts_gestalt'} ; nodes.push( bq ); links.push( {source: ab , target: ao },{source: ab , target: bq },{source: ao , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ao','bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* bo */ var  bo = {id: 'bo', name:'clara'} ; nodes.push( bo ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* bo br */ var  bo = nodes[0] ,br = {id: 'br', name:'priorin'} ; nodes.push( br ); links.push( {source: bo , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'br','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ab aq bs */ var  ab = {id: 'ab', name:'faust'},aq = {id: 'aq', name:'seraphine'},bs = {id: 'bs', name:'die_nonne'} ; nodes.push( ab,aq,bs ); links.push( {source: ab , target: bs },{source: ab , target: aq },{source: aq , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ab','bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aq */ var  aq = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ba bk bt */ var  ba = {id: 'ba', name:'robertus'},bk = {id: 'bk', name:'aurelia'},bt = {id: 'bt', name:'die_hälfte_der_jäger'} ; nodes.push( ba,bk,bt ); links.push( {source: bk , target: bt },{source: ba , target: bt },{source: ba , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'bt' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ba bk bu */ var  ba = nodes[0] ,bk = nodes[1] ,bu = {id: 'bu', name:'bürger_4.8'} ; nodes.push( bu ); links.push( {source: bk , target: bu },{source: ba , target: bu },{source: ba , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'bu' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ba bk bv */ var  ba = nodes[0] ,bk = nodes[1] ,bv = {id: 'bv', name:'anderer_bürger_4.9'} ; nodes.push( bv ); links.push( {source: bk , target: bv },{source: ba , target: bv },{source: ba , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'bv' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* au av ba bk bt */ var  au = {id: 'au', name:'erster_gelehrter'},av = {id: 'av', name:'zweiter_gelehrter'},ba = nodes[0] ,bk = nodes[1] ,bt = {id: 'bt', name:'die_hälfte_der_jäger'} ; nodes.push( au,av,bt ); links.push( {source: au , target: bk },{source: au , target: ba },{source: au , target: bt },{source: au , target: av },{source: bk , target: bt },{source: ba , target: bk },{source: ba , target: bt },{source: av , target: bk },{source: av , target: ba },{source: av , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'au','bk','ba','bt','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ab ao */ var  ab = {id: 'ab', name:'faust'},ao = {id: 'ao', name:'leviathan'} ; nodes.push( ab,ao ); links.push( {source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ao','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ax */ var  ax = {id: 'ax', name:'chor'} ; nodes.push( ax ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Szene'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ab ao aq bw bx by */ var  ab = {id: 'ab', name:'faust'},ao = {id: 'ao', name:'leviathan'},aq = {id: 'aq', name:'seraphine'},bw = {id: 'bw', name:'das_mädchen'},bx = {id: 'bx', name:'ein_anderes'},by = {id: 'by', name:'noch_ein_anderes'} ; nodes.push( ab,ao,aq,bw,bx,by ); links.push( {source: ao , target: bw },{source: ao , target: bx },{source: ao , target: by },{source: ao , target: aq },{source: ab , target: ao },{source: ab , target: bw },{source: ab , target: bx },{source: ab , target: by },{source: ab , target: aq },{source: bw , target: bx },{source: bw , target: by },{source: bx , target: by },{source: aq , target: bw },{source: aq , target: bx },{source: aq , target: by } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Szene'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt.';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'bw','bx','by' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ab ao aq */ var  ab = nodes[0] ,ao = nodes[1] ,aq = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: aq },{source: ab , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Szene'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt.';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ab ao bz */ var  ab = nodes[0] ,ao = nodes[1] ,bz = {id: 'bz', name:'unterirdisch_lachender_chor'} ; nodes.push( bz ); links.push( {source: ao , target: bz },{source: ab , target: ao },{source: ab , target: bz } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ao','ab','bz' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ba ca cb cc cd */ var  ba = {id: 'ba', name:'robertus'},ca = {id: 'ca', name:'einer_davon'},cb = {id: 'cb', name:'ein_anderer'},cc = {id: 'cc', name:'noch_ein_anderer'},cd = {id: 'cd', name:'einer_von_den_seinigen'} ; nodes.push( ba,ca,cb,cc,cd ); links.push( {source: ba , target: ca },{source: ba , target: cb },{source: ba , target: cc },{source: ba , target: cd },{source: ca , target: cb },{source: ca , target: cc },{source: ca , target: cd },{source: cb , target: cc },{source: cb , target: cd },{source: cc , target: cd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ca','cb','cc','cd' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ba bc bk ce cf */ var  ba = nodes[0] ,bc = {id: 'bc', name:'volkschor'},bk = {id: 'bk', name:'aurelia'},ce = {id: 'ce', name:'feindeshaufe'},cf = {id: 'cf', name:'einige'} ; nodes.push( bc,bk,ce,cf ); links.push( {source: ce , target: cf },{source: bk , target: ce },{source: bk , target: cf },{source: bc , target: ce },{source: bc , target: bk },{source: bc , target: cf },{source: ba , target: ce },{source: ba , target: bk },{source: ba , target: bc },{source: ba , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ce','bk','bc','ba','cf' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'leviathan'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* cg */ var  cg = {id: 'cg', name:'ein_mönch'} ; nodes.push( cg ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'cg' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ak al am ch */ var  ak = {id: 'ak', name:'mönch'},al = {id: 'al', name:'einer_der_männer'},am = {id: 'am', name:'männer'},ch = {id: 'ch', name:'kinder'} ; nodes.push( ak,al,am,ch ); links.push( {source: ak , target: ch },{source: ak , target: am },{source: ak , target: al },{source: am , target: ch },{source: al , target: ch },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ch','ak','am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ar as */ var  ar = {id: 'ar', name:'erster'},as = {id: 'as', name:'zweiter'} ; nodes.push( ar,as ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ax bo bp cd ci cj */ var  ax = {id: 'ax', name:'chor'},bo = {id: 'bo', name:'clara'},bp = {id: 'bp', name:'cinthio'},cd = {id: 'cd', name:'einer_von_den_seinigen'},ci = {id: 'ci', name:'einige_männer'},cj = {id: 'cj', name:'ein_mann'} ; nodes.push( ax,bo,bp,cd,ci,cj ); links.push( {source: ax , target: bp },{source: ax , target: ci },{source: ax , target: cj },{source: ax , target: cd },{source: ax , target: bo },{source: bp , target: ci },{source: bp , target: cj },{source: bp , target: cd },{source: ci , target: cj },{source: cd , target: ci },{source: cd , target: cj },{source: bo , target: bp },{source: bo , target: ci },{source: bo , target: cj },{source: bo , target: cd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ax','cd' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ak am bo bp bs ci cj ck */ var  ak = {id: 'ak', name:'mönch'},am = {id: 'am', name:'männer'},bo = nodes[0] ,bp = nodes[1] ,bs = {id: 'bs', name:'die_nonne'},ci = nodes[2] ,cj = nodes[3] ,ck = {id: 'ck', name:'alle_nonnen'} ; nodes.push( ak,am,bs,ck ); links.push( {source: bp , target: ci },{source: bp , target: cj },{source: bp , target: ck },{source: bp , target: bs },{source: ak , target: bp },{source: ak , target: bo },{source: ak , target: ci },{source: ak , target: cj },{source: ak , target: am },{source: ak , target: ck },{source: ak , target: bs },{source: bo , target: bp },{source: bo , target: ci },{source: bo , target: cj },{source: bo , target: ck },{source: bo , target: bs },{source: ci , target: cj },{source: ci , target: ck },{source: cj , target: ck },{source: am , target: bp },{source: am , target: bo },{source: am , target: ci },{source: am , target: cj },{source: am , target: ck },{source: am , target: bs },{source: bs , target: ci },{source: bs , target: cj },{source: bs , target: ck } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Szene'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'bp','ak','bo','ci','cj','am','ck','bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ab ao */ var  ab = {id: 'ab', name:'faust'},ao = {id: 'ao', name:'leviathan'} ; nodes.push( ab,ao ); links.push( {source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Szene'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ab aq ax cl */ var  ab = nodes[0] ,aq = {id: 'aq', name:'seraphine'},ax = {id: 'ax', name:'chor'},cl = {id: 'cl', name:'böse_geister'} ; nodes.push( aq,ax,cl ); links.push( {source: ab , target: cl },{source: ab , target: aq },{source: ab , target: ax },{source: aq , target: cl },{source: aq , target: ax },{source: ax , target: cl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '12. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
}, 300000);
