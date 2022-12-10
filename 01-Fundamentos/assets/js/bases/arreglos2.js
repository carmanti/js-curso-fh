let juegos = ["Zelda", "Mario", "Metroid", "Juego2"];
console.log("Largo: ", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

//para barrer todos los metodos
juegos.forEach((elemnto, indice, arr) => {
  console.log({ elemnto, indice, arr });
});

//Insertar un elemento al final
juegos.push("Juego 20");
console.log({ juegos });

juegos.forEach((element) => {
  console.log(element);
});

let nuevaLongitud = juegos.length;
console.log(nuevaLongitud);

// insertar un elmento al inicio
juegos.unshift("Juego1");
console.log({ juegos });

//Para borrar un elemento del final
let borrado = juegos.pop();
//regresa un string y lo regresa
console.log(borrado);
console.log({ juegos });
// Para borar en una posicion especifica
let pos = 3;

let borradoSplice = juegos.splice(pos, 2);
console.log(borradoSplice);
console.log(juegos);

//Para saber en que posicion se encuentra
let metroidIndex = juegos.indexOf("Metroid"); // Case sensitive
console.log({ metroidIndex });
