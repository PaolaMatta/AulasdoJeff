/*Dado 3 números informados pelo usuário, informe se os valores representam um triângulo válido e se o triângulo é isósceles, equilátero ou escaleno.*/
// Triângulo equilátero = 3 lados iguais
// Triângulo isóceles = 2 lados iguais
// Triângulo escaleno = 3 lados diferentes

function onButtonClick() {
  let a1 = 2;
  let a2 = 3;
  let a3 = 4;
  let triangulo = a1 < a2 + a3 &&  a2 < a1 + a3 &&  a3 < a2 + a1
    if (a1===a2 && a2===a3) {
    console.log(`O triângulo de lados ${a1}, ${a2} e ${a3} é equilátero`)
  }
  if (a1===a2 || a2===a3 || a3===a1) {
    consolelog(`O triângulo de lados ${a1}, ${a2} e ${a3} é isóceles`)
   }
  if (a1 != a2 && a2 != a3 && a3 != a1) {
    console.log (`O triângulo de lados ${a1}, ${a2} e ${a3} é escaleno`)
  }
}