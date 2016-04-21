setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'isolde'},ab = {id: 'ab', name:'brangänes_stimme'},ac = {id: 'ac', name:'stimme_eines_jungen_seemannes'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'kurwenal'},ae = {id: 'ae', name:'tristan'} ; nodes.push( ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab af */ var  aa = nodes[0] ,ab = nodes[1] ,af = {id: 'af', name:'stimmen_des_schiffsvolkes'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: aa , target: ab },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ad */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'kurwenal'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = {id: 'ae', name:'tristan'},af = {id: 'af', name:'stimmen_des_schiffsvolkes'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ae , target: af },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: af },{source: ab , target: ad },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab ae */ var  aa = nodes[0] ,ab = nodes[1] ,ae = {id: 'ae', name:'tristan'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ab },{source: ab , target: ae },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ad ae ag ah */ var  aa = nodes[0] ,ad = {id: 'ad', name:'kurwenal'},ae = nodes[1] ,ag = {id: 'ag', name:'melot'},ah = {id: 'ah', name:'marke'} ; nodes.push( ad,ag,ah ); links.push( {source: ad , target: ae },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ah },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag','ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ad ae ai */ var  ad = nodes[0] ,ae = nodes[1] ,ai = {id: 'ai', name:'hirt'} ; nodes.push( ai ); links.push( {source: ad , target: ai },{source: ad , target: ae },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'isolde'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab ad ag ah ai aj */ var  aa = nodes[0] ,ab = {id: 'ab', name:'brangänes_stimme'},ad = {id: 'ad', name:'kurwenal'},ag = {id: 'ag', name:'melot'},ah = {id: 'ah', name:'marke'},ai = {id: 'ai', name:'hirt'},aj = {id: 'aj', name:'der_steuermann'} ; nodes.push( ab,ad,ag,ah,ai,aj ); links.push( {source: ai , target: aj },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ag },{source: ad , target: ah },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: aj },{source: ab , target: ag },{source: ab , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ah },{source: ah , target: ai },{source: ah , target: aj },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: aj },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 50000);
