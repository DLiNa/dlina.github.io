setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'assad'},ab = {id: 'ab', name:'hakam'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'irad'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[0],ad = {id: 'ad', name:'der_aufseher'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'assad'},ab = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'irad'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = {id: 'ae', name:'der_vezier'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = {id: 'aa', name:'assad'},ab = {id: 'ab', name:'hakam'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ab = nodes[1],af = {id: 'af', name:'soliman'},ag = {id: 'ag', name:'volk'},ah = {id: 'ah', name:'khalf'} ; nodes.push( af,ag,ah ); links.push( {source: af , target: ag },{source: af , target: ah },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ah },{source: ag , target: ah },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ab = nodes[1],af = nodes[2],ai = {id: 'ai', name:'der_kadi'},aj = {id: 'aj', name:'rustan'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: af , target: ai },{source: af , target: aj },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: aj },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'irad'},af = nodes[2],ah = {id: 'ah', name:'khalf'},aj = nodes[3] ; nodes.push( ac,ah ); links.push( {source: ah , target: aj },{source: af , target: ah },{source: af , target: aj },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: aj },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: aj },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ah','af','ab','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = nodes[0],ak = {id: 'ak', name:'eine_stimme'} ; nodes.push( ak ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  aa = nodes[0],al = {id: 'al', name:'fatime'} ; nodes.push( al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = nodes[0],ab = {id: 'ab', name:'hakam'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aa = nodes[0],ab = nodes[1],ai = {id: 'ai', name:'der_kadi'},am = {id: 'am', name:'selim'} ; nodes.push( ai,am ); links.push( {source: ai , target: am },{source: aa , target: ai },{source: aa , target: am },{source: aa , target: ab },{source: ab , target: ai },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai','aa','am','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  af = {id: 'af', name:'soliman'},ah = {id: 'ah', name:'khalf'} ; nodes.push( af,ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ah','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ae = {id: 'ae', name:'der_vezier'},an = {id: 'an', name:'der_kalif'} ; nodes.push( ae,an ); links.push( {source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = nodes[0],an = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = nodes[0],an = nodes[1],ao = {id: 'ao', name:'der_bote'} ; nodes.push( ao ); links.push( {source: an , target: ao },{source: ae , target: an },{source: ae , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aa = {id: 'aa', name:'assad'},ae = nodes[0],af = {id: 'af', name:'soliman'},ai = {id: 'ai', name:'der_kadi'},an = nodes[1],ap = {id: 'ap', name:'babeck'} ; nodes.push( aa,af,ai,ap ); links.push( {source: ae , target: ai },{source: ae , target: an },{source: ae , target: ap },{source: ae , target: af },{source: ai , target: an },{source: ai , target: ap },{source: an , target: ap },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: an },{source: aa , target: ap },{source: aa , target: af },{source: af , target: ai },{source: af , target: an },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ai','ap','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = nodes[0],ae = nodes[1],al = {id: 'al', name:'fatime'},an = nodes[2] ; nodes.push( al ); links.push( {source: al , target: an },{source: aa , target: al },{source: aa , target: an },{source: aa , target: ae },{source: ae , target: al },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ab = {id: 'ab', name:'hakam'},ac = {id: 'ac', name:'irad'},ae = nodes[1],af = {id: 'af', name:'soliman'},ai = {id: 'ai', name:'der_kadi'},al = nodes[2],am = {id: 'am', name:'selim'},an = nodes[3],aq = {id: 'aq', name:'omar'} ; nodes.push( ab,ac,af,ai,am,aq ); links.push( {source: an , target: aq },{source: aa , target: aq },{source: aa , target: an },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: am },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: al },{source: ab , target: aq },{source: ab , target: an },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: am },{source: ab , target: ae },{source: ab , target: ac },{source: ab , target: al },{source: af , target: aq },{source: af , target: an },{source: af , target: ai },{source: af , target: am },{source: af , target: al },{source: ai , target: aq },{source: ai , target: an },{source: ai , target: am },{source: ai , target: al },{source: am , target: aq },{source: am , target: an },{source: ae , target: aq },{source: ae , target: an },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: am },{source: ae , target: al },{source: ac , target: aq },{source: ac , target: an },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: am },{source: ac , target: ae },{source: ac , target: al },{source: al , target: aq },{source: al , target: an },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 110000);
