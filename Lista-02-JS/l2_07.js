function tabuada(numero) {
    console.log(`Tabuada de ${numero}`)
    for (var i = 1; i < 11; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`)
    }
}

console.log(tabuada(7))