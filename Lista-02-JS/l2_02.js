let lista_de_numeros = [75, 6, 0, 97, 73, 23, 26, 3, 21, 52, 46, 82, 73, 32, 4, 21, 10, 32, 12, 61, 91, 84, 95, 67, 1, 38, 95, 98, 25, 65]
var soma = 0


function soma_numeros() {
    for (var i = 0; i < lista_de_numeros.length; i++) {
        soma += lista_de_numeros[i]
    }
    return soma
}


console.log(soma_numeros())
