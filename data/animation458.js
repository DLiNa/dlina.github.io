setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'muse'},aa = {id: 'aa', name:'muse'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = {id: 'ab', name:'epimenides'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ac = {id: 'ac', name:'genien'},as = {id: 'as', name:'genius_i'},at = {id: 'at', name:'genius_ii'} ; nodes.push( ac,as,at ); links.push( {source: ac , target: as },{source: ac , target: at },{source: as , target: at },{source: ab , target: ac },{source: ab , target: as },{source: ab , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac','as','at','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = {id: 'ad', name:'heereszug'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],ae = {id: 'ae', name:'dämon_des_kriegs'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  af = {id: 'af', name:'dämonen_der_list'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = {id: 'ae', name:'dämon_des_kriegs'},af = nodes[0],ag = {id: 'ag', name:'pfaffe'},ah = {id: 'ah', name:'jurist'},ai = {id: 'ai', name:'diplomat'},aj = {id: 'aj', name:'dame'} ; nodes.push( ae,ag,ah,ai,aj ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ag = nodes[0],ah = nodes[1],ai = nodes[2],aj = nodes[3],ak = {id: 'ak', name:'hofmann'},al = {id: 'al', name:'lustige_person'},am = {id: 'am', name:'chor'} ; nodes.push( ak,al,am ); links.push( {source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: al },{source: ag , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','ai','aj','ak','ah','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  an = {id: 'an', name:'dämon_der_unterdrückung'},ao = {id: 'ao', name:'dämon_der_list'} ; nodes.push( an,ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ao = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  an = {id: 'an', name:'dämon_der_unterdrückung'} ; nodes.push( an ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  an = nodes[0],ap = {id: 'ap', name:'liebe'} ; nodes.push( ap ); links.push( {source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  an = nodes[0],ap = nodes[1],aq = {id: 'aq', name:'glaube'} ; nodes.push( aq ); links.push( {source: ap , target: aq },{source: an , target: aq },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aq','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  an = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ap = {id: 'ap', name:'liebe'},aq = {id: 'aq', name:'glaube'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ar = {id: 'ar', name:'hoffnung'} ; nodes.push( ar ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = {id: 'ac', name:'genien'},ap = {id: 'ap', name:'liebe'},aq = {id: 'aq', name:'glaube'},ar = nodes[0],as = {id: 'as', name:'genius_i'},at = {id: 'at', name:'genius_ii'} ; nodes.push( ac,ap,aq,as,at ); links.push( {source: ac , target: as },{source: ac , target: at },{source: ac , target: ar },{source: ac , target: ap },{source: ac , target: aq },{source: as , target: at },{source: ar , target: as },{source: ar , target: at },{source: ap , target: as },{source: ap , target: at },{source: ap , target: ar },{source: ap , target: aq },{source: aq , target: as },{source: aq , target: at },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = nodes[0],ap = nodes[1],aq = nodes[2],ar = nodes[3],as = nodes[4],at = nodes[5] ; /* nodes.push(); */ links.push( {source: ac , target: as },{source: ac , target: at },{source: ac , target: ar },{source: ac , target: ap },{source: ac , target: aq },{source: as , target: at },{source: ar , target: as },{source: ar , target: at },{source: ap , target: as },{source: ap , target: at },{source: ap , target: ar },{source: ap , target: aq },{source: aq , target: as },{source: aq , target: at },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ac','as','at','ar','ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  au = {id: 'au', name:'unsichtbares_chor'} ; nodes.push( au ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ab = {id: 'ab', name:'epimenides'},ac = {id: 'ac', name:'genien'},as = {id: 'as', name:'genius_i'},at = {id: 'at', name:'genius_ii'},au = nodes[0] ; nodes.push( ab,ac,as,at ); links.push( {source: ab , target: au },{source: ab , target: ac },{source: ab , target: as },{source: ab , target: at },{source: ac , target: au },{source: ac , target: as },{source: ac , target: at },{source: as , target: au },{source: as , target: at },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab','au','ac','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  am = {id: 'am', name:'chor'},ar = {id: 'ar', name:'hoffnung'},av = {id: 'av', name:'jugendfürst'} ; nodes.push( am,ar,av ); links.push( {source: am , target: av },{source: am , target: ar },{source: ar , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'av','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  am = nodes[0],au = {id: 'au', name:'unsichtbares_chor'},aw = {id: 'aw', name:'landbewohner'},ax = {id: 'ax', name:'sämtliche_chöre'},ba = {id: 'ba', name:'chor_der_krieger'},bb = {id: 'bb', name:'chor_der_frauen'} ; nodes.push( au,aw,ax,ba,bb ); links.push( {source: am , target: aw },{source: am , target: ax },{source: am , target: ba },{source: am , target: bb },{source: am , target: au },{source: aw , target: ax },{source: aw , target: ba },{source: aw , target: bb },{source: ax , target: ba },{source: ax , target: bb },{source: ba , target: bb },{source: au , target: aw },{source: au , target: ax },{source: au , target: ba },{source: au , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'am','aw','ax','ba','bb','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ab = {id: 'ab', name:'epimenides'},ap = {id: 'ap', name:'liebe'},aq = {id: 'aq', name:'glaube'},ar = {id: 'ar', name:'hoffnung'},ay = {id: 'ay', name:'priester'} ; nodes.push( ab,ap,aq,ar,ay ); links.push( {source: ab , target: ay },{source: ab , target: aq },{source: ab , target: ap },{source: ab , target: ar },{source: aq , target: ay },{source: aq , target: ar },{source: ap , target: ay },{source: ap , target: aq },{source: ap , target: ar },{source: ar , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'aq','ap','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = nodes[0],am = {id: 'am', name:'chor'},av = {id: 'av', name:'jugendfürst'},ay = nodes[1],az = {id: 'az', name:'die_einigkeit'},ba = {id: 'ba', name:'chor_der_krieger'},bb = {id: 'bb', name:'chor_der_frauen'} ; nodes.push( am,av,az,ba,bb ); links.push( {source: az , target: ba },{source: az , target: bb },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: ay },{source: ab , target: az },{source: ab , target: av },{source: ab , target: ba },{source: ab , target: bb },{source: ab , target: ay },{source: ab , target: am },{source: ba , target: bb },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: am , target: az },{source: am , target: av },{source: am , target: ba },{source: am , target: bb },{source: am , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 115000);
