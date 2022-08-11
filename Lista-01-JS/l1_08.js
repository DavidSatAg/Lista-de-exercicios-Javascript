const vogais = ['a', 'e', 'i', 'o', 'u']

function vogal_ou_nao(entrada) {
    if (entrada.length > 1 || entrada.length < 1) {
        return 'Entrada inválida'
    } else {
        if (vogais.includes(entrada.toLowerCase())) {
            classificacao = 'Vogal'
        } else {
            classificacao = 'Consoante'
        }
    }
    return classificacao
}

console.log(vogal_ou_nao('r'))