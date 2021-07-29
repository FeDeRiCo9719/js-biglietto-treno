//---------------- INFORMAZIONI DI PARTENZA ----------------
// 1. quanti km devi fare?
var km = prompt("quanti km devi fare?")

// 2. quanti anni hai?
var age = prompt("quanti anni hai?")

//---------------- CALCOLO PREZZO VIAGGIO ----------------
// 1. calcolo prezzo: ( km * 0.21 € )
var price = alert(km * 0.21) 

//---------------- POSSIBILE SCONTO MINORENNI ----------------
// 1. 20% sul prezzo
if (age < 18) {
    price = ((price * 20) / 100)
  } else {
  }

//---------------- POSSIBILE SCONTO OVER 65 ----------------
// 1. 40% sul prezzo

