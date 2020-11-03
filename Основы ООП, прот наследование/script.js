"use strict";

let str = "some";
let strObj = new String();

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);


///// устаревший способ прото
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const john = {
    health: 100
};

// устаревший способ прото
// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);
// john.sayHello();

const johan = Object.create(soldier); // Сразу создали объект от прототипа солдат, но ничего не имеет

// современный актуальный способ
Object.setPrototypeOf(john, soldier); // установили джону прототип солдата 
console.log(john);
console.log(john.armor);
john.sayHello();