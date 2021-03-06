// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. 
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email 
// no formato nome_da_pessoa@trybe.com.

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva Pizzo'),
    }
    return employees;
};

const objGenerator = (nome) => {
    const email = nome.toLowerCase().split(' ').join('_') + '@trybe.com'
    return { nome, email };
}

// console.log(newEmployees(objGenerator))

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(myNumber, number) ? 'Tente novamente.' : 'Parabéns, você ganhou!';
};

// console.log(lotteryResult(2, numberChecker));

// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. 
// Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countPoints = (rightAnswers, studentAnswers, func) => {
    score = 0;
    for (let index = 0; index <= rightAnswers; index += 1) {
        const funcReturn = func(rightAnswers[index], studentAnswers[index]);
        score += funcReturn
    }
    return `Resultado final: ${score} pontos`;
}

const compareAnswers = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
        return 1;
    } if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
};

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// BÔNUS 

// Parte I - Game Actions Simulator

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAttack = () => {
    let damage = Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
    return damage;
}

// console.log(dragonAttack());

// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = () => {
    let damage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength;
    return damage;
}

// console.log(warriorAttack());

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano 
// recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const returnObj = () => {
    const mana = mage.mana;
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Not enough mana...',
    };

    if (mana > 15) {
        const damage = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence;
        turnStats.manaSpent = 15;
        turnStats.damage = damage;
        return turnStats;
    }
    return turnStats;
};

// console.log(returnObj());

// Parte II 

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. 
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon.
// Além disto ela também deve atualizar o valor da chave damage do warrior.

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. 
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. 
// Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. 
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens
// mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.


// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar
// o resultado final do turno.

const gameActions = {
    warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior);
        warrior.damage = warriorDamage;
        return dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
        const mageTurnStats = mageAttack(mage);
        const mageDamage = mageTurnStats.damageDealt;
        mage.damage = mageDamage;
        mage.mana -= mageTurnStats.manaSpent;
        dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers
}

// console.log(gameActions.warriorTurn(warriorAttack));
// console.log(gameActions.mageTurn(mageAttack));
// console.log(gameActions.dragonTurn(dragonAttack));
// console.log(gameActions.turnResults());