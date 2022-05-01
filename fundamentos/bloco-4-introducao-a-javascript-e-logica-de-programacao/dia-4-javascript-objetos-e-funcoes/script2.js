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


// exercício 2 - criar uma função que recebe um array e retorne o indice de maior valor
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