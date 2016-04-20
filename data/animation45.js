setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'trommler'},aa = {id: 'aa', name:'trommler'},ab = {id: 'ab', name:'sonnsfeld'},ab = {id: 'ab', name:'sonnsfeld'},ac = {id: 'ac', name:'eversmann'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[2],ad = {id: 'ad', name:'wilhelmine'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = nodes[1],ae = {id: 'ae', name:'erbprinz'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = {id: 'ab', name:'sonnsfeld'},ab = {id: 'ab', name:'sonnsfeld'},ae = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ae },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = nodes[0],ae = nodes[2],af = {id: 'af', name:'die_königin'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = {id: 'ac', name:'eversmann'},ae = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = nodes[0],ad = {id: 'ad', name:'wilhelmine'},ae = nodes[1],af = {id: 'af', name:'die_königin'},ag = {id: 'ag', name:'könig'} ; nodes.push( ad,af,ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: af , target: ag },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae','ag','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ac = nodes[0],ah = {id: 'ah', name:'grumbkow'},ai = {id: 'ai', name:'seckendorf'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ac = nodes[0],ag = {id: 'ag', name:'könig'},ah = nodes[1],ai = nodes[2] ; nodes.push( ag ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ac = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = {id: 'ae', name:'erbprinz'},ag = nodes[1],aj = {id: 'aj', name:'lakai'} ; nodes.push( ae,aj ); links.push( {source: ag , target: aj },{source: ae , target: ag },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ae = nodes[0],ag = nodes[1],aj = nodes[2] ; /* nodes.push(); */ links.push( {source: ag , target: aj },{source: ae , target: ag },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = {id: 'ac', name:'eversmann'},ag = nodes[1],ah = {id: 'ah', name:'grumbkow'},ai = {id: 'ai', name:'seckendorf'} ; nodes.push( ac,ah,ai ); links.push( {source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ah','ag','ai','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = {id: 'ae', name:'erbprinz'},ak = {id: 'ak', name:'hotham'},al = {id: 'al', name:'kamke'} ; nodes.push( ae,ak,al ); links.push( {source: ak , target: al },{source: ae , target: ak },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = {id: 'ad', name:'wilhelmine'},ae = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = {id: 'ab', name:'sonnsfeld'},ad = nodes[0],am = {id: 'am', name:'eckhof'},an = {id: 'an', name:'erster_grenadier'},ao = {id: 'ao', name:'zweiter_grenadier'},ap = {id: 'ap', name:'dritter_grenadier'} ; nodes.push( ab,am,an,ao,ap ); links.push( {source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ab , target: ad },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = nodes[0],ad = nodes[1],am = nodes[2] ; /* nodes.push(); */ links.push( {source: ad , target: am },{source: ab , target: ad },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ab = nodes[0],ad = nodes[1],ag = {id: 'ag', name:'könig'},am = nodes[2] ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ad , target: am },{source: ag , target: am },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'am','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ad = nodes[1],ae = {id: 'ae', name:'erbprinz'},af = {id: 'af', name:'die_königin'},ag = nodes[2],aj = {id: 'aj', name:'lakai'},ak = {id: 'ak', name:'hotham'},aq = {id: 'aq', name:'bediente'} ; nodes.push( ae,af,aj,ak,aq ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: aq },{source: ad , target: ak },{source: ad , target: aj },{source: af , target: ag },{source: af , target: aq },{source: af , target: ak },{source: af , target: aj },{source: ag , target: aq },{source: ag , target: ak },{source: ag , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: aq },{source: ae , target: ak },{source: ae , target: aj },{source: ak , target: aq },{source: aj , target: aq },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ad','aq','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = nodes[1],af = nodes[2],ag = nodes[3],ah = {id: 'ah', name:'grumbkow'},ai = {id: 'ai', name:'seckendorf'},ak = nodes[5] ; nodes.push( ah,ai ); links.push( {source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: ah , target: ak },{source: ah , target: ai },{source: ai , target: ak },{source: af , target: ag },{source: af , target: ak },{source: af , target: ah },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ag','ak','ah','ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = {id: 'ad', name:'wilhelmine'},ae = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ae = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ac = {id: 'ac', name:'eversmann'},ae = nodes[0],ak = {id: 'ak', name:'hotham'} ; nodes.push( ac,ak ); links.push( {source: ac , target: ae },{source: ac , target: ak },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ae','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = nodes[0],ai = {id: 'ai', name:'seckendorf'} ; nodes.push( ai ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = nodes[0],ai = nodes[1],ak = {id: 'ak', name:'hotham'} ; nodes.push( ak ); links.push( {source: ac , target: ak },{source: ac , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ac = nodes[0],ag = {id: 'ag', name:'könig'},ah = {id: 'ah', name:'grumbkow'},ak = nodes[2] ; nodes.push( ag,ah ); links.push( {source: ag , target: ak },{source: ag , target: ah },{source: ah , target: ak },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ag','ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ae = {id: 'ae', name:'erbprinz'},ak = nodes[3] ; nodes.push( ae ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ac = {id: 'ac', name:'eversmann'},ag = {id: 'ag', name:'könig'} ; nodes.push( ac,ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = nodes[0],ae = {id: 'ae', name:'erbprinz'},ag = nodes[1],ah = {id: 'ah', name:'grumbkow'},ai = {id: 'ai', name:'seckendorf'},ak = {id: 'ak', name:'hotham'},ar = {id: 'ar', name:'graf_schwerin'},as = {id: 'as', name:'graf_wartensleben'} ; nodes.push( ae,ah,ai,ak,ar,as ); links.push( {source: ah , target: ai },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: ak },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: ak },{source: ar , target: as },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ar },{source: ae , target: as },{source: ae , target: ak },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ai },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: ae },{source: ac , target: ak },{source: ak , target: ar },{source: ak , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ah','ag','ai','ar','as','ae','ac','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ab = {id: 'ab', name:'sonnsfeld'},al = {id: 'al', name:'kamke'},at = {id: 'at', name:'lakaien'} ; nodes.push( ab,al,at ); links.push( {source: al , target: at },{source: ab , target: al },{source: ab , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'al','at','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  af = {id: 'af', name:'die_königin'},af = {id: 'af', name:'die_königin'},au = {id: 'au', name:'viereck'},av = {id: 'av', name:'holzendorf'},aw = {id: 'aw', name:'hofdamen'} ; nodes.push( af,au,av,aw ); links.push( {source: au , target: av },{source: au , target: aw },{source: av , target: aw },{source: af , target: au },{source: af , target: av },{source: af , target: aw },{source: af , target: au },{source: af , target: av },{source: af , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  af = nodes[0],ag = {id: 'ag', name:'könig'},au = nodes[2],aw = nodes[4] ; nodes.push( ag ); links.push( {source: ag , target: aw },{source: ag , target: au },{source: af , target: ag },{source: af , target: aw },{source: af , target: au },{source: au , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'aw','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ad = {id: 'ad', name:'wilhelmine'},af = nodes[0],ag = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ad = nodes[0],ae = {id: 'ae', name:'erbprinz'},af = nodes[1],ag = nodes[2],ak = {id: 'ak', name:'hotham'} ; nodes.push( ae,ak ); links.push( {source: ad , target: af },{source: ad , target: ak },{source: ad , target: ag },{source: ad , target: ae },{source: af , target: ak },{source: af , target: ag },{source: ag , target: ak },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '[1. Szene]'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 165000);
