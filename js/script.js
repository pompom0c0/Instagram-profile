$(function() {
	$('.js-photo-hover').hover(
		function() {
			$(this).find('.photo__mask').show();
		},
		function() {
			$(this).find('.photo__mask').hide();
		}
	);
});