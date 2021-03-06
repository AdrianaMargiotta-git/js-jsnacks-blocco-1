/*Dato questo array di obj iniziale: var arrayObj = [{name: 'Poppy', type: 'tshirt', color: 'red'}, {name: 'Jumping', type: 'occhiali', color: 'blue'}, {name: 'CrissCross', type: 'scarpe', color: 'black'}, {name: 'Jenny', type: 'borsa', color: 'pink'},];
Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array) una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale*/

//mi creo un array di partenza
var abbigliamento = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

//mi creo una copia dell'array di partenza in cui andrò ad aggiungere una nuova proprietà dal nome position
var abbigliamentoDue = [
    {name: 'Poppy', type: 'tshirt', color: 'red'},
    {name: 'Jumping', type: 'occhiali', color: 'blue'},
    {name: 'CrissCross', type: 'scarpe', color: 'black'},
    {name: 'Jenny', type: 'borsa', color: 'pink'},
  ];

//con il ciclo for aggiungo la proprietà position con la variabile lettera
for (var i = 0; i < abbigliamentoDue.length; i++){
    var lettera = String.fromCharCode(97+Math.floor(Math.random() * 26)); ////mi genero delle lettere casuali minuscole
    //var lettera = String.fromCharCode(65+Math.floor(Math.random() * 26)); //lettere maiuscole
    abbigliamentoDue[i].position = lettera;
}
 
console.log("Array con l'aggiunta di position: " , abbigliamentoDue);


//metodo alternativo per generare delle lettere casuali utilizzando una funzione
/*function lettereRandom() {
    var lettere = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var lettera = lettere[Math.floor(Math.random() * lettere.length)];
    return lettera
}*/
