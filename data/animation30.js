setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah */ var  aa = {id: 'aa', name:'michael'},ab = {id: 'ab', name:'petrus'},ac = {id: 'ac', name:'moritz'},ad = {id: 'ad', name:'erika'},ae = {id: 'ae', name:'hannemann'},af = {id: 'af', name:'hennemann'},ag = {id: 'ag', name:'ein_beamter'},ah = {id: 'ah', name:'die_postbeamten'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ad , target: ae },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: af , target: ag },{source: af , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Stücktext]'; var scene = document.getElementById('scene');scene.innerHTML = '[Stücktext]';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 0);
