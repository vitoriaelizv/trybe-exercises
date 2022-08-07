// 2 - Agora que temos a url vamos criar um arquivo (apiCoin.js, por exemplo) e dentro dele uma função para pegar o array com as moedas.

const fetch = require('node-fetch');

const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    console.log(coins);
    return coins;
}

fetchCoins();