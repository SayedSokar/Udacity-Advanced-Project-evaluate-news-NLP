import { handleSubmit } from "../js/formHandler";
require("babel-core/register");
require("babel-polyfill");

// describe('Test, the function "handleSubmit()" is exists', () => {
// 	test("It should return true", () => {
// 		expect(handleSubmit).toBeDefined();
// 	});
// });

describe('Test, ensures the function "handleSubmit()" is a function', () => {
	test("It should be a function", () => {
		expect(typeof handleSubmit).toBe("function");
	});
});