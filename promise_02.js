// Este exemplo mostra a confusão que é criar uma lógica aonde se usa callback
/* setTimeout(function() {
    console.log('1º Executando callback...')

    setTimeout(function() {
        console.log('2º Executando callback...')

        setTimeout(function() {
            console.log('3º Executando callback...')
        }, 2000)
    }, 2000)
}, 2000) */

// Exemplo mostrando um código com promise, ficando mais legivel e fácil entender
function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando promise...");
      resolve("Vish");
    }, tempo);
  });
}
/* 
esperarPor(2000).then(texto => console.log(texto)) */

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor);
