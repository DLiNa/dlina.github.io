setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'goffier'},ab = {id: 'ab', name:'opku'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'dessalines'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweyter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'walter'},ae = {id: 'ae', name:'soldat'} ; nodes.push( ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ae','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ac = nodes[0],af = {id: 'af', name:'offizier'} ; nodes.push( af ); links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ac = nodes[0],ag = {id: 'ag', name:'diakue'} ; nodes.push( ag ); links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = nodes[0],ah = {id: 'ah', name:'julia'} ; nodes.push( ah ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ac = nodes[0],ah = nodes[1],ai = {id: 'ai', name:'einige_offiziere'},ai = {id: 'ai', name:'einige_offiziere'},aj = {id: 'aj', name:'pflanzer'} ; nodes.push( ai,aj ); links.push( {source: ac , target: ai },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ah },{source: ai , target: aj },{source: ai , target: aj },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac','ai','aj','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ak = {id: 'ak', name:'mutter'},al = {id: 'al', name:'hortensia'},av = {id: 'av', name:'marie'} ; nodes.push( ak,al,av ); links.push( {source: ak , target: al },{source: ak , target: av },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ak = nodes[0],al = nodes[1],am = {id: 'am', name:'klara'},av = nodes[2] ; nodes.push( am ); links.push( {source: am , target: av },{source: al , target: am },{source: al , target: av },{source: ak , target: am },{source: ak , target: al },{source: ak , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ak = nodes[0],al = nodes[1],an = {id: 'an', name:'baptist'},av = nodes[2] ; nodes.push( an ); links.push( {source: ak , target: an },{source: ak , target: al },{source: ak , target: av },{source: an , target: av },{source: al , target: an },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ak = nodes[0],al = nodes[1],am = {id: 'am', name:'klara'},av = nodes[2] ; nodes.push( am ); links.push( {source: al , target: av },{source: al , target: am },{source: ak , target: al },{source: ak , target: av },{source: ak , target: am },{source: am , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ak = nodes[0],al = nodes[1],av = nodes[2] ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: ak , target: av },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ak = nodes[0],al = nodes[1],am = {id: 'am', name:'klara'},av = nodes[2] ; nodes.push( am ); links.push( {source: am , target: av },{source: ak , target: am },{source: ak , target: al },{source: ak , target: av },{source: al , target: am },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ak = nodes[0],al = nodes[1],am = nodes[2],av = nodes[3] ; /* nodes.push(); */ links.push( {source: am , target: av },{source: ak , target: am },{source: ak , target: al },{source: ak , target: av },{source: al , target: am },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ak','al','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  am = nodes[0],ap = {id: 'ap', name:'anna'} ; nodes.push( ap ); links.push( {source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  af = {id: 'af', name:'offizier'},ak = {id: 'ak', name:'mutter'},am = nodes[0],ap = nodes[1] ; nodes.push( af,ak ); links.push( {source: af , target: ap },{source: af , target: am },{source: af , target: ak },{source: am , target: ap },{source: ak , target: ap },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'af','ap','am','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ag = {id: 'ag', name:'diakue'},aq = {id: 'aq', name:'judithe'} ; nodes.push( ag,aq ); links.push( {source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  af = {id: 'af', name:'offizier'},ag = nodes[0],aq = nodes[1] ; nodes.push( af ); links.push( {source: ag , target: aq },{source: af , target: ag },{source: af , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ag','af','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ak = {id: 'ak', name:'mutter'},al = {id: 'al', name:'hortensia'},av = {id: 'av', name:'marie'} ; nodes.push( ak,al,av ); links.push( {source: ak , target: al },{source: ak , target: av },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  af = {id: 'af', name:'offizier'},ak = nodes[0],al = nodes[1],av = nodes[2] ; nodes.push( af ); links.push( {source: af , target: ak },{source: af , target: av },{source: af , target: al },{source: ak , target: av },{source: ak , target: al },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af','ak','av','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ag = {id: 'ag', name:'diakue'},ar = {id: 'ar', name:'andre'} ; nodes.push( ag,ar ); links.push( {source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ag = nodes[0],ak = {id: 'ak', name:'mutter'},al = {id: 'al', name:'hortensia'},an = {id: 'an', name:'baptist'},ar = nodes[1],ar = nodes[1],ar = nodes[1],ar = nodes[1],av = {id: 'av', name:'marie'} ; nodes.push( ak,al,an,av ); links.push( {source: ak , target: av },{source: ak , target: ar },{source: ak , target: ar },{source: ak , target: ar },{source: ak , target: ar },{source: ak , target: an },{source: ak , target: al },{source: ag , target: av },{source: ag , target: ak },{source: ag , target: ar },{source: ag , target: ar },{source: ag , target: ar },{source: ag , target: ar },{source: ag , target: an },{source: ag , target: al },{source: ar , target: av },{source: ar , target: av },{source: ar , target: av },{source: ar , target: av },{source: an , target: av },{source: an , target: ar },{source: an , target: ar },{source: an , target: ar },{source: an , target: ar },{source: al , target: av },{source: al , target: ar },{source: al , target: ar },{source: al , target: ar },{source: al , target: ar },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'av','ak','ar','an','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ag = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ag = nodes[0],al = {id: 'al', name:'hortensia'},aq = {id: 'aq', name:'judithe'},av = {id: 'av', name:'marie'} ; nodes.push( al,aq,av ); links.push( {source: aq , target: av },{source: ag , target: aq },{source: ag , target: av },{source: ag , target: al },{source: al , target: aq },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aq','av','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ag = nodes[0],as = {id: 'as', name:'soudry'} ; nodes.push( as ); links.push( {source: ag , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  af = {id: 'af', name:'offizier'},ag = nodes[0],ai = {id: 'ai', name:'einige_offiziere'},as = nodes[1] ; nodes.push( af,ai ); links.push( {source: af , target: ag },{source: af , target: as },{source: af , target: ai },{source: ag , target: as },{source: ag , target: ai },{source: ai , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ag = nodes[0],aq = {id: 'aq', name:'judithe'},as = nodes[1] ; nodes.push( aq ); links.push( {source: ag , target: as },{source: ag , target: aq },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ag','as','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = {id: 'aa', name:'goffier'},ac = {id: 'ac', name:'dessalines'},ah = {id: 'ah', name:'julia'} ; nodes.push( aa,ac,ah ); links.push( {source: ac , target: ah },{source: aa , target: ac },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ac = nodes[0],ag = {id: 'ag', name:'diakue'},ah = nodes[1] ; nodes.push( ag ); links.push( {source: ac , target: ag },{source: ac , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ab = {id: 'ab', name:'opku'},ac = nodes[0],ag = nodes[1],ah = nodes[2] ; nodes.push( ab ); links.push( {source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ag },{source: ac , target: ah },{source: ac , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab','ac','ah','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  av = {id: 'av', name:'marie'} ; nodes.push( av ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  as = {id: 'as', name:'soudry'} ; nodes.push( as ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ag = {id: 'ag', name:'diakue'},as = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ag = nodes[0],aq = {id: 'aq', name:'judithe'} ; nodes.push( aq ); links.push( {source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ag = nodes[0],ah = {id: 'ah', name:'julia'},aq = nodes[1] ; nodes.push( ah ); links.push( {source: ah , target: aq },{source: ag , target: ah },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ah = nodes[0],al = {id: 'al', name:'hortensia'},aq = nodes[1],aq = nodes[1],av = {id: 'av', name:'marie'} ; nodes.push( al,av ); links.push( {source: aq , target: av },{source: ah , target: aq },{source: ah , target: al },{source: ah , target: av },{source: ah , target: aq },{source: al , target: aq },{source: al , target: av },{source: al , target: aq },{source: aq , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  al = nodes[0],aq = nodes[1],as = {id: 'as', name:'soudry'},av = nodes[2] ; nodes.push( as ); links.push( {source: aq , target: av },{source: aq , target: as },{source: as , target: av },{source: al , target: av },{source: al , target: aq },{source: al , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'av','aq','as','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  aa = {id: 'aa', name:'goffier'},ac = {id: 'ac', name:'dessalines'},ar = {id: 'ar', name:'andre'},ar = {id: 'ar', name:'andre'},at = {id: 'at', name:'die_offiziere_von_seinem_gefolg'} ; nodes.push( aa,ac,ar,at ); links.push( {source: ac , target: ar },{source: ac , target: at },{source: ac , target: ar },{source: aa , target: ac },{source: aa , target: ar },{source: aa , target: at },{source: aa , target: ar },{source: ar , target: at },{source: ar , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  aa = nodes[0],ab = {id: 'ab', name:'opku'},ac = nodes[1],ag = {id: 'ag', name:'diakue'},ah = {id: 'ah', name:'julia'},ai = {id: 'ai', name:'einige_offiziere'},al = {id: 'al', name:'hortensia'},ar = nodes[2],as = {id: 'as', name:'soudry'},au = {id: 'au', name:'soldaten'},av = {id: 'av', name:'marie'} ; nodes.push( ab,ag,ah,ai,al,as,au,av ); links.push( {source: as , target: au },{source: as , target: av },{source: ah , target: as },{source: ah , target: ar },{source: ah , target: au },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: av },{source: ac , target: as },{source: ac , target: ah },{source: ac , target: ag },{source: ac , target: ar },{source: ac , target: au },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: av },{source: ag , target: as },{source: ag , target: ah },{source: ag , target: ar },{source: ag , target: au },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: av },{source: ar , target: as },{source: ar , target: au },{source: ar , target: av },{source: aa , target: as },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ar },{source: aa , target: ab },{source: aa , target: au },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: av },{source: ab , target: as },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ar },{source: ab , target: au },{source: ab , target: ai },{source: ab , target: al },{source: ab , target: av },{source: au , target: av },{source: ai , target: as },{source: ai , target: ar },{source: ai , target: au },{source: ai , target: al },{source: ai , target: av },{source: al , target: as },{source: al , target: ar },{source: al , target: au },{source: al , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Lezter Auftritt';
}, 190000);
