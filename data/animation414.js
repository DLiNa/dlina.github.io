setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'zweiter_bruder'},ab = {id: 'ab', name:'dritter_bruder'},ac = {id: 'ac', name:'dummerchens_stimme'},ad = {id: 'ad', name:'dritter_brüder'},aq = {id: 'aq', name:'hans_engerling'} ; nodes.push( aa,ab,ac,ad,aq ); links.push( {source: aa , target: aq },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: aq },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: aq },{source: ac , target: ad },{source: ad , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  ae = {id: 'ae', name:'erster_bürger'},af = {id: 'af', name:'zweier_bürger'},ag = {id: 'ag', name:'hinterstoisser'},ag = {id: 'ag', name:'hinterstoisser'},aq = nodes[1] ; nodes.push( ae,af,ag ); links.push( {source: ae , target: af },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: ag },{source: af , target: aq },{source: af , target: ag },{source: af , target: ag },{source: ag , target: aq },{source: ag , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ae','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  ac = {id: 'ac', name:'dummerchens_stimme'},ac = {id: 'ac', name:'dummerchens_stimme'},ah = {id: 'ah', name:'reps'},ai = {id: 'ai', name:'kleps'},aj = {id: 'aj', name:'herold'},aj = {id: 'aj', name:'herold'},ak = {id: 'ak', name:'stimme_aus_dem_volk'},ak = {id: 'ak', name:'stimme_aus_dem_volk'},ak = {id: 'ak', name:'stimme_aus_dem_volk'},ak = {id: 'ak', name:'stimme_aus_dem_volk'},al = {id: 'al', name:'könig'},am = {id: 'am', name:'hofprediger'},an = {id: 'an', name:'hofstaat'},ao = {id: 'ao', name:'plötzliche_stimme_aus_dem_hintergrund'},ap = {id: 'ap', name:'das_individuum'},ap = {id: 'ap', name:'das_individuum'},aq = nodes[5],aq = nodes[5],ar = {id: 'ar', name:'flügeladjutant_von_der_kron'},as = {id: 'as', name:'der_alte_hubeland'},at = {id: 'at', name:'offizier'},au = {id: 'au', name:'viele_stimmen'},av = {id: 'av', name:'dichter_sylvan'} ; nodes.push( ac,ah,ai,aj,ak,al,am,an,ao,ap,ar,as,at,au,av ); links.push( {source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ah , target: am },{source: ah , target: an },{source: ah , target: aj },{source: ah , target: ao },{source: ah , target: aq },{source: ah , target: ap },{source: ah , target: ap },{source: ah , target: ak },{source: ah , target: ak },{source: ah , target: ak },{source: ah , target: aq },{source: ah , target: ar },{source: ah , target: as },{source: ah , target: at },{source: ah , target: au },{source: ah , target: av },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: ai , target: am },{source: ai , target: an },{source: ai , target: aj },{source: ai , target: ao },{source: ai , target: aq },{source: ai , target: ap },{source: ai , target: ap },{source: ai , target: ak },{source: ai , target: ak },{source: ai , target: ak },{source: ai , target: aq },{source: ai , target: ar },{source: ai , target: as },{source: ai , target: at },{source: ai , target: au },{source: ai , target: av },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: aq },{source: aj , target: ap },{source: aj , target: ap },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: aj , target: au },{source: aj , target: av },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: aq },{source: ak , target: ap },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: aq },{source: al , target: ap },{source: al , target: ap },{source: al , target: aq },{source: al , target: ar },{source: al , target: as },{source: al , target: at },{source: al , target: au },{source: al , target: av },{source: am , target: an },{source: am , target: ao },{source: am , target: aq },{source: am , target: ap },{source: am , target: ap },{source: am , target: aq },{source: am , target: ar },{source: am , target: as },{source: am , target: at },{source: am , target: au },{source: am , target: av },{source: an , target: ao },{source: an , target: aq },{source: an , target: ap },{source: an , target: ap },{source: an , target: aq },{source: an , target: ar },{source: an , target: as },{source: an , target: at },{source: an , target: au },{source: an , target: av },{source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: aq },{source: aj , target: ap },{source: aj , target: ap },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: ak },{source: aj , target: aq },{source: aj , target: ar },{source: aj , target: as },{source: aj , target: at },{source: aj , target: au },{source: aj , target: av },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ar },{source: ao , target: as },{source: ao , target: at },{source: ao , target: au },{source: ao , target: av },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: ap , target: aq },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ap , target: aq },{source: ap , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: au },{source: ap , target: av },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: aq },{source: ak , target: ap },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: aj },{source: ac , target: ao },{source: ac , target: aq },{source: ac , target: ap },{source: ac , target: ap },{source: ac , target: ak },{source: ac , target: ak },{source: ac , target: ak },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: aq },{source: ak , target: ap },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: ak , target: al },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: aq },{source: ak , target: ap },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ar },{source: ak , target: as },{source: ak , target: at },{source: ak , target: au },{source: ak , target: av },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at },{source: aq , target: au },{source: aq , target: av },{source: ar , target: as },{source: ar , target: at },{source: ar , target: au },{source: ar , target: av },{source: as , target: at },{source: as , target: au },{source: as , target: av },{source: at , target: au },{source: at , target: av },{source: au , target: av },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: an },{source: ac , target: aj },{source: ac , target: ao },{source: ac , target: aq },{source: ac , target: ap },{source: ac , target: ap },{source: ac , target: ak },{source: ac , target: ak },{source: ac , target: ak },{source: ac , target: aq },{source: ac , target: ar },{source: ac , target: as },{source: ac , target: at },{source: ac , target: au },{source: ac , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ah','ai','aj','ak','an','ao','aq','ac','as','at','au','av' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  al = nodes[3],am = nodes[4],ap = nodes[5],ar = nodes[7],ar = nodes[7],aw = {id: 'aw', name:'kanzler'},ax = {id: 'ax', name:'kultusminister'} ; nodes.push( aw,ax ); links.push( {source: al , target: aw },{source: al , target: ax },{source: al , target: am },{source: al , target: ar },{source: al , target: ar },{source: al , target: ap },{source: aw , target: ax },{source: am , target: aw },{source: am , target: ax },{source: am , target: ar },{source: am , target: ar },{source: am , target: ap },{source: ar , target: aw },{source: ar , target: ax },{source: ar , target: aw },{source: ar , target: ax },{source: ap , target: aw },{source: ap , target: ax },{source: ap , target: ar },{source: ap , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'al','aw','ax','am','ar','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ab = {id: 'ab', name:'dritter_bruder'},ac = {id: 'ac', name:'dummerchens_stimme'},ae = {id: 'ae', name:'erster_bürger'},af = {id: 'af', name:'zweier_bürger'},af = {id: 'af', name:'zweier_bürger'},ag = {id: 'ag', name:'hinterstoisser'},aq = {id: 'aq', name:'hans_engerling'},as = {id: 'as', name:'der_alte_hubeland'},ay = {id: 'ay', name:'die_brüder'},ay = {id: 'ay', name:'die_brüder'} ; nodes.push( ab,ac,ae,af,ag,aq,as,ay ); links.push( {source: ae , target: af },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: as },{source: ae , target: af },{source: ae , target: ay },{source: ae , target: ay },{source: af , target: aq },{source: af , target: ag },{source: af , target: as },{source: af , target: ay },{source: af , target: ay },{source: aq , target: as },{source: aq , target: ay },{source: aq , target: ay },{source: ag , target: aq },{source: ag , target: as },{source: ag , target: ay },{source: ag , target: ay },{source: as , target: ay },{source: as , target: ay },{source: af , target: aq },{source: af , target: ag },{source: af , target: as },{source: af , target: ay },{source: af , target: ay },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: aq },{source: ac , target: ag },{source: ac , target: as },{source: ac , target: af },{source: ac , target: ay },{source: ac , target: ay },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: aq },{source: ab , target: ag },{source: ab , target: as },{source: ab , target: af },{source: ab , target: ac },{source: ab , target: ay },{source: ab , target: ay } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ae','af','ag','ac','ab','ay' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  al = {id: 'al', name:'könig'},aq = nodes[1],as = nodes[2],as = nodes[2],az = {id: 'az', name:'medizinalrat_von_zangen'} ; nodes.push( al,az ); links.push( {source: al , target: az },{source: al , target: aq },{source: al , target: as },{source: al , target: as },{source: aq , target: az },{source: aq , target: as },{source: aq , target: as },{source: as , target: az },{source: as , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'aq','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  al = nodes[0],am = {id: 'am', name:'hofprediger'},ar = {id: 'ar', name:'flügeladjutant_von_der_kron'},az = nodes[2] ; nodes.push( am,ar ); links.push( {source: ar , target: az },{source: al , target: ar },{source: al , target: am },{source: al , target: az },{source: am , target: ar },{source: am , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt.';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ar','al','am','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ba = {id: 'ba', name:'artemisia'},ba = {id: 'ba', name:'artemisia'},bb = {id: 'bb', name:'andrakia'},bc = {id: 'bc', name:'myrrha'},bd = {id: 'bd', name:'phyllis'},be = {id: 'be', name:'anthusa'} ; nodes.push( ba,bb,bc,bd,be ); links.push( {source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: be },{source: bb , target: bc },{source: bb , target: bd },{source: bb , target: be },{source: ba , target: bb },{source: ba , target: bc },{source: ba , target: bd },{source: ba , target: be },{source: bc , target: bd },{source: bc , target: be },{source: bd , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt.';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ba','bb','bc','bd' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ac = {id: 'ac', name:'dummerchens_stimme'},aq = {id: 'aq', name:'hans_engerling'},be = nodes[1] ; nodes.push( ac,aq ); links.push( {source: ac , target: be },{source: ac , target: aq },{source: aq , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt.';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'be' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  aa = {id: 'aa', name:'zweiter_bruder'},ab = {id: 'ab', name:'dritter_bruder'},ac = nodes[0],aq = nodes[1] ; nodes.push( aa,ab ); links.push( {source: ac , target: aq },{source: aa , target: aq },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: aq },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt.';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aq','ac','aa','ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  be = {id: 'be', name:'anthusa'} ; nodes.push( be ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt.';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  al = {id: 'al', name:'könig'},be = nodes[0] ; nodes.push( al ); links.push( {source: al , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt.';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ac = {id: 'ac', name:'dummerchens_stimme'},ac = {id: 'ac', name:'dummerchens_stimme'},al = nodes[1],ar = {id: 'ar', name:'flügeladjutant_von_der_kron'},bb = {id: 'bb', name:'andrakia'},be = nodes[2] ; nodes.push( ac,ar,bb ); links.push( {source: ar , target: be },{source: ar , target: bb },{source: al , target: ar },{source: al , target: be },{source: al , target: bb },{source: ac , target: ar },{source: ac , target: be },{source: ac , target: al },{source: ac , target: bb },{source: ac , target: ar },{source: ac , target: be },{source: ac , target: al },{source: ac , target: bb },{source: bb , target: be } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt.';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'be','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ae = {id: 'ae', name:'erster_bürger'},af = {id: 'af', name:'zweier_bürger'},ag = {id: 'ag', name:'hinterstoisser'},ah = {id: 'ah', name:'reps'},ai = {id: 'ai', name:'kleps'},al = nodes[1],am = {id: 'am', name:'hofprediger'},ap = {id: 'ap', name:'das_individuum'},aq = {id: 'aq', name:'hans_engerling'},ar = nodes[2],as = {id: 'as', name:'der_alte_hubeland'},aw = {id: 'aw', name:'kanzler'},az = {id: 'az', name:'medizinalrat_von_zangen'},ba = {id: 'ba', name:'artemisia'},bb = nodes[3],bc = {id: 'bc', name:'myrrha'},bd = {id: 'bd', name:'phyllis'},bf = {id: 'bf', name:'brummorchester'},bg = {id: 'bg', name:'sylvan'},bg = {id: 'bg', name:'sylvan'},bh = {id: 'bh', name:'lainilla'},bi = {id: 'bi', name:'doris'},bj = {id: 'bj', name:'stimme_aus_dem_haufen'},bk = {id: 'bk', name:'andre_stimme'},bl = {id: 'bl', name:'dritte_stimme'},bm = {id: 'bm', name:'viele_stimmen_im_hintergrund'},bn = {id: 'bn', name:'andre_stimmen'},bo = {id: 'bo', name:'stimme_im_hintergrund'} ; nodes.push( ae,af,ag,ah,ai,am,ap,aq,as,aw,az,ba,bc,bd,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo ); links.push( {source: aw , target: ba },{source: aw , target: bb },{source: aw , target: bf },{source: aw , target: bd },{source: aw , target: bg },{source: aw , target: bc },{source: aw , target: bg },{source: aw , target: az },{source: aw , target: bh },{source: aw , target: bi },{source: aw , target: bj },{source: aw , target: bk },{source: aw , target: bl },{source: aw , target: bm },{source: aw , target: bn },{source: aw , target: bo },{source: ba , target: bb },{source: ba , target: bf },{source: ba , target: bd },{source: ba , target: bg },{source: ba , target: bc },{source: ba , target: bg },{source: ba , target: bh },{source: ba , target: bi },{source: ba , target: bj },{source: ba , target: bk },{source: ba , target: bl },{source: ba , target: bm },{source: ba , target: bn },{source: ba , target: bo },{source: bb , target: bf },{source: bb , target: bd },{source: bb , target: bg },{source: bb , target: bc },{source: bb , target: bg },{source: bb , target: bh },{source: bb , target: bi },{source: bb , target: bj },{source: bb , target: bk },{source: bb , target: bl },{source: bb , target: bm },{source: bb , target: bn },{source: bb , target: bo },{source: ah , target: aw },{source: ah , target: ba },{source: ah , target: bb },{source: ah , target: ai },{source: ah , target: al },{source: ah , target: bf },{source: ah , target: bd },{source: ah , target: bg },{source: ah , target: bc },{source: ah , target: bg },{source: ah , target: am },{source: ah , target: aq },{source: ah , target: az },{source: ah , target: bh },{source: ah , target: ar },{source: ah , target: bi },{source: ah , target: bj },{source: ah , target: bk },{source: ah , target: bl },{source: ah , target: bm },{source: ah , target: bn },{source: ah , target: bo },{source: ah , target: ap },{source: ah , target: as },{source: ai , target: aw },{source: ai , target: ba },{source: ai , target: bb },{source: ai , target: al },{source: ai , target: bf },{source: ai , target: bd },{source: ai , target: bg },{source: ai , target: bc },{source: ai , target: bg },{source: ai , target: am },{source: ai , target: aq },{source: ai , target: az },{source: ai , target: bh },{source: ai , target: ar },{source: ai , target: bi },{source: ai , target: bj },{source: ai , target: bk },{source: ai , target: bl },{source: ai , target: bm },{source: ai , target: bn },{source: ai , target: bo },{source: ai , target: ap },{source: ai , target: as },{source: al , target: aw },{source: al , target: ba },{source: al , target: bb },{source: al , target: bf },{source: al , target: bd },{source: al , target: bg },{source: al , target: bc },{source: al , target: bg },{source: al , target: am },{source: al , target: aq },{source: al , target: az },{source: al , target: bh },{source: al , target: ar },{source: al , target: bi },{source: al , target: bj },{source: al , target: bk },{source: al , target: bl },{source: al , target: bm },{source: al , target: bn },{source: al , target: bo },{source: al , target: ap },{source: al , target: as },{source: bf , target: bg },{source: bf , target: bg },{source: bf , target: bh },{source: bf , target: bi },{source: bf , target: bj },{source: bf , target: bk },{source: bf , target: bl },{source: bf , target: bm },{source: bf , target: bn },{source: bf , target: bo },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bg },{source: bd , target: bh },{source: bd , target: bi },{source: bd , target: bj },{source: bd , target: bk },{source: bd , target: bl },{source: bd , target: bm },{source: bd , target: bn },{source: bd , target: bo },{source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bl },{source: bg , target: bm },{source: bg , target: bn },{source: bg , target: bo },{source: bc , target: bf },{source: bc , target: bd },{source: bc , target: bg },{source: bc , target: bg },{source: bc , target: bh },{source: bc , target: bi },{source: bc , target: bj },{source: bc , target: bk },{source: bc , target: bl },{source: bc , target: bm },{source: bc , target: bn },{source: bc , target: bo },{source: bg , target: bh },{source: bg , target: bi },{source: bg , target: bj },{source: bg , target: bk },{source: bg , target: bl },{source: bg , target: bm },{source: bg , target: bn },{source: bg , target: bo },{source: am , target: aw },{source: am , target: ba },{source: am , target: bb },{source: am , target: bf },{source: am , target: bd },{source: am , target: bg },{source: am , target: bc },{source: am , target: bg },{source: am , target: aq },{source: am , target: az },{source: am , target: bh },{source: am , target: ar },{source: am , target: bi },{source: am , target: bj },{source: am , target: bk },{source: am , target: bl },{source: am , target: bm },{source: am , target: bn },{source: am , target: bo },{source: am , target: ap },{source: am , target: as },{source: aq , target: aw },{source: aq , target: ba },{source: aq , target: bb },{source: aq , target: bf },{source: aq , target: bd },{source: aq , target: bg },{source: aq , target: bc },{source: aq , target: bg },{source: aq , target: az },{source: aq , target: bh },{source: aq , target: ar },{source: aq , target: bi },{source: aq , target: bj },{source: aq , target: bk },{source: aq , target: bl },{source: aq , target: bm },{source: aq , target: bn },{source: aq , target: bo },{source: aq , target: as },{source: ag , target: aw },{source: ag , target: ba },{source: ag , target: bb },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: al },{source: ag , target: bf },{source: ag , target: bd },{source: ag , target: bg },{source: ag , target: bc },{source: ag , target: bg },{source: ag , target: am },{source: ag , target: aq },{source: ag , target: az },{source: ag , target: bh },{source: ag , target: ar },{source: ag , target: bi },{source: ag , target: bj },{source: ag , target: bk },{source: ag , target: bl },{source: ag , target: bm },{source: ag , target: bn },{source: ag , target: bo },{source: ag , target: ap },{source: ag , target: as },{source: af , target: aw },{source: af , target: ba },{source: af , target: bb },{source: af , target: ah },{source: af , target: ai },{source: af , target: al },{source: af , target: bf },{source: af , target: bd },{source: af , target: bg },{source: af , target: bc },{source: af , target: bg },{source: af , target: am },{source: af , target: aq },{source: af , target: ag },{source: af , target: az },{source: af , target: bh },{source: af , target: ar },{source: af , target: bi },{source: af , target: bj },{source: af , target: bk },{source: af , target: bl },{source: af , target: bm },{source: af , target: bn },{source: af , target: bo },{source: af , target: ap },{source: af , target: as },{source: ae , target: aw },{source: ae , target: ba },{source: ae , target: bb },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: al },{source: ae , target: bf },{source: ae , target: bd },{source: ae , target: bg },{source: ae , target: bc },{source: ae , target: bg },{source: ae , target: am },{source: ae , target: aq },{source: ae , target: ag },{source: ae , target: af },{source: ae , target: az },{source: ae , target: bh },{source: ae , target: ar },{source: ae , target: bi },{source: ae , target: bj },{source: ae , target: bk },{source: ae , target: bl },{source: ae , target: bm },{source: ae , target: bn },{source: ae , target: bo },{source: ae , target: ap },{source: ae , target: as },{source: az , target: ba },{source: az , target: bb },{source: az , target: bf },{source: az , target: bd },{source: az , target: bg },{source: az , target: bc },{source: az , target: bg },{source: az , target: bh },{source: az , target: bi },{source: az , target: bj },{source: az , target: bk },{source: az , target: bl },{source: az , target: bm },{source: az , target: bn },{source: az , target: bo },{source: bh , target: bi },{source: bh , target: bj },{source: bh , target: bk },{source: bh , target: bl },{source: bh , target: bm },{source: bh , target: bn },{source: bh , target: bo },{source: ar , target: aw },{source: ar , target: ba },{source: ar , target: bb },{source: ar , target: bf },{source: ar , target: bd },{source: ar , target: bg },{source: ar , target: bc },{source: ar , target: bg },{source: ar , target: az },{source: ar , target: bh },{source: ar , target: bi },{source: ar , target: bj },{source: ar , target: bk },{source: ar , target: bl },{source: ar , target: bm },{source: ar , target: bn },{source: ar , target: bo },{source: ar , target: as },{source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bm },{source: bi , target: bn },{source: bi , target: bo },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: bj , target: bn },{source: bj , target: bo },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bk , target: bo },{source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bo },{source: bm , target: bn },{source: bm , target: bo },{source: bn , target: bo },{source: ap , target: aw },{source: ap , target: ba },{source: ap , target: bb },{source: ap , target: bf },{source: ap , target: bd },{source: ap , target: bg },{source: ap , target: bc },{source: ap , target: bg },{source: ap , target: aq },{source: ap , target: az },{source: ap , target: bh },{source: ap , target: ar },{source: ap , target: bi },{source: ap , target: bj },{source: ap , target: bk },{source: ap , target: bl },{source: ap , target: bm },{source: ap , target: bn },{source: ap , target: bo },{source: ap , target: as },{source: as , target: aw },{source: as , target: ba },{source: as , target: bb },{source: as , target: bf },{source: as , target: bd },{source: as , target: bg },{source: as , target: bc },{source: as , target: bg },{source: as , target: az },{source: as , target: bh },{source: as , target: bi },{source: as , target: bj },{source: as , target: bk },{source: as , target: bl },{source: as , target: bm },{source: as , target: bn },{source: as , target: bo } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Elfter Auftritt.';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [ 'aw','ba','bb','al','bf','bd','bg','bc','am','az','bh','ar','bi','bj','bk','bl','bm','bn','bo','ap','as' ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  aa = {id: 'aa', name:'zweiter_bruder'},ab = {id: 'ab', name:'dritter_bruder'},ae = nodes[0],af = nodes[1],ag = nodes[2],ah = nodes[3],ai = nodes[4],aq = nodes[5],bp = {id: 'bp', name:'phrixa'} ; nodes.push( aa,ab,bp ); links.push( {source: aq , target: bp },{source: ab , target: bp },{source: ab , target: aq },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ae },{source: ab , target: ag },{source: aa , target: bp },{source: aa , target: aq },{source: aa , target: ab },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ae },{source: aa , target: ag },{source: ah , target: bp },{source: ah , target: aq },{source: ah , target: ai },{source: ai , target: bp },{source: ai , target: aq },{source: af , target: bp },{source: af , target: aq },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: ae , target: bp },{source: ae , target: aq },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ag , target: bp },{source: ag , target: aq },{source: ag , target: ah },{source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt.';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'aq','ab','aa','ah','ai','af','ae','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  bd = {id: 'bd', name:'phyllis'},be = {id: 'be', name:'anthusa'},bg = {id: 'bg', name:'sylvan'},bg = {id: 'bg', name:'sylvan'},bh = {id: 'bh', name:'lainilla'},bp = nodes[1],bq = {id: 'bq', name:'tattabaucis'},br = {id: 'br', name:'kakodromida'},bs = {id: 'bs', name:'andre_weiber'} ; nodes.push( bd,be,bg,bh,bq,br,bs ); links.push( {source: bq , target: br },{source: bq , target: bs },{source: bd , target: bq },{source: bd , target: br },{source: bd , target: bh },{source: bd , target: bs },{source: bd , target: be },{source: bd , target: bp },{source: bd , target: bg },{source: bd , target: bg },{source: br , target: bs },{source: bh , target: bq },{source: bh , target: br },{source: bh , target: bs },{source: bh , target: bp },{source: be , target: bq },{source: be , target: br },{source: be , target: bh },{source: be , target: bs },{source: be , target: bp },{source: be , target: bg },{source: be , target: bg },{source: bp , target: bq },{source: bp , target: br },{source: bp , target: bs },{source: bg , target: bq },{source: bg , target: br },{source: bg , target: bh },{source: bg , target: bs },{source: bg , target: bp },{source: bg , target: bq },{source: bg , target: br },{source: bg , target: bh },{source: bg , target: bs },{source: bg , target: bp } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt.';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'bq','bd','br','bh','bs','be','bp','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ag = {id: 'ag', name:'hinterstoisser'},al = {id: 'al', name:'könig'},ap = {id: 'ap', name:'das_individuum'},ar = {id: 'ar', name:'flügeladjutant_von_der_kron'} ; nodes.push( ag,al,ap,ar ); links.push( {source: al , target: ap },{source: al , target: ar },{source: ap , target: ar },{source: ag , target: al },{source: ag , target: ap },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt.';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ag = nodes[0],al = nodes[1],ap = nodes[2],ar = nodes[3] ; /* nodes.push(); */ links.push( {source: al , target: ap },{source: al , target: ar },{source: ap , target: ar },{source: ag , target: al },{source: ag , target: ap },{source: ag , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt.';
}, 85000);
