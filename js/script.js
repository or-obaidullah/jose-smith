// loading
$(window).on("load",function(){
    $("#loading").fadeOut();
});

//mix-it-up
var containerEl = document.querySelector('.mixitup');
var mixer = mixitup(containerEl);

// fix top
$(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("sticky");
    }
    else {
        $("nav").removeClass("sticky");
    }
});

// go top
$(window).scroll(function(){
	if($(this).scrollTop() > 200) {
		$('.go-top').fadeIn();
	} else {
		$('.go-top').fadeOut();
	}
});
$('.go-top').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 50);
	return false;
});

// typed js
var typed = new Typed('.animate', {
    strings: [
        'Jose Smith', 
        'Designer', 
        'Programmer'
    ],
    typeSpeed: 200,
    backSpeed: 60,
    loop: true
  });

// owl carousel
$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    dots:true,
    autoplay:true
});

//wow js
new WOW().init();

// skill
$(".skill-toggle").click(function(){
    $(".skills").toggle(500)
})
