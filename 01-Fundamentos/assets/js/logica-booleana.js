const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};
const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negacion");
console.log(true);
console.log(!true);
console.log(!false);

console.warn("And");
console.log(true && true);
console.log(true && false);
