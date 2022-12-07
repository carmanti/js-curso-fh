/**
 *Dias de la semana abrimos a las 11
 * fines de semana a las 9
 */

// Saber si esta abierto el dia de hoy
const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto o cerrado abrimos a las XX

// Con operador ternario
horaApertura = [0, 6].includes(dia) ? 9 : 11;

if (dia === 0 || dia === 6) {
  console.log("Es fin de semana");
  horaApertura = 9;
} else {
  console.log("Dia de semana");
  horaApertura = 11;
}

if (horaActual >= horaApertura) {
  mensaje = "Esta abierto";
} else {
  //   mensaje = "Esta cerrado, Abrimos a las " + horaApertura;  Forma antigua
  mensaje = `Esta cerrado, Abrimos ${horaApertura}`;
}

console.log({ horaApertura });
