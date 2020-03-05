$(function() {
	const windowHeight = $(window).height();
	$('.js-loader').height(windowHeight).addClass('is-block');
});

$(window).on('load', function() {
	$(window).scrollTop(0);
	$('.js-loader').fadeOut(1200);
	$('.js-loader-img').delay(600).fadeOut(300);
	$('.main').delay(600).fadeIn();
});