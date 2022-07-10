// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addTurno = (objeto, chave, valor) => {
    objeto[chave] = valor;
    return objeto;
}

addTurno(lesson2, 'turno', 'noite');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro
const chaves = (objeto) => Object.chaves(objeto);
// console.log(keys(lesson3));

// 3 - Crie uma função para mostrar o tamanho de um objeto
const entradas = (objeto) => Object.entries(objeto).length;
// console.log(entradas(lesson1));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro
const valores = (objeto) => Object.values(objeto);
// console.log(valores(lesson1));

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 })
// console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas
const totalEstudantes = (objeto) => {
    let total = 0;
    const chaves = Object.keys(objeto);
    for (let chave in chaves) {
        total += objeto[chaves[chave]].numeroEstudantes;
    }
    return total;
};
// console.log(totalEstudantes(allLessons));

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto
const x = (objeto, numero) => Object.values(objeto)[numero];
// console.log(x(lesson1, 2));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave
const verifica = (objeto, chave, valor) => {
    const entradas = Object.entries(objeto);
    let ehIgual = false;
    for (let index in entradas) {
        if (entradas[index][0] === chave && entradas[index][1] === valor) ehIgual = true;
    }
    return ehIgual;
};
// console.log(verifica(lesson2, 'professor', 'Carlos'));

// BÔNUS
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5
const matEstudantes = (objeto) => {
    let total = 0;
    const chaves = Object.keys(objeto);
    for (let index in chaves) {
        if (objeto[chaves[index]].materia === 'Matemática') {
            total += objeto[chaves[index]].numeroEstudantes;
        }
    }
    return total;
}
// console.log(matEstudantes(allLessons));

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes
const info = (objeto, nome) => {
    const allLessons = [];
    let todosEstudantes = 0;
    const valores = Object.values(objeto);
    for (index in valores) {
        if (valores[index].professor === nome) {
            allLessons.push(valores[index].materia)
            todosEstudantes += valores[index].numeroEstudantes;
        }
    }
    return { materias: allLessons, estudantes: todosEstudantes };
}

const relatorio = (allLessons, nome) => {
    const relatorio = {};
    relatorio.professor = nome;
    Object.assign(relatorio, info(allLessons, nome));
    return relatorio;
}
console.log(relatorio(allLessons, 'Maria Clara'));
