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

<h1 align="center" >Array CRUD(create,read,update,delete) Operation </h1>


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
  for (let index = list.length - 1; index >= list.length - 1; index--) {
    list[index + 1] = newData;
  }
  return list;
};


const newData = "item 1";
const displayInsertElementFirstTime = insertElementFirstTime([], newData);
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
  for (let index = list.length - 1; index >= list.length - 1; index--) {
    list[index + 1] = newData;
  }
  return list;
};


const list = ["Item 1", "Item 2", "Item 3"];
const newData = "Item 4";
const displayInsertElementLastPosition = insertElementLastPosition(list,newData);
console.log( "🚀 insert element last position",displayInsertElementLastPosition);

```  

</details>

---
**[⬆ Back to Top](#header)**


##### 03. Insert arrays into another array

```js

const insertElementLastPosition = (list, newData) => {
 //Write Your solution Here
};

console.log(insertElementLastPosition(["Item 1", "Item 2", "Item 3"], ["item 4","item 5"])); // ["Item 1", "Item 2", "Item 3", "item 4","item 5"]

```

<details><summary style="cursor:pointer">Solution</summary>

```js
const insertElementLastPosition = (list, newData) => {
  for (let index = list.length ; index >= list.length ; index--) {
    for (let arrayIndex = 0; arrayIndex < newData.length; arrayIndex++) {
      const element = newData[arrayIndex];
      list[index + arrayIndex] = element;
    }
  }
  return list;
};


const list = ["Item 1", "Item 2", "Item 3"];
const newData = ["Item 4", "Item 5"];
const displayInsertElementLastPosition = insertElementLastPosition(
  list,
  newData
);
console.log(
  "🚀 insert element last position",
  displayInsertElementLastPosition
);



// or 
// let a1 = [1, 2, 3, 4, 5];
// let a2 = [21, 22];
// let startIndex = 0;
// let insertionIndex = 2;
// let result;


// result = a1
//   .slice(startIndex, insertionIndex)
//   .concat(a2)
//   .concat(a1.slice(insertionIndex));
// console.log("🚀 ~ file: test.js:67 ~ result", result);

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
    if (position <= list.length && position >= 0) {
      for (let index = list.length; index >= position; index--) {
        list[index] = list[index - 1];
      }
      list[position] = newData;
      return list;
    }
    return [];
  };
  
  
  const list = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const newData = "Item 5";
  const position = 3;
  const displayInsertElementSpecificPosition = insertElementSpecificPosition(
    list,
    newData,
    position
  );
  console.log(
    "🚀 Insert element specific position in an Array",
    displayInsertElementSpecificPosition
  );
  
```  

</details>

---
**[⬆ Back to Top](#header)**

