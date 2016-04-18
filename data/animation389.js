setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'guldberg_der_ebenfalls_das_schwert_gegen_ihn_gezogen'},ab = {id: 'ab', name:'ranzau'},ab = {id: 'ab', name:'ranzau'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'kölner'},ad = {id: 'ad', name:'lorenz'} ; nodes.push( ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ae = {id: 'ae', name:'königin'},af = {id: 'af', name:'königen'},ag = {id: 'ag', name:'gräfin'},ag = {id: 'ag', name:'gräfin'} ; nodes.push( ae,af,ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ag },{source: af , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ab = {id: 'ab', name:'ranzau'},ab = {id: 'ab', name:'ranzau'},ac = {id: 'ac', name:'kölner'},ad = {id: 'ad', name:'lorenz'},ae = nodes[2],af = nodes[3],ag = nodes[4],ah = {id: 'ah', name:'struensee_als_deutscher_herr_gekleidet_von_rechts_hinten_eintretend'} ; nodes.push( ab,ac,ad,ah ); links.push( {source: af , target: ah },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ad },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','ag','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ab = nodes[1],af = nodes[2],af = nodes[2],af = nodes[2],ah = nodes[3] ; /* nodes.push(); */ links.push( {source: ab , target: ah },{source: ab , target: af },{source: ab , target: af },{source: ab , target: af },{source: af , target: ah },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: af },{source: aa , target: af },{source: af , target: ah },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'kölner'},af = nodes[2],ah = nodes[3] ; nodes.push( ac ); links.push( {source: ac , target: ah },{source: ac , target: af },{source: af , target: ah },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: af },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: af },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac','af','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = {id: 'ae', name:'königin'},ag = {id: 'ag', name:'gräfin'},ah = nodes[0] ; nodes.push( ae,ag ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah','ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = {id: 'aa', name:'guldberg_der_ebenfalls_das_schwert_gegen_ihn_gezogen'},ab = {id: 'ab', name:'ranzau'},ac = {id: 'ac', name:'kölner'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = nodes[0],af = {id: 'af', name:'königen'} ; nodes.push( af ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ac = {id: 'ac', name:'kölner'},ah = {id: 'ah', name:'struensee_als_deutscher_herr_gekleidet_von_rechts_hinten_eintretend'} ; nodes.push( ac,ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ag = {id: 'ag', name:'gräfin'},ah = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ae = {id: 'ae', name:'königin'},ag = nodes[0],ah = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ae = nodes[0],ag = {id: 'ag', name:'gräfin'},ah = nodes[1],ah = nodes[1] ; nodes.push( ag,ah ); links.push( {source: ag , target: ah },{source: ag , target: ah },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = {id: 'aa', name:'guldberg_der_ebenfalls_das_schwert_gegen_ihn_gezogen'},ab = {id: 'ab', name:'ranzau'},ac = {id: 'ac', name:'kölner'},ae = nodes[0],af = {id: 'af', name:'königen'},ag = nodes[1],ah = nodes[2] ; nodes.push( aa,ab,ac,af ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ae','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'lorenz'},af = {id: 'af', name:'königen'},ah = {id: 'ah', name:'struensee_als_deutscher_herr_gekleidet_von_rechts_hinten_eintretend'} ; nodes.push( ad,af,ah ); links.push( {source: af , target: ah },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ad },{source: ab , target: af },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ad , target: af },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],af = nodes[3],ag = {id: 'ag', name:'gräfin'},ah = nodes[4] ; nodes.push( ag ); links.push( {source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: ag , target: ah },{source: af , target: ah },{source: af , target: ag },{source: ab , target: ah },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ac },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  aa = nodes[0],aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'lorenz'},ae = {id: 'ae', name:'königin'},af = nodes[3],ag = nodes[4],ah = nodes[5] ; nodes.push( aa,ad,ae ); links.push( {source: af , target: ag },{source: af , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ac },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ac },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af','ae','ag','ad','ah','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ab = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ab = nodes[0],ac = {id: 'ac', name:'kölner'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = {id: 'aa', name:'guldberg_der_ebenfalls_das_schwert_gegen_ihn_gezogen'},ab = nodes[0],ac = nodes[1] ; nodes.push( aa ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'lorenz'} ; nodes.push( ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ad = {id: 'ad', name:'lorenz'},ag = {id: 'ag', name:'gräfin'} ; nodes.push( ad,ag ); links.push( {source: aa , target: ag },{source: aa , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ag = nodes[0],ah = {id: 'ah', name:'struensee_als_deutscher_herr_gekleidet_von_rechts_hinten_eintretend'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ae = {id: 'ae', name:'königin'},ag = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = {id: 'aa', name:'guldberg_der_ebenfalls_das_schwert_gegen_ihn_gezogen'},ae = nodes[0],af = {id: 'af', name:'königen'},ag = nodes[1],ah = {id: 'ah', name:'struensee_als_deutscher_herr_gekleidet_von_rechts_hinten_eintretend'} ; nodes.push( aa,af,ah ); links.push( {source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: ag , target: ah },{source: af , target: ah },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ae','ah','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = nodes[0],ac = {id: 'ac', name:'kölner'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = nodes[0],ac = nodes[1],ag = {id: 'ag', name:'gräfin'},ag = {id: 'ag', name:'gräfin'} ; nodes.push( ag ); links.push( {source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ag },{source: ac , target: ag },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ag','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = {id: 'ab', name:'ranzau'},ae = {id: 'ae', name:'königin'},ah = {id: 'ah', name:'struensee_als_deutscher_herr_gekleidet_von_rechts_hinten_eintretend'},ah = {id: 'ah', name:'struensee_als_deutscher_herr_gekleidet_von_rechts_hinten_eintretend'} ; nodes.push( ab,ae,ah ); links.push( {source: ae , target: ah },{source: ae , target: ah },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ae = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = {id: 'aa', name:'guldberg_der_ebenfalls_das_schwert_gegen_ihn_gezogen'},af = {id: 'af', name:'königen'},ag = {id: 'ag', name:'gräfin'},ah = nodes[0] ; nodes.push( aa,af,ag ); links.push( {source: ag , target: ah },{source: af , target: ah },{source: af , target: ag },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = nodes[0],ab = {id: 'ab', name:'ranzau'},ag = nodes[1],ah = nodes[2] ; nodes.push( ab ); links.push( {source: aa , target: ah },{source: aa , target: ag },{source: aa , target: ab },{source: ag , target: ah },{source: ab , target: ah },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  aa = nodes[0],ab = nodes[1],ad = {id: 'ad', name:'lorenz'},ag = nodes[2],ah = nodes[3] ; nodes.push( ad ); links.push( {source: ad , target: ah },{source: ad , target: ag },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ag },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'kölner'},ag = nodes[2] ; nodes.push( ac ); links.push( {source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ag },{source: ab , target: ac },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = nodes[0],ac = nodes[1],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ac },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = nodes[0],ab = {id: 'ab', name:'ranzau'},ae = {id: 'ae', name:'königin'} ; nodes.push( ab,ae ); links.push( {source: ab , target: ae },{source: aa , target: ae },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = nodes[0],aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'kölner'},ae = nodes[2],ah = {id: 'ah', name:'struensee_als_deutscher_herr_gekleidet_von_rechts_hinten_eintretend'} ; nodes.push( aa,ac,ah ); links.push( {source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: ac , target: ah },{source: ac , target: ae },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ae },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ac','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aa = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ah = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  af = {id: 'af', name:'königen'},ag = {id: 'ag', name:'gräfin'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '15. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte und letzte Szene.';
}, 215000);
