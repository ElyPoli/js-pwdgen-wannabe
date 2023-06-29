// dichiaro variabili
const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const age = prompt("Inserisci la tua età");
const favoriteColor = prompt("Inserisci il tuo colore preferito");
const sumNumber = 21;
let password, passwordAge;

// stampo valori
document.getElementById("first-name").innerHTML = firstName;
document.getElementById("last-name").innerHTML = lastName;
document.getElementById("age").innerHTML = age;
document.getElementById("favourite-color").innerHTML = favoriteColor;

// genera password
passwordAge = parseInt(age) + sumNumber;
password = `${firstName}${lastName}${favoriteColor}${passwordAge}`;

// stampo password
document.getElementById("password").innerHTML = password;