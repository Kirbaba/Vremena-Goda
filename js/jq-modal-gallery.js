/*
 * Created with Sublime Text 2.
 * User: song.chen
 * Date: 2015-12-14
 * Time: 16:18:13
 * Contact: song.chen@qunar.com
 */
/*
 * Created with Sublime Text 2.
 * User: song.chen
 * Date: 2015-12-14
 * Time: 10:23:53
 * Contact: song.chen@qunar.com
 */
(function( $ ) {

	var methods = {
		init : function( options ) {
			var settings = $.extend( {
				'mainContainerClass' : 'simple',
				'fullBoxClass' : 'fullBoxClass',
				'thumbnailBoxClass' : 'thumbnailBoxClass',
				'nextText' : 'next',
				'prevText' : 'prev',
				'duration' : 500,
				'loop' : true
			}, options);
			//Добавляем классы
			this.addClass(settings.mainContainerClass);
			
			this.children().addClass(settings.thumbnailBoxClass);

			var i = 0;
			this.children().children().each(function() {
				$(this).addClass('simpleSlide');
				$(this).attr('slide-count', i);
				i++;
			});

			$('.simpleSlide').addClass('simpleActive');

			this.prepend('<div class="' + settings.fullBoxClass + '"></div>');
			//
			//console.log($('.simpleGallerySlide').first().children().attr('src'));
			$('.' + settings.fullBoxClass).html($('.simpleSlide').html());

			$('.simpleSlide').on('click', methods.activateSlide(settings));
			$('.' + settings.fullBoxClass).on('click', methods.nextSlide(settings));

		},
		nextSlide : function(settings) {
			return function(){
				var next = $('.simpleActive').next();
				if(next.length > 0){
					$('.simpleSlide').each(function() {
			 			$(this).removeClass('simpleActive');
			 		});
				 	next.addClass('simpleActive');
				 	$('.' + settings.fullBoxClass).html(next.html());
				}
				else {
					if(settings.loop){
						$('.simpleSlide').each(function() {
			 				$(this).removeClass('simpleActive');
			 			});
				 		$('.simpleSlide').first().addClass('simpleActive');
						$('.' + settings.fullBoxClass).html($('.simpleSlide').html());
					}
				}
				
			}
		},
		activateSlide : function(settings) {			
			 return function(){
			 	$('.simpleSlide').each(function() {
			 		$(this).removeClass('simpleActive');
			 	});
			 	$(this).addClass('simpleActive');
			 	$('.' + settings.fullBoxClass).html($(this).html());
			 }
		},
		prev : function() {

		},
};

$.fn.simpleGallery = function(method) {

	// логика вызова метода
	if ( methods[method] ) {
		return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	} else if ( typeof method === 'object' || ! method ) {
		return methods.init.apply( this, arguments );
	} else {
		$.error( 'Метод с именем ' + method + ' не существует для jQuery.tooltip' );
	}

	};
})(jQuery);
