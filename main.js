$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('.navbar').addClass('transparent');
    } else {
        $('.navbar').removeClass('transparent');
    }
})