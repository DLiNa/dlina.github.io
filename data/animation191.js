setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'könig_nicolo'},ab = {id: 'ab', name:'alma'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = 'Prolog'; var scene = document.getElementById('scene');scene.innerHTML = 'Prolog';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ab = nodes[0],ab = nodes[0],ac = {id: 'ac', name:'erster_bedienter'},ad = {id: 'ad', name:'zweiter_bedienter'},ae = {id: 'ae', name:'der_könig'},ae = {id: 'ae', name:'der_könig'},ae = {id: 'ae', name:'der_könig'},af = {id: 'af', name:'die_bürger'},ag = {id: 'ag', name:'andrea_valori'},ah = {id: 'ah', name:'einige_stimmen'},ah = {id: 'ah', name:'einige_stimmen'},ai = {id: 'ai', name:'prinz_filipo'},ai = {id: 'ai', name:'prinz_filipo'},aj = {id: 'aj', name:'benedetto_nardi'},ak = {id: 'ak', name:'der_söldner'} ; nodes.push( ac,ad,ae,af,ag,ah,ai,aj,ak ); links.push( {source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: aj },{source: ac , target: ak },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: aj },{source: ad , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: af , target: ag },{source: af , target: ah },{source: af , target: ah },{source: af , target: ai },{source: af , target: ai },{source: af , target: aj },{source: af , target: ak },{source: ag , target: ah },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ai , target: aj },{source: ai , target: ak },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: aj },{source: ae , target: ak },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: aj },{source: ab , target: ak },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = 'Erstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Erstes Bild';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ac','ad','af','ag','ah','ai','aj','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ab = nodes[0],ae = nodes[1],al = {id: 'al', name:'der_gutsbesitzer'},am = {id: 'am', name:'der_landstreicher'},am = {id: 'am', name:'der_landstreicher'} ; nodes.push( al,am ); links.push( {source: ae , target: al },{source: ae , target: am },{source: ae , target: am },{source: ab , target: ae },{source: ab , target: al },{source: ab , target: am },{source: ab , target: am },{source: al , target: am },{source: al , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = 'Zweites Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweites Bild';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'al','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ab = nodes[0],ae = nodes[1],an = {id: 'an', name:'meister_pandolfo'},ao = {id: 'ao', name:'michele'},ap = {id: 'ap', name:'noè'},aq = {id: 'aq', name:'battista'},ar = {id: 'ar', name:'die_gesellen'} ; nodes.push( an,ao,ap,aq,ar ); links.push( {source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: ae , target: an },{source: ae , target: ao },{source: ae , target: ap },{source: ae , target: aq },{source: ae , target: ar },{source: ab , target: an },{source: ab , target: ae },{source: ab , target: ao },{source: ab , target: ap },{source: ab , target: aq },{source: ab , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = 'Drittes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Drittes Bild';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aq','ar' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = nodes[0],ae = nodes[1],an = nodes[2],ao = nodes[3],ap = nodes[4],as = {id: 'as', name:'der_oberrichter'},at = {id: 'at', name:'der_prokurator_des_königs'},au = {id: 'au', name:'der_gerichtsaktuar'},av = {id: 'av', name:'der_verteidiger'} ; nodes.push( as,at,au,av ); links.push( {source: as , target: at },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av },{source: ae , target: as },{source: ae , target: at },{source: ae , target: au },{source: ae , target: ao },{source: ae , target: an },{source: ae , target: ap },{source: ae , target: av },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: ap },{source: ao , target: av },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: ao },{source: an , target: ap },{source: an , target: av },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ab , target: as },{source: ab , target: at },{source: ab , target: au },{source: ab , target: ae },{source: ab , target: ao },{source: ab , target: an },{source: ab , target: ap },{source: ab , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = 'Viertes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Viertes Bild';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'as','at','au','ao','an','ap','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ab = nodes[0],ae = nodes[1],aw = {id: 'aw', name:'der_gefängniswärter'} ; nodes.push( aw ); links.push( {source: ae , target: aw },{source: ab , target: ae },{source: ab , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = 'Fünftes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünftes Bild';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aw','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  ae = nodes[0],ax = {id: 'ax', name:'der_kunstreiter'} ; nodes.push( ax ); links.push( {source: ae , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = 'Sechstes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechstes Bild';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ab = {id: 'ab', name:'alma'},ae = nodes[0],ay = {id: 'ay', name:'chorus'},az = {id: 'az', name:'der_erste_theaterbesitzer'},az = {id: 'az', name:'der_erste_theaterbesitzer'},az = {id: 'az', name:'der_erste_theaterbesitzer'},ba = {id: 'ba', name:'der_schauspieler'},bb = {id: 'bb', name:'die_zuschauer'},bc = {id: 'bc', name:'die_kupplerin'},bd = {id: 'bd', name:'die_zuhörer'},be = {id: 'be', name:'der_zweite_theaterbesitzer'},be = {id: 'be', name:'der_zweite_theaterbesitzer'},bg = {id: 'bg', name:'der_zuschauer'} ; nodes.push( ab,ay,az,ba,bb,bc,bd,be,bg ); links.push( {source: ay , target: az },{source: ay , target: ba },{source: ay , target: az },{source: ay , target: bb },{source: ay , target: bg },{source: ay , target: bc },{source: ay , target: bd },{source: ay , target: be },{source: ay , target: az },{source: ay , target: be },{source: az , target: ba },{source: az , target: bb },{source: az , target: bg },{source: az , target: bc },{source: az , target: bd },{source: az , target: be },{source: az , target: be },{source: ba , target: bb },{source: ba , target: bg },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: be },{source: ba , target: be },{source: az , target: ba },{source: az , target: bb },{source: az , target: bg },{source: az , target: bc },{source: az , target: bd },{source: az , target: be },{source: az , target: be },{source: bb , target: bg },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: bb , target: be },{source: bc , target: bg },{source: bc , target: bd },{source: bc , target: be },{source: bc , target: be },{source: ae , target: ay },{source: ae , target: az },{source: ae , target: ba },{source: ae , target: az },{source: ae , target: bb },{source: ae , target: bg },{source: ae , target: bc },{source: ae , target: bd },{source: ae , target: be },{source: ae , target: az },{source: ae , target: be },{source: ab , target: ay },{source: ab , target: az },{source: ab , target: ba },{source: ab , target: az },{source: ab , target: bb },{source: ab , target: bg },{source: ab , target: bc },{source: ab , target: ae },{source: ab , target: bd },{source: ab , target: be },{source: ab , target: az },{source: ab , target: be },{source: bd , target: bg },{source: bd , target: be },{source: bd , target: be },{source: be , target: bg },{source: az , target: ba },{source: az , target: bb },{source: az , target: bg },{source: az , target: bc },{source: az , target: bd },{source: az , target: be },{source: az , target: be },{source: be , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = 'Siebentes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebentes Bild';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ay','ba','bb','bc','bd','be' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ab = nodes[0],ae = nodes[1],ae = nodes[1],ai = {id: 'ai', name:'prinz_filipo'},az = nodes[2],bf = {id: 'bf', name:'ein_edelknabe'},bg = nodes[4] ; nodes.push( ai,bf ); links.push( {source: ae , target: bf },{source: ae , target: az },{source: ae , target: ai },{source: ae , target: bg },{source: ab , target: ae },{source: ab , target: bf },{source: ab , target: az },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: bg },{source: bf , target: bg },{source: az , target: bf },{source: az , target: bg },{source: ae , target: bf },{source: ae , target: az },{source: ae , target: ai },{source: ae , target: bg },{source: ai , target: bf },{source: ai , target: az },{source: ai , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = 'Achtes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtes Bild';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'bf','az','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ab = nodes[0],ab = nodes[0],ae = nodes[1],ae = nodes[1],ai = nodes[2] ; /* nodes.push(); */ links.push( {source: ae , target: ai },{source: ae , target: ai },{source: ab , target: ae },{source: ab , target: ae },{source: ab , target: ai },{source: ab , target: ae },{source: ab , target: ae },{source: ab , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = 'Neuntes Bild'; var scene = document.getElementById('scene');scene.innerHTML = 'Neuntes Bild';
}, 45000);
