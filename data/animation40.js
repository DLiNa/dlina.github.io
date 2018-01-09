setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'wendla'},ab = {id: 'ab', name:'frau_bergmann'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.263157894736842105%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac ad ae af ag ah */ var  ac = {id: 'ac', name:'melchior'},ad = {id: 'ad', name:'otto'},ae = {id: 'ae', name:'moritz_stiefel'},af = {id: 'af', name:'georg'},ag = {id: 'ag', name:'robert'},ah = {id: 'ah', name:'ernst'} ; nodes.push( ac,ad,ae,af,ag,ah ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.526315789473684211%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','ae','af','ag','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ai aj */ var  aa = {id: 'aa', name:'wendla'},ai = {id: 'ai', name:'martha'},aj = {id: 'aj', name:'thea'} ; nodes.push( aa,ai,aj ); links.push( {source: ai , target: aj },{source: aa , target: ai },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.789473684210526316%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ai','aa','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ac ad ae af ag ak al am an */ var  ac = {id: 'ac', name:'melchior'},ad = {id: 'ad', name:'otto'},ae = {id: 'ae', name:'moritz_stiefel'},af = {id: 'af', name:'georg'},ag = {id: 'ag', name:'robert'},ak = {id: 'ak', name:'lämmermeier'},al = {id: 'al', name:'hänschen'},am = {id: 'am', name:'professor_knochenbruch'},an = {id: 'an', name:'hungergurt'} ; nodes.push( ac,ad,ae,af,ag,ak,al,am,an ); links.push( {source: ac , target: af },{source: ac , target: ad },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: al },{source: ac , target: ae },{source: ac , target: am },{source: ac , target: an },{source: af , target: ak },{source: af , target: ag },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: ad , target: af },{source: ad , target: ak },{source: ad , target: ag },{source: ad , target: al },{source: ad , target: ae },{source: ad , target: am },{source: ad , target: an },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: al , target: am },{source: al , target: an },{source: ae , target: af },{source: ae , target: ak },{source: ae , target: ag },{source: ae , target: al },{source: ae , target: am },{source: ae , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.052631578947368421%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'af','ad','ak','ag','al','ae','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'wendla'},ac = nodes[0]  ; nodes.push( aa ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.315789473684210526%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ac ae ao */ var  ac = nodes[0] ,ae = {id: 'ae', name:'moritz_stiefel'},ao = {id: 'ao', name:'frau_gabor'} ; nodes.push( ae,ao ); links.push( {source: ae , target: ao },{source: ac , target: ae },{source: ac , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.578947368421052632%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ae','ac','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'wendla'},ab = {id: 'ab', name:'frau_bergmann'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.842105263157894737%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* al */ var  al = {id: 'al', name:'hänschen'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.105263157894736842%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* aa ac */ var  aa = {id: 'aa', name:'wendla'},ac = {id: 'ac', name:'melchior'} ; nodes.push( aa,ac ); links.push( {source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.368421052631578947%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aa','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ao */ var  ao = {id: 'ao', name:'frau_gabor'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.631578947368421053%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'wendla'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.894736842105263158%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ae ap */ var  ae = {id: 'ae', name:'moritz_stiefel'},ap = {id: 'ap', name:'ilse'} ; nodes.push( ae,ap ); links.push( {source: ae , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.157894736842105263%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ae','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ac an aq ar as at au */ var  ac = {id: 'ac', name:'melchior'},an = {id: 'an', name:'hungergurt'},aq = {id: 'aq', name:'rektor_sonnenstich'},ar = {id: 'ar', name:'knüppeldick'},as = {id: 'as', name:'zungenschlag'},at = {id: 'at', name:'habebald'},au = {id: 'au', name:'fliegentod'} ; nodes.push( ac,an,aq,ar,as,at,au ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: as , target: at },{source: as , target: au },{source: at , target: au },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.421052631578947368%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ar','as','at','au','an','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ad af ag ah ai al am ap aq av aw ax ay */ var  ad = {id: 'ad', name:'otto'},af = {id: 'af', name:'georg'},ag = {id: 'ag', name:'robert'},ah = {id: 'ah', name:'ernst'},ai = {id: 'ai', name:'martha'},al = {id: 'al', name:'hänschen'},am = {id: 'am', name:'professor_knochenbruch'},ap = {id: 'ap', name:'ilse'},aq = nodes[0] ,av = {id: 'av', name:'pastor_kahlbauch'},aw = {id: 'aw', name:'rentier_stiefel'},ax = {id: 'ax', name:'onkel_probst'},ay = {id: 'ay', name:'freund_ziegenmelker'} ; nodes.push( ad,af,ag,ah,ai,al,am,ap,av,aw,ax,ay ); links.push( {source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: aq , target: av },{source: aq , target: aw },{source: aq , target: ax },{source: aq , target: ay },{source: am , target: av },{source: am , target: aw },{source: am , target: aq },{source: am , target: ax },{source: am , target: ay },{source: am , target: ap },{source: ax , target: ay },{source: al , target: av },{source: al , target: aw },{source: al , target: aq },{source: al , target: am },{source: al , target: ax },{source: al , target: ay },{source: al , target: ap },{source: af , target: av },{source: af , target: aw },{source: af , target: aq },{source: af , target: am },{source: af , target: ax },{source: af , target: ay },{source: af , target: al },{source: af , target: ag },{source: af , target: ah },{source: af , target: ap },{source: af , target: ai },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: aq },{source: ag , target: am },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: al },{source: ag , target: ah },{source: ag , target: ap },{source: ag , target: ai },{source: ah , target: av },{source: ah , target: aw },{source: ah , target: aq },{source: ah , target: am },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: al },{source: ah , target: ap },{source: ah , target: ai },{source: ad , target: av },{source: ad , target: aw },{source: ad , target: aq },{source: ad , target: am },{source: ad , target: ax },{source: ad , target: ay },{source: ad , target: al },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ap },{source: ad , target: ai },{source: ap , target: av },{source: ap , target: aw },{source: ap , target: aq },{source: ap , target: ax },{source: ap , target: ay },{source: ai , target: av },{source: ai , target: aw },{source: ai , target: aq },{source: ai , target: am },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: al },{source: ai , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.684210526315789474%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'av','aw','aq','am','ax','ay','al','af','ag','ah','ad','ap','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ao az */ var  ao = {id: 'ao', name:'frau_gabor'},az = {id: 'az', name:'herr_gabor'} ; nodes.push( ao,az ); links.push( {source: ao , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.947368421052631579%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ao','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ac ba bb bc bd be bf bg */ var  ac = {id: 'ac', name:'melchior'},ba = {id: 'ba', name:'diethelm'},bb = {id: 'bb', name:'reinhold'},bc = {id: 'bc', name:'ruprecht'},bd = {id: 'bd', name:'helmuth'},be = {id: 'be', name:'gaston'},bf = {id: 'bf', name:'dr'},bg = {id: 'bg', name:'der_schlossermeister'} ; nodes.push( ac,ba,bb,bc,bd,be,bf,bg ); links.push( {source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: be },{source: ba , target: bf },{source: ba , target: bg },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: bf },{source: bb , target: bg },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bg },{source: ac , target: ba },{source: ac , target: bb },{source: ac , target: bc },{source: ac , target: bd },{source: ac , target: be },{source: ac , target: bf },{source: ac , target: bg },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: be , target: bf },{source: be , target: bg },{source: bf , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.210526315789473684%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ba','bb','bc','ac','bd','be','bf','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* aa ab bh bj */ var  aa = {id: 'aa', name:'wendla'},ab = {id: 'ab', name:'frau_bergmann'},bh = {id: 'bh', name:'ina'},bj = {id: 'bj', name:'dr_brausepulver'} ; nodes.push( aa,ab,bh,bj ); links.push( {source: aa , target: bj },{source: aa , target: ab },{source: aa , target: bh },{source: ab , target: bj },{source: ab , target: bh },{source: bh , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.473684210526315789%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'bj','aa','ab','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ah al */ var  ah = {id: 'ah', name:'ernst'},al = {id: 'al', name:'hänschen'} ; nodes.push( ah,al ); links.push( {source: ah , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.736842105263157895%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ah','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ac ae bi */ var  ac = {id: 'ac', name:'melchior'},ae = {id: 'ae', name:'moritz_stiefel'},bi = {id: 'bi', name:'der_vermummte_herr'} ; nodes.push( ac,ae,bi ); links.push( {source: ac , target: ae },{source: ac , target: ae },{source: ac , target: bi },{source: ae , target: bi },{source: ae , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 90000);
