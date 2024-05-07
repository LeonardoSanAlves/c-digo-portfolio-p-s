//TDD = Test driven development 

var Novomapa = new Map ();

class HistoryMap {





}


//acessou um site no dia 11/11/2011 ás 11 da noite; 
//reduzir spam

Novomapa.set('11/11/2011 - 23:30- URL',{title: 'Título do site', URL:'url sozinha'});
Novomapa.set('11/11/2011 - 23:31- URL',{});

var resultado = Novomapa.get('11/11/2011 - 23:30- URL');
console.log (resultado);
