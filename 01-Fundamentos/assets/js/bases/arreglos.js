// const arr = new Array(10);
// console.log(arr);

// const arr2 = [];

let videojuegos = ["Mario 3", "Megaman", "Chrono"];
console.log({ videojuegos });
console.log(videojuegos[0]);

let arregloCosas = [
  true,
  123,
  "Fernando",
  1 + 2,
  4343,
  false,
  "Nombres",
  { a: 1 },
  ["x", "y", "z", ["a", "b", "c"]],
];
console.log({ arregloCosas });
console.log(arregloCosas[0]);
//NO es muy escomendado hacer esto
console.log(arregloCosas[8][2]);
console.log(arregloCosas[8][3][1]);
