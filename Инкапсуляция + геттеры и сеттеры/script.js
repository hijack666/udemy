'use strict';

// function User(name, age) { 
class User { 
    constructor(name, age) {
        this.name = name;
        // let userAge = age;
        // this.userAge = age; // Снова свойство
        this._age = age; // такие свойства на всех языках становятся недоступными
    }

    #surname = 'Klochek'; // приватное свойство
    sur = 'Klochek'; // Просто не изменяемое свойство
    // this.name = name;
    // this.age = age;
    // let userAge = age; // Создали переменную, которая будет недоступна снаружи

    say = () => {
        // console.log(`UserName: ${this.name}, возраст: ${this.age}`);
        // console.log(`UserName: ${this.name}, возраст: ${this.userAge}`);
        console.log(`UserName: ${this.name} ${this.#surname} ${this.sur}, возраст: ${this._age}`);
    }

    get age() { //Геттер, чтобы мы могли получить эту переменную
        // return userAge;
        return this._age;
    }

    set age(age) { // Сеттер
        if ( typeof age === 'number' && age > 0 && age < 110) {
            // userAge = age;
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }  
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
}

const ivan = new User('Ivan', 25);
// console.log(ivan.name);
// console.log(ivan.userAge); // undefined

// console.log(ivan.getAge()); // получаем с помощью геттера 25


// ivan.age = 30; // Вмешались в код и изменили значения
// ivan.userAge = 30; // ничего не меняет, переменная недоступна
// console.log(ivan.getAge()); //25
// ivan.setAge(30); // меняется благодаря сеттеру
// ivan.name = 'Alex'; // Вмешались в код и изменили значения

// Для класса User
console.log(ivan.age);
ivan.age = 99; // сеттер
console.log(ivan.age);

console.log(ivan.surname); // Геттер, получу Klochek
ivan.surname = 'Petrenko'; // Сеттер
console.log(ivan.surname); 
// console.log(ivan.#surname); //так не достучаться, будет ошибка

ivan.say(); // Ivan, 99