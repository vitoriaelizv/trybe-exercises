// exercício 1 - criar função que recebe uma string e retorne true se for um palíndromo e false se não
function verificaPalindromo(string){
    for(index in string){
      if(string[index] != string[(string.length - 1) - index]){
        return false;
      };
    };
    return true;
};
// verificaPalindromo('arara')


// exercício 2 - criar uma função que recebe um array e retorne o índice de maior valor
function indiceDoMaior(array) {
    let indiceMaior = 0;
    for (indice in array) {
        if (array[indiceMaior] < array[indice]) {
            indiceMaior = indice;
        };
    };
    return indiceMaior
};
// indiceDoMaior([2, 3, 6, 7, 10, 1])


// exercício 3 - criar uma função que recebe um array e retorno o índice de menor valor
function indiceDoMenor(array2) {
    let indiceMenor = 0;
    for (let indice2 in array2) {
        if (array2[indiceMenor] > array2[indice2]) {
            indiceMenor = indice2;
        };
    };
    return indiceMenor;
};
// indiceDoMenor([2, 4, 6, 7, 10, 0, -3])