const primeiroElemento = (arrarOuString) => arrarOuString[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise((resolve) => {
  resolve(["Carla", "Renata", "Angelica", "Barbara"]);
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log);
