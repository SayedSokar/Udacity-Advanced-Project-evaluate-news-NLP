 import 'babel-polyfill'



const server = require("../index");

describe('Test Server is Running ', () => {
        test("response '/'", async () => {
          const response = await request(server).get("/");
          expect(response.statusCode).toBe(200);
        });
})
