// objeto que será usado ao longo dos exercícios
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


// exercício 1 - imprimir na tela um mensagem com para o personagem

// notação por ponto (dot notation)
console.log('Boas-vindas, ' + info.personagem);

// notação por colchetes (bracked notation)
console.log('Boas=vindas, ' + info['personagem']);


// exercício 2 - inserir no obejto uma nova propriedade
info.recorrente = 'Sim'
//console.log(info);