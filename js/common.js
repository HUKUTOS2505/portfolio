$(document).ready(function() {
    function heightDetect() {
    	$("#header").css("min-height", $(window).height())
    };
    heightDetect();

    $(window).resize(function() {
    	heightDetect();
    });

    $(".btn, .menu ul li a span").click(function() {
    	$(".sandwich").toggleClass("active");
    	if ($('.menu').is(":visible")) {
    		$(".menu").fadeOut(600);
    	} else {
    		$(".menu").fadeIn(600);
            $(".menu ul").addClass("fadeInUp animated"); }
        });
    $("#test-circle1").circliful({ animation: 1, animationStep: 6, foregroundBorderWidth: 5, backgroundColor: "none", fillColor: '#eee', percent: 100, foregroundColor: '#f8b410', text: 'HTML', textColor: '#333', animateInView: 'true', });
    $("#test-circle2").circliful({ animation: 1, animationStep: 6, foregroundBorderWidth: 5, backgroundColor: "none", fillColor: '#eee', percent: 65, animateInView: 'true', });
    $("#test-circle3").circliful({ animation: 1, animationStep: 6, foregroundBorderWidth: 5, backgroundColor: "none", fillColor: '#eee', percent: 80, foregroundColor: '#333', animateInView: 'true', });
    $("#test-circle4").circliful({ animation: 1, animationStep: 6, foregroundBorderWidth: 5, backgroundColor: "none", fillColor: '#eee', percent: 50, foregroundColor: '#f8b410', animateInView: 'true', alwaysDecimals: 'true', });


    new WOW().init();


});
