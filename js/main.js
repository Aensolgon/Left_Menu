jQuery(function($) {
    $('.menu-btn').click(function(){
    if($('nav').hasClass('push-left')){
        $('nav').removeClass('push-left');
        $('nav').css('background','#ddd');
        $(this).addClass('menu-btn-active');
        $('.logo').css('opacity','0');
        $('nav').addClass('open');
    } else {
    $('nav').addClass('push-left');
    $(this).removeClass('menu-btn-active');
    $('.logo').css('opacity','1');
    $('nav').removeClass('open');
    $('nav').css('background','#fff');
    }
    });
});