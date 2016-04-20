setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'etschmann'},ab = {id: 'ab', name:'elsi'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = {id: 'ac', name:'mathis'},ad = {id: 'ad', name:'speckbachers_stimme'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = {id: 'ab', name:'elsi'},ad = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: aa , target: ab },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ae = {id: 'ae', name:'herzog'},af = {id: 'af', name:'la_coste'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'etschmann'},ad = nodes[0],ae = nodes[1],af = nodes[2],ag = {id: 'ag', name:'fallern'},ag = {id: 'ag', name:'fallern'} ; nodes.push( aa,ag ); links.push( {source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ag },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: ag },{source: ae , target: af },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ag },{source: aa , target: af },{source: af , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ad = nodes[0],ag = nodes[1],ah = {id: 'ah', name:'mayer'} ; nodes.push( ah ); links.push( {source: ad , target: ah },{source: ad , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ad = nodes[0],ai = {id: 'ai', name:'haspingers_stimme'},ai = {id: 'ai', name:'haspingers_stimme'} ; nodes.push( ai ); links.push( {source: ad , target: ai },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aj = {id: 'aj', name:'hofer'},ak = {id: 'ak', name:'volk'},ak = {id: 'ak', name:'volk'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ad = {id: 'ad', name:'speckbachers_stimme'},ai = {id: 'ai', name:'haspingers_stimme'},aj = nodes[0],ak = nodes[1],al = {id: 'al', name:'bote'},al = {id: 'al', name:'bote'},am = {id: 'am', name:'der_tiroler'} ; nodes.push( ad,ai,al,am ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: al },{source: aj , target: am },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: al },{source: ad , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: al },{source: ai , target: am },{source: ak , target: al },{source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj','ad','ai','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  af = {id: 'af', name:'la_coste'},an = {id: 'an', name:'fleury'} ; nodes.push( af,an ); links.push( {source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = {id: 'ae', name:'herzog'},ae = {id: 'ae', name:'herzog'},af = nodes[1],an = nodes[2] ; nodes.push( ae ); links.push( {source: ae , target: an },{source: ae , target: af },{source: ae , target: an },{source: ae , target: af },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae','an','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ai = {id: 'ai', name:'haspingers_stimme'},aj = {id: 'aj', name:'hofer'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ad = {id: 'ad', name:'speckbachers_stimme'},ai = nodes[0],aj = nodes[1],ao = {id: 'ao', name:'eisenstecken'} ; nodes.push( ad,ao ); links.push( {source: ad , target: aj },{source: ad , target: ao },{source: ad , target: ai },{source: aj , target: ao },{source: ai , target: aj },{source: ai , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ad','aj','ao','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = {id: 'ae', name:'herzog'},af = {id: 'af', name:'la_coste'},an = {id: 'an', name:'fleury'},ap = {id: 'ap', name:'ein_offizier'} ; nodes.push( ae,af,an,ap ); links.push( {source: ae , target: af },{source: ae , target: an },{source: ae , target: ap },{source: af , target: an },{source: af , target: ap },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae','af','an','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = {id: 'aa', name:'etschmann'},aj = {id: 'aj', name:'hofer'},aq = {id: 'aq', name:'frau_straubing'},ar = {id: 'ar', name:'heinrich'} ; nodes.push( aa,aj,aq,ar ); links.push( {source: aa , target: aj },{source: aa , target: aq },{source: aa , target: ar },{source: aj , target: aq },{source: aj , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],ag = {id: 'ag', name:'fallern'},aj = nodes[1],ao = {id: 'ao', name:'eisenstecken'} ; nodes.push( ag,ao ); links.push( {source: ag , target: aj },{source: ag , target: ao },{source: aj , target: ao },{source: aa , target: ag },{source: aa , target: aj },{source: aa , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aj = nodes[0],ao = nodes[1],as = {id: 'as', name:'rainer'},as = {id: 'as', name:'rainer'},at = {id: 'at', name:'andere_tiroler'},at = {id: 'at', name:'andere_tiroler'},at = {id: 'at', name:'andere_tiroler'} ; nodes.push( as,at ); links.push( {source: aj , target: as },{source: aj , target: as },{source: aj , target: ao },{source: aj , target: at },{source: aj , target: at },{source: aj , target: at },{source: as , target: at },{source: as , target: at },{source: as , target: at },{source: as , target: at },{source: as , target: at },{source: as , target: at },{source: ao , target: as },{source: ao , target: as },{source: ao , target: at },{source: ao , target: at },{source: ao , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aj','as','ao','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ae = {id: 'ae', name:'herzog'},ae = {id: 'ae', name:'herzog'},an = {id: 'an', name:'fleury'},au = {id: 'au', name:'französische_soldaten'},av = {id: 'av', name:'erster'},av = {id: 'av', name:'erster'},aw = {id: 'aw', name:'ein_anderer'} ; nodes.push( ae,an,au,av,aw ); links.push( {source: an , target: av },{source: an , target: aw },{source: an , target: av },{source: an , target: au },{source: av , target: aw },{source: av , target: aw },{source: ae , target: an },{source: ae , target: av },{source: ae , target: aw },{source: ae , target: av },{source: ae , target: au },{source: ae , target: an },{source: ae , target: av },{source: ae , target: aw },{source: ae , target: av },{source: ae , target: au },{source: au , target: av },{source: au , target: aw },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'an','av','aw','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = nodes[0],af = {id: 'af', name:'la_coste'},aj = {id: 'aj', name:'hofer'} ; nodes.push( af,aj ); links.push( {source: af , target: aj },{source: ae , target: af },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ad = {id: 'ad', name:'speckbachers_stimme'},ai = {id: 'ai', name:'haspingers_stimme'},aj = nodes[0],ao = {id: 'ao', name:'eisenstecken'} ; nodes.push( ad,ai,ao ); links.push( {source: aj , target: ao },{source: ai , target: aj },{source: ai , target: ao },{source: ad , target: aj },{source: ad , target: ao },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aj','ao','ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ax = {id: 'ax', name:'kanzler'},ay = {id: 'ay', name:'legationsrat'},az = {id: 'az', name:'ein_kabinettssekretär'} ; nodes.push( ax,ay,az ); links.push( {source: ax , target: ay },{source: ax , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ax','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = {id: 'ad', name:'speckbachers_stimme'},ai = {id: 'ai', name:'haspingers_stimme'},aj = {id: 'aj', name:'hofer'},aj = {id: 'aj', name:'hofer'},ak = {id: 'ak', name:'volk'},ba = {id: 'ba', name:'tiroler'},ba = {id: 'ba', name:'tiroler'} ; nodes.push( ad,ai,aj,ak,ba ); links.push( {source: aj , target: ak },{source: aj , target: ba },{source: aj , target: ba },{source: ad , target: aj },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: ba },{source: ad , target: ba },{source: aj , target: ak },{source: aj , target: ba },{source: aj , target: ba },{source: ak , target: ba },{source: ak , target: ba },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: ba },{source: ai , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aj','ad','ak','ai','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  bb = {id: 'bb', name:'vizekönig'},bc = {id: 'bc', name:'paraguay'},bd = {id: 'bd', name:'page'},bd = {id: 'bd', name:'page'} ; nodes.push( bb,bc,bd ); links.push( {source: bb , target: bc },{source: bb , target: bd },{source: bb , target: bd },{source: bc , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aj = {id: 'aj', name:'hofer'},bb = nodes[0] ; nodes.push( aj ); links.push( {source: aj , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aj = nodes[0],bb = nodes[1],bc = {id: 'bc', name:'paraguay'} ; nodes.push( bc ); links.push( {source: bb , target: bc },{source: aj , target: bc },{source: aj , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bc','bb','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ag = {id: 'ag', name:'fallern'},ao = {id: 'ao', name:'eisenstecken'} ; nodes.push( ag,ao ); links.push( {source: ag , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ag','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = {id: 'ab', name:'elsi'},be = {id: 'be', name:'weib'},be = {id: 'be', name:'weib'},bf = {id: 'bf', name:'erstes_kind'},bf = {id: 'bf', name:'erstes_kind'},bf = {id: 'bf', name:'erstes_kind'},bg = {id: 'bg', name:'zweites_kind'},bh = {id: 'bh', name:'die_tirolerin'} ; nodes.push( ab,be,bf,bg,bh ); links.push( {source: ab , target: be },{source: ab , target: be },{source: ab , target: bf },{source: ab , target: bf },{source: ab , target: bg },{source: ab , target: bh },{source: ab , target: bf },{source: be , target: bf },{source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: be , target: bf },{source: be , target: bf },{source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: be , target: bf },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bg },{source: bf , target: bh },{source: bg , target: bh },{source: bf , target: bg },{source: bf , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bf','bg','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = nodes[0],be = nodes[1],bi = {id: 'bi', name:'bärbel'} ; nodes.push( bi ); links.push( {source: be , target: bi },{source: ab , target: be },{source: ab , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = nodes[0],aj = {id: 'aj', name:'hofer'},be = nodes[1],bi = nodes[2],bj = {id: 'bj', name:'donay'} ; nodes.push( aj,bj ); links.push( {source: aj , target: bj },{source: aj , target: bi },{source: aj , target: be },{source: ab , target: aj },{source: ab , target: bj },{source: ab , target: bi },{source: ab , target: be },{source: bi , target: bj },{source: be , target: bj },{source: be , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aj','ab','bi','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  bc = {id: 'bc', name:'paraguay'},bj = nodes[0],bk = {id: 'bk', name:'raynouard'} ; nodes.push( bc,bk ); links.push( {source: bj , target: bk },{source: bc , target: bj },{source: bc , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bj','bc','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ad = {id: 'ad', name:'speckbachers_stimme'},ad = {id: 'ad', name:'speckbachers_stimme'},ai = {id: 'ai', name:'haspingers_stimme'},ai = {id: 'ai', name:'haspingers_stimme'},aj = {id: 'aj', name:'hofer'} ; nodes.push( ad,ai,aj ); links.push( {source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ai },{source: ai , target: aj },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aj = nodes[2],bl = {id: 'bl', name:'johann'} ; nodes.push( bl ); links.push( {source: aj , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aj = nodes[0],bk = {id: 'bk', name:'raynouard'} ; nodes.push( bk ); links.push( {source: aj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 160000);
