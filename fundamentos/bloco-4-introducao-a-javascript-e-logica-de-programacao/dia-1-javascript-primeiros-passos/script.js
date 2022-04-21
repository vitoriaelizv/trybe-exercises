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


// exercício 4 - programa que retorna "positive", "negative" ou "zero"
const x = -50;

if (x > 0) {
    console.log('positive');
} else if (x < 0) {
    console.log('negative');
} else {
    console.log('zero');
}


// exercício 5 - programa que verifica os ângulos de um triângulo
const angulo1 = 40;
const angulo2 = 80;
const angulo3 = 60;

const somaAngulos = angulo1 + angulo2 + angulo3;
const angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    if (somaAngulos === 180) {
    console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido');
};


// exercício 6 - programa de xadrez (peças e seus movimentos)
let pecaXadrez = 'CaValO';

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
        console.log('Movimento: vertical e horizontal (de uma e uma casa)');
        break;
    case 'rainha':
        console.log('Movimento: vertical, horizontal e diagonal');
        break;
    case 'cavalo':
        console.log('Movimento: "L"');
        break;
    case 'torre':
        console.log('Movimento: vertical e horizontal');
        break;
    case 'bispo':
        console.log('Movimento: diagonal');
        break;
    case 'peão':
        console.log('Movimento: vertical (no primeiro movimento tem direito a andar 2 casas)');
        break;
    default:
        console.log('Erro: peça inválida.');
        break;
};