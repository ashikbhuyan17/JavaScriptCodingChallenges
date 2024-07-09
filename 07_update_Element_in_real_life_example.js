// or
// let myArray = [
//   { id: 0, name: "Jhon" },
//   { id: 1, name: "Sara" },
//   { id: 2, name: "Domnic" },
//   { id: 3, name: "Bravo" }
// ]
// let objIndex = myArray.findIndex(((obj) => obj.id == 2))
// myArray[objIndex].name = "ashik"
// console.log("updated array", myArray);



// or ((using ES6))
// const state = [
//   {
//     userId: 1,
//     id: 100,
//     title: "delectus aut autem",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 101,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 102,
//     title: "fugiat veniam minus",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 103,
//     title: "et porro tempora",
//     completed: true
//   }]

// const updateValue = state.map((item) => item.id == "101" ? { ...item, completed: "true", title: "value updated" } : item)
// console.log("🚀 ~ file: test.js:164 ~ updateValue", updateValue)