jQuery(function($) {
    $('.menu-btn').click(function(){
    if($('nav').hasClass('push-left')){
        $('nav').removeClass('push-left');
        $(this).addClass('menu-btn-active');
    } else {
    $('nav').addClass('push-left');
    $(this).removeClass('menu-btn-active');
    }
    });
});