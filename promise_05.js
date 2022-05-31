function funcionarOuNao(valor, chandeDeErro) {
  return new Promise((resolve, reject) => {
    try {
      // Informação errada
      con.log("temp")
      if (Math.random() < chandeDeErro) {
        reject("Ocorreu um erro!")
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e)
    }
  });
}

funcionarOuNao("Testando...", 0.5)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log("Quase Fim!"))
  .catch((err) => console.log(`Erro Geral: ${err}`))
  .then(() => console.log("Fim1"))
