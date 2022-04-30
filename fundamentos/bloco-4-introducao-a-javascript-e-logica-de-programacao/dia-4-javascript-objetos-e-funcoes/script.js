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


// exercício 5 - definir um segundo obejto e imprimir seus valores juntos com os do primeiro
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


// objeto que será usado nos exercícios 6 a 8
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};


// exercício 6 - acessar chaves e fazer um console 
console.log('O livro favorito de ' + leitor['nome'] + ' / ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '."');


// exercício 7 - adicionar um novo livro a chave 'livrosFavoritos'
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
});


  // exercício 8 - acessar chaves específicas e faz um console.log
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')