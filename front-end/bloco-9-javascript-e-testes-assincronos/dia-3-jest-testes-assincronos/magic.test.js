
const { getMagicCard } = require('../magic');
require('../../startest/mockSetup');

const restoreFavoriteCards = () => {
    favoriteCards.splice(4, favoriteCards.length);
};

jest.setTimeout(10000);

describe('1 - Testes da função getMagicCard', () => {
    it('1.1 Verifique se getMagicCard é uma função.', () => {
        expect(typeof getMagicCard).toBe('function');
    });

    // Devemos adicionar o `async` no it e o `await` antes de chamar a função `getMagicCard`
    it('1.2 Verifique se a função fetch foi chamada.', async () => {
        // O parâmetro "130550" é o id da carta, com ele podemos pegar as informações que precisamos
        await getMagicCard('130550');

        expect(fetch).toHaveBeenCalled();
    });

    it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
        await getMagicCard('130550');

        expect(fetch).toHaveBeenCalledWith('https://api.magicthegathering.io/v1/cards/130550');
    });
});

describe('2 - Testando o retorno da função getMagicCard', () => {
    it('2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.', async () => {
        const response = await getMagicCard('130550');

        expect(response.name).toBe('Ancestor\'s Chosen');
    });
});

describe('3 - Testes da função saveFavoriteMagicCard', () => {
    afterEach(restoreFavoriteCards);

    it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
        expect.assertions();
        await saveFavoriteMagicCard('130553');

        // Você também pode utilizar o matcher `toHaveLength`
        // expect(favoriteCards).toHaveLength(5);
        expect(favoriteCards.length).toBe(5);
        expect(favoriteCards[4].name).toBe('Beacon of Immortality');

        await saveFavoriteMagicCard('130554');

        expect(favoriteCards.length).toBe(6);
    });

    it('3.2 Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
        expect.assertions();
        expect(favoriteCards).toHaveLength(4);
    });
});

describe('4 - Testes da função saveFavoriteMagicCard', () => {
    it(`4.1 Implemente um teste que verifique que o array que você obteve com o map
    contém todos os quatro nomes iniciais nomes`, async () => {
        expect.assertions();

        const expected = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
        const actual = favoriteCards.map((card) => card.name);

        expect(actual).toEqual(expected);
    });
});
