function bomDia() {
    console.log('Bom dia')
}

const boaTarde = function () {
    console.log('Boa tarde')
}

function executarQualquerCoisa(fn) {
    if (typeof fn == 'function') {
        fn()
    }
}

// 1) Passando uma função como param
const somar = function (a, b) {
    return a + b
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)
executarQualquerCoisa(console.log(somar(10, 10)))

// 2) Retornar uma função a partir de uma outra função
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}
const bit8 = potencia(2)
console.log(bit8(8))

console.log(potencia(3)(4))
