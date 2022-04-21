// exercício 1 - cria 5 programas com operações aritméticas (1 para cada operação)
let a = 13;
let b = 4;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b
let modulo = a % b;

// console.log([adicao, subtracao, multiplicacao, divisao, modulo])


// exercício 2 - programa que retorna o maior de 2 números
const num1 = 176;
const num2 = 298;

if (num1 > num2) {
    console.log(num1);
} else if (num1 < num2){
    console.log(num2);
} else {
    console.log('Erro: os números são iguais.');
};


// exercício 3 - programa que retorna o maior de 3 números
const number1 = 983;
const number2 = 348;
const number3 = 2983;

if (number1 > number2 && number1 > number3) {
    console.log(number1);
} else if (number2 > number1 && number2 > number3) {
    console.log(number2);
} else {
    console.log(number3);
};