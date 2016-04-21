setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'ottilie'},ab = {id: 'ab', name:'puffmann'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'von_gröning'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'hermine'} ; nodes.push( ad ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'ottilie'},ab = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'thomas'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* af ag ah */ var  af = {id: 'af', name:'friedrich'},ag = {id: 'ag', name:'franz'},ah = {id: 'ah', name:'heinrich'} ; nodes.push( af,ag,ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* af ag ai */ var  af = nodes[0] ,ag = nodes[1] ,ai = {id: 'ai', name:'tupper'} ; nodes.push( ai ); links.push( {source: ag , target: ai },{source: af , target: ai },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ai aj ak al am an */ var  ai = nodes[0] ,aj = {id: 'aj', name:'althof'},ak = {id: 'ak', name:'lockerfeld'},al = {id: 'al', name:'massengold'},am = {id: 'am', name:'packendorf'},an = {id: 'an', name:'seewald'} ; nodes.push( aj,ak,al,am,an ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj','ak','al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'puffmann'},ai = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'thomas'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'peter'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ae ao */ var  ae = {id: 'ae', name:'thomas'},ao = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ap aq */ var  ap = {id: 'ap', name:'frau_hussbergerin'},aq = {id: 'aq', name:'hansi'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab aq */ var  ab = {id: 'ab', name:'puffmann'},aq = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ap aq */ var  ap = {id: 'ap', name:'frau_hussbergerin'},aq = nodes[0]  ; nodes.push( ap ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ap ar */ var  ap = nodes[0] ,ar = {id: 'ar', name:'frau_flachsin'} ; nodes.push( ar ); links.push( {source: ap , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ap ar as at */ var  ap = nodes[0] ,ar = nodes[1] ,as = {id: 'as', name:'kübler'},at = {id: 'at', name:'frau_küblerin'} ; nodes.push( as,at ); links.push( {source: as , target: at },{source: ar , target: as },{source: ar , target: at },{source: ap , target: as },{source: ap , target: at },{source: ap , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'at','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ap as au */ var  ap = nodes[0] ,as = nodes[1] ,au = {id: 'au', name:'frau_schmalzerin'} ; nodes.push( au ); links.push( {source: ap , target: au },{source: ap , target: as },{source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ap as at */ var  ap = nodes[0] ,as = nodes[1] ,at = {id: 'at', name:'frau_küblerin'} ; nodes.push( at ); links.push( {source: ap , target: at },{source: ap , target: as },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ap aq ar as at au av */ var  ap = nodes[0] ,aq = {id: 'aq', name:'hansi'},ar = {id: 'ar', name:'frau_flachsin'},as = nodes[1] ,at = nodes[2] ,au = {id: 'au', name:'frau_schmalzerin'},av = {id: 'av', name:'schmalzer'} ; nodes.push( aq,ar,au,av ); links.push( {source: au , target: av },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: as },{source: ar , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: at },{source: at , target: au },{source: at , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigste Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'au','av','ap','aq','ar','as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ae ao */ var  ae = {id: 'ae', name:'thomas'},ao = {id: 'ao', name:'peter'} ; nodes.push( ae,ao ); links.push( {source: ae , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigste Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ao','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab aj ak al am an */ var  ab = {id: 'ab', name:'puffmann'},aj = {id: 'aj', name:'althof'},ak = {id: 'ak', name:'lockerfeld'},al = {id: 'al', name:'massengold'},am = {id: 'am', name:'packendorf'},an = {id: 'an', name:'seewald'} ; nodes.push( ab,aj,ak,al,am,an ); links.push( {source: al , target: am },{source: al , target: an },{source: ab , target: al },{source: ab , target: am },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: an },{source: am , target: an },{source: aj , target: al },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aj','ak','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab al am */ var  ab = nodes[0] ,al = nodes[1] ,am = nodes[2]  ; /* nodes.push(); */ links.push( {source: al , target: am },{source: ab , target: al },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'thomas'} ; nodes.push( ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab aj am an */ var  ab = nodes[0] ,aj = {id: 'aj', name:'althof'},am = {id: 'am', name:'packendorf'},an = {id: 'an', name:'seewald'} ; nodes.push( aj,am,an ); links.push( {source: am , target: an },{source: aj , target: am },{source: aj , target: an },{source: ab , target: am },{source: ab , target: aj },{source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aj','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ab ak am */ var  ab = nodes[0] ,ak = {id: 'ak', name:'lockerfeld'},am = nodes[1]  ; nodes.push( ak ); links.push( {source: ak , target: am },{source: ab , target: ak },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ak','ab','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ar as at au av aw ax ay az ba bb bc */ var  ar = {id: 'ar', name:'frau_flachsin'},as = {id: 'as', name:'kübler'},at = {id: 'at', name:'frau_küblerin'},au = {id: 'au', name:'frau_schmalzerin'},av = {id: 'av', name:'schmalzer'},aw = {id: 'aw', name:'flachs'},ax = {id: 'ax', name:'klopf'},ay = {id: 'ay', name:'frau_klopfin'},az = {id: 'az', name:'susi'},ba = {id: 'ba', name:'spring'},bb = {id: 'bb', name:'biegel'},bc = {id: 'bc', name:'leicht'} ; nodes.push( ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bc },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: at },{source: as , target: az },{source: as , target: ba },{source: as , target: bb },{source: as , target: bc },{source: as , target: av },{source: as , target: au },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: ar , target: aw },{source: ar , target: as },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: at },{source: ar , target: az },{source: ar , target: ba },{source: ar , target: bb },{source: ar , target: bc },{source: ar , target: av },{source: ar , target: au },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: at , target: bb },{source: at , target: bc },{source: at , target: av },{source: at , target: au },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: bb , target: bc },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: au , target: bb },{source: au , target: bc },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae ao ar as at au av aw ax ay az ba bb bc bd be bf bg bh bi */ var  ae = {id: 'ae', name:'thomas'},ao = {id: 'ao', name:'peter'},ar = nodes[0] ,as = nodes[1] ,at = nodes[2] ,au = nodes[3] ,av = nodes[4] ,aw = nodes[5] ,ax = nodes[6] ,ay = nodes[7] ,az = nodes[8] ,ba = nodes[9] ,bb = nodes[10] ,bc = nodes[11] ,bd = {id: 'bd', name:'klara'},be = {id: 'be', name:'kellner'},bf = {id: 'bf', name:'netti'},bg = {id: 'bg', name:'mehrere_anwesende'},bh = {id: 'bh', name:'mehrere'},bi = {id: 'bi', name:'einige_männer'} ; nodes.push( ae,ao,bd,be,bf,bg,bh,bi ); links.push( {source: ae , target: bd },{source: ae , target: ao },{source: ae , target: ax },{source: ae , target: at },{source: ae , target: as },{source: ae , target: ar },{source: ae , target: be },{source: ae , target: au },{source: ae , target: ay },{source: ae , target: bf },{source: ae , target: ba },{source: ae , target: bb },{source: ae , target: bc },{source: ae , target: az },{source: ae , target: av },{source: ae , target: bg },{source: ae , target: aw },{source: ae , target: bh },{source: ae , target: bh },{source: ae , target: bi },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bh },{source: bd , target: bh },{source: bd , target: bi },{source: ao , target: bd },{source: ao , target: ax },{source: ao , target: at },{source: ao , target: as },{source: ao , target: ar },{source: ao , target: be },{source: ao , target: au },{source: ao , target: ay },{source: ao , target: bf },{source: ao , target: ba },{source: ao , target: bb },{source: ao , target: bc },{source: ao , target: az },{source: ao , target: av },{source: ao , target: bg },{source: ao , target: aw },{source: ao , target: bh },{source: ao , target: bh },{source: ao , target: bi },{source: ax , target: bd },{source: ax , target: be },{source: ax , target: ay },{source: ax , target: bf },{source: ax , target: ba },{source: ax , target: bb },{source: ax , target: bc },{source: ax , target: az },{source: ax , target: bg },{source: ax , target: bh },{source: ax , target: bh },{source: ax , target: bi },{source: at , target: bd },{source: at , target: ax },{source: at , target: be },{source: at , target: au },{source: at , target: ay },{source: at , target: bf },{source: at , target: ba },{source: at , target: bb },{source: at , target: bc },{source: at , target: az },{source: at , target: av },{source: at , target: bg },{source: at , target: aw },{source: at , target: bh },{source: at , target: bh },{source: at , target: bi },{source: as , target: bd },{source: as , target: ax },{source: as , target: at },{source: as , target: be },{source: as , target: au },{source: as , target: ay },{source: as , target: bf },{source: as , target: ba },{source: as , target: bb },{source: as , target: bc },{source: as , target: az },{source: as , target: av },{source: as , target: bg },{source: as , target: aw },{source: as , target: bh },{source: as , target: bh },{source: as , target: bi },{source: ar , target: bd },{source: ar , target: ax },{source: ar , target: at },{source: ar , target: as },{source: ar , target: be },{source: ar , target: au },{source: ar , target: ay },{source: ar , target: bf },{source: ar , target: ba },{source: ar , target: bb },{source: ar , target: bc },{source: ar , target: az },{source: ar , target: av },{source: ar , target: bg },{source: ar , target: aw },{source: ar , target: bh },{source: ar , target: bh },{source: ar , target: bi },{source: be , target: bf },{source: be , target: bg },{source: be , target: bh },{source: be , target: bh },{source: be , target: bi },{source: au , target: bd },{source: au , target: ax },{source: au , target: be },{source: au , target: ay },{source: au , target: bf },{source: au , target: ba },{source: au , target: bb },{source: au , target: bc },{source: au , target: az },{source: au , target: av },{source: au , target: bg },{source: au , target: aw },{source: au , target: bh },{source: au , target: bh },{source: au , target: bi },{source: ay , target: bd },{source: ay , target: be },{source: ay , target: bf },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bc },{source: ay , target: az },{source: ay , target: bg },{source: ay , target: bh },{source: ay , target: bh },{source: ay , target: bi },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bh },{source: bf , target: bi },{source: ba , target: bd },{source: ba , target: be },{source: ba , target: bf },{source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bg },{source: ba , target: bh },{source: ba , target: bh },{source: ba , target: bi },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bb , target: bc },{source: bb , target: bg },{source: bb , target: bh },{source: bb , target: bh },{source: bb , target: bi },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bg },{source: bc , target: bh },{source: bc , target: bh },{source: bc , target: bi },{source: az , target: bd },{source: az , target: be },{source: az , target: bf },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: az , target: bg },{source: az , target: bh },{source: az , target: bh },{source: az , target: bi },{source: av , target: bd },{source: av , target: ax },{source: av , target: be },{source: av , target: ay },{source: av , target: bf },{source: av , target: ba },{source: av , target: bb },{source: av , target: bc },{source: av , target: az },{source: av , target: bg },{source: av , target: aw },{source: av , target: bh },{source: av , target: bh },{source: av , target: bi },{source: bg , target: bh },{source: bg , target: bh },{source: bg , target: bi },{source: aw , target: bd },{source: aw , target: ax },{source: aw , target: be },{source: aw , target: ay },{source: aw , target: bf },{source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bc },{source: aw , target: az },{source: aw , target: bg },{source: aw , target: bh },{source: aw , target: bh },{source: aw , target: bi },{source: bh , target: bi },{source: bh , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ae','ax','at','as','ar','be','au','ay','bf','ba','bb','bc','az','av','bg','aw','bh','bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ao bd */ var  ao = nodes[0] ,bd = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ae ao bd */ var  ae = {id: 'ae', name:'thomas'},ao = nodes[0] ,bd = nodes[1]  ; nodes.push( ae ); links.push( {source: ae , target: bd },{source: ae , target: ao },{source: ao , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'bd','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ae as */ var  ae = nodes[0] ,as = {id: 'as', name:'kübler'} ; nodes.push( as ); links.push( {source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'as','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ao bd */ var  ao = {id: 'ao', name:'peter'},bd = {id: 'bd', name:'klara'} ; nodes.push( ao,bd ); links.push( {source: ao , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'bd','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ag bj */ var  ag = {id: 'ag', name:'franz'},bj = {id: 'bj', name:'rumpf'} ; nodes.push( ag,bj ); links.push( {source: ag , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ag','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'peter'},ap = {id: 'ap', name:'frau_hussbergerin'} ; nodes.push( ao,ap ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ao aq */ var  ao = nodes[0] ,aq = {id: 'aq', name:'hansi'} ; nodes.push( aq ); links.push( {source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aj am ao aq */ var  aj = {id: 'aj', name:'althof'},am = {id: 'am', name:'packendorf'},ao = nodes[0] ,aq = nodes[1]  ; nodes.push( aj,am ); links.push( {source: am , target: ao },{source: am , target: aq },{source: aj , target: am },{source: aj , target: ao },{source: aj , target: aq },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'am','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* an ao aq */ var  an = {id: 'an', name:'seewald'},ao = nodes[0] ,aq = nodes[1]  ; nodes.push( an ); links.push( {source: ao , target: aq },{source: an , target: ao },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ab ao aq */ var  ab = {id: 'ab', name:'puffmann'},ao = nodes[0] ,aq = nodes[1]  ; nodes.push( ab ); links.push( {source: ao , target: aq },{source: ab , target: ao },{source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ak ao aq */ var  ak = {id: 'ak', name:'lockerfeld'},ao = nodes[0] ,aq = nodes[1]  ; nodes.push( ak ); links.push( {source: ao , target: aq },{source: ak , target: ao },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ao aq */ var  ao = nodes[0] ,aq = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* an ao aq */ var  an = {id: 'an', name:'seewald'},ao = nodes[0] ,aq = nodes[1]  ; nodes.push( an ); links.push( {source: ao , target: aq },{source: an , target: ao },{source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* aj am ao aq */ var  aj = {id: 'aj', name:'althof'},am = {id: 'am', name:'packendorf'},ao = nodes[0] ,aq = nodes[1]  ; nodes.push( aj,am ); links.push( {source: ao , target: aq },{source: am , target: ao },{source: am , target: aq },{source: aj , target: ao },{source: aj , target: aq },{source: aj , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'am','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ao aq */ var  ao = nodes[0] ,aq = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ab ak ao aq */ var  ab = {id: 'ab', name:'puffmann'},ak = {id: 'ak', name:'lockerfeld'},ao = nodes[0] ,aq = nodes[1]  ; nodes.push( ab,ak ); links.push( {source: ao , target: aq },{source: ab , target: ao },{source: ab , target: aq },{source: ab , target: ak },{source: ak , target: ao },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ao','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ab aq */ var  ab = nodes[0] ,aq = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ao aq */ var  ao = {id: 'ao', name:'peter'},aq = nodes[0]  ; nodes.push( ao ); links.push( {source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ao bj */ var  ao = nodes[0] ,bj = {id: 'bj', name:'rumpf'} ; nodes.push( bj ); links.push( {source: ao , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ao */ var  ao = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ab ae */ var  ab = {id: 'ab', name:'puffmann'},ae = {id: 'ae', name:'thomas'} ; nodes.push( ab,ae ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = {id: 'ai', name:'tupper'} ; nodes.push( ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = {id: 'af', name:'friedrich'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = {id: 'ai', name:'tupper'} ; nodes.push( ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Szene';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* ao bd */ var  ao = {id: 'ao', name:'peter'},bd = {id: 'bd', name:'klara'} ; nodes.push( ao,bd ); links.push( {source: ao , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Szene';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ab ao bd */ var  ab = {id: 'ab', name:'puffmann'},ao = nodes[0] ,bd = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ao },{source: ab , target: bd },{source: ao , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigste Szene';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ab ao */ var  ab = nodes[0] ,ao = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigste Szene';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ab ai */ var  ab = nodes[0] ,ai = {id: 'ai', name:'tupper'} ; nodes.push( ai ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigste Szene';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ab ao */ var  ab = nodes[0] ,ao = {id: 'ao', name:'peter'} ; nodes.push( ao ); links.push( {source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigste Szene';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ab ag */ var  ab = nodes[0] ,ag = {id: 'ag', name:'franz'} ; nodes.push( ag ); links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigste Szene';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'peter'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigste Szene';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63');nodes.sort(compare); /* ai ao bj */ var  ai = {id: 'ai', name:'tupper'},ao = nodes[0] ,bj = {id: 'bj', name:'rumpf'} ; nodes.push( ai,bj ); links.push( {source: ai , target: ao },{source: ai , target: bj },{source: ao , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '28. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtundzwanzigste Szene';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64');nodes.sort(compare); /* ai am bj */ var  ai = nodes[0] ,am = {id: 'am', name:'packendorf'},bj = nodes[1]  ; nodes.push( am ); links.push( {source: am , target: bj },{source: ai , target: am },{source: ai , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '29. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunundzwanzigste Szene';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'ai','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65');nodes.sort(compare); /* am ao */ var  am = nodes[0] ,ao = {id: 'ao', name:'peter'} ; nodes.push( ao ); links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '30. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreißigste Szene';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'ao','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66');nodes.sort(compare); /* as av aw ax bk */ var  as = {id: 'as', name:'kübler'},av = {id: 'av', name:'schmalzer'},aw = {id: 'aw', name:'flachs'},ax = {id: 'ax', name:'klopf'},bk = {id: 'bk', name:'wirt'} ; nodes.push( as,av,aw,ax,bk ); links.push( {source: ax , target: bk },{source: as , target: ax },{source: as , target: bk },{source: as , target: av },{source: as , target: aw },{source: av , target: ax },{source: av , target: bk },{source: av , target: aw },{source: aw , target: ax },{source: aw , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '31. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einunddreißigste Szene';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'ax','bk','av','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67');nodes.sort(compare); /* aa ab al as */ var  aa = {id: 'aa', name:'ottilie'},ab = {id: 'ab', name:'puffmann'},al = {id: 'al', name:'massengold'},as = nodes[0]  ; nodes.push( aa,ab,al ); links.push( {source: al , target: as },{source: aa , target: al },{source: aa , target: as },{source: aa , target: ab },{source: ab , target: al },{source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '32. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiunddreißigste Szene';
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68');nodes.sort(compare); /* aa ab aj ak al am an ao ar as at au av aw ax bd bl */ var  aa = nodes[0] ,ab = nodes[1] ,aj = {id: 'aj', name:'althof'},ak = {id: 'ak', name:'lockerfeld'},al = nodes[2] ,am = {id: 'am', name:'packendorf'},an = {id: 'an', name:'seewald'},ao = {id: 'ao', name:'peter'},ar = {id: 'ar', name:'frau_flachsin'},as = nodes[3] ,at = {id: 'at', name:'frau_küblerin'},au = {id: 'au', name:'frau_schmalzerin'},av = {id: 'av', name:'schmalzer'},aw = {id: 'aw', name:'flachs'},ax = {id: 'ax', name:'klopf'},bd = {id: 'bd', name:'klara'},bl = {id: 'bl', name:'die_bürgersleute'} ; nodes.push( aj,ak,am,an,ao,ar,at,au,av,aw,ax,bd,bl ); links.push( {source: al , target: bl },{source: al , target: ax },{source: al , target: ao },{source: al , target: am },{source: al , target: as },{source: al , target: bd },{source: al , target: av },{source: al , target: aw },{source: al , target: ar },{source: al , target: at },{source: al , target: au },{source: al , target: an },{source: ab , target: al },{source: ab , target: bl },{source: ab , target: ax },{source: ab , target: ao },{source: ab , target: ak },{source: ab , target: am },{source: ab , target: as },{source: ab , target: bd },{source: ab , target: av },{source: ab , target: aw },{source: ab , target: ar },{source: ab , target: at },{source: ab , target: au },{source: ab , target: an },{source: ab , target: aj },{source: aa , target: al },{source: aa , target: ab },{source: aa , target: bl },{source: aa , target: ax },{source: aa , target: ao },{source: aa , target: ak },{source: aa , target: am },{source: aa , target: as },{source: aa , target: bd },{source: aa , target: av },{source: aa , target: aw },{source: aa , target: ar },{source: aa , target: at },{source: aa , target: au },{source: aa , target: an },{source: aa , target: aj },{source: ax , target: bl },{source: ax , target: bd },{source: ao , target: bl },{source: ao , target: ax },{source: ao , target: as },{source: ao , target: bd },{source: ao , target: av },{source: ao , target: aw },{source: ao , target: ar },{source: ao , target: at },{source: ao , target: au },{source: ak , target: al },{source: ak , target: bl },{source: ak , target: ax },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: as },{source: ak , target: bd },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: ar },{source: ak , target: at },{source: ak , target: au },{source: ak , target: an },{source: am , target: bl },{source: am , target: ax },{source: am , target: ao },{source: am , target: as },{source: am , target: bd },{source: am , target: av },{source: am , target: aw },{source: am , target: ar },{source: am , target: at },{source: am , target: au },{source: am , target: an },{source: as , target: bl },{source: as , target: ax },{source: as , target: bd },{source: as , target: av },{source: as , target: aw },{source: as , target: at },{source: as , target: au },{source: bd , target: bl },{source: av , target: bl },{source: av , target: ax },{source: av , target: bd },{source: av , target: aw },{source: aw , target: bl },{source: aw , target: ax },{source: aw , target: bd },{source: ar , target: bl },{source: ar , target: ax },{source: ar , target: as },{source: ar , target: bd },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: at },{source: ar , target: au },{source: at , target: bl },{source: at , target: ax },{source: at , target: bd },{source: at , target: av },{source: at , target: aw },{source: at , target: au },{source: au , target: bl },{source: au , target: ax },{source: au , target: bd },{source: au , target: av },{source: au , target: aw },{source: an , target: bl },{source: an , target: ax },{source: an , target: ao },{source: an , target: as },{source: an , target: bd },{source: an , target: av },{source: an , target: aw },{source: an , target: ar },{source: an , target: at },{source: an , target: au },{source: aj , target: al },{source: aj , target: bl },{source: aj , target: ax },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: as },{source: aj , target: bd },{source: aj , target: av },{source: aj , target: aw },{source: aj , target: ar },{source: aj , target: at },{source: aj , target: au },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '33. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiunddreißigste Szene';
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69');nodes.sort(compare); /* aa ab ae aj ak al am an ao ar as at au av aw ax bd bl */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'thomas'},aj = nodes[2] ,ak = nodes[3] ,al = nodes[4] ,am = nodes[5] ,an = nodes[6] ,ao = nodes[7] ,ar = nodes[8] ,as = nodes[9] ,at = nodes[10] ,au = nodes[11] ,av = nodes[12] ,aw = nodes[13] ,ax = nodes[14] ,bd = nodes[15] ,bl = nodes[16]  ; nodes.push( ae ); links.push( {source: ae , target: bl },{source: ae , target: al },{source: ae , target: ax },{source: ae , target: ao },{source: ae , target: ak },{source: ae , target: am },{source: ae , target: as },{source: ae , target: bd },{source: ae , target: av },{source: ae , target: aw },{source: ae , target: ar },{source: ae , target: at },{source: ae , target: au },{source: ae , target: an },{source: ae , target: aj },{source: al , target: bl },{source: al , target: ax },{source: al , target: ao },{source: al , target: am },{source: al , target: as },{source: al , target: bd },{source: al , target: av },{source: al , target: aw },{source: al , target: ar },{source: al , target: at },{source: al , target: au },{source: al , target: an },{source: aa , target: ae },{source: aa , target: bl },{source: aa , target: al },{source: aa , target: ax },{source: aa , target: ab },{source: aa , target: ao },{source: aa , target: ak },{source: aa , target: am },{source: aa , target: as },{source: aa , target: bd },{source: aa , target: av },{source: aa , target: aw },{source: aa , target: ar },{source: aa , target: at },{source: aa , target: au },{source: aa , target: an },{source: aa , target: aj },{source: ax , target: bl },{source: ax , target: bd },{source: ab , target: ae },{source: ab , target: bl },{source: ab , target: al },{source: ab , target: ax },{source: ab , target: ao },{source: ab , target: ak },{source: ab , target: am },{source: ab , target: as },{source: ab , target: bd },{source: ab , target: av },{source: ab , target: aw },{source: ab , target: ar },{source: ab , target: at },{source: ab , target: au },{source: ab , target: an },{source: ab , target: aj },{source: ao , target: bl },{source: ao , target: ax },{source: ao , target: as },{source: ao , target: bd },{source: ao , target: av },{source: ao , target: aw },{source: ao , target: ar },{source: ao , target: at },{source: ao , target: au },{source: ak , target: bl },{source: ak , target: al },{source: ak , target: ax },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: as },{source: ak , target: bd },{source: ak , target: av },{source: ak , target: aw },{source: ak , target: ar },{source: ak , target: at },{source: ak , target: au },{source: ak , target: an },{source: am , target: bl },{source: am , target: ax },{source: am , target: ao },{source: am , target: as },{source: am , target: bd },{source: am , target: av },{source: am , target: aw },{source: am , target: ar },{source: am , target: at },{source: am , target: au },{source: am , target: an },{source: as , target: bl },{source: as , target: ax },{source: as , target: bd },{source: as , target: av },{source: as , target: aw },{source: as , target: at },{source: as , target: au },{source: bd , target: bl },{source: av , target: bl },{source: av , target: ax },{source: av , target: bd },{source: av , target: aw },{source: aw , target: bl },{source: aw , target: ax },{source: aw , target: bd },{source: ar , target: bl },{source: ar , target: ax },{source: ar , target: as },{source: ar , target: bd },{source: ar , target: av },{source: ar , target: aw },{source: ar , target: at },{source: ar , target: au },{source: at , target: bl },{source: at , target: ax },{source: at , target: bd },{source: at , target: av },{source: at , target: aw },{source: at , target: au },{source: au , target: bl },{source: au , target: ax },{source: au , target: bd },{source: au , target: av },{source: au , target: aw },{source: an , target: bl },{source: an , target: ax },{source: an , target: ao },{source: an , target: as },{source: an , target: bd },{source: an , target: av },{source: an , target: aw },{source: an , target: ar },{source: an , target: at },{source: an , target: au },{source: aj , target: bl },{source: aj , target: al },{source: aj , target: ax },{source: aj , target: ao },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: as },{source: aj , target: bd },{source: aj , target: av },{source: aj , target: aw },{source: aj , target: ar },{source: aj , target: at },{source: aj , target: au },{source: aj , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '34. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierunddreißigste Szene';
}, 340000);
