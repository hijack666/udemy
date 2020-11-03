const arr = [2, 24, 13, 6, 9];

arr.pop();
arr.push(10);

console.log(arr);
console.log(arr.sort());

function compareNum(a, b) {
    return a - b;
}
console.log(arr.sort(compareNum));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// =
for (let value of arr) { 
    console.log(value);
}
// for of для работы ТОЛЬКО с массивами, есть break и continue

// arr[99] = 0; // 94 пустых ячеек
// console.log(arr.length); // 100
// console.log(arr); // 94 пустых ячеек

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри ${arr}`);
}); //сначала форИч, затем коллбэк функция

const str = prompt("", "");
const products = str.split(", ");
products.sort(); // сортирует по алфавиту
console.log(products.join('; '));