const verdadeiro = ['yes', 'y', 'sim', 's']
const falso = ['no', 'n', 'nao', 'não']
function true_or_false(entrada) {
    if (verdadeiro.includes(entrada.toLowerCase())) {
        valor_da_entrada = 'True'
    } else if (falso.includes(entrada.toLowerCase())) {
        valor_da_entrada = 'False'
    } else {
        valor_da_entrada = 'A entrada inserida não é válida'
    }
    return valor_da_entrada
}

console.log(true_or_false('Não'))