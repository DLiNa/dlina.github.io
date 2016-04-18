setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'sievers'},ab = {id: 'ab', name:'wirt'},ac = {id: 'ac', name:'metzler'},ad = {id: 'ad', name:'erster_reiter_bamberg'},ae = {id: 'ae', name:'zweiter_reiter_bamberg'},af = {id: 'af', name:'erster_reiter_berlichingen'},ag = {id: 'ag', name:'zweiter_reiter_berlichingen'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Schwarzenberg in Franken. Herberge';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ah = {id: 'ah', name:'götz'},ai = {id: 'ai', name:'der_bube'},ai = {id: 'ai', name:'der_bube'},aj = {id: 'aj', name:'martin'} ; nodes.push( ah,ai,aj ); links.push( {source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Herberge im Wald';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ah = nodes[0],ak = {id: 'ak', name:'karl'},al = {id: 'al', name:'maria'},am = {id: 'am', name:'elisabeth'},an = {id: 'an', name:'reiter'},ao = {id: 'ao', name:'weisslingen'},ao = {id: 'ao', name:'weisslingen'} ; nodes.push( ak,al,am,an,ao ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ao },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ao },{source: am , target: an },{source: am , target: ao },{source: am , target: ao },{source: an , target: ao },{source: an , target: ao },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Jaxthausen Götzens Burg';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ak','al','am','an','ao','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ap = {id: 'ap', name:'bischof'},aq = {id: 'aq', name:'olearius'},ar = {id: 'ar', name:'abt'},as = {id: 'as', name:'liebetraut'},at = {id: 'at', name:'ein_bedienter'} ; nodes.push( ap,aq,ar,as,at ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ar , target: as },{source: ar , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Akt'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ap','aq','ar','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ah = {id: 'ah', name:'götz'},al = {id: 'al', name:'maria'},am = {id: 'am', name:'elisabeth'},ao = {id: 'ao', name:'weisslingen'},au = {id: 'au', name:'franz'} ; nodes.push( ah,al,am,ao,au ); links.push( {source: al , target: ao },{source: al , target: am },{source: al , target: au },{source: ao , target: au },{source: ah , target: al },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: au },{source: am , target: ao },{source: am , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Erster Akt'; var scene = document.getElementById('scene');scene.innerHTML = '5';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'al','ao','ah','am','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ap = {id: 'ap', name:'bischof'},as = {id: 'as', name:'liebetraut'},av = {id: 'av', name:'adelheid'} ; nodes.push( ap,as,av ); links.push( {source: as , target: av },{source: ap , target: as },{source: ap , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'as','av','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ah = {id: 'ah', name:'götz'},aw = {id: 'aw', name:'selbitz'} ; nodes.push( ah,aw ); links.push( {source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aw','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  as = {id: 'as', name:'liebetraut'},av = {id: 'av', name:'adelheid'},ax = {id: 'ax', name:'fräulein'} ; nodes.push( as,av,ax ); links.push( {source: av , target: ax },{source: as , target: av },{source: as , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'av','ax','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ah = {id: 'ah', name:'götz'},ai = {id: 'ai', name:'der_bube'},aw = {id: 'aw', name:'selbitz'} ; nodes.push( ah,ai,aw ); links.push( {source: ah , target: ai },{source: ah , target: aw },{source: ai , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ah','ai','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ao = {id: 'ao', name:'weisslingen'},ap = {id: 'ap', name:'bischof'},au = {id: 'au', name:'franz'} ; nodes.push( ao,ap,au ); links.push( {source: ap , target: au },{source: ao , target: ap },{source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '5';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ao = nodes[0],au = nodes[1],av = {id: 'av', name:'adelheid'},ax = {id: 'ax', name:'fräulein'} ; nodes.push( av,ax ); links.push( {source: av , target: ax },{source: ao , target: ax },{source: ao , target: av },{source: ao , target: au },{source: au , target: ax },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '6';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ax','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ao = nodes[0],au = nodes[1] ; /* nodes.push(); */ links.push( {source: ao , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '7';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ao','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ah = {id: 'ah', name:'götz'},ai = {id: 'ai', name:'der_bube'},aw = {id: 'aw', name:'selbitz'} ; nodes.push( ah,ai,aw ); links.push( {source: ah , target: aw },{source: ah , target: ai },{source: ai , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '8';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aw','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ao = {id: 'ao', name:'weisslingen'},av = {id: 'av', name:'adelheid'} ; nodes.push( ao,av ); links.push( {source: ao , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '9';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'av','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ah = {id: 'ah', name:'götz'},ai = {id: 'ai', name:'der_bube'},aw = {id: 'aw', name:'selbitz'},ay = {id: 'ay', name:'brautvater'},az = {id: 'az', name:'bräutigam'},ba = {id: 'ba', name:'bauer'} ; nodes.push( ah,ai,aw,ay,az,ba ); links.push( {source: ah , target: ay },{source: ah , target: az },{source: ah , target: aw },{source: ah , target: ai },{source: ah , target: ba },{source: ay , target: az },{source: ay , target: ba },{source: az , target: ba },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: ai , target: ay },{source: ai , target: az },{source: ai , target: aw },{source: ai , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Zweiter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '10';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah','ay','az','aw','ai','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ao = {id: 'ao', name:'weisslingen'},bb = {id: 'bb', name:'kaufmann'},bb = {id: 'bb', name:'kaufmann'},bc = {id: 'bc', name:'zweiter_kaufmann'},bd = {id: 'bd', name:'kaiser'} ; nodes.push( ao,bb,bc,bd ); links.push( {source: bb , target: bc },{source: bb , target: bd },{source: bc , target: bd },{source: bb , target: bc },{source: bb , target: bd },{source: ao , target: bb },{source: ao , target: bc },{source: ao , target: bd },{source: ao , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'bb','bc','bd','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ah = {id: 'ah', name:'götz'},be = {id: 'be', name:'sickingen'} ; nodes.push( ah,be ); links.push( {source: ah , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'be','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  bf = {id: 'bf', name:'hauptmann'},bg = {id: 'bg', name:'erster_offizier'},bh = {id: 'bh', name:'zweiter_offizier'} ; nodes.push( bf,bg,bh ); links.push( {source: bf , target: bg },{source: bf , target: bh },{source: bg , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'bf','bg','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ah = {id: 'ah', name:'götz'},be = {id: 'be', name:'sickingen'} ; nodes.push( ah,be ); links.push( {source: ah , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'be','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  au = {id: 'au', name:'franz'},av = {id: 'av', name:'adelheid'} ; nodes.push( au,av ); links.push( {source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '5';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'av','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ah = {id: 'ah', name:'götz'},ai = {id: 'ai', name:'der_bube'},bi = {id: 'bi', name:'lerse'} ; nodes.push( ah,ai,bi ); links.push( {source: ai , target: bi },{source: ah , target: ai },{source: ah , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '6';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ah = nodes[0],ai = nodes[1],bj = {id: 'bj', name:'knecht'},bj = {id: 'bj', name:'knecht'},bk = {id: 'bk', name:'zweiter_knecht'} ; nodes.push( bj,bk ); links.push( {source: bj , target: bk },{source: ah , target: bj },{source: ah , target: bk },{source: ah , target: bj },{source: ah , target: ai },{source: bj , target: bk },{source: ai , target: bj },{source: ai , target: bk },{source: ai , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '7';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'bj','bk','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  bf = {id: 'bf', name:'hauptmann'},bl = {id: 'bl', name:'erster_ritter'},bm = {id: 'bm', name:'ritter'} ; nodes.push( bf,bl,bm ); links.push( {source: bl , target: bm },{source: bf , target: bl },{source: bf , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '8';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bl','bf','bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ah = {id: 'ah', name:'götz'},aw = {id: 'aw', name:'selbitz'} ; nodes.push( ah,aw ); links.push( {source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '9';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  bf = {id: 'bf', name:'hauptmann'},bm = {id: 'bm', name:'ritter'} ; nodes.push( bf,bm ); links.push( {source: bf , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '10';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bf','bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ah = {id: 'ah', name:'götz'},aw = {id: 'aw', name:'selbitz'} ; nodes.push( ah,aw ); links.push( {source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '11';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ah = nodes[0],ai = {id: 'ai', name:'der_bube'},aw = nodes[1],bf = {id: 'bf', name:'hauptmann'},bi = {id: 'bi', name:'lerse'},bj = {id: 'bj', name:'knecht'},bj = {id: 'bj', name:'knecht'},bk = {id: 'bk', name:'zweiter_knecht'},bm = {id: 'bm', name:'ritter'} ; nodes.push( ai,bf,bi,bj,bk,bm ); links.push( {source: bf , target: bm },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bk },{source: bf , target: bj },{source: aw , target: bf },{source: aw , target: bm },{source: aw , target: bi },{source: aw , target: bj },{source: aw , target: bk },{source: aw , target: bj },{source: bi , target: bm },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bj },{source: bj , target: bm },{source: bj , target: bk },{source: bk , target: bm },{source: bj , target: bm },{source: bj , target: bk },{source: ah , target: bf },{source: ah , target: bm },{source: ah , target: aw },{source: ah , target: bi },{source: ah , target: bj },{source: ah , target: bk },{source: ah , target: bj },{source: ah , target: ai },{source: ai , target: bf },{source: ai , target: bm },{source: ai , target: aw },{source: ai , target: bi },{source: ai , target: bj },{source: ai , target: bk },{source: ai , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '12';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bm','aw','bi','bj','bk','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  bf = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '13';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ah = {id: 'ah', name:'götz'},al = {id: 'al', name:'maria'},be = {id: 'be', name:'sickingen'} ; nodes.push( ah,al,be ); links.push( {source: ah , target: al },{source: ah , target: be },{source: al , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '14';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ah','al','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  bf = {id: 'bf', name:'hauptmann'},bm = {id: 'bm', name:'ritter'} ; nodes.push( bf,bm ); links.push( {source: bf , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '15';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bf','bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ah = {id: 'ah', name:'götz'},ai = {id: 'ai', name:'der_bube'},al = {id: 'al', name:'maria'},am = {id: 'am', name:'elisabeth'},be = {id: 'be', name:'sickingen'},bj = {id: 'bj', name:'knecht'} ; nodes.push( ah,ai,al,am,be,bj ); links.push( {source: ah , target: am },{source: ah , target: be },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: bj },{source: am , target: be },{source: am , target: bj },{source: be , target: bj },{source: al , target: am },{source: al , target: be },{source: al , target: bj },{source: ai , target: am },{source: ai , target: be },{source: ai , target: al },{source: ai , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '16';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'be','al','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ah = nodes[0],am = nodes[1],bj = nodes[2] ; /* nodes.push(); */ links.push( {source: ah , target: am },{source: ah , target: bj },{source: am , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '17';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'am','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ah = nodes[0],ai = {id: 'ai', name:'der_bube'},bi = {id: 'bi', name:'lerse'} ; nodes.push( ai,bi ); links.push( {source: ai , target: bi },{source: ah , target: bi },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '18';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ah = nodes[0],ai = nodes[1],am = {id: 'am', name:'elisabeth'},bi = nodes[2],cr = {id: 'cr', name:'knechte_III19'} ; nodes.push( am,cr ); links.push( {source: ah , target: am },{source: ah , target: ai },{source: ah , target: cr },{source: ah , target: bi },{source: am , target: cr },{source: am , target: bi },{source: ai , target: am },{source: ai , target: cr },{source: ai , target: bi },{source: bi , target: cr } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '19';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'am','cr','bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ah = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '20';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  bj = {id: 'bj', name:'knecht'},bk = {id: 'bk', name:'zweiter_knecht'} ; nodes.push( bj,bk ); links.push( {source: bj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Dritter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '21';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'bj','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ah = {id: 'ah', name:'götz'},am = {id: 'am', name:'elisabeth'},bn = {id: 'bn', name:'gerichtsdiener'} ; nodes.push( ah,am,bn ); links.push( {source: ah , target: am },{source: ah , target: bn },{source: am , target: bn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vierter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ah = nodes[0],bf = {id: 'bf', name:'hauptmann'},bn = nodes[1],bo = {id: 'bo', name:'ratsherr'},bp = {id: 'bp', name:'rat'},bp = {id: 'bp', name:'rat'},bq = {id: 'bq', name:'schreiber'},br = {id: 'br', name:'wache'} ; nodes.push( bf,bo,bp,bq,br ); links.push( {source: bo , target: bp },{source: bo , target: bp },{source: bo , target: bq },{source: bo , target: br },{source: bp , target: bq },{source: bp , target: br },{source: bp , target: bq },{source: bp , target: br },{source: bn , target: bo },{source: bn , target: bp },{source: bn , target: bp },{source: bn , target: bq },{source: bn , target: br },{source: ah , target: bo },{source: ah , target: bp },{source: ah , target: bp },{source: ah , target: bn },{source: ah , target: bq },{source: ah , target: br },{source: ah , target: bf },{source: bq , target: br },{source: bf , target: bo },{source: bf , target: bp },{source: bf , target: bp },{source: bf , target: bn },{source: bf , target: bq },{source: bf , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vierter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'bo','bp','bn','bq','br','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ah = nodes[0],be = {id: 'be', name:'sickingen'} ; nodes.push( be ); links.push( {source: ah , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vierter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ah','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ao = {id: 'ao', name:'weisslingen'},au = {id: 'au', name:'franz'},av = {id: 'av', name:'adelheid'} ; nodes.push( ao,au,av ); links.push( {source: ao , target: av },{source: ao , target: au },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vierter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'av','ao','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ah = {id: 'ah', name:'götz'},ai = {id: 'ai', name:'der_bube'},am = {id: 'am', name:'elisabeth'},bi = {id: 'bi', name:'lerse'} ; nodes.push( ah,ai,am,bi ); links.push( {source: ah , target: am },{source: ah , target: ai },{source: ah , target: bi },{source: am , target: bi },{source: ai , target: am },{source: ai , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Vierter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '5';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ah','am','ai','bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ac = {id: 'ac', name:'metzler'},ba = {id: 'ba', name:'bauer'},bs = {id: 'bs', name:'alter'},bt = {id: 'bt', name:'weib'},bu = {id: 'bu', name:'mutter'},bv = {id: 'bv', name:'link'} ; nodes.push( ac,ba,bs,bt,bu,bv ); links.push( {source: bs , target: bt },{source: bs , target: bu },{source: bs , target: bv },{source: bt , target: bu },{source: bt , target: bv },{source: bu , target: bv },{source: ac , target: bs },{source: ac , target: bt },{source: ac , target: bu },{source: ac , target: bv },{source: ac , target: ba },{source: ba , target: bs },{source: ba , target: bt },{source: ba , target: bu },{source: ba , target: bv } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '1';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'bs','bt','bu','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ac = nodes[0],ah = {id: 'ah', name:'götz'},bv = nodes[1],bw = {id: 'bw', name:'stumpf'},bw = {id: 'bw', name:'stumpf'},bx = {id: 'bx', name:'kohl'},by = {id: 'by', name:'wild'},bz = {id: 'bz', name:'linz'} ; nodes.push( ah,bw,bx,by,bz ); links.push( {source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bx , target: by },{source: bx , target: bz },{source: ah , target: bw },{source: ah , target: bx },{source: ah , target: by },{source: ah , target: bw },{source: ah , target: bv },{source: ah , target: bz },{source: by , target: bz },{source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: ac , target: bw },{source: ac , target: bx },{source: ac , target: ah },{source: ac , target: by },{source: ac , target: bw },{source: ac , target: bv },{source: ac , target: bz },{source: bv , target: bw },{source: bv , target: bx },{source: bv , target: by },{source: bv , target: bw },{source: bv , target: bz } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '2';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'bw','bx','ah','by','ac','bv','bz' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ao = {id: 'ao', name:'weisslingen'},au = {id: 'au', name:'franz'},ca = {id: 'ca', name:'bote'} ; nodes.push( ao,au,ca ); links.push( {source: ao , target: ca },{source: ao , target: au },{source: au , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '3';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ao','ca','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  am = {id: 'am', name:'elisabeth'},bi = {id: 'bi', name:'lerse'} ; nodes.push( am,bi ); links.push( {source: am , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '4';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'bi','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ac = {id: 'ac', name:'metzler'},ah = {id: 'ah', name:'götz'},ao = {id: 'ao', name:'weisslingen'},bv = {id: 'bv', name:'link'},bx = {id: 'bx', name:'kohl'},cb = {id: 'cb', name:'unbekannter'},cc = {id: 'cc', name:'erster_bauer'},cd = {id: 'cd', name:'zweiter_bauer'} ; nodes.push( ac,ah,ao,bv,bx,cb,cc,cd ); links.push( {source: ah , target: cb },{source: ah , target: cc },{source: ah , target: cd },{source: ah , target: bv },{source: ah , target: bx },{source: ah , target: ao },{source: cb , target: cc },{source: cb , target: cd },{source: cc , target: cd },{source: bv , target: cb },{source: bv , target: cc },{source: bv , target: cd },{source: bv , target: bx },{source: ac , target: ah },{source: ac , target: cb },{source: ac , target: cc },{source: ac , target: cd },{source: ac , target: bv },{source: ac , target: bx },{source: ac , target: ao },{source: bx , target: cb },{source: bx , target: cc },{source: bx , target: cd },{source: ao , target: cb },{source: ao , target: cc },{source: ao , target: cd },{source: ao , target: bv },{source: ao , target: bx } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '5';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'cb','cc','cd','bv','ac','bx','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ah = nodes[0],bf = {id: 'bf', name:'hauptmann'},bu = {id: 'bu', name:'mutter'},ce = {id: 'ce', name:'knab'},cf = {id: 'cf', name:'erste_zigeunerin'},cg = {id: 'cg', name:'zweite_zigeunerin'},ch = {id: 'ch', name:'erster_zigeuner'},ci = {id: 'ci', name:'zweiter_zigeuner'},cj = {id: 'cj', name:'dritter_zigeuner'},ck = {id: 'ck', name:'wolf'},cl = {id: 'cl', name:'sticks'} ; nodes.push( bf,bu,ce,cf,cg,ch,ci,cj,ck,cl ); links.push( {source: bu , target: ce },{source: bu , target: cf },{source: bu , target: cg },{source: bu , target: ch },{source: bu , target: ci },{source: bu , target: cj },{source: bu , target: ck },{source: bu , target: cl },{source: ce , target: cf },{source: ce , target: cg },{source: ce , target: ch },{source: ce , target: ci },{source: ce , target: cj },{source: ce , target: ck },{source: ce , target: cl },{source: cf , target: cg },{source: cf , target: ch },{source: cf , target: ci },{source: cf , target: cj },{source: cf , target: ck },{source: cf , target: cl },{source: cg , target: ch },{source: cg , target: ci },{source: cg , target: cj },{source: cg , target: ck },{source: cg , target: cl },{source: bf , target: bu },{source: bf , target: ce },{source: bf , target: cf },{source: bf , target: cg },{source: bf , target: ch },{source: bf , target: ci },{source: bf , target: cj },{source: bf , target: ck },{source: bf , target: cl },{source: ch , target: ci },{source: ch , target: cj },{source: ch , target: ck },{source: ch , target: cl },{source: ci , target: cj },{source: ci , target: ck },{source: ci , target: cl },{source: cj , target: ck },{source: cj , target: cl },{source: ck , target: cl },{source: ah , target: bu },{source: ah , target: ce },{source: ah , target: cf },{source: ah , target: cg },{source: ah , target: bf },{source: ah , target: ch },{source: ah , target: ci },{source: ah , target: cj },{source: ah , target: ck },{source: ah , target: cl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '6';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'bu','ce','cf','cg','ch','ci','cj','cl' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ah = nodes[0],bf = nodes[1],ck = nodes[2],cm = {id: 'cm', name:'schricks'},cn = {id: 'cn', name:'zigeunerin'} ; nodes.push( cm,cn ); links.push( {source: bf , target: cm },{source: bf , target: cn },{source: bf , target: ck },{source: ah , target: bf },{source: ah , target: cm },{source: ah , target: cn },{source: ah , target: ck },{source: cm , target: cn },{source: ck , target: cm },{source: ck , target: cn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '7';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'bf','ah','cm','cn','ck' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  am = {id: 'am', name:'elisabeth'},au = {id: 'au', name:'franz'},av = {id: 'av', name:'adelheid'},bi = {id: 'bi', name:'lerse'} ; nodes.push( am,au,av,bi ); links.push( {source: av , target: bi },{source: au , target: av },{source: au , target: bi },{source: am , target: av },{source: am , target: au },{source: am , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '8';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'av','bi','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  al = {id: 'al', name:'maria'},ao = {id: 'ao', name:'weisslingen'},au = nodes[0] ; nodes.push( al,ao ); links.push( {source: ao , target: au },{source: al , target: ao },{source: al , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '9';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ao','al','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  co = {id: 'co', name:'ältester'},cp = {id: 'cp', name:'rufer'},cq = {id: 'cq', name:'kläger'} ; nodes.push( co,cp,cq ); links.push( {source: co , target: cp },{source: co , target: cq },{source: cp , target: cq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '10';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'co','cp','cq' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  al = {id: 'al', name:'maria'},bi = {id: 'bi', name:'lerse'} ; nodes.push( al,bi ); links.push( {source: al , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '11';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ah = {id: 'ah', name:'götz'},al = nodes[0],am = {id: 'am', name:'elisabeth'},bi = nodes[1] ; nodes.push( ah,am ); links.push( {source: am , target: bi },{source: ah , target: am },{source: ah , target: al },{source: ah , target: bi },{source: al , target: am },{source: al , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Fünfter Akt'; var scene = document.getElementById('scene');scene.innerHTML = '12';
}, 260000);
