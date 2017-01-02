$(function() {
	$(".menu_1").mouseover(
		function(){
			$(this).next(".menu_2").slideDown(800).siblings(".menu_2").slideUp(500);
		});
	});
	
