'use strict';
const userAge = 18;

/*Sjekker om userAge er mindre enn 18; og gir respons ut i fra taltet*/
if (userAge > 18) {
  console.log('Du kan ikke komme inn');
} else if (userAge === 18) {
  console.log('Velkommen inn! Akkurat blitt 18 gratis bursdagsdrink ');
} else if (userAge > 60 && userAge < 65) {
  console.log('Senior rabatt på drinker!');
} else if (userAge >= 18) {
  console.log('Velkommen inn');
} else {
  console.log('Noe er galt med koden');
}

/*FØRERKORT*/
/*Sjekker om userAge er større enn eller samme som 18, og gir respons ut i fra tallet */
if (userAge >= 18) {
  console.log('Du kan ta førerkortet');
} else {
  console.log('Du kan ikke ta førerkortet');
}

const userName =  '';
let userOnline = false;
let page = 'Home';

if (userName == " " && userPassword == ""){
  console.log('Du har ikke lagt brukernavn og passord')
}
