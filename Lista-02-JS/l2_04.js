let lista_de_numeros = [75, 6, 0, 97, 73, 23, 26, 3, 21, 52, 46, 82, 73, 32, 4, 21, 10, 32, 12, 61, 91, 84, 95, 67, 1, 38, 95, 98, 25, 65]
var maior = lista_de_numeros[0]
var i = 0

function maior_numero() {
    while (i < lista_de_numeros.length) {
        if (lista_de_numeros[i] > maior) {
            maior = lista_de_numeros[i]
        }
        i++
    }
    return maior
}

console.log(maior_numero())