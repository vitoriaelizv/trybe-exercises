let pecaDeXadrez = 'CAVALO';

switch (pecaDeXadrez.toUpperCase()) {
    case 'CAVALO':
        console.log('CAVALO: movimento em "L"')
        break
    case 'TORRE':
        console.log('TORRE: movimento horizontal e vertical')
        break
    case 'BISPO':
        console.log('BISPO: movimento diagonal')
        break
    case 'PEÃO':
        console.log('PEÃO: movimento para frente')
        break
    case 'REI':
        console.log('REI: movimento para qualquer direção, de uma em uma casa')
        break
    case 'RAINHA':
        console.log('RAINHA: movimento horizontal, vertical e diagonal')
    default:
        console.log('ERRO: peça inexistente')
}