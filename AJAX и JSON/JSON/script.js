'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone)); //такой формат данных мы можем отправить на сервер

console.log(JSON.parse(JSON.stringify(persone))); // получили снова объект

const clone = JSON.parse(JSON.stringify(persone)); // получили *глубокий* клон, теперь это два разных объекта

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
