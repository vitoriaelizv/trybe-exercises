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
const fatorial = n => {
    if (n === 0) {
        return 1;
    }
    let resultado = n;
    while (n > 1) {
        resultado *= --n;
    }
    return resultado;
}

// versão ternary
const fatorial = n => n > 1 ? n * fatorial(n - 1) : 1;
console.log(fatorial(5));

// 2 - Crie uma função que receba uma frase e retorne a maior palavra

// versão "normal"
const maiorPalavra = frase => {
    let arrayDePalavras = frase.split(" ");
    let tamanho = 0;
    let resultado = "";

    for (const palavra of arrayDePalavras) {
        if (palavra.length > tamanho) {
            tamanho = palavra.length;
            resultado = palavra;
        }
    }
    return resultado;
}

// versão ternary
const maiorPalavra = (frase) => frase.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];

console.log(maiorPalavra('vê se pode uma coisa dessas'));
