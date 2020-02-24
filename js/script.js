$(function() {
	var $photo_mask = $('.js-photo-mask')
	$('.js-photo-hover').hover(
		function() {
			$(this).find($photo_mask).show();
		},
		function() {
			$(this).find($photo_mask).hide();
		}
	);
});