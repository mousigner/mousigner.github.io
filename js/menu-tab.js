$(document).ready(function() {
    var menu = $('.main-menu > li');
    var subMenu = $('.sub-menu');
    var img = $('.main-menu img');

    menu.hover(function() {
        $(this).find(subMenu).toggleClass('sub-menu-act');
    });
    menu.focusin(function() {
        $(this).siblings().find(subMenu).removeClass('sub-menu-act');
        $(this).find(subMenu).addClass('sub-menu-act');
    });
    menu.mouseover(function() {
            var src = $(this).find(img).attr('src').match(/[^\.]+/) + '_ov.gif';
            $(this).find(img).attr('src', src);
        })
        .mouseout(function() {
            var src = $(this).find(img).attr('src').replace('_ov.gif', '.gif');
            $(this).find(img).attr('src', src);
        });
    menu.focusin(function() {
            var src = $(this).find(img).attr('src').match(/[^\.]+/) + '_ov.gif';
            $(this).find(img).attr('src', src);
        })
        .focusout(function() {
            var src = $(this).find(img).attr('src').replace('_ov.gif', '.gif');
            $(this).find(img).attr('src', src);
        });
});

$(document).ready(function() {
    $ { '.board-list a' }.click(function() {
        $(this).find(subMenu).toggleClass('tabpanel-act');
    });
});