const travelDistance = parseInt(prompt("Quanti km dovrai effettuare?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
let outputText;
console.log(travelDistance, userAge);

const finalPrice = travelDistance * 0.21;

if (userAge < 18) {
  outputText = "Il biglietto per minorenni costa €" + (finalPrice * 20) / 100;
} else if (userAge > 65) {
  outputText = "Il biglietto per Over 65 costa €" + (finalPrice * 40) / 100;
} else {
  outputText = "Il biglietto costa €" + finalPrice;
}

alert(outputText);
