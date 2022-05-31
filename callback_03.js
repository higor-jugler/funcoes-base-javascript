const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tabuada = arr.map((fn) => fn * 5)
//console.log(tabuada)

const nome = ['Jessica', 'Virginia', 'Amanda', 'Debora', 'Carol']
const localizaLetra = nome.map((fn) => fn[0])
//console.log(localizaLetra)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome
const getTotal = item => item.qtde * item.preco
const total = carrinho.map(getTotal)

//console.log(carrinho.map(getNome))
//console.log(total)

let acumulador = []
for (let i = 0; i < carrinho.length; i++) {
    acumulador = carrinho[i].nome
    console.log(acumulador)
}
// Função map sem o padrão do JS
Array.prototype.meuMap = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], this))
    }
    return novoArray
}
console.log(carrinho.meuMap(getNome))
