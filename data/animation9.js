setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'chor'},ab = {id: 'ab', name:'tobis'},ac = {id: 'ac', name:'jeremis'},ad = {id: 'ad', name:'jobst'},ae = {id: 'ae', name:'greif'},af = {id: 'af', name:'michel'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ac = nodes[1],ag = {id: 'ag', name:'der_lieutenant'},ah = {id: 'ah', name:'der_obriste'},ai = {id: 'ai', name:'die_bauern'} ; nodes.push( ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ab , target: ag },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ab','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ag = nodes[0],ah = nodes[1] ; /* nodes.push(); */ links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ag = nodes[0],ah = nodes[1],aj = {id: 'aj', name:'lene'} ; nodes.push( aj ); links.push( {source: ag , target: aj },{source: ag , target: ah },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ae = {id: 'ae', name:'greif'},ah = nodes[0],ak = {id: 'ak', name:'nathan'} ; nodes.push( ae,ak ); links.push( {source: ah , target: ak },{source: ae , target: ak },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ah = nodes[0],al = {id: 'al', name:'bärbchen'} ; nodes.push( al ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  al = nodes[0],am = {id: 'am', name:'suschen'},an = {id: 'an', name:'dorchen'} ; nodes.push( am,an ); links.push( {source: am , target: an },{source: al , target: am },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ag = {id: 'ag', name:'der_lieutenant'},al = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ag = nodes[0],al = nodes[1],ao = {id: 'ao', name:'lukas'} ; nodes.push( ao ); links.push( {source: al , target: ao },{source: ag , target: ao },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ao','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ae = {id: 'ae', name:'greif'},ag = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = nodes[0],ag = nodes[1],ap = {id: 'ap', name:'fikfak'} ; nodes.push( ap ); links.push( {source: ag , target: ap },{source: ae , target: ag },{source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ae = nodes[0],ap = nodes[1] ; /* nodes.push(); */ links.push( {source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'tobis'},ac = {id: 'ac', name:'jeremis'},ad = {id: 'ad', name:'jobst'},af = {id: 'af', name:'michel'},ai = {id: 'ai', name:'die_bauern'},ak = {id: 'ak', name:'nathan'},ao = {id: 'ao', name:'lukas'},ap = nodes[0] ; nodes.push( ab,ac,ad,af,ai,ak,ao ); links.push( {source: ab , target: ao },{source: ab , target: ac },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: ap },{source: ao , target: ap },{source: ac , target: ao },{source: ac , target: af },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ap },{source: af , target: ao },{source: af , target: ak },{source: af , target: ai },{source: af , target: ap },{source: ak , target: ao },{source: ak , target: ap },{source: ad , target: ao },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: ai },{source: ad , target: ap },{source: ai , target: ao },{source: ai , target: ak },{source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab','ac','af','ak','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = {id: 'ae', name:'greif'},ao = nodes[0],ap = nodes[1] ; nodes.push( ae ); links.push( {source: ao , target: ap },{source: ae , target: ap },{source: ae , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aj = {id: 'aj', name:'lene'},ao = nodes[0],ap = nodes[1] ; nodes.push( aj ); links.push( {source: aj , target: ap },{source: aj , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ab = {id: 'ab', name:'tobis'},ac = {id: 'ac', name:'jeremis'},ao = nodes[0],ap = nodes[1] ; nodes.push( ab,ac ); links.push( {source: ab , target: ao },{source: ab , target: ac },{source: ab , target: ap },{source: ao , target: ap },{source: ac , target: ao },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aj = {id: 'aj', name:'lene'},ao = nodes[0],ap = nodes[1] ; nodes.push( aj ); links.push( {source: aj , target: ap },{source: aj , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  al = {id: 'al', name:'bärbchen'},ao = nodes[0],ap = nodes[1] ; nodes.push( al ); links.push( {source: al , target: ao },{source: al , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ab = {id: 'ab', name:'tobis'},ae = {id: 'ae', name:'greif'},ai = {id: 'ai', name:'die_bauern'},al = nodes[0],ao = nodes[1],ap = nodes[2],aq = {id: 'aq', name:'eve'},ar = {id: 'ar', name:'der_ältere_bauer'},ar = {id: 'ar', name:'der_ältere_bauer'},as = {id: 'as', name:'soldaten'} ; nodes.push( ab,ae,ai,aq,ar,as ); links.push( {source: aq , target: ar },{source: aq , target: ar },{source: aq , target: as },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: ap },{source: ai , target: ar },{source: ai , target: ao },{source: ai , target: al },{source: ai , target: as },{source: ar , target: as },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: ar },{source: ap , target: as },{source: ar , target: as },{source: ab , target: aq },{source: ab , target: ai },{source: ab , target: ar },{source: ab , target: ap },{source: ab , target: ar },{source: ab , target: ae },{source: ab , target: ao },{source: ab , target: al },{source: ab , target: as },{source: ae , target: aq },{source: ae , target: ai },{source: ae , target: ar },{source: ae , target: ap },{source: ae , target: ar },{source: ae , target: ao },{source: ae , target: al },{source: ae , target: as },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: ap },{source: ao , target: ar },{source: ao , target: as },{source: al , target: aq },{source: al , target: ar },{source: al , target: ap },{source: al , target: ar },{source: al , target: ao },{source: al , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ai','ar','ap','ab','ae','ao','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  al = nodes[0],aq = nodes[1],at = {id: 'at', name:'paul'} ; nodes.push( at ); links.push( {source: al , target: aq },{source: al , target: at },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  al = nodes[0],at = nodes[1] ; /* nodes.push(); */ links.push( {source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ae = {id: 'ae', name:'greif'},at = nodes[0] ; nodes.push( ae ); links.push( {source: ae , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ab = {id: 'ab', name:'tobis'},ac = {id: 'ac', name:'jeremis'},at = nodes[0] ; nodes.push( ab,ac ); links.push( {source: ab , target: ac },{source: ab , target: at },{source: ac , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ab','ac','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ap = {id: 'ap', name:'fikfak'},aq = {id: 'aq', name:'eve'} ; nodes.push( ap,aq ); links.push( {source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ab = {id: 'ab', name:'tobis'},ac = {id: 'ac', name:'jeremis'},ae = {id: 'ae', name:'greif'},ag = {id: 'ag', name:'der_lieutenant'},ah = {id: 'ah', name:'der_obriste'},al = {id: 'al', name:'bärbchen'},ao = {id: 'ao', name:'lukas'},ap = nodes[0],aq = nodes[1],at = {id: 'at', name:'paul'} ; nodes.push( ab,ac,ae,ag,ah,al,ao,at ); links.push( {source: ah , target: ap },{source: ah , target: al },{source: ah , target: ao },{source: ah , target: at },{source: ah , target: aq },{source: ap , target: at },{source: ap , target: aq },{source: ag , target: ah },{source: ag , target: ap },{source: ag , target: al },{source: ag , target: ao },{source: ag , target: at },{source: ag , target: aq },{source: ab , target: ah },{source: ab , target: ap },{source: ab , target: ag },{source: ab , target: al },{source: ab , target: ao },{source: ab , target: ac },{source: ab , target: at },{source: ab , target: aq },{source: ab , target: ae },{source: al , target: ap },{source: al , target: ao },{source: al , target: at },{source: al , target: aq },{source: ao , target: ap },{source: ao , target: at },{source: ao , target: aq },{source: ac , target: ah },{source: ac , target: ap },{source: ac , target: ag },{source: ac , target: al },{source: ac , target: ao },{source: ac , target: at },{source: ac , target: aq },{source: ac , target: ae },{source: aq , target: at },{source: ae , target: ah },{source: ae , target: ap },{source: ae , target: ag },{source: ae , target: al },{source: ae , target: ao },{source: ae , target: at },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreyzehnter Auftritt.';
}, 120000);
