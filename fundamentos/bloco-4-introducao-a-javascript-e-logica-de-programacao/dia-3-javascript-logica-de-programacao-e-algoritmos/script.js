// exercício 1 - algoritmo que retorna o fatorial de 10
let fatorial = 1; 

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
 };
console.log(fatorial);


// exercício 2 - algoritmo que inverte uma palavra
let palavra = 'tryber';
let palavraReversa = '';
 
for (let index = 0; index < palavra.length; index += 1) {
   palavraReversa += palavra[palavra.length - 1 - index];
};
 
console.log(palavraReversa);


// exercício 3 - algoritmos que retorna a menor e a maior palavra de um array, respectivamente
let array = ['java', 'javascript', 'python', 'html', 'css'];

let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    };
};

let maiorPalavra = array[0];

for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2].length > maiorPalavra.length) {
        maiorPalavra = array[index2];
    };
};
console.log([menorPalavra, maiorPalavra]);


// exercício 4 - algoritmo que retorna o maior número primo entre 0 e 50
let numeroPrimo = 0;

for (numero = 0; numero < 50; numero +=1) {
    let ehPrimo = true;
    for (let  divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor === 0) {
            ehPrimo = false;
        } else {
            numeroPrimo = numero
        }
    };
};
console.log(numeroPrimo);