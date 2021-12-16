$(function(){
	$('.owl').each( function() {
		var $carousel = $(this);
		$carousel.owlCarousel({
			items : $carousel.attr('data-items'),
			itemsDesktop : [1199,$carousel.attr('data-itemsDesktop')],
			itemsDesktopSmall : [979,$carousel.attr('data-itemsDesktopSmall')],
			itemsTablet:  [797,$carousel.attr('data-itemsTablet')],
			itemsMobile :  [479,$carousel.attr('data-itemsMobile')],
			navigation : true,
			pagination: true,
			slideSpeed: 1000,
			paginationSpeed : 1000,
		});
	 });
	$('.image-zoom').magnificPopup({
		type:'image'
	});
	$(window).load(function()
	{
		$('.preloader p').fadeOut();
		$('.preloader').delay(500).fadeOut('slow');
		$('body').delay(600).css({'overflow':'visible'});
	});
});