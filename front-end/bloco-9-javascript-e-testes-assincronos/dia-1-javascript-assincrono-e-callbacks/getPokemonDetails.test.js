// 7 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./script');

describe('A função getPokemonDetails', () => {
    it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
        expect(getPokemonDetails('Charizard')).toBe(error)
    });

    it('retorna um pokémon que existe no banco de dados', () => {
        expect(getPokemonDetails('Squirtle')).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Grama e a habilidade principal dele é Raio Solar')
    });
});
