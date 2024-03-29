// Pokedex: esse componente representa a enciclopédia de pokémons. Esse componente recebe como entrada uma lista de pokémons para serem mostrados na tela. Para cada um desses pokémons recebidos, Pokedex chama o componente citado abaixo (Pokemon).
// Pokemon: como o próprio nome diz, esse componente representa um pokémon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokémon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.

const pokemons = [
    {
        id: 25,
        name: "Pikachu",
        type: 'Electric',
        averageWeight: {
            value: 6.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
    },
    {
        id: 4,
        name: "Charmander",
        type: 'Fire',
        averageWeight: {
            value: 8.5,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
    },
    {
        id: 10,
        name: "Caterpie",
        type: 'Bug',
        averageWeight: {
            value: 2.9,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
    },
    {
        id: 23,
        name: "Ekans",
        type: 'Poison',
        averageWeight: {
            value: 6.9,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
    },
    {
        id: 65,
        name: "Alakazam",
        type: 'Psychic',
        averageWeight: {
            value: 48.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
    },
    {
        id: 151,
        name: "Mew",
        type: 'Psychic',
        averageWeight: {
            value: 4.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
    },
    {
        id: 78,
        name: "Rapidash",
        type: 'Fire',
        averageWeight: {
            value: 95.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
    },
    {
        id: 143,
        name: "Snorlax",
        type: 'Normal',
        averageWeight: {
            value: 460.0,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/f/fd/Spr_4p_143_s.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
    },
    {
        id: 148,
        name: "Dragonair",
        type: 'Dragon',
        averageWeight: {
            value: 16.5,
            measurementUnit: "kg"
        },
        image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
        moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
    }
];

export default pokemons;