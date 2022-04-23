// variável usada do exercício 1 ao 7
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1 - percorrer array e imprimir os valores
for (let numero of numeros) {
    console.log(numero);
};


// exercício 2 - somar todos os valores de um array
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
};
console.log(soma);


// exercício 3 - média aritmética 
let soma2 = 0;

for (let index = 0; index < numeros.length; index++) {
    soma2 += numeros[index];
    media = soma2 / numeros.length;
};
console.log(media);


// exercício 4  - exercicío 3 pt.2 com if/else
if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
};