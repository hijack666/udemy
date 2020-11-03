'use strict';

const box = document.querySelector('.box');

const btn = document.querySelector('button');
// const width = box.clientWidth,
    // height = box.clientHeight;

const width = box.offsetWidth, // получим то что задано в стилях
    height = box.offsetHeight;

const scrollHeight = box.scrollHeight; // получим высоту всего элемента, с учетом скрола

console.log(scrollHeight);

console.log(width, height);

btn.addEventListener('click', ()=>{
    box.style.height = box.scrollHeight + 'px'; //задаем высоту элемента как высоту вложенного элемента
    console.log(box.scrollTop); // узнаем сколько проскролено наверху
    console.log( box.scrollTop / box.scrollHeight * 100); // в процентах
    console.log(document.documentElement.scrollTop); 
    // document.documentElement.scrollTop = 0; //пролистаем наверх
});

console.log(box.getBoundingClientRect().top); // получаем все координаты, границы; top - только топ

const style = window.getComputedStyle(box); // получаем стили элемента box css, в отличие от метода style(инлайн стили, в элементе DOM)
// эти стили можно только получить и проверить на соответствие, но не можем редактировать

console.log(style); 
console.log(style.display); 

console.log(document.documentElement.clientWidth); // получим ширину ДОКУМЕНТА, не окна
console.log(document.documentElement.scrollTop); // сколько пролистали сверху

window.scrollBy(0, 400); // от текущего положения ДОМ проскроллится вниз на 400пкс
window.scrollTo(0, 400); // вниз относительно ВСЕЙ страницы на координату У = 400пкс 