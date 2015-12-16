/*
 * Created with Sublime Text 2.
 * User: song.chen
 * Date: 2015-12-15
 * Time: 15:04:03
 * Contact: song.chen@qunar.com
 */
/*
 * Created with Sublime Text 2.
 * User: song.chen
 * Date: 2015-12-11
 * Time: 09:41:09
 * Contact: song.chen@qunar.com
 */
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
    if ($('#map').length > 0) {


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
                iconImageHref:  '../vremena-goda/img/marker.png',
                // Размеры метки.
                iconImageSize: [55, 81],
                iconImageOffset: [-28, -77]

                
            });
        

        
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
    } 

    if ($('#map_contact').length > 0) {

        var Map = new ymaps.Map('map_contact', {
                center: [59.914619, 30.324971],
                zoom: 12,
                controls: [],
                
            })  ,
            Placemark = new ymaps.Placemark([59.932955, 30.349115], {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref:  '../vremena-goda/img/marker.png',
                // Размеры метки.
                iconImageSize: [55, 81],
                iconImageOffset: [-28, -77]

                
            });
        

        
        Map.behaviors.disable('scrollZoom');
        Map.geoObjects.add(Placemark);
}
}

jQuery(document).ready(function ($) {
    $("[data-js=open]").on("click", function() {
        popupOpenClose($(".popup"));
    });

    $('#simpleGallery').simpleGallery({
        mainContainerClass:'myClass',
        loop: true
    });

  

});




$( window ).resize(function() {
    
     var height = parseInt($('.navigation').height(), 10);
     
     if (height > '82') {
        $('.slideshow').css('margin-top', height);
     }


      var doc_w = $(window).width();
      
       if (doc_w > 1000) {
        var left_to_cont = ((doc_w - 900) / 2);
         $('.contact-info--text').css('left', left_to_cont);  
         $('.onslider-logo').css('left', left_to_cont);
         $('.slideshow__item--link').each(function() {
            $(this).css('left', left_to_cont);
         });
         var arrows_position = (left_to_cont - 40);
         $('.fotorama__arr--prev').css('left', arrows_position);
         $('.fotorama__arr--next').css('right', arrows_position);
    } 


    

    if (doc_w < 1025) {        
        //var on_slide_text_h = parseInt( $('.slideshow__item--link').height(),10); 
        // var nav_marg = parseInt(($('#info__important').attr('fotorama-nav-wrap', $('.fotorama__nav-wrap').css('margin-top')), 10));
        // var arr_top = parseInt($('.fotorama__arr').css('margin-top'), 10) - on_slide_text_h;
        // console.log(arr_top);
        // var actual__slide_h = parseInt( $('#info__important').attr('fotorama-slide__height'), 10);
        // $('.fotorama__wrap').css('height', actual__slide_h + on_slide_text_h);
        // console.log("Высота фоторамы " + actual__slide_h);
        // $('.fotorama__stage').css('height', actual__slide_h + on_slide_text_h);
        // $('.fotorama__nav-wrap').css('margin-top', nav_marg - on_slide_text_h);
        // $('.fotorama__arr').css('margin-top', arr_top);

        var fotorama_height = doc_w * 0.428;    
        
        
        var on_slide_text_h = parseInt( $('.slideshow__item--link').height(),10); 
        var $fotoramaDiv = $('#fotorama__top').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        
        

        if (doc_w < 415) {
            var fotorama_height = doc_w * 1.2; 
            fotorama.resize({
                height: fotorama_height + on_slide_text_h
            });
        } else {
            fotorama.resize({
                height: fotorama_height + on_slide_text_h
            });
        }
         
    }   

});

$(window).scroll(function() {
    if ($(".navigation").offset().top > 245) {
        if ($('.navbar-brand').length == 1) {
            $(".navbar-brand").slideDown(); 
        }                
    } 
    else {
         $(".navbar-brand").slideUp(); 
    }

});

$(document).ready(function () {
    window.addEventListener("orientationchange", function() {
        // Выводим числовое значение ориентации
        
    }, false);
    var doc_w = $(window).width();
    if (doc_w > 1000) {
        var left_to_cont = ((doc_w - 900) / 2);
         $('.contact-info--text').css('left', left_to_cont);  
         $('.onslider-logo').css('left', left_to_cont);
         $('.slideshow__item--link').each(function() {
            $(this).css('left', left_to_cont);
         });
         var arrows_position = (left_to_cont - 40);
         $('.fotorama__arr--prev').css('left', arrows_position);
         $('.fotorama__arr--next').css('right', arrows_position);
    } 
    if (doc_w < 1025) {        
        // var on_slide_text_h = parseInt($('.slideshow__item--link').height(), 10) + 30; 
        // $('#info__important').attr('text-slide__height', on_slide_text_h);
        // $('#info__important').attr('fotorama-slide__height', $('.fotorama__wrap').height());
        // //$('#info__important').attr('fotorama-nav-wrap', $('.fotorama__nav-wrap').css('margin-top');
        // var nav_marg = parseInt($('#info__important').attr('fotorama-nav-wrap', $('.fotorama__nav-wrap').css('margin-top'), 10));
        // var arr_top = parseInt($('.fotorama__arr').css('margin-top'), 10) - on_slide_text_h;
        // $('.fotorama__wrap').css('height', ($('.fotorama__wrap').height() + on_slide_text_h));
        // $('.fotorama__stage').css('height', ($('.fotorama__stage').height() + on_slide_text_h));
        // $('.fotorama__nav-wrap').css('margin-top', (nav_marg - on_slide_text_h));
        // $('.fotorama__arr').css('margin-top', arr_top);       

        var fotorama_height = doc_w * 0.428;    
        
        //console.log( fotorama_height);
        var on_slide_text_h = parseInt( $('.slideshow__item--link').height(),10); 
        var $fotoramaDiv = $('#fotorama__top').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.resize({
            height: fotorama_height + on_slide_text_h
        });
        
       // $('.fotorama__img')css('height', fotorama_height - on_slide_text_h);
        if (doc_w < 415) {
            var fotorama_height = doc_w * 1.2; 
            fotorama.resize({
                height: fotorama_height + on_slide_text_h
            });
        } else {
            fotorama.resize({
                height: fotorama_height + on_slide_text_h
            });
        }  
    }   

    

    if (doc_w < 737) {
        
        $(window).scroll(function() {
            if ($(".navigation--contacts").offset().top > 245) {
                 $(".navigation--contacts").slideUp();       
            } 
            else {
                 $(".navigation--contacts").slideDown(); 
            }
        });

    }
    
});
