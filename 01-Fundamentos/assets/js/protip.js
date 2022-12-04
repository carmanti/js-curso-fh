function crearPersona(nombre, apellido) {
  return {
    nombre: nombre, // Se puede colocar nombre,
    apellido: apellido,
  };
}

const crearPersona2 = (nombre, apellido) => {
  return { nombre, apellido };
};

const persona = crearPersona("Fernando", "Mantilla");
const persona2 = crearPersona2("Fernando", "Mantilla");
// console.log(persona);
console.log(persona2);

//Argumentos trabaja con funciones normales no con las flechas
function imprimeArgumentos() {
  console.log(arguments);
}

//Para usar arguments en funciones flecha
const imprimeArgumentos2 = (...args) => {
  console.log(args);
};

imprimeArgumentos(10, true, false, "Carlos");
imprimeArgumentos2(10, true, false, "Carlos");
