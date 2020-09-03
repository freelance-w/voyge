$(".home__slider").slick({  //images slider
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    infinite: false,
    prevArrow:
        '<button type = "button" class = "slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow:
        '<button type = "button" class = "slick-next"><i class="fas fa-arrow-right"></i></button>',
});

$('.comment__block').slick({  //comment slider
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 710,
        settings: {
            centerMode: true,
            centerPadding: '',
            slidesToShow: 2,
            arrows: false,
            autoplay: false,
        }
      },
      {
        breakpoint: 325,
        settings: {
            centerMode: true,
            centerPadding: '',
            slidesToShow: 1,
            arrows: false,
            autoplay: false,
        }
      }
    ]
  });

const headerScroll = () => {                //header scroll
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 10) {
        $(".header").css("top", "0");
    } else {
        $(".header").css("top", "40px");
    }
};

$(window).on("scroll", headerScroll);


const menuItem = document.querySelectorAll('.header__menu-item');  //mobile menu
$('#header__burger').on('click', function(){
    $('#header__menu').toggleClass('header__menu-active');
    $(this).toggleClass('header__burger-close');

    if($(this).hasClass('header__burger-close')){
        $(menuItem).each(function(index, link){
            $(link).css('animation', `menu__animate .3s ease-out ${index / 9 + 0.05}s forwards` )
        })
    }else{
        $(menuItem).each(function(index, link){
            $(link).css('animation', `` )
        })
    }
})



$('#footer__scroll').on('click', function(){  //scrool footer
    $(window).scrollTop() = 0;
})