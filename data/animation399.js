setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'mollwein'},ab = {id: 'ab', name:'sanitätsrat'},ac = {id: 'ac', name:'major'},ad = {id: 'ad', name:'goldbaum'},ae = {id: 'ae', name:'landrat'},af = {id: 'af', name:'falk'},ag = {id: 'ag', name:'niemeyer'},ah = {id: 'ah', name:'piccolo'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad','ae','af','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ag = nodes[0],ai = {id: 'ai', name:'olga'},aj = {id: 'aj', name:'catilina'},ak = {id: 'ak', name:'spartacus'},al = {id: 'al', name:'jadwiga'},am = {id: 'am', name:'fritz'},an = {id: 'an', name:'zedlitz'},ao = {id: 'ao', name:'schimke'},ap = {id: 'ap', name:'lydia'} ; nodes.push( ai,aj,ak,al,am,an,ao,ap ); links.push( {source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: ap },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: an , target: ao },{source: an , target: ap },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ag , target: am },{source: ag , target: an },{source: ag , target: ao },{source: ag , target: ap },{source: ao , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ai','al','am','ag','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aj = nodes[0],ak = nodes[1],ak = nodes[1],an = nodes[2],aq = {id: 'aq', name:'möros'},aq = {id: 'aq', name:'möros'},ar = {id: 'ar', name:'wache'},as = {id: 'as', name:'cassius'},at = {id: 'at', name:'schladebach'},au = {id: 'au', name:'bäckergeselle'},av = {id: 'av', name:'polizei'},av = {id: 'av', name:'polizei'} ; nodes.push( aq,ar,as,at,au,av ); links.push( {source: ak , target: aq },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: an },{source: ak , target: av },{source: ak , target: av },{source: ak , target: aq },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: an },{source: ak , target: av },{source: ak , target: av },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: aq },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: aj , target: au },{source: aj , target: an },{source: aj , target: av },{source: aj , target: av },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: av },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: av },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: av },{source: au , target: av },{source: au , target: av },{source: an , target: aq },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: av },{source: an , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ak','aj','aq','ar','as','at','au' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ae = {id: 'ae', name:'landrat'},ag = {id: 'ag', name:'niemeyer'},an = nodes[1],ap = {id: 'ap', name:'lydia'},av = nodes[3],aw = {id: 'aw', name:'hoppe'},ax = {id: 'ax', name:'tamaschke'},ay = {id: 'ay', name:'schutzmann'} ; nodes.push( ae,ag,ap,aw,ax,ay ); links.push( {source: ae , target: aw },{source: ae , target: ap },{source: ae , target: ax },{source: ae , target: ay },{source: ae , target: an },{source: ae , target: av },{source: ae , target: ag },{source: aw , target: ax },{source: aw , target: ay },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ay },{source: ap , target: av },{source: ax , target: ay },{source: an , target: aw },{source: an , target: ap },{source: an , target: ax },{source: an , target: ay },{source: an , target: av },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: ag , target: aw },{source: ag , target: ap },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: an },{source: ag , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Akt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aw','ap','ax','ay','an','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = {id: 'ab', name:'sanitätsrat'},ae = nodes[0],af = {id: 'af', name:'falk'},ag = nodes[1],ai = {id: 'ai', name:'olga'},al = {id: 'al', name:'jadwiga'},am = {id: 'am', name:'fritz'},ao = {id: 'ao', name:'schimke'} ; nodes.push( ab,af,ai,al,am,ao ); links.push( {source: ag , target: ai },{source: ag , target: al },{source: ag , target: ao },{source: ag , target: am },{source: ai , target: al },{source: ai , target: ao },{source: ai , target: am },{source: al , target: ao },{source: al , target: am },{source: am , target: ao },{source: af , target: ag },{source: af , target: ai },{source: af , target: al },{source: af , target: ao },{source: af , target: am },{source: ab , target: ag },{source: ab , target: ai },{source: ab , target: al },{source: ab , target: ao },{source: ab , target: am },{source: ab , target: af },{source: ab , target: ae },{source: ae , target: ag },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: ao },{source: ae , target: am },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Akt';
}, 20000);
