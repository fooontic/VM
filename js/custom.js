// <!-- owl-carousel -->

	$(document).ready(function() {

		$("#owl-demo").owlCarousel({
			autoPlay : 6000,
			stopOnHover : true,
			paginationSpeed : 1000,
			goToFirstSpeed : 2000,
			lazyLoad : true,
			navigation : true,
			singleItem:true,
			autoHeight : true
		
		}); 

		// $(".owl-item").on('click', function(){
		// 	owl.trigger('owl.stop');
		// })
	 
	});

// <!-- owl-carousel -->


	// jQuery(document).ready(function(){

	// 	$('.main-nav__trigger').on('click', function(){
	// 		$('.main-nav').toggleClass('main-nav--show');
	// 		$('.main-nav__trigger').toggleClass('main-nav__trigger--move');
	// 		$('header').toggleClass('nav-is-visible');
	// 		$('main').toggleClass('nav-is-visible');
	// 		$('.phone-header').toggleClass('phone-header--none');
	// 	});


	// 	// Form label 

	$('.order__input').focus(function(){
		$(this).parents('.order__form-item').children('.order__label').addClass('order__label--vis');
		
	});

	$('.order__textarea').focus(function(){
		$(this).parents('.order__form-item').children('.order__label').addClass('order__label--vis');
	});

	$('.order__input').blur(function(){
		if ($(this).val().length === 0) {
			$(this).parents('.order__form-item').children('.order__label').removeClass('order__label--vis');
		}
	});

	$('.order__textarea').blur(function(){
		if ($(this).val().length === 0) {
			$(this).parents('.order__form-item').children('.order__label').removeClass('order__label--vis');
		}
	});



		///// Хлам какой-то /////

		// $('#email').on('click', function(){
		// 	$('#email-label').addClass('order__label--vis');
			
		// });

		// $('#phone').on('click', function(){
		// 	$('#phone-label').addClass('order__label--vis');
			
		// });

		// $('#message').on('click', function(){
		// 	$('#message-label').addClass('order__label--vis');
			
		// });

		///// Хлам какой-то //////


	// });





	jQuery.validator.addMethod('answercheck', function (value, element) {
		return this.optional(element) || /^\bcat\b$/.test(value);
		}, "type the correct answer -_-");

	// validate contact form
	$(function() {
	$('#contact').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			},
			
		},
		messages: {
			name: {
				required: "Введите ваше имя",
				minlength: ""
			},
			email: {
				required: "Введите вашу электронную почту"
			},
			message: {
				required: "Введите сообщение",
				minlength: ""
			},
			
		},
		submitHandler: function(form) {
			$(form).ajaxSubmit({
				type:"POST",
				data: $(form).serialize(),
				url:"script/process.php",
				success: function() {
					$('#contact :input').attr('disabled', 'disabled');
					$('#submit').attr('value','Сообщение отправлено');
					$('#contact').fadeTo( "slow", 0.6, function() {
						$(this).find(':input').attr('disabled', 'disabled');
						$(this).find('label').css('cursor','default');
						
					});
				},
				error: function() {
					$('#contact').fadeTo( "slow", 0.15, function() {
						$('#error').fadeIn();
					});
				}
			});
		}
	});
});
