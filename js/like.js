$(function() {
	$('.nav__icon--heart').on('click', function() {
		$('.nav-like').show();
		// if($('.nav-like').is(':hidden')) {
		// 	$('.nav-like').show();
		// } else {
		// 	$('.nav-like').hide();
		// }
	});
	$('.nav-like__mask').on('click', function(e) {
		if($(e.target).parents('.nav-like__wrap').length == 0) {
			$('.nav-like').hide();
		}
	});
});