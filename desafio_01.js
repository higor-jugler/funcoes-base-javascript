// Criar uma função que some valores
function soma(num01) {
    return function adiciona01(num02) {
        return function adicionar02(num03) {
            return num01 + num02 + num03
        }
    }
}
console.log(soma(10)(5)(4))

function calcular(num01) {
    return function adiciona01(num02) {
        return function operador(op) {
            if (op === '/') {
                return num01 / num02
            } else if (op === '*') {
                return num01 * num02
            } else if (op === '+') {
                return num01 + num02
            } else if (op === '-') {
                return num01 - num02
            }
        }
    }
}
console.log(calcular(2)(2)('-'))

function processa(num01) {
    return function (num02) {
        return function (fn) {
        }
    }
}

function somar(x, y) {
    return x + y
}

function subtrai(x, y) {
    return x - y
}

function multiplica(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

const resultado = processa(10)(20)(somar)
console.log(resultado)