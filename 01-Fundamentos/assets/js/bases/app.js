alert("hola desde app");
// Comentarios
// console.log('ome')

console.log("Hola Mundo");

// Definir variables
// let a = 10;
// var b = 10;
// const c = 10;

// c = 20; -> esto da error y no se puede hacer
// a = 20;
// b = 20;
// no colocar let al inicio es mala practica

let a = 20,
  y = "Hola ",
  m = "Spiderman";
let b = 10;
let c = 20;
let x = a + b;
console.log(x);
console.log({ a });
console.log("%c Mis variables", "color: blue;");
console.table({ a, b });
const saludo = y + m;
console.log(saludo);

//Lo agrega en un objeto global
var outherWidth = 1000;
