function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

// esperarPor(3000)
//     .then(() => console.log('executando em...1'))
//     .then(esperarPor)
//     .then(() => console.log('executando em...2'))
//     .then(esperarPor)
//     .then(() => console.log('executando em...3'))

async function executar() {
    await esperarPor(3000)
    console.log('executar...1')
    
    await esperarPor(3000)
    console.log('executar...2')

    await esperarPor(3000)
    console.log('executar...3')
}

executar()