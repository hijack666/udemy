/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const ad = document.querySelector('.promo__adv');
// ad.remove();
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(ad => {
    ad.remove();
});


// const content = document.querySelector('.promo__content');
// content.style.width = 'calc(100% - 300px)';

const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'драма';

const image = document.querySelector('.promo__bg');
image.style.backgroundImage = 'url(/img/bg.jpg)';

const arr = movieDB.movies.sort();
console.log(arr);
const list = document.querySelector('.promo__interactive-list');
// console.log(list[1]);
list.innerHTML = "";

// for (var i=0; i < arr.length; i++) {
    // list[i].innerHTML = arr[i];
    // list[i].style.display = 'list-item';
// }

arr.forEach((film, i) => {
    list.innerHTML += `<li class="promo__interactive-item"> ${i+1}) ${film}
    <div class="delete"></div>
</li>`;
});


document.querySelector('.promo__interactive-list').style.listStyle = 'decimal';
