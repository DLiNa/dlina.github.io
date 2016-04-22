setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'sir_john'},ab = {id: 'ab', name:'liddy'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.325581395348837209%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac */ var  ab = nodes[0] ,ac = {id: 'ac', name:'knabe'} ; nodes.push( ac ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '4.651162790697674419%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'samuel'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.976744186046511628%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ad ae */ var  aa = {id: 'aa', name:'sir_john'},ab = nodes[0] ,ad = nodes[1] ,ae = {id: 'ae', name:'mistriss_smith'} ; nodes.push( aa,ae ); links.push( {source: ad , target: ae },{source: ab , target: ae },{source: ab , target: ad },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.302325581395348837%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.627906976744186047%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'guhli'} ; nodes.push( af ); links.push( {source: ad , target: af },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.953488372093023256%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ag */ var  ad = nodes[0] ,ag = {id: 'ag', name:'der_visitator'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '16.279069767441860465%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ag */ var  ag = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.604651162790697674%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ag ah */ var  ag = nodes[0] ,ah = {id: 'ah', name:'muasffery'} ; nodes.push( ah ); links.push( {source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.930232558139534884%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ag ah ai */ var  ag = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'kaberdar'} ; nodes.push( ai ); links.push( {source: ag , target: ai },{source: ag , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.255813953488372093%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ah ai */ var  ah = nodes[0] ,ai = nodes[1]  ; /* nodes.push(); */ links.push( {source: ah , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.581395348837209302%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae af ah ai */ var  ae = {id: 'ae', name:'mistriss_smith'},af = {id: 'af', name:'guhli'},ah = nodes[0] ,ai = nodes[1]  ; nodes.push( ae,af ); links.push( {source: af , target: ai },{source: af , target: ah },{source: ah , target: ai },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.906976744186046512%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ai','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae af */ var  ae = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '30.232558139534883721%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* af */ var  af = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '32.55813953488372093%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ai */ var  ai = {id: 'ai', name:'kaberdar'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.88372093023255814%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac ai */ var  ac = {id: 'ac', name:'knabe'},ai = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.209302325581395349%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ab ai */ var  ab = {id: 'ab', name:'liddy'},ai = nodes[0]  ; nodes.push( ab ); links.push( {source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.534883720930232558%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.860465116279069767%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ab ad */ var  ab = nodes[0] ,ad = {id: 'ad', name:'samuel'} ; nodes.push( ad ); links.push( {source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.186046511627906977%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ab ad af */ var  ab = nodes[0] ,ad = nodes[1] ,af = {id: 'af', name:'guhli'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '46.511627906976744186%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ab af */ var  ab = nodes[0] ,af = nodes[1]  ; /* nodes.push(); */ links.push( {source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.837209302325581395%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ab af aj */ var  ab = nodes[0] ,af = nodes[1] ,aj = {id: 'aj', name:'jack'} ; nodes.push( aj ); links.push( {source: ab , target: aj },{source: ab , target: af },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.162790697674418605%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ab aj */ var  aa = {id: 'aa', name:'sir_john'},ab = nodes[0] ,aj = nodes[1]  ; nodes.push( aa ); links.push( {source: aa , target: aj },{source: aa , target: ab },{source: ab , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '53.488372093023255814%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* aa ab aj ak */ var  aa = nodes[0] ,ab = nodes[1] ,aj = nodes[2] ,ak = {id: 'ak', name:'robert'} ; nodes.push( ak ); links.push( {source: aa , target: ak },{source: aa , target: ab },{source: aa , target: aj },{source: ab , target: ak },{source: ab , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.813953488372093023%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ak','aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.139534883720930233%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab al */ var  ab = nodes[0] ,al = {id: 'al', name:'fazir'} ; nodes.push( al ); links.push( {source: ab , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.465116279069767442%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab ae aj ak al */ var  ab = nodes[0] ,ae = {id: 'ae', name:'mistriss_smith'},aj = {id: 'aj', name:'jack'},ak = {id: 'ak', name:'robert'},al = nodes[1]  ; nodes.push( ae,aj,ak ); links.push( {source: ae , target: ak },{source: ae , target: al },{source: ae , target: aj },{source: ak , target: al },{source: ab , target: ae },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: aj },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.790697674418604651%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ae','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aj ak al */ var  aj = nodes[0] ,ak = nodes[1] ,al = nodes[2]  ; /* nodes.push(); */ links.push( {source: ak , target: al },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.11627906976744186%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ak','aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* am an */ var  am = {id: 'am', name:'mäster_strussel'},an = {id: 'an', name:'mäster_staff'} ; nodes.push( am,an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '67.44186046511627907%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ag am an */ var  ag = {id: 'ag', name:'der_visitator'},am = nodes[0] ,an = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: am },{source: ag , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '69.767441860465116279%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ad ag am an */ var  ad = {id: 'ad', name:'samuel'},ag = nodes[0] ,am = nodes[1] ,an = nodes[2]  ; nodes.push( ad ); links.push( {source: am , target: an },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ag },{source: ad , target: ag },{source: ag , target: am },{source: ag , target: an },{source: ag , target: am },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.093023255813953488%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ad af ag ai an */ var  ad = nodes[0] ,af = {id: 'af', name:'guhli'},ag = nodes[1] ,ai = {id: 'ai', name:'kaberdar'},an = nodes[2]  ; nodes.push( af,ai ); links.push( {source: ai , target: an },{source: ag , target: ai },{source: ag , target: an },{source: ad , target: ai },{source: ad , target: ag },{source: ad , target: an },{source: ad , target: af },{source: af , target: ai },{source: af , target: ag },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.418604651162790698%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ad af ag ai an */ var  ad = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,ai = nodes[3] ,an = nodes[4]  ; /* nodes.push(); */ links.push( {source: af , target: ai },{source: af , target: an },{source: af , target: ag },{source: ai , target: an },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: an },{source: ad , target: ag },{source: ag , target: ai },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.744186046511627907%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* aa ab ad ae af ag ai an */ var  aa = {id: 'aa', name:'sir_john'},ab = {id: 'ab', name:'liddy'},ad = nodes[0] ,ae = {id: 'ae', name:'mistriss_smith'},af = nodes[1] ,ag = nodes[2] ,ai = nodes[3] ,an = nodes[4]  ; nodes.push( aa,ab,ae ); links.push( {source: ag , target: ai },{source: ag , target: an },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: an },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: an },{source: af , target: ag },{source: af , target: ai },{source: af , target: an },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: an },{source: aa , target: ag },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: an },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.069767441860465116%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* aa ab ad ae af ag ai aj ak an */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,ae = nodes[3] ,af = nodes[4] ,ag = nodes[5] ,ai = nodes[6] ,aj = {id: 'aj', name:'jack'},ak = {id: 'ak', name:'robert'},an = nodes[7]  ; nodes.push( aj,ak ); links.push( {source: af , target: ak },{source: af , target: aj },{source: af , target: ai },{source: af , target: an },{source: af , target: ag },{source: ak , target: an },{source: aj , target: ak },{source: aj , target: an },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: an },{source: ad , target: ae },{source: ad , target: ag },{source: aa , target: af },{source: aa , target: ak },{source: aa , target: aj },{source: aa , target: ad },{source: aa , target: ai },{source: aa , target: ab },{source: aa , target: an },{source: aa , target: ae },{source: aa , target: ag },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: an },{source: ab , target: af },{source: ab , target: ak },{source: ab , target: aj },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: an },{source: ab , target: ae },{source: ab , target: ag },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: an },{source: ae , target: ag },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.395348837209302326%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'aa','ai','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* ad ae af ag aj ak an */ var  ad = nodes[0] ,ae = nodes[1] ,af = nodes[2] ,ag = nodes[3] ,aj = nodes[4] ,ak = nodes[5] ,an = nodes[6]  ; /* nodes.push(); */ links.push( {source: af , target: an },{source: af , target: ag },{source: af , target: ak },{source: af , target: aj },{source: ae , target: af },{source: ae , target: an },{source: ae , target: ag },{source: ae , target: ak },{source: ae , target: aj },{source: ag , target: an },{source: ag , target: ak },{source: ag , target: aj },{source: ak , target: an },{source: aj , target: an },{source: aj , target: ak },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: an },{source: ad , target: ag },{source: ad , target: ak },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '83.720930232558139535%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ae','an','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* af aj ak */ var  af = nodes[0] ,aj = nodes[1] ,ak = nodes[2]  ; /* nodes.push(); */ links.push( {source: aj , target: ak },{source: af , target: aj },{source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.046511627906976744%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* aj ak */ var  aj = nodes[0] ,ak = nodes[1]  ; /* nodes.push(); */ links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.372093023255813953%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* aj ak al */ var  aj = nodes[0] ,ak = nodes[1] ,al = {id: 'al', name:'fazir'} ; nodes.push( al ); links.push( {source: ak , target: al },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.697674418604651163%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* af aj ak al */ var  af = {id: 'af', name:'guhli'},aj = nodes[0] ,ak = nodes[1] ,al = nodes[2]  ; nodes.push( af ); links.push( {source: af , target: al },{source: af , target: ak },{source: af , target: aj },{source: ak , target: al },{source: aj , target: al },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.023255813953488372%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'ak','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* af ah al */ var  af = nodes[0] ,ah = {id: 'ah', name:'muasffery'},al = nodes[1]  ; nodes.push( ah ); links.push( {source: ah , target: al },{source: af , target: ah },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '95.348837209302325581%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* aa ad ae af ah ai aj ak al */ var  aa = {id: 'aa', name:'sir_john'},ad = {id: 'ad', name:'samuel'},ae = {id: 'ae', name:'mistriss_smith'},af = nodes[0] ,ah = nodes[1] ,ai = {id: 'ai', name:'kaberdar'},aj = {id: 'aj', name:'jack'},ak = {id: 'ak', name:'robert'},al = nodes[2]  ; nodes.push( aa,ad,ae,ai,aj,ak ); links.push( {source: ae , target: ai },{source: ae , target: al },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: ak },{source: ae , target: aj },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: aj },{source: af , target: ai },{source: af , target: al },{source: af , target: ah },{source: af , target: ak },{source: af , target: aj },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: aj },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: al },{source: aa , target: af },{source: aa , target: ah },{source: aa , target: ad },{source: aa , target: ak },{source: aa , target: aj },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: al },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ak },{source: ad , target: aj },{source: ak , target: al },{source: aj , target: al },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.674418604651162791%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'ae','aa','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* ab af ah ai aj ak al */ var  ab = {id: 'ab', name:'liddy'},af = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = nodes[5]  ; nodes.push( ab ); links.push( {source: ak , target: al },{source: ab , target: ak },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: al },{source: ab , target: ah },{source: ab , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: aj },{source: af , target: ak },{source: af , target: ai },{source: af , target: al },{source: af , target: ah },{source: af , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: aj },{source: aj , target: ak },{source: aj , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 210000);
