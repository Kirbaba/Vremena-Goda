$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 1000);
    });
});

jQuery(function ($) {
    $('.hamburger-slim').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('hamburger-slim--active');
    });
});

jQuery(function ($) {

    jQuery('.news-carousel').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 300,
        focusOnSelect: false,
        arrows: true,        
        slidesToShow: 1,
        slidesToScroll: 1
        
    });

    jQuery('.brands-carousel').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 300,
        focusOnSelect: false,
        arrows: true,        
        slidesToShow: 4,
        slidesToScroll: 1,
         responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

ymaps.ready(init);
        
function init() {
    var myMap = new ymaps.Map('map', {
            center: [59.914619, 30.323971],
            zoom: 12,
            controls: [],
            
        })  ,
        myPlacemark = new ymaps.Placemark([59.932955, 30.349115], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref:  '../img/marker.png',
            // Размеры метки.
            iconImageSize: [55, 81],
            iconImageOffset: [-28, -77]

            
        });
    

    
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}