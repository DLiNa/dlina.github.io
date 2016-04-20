setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'belkow'},aa = {id: 'aa', name:'belkow'},ab = {id: 'ab', name:'stummel'},ab = {id: 'ab', name:'stummel'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'sturz'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ac },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = {id: 'ad', name:'perwenitz'},ae = {id: 'ae', name:'rieneke'},af = {id: 'af', name:'lang'},af = {id: 'af', name:'lang'} ; nodes.push( ad,ae,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: af },{source: ae , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ag = {id: 'ag', name:'martin'} ; nodes.push( ag ); links.push( {source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],ae = {id: 'ae', name:'rieneke'},af = {id: 'af', name:'lang'},ag = nodes[1],ah = {id: 'ah', name:'dannewitz'},ai = {id: 'ai', name:'sechelweg'} ; nodes.push( ae,af,ah,ai ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: af },{source: ah , target: ai },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ag','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ac = {id: 'ac', name:'sturz'},ad = nodes[0],ae = nodes[1],ah = nodes[2],ai = nodes[3] ; nodes.push( ac ); links.push( {source: ah , target: ai },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ac , target: ah },{source: ac , target: ad },{source: ac , target: ai },{source: ac , target: ae },{source: ae , target: ah },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aa = {id: 'aa', name:'belkow'},aa = {id: 'aa', name:'belkow'},ab = {id: 'ab', name:'stummel'},ad = nodes[1],ae = nodes[2],af = {id: 'af', name:'lang'},ah = nodes[3],ai = nodes[4],aj = {id: 'aj', name:'stroband'} ; nodes.push( aa,ab,af,aj ); links.push( {source: ad , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ai },{source: ad , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ae , target: ah },{source: ae , target: af },{source: ae , target: ai },{source: ae , target: aj },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: ai , target: aj },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ab },{source: ab , target: ad },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ai },{source: ab , target: aj },{source: aa , target: ad },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae','af','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ad = nodes[1],ag = {id: 'ag', name:'martin'},ah = nodes[2],ai = nodes[3],aj = nodes[4],ak = {id: 'ak', name:'finke'},ak = {id: 'ak', name:'finke'} ; nodes.push( ag,ak ); links.push( {source: ad , target: ak },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ai },{source: aj , target: ak },{source: aj , target: ak },{source: ah , target: ak },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: ag , target: ak },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ai , target: ak },{source: ai , target: aj },{source: ai , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ak','ad','aj','ah','ag','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  al = {id: 'al', name:'käthe'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ak = {id: 'ak', name:'finke'},am = {id: 'am', name:'grethe'} ; nodes.push( ak,am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ak = nodes[0],al = {id: 'al', name:'käthe'},am = nodes[1],an = {id: 'an', name:'knecht_1.11'} ; nodes.push( al,an ); links.push( {source: ak , target: an },{source: ak , target: am },{source: ak , target: al },{source: am , target: an },{source: al , target: an },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ak = nodes[0],al = nodes[1],am = nodes[2],ao = {id: 'ao', name:'rieke'} ; nodes.push( ao ); links.push( {source: al , target: ao },{source: al , target: am },{source: am , target: ao },{source: ak , target: al },{source: ak , target: ao },{source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ao','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  al = nodes[0],am = nodes[1] ; /* nodes.push(); */ links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ak = {id: 'ak', name:'finke'},al = nodes[0],am = nodes[1],ao = {id: 'ao', name:'rieke'},ap = {id: 'ap', name:'quitzow'},ap = {id: 'ap', name:'quitzow'},aq = {id: 'aq', name:'wichart'},aq = {id: 'aq', name:'wichart'},aq = {id: 'aq', name:'wichart'} ; nodes.push( ak,ao,ap,aq ); links.push( {source: ap , target: aq },{source: ap , target: aq },{source: ap , target: aq },{source: al , target: ap },{source: al , target: ao },{source: al , target: am },{source: al , target: aq },{source: al , target: aq },{source: al , target: ap },{source: al , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: am , target: ap },{source: am , target: ao },{source: am , target: aq },{source: am , target: aq },{source: am , target: ap },{source: am , target: aq },{source: ap , target: aq },{source: ap , target: aq },{source: ap , target: aq },{source: ak , target: ap },{source: ak , target: al },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: aq },{source: ak , target: aq },{source: ak , target: ap },{source: ak , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ac = {id: 'ac', name:'sturz'},ak = nodes[0],al = nodes[1],am = nodes[2],ap = nodes[3],aq = nodes[4] ; nodes.push( ac ); links.push( {source: ac , target: ap },{source: ac , target: ak },{source: ac , target: aq },{source: ac , target: al },{source: ac , target: am },{source: ap , target: aq },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: al },{source: ak , target: am },{source: al , target: ap },{source: al , target: aq },{source: al , target: am },{source: am , target: ap },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ac','ap','ak','aq','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  aj = {id: 'aj', name:'stroband'},cf = {id: 'cf', name:'wins'} ; nodes.push( aj,cf ); links.push( {source: aj , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  aj = nodes[0],ar = {id: 'ar', name:'männer_und_frauen'},cf = nodes[1] ; nodes.push( ar ); links.push( {source: aj , target: cf },{source: aj , target: ar },{source: ar , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aj = nodes[0],as = {id: 'as', name:'gertrud'},at = {id: 'at', name:'agnes'},cf = nodes[1] ; nodes.push( as,at ); links.push( {source: aj , target: as },{source: aj , target: at },{source: aj , target: cf },{source: as , target: at },{source: as , target: cf },{source: at , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'aj','as','at','cf' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ad = {id: 'ad', name:'perwenitz'},ai = {id: 'ai', name:'sechelweg'},ap = {id: 'ap', name:'quitzow'},au = {id: 'au', name:'ortwin'},au = {id: 'au', name:'ortwin'},av = {id: 'av', name:'alle_straussberger'} ; nodes.push( ad,ai,ap,au,av ); links.push( {source: au , target: av },{source: ap , target: au },{source: ap , target: au },{source: ap , target: av },{source: au , target: av },{source: ai , target: au },{source: ai , target: ap },{source: ai , target: au },{source: ai , target: av },{source: ad , target: au },{source: ad , target: ap },{source: ad , target: au },{source: ad , target: ai },{source: ad , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ad = nodes[0],ap = nodes[1],at = {id: 'at', name:'agnes'},au = nodes[2],av = nodes[3],av = nodes[3],cf = {id: 'cf', name:'wins'} ; nodes.push( at,cf ); links.push( {source: av , target: cf },{source: ad , target: av },{source: ad , target: ap },{source: ad , target: au },{source: ad , target: at },{source: ad , target: cf },{source: ad , target: av },{source: ap , target: av },{source: ap , target: au },{source: ap , target: at },{source: ap , target: cf },{source: ap , target: av },{source: au , target: av },{source: au , target: cf },{source: au , target: av },{source: at , target: av },{source: at , target: au },{source: at , target: cf },{source: at , target: av },{source: av , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'av','ad','ap','au','at','cf' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  aw = {id: 'aw', name:'briesen'},ax = {id: 'ax', name:'schwerin'} ; nodes.push( aw,ax ); links.push( {source: aw , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ax = nodes[0],ay = {id: 'ay', name:'barbara'} ; nodes.push( ay ); links.push( {source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aw = {id: 'aw', name:'briesen'},ax = nodes[0],ay = nodes[1],az = {id: 'az', name:'kasimir'},ba = {id: 'ba', name:'otto'} ; nodes.push( aw,az,ba ); links.push( {source: az , target: ba },{source: ax , target: az },{source: ax , target: ay },{source: ax , target: ba },{source: ay , target: az },{source: ay , target: ba },{source: aw , target: az },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aw = nodes[0],ax = nodes[1],ay = nodes[2],az = nodes[3],ba = nodes[4],bb = {id: 'bb', name:'krodenow'} ; nodes.push( bb ); links.push( {source: az , target: bb },{source: az , target: ba },{source: ba , target: bb },{source: ay , target: az },{source: ay , target: bb },{source: ay , target: ba },{source: aw , target: az },{source: aw , target: bb },{source: aw , target: ba },{source: aw , target: ay },{source: aw , target: ax },{source: ax , target: az },{source: ax , target: bb },{source: ax , target: ba },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'bb','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ap = {id: 'ap', name:'quitzow'},aw = nodes[0],ay = nodes[1],az = nodes[2],ba = nodes[3],bc = {id: 'bc', name:'dietrich'},bd = {id: 'bd', name:'stimme'} ; nodes.push( ap,bc,bd ); links.push( {source: bc , target: bd },{source: ba , target: bc },{source: ba , target: bd },{source: ay , target: bc },{source: ay , target: ba },{source: ay , target: az },{source: ay , target: bd },{source: az , target: bc },{source: az , target: ba },{source: az , target: bd },{source: ap , target: bc },{source: ap , target: ba },{source: ap , target: ay },{source: ap , target: az },{source: ap , target: bd },{source: ap , target: aw },{source: aw , target: bc },{source: aw , target: ba },{source: aw , target: ay },{source: aw , target: az },{source: aw , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bd','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  aw = nodes[0],ax = {id: 'ax', name:'schwerin'},ay = nodes[1],az = nodes[2],ba = nodes[3],bb = {id: 'bb', name:'krodenow'},bc = nodes[4] ; nodes.push( ax,bb ); links.push( {source: bb , target: bc },{source: az , target: bb },{source: az , target: ba },{source: az , target: bc },{source: ba , target: bb },{source: ba , target: bc },{source: ax , target: bb },{source: ax , target: az },{source: ax , target: ba },{source: ax , target: bc },{source: ax , target: ay },{source: aw , target: bb },{source: aw , target: az },{source: aw , target: ba },{source: aw , target: bc },{source: aw , target: ax },{source: aw , target: ay },{source: ay , target: bb },{source: ay , target: az },{source: ay , target: ba },{source: ay , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'bb','az','ba','ax','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ay = nodes[0],bc = nodes[1],be = {id: 'be', name:'schwalbe'} ; nodes.push( be ); links.push( {source: bc , target: be },{source: ay , target: be },{source: ay , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ap = {id: 'ap', name:'quitzow'},ay = nodes[0],bc = nodes[1] ; nodes.push( ap ); links.push( {source: ap , target: bc },{source: ap , target: ay },{source: ay , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ad = {id: 'ad', name:'perwenitz'},ah = {id: 'ah', name:'dannewitz'},ai = {id: 'ai', name:'sechelweg'},ap = nodes[0],bc = nodes[1],bf = {id: 'bf', name:'blankenfeld'} ; nodes.push( ad,ah,ai,bf ); links.push( {source: ap , target: bc },{source: ap , target: bf },{source: ad , target: ap },{source: ad , target: bc },{source: ad , target: ah },{source: ad , target: bf },{source: ad , target: ai },{source: bc , target: bf },{source: ah , target: ap },{source: ah , target: bc },{source: ah , target: bf },{source: ah , target: ai },{source: ai , target: ap },{source: ai , target: bc },{source: ai , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ap','ad','bc','ah','bf','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ac = {id: 'ac', name:'sturz'},ac = {id: 'ac', name:'sturz'},ag = {id: 'ag', name:'martin'},ak = {id: 'ak', name:'finke'},bg = {id: 'bg', name:'musikanten'} ; nodes.push( ac,ag,ak,bg ); links.push( {source: ac , target: bg },{source: ac , target: ak },{source: ac , target: ag },{source: ac , target: bg },{source: ac , target: ak },{source: ac , target: ag },{source: ak , target: bg },{source: ag , target: bg },{source: ag , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'bg','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ac = nodes[0],ak = nodes[1],al = {id: 'al', name:'käthe'},am = {id: 'am', name:'grethe'},ao = {id: 'ao', name:'rieke'} ; nodes.push( al,am,ao ); links.push( {source: ak , target: al },{source: ak , target: ao },{source: ak , target: am },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: ao },{source: ac , target: am },{source: al , target: ao },{source: al , target: am },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = {id: 'ab', name:'stummel'},ac = nodes[0],ak = nodes[1],al = nodes[2],am = nodes[3],ao = nodes[4],bg = {id: 'bg', name:'musikanten'} ; nodes.push( ab,bg ); links.push( {source: ab , target: ac },{source: ab , target: ak },{source: ab , target: al },{source: ab , target: bg },{source: ab , target: am },{source: ab , target: ao },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: bg },{source: ac , target: am },{source: ac , target: ao },{source: ak , target: al },{source: ak , target: bg },{source: ak , target: am },{source: ak , target: ao },{source: al , target: bg },{source: al , target: am },{source: al , target: ao },{source: am , target: bg },{source: am , target: ao },{source: ao , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ab','ak','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ac = nodes[0],ad = {id: 'ad', name:'perwenitz'},ah = {id: 'ah', name:'dannewitz'},al = nodes[1],am = nodes[2],ao = nodes[3],bc = {id: 'bc', name:'dietrich'} ; nodes.push( ad,ah,bc ); links.push( {source: al , target: ao },{source: al , target: am },{source: al , target: bc },{source: ao , target: bc },{source: am , target: ao },{source: am , target: bc },{source: ad , target: al },{source: ad , target: ao },{source: ad , target: am },{source: ad , target: bc },{source: ad , target: ah },{source: ac , target: al },{source: ac , target: ao },{source: ac , target: am },{source: ac , target: bc },{source: ac , target: ad },{source: ac , target: ah },{source: ah , target: al },{source: ah , target: ao },{source: ah , target: am },{source: ah , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'al','ao','am','bc','ad','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ac = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ad = {id: 'ad', name:'perwenitz'},ah = {id: 'ah', name:'dannewitz'},al = {id: 'al', name:'käthe'},am = {id: 'am', name:'grethe'},ao = {id: 'ao', name:'rieke'},bc = {id: 'bc', name:'dietrich'},bh = {id: 'bh', name:'grechewitz'} ; nodes.push( ad,ah,al,am,ao,bc,bh ); links.push( {source: bc , target: bh },{source: ad , target: bh },{source: ad , target: bc },{source: ad , target: ah },{source: ad , target: al },{source: ad , target: ao },{source: ad , target: am },{source: ah , target: bh },{source: ah , target: bc },{source: ah , target: al },{source: ah , target: ao },{source: ah , target: am },{source: al , target: bh },{source: al , target: bc },{source: al , target: ao },{source: al , target: am },{source: ao , target: bh },{source: ao , target: bc },{source: am , target: bh },{source: am , target: bc },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'bh','bc','ah','al','ao','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  ac = {id: 'ac', name:'sturz'},ad = nodes[0] ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  ad = nodes[0],ap = {id: 'ap', name:'quitzow'},bc = {id: 'bc', name:'dietrich'},bi = {id: 'bi', name:'herold'},bj = {id: 'bj', name:'die_edelleute'},bk = {id: 'bk', name:'die_bürger'} ; nodes.push( ap,bc,bi,bj,bk ); links.push( {source: bi , target: bj },{source: bi , target: bk },{source: ad , target: bi },{source: ad , target: bc },{source: ad , target: ap },{source: ad , target: bj },{source: ad , target: bk },{source: bc , target: bi },{source: bc , target: bj },{source: bc , target: bk },{source: ap , target: bi },{source: ap , target: bc },{source: ap , target: bj },{source: ap , target: bk },{source: bj , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'bi' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ad = nodes[0],ah = {id: 'ah', name:'dannewitz'},ai = {id: 'ai', name:'sechelweg'},aj = {id: 'aj', name:'stroband'},ap = nodes[1],bc = nodes[2],bj = nodes[3],bk = nodes[4],bl = {id: 'bl', name:'ileburg'},bm = {id: 'bm', name:'putlitz'},bn = {id: 'bn', name:'lippold_von_bredow'},bo = {id: 'bo', name:'alle_bürger'},cf = {id: 'cf', name:'wins'} ; nodes.push( ah,ai,aj,bl,bm,bn,bo,cf ); links.push( {source: bl , target: bm },{source: bl , target: bn },{source: bl , target: cf },{source: bl , target: bo },{source: bc , target: bl },{source: bc , target: bj },{source: bc , target: bk },{source: bc , target: bm },{source: bc , target: bn },{source: bc , target: cf },{source: bc , target: bo },{source: bj , target: bl },{source: bj , target: bk },{source: bj , target: bm },{source: bj , target: bn },{source: bj , target: cf },{source: bj , target: bo },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bk , target: cf },{source: bk , target: bo },{source: ad , target: bl },{source: ad , target: bc },{source: ad , target: bj },{source: ad , target: bk },{source: ad , target: ah },{source: ad , target: bm },{source: ad , target: ap },{source: ad , target: bn },{source: ad , target: cf },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: bo },{source: ah , target: bl },{source: ah , target: bc },{source: ah , target: bj },{source: ah , target: bk },{source: ah , target: bm },{source: ah , target: ap },{source: ah , target: bn },{source: ah , target: cf },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: bo },{source: bm , target: bn },{source: bm , target: cf },{source: bm , target: bo },{source: ap , target: bl },{source: ap , target: bc },{source: ap , target: bj },{source: ap , target: bk },{source: ap , target: bm },{source: ap , target: bn },{source: ap , target: cf },{source: ap , target: bo },{source: bn , target: cf },{source: bn , target: bo },{source: aj , target: bl },{source: aj , target: bc },{source: aj , target: bj },{source: aj , target: bk },{source: aj , target: bm },{source: aj , target: ap },{source: aj , target: bn },{source: aj , target: cf },{source: aj , target: bo },{source: ai , target: bl },{source: ai , target: bc },{source: ai , target: bj },{source: ai , target: bk },{source: ai , target: bm },{source: ai , target: ap },{source: ai , target: bn },{source: ai , target: cf },{source: ai , target: aj },{source: ai , target: bo },{source: bo , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'bl','bc','bj','bk','ad','ah','bm','ap','bn','cf','aj','ai','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  as = {id: 'as', name:'gertrud'},at = {id: 'at', name:'agnes'} ; nodes.push( as,at ); links.push( {source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  as = nodes[0],at = nodes[1],be = {id: 'be', name:'schwalbe'},bp = {id: 'bp', name:'schwabe'} ; nodes.push( be,bp ); links.push( {source: as , target: be },{source: as , target: bp },{source: as , target: at },{source: be , target: bp },{source: at , target: be },{source: at , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'bp' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ap = {id: 'ap', name:'quitzow'},as = nodes[0],at = nodes[1],be = nodes[2] ; nodes.push( ap ); links.push( {source: at , target: be },{source: as , target: be },{source: as , target: at },{source: ap , target: be },{source: ap , target: at },{source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ap = nodes[0],as = nodes[1],at = nodes[2],bc = {id: 'bc', name:'dietrich'},be = nodes[3] ; nodes.push( bc ); links.push( {source: at , target: bc },{source: at , target: be },{source: as , target: at },{source: as , target: bc },{source: as , target: be },{source: ap , target: at },{source: ap , target: as },{source: ap , target: bc },{source: ap , target: be },{source: bc , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'at','as','ap','bc','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  bl = {id: 'bl', name:'ileburg'},bq = {id: 'bq', name:'friedrich'} ; nodes.push( bl,bq ); links.push( {source: bl , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'bq','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ap = {id: 'ap', name:'quitzow'},at = {id: 'at', name:'agnes'} ; nodes.push( ap,at ); links.push( {source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  ap = nodes[0],as = {id: 'as', name:'gertrud'} ; nodes.push( as ); links.push( {source: ap , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ap = nodes[0],bq = {id: 'bq', name:'friedrich'} ; nodes.push( bq ); links.push( {source: ap , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'bq','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  aa = {id: 'aa', name:'belkow'},ab = {id: 'ab', name:'stummel'},ac = {id: 'ac', name:'sturz'},ad = {id: 'ad', name:'perwenitz'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: ac , target: ad },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ac = nodes[0],ad = nodes[1],ah = {id: 'ah', name:'dannewitz'},ai = {id: 'ai', name:'sechelweg'},aj = {id: 'aj', name:'stroband'} ; nodes.push( ah,ai,aj ); links.push( {source: ad , target: aj },{source: ad , target: ah },{source: ad , target: ai },{source: ac , target: ad },{source: ac , target: aj },{source: ac , target: ah },{source: ac , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  ac = nodes[0],ad = nodes[1],ah = nodes[2],ai = nodes[3] ; /* nodes.push(); */ links.push( {source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ad , target: ah },{source: ad , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ac','ad','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ah = nodes[0],br = {id: 'br', name:'stimmen'} ; nodes.push( br ); links.push( {source: ah , target: br } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  ad = {id: 'ad', name:'perwenitz'},ai = {id: 'ai', name:'sechelweg'},br = nodes[0] ; nodes.push( ad,ai ); links.push( {source: ai , target: br },{source: ad , target: br },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'br','ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  bs = {id: 'bs', name:'gesang'} ; nodes.push( bs ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'bs' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  ac = {id: 'ac', name:'sturz'},ad = {id: 'ad', name:'perwenitz'},aj = {id: 'aj', name:'stroband'},ak = {id: 'ak', name:'finke'},bt = {id: 'bt', name:'das_volk'},by = {id: 'by', name:'stimmen_der_ratmannen'} ; nodes.push( ac,ad,aj,ak,bt,by ); links.push( {source: ac , target: ak },{source: ac , target: bt },{source: ac , target: by },{source: ac , target: ad },{source: ac , target: aj },{source: ak , target: bt },{source: ak , target: by },{source: bt , target: by },{source: ad , target: ak },{source: ad , target: bt },{source: ad , target: by },{source: ad , target: aj },{source: aj , target: ak },{source: aj , target: bt },{source: aj , target: by } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'ac','bt' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  ad = nodes[0],ah = {id: 'ah', name:'dannewitz'},aj = nodes[1],ak = nodes[2],bl = {id: 'bl', name:'ileburg'},bn = {id: 'bn', name:'lippold_von_bredow'},bq = {id: 'bq', name:'friedrich'},bv = {id: 'bv', name:'brandenburger_ratmanne'},bw = {id: 'bw', name:'frankfurter_ratmanne'},bx = {id: 'bx', name:'spandauer_ratmanne'},by = nodes[3],bz = {id: 'bz', name:'rathenower_ratmanne'},ca = {id: 'ca', name:'ruppiner_ratmanne'},cb = {id: 'cb', name:'havelberger_ratmanne'} ; nodes.push( ah,bl,bn,bq,bv,bw,bx,bz,ca,cb ); links.push( {source: bq , target: by },{source: bq , target: bv },{source: bq , target: bw },{source: bq , target: bz },{source: bq , target: ca },{source: bq , target: cb },{source: bq , target: bx },{source: ak , target: bq },{source: ak , target: by },{source: ak , target: bv },{source: ak , target: bw },{source: ak , target: bz },{source: ak , target: ca },{source: ak , target: cb },{source: ak , target: bl },{source: ak , target: bn },{source: ak , target: bx },{source: by , target: bz },{source: by , target: ca },{source: by , target: cb },{source: bv , target: by },{source: bv , target: bw },{source: bv , target: bz },{source: bv , target: ca },{source: bv , target: cb },{source: bv , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bw , target: ca },{source: bw , target: cb },{source: bw , target: bx },{source: bz , target: ca },{source: bz , target: cb },{source: ca , target: cb },{source: bl , target: bq },{source: bl , target: by },{source: bl , target: bv },{source: bl , target: bw },{source: bl , target: bz },{source: bl , target: ca },{source: bl , target: cb },{source: bl , target: bn },{source: bl , target: bx },{source: bn , target: bq },{source: bn , target: by },{source: bn , target: bv },{source: bn , target: bw },{source: bn , target: bz },{source: bn , target: ca },{source: bn , target: cb },{source: bn , target: bx },{source: ad , target: bq },{source: ad , target: ak },{source: ad , target: by },{source: ad , target: bv },{source: ad , target: bw },{source: ad , target: bz },{source: ad , target: ca },{source: ad , target: cb },{source: ad , target: bl },{source: ad , target: bn },{source: ad , target: aj },{source: ad , target: bx },{source: ad , target: ah },{source: aj , target: bq },{source: aj , target: ak },{source: aj , target: by },{source: aj , target: bv },{source: aj , target: bw },{source: aj , target: bz },{source: aj , target: ca },{source: aj , target: cb },{source: aj , target: bl },{source: aj , target: bn },{source: aj , target: bx },{source: bx , target: by },{source: bx , target: bz },{source: bx , target: ca },{source: bx , target: cb },{source: ah , target: bq },{source: ah , target: ak },{source: ah , target: by },{source: ah , target: bv },{source: ah , target: bw },{source: ah , target: bz },{source: ah , target: ca },{source: ah , target: cb },{source: ah , target: bl },{source: ah , target: bn },{source: ah , target: aj },{source: ah , target: bx } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ak','by','bv','bw','bz','ca','cb','bl','bn','bx' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  ad = nodes[0],ah = nodes[1],aj = nodes[2],bc = {id: 'bc', name:'dietrich'},bq = nodes[3],cc = {id: 'cc', name:'die_berliner'} ; nodes.push( bc,cc ); links.push( {source: bc , target: cc },{source: bc , target: bq },{source: aj , target: bc },{source: aj , target: cc },{source: aj , target: bq },{source: ad , target: bc },{source: ad , target: aj },{source: ad , target: cc },{source: ad , target: bq },{source: ad , target: ah },{source: bq , target: cc },{source: ah , target: bc },{source: ah , target: aj },{source: ah , target: cc },{source: ah , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'ad','cc' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  ah = nodes[0],aj = nodes[1],ap = {id: 'ap', name:'quitzow'},bc = nodes[2],bn = {id: 'bn', name:'lippold_von_bredow'},bq = nodes[3] ; nodes.push( ap,bn ); links.push( {source: bc , target: bq },{source: bc , target: bn },{source: bn , target: bq },{source: ah , target: bq },{source: ah , target: bc },{source: ah , target: bn },{source: ah , target: aj },{source: ah , target: ap },{source: aj , target: bq },{source: aj , target: bc },{source: aj , target: bn },{source: aj , target: ap },{source: ap , target: bq },{source: ap , target: bc },{source: ap , target: bn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'bq','bc','bn','ah','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  aj = nodes[0],as = {id: 'as', name:'gertrud'} ; nodes.push( as ); links.push( {source: aj , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  aj = nodes[0],ao = {id: 'ao', name:'rieke'},as = nodes[1],at = {id: 'at', name:'agnes'} ; nodes.push( ao,at ); links.push( {source: aj , target: at },{source: aj , target: ao },{source: aj , target: as },{source: ao , target: at },{source: ao , target: as },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'at','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  ad = {id: 'ad', name:'perwenitz'},aj = nodes[0],as = nodes[1] ; nodes.push( ad ); links.push( {source: aj , target: as },{source: ad , target: aj },{source: ad , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  ad = nodes[0],aj = nodes[1],ao = {id: 'ao', name:'rieke'},as = nodes[2],at = {id: 'at', name:'agnes'} ; nodes.push( ao,at ); links.push( {source: ad , target: ao },{source: ad , target: aj },{source: ad , target: as },{source: ad , target: at },{source: ao , target: as },{source: ao , target: at },{source: aj , target: ao },{source: aj , target: as },{source: aj , target: at },{source: as , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'as','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  ad = nodes[0],aj = nodes[1],ak = {id: 'ak', name:'finke'},ao = nodes[2] ; nodes.push( ak ); links.push( {source: aj , target: ao },{source: aj , target: ak },{source: ak , target: ao },{source: ad , target: ao },{source: ad , target: aj },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'ao','aj','ak','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  ce = {id: 'ce', name:'knechte_am_fenster'} ; nodes.push( ce ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'ce' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  be = {id: 'be', name:'schwalbe'},cd = {id: 'cd', name:'knecht'} ; nodes.push( be,cd ); links.push( {source: be , target: cd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [ 'cd' ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64'); var  ap = {id: 'ap', name:'quitzow'},be = nodes[0] ; nodes.push( ap ); links.push( {source: ap , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65'); var  bc = {id: 'bc', name:'dietrich'},be = nodes[0] ; nodes.push( bc ); links.push( {source: bc , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66'); var  bc = nodes[0],cd = {id: 'cd', name:'knecht'} ; nodes.push( cd ); links.push( {source: bc , target: cd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67'); var  ay = {id: 'ay', name:'barbara'},bc = nodes[0],cd = nodes[1],ce = {id: 'ce', name:'knechte_am_fenster'} ; nodes.push( ay,ce ); links.push( {source: cd , target: ce },{source: ay , target: cd },{source: ay , target: bc },{source: ay , target: ce },{source: bc , target: cd },{source: bc , target: ce } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'ce' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68'); var  ap = {id: 'ap', name:'quitzow'},ay = nodes[0],bc = nodes[1],be = {id: 'be', name:'schwalbe'},cd = nodes[2] ; nodes.push( ap,be ); links.push( {source: be , target: cd },{source: bc , target: cd },{source: bc , target: be },{source: ap , target: cd },{source: ap , target: be },{source: ap , target: bc },{source: ap , target: ay },{source: ay , target: cd },{source: ay , target: be },{source: ay , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [ 'cd','bc','ap','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69'); var  be = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70'); var  cf = {id: 'cf', name:'wins'} ; nodes.push( cf ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [ 'cf' ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71'); var  ap = {id: 'ap', name:'quitzow'},ay = {id: 'ay', name:'barbara'},bc = {id: 'bc', name:'dietrich'},be = {id: 'be', name:'schwalbe'},cd = {id: 'cd', name:'knecht'},ce = {id: 'ce', name:'knechte_am_fenster'} ; nodes.push( ap,ay,bc,be,cd,ce ); links.push( {source: cd , target: ce },{source: bc , target: cd },{source: bc , target: ce },{source: bc , target: be },{source: ap , target: cd },{source: ap , target: bc },{source: ap , target: ay },{source: ap , target: ce },{source: ap , target: be },{source: ay , target: cd },{source: ay , target: bc },{source: ay , target: ce },{source: ay , target: be },{source: be , target: cd },{source: be , target: ce } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [ 'cd','bc','ay','ce','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72'); var  ap = nodes[0],bq = {id: 'bq', name:'friedrich'} ; nodes.push( bq ); links.push( {source: ap , target: bq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Verwandlung'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 355000);
