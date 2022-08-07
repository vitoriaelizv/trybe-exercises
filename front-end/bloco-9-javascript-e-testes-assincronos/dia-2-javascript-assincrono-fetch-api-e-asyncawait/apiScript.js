// 1. Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!.

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => console.log(data));
};

// faça a piada aparecer no DOM da página!

window.onload = () => fetchJoke();
