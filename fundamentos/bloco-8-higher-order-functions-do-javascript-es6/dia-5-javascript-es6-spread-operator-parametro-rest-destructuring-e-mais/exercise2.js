// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos

// uso do parâmetro rest
const sum = (...numbers) => numbers.reduce(((acc, value) => acc + value), 0);

console.log(sum(2, 5, 6, 8, 21));
