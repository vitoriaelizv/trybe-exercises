<<<<<<< HEAD
// 1. Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!.
=======
// 1. Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins
>>>>>>> 9818dcb0c98750935786db87fd81ba9d50bd6dc7

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
<<<<<<< HEAD
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
=======
    fetch(API_URL, { headers: { Accept: 'application/json' } })
        .then(response => response.json())
        .then(data =>
            document.getElementById('jokeContainer').innerText = data.joke
        );
}

window.onload = () => fetchJoke();
>>>>>>> 9818dcb0c98750935786db87fd81ba9d50bd6dc7
