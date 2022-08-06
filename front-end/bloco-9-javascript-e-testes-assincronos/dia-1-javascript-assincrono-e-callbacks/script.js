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


// 2 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.
// O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.
// Crie a função sendMarsTemperature de forma que:
// A função sendMarsTemperature imprima no console o seguinte texto: 
// "A temperatura de Marte é: temperaturaAtual graus celsius" onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e
// A mensagem deve ser impressa no console depois de no máximo 5 segundos.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (currentTemperature, callback) => {
    callback(() => console.log(`A temperatura de Marte é: ${currentTemperature} graus celsius`), 5000);
};

sendMarsTemperature(getMarsTemperature(), setTimeout); // Imprime "A temperatura de Marte é: x graus celsius", por exemplo
