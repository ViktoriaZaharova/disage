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

$('.counter-slide__default1').text("/" + homeSlider.slick("getSlick").slideCount);

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
    adaptiveHeight: true,
    asNavFor: '.technology-images-slider',
});

$('.technology-images-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
});

//auto counter total//
let homeSlider1 = $('.technology-slider');

$('.counter-slide__default2').text("/" + homeSlider1.slick("getSlick").slideCount);

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

$('.personal-cinema-images1').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider1').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images1',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider2 = $('.personal-cinema-slider1');

$('.counter-slide__default3').text("/" + homeSlider2.slick("getSlick").slideCount);

homeSlider2.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp3").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider1').slick({
    slidesToShow: 4,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images1, .personal-cinema-slider1',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});


$('.personal-cinema-images2').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider2').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images2',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider3 = $('.personal-cinema-slider2');

$('.counter-slide__default4').text("/" + homeSlider3.slick("getSlick").slideCount);

homeSlider3.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp4").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider2').slick({
    slidesToShow: 4,
    vertical: true,
    arrows: false,
    // infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images2, .personal-cinema-slider2',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
            }
        }
    ]
});


$('.personal-cinema-images3').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider3').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images3',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider4 = $('.personal-cinema-slider3');

$('.counter-slide__default5').text("/" + homeSlider4.slick("getSlick").slideCount);

homeSlider4.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp5").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider3').slick({
    slidesToShow: 4,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images3, .personal-cinema-slider3',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
            }
        }
    ]
});


$('.personal-cinema-images4').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider4').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images4',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider5 = $('.personal-cinema-slider4');

$('.counter-slide__default6').text("/" + homeSlider5.slick("getSlick").slideCount);

homeSlider5.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp6").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider4').slick({
    slidesToShow: 5,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images4, .personal-cinema-slider4',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});

//
$('.personal-cinema-images5').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider5').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images5',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider6 = $('.personal-cinema-slider5');

$('.counter-slide__default7').text("/" + homeSlider6.slick("getSlick").slideCount);

homeSlider6.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp7").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider5').slick({
    slidesToShow: 5,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images5, .personal-cinema-slider5',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});

//
$('.personal-cinema-images6').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider6').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images6',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider7 = $('.personal-cinema-slider6');

$('.counter-slide__default8').text("/" + homeSlider7.slick("getSlick").slideCount);

homeSlider7.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp8").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider6').slick({
    slidesToShow: 5,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images6, .personal-cinema-slider6',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});


//
$('.personal-cinema-images7').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider7').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images7',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider8 = $('.personal-cinema-slider7');

$('.counter-slide__default9').text("/" + homeSlider8.slick("getSlick").slideCount);

homeSlider8.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp9").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider7').slick({
    slidesToShow: 5,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images7, .personal-cinema-slider7',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});


//
$('.personal-cinema-images8').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider8').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images8',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider9 = $('.personal-cinema-slider8');

$('.counter-slide__default10').text("/" + homeSlider9.slick("getSlick").slideCount);

homeSlider9.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp10").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider8').slick({
    slidesToShow: 5,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images8, .personal-cinema-slider8',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});


//
$('.personal-cinema-images9').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider9').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images9',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider10 = $('.personal-cinema-slider9');

$('.counter-slide__default11').text("/" + homeSlider10.slick("getSlick").slideCount);

homeSlider10.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp11").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider9').slick({
    slidesToShow: 6,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images9, .personal-cinema-slider9',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});


//
$('.personal-cinema-images10').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider10').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images10',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider11 = $('.personal-cinema-slider10');

$('.counter-slide__default12').text("/" + homeSlider11.slick("getSlick").slideCount);

homeSlider11.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp12").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider10').slick({
    slidesToShow: 6,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images10, .personal-cinema-slider10',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});


//
$('.personal-cinema-images11').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider11').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images11',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider12 = $('.personal-cinema-slider11');

$('.counter-slide__default13').text("/" + homeSlider12.slick("getSlick").slideCount);

homeSlider12.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp13").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider11').slick({
    slidesToShow: 6,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images11, .personal-cinema-slider11',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});


//
$('.personal-cinema-images12').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    swipe: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true
            }
        }
    ]
});

$('.personal-cinema-slider12').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    asNavFor: '.personal-cinema-images12',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
    ]
});

//auto counter total//
let homeSlider13 = $('.personal-cinema-slider12');

$('.counter-slide__default14').text("/" + homeSlider13.slick("getSlick").slideCount);

homeSlider13.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp14").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.personal-cinema-navigation-slider12').slick({
    slidesToShow: 6,
    vertical: true,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.personal-cinema-images12, .personal-cinema-slider12',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: false,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                vertical: false,
                infinite: true,
            }
        }
    ]
});

document.querySelectorAll('.homescript-slider-link').forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        if ((e.target.classList.contains('homescript-slider-go-back') || e.target.classList && e.target.closest('.homescript-slider-go-back')) && document.querySelector('.homescript-image-main--hide') && e.target.closest('.homescript-slider-block--active')) {
            document.querySelector('.homescript-image-main').classList.remove('homescript-image-main--hide')
            document.querySelector('.homescript-image--active').classList.remove('homescript-image--active')
            document.querySelector('.homescript-slider-block--active').classList.remove('homescript-slider-block--active')
            document.querySelector('.homescript-slider').classList.remove('homescript-slider--active')
        } else {
            document.querySelector('.homescript-image-main').classList.add('homescript-image-main--hide')
            var activeBlock = document.querySelector('.homescript-slider-block--active');
            if (activeBlock) {
                activeBlock.classList.remove('homescript-slider-block--active')
            }
            var activeImage = document.querySelector('.homescript-image--active');
            document.querySelector('.homescript-slider').classList.add('homescript-slider--active')
            if (activeImage) {
                activeImage.classList.remove('homescript-image--active')
            }
            document.querySelectorAll('.homescript-slider-block')[index].classList.add('homescript-slider-block--active')
            document.querySelectorAll('.homescript-image')[index].classList.add('homescript-image--active')
        }
    })
});

//
// $(document).ready(function () {
//     $(".js-tab-trigger").click(function () {
//         var id = $(this).attr('data-tab'),
//             content = $('.js-tab-content[data-tab="' + id + '"]');
//
//         $('.js-tab-trigger.active').removeClass('active'); // 1
//         $(this).addClass('active'); // 2
//
//         $('.js-tab-content.active').removeClass('active'); // 3
//         content.addClass('active'); // 4
//     });
//
//
// });

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



