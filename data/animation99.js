setTimeout(function() { console.log('load1');nodes.sort(compare); /* aa ab ac ad ae af ag ah ai */ var  aa = {id: 'aa', name:'lieschen'},ab = {id: 'ab', name:'frau_sophie_jagert'},ac = {id: 'ac', name:'hanna'},ad = {id: 'ad', name:'eine_tiefe_bassstimme'},ae = {id: 'ae', name:'eine_singende_stimme'},af = {id: 'af', name:'verschiedene'},ag = {id: 'ag', name:'eine_breite_stimme'},ah = {id: 'ah', name:'konrads_stimme'},ai = {id: 'ai', name:'eduards_stimme'} ; nodes.push( aa,ab,ac,ad,ae,af,ag,ah,ai ); links.push( {source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ab , target: ac },{source: ab , target: ad },{source: ab , target: ae },{source: ab , target: ah },{source: ab , target: ai },{source: ab , target: af },{source: ab , target: ag },{source: ab , target: ah },{source: ab , target: ai },{source: aa , target: ab },{source: aa , target: ab },{source: aa , target: ac },{source: aa , target: ad },{source: aa , target: ae },{source: aa , target: ah },{source: aa , target: ai },{source: aa , target: af },{source: aa , target: ag },{source: aa , target: ah },{source: aa , target: ai },{source: ac , target: ad },{source: ac , target: ae },{source: ac , target: ah },{source: ac , target: ai },{source: ac , target: af },{source: ac , target: ag },{source: ac , target: ah },{source: ac , target: ai },{source: ad , target: ae },{source: ad , target: ah },{source: ad , target: ai },{source: ad , target: af },{source: ad , target: ag },{source: ad , target: ah },{source: ad , target: ai },{source: ae , target: ah },{source: ae , target: ai },{source: ae , target: af },{source: ae , target: ag },{source: ae , target: ah },{source: ae , target: ai },{source: ah , target: ai },{source: ah , target: ai },{source: af , target: ah },{source: af , target: ai },{source: af , target: ag },{source: af , target: ah },{source: af , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ag , target: ah },{source: ag , target: ai },{source: ah , target: ai },{source: ah , target: ai } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '1. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Erster Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '33.333333333333333333%' ;
}, 0);

setTimeout(function() { console.log('remv1'); var rm = [ 'ab','aa','ad','ae','ah','ai','af','ag' ]; rmNodes(rm); rmLinks(rm); start(); }, 3750);

setTimeout(function() { console.log('load2');nodes.sort(compare); /* ac aj ak al am an ao ap aq */ var  ac = nodes[0] ,aj = {id: 'aj', name:'bernhard'},ak = {id: 'ak', name:'freudenberg'},al = {id: 'al', name:'die_zuschneiderin'},am = {id: 'am', name:'die_arbeiterin'},an = {id: 'an', name:'der_alte_vernier'},ao = {id: 'ao', name:'der_hausdiener'},ap = {id: 'ap', name:'viele_stimmen'},aq = {id: 'aq', name:'alexander'} ; nodes.push( aj,ak,al,am,an,ao,ap,aq ); links.push( {source: aj , target: ak },{source: aj , target: al },{source: aj , target: am },{source: aj , target: am },{source: aj , target: an },{source: aj , target: ao },{source: aj , target: ap },{source: aj , target: aq },{source: aj , target: aq },{source: ac , target: aj },{source: ac , target: ak },{source: ac , target: al },{source: ac , target: am },{source: ac , target: am },{source: ac , target: an },{source: ac , target: ao },{source: ac , target: ap },{source: ac , target: aq },{source: ac , target: aq },{source: ak , target: al },{source: ak , target: am },{source: ak , target: am },{source: ak , target: an },{source: ak , target: ao },{source: ak , target: ap },{source: ak , target: aq },{source: ak , target: aq },{source: al , target: am },{source: al , target: am },{source: al , target: an },{source: al , target: ao },{source: al , target: ap },{source: al , target: aq },{source: al , target: aq },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: aq },{source: am , target: an },{source: am , target: ao },{source: am , target: ap },{source: am , target: aq },{source: am , target: aq },{source: an , target: ao },{source: an , target: ap },{source: an , target: aq },{source: an , target: aq },{source: ao , target: ap },{source: ao , target: aq },{source: ao , target: aq },{source: ap , target: aq },{source: ap , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '2. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Zweiter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '66.666666666666666667%' ;
}, 5000);

setTimeout(function() { console.log('remv2'); var rm = [ 'ak','al','am','an','ao','ap' ]; rmNodes(rm); rmLinks(rm); start(); }, 8750);

setTimeout(function() { console.log('load3');nodes.sort(compare); /* aa ac ah aj aq ar */ var  aa = {id: 'aa', name:'lieschen'},ac = nodes[0] ,ah = {id: 'ah', name:'konrads_stimme'},aj = nodes[1] ,aq = nodes[2] ,ar = {id: 'ar', name:'hedwig'} ; nodes.push( aa,ah,ar ); links.push( {source: ac , target: ar },{source: ac , target: aj },{source: ac , target: aq },{source: ac , target: ah },{source: aa , target: ac },{source: aa , target: ar },{source: aa , target: aj },{source: aa , target: aq },{source: aa , target: ah },{source: aj , target: ar },{source: aj , target: aq },{source: aq , target: ar },{source: ah , target: ar },{source: ah , target: aj },{source: ah , target: aq } ); start(); var SomethingBeforeAnAct = document.getElementById('SomethingBeforeAnAct');SomethingBeforeAnAct.innerHTML = ''; var act = document.getElementById('act');act.innerHTML = '3. Akt'; var scene = document.getElementById('scene');scene.innerHTML = 'Dritter Akt';
var progressbar = document.getElementById('progressiveBar');
progressbar.style.width = '100%' ;
}, 10000);
