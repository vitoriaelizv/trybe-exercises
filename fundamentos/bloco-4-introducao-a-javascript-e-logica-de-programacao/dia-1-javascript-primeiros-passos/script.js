// exercício 1 - cria 5 programas com operações aritméticas (1 para cada operação)
let a = 13;
let b = 4;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
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


// exeercício 7 - programa de reversão de nota (porcentagem para conceitos; ex.: A e F)
let porcentagemNota = 75;

if (porcentagemNota < 0 || porcentagemNota > 100) {
    console.log("Erro: nota invalida!");
}
  else if (porcentagemNota >= 90) {
    console.log('A');
} else if (porcentagemNota >= 80) {
    console.log('B');
} else if (porcentagemNota >= 70) {
    console.log('C');
} else if (porcentagemNota >= 60) {
    console.log('D');
} else if (porcentagemNota >= 50) {
    console.log('E');
} else {
    console.log('F');
};


// ecercício 8 - programa que identifica pelo menos um número par
const c = 8;
const d = 33;
const e = 18;

if ((c % 2) === 0 || (d % 2) === 0 || (e % 2) === 0) {
    console.log(true);
} else {
    console.log(false);
};


// exercício 9 - programa que identifica pelo menos um número ímpar
const f = 9;
const g = 4;
const h = 13;

if ((f % 2) != 0 || (g % 2) != 0 || (h % 2) != 0) {
    console.log(true);
} else {
    console.log(false);
};


// exercício 10 - programa de vendas
const custoProduto = 100;
const valorVenda = 160;

if (custoProduto > 0 && valorVenda > 0) {
    lucro = (valorVenda - (custoProduto * 1.2)) * 1000;
    console.log(lucro);
} else {
    console.log('Erro: os valores não podem ser negativos');
};

// exercício 11 - programa de cálculo de salário
let IR;
let INSS;
const salarioBruto = 4703.13;

// cálculo do INSS
if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11;
} else {
    INSS = 570.88;
}

// cálculo do IR
const salarioBase = salarioBruto - INSS;

if (salarioBase < 1903.98) {
    IR = 0;
} else if (salarioBase <= 2826.65) {
    IR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    IR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    IR = (salarioBase * 0.225) - 636.13;
} else {
    IR = (salarioBase * 0.275) - 869.36;
}

console.log('Salário Líquido: ' + (salarioBase - IR))