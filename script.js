//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


// chiedere l'età dell'utente
let eta = parseInt(prompt("Inserisci la tua età:"));

// chiedere km all'utente
let percorso = parseInt(prompt("Inserisci kilometri che vuole percorrere:"));

// dare il prezzobase per i kilometri al cliente
const prezzoBase = 0.21; // prezzobase è 0.21 al kilometro

// calcolo il prezzo per il cliente
const prezzoFinaleNodiscount = 0.21 * percorso // il prezzoFinale Sarà il prodotto di prezzoBase e kilometri da percorrere

let sconto= 0

if (eta < 18){ // 20% di sconto
    sconto = prezzoFinaleNodiscount * (20/100);
    console.log("sei minorenne")
}
else if (eta >= 65){
    sconto = prezzoFinaleNodiscount * (40/100);
    console.log("sei over 65")
}

let prezzoFinale= prezzoFinaleNodiscount - sconto
console.log(Math.round(prezzoFinale)); // uso method Math.round per avere prezzofinale in numeri normale non decimali


