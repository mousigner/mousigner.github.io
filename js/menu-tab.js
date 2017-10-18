$(document).ready(function() {
    var menu = $('.main-menu > li');
    var item = $('.main-menu span');
    var subMenu = $('.sub-menu');
    var img = $('.main-menu img');

    menu.hover(function() {
        $(this).find(subMenu).toggleClass('sub-menu-act');
    });
    item.focus(function() {
        $(this).siblings(subMenu).toggleClass('sub-menu-act');
    });
});