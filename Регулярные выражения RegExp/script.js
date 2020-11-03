'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

const ans = prompt('Введите ваше имя');

const reg = /n/;
const regIG = /n/ig;
// console.log(regIG.text(ans)); // true или false есть ли совпадения

const regWithFlag= /n/i;
// Три флага: не во всех методах работают
// i - если хотим найти что-то вне зависимости от регистра
// g - global, хотим найти несколько вхождений
// m - включает многострочный режим
// Классы: 
// \d - ищем цифры
// \w - слова
// \s - пробелы
// Обратные классы:
// \D - ищем НЕцифры
// \W - НЕ слова
// \S - НЕ пробелы
const regClass= /\d/;
console.log(ans.match(regClass));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\W/i));

console.log(ans.search(reg)); // находит позицию первой встретившейся буквы n или -1 если буквы нет (или без нужного регистра)
console.log(ans.search(regWithFlag));

const regWithG= /n/ig; // можно а иногда нужно несколько флагов
console.log(ans.match(reg)); //получаем массив
console.log(ans.match(regWithG));

const pass = prompt('Password');

console.log(pass.replace(/./g, '*')); //если ставим точку, то заменяем ВСЕ символы
console.log(pass.replace(/\./g, '*')); // обратный слэш экранирует эту точку, и ТОЛЬКО она будет заменяться // обычно экранируют различные знаки, без экранирования они имеют различные свойства

console.log('12-34-56'.replace(/-/g, ':'));

