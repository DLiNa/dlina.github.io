setTimeout(function() { console.log('load1');nodes.sort(compare); /* ae */ var  ae = {id: 'ae', name:'orbil'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der erste Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'wilhelmina'},ae = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ae },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der zweyte Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der dritte Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'lisette'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der vierte Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'johann'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der fünfte Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ab ac ad */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'valer'} ; nodes.push( ad ); links.push( {source: ac , target: ad },{source: ab , target: ad },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der sechste Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der siebente Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'wilhelmina'},ab = {id: 'ab', name:'lisette'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( aa,ab ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der achte Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad','aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der neunte Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ab ae */ var  ab = nodes[0] ,ae = {id: 'ae', name:'orbil'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der zehnte Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ae af */ var  ab = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'der_magister'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: ab , target: ae },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der eilfte Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* aa ab ae af */ var  aa = {id: 'aa', name:'wilhelmina'},ab = nodes[0] ,ae = nodes[1] ,af = nodes[2]  ; nodes.push( aa ); links.push( {source: aa , target: af },{source: aa , target: ae },{source: aa , target: ab },{source: ae , target: af },{source: ab , target: af },{source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der zwölfte Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa','af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der dreyzelmte Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ae */ var  ab = {id: 'ab', name:'lisette'},ae = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der vierzehnte Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac ad ae */ var  ac = {id: 'ac', name:'johann'},ad = {id: 'ad', name:'valer'},ae = nodes[0]  ; nodes.push( ac,ad ); links.push( {source: ad , target: ae },{source: ac , target: ae },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der fünfzehnte Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ab ac ad */ var  ab = {id: 'ab', name:'lisette'},ac = nodes[0] ,ad = nodes[1]  ; nodes.push( ab ); links.push( {source: ab , target: ad },{source: ab , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der sechszehnte Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ac ad ae */ var  aa = {id: 'aa', name:'wilhelmina'},ac = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'orbil'} ; nodes.push( aa,ae ); links.push( {source: ad , target: ae },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der siebenzehnte Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ad ae af */ var  ac = nodes[0] ,ad = nodes[1] ,ae = nodes[2] ,af = {id: 'af', name:'der_magister'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Der achtzehnte Auftritt.';
}, 85000);
