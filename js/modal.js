$(function() {
	// コメント欄の高さ調節
	const commentTextarea = document.querySelector('.js-modal-comment-area');
	commentTextarea.addEventListener('input', function() {
		commentTextarea.style.height = "20px";
		commentTextarea.style.height = commentTextarea.scrollHeight + "px";
	});

	// コメントtextareaに入力されたら、投稿ボタンが押せるようになる
	$('textarea[type="text"]').on('keyup', function() {
		const $submitBtn = $('.js-modal-comment-submit input');
		if ($(this).val() == '') {
			$submitBtn.removeClass('active');
		} else {
			$submitBtn.addClass('active');
		}
	});

	// 改行禁止
	const $modal_comment_area = $('js-modal-comment-area');
	$modal_comment_area.on('keypress', function(enter) {
		if(enter.key == 'Enter') {
			return false;
		}
	});
	$modal_comment_area.on('blur', function() {
		const textarea = $(this);
		text = textarea.val();
		new_text = text.replace(/\n/g, '');
		if(new_text != text) {
			textarea.val(new_text);
		}
	});

	// 投稿ボタンを押したら、コメントを表示する
	$('input[type="submit"]').on('click', function() {
		const $result = $('textarea[type="text"]').val();
		const $submitBtn = $('.js-modal-comment-submit input');
		$('.js-modal-post-comment').append('<div class="modal__post-content"><div class="modal__post-img"><img src="https://scontent-nrt1-1.cdninstagram.com/vp/f11eedafa61a52fb36380163eba3966f/5E36A314/t51.2885-19/s150x150/11875390_1640475839575400_2050288559_a.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com"></div><div class="modal__post-text"><p><span class="modal__post-name">pompom0c0</span>'+$result+'</p></div></div>');
		$('textarea[type="text"]').val('');
		$submitBtn.removeClass('active');
		commentTextarea.style.height = "20px";
		return false;
	});

	// いいねしたらアイコンが変わる
	$('.js-modal-icon-heart').on('click', function() {
		if($(this).children('img').attr('src').indexOf('border') !== -1) {
			$(this).children('img').attr('src', 'images/icon/icon-heart-red.png');
		} else {
			$(this).children('img').attr('src', 'images/icon/icon-heart-border.png');
		}
	});

	const $modal_share = $('.js-modal-share');
	$('.js-modal-icon-share').on('click', function() {
		$modal_share.show();
	});
	$('.js-modal-share-close').on('click', function() {
		$modal_share.hide();
	});
	$('.js-modal-share-mask').on('click', function() {
		$modal_share.hide();
	});

	// リンクをコピーする
	$('.js-modal-share-link').on('click', function() {
		console.log(location.href);

		// コピーするURLをテキストで持つテキストエリアを生成
		const $textArea = $('<textarea>');
		$textArea.val(location.href);
		$('body').append($textArea);

		// テキストエリアを選択する
		$textArea[0].select();

		// 指定した範囲からコピーする
		document.execCommand('copy');
		$textArea.remove();

		$('.js-modal-share-link-copy').slideToggle(100, () => {
			setTimeout(function() {
				$('.modal-share-link-copy').slideUp();
			}, 5000);
		});
	});
});

$(window).on('load', function() {
	$('.js-photo-img').on('click', function() {
		$('.js-modal').show();
		$('body').addClass('scroll-none');
		console.log('modal');
		$('.main-carousel').flickity({
			cellAlign: 'left',
			contain: true
		});
		console.log('slider');
	});

	$('.js-modal').on('click', function(e) {
		if ($(e.target).parents('.js-modal-wrap').length === 0) {
			$(this).hide();
			$('body').removeClass('scroll-none');
			$('.flickity-slider').css('transform', 'translateX(0%)');
			$('.carousel-cell').removeClass('is-selected');
			$('.carousel-cell:first').addClass('is-selected');
			console.log('modal-close');
		}
	});
});