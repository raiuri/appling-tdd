test('Devo conhece as principais acertivas do JEST', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
});
// toBe()
// toBeNull()
// not.ToBeNull()
// toIqual()
// toBeGreateThen(number)
// toBeLessThen(number)

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'John', email: 'john@mail.com' };
    expect(obj).toHaveProperty('name', 'John');
});