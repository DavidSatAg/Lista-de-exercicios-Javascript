// function getRandom(max {
//     return Math.floor(Math.random() * max + 1)
// })
// let i = 0
// var numeros = []
// while (i < 50) {
//     a = Math.floor(Math.random() * 300);
//     i++;
//     numeros.push(a)
// }
// console.log(`A lista dos 30 números aleatórios é: ${numeros}`)

let lista_de_numeros = [75, 6, 0, 97, 73, 23, 26, 3, 21, 52, 46, 82, 73, 32, 4, 21, 10, 32, 12, 61, 91, 84, 95, 67, 1, 38, 95, 98, 25, 65]
let listaClassificacao = []


function verificar_paridade() {
    for (var i = 0; i < lista_de_numeros.length; i++) {
        if (lista_de_numeros[i] % 2 == 0) {
            listaClassificacao.push('Par')
        } else {
            listaClassificacao.push('Ímpar')
        }
    }
    console.log(listaClassificacao)
}

verificar_paridade()