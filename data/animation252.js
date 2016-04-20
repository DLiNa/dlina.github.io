setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'doris'},ab = {id: 'ab', name:'menalkas'},ac = {id: 'ac', name:'nisus'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = {id: 'ad', name:'atalanta'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der andere Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = {id: 'ae', name:'corydon'} ; nodes.push( ae ); links.push( {source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ac },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der dritte Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = nodes[2],ae = nodes[4],af = {id: 'af', name:'damon'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der vierte Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ac = nodes[0],ae = nodes[1],af = nodes[2],ag = {id: 'ag', name:'amaryllis'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der fünfte Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = nodes[0],af = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der sechste Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ac = nodes[0],ad = {id: 'ad', name:'atalanta'},af = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: af },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der andre Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = {id: 'ab', name:'menalkas'},ac = nodes[0],af = nodes[2],ag = {id: 'ag', name:'amaryllis'} ; nodes.push( ab,ag ); links.push( {source: ab , target: ac },{source: ab , target: ag },{source: ab , target: af },{source: ac , target: ag },{source: ac , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der dritte Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ae = {id: 'ae', name:'corydon'},af = nodes[2] ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der vierte Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = {id: 'aa', name:'doris'},ac = {id: 'ac', name:'nisus'},ae = nodes[0],af = nodes[1] ; nodes.push( aa,ac ); links.push( {source: aa , target: af },{source: aa , target: ac },{source: aa , target: ae },{source: ac , target: af },{source: ac , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der fünfte Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ab = {id: 'ab', name:'menalkas'},ac = nodes[1],ad = {id: 'ad', name:'atalanta'},ae = nodes[2],af = nodes[3],ag = {id: 'ag', name:'amaryllis'} ; nodes.push( ab,ad,ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: ad , target: ae },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: af , target: ag },{source: ae , target: ag },{source: ae , target: af },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der sechste Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ad','ab','ag','ae','ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  af = nodes[5],ah = {id: 'ah', name:'myrtillus'} ; nodes.push( ah ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ab = {id: 'ab', name:'menalkas'},ad = {id: 'ad', name:'atalanta'},ag = {id: 'ag', name:'amaryllis'} ; nodes.push( ab,ad,ag ); links.push( {source: ab , target: ag },{source: ab , target: ad },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der dritte Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ab = nodes[0],af = {id: 'af', name:'damon'},ah = {id: 'ah', name:'myrtillus'} ; nodes.push( af,ah ); links.push( {source: ab , target: ah },{source: ab , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der vierte Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ab','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ah = nodes[2] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der fünfte Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aa = {id: 'aa', name:'doris'},ad = {id: 'ad', name:'atalanta'},ag = {id: 'ag', name:'amaryllis'} ; nodes.push( aa,ad,ag ); links.push( {source: ad , target: ag },{source: aa , target: ad },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der sechste Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aa = nodes[0],ac = {id: 'ac', name:'nisus'},ad = nodes[1],ae = {id: 'ae', name:'corydon'},ag = nodes[2] ; nodes.push( ac,ae ); links.push( {source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ag },{source: ad , target: ae },{source: ae , target: ag },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der siebente Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  aa = nodes[0],ab = {id: 'ab', name:'menalkas'},ac = nodes[1],ad = nodes[2],ag = nodes[4],ah = {id: 'ah', name:'myrtillus'} ; nodes.push( ab,ah ); links.push( {source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ah },{source: ad , target: ag },{source: ag , target: ah },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der achte Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ah','ac','ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ab = nodes[1],ad = nodes[3] ; /* nodes.push(); */ links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ab = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'corydon'} ; nodes.push( ae ); links.push( {source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der andere Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ab = nodes[0],ad = nodes[1],ah = {id: 'ah', name:'myrtillus'} ; nodes.push( ah ); links.push( {source: ad , target: ah },{source: ab , target: ad },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der dritte Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = {id: 'aa', name:'doris'},ab = nodes[0],ac = {id: 'ac', name:'nisus'},ad = nodes[1],ah = nodes[2] ; nodes.push( aa,ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ad },{source: ac , target: ah },{source: ac , target: ad },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ad },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der vierte Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],ac = nodes[2],ah = nodes[4] ; /* nodes.push(); */ links.push( {source: aa , target: ah },{source: aa , target: ac },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der fünfte Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = nodes[1],af = {id: 'af', name:'damon'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der sechste Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ae = {id: 'ae', name:'corydon'},af = nodes[1] ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der siebente Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ae = nodes[0],af = nodes[1],ag = {id: 'ag', name:'amaryllis'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der achte Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ad = {id: 'ad', name:'atalanta'},af = nodes[1] ; nodes.push( ad ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = {id: 'ac', name:'nisus'},ad = nodes[0],af = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ad },{source: ac , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der andere Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = {id: 'aa', name:'doris'},ac = nodes[0],af = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der dritte Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aa = nodes[0],ac = nodes[1],af = nodes[2],ah = {id: 'ah', name:'myrtillus'} ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: af },{source: aa , target: ac },{source: af , target: ah },{source: ac , target: ah },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der vierte Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ac = nodes[1],ad = {id: 'ad', name:'atalanta'},af = nodes[2],ah = nodes[3] ; nodes.push( ad ); links.push( {source: ad , target: af },{source: ad , target: ah },{source: af , target: ah },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der fünfte Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ac = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'corydon'},af = nodes[2],ag = {id: 'ag', name:'amaryllis'},ah = nodes[3] ; nodes.push( ae,ag ); links.push( {source: ad , target: ae },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: ag , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der sechste Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  aa = {id: 'aa', name:'doris'},ab = {id: 'ab', name:'menalkas'},ac = nodes[0],ad = nodes[1],ae = nodes[2],ag = nodes[4],ah = nodes[5] ; nodes.push( aa,ab ); links.push( {source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ac },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ac },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ag },{source: ae , target: ah },{source: ae , target: ag },{source: ag , target: ah },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der siebente Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ae','ag','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = nodes[0],ab = nodes[1],ad = nodes[3],ah = nodes[6],ai = {id: 'ai', name:'damötas'} ; nodes.push( ai ); links.push( {source: ad , target: ai },{source: ad , target: ah },{source: ah , target: ai },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: ah },{source: aa , target: ai },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der achte Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'nisus'},ad = nodes[2],af = {id: 'af', name:'damon'},ah = nodes[3] ; nodes.push( ac,af ); links.push( {source: ab , target: ah },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: af },{source: ad , target: ah },{source: ad , target: af },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: af },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: af },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Der neunte Auftritt.';
}, 175000);
