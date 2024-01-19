//(Owl Carousel)======================================================\\
$(document).ready(function(){

    $('.t-list').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
})

$(document).ready(function(){

    $('.z-list').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            700:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
})
//=====================================================================\\


//(Header)=====================================================================\\
$(document).ready(function(){
    $(window).scroll(function () {
        var logo = $('.logo')
        if ($(window).scrollTop() >= 60) {
            $(logo).attr('src','img/logo-c.png')
            $('header').css({
                backgroundColor: 'white',
                top:'0',
                boxShadow: '-7px 0px 13px 4px #00000059',
            });
            $('#offcanvas-btn i').css({
                color:'black'
            })
        } else {
            $(logo).attr('src','img/logo.png')
            $('header').css({
                backgroundColor: 'transparent',
                boxShadow: 'none',
            });
            $('#offcanvas-btn i').css({
                color:'white'
            })
        }
    });
})
//=====================================================================\\

//(Tabs)=====================================================================\\
$(document).ready(function(){
    $('.tab-links').on('click', function(){
        var tabId = $(this).data('tab'); 
        $('.tab-content').removeClass('active'); 
        $('#' + tabId + '-content').addClass('active'); 
        $('.tab-links').removeClass('active'); 
        $(this).addClass('active');
    });
});
//=====================================================================\\


//(wow.js)=====================================================================\\
$(document).ready(function(){
    new WOW().init();
})
//=====================================================================\\