// const tabela_ida = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4,
//  'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12,
//   'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19,
//    'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25
// }


// const tabela_volta = {'0':'a', '1':'b', '2':'c', '3':'d', 
// '4':'e', '5': 'f', '6':'g', '7':'h', '8':'i', '9': 'j', '10': 'k',
// '11':'l', '12':'m', '13':'n', '14':'o', '15':'p', '16':'q', '17':'r',
// '18':'s', '19':'t', '20':'u', '21':'v', '22':'w', '23':'x', '24':'y', '25':'z'
// }


// Escolha uma chave entre 1 e 25


let lista_ida = []
let lista_volta = []
function criptografia(texto, chave) {
    for (var i = 0; i < texto.length; i++) {
        lista_ida.push((tabela_ida[texto[i]] + chave) % 26)
        lista_volta.push(tabela_volta[(lista_ida[i])])
    }
    return lista_volta.join('')
}

console.log(criptografia('chuplecnoflaisenhatoflousen', 4))

// let lista_ida1 = []
// let lista_volta1 = []

// function descriptografia(texto, chave) {
//     for (var i = 0; i < texto.length; i++) {
//         lista_ida1.push((tabela_ida[texto[i]] - chave + 26) % 26)
//         lista_volta1.push(tabela_volta[(lista_ida1[i])])
//     }
//     return lista_volta1.join('')
// }

// console.log(descriptografia('bgtokdbmnekzhrdmgzsnekntrdm', 25))