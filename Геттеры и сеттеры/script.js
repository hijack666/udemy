'use strict';

const persone = {
    name: 'Alex',
    age: 25,
    get userAge() {   // геттер для получения
        return this.age;
    },
    set userAge(num) {  //сеттер для установки
        this.age = num;
    }

};

console.log(persone.userAge = 30); // установили 30, далее всегда 30
console.log(persone.userAge);