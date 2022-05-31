function exec(fn, x, y) {
    return fn(x, y)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x, y) => console.log(x - y)
const dividir = (w, z) => w / z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 128, 27)
const resp = exec(dividir, 4, 4)
console.log(resp)

// Criando temporizador
setInterval(() => console.log('imprima'), 1000)