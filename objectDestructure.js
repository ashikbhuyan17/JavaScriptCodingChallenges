const state = [
    {
        userId: 1,
        id: 100,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 101,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 102,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 103,
        title: "et porro tempora",
        completed: true
    }]

const updateValue = state.map((item) => item.id == "101" ? { ...item, completed: "true", title: "value updated" } : item)
console.log("🚀 ~ file: test.js:164 ~ updateValue", updateValue)



let a = {
    a: "fsdf",
    b: "sdfds",
    c: {
        d: "dddddddd",
        e: "eeeeeee"
    }
}

console.log({ ...a.c, d: "xxxxxxxxxx" })