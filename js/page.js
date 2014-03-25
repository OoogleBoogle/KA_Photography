$('#food').hide();

$(document).ready(function() {
	$('.icon-menu').on('click', function(e) {
		e.preventDefault();
		$('#sidebar').animate({'left': 0});
	});
	$('.food-link').on('click', function() {
		$('#sidebar').animate({left: "-=78%"});
		$('#interiors').delay(300).fadeOut();
		$('#food').delay(300).fadeIn();
	});
	$('.interior-link').on('click', function() {
		$('#sidebar').animate({left: "-=78%"});
		$('#food').delay(300).fadeOut();
		$('#interiors').delay(300).fadeIn();
	});
	$('#topbar').on('click', 'a', function() {
		$('a').removeClass('selected');
		$(this).addClass('selected');
	})
	$('*').on("swipeleft", function() {
		$('#sidebar').animate({'left': 0});
	});
});