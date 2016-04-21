setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'der_halbwüchsige_junge'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'tiefsee'},ac = {id: 'ac', name:'der_junge_pan'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'astarte'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae af ag ah ai aj ak al am an ao ap */ var  ad = nodes[0] ,ae = {id: 'ae', name:'lunica'},af = {id: 'af', name:'schwänchen'},ag = {id: 'ag', name:'helie'},ah = {id: 'ah', name:'kitz'},ai = {id: 'ai', name:'lacerta'},aj = {id: 'aj', name:'lucinde'},ak = {id: 'ak', name:'muse'},al = {id: 'al', name:'mücke'},am = {id: 'am', name:'elfi'},an = {id: 'an', name:'schwalbe'},ao = {id: 'ao', name:'anjelka'},ap = {id: 'ap', name:'liddi'} ; nodes.push( ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ao , target: ap },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','af','ag','ah','ai','aj','ak','al','am','an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ad aq ar */ var  ab = {id: 'ab', name:'tiefsee'},ad = nodes[0] ,aq = {id: 'aq', name:'attendorn'},ar = {id: 'ar', name:'der_küchenchef'} ; nodes.push( ab,aq,ar ); links.push( {source: aq , target: ar },{source: ad , target: aq },{source: ad , target: aq },{source: ad , target: ar },{source: aq , target: ar },{source: ab , target: aq },{source: ab , target: ad },{source: ab , target: aq },{source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aq','ad','ab','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* as */ var  as = {id: 'as', name:'josé'} ; nodes.push( as ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* as at au av */ var  as = nodes[0] ,at = {id: 'at', name:'die_stimme_manders'},au = {id: 'au', name:'henry'},av = {id: 'av', name:'die_stimme_des_jungen_mander'} ; nodes.push( at,au,av ); links.push( {source: at , target: au },{source: at , target: av },{source: at , target: av },{source: as , target: at },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: av },{source: as , target: at },{source: at , target: au },{source: at , target: av },{source: at , target: av },{source: au , target: av },{source: au , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'at','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* as */ var  as = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* as at av aw */ var  as = nodes[0] ,at = {id: 'at', name:'die_stimme_manders'},av = {id: 'av', name:'die_stimme_des_jungen_mander'},aw = {id: 'aw', name:'lisiska'} ; nodes.push( at,av,aw ); links.push( {source: av , target: aw },{source: at , target: av },{source: at , target: aw },{source: as , target: av },{source: as , target: at },{source: as , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'av','at','as','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ad */ var  ab = {id: 'ab', name:'tiefsee'},ad = {id: 'ad', name:'astarte'} ; nodes.push( ab,ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'lunica'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae am */ var  ae = nodes[0] ,am = {id: 'am', name:'elfi'} ; nodes.push( am ); links.push( {source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae am ap */ var  ae = nodes[0] ,am = nodes[1] ,ap = {id: 'ap', name:'liddi'} ; nodes.push( ap ); links.push( {source: am , target: ap },{source: ae , target: ap },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ae af am ap */ var  ae = nodes[0] ,af = {id: 'af', name:'schwänchen'},am = nodes[1] ,ap = nodes[2]  ; nodes.push( af ); links.push( {source: ae , target: af },{source: ae , target: ap },{source: ae , target: am },{source: af , target: ap },{source: af , target: am },{source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae','af','ap','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'lacerta'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ae af ap ax ay az */ var  ae = {id: 'ae', name:'lunica'},af = {id: 'af', name:'schwänchen'},ap = {id: 'ap', name:'liddi'},ax = {id: 'ax', name:'windfellner'},ay = {id: 'ay', name:'einer_der_musiker'},az = {id: 'az', name:'die_tänzerinnen'} ; nodes.push( ae,af,ap,ax,ay,az ); links.push( {source: ax , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ay },{source: af , target: ax },{source: af , target: az },{source: af , target: ax },{source: af , target: ay },{source: af , target: ap },{source: ay , target: az },{source: ae , target: ax },{source: ae , target: az },{source: ae , target: ax },{source: ae , target: af },{source: ae , target: ay },{source: ae , target: ap },{source: ap , target: ax },{source: ap , target: az },{source: ap , target: ax },{source: ap , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'az','af','ay','ae','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aq ax */ var  aq = {id: 'aq', name:'attendorn'},ax = nodes[0]  ; nodes.push( aq ); links.push( {source: aq , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* at ax az ba */ var  at = {id: 'at', name:'die_stimme_manders'},ax = nodes[0] ,az = {id: 'az', name:'die_tänzerinnen'},ba = {id: 'ba', name:'ottilie_kopriva'} ; nodes.push( at,az,ba ); links.push( {source: at , target: az },{source: at , target: ba },{source: at , target: ax },{source: az , target: ba },{source: ax , target: az },{source: ax , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'at','az','ba','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aq av */ var  aq = {id: 'aq', name:'attendorn'},av = {id: 'av', name:'die_stimme_des_jungen_mander'} ; nodes.push( aq,av ); links.push( {source: aq , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'av','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* at ax ba */ var  at = {id: 'at', name:'die_stimme_manders'},ax = {id: 'ax', name:'windfellner'},ba = {id: 'ba', name:'ottilie_kopriva'} ; nodes.push( at,ax,ba ); links.push( {source: at , target: ax },{source: at , target: ba },{source: ax , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* at ba */ var  at = nodes[0] ,ba = nodes[1]  ; /* nodes.push(); */ links.push( {source: at , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ad at ba */ var  ad = {id: 'ad', name:'astarte'},at = nodes[0] ,ba = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: at },{source: ad , target: ba },{source: at , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* at ba */ var  at = nodes[0] ,ba = nodes[1]  ; /* nodes.push(); */ links.push( {source: at , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ba','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab ax */ var  ab = {id: 'ab', name:'tiefsee'},ax = {id: 'ax', name:'windfellner'} ; nodes.push( ab,ax ); links.push( {source: ab , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ae av */ var  ae = {id: 'ae', name:'lunica'},av = {id: 'av', name:'die_stimme_des_jungen_mander'} ; nodes.push( ae,av ); links.push( {source: ae , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'av','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'der_halbwüchsige_junge'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ad at */ var  ad = {id: 'ad', name:'astarte'},at = {id: 'at', name:'die_stimme_manders'} ; nodes.push( ad,at ); links.push( {source: ad , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad at */ var  ad = nodes[0] ,at = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'at','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* az */ var  az = {id: 'az', name:'die_tänzerinnen'} ; nodes.push( az ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aw bb */ var  aw = {id: 'aw', name:'lisiska'},bb = {id: 'bb', name:'mater_scholastika'} ; nodes.push( aw,bb ); links.push( {source: aw , target: bb },{source: aw , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bb','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'der_halbwüchsige_junge'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* at ba */ var  at = {id: 'at', name:'die_stimme_manders'},ba = {id: 'ba', name:'ottilie_kopriva'} ; nodes.push( at,ba ); links.push( {source: at , target: ba },{source: at , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ba','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ab ax bc */ var  ab = {id: 'ab', name:'tiefsee'},ax = {id: 'ax', name:'windfellner'},bc = {id: 'bc', name:'der_herr_juwelier'} ; nodes.push( ab,ax,bc ); links.push( {source: ax , target: bc },{source: ab , target: ax },{source: ab , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ax','bc','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* bb */ var  bb = {id: 'bb', name:'mater_scholastika'} ; nodes.push( bb ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ai bb */ var  ai = {id: 'ai', name:'lacerta'},bb = nodes[0]  ; nodes.push( ai ); links.push( {source: ai , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'bb','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'tiefsee'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ab bd */ var  ab = nodes[0] ,bd = {id: 'bd', name:'einer_der_diener'} ; nodes.push( bd ); links.push( {source: ab , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnte Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'bd','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* bb */ var  bb = {id: 'bb', name:'mater_scholastika'} ; nodes.push( bb ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnte Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ba bb */ var  ba = {id: 'ba', name:'ottilie_kopriva'},bb = nodes[0]  ; nodes.push( ba ); links.push( {source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnte Szene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'bb','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* at be bf */ var  at = {id: 'at', name:'die_stimme_manders'},be = {id: 'be', name:'die_mädchen'},bf = {id: 'bf', name:'alle_herren'} ; nodes.push( at,be,bf ); links.push( {source: at , target: be },{source: at , target: bf },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigste Szene';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'at','be','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* az */ var  az = {id: 'az', name:'die_tänzerinnen'} ; nodes.push( az ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigste Szene';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'az' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* au */ var  au = {id: 'au', name:'henry'} ; nodes.push( au ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* as au */ var  as = {id: 'as', name:'josé'},au = nodes[0]  ; nodes.push( as ); links.push( {source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* as bc */ var  as = nodes[0] ,bc = {id: 'bc', name:'der_herr_juwelier'} ; nodes.push( bc ); links.push( {source: as , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* as au */ var  as = nodes[0] ,au = {id: 'au', name:'henry'} ; nodes.push( au ); links.push( {source: as , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ae af ag ai aj ak al am ap as */ var  ae = {id: 'ae', name:'lunica'},af = {id: 'af', name:'schwänchen'},ag = {id: 'ag', name:'helie'},ai = {id: 'ai', name:'lacerta'},aj = {id: 'aj', name:'lucinde'},ak = {id: 'ak', name:'muse'},al = {id: 'al', name:'mücke'},am = {id: 'am', name:'elfi'},ap = {id: 'ap', name:'liddi'},as = nodes[0]  ; nodes.push( ae,af,ag,ai,aj,ak,al,am,ap ); links.push( {source: af , target: ai },{source: af , target: am },{source: af , target: al },{source: af , target: ag },{source: af , target: aj },{source: af , target: ap },{source: af , target: ak },{source: af , target: as },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: am },{source: ae , target: al },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: ap },{source: ae , target: ak },{source: ae , target: as },{source: ai , target: am },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ap },{source: ai , target: ak },{source: ai , target: as },{source: am , target: ap },{source: am , target: as },{source: al , target: am },{source: al , target: ap },{source: al , target: as },{source: ag , target: ai },{source: ag , target: am },{source: ag , target: al },{source: ag , target: aj },{source: ag , target: ap },{source: ag , target: ak },{source: ag , target: as },{source: aj , target: am },{source: aj , target: al },{source: aj , target: ap },{source: aj , target: ak },{source: aj , target: as },{source: ap , target: as },{source: ak , target: am },{source: ak , target: al },{source: ak , target: ap },{source: ak , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'af','ae','ai','am','al','ag','aj','ap','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* as at */ var  as = nodes[0] ,at = {id: 'at', name:'die_stimme_manders'} ; nodes.push( at ); links.push( {source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* at bc */ var  at = nodes[0] ,bc = {id: 'bc', name:'der_herr_juwelier'} ; nodes.push( bc ); links.push( {source: at , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* bc */ var  bc = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ae af ag ai ak al am ao */ var  ae = {id: 'ae', name:'lunica'},af = {id: 'af', name:'schwänchen'},ag = {id: 'ag', name:'helie'},ai = {id: 'ai', name:'lacerta'},ak = {id: 'ak', name:'muse'},al = {id: 'al', name:'mücke'},am = {id: 'am', name:'elfi'},ao = {id: 'ao', name:'anjelka'} ; nodes.push( ae,af,ag,ai,ak,al,am,ao ); links.push( {source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: am },{source: ae , target: al },{source: ae , target: ao },{source: ae , target: ak },{source: af , target: ai },{source: af , target: ag },{source: af , target: am },{source: af , target: al },{source: af , target: ao },{source: af , target: ak },{source: ai , target: am },{source: ai , target: al },{source: ai , target: ao },{source: ai , target: ak },{source: ag , target: ai },{source: ag , target: am },{source: ag , target: al },{source: ag , target: ao },{source: ag , target: ak },{source: am , target: ao },{source: al , target: am },{source: al , target: ao },{source: ak , target: am },{source: ak , target: al },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ae','af','ai','ag','am','al','ao','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* as az bc bg */ var  as = {id: 'as', name:'josé'},az = {id: 'az', name:'die_tänzerinnen'},bc = {id: 'bc', name:'der_herr_juwelier'},bg = {id: 'bg', name:'andere'} ; nodes.push( as,az,bc,bg ); links.push( {source: as , target: bc },{source: as , target: az },{source: as , target: bg },{source: bc , target: bg },{source: az , target: bc },{source: az , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 250000);
