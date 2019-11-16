$(function() {
	if($(this).scrollTop() > 100) {
		$('#global-nav').addClass('global-nav--s');
	}

	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
                  $('#global-nav').addClass('global-nav--s');
                  $('#global-nav').addClass('scroll-animate');
                  $('#global-nav-logo').fadeOut(30);
                  $('#nav-like-modal').addClass('nav-like__wrap--s');
                  $('#nav-like-modal').addClass('scroll-animate');
		} else {
                  $('#global-nav').removeClass('global-nav--s');
                  $('#nav-like-modal').removeClass('nav-like__wrap--s');
                  $('#global-nav-logo').fadeIn(30);
		}
    });
});