$(function() {
	if($(this).scrollTop() > 100) {
		$('#global-nav').addClass('global-nav--s');
	}

	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
      $('#global-nav').addClass('global-nav--s');
      $('#global-nav').addClass('scroll-animate');
      $('#global-nav-logo').fadeOut(10);
      $('#nav-like-modal').addClass('nav-like__wrap--s');
      $('#nav-like-modal').addClass('scroll-animate');
		} else {
      $('#global-nav').removeClass('global-nav--s');
      $('#nav-like-modal').removeClass('nav-like__wrap--s');
      $('#global-nav-logo').fadeIn(10);
		}
    });

    $('#global-nav-heart').on('click', function() {
      $('.nav-like').show();
    });
    $('#nav-like-mask').on('click', function(e) {
      if($(e.target).parents('.nav-like__wrap').length == 0) {
        $('#nav-like').hide();
      }
    });
});