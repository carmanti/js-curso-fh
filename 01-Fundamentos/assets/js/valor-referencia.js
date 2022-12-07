let a = 10;
let b = a;
a = 30;

console.log({ a, b });

//pasar por referencia

let juan = { nombre: "Juan" };
let ana = { ...juan };
ana.nombre = "Ana";
//Todos los objetos son pasados por refrencia
console.log({ juan, ana });

// const cambiaNombre = (persona) => {
//   persona.nombre = "Tony";
//   return persona;
// };
const cambiaNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};
let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);
console.log({ peter, tony });
