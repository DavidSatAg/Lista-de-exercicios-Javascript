const tabela_ida = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4,
 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12,
  'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19,
   'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25,
   'A': 26, 'B': 27, 'C': 28, 'D':29, 'E':30, 'F': 31, 'G': 32,
    'H': 33, 'I': 34, 'J': 35, 'K': 36, 'L': 37, 'M': 38, 'N': 39,
     'O': 40, 'P': 41, 'Q': 42, 'R': 43, 'S': 44, 'T': 45, 'U': 46,
      'V': 47, 'W': 48, 'X': 49, 'Y': 50, 'Z': 51, 
      '!': 52, '@': 53, '#': 54, '$': 55, '%': 56, '*': 57, '(': 58,
       ')': 59, '_': 60, '+': 61, '{': 62, '[': 63, '}': 64, ']': 65,
        '^': 66, '~': 67, '<': 68, '>': 69, ',': 70, '.': 71, ';': 72,
         'ç': 73, '/': 74, '&': 75, '¨': 76, ' ': 77
        }


const tabela_volta = {'0':'a', '1':'b', '2':'c', '3':'d', 
'4':'e', '5': 'f', '6':'g', '7':'h', '8':'i', '9': 'j', '10': 'k',
'11':'l', '12':'m', '13':'n', '14':'o', '15':'p', '16':'q', '17':'r',
'18':'s', '19':'t', '20':'u', '21':'v', '22':'w', '23':'x', '24':'y', '25':'z',
'26': 'A', '27': 'B', '28': 'C', '29': 'D', '30': 'E', '31': 'F', '32': 'G',
 '33': 'H', '34': 'I', '35':'J', '36': 'K', '37': 'L', '38': 'M', '39': 'N',
  '40': 'O', '41': 'P', '42': 'Q', '43': 'R', '44': 'S', '45': 'T', '46': 'U',
   '47': 'V', '48': 'W', '49': 'X', '50': 'Y', '51': 'Z', '52': '!', '53': '@',
   '54': '#', '55': '$', '56': '%', '57': '*', '58': '(', '59': ')', '60': '_',
   '61': '+', '62': '{', '63': '[', '64': '}', '65': ']', '66': '^', '67': '~',
   '68': '<', '69': '>', '70': ',', '71': '.', '72': ';', '73': 'ç', '74': '/',
   '75': '&', '76': '¨', '77': ' '
}


// Digite uma palavra que deseja 
// Escolha uma chave positiva



let lista_ida = []
let lista_volta = []
function criptografia(texto, chave) {
    if (chave > 78) {
        chave = parseInt(chave) % 78
    }
    for (var i = 0; i < texto.length; i++) {
        lista_ida.push((tabela_ida[texto[i]] + parseInt(chave)) % 78)
        lista_volta.push(tabela_volta[(lista_ida[i])])
    }
    return lista_volta.join('')
}

console.log(criptografia('&%rismitifc    olch@',8888888829291000019283777281))

// let lista_ida1 = []
// let lista_volta1 = []

// function descriptografia(texto, chave) {
//     if (chave > 75) {
//         chave = parseInt(chave) % 78
//     }
//     for (var i = 0; i < texto.length; i++) {
//         lista_ida1.push((tabela_ida[texto[i]] - parseInt(chave) + 78) % 78)
//         lista_volta1.push(tabela_volta[(lista_ida1[i])])
//     }
//     return lista_volta1.join('')
// }

// console.log(descriptografia('f}zqAuqBqnkhhhhwtkp+', 8888888829291000019283777281))