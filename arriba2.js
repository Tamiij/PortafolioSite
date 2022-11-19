// JavaScript Document
$(document).ready(function(){

	$('.flotante').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.flotante').slideDown(300);
		} else {
			$('.flotante').slideUp(300);
		}
	});

});