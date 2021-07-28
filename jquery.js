$(document).ready(function(){
	$('.topmenu a').click(function(){
		var otstupTop=100;
		$('body,html').animate({
			scrollTop: $($(this).attr('href')).offset().top-otstupTop
		}, 1500);
	});
});