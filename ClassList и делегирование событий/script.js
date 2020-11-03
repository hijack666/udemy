const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList);
// console.log(btns[0].classList.item(1));
console.log(btns[0].classList.add('red', 'moreclass'));
// console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

// console.log(btns[1].classList.add('red', 'moreclass'));

if (btns[1].classList.contains('red')) {
    console.log('red');
}

btns[0].addEventListener('click', ()=> {
    if ( !btns[1].classList.contains('red') ) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

// Делегирование от блока к кнопкам
wrapper.addEventListener('click', (event)=>{
    if (event.target && event.target.tagName == 'BUTTON') { //event.target нет например у тегов br
        // console.log('hello');
    }
});

wrapper.addEventListener('click', (event)=>{
    if (event.target && event.target.matches('button.red')) { // matches ищет совпадения, и последующе созданные кнопки будут иметь событие
        console.log('red class');
    }
});

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        console.log('lalka');
    });
});

const btn = document.createElement('button'); // кнопка, которая появилась динамически, на нее событие не делегировалось
btn.classList.add('red'); // обработчик события создан до появления этой кнопки
wrapper.append(btn);