setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae */ var  aa = {id: 'aa', name:'resi'},ab = {id: 'ab', name:'leopold'},ac = {id: 'ac', name:'loidl'},ad = {id: 'ad', name:'piccolo'},ae = {id: 'ae', name:'kracher'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '2.631578947368421053%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ad','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ab ac af */ var  ab = nodes[0] ,ac = nodes[1] ,af = {id: 'af', name:'josepha'} ; nodes.push( af ); links.push( {source: ab , target: af },{source: ab , target: ac },{source: ac , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.263157894736842105%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ac ad af ag ah ai aj ak al am an ao ap aq ar as at au av aw ax ay az ba */ var  ab = nodes[0] ,ac = nodes[1] ,ad = {id: 'ad', name:'piccolo'},af = nodes[2] ,ag = {id: 'ag', name:'franz'},ah = {id: 'ah', name:'mirzl'},ai = {id: 'ai', name:'kapitän'},aj = {id: 'aj', name:'bootsmann'},ak = {id: 'ak', name:'erster_portier'},al = {id: 'al', name:'zweiter_portier'},am = {id: 'am', name:'dritter_portier'},an = {id: 'an', name:'eine_dame'},ao = {id: 'ao', name:'bäuerin'},ap = {id: 'ap', name:'sepp'},aq = {id: 'aq', name:'bauernjunge'},ar = {id: 'ar', name:'vierter_portier'},as = {id: 'as', name:'reitender'},at = {id: 'at', name:'hochtourist'},au = {id: 'au', name:'bernbacher'},av = {id: 'av', name:'emmy'},aw = {id: 'aw', name:'melanie'},ax = {id: 'ax', name:'rätin_schmidt'},ay = {id: 'ay', name:'giesecke'},az = {id: 'az', name:'charlotte'},ba = {id: 'ba', name:'ottilie'} ; nodes.push( ad,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: am },{source: ad , target: an },{source: ad , target: ao },{source: ad , target: ap },{source: ad , target: aq },{source: ad , target: ar },{source: ad , target: as },{source: ad , target: as },{source: ad , target: as },{source: ad , target: at },{source: ad , target: au },{source: ad , target: av },{source: ad , target: au },{source: ad , target: aw },{source: ad , target: aw },{source: ad , target: ax },{source: ad , target: ay },{source: ad , target: az },{source: ad , target: ba },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: af , target: an },{source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: af , target: ar },{source: af , target: as },{source: af , target: as },{source: af , target: as },{source: af , target: at },{source: af , target: au },{source: af , target: av },{source: af , target: au },{source: af , target: aw },{source: af , target: aw },{source: af , target: ax },{source: af , target: ay },{source: af , target: az },{source: af , target: ba },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: as },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ac , target: au },{source: ac , target: aw },{source: ac , target: aw },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: az },{source: ac , target: ba },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: am },{source: ab , target: an },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: as },{source: ab , target: as },{source: ab , target: at },{source: ab , target: au },{source: ab , target: av },{source: ab , target: au },{source: ab , target: aw },{source: ab , target: aw },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: az },{source: ab , target: ba },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: as },{source: ag , target: as },{source: ag , target: as },{source: ag , target: at },{source: ag , target: au },{source: ag , target: av },{source: ag , target: au },{source: ag , target: aw },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: az },{source: ag , target: ba },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: as },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: av },{source: ah , target: au },{source: ah , target: aw },{source: ah , target: aw },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ba },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: as },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av },{source: ai , target: au },{source: ai , target: aw },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: az },{source: ai , target: ba },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: as },{source: aj , target: as },{source: aj , target: at },{source: aj , target: au },{source: aj , target: av },{source: aj , target: au },{source: aj , target: aw },{source: aj , target: aw },{source: aj , target: ax },{source: aj , target: ay },{source: aj , target: az },{source: aj , target: ba },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: as },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: ak , target: au },{source: ak , target: aw },{source: ak , target: aw },{source: ak , target: ax },{source: ak , target: ay },{source: ak , target: az },{source: ak , target: ba },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: as },{source: al , target: as },{source: al , target: at },{source: al , target: au },{source: al , target: av },{source: al , target: au },{source: al , target: aw },{source: al , target: aw },{source: al , target: ax },{source: al , target: ay },{source: al , target: az },{source: al , target: ba },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: am , target: as },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: am , target: av },{source: am , target: au },{source: am , target: aw },{source: am , target: aw },{source: am , target: ax },{source: am , target: ay },{source: am , target: az },{source: am , target: ba },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: as },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: av },{source: an , target: au },{source: an , target: aw },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: an , target: az },{source: an , target: ba },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: as },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: av },{source: ao , target: au },{source: ao , target: aw },{source: ao , target: aw },{source: ao , target: ax },{source: ao , target: ay },{source: ao , target: az },{source: ao , target: ba },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: as },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: au },{source: ap , target: aw },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: az },{source: ap , target: ba },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: as },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: au },{source: aq , target: aw },{source: aq , target: aw },{source: aq , target: ax },{source: aq , target: ay },{source: aq , target: az },{source: aq , target: ba },{source: ar , target: as },{source: ar , target: as },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: au },{source: ar , target: aw },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: ay },{source: ar , target: az },{source: ar , target: ba },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: au },{source: as , target: aw },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: au },{source: as , target: aw },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: au },{source: as , target: aw },{source: as , target: aw },{source: as , target: ax },{source: as , target: ay },{source: as , target: az },{source: as , target: ba },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: at , target: aw },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay },{source: at , target: az },{source: at , target: ba },{source: au , target: av },{source: au , target: aw },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: av , target: aw },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: av , target: ba },{source: au , target: av },{source: au , target: aw },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: au , target: az },{source: au , target: ba },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: ba },{source: ax , target: ay },{source: ax , target: az },{source: ax , target: ba },{source: ay , target: az },{source: ay , target: ba },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.894736842105263158%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'af','ai','aj','ak','al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab ac ad ag ah ay az ba */ var  ab = nodes[0] ,ac = nodes[1] ,ad = nodes[2] ,ag = nodes[3] ,ah = nodes[4] ,ay = nodes[5] ,az = nodes[6] ,ba = nodes[7]  ; /* nodes.push(); */ links.push( {source: ay , target: az },{source: ay , target: ba },{source: ab , target: ay },{source: ab , target: az },{source: ab , target: ba },{source: ab , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ag },{source: az , target: ba },{source: ah , target: ay },{source: ah , target: az },{source: ah , target: ba },{source: ac , target: ay },{source: ac , target: az },{source: ac , target: ba },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ag },{source: ad , target: ay },{source: ad , target: az },{source: ad , target: ba },{source: ad , target: ah },{source: ad , target: ag },{source: ag , target: ay },{source: ag , target: az },{source: ag , target: ba },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '10.526315789473684211%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','ah','ac','ad','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ay az ba */ var  ay = nodes[0] ,az = nodes[1] ,ba = nodes[2]  ; /* nodes.push(); */ links.push( {source: ay , target: ba },{source: ay , target: az },{source: az , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.157894736842105263%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ba','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* aa ab ad ag ay */ var  aa = {id: 'aa', name:'resi'},ab = {id: 'ab', name:'leopold'},ad = {id: 'ad', name:'piccolo'},ag = {id: 'ag', name:'franz'},ay = nodes[0]  ; nodes.push( aa,ab,ad,ag ); links.push( {source: ad , target: ay },{source: ad , target: ag },{source: ab , target: ay },{source: ab , target: ad },{source: ab , target: ag },{source: ag , target: ay },{source: aa , target: ay },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.789473684210526316%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ay','ad','ab','ag','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* af bb */ var  af = {id: 'af', name:'josepha'},bb = {id: 'bb', name:'siedler'} ; nodes.push( af,bb ); links.push( {source: af , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '18.421052631578947368%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ab af ay az bb bi bj */ var  ab = {id: 'ab', name:'leopold'},af = nodes[0] ,ay = {id: 'ay', name:'giesecke'},az = {id: 'az', name:'charlotte'},bb = nodes[1] ,bi = {id: 'bi', name:'joseph'},bj = {id: 'bj', name:'martin'} ; nodes.push( ab,ay,az,bi,bj ); links.push( {source: ay , target: bb },{source: ay , target: bi },{source: ay , target: bj },{source: ay , target: az },{source: bb , target: bi },{source: bb , target: bj },{source: af , target: ay },{source: af , target: bb },{source: af , target: bi },{source: af , target: bj },{source: af , target: az },{source: ab , target: ay },{source: ab , target: bb },{source: ab , target: af },{source: ab , target: bi },{source: ab , target: bj },{source: ab , target: az },{source: bi , target: bj },{source: az , target: bb },{source: az , target: bi },{source: az , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.052631578947368421%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ab','bi','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* af ay az ba bb */ var  af = nodes[0] ,ay = nodes[1] ,az = nodes[2] ,ba = {id: 'ba', name:'ottilie'},bb = nodes[3]  ; nodes.push( ba ); links.push( {source: ba , target: bb },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: az },{source: az , target: ba },{source: az , target: bb },{source: af , target: ba },{source: af , target: ay },{source: af , target: bb },{source: af , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.684210526315789474%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ay','az','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ba bb */ var  ba = nodes[0] ,bb = nodes[1]  ; /* nodes.push(); */ links.push( {source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '26.315789473684210526%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* af ay az ba */ var  af = {id: 'af', name:'josepha'},ay = {id: 'ay', name:'giesecke'},az = {id: 'az', name:'charlotte'},ba = nodes[0]  ; nodes.push( af,ay,az ); links.push( {source: ay , target: az },{source: ay , target: ba },{source: az , target: ba },{source: af , target: ay },{source: af , target: az },{source: af , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '28.947368421052631579%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ay','az','ba','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ab ah */ var  ab = {id: 'ab', name:'leopold'},ah = {id: 'ah', name:'mirzl'} ; nodes.push( ab,ah ); links.push( {source: ab , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.578947368421052632%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ab ad af ah bc */ var  ab = nodes[0] ,ad = {id: 'ad', name:'piccolo'},af = {id: 'af', name:'josepha'},ah = nodes[1] ,bc = {id: 'bc', name:'mali'} ; nodes.push( ad,af,bc ); links.push( {source: af , target: bc },{source: af , target: ah },{source: ab , target: af },{source: ab , target: bc },{source: ab , target: ah },{source: ab , target: ad },{source: ah , target: bc },{source: ad , target: af },{source: ad , target: bc },{source: ad , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '34.210526315789473684%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ab','bc','ah','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* af bb */ var  af = nodes[0] ,bb = {id: 'bb', name:'siedler'} ; nodes.push( bb ); links.push( {source: af , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '36.842105263157894737%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* af au av */ var  af = nodes[0] ,au = {id: 'au', name:'bernbacher'},av = {id: 'av', name:'emmy'} ; nodes.push( au,av ); links.push( {source: au , target: av },{source: af , target: au },{source: af , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.473684210526315789%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* af ap at */ var  af = nodes[0] ,ap = {id: 'ap', name:'sepp'},at = {id: 'at', name:'hochtourist'} ; nodes.push( ap,at ); links.push( {source: af , target: at },{source: af , target: ap },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '42.105263157894736842%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'at','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* af ay */ var  af = nodes[0] ,ay = {id: 'ay', name:'giesecke'} ; nodes.push( ay ); links.push( {source: af , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '44.736842105263157895%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* ac ay ba */ var  ac = {id: 'ac', name:'loidl'},ay = nodes[0] ,ba = {id: 'ba', name:'ottilie'} ; nodes.push( ac,ba ); links.push( {source: ay , target: ba },{source: ac , target: ay },{source: ac , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.368421052631578947%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ay','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* ba bb */ var  ba = nodes[0] ,bb = {id: 'bb', name:'siedler'} ; nodes.push( bb ); links.push( {source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* ac ad ay bb */ var  ac = {id: 'ac', name:'loidl'},ad = {id: 'ad', name:'piccolo'},ay = {id: 'ay', name:'giesecke'},bb = nodes[0]  ; nodes.push( ac,ad,ay ); links.push( {source: ay , target: bb },{source: ac , target: ay },{source: ac , target: bb },{source: ac , target: ad },{source: ad , target: ay },{source: ad , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.631578947368421053%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ay bb bd */ var  ay = nodes[0] ,bb = nodes[1] ,bd = {id: 'bd', name:'kathi'} ; nodes.push( bd ); links.push( {source: ay , target: bd },{source: ay , target: bb },{source: bb , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '55.263157894736842105%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ay ba bb */ var  ay = nodes[0] ,ba = {id: 'ba', name:'ottilie'},bb = nodes[1]  ; nodes.push( ba ); links.push( {source: ba , target: bb },{source: ay , target: ba },{source: ay , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '57.894736842105263158%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ba','bb','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* be */ var  be = {id: 'be', name:'portier'} ; nodes.push( be ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.526315789473684211%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ab bf bg bh */ var  ab = {id: 'ab', name:'leopold'},bf = {id: 'bf', name:'sülzheimer'},bg = {id: 'bg', name:'hinzelmann'},bh = {id: 'bh', name:'märchen'} ; nodes.push( ab,bf,bg,bh ); links.push( {source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bh },{source: ab , target: bf },{source: ab , target: bg },{source: ab , target: bh },{source: ab , target: bh },{source: bg , target: bh },{source: bg , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '63.157894736842105263%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ab','bg','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* af ba bf */ var  af = {id: 'af', name:'josepha'},ba = {id: 'ba', name:'ottilie'},bf = nodes[0]  ; nodes.push( af,ba ); links.push( {source: af , target: bf },{source: af , target: ba },{source: ba , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '65.789473684210526316%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* ab af ay ba bb bf */ var  ab = {id: 'ab', name:'leopold'},af = nodes[0] ,ay = {id: 'ay', name:'giesecke'},ba = nodes[1] ,bb = {id: 'bb', name:'siedler'},bf = nodes[2]  ; nodes.push( ab,ay,bb ); links.push( {source: ay , target: bf },{source: ay , target: ba },{source: ay , target: bb },{source: af , target: ay },{source: af , target: bf },{source: af , target: ba },{source: af , target: bb },{source: ba , target: bf },{source: ba , target: bb },{source: bb , target: bf },{source: ab , target: ay },{source: ab , target: bf },{source: ab , target: af },{source: ab , target: ba },{source: ab , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.421052631578947368%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'ay','bf','ba','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* ab af ag */ var  ab = nodes[0] ,af = nodes[1] ,ag = {id: 'ag', name:'franz'} ; nodes.push( ag ); links.push( {source: af , target: ag },{source: ab , target: af },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '71.052631578947368421%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'ag','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* af bb */ var  af = nodes[0] ,bb = {id: 'bb', name:'siedler'} ; nodes.push( bb ); links.push( {source: af , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '73.684210526315789474%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ab af ba bb */ var  ab = {id: 'ab', name:'leopold'},af = nodes[0] ,ba = {id: 'ba', name:'ottilie'},bb = nodes[1]  ; nodes.push( ab,ba ); links.push( {source: ba , target: bb },{source: af , target: ba },{source: af , target: bb },{source: ab , target: ba },{source: ab , target: bb },{source: ab , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.315789473684210526%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ba','bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ab af ay bg */ var  ab = nodes[0] ,af = nodes[1] ,ay = {id: 'ay', name:'giesecke'},bg = {id: 'bg', name:'hinzelmann'} ; nodes.push( ay,bg ); links.push( {source: ay , target: bg },{source: af , target: ay },{source: af , target: bg },{source: ab , target: ay },{source: ab , target: af },{source: ab , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.947368421052631579%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'af','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ay bg */ var  ay = nodes[0] ,bg = nodes[1]  ; /* nodes.push(); */ links.push( {source: ay , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '81.578947368421052632%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ay bb */ var  ay = nodes[0] ,bb = {id: 'bb', name:'siedler'} ; nodes.push( bb ); links.push( {source: ay , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.210526315789473684%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ay ba bb */ var  ay = nodes[0] ,ba = {id: 'ba', name:'ottilie'},bb = nodes[1]  ; nodes.push( ba ); links.push( {source: ay , target: ba },{source: ay , target: bb },{source: ba , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.842105263157894737%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ay bb bf */ var  ay = nodes[0] ,bb = nodes[1] ,bf = {id: 'bf', name:'sülzheimer'} ; nodes.push( bf ); links.push( {source: ay , target: bf },{source: ay , target: bb },{source: bb , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '89.473684210526315789%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* ag bb bf */ var  ag = {id: 'ag', name:'franz'},bb = nodes[0] ,bf = nodes[1]  ; nodes.push( ag ); links.push( {source: ag , target: bf },{source: ag , target: bb },{source: bb , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.105263157894736842%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* bb bf bg bh */ var  bb = nodes[0] ,bf = nodes[1] ,bg = {id: 'bg', name:'hinzelmann'},bh = {id: 'bh', name:'märchen'} ; nodes.push( bg,bh ); links.push( {source: bg , target: bh },{source: bg , target: bh },{source: bg , target: bh },{source: bb , target: bg },{source: bb , target: bf },{source: bb , target: bh },{source: bb , target: bh },{source: bb , target: bh },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bh },{source: bf , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.736842105263157895%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ay bf bg bh */ var  ay = {id: 'ay', name:'giesecke'},bf = nodes[0] ,bg = nodes[1] ,bh = nodes[2]  ; nodes.push( ay ); links.push( {source: ay , target: bf },{source: ay , target: bg },{source: ay , target: bh },{source: bf , target: bg },{source: bf , target: bh },{source: bg , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '97.368421052631578947%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'bg','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ab af ay ba bb bf */ var  ab = {id: 'ab', name:'leopold'},af = {id: 'af', name:'josepha'},ay = nodes[0] ,ba = {id: 'ba', name:'ottilie'},bb = {id: 'bb', name:'siedler'},bf = nodes[1]  ; nodes.push( ab,af,ba,bb ); links.push( {source: ab , target: af },{source: ab , target: ay },{source: ab , target: ba },{source: ab , target: bb },{source: ab , target: bf },{source: af , target: ay },{source: af , target: ba },{source: af , target: bb },{source: af , target: bf },{source: ay , target: ba },{source: ay , target: bb },{source: ay , target: bf },{source: ba , target: bb },{source: ba , target: bf },{source: bb , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 185000);
