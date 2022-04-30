// objeto que será usado nos exercícios 1 a 5
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


// exercício 4 - for/in que mostra os valores das chaves do obejeto
for (let value in info) {
    console.log(info[value]);
};


// exercício 5 - definir um segundo obejto e imprimir seus valores junto com os do primeiro
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorretne: "Sim"
};

for (let propriedades in info) {
    if (
      propriedades === "recorrente" &&
      info[propriedades] === "Sim" &&
      info2[propriedades] === "Sim"
    ) {
      console.log("Ambos recorrentes");
    } else {
      console.log(info[propriedades] + " e " + info2[propriedades]);
    }
  };