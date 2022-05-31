class Produto {

    constructor(nome, preco, desc) {
        this._nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }

}

const p1 = new Produto("caneta", 3.50, 0.15)
p1.nome = "caneta"
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.precoFinal)