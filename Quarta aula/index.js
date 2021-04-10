// Usando um loop while, escreva um algoritmo que, dado um número //"aleatório", verifique se esse número se encontra na sequência // de fibonacci.

  
// SEQUÊNCIA DE FIBONACCI 
// 1, 1, 2, 3, 5, 8, 13, 21 ...



let numeroAnterior1 = 1;
let numeroAnterior2 = 1;
let numeroAtual = numeroAnterior1 + numeroAnterior2;
let numeroAleatorio = 90;

while(numeroAtual < numeroAleatorio) {
  console.log(numeroAtual);
  numeroAnterior1 = numeroAnterior2;
  numeroAnterior2 = numeroAtual;
  numeroAtual = numeroAnterior1 + numeroAnterior2;
}

if (numeroAtual === numeroAleatorio) {
    console.log(`O número ${numeroAleatorio} pertence à sequência de Fibonacci.`);
} else {
     console.log(`O número ${numeroAleatorio} não pertence à sequência de Fibonacci.`);
}




