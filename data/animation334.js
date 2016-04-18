setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'frau_fluth'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = {id: 'ab', name:'frau_reich'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = {id: 'ac', name:'fluth'},ad = {id: 'ad', name:'reich_herne'},ae = {id: 'ae', name:'spärlich'},af = {id: 'af', name:'cajus'} ; nodes.push( ac,ad,ae,af ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ae = nodes[1],af = nodes[2],ag = {id: 'ag', name:'fenton_oberon'} ; nodes.push( ag ); links.push( {source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ag','ad','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'frau_fluth'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  aa = nodes[0],ab = {id: 'ab', name:'frau_reich'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = nodes[0],ab = nodes[1],ah = {id: 'ah', name:'falstaff'} ; nodes.push( ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  aa = nodes[0],ab = nodes[1],ah = nodes[2] ; /* nodes.push(); */ links.push( {source: aa , target: ab },{source: aa , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'fluth'},ad = {id: 'ad', name:'reich_herne'},ae = {id: 'ae', name:'spärlich'},af = {id: 'af', name:'cajus'} ; nodes.push( ac,ad,ae,af ); links.push( {source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ac','ad','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aa = nodes[0],ab = nodes[1] ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'fluth'},ad = {id: 'ad', name:'reich_herne'},ae = {id: 'ae', name:'spärlich'},af = {id: 'af', name:'cajus'} ; nodes.push( ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aa','ab','ac','ad','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ah = {id: 'ah', name:'falstaff'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ah = nodes[0],ai = {id: 'ai', name:'kellner'},aj = {id: 'aj', name:'stimmen_von_aussen'} ; nodes.push( ai,aj ); links.push( {source: ai , target: aj },{source: ah , target: ai },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ah = nodes[0],ai = nodes[1],ak = {id: 'ak', name:'erster_bürger'},al = {id: 'al', name:'zweiter_bürger'},am = {id: 'am', name:'einige_bürger'},am = {id: 'am', name:'einige_bürger'},an = {id: 'an', name:'ganzer_chor'},ao = {id: 'ao', name:'vierter_bürger'},ap = {id: 'ap', name:'dritter_bürger'} ; nodes.push( ak,al,am,an,ao,ap ); links.push( {source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: an },{source: ai , target: am },{source: ak , target: al },{source: ak , target: am },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: an },{source: ak , target: am },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: an },{source: ah , target: am },{source: al , target: am },{source: al , target: ao },{source: al , target: ap },{source: al , target: an },{source: al , target: am },{source: am , target: ao },{source: am , target: ap },{source: am , target: an },{source: ao , target: ap },{source: an , target: ao },{source: an , target: ap },{source: am , target: ao },{source: am , target: ap },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ak','al','am','ao','ap','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ah = nodes[0],ai = nodes[1] ; /* nodes.push(); */ links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = {id: 'ac', name:'fluth'},ah = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ae = {id: 'ae', name:'spärlich'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ae = nodes[0],af = {id: 'af', name:'cajus'},ag = {id: 'ag', name:'fenton_oberon'} ; nodes.push( af,ag ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ae = nodes[0],af = nodes[1],ag = nodes[2] ; /* nodes.push(); */ links.push( {source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ae = nodes[0],af = nodes[1],ag = nodes[2],aq = {id: 'aq', name:'anna_titania'} ; nodes.push( aq ); links.push( {source: ag , target: aq },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: af },{source: af , target: aq },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aq','ag','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = {id: 'aa', name:'frau_fluth'},ab = {id: 'ab', name:'frau_reich'},ah = {id: 'ah', name:'falstaff'} ; nodes.push( aa,ab,ah ); links.push( {source: aa , target: ah },{source: aa , target: ab },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ab = nodes[1],ah = nodes[2] ; /* nodes.push(); */ links.push( {source: ab , target: ah },{source: aa , target: ab },{source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],ac = {id: 'ac', name:'fluth'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  aa = nodes[0],ac = nodes[1],ad = {id: 'ad', name:'reich_herne'},ae = {id: 'ae', name:'spärlich'},af = {id: 'af', name:'cajus'} ; nodes.push( ad,ae,af ); links.push( {source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: ad , target: af },{source: ad , target: ae },{source: ae , target: af },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aa = nodes[0],ab = {id: 'ab', name:'frau_reich'},ac = nodes[1],ad = nodes[2],ae = nodes[3],af = nodes[4],ah = {id: 'ah', name:'falstaff'} ; nodes.push( ab,ah ); links.push( {source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ae },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ae },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ae },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: af , target: ah },{source: ae , target: ah },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ab','aa','ah','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ac = nodes[0],af = nodes[1] ; /* nodes.push(); */ links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  aa = {id: 'aa', name:'frau_fluth'},ab = {id: 'ab', name:'frau_reich'},ac = nodes[0],ad = {id: 'ad', name:'reich_herne'} ; nodes.push( aa,ab,ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ac','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ab = nodes[0],aq = {id: 'aq', name:'anna_titania'} ; nodes.push( aq ); links.push( {source: ab , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ad = {id: 'ad', name:'reich_herne'},aq = nodes[0] ; nodes.push( ad ); links.push( {source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  aq = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ac = {id: 'ac', name:'fluth'},ad = {id: 'ad', name:'reich_herne'},ae = {id: 'ae', name:'spärlich'} ; nodes.push( ac,ad,ae ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ac','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  aa = {id: 'aa', name:'frau_fluth'},ab = {id: 'ab', name:'frau_reich'},af = {id: 'af', name:'cajus'},an = {id: 'an', name:'ganzer_chor'} ; nodes.push( aa,ab,af,an ); links.push( {source: aa , target: ab },{source: aa , target: af },{source: aa , target: an },{source: ab , target: af },{source: ab , target: an },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'aa','ab','af','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ah = {id: 'ah', name:'falstaff'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  aa = {id: 'aa', name:'frau_fluth'},ab = {id: 'ab', name:'frau_reich'},ah = nodes[0] ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ah },{source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  an = {id: 'an', name:'ganzer_chor'},aq = {id: 'aq', name:'anna_titania'} ; nodes.push( an,aq ); links.push( {source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ag = {id: 'ag', name:'fenton_oberon'},aq = nodes[0],ar = {id: 'ar', name:'elfen'} ; nodes.push( ag,ar ); links.push( {source: ag , target: aq },{source: ag , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ag','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ad = {id: 'ad', name:'reich_herne'},ad = {id: 'ad', name:'reich_herne'},an = {id: 'an', name:'ganzer_chor'},ar = nodes[1] ; nodes.push( ad,an ); links.push( {source: ad , target: ar },{source: ad , target: an },{source: an , target: ar },{source: ad , target: ar },{source: ad , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ad = nodes[0],ae = {id: 'ae', name:'spärlich'},af = {id: 'af', name:'cajus'},ah = {id: 'ah', name:'falstaff'},an = nodes[1],ar = nodes[2] ; nodes.push( ae,af,ah ); links.push( {source: ad , target: ar },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: an },{source: ah , target: ar },{source: ah , target: an },{source: af , target: ar },{source: af , target: ah },{source: af , target: an },{source: ae , target: ar },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: an },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ar','af','ae','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  aa = {id: 'aa', name:'frau_fluth'},ab = {id: 'ab', name:'frau_reich'},ac = {id: 'ac', name:'fluth'},ad = nodes[0],ah = nodes[1] ; nodes.push( aa,ab,ac,ad ); links.push( {source: ac , target: ah },{source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ad },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ac','aa','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ad = nodes[0],ae = {id: 'ae', name:'spärlich'},af = {id: 'af', name:'cajus'} ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  aa = {id: 'aa', name:'frau_fluth'},ab = {id: 'ab', name:'frau_reich'},ad = nodes[0],ae = nodes[1],af = nodes[2],ag = {id: 'ag', name:'fenton_oberon'},ah = {id: 'ah', name:'falstaff'},aq = {id: 'aq', name:'anna_titania'} ; nodes.push( aa,ab,ag,ah,aq ); links.push( {source: ad , target: aq },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ah },{source: ab , target: aq },{source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ah },{source: ag , target: aq },{source: ag , target: ah },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ah },{source: af , target: aq },{source: af , target: ag },{source: af , target: ah },{source: aa , target: aq },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ah },{source: ah , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 205000);
