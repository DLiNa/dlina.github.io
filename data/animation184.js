setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'phalarius'},ab = {id: 'ab', name:'hades'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ac = {id: 'ac', name:'antrogäus'},ad = {id: 'ad', name:'chor'} ; nodes.push( ac,ad ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ae = {id: 'ae', name:'lucina'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = {id: 'ab', name:'hades'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = nodes[0],ae = {id: 'ae', name:'lucina'},af = {id: 'af', name:'kreon'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ag = {id: 'ag', name:'ewald'},ah = {id: 'ah', name:'simplicius'} ; nodes.push( ag,ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = {id: 'ae', name:'lucina'},ag = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ah = {id: 'ah', name:'simplicius'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ag = {id: 'ag', name:'ewald'},ah = nodes[0],ah = nodes[0],ai = {id: 'ai', name:'riegelsam'} ; nodes.push( ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ag = nodes[0],ah = nodes[1],ai = nodes[2],aj = {id: 'aj', name:'zwei_gerichtsdiener'} ; nodes.push( aj ); links.push( {source: ai , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ai','aj','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = {id: 'ae', name:'lucina'},ak = {id: 'ak', name:'genius'},ak = {id: 'ak', name:'genius'},al = {id: 'al', name:'gejammer'} ; nodes.push( ae,ak,al ); links.push( {source: ae , target: ak },{source: ae , target: ak },{source: ae , target: al },{source: ak , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ae','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  am = {id: 'am', name:'thestius'},an = {id: 'an', name:'epaminondas'} ; nodes.push( am,an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ag = {id: 'ag', name:'ewald'},ah = {id: 'ah', name:'simplicius'},am = nodes[0],an = nodes[1],ao = {id: 'ao', name:'hippomedon'},ap = {id: 'ap', name:'eine_frau'} ; nodes.push( ag,ah,ao,ap ); links.push( {source: ao , target: ap },{source: ag , target: ao },{source: ag , target: ah },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ap },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ap },{source: am , target: ao },{source: am , target: an },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ag = nodes[0],ah = nodes[1],am = nodes[2],an = nodes[3],ao = nodes[4],ap = nodes[5],aq = {id: 'aq', name:'sillius'} ; nodes.push( aq ); links.push( {source: ao , target: aq },{source: ao , target: ap },{source: ag , target: aq },{source: ag , target: ao },{source: ag , target: ah },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ap },{source: ah , target: aq },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ap },{source: am , target: aq },{source: am , target: ao },{source: am , target: an },{source: am , target: ap },{source: an , target: aq },{source: an , target: ao },{source: an , target: ap },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aq','ao','ag','am','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ah = nodes[0],an = nodes[1],ar = {id: 'ar', name:'argos'},as = {id: 'as', name:'diener'} ; nodes.push( ar,as ); links.push( {source: ar , target: as },{source: an , target: ar },{source: an , target: as },{source: ah , target: ar },{source: ah , target: an },{source: ah , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ar','an','ah','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ag = {id: 'ag', name:'ewald'},am = {id: 'am', name:'thestius'} ; nodes.push( ag,am ); links.push( {source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ag = nodes[0],am = nodes[1],at = {id: 'at', name:'harmodius'} ; nodes.push( at ); links.push( {source: am , target: at },{source: ag , target: at },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'at','am','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ah = {id: 'ah', name:'simplicius'},au = {id: 'au', name:'arete'} ; nodes.push( ah,au ); links.push( {source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'au','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ag = {id: 'ag', name:'ewald'},at = {id: 'at', name:'harmodius'},av = {id: 'av', name:'heraklius'},aw = {id: 'aw', name:'adrasto'} ; nodes.push( ag,at,av,aw ); links.push( {source: av , target: aw },{source: at , target: av },{source: at , target: aw },{source: ag , target: av },{source: ag , target: at },{source: ag , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'av','at','ag','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ax = {id: 'ax', name:'antrokles'},ay = {id: 'ay', name:'clitonius'} ; nodes.push( ax,ay ); links.push( {source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ah = {id: 'ah', name:'simplicius'},az = {id: 'az', name:'lulu'},ba = {id: 'ba', name:'fanfu'},bb = {id: 'bb', name:'die_genien'} ; nodes.push( ah,az,ba,bb ); links.push( {source: az , target: ba },{source: az , target: bb },{source: ba , target: bb },{source: ah , target: az },{source: ah , target: ba },{source: ah , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'az','ba','ah','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = {id: 'aa', name:'phalarius'},bc = {id: 'bc', name:'ein_jäger'},bd = {id: 'bd', name:'octavian'} ; nodes.push( aa,bc,bd ); links.push( {source: aa , target: bc },{source: aa , target: bd },{source: bc , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aa','bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ae = {id: 'ae', name:'lucina'},ag = {id: 'ag', name:'ewald'} ; nodes.push( ae,ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ag = nodes[0],be = {id: 'be', name:'atritia'} ; nodes.push( be ); links.push( {source: ag , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ag = nodes[0],ah = {id: 'ah', name:'simplicius'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ah = nodes[0],bf = {id: 'bf', name:'olimar'},bg = {id: 'bg', name:'astrachan'} ; nodes.push( bf,bg ); links.push( {source: bf , target: bg },{source: ah , target: bf },{source: ah , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ah = nodes[0],bf = nodes[1],bg = nodes[2],bh = {id: 'bh', name:'abukar'},bi = {id: 'bi', name:'nimmelot'} ; nodes.push( bh,bi ); links.push( {source: bh , target: bi },{source: bg , target: bh },{source: bg , target: bi },{source: bf , target: bh },{source: bf , target: bg },{source: bf , target: bi },{source: ah , target: bh },{source: ah , target: bg },{source: ah , target: bf },{source: ah , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ah = nodes[0],bf = nodes[1],bg = nodes[2],bh = nodes[3] ; /* nodes.push(); */ links.push( {source: ah , target: bh },{source: ah , target: bf },{source: ah , target: bg },{source: bf , target: bh },{source: bf , target: bg },{source: bg , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ah','bh','bf','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ag = {id: 'ag', name:'ewald'},bj = {id: 'bj', name:'aloe'},bk = {id: 'bk', name:'geschrei'} ; nodes.push( ag,bj,bk ); links.push( {source: bj , target: bk },{source: ag , target: bj },{source: ag , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ag = nodes[0],ah = {id: 'ah', name:'simplicius'},bk = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: bk },{source: ag , target: ah },{source: ag , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ad = {id: 'ad', name:'chor'},ag = nodes[0],ah = nodes[1],bf = {id: 'bf', name:'olimar'},bh = {id: 'bh', name:'abukar'},bl = {id: 'bl', name:'dardonius'},bm = {id: 'bm', name:'höfling'},bm = {id: 'bm', name:'höfling'},bn = {id: 'bn', name:'krieger'},bn = {id: 'bn', name:'krieger'},bn = {id: 'bn', name:'krieger'},bo = {id: 'bo', name:'mehrere_höflinge'},bo = {id: 'bo', name:'mehrere_höflinge'} ; nodes.push( ad,bf,bh,bl,bm,bn,bo ); links.push( {source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bn },{source: bl , target: bm },{source: bl , target: bo },{source: bl , target: bn },{source: bl , target: bo },{source: bm , target: bn },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: ah , target: bl },{source: ah , target: bm },{source: ah , target: bf },{source: ah , target: bh },{source: ah , target: bn },{source: ah , target: bn },{source: ah , target: bm },{source: ah , target: bo },{source: ah , target: bn },{source: ah , target: bo },{source: bf , target: bl },{source: bf , target: bm },{source: bf , target: bh },{source: bf , target: bn },{source: bf , target: bn },{source: bf , target: bm },{source: bf , target: bo },{source: bf , target: bn },{source: bf , target: bo },{source: bh , target: bl },{source: bh , target: bm },{source: bh , target: bn },{source: bh , target: bn },{source: bh , target: bm },{source: bh , target: bo },{source: bh , target: bn },{source: bh , target: bo },{source: bn , target: bo },{source: bn , target: bo },{source: ag , target: bl },{source: ag , target: bm },{source: ag , target: ah },{source: ag , target: bf },{source: ag , target: bh },{source: ag , target: bn },{source: ag , target: bn },{source: ag , target: bm },{source: ag , target: bo },{source: ag , target: bn },{source: ag , target: bo },{source: bn , target: bo },{source: bn , target: bo },{source: ad , target: bl },{source: ad , target: bm },{source: ad , target: ah },{source: ad , target: bf },{source: ad , target: bh },{source: ad , target: bn },{source: ad , target: ag },{source: ad , target: bn },{source: ad , target: bm },{source: ad , target: bo },{source: ad , target: bn },{source: ad , target: bo },{source: bm , target: bn },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: bn , target: bo },{source: bn , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'bl','bm','ah','bf','bh','bn','ag','ad','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  bj = {id: 'bj', name:'aloe'} ; nodes.push( bj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ag = {id: 'ag', name:'ewald'},az = {id: 'az', name:'lulu'},be = {id: 'be', name:'atritia'},bj = nodes[0] ; nodes.push( ag,az,be ); links.push( {source: ag , target: bj },{source: ag , target: be },{source: ag , target: az },{source: be , target: bj },{source: az , target: bj },{source: az , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ag','bj','be','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  bl = {id: 'bl', name:'dardonius'} ; nodes.push( bl ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ae = {id: 'ae', name:'lucina'},ag = {id: 'ag', name:'ewald'},ah = {id: 'ah', name:'simplicius'},ah = {id: 'ah', name:'simplicius'},bj = {id: 'bj', name:'aloe'},bl = nodes[1],bp = {id: 'bp', name:'die_männer'},bq = {id: 'bq', name:'die_frauen'} ; nodes.push( ae,ag,ah,bj,bp,bq ); links.push( {source: ah , target: bl },{source: ah , target: bp },{source: ah , target: bq },{source: ah , target: bj },{source: bl , target: bp },{source: bl , target: bq },{source: bp , target: bq },{source: ag , target: ah },{source: ag , target: bl },{source: ag , target: bp },{source: ag , target: bq },{source: ag , target: bj },{source: ag , target: ah },{source: ae , target: ah },{source: ae , target: bl },{source: ae , target: bp },{source: ae , target: bq },{source: ae , target: ag },{source: ae , target: bj },{source: ae , target: ah },{source: bj , target: bl },{source: bj , target: bp },{source: bj , target: bq },{source: ah , target: bl },{source: ah , target: bp },{source: ah , target: bq },{source: ah , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ah','bl','bp','bq','ag','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ae = nodes[0],af = {id: 'af', name:'kreon'},bs = {id: 'bs', name:'alekto'},bt = {id: 'bt', name:'megära'},bu = {id: 'bu', name:'tisiphone'} ; nodes.push( af,bs,bt,bu ); links.push( {source: ae , target: af },{source: ae , target: bu },{source: ae , target: bs },{source: ae , target: bt },{source: af , target: bu },{source: af , target: bs },{source: af , target: bt },{source: bs , target: bu },{source: bs , target: bt },{source: bt , target: bu } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = {id: 'aa', name:'phalarius'},ab = {id: 'ab', name:'hades'},ax = {id: 'ax', name:'antrokles'},br = {id: 'br', name:'die_drei_geister'},bs = nodes[0],bt = nodes[1],bu = nodes[2] ; nodes.push( aa,ab,ax,br ); links.push( {source: aa , target: ax },{source: aa , target: br },{source: aa , target: bs },{source: aa , target: bt },{source: aa , target: bu },{source: aa , target: ab },{source: ax , target: br },{source: ax , target: bs },{source: ax , target: bt },{source: ax , target: bu },{source: br , target: bs },{source: br , target: bt },{source: br , target: bu },{source: bs , target: bt },{source: bs , target: bu },{source: bt , target: bu },{source: ab , target: ax },{source: ab , target: br },{source: ab , target: bs },{source: ab , target: bt },{source: ab , target: bu } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aa','ax','br','bs','bt','bu','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ae = {id: 'ae', name:'lucina'},af = {id: 'af', name:'kreon'},ag = {id: 'ag', name:'ewald'},ah = {id: 'ah', name:'simplicius'},be = {id: 'be', name:'atritia'} ; nodes.push( ae,af,ag,ah,be ); links.push( {source: af , target: be },{source: af , target: ag },{source: af , target: ah },{source: ag , target: be },{source: ag , target: ah },{source: ah , target: be },{source: ae , target: be },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 185000);
