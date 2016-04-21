setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'graf_otto'},ab = {id: 'ab', name:'theobald'},ac = {id: 'ac', name:'wenzel'},ad = {id: 'ad', name:'hans'},ae = {id: 'ae', name:'graf_vom_strahl'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = nodes[4] ,af = {id: 'af', name:'käthchen'},ag = {id: 'ag', name:'erster_richter'},ah = {id: 'ah', name:'zweiter_richter'},ai = {id: 'ai', name:'ein_richter'},aj = {id: 'aj', name:'die_richter'} ; nodes.push( af,ag,ah,ai,aj ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: aj },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','aa','ad','ac','ab','ag','ah','ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ae ak */ var  ae = nodes[0] ,ak = {id: 'ak', name:'gottschalk'} ; nodes.push( ak ); links.push( {source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ae al */ var  ae = nodes[0] ,al = {id: 'al', name:'ritter_flammberg'} ; nodes.push( al ); links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* am an ao ap */ var  am = {id: 'am', name:'burggraf_von_freiburg'},an = {id: 'an', name:'eine_stimme'},ao = {id: 'ao', name:'georg'},ap = {id: 'ap', name:'eine_andere'} ; nodes.push( am,an,ao,ap ); links.push( {source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'an','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* am ao aq ar as at au */ var  am = nodes[0] ,ao = nodes[1] ,aq = {id: 'aq', name:'der_erste_köhler'},ar = {id: 'ar', name:'der_zweite_köhler'},as = {id: 'as', name:'schauermann'},at = {id: 'at', name:'wetzlaf'},au = {id: 'au', name:'junge'} ; nodes.push( aq,ar,as,at,au ); links.push( {source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: am , target: ao },{source: am , target: au },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aq','ar','as','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* am ao */ var  am = nodes[0] ,ao = nodes[1]  ; /* nodes.push(); */ links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ae ak al am ao as au */ var  ae = {id: 'ae', name:'graf_vom_strahl'},ak = {id: 'ak', name:'gottschalk'},al = {id: 'al', name:'ritter_flammberg'},am = nodes[0] ,ao = nodes[1] ,as = {id: 'as', name:'schauermann'},au = {id: 'au', name:'junge'} ; nodes.push( ae,ak,al,as,au ); links.push( {source: ae , target: al },{source: ae , target: am },{source: ae , target: ao },{source: ae , target: ak },{source: ae , target: au },{source: ae , target: as },{source: al , target: am },{source: al , target: ao },{source: al , target: au },{source: al , target: as },{source: am , target: ao },{source: am , target: au },{source: am , target: as },{source: ao , target: au },{source: ao , target: as },{source: ak , target: al },{source: ak , target: am },{source: ak , target: ao },{source: ak , target: au },{source: ak , target: as },{source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ae ak al am ao as at av */ var  ae = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = nodes[3] ,ao = nodes[4] ,as = nodes[5] ,at = {id: 'at', name:'wetzlaf'},av = {id: 'av', name:'kunigunde'} ; nodes.push( at,av ); links.push( {source: am , target: av },{source: am , target: ao },{source: am , target: as },{source: am , target: at },{source: ao , target: av },{source: ao , target: as },{source: ao , target: at },{source: ae , target: av },{source: ae , target: am },{source: ae , target: ao },{source: ae , target: as },{source: ae , target: at },{source: ae , target: al },{source: ae , target: ak },{source: as , target: av },{source: as , target: at },{source: at , target: av },{source: al , target: av },{source: al , target: am },{source: al , target: ao },{source: al , target: as },{source: al , target: at },{source: ak , target: av },{source: ak , target: am },{source: ak , target: ao },{source: ak , target: as },{source: ak , target: at },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am','ao','ae','as','at','al','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* av aw ax */ var  av = nodes[0] ,aw = {id: 'aw', name:'rosalie'},ax = {id: 'ax', name:'brigitte'} ; nodes.push( aw,ax ); links.push( {source: aw , target: ax },{source: av , target: aw },{source: av , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* av aw */ var  av = nodes[0] ,aw = nodes[1]  ; /* nodes.push(); */ links.push( {source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* av aw ay */ var  av = nodes[0] ,aw = nodes[1] ,ay = {id: 'ay', name:'der_bediente'} ; nodes.push( ay ); links.push( {source: av , target: ay },{source: av , target: aw },{source: aw , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ay','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ae av az */ var  ae = {id: 'ae', name:'graf_vom_strahl'},av = nodes[0] ,az = {id: 'az', name:'gräfin'} ; nodes.push( ae,az ); links.push( {source: av , target: az },{source: ae , target: av },{source: ae , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ae az */ var  ae = nodes[0] ,az = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ae','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab af ba bb */ var  ab = {id: 'ab', name:'theobald'},af = {id: 'af', name:'käthchen'},ba = {id: 'ba', name:'gottfried'},bb = {id: 'bb', name:'pförtner'} ; nodes.push( ab,af,ba,bb ); links.push( {source: ab , target: ba },{source: ab , target: af },{source: ab , target: bb },{source: ba , target: bb },{source: af , target: ba },{source: af , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ab','ba','af','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* bc bd be */ var  bc = {id: 'bc', name:'rheingraf'},bd = {id: 'bd', name:'jakob_pech'},be = {id: 'be', name:'herrnstadt'} ; nodes.push( bc,bd,be ); links.push( {source: bc , target: bd },{source: bc , target: be },{source: bd , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* bc be bf */ var  bc = nodes[0] ,be = nodes[1] ,bf = {id: 'bf', name:'von_der_wart'} ; nodes.push( bf ); links.push( {source: bc , target: bf },{source: bc , target: be },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* bc be bf bg */ var  bc = nodes[0] ,be = nodes[1] ,bf = nodes[2] ,bg = {id: 'bg', name:'die_boten'} ; nodes.push( bg ); links.push( {source: bc , target: bg },{source: bc , target: be },{source: bc , target: bf },{source: be , target: bg },{source: be , target: bf },{source: bf , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'bc','bg','be','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ae af ak bh */ var  ae = {id: 'ae', name:'graf_vom_strahl'},af = {id: 'af', name:'käthchen'},ak = {id: 'ak', name:'gottschalk'},bh = {id: 'bh', name:'stimme'} ; nodes.push( ae,af,ak,bh ); links.push( {source: ak , target: bh },{source: ae , target: bh },{source: ae , target: ak },{source: ae , target: af },{source: af , target: bh },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae af ak */ var  ae = nodes[0] ,af = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: ak },{source: ae , target: af },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae','ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* bi */ var  bi = {id: 'bi', name:'ein_nachtwächter'} ; nodes.push( bi ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae ak bj */ var  ae = {id: 'ae', name:'graf_vom_strahl'},ak = {id: 'ak', name:'gottschalk'},bj = {id: 'bj', name:'thurneck'} ; nodes.push( ae,ak,bj ); links.push( {source: ae , target: ak },{source: ae , target: bj },{source: ak , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ak','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = {id: 'af', name:'käthchen'} ; nodes.push( af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ae al */ var  ae = nodes[0] ,al = {id: 'al', name:'ritter_flammberg'} ; nodes.push( al ); links.push( {source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ae av bk bl */ var  ae = nodes[0] ,av = {id: 'av', name:'kunigunde'},bk = {id: 'bk', name:'erste_tante'},bl = {id: 'bl', name:'zweite_tante'} ; nodes.push( av,bk,bl ); links.push( {source: bk , target: bl },{source: ae , target: bk },{source: ae , target: bl },{source: ae , target: av },{source: av , target: bk },{source: av , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bk','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ae af av */ var  ae = nodes[0] ,af = {id: 'af', name:'käthchen'},av = nodes[1]  ; nodes.push( af ); links.push( {source: ae , target: av },{source: ae , target: af },{source: af , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae af al av bm bn bo */ var  ae = nodes[0] ,af = nodes[1] ,al = {id: 'al', name:'ritter_flammberg'},av = nodes[2] ,bm = {id: 'bm', name:'ein_knecht'},bn = {id: 'bn', name:'ein_anderer_knecht'},bo = {id: 'bo', name:'die_anderen'} ; nodes.push( al,bm,bn,bo ); links.push( {source: ae , target: av },{source: ae , target: af },{source: ae , target: al },{source: ae , target: bm },{source: ae , target: bn },{source: ae , target: bo },{source: ae , target: bn },{source: ae , target: bm },{source: ae , target: bo },{source: av , target: bm },{source: av , target: bn },{source: av , target: bo },{source: av , target: bn },{source: av , target: bm },{source: av , target: bo },{source: af , target: av },{source: af , target: al },{source: af , target: bm },{source: af , target: bn },{source: af , target: bo },{source: af , target: bn },{source: af , target: bm },{source: af , target: bo },{source: al , target: av },{source: al , target: bm },{source: al , target: bn },{source: al , target: bo },{source: al , target: bn },{source: al , target: bm },{source: al , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: bn , target: bo },{source: bn , target: bo },{source: bn , target: bo },{source: bn , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bn },{source: bm , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ae','av','al','bm','bn','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* af bp */ var  af = nodes[0] ,bp = {id: 'bp', name:'der_cherub'} ; nodes.push( bp ); links.push( {source: af , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'bp' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ae af al av bk bl bm bn */ var  ae = {id: 'ae', name:'graf_vom_strahl'},af = nodes[0] ,al = {id: 'al', name:'ritter_flammberg'},av = {id: 'av', name:'kunigunde'},bk = {id: 'bk', name:'erste_tante'},bl = {id: 'bl', name:'zweite_tante'},bm = {id: 'bm', name:'ein_knecht'},bn = {id: 'bn', name:'ein_anderer_knecht'} ; nodes.push( ae,al,av,bk,bl,bm,bn ); links.push( {source: av , target: bm },{source: av , target: bn },{source: av , target: bk },{source: av , target: bl },{source: ae , target: av },{source: ae , target: al },{source: ae , target: bm },{source: ae , target: bn },{source: ae , target: bk },{source: ae , target: bl },{source: ae , target: af },{source: al , target: av },{source: al , target: bm },{source: al , target: bn },{source: al , target: bk },{source: al , target: bl },{source: bm , target: bn },{source: bk , target: bm },{source: bk , target: bn },{source: bk , target: bl },{source: bl , target: bm },{source: bl , target: bn },{source: af , target: av },{source: af , target: al },{source: af , target: bm },{source: af , target: bn },{source: af , target: bk },{source: af , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'av','bm','bn','bk','bl','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae al bj bq */ var  ae = nodes[0] ,al = nodes[1] ,bj = {id: 'bj', name:'thurneck'},bq = {id: 'bq', name:'volk'} ; nodes.push( bj,bq ); links.push( {source: bj , target: bq },{source: al , target: bj },{source: al , target: bq },{source: ae , target: bj },{source: ae , target: al },{source: ae , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'bj','bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ae af ak al bc bm bn br */ var  ae = nodes[0] ,af = {id: 'af', name:'käthchen'},ak = {id: 'ak', name:'gottschalk'},al = nodes[1] ,bc = {id: 'bc', name:'rheingraf'},bm = {id: 'bm', name:'ein_knecht'},bn = {id: 'bn', name:'ein_anderer_knecht'},br = {id: 'br', name:'knechte_des_rheingrafen'} ; nodes.push( af,ak,bc,bm,bn,br ); links.push( {source: bc , target: br },{source: bc , target: bm },{source: bc , target: bn },{source: ae , target: bc },{source: ae , target: br },{source: ae , target: af },{source: ae , target: bm },{source: ae , target: bn },{source: ae , target: al },{source: ae , target: ak },{source: af , target: bc },{source: af , target: br },{source: af , target: bm },{source: af , target: bn },{source: af , target: al },{source: af , target: ak },{source: bm , target: br },{source: bm , target: bn },{source: bn , target: br },{source: al , target: bc },{source: al , target: br },{source: al , target: bm },{source: al , target: bn },{source: ak , target: bc },{source: ak , target: br },{source: ak , target: bm },{source: ak , target: bn },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'bc','br','bm','bn','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae af ak */ var  ae = nodes[0] ,af = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: af },{source: ae , target: ak },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ae af ak */ var  ae = nodes[0] ,af = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: ak },{source: ae , target: af },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ae','ak','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* av aw */ var  av = {id: 'av', name:'kunigunde'},aw = {id: 'aw', name:'rosalie'} ; nodes.push( av,aw ); links.push( {source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aw bs */ var  aw = nodes[0] ,bs = {id: 'bs', name:'eleonore'} ; nodes.push( bs ); links.push( {source: aw , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* af av aw bs */ var  af = {id: 'af', name:'käthchen'},av = {id: 'av', name:'kunigunde'},aw = nodes[0] ,bs = nodes[1]  ; nodes.push( af,av ); links.push( {source: aw , target: bs },{source: af , target: aw },{source: af , target: bs },{source: af , target: av },{source: av , target: aw },{source: av , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'aw','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* af bs */ var  af = nodes[0] ,bs = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: bs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'bs','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* av aw */ var  av = {id: 'av', name:'kunigunde'},aw = {id: 'aw', name:'rosalie'} ; nodes.push( av,aw ); links.push( {source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ab ae bq bt bu bv */ var  aa = {id: 'aa', name:'graf_otto'},ab = {id: 'ab', name:'theobald'},ae = {id: 'ae', name:'graf_vom_strahl'},bq = {id: 'bq', name:'volk'},bt = {id: 'bt', name:'der_kaiser'},bu = {id: 'bu', name:'erzbischof'},bv = {id: 'bv', name:'ein_ritter'} ; nodes.push( aa,ab,ae,bq,bt,bu,bv ); links.push( {source: bt , target: bu },{source: bt , target: bv },{source: ae , target: bt },{source: ae , target: bu },{source: ae , target: bq },{source: ae , target: bv },{source: bu , target: bv },{source: ab , target: bt },{source: ab , target: ae },{source: ab , target: bu },{source: ab , target: bq },{source: ab , target: bv },{source: bq , target: bt },{source: bq , target: bu },{source: bq , target: bv },{source: aa , target: bt },{source: aa , target: ae },{source: aa , target: bu },{source: aa , target: ab },{source: aa , target: bq },{source: aa , target: bv } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ae','bu','ab','bq','bv','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* bt */ var  bt = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'bt' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* al am ao */ var  al = {id: 'al', name:'ritter_flammberg'},am = {id: 'am', name:'burggraf_von_freiburg'},ao = {id: 'ao', name:'georg'} ; nodes.push( al,am,ao ); links.push( {source: al , target: am },{source: al , target: ao },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'al','am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ae av aw */ var  ae = {id: 'ae', name:'graf_vom_strahl'},av = {id: 'av', name:'kunigunde'},aw = {id: 'aw', name:'rosalie'} ; nodes.push( ae,av,aw ); links.push( {source: av , target: aw },{source: ae , target: av },{source: ae , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ae av aw */ var  ae = nodes[0] ,av = nodes[1] ,aw = nodes[2]  ; /* nodes.push(); */ links.push( {source: ae , target: aw },{source: ae , target: av },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'aw','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ae av aw */ var  ae = nodes[0] ,av = {id: 'av', name:'kunigunde'},aw = {id: 'aw', name:'rosalie'} ; nodes.push( av,aw ); links.push( {source: av , target: aw },{source: ae , target: av },{source: ae , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ae av aw bw */ var  ae = nodes[0] ,av = nodes[1] ,aw = nodes[2] ,bw = {id: 'bw', name:'diener'} ; nodes.push( bw ); links.push( {source: av , target: bw },{source: av , target: aw },{source: aw , target: bw },{source: ae , target: bw },{source: ae , target: av },{source: ae , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'bw','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* av aw */ var  av = nodes[0] ,aw = nodes[1]  ; /* nodes.push(); */ links.push( {source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* aa ab af ak bt */ var  aa = {id: 'aa', name:'graf_otto'},ab = {id: 'ab', name:'theobald'},af = {id: 'af', name:'käthchen'},ak = {id: 'ak', name:'gottschalk'},bt = {id: 'bt', name:'der_kaiser'} ; nodes.push( aa,ab,af,ak,bt ); links.push( {source: aa , target: af },{source: aa , target: ak },{source: aa , target: bt },{source: aa , target: ab },{source: af , target: ak },{source: af , target: bt },{source: ak , target: bt },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* aa ab ae af ak bt */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'graf_vom_strahl'},af = nodes[2] ,ak = nodes[3] ,bt = nodes[4]  ; nodes.push( ae ); links.push( {source: ae , target: af },{source: ae , target: ak },{source: ae , target: bt },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: bt },{source: aa , target: ab },{source: af , target: ak },{source: af , target: bt },{source: ak , target: bt },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'aa','ak','bt','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ae am av aw bj bx */ var  ae = nodes[0] ,am = {id: 'am', name:'burggraf_von_freiburg'},av = {id: 'av', name:'kunigunde'},aw = {id: 'aw', name:'rosalie'},bj = {id: 'bj', name:'thurneck'},bx = {id: 'bx', name:'der_herold'} ; nodes.push( am,av,aw,bj,bx ); links.push( {source: ae , target: bx },{source: ae , target: av },{source: ae , target: aw },{source: ae , target: am },{source: ae , target: bj },{source: ae , target: am },{source: ae , target: bj },{source: ae , target: bj },{source: av , target: bx },{source: av , target: aw },{source: av , target: bj },{source: av , target: bj },{source: av , target: bj },{source: aw , target: bx },{source: aw , target: bj },{source: aw , target: bj },{source: aw , target: bj },{source: am , target: bx },{source: am , target: av },{source: am , target: aw },{source: am , target: bj },{source: am , target: bj },{source: am , target: bj },{source: bj , target: bx },{source: am , target: bx },{source: am , target: av },{source: am , target: aw },{source: am , target: bj },{source: am , target: bj },{source: am , target: bj },{source: bj , target: bx },{source: bj , target: bx } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'bx','aw','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* aa ab ae af ak al am av be bf bq bt */ var  aa = {id: 'aa', name:'graf_otto'},ab = {id: 'ab', name:'theobald'},ae = nodes[0] ,af = {id: 'af', name:'käthchen'},ak = {id: 'ak', name:'gottschalk'},al = {id: 'al', name:'ritter_flammberg'},am = nodes[1] ,av = nodes[2] ,be = {id: 'be', name:'herrnstadt'},bf = {id: 'bf', name:'von_der_wart'},bq = {id: 'bq', name:'volk'},bt = {id: 'bt', name:'der_kaiser'} ; nodes.push( aa,ab,af,ak,al,be,bf,bq,bt ); links.push( {source: aa , target: al },{source: aa , target: ak },{source: aa , target: bq },{source: aa , target: be },{source: aa , target: bf },{source: aa , target: am },{source: aa , target: af },{source: aa , target: bt },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: av },{source: al , target: bq },{source: al , target: be },{source: al , target: bf },{source: al , target: am },{source: al , target: bt },{source: al , target: av },{source: ak , target: al },{source: ak , target: bq },{source: ak , target: be },{source: ak , target: bf },{source: ak , target: am },{source: ak , target: bt },{source: ak , target: av },{source: bq , target: bt },{source: be , target: bq },{source: be , target: bf },{source: be , target: bt },{source: bf , target: bq },{source: bf , target: bt },{source: am , target: bq },{source: am , target: be },{source: am , target: bf },{source: am , target: bt },{source: am , target: av },{source: af , target: al },{source: af , target: ak },{source: af , target: bq },{source: af , target: be },{source: af , target: bf },{source: af , target: am },{source: af , target: bt },{source: af , target: av },{source: ab , target: al },{source: ab , target: ak },{source: ab , target: bq },{source: ab , target: be },{source: ab , target: bf },{source: ab , target: am },{source: ab , target: af },{source: ab , target: bt },{source: ab , target: ae },{source: ab , target: av },{source: ae , target: al },{source: ae , target: ak },{source: ae , target: bq },{source: ae , target: be },{source: ae , target: bf },{source: ae , target: am },{source: ae , target: af },{source: ae , target: bt },{source: ae , target: av },{source: av , target: bq },{source: av , target: be },{source: av , target: bf },{source: av , target: bt } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 260000);
