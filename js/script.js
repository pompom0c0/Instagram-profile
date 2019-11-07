$(function() {
	$('#nav-toggle').on('click', function() {
		$('.header ul').toggleClass('slow');
	});

	$('.photo__img').hover(
		function() {
			$(this).find('.photo__mask').show();
		},
		function() {
			$(this).find('.photo__mask').hide();
		}
	);
});