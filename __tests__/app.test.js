const supertest = require('supertest');
const app = require('../src/app');

test('deve responder na raiz', async () => {
    await supertest(app).get('/', (res) => {
        expect(res.status).toBe(200);
    })
});