const sum = require('./sum.js');

test('4 + 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
})
test('0 + 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
})
test('dispara um erro se um dos parâmetros for string', () => {
    expect(() => sum(4, '5')).toThrowError();
})
test('dispara um erro se um dos parâmetros for string', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
})