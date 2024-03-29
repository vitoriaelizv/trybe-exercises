// 1 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona.
// Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos

const getPlanet = (callback) => {
    const mars = {
        name: 'Mars',
        distanceFromSun: {
            value: 227900000,
            measurementUnit: 'kilometers',
        },
    };
    // lógica da callback -> setTimeOut
    callback(() => console.log('Returned planet: ', mars), 4000);
};

// getPlanet(setTimeout);


// 2 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature de forma que:
// A função sendMarsTemperature imprima no console o seguinte texto: 
// "A temperatura de Marte é: temperaturaAtual graus celsius" onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e
// A mensagem deve ser impressa no console depois de no máximo 5 segundos.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature).toFixed(1);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (currentTemperature, callback) => {
    callback(() =>
        console.log(`A temperatura de Marte é: ${currentTemperature} graus celsius`), messageDelay);
};

// sendMarsTemperature(getMarsTemperature(), setTimeout); // Imprime "A temperatura de Marte é: x graus celsius", por exemplo


// 3 - Agora que você fez a função que envia a temperatura de Marte, vamos utilizar essa temperatura para realizar outras operações.
// No código abaixo, temos as funções temperatureInFahrenheit e greet.
// Elas irão utilizar a temperatura obtida pela função getMarsTemperature para realizar nossas operações. 
// Escreva a função sendMarsTemperature de forma que:
// A função sendMarsTemperature receba uma callback;
// A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
    console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// Definição da função sendMarsTemperature...
const sendMarsTemperature2 = (callback) => {
    const currentTemperature = getMarsTemperature();
    return setTimeout(() => callback(currentTemperature), messageDelay);
};

// sendMarsTemperature2(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// sendMarsTemperature2(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo


// 4 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature3 = (onSuccess, onError) => {
    const currentTemperature = getMarsTemperature();
    const messageSuccessfullySent = Math.random() <= 0.6;
    setTimeout(() => {
        if (messageSuccessfullySent) onSuccess(currentTemperature)
        else onError('Robot is busy');
    }, messageDelay());
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature3(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature3(greet, handleError);


// 5 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokemon! No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a função handlePokemonSearch de modo que: Ao chamar a função getPokemonDetails com um pokémon existente, imprime no console a mensagem com os detalhes deste pokémon.
// Ao chamar a função getPokemonDetails com um pokémon não existente, imprime no console o erro.

const pokemons = [
    {
        name: 'Bulbasaur',
        type: 'Grama',
        ability: 'Raio Solar',
    },
    {
        name: 'Charmander',
        type: 'Fogo',
        ability: 'Lança Chamas',
    },
    {
        name: 'Squirtle',
        type: 'Água',
        ability: 'Jato de Água',
    },
];

function getPokemonDetails(selectedPokemon, callback) { // 1. Adicionamos o parâmetro `selectedPokemon`
    const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

    setTimeout(() => {
        if (foundPokemon === undefined) {
            return callback(new Error('Não temos esse pokémon para você :('), null);
        }

        const { name, type, ability } = foundPokemon;

        const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

        callback(null, messageFromProfOak);
    }, 2000);
}

const handlePokemonSearch = (error, message) => {
    // Insira a callback de tratamento
    if (error) {
        console.log(error);
    } else {
        console.log(message);
    }
};

// getPokemonDetails('Bulbasaur', handlePokemonSearch);

module.exports = getPokemonDetails;
