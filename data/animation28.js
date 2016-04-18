setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'zech'},ab = {id: 'ab', name:'zuwag'},ac = {id: 'ac', name:'plutzerkern'},ad = {id: 'ad', name:'friedrich'},ae = {id: 'ae', name:'anton'},af = {id: 'af', name:'sepherl'},ag = {id: 'ag', name:'christoph'} ; nodes.push( aa,ab,ac,ad,ae,af,ag ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ad = nodes[0],af = nodes[1],ag = nodes[2],ah = {id: 'ah', name:'nettel'},ai = {id: 'ai', name:'seppel'},aj = {id: 'aj', name:'resi'},ak = {id: 'ak', name:'goldfuchs'} ; nodes.push( ah,ai,aj,ak ); links.push( {source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: aj , target: ak },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'af','ag','ah','ai','aj','ad','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  al = {id: 'al', name:'damian'},am = {id: 'am', name:'johann'} ; nodes.push( al,am ); links.push( {source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  an = {id: 'an', name:'salerl'},ao = {id: 'ao', name:'bonbon'} ; nodes.push( an,ao ); links.push( {source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  al = {id: 'al', name:'damian'},an = nodes[0] ; nodes.push( al ); links.push( {source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  al = nodes[0],ap = {id: 'ap', name:'schlucker'} ; nodes.push( ap ); links.push( {source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  af = {id: 'af', name:'sepherl'},al = nodes[0] ; nodes.push( af ); links.push( {source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'al','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ad = {id: 'ad', name:'friedrich'},aq = {id: 'aq', name:'zins'} ; nodes.push( ad,aq ); links.push( {source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ak = {id: 'ak', name:'goldfuchs'},am = {id: 'am', name:'johann'},aq = nodes[0] ; nodes.push( ak,am ); links.push( {source: ak , target: aq },{source: ak , target: am },{source: am , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ak = nodes[0],am = nodes[1],aq = nodes[2],ar = {id: 'ar', name:'emilie'},as = {id: 'as', name:'fanny'} ; nodes.push( ar,as ); links.push( {source: ar , target: as },{source: am , target: ar },{source: am , target: as },{source: am , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: am },{source: ak , target: aq },{source: aq , target: ar },{source: aq , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  aq = nodes[0],ar = nodes[1],as = nodes[2] ; /* nodes.push(); */ links.push( {source: aq , target: as },{source: aq , target: ar },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  al = {id: 'al', name:'damian'},ar = nodes[0],as = nodes[1],at = {id: 'at', name:'adolf'} ; nodes.push( al,at ); links.push( {source: as , target: at },{source: ar , target: as },{source: ar , target: at },{source: al , target: as },{source: al , target: ar },{source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ap = {id: 'ap', name:'schlucker'},ar = nodes[0],as = nodes[1],at = nodes[2] ; nodes.push( ap ); links.push( {source: ar , target: as },{source: ar , target: at },{source: as , target: at },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'as','at','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ar = nodes[0],au = {id: 'au', name:'frau_von_steinfels'},av = {id: 'av', name:'herr_von_steinfels'} ; nodes.push( au,av ); links.push( {source: au , target: av },{source: ar , target: au },{source: ar , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  al = {id: 'al', name:'damian'},ar = nodes[0],as = {id: 'as', name:'fanny'} ; nodes.push( al,as ); links.push( {source: al , target: as },{source: al , target: ar },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'al','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ar = nodes[0],aw = {id: 'aw', name:'frau_von_wachsweich'},ax = {id: 'ax', name:'herr_von_wachsweich'} ; nodes.push( aw,ax ); links.push( {source: aw , target: ax },{source: ar , target: aw },{source: ar , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aw','ax','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  am = {id: 'am', name:'johann'},ao = {id: 'ao', name:'bonbon'},ap = {id: 'ap', name:'schlucker'},at = {id: 'at', name:'adolf'} ; nodes.push( am,ao,ap,at ); links.push( {source: ao , target: ap },{source: ao , target: at },{source: am , target: ao },{source: am , target: ap },{source: am , target: at },{source: ap , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ao','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  af = {id: 'af', name:'sepherl'},ag = {id: 'ag', name:'christoph'},an = {id: 'an', name:'salerl'},ap = nodes[0],at = nodes[1] ; nodes.push( af,ag,an ); links.push( {source: ap , target: at },{source: ag , target: ap },{source: ag , target: an },{source: ag , target: at },{source: af , target: ap },{source: af , target: ag },{source: af , target: an },{source: af , target: at },{source: an , target: ap },{source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ag','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  af = nodes[0],ai = {id: 'ai', name:'seppel'},ak = {id: 'ak', name:'goldfuchs'},al = {id: 'al', name:'damian'},am = {id: 'am', name:'johann'},an = nodes[1],ap = nodes[2],ar = {id: 'ar', name:'emilie'},ay = {id: 'ay', name:'die_gesellschaft'},az = {id: 'az', name:'chor_der_gäste'} ; nodes.push( ai,ak,al,am,ar,ay,az ); links.push( {source: al , target: ap },{source: al , target: am },{source: al , target: ay },{source: al , target: an },{source: al , target: ar },{source: al , target: az },{source: ap , target: ay },{source: ap , target: ar },{source: ap , target: az },{source: am , target: ap },{source: am , target: ay },{source: am , target: an },{source: am , target: ar },{source: am , target: az },{source: ak , target: al },{source: ak , target: ap },{source: ak , target: am },{source: ak , target: ay },{source: ak , target: an },{source: ak , target: ar },{source: ak , target: az },{source: ai , target: al },{source: ai , target: ap },{source: ai , target: am },{source: ai , target: ak },{source: ai , target: ay },{source: ai , target: an },{source: ai , target: ar },{source: ai , target: az },{source: af , target: al },{source: af , target: ap },{source: af , target: am },{source: af , target: ak },{source: af , target: ai },{source: af , target: ay },{source: af , target: an },{source: af , target: ar },{source: af , target: az },{source: ay , target: az },{source: an , target: ap },{source: an , target: ay },{source: an , target: ar },{source: an , target: az },{source: ar , target: ay },{source: ar , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'al','ap','am','ak','ai','ay','ar','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  af = nodes[0],an = nodes[1],ba = {id: 'ba', name:'chor'},bb = {id: 'bb', name:'aspik'},bc = {id: 'bc', name:'françois'} ; nodes.push( ba,bb,bc ); links.push( {source: ba , target: bb },{source: ba , target: bc },{source: af , target: ba },{source: af , target: an },{source: af , target: bb },{source: af , target: bc },{source: an , target: ba },{source: an , target: bb },{source: an , target: bc },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ba','af','an','bb','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  al = {id: 'al', name:'damian'},ap = {id: 'ap', name:'schlucker'} ; nodes.push( al,ap ); links.push( {source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  al = nodes[0],ap = nodes[1],aq = {id: 'aq', name:'zins'} ; nodes.push( aq ); links.push( {source: al , target: aq },{source: al , target: ap },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  al = nodes[0],am = {id: 'am', name:'johann'},ap = nodes[1],bd = {id: 'bd', name:'meridon'} ; nodes.push( am,bd ); links.push( {source: ap , target: bd },{source: al , target: ap },{source: al , target: am },{source: al , target: bd },{source: am , target: ap },{source: am , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  al = nodes[0],am = nodes[1],ap = nodes[2],bd = nodes[3],be = {id: 'be', name:'wilm'} ; nodes.push( be ); links.push( {source: ap , target: be },{source: ap , target: bd },{source: al , target: ap },{source: al , target: be },{source: al , target: bd },{source: al , target: am },{source: bd , target: be },{source: am , target: ap },{source: am , target: be },{source: am , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'be','bd','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  al = nodes[0],ap = nodes[1] ; /* nodes.push(); */ links.push( {source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  af = {id: 'af', name:'sepherl'},al = nodes[0],am = {id: 'am', name:'johann'},ap = nodes[1],ba = {id: 'ba', name:'chor'},bc = {id: 'bc', name:'françois'},bd = {id: 'bd', name:'meridon'} ; nodes.push( af,am,ba,bc,bd ); links.push( {source: af , target: ap },{source: af , target: al },{source: af , target: bd },{source: af , target: am },{source: af , target: bc },{source: af , target: ba },{source: ap , target: bd },{source: ap , target: bc },{source: ap , target: ba },{source: al , target: ap },{source: al , target: bd },{source: al , target: am },{source: al , target: bc },{source: al , target: ba },{source: am , target: ap },{source: am , target: bd },{source: am , target: bc },{source: am , target: ba },{source: bc , target: bd },{source: ba , target: bd },{source: ba , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af','ap','al','bd','bc','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ak = {id: 'ak', name:'goldfuchs'},am = nodes[0] ; nodes.push( ak ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ak = nodes[0],al = {id: 'al', name:'damian'},am = nodes[1],ap = {id: 'ap', name:'schlucker'},bf = {id: 'bf', name:'wermuth'} ; nodes.push( al,ap,bf ); links.push( {source: ak , target: bf },{source: ak , target: am },{source: ak , target: ap },{source: ak , target: al },{source: am , target: bf },{source: am , target: ap },{source: ap , target: bf },{source: al , target: bf },{source: al , target: am },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bf','ak','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  af = {id: 'af', name:'sepherl'},ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'nettel'},ai = {id: 'ai', name:'seppel'},aj = {id: 'aj', name:'resi'},al = nodes[0],ap = nodes[1] ; nodes.push( af,ag,ah,ai,aj ); links.push( {source: af , target: ap },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: af , target: al },{source: ag , target: ap },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: al },{source: ai , target: ap },{source: ai , target: aj },{source: ai , target: al },{source: ah , target: ap },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: al },{source: aj , target: ap },{source: aj , target: al },{source: al , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'ap','ag','ai','ah','aj','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  af = nodes[0],ak = {id: 'ak', name:'goldfuchs'},am = {id: 'am', name:'johann'},an = {id: 'an', name:'salerl'} ; nodes.push( ak,am,an ); links.push( {source: ak , target: am },{source: ak , target: an },{source: am , target: an },{source: af , target: ak },{source: af , target: am },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  af = nodes[0],ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'nettel'},ai = {id: 'ai', name:'seppel'},aj = {id: 'aj', name:'resi'},ak = nodes[1],al = {id: 'al', name:'damian'},am = nodes[2],ap = {id: 'ap', name:'schlucker'},bf = {id: 'bf', name:'wermuth'} ; nodes.push( ag,ah,ai,aj,al,ap,bf ); links.push( {source: ap , target: bf },{source: al , target: ap },{source: al , target: am },{source: al , target: bf },{source: af , target: ap },{source: af , target: al },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: am },{source: af , target: bf },{source: ag , target: ap },{source: ag , target: al },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: am },{source: ag , target: bf },{source: ai , target: ap },{source: ai , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: am },{source: ai , target: bf },{source: ah , target: ap },{source: ah , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: am },{source: ah , target: bf },{source: aj , target: ap },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: am },{source: aj , target: bf },{source: ak , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: bf },{source: am , target: ap },{source: am , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'ap','al','af','ag','ai','ah','aj','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ak = nodes[0],am = nodes[1] ; /* nodes.push(); */ links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'am','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  an = {id: 'an', name:'salerl'},at = {id: 'at', name:'adolf'} ; nodes.push( an,at ); links.push( {source: an , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'at','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  am = {id: 'am', name:'johann'},as = {id: 'as', name:'fanny'} ; nodes.push( am,as ); links.push( {source: am , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  am = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  am = nodes[0],ao = {id: 'ao', name:'bonbon'},ar = {id: 'ar', name:'emilie'} ; nodes.push( ao,ar ); links.push( {source: am , target: ar },{source: am , target: ao },{source: ao , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  am = nodes[0],ar = nodes[1] ; /* nodes.push(); */ links.push( {source: am , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  am = nodes[0],ar = nodes[1],as = {id: 'as', name:'fanny'} ; nodes.push( as ); links.push( {source: ar , target: as },{source: am , target: as },{source: am , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  am = nodes[0],ar = nodes[1],as = nodes[2] ; /* nodes.push(); */ links.push( {source: ar , target: as },{source: am , target: ar },{source: am , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  am = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  af = {id: 'af', name:'sepherl'},ag = {id: 'ag', name:'christoph'},al = {id: 'al', name:'damian'},ap = {id: 'ap', name:'schlucker'} ; nodes.push( af,ag,al,ap ); links.push( {source: af , target: ap },{source: af , target: al },{source: af , target: ag },{source: al , target: ap },{source: ag , target: ap },{source: ag , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'al','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  af = nodes[0],ap = nodes[1],at = {id: 'at', name:'adolf'} ; nodes.push( at ); links.push( {source: ap , target: at },{source: af , target: ap },{source: af , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  al = {id: 'al', name:'damian'},ap = nodes[0],at = nodes[1] ; nodes.push( al ); links.push( {source: ap , target: at },{source: al , target: ap },{source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  al = nodes[0],at = nodes[1] ; /* nodes.push(); */ links.push( {source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  af = {id: 'af', name:'sepherl'},al = nodes[0],an = {id: 'an', name:'salerl'},at = nodes[1] ; nodes.push( af,an ); links.push( {source: an , target: at },{source: al , target: an },{source: al , target: at },{source: af , target: an },{source: af , target: al },{source: af , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigster Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'an','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ad = {id: 'ad', name:'friedrich'},al = nodes[0],am = {id: 'am', name:'johann'},at = nodes[1] ; nodes.push( ad,am ); links.push( {source: al , target: at },{source: al , target: am },{source: am , target: at },{source: ad , target: al },{source: ad , target: at },{source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigster Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'al','am','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ak = {id: 'ak', name:'goldfuchs'},ao = {id: 'ao', name:'bonbon'},at = nodes[0],bg = {id: 'bg', name:'einige_herren'} ; nodes.push( ak,ao,bg ); links.push( {source: ak , target: ao },{source: ak , target: bg },{source: ak , target: at },{source: ao , target: bg },{source: ao , target: at },{source: at , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '28. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtundzwanzigster Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  ak = nodes[0],am = {id: 'am', name:'johann'},ao = nodes[1],ap = {id: 'ap', name:'schlucker'},as = {id: 'as', name:'fanny'},at = nodes[2],av = {id: 'av', name:'herr_von_steinfels'} ; nodes.push( am,ap,as,av ); links.push( {source: as , target: at },{source: as , target: av },{source: at , target: av },{source: ak , target: as },{source: ak , target: at },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: av },{source: ak , target: ap },{source: ao , target: as },{source: ao , target: at },{source: ao , target: av },{source: ao , target: ap },{source: am , target: as },{source: am , target: at },{source: am , target: ao },{source: am , target: av },{source: am , target: ap },{source: ap , target: as },{source: ap , target: at },{source: ap , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '29. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunundzwanzigster Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'as','at','ak','am','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  al = {id: 'al', name:'damian'},ao = nodes[0],ap = nodes[1] ; nodes.push( al ); links.push( {source: al , target: ap },{source: al , target: ao },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '30. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreißigster Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'ap','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  ak = {id: 'ak', name:'goldfuchs'},al = nodes[0],at = {id: 'at', name:'adolf'},av = {id: 'av', name:'herr_von_steinfels'} ; nodes.push( ak,at,av ); links.push( {source: at , target: av },{source: al , target: at },{source: al , target: av },{source: ak , target: at },{source: ak , target: av },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '31. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einunddreißigster Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'av' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  ak = nodes[0],al = nodes[1],am = {id: 'am', name:'johann'},ao = {id: 'ao', name:'bonbon'},ar = {id: 'ar', name:'emilie'},as = {id: 'as', name:'fanny'},at = nodes[2],bh = {id: 'bh', name:'der_herr'},bh = {id: 'bh', name:'der_herr'} ; nodes.push( am,ao,ar,as,bh ); links.push( {source: ar , target: as },{source: ar , target: bh },{source: ar , target: bh },{source: ar , target: at },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: bh },{source: ao , target: bh },{source: ao , target: at },{source: am , target: ar },{source: am , target: ao },{source: am , target: as },{source: am , target: bh },{source: am , target: bh },{source: am , target: at },{source: as , target: bh },{source: as , target: bh },{source: as , target: at },{source: at , target: bh },{source: at , target: bh },{source: al , target: ar },{source: al , target: ao },{source: al , target: am },{source: al , target: as },{source: al , target: bh },{source: al , target: bh },{source: al , target: at },{source: ak , target: ar },{source: ak , target: ao },{source: ak , target: am },{source: ak , target: as },{source: ak , target: bh },{source: ak , target: bh },{source: ak , target: at },{source: ak , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '32. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiunddreißigster Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'am','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  ak = nodes[0],al = nodes[1],ao = nodes[2],ar = nodes[3],as = nodes[4],at = nodes[5] ; /* nodes.push(); */ links.push( {source: as , target: at },{source: al , target: as },{source: al , target: at },{source: al , target: ar },{source: al , target: ao },{source: ar , target: as },{source: ar , target: at },{source: ao , target: as },{source: ao , target: at },{source: ao , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: al },{source: ak , target: ar },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '33. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiunddreißigster Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'as','at','ar','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  al = nodes[0],am = {id: 'am', name:'johann'},ao = nodes[1],bi = {id: 'bi', name:'grob'},bj = {id: 'bj', name:'trumpf'} ; nodes.push( am,bi,bj ); links.push( {source: bi , target: bj },{source: al , target: bi },{source: al , target: bj },{source: al , target: am },{source: al , target: ao },{source: am , target: bi },{source: am , target: bj },{source: am , target: ao },{source: ao , target: bi },{source: ao , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '34. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierunddreißigster Auftritt';
}, 260000);

setTimeout(function() { console.log('remv53'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 263750);

setTimeout(function() { console.log('load54'); var  af = {id: 'af', name:'sepherl'},ak = {id: 'ak', name:'goldfuchs'},al = nodes[0],ao = nodes[1],ap = {id: 'ap', name:'schlucker'},az = {id: 'az', name:'chor_der_gäste'},bi = nodes[2],bj = nodes[3] ; nodes.push( af,ak,ap,az ); links.push( {source: ak , target: ap },{source: ak , target: bi },{source: ak , target: al },{source: ak , target: bj },{source: ak , target: ao },{source: ak , target: az },{source: ap , target: bi },{source: ap , target: bj },{source: ap , target: az },{source: af , target: ak },{source: af , target: ap },{source: af , target: bi },{source: af , target: al },{source: af , target: bj },{source: af , target: ao },{source: af , target: az },{source: bi , target: bj },{source: al , target: ap },{source: al , target: bi },{source: al , target: bj },{source: al , target: ao },{source: al , target: az },{source: ao , target: ap },{source: ao , target: bi },{source: ao , target: bj },{source: ao , target: az },{source: az , target: bi },{source: az , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '35. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfunddreißigster Auftritt';
}, 265000);

setTimeout(function() { console.log('remv54'); var rm = [ 'ap','af','bi','al','bj','ao','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 268750);

setTimeout(function() { console.log('load55'); var  ak = nodes[0],am = {id: 'am', name:'johann'} ; nodes.push( am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 270000);

setTimeout(function() { console.log('remv55'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 273750);

setTimeout(function() { console.log('load56'); var  ak = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 275000);

setTimeout(function() { console.log('remv56'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 278750);

setTimeout(function() { console.log('load57'); var  af = {id: 'af', name:'sepherl'},al = {id: 'al', name:'damian'},ap = {id: 'ap', name:'schlucker'},bk = {id: 'bk', name:'beamter'} ; nodes.push( af,al,ap,bk ); links.push( {source: af , target: ap },{source: af , target: bk },{source: af , target: al },{source: ap , target: bk },{source: al , target: ap },{source: al , target: bk } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 280000);

setTimeout(function() { console.log('remv57'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 283750);

setTimeout(function() { console.log('load58'); var  af = nodes[0],al = nodes[1],ap = nodes[2],at = {id: 'at', name:'adolf'},bk = nodes[3] ; nodes.push( at ); links.push( {source: at , target: bk },{source: ap , target: at },{source: ap , target: bk },{source: al , target: at },{source: al , target: bk },{source: al , target: ap },{source: af , target: at },{source: af , target: bk },{source: af , target: ap },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 285000);

setTimeout(function() { console.log('remv58'); var rm = [ 'at','bk' ]; rmNodes(rm); rmLinks(rm); start(); }, 288750);

setTimeout(function() { console.log('load59'); var  af = nodes[0],al = nodes[1],ap = nodes[2] ; /* nodes.push(); */ links.push( {source: al , target: ap },{source: af , target: ap },{source: af , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 290000);

setTimeout(function() { console.log('remv59'); var rm = [ 'ap','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 293750);

setTimeout(function() { console.log('load60'); var  al = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 295000);

setTimeout(function() { console.log('remv60'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 298750);

setTimeout(function() { console.log('load61'); var  am = {id: 'am', name:'johann'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 300000);

setTimeout(function() { console.log('remv61'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 303750);

setTimeout(function() { console.log('load62'); var  an = {id: 'an', name:'salerl'} ; nodes.push( an ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 305000);

setTimeout(function() { console.log('remv62'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 308750);

setTimeout(function() { console.log('load63'); var  as = {id: 'as', name:'fanny'} ; nodes.push( as ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 310000);

setTimeout(function() { console.log('remv63'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 313750);

setTimeout(function() { console.log('load64'); var  al = {id: 'al', name:'damian'},am = {id: 'am', name:'johann'},an = {id: 'an', name:'salerl'},as = nodes[0] ; nodes.push( al,am,an ); links.push( {source: al , target: as },{source: al , target: am },{source: al , target: an },{source: am , target: as },{source: am , target: an },{source: an , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 315000);

setTimeout(function() { console.log('remv64'); var rm = [ 'al','as','am','an' ]; rmNodes(rm); rmLinks(rm); start(); }, 318750);

setTimeout(function() { console.log('load65'); var  ao = {id: 'ao', name:'bonbon'} ; nodes.push( ao ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 320000);

setTimeout(function() { console.log('remv65'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 323750);

setTimeout(function() { console.log('load66'); var  am = {id: 'am', name:'johann'},ao = nodes[0] ; nodes.push( am ); links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 325000);

setTimeout(function() { console.log('remv66'); var rm = [ 'am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 328750);

setTimeout(function() { console.log('load67'); var  al = {id: 'al', name:'damian'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 330000);

setTimeout(function() { console.log('remv67'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 333750);

setTimeout(function() { console.log('load68'); var  aq = {id: 'aq', name:'zins'} ; nodes.push( aq ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 335000);

setTimeout(function() { console.log('remv68'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 338750);

setTimeout(function() { console.log('load69'); var  al = {id: 'al', name:'damian'},ap = {id: 'ap', name:'schlucker'},aq = nodes[0] ; nodes.push( al,ap ); links.push( {source: ap , target: aq },{source: al , target: ap },{source: al , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfzehnter Auftritt';
}, 340000);

setTimeout(function() { console.log('remv69'); var rm = [ 'ap','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 343750);

setTimeout(function() { console.log('load70'); var  al = nodes[0],bi = {id: 'bi', name:'grob'},bj = {id: 'bj', name:'trumpf'} ; nodes.push( bi,bj ); links.push( {source: bi , target: bj },{source: al , target: bj },{source: al , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 345000);

setTimeout(function() { console.log('remv70'); var rm = [ 'bj','bi','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 348750);

setTimeout(function() { console.log('load71'); var  am = {id: 'am', name:'johann'},ao = {id: 'ao', name:'bonbon'} ; nodes.push( am,ao ); links.push( {source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 350000);

setTimeout(function() { console.log('remv71'); var rm = [ 'am','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 353750);

setTimeout(function() { console.log('load72'); var  ad = {id: 'ad', name:'friedrich'},ae = {id: 'ae', name:'anton'},bm = {id: 'bm', name:'die_bedienten'} ; nodes.push( ad,ae,bm ); links.push( {source: ad , target: ae },{source: ad , target: bm },{source: ae , target: bm } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 355000);

setTimeout(function() { console.log('remv72'); var rm = [ 'ad','ae','bm' ]; rmNodes(rm); rmLinks(rm); start(); }, 358750);

setTimeout(function() { console.log('load73'); var  am = {id: 'am', name:'johann'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 360000);

setTimeout(function() { console.log('remv73'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 363750);

setTimeout(function() { console.log('load74'); var  al = {id: 'al', name:'damian'},bi = {id: 'bi', name:'grob'},bj = {id: 'bj', name:'trumpf'} ; nodes.push( al,bi,bj ); links.push( {source: al , target: bi },{source: al , target: bj },{source: bi , target: bj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 365000);

setTimeout(function() { console.log('remv74'); var rm = [ 'al','bi','bj' ]; rmNodes(rm); rmLinks(rm); start(); }, 368750);

setTimeout(function() { console.log('load75'); var  ad = {id: 'ad', name:'friedrich'},ao = {id: 'ao', name:'bonbon'},bl = {id: 'bl', name:'bediente'} ; nodes.push( ad,ao,bl ); links.push( {source: ao , target: bl },{source: ad , target: ao },{source: ad , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 370000);

setTimeout(function() { console.log('remv75'); var rm = [ 'ao','ad','bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 373750);

setTimeout(function() { console.log('load76'); var  al = {id: 'al', name:'damian'},an = {id: 'an', name:'salerl'} ; nodes.push( al,an ); links.push( {source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 375000);

setTimeout(function() { console.log('remv76'); var rm = [ 'an','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 378750);

setTimeout(function() { console.log('load77'); var  ad = {id: 'ad', name:'friedrich'},ak = {id: 'ak', name:'goldfuchs'},bl = {id: 'bl', name:'bediente'} ; nodes.push( ad,ak,bl ); links.push( {source: ak , target: bl },{source: ad , target: ak },{source: ad , target: bl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 380000);

setTimeout(function() { console.log('remv77'); var rm = [ 'bl' ]; rmNodes(rm); rmLinks(rm); start(); }, 383750);

setTimeout(function() { console.log('load78'); var  ad = nodes[0],ak = nodes[1],ao = {id: 'ao', name:'bonbon'},aq = {id: 'aq', name:'zins'} ; nodes.push( ao,aq ); links.push( {source: ad , target: aq },{source: ad , target: ak },{source: ad , target: ao },{source: ak , target: aq },{source: ak , target: ao },{source: ao , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierundzwanzigster Auftritt';
}, 385000);

setTimeout(function() { console.log('remv78'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 388750);

setTimeout(function() { console.log('load79'); var  ad = nodes[0],ak = nodes[1],am = {id: 'am', name:'johann'},ao = nodes[2],aq = nodes[3],bm = {id: 'bm', name:'die_bedienten'},bn = {id: 'bn', name:'ein_wächter'},bo = {id: 'bo', name:'zweiter_wächter'} ; nodes.push( am,bm,bn,bo ); links.push( {source: am , target: bm },{source: am , target: aq },{source: am , target: ao },{source: am , target: bn },{source: am , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: ad , target: am },{source: ad , target: bm },{source: ad , target: aq },{source: ad , target: ao },{source: ad , target: ak },{source: ad , target: bn },{source: ad , target: bo },{source: aq , target: bm },{source: aq , target: bn },{source: aq , target: bo },{source: ao , target: bm },{source: ao , target: aq },{source: ao , target: bn },{source: ao , target: bo },{source: ak , target: am },{source: ak , target: bm },{source: ak , target: aq },{source: ak , target: ao },{source: ak , target: bn },{source: ak , target: bo },{source: bn , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '25. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfundzwanzigster Auftritt';
}, 390000);

setTimeout(function() { console.log('remv79'); var rm = [ 'am','bm','ad','ao','bn','bo' ]; rmNodes(rm); rmLinks(rm); start(); }, 393750);

setTimeout(function() { console.log('load80'); var  ak = nodes[0],aq = nodes[1],ar = {id: 'ar', name:'emilie'} ; nodes.push( ar ); links.push( {source: ak , target: ar },{source: ak , target: aq },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '26. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechsundzwanzigster Auftritt';
}, 395000);

setTimeout(function() { console.log('remv80'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 398750);

setTimeout(function() { console.log('load81'); var  af = {id: 'af', name:'sepherl'},ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'nettel'},ai = {id: 'ai', name:'seppel'},aj = {id: 'aj', name:'resi'},ak = nodes[0],ap = {id: 'ap', name:'schlucker'},aq = nodes[1],ar = nodes[2] ; nodes.push( af,ag,ah,ai,aj,ap ); links.push( {source: ap , target: aq },{source: ap , target: ar },{source: af , target: ap },{source: af , target: ai },{source: af , target: ak },{source: af , target: aq },{source: af , target: ar },{source: af , target: ag },{source: af , target: ah },{source: af , target: aj },{source: ai , target: ap },{source: ai , target: ak },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: aj },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: aq , target: ar },{source: ag , target: ap },{source: ag , target: ai },{source: ag , target: ak },{source: ag , target: aq },{source: ag , target: ar },{source: ag , target: ah },{source: ag , target: aj },{source: ah , target: ap },{source: ah , target: ai },{source: ah , target: ak },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: aj },{source: aj , target: ap },{source: aj , target: ak },{source: aj , target: aq },{source: aj , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '27. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenundzwanzigster Auftritt';
}, 400000);

setTimeout(function() { console.log('remv81'); var rm = [ 'ap','af','ai','ak','ar','ag','ah','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 403750);

setTimeout(function() { console.log('load82'); var  aq = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '28. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtundzwanzigster Auftritt';
}, 405000);

setTimeout(function() { console.log('remv82'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 408750);

setTimeout(function() { console.log('load83'); var  af = {id: 'af', name:'sepherl'},ag = {id: 'ag', name:'christoph'},ah = {id: 'ah', name:'nettel'},ai = {id: 'ai', name:'seppel'},aj = {id: 'aj', name:'resi'},ak = {id: 'ak', name:'goldfuchs'},ap = {id: 'ap', name:'schlucker'},aq = nodes[0],ar = {id: 'ar', name:'emilie'} ; nodes.push( af,ag,ah,ai,aj,ak,ap,ar ); links.push( {source: af , target: ap },{source: af , target: aq },{source: af , target: ag },{source: af , target: ai },{source: af , target: ah },{source: af , target: aj },{source: af , target: ak },{source: af , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ar },{source: ai , target: ap },{source: ai , target: aq },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: ar },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ar },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: ak },{source: aj , target: ar },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '29. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunundzwanzigster Auftritt';
}, 410000);

setTimeout(function() { console.log('remv83'); var rm = [ 'af','ap','aq','ag','ai','ah','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 413750);

setTimeout(function() { console.log('load84'); var  ar = nodes[0],as = {id: 'as', name:'fanny'} ; nodes.push( as ); links.push( {source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '30. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreißigster Auftritt';
}, 415000);

setTimeout(function() { console.log('remv84'); var rm = [ 'as','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 418750);

setTimeout(function() { console.log('load85'); var  ak = {id: 'ak', name:'goldfuchs'},aq = {id: 'aq', name:'zins'},at = {id: 'at', name:'adolf'} ; nodes.push( ak,aq,at ); links.push( {source: ak , target: at },{source: ak , target: aq },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '31. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einunddreißigster Auftritt';
}, 420000);

setTimeout(function() { console.log('remv85'); var rm = [ 'at','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 423750);

setTimeout(function() { console.log('load86'); var  ak = nodes[0],al = {id: 'al', name:'damian'},an = {id: 'an', name:'salerl'},ba = {id: 'ba', name:'chor'} ; nodes.push( al,an,ba ); links.push( {source: al , target: an },{source: al , target: ba },{source: an , target: ba },{source: ak , target: al },{source: ak , target: an },{source: ak , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '32. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiunddreißigster Auftritt';
}, 425000);
