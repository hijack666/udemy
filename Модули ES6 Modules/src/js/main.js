// Методы экспортирования
// 1 метод
export let one = 1;

// 2 метод
let two = 2;
export {two};

// 3 метод
export function sayHi() {
    console.log('Hello');
}

// 4 метод
export default function sayBye() {
    console.log('Bye');
}