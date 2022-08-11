// const dias_da_semana = {
//     '1': 'Domingo',
//     '2': 'Segunda',
//     '3': 'Terça',
//     '4': 'Quarta',
//     '5': 'Quinta',
//     '6': 'Sexta',
//     '7': 'Sábado',
// }

// function que_dia_e_hoje(numero) {
//     if (numero < 0 || numero > 7) {
//         saida = 'Entrada inválida'
//     } else {
//         saida = `O dia correspondente ao número é: ${dias_da_semana[numero]}`
//     }
//     return saida
// }

// console.log(que_dia_e_hoje(1))


switch ('7') {
    case "1":
        console.log("Domingo")
        break;
    case "2":
        console.log("Segunda")
        break;
    case "3":
        console.log("Terça")
        break;
    case "4":
        console.log("Quarta")
        break;
    case "5":
        console.log("Quinta")
        break;
    case "6":
        console.log("Sexta")
        break;
    case "7":
        console.log("Sábado")
        break;
    default:
        console.log('Entrada inválida')
}