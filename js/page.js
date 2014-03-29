$('#food').hide();

$(document).ready(function(e) {
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
	$('#topbar').on('click', 'a', function() {
		$('a').removeClass('selected');
		$(this).addClass('selected');
	})
});