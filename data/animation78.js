setTimeout(function() { console.log('load1'); var  aa = {id: 'aa', name:'wolf'},ab = {id: 'ab', name:'thuiskomar'},ac = {id: 'ac', name:'dagobert'},ad = {id: 'ad', name:'selgar'},ae = {id: 'ae', name:'ein_fürst'},af = {id: 'af', name:'ein_cherusker'} ; nodes.push( aa,ab,ac,ad,ae,af ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ad , target: ae },{source: ad , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ac','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2'); var  aa = nodes[0],ab = nodes[1],ad = nodes[2],ag = {id: 'ag', name:'thusnelda'},ah = {id: 'ah', name:'das_gefolge'},ai = {id: 'ai', name:'hermann'},aj = {id: 'aj', name:'ventidius'},ak = {id: 'ak', name:'scäpio'},al = {id: 'al', name:'die_fürsten'} ; nodes.push( ag,ah,ai,aj,ak,al ); links.push( {source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: ak },{source: ag , target: al },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: ak },{source: ah , target: al },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: aj },{source: ab , target: ak },{source: ab , target: ad },{source: ab , target: al },{source: ai , target: aj },{source: ai , target: ak },{source: ai , target: al },{source: aj , target: ak },{source: aj , target: al },{source: ak , target: al },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ab },{source: aa , target: ai },{source: aa , target: aj },{source: aa , target: ak },{source: aa , target: ad },{source: aa , target: al },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ad , target: ak },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ag','ah','aj','ak','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3'); var  aa = nodes[0],ab = nodes[1],ac = {id: 'ac', name:'dagobert'},ad = nodes[2],ai = nodes[3] ; nodes.push( ac ); links.push( {source: aa , target: ai },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ai },{source: ac , target: ad },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'aa','ab','ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4'); var  ai = nodes[0],aj = {id: 'aj', name:'ventidius'} ; nodes.push( aj ); links.push( {source: ai , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5'); var  ai = nodes[0],am = {id: 'am', name:'eginardt'} ; nodes.push( am ); links.push( {source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6'); var  ag = {id: 'ag', name:'thusnelda'},ai = nodes[0],am = nodes[1] ; nodes.push( ag ); links.push( {source: ai , target: am },{source: ag , target: ai },{source: ag , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [ 'ai','ag','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7'); var  aj = {id: 'aj', name:'ventidius'},ak = {id: 'ak', name:'scäpio'} ; nodes.push( aj,ak ); links.push( {source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8'); var  ag = {id: 'ag', name:'thusnelda'},aj = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9'); var  ag = nodes[0],an = {id: 'an', name:'gertrud'} ; nodes.push( an ); links.push( {source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10'); var  ag = nodes[0],aj = {id: 'aj', name:'ventidius'} ; nodes.push( aj ); links.push( {source: ag , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11'); var  ag = nodes[0],ai = {id: 'ai', name:'hermann'} ; nodes.push( ai ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12'); var  ai = nodes[0],am = {id: 'am', name:'eginardt'} ; nodes.push( am ); links.push( {source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13'); var  ai = nodes[0],am = nodes[1],am = nodes[1],ao = {id: 'ao', name:'luitgar'} ; nodes.push( am,ao ); links.push( {source: ai , target: ao },{source: ai , target: am },{source: ai , target: am },{source: am , target: ao },{source: am , target: ao } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ao','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14'); var  ai = nodes[0],ap = {id: 'ap', name:'der_erste_älteste'},aq = {id: 'aq', name:'zweiter_ältester'} ; nodes.push( ap,aq ); links.push( {source: ai , target: ap },{source: ai , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15'); var  ai = nodes[0],am = {id: 'am', name:'eginardt'},ap = nodes[1],ap = nodes[1],aq = nodes[2],ar = {id: 'ar', name:'der_erste_hauptmann'},as = {id: 'as', name:'der_zweite_hauptmann'},at = {id: 'at', name:'der_dritte_hauptmann'} ; nodes.push( am,ap,ar,as,at ); links.push( {source: ar , target: as },{source: ar , target: at },{source: ai , target: ar },{source: ai , target: am },{source: ai , target: ap },{source: ai , target: as },{source: ai , target: ap },{source: ai , target: at },{source: ai , target: aq },{source: am , target: ar },{source: am , target: ap },{source: am , target: as },{source: am , target: ap },{source: am , target: at },{source: am , target: aq },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: aq },{source: as , target: at },{source: ap , target: ar },{source: ap , target: as },{source: ap , target: at },{source: ap , target: aq },{source: aq , target: ar },{source: aq , target: as },{source: aq , target: at } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ar','am','ap','as','at','aq' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16'); var  ag = {id: 'ag', name:'thusnelda'},ai = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17'); var  ai = nodes[0],au = {id: 'au', name:'der_cherusker'} ; nodes.push( au ); links.push( {source: ai , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'au' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18'); var  ag = {id: 'ag', name:'thusnelda'},ai = nodes[0],av = {id: 'av', name:'varus'},aw = {id: 'aw', name:'septimius'},ax = {id: 'ax', name:'fust'},ay = {id: 'ay', name:'gueltar'},az = {id: 'az', name:'aristan'} ; nodes.push( ag,av,aw,ax,ay,az ); links.push( {source: ai , target: av },{source: ai , target: aw },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: az },{source: av , target: aw },{source: av , target: ax },{source: av , target: ay },{source: av , target: az },{source: aw , target: ax },{source: aw , target: ay },{source: aw , target: az },{source: ag , target: ai },{source: ag , target: av },{source: ag , target: aw },{source: ag , target: ax },{source: ag , target: ay },{source: ag , target: az },{source: ax , target: ay },{source: ax , target: az },{source: ay , target: az } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [ 'ax','ay','az' ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19'); var  ag = nodes[0],ai = nodes[1],aj = {id: 'aj', name:'ventidius'},av = nodes[2],aw = nodes[3],ba = {id: 'ba', name:'der_herold'},bb = {id: 'bb', name:'crassus'} ; nodes.push( aj,ba,bb ); links.push( {source: ba , target: bb },{source: ag , target: ba },{source: ag , target: aw },{source: ag , target: ai },{source: ag , target: bb },{source: ag , target: av },{source: ag , target: aj },{source: aw , target: ba },{source: aw , target: bb },{source: ai , target: ba },{source: ai , target: aw },{source: ai , target: bb },{source: ai , target: av },{source: ai , target: aj },{source: av , target: ba },{source: av , target: aw },{source: av , target: bb },{source: aj , target: ba },{source: aj , target: aw },{source: aj , target: bb },{source: aj , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ba','ag','aw','ai','bb','av','aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20'); var  ao = {id: 'ao', name:'luitgar'},bc = {id: 'bc', name:'marbod'},bd = {id: 'bd', name:'attarin'},be = {id: 'be', name:'rinold'},bf = {id: 'bf', name:'adelhart'},bg = {id: 'bg', name:'einer_der_beiden_hauptleute'},bg = {id: 'bg', name:'einer_der_beiden_hauptleute'} ; nodes.push( ao,bc,bd,be,bf,bg ); links.push( {source: bc , target: bd },{source: bc , target: be },{source: bc , target: bf },{source: bc , target: bg },{source: bc , target: bg },{source: ao , target: bc },{source: ao , target: bd },{source: ao , target: be },{source: ao , target: bf },{source: ao , target: bg },{source: ao , target: bg },{source: bd , target: be },{source: bd , target: bf },{source: bd , target: bg },{source: bd , target: bg },{source: be , target: bf },{source: be , target: bg },{source: be , target: bg },{source: bf , target: bg },{source: bf , target: bg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [ 'be','bf','bg' ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21'); var  ao = nodes[0],bc = nodes[1],bd = nodes[2],bh = {id: 'bh', name:'komar'} ; nodes.push( bh ); links.push( {source: bc , target: bh },{source: bc , target: bd },{source: bd , target: bh },{source: ao , target: bc },{source: ao , target: bh },{source: ao , target: bd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [ 'bc','bh','bd','ao' ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22'); var  ai = {id: 'ai', name:'hermann'},am = {id: 'am', name:'eginardt'} ; nodes.push( ai,am ); links.push( {source: ai , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'ai','am' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23'); var  au = {id: 'au', name:'der_cherusker'},bi = {id: 'bi', name:'der_greis'},bj = {id: 'bj', name:'ein_junges_mädchen'},bk = {id: 'bk', name:'ein_anderes'},bl = {id: 'bl', name:'die_mutter'},bm = {id: 'bm', name:'der_mann'},bm = {id: 'bm', name:'der_mann'},bn = {id: 'bn', name:'ein_anderer'},bo = {id: 'bo', name:'ein_dritter'},bp = {id: 'bp', name:'ein_weib'},bq = {id: 'bq', name:'das_volk'},br = {id: 'br', name:'einige_stimmen'},bs = {id: 'bs', name:'der_zweite_cherusker'},bt = {id: 'bt', name:'eine_stimme'},bu = {id: 'bu', name:'mehrere_stimmen'} ; nodes.push( au,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu ); links.push( {source: bi , target: bj },{source: bi , target: bk },{source: bi , target: bl },{source: bi , target: bm },{source: bi , target: bn },{source: bi , target: bo },{source: bi , target: bm },{source: bi , target: bp },{source: bi , target: bq },{source: bi , target: br },{source: bi , target: bs },{source: bi , target: bt },{source: bi , target: bu },{source: bj , target: bk },{source: bj , target: bl },{source: bj , target: bm },{source: bj , target: bn },{source: bj , target: bo },{source: bj , target: bm },{source: bj , target: bp },{source: bj , target: bq },{source: bj , target: br },{source: bj , target: bs },{source: bj , target: bt },{source: bj , target: bu },{source: bk , target: bl },{source: bk , target: bm },{source: bk , target: bn },{source: bk , target: bo },{source: bk , target: bm },{source: bk , target: bp },{source: bk , target: bq },{source: bk , target: br },{source: bk , target: bs },{source: bk , target: bt },{source: bk , target: bu },{source: bl , target: bm },{source: bl , target: bn },{source: bl , target: bo },{source: bl , target: bm },{source: bl , target: bp },{source: bl , target: bq },{source: bl , target: br },{source: bl , target: bs },{source: bl , target: bt },{source: bl , target: bu },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bp },{source: bm , target: bq },{source: bm , target: br },{source: bm , target: bs },{source: bm , target: bt },{source: bm , target: bu },{source: bn , target: bo },{source: bn , target: bp },{source: bn , target: bq },{source: bn , target: br },{source: bn , target: bs },{source: bn , target: bt },{source: bn , target: bu },{source: bo , target: bp },{source: bo , target: bq },{source: bo , target: br },{source: bo , target: bs },{source: bo , target: bt },{source: bo , target: bu },{source: bm , target: bn },{source: bm , target: bo },{source: bm , target: bp },{source: bm , target: bq },{source: bm , target: br },{source: bm , target: bs },{source: bm , target: bt },{source: bm , target: bu },{source: bp , target: bq },{source: bp , target: br },{source: bp , target: bs },{source: bp , target: bt },{source: bp , target: bu },{source: bq , target: br },{source: bq , target: bs },{source: bq , target: bt },{source: bq , target: bu },{source: br , target: bs },{source: br , target: bt },{source: br , target: bu },{source: au , target: bi },{source: au , target: bj },{source: au , target: bk },{source: au , target: bl },{source: au , target: bm },{source: au , target: bn },{source: au , target: bo },{source: au , target: bm },{source: au , target: bp },{source: au , target: bq },{source: au , target: br },{source: au , target: bs },{source: au , target: bt },{source: au , target: bu },{source: bs , target: bt },{source: bs , target: bu },{source: bt , target: bu } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'bj','bk','bl','bm','bn','bo','bp','br','au','bu' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24'); var  bi = nodes[0],bq = nodes[2],bs = nodes[3],bt = nodes[4],bv = {id: 'bv', name:'teuthold'},bw = {id: 'bw', name:'der_erste_der_beiden_vettern'},bx = {id: 'bx', name:'der_erste_cherusker'},by = {id: 'by', name:'der_zweite_vetter'},bz = {id: 'bz', name:'eine_andere'},ca = {id: 'ca', name:'eine_dritte'} ; nodes.push( bv,bw,bx,by,bz,ca ); links.push( {source: bs , target: bv },{source: bs , target: bw },{source: bs , target: bx },{source: bs , target: by },{source: bs , target: bt },{source: bs , target: bz },{source: bs , target: ca },{source: bv , target: bw },{source: bv , target: bx },{source: bv , target: by },{source: bv , target: bz },{source: bv , target: ca },{source: bi , target: bs },{source: bi , target: bv },{source: bi , target: bw },{source: bi , target: bx },{source: bi , target: by },{source: bi , target: bq },{source: bi , target: bt },{source: bi , target: bz },{source: bi , target: ca },{source: bw , target: bx },{source: bw , target: by },{source: bw , target: bz },{source: bw , target: ca },{source: bx , target: by },{source: bx , target: bz },{source: bx , target: ca },{source: by , target: bz },{source: by , target: ca },{source: bq , target: bs },{source: bq , target: bv },{source: bq , target: bw },{source: bq , target: bx },{source: bq , target: by },{source: bq , target: bt },{source: bq , target: bz },{source: bq , target: ca },{source: bt , target: bv },{source: bt , target: bw },{source: bt , target: bx },{source: bt , target: by },{source: bt , target: bz },{source: bt , target: ca },{source: bz , target: ca } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [ 'bi','bt','bz','ca' ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25'); var  ai = {id: 'ai', name:'hermann'},am = {id: 'am', name:'eginardt'},bq = nodes[0],bs = nodes[1],bv = nodes[2],bw = nodes[3],bx = nodes[4],by = nodes[5] ; nodes.push( ai,am ); links.push( {source: bs , target: bx },{source: bs , target: bv },{source: bs , target: bw },{source: bs , target: by },{source: ai , target: bs },{source: ai , target: bx },{source: ai , target: am },{source: ai , target: bv },{source: ai , target: bw },{source: ai , target: by },{source: ai , target: bq },{source: bx , target: by },{source: am , target: bs },{source: am , target: bx },{source: am , target: bv },{source: am , target: bw },{source: am , target: by },{source: am , target: bq },{source: bv , target: bx },{source: bv , target: bw },{source: bv , target: by },{source: bw , target: bx },{source: bw , target: by },{source: bq , target: bs },{source: bq , target: bx },{source: bq , target: bv },{source: bq , target: bw },{source: bq , target: by } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'bs','bx','am','bv','bw','by','bq' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26'); var  ai = nodes[0],aw = {id: 'aw', name:'septimius'} ; nodes.push( aw ); links.push( {source: ai , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27'); var  ai = nodes[0],cc = {id: 'cc', name:'der_trabant'} ; nodes.push( cc ); links.push( {source: ai , target: cc } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'cc' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28'); var  ag = {id: 'ag', name:'thusnelda'},ai = nodes[0] ; nodes.push( ag ); links.push( {source: ag , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29'); var  ag = nodes[0],ai = nodes[1],am = {id: 'am', name:'eginardt'},cd = {id: 'cd', name:'astolf'} ; nodes.push( am,cd ); links.push( {source: am , target: cd },{source: ai , target: am },{source: ai , target: cd },{source: ag , target: am },{source: ag , target: ai },{source: ag , target: cd } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '4. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [ 'am','ai','cd','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30'); var  av = {id: 'av', name:'varus'},ce = {id: 'ce', name:'die_feldherrn'},cf = {id: 'cf', name:'der_hauptmann_5.1'},cg = {id: 'cg', name:'erster_feldherr'},ch = {id: 'ch', name:'zweiter_feldherr'},ci = {id: 'ci', name:'dritter_feldherr'},cj = {id: 'cj', name:'der_römer'} ; nodes.push( av,ce,cf,cg,ch,ci,cj ); links.push( {source: av , target: ce },{source: av , target: cf },{source: av , target: cg },{source: av , target: ch },{source: av , target: ci },{source: av , target: cj },{source: ce , target: cf },{source: ce , target: cg },{source: ce , target: ch },{source: ce , target: ci },{source: ce , target: cj },{source: cf , target: cg },{source: cf , target: ch },{source: cf , target: ci },{source: cf , target: cj },{source: cg , target: ch },{source: cg , target: ci },{source: cg , target: cj },{source: ch , target: ci },{source: ch , target: cj },{source: ci , target: cj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Auftritt';
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [ 'ce','cf','cg','ch','ci','cj' ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31'); var  av = nodes[0],bs = {id: 'bs', name:'der_zweite_cherusker'},bx = {id: 'bx', name:'der_erste_cherusker'},ck = {id: 'ck', name:'der_dritte_cherusker'} ; nodes.push( bs,bx,ck ); links.push( {source: av , target: bx },{source: av , target: bs },{source: av , target: ck },{source: bx , target: ck },{source: bs , target: bx },{source: bs , target: ck } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Auftritt';
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'bx','bs','ck' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32'); var  av = nodes[0],cf = {id: 'cf', name:'der_hauptmann_5.1'},cg = {id: 'cg', name:'erster_feldherr'},ch = {id: 'ch', name:'zweiter_feldherr'} ; nodes.push( cf,cg,ch ); links.push( {source: av , target: cg },{source: av , target: ch },{source: av , target: cf },{source: cg , target: ch },{source: cf , target: cg },{source: cf , target: ch } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Auftritt';
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [ 'cg','ch','cf' ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33'); var  av = nodes[0],cl = {id: 'cl', name:'die_alraune'} ; nodes.push( cl ); links.push( {source: av , target: cl } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Auftritt';
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'cl' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34'); var  av = nodes[0],cg = {id: 'cg', name:'erster_feldherr'},ch = {id: 'ch', name:'zweiter_feldherr'} ; nodes.push( cg,ch ); links.push( {source: av , target: cg },{source: av , target: ch },{source: cg , target: ch } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Auftritt';
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35'); var  av = nodes[0],cf = {id: 'cf', name:'der_hauptmann_5.1'},cg = nodes[1],ch = nodes[2],cj = {id: 'cj', name:'der_römer'} ; nodes.push( cf,cj ); links.push( {source: cf , target: cj },{source: cf , target: cg },{source: cf , target: ch },{source: av , target: cj },{source: av , target: cf },{source: av , target: cg },{source: av , target: ch },{source: cg , target: cj },{source: cg , target: ch },{source: ch , target: cj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechster Auftritt';
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'cj','cf','cg','ch' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36'); var  av = nodes[0] ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebenter Auftritt';
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37'); var  av = nodes[0],ch = {id: 'ch', name:'zweiter_feldherr'},cj = {id: 'cj', name:'der_römer'} ; nodes.push( ch,cj ); links.push( {source: av , target: cj },{source: av , target: ch },{source: ch , target: cj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achter Auftritt';
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'cj' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38'); var  av = nodes[0],az = {id: 'az', name:'aristan'},ch = nodes[1] ; nodes.push( az ); links.push( {source: az , target: ch },{source: av , target: az },{source: av , target: ch } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunter Auftritt';
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [ 'az','av','ch' ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39'); var  cf = {id: 'cf', name:'der_hauptmann_5.1'},cg = {id: 'cg', name:'erster_feldherr'},cm = {id: 'cm', name:'egbert'} ; nodes.push( cf,cg,cm ); links.push( {source: cg , target: cm },{source: cf , target: cm },{source: cf , target: cg } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zehnter Auftritt';
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'cg','cf' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40'); var  ai = {id: 'ai', name:'hermann'},cm = nodes[0],cn = {id: 'cn', name:'winfried'},co = {id: 'co', name:'die_feldherrn_cherusker'},cp = {id: 'cp', name:'hauptleute_cherusker'},cq = {id: 'cq', name:'das_heer'} ; nodes.push( ai,cn,co,cp,cq ); links.push( {source: ai , target: cn },{source: ai , target: cm },{source: ai , target: co },{source: ai , target: cp },{source: ai , target: cq },{source: cn , target: co },{source: cn , target: cp },{source: cn , target: cq },{source: cm , target: cn },{source: cm , target: co },{source: cm , target: cp },{source: cm , target: cq },{source: co , target: cp },{source: co , target: cq },{source: cp , target: cq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Eilfter Auftritt';
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [ 'cm','co','cp','cq' ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41'); var  ai = nodes[0],au = {id: 'au', name:'der_cherusker'},cn = nodes[1] ; nodes.push( au ); links.push( {source: au , target: cn },{source: ai , target: au },{source: ai , target: cn } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwölfter Auftritt';
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'au','cn' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42'); var  ai = nodes[0],aw = {id: 'aw', name:'septimius'},cq = {id: 'cq', name:'das_heer'} ; nodes.push( aw,cq ); links.push( {source: ai , target: aw },{source: ai , target: cq },{source: aw , target: cq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreizehnter Auftritt';
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'aw','cq' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43'); var  ai = nodes[0],bn = {id: 'bn', name:'ein_anderer'},cf = {id: 'cf', name:'der_hauptmann_5.1'},cm = {id: 'cm', name:'egbert'},cn = {id: 'cn', name:'winfried'},cr = {id: 'cr', name:'chor_der_barden'} ; nodes.push( bn,cf,cm,cn,cr ); links.push( {source: ai , target: cn },{source: ai , target: cm },{source: ai , target: cr },{source: ai , target: cf },{source: ai , target: bn },{source: cn , target: cr },{source: cm , target: cn },{source: cm , target: cr },{source: cf , target: cn },{source: cf , target: cm },{source: cf , target: cr },{source: bn , target: cn },{source: bn , target: cm },{source: bn , target: cr },{source: bn , target: cf } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierzehnter Auftritt';
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'ai','cn','cm','cr','cf','bn' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44'); var  ag = {id: 'ag', name:'thusnelda'},an = {id: 'an', name:'gertrud'} ; nodes.push( ag,an ); links.push( {source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Funfzehnter Auftritt';
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45'); var  an = nodes[0],cs = {id: 'cs', name:'childerich'} ; nodes.push( cs ); links.push( {source: an , target: cs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Sechzehnter Auftritt';
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'cs' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46'); var  ag = {id: 'ag', name:'thusnelda'},aj = {id: 'aj', name:'ventidius'},an = nodes[0] ; nodes.push( ag,aj ); links.push( {source: aj , target: an },{source: ag , target: aj },{source: ag , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Siebzehnter Auftritt';
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47'); var  ag = nodes[0],aj = nodes[1],an = nodes[2],cs = {id: 'cs', name:'childerich'} ; nodes.push( cs ); links.push( {source: aj , target: an },{source: aj , target: cs },{source: ag , target: aj },{source: ag , target: an },{source: ag , target: cs },{source: an , target: cs } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '18. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Achtzehnter Auftritt';
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'aj','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48'); var  af = {id: 'af', name:'ein_cherusker'},an = nodes[0],cd = {id: 'cd', name:'astolf'},cs = nodes[1] ; nodes.push( af,cd ); links.push( {source: cd , target: cs },{source: an , target: cd },{source: an , target: cs },{source: af , target: cd },{source: af , target: cs },{source: af , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '19. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Neunzehnter Auftritt';
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [ 'cd','cs','an','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49'); var  bc = {id: 'bc', name:'marbod'},bh = {id: 'bh', name:'komar'},ct = {id: 'ct', name:'ein_feldherr'} ; nodes.push( bc,bh,ct ); links.push( {source: bh , target: ct },{source: bc , target: bh },{source: bc , target: ct } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '20. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zwanzigster Auftritt';
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'bh','bc','ct' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50'); var  av = {id: 'av', name:'varus'} ; nodes.push( av ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '21. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Einundzwanzigster Auftritt';
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51'); var  ah = {id: 'ah', name:'das_gefolge'},ai = {id: 'ai', name:'hermann'},av = nodes[0],ax = {id: 'ax', name:'fust'},ay = {id: 'ay', name:'gueltar'} ; nodes.push( ah,ai,ax,ay ); links.push( {source: ai , target: ax },{source: ai , target: ay },{source: ai , target: av },{source: ax , target: ay },{source: av , target: ax },{source: av , target: ay },{source: ah , target: ai },{source: ah , target: ax },{source: ah , target: ay },{source: ah , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '22. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiundzwanzigster Auftritt';
}, 250000);

setTimeout(function() { console.log('remv51'); var rm = [ 'ax','ay','av','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 253750);

setTimeout(function() { console.log('load52'); var  aa = {id: 'aa', name:'wolf'},af = {id: 'af', name:'ein_cherusker'},ag = {id: 'ag', name:'thusnelda'},ai = nodes[0],am = {id: 'am', name:'eginardt'},cd = {id: 'cd', name:'astolf'} ; nodes.push( aa,af,ag,am,cd ); links.push( {source: aa , target: ai },{source: aa , target: ag },{source: aa , target: cd },{source: aa , target: am },{source: aa , target: af },{source: ai , target: cd },{source: ai , target: am },{source: ag , target: ai },{source: ag , target: cd },{source: ag , target: am },{source: am , target: cd },{source: af , target: ai },{source: af , target: ag },{source: af , target: cd },{source: af , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '23. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dreiundzwanzigster Auftritt';
}, 255000);

setTimeout(function() { console.log('remv52'); var rm = [ 'ag','cd','am','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 258750);

setTimeout(function() { console.log('load53'); var  aa = nodes[0],ab = {id: 'ab', name:'thuiskomar'},ac = {id: 'ac', name:'dagobert'},ad = {id: 'ad', name:'selgar'},ai = nodes[1],ax = {id: 'ax', name:'fust'},ay = {id: 'ay', name:'gueltar'},az = {id: 'az', name:'aristan'},bc = {id: 'bc', name:'marbod'},cu = {id: 'cu', name:'die_suevischen_feldherrn'} ; nodes.push( ab,ac,ad,ax,ay,az,bc,cu ); links.push( {source: ai , target: bc },{source: ai , target: cu },{source: ai , target: ax },{source: ai , target: ay },{source: ai , target: az },{source: bc , target: cu },{source: ax , target: bc },{source: ax , target: cu },{source: ax , target: ay },{source: ax , target: az },{source: ay , target: bc },{source: ay , target: cu },{source: ay , target: az },{source: aa , target: ai },{source: aa , target: bc },{source: aa , target: cu },{source: aa , target: ax },{source: aa , target: ay },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: az },{source: ab , target: ai },{source: ab , target: bc },{source: ab , target: cu },{source: ab , target: ax },{source: ab , target: ay },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: az },{source: ac , target: ai },{source: ac , target: bc },{source: ac , target: cu },{source: ac , target: ax },{source: ac , target: ay },{source: ac , target: ad },{source: ac , target: az },{source: ad , target: ai },{source: ad , target: bc },{source: ad , target: cu },{source: ad , target: ax },{source: ad , target: ay },{source: ad , target: az },{source: az , target: bc },{source: az , target: cu } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '5. Akt'; var act = document.getElementById('act');act.innerHTML = '24. Auftritt'; var scene = document.getElementById('scene');scene.innerHTML = 'Letzter Auftritt';
}, 260000);
