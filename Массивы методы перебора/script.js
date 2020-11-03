'use strict';

// filter
const names = ['Ivan', 'Ann', 'Kseina', 'Voldemart'];

const shortNames = names.filter( function(name) { // Не надо делать перебор 
    return name.length < 5; // Длина имени менее 5 символов
});

console.log(shortNames); // Ivan, Ann

// map
const answers = ['IvAn', 'AnnA', 'Hello']; //Имена с ошибками, капс и тп

// const result = answers.map( item => {
//     return item.toLowerCase;
// }); // Трансформация каждого элемента массива

const result = answers.map( item => item.toLowerCase());
console.log(result);

let ansNames = ['IvAn', 'AnnA', 'Hello'];
ansNames = ansNames.map(item => item.toLowerCase()); // Изначальный массив удаляется, записывается новый
console.log(ansNames); // лучше так не делать, и создавать новую переменную

// every/some

const some = [4, 'qwq', 'dasdas'];
const numbers = [5, 8, 9, 12]

console.log(some.some( item => typeof(item) === 'number') ); // Хотя бы один элемент соотв условию
console.log(some.every( item => typeof(item) === 'number') ); // Если все элементы будут числами, то тру
console.log(numbers.every( item => typeof(item) === 'number') );

// reduce  - для схлопывания массива, в осн используется для числовых данных
const arr = [4, 6, 1, 3, 2, 6];
                // Первый аргумент - сумма всех элементов, второй - тот каждый элемент от массива (примерно тоже что и i=i+1)
                // 0   4
                // 4   6
                // 10  1 
                // 11  3
                // 14  2
                // 16  6
                // 22  0  -> 21
const res = arr.reduce((sum, current) => sum + current); //метод перебора

console.log(res);

const stringArr =  ['apple', 'pear', 'plum'];

const resStr = stringArr.reduce((sum, current) => `${sum},  ${current}`, 'zhopa');
console.log(resStr);

// entries  из объекта получаем массив массивов
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// const newArr = Object.entries(obj);
    
// console.log(newArr);
// const persones = newArr.filter( item => item[1] === 'persone' )
// console.log(persones);
// console.log(persones.map( item => item[0] ));
    // chaining - цепочка, выстроили все методы цепочкой
const newArr = Object.entries(obj)
.filter( item => item[1] === 'persone' )
.map(item => item[0])
console.log(newArr);