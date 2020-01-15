// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, 84
// se il numero è presente nella lista dei numeri generati,
// la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100,
// con difficoltà 1 => da 1 a 80
// con difficoltà 2=> da 1 a 50
var pippo;
// funzione che genera numeri
function getRandomNumber(numMin, numMax) {
  //codice
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return  result;
}
// var numeroRandom = getRandomNumber(1, 100);
// console.log(numeroRandom);
// funzione che cerca in un array
function isInArray(array, element) {
  // for (var i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  //   if (array[i] == element) {
  //     return true;
  //   }
  // }
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}
//funzione che controlla che un numero sia in un certo range
function checkRangeNumber(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
// un array per i numeri casuali
//
//
// Genero 16 numeri da 1 a 100 casuali e li salvo
//generiamo un numero finchè il numero non è gia presente nell'array numberBomb
// console.log(numberBomb.length);
// var i = 0;
// while(i < 16) {
//   console.log(numberBomb.length);
//   numberBomb.push(1);
// }
// console.log(numberBomb);
var numberBomb = []; // salviamo i numeri
while (numberBomb.length < 16) {
  //pusho solo se il numero non è già presente
  var numberRandom = getRandomNumber(1, 100);
  var find = isInArray(numberBomb, numberRandom); // true o false
  if(find == false) {
    numberBomb.push(numberRandom);
  }
  //console.log('numberBomb length', numberBomb.length);
}
console.log(numberBomb.sort());
// una variabile per il punteggio
var points = 0;
//messaggio standard
var message = 'Hai vinto';
// un array per i numeri generati dall'utente
var numbersUser = [];
// una variabile per il numero di tentativi
var numberPrompt = 5;
// chiedere 84/5 volte qualcosa
var findBomb = false;
while (numbersUser.length < numberPrompt && findBomb == false) {
  var userNumber = false;
  // vammi a chiedere il numero finche non e corretto
  // while(checkRangeNumber(1, 100, userNumber) == false) {
  //   var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
  //   console.log('numero inserito' + checkRangeNumber(1, 100, userNumber));
  // }
  do{
    var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
    console.log('numero inserito' + checkRangeNumber(1, 100, userNumber));
  } while(checkRangeNumber(1, 100, userNumber) == false)
  if(isInArray(numbersUser, userNumber) == false) {
    numbersUser.push(userNumber);
    // se il numero dell'utente è presente nelle numberBomb hai perso
    if(isInArray(numberBomb, userNumber) == true){
      message = 'hai perso';
      findBomb = true;
    } else {
      points++;
    }
  }
  // l'utente deve inseire un numero da 1 a 100
  // questo numero non deve essere stato gia inserito
}
console.log(numbersUser);
console.log(message + ' ' + points);
// prendo il numero e lo confronto con tutti i numeri casuali generati prima
// se il numero è presente nella lista blocco il gioco
// mando messaggio
// se il numero non è presente vado avanti a chiedere altri numeri
// termino le richieste quando arrivo a 84
//
// comunico punteggio finale.
