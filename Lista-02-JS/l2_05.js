var lista_de_numeros = [75, 6, 0, 97, 73, 23, 26, 3, 21, 52, 46, 
    82, 73, 32, 4, 21, 10, 32, 12, 61, 91, 84, 95, 67, 1, 38, 95, 98, 25, 65]


maior = lista_de_numeros[0]
segundo_maior = lista_de_numeros[0]

for (var i = 0; i < lista_de_numeros.length; i++) {
    if (lista_de_numeros[i] > maior) {
        segundo_maior = maior
        maior = lista_de_numeros[i]
    }
}

console.log(`O segundo maior número é ${segundo_maior}.`)