setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'kern'},ab = {id: 'ab', name:'weinhold'},ac = {id: 'ac', name:'zunder'},ad = {id: 'ad', name:'annchen'},ae = {id: 'ae', name:'wirth'} ; nodes.push( aa,ab,ac,ad,ae ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ac , target: ad },{source: ac , target: ae },{source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ac = nodes[2],ad = nodes[3],ae = nodes[4],af = {id: 'af', name:'wagner'},ag = {id: 'ag', name:'nase'},ah = {id: 'ah', name:'murrner'},ai = {id: 'ai', name:'andere_bürger'},ai = {id: 'ai', name:'andere_bürger'},aj = {id: 'aj', name:'alle_studenten'},aj = {id: 'aj', name:'alle_studenten'},aj = {id: 'aj', name:'alle_studenten'} ; nodes.push( af,ag,ah,ai,aj ); links.push( {source: ab , target: af },{source: ab , target: ac },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: aj },{source: ab , target: ad },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: aj },{source: af , target: ai },{source: af , target: aj },{source: af , target: aj },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: aj },{source: ac , target: ad },{source: aa , target: ab },{source: aa , target: af },{source: aa , target: ac },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ae },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: aj },{source: aa , target: ad },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: aj },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ab','ac','ag','ah','ai','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ae = nodes[4],af = nodes[5],aj = nodes[10],aj = nodes[10] ; /* nodes.push(); */ links.push( {source: ae , target: aj },{source: ae , target: af },{source: ae , target: aj },{source: af , target: aj },{source: af , target: aj },{source: aa , target: aj },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aj','ae','af','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ak = {id: 'ak', name:'faust'},al = {id: 'al', name:'schatten'},am = {id: 'am', name:'mephistopheles'} ; nodes.push( ak,al,am ); links.push( {source: ak , target: al },{source: ak , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ak','al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  aa = {id: 'aa', name:'kern'},af = {id: 'af', name:'wagner'},ag = {id: 'ag', name:'nase'},ah = {id: 'ah', name:'murrner'},ai = {id: 'ai', name:'andere_bürger'},ai = {id: 'ai', name:'andere_bürger'},ai = {id: 'ai', name:'andere_bürger'},an = {id: 'an', name:'unsichtbarer_chor'},ao = {id: 'ao', name:'zwitsch'} ; nodes.push( aa,af,ag,ah,ai,an,ao ); links.push( {source: an , target: ao },{source: ag , target: an },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ao },{source: ag , target: ai },{source: ag , target: ai },{source: ah , target: an },{source: ah , target: ai },{source: ah , target: ao },{source: ah , target: ai },{source: ah , target: ai },{source: ai , target: an },{source: ai , target: ao },{source: ai , target: an },{source: ai , target: ao },{source: aa , target: an },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: ao },{source: aa , target: ai },{source: aa , target: ai },{source: aa , target: af },{source: ai , target: an },{source: ai , target: ao },{source: af , target: an },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: af , target: ao },{source: af , target: ai },{source: af , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'an','ag','ah','ai','ao','aa','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ak = {id: 'ak', name:'faust'},am = {id: 'am', name:'mephistopheles'} ; nodes.push( ak,am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ak = nodes[0],am = nodes[1],ap = {id: 'ap', name:'cosmo'} ; nodes.push( ap ); links.push( {source: am , target: ap },{source: ak , target: am },{source: ak , target: ap } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ak = nodes[0],am = nodes[1],ap = nodes[2],aq = {id: 'aq', name:'graf_robert'},ar = {id: 'ar', name:'bianca'},as = {id: 'as', name:'zofen'},as = {id: 'as', name:'zofen'},as = {id: 'as', name:'zofen'},at = {id: 'at', name:'chor_der_diener'},at = {id: 'at', name:'chor_der_diener'},au = {id: 'au', name:'geschrei_der_frauen'},au = {id: 'au', name:'geschrei_der_frauen'},au = {id: 'au', name:'geschrei_der_frauen'},av = {id: 'av', name:'geschrei_der_männer'},av = {id: 'av', name:'geschrei_der_männer'},av = {id: 'av', name:'geschrei_der_männer'} ; nodes.push( aq,ar,as,at,au,av ); links.push( {source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: aq , target: as },{source: aq , target: au },{source: aq , target: av },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: ar , target: as },{source: ar , target: au },{source: ar , target: av },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: as },{source: ap , target: au },{source: ap , target: av },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: ap },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: ak , target: as },{source: ak , target: at },{source: ak , target: am },{source: ak , target: au },{source: ak , target: av },{source: ak , target: as },{source: ak , target: au },{source: ak , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av },{source: au , target: av },{source: au , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: at , target: av },{source: at , target: au },{source: at , target: av },{source: am , target: aq },{source: am , target: ar },{source: am , target: ap },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: am , target: av },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: am , target: av },{source: am , target: as },{source: am , target: au },{source: am , target: av },{source: au , target: av },{source: au , target: av },{source: au , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: as , target: au },{source: as , target: av },{source: au , target: av },{source: au , target: av },{source: au , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aq','ap','as','at','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ak = nodes[0],am = nodes[1],ar = nodes[4] ; /* nodes.push(); */ links.push( {source: ak , target: ar },{source: ak , target: am },{source: am , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ak','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  am = nodes[1] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  am = nodes[0],aw = {id: 'aw', name:'crabe'} ; nodes.push( aw ); links.push( {source: am , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'aw','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ax = {id: 'ax', name:'dujour'},ay = {id: 'ay', name:'le_doigt'},az = {id: 'az', name:'appeau'} ; nodes.push( ax,ay,az ); links.push( {source: ax , target: ay },{source: ax , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [ 'ax','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  aq = {id: 'aq', name:'graf_robert'} ; nodes.push( aq ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ak = {id: 'ak', name:'faust'},am = {id: 'am', name:'mephistopheles'} ; nodes.push( ak,am ); links.push( {source: ak , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'am','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aw = {id: 'aw', name:'crabe'},ax = {id: 'ax', name:'dujour'},ay = {id: 'ay', name:'le_doigt'},az = {id: 'az', name:'appeau'} ; nodes.push( aw,ax,ay,az ); links.push( {source: ax , target: ay },{source: ax , target: az },{source: ay , target: az },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ak = {id: 'ak', name:'faust'},am = {id: 'am', name:'mephistopheles'},ax = nodes[1],ay = nodes[2],az = nodes[3] ; nodes.push( ak,am ); links.push( {source: ax , target: ay },{source: ax , target: az },{source: ak , target: ax },{source: ak , target: am },{source: ak , target: ay },{source: ak , target: az },{source: am , target: ax },{source: am , target: ay },{source: am , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Achte Scene.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ax','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ak = nodes[0],am = nodes[1],aq = {id: 'aq', name:'graf_robert'},ba = {id: 'ba', name:'einige'} ; nodes.push( aq,ba ); links.push( {source: aq , target: ba },{source: ak , target: aq },{source: ak , target: ba },{source: ak , target: am },{source: am , target: aq },{source: am , target: ba } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunte Scene.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'aq','ba','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ak = nodes[0],bb = {id: 'bb', name:'pater_anselmo'} ; nodes.push( bb ); links.push( {source: ak , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ak = nodes[0],bb = nodes[1],bc = {id: 'bc', name:'der_kaiser'} ; nodes.push( bc ); links.push( {source: ak , target: bb },{source: ak , target: bc },{source: bb , target: bc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'bb','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ak = nodes[0],am = {id: 'am', name:'mephistopheles'},bd = {id: 'bd', name:'aus_der_ferne'} ; nodes.push( am,bd ); links.push( {source: ak , target: am },{source: ak , target: bd },{source: am , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'am','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ak = nodes[0],be = {id: 'be', name:'rosa'},bf = {id: 'bf', name:'juanito'} ; nodes.push( be,bf ); links.push( {source: ak , target: be },{source: ak , target: bf },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'ak','be','bf' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  aq = {id: 'aq', name:'graf_robert'},aq = {id: 'aq', name:'graf_robert'},bg = {id: 'bg', name:'aus_der_höhe'},bg = {id: 'bg', name:'aus_der_höhe'},bh = {id: 'bh', name:'aus_der_tiefe'},bh = {id: 'bh', name:'aus_der_tiefe'} ; nodes.push( aq,bg,bh ); links.push( {source: aq , target: bg },{source: aq , target: bh },{source: aq , target: bg },{source: aq , target: bh },{source: bg , target: bh },{source: bg , target: bh },{source: aq , target: bg },{source: aq , target: bh },{source: aq , target: bg },{source: aq , target: bh },{source: bg , target: bh },{source: bg , target: bh } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'bg','bh' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  ak = {id: 'ak', name:'faust'},aq = nodes[0],be = {id: 'be', name:'rosa'},bf = {id: 'bf', name:'juanito'} ; nodes.push( ak,be,bf ); links.push( {source: be , target: bf },{source: ak , target: be },{source: ak , target: bf },{source: ak , target: aq },{source: aq , target: be },{source: aq , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  ak = nodes[0],aq = nodes[1],ar = {id: 'ar', name:'bianca'},be = nodes[2],bf = nodes[3] ; nodes.push( ar ); links.push( {source: ak , target: ar },{source: ak , target: aq },{source: ak , target: bf },{source: ak , target: be },{source: ar , target: bf },{source: ar , target: be },{source: aq , target: ar },{source: aq , target: bf },{source: aq , target: be },{source: be , target: bf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'ar','aq','bf','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ak = nodes[0],bb = {id: 'bb', name:'pater_anselmo'} ; nodes.push( bb ); links.push( {source: ak , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Erste Scene.';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bb' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ak = nodes[0],am = {id: 'am', name:'mephistopheles'},be = {id: 'be', name:'rosa'} ; nodes.push( am,be ); links.push( {source: am , target: be },{source: ak , target: am },{source: ak , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweite Scene.';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'am','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ak = nodes[0],bb = {id: 'bb', name:'pater_anselmo'},bb = {id: 'bb', name:'pater_anselmo'} ; nodes.push( bb ); links.push( {source: ak , target: bb },{source: ak , target: bb } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritte Scene.';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'bb','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  bc = {id: 'bc', name:'der_kaiser'},bi = {id: 'bi', name:'chor_der_mönche'} ; nodes.push( bc,bi ); links.push( {source: bc , target: bi } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierte Scene.';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'bi','bc' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  am = {id: 'am', name:'mephistopheles'} ; nodes.push( am ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfte Scene.';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  aa = {id: 'aa', name:'kern'},af = {id: 'af', name:'wagner'},ag = {id: 'ag', name:'nase'},ah = {id: 'ah', name:'murrner'},ak = {id: 'ak', name:'faust'},ao = {id: 'ao', name:'zwitsch'} ; nodes.push( aa,af,ag,ah,ak,ao ); links.push( {source: ag , target: ah },{source: ag , target: ao },{source: ag , target: ak },{source: ah , target: ao },{source: ah , target: ak },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ao },{source: aa , target: af },{source: aa , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: ao },{source: af , target: ak },{source: ak , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechste Scene.';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ag','ah','ao','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  af = nodes[1],ak = nodes[4] ; /* nodes.push(); */ links.push( {source: af , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Scene'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebente Scene.';
}, 150000);
