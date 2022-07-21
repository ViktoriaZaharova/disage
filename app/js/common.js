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

$('.counter-slide__default1').text("/ " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp1").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});


$('.technology-slider').slick({
    slidesToShow: 4,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.technology-images-slider',
});

$('.technology-images-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    // asNavFor: '.technology-slider',
});

//auto counter total//
let homeSlider1 = $('.technology-slider');

$('.counter-slide__default2').text("/ " + homeSlider1.slick("getSlick").slideCount);

homeSlider1.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp2").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});



$('.projects-slider1').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.projects-slider__nav1',
    appendDots: '.projects-slider__nav1',
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

$('.projects-slider2').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.projects-slider__nav2',
    appendDots: '.projects-slider__nav2',
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

$('.projects-slider3').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.projects-slider__nav3',
    appendDots: '.projects-slider__nav3',
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

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').slick('setPosition');
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

$('.all-projects-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendDots: '.all-projects-slider__nav',
    appendArrows: '.all-projects-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    variableWidth: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false
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
$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        $({blurRadius: 5}).animate(
            {blurRadius: 0},
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


// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});

$('.submenu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

