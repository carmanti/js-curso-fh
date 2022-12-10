class Persona {
  //Metodos y propiedades
  //Constructor
  // Metodo que se ejecuta exactamente en el momento que se crea una intancia de la clase

  //Ejemplo estatica
  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + "Instancias";
  }

  static mensaje() {
    console.log("Hola desde estatico");
  }

  //Definir propiedades
  nombre;
  codigo;
  frase;
  comida = "";
  //Definir constructor
  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    //Cada vez que se incicaliza cuenta
    Persona._conteo++;
  }

  //Gets y Set
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    return `La comida ${this.comida}`;
  }

  //Metodos de clases
  quienSoy() {
    console.log(`Soy ${this.nombre}`);
  }

  miFrase() {
    console.log(`${this.frase}`);
  }
}

// Para usar o crear una instancia
const spiderman = new Persona("Peter", "Spider", "Tu amigo");
// spiderman.nombre = "Carlos";
// spiderman.codigo = "21212ffff";
// spiderman.frase = "La vida es bella";
// console.log(spiderman.nombre, spiderman.codigo, spiderman.frase);
console.log(spiderman);
spiderman.quienSoy();
spiderman.miFrase();

//Usar el set
spiderman.setComidaFavorita = "pastel";
console.log(spiderman.getComidaFavorita);
console.log(spiderman);

console.log("COnteo estatico", Persona._conteo);
console.log(Persona.conteo);
console.log(Persona.mensaje());
