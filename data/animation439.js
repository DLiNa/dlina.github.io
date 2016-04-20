setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'hamatelliwa'},ab = {id: 'ab', name:'abdallah'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'bernhard'} ; nodes.push( ac ); links.push( {source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ad = {id: 'ad', name:'lothar'},ae = {id: 'ae', name:'hugo'},af = {id: 'af', name:'ludwig_der_deutsche'},ag = {id: 'ag', name:'matfried'} ; nodes.push( ad,ae,af,ag ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ae , target: af },{source: ae , target: ag },{source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ad = nodes[0],ae = nodes[1],af = nodes[2],ag = nodes[3],ah = {id: 'ah', name:'elisachar'} ; nodes.push( ah ); links.push( {source: ad , target: af },{source: ad , target: ah },{source: ad , target: ag },{source: ad , target: ae },{source: af , target: ah },{source: af , target: ag },{source: ag , target: ah },{source: ae , target: af },{source: ae , target: ah },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ah','ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ad = nodes[0],af = nodes[2],ai = {id: 'ai', name:'karl'} ; nodes.push( ai ); links.push( {source: ad , target: ai },{source: ad , target: af },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ad = nodes[0],af = nodes[1],ai = nodes[2],aj = {id: 'aj', name:'judith'} ; nodes.push( aj ); links.push( {source: ad , target: aj },{source: ad , target: ai },{source: ad , target: af },{source: ai , target: aj },{source: af , target: aj },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  af = nodes[1],ai = nodes[2],aj = nodes[3],ak = {id: 'ak', name:'bischof_ebo'},al = {id: 'al', name:'agobard'},am = {id: 'am', name:'wala'} ; nodes.push( ak,al,am ); links.push( {source: af , target: aj },{source: af , target: ai },{source: af , target: ak },{source: af , target: al },{source: af , target: am },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ai','ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ac = {id: 'ac', name:'bernhard'},af = nodes[0],aj = nodes[2] ; nodes.push( ac ); links.push( {source: af , target: aj },{source: ac , target: af },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'af','ac','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  an = {id: 'an', name:'erster'},an = {id: 'an', name:'erster'},ao = {id: 'ao', name:'zweiter'},ap = {id: 'ap', name:'dritter'} ; nodes.push( an,ao,ap ); links.push( {source: an , target: ao },{source: an , target: ap },{source: ao , target: ap },{source: an , target: ao },{source: an , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  an = nodes[0],aq = {id: 'aq', name:'frechulf'} ; nodes.push( aq ); links.push( {source: an , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ae = {id: 'ae', name:'hugo'},ag = {id: 'ag', name:'matfried'},aq = nodes[1] ; nodes.push( ae,ag ); links.push( {source: ag , target: aq },{source: ae , target: ag },{source: ae , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ab = {id: 'ab', name:'abdallah'},ac = {id: 'ac', name:'bernhard'},ae = nodes[0],ag = nodes[1] ; nodes.push( ab,ac ); links.push( {source: ae , target: ag },{source: ac , target: ag },{source: ac , target: ae },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ab = nodes[0],ac = nodes[1],ar = {id: 'ar', name:'satilatlas'},as = {id: 'as', name:'temin'} ; nodes.push( ar,as ); links.push( {source: ac , target: ar },{source: ac , target: as },{source: ar , target: as },{source: ab , target: ac },{source: ab , target: ar },{source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ar','as','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ac = nodes[1],at = {id: 'at', name:'rudthardt'},au = {id: 'au', name:'ottgar'},av = {id: 'av', name:'humfried'} ; nodes.push( at,au,av ); links.push( {source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'ac','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ae = {id: 'ae', name:'hugo'},ag = {id: 'ag', name:'matfried'},at = nodes[1],au = nodes[2] ; nodes.push( ae,ag ); links.push( {source: ae , target: ag },{source: ae , target: at },{source: ae , target: au },{source: ag , target: at },{source: ag , target: au },{source: at , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ac = {id: 'ac', name:'bernhard'},ad = {id: 'ad', name:'lothar'},ae = nodes[0],af = {id: 'af', name:'ludwig_der_deutsche'},af = {id: 'af', name:'ludwig_der_deutsche'},ag = nodes[1],aj = {id: 'aj', name:'judith'},ak = {id: 'ak', name:'bischof_ebo'},al = {id: 'al', name:'agobard'},am = {id: 'am', name:'wala'},at = nodes[2],aw = {id: 'aw', name:'chorknaben'},ax = {id: 'ax', name:'die_franken'},ay = {id: 'ay', name:'kaiser_ludwig'} ; nodes.push( ac,ad,af,aj,ak,al,am,aw,ax,ay ); links.push( {source: aw , target: ax },{source: aw , target: ay },{source: ac , target: aw },{source: ac , target: ad },{source: ac , target: ag },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: am },{source: ac , target: at },{source: ac , target: al },{source: ac , target: ak },{source: ac , target: ax },{source: ac , target: aj },{source: ac , target: af },{source: ac , target: ay },{source: ad , target: aw },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: am },{source: ad , target: at },{source: ad , target: al },{source: ad , target: ak },{source: ad , target: ax },{source: ad , target: aj },{source: ad , target: af },{source: ad , target: ay },{source: ag , target: aw },{source: ag , target: am },{source: ag , target: at },{source: ag , target: al },{source: ag , target: ak },{source: ag , target: ax },{source: ag , target: aj },{source: ag , target: ay },{source: ae , target: aw },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: am },{source: ae , target: at },{source: ae , target: al },{source: ae , target: ak },{source: ae , target: ax },{source: ae , target: aj },{source: ae , target: af },{source: ae , target: ay },{source: af , target: aw },{source: af , target: ag },{source: af , target: am },{source: af , target: at },{source: af , target: al },{source: af , target: ak },{source: af , target: ax },{source: af , target: aj },{source: af , target: ay },{source: am , target: aw },{source: am , target: at },{source: am , target: ax },{source: am , target: ay },{source: at , target: aw },{source: at , target: ax },{source: at , target: ay },{source: al , target: aw },{source: al , target: am },{source: al , target: at },{source: al , target: ax },{source: al , target: ay },{source: ak , target: aw },{source: ak , target: am },{source: ak , target: at },{source: ak , target: al },{source: ak , target: ax },{source: ak , target: ay },{source: ax , target: ay },{source: aj , target: aw },{source: aj , target: am },{source: aj , target: at },{source: aj , target: al },{source: aj , target: ak },{source: aj , target: ax },{source: aj , target: ay },{source: af , target: aw },{source: af , target: ag },{source: af , target: am },{source: af , target: at },{source: af , target: al },{source: af , target: ak },{source: af , target: ax },{source: af , target: aj },{source: af , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aw','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ac = nodes[0],ad = nodes[1],ae = nodes[2],af = nodes[3],af = nodes[3],ag = nodes[5],aj = nodes[6],ak = nodes[7],am = nodes[9],ar = {id: 'ar', name:'satilatlas'},at = nodes[10],ax = nodes[12],ay = nodes[13],az = {id: 'az', name:'alle_deutschen'} ; nodes.push( ar,az ); links.push( {source: ac , target: ag },{source: ac , target: ae },{source: ac , target: ay },{source: ac , target: ar },{source: ac , target: am },{source: ac , target: af },{source: ac , target: ad },{source: ac , target: af },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: ax },{source: ac , target: at },{source: ac , target: az },{source: ag , target: ay },{source: ag , target: ar },{source: ag , target: am },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: ax },{source: ag , target: at },{source: ag , target: az },{source: ae , target: ag },{source: ae , target: ay },{source: ae , target: ar },{source: ae , target: am },{source: ae , target: af },{source: ae , target: af },{source: ae , target: aj },{source: ae , target: ak },{source: ae , target: ax },{source: ae , target: at },{source: ae , target: az },{source: ay , target: az },{source: ar , target: ay },{source: ar , target: ax },{source: ar , target: at },{source: ar , target: az },{source: am , target: ay },{source: am , target: ar },{source: am , target: ax },{source: am , target: at },{source: am , target: az },{source: af , target: ag },{source: af , target: ay },{source: af , target: ar },{source: af , target: am },{source: af , target: aj },{source: af , target: ak },{source: af , target: ax },{source: af , target: at },{source: af , target: az },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: ay },{source: ad , target: ar },{source: ad , target: am },{source: ad , target: af },{source: ad , target: af },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: ax },{source: ad , target: at },{source: ad , target: az },{source: af , target: ag },{source: af , target: ay },{source: af , target: ar },{source: af , target: am },{source: af , target: aj },{source: af , target: ak },{source: af , target: ax },{source: af , target: at },{source: af , target: az },{source: aj , target: ay },{source: aj , target: ar },{source: aj , target: am },{source: aj , target: ak },{source: aj , target: ax },{source: aj , target: at },{source: aj , target: az },{source: ak , target: ay },{source: ak , target: ar },{source: ak , target: am },{source: ak , target: ax },{source: ak , target: at },{source: ak , target: az },{source: ax , target: ay },{source: ax , target: az },{source: at , target: ay },{source: at , target: ax },{source: at , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ac','ag','ae','ay','ar','am','af','ad','ak','ax','at','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  aj = nodes[6] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ac = {id: 'ac', name:'bernhard'},ai = {id: 'ai', name:'karl'},aj = nodes[0] ; nodes.push( ac,ai ); links.push( {source: ac , target: aj },{source: ac , target: ai },{source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'aj','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ab = {id: 'ab', name:'abdallah'},ac = nodes[0] ; nodes.push( ab ); links.push( {source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ab = nodes[0],ar = {id: 'ar', name:'satilatlas'},as = {id: 'as', name:'temin'} ; nodes.push( ar,as ); links.push( {source: ar , target: as },{source: ab , target: ar },{source: ab , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aa = {id: 'aa', name:'hamatelliwa'},ab = nodes[0],ar = nodes[1],as = nodes[2] ; nodes.push( aa ); links.push( {source: aa , target: ab },{source: aa , target: ar },{source: aa , target: as },{source: ab , target: ar },{source: ab , target: as },{source: ar , target: as } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  aa = nodes[0],ab = nodes[1],ai = {id: 'ai', name:'karl'},ar = nodes[2] ; nodes.push( ai ); links.push( {source: ai , target: ar },{source: aa , target: ai },{source: aa , target: ar },{source: aa , target: ab },{source: ab , target: ai },{source: ab , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'bernhard'},ai = nodes[2],ar = nodes[3],as = {id: 'as', name:'temin'} ; nodes.push( ac,as ); links.push( {source: aa , target: ac },{source: aa , target: ar },{source: aa , target: as },{source: aa , target: ai },{source: aa , target: ab },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: ai },{source: ar , target: as },{source: ai , target: ar },{source: ai , target: as },{source: ab , target: ac },{source: ab , target: ar },{source: ab , target: as },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'aa','as','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ac = nodes[2],ai = nodes[3],ar = nodes[4],at = {id: 'at', name:'rudthardt'},au = {id: 'au', name:'ottgar'} ; nodes.push( at,au ); links.push( {source: at , target: au },{source: ac , target: at },{source: ac , target: au },{source: ac , target: ar },{source: ac , target: ai },{source: ar , target: at },{source: ar , target: au },{source: ai , target: at },{source: ai , target: au },{source: ai , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'at','au','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ac = nodes[0],an = {id: 'an', name:'erster'},ao = {id: 'ao', name:'zweiter'},ap = {id: 'ap', name:'dritter'},ar = nodes[2],as = {id: 'as', name:'temin'},az = {id: 'az', name:'alle_deutschen'} ; nodes.push( an,ao,ap,as,az ); links.push( {source: an , target: ao },{source: an , target: ap },{source: an , target: az },{source: an , target: ar },{source: an , target: as },{source: ao , target: ap },{source: ao , target: az },{source: ao , target: ar },{source: ao , target: as },{source: ap , target: az },{source: ap , target: ar },{source: ap , target: as },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: az },{source: ac , target: ar },{source: ac , target: as },{source: ar , target: az },{source: ar , target: as },{source: as , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'an','ao','ap','ac','az','ar','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  af = {id: 'af', name:'ludwig_der_deutsche'},ag = {id: 'ag', name:'matfried'} ; nodes.push( af,ag ); links.push( {source: af , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ad = {id: 'ad', name:'lothar'},ae = {id: 'ae', name:'hugo'},af = nodes[0],ag = nodes[1] ; nodes.push( ad,ae ); links.push( {source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: af , target: ag },{source: ae , target: af },{source: ae , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'ag','ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ad = nodes[0],af = nodes[2],am = {id: 'am', name:'wala'} ; nodes.push( am ); links.push( {source: af , target: am },{source: ad , target: am },{source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  ab = {id: 'ab', name:'abdallah'},ad = nodes[0],af = nodes[1],ag = {id: 'ag', name:'matfried'},am = nodes[2] ; nodes.push( ab,ag ); links.push( {source: af , target: am },{source: af , target: ag },{source: ab , target: af },{source: ab , target: am },{source: ab , target: ag },{source: ab , target: ad },{source: ag , target: am },{source: ad , target: af },{source: ad , target: am },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  ad = nodes[1],af = nodes[2],ag = nodes[3],am = nodes[4] ; /* nodes.push(); */ links.push( {source: ag , target: am },{source: ad , target: ag },{source: ad , target: af },{source: ad , target: am },{source: af , target: ag },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  ab = {id: 'ab', name:'abdallah'},ad = nodes[0],ae = {id: 'ae', name:'hugo'},af = nodes[1],ag = nodes[2],ai = {id: 'ai', name:'karl'},am = nodes[3] ; nodes.push( ab,ae,ai ); links.push( {source: ad , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ae },{source: ad , target: am },{source: ai , target: am },{source: af , target: ai },{source: af , target: ag },{source: af , target: am },{source: ab , target: ad },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ae },{source: ab , target: am },{source: ag , target: ai },{source: ag , target: am },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'ad','ai','af','ab','ag','ae','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  ac = {id: 'ac', name:'bernhard'},at = {id: 'at', name:'rudthardt'},au = {id: 'au', name:'ottgar'} ; nodes.push( ac,at,au ); links.push( {source: at , target: au },{source: ac , target: at },{source: ac , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  ac = nodes[0],aj = {id: 'aj', name:'judith'} ; nodes.push( aj ); links.push( {source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  ai = {id: 'ai', name:'karl'},aj = nodes[1] ; nodes.push( ai ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  af = {id: 'af', name:'ludwig_der_deutsche'},ai = nodes[0],aj = nodes[1] ; nodes.push( af ); links.push( {source: ai , target: aj },{source: af , target: ai },{source: af , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  af = nodes[0],ai = nodes[1],at = {id: 'at', name:'rudthardt'} ; nodes.push( at ); links.push( {source: af , target: at },{source: af , target: ai },{source: ai , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'at','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  ad = {id: 'ad', name:'lothar'},af = nodes[0],ay = {id: 'ay', name:'kaiser_ludwig'} ; nodes.push( ad,ay ); links.push( {source: af , target: ay },{source: ad , target: af },{source: ad , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'af','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  ac = {id: 'ac', name:'bernhard'},ad = nodes[0],ai = {id: 'ai', name:'karl'},aj = {id: 'aj', name:'judith'},at = {id: 'at', name:'rudthardt'},au = {id: 'au', name:'ottgar'},av = {id: 'av', name:'humfried'},az = {id: 'az', name:'alle_deutschen'} ; nodes.push( ac,ai,aj,at,au,av,az ); links.push( {source: at , target: az },{source: at , target: au },{source: at , target: av },{source: ac , target: at },{source: ac , target: ad },{source: ac , target: az },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: au },{source: ac , target: av },{source: ad , target: at },{source: ad , target: az },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: au },{source: ad , target: av },{source: ai , target: at },{source: ai , target: az },{source: ai , target: aj },{source: ai , target: au },{source: ai , target: av },{source: aj , target: at },{source: aj , target: az },{source: aj , target: au },{source: aj , target: av },{source: au , target: az },{source: au , target: av },{source: av , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'az','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ab = {id: 'ab', name:'abdallah'},ac = nodes[0],ad = nodes[1],af = {id: 'af', name:'ludwig_der_deutsche'},ai = nodes[2],aj = nodes[3],am = {id: 'am', name:'wala'},at = nodes[4],au = nodes[5] ; nodes.push( ab,af,am ); links.push( {source: ab , target: ac },{source: ab , target: at },{source: ab , target: au },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: ad },{source: ab , target: am },{source: ab , target: af },{source: ac , target: at },{source: ac , target: au },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: ad },{source: ac , target: am },{source: ac , target: af },{source: at , target: au },{source: aj , target: at },{source: aj , target: au },{source: aj , target: am },{source: ai , target: at },{source: ai , target: au },{source: ai , target: aj },{source: ai , target: am },{source: ad , target: at },{source: ad , target: au },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: am },{source: ad , target: af },{source: am , target: at },{source: am , target: au },{source: af , target: at },{source: af , target: au },{source: af , target: aj },{source: af , target: ai },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Szene'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 195000);
