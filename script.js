//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
let eta = parseInt(prompt("Inserisci la tua età:"));
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzoBase = '0,21';

// va applicato uno sconto del 20% per i minorenni
sconto = 0.21 * 20 / 100
console.log(sconto)
// va applicato uno sconto del 40% per gli over 65.