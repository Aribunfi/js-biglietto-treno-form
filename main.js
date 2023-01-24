// chiedo all'utente il numero di km che vuole percorrere

const numeroKm = prompt ('Quanti km devi percorrere?')
console.log('Quanti km devi percorrere?' + numeroKm);

// chiedo all'utente la sua età

const userAge = prompt('Quanti anni hai?')
console.log('Quanti anni hai?' + userAge);



// prima regola: ogni km va moltiplicato per 0.21 euro

let costoBiglietto = numeroKm * 0.21;
let outputMessage;
outputMessage = (`Il prezzo è: ${costoBiglietto}`);
console.log(outputMessage);

// seconda regola: se l'età dell'utente è <18 anni al prezzo risultante dalla moltiplicazione si applica uno sconto del 20%


if (userAge < 18) {
    const discountUnder18 = costoBiglietto * 20 / 100;
    costoBiglietto = costoBiglietto-discountUnder18;
}

// terza regola: se l'età dell'utente è > 65 anni al prezzo risultante dalla moltiplicazione si applica uno sconto del 40%

else if (userAge > 65) {

    const discountOver65 = costoBiglietto * 40 / 100;
    costoBiglietto = costoBiglietto-discountOver65; 
}

else {

}
// output del prezzo totale deve apparire con due decimali
console.log(costoBiglietto);

document.getElementById('outputMessage').innerHTML = "costo biglietto: " + costoBiglietto;