$('.accordion-slider').accordionSlider({
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
            openedPanelSize: '70%',
        },
        1000: {
            height: 500,
            openedPanelSize: '70%',
        },
        650: {
            height: 300,
            openedPanelSize: '70%',
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
});

$('.why-trusted-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.why-trusted-images-slider',
    // draggable: false,
});

$('.why-trusted-images-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.why-trusted-slider',
    // draggable: false
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
    appendArrows: $('.projects-slider__nav'),
    appendDots: $('.projects-slider__nav'),
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});