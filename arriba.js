$(document).ready(function(){

	$('.Rectngulo_40').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.Rectngulo_40').slideDown(300);
		} else {
			$('.Rectngulo_40').slideUp(300);
		}
	});

});