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
// const spiderman = new Persona("Peter", "Spider", "Tu amigo");

class Heroe extends Persona {
  clan = "Sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = "Los avengers";
  }

  //Sobreecscribir
  quienSoy() {
    console.log(`soy desde ${this.nombre}`);
    super.quienSoy();
  }
}
const spiderman = new Heroe("Peter", "Spider", "Tu amigo");
// spiderman.clan = "Sin clan";
console.log(spiderman);
spiderman.quienSoy();
