'use strict';

const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName('button');
const btnOne = document.getElementsByTagName('button')[3];
// получили псевдомассив элементов, если кнопка будет одна, 
// все равно получим массив из одного элемента
console.log(btns);
console.log(btns[1]);
console.log(btnOne);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); //querySelectorAll имеет метод forEach

console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); // получим самый первый элемент с данным селектором