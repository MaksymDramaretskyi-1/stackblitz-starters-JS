'use strict';
// const userAge = 18;

/*Sjekker om userAge er mindre enn 18; og gir respons ut i fra taltet*/
// if (userAge > 18) {
//   console.log('Du kan ikke komme inn');
// } else if (userAge === 18) {
//   console.log('Velkommen inn! Akkurat blitt 18 gratis bursdagsdrink ');
// } else if (userAge > 60 && userAge < 65) {
//   console.log('Senior rabatt på drinker!');
// } else if (userAge >= 18) {
//   console.log('Velkommen inn');
// } else {
//   console.log('Noe er galt med koden');
// }

/*FØRERKORT*/
/*Sjekker om userAge er større enn eller samme som 18, og gir respons ut i fra tallet */
// if (userAge >= 18) {
//   console.log('Du kan ta førerkortet');
// } else {
//   console.log('Du kan ikke ta førerkortet');
// }

// const userName =  "Maksym";
// const userPassword = "Maskym123";
// let userOnline = false;
// let page = 'Log-in';

// if (userName == " " && userPassword == ""){
//     console.log('Du har ikke lagt brukernavn og passord')
// } else if(userName != "Maksym"){
//     console.log(`Du gar suksesfull logget inn ${userName}`)
// } else if(userName != "Maksym") {
//   console.log("Brukernavnet er feil. Prøv på nytt.")
// } else if (userPassword != "Maskym123"){
//   console.log("Passsword er feil. Prøv på nytt.")
// } else if (userName != "Maksym" || userPassword != "Maskym123"){
//   console.log("Brukernavnet eller passordet er feil. Prøv på nytt")
// } else if (userName == "Maksym" && userPassword == "Maskym123"){
//   console.log("Brukernavnet OG passordet er feil. Prøv på nytt")
//   userOnline = true;
//   page = "Home";
//   const loginMessage = document.getElementById('loginMessage');
//   console.log(loginMessage);
//   loginMessage.textContent = `Du gar suksesfull logget inn ${userName}`;
// }else {
//   console.log("Noe er galt med koden...")
// }

let inputValueUser = document.getElementById("inputValue");
let conversionSelect = document.getElementById("conversionType");
let resultForm =  document.getElementById("result");
let convertButton = document.getElementById("convertButton");

function convert (event) {
  event.preventDefault();

  const value = parseFloat(inputValueUser.value);
  const type = conversionSelect.value;
  let result = null;

  if (isNaN(value) || value === 0) {
    resultForm.textContent = "Please enter a valid value greater than zero";

    return;
  }

  if (type === "cmToM") {
    result = value / 100;
    resultForm.textContent = `${value} cm = ${result} m`;

  } else if (type === "kgToG") {
    result = value * 1000;
    resultForm.textContent = `${value} kg = ${result} g`;

  } else {
    resultForm.textContent = "Unknown conversion type.";
  }
  
}
  
convertButton.addEventListener("click", convert);