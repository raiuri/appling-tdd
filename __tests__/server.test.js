const supertest = require('supertest');
require('../src/main');

const request = supertest('http://localhost:3001')

test('must be return status code 200', async () => {
    await request.get('/', (res) => {
        expect(res.status).toBe(301);
    });
});