/* Dado dois números informados pelo usuário, faça a multiplicação de um número pelo outro SEM UTILIZAR o operador aritimético de multiplicação.Para resolver esse problema, use uma estrutura de repetição*/
let resultado = 0;
function onButtonClick(multiplicador,multiplicando) {
    const numero1 = document.getElementById("input-numero-1");
    const numero2 = document.getElementById("input-numero-2");
    const resultado = document.getElementById("output-resultado-multiplicacao");
}

function resultadoMultiplicacao(numero1, numero2){
    let resultado = 0;

    if(numero2 >= 0) {
    for (let i = 1; i <= numero2; i++) {
        resultado += numero1;
    }
} else {
    for (let i = numero2; i < 0; i++) {
        resultado += -numero1;
    }
}
        return resultado;
    }
// let resto = 0;
// let quociente = 0;
// function resultadoDivisao(dividendo, divisor) {
//   if (dividendo - divisor >= 0) {
//     quociente++;
//     return resultadoDivisao(dividendo - divisor, divisor);
//   } else {
//     resto = dividendo;
//     return {quociente, resto};
//   }
// }

// console.log(resultadoDivisao(12, 4));