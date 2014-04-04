$('#food').hide();
$('.about-me').hide();
$('.about-me-mob').hide();

$(document).ready(function(e) {
    $(".flex").lightGallery();

    $(window).scroll(function() {
    	var scroll = $(window).scrollTop();
    	if(scroll > 1) {
    		$('.gal-title').addClass('shadow')
    	} else {
    		$('.gal-title').removeClass('shadow')
    	}
    });

	$('.icon-menu').on('click', function(e) {
		e.preventDefault();
		$('#sidebar').toggleClass('nav-show');
	});
	$('.food-link').on('click', function() {
		$('#sidebar').removeClass('nav-show');
		$('#interiors').fadeOut('fast', function() {
			$('#food').fadeIn();
		});
	});
	$('.interior-link').on('click', function() {
		$('#sidebar').removeClass('nav-show');
		$('#food').fadeOut('fast', function() {
			$('#interiors').fadeIn();
		});
	});
	$('#topbar').on('click', '.about-link', function(e) {
		e.preventDefault();
		$('.about-me').slideToggle('slow');
		if ($('.about-me > *').is(':visible')) {
			$('.about-me > *').fadeOut('fast');
		} else{
			$('.about-me > *').delay(600).fadeIn('slow');
		};
	});
	$('#sidebar').on('click', '.about-link', function(e) {
		e.preventDefault();
		$('#sidebar').removeClass('nav-show');
		$('.about-me-mob').slideDown('2000', function() {
			$('.about-me-mob > *').fadeIn();
		});
	});
	$('.icon-close').on('click', function(e) {
		e.preventDefault();
		$('.about-me-mob > *').fadeOut('fast', function() {
			$('.about-me-mob').slideUp('slow');
		});
	});
});