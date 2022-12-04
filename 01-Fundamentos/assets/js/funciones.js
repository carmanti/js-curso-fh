//Definir una funcion
function saludar(nombre) {
  console.log("Hola " + nombre); // Esto no es un retorno de funcion
  //   return 1010;
  return [1, 2, 3, 4, 5];
  console.log("Soy el codigo despues"); // Esto no se ejecuta
}
// LLamado a la funcion
nombreUsuario = "Carlos";
let retorno = saludar(nombreUsuario);
console.log(retorno);

//Formas de definir una funcion
// const saludar2 = function () {
//   console.log("Hola desde anonima");
// };

// saludar2();

//FUncion flecha
const saludarFlecha = () => {
  console.log("Hola flecha");
};
saludarFlecha();

function sumar(a, b) {
  return a + b;
}

//Funcion flecha normal
const sumar2 = (a, b) => {
  return a + b;
};

//Funcion flecha corta
const sumar3 = (a, b) => a + b;

console.log(sumar(1, 2));
console.log(sumar2(2, 2));
console.log(sumar3(2, 4));

function getAleatrorio() {
  return Math.random();
}

const getAleatrorio2 = () => Math.random();

console.log(getAleatrorio() * 10);
console.log(getAleatrorio2());
