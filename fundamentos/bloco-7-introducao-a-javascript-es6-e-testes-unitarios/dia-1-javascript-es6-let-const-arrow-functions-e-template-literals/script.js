// 1 - Altere as variáveis para respeitarem o escopo em que foram declaradas

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); | Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(false);

// 2 - Crie uma função que retorne um array em ordem crescente 

// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13
// se encontram ordenados de forma crescente!';

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const oddsAndEvensSort = oddsAndEvens.sort((a, b) => a - b); // código da função tirado do site https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
console.log(`Os números ${oddsAndEvensSort} se encontram ordenados de forma crescente!`);

// 3 - Crie uma função que receba um número e retorne seu fatorial

// versão "normal"
// const fatorial = n => {
//     if (n === 0) {
//         return 1;
//     }
//     let resultado = n;
//     while (n > 1) {
//         resultado *= --n;
//     }
//     return resultado;
// }

// versão ternary
const fatorial = n => n > 1 ? n * fatorial(n - 1) : 1;
console.log(fatorial(5));

// 4 - Crie uma função que receba uma frase e retorne a maior palavra

// versão "normal"
// const maiorPalavra = frase => {
//     let arrayDePalavras = frase.split(" ");
//     let tamanho = 0;
//     let resultado = "";

//     for (const palavra of arrayDePalavras) {
//         if (palavra.length > tamanho) {
//             tamanho = palavra.length;
//             resultado = palavra;
//         }
//     }
//     return resultado;
// }

// versão ternary
const maiorPalavra = (frase) => frase.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];

console.log(maiorPalavra('vê se pode uma coisa dessas'));

// 5 - Crie uma página com um contador de cliques

let clickCount = 0;
const button = document.getElementById('button');
const textToDisplay = document.getElementById('text');

button.addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1);

// 4 - Crie duas funções JavaScript com as seguintes especificações:

    // Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
        // A função deverá receber um nome por parâmetro;
        // Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
        // A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const subsX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome
        }
    }
    return fraseArray.join(' ');
}

console.log(subsX('Bebeto'));

    // Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
        // A função deverá receber o retorno da Função 1 por parâmetro;
        // Declare dentro da função uma variável com o nome skills, do tipo const;
        // A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
        // Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.


const minhasSkills = (x) => {
    const skills = ['HTML', 'CSS', 'JS'];
    let resultado = `
    ${x}
    Minhas três principais habilidades são:`;
    
    for (let skill of skills) {
        resultado = `${resultado} - ${skill}`;
    }
    return resultado;
}

console.log(minhasSkills(subsX('Bebeto')));
