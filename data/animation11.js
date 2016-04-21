setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'försterin'},ab = {id: 'ab', name:'weiler'},ac = {id: 'ac', name:'andres'},ad = {id: 'ad', name:'marie'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ad ae */ var  aa = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'robert'} ; nodes.push( ae ); links.push( {source: aa , target: ae },{source: aa , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ae af */ var  aa = nodes[0] ,ae = nodes[1] ,af = {id: 'af', name:'förster'} ; nodes.push( af ); links.push( {source: ae , target: af },{source: aa , target: af },{source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ad ae af */ var  ad = {id: 'ad', name:'marie'},ae = nodes[0] ,af = nodes[1]  ; nodes.push( ad ); links.push( {source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ae','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa af ag ah ai */ var  aa = {id: 'aa', name:'försterin'},af = nodes[0] ,ag = {id: 'ag', name:'stein'},ah = {id: 'ah', name:'möller'},ai = {id: 'ai', name:'wilkens'} ; nodes.push( aa,ag,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa','ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa af ag ah */ var  aa = {id: 'aa', name:'försterin'},af = nodes[0] ,ag = nodes[1] ,ah = {id: 'ah', name:'möller'} ; nodes.push( aa,ah ); links.push( {source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* aa af ai */ var  aa = nodes[0] ,af = nodes[1] ,ai = {id: 'ai', name:'wilkens'} ; nodes.push( ai ); links.push( {source: aa , target: ai },{source: aa , target: af },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac af ah ai */ var  aa = nodes[0] ,ac = {id: 'ac', name:'andres'},af = nodes[1] ,ah = {id: 'ah', name:'möller'},ai = nodes[2]  ; nodes.push( ac,ah ); links.push( {source: af , target: ah },{source: af , target: ai },{source: ah , target: ai },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ac },{source: ac , target: af },{source: ac , target: ah },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* aa ac ad ae af ah ai */ var  aa = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'marie'},ae = {id: 'ae', name:'robert'},af = nodes[2] ,ah = nodes[3] ,ai = nodes[4]  ; nodes.push( ad,ae ); links.push( {source: ae , target: ah },{source: ae , target: af },{source: ae , target: ai },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ai },{source: ah , target: ai },{source: af , target: ah },{source: af , target: ai },{source: aa , target: ae },{source: aa , target: ac },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ad },{source: aa , target: ai },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae','ac','ah','af','aa','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ag */ var  ag = {id: 'ag', name:'stein'} ; nodes.push( ag ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae ag */ var  ae = {id: 'ae', name:'robert'},ag = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ag aj */ var  ag = nodes[0] ,aj = {id: 'aj', name:'pastor'} ; nodes.push( aj ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ah aj */ var  ag = nodes[0] ,ah = {id: 'ah', name:'möller'},aj = nodes[1]  ; nodes.push( ah ); links.push( {source: ag , target: ah },{source: ag , target: aj },{source: ah , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ah ak */ var  ah = nodes[0] ,ak = {id: 'ak', name:'buchjäger'} ; nodes.push( ak ); links.push( {source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ah','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* aa ab af */ var  aa = {id: 'aa', name:'försterin'},ab = {id: 'ab', name:'weiler'},af = {id: 'af', name:'förster'} ; nodes.push( aa,ab,af ); links.push( {source: aa , target: ab },{source: aa , target: af },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab af ai */ var  aa = nodes[0] ,ab = nodes[1] ,af = nodes[2] ,ai = {id: 'ai', name:'wilkens'} ; nodes.push( ai ); links.push( {source: aa , target: ai },{source: aa , target: af },{source: aa , target: ab },{source: af , target: ai },{source: ab , target: ai },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ab af ai aj */ var  aa = nodes[0] ,ab = nodes[1] ,af = nodes[2] ,ai = nodes[3] ,aj = {id: 'aj', name:'pastor'} ; nodes.push( aj ); links.push( {source: ab , target: af },{source: ab , target: aj },{source: ab , target: ai },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: aj },{source: aa , target: ai },{source: af , target: aj },{source: af , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ab','aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa af al */ var  aa = nodes[0] ,af = nodes[1] ,al = {id: 'al', name:'wilhelm'} ; nodes.push( al ); links.push( {source: aa , target: al },{source: aa , target: af },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab ac af ai aj al */ var  aa = nodes[0] ,ab = {id: 'ab', name:'weiler'},ac = {id: 'ac', name:'andres'},af = nodes[1] ,ai = {id: 'ai', name:'wilkens'},aj = {id: 'aj', name:'pastor'},al = nodes[2]  ; nodes.push( ab,ac,ai,aj ); links.push( {source: af , target: ai },{source: af , target: aj },{source: af , target: al },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: al },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: al },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: al },{source: ai , target: aj },{source: ai , target: al },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'af','ac','aa','ab','ai','aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ah am an ao */ var  ah = {id: 'ah', name:'möller'},am = {id: 'am', name:'frei'},an = {id: 'an', name:'wirt'},ao = {id: 'ao', name:'lindenschmied'} ; nodes.push( ah,am,an,ao ); links.push( {source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: am , target: an },{source: am , target: ao },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ah','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* am ao */ var  am = nodes[0] ,ao = nodes[1]  ; /* nodes.push(); */ links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac am an ao */ var  ac = {id: 'ac', name:'andres'},am = nodes[0] ,an = {id: 'an', name:'wirt'},ao = nodes[1]  ; nodes.push( ac,an ); links.push( {source: ac , target: an },{source: ac , target: am },{source: ac , target: ao },{source: an , target: ao },{source: am , target: an },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac an */ var  ac = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ac','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ae ap */ var  ae = {id: 'ae', name:'robert'},ap = {id: 'ap', name:'kathrine'} ; nodes.push( ae,ap ); links.push( {source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ae ah ak */ var  ae = nodes[0] ,ah = {id: 'ah', name:'möller'},ak = {id: 'ak', name:'buchjäger'} ; nodes.push( ah,ak ); links.push( {source: ae , target: ak },{source: ae , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ae ao */ var  ac = {id: 'ac', name:'andres'},ae = nodes[0] ,ao = {id: 'ao', name:'lindenschmied'} ; nodes.push( ac,ao ); links.push( {source: ae , target: ao },{source: ac , target: ae },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae','ac','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ag aj aq */ var  ag = {id: 'ag', name:'stein'},aj = {id: 'aj', name:'pastor'},aq = {id: 'aq', name:'bastian'} ; nodes.push( ag,aj,aq ); links.push( {source: ag , target: aq },{source: ag , target: aj },{source: aj , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ag ah aj */ var  ag = nodes[0] ,ah = {id: 'ah', name:'möller'},aj = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: aj },{source: ag , target: ah },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ah','ag','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* aa ai */ var  aa = {id: 'aa', name:'försterin'},ai = {id: 'ai', name:'wilkens'} ; nodes.push( aa,ai ); links.push( {source: aa , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* aa ad */ var  aa = nodes[0] ,ad = {id: 'ad', name:'marie'} ; nodes.push( ad ); links.push( {source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* aa ad af */ var  aa = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'förster'} ; nodes.push( af ); links.push( {source: aa , target: af },{source: aa , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* aa af al */ var  aa = nodes[0] ,af = nodes[1] ,al = {id: 'al', name:'wilhelm'} ; nodes.push( al ); links.push( {source: af , target: al },{source: aa , target: af },{source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ad af */ var  aa = nodes[0] ,ad = {id: 'ad', name:'marie'},af = nodes[1]  ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ab af */ var  ab = {id: 'ab', name:'weiler'},af = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa af al */ var  aa = {id: 'aa', name:'försterin'},af = nodes[0] ,al = {id: 'al', name:'wilhelm'} ; nodes.push( aa,al ); links.push( {source: aa , target: al },{source: aa , target: af },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'al','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa al */ var  aa = nodes[0] ,al = {id: 'al', name:'wilhelm'} ; nodes.push( al ); links.push( {source: aa , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aa */ var  aa = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa af */ var  aa = nodes[0] ,af = {id: 'af', name:'förster'} ; nodes.push( af ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* af ag aj */ var  af = nodes[0] ,ag = {id: 'ag', name:'stein'},aj = {id: 'aj', name:'pastor'} ; nodes.push( ag,aj ); links.push( {source: ag , target: aj },{source: af , target: ag },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ac af ag aj */ var  ac = {id: 'ac', name:'andres'},af = nodes[0] ,ag = nodes[1] ,aj = nodes[2]  ; nodes.push( ac ); links.push( {source: ac , target: aj },{source: ac , target: ag },{source: ac , target: af },{source: ag , target: aj },{source: af , target: aj },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* aa ac af ag aj */ var  aa = {id: 'aa', name:'försterin'},ac = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,aj = nodes[3]  ; nodes.push( aa ); links.push( {source: af , target: aj },{source: af , target: ag },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ag },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: aj },{source: aa , target: ag },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* aa ac ae af ag aj */ var  aa = nodes[0] ,ac = nodes[1] ,ae = {id: 'ae', name:'robert'},af = nodes[2] ,ag = nodes[3] ,aj = nodes[4]  ; nodes.push( ae ); links.push( {source: ag , target: aj },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: aj },{source: af , target: ag },{source: af , target: aj },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: aj },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 215000);
