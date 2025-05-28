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
let resultFirst =  document.getElementById("resultFirst");
let resultSecondary = document.getElementById("resultSecondary")
let convertButton = document.getElementById("convertButton");

function convert () {
  const value = parseFloat(inputValueUser.value);
  const type = conversionSelect.value;
  let result;


  if (isNaN(value)) {
    resultFirst.textContent = "Пожалуйста, введите корректное число.";
    return;
  }


  if (type === "cmToM" || type === "kgToG") {
    result = value / 100;
    result = value * 1000;
    resultFirst.textContent = `${value} cm = ${result} m`;
    resultSecondary.textContent = `${value} kg = ${result} g`;
  } else {
    resultFirst.textContent = "Неизвестный тип конвертации.";
  }

  event.preventDefault();
}



convertButton.addEventListener("click",convert);