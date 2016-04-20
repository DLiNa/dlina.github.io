setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'markus'},ab = {id: 'ab', name:'lucius'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],aa = nodes[0],ac = {id: 'ac', name:'virginia'},ad = {id: 'ad', name:'albina'} ; nodes.push( ac,ad ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ac = nodes[2],ad = nodes[3],ae = {id: 'ae', name:'quintus'},af = {id: 'af', name:'ruffus'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ac },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = nodes[0],ac = nodes[1],ae = nodes[3],af = nodes[4],ag = {id: 'ag', name:'numitor'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ac },{source: aa , target: ae },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],ac = nodes[1],ae = nodes[2],af = nodes[3],ag = nodes[4],ah = {id: 'ah', name:'icilius'} ; nodes.push( ah ); links.push( {source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ae },{source: ag , target: ah },{source: af , target: ah },{source: af , target: ag },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','aa','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  af = nodes[3],ag = nodes[4],ah = nodes[5] ; /* nodes.push(); */ links.push( {source: ag , target: ah },{source: af , target: ag },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = {id: 'ac', name:'virginia'},ad = {id: 'ad', name:'albina'},ag = nodes[1],ah = nodes[2] ; nodes.push( ac,ad ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ad },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','ah','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ae = {id: 'ae', name:'quintus'},af = {id: 'af', name:'ruffus'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = {id: 'ab', name:'lucius'},ae = nodes[0],af = nodes[1],ai = {id: 'ai', name:'ein_paar_vom_volke'} ; nodes.push( ab,ai ); links.push( {source: ab , target: af },{source: ab , target: ae },{source: ab , target: ai },{source: af , target: ai },{source: ae , target: af },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ab = nodes[0],ai = nodes[3],aj = {id: 'aj', name:'das_volk'},ak = {id: 'ak', name:'appius'},al = {id: 'al', name:'einige_vom_volk'} ; nodes.push( aj,ak,al ); links.push( {source: aj , target: al },{source: aj , target: ak },{source: ai , target: aj },{source: ai , target: al },{source: ai , target: ak },{source: ak , target: al },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: al },{source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aj','ai','al','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ac = {id: 'ac', name:'virginia'},ag = {id: 'ag', name:'numitor'},ah = {id: 'ah', name:'icilius'},ak = nodes[3] ; nodes.push( ac,ag,ah ); links.push( {source: ah , target: ak },{source: ag , target: ah },{source: ag , target: ak },{source: ac , target: ah },{source: ac , target: ak },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = {id: 'aa', name:'markus'},ac = nodes[0],ae = {id: 'ae', name:'quintus'},af = {id: 'af', name:'ruffus'},ag = nodes[1],ah = nodes[2],ai = {id: 'ai', name:'ein_paar_vom_volke'},aj = {id: 'aj', name:'das_volk'},ak = nodes[3],al = {id: 'al', name:'einige_vom_volk'} ; nodes.push( aa,ae,af,ai,aj,al ); links.push( {source: ak , target: al },{source: aa , target: ak },{source: aa , target: ah },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: al },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: al },{source: af , target: ak },{source: af , target: ah },{source: af , target: ag },{source: af , target: aj },{source: af , target: ai },{source: af , target: al },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: al },{source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa','ah','ag','af','ae','ac','aj','ai','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = {id: 'ab', name:'lucius'},ak = nodes[8] ; nodes.push( ab ); links.push( {source: ab , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = {id: 'ae', name:'quintus'},af = {id: 'af', name:'ruffus'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ae = nodes[0],af = nodes[1],ah = {id: 'ah', name:'icilius'} ; nodes.push( ah ); links.push( {source: af , target: ah },{source: ae , target: ah },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ac = {id: 'ac', name:'virginia'},ae = nodes[0],af = nodes[1],ah = nodes[2],al = {id: 'al', name:'einige_vom_volk'} ; nodes.push( ac,al ); links.push( {source: ac , target: ah },{source: ac , target: af },{source: ac , target: ae },{source: ac , target: al },{source: ah , target: al },{source: af , target: ah },{source: af , target: al },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ae','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = nodes[0],af = nodes[2],ah = nodes[3],am = {id: 'am', name:'virginius'} ; nodes.push( am ); links.push( {source: af , target: am },{source: af , target: ah },{source: ac , target: am },{source: ac , target: af },{source: ac , target: ah },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ab = {id: 'ab', name:'lucius'},ah = nodes[2],am = nodes[3] ; nodes.push( ab ); links.push( {source: ab , target: am },{source: ab , target: ah },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  am = nodes[2] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ak = {id: 'ak', name:'appius'},am = nodes[0] ; nodes.push( ak ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ac = {id: 'ac', name:'virginia'},ak = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ac = nodes[0],am = {id: 'am', name:'virginius'} ; nodes.push( am ); links.push( {source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ac','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  an = {id: 'an', name:'valerius'} ; nodes.push( an ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  am = {id: 'am', name:'virginius'},an = nodes[0] ; nodes.push( am ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = {id: 'ac', name:'virginia'},am = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ac = nodes[0],ag = {id: 'ag', name:'numitor'},ag = {id: 'ag', name:'numitor'},ah = {id: 'ah', name:'icilius'},am = nodes[1],an = {id: 'an', name:'valerius'} ; nodes.push( ag,ah,an ); links.push( {source: ah , target: am },{source: ah , target: an },{source: ac , target: ah },{source: ac , target: am },{source: ac , target: ag },{source: ac , target: an },{source: ac , target: ag },{source: am , target: an },{source: ag , target: ah },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: am },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah','ag','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = {id: 'ab', name:'lucius'},ac = nodes[0],ak = {id: 'ak', name:'appius'},am = nodes[4],ao = {id: 'ao', name:'die_zeugen'} ; nodes.push( ab,ak,ao ); links.push( {source: ak , target: ao },{source: ak , target: am },{source: ab , target: ak },{source: ab , target: ao },{source: ab , target: am },{source: ab , target: ac },{source: am , target: ao },{source: ac , target: ak },{source: ac , target: ao },{source: ac , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ao','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = nodes[0],ae = {id: 'ae', name:'quintus'},af = {id: 'af', name:'ruffus'},ai = {id: 'ai', name:'ein_paar_vom_volke'},aj = {id: 'aj', name:'das_volk'},ak = nodes[2],al = {id: 'al', name:'einige_vom_volk'},am = nodes[3],an = {id: 'an', name:'valerius'},ap = {id: 'ap', name:'lälia'} ; nodes.push( ae,af,ai,aj,al,an,ap ); links.push( {source: ak , target: ap },{source: ak , target: an },{source: ak , target: am },{source: ak , target: al },{source: ab , target: ak },{source: ab , target: ap },{source: ab , target: an },{source: ab , target: af },{source: ab , target: am },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: al },{source: an , target: ap },{source: af , target: ak },{source: af , target: ap },{source: af , target: an },{source: af , target: am },{source: af , target: aj },{source: af , target: ai },{source: af , target: al },{source: am , target: ap },{source: am , target: an },{source: ae , target: ak },{source: ae , target: ap },{source: ae , target: an },{source: ae , target: af },{source: ae , target: am },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: al },{source: aj , target: ak },{source: aj , target: ap },{source: aj , target: an },{source: aj , target: am },{source: aj , target: al },{source: ai , target: ak },{source: ai , target: ap },{source: ai , target: an },{source: ai , target: am },{source: ai , target: aj },{source: ai , target: al },{source: al , target: ap },{source: al , target: an },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ak','ab','ap','af','ae','aj','ai','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ag = {id: 'ag', name:'numitor'},ah = {id: 'ah', name:'icilius'},am = nodes[7],an = nodes[8] ; nodes.push( ag,ah ); links.push( {source: ah , target: an },{source: ah , target: am },{source: ag , target: ah },{source: ag , target: an },{source: ag , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '7. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
}, 140000);
