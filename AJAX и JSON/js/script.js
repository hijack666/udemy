'use strict';

// XMLhttpRequest - устаревший способ ajax, при помощи объекта, но еще используется
const inputRup = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

// inputRup.addEventListener('input',)
// inputRup.addEventListener('change',) //событие change срабатывает когда на поле кликают или вне поля, а инпут срабатывает, каждый раз когда меняется значение
inputRup.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass); //собирает настройки
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // headers
    request.send(); // те данные которые уходят на сервер, в ГЕТ - body нету

    // свойства:
    // status // ошибки например 404
    // statusText;
    // response
    // readyState - текущее состояние

    request.addEventListener('readystatechange', () => { // изменение текущего состояния 
        if ( request.readyState === 4  && request.status === 200 ) { // состояние под номером 4 - DONE - все данные пришли
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRup.value / data.current.usd).toFixed(2); //до двух знаков после точки
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // ===
    request.addEventListener('load', () => { // текущее состояние когда все данные переданы
        if ( request.status === 200 ) { 
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRup.value / data.current.usd).toFixed(2); //до двух знаков после точки
        } else {
            inputUsd.value = "Что-то пошло не так";
        }

    });

});