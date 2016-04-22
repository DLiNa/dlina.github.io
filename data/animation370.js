setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab */ var  aa = {id: 'aa', name:'er'},ab = {id: 'ab', name:'sie'} ; nodes.push( aa,ab ); links.push( {source: aa , target: ab } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = ''; var scene = document.getElementById('scene');scene.innerHTML = 'Das Mirakel';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 0);
