$('#accordion-slider').accordionSlider({
    width: '100%',
    height: 727,
    responsiveMode: 'auto',
    visiblePanels: 3,
    startPanel: 0,
    openedPanelSize: '65%',
    closePanelsOnMouseOut: false,
    shadow: false,
    panelOverlap: false,
    autoplay: false,
    mouseWheel: false,
    breakpoints: {
        1200: {
            height: 600,
            openedPanelSize: '60%',
        },
        992: {
            height: 500,
            openedPanelSize: '55%',
        },
        768: {
            height: 300,
            openedPanelSize: '55%',
        },
        576: {
            height: 300,
            openedPanelSize: '65%',
        }
    }
});


$('.btn-burger').on('click', function () {
    $('.mobile-menu').css('right', '0');
});

$('.mobile-menu__close').on('click', function () {
    $('.mobile-menu').css('right', '-100%');
});

$('.why-trusted-navigation-slider').slick({
    slidesToShow: 6,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.why-trusted-slider, .why-trusted-images-slider',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.why-trusted-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.why-trusted-images-slider',
});

$('.why-trusted-images-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.why-trusted-slider',
});

//auto counter total//
let homeSlider = $('.why-trusted-slider');

$('.counter-slide__default').text("/ " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});


$('.projects-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.projects-slider__nav',
    appendDots: '.projects-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    appendDots: '.reviews-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.certificates-slider').slick({
    slidesToShow: 4,
    dots: true,
    appendDots: '.certificates-slider__nav',
    appendArrows: '.certificates-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('[name="phone"]').mask('+7 (999) 99-99-99');

// animate number
var target = $('.benefits__inner');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
        $({ blurRadius: 5 }).animate(
            { blurRadius: 0 },
            {
                duration: 3500,
                easing: "swing",
            }
        );
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
            " "
        );
        $(".benefits__number").each(function () {
            var tcount = $(this).data("count");
            $(this).animateNumber(
                {
                    number: tcount,
                    easing: "easeInQuad",
                    numberStep: comma_separator_number_step
                },
                3000
            );
        });
    }
});