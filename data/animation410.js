setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac */ var  aa = {id: 'aa', name:'zibólko'},ab = {id: 'ab', name:'napoleon'},ac = {id: 'ac', name:'susanne'} ; nodes.push( aa,ab,ac ); links.push( {source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ab },{source: ab , target: ac },{source: ab , target: ac } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '[Stücktext]'; var scene = document.getElementById('scene');scene.innerHTML = '[Stücktext]';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 0);
