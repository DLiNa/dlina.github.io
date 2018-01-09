setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa */ var  aa = {id: 'aa', name:'charon'} ; nodes.push( aa ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '1.960784313725490196%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab */ var  aa = nodes[0] ,ab = {id: 'ab', name:'pluto'} ; nodes.push( ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '3.921568627450980392%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ab ac */ var  aa = nodes[0] ,ab = nodes[1] ,ac = {id: 'ac', name:'mephistopheles'} ; nodes.push( ac ); links.push( {source: ab , target: ac },{source: aa , target: ab },{source: aa , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '5.882352941176470588%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ac','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* ab */ var  ab = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '7.843137254901960784%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac */ var  ac = {id: 'ac', name:'mephistopheles'} ; nodes.push( ac ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = 'Vorspiel'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '9.80392156862745098%' ;
}, 20000);

setTimeout(function() { console.log('remv5'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 23750);

setTimeout(function() { console.log('load6');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'faust'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '11.764705882352941176%' ;
}, 25000);

setTimeout(function() { console.log('remv6'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 28750);

setTimeout(function() { console.log('load7');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'wagner'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '13.725490196078431373%' ;
}, 30000);

setTimeout(function() { console.log('remv7'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 33750);

setTimeout(function() { console.log('load8');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'mephistopheles'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '15.686274509803921569%' ;
}, 35000);

setTimeout(function() { console.log('remv8'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 38750);

setTimeout(function() { console.log('load9');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '17.647058823529411765%' ;
}, 40000);

setTimeout(function() { console.log('remv9'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 43750);

setTimeout(function() { console.log('load10');nodes.sort(compare); /* ad ae */ var  ad = {id: 'ad', name:'faust'},ae = {id: 'ae', name:'wagner'} ; nodes.push( ad,ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '19.607843137254901961%' ;
}, 45000);

setTimeout(function() { console.log('remv10'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 48750);

setTimeout(function() { console.log('load11');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '21.568627450980392157%' ;
}, 50000);

setTimeout(function() { console.log('remv11'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 53750);

setTimeout(function() { console.log('load12');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'hanswurst'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '23.529411764705882353%' ;
}, 55000);

setTimeout(function() { console.log('remv12'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 58750);

setTimeout(function() { console.log('load13');nodes.sort(compare); /* ae af */ var  ae = {id: 'ae', name:'wagner'},af = nodes[0]  ; nodes.push( ae ); links.push( {source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '25.490196078431372549%' ;
}, 60000);

setTimeout(function() { console.log('remv13'); var rm = [ 'ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 63750);

setTimeout(function() { console.log('load14');nodes.sort(compare); /* ad */ var  ad = {id: 'ad', name:'faust'} ; nodes.push( ad ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '27.450980392156862745%' ;
}, 65000);

setTimeout(function() { console.log('remv14'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 68750);

setTimeout(function() { console.log('load15');nodes.sort(compare); /* ac ad ag ah ai aj ak */ var  ac = {id: 'ac', name:'mephistopheles'},ad = nodes[0] ,ag = {id: 'ag', name:'viele_teufel'},ah = {id: 'ah', name:'krumschal'},ai = {id: 'ai', name:'bulla'},aj = {id: 'aj', name:'vater'},ak = {id: 'ak', name:'ein_teufel'} ; nodes.push( ac,ag,ah,ai,aj,ak ); links.push( {source: ag , target: ak },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: aj },{source: ad , target: ag },{source: ad , target: ak },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: aj },{source: ah , target: ak },{source: ah , target: ai },{source: ah , target: aj },{source: ai , target: ak },{source: ai , target: aj },{source: ac , target: ag },{source: ac , target: ak },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: aj },{source: aj , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '29.411764705882352941%' ;
}, 70000);

setTimeout(function() { console.log('remv15'); var rm = [ 'ag','ak','ah','ai','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 73750);

setTimeout(function() { console.log('load16');nodes.sort(compare); /* ad aj */ var  ad = nodes[0] ,aj = nodes[1]  ; /* nodes.push(); */ links.push( {source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '31.372549019607843137%' ;
}, 75000);

setTimeout(function() { console.log('remv16'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 78750);

setTimeout(function() { console.log('load17');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'mephistopheles'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 80000);

setTimeout(function() { console.log('remv17'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 83750);

setTimeout(function() { console.log('load18');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'hanswurst'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '35.294117647058823529%' ;
}, 85000);

setTimeout(function() { console.log('remv18'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 88750);

setTimeout(function() { console.log('load19');nodes.sort(compare); /* af ag ah ak */ var  af = nodes[0] ,ag = {id: 'ag', name:'viele_teufel'},ah = {id: 'ah', name:'krumschal'},ak = {id: 'ak', name:'ein_teufel'} ; nodes.push( ag,ah,ak ); links.push( {source: ag , target: ak },{source: ag , target: ah },{source: af , target: ag },{source: af , target: ag },{source: af , target: ak },{source: af , target: ah },{source: ag , target: ak },{source: ag , target: ah },{source: ah , target: ak } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '1. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '37.254901960784313725%' ;
}, 90000);

setTimeout(function() { console.log('remv19'); var rm = [ 'ag','af','ak','ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 93750);

setTimeout(function() { console.log('load20');nodes.sort(compare); /* al */ var  al = {id: 'al', name:'königin'} ; nodes.push( al ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '39.215686274509803922%' ;
}, 95000);

setTimeout(function() { console.log('remv20'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 98750);

setTimeout(function() { console.log('load21');nodes.sort(compare); /* ad al */ var  ad = {id: 'ad', name:'faust'},al = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '41.176470588235294118%' ;
}, 100000);

setTimeout(function() { console.log('remv21'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 103750);

setTimeout(function() { console.log('load22');nodes.sort(compare); /* ac ad al */ var  ac = {id: 'ac', name:'mephistopheles'},ad = nodes[0] ,al = nodes[1]  ; nodes.push( ac ); links.push( {source: ac , target: al },{source: ac , target: ad },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '43.137254901960784314%' ;
}, 105000);

setTimeout(function() { console.log('remv22'); var rm = [ 'al' ]; rmNodes(rm); rmLinks(rm); start(); }, 108750);

setTimeout(function() { console.log('load23');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = nodes[1]  ; /* nodes.push(); */ links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '45.09803921568627451%' ;
}, 110000);

setTimeout(function() { console.log('remv23'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 113750);

setTimeout(function() { console.log('load24');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '47.058823529411764706%' ;
}, 115000);

setTimeout(function() { console.log('remv24'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 118750);

setTimeout(function() { console.log('load25');nodes.sort(compare); /* ac am an */ var  ac = nodes[0] ,am = {id: 'am', name:'könig'},an = {id: 'an', name:'orestes'} ; nodes.push( am,an ); links.push( {source: am , target: an },{source: ac , target: am },{source: ac , target: am },{source: ac , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '49.019607843137254902%' ;
}, 120000);

setTimeout(function() { console.log('remv25'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 123750);

setTimeout(function() { console.log('load26');nodes.sort(compare); /* af am an */ var  af = {id: 'af', name:'hanswurst'},am = nodes[0] ,an = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: am },{source: af , target: an },{source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '50.980392156862745098%' ;
}, 125000);

setTimeout(function() { console.log('remv26'); var rm = [ 'af' ]; rmNodes(rm); rmLinks(rm); start(); }, 128750);

setTimeout(function() { console.log('load27');nodes.sort(compare); /* am an */ var  am = nodes[0] ,an = nodes[1]  ; /* nodes.push(); */ links.push( {source: am , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '8. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '8. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '52.941176470588235294%' ;
}, 130000);

setTimeout(function() { console.log('remv27'); var rm = [ 'an' ]; rmNodes(rm); rmLinks(rm); start(); }, 133750);

setTimeout(function() { console.log('load28');nodes.sort(compare); /* ad am */ var  ad = {id: 'ad', name:'faust'},am = nodes[0]  ; nodes.push( ad ); links.push( {source: ad , target: am } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '54.90196078431372549%' ;
}, 135000);

setTimeout(function() { console.log('remv28'); var rm = [ 'am' ]; rmNodes(rm); rmLinks(rm); start(); }, 138750);

setTimeout(function() { console.log('load29');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '56.862745098039215686%' ;
}, 140000);

setTimeout(function() { console.log('remv29'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 143750);

setTimeout(function() { console.log('load30');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'mephistopheles'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '58.823529411764705882%' ;
}, 145000);

setTimeout(function() { console.log('remv30'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 148750);

setTimeout(function() { console.log('load31');nodes.sort(compare); /* ac ad al */ var  ac = nodes[0] ,ad = nodes[1] ,al = {id: 'al', name:'königin'} ; nodes.push( al ); links.push( {source: ac , target: al },{source: ac , target: ad },{source: ad , target: al } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60.784313725490196078%' ;
}, 150000);

setTimeout(function() { console.log('remv31'); var rm = [ 'al','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 153750);

setTimeout(function() { console.log('load32');nodes.sort(compare); /* ac */ var  ac = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '62.745098039215686275%' ;
}, 155000);

setTimeout(function() { console.log('remv32'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 158750);

setTimeout(function() { console.log('load33');nodes.sort(compare); /* ac al an */ var  ac = nodes[0] ,al = {id: 'al', name:'königin'},an = {id: 'an', name:'orestes'} ; nodes.push( al,an ); links.push( {source: ac , target: an },{source: ac , target: al },{source: al , target: an } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '64.705882352941176471%' ;
}, 160000);

setTimeout(function() { console.log('remv33'); var rm = [ 'an','al' ]; rmNodes(rm); rmLinks(rm); start(); }, 163750);

setTimeout(function() { console.log('load34');nodes.sort(compare); /* ac ad */ var  ac = nodes[0] ,ad = {id: 'ad', name:'faust'} ; nodes.push( ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '15. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 165000);

setTimeout(function() { console.log('remv34'); var rm = [ 'ad','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 168750);

setTimeout(function() { console.log('load35');nodes.sort(compare); /* af ag ah ak ao ap aq ar */ var  af = {id: 'af', name:'hanswurst'},ag = {id: 'ag', name:'viele_teufel'},ah = {id: 'ah', name:'krumschal'},ak = {id: 'ak', name:'ein_teufel'},ao = {id: 'ao', name:'der_erste_scherge'},ap = {id: 'ap', name:'der_zweite_scherge'},aq = {id: 'aq', name:'zwei_teufel'},ar = {id: 'ar', name:'krustl'} ; nodes.push( af,ag,ah,ak,ao,ap,aq,ar ); links.push( {source: af , target: ao },{source: af , target: ap },{source: af , target: aq },{source: af , target: ao },{source: af , target: ap },{source: af , target: ah },{source: af , target: ar },{source: af , target: ag },{source: af , target: ak },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: aq , target: ar },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: ap },{source: ao , target: ar },{source: ap , target: aq },{source: ap , target: ar },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: aq },{source: ah , target: ao },{source: ah , target: ap },{source: ah , target: ar },{source: ah , target: ak },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: aq },{source: ag , target: ao },{source: ag , target: ap },{source: ag , target: ah },{source: ag , target: ar },{source: ag , target: ak },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: ar } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '2. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '16. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '68.627450980392156863%' ;
}, 170000);

setTimeout(function() { console.log('remv35'); var rm = [ 'af','ao','ap','aq','ah','ar','ag','ak' ]; rmNodes(rm); rmLinks(rm); start(); }, 173750);

setTimeout(function() { console.log('load36');nodes.sort(compare); /* as */ var  as = {id: 'as', name:'die_studenten'} ; nodes.push( as ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '1. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '1. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '70.588235294117647059%' ;
}, 175000);

setTimeout(function() { console.log('remv36'); var rm = [ 'as' ]; rmNodes(rm); rmLinks(rm); start(); }, 178750);

setTimeout(function() { console.log('load37');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'mephistopheles'},ad = {id: 'ad', name:'faust'} ; nodes.push( ac,ad ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '2. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '2. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '72.549019607843137255%' ;
}, 180000);

setTimeout(function() { console.log('remv37'); var rm = [ 'ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 183750);

setTimeout(function() { console.log('load38');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '3. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '3. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '74.509803921568627451%' ;
}, 185000);

setTimeout(function() { console.log('remv38'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 188750);

setTimeout(function() { console.log('load39');nodes.sort(compare); /* ad ae */ var  ad = nodes[0] ,ae = {id: 'ae', name:'wagner'} ; nodes.push( ae ); links.push( {source: ad , target: ae } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '4. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '4. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '76.470588235294117647%' ;
}, 190000);

setTimeout(function() { console.log('remv39'); var rm = [ 'ae' ]; rmNodes(rm); rmLinks(rm); start(); }, 193750);

setTimeout(function() { console.log('load40');nodes.sort(compare); /* ad */ var  ad = nodes[0]  ; /* nodes.push(); */ links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '5. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '5. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '78.431372549019607843%' ;
}, 195000);

setTimeout(function() { console.log('remv40'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 198750);

setTimeout(function() { console.log('load41');nodes.sort(compare); /* ac ad ai */ var  ac = {id: 'ac', name:'mephistopheles'},ad = nodes[0] ,ai = {id: 'ai', name:'bulla'} ; nodes.push( ac,ai ); links.push( {source: ac , target: ad },{source: ac , target: ai },{source: ad , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '6. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '6. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80.392156862745098039%' ;
}, 200000);

setTimeout(function() { console.log('remv41'); var rm = [ 'ac','ai' ]; rmNodes(rm); rmLinks(rm); start(); }, 203750);

setTimeout(function() { console.log('load42');nodes.sort(compare); /* ad af */ var  ad = nodes[0] ,af = {id: 'af', name:'hanswurst'} ; nodes.push( af ); links.push( {source: ad , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '7. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '7. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '82.352941176470588235%' ;
}, 205000);

setTimeout(function() { console.log('remv42'); var rm = [ 'af','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 208750);

setTimeout(function() { console.log('load43');nodes.sort(compare); /* at */ var  at = {id: 'at', name:'mutter'} ; nodes.push( at ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '9. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '9. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '84.313725490196078431%' ;
}, 210000);

setTimeout(function() { console.log('remv43'); var rm = [ 'at' ]; rmNodes(rm); rmLinks(rm); start(); }, 213750);

setTimeout(function() { console.log('load44');nodes.sort(compare); /* ac ad au */ var  ac = {id: 'ac', name:'mephistopheles'},ad = {id: 'ad', name:'faust'},au = {id: 'au', name:'eine_mächtige_stimme'} ; nodes.push( ac,ad,au ); links.push( {source: ad , target: au },{source: ac , target: ad },{source: ac , target: au } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '10. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '10. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '86.274509803921568627%' ;
}, 215000);

setTimeout(function() { console.log('remv44'); var rm = [ 'au','ac' ]; rmNodes(rm); rmLinks(rm); start(); }, 218750);

setTimeout(function() { console.log('load45');nodes.sort(compare); /* ad av */ var  ad = nodes[0] ,av = {id: 'av', name:'viele_stimmen'} ; nodes.push( av ); links.push( {source: ad , target: av } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '11. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '11. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '88.235294117647058824%' ;
}, 220000);

setTimeout(function() { console.log('remv45'); var rm = [ 'av','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 223750);

setTimeout(function() { console.log('load46');nodes.sort(compare); /* af ah aw */ var  af = {id: 'af', name:'hanswurst'},ah = {id: 'ah', name:'krumschal'},aw = {id: 'aw', name:'pfarrer'} ; nodes.push( af,ah,aw ); links.push( {source: af , target: ah },{source: af , target: aw },{source: ah , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '12. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '12. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '90.19607843137254902%' ;
}, 225000);

setTimeout(function() { console.log('remv46'); var rm = [ 'ah' ]; rmNodes(rm); rmLinks(rm); start(); }, 228750);

setTimeout(function() { console.log('load47');nodes.sort(compare); /* af aw */ var  af = nodes[0] ,aw = nodes[1]  ; /* nodes.push(); */ links.push( {source: af , target: aw } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '13. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '13. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '92.156862745098039216%' ;
}, 230000);

setTimeout(function() { console.log('remv47'); var rm = [ 'af','aw' ]; rmNodes(rm); rmLinks(rm); start(); }, 233750);

setTimeout(function() { console.log('load48');nodes.sort(compare); /* ad ax */ var  ad = {id: 'ad', name:'faust'},ax = {id: 'ax', name:'stimme'} ; nodes.push( ad,ax ); links.push( {source: ad , target: ax },{source: ad , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '14. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '14. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '94.117647058823529412%' ;
}, 235000);

setTimeout(function() { console.log('remv48'); var rm = [  ]; rmNodes(rm); rmLinks(rm); start(); }, 238750);

setTimeout(function() { console.log('load49');nodes.sort(compare); /* ad af ax */ var  ad = nodes[0] ,af = {id: 'af', name:'hanswurst'},ax = nodes[1]  ; nodes.push( af ); links.push( {source: af , target: ax },{source: ad , target: af },{source: ad , target: ax } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '15. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '15. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '96.078431372549019608%' ;
}, 240000);

setTimeout(function() { console.log('remv49'); var rm = [ 'af','ax' ]; rmNodes(rm); rmLinks(rm); start(); }, 243750);

setTimeout(function() { console.log('load50');nodes.sort(compare); /* ac ad */ var  ac = {id: 'ac', name:'mephistopheles'},ad = nodes[0]  ; nodes.push( ac ); links.push( {source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '16. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '16. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '98.039215686274509804%' ;
}, 245000);

setTimeout(function() { console.log('remv50'); var rm = [ 'ac','ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 248750);

setTimeout(function() { console.log('load51');nodes.sort(compare); /* af */ var  af = {id: 'af', name:'hanswurst'} ; nodes.push( af ); links.push(  ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = '3. Akt'; var act = document.getElementById('act');act.innerHTML = '17. Szene'; var scene = document.getElementById('scene');scene.innerHTML = '17. Szene';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 250000);
