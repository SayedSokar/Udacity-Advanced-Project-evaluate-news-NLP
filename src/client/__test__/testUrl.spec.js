// import { urlCheck } from "../src/client/js/urlChecker";

// describe("Testing url validation functionality for urls", function () {
// 	test("it should match the expected URL", function () {
// 		const urlRGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
// 		const urlTest = "https://jestjs.io/"; //accepted URL
// 		expect(urlRGEX.test(urlTest)).toBe(true);
// 	});
// });

// describe("Testing url validation functionality for illegitimate urls", () => {
// 	var url = "How is your day today?"; //not accepted URL
// 	test("It should return true", () => {
// 		const response = urlCheck(url);
// 		expect(response).toBeDefined();
// 		expect(response).toBeFalsy();
// 	});
// });


import { validURL } from "../js/validURL"

//Testing a valid URL
describe("Check if it is a valid URL", () => {
    test('Test URL', () => {
        const testUrl = 'https://www.aps.com.tn/';
        const response = true;
        expect(validURL(testUrl)).toEqual(response);
    });
});

//Testing an invalid URL
describe("Check an invalid URL", () => {
    test('Testing an invalid URL', () => {
        const testUrl = '\\udacity.cxom';
        const response = false;
        expect(validURL(testUrl)).toEqual(response);
    });
});