setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'rosa'},ab = {id: 'ab', name:'meissner'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'gollwitz'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = nodes[0],ad = {id: 'ad', name:'neumeister'},ae = {id: 'ae', name:'marianne'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae },{source: ac , target: ad },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  aa = {id: 'aa', name:'rosa'},ac = nodes[0],ad = nodes[1],ae = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = nodes[0],af = {id: 'af', name:'striese'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = {id: 'ac', name:'gollwitz'},af = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'rosa'},ac = nodes[0],af = nodes[1],ag = {id: 'ag', name:'gross'} ; nodes.push( aa,ag ); links.push( {source: aa , target: ac },{source: aa , target: af },{source: aa , target: ag },{source: ac , target: af },{source: ac , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ac = nodes[1],af = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ac },{source: aa , target: af },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ac = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ah = {id: 'ah', name:'friederike'},ai = {id: 'ai', name:'paula'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: aa , target: ah },{source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ac = {id: 'ac', name:'gollwitz'},ah = nodes[0],ai = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ac','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ad = {id: 'ad', name:'neumeister'},aj = {id: 'aj', name:'auguste'},ak = {id: 'ak', name:'sterneck'} ; nodes.push( ad,aj,ak ); links.push( {source: ad , target: aj },{source: ad , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ad = nodes[0],ae = {id: 'ae', name:'marianne'},ak = nodes[1] ; nodes.push( ae ); links.push( {source: ad , target: ak },{source: ad , target: ae },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ad = nodes[0],ae = nodes[1] ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ad = nodes[0],ae = nodes[1],ah = {id: 'ah', name:'friederike'},ai = {id: 'ai', name:'paula'} ; nodes.push( ah,ai ); links.push( {source: ah , target: ai },{source: ad , target: ai },{source: ad , target: ah },{source: ad , target: ae },{source: ae , target: ai },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ai = nodes[0],ak = {id: 'ak', name:'sterneck'} ; nodes.push( ak ); links.push( {source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = {id: 'ac', name:'gollwitz'},ai = nodes[0],ak = nodes[1] ; nodes.push( ac ); links.push( {source: ac , target: ak },{source: ac , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ac = nodes[0],ah = {id: 'ah', name:'friederike'},ai = nodes[1] ; nodes.push( ah ); links.push( {source: ac , target: ah },{source: ac , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = nodes[0],ad = {id: 'ad', name:'neumeister'},ae = {id: 'ae', name:'marianne'},ah = nodes[1] ; nodes.push( ad,ae ); links.push( {source: ad , target: ah },{source: ad , target: ae },{source: ae , target: ah },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ac = nodes[0],ad = nodes[1],af = {id: 'af', name:'striese'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ad = nodes[0],ah = {id: 'ah', name:'friederike'} ; nodes.push( ah ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  af = {id: 'af', name:'striese'},ah = nodes[0] ; nodes.push( af ); links.push( {source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ad = {id: 'ad', name:'neumeister'},af = nodes[0],ah = nodes[1] ; nodes.push( ad ); links.push( {source: af , target: ah },{source: ad , target: ah },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ah','af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ac = {id: 'ac', name:'gollwitz'},ai = {id: 'ai', name:'paula'} ; nodes.push( ac,ai ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = {id: 'aa', name:'rosa'},ac = nodes[0],ai = nodes[1] ; nodes.push( aa ); links.push( {source: aa , target: ac },{source: aa , target: ai },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ac = nodes[0],af = {id: 'af', name:'striese'},ak = {id: 'ak', name:'sterneck'} ; nodes.push( af,ak ); links.push( {source: ac , target: af },{source: ac , target: ak },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ac','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  aa = {id: 'aa', name:'rosa'},ak = nodes[0] ; nodes.push( aa ); links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = nodes[0],ai = {id: 'ai', name:'paula'},ak = nodes[1] ; nodes.push( ai ); links.push( {source: ai , target: ak },{source: aa , target: ai },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  aa = nodes[0],ak = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = nodes[0],af = {id: 'af', name:'striese'},ak = nodes[1] ; nodes.push( af ); links.push( {source: af , target: ak },{source: aa , target: af },{source: aa , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'af','ak','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ac = {id: 'ac', name:'gollwitz'},ad = {id: 'ad', name:'neumeister'},ai = {id: 'ai', name:'paula'} ; nodes.push( ac,ad,ai ); links.push( {source: ad , target: ai },{source: ac , target: ad },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ac = nodes[0],ad = nodes[1],ae = {id: 'ae', name:'marianne'},ah = {id: 'ah', name:'friederike'},ai = nodes[2] ; nodes.push( ae,ah ); links.push( {source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: ai },{source: ae , target: ah },{source: ae , target: ai },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '9. Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ac','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ae = nodes[0],ag = {id: 'ag', name:'gross'},ah = nodes[1] ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ae , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '10. Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ae = nodes[0],ah = nodes[1],ai = {id: 'ai', name:'paula'} ; nodes.push( ai ); links.push( {source: ae , target: ai },{source: ae , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '11. Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = {id: 'aa', name:'rosa'},ae = nodes[0],ah = nodes[1],ai = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ai },{source: ah , target: ai },{source: ae , target: ah },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '12. Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = {id: 'ac', name:'gollwitz'},ad = {id: 'ad', name:'neumeister'},ae = nodes[0],ah = nodes[1] ; nodes.push( ac,ad ); links.push( {source: ad , target: ae },{source: ad , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '13. Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ac = nodes[0],ad = nodes[1],af = {id: 'af', name:'striese'} ; nodes.push( af ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '14. Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = {id: 'aa', name:'rosa'},ac = nodes[0],ad = nodes[1],af = nodes[2],ah = {id: 'ah', name:'friederike'} ; nodes.push( aa,ah ); links.push( {source: ad , target: ah },{source: ad , target: af },{source: af , target: ah },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: af },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '15. Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = nodes[0],ac = nodes[1],af = nodes[2] ; /* nodes.push(); */ links.push( {source: ac , target: af },{source: aa , target: ac },{source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '1. Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = nodes[0],af = nodes[1],ai = {id: 'ai', name:'paula'},ak = {id: 'ak', name:'sterneck'} ; nodes.push( ai,ak ); links.push( {source: af , target: ak },{source: af , target: ai },{source: aa , target: ak },{source: aa , target: af },{source: aa , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '2. Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  aa = nodes[0],af = nodes[1],ai = nodes[2],ak = nodes[3] ; /* nodes.push(); */ links.push( {source: ai , target: ak },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ak },{source: af , target: ai },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '3. Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ai','aa','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ac = {id: 'ac', name:'gollwitz'},af = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '4. Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ac = nodes[0],ae = {id: 'ae', name:'marianne'},ah = {id: 'ah', name:'friederike'} ; nodes.push( ae,ah ); links.push( {source: ae , target: ah },{source: ac , target: ae },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '5. Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ac = nodes[0],ag = {id: 'ag', name:'gross'},ah = nodes[1] ; nodes.push( ag ); links.push( {source: ag , target: ah },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '6. Auftritt.';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ac = nodes[0],ad = {id: 'ad', name:'neumeister'},ae = {id: 'ae', name:'marianne'},ag = nodes[1],ah = nodes[2],ak = {id: 'ak', name:'sterneck'} ; nodes.push( ad,ae,ak ); links.push( {source: ac , target: ak },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ah , target: ak },{source: ag , target: ak },{source: ag , target: ah },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ae },{source: ae , target: ak },{source: ae , target: ah },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '7. Auftritt.';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ak','ag','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  aa = {id: 'aa', name:'rosa'},ac = nodes[0],af = {id: 'af', name:'striese'},ah = nodes[1] ; nodes.push( aa,af ); links.push( {source: af , target: ah },{source: ac , target: af },{source: ac , target: ah },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = '8. Auftritt.';
}, 225000);
