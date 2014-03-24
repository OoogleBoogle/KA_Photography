
$(document).ready(function() {
	$('.icon-menu').on('click', function() {
		$('#sidebar').fadeIn();
	});
	$('#sidebar li').on('click', function() {
		$('#sidebar').fadeOut();
	});

});