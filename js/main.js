(function($) {

	"use strict";

	// keep hero image column full height
	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};
	fullHeight();

	// mobile menu toggle state
	$('body').on('click', '.js-fh5co-nav-toggle', function(event){
		event.preventDefault();
		if ( $('#ftco-nav').is(':visible') ) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	});

	// one-page nav: jump straight to the section (no animated scroll)
	$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
		event.preventDefault();
		var target = $($.attr(this, 'href'));
		if (target.length) {
			$('html, body').scrollTop(target.offset().top - 70);
		}
		$('#ftco-nav').collapse('hide');
	});

	// navbar style on scroll
	$(window).scroll(function(){
		var st = $(this).scrollTop(),
			navbar = $('.ftco_navbar');

		if (st > 150) {
			navbar.addClass('scrolled');
		} else {
			navbar.removeClass('scrolled sleep');
		}
		if (st > 350) {
			navbar.addClass('awake');
		} else if (navbar.hasClass('awake')) {
			navbar.removeClass('awake').addClass('sleep');
		}
	});

})(jQuery);
