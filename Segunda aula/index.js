/* 1) */
//let a = true || 0 && -1 && false; // true; Resposta correta: True
//                   0 && false
//                true || false
//                     true

//let b = 50 && -1 || true && -1 || false; // -1; Resposta correta: -1
//         -1 || true && -1
//               -1 || true || false
//                      -1
//let c = 0 || 0 && true || false; // false; Resposta correta: False
//         0 || 0 || false
//              false
//let d = 10 || 20 && "texto" && -1; // ??; Resposta correta: 10
//              "texto" && -1
//               10 || "texto"
//                  ??

// console.log("a: ", a); 
// console.log("b: ", b);
// console.log("c: ", c);
//console.log("d: ", d);

/* 2) Resolva a expressão via código: */

// 2x² + 4x - 5 = 0;

let a = 2;
let b = 4;
let c = -5;

let delta = Math.pow(b,2) - 4*a*c;

let raíz1 = (-b + Math.sqrt(delta))/(2*a);
let raíz2 = (-b - Math.sqrt(delta))/(2*a);

if (delta>0) {
    console.log("Existem duas raízes diferentes e Reais, são elas: ", raíz1 , " e ", raíz2);
} 
else if (delta===0) {
    console.log("Existem duas raízes Reais e iguais, são elas: ", raíz1);
    }
else {
    console.log("A equação de segundo grau não possui raízes pertencentes ao conjunto dos números Reais");
}