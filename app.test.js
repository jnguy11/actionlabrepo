const searchFunc = require("./app").searchFunc;

describe("Search function", () => {
    test("searches for a keyword from an object.", () => {
        const foodArray = [
            {name: "john", food: "pie"},
            {name: "jeff", food: "veggies"},
            {name: "armaan", food: "burgers"}
        ];

        expect(searchFunc(foodArray, "jeff")).toEqual("veggies");
        expect(searchFunc(foodArray, "JeFf")).toEqual("veggies");
    });
});