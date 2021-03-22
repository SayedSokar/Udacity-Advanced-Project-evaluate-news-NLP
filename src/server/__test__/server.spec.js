
const request = require('supertest');
import '@babel/polyfill';
const app = require('../index.js');

// describe('Test root path', () => {
//     test('It should response the GET method', async () => {
//         const response = await request(app).get('/');
//         expect(response.statusCode).toBe(200);
//     });
// });


describe('Url Link "/check"', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/check');
        expect(response.statusCode).toBe(200);
    });
});