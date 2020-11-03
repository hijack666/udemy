'use strict';

// Перебор объекта FOR iN

const object = {
    name: 'kek',
    age: 178,
    hobbies: {
        music: 'govnallica',
        movie: 'witcher'
    },
    makeTest: function() {
        console.log('test');
    }
};

let counter = 0;

for (let key in object) {
    if (typeof(object[key]) === 'object' ) {
        for (let i in object[key]) {
            console.log(`Свойство ${i} имеет значение ${object[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${object[key]}`);
        counter++;
    }  
}

console.log(counter); 

console.log(Object.keys(object));
console.log(Object.keys(object).length);

object.makeTest();

const {music, movie} = object.hobbies; // Деструктуризация
console.log(music);