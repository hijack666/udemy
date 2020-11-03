"use strict";

let a = 5,
    b = a;

b = b + 5;
console.log(b);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // в копи кладется ССЫЛКА на obj

// copy.a = 10;
// console.log(copy);
// console.log(obj);


//Поверхностная копия обьекта
function copy(mainObj) { 
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10; // обратились к ссылке на объект С

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // добавление

const clone = Object.assign({}, add); // добавление

clone.d = 10;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();


newArray[1] = 'dsadsad';
console.log(oldArray);
console.log(newArray);

//4 Способ создания поверхностной копии Spread operator
const video = ['yt', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];
        
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

//Сам способ
const array = ["a", "b"];

const spreadArray = [...array];
console.log(spreadArray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);