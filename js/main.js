jQuery(document).ready(function($){
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile version - open/close navigation
	$('.main-nav__trigger').on('click', function(event){
		event.preventDefault();
		if($('header').hasClass('main-nav--visible')) $('.moves-out').removeClass('moves-out');
		
		$('header').toggleClass('main-nav--visible');
		$('.cd-main-nav').toggleClass('main-nav--visible');
		$('.cd-main-content').toggleClass('main-nav--visible');
	});

	//mobile version - go back to main navigation
	$('.go-back').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').removeClass('moves-out');
	});

	//open sub-navigation
	$('.main-nav__trigger').on('click', function(event){
		event.preventDefault();
		$('.main-nav').toggleClass('moves-out');
	});

	function moveNavigation(){
		var navigation = $('.main-nav__wrapper');
  		var screenSize = checkWindowWidth();
        if ( screenSize ) {
        	//desktop screen - insert navigation inside header element
			navigation.detach();
			navigation.insertBefore('.main-nav__trigger');
		} else {
			//mobile screen - insert navigation after .cd-main-content element
			navigation.detach();
			navigation.insertAfter('.cd-main-content');
		}
	}

	function checkWindowWidth() {
		var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
		return ( mq == 'mobile' ) ? false : true;
	}
});