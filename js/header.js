$(function() {
  const $global_nav = $('.js-global-nav');
  const $global_nav_logo = $('.js-global-nav-logo');
  const $nav_like = $('.js-nav-like');
  const $nav_like_modal = $('.js-nav-like-modal');

	if($(window).scrollTop() > 100) {
    $global_nav.addClass('global-nav--s');
    $global_nav_logo.fadeOut(0);
	}

	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
      $global_nav.addClass('global-nav--s scroll-animate');
      $global_nav_logo.fadeOut(80);
      $nav_like_modal.addClass('nav-like__wrap--s scroll-animate');
		} else {
      $global_nav.removeClass('global-nav--s');
      $nav_like_modal.removeClass('nav-like__wrap--s');
      $global_nav_logo.fadeIn(80);
		}
  });

  $('.js-global-nav-heart').on('click', function() {
    $nav_like.show();
  });

  $('.js-nav-like-mask').on('click', function(e) {
    if($(e.target).parents('.js-nav-like-modal').length === 0) {
      $nav_like.hide();
    }
  });

  if($('.js-global-nav-input').focus()) {
    $('.global-nav__search-icon').show();
  }
});