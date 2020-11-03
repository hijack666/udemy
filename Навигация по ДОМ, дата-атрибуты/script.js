"use strict";

console.log(document.body);
// console.log(document.head); // заголовок
// console.log(document.documentElement); //вся хтмл страница

// console.log(document.body.childNodes); //получим 4 элемента и плюс еще 4 элемента с лайв сервера (если юзаем например вскод), text - это перенос строки в DOMe

console.log(document.body.firstChild); //перенос строчки
console.log(document.body.lastChild); //скрипт

console.log(document.querySelector('#current').parentNode); //получаем родителя
console.log(document.querySelector('#current').parentNode.parentNode); // предки
console.log(document.querySelector('#current').parentElement); 

console.log(document.querySelector('[data-current="3"]').nextSibling); //перенос строки, соседний элемент
console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling); // 
console.log(document.querySelector('[data-current="3"]').previousSibling.previousSibling); // соседний элемент
console.log(document.querySelector('[data-current="3"]').nextElementSibling); // следующий ЭЛЕМЕНТ, не перенос, не нода

//избавимся от переносов
for ( let node of document.body.childNodes ) {
    if (node.nodeName == '#text') {
        continue;
    } 
    console.log(node);
}
