// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'hello');

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', ()=> {
    // const timerId = setTimeout(logger, 2000);
    // timerId = setInterval(logger, 500); // setinterval - если функция сложная и долго выполняется, то скрипт не будет ждать 500 после выполнения фунцкии
// });

// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId); // очищение интервала

function logger () {
    
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('zhopa');
    i++;
}

// Рекурсия
let id = setTimeout(function log(){ 
    console.log('hello');
    id = setTimeout(log, 500);  // эквивалетно сетинтервал (почти), второй раз функция вызывается с задержкой 500 ТОЛЬКО после выполнения самой себя
}, 500);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const time = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos ++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);