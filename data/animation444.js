setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad aj */ var  aa = {id: 'aa', name:'graf'},ab = {id: 'ab', name:'bertha'},ac = {id: 'ac', name:'günther'},ad = {id: 'ad', name:'jaromir'},aj = {id: 'aj', name:'die_gestalt'} ; nodes.push( aa,ab,ac,ad,aj ); links.push( {source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ad },{source: ab , target: aj },{source: ab , target: ac },{source: ab , target: ad },{source: aa , target: ab },{source: aa , target: aj },{source: aa , target: ac },{source: aa , target: ad },{source: ac , target: aj },{source: ac , target: ad },{source: ad , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '20%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'aj' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* aa ab ac ad ae af */ var  aa = nodes[0] ,ab = nodes[1] ,ac = nodes[2] ,ad = nodes[3] ,ae = {id: 'ae', name:'hauptmann'},af = {id: 'af', name:'walter'} ; nodes.push( ae,af ); links.push( {source: ad , target: ae },{source: ad , target: af },{source: ab , target: ad },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: af },{source: aa , target: ad },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ae },{source: aa , target: af },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: af },{source: ae , target: af } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '40%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'aa','ac','ae','af' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* ab ad ag */ var  ab = nodes[0] ,ad = nodes[1] ,ag = {id: 'ag', name:'soldat'} ; nodes.push( ag ); links.push( {source: ab , target: ad },{source: ab , target: ag },{source: ab , target: ag },{source: ad , target: ag },{source: ad , target: ag } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '60%' ;
}, 10000);

setTimeout(function() { console.log('remv3'); var rm = [ 'ad' ]; rmNodes(rm); rmLinks(rm); start(); }, 13750);

setTimeout(function() { console.log('load4');nodes.sort(compare); /* aa ab ac ae ag ah */ var  aa = {id: 'aa', name:'graf'},ab = nodes[0] ,ac = {id: 'ac', name:'günther'},ae = {id: 'ae', name:'hauptmann'},ag = nodes[1] ,ah = {id: 'ah', name:'boleslav'} ; nodes.push( aa,ac,ae,ah ); links.push( {source: ac , target: ae },{source: ac , target: ag },{source: ac , target: ah },{source: ab , target: ac },{source: ab , target: ae },{source: ab , target: ag },{source: ab , target: ah },{source: ae , target: ag },{source: ae , target: ah },{source: aa , target: ac },{source: aa , target: ab },{source: aa , target: ae },{source: aa , target: ag },{source: aa , target: ah },{source: ag , target: ah } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '4. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Vierter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '80%' ;
}, 15000);

setTimeout(function() { console.log('remv4'); var rm = [ 'ab','aa' ]; rmNodes(rm); rmLinks(rm); start(); }, 18750);

setTimeout(function() { console.log('load5');nodes.sort(compare); /* ac ad ae ag ah ai aj */ var  ac = nodes[0] ,ad = {id: 'ad', name:'jaromir'},ae = nodes[1] ,ag = nodes[2] ,ah = nodes[3] ,ai = {id: 'ai', name:'gesang'},aj = {id: 'aj', name:'die_gestalt'} ; nodes.push( ad,ai,aj ); links.push( {source: ad , target: ah },{source: ad , target: ai },{source: ad , target: ai },{source: ad , target: ae },{source: ad , target: ag },{source: ad , target: aj },{source: ad , target: aj },{source: ah , target: ai },{source: ah , target: ai },{source: ah , target: aj },{source: ah , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ai , target: aj },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: ai },{source: ae , target: ag },{source: ae , target: aj },{source: ae , target: aj },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ai },{source: ag , target: aj },{source: ag , target: aj },{source: ac , target: ad },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: ai },{source: ac , target: ae },{source: ac , target: ag },{source: ac , target: aj },{source: ac , target: aj } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '5. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Fünfter Aufzug';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 20000);
