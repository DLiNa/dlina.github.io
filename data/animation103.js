setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'amante'},ab = {id: 'ab', name:'paulo'},ac = {id: 'ac', name:'laura'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.882352941176470588%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ad ae af ag */ var  ad = {id: 'ad', name:'julio'},ae = {id: 'ae', name:'ludovico'},af = {id: 'af', name:'pirro'},ag = {id: 'ag', name:'solina'} ; nodes.push( ad,ae,af,ag ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ag },{source: af , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.764705882352941176%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ad */ var  aa = {id: 'aa', name:'amante'},ac = {id: 'ac', name:'laura'},ad = nodes[0]  ; nodes.push( aa,ac ); links.push( {source: aa , target: ad },{source: aa , target: ac },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.647058823529411765%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'paulo'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.529411764705882353%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ad af ag */ var  ad = {id: 'ad', name:'julio'},af = {id: 'af', name:'pirro'},ag = {id: 'ag', name:'solina'} ; nodes.push( ad,af,ag ); links.push( {source: ad , target: ag },{source: ad , target: af },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.411764705882352941%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ad','ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ae ah ai */ var  ae = {id: 'ae', name:'ludovico'},ah = {id: 'ah', name:'pasquino'},ai = {id: 'ai', name:'prinz_galbino'} ; nodes.push( ae,ah,ai ); links.push( {source: ah , target: ai },{source: ae , target: ah },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.294117647058823529%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ah','ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ag aj ak an */ var  ag = {id: 'ag', name:'solina'},aj = {id: 'aj', name:'rosaline'},ak = {id: 'ak', name:'herzogin'},an = {id: 'an', name:'dame_dhonneur'} ; nodes.push( ag,aj,ak,an ); links.push( {source: aj , target: ak },{source: aj , target: an },{source: ak , target: an },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.176470588235294118%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'aj','ak','an','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ae ai al */ var  ae = {id: 'ae', name:'ludovico'},ai = {id: 'ai', name:'prinz_galbino'},al = {id: 'al', name:'graf_drullo'} ; nodes.push( ae,ai,al ); links.push( {source: ae , target: al },{source: ae , target: ai },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.058823529411764706%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ae','al','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ab */ var  ab = {id: 'ab', name:'paulo'} ; nodes.push( ab ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.941176470588235294%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ae ai al am */ var  ae = {id: 'ae', name:'ludovico'},ai = {id: 'ai', name:'prinz_galbino'},al = {id: 'al', name:'graf_drullo'},am = {id: 'am', name:'bedienter'} ; nodes.push( ae,ai,al,am ); links.push( {source: ai , target: am },{source: ai , target: al },{source: ai , target: am },{source: ai , target: al },{source: al , target: am },{source: ae , target: ai },{source: ae , target: am },{source: ae , target: ai },{source: ae , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.823529411764705882%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ai','am','al','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* aa ab ad af ag */ var  aa = {id: 'aa', name:'amante'},ab = {id: 'ab', name:'paulo'},ad = {id: 'ad', name:'julio'},af = {id: 'af', name:'pirro'},ag = {id: 'ag', name:'solina'} ; nodes.push( aa,ab,ad,af,ag ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: af , target: ag },{source: aa , target: ad },{source: aa , target: af },{source: aa , target: ab },{source: aa , target: ag },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.705882352941176471%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* ad af ag al an ao */ var  ad = nodes[0] ,af = nodes[1] ,ag = nodes[2] ,al = {id: 'al', name:'graf_drullo'},an = {id: 'an', name:'dame_dhonneur'},ao = {id: 'ao', name:'galanteriekrämerin'} ; nodes.push( al,an,ao ); links.push( {source: ag , target: an },{source: ag , target: al },{source: ag , target: al },{source: ag , target: ao },{source: an , target: ao },{source: af , target: ag },{source: af , target: an },{source: af , target: al },{source: af , target: al },{source: af , target: ao },{source: al , target: an },{source: al , target: ao },{source: al , target: an },{source: al , target: ao },{source: ad , target: ag },{source: ad , target: an },{source: ad , target: af },{source: ad , target: al },{source: ad , target: al },{source: ad , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.588235294117647059%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag','an','af','ad','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae ai al ap */ var  ae = {id: 'ae', name:'ludovico'},ai = {id: 'ai', name:'prinz_galbino'},al = nodes[0] ,ap = {id: 'ap', name:'carlo'} ; nodes.push( ae,ai,ap ); links.push( {source: al , target: ap },{source: ai , target: ap },{source: ai , target: al },{source: ae , target: ap },{source: ae , target: al },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.470588235294117647%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ap','al','ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ag ak */ var  ag = {id: 'ag', name:'solina'},ak = {id: 'ak', name:'herzogin'} ; nodes.push( ag,ak ); links.push( {source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.352941176470588235%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ad ae ag ai ak al ap */ var  ad = {id: 'ad', name:'julio'},ae = {id: 'ae', name:'ludovico'},ag = nodes[0] ,ai = {id: 'ai', name:'prinz_galbino'},ak = nodes[1] ,al = {id: 'al', name:'graf_drullo'},ap = {id: 'ap', name:'carlo'} ; nodes.push( ad,ae,ai,al,ap ); links.push( {source: ag , target: ai },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: ap },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: ap },{source: ad , target: ag },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: ak },{source: ad , target: al },{source: ad , target: ap },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ap },{source: ak , target: al },{source: ak , target: ap },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.235294117647058824%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','ad','ae','ak','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ai al aq ar */ var  ai = nodes[0] ,al = nodes[1] ,aq = {id: 'aq', name:'stallmeister'},ar = {id: 'ar', name:'kammerdiener'} ; nodes.push( aq,ar ); links.push( {source: ai , target: al },{source: ai , target: aq },{source: ai , target: ar },{source: al , target: aq },{source: al , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.117647058823529412%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ai','al','aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ad ag as */ var  ad = {id: 'ad', name:'julio'},ag = {id: 'ag', name:'solina'},as = {id: 'as', name:'abgeordneter'} ; nodes.push( ad,ag,as ); links.push( {source: ad , target: ag },{source: ad , target: as },{source: ag , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzte Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 80000);
