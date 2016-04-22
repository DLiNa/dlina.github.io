setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'gräfin'},ab = {id: 'ab', name:'generalen'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.448275862068965517%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'laura'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '6.896551724137931034%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac ad */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'hauptmaun'} ; nodes.push( ad ); links.push( {source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.344827586206896552%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ae */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ae = {id: 'ae', name:'rieger'} ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ac },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.793103448275862069%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ab ad ae af ag */ var  aa = nodes[0] ,ab = nodes[1] ,ad = {id: 'ad', name:'hauptmaun'},ae = nodes[2] ,af = {id: 'af', name:'herzog'},ag = {id: 'ag', name:'bleistift'} ; nodes.push( ad,af,ag ); links.push( {source: af , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: ag },{source: ad , target: af },{source: ad , target: ae },{source: ad , target: ag },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.241379310344827586%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'laura'},ad = nodes[2] ,ae = nodes[3] ,af = nodes[4] ,ag = nodes[5] ,ah = {id: 'ah', name:'koch'},ai = {id: 'ai', name:'schiller'} ; nodes.push( ac,ah,ai ); links.push( {source: ah , target: ai },{source: aa , target: ah },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ab },{source: aa , target: ad },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: ac , target: ah },{source: ac , target: af },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ad },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: ag },{source: ag , target: ah },{source: ag , target: ai },{source: ab , target: ah },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ad },{source: ad , target: ah },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20.689655172413793103%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah','aa','af','ai','ae','ab','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ac ag */ var  ac = nodes[0] ,ag = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '24.137931034482758621%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ad af ag */ var  ad = {id: 'ad', name:'hauptmaun'},af = {id: 'af', name:'herzog'},ag = nodes[0]  ; nodes.push( ad,af ); links.push( {source: af , target: ag },{source: ad , target: af },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.586206896551724138%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af','ag','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac ah ai */ var  ac = {id: 'ac', name:'laura'},ah = {id: 'ah', name:'koch'},ai = {id: 'ai', name:'schiller'} ; nodes.push( ac,ah,ai ); links.push( {source: ac , target: ai },{source: ac , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.034482758620689655%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ac af ag ah ai aj ak al am an */ var  ac = nodes[0] ,af = {id: 'af', name:'herzog'},ag = {id: 'ag', name:'bleistift'},ah = nodes[1] ,ai = nodes[2] ,aj = {id: 'aj', name:'scharpstetn'},ak = {id: 'ak', name:'hover'},al = {id: 'al', name:'pfeifer'},am = {id: 'am', name:'peter'},an = {id: 'an', name:'nette'} ; nodes.push( af,ag,aj,ak,al,am,an ); links.push( {source: al , target: am },{source: al , target: am },{source: al , target: an },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: ah , target: al },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: am },{source: ah , target: am },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: an },{source: ah , target: aj },{source: ak , target: al },{source: ak , target: am },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: am , target: an },{source: am , target: an },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: am },{source: ai , target: al },{source: ai , target: an },{source: ai , target: aj },{source: al , target: am },{source: al , target: am },{source: al , target: an },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: am },{source: aj , target: al },{source: aj , target: an },{source: ac , target: al },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: ak },{source: ac , target: am },{source: ac , target: am },{source: ac , target: ai },{source: ac , target: al },{source: ac , target: an },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: af , target: al },{source: af , target: aj },{source: af , target: ah },{source: af , target: ak },{source: af , target: am },{source: af , target: am },{source: af , target: ai },{source: af , target: al },{source: af , target: an },{source: af , target: aj },{source: af , target: ag },{source: ag , target: al },{source: ag , target: aj },{source: ag , target: ah },{source: ag , target: ak },{source: ag , target: am },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: an },{source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.482758620689655172%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'al','aj','ak','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ab ac ad af ag ah ai */ var  ab = {id: 'ab', name:'generalen'},ac = nodes[0] ,ad = {id: 'ad', name:'hauptmaun'},af = nodes[1] ,ag = nodes[2] ,ah = nodes[3] ,ai = nodes[4]  ; nodes.push( ab,ad ); links.push( {source: ab , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: ad , target: af },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ag },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ag },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.93103448275862069%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'af','ad','ac','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ah ai aj ak al am */ var  ab = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,aj = {id: 'aj', name:'scharpstetn'},ak = {id: 'ak', name:'hover'},al = {id: 'al', name:'pfeifer'},am = {id: 'am', name:'peter'} ; nodes.push( aj,ak,al,am ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.379310344827586207%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ah ai aj ak al am an */ var  ab = nodes[0] ,ah = nodes[1] ,ai = nodes[2] ,aj = nodes[3] ,ak = nodes[4] ,al = nodes[5] ,am = nodes[6] ,an = {id: 'an', name:'nette'} ; nodes.push( an ); links.push( {source: aj , target: am },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: an },{source: am , target: an },{source: al , target: am },{source: al , target: an },{source: ak , target: am },{source: ak , target: al },{source: ak , target: an },{source: ab , target: aj },{source: ab , target: am },{source: ab , target: al },{source: ab , target: ak },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: an },{source: ah , target: aj },{source: ah , target: am },{source: ah , target: al },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: an },{source: ai , target: aj },{source: ai , target: am },{source: ai , target: al },{source: ai , target: ak },{source: ai , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.827586206896551724%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aj','am','al','ak','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ab ae ah ai */ var  ab = nodes[0] ,ae = {id: 'ae', name:'rieger'},ah = nodes[1] ,ai = nodes[2]  ; nodes.push( ae ); links.push( {source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ae , target: ah },{source: ae , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '48.275862068965517241%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* aa ab ac ae af ag ah ai */ var  aa = {id: 'aa', name:'gräfin'},ab = nodes[0] ,ac = {id: 'ac', name:'laura'},ae = nodes[1] ,af = {id: 'af', name:'herzog'},ag = {id: 'ag', name:'bleistift'},ah = nodes[2] ,ai = nodes[3]  ; nodes.push( aa,ac,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ag },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ag },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ac },{source: ah , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: af },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ag },{source: ac , target: af },{source: ac , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '51.724137931034482759%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aa','ab','ah','ai','ag','af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'hauptmaun'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.172413793103448276%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab ad af */ var  aa = {id: 'aa', name:'gräfin'},ab = {id: 'ab', name:'generalen'},ad = nodes[0] ,af = {id: 'af', name:'herzog'} ; nodes.push( aa,ab,af ); links.push( {source: aa , target: af },{source: aa , target: ab },{source: aa , target: ad },{source: ab , target: af },{source: ab , target: ad },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.620689655172413793%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* aa ab ad af ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ad = nodes[2] ,af = nodes[3] ,ah = {id: 'ah', name:'koch'},ai = {id: 'ai', name:'schiller'} ; nodes.push( ah,ai ); links.push( {source: ad , target: af },{source: ad , target: ai },{source: ad , target: ah },{source: af , target: ai },{source: af , target: ah },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: ah },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.06896551724137931%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ad','af','ab','aa','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ai */ var  ac = {id: 'ac', name:'laura'},ai = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.517241379310344828%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'gräfin'},ab = {id: 'ab', name:'generalen'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.965517241379310345%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad ae af ag */ var  ad = {id: 'ad', name:'hauptmaun'},ae = {id: 'ae', name:'rieger'},af = {id: 'af', name:'herzog'},ag = {id: 'ag', name:'bleistift'} ; nodes.push( ad,ae,af,ag ); links.push( {source: af , target: ag },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.413793103448275862%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ad','ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* aa af */ var  aa = {id: 'aa', name:'gräfin'},af = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '75.862068965517241379%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* aa ab ac af ah ai */ var  aa = nodes[0] ,ab = {id: 'ab', name:'generalen'},ac = {id: 'ac', name:'laura'},af = nodes[1] ,ah = {id: 'ah', name:'koch'},ai = {id: 'ai', name:'schiller'} ; nodes.push( ab,ac,ah,ai ); links.push( {source: ac , target: ai },{source: ac , target: ah },{source: ac , target: af },{source: aa , target: ai },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: af },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: af },{source: ah , target: ai },{source: af , target: ai },{source: af , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '79.310344827586206897%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ac','aa','ab','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ae af ai */ var  ae = {id: 'ae', name:'rieger'},af = nodes[0] ,ai = nodes[1]  ; nodes.push( ae ); links.push( {source: af , target: ai },{source: ae , target: af },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.758620689655172414%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'af','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ah ai */ var  ah = {id: 'ah', name:'koch'},ai = nodes[0]  ; nodes.push( ah ); links.push( {source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.206896551724137931%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab ac ah ai */ var  ab = {id: 'ab', name:'generalen'},ac = {id: 'ac', name:'laura'},ah = nodes[0] ,ai = nodes[1]  ; nodes.push( ab,ac ); links.push( {source: ac , target: ai },{source: ac , target: ah },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ah },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.655172413793103448%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* aa ab ac ai */ var  aa = {id: 'aa', name:'gräfin'},ab = nodes[0] ,ac = nodes[1] ,ai = nodes[2]  ; nodes.push( aa ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ai },{source: ab , target: ac },{source: ac , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '93.103448275862068966%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* aa ab ac ah ai */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ah = {id: 'ah', name:'koch'},ai = nodes[3]  ; nodes.push( ah ); links.push( {source: ah , target: ai },{source: ac , target: ah },{source: ac , target: ai },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ai },{source: aa , target: ah },{source: aa , target: ac },{source: aa , target: ai },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.551724137931034483%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ah','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = {id: 'ad', name:'hauptmaun'},ae = {id: 'ae', name:'rieger'},af = {id: 'af', name:'herzog'} ; nodes.push( ad,ae,af ); links.push( {source: ae , target: af },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: aa , target: ae },{source: aa , target: ab },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ac },{source: ad , target: ae },{source: ad , target: af },{source: ac , target: ae },{source: ac , target: ad },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Szene'; var act = document.getElementById('act');act.innerHTML = 'noName'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte und letzte Szene.';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 140000);
