let lista_de_numeros = [67, 100, 12, 181, 265, 151, 50, 26, 178, 158, 246, 20, 102,
    250, 247, 154, 82, 259, 129, 79, 82, 84, 175, 77, 68, 35, 73, 55, 260, 296, 27,
    73, 89, 93, 59, 132, 281, 57, 195, 12, 238, 200, 135, 95, 163, 216, 293, 249, 127, 46]


var contador_pares = 0
var contador_impares = 0

function contador_pares_e_impares() {
    for (var i = 0; i < lista_de_numeros.length; i++) {
        if (lista_de_numeros[i] % 2 == 0) {
            contador_pares += 1
        } else {
            contador_impares += 1
        }
    }
    return `Na lista existem ${contador_pares} números pares e ${contador_impares} números ímpares.`
}

console.log(contador_pares_e_impares())