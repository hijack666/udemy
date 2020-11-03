'use strict';

// const now = new Date(); // показывает часы по Гринвичу
const someDate = new Date('2020-05-01');
const numDate = new Date(2020, 5, 1, 20); //месяцы в дате считаются с нуля, с учетом часовых поясов
const zeroDate = new Date(0); // начальная дата, отступ от нее 0 милисекунд
const oldDate = new Date(-100000);

// console.log(now);
console.log(someDate);
console.log(numDate);
console.log(zeroDate);
console.log(oldDate);

const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate()); //+ getHours, getMinues, setconds and miliseconds
// console.log(now.getDay()); // в соотв с часовым поясом, 5 день - пятница
// console.log(now.getHours());
// console.log(now.getUTCHours());

console.log(now.getTimezoneOffset()); // разница между часовым поясом и UTC в минутах = 420 (7часов)
console.log(now.getTime()); // колво милисек прошедших с нулевой даты

console.log(now.setHours(18)); 
console.log(now); // в терминале будет в формате UTC, в консоли браузера будет ориентироваться на локальную дату
console.log(now.setHours(18, 40)); // первый аргумент - часы, второй - минуты 

const parseDate = new Date('2020-05-01'); // ===
new Date.parse('2020-05-01'); // ===


// измерение времени по отработке скрипта, производительность
let start = new Date();  // начало засекания
for (let i=0; i< 100000; i++) {
    let some = i ** 3; // возведение в степень
}

let end = new Date(); // конец засекания

console.log(`Цикл отработал за ${end - start} миллисекунд`);