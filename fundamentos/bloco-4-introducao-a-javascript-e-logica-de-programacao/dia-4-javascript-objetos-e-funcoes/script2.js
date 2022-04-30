// exercício 1 - criar função que recebe uma string e retorne true se for um palíndromo e false se não
function verificaPalindromo(string){
    for(index in string){
      if(string[index] != string[(string.length - 1) - index]){
        return false;
      }
    }
    return true;
}
// verificaPalindromo('arara')