//generare 16 numeri casuali da 1 a 100.
//chiedere all’utente di inserire per 84 volte un numero da 1 a 100,
// se il numero è presente nel log
//a lista dei numeri generati, la partita termina,
//altrimenti continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato”,
// ovvero presente nella lista di numeri random,
//o raggiunge il numero massimo possibile di tentativi consentiti.
//Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriRandomPc = [];
var numeroUtente = [];
var risultato = 0;
var tentativi = 84;
var numeriUtente;
var numeroTrovato = false;



// genera array con numeri random
for (var i = 0; i < 16; i++) {
  numeriRandomPc.push(generatoreNumRandom(1, 100));
}
console.log(numeriRandomPc);

// l'utente inserisce un numero per 84 volte
var i = 0;
while (i < possibilita && numeroTrovato == false) {
  numeriUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
  console.log(numeriUtente);
  for (var i = 0; i < numeriRandom.length; t++) {
    if (numeriUtente == numeriRandomPc[i]) {
      numeroTrovato = true;
    }
    if (numeroTrovato == true) {
      console.log("game over");

    }
  }
  i++;
  risultato++;
  console.log(risultato);

}

console.log(numeroTrovato);

function generatoreNumRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
