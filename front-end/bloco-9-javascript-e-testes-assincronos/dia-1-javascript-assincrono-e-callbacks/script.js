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

getPlanet(setTimeout);
