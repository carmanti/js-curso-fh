let personaje = {
  nombre: "Carlos",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 43.034,
    long: -118.7,
  },
  trajes: ["Mark", "Mark2"],
};

console.log("Nombre", personaje.nombre);
console.log({ personaje });
console.log("Coord", personaje.coords);
console.log("Coord lat", personaje.coords.lat);
console.log("Trajes", personaje.trajes[1]);
console.log("NUmero de trajes", personaje.trajes.length);
console.log("Ultimo de trajes", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo", personaje[x]);

//Mas detalles
//Para borrar una propiedad
delete personaje.edad;
console.log({ personaje });

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Crear ua nueva propiedad
personaje.casado = true;
console.log(entriesPares);

//Para no mutar los objetos
Object.freeze(personaje);
// personaje.dinero = 10000; => esto ya no se puede hacer o no aparece en l objeto
