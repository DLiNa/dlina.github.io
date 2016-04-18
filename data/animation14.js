setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'schönheitlieb'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = {id: 'ab', name:'theodor'},ac = {id: 'ac', name:'elisabeth'},ad = {id: 'ad', name:'wagner'} ; nodes.push( ab,ac,ad ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = nodes[0],ae = {id: 'ae', name:'donnerschlag'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ae = nodes[1],af = {id: 'af', name:'spuraus'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],af = nodes[1],ag = {id: 'ag', name:'emilie'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ad = nodes[0],ah = {id: 'ah', name:'faust'},ai = {id: 'ai', name:'ithuriel'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: ad , target: ah },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ah = nodes[0],ai = nodes[1],aj = {id: 'aj', name:'helena'} ; nodes.push( aj ); links.push( {source: ai , target: aj },{source: ah , target: aj },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ah = nodes[0],ak = {id: 'ak', name:'mephistopheles'} ; nodes.push( ak ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ai = {id: 'ai', name:'ithuriel'},ak = nodes[0] ; nodes.push( ai ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ah = {id: 'ah', name:'faust'},ak = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ah = nodes[0],ak = nodes[1],al = {id: 'al', name:'friedreich'} ; nodes.push( al ); links.push( {source: ah , target: al },{source: ah , target: ak },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ah = nodes[0],ak = nodes[1],am = {id: 'am', name:'silbergeitz'} ; nodes.push( am ); links.push( {source: ak , target: am },{source: ah , target: ak },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aa = {id: 'aa', name:'schönheitlieb'},ah = nodes[0],ak = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ak },{source: aa , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ah = nodes[0],ak = nodes[1],an = {id: 'an', name:'raufgern'} ; nodes.push( an ); links.push( {source: ak , target: an },{source: ah , target: ak },{source: ah , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ah = nodes[0],ak = nodes[1],ao = {id: 'ao', name:'sorgenvoll'} ; nodes.push( ao ); links.push( {source: ak , target: ao },{source: ah , target: ak },{source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ah = nodes[0],ak = nodes[1],ap = {id: 'ap', name:'waisenplag'} ; nodes.push( ap ); links.push( {source: ak , target: ap },{source: ah , target: ak },{source: ah , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ak','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ad = {id: 'ad', name:'wagner'},ah = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ah = nodes[0],ak = {id: 'ak', name:'mephistopheles'} ; nodes.push( ak ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '9. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Arie.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ab = {id: 'ab', name:'theodor'},ac = {id: 'ac', name:'elisabeth'},ai = {id: 'ai', name:'ithuriel'} ; nodes.push( ab,ac,ai ); links.push( {source: ab , target: ai },{source: ab , target: ac },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ai = nodes[0],ak = {id: 'ak', name:'mephistopheles'} ; nodes.push( ak ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = {id: 'ad', name:'wagner'},ah = {id: 'ah', name:'faust'},ak = nodes[0] ; nodes.push( ad,ah ); links.push( {source: ad , target: ak },{source: ad , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ah = nodes[0],aj = {id: 'aj', name:'helena'} ; nodes.push( aj ); links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ad = {id: 'ad', name:'wagner'},aq = {id: 'aq', name:'chor'} ; nodes.push( ad,aq ); links.push( {source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Auftritt'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Arie.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ad','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ab = {id: 'ab', name:'theodor'},ac = {id: 'ac', name:'elisabeth'},ah = {id: 'ah', name:'faust'},ak = {id: 'ak', name:'mephistopheles'} ; nodes.push( ab,ac,ah,ak ); links.push( {source: ah , target: ak },{source: ab , target: ah },{source: ab , target: ak },{source: ab , target: ac },{source: ac , target: ah },{source: ac , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ab = nodes[0],ac = nodes[1],ah = nodes[2],ai = {id: 'ai', name:'ithuriel'},aj = {id: 'aj', name:'helena'},ak = nodes[3] ; nodes.push( ai,aj ); links.push( {source: aj , target: ak },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: ak },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ak },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aj','ab','ac','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ah = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ab = {id: 'ab', name:'theodor'},ac = {id: 'ac', name:'elisabeth'},ah = nodes[0],ai = nodes[1] ; nodes.push( ab,ac ); links.push( {source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ah },{source: ac , target: ai },{source: ac , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ab = nodes[0],ac = nodes[1],ah = nodes[2],aj = {id: 'aj', name:'helena'} ; nodes.push( aj ); links.push( {source: ah , target: aj },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ac },{source: ac , target: aj },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = nodes[0],ac = nodes[1],ah = nodes[2],aj = nodes[3],ak = {id: 'ak', name:'mephistopheles'} ; nodes.push( ak ); links.push( {source: aj , target: ak },{source: ah , target: ak },{source: ah , target: aj },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: ah },{source: ab , target: ac },{source: ac , target: ak },{source: ac , target: aj },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ak','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ah = nodes[0],aj = nodes[1] ; /* nodes.push(); */ links.push( {source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ad = {id: 'ad', name:'wagner'},ah = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  aj = {id: 'aj', name:'helena'} ; nodes.push( aj ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aj = nodes[0],ak = {id: 'ak', name:'mephistopheles'} ; nodes.push( ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ah = {id: 'ah', name:'faust'},ak = nodes[0] ; nodes.push( ah ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ad = {id: 'ad', name:'wagner'},ah = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ab = {id: 'ab', name:'theodor'},ac = {id: 'ac', name:'elisabeth'},ah = nodes[0],aj = {id: 'aj', name:'helena'} ; nodes.push( ab,ac,aj ); links.push( {source: ah , target: aj },{source: ab , target: ah },{source: ab , target: aj },{source: ab , target: ac },{source: ac , target: ah },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ah','aj','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ak = {id: 'ak', name:'mephistopheles'} ; nodes.push( ak ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ai = {id: 'ai', name:'ithuriel'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 185000);
