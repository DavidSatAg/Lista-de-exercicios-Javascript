let texto_invertido = []
function inverter_texto(texto) {
    for (var i = (texto.length - 1); i >-1; i--) {
        texto_invertido.push(texto[i])
    }

    return (texto_invertido.join(''))
}

console.log(inverter_texto('Pudim'))