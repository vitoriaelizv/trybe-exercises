// exercício 1 - algoritmo que retorna o fatorial de 10
let fatorial = 1; 

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
 }
 console.log(fatorial);


 // exercício 2 - algoritmo que inverte uma palavra
 let palavra = 'tryber';
 let palavraReversa = '';
 
 for (let index = 0; index < palavra.length; index += 1) {
   palavraReversa += word[palavra.length - 1 - index];
 }
 
 console.log(palavraReversa);