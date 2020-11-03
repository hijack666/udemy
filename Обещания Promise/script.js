'use strict';

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    // setTimeout(() =>{
    //     product.status = 'order';
    //     console.log(product);
    // }, 2000);

    const req2 = new Promise((resolve, reject) => {
        setTimeout(() =>{
            product.status = 'order';
            // console.log(product);
            resolve(product);
        }, 2000);
    });

    req2.then(data => {
        console.log(data)
    });
});

