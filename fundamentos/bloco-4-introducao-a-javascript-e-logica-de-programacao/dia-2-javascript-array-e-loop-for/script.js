// variável usada do exercício 1 ao 9
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

for (let i = 0; i < numeros.length; i++) {
    soma2 += numeros[i];
    media = soma2;
};
console.log(media);


// exercício 4 - exercício 3 pt.2 usando if/else
if(media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
};


// exercício 5 - maior valor de um array
let valorMaximo = numeros[0];

for (let index2 = 1; index2 < numeros.length; index2++) {
    if (numeros[index2] > valorMaximo) {
        valorMaximo = numeros[index2];
    }
};
console.log(valorMaximo);


// exercício 6 - descobrir valores ímpares 
let resultado = 0;

for (let index3 = 0; index3 < numeros.length; index3++) {
    if (numeros[index3] % 2 !== 0) {
      resultado += 1;
    };
}; 
if (resultado === 0) {
    console.log('Nenhum valor ímpar encontrado.');
  } else {
    console.log(resultado);
  };


  // exercício 7 - menor vaor de um array
let valorMinimo = numeros[0];

  for (let index4 = 1; index4 < numeros.length; index4++) {
      if (numeros[index4] < valorMinimo) {
          valorMinimo = numeros[index4];
      }
  };
  console.log(valorMinimo);


  // exercício 8 - criar um array com for
let numeros2 = []; 

for (let index5 = 1; index5 <=25; index5++) {
    numeros2.push(index5);
};
console.log(numeros2)


// exercício 9 - utilizar o array criado no exercício anterior para imprimir o resultado da divisão de cada um dos elementos por 2
git 