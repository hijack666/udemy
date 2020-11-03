'use strict';

const app = '123'; // переменная app уже объявлена, это загрязнение

const number = 1;

// ПЕРВЫЙ СПОСОБ МЕТОД - анонимная самовызывающаяся функция
(function(){ //анонимная самовызывающаяся функция
// у нее собственная область видимости
    let number = 2;
    console.log(number); //2
    console.log(number + 3); //5

}()); //анонимная самовызывающаяся функция

console.log(number); //1

// ВТОРОЙ СПОСОБ - создание объектного интерфейса

const user = (function(){
    const privat = function() {
        console.log('Im privat');
    };

    return {
        sayHello: privat  // Вынесли функцию за пределы локальной видимости
    };
}());

user.sayHello();