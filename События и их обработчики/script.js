const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click'); // сотрет предыдущее свойство
// };

var j=0;
btn.addEventListener('mouseenter', (e) => {
    // console.log(e);
    // console.log(e.target);
    
    // console.log('Hover');
    j++;
    if ( j % 2) {
        e.target.innerHTML = 'qq';
    } else {
        e.target.innerHTML = 'govno';
    }
    
});

let i = 0;

const deleteElement = (e) => {
    // e.target.remove();
    // e.target.style.backgroundColor = 'red';
    // console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // отменяет все события на элементе, в данном случае - переход по ссылке

    console.log(event.target);
});

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement); 
});

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'yellow';
}, {once: true} ); // третий параметр событие на один раз например 
// btn.addEventListener('click', deleteElement, {once: true});