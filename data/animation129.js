setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'schön'},ab = {id: 'ab', name:'anna'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'hutterer'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = nodes[1]  ; /* nodes.push(); */ links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'hutterer'},ad = {id: 'ad', name:'sidonie'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = {id: 'ae', name:'frey'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ad ae af */ var  ac = nodes[0] ,ad = {id: 'ad', name:'sidonie'},ae = nodes[1] ,af = {id: 'af', name:'herwig'} ; nodes.push( ad,af ); links.push( {source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'hutterer'},ae = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ab ac ag */ var  aa = {id: 'aa', name:'schön'},ab = {id: 'ab', name:'anna'},ac = nodes[0] ,ag = {id: 'ag', name:'eduard'} ; nodes.push( aa,ab,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ag },{source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa','ab','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ah ai aj */ var  ah = {id: 'ah', name:'barbara'},ai = {id: 'ai', name:'johann'},aj = {id: 'aj', name:'michel'} ; nodes.push( ah,ai,aj ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ah ai ak al */ var  ah = nodes[0] ,ai = nodes[1] ,ak = {id: 'ak', name:'josepha'},al = {id: 'al', name:'stölzenthaler'} ; nodes.push( ak,al ); links.push( {source: ah , target: ak },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: al },{source: ak , target: al },{source: ak , target: al },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ah ai ak */ var  ah = nodes[0] ,ai = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: ah , target: ak },{source: ah , target: ai },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ah ai ak am an */ var  ah = nodes[0] ,ai = nodes[1] ,ak = nodes[2] ,am = {id: 'am', name:'schalanter'},an = {id: 'an', name:'martin'} ; nodes.push( am,an ); links.push( {source: am , target: an },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: ak },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ak },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* af ak am an */ var  af = {id: 'af', name:'herwig'},ak = nodes[0] ,am = nodes[1] ,an = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: am },{source: af , target: an },{source: af , target: ak },{source: am , target: an },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'af','an','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ah am */ var  ah = {id: 'ah', name:'barbara'},am = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnte Szene';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'am','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab ag */ var  aa = {id: 'aa', name:'schön'},ab = {id: 'ab', name:'anna'},ag = {id: 'ag', name:'eduard'} ; nodes.push( aa,ab,ag ); links.push( {source: ab , target: ag },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aa','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab ao */ var  ab = nodes[0] ,ao = {id: 'ao', name:'beller'} ; nodes.push( ao ); links.push( {source: ab , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* aa ab ag am an */ var  aa = {id: 'aa', name:'schön'},ab = nodes[0] ,ag = {id: 'ag', name:'eduard'},am = {id: 'am', name:'schalanter'},an = {id: 'an', name:'martin'} ; nodes.push( aa,ag,am,an ); links.push( {source: aa , target: ab },{source: aa , target: am },{source: aa , target: an },{source: aa , target: ag },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ag },{source: am , target: an },{source: ag , target: am },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aa','ab','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* am an */ var  am = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'frey'},af = {id: 'af', name:'herwig'} ; nodes.push( ae,af ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* am an */ var  am = {id: 'am', name:'schalanter'},an = {id: 'an', name:'martin'} ; nodes.push( am,an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* al am an ap */ var  al = {id: 'al', name:'stölzenthaler'},am = nodes[0] ,an = nodes[1] ,ap = {id: 'ap', name:'höller'} ; nodes.push( al,ap ); links.push( {source: al , target: ap },{source: al , target: am },{source: al , target: an },{source: am , target: ap },{source: am , target: an },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ap','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ah ak am an aq ar */ var  ah = {id: 'ah', name:'barbara'},ak = {id: 'ak', name:'josepha'},am = nodes[0] ,an = nodes[1] ,aq = {id: 'aq', name:'stötzl'},ar = {id: 'ar', name:'katscher'} ; nodes.push( ah,ak,aq,ar ); links.push( {source: ah , target: aq },{source: ah , target: ar },{source: ah , target: am },{source: ah , target: ak },{source: ah , target: an },{source: aq , target: ar },{source: am , target: aq },{source: am , target: ar },{source: am , target: an },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: am },{source: ak , target: an },{source: an , target: aq },{source: an , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ah','aq','ar','am','ak','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* af al */ var  af = {id: 'af', name:'herwig'},al = {id: 'al', name:'stölzenthaler'} ; nodes.push( af,al ); links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* af as */ var  af = nodes[0] ,as = {id: 'as', name:'resi'} ; nodes.push( as ); links.push( {source: af , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ad al as */ var  ac = {id: 'ac', name:'hutterer'},ad = {id: 'ad', name:'sidonie'},al = {id: 'al', name:'stölzenthaler'},as = nodes[0]  ; nodes.push( ac,ad,al ); links.push( {source: al , target: as },{source: ad , target: al },{source: ad , target: as },{source: ac , target: al },{source: ac , target: as },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'al','as','ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae ai at au av */ var  ae = {id: 'ae', name:'frey'},ai = {id: 'ai', name:'johann'},at = {id: 'at', name:'berger'},au = {id: 'au', name:'minna'},av = {id: 'av', name:'stille'} ; nodes.push( ae,ai,at,au,av ); links.push( {source: at , target: au },{source: at , target: av },{source: au , target: av },{source: ae , target: at },{source: ae , target: au },{source: ae , target: av },{source: ae , target: ai },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'at','au','ae','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ah ai am aw */ var  ah = {id: 'ah', name:'barbara'},ai = nodes[0] ,am = {id: 'am', name:'schalanter'},aw = {id: 'aw', name:'mostinger'} ; nodes.push( ah,am,aw ); links.push( {source: am , target: aw },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: aw },{source: ai , target: am },{source: ai , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ah ai ak am aq ar aw ax */ var  ah = nodes[0] ,ai = nodes[1] ,ak = {id: 'ak', name:'josepha'},am = nodes[2] ,aq = {id: 'aq', name:'stötzl'},ar = {id: 'ar', name:'katscher'},aw = nodes[3] ,ax = {id: 'ax', name:'sedlberger'} ; nodes.push( ak,aq,ar,ax ); links.push( {source: ah , target: ak },{source: ah , target: ai },{source: ah , target: ar },{source: ah , target: aw },{source: ah , target: am },{source: ah , target: aq },{source: ah , target: ax },{source: ak , target: ar },{source: ak , target: aw },{source: ak , target: am },{source: ak , target: aq },{source: ak , target: ax },{source: ai , target: ak },{source: ai , target: ar },{source: ai , target: aw },{source: ai , target: am },{source: ai , target: aq },{source: ai , target: ax },{source: ar , target: aw },{source: ar , target: ax },{source: aw , target: ax },{source: am , target: ar },{source: am , target: aw },{source: am , target: aq },{source: am , target: ax },{source: aq , target: ar },{source: aq , target: aw },{source: aq , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ai','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae ah ak am an aq aw ax */ var  ae = {id: 'ae', name:'frey'},ah = nodes[0] ,ak = nodes[1] ,am = nodes[2] ,an = {id: 'an', name:'martin'},aq = nodes[3] ,aw = nodes[4] ,ax = nodes[5]  ; nodes.push( ae,an ); links.push( {source: am , target: aw },{source: am , target: an },{source: am , target: ax },{source: am , target: aq },{source: ae , target: am },{source: ae , target: aw },{source: ae , target: ah },{source: ae , target: an },{source: ae , target: ax },{source: ae , target: aq },{source: ae , target: ak },{source: aw , target: ax },{source: ah , target: am },{source: ah , target: aw },{source: ah , target: an },{source: ah , target: ax },{source: ah , target: aq },{source: ah , target: ak },{source: an , target: aw },{source: an , target: ax },{source: an , target: aq },{source: aq , target: aw },{source: aq , target: ax },{source: ak , target: am },{source: ak , target: aw },{source: ak , target: an },{source: ak , target: ax },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'am','ae','aw','ah','an','ax','aq','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'herwig'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* af ak an */ var  af = nodes[0] ,ak = {id: 'ak', name:'josepha'},an = {id: 'an', name:'martin'} ; nodes.push( ak,an ); links.push( {source: ak , target: an },{source: af , target: ak },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ak an ay */ var  ak = nodes[0] ,an = nodes[1] ,ay = {id: 'ay', name:'tomerl'} ; nodes.push( ay ); links.push( {source: ak , target: ay },{source: ak , target: an },{source: an , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ay','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ad ae af an az ba bb bc */ var  ad = {id: 'ad', name:'sidonie'},ae = {id: 'ae', name:'frey'},af = {id: 'af', name:'herwig'},an = nodes[0] ,az = {id: 'az', name:'kraft'},ba = {id: 'ba', name:'werner'},bb = {id: 'bb', name:'seeburger'},bc = {id: 'bc', name:'stöber'} ; nodes.push( ad,ae,af,az,ba,bb,bc ); links.push( {source: az , target: ba },{source: az , target: bb },{source: az , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: ae , target: az },{source: ae , target: ba },{source: ae , target: bb },{source: ae , target: af },{source: ae , target: bc },{source: ae , target: an },{source: bb , target: bc },{source: af , target: az },{source: af , target: ba },{source: af , target: bb },{source: af , target: bc },{source: af , target: an },{source: ad , target: az },{source: ad , target: ba },{source: ad , target: ae },{source: ad , target: bb },{source: ad , target: af },{source: ad , target: bc },{source: ad , target: an },{source: an , target: az },{source: an , target: ba },{source: an , target: bb },{source: an , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'az','ba','ae','bb','af','ad','bc','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* aa ab ag */ var  aa = {id: 'aa', name:'schön'},ab = {id: 'ab', name:'anna'},ag = {id: 'ag', name:'eduard'} ; nodes.push( aa,ab,ag ); links.push( {source: aa , target: ag },{source: aa , target: ab },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* aa ab ah ak am */ var  aa = nodes[0] ,ab = nodes[1] ,ah = {id: 'ah', name:'barbara'},ak = {id: 'ak', name:'josepha'},am = {id: 'am', name:'schalanter'} ; nodes.push( ah,ak,am ); links.push( {source: ak , target: am },{source: aa , target: ak },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: am },{source: ab , target: ak },{source: ab , target: ah },{source: ab , target: am },{source: ah , target: ak },{source: ah , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ab','ah','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ac ad af ag ak */ var  aa = nodes[0] ,ac = {id: 'ac', name:'hutterer'},ad = {id: 'ad', name:'sidonie'},af = {id: 'af', name:'herwig'},ag = {id: 'ag', name:'eduard'},ak = nodes[1]  ; nodes.push( ac,ad,af,ag ); links.push( {source: ac , target: ak },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ag , target: ak },{source: af , target: ak },{source: af , target: ag },{source: ad , target: ak },{source: ad , target: ag },{source: ad , target: af },{source: aa , target: ac },{source: aa , target: ak },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'ac','ak','af','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ag an bd */ var  ag = nodes[0] ,an = {id: 'an', name:'martin'},bd = {id: 'bd', name:'atzwanger'} ; nodes.push( an,bd ); links.push( {source: an , target: bd },{source: ag , target: bd },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* af ag an bd */ var  af = {id: 'af', name:'herwig'},ag = nodes[0] ,an = nodes[1] ,bd = nodes[2]  ; nodes.push( af ); links.push( {source: an , target: bd },{source: af , target: bd },{source: af , target: an },{source: af , target: ag },{source: ag , target: bd },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
}, 195000);
