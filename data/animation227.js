setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'thibaut'},ab = {id: 'ab', name:'louison'},ac = {id: 'ac', name:'claude_marie'},ad = {id: 'ad', name:'margot'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Prolog'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ae = {id: 'ae', name:'raimond'} ; nodes.push( ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Prolog'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ae = nodes[1],af = {id: 'af', name:'bertrand'},ag = {id: 'ag', name:'johanna'} ; nodes.push( af,ag ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: af , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Prolog'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','af','aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ah = {id: 'ah', name:'dunois'},ai = {id: 'ai', name:'du_chatel'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ah = nodes[0],ai = nodes[1],aj = {id: 'aj', name:'könig'},ak = {id: 'ak', name:'edelknecht'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ah = nodes[0],ai = nodes[1],aj = nodes[2],al = {id: 'al', name:'ratsherr'} ; nodes.push( al ); links.push( {source: aj , target: al },{source: ah , target: aj },{source: ah , target: al },{source: ah , target: ai },{source: ai , target: aj },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ah = nodes[0],ai = nodes[1],aj = nodes[2],am = {id: 'am', name:'sorel'} ; nodes.push( am ); links.push( {source: aj , target: am },{source: ai , target: aj },{source: ai , target: am },{source: ah , target: aj },{source: ah , target: am },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ah = nodes[0],aj = nodes[1],al = {id: 'al', name:'ratsherr'},am = nodes[2],an = {id: 'an', name:'la_hire'} ; nodes.push( al,an ); links.push( {source: aj , target: an },{source: aj , target: am },{source: aj , target: al },{source: ah , target: aj },{source: ah , target: an },{source: ah , target: am },{source: ah , target: al },{source: am , target: an },{source: al , target: an },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'an','ah','am','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ai = {id: 'ai', name:'du_chatel'},aj = nodes[0] ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aj = nodes[0],am = {id: 'am', name:'sorel'} ; nodes.push( am ); links.push( {source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aj = nodes[0],am = nodes[1],an = {id: 'an', name:'la_hire'} ; nodes.push( an ); links.push( {source: am , target: an },{source: aj , target: am },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aj = nodes[0],am = nodes[1],ao = {id: 'ao', name:'erzbischof'},ap = {id: 'ap', name:'raoul'},aq = {id: 'aq', name:'viele_stimmen'} ; nodes.push( ao,ap,aq ); links.push( {source: ao , target: ap },{source: ao , target: aq },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: am },{source: aj , target: aq },{source: ap , target: aq },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ap','am','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ag = {id: 'ag', name:'johanna'},ah = {id: 'ah', name:'dunois'},aj = nodes[0],ak = {id: 'ak', name:'edelknecht'},an = {id: 'an', name:'la_hire'},ao = nodes[1] ; nodes.push( ag,ah,ak,an ); links.push( {source: ah , target: aj },{source: ah , target: ao },{source: ah , target: an },{source: ah , target: ak },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ao },{source: ag , target: an },{source: ag , target: ak },{source: aj , target: ao },{source: aj , target: an },{source: aj , target: ak },{source: an , target: ao },{source: ak , target: ao },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ao','an','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ag = nodes[0],ah = nodes[1],aj = nodes[2],ar = {id: 'ar', name:'herold'} ; nodes.push( ar ); links.push( {source: aj , target: ar },{source: ah , target: aj },{source: ah , target: ar },{source: ag , target: aj },{source: ag , target: ar },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aj','ar','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  as = {id: 'as', name:'talbot'},at = {id: 'at', name:'lionel'},au = {id: 'au', name:'burgund'} ; nodes.push( as,at,au ); links.push( {source: as , target: at },{source: as , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  as = nodes[0],at = nodes[1],au = nodes[2],av = {id: 'av', name:'isabeau'} ; nodes.push( av ); links.push( {source: at , target: av },{source: at , target: au },{source: as , target: av },{source: as , target: at },{source: as , target: au },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  as = nodes[0],at = nodes[1],au = nodes[2] ; /* nodes.push(); */ links.push( {source: as , target: at },{source: as , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'as','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ag = {id: 'ag', name:'johanna'},ah = {id: 'ah', name:'dunois'},an = {id: 'an', name:'la_hire'},aw = {id: 'aw', name:'schildwache'},bf = {id: 'bf', name:'ritter'} ; nodes.push( ag,ah,an,aw,bf ); links.push( {source: ag , target: aw },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: bf },{source: aw , target: bf },{source: ah , target: aw },{source: ah , target: an },{source: ah , target: bf },{source: an , target: aw },{source: an , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ag','aw','ah','an','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  as = {id: 'as', name:'talbot'},ax = {id: 'ax', name:'erster'},ay = {id: 'ay', name:'zweiter'},az = {id: 'az', name:'dritter'},ba = {id: 'ba', name:'vierter'},bb = {id: 'bb', name:'fünfter'},bc = {id: 'bc', name:'soldat_2.5'} ; nodes.push( as,ax,ay,az,ba,bb,bc ); links.push( {source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: bb , target: bc },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: bb },{source: as , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ax','ay','az','ba','bb','as','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  be = {id: 'be', name:'montgomery'} ; nodes.push( be ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ag = {id: 'ag', name:'johanna'},be = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ag = nodes[0],bf = {id: 'bf', name:'ritter'} ; nodes.push( bf ); links.push( {source: ag , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ag = nodes[0],ah = {id: 'ah', name:'dunois'},an = {id: 'an', name:'la_hire'},au = {id: 'au', name:'burgund'} ; nodes.push( ah,an,au ); links.push( {source: ah , target: an },{source: ah , target: au },{source: an , target: au },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'au','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ah = nodes[0],an = nodes[1] ; /* nodes.push(); */ links.push( {source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ah = nodes[0],aj = {id: 'aj', name:'könig'},ak = {id: 'ak', name:'edelknecht'},am = {id: 'am', name:'sorel'},ao = {id: 'ao', name:'erzbischof'},bg = {id: 'bg', name:'chatillon'} ; nodes.push( aj,ak,am,ao,bg ); links.push( {source: aj , target: bg },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: ao },{source: am , target: bg },{source: am , target: ao },{source: ak , target: bg },{source: ak , target: am },{source: ak , target: ao },{source: ah , target: aj },{source: ah , target: bg },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: ao },{source: ao , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bg','ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aj = nodes[0],am = nodes[1],ao = nodes[2],au = {id: 'au', name:'burgund'} ; nodes.push( au ); links.push( {source: aj , target: au },{source: aj , target: am },{source: aj , target: ao },{source: am , target: au },{source: am , target: ao },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ag = {id: 'ag', name:'johanna'},ah = {id: 'ah', name:'dunois'},aj = nodes[0],am = nodes[1],an = {id: 'an', name:'la_hire'},ao = nodes[2],au = nodes[3] ; nodes.push( ag,ah,an ); links.push( {source: aj , target: au },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: ag , target: aj },{source: ag , target: au },{source: ag , target: am },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: ao },{source: am , target: au },{source: am , target: an },{source: am , target: ao },{source: ah , target: aj },{source: ah , target: au },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: an , target: au },{source: an , target: ao },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ag = nodes[0],ah = nodes[1],aj = nodes[2],au = nodes[3],bf = {id: 'bf', name:'ritter'},bh = {id: 'bh', name:'agnes'} ; nodes.push( bf,bh ); links.push( {source: aj , target: bf },{source: aj , target: au },{source: aj , target: bh },{source: bf , target: bh },{source: ag , target: aj },{source: ag , target: bf },{source: ag , target: ah },{source: ag , target: au },{source: ag , target: bh },{source: ah , target: aj },{source: ah , target: bf },{source: ah , target: au },{source: ah , target: bh },{source: au , target: bf },{source: au , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aj','bf','ag','ah','au','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  as = {id: 'as', name:'talbot'},at = {id: 'at', name:'lionel'},bi = {id: 'bi', name:'fastolf'} ; nodes.push( as,at,bi ); links.push( {source: as , target: bi },{source: as , target: at },{source: at , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ah = {id: 'ah', name:'dunois'},aj = {id: 'aj', name:'könig'},au = {id: 'au', name:'burgund'},bi = nodes[0] ; nodes.push( ah,aj,au ); links.push( {source: au , target: bi },{source: ah , target: au },{source: ah , target: aj },{source: ah , target: bi },{source: aj , target: au },{source: aj , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ah = nodes[0],aj = nodes[1],an = {id: 'an', name:'la_hire'},au = nodes[2] ; nodes.push( an ); links.push( {source: ah , target: an },{source: ah , target: au },{source: ah , target: aj },{source: an , target: au },{source: aj , target: an },{source: aj , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ah','an','au','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ag = {id: 'ag', name:'johanna'},bj = {id: 'bj', name:'schwarzer_ritter'} ; nodes.push( ag,bj ); links.push( {source: ag , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ag = nodes[0],at = {id: 'at', name:'lionel'} ; nodes.push( at ); links.push( {source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ag = nodes[0],ah = {id: 'ah', name:'dunois'},an = {id: 'an', name:'la_hire'} ; nodes.push( ah,an ); links.push( {source: ah , target: an },{source: ag , target: an },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'an','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ag = nodes[0],am = {id: 'am', name:'sorel'} ; nodes.push( am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ag = nodes[0],ah = {id: 'ah', name:'dunois'},ai = {id: 'ai', name:'du_chatel'},am = nodes[1],an = {id: 'an', name:'la_hire'} ; nodes.push( ah,ai,an ); links.push( {source: ah , target: an },{source: ah , target: am },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: am },{source: ag , target: ai },{source: am , target: an },{source: ai , target: an },{source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ah','an','ag','am','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ac = {id: 'ac', name:'claude_marie'},af = {id: 'af', name:'bertrand'},bk = {id: 'bk', name:'etienne'} ; nodes.push( ac,af,bk ); links.push( {source: af , target: bk },{source: ac , target: af },{source: ac , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'bk','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ab = {id: 'ab', name:'louison'},ad = {id: 'ad', name:'margot'},af = nodes[0] ; nodes.push( ab,ad ); links.push( {source: ab , target: ad },{source: ab , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ab = nodes[0],ac = {id: 'ac', name:'claude_marie'},ad = nodes[1],af = nodes[2] ; nodes.push( ac ); links.push( {source: ad , target: af },{source: ac , target: ad },{source: ac , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ad','ac','ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = {id: 'aa', name:'thibaut'},ae = {id: 'ae', name:'raimond'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ab = {id: 'ab', name:'louison'},ac = {id: 'ac', name:'claude_marie'},ad = {id: 'ad', name:'margot'},af = {id: 'af', name:'bertrand'},ag = {id: 'ag', name:'johanna'} ; nodes.push( ab,ac,ad,af,ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: af , target: ag },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ad','ab','af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ag = nodes[0],ah = {id: 'ah', name:'dunois'},ai = {id: 'ai', name:'du_chatel'},aj = {id: 'aj', name:'könig'},am = {id: 'am', name:'sorel'},an = {id: 'an', name:'la_hire'},ao = {id: 'ao', name:'erzbischof'},au = {id: 'au', name:'burgund'},bl = {id: 'bl', name:'volk'} ; nodes.push( ah,ai,aj,am,an,ao,au,bl ); links.push( {source: am , target: bl },{source: am , target: ao },{source: am , target: au },{source: am , target: an },{source: ao , target: bl },{source: ao , target: au },{source: au , target: bl },{source: ah , target: bl },{source: ah , target: am },{source: ah , target: ao },{source: ah , target: au },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: aj },{source: an , target: bl },{source: an , target: ao },{source: an , target: au },{source: ai , target: bl },{source: ai , target: am },{source: ai , target: ao },{source: ai , target: au },{source: ai , target: an },{source: ai , target: aj },{source: aj , target: bl },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: au },{source: aj , target: an },{source: ag , target: bl },{source: ag , target: am },{source: ag , target: ao },{source: ag , target: au },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: ai },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'bl','aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  aa = {id: 'aa', name:'thibaut'},ah = nodes[0],ai = nodes[1],am = nodes[2],an = nodes[3],ao = nodes[4],au = nodes[5],bm = {id: 'bm', name:'mehrere_stimmen'} ; nodes.push( aa,bm ); links.push( {source: aa , target: bm },{source: aa , target: au },{source: aa , target: ai },{source: aa , target: ah },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ao },{source: au , target: bm },{source: ai , target: bm },{source: ai , target: au },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ah , target: bm },{source: ah , target: au },{source: ah , target: ai },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: am , target: bm },{source: am , target: au },{source: am , target: an },{source: am , target: ao },{source: an , target: bm },{source: an , target: au },{source: an , target: ao },{source: ao , target: bm },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'bm','aa','au','ai','am','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ae = {id: 'ae', name:'raimond'},ai = {id: 'ai', name:'du_chatel'} ; nodes.push( ae,ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  bn = {id: 'bn', name:'köhler'},bo = {id: 'bo', name:'köhlerweib'} ; nodes.push( bn,bo ); links.push( {source: bn , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ae = {id: 'ae', name:'raimond'},bn = nodes[0],bo = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: bn },{source: ae , target: bo },{source: bn , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  bn = nodes[0],bo = nodes[1],bp = {id: 'bp', name:'köhlerbub'} ; nodes.push( bp ); links.push( {source: bo , target: bp },{source: bn , target: bo },{source: bn , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'bo','bn','bp' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ae = {id: 'ae', name:'raimond'},ag = {id: 'ag', name:'johanna'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  ae = nodes[0],ag = nodes[1],av = {id: 'av', name:'isabeau'},bq = {id: 'bq', name:'soldaten'},br = {id: 'br', name:'anführer_der_soldaten'} ; nodes.push( av,bq,br ); links.push( {source: av , target: bq },{source: av , target: br },{source: ae , target: av },{source: ae , target: bq },{source: ae , target: br },{source: ae , target: ag },{source: bq , target: br },{source: ag , target: av },{source: ag , target: bq },{source: ag , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'av','ae','bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ag = nodes[0],br = nodes[1] ; /* nodes.push(); */ links.push( {source: ag , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ag','br' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ah = {id: 'ah', name:'dunois'},ai = {id: 'ai', name:'du_chatel'},ao = {id: 'ao', name:'erzbischof'} ; nodes.push( ah,ai,ao ); links.push( {source: ah , target: ao },{source: ah , target: ai },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  ae = {id: 'ae', name:'raimond'},ah = nodes[0],ao = nodes[1],bs = {id: 'bs', name:'edelmann'} ; nodes.push( ae,bs ); links.push( {source: ah , target: bs },{source: ah , target: ao },{source: ae , target: bs },{source: ae , target: ah },{source: ae , target: ao },{source: ao , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'bs','ah','ae','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  ag = {id: 'ag', name:'johanna'},at = {id: 'at', name:'lionel'},av = {id: 'av', name:'isabeau'},bi = {id: 'bi', name:'fastolf'} ; nodes.push( ag,at,av,bi ); links.push( {source: av , target: bi },{source: at , target: bi },{source: at , target: av },{source: ag , target: bi },{source: ag , target: av },{source: ag , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  ag = nodes[0],at = nodes[1],av = nodes[2],bi = nodes[3],bt = {id: 'bt', name:'hauptmann'} ; nodes.push( bt ); links.push( {source: ag , target: bt },{source: ag , target: bi },{source: ag , target: at },{source: ag , target: av },{source: bi , target: bt },{source: at , target: bt },{source: at , target: bi },{source: at , target: av },{source: av , target: bt },{source: av , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'bt','bi','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  ag = nodes[0],av = nodes[1],bd = {id: 'bd', name:'soldat_5.11'} ; nodes.push( bd ); links.push( {source: ag , target: av },{source: ag , target: bd },{source: av , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  av = nodes[0],bd = nodes[1] ; /* nodes.push(); */ links.push( {source: av , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  an = {id: 'an', name:'la_hire'},av = nodes[0] ; nodes.push( an ); links.push( {source: an , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'an','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ag = {id: 'ag', name:'johanna'},aj = {id: 'aj', name:'könig'},am = {id: 'am', name:'sorel'},au = {id: 'au', name:'burgund'} ; nodes.push( ag,aj,am,au ); links.push( {source: am , target: au },{source: aj , target: am },{source: aj , target: au },{source: ag , target: am },{source: ag , target: aj },{source: ag , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 295000);
