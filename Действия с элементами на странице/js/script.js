'use strict';

// все элементы ищем в document, можно искать в конкретном элементе
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = "500px";

box.style.cssText = 'background-color: purple; width: 500px';

btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red'; // псевдомассиву элементов нельзя задать стили
circles[0].style.backgroundColor = 'red';

// for (let i=0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// } ===

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был Вася');
div.classList.add('black');
// document.body.append(div);

wrapper.append(div); //вставить в конце
// wrapper.appendChild(div); // тоже самое, только устаревшая запись
// wrapper.prepend(div); // вставить в начале

// hearts[0].before(div); // вставить до
// wrapper.insertBefore(div, hearts[2]); // вставить до, устаревшая запись
// hearts[0].after(div); // вставить после
// circles[0].remove(); //удаление

// hearts[0].replaceWith(circles[0]); // замена элементом

div.innerHTML = "<h1>hello kisya</h1>"; // можно вставить хтмл структуру

// div.textContent = "Hello"; // можно вставить только текст - строку

div.insertAdjacentHTML("beforebegin", '<h2>Hmmmm</h2>'); // вставить перед элементом 
div.insertAdjacentHTML("afterbegin", '<h2>Hmmmm</h2>'); // вставить в начале элемента
div.insertAdjacentHTML("beforeend", '<h2>Hmmmm</h2>'); // вставить в конце эелемента
div.insertAdjacentHTML("afterend", '<h2>Hmmmm</h2>'); // вставить после элемента