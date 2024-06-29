<img src='./images/logo.png'  alt='JavaScript Coding Challenges Ashik Bhuyan' id='header'/>

<h1 align="center" >JavaScript Coding Challenges </h1>


<div align="center" >

<a href="mailto:ashikbhuyan.swe.diu@gmail.com">
<img
src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'
alt='Ashik Bhuyan'
/>
</a>

<a href="tel:+8801793605043">
<img
src='https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white'
alt='Ashik Bhuyan'
/>
</a>
<a href="https://portfolio-70e38.web.app/" target="_blank">
<img
src='https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white'
alt='Ashik Bhuyan'
/>
</a>
<a href="https://www.facebook.com/ashikbhuyan17" target="_blank">
<img
src='https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white'
alt='Ashik Bhuyan'
/>
</a>

<a href="https://www.linkedin.com/in/ashik17/" target="_blank">
<img
src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'
alt='Ashik Bhuyan'
/>
</a>

<a href="https://github.com/ashikbhuyan17" target="_blank">
<img
src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
alt='Ashik Bhuyan'
/>
</a>

</div>

<!-- <h1 align="center" >Array CRUD(create,read,update,delete) Operation </h1> -->


##### 01. Insert element first position

```js

const insertElementFirstTime = (list, newData) => {
 //Write Your solution Here
};

console.log(insertElementFirstTime([], "item 1")); // ["item 1"]

```

<details><summary style="cursor:pointer">Solution</summary>

```js
const insertElementFirstTime = (list, newData) => {
    // Shift elements one position to the right
    for (let index = list.length - 1; index >= 0; index--) {
        list[index + 1] = list[index];
    }
    // Insert new element at the start of the list
    list[0] = newData;
    return list;
};

//========================== shortest way =====================================================
// const insertElementFirstTime = (list, newData) => {
//     list.unshift(newData);
//     return list;
// };
//=============================================================================================

const newData = "Item 1";
const displayInsertElementFirstTime = insertElementFirstTime([ "Item 2", "Item 3", "Item 4"], newData);
console.log("🚀 insert element first position", displayInsertElementFirstTime);

```  

</details>

---
**[⬆ Back to Top](#header)**

##### 02. Insert element last position

```js

const insertElementLastPosition = (list, newData) => {
 //Write Your solution Here
};

console.log(insertElementLastPosition(["Item 1", "Item 2", "Item 3"], "item 4")); // ["Item 1", "Item 2", "Item 3", "item 4"]

```

<details><summary style="cursor:pointer">Solution</summary>

```js
const insertElementLastPosition = (list, newData) => {
    // Add the new element at the end of the array
    list[list.length] = newData;
    return list;
};

//========================== shortest way =====================================================
// const insertElementLastPosition = (list, newData) => {
//     list.push(newData);
//     return list;
// };
//=============================================================================================

const list = ["Item 1", "Item 2", "Item 3"];
const newData = "Item 4";
const displayInsertElementLastPosition = insertElementLastPosition(list, newData);
console.log("🚀 insert element last position", displayInsertElementLastPosition);


```  

</details>

---
**[⬆ Back to Top](#header)**


##### 03. Insert arrays into another array

```js

const insertArrays = (targetArray, sourceArray) => {
 //Write Your solution Here
};

const targetArray = ["Item 1", "Item 2", "Item 3"];
const sourceArray = ["Item 4", "Item 5"];
console.log(insertArrays(targetArray, sourceArray)); // ["Item 1", "Item 2", "Item 3", "item 4","item 5"]

```

<details><summary style="cursor:pointer">Solution</summary>

```js
// Insert arrays into another array

const insertArrays = (targetArray, sourceArray) => {
    for (let index = 0; index < sourceArray.length; index++) {
        console.log(targetArray)
        targetArray[targetArray.length] = sourceArray[index]
    }
    return targetArray
}

//========================== shortest way =====================================================
// const insertArrays = (targetArray, sourceArray) => {
//     return [...targetArray, ...sourceArray];
// };
//=============================================================================================

const targetArray = ["Item 1", "Item 2", "Item 3"];
const sourceArray = ["Item 4", "Item 5"];
const resultArray = insertArrays(targetArray, sourceArray);
console.log("🚀 Combined array:", resultArray);

```  

</details>

---
**[⬆ Back to Top](#header)**


##### 04. Insert an element at a specific position in an Array

```js

const insertElementSpecificPosition = (list, newData, position) => {
 //Write Your solution Here
};

console.log(insertElementSpecificPosition(["Item 1", "Item 2", "Item 3"], "item 4",3)); // ["Item 1", "Item 2", "Item 3", "item 4","item 5"]

```

<details><summary style="cursor:pointer">Solution</summary>

```js

const insertElementSpecificPosition = (list, newData, position) => {
    if (position < 0 || position > list.length) {
        return [...list]; // Return a copy of the original list if position is out of bounds
    }
    if (position <= list.length && position >= 0) {
        // Shift elements to the right
        for (let index = list.length; index > position; index--) {
            list[index] = list[index - 1];
        }
        // Insert new data at the specified position
        list[position] = newData;
        return list;
    }
    return [];
};

const list = ["Item 1", "Item 2", "Item 3", "Item 4"];
const newData = "Insert Element";
const position = 3;
const displayInsertElementSpecificPosition = insertElementSpecificPosition(list, newData, position);
console.log("🚀 Insert element specific position in an Array", displayInsertElementSpecificPosition);

  
```  

</details>

---
**[⬆ Back to Top](#header)**

##### 06. Update element in array

```js

const updateElement = (list, newData, position) => {
 //Write Your solution Here
};

```

<details><summary style="cursor:pointer">Solution</summary>

```js
const updateElement = (list, newData, position) => {
    if (position >= 0 && position < list.length) {
        const updatedList = [...list]; // Create a copy of the original array
        updatedList[position] = newData; // Update element at specified position
        return updatedList;
    } else {
        return [...list]; // Return a copy of the original array if position is out of bounds
    }
};

// Example usage:
const list = ["Item 1", "Item 2", "Item 3", "Item 4"];
const newData = "Updated Item";
const position = 2;
const displayUpdatedList = updateElement(list, newData, position);
console.log("🚀 Updated list:", displayUpdatedList);

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
  
```  

</details>

---
**[⬆ Back to Top](#header)**
