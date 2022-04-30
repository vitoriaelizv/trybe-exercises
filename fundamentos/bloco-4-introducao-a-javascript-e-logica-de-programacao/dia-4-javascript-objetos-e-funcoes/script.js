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
console.log('Boas-vindas, ' + info['personagem']);


// exercício 2 - inserir no obejto uma nova propriedade
info.recorrente = 'Sim'
//console.log(info);


// exercício 3 - for/in que mostra as chaves do obejeto
for (let key in info) {
    console.log(key);
};


// exercício 3 - for/in que mostra os valores das chaves do obejeto
for (let value in info) {
    console.log(info[value]);
}