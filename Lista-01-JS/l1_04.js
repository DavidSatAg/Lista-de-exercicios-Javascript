// var n1 = prompt("Insira o primeiro número: ")
// var n2 = prompt("Insira o segundo número: ")

function soma(n1, n2) {
    if ((isNaN(n1) || isNaN(n2))) {
        return 'A entrada inserida não é válida'
    } else {
        return parseInt(n1) + parseInt(n2)
    }
}
console.log(soma(1, '7'))