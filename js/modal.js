$(function() {
	$('.photo__img').on('click', function() {
		$('.modal').show();
	});

	$('.modal').on('click', function(e) {
		if ($(e.target).parents('.modal__wrap').length == 0) {
			$(this).hide();
		}
		// console.log($(e.target));
		// console.log($(e.target).parents('.modal__wrap'));
		// console.log($(e.target).parents('.modal__wrap').length);
	});

	$('.js-change-btn').on('click', function() {
		var $displaySlide = $('.js-active');
		$displaySlide.removeClass('js-active');
		if($(this).hasClass('next')) {
			$displaySlide.next().addClass('js-active');
		} else {
			$displaySlide.prev().addClass('js-active');
		}

		var slideIndex = $('.js-slide').index($('.js-active'));
		$('.js-change-btn').show();

		if(slideIndex === 0) {
			$('.prev').hide();
		} else if(slideIndex === 2) {
			$('.next').hide();
		}

		$('.js-dot').removeClass('js-dot-color');
		$('.js-dot').eq(slideIndex).addClass('js-dot-color');
	});

	// コメント欄の高さ調節
	const commentTextarea = document.querySelector('.modal__comment--textarea');
	commentTextarea.addEventListener('input', () => {
		commentTextarea.style.height = "20px";
		commentTextarea.style.height = commentTextarea.scrollHeight + "px";
	});

	// コメントtextareaに入力されたら、投稿ボタンが押せるようになる
	$('textarea[type="text"]').on('keyup', function() {
		const $submitBtn = $('.modal__comment--submit input');
		if ($(this).val() == '') {
			$submitBtn.removeClass('active');
		} else {
			$submitBtn.addClass('active');
		}
	});

	// 改行禁止
	$('.modal__comment--textarea').on('keypress', function(enter) {
		if(enter.key == 'Enter'){
			return false;
		}
	});
	$('.modal__comment--textarea').on('blur', function() {
		var textarea = $(this);
		text = textarea.val();
		new_text = text.replace(/\n/g, '');
		if(new_text != text) {
			textarea.val(new_text);
		}
	});

	// 投稿ボタンを押したら、コメントを表示する
	$('input[type="submit"]').on('click', function() {
		const $result = $('textarea[type="text"]').val();
		const $submitBtn = $('.modal__comment--submit input');
		$('.modal__post').append('<div class="modal__post--content"><div class="modal__post--img"><img src="https://scontent-nrt1-1.cdninstagram.com/vp/f11eedafa61a52fb36380163eba3966f/5E36A314/t51.2885-19/s150x150/11875390_1640475839575400_2050288559_a.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com"></div><div class="modal__post--text"><p class="text__post"><span class="text__name">pompom0c0</span>'+$result+'</p></div></div>');
		$('textarea[type="text"]').val('');
		$submitBtn.removeClass('active');
		commentTextarea.style.height = "20px";
		return false;
	});
});