'use strict';

// localStorage.setItem('number', 5);

// localStorage.getItem('number'); //Получение ключа
// console.log(localStorage.getItem('number'));

// localStorage.removeItem('number'); // Удаление ключа

// localStorage.clear(); // Очищение

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if ( localStorage.getItem('bg') === 'changed' ) {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', ()=> {
    if ( localStorage.getItem('bg') === 'changed' ) {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);

localStorage.setItem('persone', serializedPersone);

console.log(localStorage.getItem('persone'));
console.log(JSON.parse(localStorage.getItem('persone')));