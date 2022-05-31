function Produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto("caneta", 4.50)
console.log(p1.precoFinal())

const p2 = new Produto("Notebook", 6900.89)
console.log(p2.precoFinal())
