$(function() {
	if($(this).scrollTop() > 100) {
		$('header').addClass('header--s');
	}

	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
            $('header').addClass('header--s');
            $('header').addClass('scroll--animate');
            $('.header__logo--insta').hide();
            $('.nav-like__wrap').addClass('nav-like__wrap--s');
            $('.nav-like__wrap').addClass('scroll--animate');
            
            
		} else {
            $('header').removeClass('header--s');
            $('.nav-like__wrap').removeClass('nav-like__wrap--s');
            $('.header__logo--insta').show();
		}
    });
});