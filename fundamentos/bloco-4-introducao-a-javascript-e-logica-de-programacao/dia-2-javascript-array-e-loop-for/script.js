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