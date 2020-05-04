$(document).ready(function($){

    // Menu Dropdown Toggle
	if($('.menuTrigger').length){
		$(".menuTrigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header .nav').slideToggle(200);
		});
	}
});
function myFunction() {
    var element = document.getElementsByClassName("menuTrigger");
    element.classList.toggle("active");
  }