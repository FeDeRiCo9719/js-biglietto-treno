//---------------- INFORMAZIONI DI PARTENZA ----------------
// 1. quanti km devi fare?
var km = parseInt(prompt("Inserisci i km da percorrere"));

// 2. quanti anni hai?
var age = parseInt(prompt("Inserisci l'età"));

//---------------- CALCOLO PREZZO VIAGGIO minorenni ----------------
// 3. sconto del 20% per i minorenni o 40% per gli over 65
if (age < 18) {
   var price = alert(((km * 0.21) * 80) /100);
} else if (age > 65) {
    var price = alert(((km * 0.21) * 60) /100);
} else {
    var price = alert(km * 0.21); 
}

