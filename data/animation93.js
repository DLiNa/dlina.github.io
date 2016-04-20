setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'hochmann'},ab = {id: 'ab', name:'christoph'},ac = {id: 'ac', name:'torf'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'robert'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'schlenkheim'} ; nodes.push( ae ); links.push( {source: ab , target: ad },{source: ab , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[0],ac = {id: 'ac', name:'torf'},ad = nodes[1],ae = nodes[2],af = {id: 'af', name:'dr'} ; nodes.push( ac,af ); links.push( {source: ae , target: af },{source: ad , target: af },{source: ad , target: ae },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'hochmann'},ab = nodes[0],ac = nodes[1],ad = nodes[2],ag = {id: 'ag', name:'hefer'} ; nodes.push( aa,ag ); links.push( {source: ad , target: ag },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ag },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = {id: 'ae', name:'schlenkheim'},af = {id: 'af', name:'dr'},ag = nodes[4] ; nodes.push( ae,af ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = nodes[4],af = nodes[5],af = nodes[5],ag = nodes[6],ah = {id: 'ah', name:'henriette'},ai = {id: 'ai', name:'johann'} ; nodes.push( ah,ai ); links.push( {source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ai },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ai },{source: ah , target: ai },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: ag },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ai },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad','ah','ae','af','aa','ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = nodes[0],ag = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = {id: 'aa', name:'hochmann'},ab = nodes[0],ad = {id: 'ad', name:'robert'},ag = nodes[1] ; nodes.push( aa,ad ); links.push( {source: ad , target: ag },{source: aa , target: ad },{source: aa , target: ag },{source: aa , target: ab },{source: ab , target: ad },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ab = nodes[1],ad = nodes[2],ag = nodes[3],aj = {id: 'aj', name:'grund'},ak = {id: 'ak', name:'hager'},ak = {id: 'ak', name:'hager'},al = {id: 'al', name:'rohr'} ; nodes.push( aj,ak,al ); links.push( {source: aj , target: ak },{source: aj , target: ak },{source: aj , target: al },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ag },{source: ak , target: al },{source: ak , target: al },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ak },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: ag },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ak },{source: aa , target: ak },{source: aa , target: ab },{source: aa , target: al },{source: aa , target: ag },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ak },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aj','ak','al','aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ab = nodes[0],ad = nodes[1],am = {id: 'am', name:'diener'} ; nodes.push( am ); links.push( {source: ad , target: am },{source: ab , target: am },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'am','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ad = nodes[0],an = {id: 'an', name:'tossmann'} ; nodes.push( an ); links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'christoph'},ad = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = nodes[0],ad = nodes[1],ao = {id: 'ao', name:'martin'} ; nodes.push( ao ); links.push( {source: ab , target: ao },{source: ab , target: ad },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = nodes[0],ad = nodes[1],ap = {id: 'ap', name:'frau_von_brigge'},aq = {id: 'aq', name:'karoline'} ; nodes.push( ap,aq ); links.push( {source: ab , target: ap },{source: ab , target: ad },{source: ab , target: aq },{source: ap , target: aq },{source: ad , target: ap },{source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = nodes[0],ad = nodes[1],ar = {id: 'ar', name:'elegius'},ar = {id: 'ar', name:'elegius'} ; nodes.push( ar ); links.push( {source: ab , target: ad },{source: ab , target: ar },{source: ab , target: ar },{source: ad , target: ar },{source: ad , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ab = nodes[0],ad = nodes[1],ag = {id: 'ag', name:'hefer'} ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ab , target: ag },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ab = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = {id: 'ae', name:'schlenkheim'},af = {id: 'af', name:'dr'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ad = {id: 'ad', name:'robert'},ae = nodes[0],af = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = nodes[0],ah = {id: 'ah', name:'henriette'} ; nodes.push( ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ad = nodes[0],an = {id: 'an', name:'tossmann'} ; nodes.push( an ); links.push( {source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ad = nodes[0],ag = {id: 'ag', name:'hefer'},ag = {id: 'ag', name:'hefer'} ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = {id: 'ab', name:'christoph'},ad = nodes[0],ag = nodes[1] ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab','ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ap = {id: 'ap', name:'frau_von_brigge'},aq = {id: 'aq', name:'karoline'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ab = {id: 'ab', name:'christoph'},ad = {id: 'ad', name:'robert'},ap = nodes[0],aq = nodes[1],as = {id: 'as', name:'schnapper'} ; nodes.push( ab,ad,as ); links.push( {source: ap , target: as },{source: ap , target: aq },{source: aq , target: as },{source: ad , target: as },{source: ad , target: ap },{source: ad , target: aq },{source: ab , target: as },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = nodes[0],ad = nodes[1],ap = nodes[2],aq = nodes[3],as = nodes[4],at = {id: 'at', name:'stürmer'},au = {id: 'au', name:'die_offiziere'},av = {id: 'av', name:'grünmann'} ; nodes.push( at,au,av ); links.push( {source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: as },{source: at , target: au },{source: at , target: av },{source: au , target: av },{source: ap , target: aq },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: as },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: ab , target: aq },{source: ab , target: at },{source: ab , target: au },{source: ab , target: ap },{source: ab , target: av },{source: ab , target: as },{source: ab , target: ad },{source: ad , target: aq },{source: ad , target: at },{source: ad , target: au },{source: ad , target: ap },{source: ad , target: av },{source: ad , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'aq','at','au','ap','av','as','ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aj = {id: 'aj', name:'grund'},aw = {id: 'aw', name:'haller'} ; nodes.push( aj,aw ); links.push( {source: aj , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aj = nodes[0],ak = {id: 'ak', name:'hager'},aw = nodes[1] ; nodes.push( ak ); links.push( {source: aj , target: aw },{source: aj , target: ak },{source: ak , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'aw','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ab = {id: 'ab', name:'christoph'},aj = nodes[0],ao = {id: 'ao', name:'martin'},ax = {id: 'ax', name:'mehrere_bauern'},ax = {id: 'ax', name:'mehrere_bauern'},ay = {id: 'ay', name:'der_richter'} ; nodes.push( ab,ao,ax,ay ); links.push( {source: aj , target: ao },{source: aj , target: ax },{source: aj , target: ax },{source: aj , target: ay },{source: ao , target: ax },{source: ao , target: ax },{source: ao , target: ay },{source: ab , target: aj },{source: ab , target: ao },{source: ab , target: ax },{source: ab , target: ax },{source: ab , target: ay },{source: ax , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = {id: 'aa', name:'hochmann'},ac = {id: 'ac', name:'torf'},ad = {id: 'ad', name:'robert'},aj = nodes[0],ao = nodes[1],ar = {id: 'ar', name:'elegius'},ax = nodes[2],ax = nodes[2],ay = nodes[3] ; nodes.push( aa,ac,ad,ar ); links.push( {source: ax , target: ay },{source: aj , target: ax },{source: aj , target: ao },{source: aj , target: ar },{source: aj , target: ax },{source: aj , target: ay },{source: ao , target: ax },{source: ao , target: ar },{source: ao , target: ax },{source: ao , target: ay },{source: ar , target: ax },{source: ar , target: ax },{source: ar , target: ay },{source: ax , target: ay },{source: ac , target: ax },{source: ac , target: aj },{source: ac , target: ao },{source: ac , target: ar },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: ad },{source: aa , target: ax },{source: aa , target: aj },{source: aa , target: ao },{source: aa , target: ar },{source: aa , target: ax },{source: aa , target: ay },{source: aa , target: ac },{source: aa , target: ad },{source: ad , target: ax },{source: ad , target: aj },{source: ad , target: ao },{source: ad , target: ar },{source: ad , target: ax },{source: ad , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ax','aj','ao','ar','ay','ac','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = {id: 'ab', name:'christoph'},az = {id: 'az', name:'jacques'},ba = {id: 'ba', name:'leopold'},bb = {id: 'bb', name:'matthias'},bc = {id: 'bc', name:'charles'} ; nodes.push( ab,az,ba,bb,bc ); links.push( {source: ab , target: az },{source: ab , target: ba },{source: ab , target: bb },{source: ab , target: bc },{source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'az','ba','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ab = nodes[0],ag = {id: 'ag', name:'hefer'},bb = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: bb },{source: ab , target: ag },{source: ab , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ag','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ab = nodes[0],ad = {id: 'ad', name:'robert'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ad = nodes[0],ag = {id: 'ag', name:'hefer'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ab = {id: 'ab', name:'christoph'},ad = nodes[0],an = {id: 'an', name:'tossmann'} ; nodes.push( ab,an ); links.push( {source: ad , target: an },{source: ab , target: ad },{source: ab , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ab = nodes[0],ad = nodes[1],ag = {id: 'ag', name:'hefer'},an = nodes[2],bd = {id: 'bd', name:'glanzberg'},be = {id: 'be', name:'madame_flor'} ; nodes.push( ag,bd,be ); links.push( {source: ad , target: bd },{source: ad , target: an },{source: ad , target: be },{source: ad , target: ag },{source: bd , target: be },{source: an , target: bd },{source: an , target: be },{source: ab , target: ad },{source: ab , target: bd },{source: ab , target: an },{source: ab , target: be },{source: ab , target: ag },{source: ag , target: bd },{source: ag , target: an },{source: ag , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ad','bd','an','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ab = nodes[0],ag = nodes[1] ; /* nodes.push(); */ links.push( {source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ad = {id: 'ad', name:'robert'},ag = nodes[0],an = {id: 'an', name:'tossmann'} ; nodes.push( ad,an ); links.push( {source: ad , target: an },{source: ad , target: ag },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'an','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ad = nodes[0],ah = {id: 'ah', name:'henriette'} ; nodes.push( ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
}, 195000);
