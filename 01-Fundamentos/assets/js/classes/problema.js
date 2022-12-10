const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`Nombre ${this.nombre}`);
  },
};
const pedro = {
  nombre: "Pedro",
  edad: 30,
  imprimir() {
    console.log(`Nombre ${this.nombre}`);
  },
};

// fher.imprimir();

//alternatica para crear objetos que sean iguales
//Con esto puedo crear instancias
// Esto se debe crear con la palabra new
//Ya no se recomienda trabajr asi
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  //   return `Nombre: ${nombre} Edad: ${edad}`;
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`);
  };
}

const maria = new Persona("Maria", 28);
const juan = new Persona("Juan", 35);
// console.log( );
maria.imprimir();
juan.imprimir();
