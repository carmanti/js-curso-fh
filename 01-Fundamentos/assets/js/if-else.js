let a = 5;
if (a >= 10) {
  console.log("Es mayor a 10");
} else {
  console.log("Es menos a 10");
}
console.log("Fin programa");

const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else {
  console.log("No es domingo");
}

//sin usar if else
let diaIngresado = 3;
const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

console.log(dias[diaIngresado]);

//sin usar if else
const diasLetras = {
  0: "Lunes",
  1: "Martes",
  2: "Miercoles",
  3: "Jueves",
  4: "Viernes",
  5: "Sabado",
  6: "Domingo",
};
console.log(diasLetras[diaIngresado]);
