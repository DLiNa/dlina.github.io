setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'zernickow'},ab = {id: 'ab', name:'anna'},ac = {id: 'ac', name:'marie'},ad = {id: 'ad', name:'natalie'},ae = {id: 'ae', name:'emma'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.639344262295081967%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ad ae */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3]  ; /* nodes.push(); */ links.push( {source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ae },{source: ab , target: ad },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.278688524590163934%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'mehlmeyer'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.918032786885245902%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ae af ag */ var  ae = {id: 'ae', name:'emma'},af = nodes[0] ,ag = {id: 'ag', name:'die_wäscherin'} ; nodes.push( ae,ag ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.557377049180327869%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af','ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ah */ var  ah = {id: 'ah', name:'wedelt'} ; nodes.push( ah ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.196721311475409836%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ah */ var  aa = {id: 'aa', name:'zernickow'},ah = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.836065573770491803%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.47540983606557377%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ai aj ak al */ var  ai = {id: 'ai', name:'stresow'},aj = {id: 'aj', name:'lipsky'},ak = {id: 'ak', name:'hempel'},al = {id: 'al', name:'minna'} ; nodes.push( ai,aj,ak,al ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.114754098360655738%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ai','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ak al */ var  ak = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '14.754098360655737705%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ak al am */ var  ak = nodes[0] ,al = nodes[1] ,am = {id: 'am', name:'wilhelm'} ; nodes.push( am ); links.push( {source: al , target: am },{source: ak , target: am },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.393442622950819672%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* al am an */ var  al = nodes[0] ,am = nodes[1] ,an = {id: 'an', name:'leopold'} ; nodes.push( an ); links.push( {source: al , target: an },{source: al , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.032786885245901639%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* al an ao */ var  al = nodes[0] ,an = nodes[1] ,ao = {id: 'ao', name:'clara'} ; nodes.push( ao ); links.push( {source: al , target: ao },{source: al , target: an },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.672131147540983607%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ao','al','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ap */ var  ap = {id: 'ap', name:'rudolf'} ; nodes.push( ap ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.311475409836065574%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* am ap */ var  am = {id: 'am', name:'wilhelm'},ap = nodes[0]  ; nodes.push( am ); links.push( {source: am , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.950819672131147541%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ao ap */ var  ao = {id: 'ao', name:'clara'},ap = nodes[0]  ; nodes.push( ao ); links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.590163934426229508%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ah ao */ var  ah = {id: 'ah', name:'wedelt'},ao = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.229508196721311475%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ah ao ap */ var  ah = nodes[0] ,ao = nodes[1] ,ap = {id: 'ap', name:'rudolf'} ; nodes.push( ap ); links.push( {source: ah , target: ap },{source: ah , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.868852459016393443%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ah an ao ap */ var  ah = nodes[0] ,an = {id: 'an', name:'leopold'},ao = nodes[1] ,ap = nodes[2]  ; nodes.push( an ); links.push( {source: an , target: ap },{source: an , target: ao },{source: ah , target: an },{source: ah , target: ap },{source: ah , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.50819672131147541%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'an','ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af ah */ var  af = {id: 'af', name:'mehlmeyer'},ah = nodes[0]  ; nodes.push( af ); links.push( {source: af , target: ah },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.147540983606557377%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ah al */ var  ah = nodes[0] ,al = {id: 'al', name:'minna'} ; nodes.push( al ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.786885245901639344%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* af ai aj ak al am an */ var  af = {id: 'af', name:'mehlmeyer'},ai = {id: 'ai', name:'stresow'},aj = {id: 'aj', name:'lipsky'},ak = {id: 'ak', name:'hempel'},al = nodes[0] ,am = {id: 'am', name:'wilhelm'},an = {id: 'an', name:'leopold'} ; nodes.push( af,ai,aj,ak,am,an ); links.push( {source: al , target: an },{source: al , target: am },{source: af , target: al },{source: af , target: an },{source: af , target: ak },{source: af , target: ai },{source: af , target: aj },{source: af , target: am },{source: ak , target: al },{source: ak , target: an },{source: ak , target: am },{source: ai , target: al },{source: ai , target: an },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: am },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ak },{source: aj , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.426229508196721311%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'af','an','ak','ai','aj','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* al aq ar */ var  al = nodes[0] ,aq = {id: 'aq', name:'erster_lieferant'},ar = {id: 'ar', name:'zweiter_lieferant'} ; nodes.push( aq,ar ); links.push( {source: al , target: aq },{source: al , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.065573770491803279%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* al */ var  al = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.704918032786885246%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* al as */ var  al = nodes[0] ,as = {id: 'as', name:'krümel'} ; nodes.push( as ); links.push( {source: al , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.344262295081967213%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah al */ var  ah = {id: 'ah', name:'wedelt'},al = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.98360655737704918%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ah al an */ var  ah = nodes[0] ,al = nodes[1] ,an = {id: 'an', name:'leopold'} ; nodes.push( an ); links.push( {source: ah , target: an },{source: ah , target: al },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.622950819672131148%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'an','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ac ae ah */ var  ac = {id: 'ac', name:'marie'},ae = {id: 'ae', name:'emma'},ah = nodes[0]  ; nodes.push( ac,ae ); links.push( {source: ae , target: ah },{source: ac , target: ah },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.262295081967213115%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ac ae ah an */ var  ac = nodes[0] ,ae = nodes[1] ,ah = nodes[2] ,an = {id: 'an', name:'leopold'} ; nodes.push( an ); links.push( {source: ah , target: an },{source: ae , target: an },{source: ae , target: ah },{source: ac , target: an },{source: ac , target: ah },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.901639344262295082%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ac ae ah */ var  ac = nodes[0] ,ae = nodes[1] ,ah = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: ah },{source: ac , target: ae },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.540983606557377049%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ae ah */ var  ae = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.180327868852459016%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ah','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* al */ var  al = {id: 'al', name:'minna'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.819672131147540984%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* al an at */ var  al = nodes[0] ,an = {id: 'an', name:'leopold'},at = {id: 'at', name:'schwalbach'} ; nodes.push( an,at ); links.push( {source: an , target: at },{source: al , target: an },{source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.459016393442622951%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ah al at */ var  ah = {id: 'ah', name:'wedelt'},al = nodes[0] ,at = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: at },{source: ah , target: al },{source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.098360655737704918%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ah an at */ var  ah = nodes[0] ,an = {id: 'an', name:'leopold'},at = nodes[1]  ; nodes.push( an ); links.push( {source: an , target: at },{source: ah , target: an },{source: ah , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.737704918032786885%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'at','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* an */ var  an = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.377049180327868852%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ah au */ var  ah = {id: 'ah', name:'wedelt'},au = {id: 'au', name:'mielisch'} ; nodes.push( ah,au ); links.push( {source: ah , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '15. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.01639344262295082%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* an au */ var  an = {id: 'an', name:'leopold'},au = nodes[0]  ; nodes.push( an ); links.push( {source: an , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '16. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.655737704918032787%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'an','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aa ab ad ae af ao ap av */ var  aa = {id: 'aa', name:'zernickow'},ab = {id: 'ab', name:'anna'},ad = {id: 'ad', name:'natalie'},ae = {id: 'ae', name:'emma'},af = {id: 'af', name:'mehlmeyer'},ao = {id: 'ao', name:'clara'},ap = {id: 'ap', name:'rudolf'},av = {id: 'av', name:'erster_kellner'} ; nodes.push( aa,ab,ad,ae,af,ao,ap,av ); links.push( {source: ap , target: av },{source: ao , target: ap },{source: ao , target: av },{source: aa , target: ap },{source: aa , target: ao },{source: aa , target: ad },{source: aa , target: av },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ae },{source: ad , target: ap },{source: ad , target: ao },{source: ad , target: av },{source: ad , target: af },{source: ad , target: ae },{source: af , target: ap },{source: af , target: ao },{source: af , target: av },{source: ab , target: ap },{source: ab , target: ao },{source: ab , target: ad },{source: ab , target: av },{source: ab , target: af },{source: ab , target: ae },{source: ae , target: ap },{source: ae , target: ao },{source: ae , target: av },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [1]'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.295081967213114754%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'aa','ad','av','af','ab','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ac al ao ap as aw */ var  ac = {id: 'ac', name:'marie'},al = {id: 'al', name:'minna'},ao = nodes[0] ,ap = nodes[1] ,as = {id: 'as', name:'krümel'},aw = {id: 'aw', name:'zweiter_kellner'} ; nodes.push( ac,al,as,aw ); links.push( {source: as , target: aw },{source: ao , target: as },{source: ao , target: aw },{source: ao , target: ap },{source: al , target: as },{source: al , target: aw },{source: al , target: ao },{source: al , target: ap },{source: ap , target: as },{source: ap , target: aw },{source: ac , target: as },{source: ac , target: aw },{source: ac , target: ao },{source: ac , target: al },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [1]'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.934426229508196721%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'as','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* aa ab ac ad ae af ah al ao ap av ax */ var  aa = {id: 'aa', name:'zernickow'},ab = {id: 'ab', name:'anna'},ac = nodes[0] ,ad = {id: 'ad', name:'natalie'},ae = {id: 'ae', name:'emma'},af = {id: 'af', name:'mehlmeyer'},ah = {id: 'ah', name:'wedelt'},al = nodes[1] ,ao = nodes[2] ,ap = nodes[3] ,av = {id: 'av', name:'erster_kellner'},ax = {id: 'ax', name:'schmidt'} ; nodes.push( aa,ab,ad,ae,af,ah,av,ax ); links.push( {source: ah , target: av },{source: ah , target: al },{source: ah , target: ax },{source: ah , target: ao },{source: ah , target: ap },{source: av , target: ax },{source: al , target: av },{source: al , target: ax },{source: al , target: ao },{source: al , target: ap },{source: ao , target: av },{source: ao , target: ax },{source: ao , target: ap },{source: aa , target: ah },{source: aa , target: av },{source: aa , target: al },{source: aa , target: ax },{source: aa , target: ao },{source: aa , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ap },{source: ad , target: ah },{source: ad , target: av },{source: ad , target: al },{source: ad , target: ax },{source: ad , target: ao },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ap },{source: ac , target: ah },{source: ac , target: av },{source: ac , target: al },{source: ac , target: ax },{source: ac , target: ao },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ap },{source: ab , target: ah },{source: ab , target: av },{source: ab , target: al },{source: ab , target: ax },{source: ab , target: ao },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ap },{source: ae , target: ah },{source: ae , target: av },{source: ae , target: al },{source: ae , target: ax },{source: ae , target: ao },{source: ae , target: af },{source: ae , target: ap },{source: af , target: ah },{source: af , target: av },{source: af , target: al },{source: af , target: ax },{source: af , target: ao },{source: af , target: ap },{source: ap , target: av },{source: ap , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [1]'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.573770491803278689%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'av','al','ax','ao','aa','ad','ac','ab','ae','af','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ah as aw */ var  ah = nodes[0] ,as = {id: 'as', name:'krümel'},aw = {id: 'aw', name:'zweiter_kellner'} ; nodes.push( as,aw ); links.push( {source: ah , target: as },{source: ah , target: aw },{source: as , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [1]'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.213114754098360656%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'as','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ah ao ap at */ var  ah = nodes[0] ,ao = {id: 'ao', name:'clara'},ap = {id: 'ap', name:'rudolf'},at = {id: 'at', name:'schwalbach'} ; nodes.push( ao,ap,at ); links.push( {source: ah , target: at },{source: ah , target: ao },{source: ah , target: ap },{source: ao , target: at },{source: ao , target: ap },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [1]'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.852459016393442623%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ah ao ap as aw */ var  ah = nodes[0] ,ao = nodes[1] ,ap = nodes[2] ,as = {id: 'as', name:'krümel'},aw = {id: 'aw', name:'zweiter_kellner'} ; nodes.push( as,aw ); links.push( {source: ah , target: as },{source: ah , target: aw },{source: ah , target: ap },{source: ah , target: ao },{source: as , target: aw },{source: ap , target: as },{source: ap , target: aw },{source: ao , target: as },{source: ao , target: aw },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [1]'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.49180327868852459%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'as','aw','ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ae ah */ var  ae = {id: 'ae', name:'emma'},ah = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.131147540983606557%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ah al */ var  ah = nodes[0] ,al = {id: 'al', name:'minna'} ; nodes.push( al ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.770491803278688525%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.409836065573770492%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ae ah */ var  ae = {id: 'ae', name:'emma'},ah = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.049180327868852459%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ac ao ap ay az */ var  ac = {id: 'ac', name:'marie'},ao = {id: 'ao', name:'clara'},ap = {id: 'ap', name:'rudolf'},ay = {id: 'ay', name:'gottlieb'},az = {id: 'az', name:'carl'} ; nodes.push( ac,ao,ap,ay,az ); links.push( {source: ac , target: ap },{source: ac , target: ao },{source: ac , target: ay },{source: ac , target: az },{source: ap , target: ay },{source: ap , target: az },{source: ao , target: ap },{source: ao , target: ay },{source: ao , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.688524590163934426%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'ac','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ao ap */ var  ao = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.327868852459016393%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ak ao ap ay */ var  ak = {id: 'ak', name:'hempel'},ao = nodes[0] ,ap = nodes[1] ,ay = {id: 'ay', name:'gottlieb'} ; nodes.push( ak,ay ); links.push( {source: ao , target: ay },{source: ao , target: ap },{source: ap , target: ay },{source: ak , target: ay },{source: ak , target: ao },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.967213114754098361%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ay','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ac ao ap */ var  ac = {id: 'ac', name:'marie'},ao = nodes[0] ,ap = nodes[1]  ; nodes.push( ac ); links.push( {source: ao , target: ap },{source: ac , target: ao },{source: ac , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.606557377049180328%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ac af ao ap */ var  ac = nodes[0] ,af = {id: 'af', name:'mehlmeyer'},ao = nodes[1] ,ap = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: ao },{source: af , target: ap },{source: ac , target: af },{source: ac , target: ao },{source: ac , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '85.245901639344262295%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'af','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ao ap */ var  ao = nodes[0] ,ap = nodes[1]  ; /* nodes.push(); */ links.push( {source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.885245901639344262%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ap */ var  ap = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.52459016393442623%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* ae ah ap ay az */ var  ae = {id: 'ae', name:'emma'},ah = {id: 'ah', name:'wedelt'},ap = nodes[0] ,ay = {id: 'ay', name:'gottlieb'},az = {id: 'az', name:'carl'} ; nodes.push( ae,ah,ay,az ); links.push( {source: ae , target: ah },{source: ae , target: ay },{source: ae , target: az },{source: ae , target: ap },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ap },{source: ay , target: az },{source: ap , target: ay },{source: ap , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.163934426229508197%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ae','ah','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* af ap ay */ var  af = {id: 'af', name:'mehlmeyer'},ap = nodes[0] ,ay = nodes[1]  ; nodes.push( af ); links.push( {source: ap , target: ay },{source: af , target: ap },{source: af , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.803278688524590164%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'af','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ah ap */ var  ah = {id: 'ah', name:'wedelt'},ap = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.442622950819672131%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ae af ap */ var  ae = {id: 'ae', name:'emma'},af = {id: 'af', name:'mehlmeyer'},ap = nodes[0]  ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ae , target: ap },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.081967213114754098%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ae af ao ap */ var  ae = nodes[0] ,af = nodes[1] ,ao = {id: 'ao', name:'clara'},ap = nodes[2]  ; nodes.push( ao ); links.push( {source: ao , target: ap },{source: ae , target: ao },{source: ae , target: af },{source: ae , target: ap },{source: af , target: ao },{source: af , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.721311475409836066%' ;
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60');nodes.sort(compare); /* ae af ah ak ao ap */ var  ae = nodes[0] ,af = nodes[1] ,ah = {id: 'ah', name:'wedelt'},ak = {id: 'ak', name:'hempel'},ao = nodes[2] ,ap = nodes[3]  ; nodes.push( ah,ak ); links.push( {source: ak , target: ap },{source: ak , target: ao },{source: ae , target: ak },{source: ae , target: ap },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: ao },{source: af , target: ak },{source: af , target: ap },{source: af , target: ah },{source: af , target: ao },{source: ah , target: ak },{source: ah , target: ap },{source: ah , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung [2]'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.360655737704918033%' ;
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'ak','ae','af','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61');nodes.sort(compare); /* ac ah ap ay */ var  ac = {id: 'ac', name:'marie'},ah = nodes[0] ,ap = nodes[1] ,ay = {id: 'ay', name:'gottlieb'} ; nodes.push( ac,ay ); links.push( {source: ap , target: ay },{source: ah , target: ay },{source: ah , target: ap },{source: ac , target: ay },{source: ac , target: ap },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '14. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 300000);
