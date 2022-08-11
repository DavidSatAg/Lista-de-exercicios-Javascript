var lista_de_numeros = [75, 6, 0, 97, 73, 23, 26, 3, 21, 52, 46, 82, 73, 32, 4, 21, 10, 32, 12, 61, 91, 84, 95, 67, 1, 38, 95, 98, 25, 65]

function segundo_maior_numero() {
    let lista_ordenada = lista_de_numeros.sort();
    let segundo_maior_numero = lista_ordenada[lista_de_numeros.length - 2]
    console.log(segundo_maior_numero)
}

segundo_maior_numero()
