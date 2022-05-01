// exercício 1 - criar função que recebe uma string e retorna true se for um palíndromo e false se não
function verificaPalindromo(string){
    for(index in string){
      if(string[index] != string[(string.length - 1) - index]){
        return false;
      };
    };
    return true;
};
// verificaPalindromo('arara')


// exercício 2 - criar uma função que recebe um array e retorna o índice de maior valor
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


// exercício 3 - criar uma função que recebe um array e retorna o índice de menor valor
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


// exercício 4 - criar uma funçaão que recebe um array e retorna o nome com a maior quantidade decaracteres
function maisCaracteres (nomes) {
    let maiorNome = nomes[0];
    for (let nome in nomes) {
        if (maiorNome.length < nomes[nome].length) {
            maiorNome = nomes[nome]
        };
    };
    return maiorNome;
};
// maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])


// exercício 5 - criar uma função que recebe um array de numeros retorna o numero que mais se repete
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        };
      };
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      };
      contNumero = 0;;
    };
    return numeros[indexNumeroRepetido];
};
// maisRepetido([2, 3, 2, 5, 8, 2, 3])


// exercício 6 - criar uma função que recebe um número(N) e retorna a soma de todos os números até N
function soma(numero) {
    let total = 0;
    for (let index = 1; index <= numero; index += 1) {
      total = total + index;
    }
    return total;
};