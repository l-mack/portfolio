// name space
const myPortfolio = {};

const message = "web developer";

setInterval(function(){
    $('h2').html("");

    $.each(message.split(''), function(i, letter){

        setTimeout(function(){

            $('h2').html($('h2').html() + letter);
        }, 200*i);
    });
}, 3000);

// init method
myPortfolio.init = function(){

    // event listenters
    const nav = $('.clearNav');
    $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        const position = $(this).scrollTop();

        if (scroll >= 100){
            nav.removeClass('clearNav').addClass('whiteNav');
        }else {
            nav.removeClass('whiteNav').addClass('clearNav');
        }

        $('.section').each(function(){
            const target = $(this).offset().top;
            const id = $(this).attr('id')

            if (position >= target){
                $('#nav > ul > li > a').attr('href', id).addClass('active');
            }
        })
    })

    setInterval();

}

// doc ready
$(function(){
    myPortfolio.init();

})