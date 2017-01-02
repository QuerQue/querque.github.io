$(document).ready(function () {

  $("#menu ul li a").hover(
	
	function() {
      $(this).stop().animate({width: "310px"}, {duration: 400, easing: "easeOutQuad"});
    },

	function () {
      $(this).stop().animate({width: "80px"}, {duration: 450, easing: "easeInOutQuad"});
    }
  );
});
  
