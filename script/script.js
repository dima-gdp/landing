$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:2,
		centerMode:false,
		variableWidth:true,
		prevArrow: $('.third-section__prev-btn'),
		nextArrow: $('.third-section__next-btn'),
		responsive: [
		{
			breakpoint: 1921,
			settings: {
				dots:false,
				arrows:true,
			}
		},{
			breakpoint: 1367,
			settings: {
				arrows:true,
				dots:true,
				slidesToShow:2,
				variableWidth:false,
				centerMode:false,
			}
			
		},
		{
			breakpoint: 1025,
			settings: {
				centerMode:false,
				dots:true,
				slidesToShow:2,
				arrows:false,
				variableWidth:false,
			}
		},
		{
			breakpoint: 769,
			settings: {
				centerMode:false,
				dots:true,
				slidesToShow:1,
				arrows:false,
				variableWidth:false,
			}
		}
		],
		
	});
	
	$('.nav__link').on('click', function(event){
		event.preventDefault();
		let href = $(this).attr('href');
		let offset = $(href).offset().top;
		$('body,html').animate({
			scrollTop: offset,
		}, 700);
		
		
	});

	$('.header__menu-button')
		.click(function(){
			if ($('.header__nav').css('display') == 'none' && $(window).width() <= '1024'){
				$('.header__nav').slideToggle("600")
			}
			// else {
			// 	$('.header__nav').fadeOut()
			// };
			
	});
	
	$(window).resize(function(){
			if ($(window).width() > '1024'){
				$('.header__nav').css('display', 'block')
			}
			else {
				$('.header__nav').css('display', 'none')
			}
	});
	

	$(document).mouseup(function(event){
		let menu = $('.header__nav');
			if (!menu.is(event.target) && $(window).width() <= '1024'){

			menu.fadeOut("600")
			}
			else {
				
			}
			
	});

	$('.form__close-btn').click(function(){
		$('.popup-container').fadeOut(500, disableScroll);
		return false;

	})

	$('.symbol').removeClass('anim');
	
	function animateSection(){
		let a = $(document).scrollTop() + $(window).height(),
			b = $('.symbol_sect-4').offset().top;
		if (a >= b) {
			$('.symbol_sect-4').removeClass('anim_sect-4');
		}
	};

	function disableScroll(){
		$('body').toggleClass('fixed');
	};

	$('.call-btn, .btn').click(function(){
		$('.popup-container').fadeIn(500, disableScroll)
	});

	$('.popup-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(500, disableScroll);
		}
	});

	
	$(window).on('scroll', animateSection);
	
	$('.form__tel').inputmask({"mask": "+7(999)-999-99-99"});

	$('form').each(function () {
		$(this).validate({
			errorPlacement(error, element) {
				return true;
			},
			focusInvalid: false,
			rules: {
				phone: {
					required: true,
				
				},
				name: {
					required: true,
					maxlength: 40,
				},
				message: {
					required: true,
					maxlength: 500,
				}

			},
			
			submitHandler(form) {
			let th = $(form);

			$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: th.serialize(),
			
		}).done(() => {
			console.log('отправлено')
			th.trigger('reset');
		});

		return false;
		}
	});
	});


	function windowSize(){
		if ($(window).width() <= '1024') {
			$('.first-section__symbol-1').html('&lt;/&gt;')
		}
		else {
			$('.first-section__symbol-1').html('&lt;div&gt;')
		};
		
};

	$(window).on('load resize',windowSize);
				
		


});
