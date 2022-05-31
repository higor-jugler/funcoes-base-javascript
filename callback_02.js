const fs = require('fs')
const path = require('path')

// Referencia para o caminho atual aonde o programa esta executando e arquivo a ser lido
const caminho = path.join(__dirname, 'dados.txt')
//console.log(__dirname)

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

// Executar o código desta forma fará o conteudo ficar asincrona. Isto que dizer que não vai rodar na ordem
console.log('Inicio')
fs.readFile(caminho, {}, exibirConteudo)
// Escrevendo como arrow function
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim')

// Para rodar de forma sincrona, use a função 'readFileSync'
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')