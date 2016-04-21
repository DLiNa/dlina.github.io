setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'läuffer'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'major'},ac = {id: 'ac', name:'geheimer_rat'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ad ae at */ var  aa = {id: 'aa', name:'läuffer'},ad = {id: 'ad', name:'majorin'},ae = {id: 'ae', name:'bedienter'},at = {id: 'at', name:'graf'} ; nodes.push( aa,ad,ae,at ); links.push( {source: ad , target: ae },{source: ad , target: at },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: at },{source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ae','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'major'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'fritz'},ag = {id: 'ag', name:'gustchen'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac af ag */ var  ac = {id: 'ac', name:'geheimer_rat'},af = nodes[0] ,ag = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: af },{source: ac , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ah */ var  ac = nodes[0] ,ah = {id: 'ah', name:'pastor'} ; nodes.push( ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'läuffer'},ag = {id: 'ag', name:'gustchen'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* af ai aj ak */ var  af = {id: 'af', name:'fritz'},ai = {id: 'ai', name:'pätus'},aj = {id: 'aj', name:'frau_blitzer'},ak = {id: 'ak', name:'bollwerk'} ; nodes.push( af,ai,aj,ak ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai','af','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* al am an */ var  al = {id: 'al', name:'jungfer_knicks'},am = {id: 'am', name:'frau_hamster'},an = {id: 'an', name:'jungfer_hamster'} ; nodes.push( al,am,an ); links.push( {source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ag */ var  aa = {id: 'aa', name:'läuffer'},ag = {id: 'ag', name:'gustchen'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ad at */ var  ab = {id: 'ab', name:'major'},ad = {id: 'ad', name:'majorin'},at = {id: 'at', name:'graf'} ; nodes.push( ab,ad,at ); links.push( {source: ad , target: at },{source: ab , target: at },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'at','ad','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af ai ak ao ap */ var  af = {id: 'af', name:'fritz'},ai = {id: 'ai', name:'pätus'},ak = {id: 'ak', name:'bollwerk'},ao = {id: 'ao', name:'hofmeister'},ap = {id: 'ap', name:'seiffenblase'} ; nodes.push( af,ai,ak,ao,ap ); links.push( {source: ak , target: ao },{source: ak , target: ap },{source: ak , target: ap },{source: ao , target: ap },{source: ao , target: ap },{source: af , target: ak },{source: af , target: ao },{source: af , target: ap },{source: af , target: ai },{source: af , target: ap },{source: ai , target: ak },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak','ao','ap','af','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ac ad */ var  ab = {id: 'ab', name:'major'},ac = {id: 'ac', name:'geheimer_rat'},ad = {id: 'ad', name:'majorin'} ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa aq at */ var  aa = {id: 'aa', name:'läuffer'},aq = {id: 'aq', name:'wenzeslaus'},at = {id: 'at', name:'graf'} ; nodes.push( aa,aq,at ); links.push( {source: aq , target: at },{source: aa , target: aq },{source: aa , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aq','aa','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac ao ap */ var  ac = {id: 'ac', name:'geheimer_rat'},ao = {id: 'ao', name:'hofmeister'},ap = {id: 'ap', name:'seiffenblase'} ; nodes.push( ac,ao,ap ); links.push( {source: ao , target: ap },{source: ac , target: ao },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ao','ac','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa aq */ var  aa = {id: 'aa', name:'läuffer'},aq = {id: 'aq', name:'wenzeslaus'} ; nodes.push( aa,aq ); links.push( {source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aq','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ac */ var  ab = {id: 'ab', name:'major'},ac = {id: 'ac', name:'geheimer_rat'} ; nodes.push( ab,ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ag ar */ var  ag = {id: 'ag', name:'gustchen'},ar = {id: 'ar', name:'marthe'} ; nodes.push( ag,ar ); links.push( {source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ac aq as */ var  aa = {id: 'aa', name:'läuffer'},ab = {id: 'ab', name:'major'},ac = {id: 'ac', name:'geheimer_rat'},aq = {id: 'aq', name:'wenzeslaus'},as = {id: 'as', name:'schöpsen'} ; nodes.push( aa,ab,ac,aq,as ); links.push( {source: aq , target: as },{source: ab , target: aq },{source: ab , target: ac },{source: ab , target: as },{source: ac , target: aq },{source: ac , target: as },{source: aa , target: aq },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aq','aa','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ab ac ag at */ var  ab = nodes[0] ,ac = nodes[1] ,ag = {id: 'ag', name:'gustchen'},at = {id: 'at', name:'graf'} ; nodes.push( ag,at ); links.push( {source: ag , target: at },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: at },{source: ac , target: ag },{source: ac , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab ac ag */ var  ab = nodes[0] ,ac = nodes[1] ,ag = nodes[2]  ; /* nodes.push(); */ links.push( {source: ab , target: ag },{source: ab , target: ac },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ab','ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* af ai au */ var  af = {id: 'af', name:'fritz'},ai = {id: 'ai', name:'pätus'},au = {id: 'au', name:'rehaar'} ; nodes.push( af,ai,au ); links.push( {source: af , target: ai },{source: af , target: au },{source: ai , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'af','ai','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ar */ var  aa = {id: 'aa', name:'läuffer'},ar = {id: 'ar', name:'marthe'} ; nodes.push( aa,ar ); links.push( {source: aa , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ar','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* af ai au */ var  af = {id: 'af', name:'fritz'},ai = {id: 'ai', name:'pätus'},au = {id: 'au', name:'rehaar'} ; nodes.push( af,ai,au ); links.push( {source: af , target: ai },{source: af , target: au },{source: ai , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'af','ai','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* aa aq */ var  aa = {id: 'aa', name:'läuffer'},aq = {id: 'aq', name:'wenzeslaus'} ; nodes.push( aa,aq ); links.push( {source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aq','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* af au */ var  af = {id: 'af', name:'fritz'},au = {id: 'au', name:'rehaar'} ; nodes.push( af,au ); links.push( {source: af , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'au','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ab ac ag */ var  ab = {id: 'ab', name:'major'},ac = {id: 'ac', name:'geheimer_rat'},ag = {id: 'ag', name:'gustchen'} ; nodes.push( ab,ac,ag ); links.push( {source: ac , target: ag },{source: ab , target: ac },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ac','ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* af ai */ var  af = {id: 'af', name:'fritz'},ai = {id: 'ai', name:'pätus'} ; nodes.push( af,ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab ac ag av */ var  ab = {id: 'ab', name:'major'},ac = {id: 'ac', name:'geheimer_rat'},ag = {id: 'ag', name:'gustchen'},av = {id: 'av', name:'jungfer_rehaar'} ; nodes.push( ab,ac,ag,av ); links.push( {source: ac , target: ag },{source: ac , target: av },{source: ag , target: av },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ac','ag','av','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* af ai */ var  af = {id: 'af', name:'fritz'},ai = {id: 'ai', name:'pätus'} ; nodes.push( af,ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa aq */ var  aa = {id: 'aa', name:'läuffer'},aq = {id: 'aq', name:'wenzeslaus'} ; nodes.push( aa,aq ); links.push( {source: aa , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa aq aw */ var  aa = nodes[0] ,aq = nodes[1] ,aw = {id: 'aw', name:'lise'} ; nodes.push( aw ); links.push( {source: aa , target: aw },{source: aa , target: aq },{source: aq , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa','aw','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ac af ai */ var  ac = {id: 'ac', name:'geheimer_rat'},af = {id: 'af', name:'fritz'},ai = {id: 'ai', name:'pätus'} ; nodes.push( ac,af,ai ); links.push( {source: af , target: ai },{source: ac , target: af },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfte Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ab ac af ai ax */ var  ab = {id: 'ab', name:'major'},ac = nodes[0] ,af = nodes[1] ,ai = nodes[2] ,ax = {id: 'ax', name:'der_alte_pätus'} ; nodes.push( ab,ax ); links.push( {source: ab , target: ax },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ai },{source: ac , target: ax },{source: ac , target: af },{source: ac , target: ai },{source: af , target: ax },{source: af , target: ai },{source: ai , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Szene';
}, 170000);
