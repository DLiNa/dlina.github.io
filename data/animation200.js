setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'dominik'},ab = {id: 'ab', name:'krämer'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.694915254237288136%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ac */ var  aa = nodes[0] ,ac = {id: 'ac', name:'frau_von_erbsenstein'} ; nodes.push( ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.389830508474576271%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'nanett'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.084745762711864407%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ae */ var  ac = nodes[0] ,ae = {id: 'ae', name:'kauz'} ; nodes.push( ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.779661016949152542%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac ad ae af */ var  aa = {id: 'aa', name:'dominik'},ac = nodes[0] ,ad = {id: 'ad', name:'nanett'},ae = nodes[1] ,af = {id: 'af', name:'schnoferl'} ; nodes.push( aa,ad,af ); links.push( {source: ac , target: ae },{source: ac , target: af },{source: ac , target: ad },{source: ae , target: af },{source: ad , target: ae },{source: ad , target: af },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '8.474576271186440678%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac','ad','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.169491525423728814%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ae af ag */ var  ae = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'gigl'} ; nodes.push( ag ); links.push( {source: ae , target: ag },{source: ae , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.864406779661016949%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.559322033898305085%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ae af */ var  ac = {id: 'ac', name:'frau_von_erbsenstein'},ae = {id: 'ae', name:'kauz'},af = nodes[0]  ; nodes.push( ac,ae ); links.push( {source: ae , target: af },{source: ac , target: ae },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.25423728813559322%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac af */ var  ac = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.949152542372881356%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ac ad af */ var  ac = nodes[0] ,ad = {id: 'ad', name:'nanett'},af = nodes[1]  ; nodes.push( ad ); links.push( {source: ad , target: af },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.644067796610169492%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.338983050847457627%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* af ag */ var  af = {id: 'af', name:'schnoferl'},ag = {id: 'ag', name:'gigl'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '22.033898305084745763%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ad ag ah */ var  ad = {id: 'ad', name:'nanett'},ag = nodes[0] ,ah = {id: 'ah', name:'thekla'} ; nodes.push( ad,ah ); links.push( {source: ag , target: ah },{source: ad , target: ag },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.728813559322033898%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = nodes[1]  ; /* nodes.push(); */ links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.423728813559322034%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ae af ag ah */ var  ae = {id: 'ae', name:'kauz'},af = {id: 'af', name:'schnoferl'},ag = nodes[0] ,ah = nodes[1]  ; nodes.push( ae,af ); links.push( {source: ae , target: af },{source: ae , target: ah },{source: ae , target: ag },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.118644067796610169%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ae','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ad ah */ var  ad = {id: 'ad', name:'nanett'},ah = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.813559322033898305%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ae af ag */ var  ae = {id: 'ae', name:'kauz'},af = {id: 'af', name:'schnoferl'},ag = {id: 'ag', name:'gigl'} ; nodes.push( ae,af,ag ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.508474576271186441%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ae af ag */ var  ac = {id: 'ac', name:'frau_von_erbsenstein'},ae = nodes[0] ,af = nodes[1] ,ag = nodes[2]  ; nodes.push( ac ); links.push( {source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.203389830508474576%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ac','ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* af ai */ var  af = nodes[0] ,ai = {id: 'ai', name:'chor_der_gesellschaft'} ; nodes.push( ai ); links.push( {source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.898305084745762712%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ai','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* aj ak al am an */ var  aj = {id: 'aj', name:'knöpfel'},ak = {id: 'ak', name:'madam_storch'},al = {id: 'al', name:'rosalie'},am = {id: 'am', name:'sabine'},an = {id: 'an', name:'peppi'} ; nodes.push( aj,ak,al,am,an ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.593220338983050847%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* af aj ak al am an */ var  af = {id: 'af', name:'schnoferl'},aj = nodes[0] ,ak = nodes[1] ,al = nodes[2] ,am = nodes[3] ,an = nodes[4]  ; nodes.push( af ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: al , target: am },{source: al , target: an },{source: am , target: an },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.288135593220338983%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ak','al','am','an','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '38.983050847457627119%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* al am an */ var  al = {id: 'al', name:'rosalie'},am = {id: 'am', name:'sabine'},an = {id: 'an', name:'peppi'} ; nodes.push( al,am,an ); links.push( {source: al , target: am },{source: al , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40.677966101694915254%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* af ag al am an */ var  af = {id: 'af', name:'schnoferl'},ag = {id: 'ag', name:'gigl'},al = nodes[0] ,am = nodes[1] ,an = nodes[2]  ; nodes.push( af,ag ); links.push( {source: af , target: an },{source: af , target: al },{source: af , target: am },{source: af , target: ag },{source: al , target: an },{source: al , target: am },{source: am , target: an },{source: ag , target: an },{source: ag , target: al },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.37288135593220339%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* af ag aj ak al am */ var  af = nodes[0] ,ag = nodes[1] ,aj = {id: 'aj', name:'knöpfel'},ak = {id: 'ak', name:'madam_storch'},al = nodes[2] ,am = nodes[3]  ; nodes.push( aj,ak ); links.push( {source: ak , target: al },{source: ak , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: af , target: ak },{source: af , target: aj },{source: af , target: ag },{source: af , target: al },{source: af , target: am },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: al },{source: ag , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.067796610169491525%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ae af ag aj ak al am an */ var  ae = {id: 'ae', name:'kauz'},af = nodes[0] ,ag = nodes[1] ,aj = nodes[2] ,ak = nodes[3] ,al = nodes[4] ,am = nodes[5] ,an = {id: 'an', name:'peppi'} ; nodes.push( ae,an ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: an },{source: ae , target: am },{source: ae , target: al },{source: ae , target: aj },{source: af , target: ag },{source: af , target: ak },{source: af , target: an },{source: af , target: am },{source: af , target: al },{source: af , target: aj },{source: ag , target: ak },{source: ag , target: an },{source: ag , target: am },{source: ag , target: al },{source: ag , target: aj },{source: ak , target: an },{source: ak , target: am },{source: ak , target: al },{source: am , target: an },{source: al , target: an },{source: al , target: am },{source: aj , target: ak },{source: aj , target: an },{source: aj , target: am },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.762711864406779661%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ag','ak','an','am','al','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.457627118644067797%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* af ak */ var  af = nodes[0] ,ak = {id: 'ak', name:'madam_storch'} ; nodes.push( ak ); links.push( {source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.152542372881355932%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ae ak al */ var  ae = {id: 'ae', name:'kauz'},ak = nodes[0] ,al = {id: 'al', name:'rosalie'} ; nodes.push( ae,al ); links.push( {source: ae , target: ak },{source: ae , target: al },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.847457627118644068%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ae af ak al */ var  ae = nodes[0] ,af = {id: 'af', name:'schnoferl'},ak = nodes[1] ,al = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: ak },{source: af , target: al },{source: ak , target: al },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.542372881355932203%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ak','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* af al */ var  af = nodes[0] ,al = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.237288135593220339%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ah ak al */ var  ah = {id: 'ah', name:'thekla'},ak = {id: 'ak', name:'madam_storch'},al = nodes[0]  ; nodes.push( ah,ak ); links.push( {source: ak , target: al },{source: ah , target: ak },{source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.932203389830508475%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ag ah */ var  ag = {id: 'ag', name:'gigl'},ah = nodes[0]  ; nodes.push( ag ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.62711864406779661%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* af ag ah */ var  af = {id: 'af', name:'schnoferl'},ag = nodes[0] ,ah = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '59.322033898305084746%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* af ag ah ak al am */ var  af = nodes[0] ,ag = nodes[1] ,ah = nodes[2] ,ak = {id: 'ak', name:'madam_storch'},al = {id: 'al', name:'rosalie'},am = {id: 'am', name:'sabine'} ; nodes.push( ak,al,am ); links.push( {source: al , target: am },{source: af , target: al },{source: af , target: ak },{source: af , target: am },{source: af , target: ah },{source: af , target: ak },{source: af , target: ag },{source: ak , target: al },{source: ak , target: am },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: am },{source: ah , target: ak },{source: ak , target: al },{source: ak , target: am },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: am },{source: ag , target: ah },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '61.016949152542372881%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'am','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ae af ah aj ak al */ var  ae = {id: 'ae', name:'kauz'},af = nodes[0] ,ah = nodes[1] ,aj = {id: 'aj', name:'knöpfel'},ak = nodes[2] ,al = nodes[3]  ; nodes.push( ae,aj ); links.push( {source: ae , target: ak },{source: ae , target: al },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: aj },{source: ak , target: al },{source: af , target: ak },{source: af , target: al },{source: af , target: ah },{source: af , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: aj },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.711864406779661017%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ak','ah','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ae af al an */ var  ae = nodes[0] ,af = nodes[1] ,al = nodes[2] ,an = {id: 'an', name:'peppi'} ; nodes.push( an ); links.push( {source: af , target: an },{source: af , target: al },{source: ae , target: af },{source: ae , target: an },{source: ae , target: al },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.406779661016949153%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ae af aj ak al am an */ var  ae = nodes[0] ,af = nodes[1] ,aj = {id: 'aj', name:'knöpfel'},ak = {id: 'ak', name:'madam_storch'},al = nodes[2] ,am = {id: 'am', name:'sabine'},an = nodes[3]  ; nodes.push( aj,ak,am ); links.push( {source: am , target: an },{source: al , target: am },{source: al , target: an },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: aj , target: ak },{source: ae , target: am },{source: ae , target: al },{source: ae , target: an },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ak },{source: af , target: am },{source: af , target: al },{source: af , target: an },{source: af , target: aj },{source: af , target: ak },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.101694915254237288%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ac ae af ag ah ak al am an */ var  ac = {id: 'ac', name:'frau_von_erbsenstein'},ae = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'gigl'},ah = {id: 'ah', name:'thekla'},ak = nodes[2] ,al = nodes[3] ,am = nodes[4] ,an = nodes[5]  ; nodes.push( ac,ag,ah ); links.push( {source: ac , target: af },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ak },{source: ac , target: an },{source: ac , target: al },{source: ac , target: am },{source: af , target: ag },{source: af , target: ah },{source: af , target: ak },{source: af , target: an },{source: af , target: al },{source: af , target: am },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: an },{source: ag , target: al },{source: ag , target: am },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: an },{source: ae , target: al },{source: ae , target: am },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: al },{source: ah , target: am },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: al , target: an },{source: al , target: am },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.796610169491525424%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ac','af','ag','ae','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* aj ak al am an */ var  aj = {id: 'aj', name:'knöpfel'},ak = nodes[0] ,al = nodes[1] ,am = nodes[2] ,an = nodes[3]  ; nodes.push( aj ); links.push( {source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: am , target: an },{source: al , target: am },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.491525423728813559%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ak','aj','am','al','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa ae */ var  aa = {id: 'aa', name:'dominik'},ae = {id: 'ae', name:'kauz'} ; nodes.push( aa,ae ); links.push( {source: aa , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.186440677966101695%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ae ak al am */ var  ae = nodes[0] ,ak = {id: 'ak', name:'madam_storch'},al = {id: 'al', name:'rosalie'},am = {id: 'am', name:'sabine'} ; nodes.push( ak,al,am ); links.push( {source: ak , target: al },{source: ak , target: am },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.881355932203389831%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ak al am an */ var  ak = nodes[0] ,al = nodes[1] ,am = nodes[2] ,an = {id: 'an', name:'peppi'} ; nodes.push( an ); links.push( {source: am , target: an },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: al , target: am },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.576271186440677966%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'am','ak','al','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ac ae */ var  ac = {id: 'ac', name:'frau_von_erbsenstein'},ae = {id: 'ae', name:'kauz'} ; nodes.push( ac,ae ); links.push( {source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.271186440677966102%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* ae ag */ var  ae = nodes[0] ,ag = {id: 'ag', name:'gigl'} ; nodes.push( ag ); links.push( {source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '77.966101694915254237%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* ae ag ak al am an */ var  ae = nodes[0] ,ag = nodes[1] ,ak = {id: 'ak', name:'madam_storch'},al = {id: 'al', name:'rosalie'},am = {id: 'am', name:'sabine'},an = {id: 'an', name:'peppi'} ; nodes.push( ak,al,am,an ); links.push( {source: am , target: an },{source: al , target: an },{source: al , target: am },{source: ag , target: an },{source: ag , target: am },{source: ag , target: al },{source: ag , target: ak },{source: ak , target: an },{source: ak , target: am },{source: ak , target: al },{source: ae , target: an },{source: ae , target: am },{source: ae , target: al },{source: ae , target: ag },{source: ae , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.661016949152542373%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'al','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ae af ak am an */ var  ae = nodes[0] ,af = {id: 'af', name:'schnoferl'},ak = nodes[1] ,am = nodes[2] ,an = nodes[3]  ; nodes.push( af ); links.push( {source: af , target: ak },{source: af , target: am },{source: af , target: an },{source: ak , target: am },{source: ak , target: an },{source: am , target: an },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: am },{source: ae , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.355932203389830508%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'af','ak','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ae */ var  ae = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.050847457627118644%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ac ae af ak am an */ var  ac = {id: 'ac', name:'frau_von_erbsenstein'},ae = nodes[0] ,af = {id: 'af', name:'schnoferl'},ak = {id: 'ak', name:'madam_storch'},am = {id: 'am', name:'sabine'},an = {id: 'an', name:'peppi'} ; nodes.push( ac,af,ak,am,an ); links.push( {source: ae , target: af },{source: ae , target: am },{source: ae , target: an },{source: ae , target: ak },{source: af , target: am },{source: af , target: an },{source: af , target: ak },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ak },{source: am , target: an },{source: ak , target: am },{source: ak , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.74576271186440678%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ae','am','an','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* ac af ag */ var  ac = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'gigl'} ; nodes.push( ag ); links.push( {source: ac , target: af },{source: ac , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.440677966101694915%' ;
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ac','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52');nodes.sort(compare); /* ah al */ var  ah = {id: 'ah', name:'thekla'},al = {id: 'al', name:'rosalie'} ; nodes.push( ah,al ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.135593220338983051%' ;
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53');nodes.sort(compare); /* ah */ var  ah = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.830508474576271186%' ;
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54');nodes.sort(compare); /* ac af ag ah */ var  ac = {id: 'ac', name:'frau_von_erbsenstein'},af = {id: 'af', name:'schnoferl'},ag = {id: 'ag', name:'gigl'},ah = nodes[0]  ; nodes.push( ac,af,ag ); links.push( {source: ag , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '91.525423728813559322%' ;
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ah','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55');nodes.sort(compare); /* af ag */ var  af = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.220338983050847458%' ;
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechszehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.915254237288135593%' ;
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57');nodes.sort(compare); /* ac af ag ah */ var  ac = {id: 'ac', name:'frau_von_erbsenstein'},af = nodes[0] ,ag = {id: 'ag', name:'gigl'},ah = {id: 'ah', name:'thekla'} ; nodes.push( ac,ag,ah ); links.push( {source: ag , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.610169491525423729%' ;
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58');nodes.sort(compare); /* ac ae af ag ah ak al am an */ var  ac = nodes[0] ,ae = {id: 'ae', name:'kauz'},af = nodes[1] ,ag = nodes[2] ,ah = nodes[3] ,ak = {id: 'ak', name:'madam_storch'},al = {id: 'al', name:'rosalie'},am = {id: 'am', name:'sabine'},an = {id: 'an', name:'peppi'} ; nodes.push( ae,ak,al,am,an ); links.push( {source: ae , target: ak },{source: ae , target: an },{source: ae , target: al },{source: ae , target: am },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ak , target: an },{source: ak , target: al },{source: ak , target: am },{source: al , target: an },{source: al , target: am },{source: am , target: an },{source: af , target: ak },{source: af , target: an },{source: af , target: al },{source: af , target: am },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ak },{source: ag , target: an },{source: ag , target: al },{source: ag , target: am },{source: ag , target: ah },{source: ah , target: ak },{source: ah , target: an },{source: ah , target: al },{source: ah , target: am },{source: ac , target: ae },{source: ac , target: ak },{source: ac , target: an },{source: ac , target: al },{source: ac , target: am },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.305084745762711864%' ;
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'ak','an','al','am','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59');nodes.sort(compare); /* ac ae af */ var  ac = nodes[0] ,ae = nodes[1] ,af = nodes[2]  ; /* nodes.push(); */ links.push( {source: ac , target: af },{source: ac , target: ae },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 290000);
