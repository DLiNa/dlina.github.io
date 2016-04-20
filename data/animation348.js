setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'altberg'},ac = {id: 'ac', name:'wildgans'},ae = {id: 'ae', name:'lisette'},af = {id: 'af', name:'frau_marthe'},ag = {id: 'ag', name:'schwarz'} ; nodes.push( aa,ab,ac,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'storch'},ae = nodes[3],af = nodes[4],ag = nodes[5] ; nodes.push( ad ); links.push( {source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: af },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: af },{source: af , target: ag },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','ab','ac','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = nodes[3],ag = nodes[6] ; /* nodes.push(); */ links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ah = {id: 'ah', name:'johann'},ai = {id: 'ai', name:'nettchen'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ah = nodes[0],ai = nodes[1],aj = {id: 'aj', name:'tobischka'} ; nodes.push( aj ); links.push( {source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ah = nodes[0],aj = nodes[2],ak = {id: 'ak', name:'gustchen'} ; nodes.push( ak ); links.push( {source: aj , target: ak },{source: ah , target: ak },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aj = nodes[1],ak = nodes[2],al = {id: 'al', name:'mehlthau'} ; nodes.push( al ); links.push( {source: ak , target: al },{source: aj , target: al },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aj = nodes[0],ak = nodes[1],al = nodes[2],am = {id: 'am', name:'sperling'} ; nodes.push( am ); links.push( {source: al , target: am },{source: ak , target: am },{source: ak , target: al },{source: aj , target: am },{source: aj , target: al },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'am','al','ak','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = {id: 'aa', name:'chor'},an = {id: 'an', name:'erster_brandlkramer'},ao = {id: 'ao', name:'zweiter_bandlkramer'},ap = {id: 'ap', name:'die_hausiererin'} ; nodes.push( aa,an,ao,ap ); links.push( {source: aa , target: an },{source: aa , target: ao },{source: aa , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  an = nodes[1],ao = nodes[2],ap = nodes[3],aq = {id: 'aq', name:'bärbel'},ar = {id: 'ar', name:'hänsle'},as = {id: 'as', name:'jockerle'} ; nodes.push( aq,ar,as ); links.push( {source: an , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: ar },{source: an , target: as },{source: aq , target: ar },{source: aq , target: as },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: ar },{source: ao , target: as },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'an','ao','ap','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aq = nodes[3],at = {id: 'at', name:'adam'} ; nodes.push( at ); links.push( {source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  at = nodes[1],au = {id: 'au', name:'simon'},av = {id: 'av', name:'seib'} ; nodes.push( au,av ); links.push( {source: au , target: av },{source: at , target: au },{source: at , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = {id: 'aa', name:'chor'},an = {id: 'an', name:'erster_brandlkramer'},an = {id: 'an', name:'erster_brandlkramer'},ao = {id: 'ao', name:'zweiter_bandlkramer'},at = nodes[0],au = nodes[1],av = nodes[2],aw = {id: 'aw', name:'hausknecht'},ax = {id: 'ax', name:'grundwächter'},ay = {id: 'ay', name:'bub'} ; nodes.push( aa,an,ao,aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: au , target: aw },{source: au , target: ax },{source: au , target: av },{source: au , target: ay },{source: ax , target: ay },{source: at , target: aw },{source: at , target: au },{source: at , target: ax },{source: at , target: av },{source: at , target: ay },{source: an , target: aw },{source: an , target: au },{source: an , target: ax },{source: an , target: at },{source: an , target: ao },{source: an , target: av },{source: an , target: ay },{source: ao , target: aw },{source: ao , target: au },{source: ao , target: ax },{source: ao , target: at },{source: ao , target: av },{source: ao , target: ay },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: aa , target: aw },{source: aa , target: au },{source: aa , target: ax },{source: aa , target: at },{source: aa , target: an },{source: aa , target: ao },{source: aa , target: av },{source: aa , target: ay },{source: aa , target: an },{source: an , target: aw },{source: an , target: au },{source: an , target: ax },{source: an , target: at },{source: an , target: ao },{source: an , target: av },{source: an , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aw','au','ax','an','ao','av','aa','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  at = nodes[4] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aq = {id: 'aq', name:'bärbel'},at = nodes[0],au = {id: 'au', name:'simon'},ax = {id: 'ax', name:'grundwächter'} ; nodes.push( aq,au,ax ); links.push( {source: at , target: ax },{source: at , target: au },{source: au , target: ax },{source: aq , target: ax },{source: aq , target: at },{source: aq , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ax','at','au','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ad = {id: 'ad', name:'storch'},ag = {id: 'ag', name:'schwarz'} ; nodes.push( ad,ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  az = {id: 'az', name:'stern'},ba = {id: 'ba', name:'hans'},bb = {id: 'bb', name:'turbarius'} ; nodes.push( az,ba,bb ); links.push( {source: az , target: bb },{source: az , target: ba },{source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  az = nodes[0],ba = nodes[1],bb = nodes[2],bc = {id: 'bc', name:'gretchen'} ; nodes.push( bc ); links.push( {source: bb , target: bc },{source: az , target: bc },{source: az , target: bb },{source: az , target: ba },{source: ba , target: bc },{source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'bc','bb','az','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = {id: 'ae', name:'lisette'},bd = {id: 'bd', name:'philipp'},be = {id: 'be', name:'kalb'} ; nodes.push( ae,bd,be ); links.push( {source: bd , target: be },{source: ae , target: bd },{source: ae , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  bd = nodes[1],be = nodes[2],bf = {id: 'bf', name:'richter'},bg = {id: 'bg', name:'geschworner'} ; nodes.push( bf,bg ); links.push( {source: bf , target: bg },{source: be , target: bf },{source: be , target: bg },{source: bd , target: bf },{source: bd , target: be },{source: bd , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'bf','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  az = {id: 'az', name:'stern'},bd = nodes[0],be = nodes[1] ; nodes.push( az ); links.push( {source: bd , target: be },{source: az , target: bd },{source: az , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'bd','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  az = nodes[0],ba = {id: 'ba', name:'hans'},bc = {id: 'bc', name:'gretchen'} ; nodes.push( ba,bc ); links.push( {source: ba , target: bc },{source: az , target: ba },{source: az , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ba','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  az = nodes[0],bb = {id: 'bb', name:'turbarius'},be = {id: 'be', name:'kalb'},bf = {id: 'bf', name:'richter'},bg = {id: 'bg', name:'geschworner'},bh = {id: 'bh', name:'die_geschwornen'} ; nodes.push( bb,be,bf,bg,bh ); links.push( {source: bf , target: bh },{source: bf , target: bg },{source: bg , target: bh },{source: bb , target: bf },{source: bb , target: bh },{source: bb , target: bg },{source: bb , target: be },{source: be , target: bf },{source: be , target: bh },{source: be , target: bg },{source: az , target: bf },{source: az , target: bh },{source: az , target: bg },{source: az , target: bb },{source: az , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bf','bh','bg','bb','be','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  bi = {id: 'bi', name:'lange'},bj = {id: 'bj', name:'herfort'} ; nodes.push( bi,bj ); links.push( {source: bi , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  bi = nodes[0],bj = nodes[1],bk = {id: 'bk', name:'jeanette'} ; nodes.push( bk ); links.push( {source: bi , target: bk },{source: bi , target: bj },{source: bj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  bi = nodes[0],bk = nodes[2],bl = {id: 'bl', name:'harmonikus'} ; nodes.push( bl ); links.push( {source: bi , target: bl },{source: bi , target: bk },{source: bk , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = {id: 'aa', name:'chor'},bi = nodes[0],bj = {id: 'bj', name:'herfort'},bk = nodes[1],bl = nodes[2],bm = {id: 'bm', name:'malchen'},bn = {id: 'bn', name:'bernhard'} ; nodes.push( aa,bj,bm,bn ); links.push( {source: bm , target: bn },{source: bl , target: bm },{source: bl , target: bn },{source: bi , target: bm },{source: bi , target: bl },{source: bi , target: bn },{source: bi , target: bk },{source: bi , target: bj },{source: bk , target: bm },{source: bk , target: bl },{source: bk , target: bn },{source: bj , target: bm },{source: bj , target: bl },{source: bj , target: bn },{source: bj , target: bk },{source: aa , target: bm },{source: aa , target: bl },{source: aa , target: bn },{source: aa , target: bi },{source: aa , target: bk },{source: aa , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bm','bl','bn','bi','bk','bj','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  bo = {id: 'bo', name:'robert'} ; nodes.push( bo ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  bp = {id: 'bp', name:'sabine'} ; nodes.push( bp ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  bo = {id: 'bo', name:'robert'},bp = nodes[0],bq = {id: 'bq', name:'therese'} ; nodes.push( bo,bq ); links.push( {source: bp , target: bq },{source: bo , target: bq },{source: bo , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  bo = nodes[0],bp = nodes[1],br = {id: 'br', name:'christoph'} ; nodes.push( br ); links.push( {source: bp , target: br },{source: bo , target: br },{source: bo , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  bo = nodes[0],bp = nodes[1],bq = {id: 'bq', name:'therese'},br = nodes[2],bs = {id: 'bs', name:'susanne'} ; nodes.push( bq,bs ); links.push( {source: bo , target: bs },{source: bo , target: bp },{source: bo , target: br },{source: bo , target: bq },{source: bp , target: bs },{source: bp , target: br },{source: bp , target: bq },{source: br , target: bs },{source: bq , target: bs },{source: bq , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bo','bp','br','bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  bs = nodes[4],bt = {id: 'bt', name:'mathias'} ; nodes.push( bt ); links.push( {source: bs , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  bo = {id: 'bo', name:'robert'},br = {id: 'br', name:'christoph'},bt = nodes[1],bu = {id: 'bu', name:'korporal'} ; nodes.push( bo,br,bu ); links.push( {source: bt , target: bu },{source: bo , target: bu },{source: bo , target: bt },{source: bo , target: br },{source: br , target: bu },{source: br , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'bu','bt','bo','br' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = {id: 'aa', name:'chor'},ad = {id: 'ad', name:'storch'},ae = {id: 'ae', name:'lisette'},af = {id: 'af', name:'frau_marthe'},ag = {id: 'ag', name:'schwarz'},bv = {id: 'bv', name:'die_weiber'},bw = {id: 'bw', name:'die_männer'} ; nodes.push( aa,ad,ae,af,ag,bv,bw ); links.push( {source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: bv },{source: aa , target: bw },{source: ag , target: bv },{source: ag , target: bw },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: bv },{source: ad , target: bw },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: bv },{source: ae , target: bw },{source: af , target: ag },{source: af , target: bv },{source: af , target: bw },{source: bv , target: bw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '19. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 170000);
