// Arroy function
const helloWorld = () => console.log('Hello, world!')
helloWorld()

const saudacao = nome => `Olá ${nome}, tudo bem?`
console.log(saudacao('Jessica'))

const somar = numeros => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Funções com parâmetros Rest 'rest parameter'
const somar02 = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}
console.log(somar02(1, 2, 3))
console.log(somar02(4, 5, 6))
console.log(somar02(9, 8))

// Arroy function representando uma função dentro de outra
const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))