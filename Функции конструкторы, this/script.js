'use strict';

// const num = new Number(3); 
// console.log(num);

function User(name, id) { // функция-конструктор
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name) {
    console.log(`Юзер ${this.name} ушел`);
};


const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);
ivan.exit();

console.log(ivan);
console.log(alex);

ivan.hello();


// This - контекст вызова

function showThis(a, b) {
    console.log(this); //this ссылается на глобальный объект window либо undefined при 'use strict'
    function sum() {
        console.log(this);
        // return this.a + this.b;
        return a + b;
    }
    console.log(sum()); //undefined
}

showThis(4, 5); // 9

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); //сам объект
        console.log(this.a + this.b); // Контекст у методов объекта - сам объект 
        function shout() {
            console.log(this); // undefined, контекст относится к функции
        }
        shout();
    }
};
obj.sum();


// 3) this в конструкторах и классах - этой новый экземпляр объекта
function NewUser(name, id) { // в функции конструктора объектов контекст относится к объекту
    this.name = name;
    this.id = id;
    this.human = true;
}
let kostya = new NewUser('Kostya', 26);
console.log(kostya);

// 4) Ручная привязка this: call, apply, this
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Babka'); // передаем контекст в функцию
sayName.apply(user, ['Batman']);
// ===
// const abuser = {
//     name: 'Keka',
//     say: function() {
//         console.log(this);
//         console.log(this.name);
//     }
// };

// abuser.say();

function count(num) {
    return this*num;
}

const double = count.bind(2); // забиндили значение к контексту - 2

console.log(double(3)); //this * 3 = 6


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // выведет сам элемент button, как объект
    // this.style.backgroundColor = 'red';
});

// function changeStyle(a, b) {  // НЕ РАБОТАЕТ :(
//     this.style.backgroundColor = a;
//     this.style.borderColor = b;
// }

// btn.addEventListener('click', function() {
//     changeStyle('red','purple'); // функция внутри объекта, поэтому не работает
// });

const objУ = {
    num: 5,
    sayNumber: function() {
        const say = () => { // у стрелочной фукнцкии нет своего контекста вызова this, она берет контекст у своего родителя (сэйнамбер)
            console.log(this); // выведет объект
        };
        say();
    }
};

objУ.sayNumber();


btn.addEventListener('click', function() {
    // changeStyle('red','purple'); //
    const changeStyle = (a, b) => {      
        return [this.style.backgroundColor = a, this.style.borderColor = b];
    };
    changeStyle('red','green');
});

const trible = a => a * 3;
console.log(trible(4));

