const heroes = ["batman", "Superman", "Mujer maravilla", "Aquaman"];

for (let index = 0; index < heroes.length; index++) {
  const element = heroes[index];
  console.log(element);
}

for (let i in heroes) {
  const element = heroes[i];
  console.log(element);
}

//se obtiene referencia a objetos
// No se inicializa con i se coloca el singular del arreglo
for (const heroe of heroes) {
  console.log(heroe);
}
