'use strict';


// Код заворачиваем в такие конструкции
try {
    console.log('Normal');
    console.log(puk);
} catch(error) {
    // console.log('error');
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack); //Надо смотреть в консоли html
} finally {  // Завершение операций при любом развитии событий
    
}

console.log('Program is working');
