// 1 - Dada uma matriz, transforme em um array

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// versão original
const flatten = (arrays) => {
    return arrays.reduce((concatArrays, array) => {
        return [`${concatArrays}, ${array}`];
    })
}

// versão de 1 linha
const flatten2 = (arrays) => arrays.reduce((concatArrays, array) => [`${concatArrays}, ${array}`]);

// console.log(flatten(arrays));
