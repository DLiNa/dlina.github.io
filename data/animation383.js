setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad */ var  aa = {id: 'aa', name:'olimpia'},ab = {id: 'ab', name:'elmire'},ac = {id: 'ac', name:'bernardo'},ad = {id: 'ad', name:'erwin'} ; nodes.push( aa,ab,ac,ad ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: ac },{source: ab , target: ad },{source: ac , target: ad } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Stücktext]'; var scene = document.getElementById('scene');scene.innerHTML = '[Stücktext]';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 0);
