/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

// Entrada
// Pŕoxima volta

// Saída com base na próxima folga, calcular dia de trabalho/folga


let hoje = new Date(2016, 1, 29);
let folgaDaquiQuantosDias = 2;
let algumDia = new Date(hoje);
const MESES = {
    0: 'Janeiro', 1 :'Fevereiro', 2: 'Março', 
    3: 'Abril', 4: 'Maio', 5: 'Junho', 
    6: 'Julho', 7: 'Agosto', 8: 'Setembro', 
    9: 'Outubro', 10: 'Novembro', 11: 'Dezembro'
}
let estado = 'trabalha';
    console.log(`No dia ${hoje.getDate()} de ${MESES[hoje.getMonth()]} você trabalha`)
for (var i = 0; i < 89; i++) {
    if (((i - folgaDaquiQuantosDias - 1) % 8 == 0) || ((i - folgaDaquiQuantosDias) % 8 == 0)) {
        estado = 'folga'
    } else {
        estado = 'trabalha'
    }
    algumDia.setDate(algumDia.getDate() + 1)
    console.log(`No dia ${algumDia.getDate()} de ${MESES[algumDia.getMonth()]} você ${estado}`)
}



// (((i - 7) % 8 == 0) || ((i - 8) % 8 == 0))

// // let hoje = new Date();
// // let algumDia = new Date(hoje);
// // for (var i = 0; i < 89; i++) {
// //     algumDia.setDate(algumDia.getDate() + 1)
// //     console.log(algumDia.getDate())
// // }

// 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// T  T  T  T  T  T  F  F  T  T  T  T  T  T  F  F  T  T  T  T  T  T  F  F

// pega uma data 

// 7  8       7  -  7 = 0  -> resto por 8 = 0         8  -  8 = 0  -> resto por 8 = 0
// 15 16      15 -  7 = 8  -> resto por 8 = 0         16 -  8 = 8  -> resto por 8 = 0
// 23 24      23 -  7 = 16 -> resto por 8 = 0         24 -  8 = 16 -> resto por 8 = 0





