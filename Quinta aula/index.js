
/**
 * 1) Percorram a lista listaDeValores e, para cada elemento, multiplique esse elemento pelo próximo da lista.
 * Note que: ao chegar no final da lista, não há um próximo elemento. Nesse caso, multiplique o último elemento pelo primeiro.
 * Salve os resultados das multiplicações num outro array e no final do programa, imprima a lista final na tela.
 */
const listaDeValores = [100, 123, 44, 77, 59, 129, -54, -334, 2, 0];
for (let i = 0; i < listaDeValores.length; i++) {
 console.log(listaDeValores[i]);
}
let m = new Array ();

for (i = 0; i < 10; i++){
if (i < 9){
     m.push(listaDeValores[0+i] * listaDeValores[1+i]);
}else{
    m.push(0);
}
}

console.log(m)


/**
 * 2) Dada uma palavra inserida pelo usuário (vocês, no caso) imprima na tela a quantidade de letras dessa palavra e a 
 * quantidade de vogais.
 * 
 * ex: 
 * const texto = "um texto qualquer";
 *  for (let i = 0; i < texto.length; i++) {
 *    console.log(texto[i]);
 *  }
*/ 
let palavras = "Paola" 
let texto = [palavras];
for (let i = 0; i < palavras.length; i++) {
    let n = palavras[i];
    if (!texto[n]) {
        texto[n] = 1;
    } else {
        texto[n]++;
    }
}
console.log(texto)

let vogais = new Array ("a","e","i","o","u","A","E","I","O","U");
if (texto === vogais[i]) {
    console.log(vogais)
} else {
    console.log(texto)
}
return vogais


