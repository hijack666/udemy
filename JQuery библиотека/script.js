import $ from 'jquery';

const btn = $('#btn');

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function(){
        $('.image:even').fadeToggle(2000);
    });

    $('.list-item:eq(4)').on('click', function(){
        $('.image:odd').animate({ height: 'toggle', width: 'toggle' }, 2000);
    });

});

console.log(btn);