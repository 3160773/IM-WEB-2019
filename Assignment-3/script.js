$(".square1").click(function(){
	$(this).toggleClass("active")
	$(".square8").toggleClass("active")
	$(".square13").toggleClass("active")

	if ( $(this).hasClass("square1") ) {
		$(".squares").toggleClass("square1.active")
		$(".sqaures").toggleClass("square8.active")
		$(".sqaures").toggleClass("square13.active")
	}

});

$(".square2").click(function(){
	$(this).toggleClass("active")
	$(".square12").toggleClass("active")

	if ( $(this).hasClass("square2") ) {
		$(".squares").toggleClass("square2.active")
		$(".sqaures").toggleClass("square12.active")
	}
});

$(".square3").click(function(){
	$(this).toggleClass("active")
	$(".square6").toggleClass("active")

	if ( $(this).hasClass("square3") ) {
		$(".squares").toggleClass("square3.active")
		$(".sqaures").toggleClass("square6.active")
	}
});

$(".square4").click(function(){
	$(this).toggleClass("active")
	$(".square11").toggleClass("active")

	if ( $(this).hasClass("square4") ) {
		$(".squares").toggleClass("square4.active")
		$(".sqaures").toggleClass("square11.active")
	}
});

$(".square5").click(function(){
	$(this).toggleClass("active")
	$(".square7").toggleClass("active")
	$(".square9").toggleClass("active")
    $(".square10").toggleClass("active")

	if ( $(this).hasClass("square5") ) {
		$(".squares").toggleClass("square5.active")
		$(".sqaures").toggleClass("square7.active")
		$(".sqaures").toggleClass("square9.active")
	    $(".sqaures").toggleClass("square10.active")


	}

});







	













