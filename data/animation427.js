setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'omar'},ab = {id: 'ab', name:'alle_volk'},ac = {id: 'ac', name:'hassar'},ad = {id: 'ad', name:'mansor'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ad = nodes[2],ae = {id: 'ae', name:'alzinde'},af = {id: 'af', name:'moisasur'},ag = {id: 'ag', name:'erster_geist'} ; nodes.push( ab,ae,af,ag ); links.push( {source: ae , target: af },{source: ae , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: aa , target: ae },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ag },{source: ab , target: ae },{source: ab , target: ad },{source: ab , target: af },{source: ab , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','ad','aa','ab','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ai = {id: 'ai', name:'gluthahn'} ; nodes.push( ai ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ai = nodes[0],aj = {id: 'aj', name:'trautel'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ae = {id: 'ae', name:'alzinde'} ; nodes.push( ae ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ae = nodes[0],ai = {id: 'ai', name:'gluthahn'} ; nodes.push( ai ); links.push( {source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = nodes[0],ai = nodes[1],ak = {id: 'ak', name:'hans'},al = {id: 'al', name:'mirzel_gutmütig'} ; nodes.push( ak,al ); links.push( {source: ak , target: al },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: ai },{source: ai , target: ak },{source: ai , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ak','al','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ai = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ae = {id: 'ae', name:'alzinde'},ai = nodes[0],aj = {id: 'aj', name:'trautel'} ; nodes.push( ae,aj ); links.push( {source: ai , target: aj },{source: ae , target: aj },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'aj','ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  am = {id: 'am', name:'ariel'},an = {id: 'an', name:'stimme_des_genius'} ; nodes.push( am,an ); links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  an = nodes[0],ao = {id: 'ao', name:'hoanghu'},ap = {id: 'ap', name:'ein_häuptling'} ; nodes.push( ao,ap ); links.push( {source: an , target: ao },{source: an , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  an = nodes[0],an = nodes[0],ao = nodes[1],aq = {id: 'aq', name:'carambuco'},ar = {id: 'ar', name:'ossa'} ; nodes.push( an,aq,ar ); links.push( {source: aq , target: ar },{source: an , target: aq },{source: an , target: ar },{source: an , target: ao },{source: ao , target: aq },{source: ao , target: ar },{source: an , target: aq },{source: an , target: ar },{source: an , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'aq','ar','an','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ah = {id: 'ah', name:'alle_bediente'},as = {id: 'as', name:'hänfling'} ; nodes.push( ah,as ); links.push( {source: ah , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = {id: 'ae', name:'alzinde'},ai = {id: 'ai', name:'gluthahn'},as = nodes[0] ; nodes.push( ae,ai ); links.push( {source: ai , target: as },{source: ae , target: ai },{source: ae , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ae = nodes[0],ai = nodes[1],at = {id: 'at', name:'rossi'} ; nodes.push( at ); links.push( {source: ai , target: at },{source: ae , target: at },{source: ae , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'at','ai','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  an = {id: 'an', name:'stimme_des_genius'},au = {id: 'au', name:'erster_schatten'},au = {id: 'au', name:'erster_schatten'},av = {id: 'av', name:'genius_der_tugend'},aw = {id: 'aw', name:'genius_der_vergänglichkeit'},ax = {id: 'ax', name:'eine_stimme'},ay = {id: 'ay', name:'leiser_chor_der_genien'} ; nodes.push( an,au,av,aw,ax,ay ); links.push( {source: an , target: au },{source: an , target: av },{source: an , target: au },{source: an , target: aw },{source: an , target: ax },{source: an , target: ay },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: au , target: av },{source: au , target: aw },{source: au , target: ax },{source: au , target: ay },{source: aw , target: ax },{source: aw , target: ay },{source: ax , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'an','au','av','aw','ax','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  at = {id: 'at', name:'rossi'},az = {id: 'az', name:'amtmann'} ; nodes.push( at,az ); links.push( {source: at , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ak = {id: 'ak', name:'hans'},al = {id: 'al', name:'mirzel_gutmütig'},at = nodes[0],az = nodes[1],ba = {id: 'ba', name:'aktuar'} ; nodes.push( ak,al,ba ); links.push( {source: az , target: ba },{source: ak , target: az },{source: ak , target: al },{source: ak , target: at },{source: ak , target: ba },{source: al , target: az },{source: al , target: at },{source: al , target: ba },{source: at , target: az },{source: at , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'al','ba' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ai = {id: 'ai', name:'gluthahn'},ak = nodes[0],at = nodes[1],az = nodes[2] ; nodes.push( ai ); links.push( {source: ai , target: az },{source: ai , target: at },{source: ai , target: ak },{source: at , target: az },{source: ak , target: az },{source: ak , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ai = nodes[0],ak = nodes[1],at = nodes[2],az = nodes[3],bb = {id: 'bb', name:'kohlenbauer'} ; nodes.push( bb ); links.push( {source: az , target: bb },{source: ai , target: az },{source: ai , target: bb },{source: ai , target: at },{source: ai , target: ak },{source: at , target: az },{source: at , target: bb },{source: ak , target: az },{source: ak , target: bb },{source: ak , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'bb','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ae = {id: 'ae', name:'alzinde'},ak = nodes[0],al = {id: 'al', name:'mirzel_gutmütig'},al = {id: 'al', name:'mirzel_gutmütig'},at = nodes[2],az = nodes[3],ba = {id: 'ba', name:'aktuar'} ; nodes.push( ae,al,ba ); links.push( {source: ak , target: al },{source: ak , target: az },{source: ak , target: ba },{source: ak , target: at },{source: ak , target: al },{source: al , target: az },{source: al , target: ba },{source: al , target: at },{source: az , target: ba },{source: ae , target: ak },{source: ae , target: al },{source: ae , target: az },{source: ae , target: ba },{source: ae , target: at },{source: ae , target: al },{source: at , target: az },{source: at , target: ba },{source: al , target: az },{source: al , target: ba },{source: al , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak','al','az','ba','at' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ae = nodes[0],ao = {id: 'ao', name:'hoanghu'},av = {id: 'av', name:'genius_der_tugend'},aw = {id: 'aw', name:'genius_der_vergänglichkeit'},bc = {id: 'bc', name:'kerkermeister'} ; nodes.push( ao,av,aw,bc ); links.push( {source: ae , target: bc },{source: ae , target: aw },{source: ae , target: ao },{source: ae , target: av },{source: aw , target: bc },{source: ao , target: bc },{source: ao , target: aw },{source: ao , target: av },{source: av , target: bc },{source: av , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 105000);
