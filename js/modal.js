$(function() {
	$('.photo__img').on('click', function() {
		$('#modal').show();
		$('body').addClass('scroll-none');
	});

	$('#modal').on('click', function(e) {
		if ($(e.target).parents('#modal-wrap').length == 0) {
			$(this).hide();
			$('body').removeClass('scroll-none');
		}
		// console.log($(e.target));
		// console.log($(e.target).parents('.modal__wrap'));
		// console.log($(e.target).parents('.modal__wrap').length);
	});

	$('.js-change-btn').on('click', function() {
		var $displaySlide = $('.js-slide-image').filter('.active');
		$displaySlide.removeClass('active');
		if($(this).hasClass('next')) {
			$displaySlide.next().addClass('active');
		} else {
			$displaySlide.prev().addClass('active');
		}

		var slideIndex = $('.js-slide-image').index($('.active'));
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
	const commentTextarea = document.querySelector('#modal-comment-area');
	commentTextarea.addEventListener('input', () => {
		commentTextarea.style.height = "20px";
		commentTextarea.style.height = commentTextarea.scrollHeight + "px";
	});

	// コメントtextareaに入力されたら、投稿ボタンが押せるようになる
	$('textarea[type="text"]').on('keyup', function() {
		const $submitBtn = $('#modal-comment-submit input');
		if ($(this).val() == '') {
			$submitBtn.removeClass('active');
		} else {
			$submitBtn.addClass('active');
		}
	});

	// 改行禁止
	$('#modal-comment-area').on('keypress', function(enter) {
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
		const $submitBtn = $('#modal-comment-submit input');
		$('#modal-post-comment').append('<div class="modal__post-content"><div class="modal__post-img"><img src="https://scontent-nrt1-1.cdninstagram.com/vp/f11eedafa61a52fb36380163eba3966f/5E36A314/t51.2885-19/s150x150/11875390_1640475839575400_2050288559_a.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com"></div><div class="modal__post-text"><p><span class="modal__post-name">pompom0c0</span>'+$result+'</p></div></div>');
		$('textarea[type="text"]').val('');
		$submitBtn.removeClass('active');
		commentTextarea.style.height = "20px";
		return false;
	});

	// いいねしたらアイコンが変わる
	$('#modal-icon-heart').on('click', function() {
		if($(this).children('img').attr('src').indexOf('border') !== -1) {
			$(this).children('img').attr('src', 'images/icon/icon-heart-red.png');
		} else {
			$(this).children('img').attr('src', 'images/icon/icon-heart-border.png');
		}
	});

	$('#modal-icon-share').on('click', function() {
		$('#modal-share').show();
	});
	$('#modal-share-close').on('click', function() {
		$('#modal-share').hide();
	});
	$('#modal-share-mask').on('click', function() {
		$('#modal-share').hide();
	});

	// リンクをコピーする
	$('#modal-share-link').on('click', function() {
		console.log(location.href);

		// コピーするURLをテキストで持つテキストエリアを生成
		var $textArea = $('<textarea>');
		$textArea.val(location.href);
		$('body').append($textArea);

		// テキストエリアを選択する
		$textArea[0].select();

		// 指定した範囲からコピーする
		document.execCommand('copy');
		$textArea.remove();
	});
});