"use strinct";

// TO STRING
// 1)
console.log(typeof(String(null))); //string
console.log(typeof(String(4))); //string

// 2)
console.log(typeof(5 + '')); // конкатенация

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px'; // превращение в строку

// TO number
//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt("15px", 10)));
console.log(parseInt("15px", 10)); //15

let answer = +prompt("Hello", ""); // ввод числа используя унарный плюс

//To boolean 

// 1)
0, '', null, undefined, NaN; //-false, все остальное - ТРУ
let switcher = null;

if (switcher) {
    console.log('Working...'); // условие не выполнится
}

switcher = 1;

if (switcher) {
    console.log('Working...'); // Условие выполнится
}
// 2)
console.log(typeof(Boolean('4')));
// 3)
console.log(typeof(!!"4444"));

