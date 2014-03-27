$('#food').hide();

$(document).ready(function(e) {

	$('.icon-menu').on('click', function(e) {
		e.preventDefault();
		$('#sidebar').toggleClass('nav-show');
	});
	$('.food-link').on('click', function() {
		$('#sidebar').removeClass('nav-show');
		$('#interiors').delay(300).fadeOut();
		$('#food').delay(300).fadeIn();
	});
	$('.interior-link').on('click', function() {
		$('#sidebar').removeClass('nav-show');
		$('#food').delay(300).fadeOut();
		$('#interiors').delay(300).fadeIn();
	});
	$('#topbar').on('click', 'a', function() {
		$('a').removeClass('selected');
		$(this).addClass('selected');
	});

});