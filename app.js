function searchFunc(data, nameSearch) {
    const search = nameSearch.toLowerCase();
    for (person of data) {
        if (person["name"] === search) {
            return person["food"]
        }
    }
}

const foodArray = [
    {name: "john", food: "pie"},
    {name: "jeff", food: "veggies"},
    {name: "armaan", food: "burgers"}
];

console.log(searchFunc(foodArray, "jeff"))

module.exports = { searchFunc }