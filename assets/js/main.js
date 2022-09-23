(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.main-menu').meanmenu();
    });
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
    // END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.main-menu-area').addClass('menu-shrink animated slideInDown');
			} else {
				$('.main-menu-area').removeClass('menu-shrink animated slideInUp');
			}
		});	
		
		$('.navbar-nav li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
		});
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});	
		
		$('.navbar-nav>li>a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
		});
		// END MENU JS CODE
		
		// home slider
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause: true,
			dots: true,
			autoplay:true,
			loop:true,
			slideSpeed: 300,
			paginationSpeed: 400,
			autoPlay: true,
			mouseDrag: true,
			singleItem: true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			nav:false,
			pullDrag:true,
    		active: true,
		});
		
		$(".home-slider").on("translate.owl.carousel", function(){
			$(".benner-text").removeClass("animated fadeInLeft").css("opacity", "0");
			$(".benner-sec-text").removeClass("animated fadeInLeft").css("opacity", "0");
			$(".benner-thr-text").removeClass("animated zoomIn").css("opacity", "0");
			$(".slider-title").removeClass("animated fadeInUp").css("opacity", "0");
			$(".slider-parag").removeClass("animated fadeInDown").css("opacity", "0");
			$(".bennar-btn").removeClass("animated zoomIn").css("opacity", "0");
		});
		$(".home-slider").on("translated.owl.carousel", function(){
			$(".benner-text").removeClass("animated fadeInLeft").css("opacity", "1");
			$(".benner-sec-text").removeClass("animated fadeInLeft").css("opacity", "1");
			$(".benner-thr-text").removeClass("animated zoomIn").css("opacity", "1");
			$(".slider-title").addClass("animated fadeInUp").css("opacity", "1");
			$(".slider-parag").addClass("animated fadeInDown").css("opacity", "1");
			$(".bennar-btn").addClass("animated zoomIn").css("opacity", "1");
		});
		
		
		//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			loop:true,
			items: 1,
			margin: 0,
			nav: true,
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="flaticon-left-arrow-1"></span>', '<span class="flaticon-right-arrow"></span>' ]			
		});    		
	}

		
		new WOW().init();
		
		//COUNTER JS CODE
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
		
		
		// POPPUP GALLERY JS CODE
		$('.popup-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		}); 
		// END POPPUP GALLERY JS CODE
		
		//POPUP VIDEO JS CODE
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
		//END POPUP VIDEO JS CODE
		
		 $('.team-slider').owlCarousel({
			loop: true,
			margin: 30,
			autoplay: true,
			dots:true,
			autoplayTimeout: 8500,
			smartSpeed: 2000,
			responsive: {
			  0: {
				items: 1
			  },
			  430: {
				items: 2
			  },
			  768: {
				items: 3
			  },
			  1170: {
				items: 3
			  }
			}
		});
		
		//CLIENTS SLIDER JS CODE
		$('.clients-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoplay:true,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:3
				},
				992:{
					items:5
				}
			}
		})
		
		// SPECIAL SLIDER JS CODE
		$('.testimonial-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayHoverPause: false,
			dots:false ,
			autoplay:false,
			loop:true,
			nav:true,
			navText: ["<i class=icofont-thin-left></i>", "<i class=icofont-thin-right></i>"],
		})
		
		//PARTICLES JS CODE
		if(document.getElementById("particles-js")) particlesJS("particles-js", {
		  "particles": {
			"number": {
			  "value": 500,
			  "density": {
				"enable": true,
				"value_area": 1200
			  }
			},
			"color": {
			  "value": "#efefef"
			},
			"shape": {
			  "type": "circle",
			  "stroke": {
				"width": 0,
				"color": "#000000",
			  },
			  "polygon": {
				"nb_sides": 3
			  },
			  "image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			  }
			},
			"opacity": {
				"value": 0.5,
				"random": true,
				"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			  }
			},
			"line_linked": {
			  "enable": false,
			  "distance": 500,
			  "color": "#e24c89",
			  "opacity": 0.4,
			  "width": 2
			},
			"move": {
			  "enable": true,
			  "speed": 5,
			  "direction": "bottom",
			  "random": true,
			  "straight": false,
			  "out_mode": "out",
			  "bounce": false,
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "canvas",
			"events": {
			  "onhover": {
				"enable": false,
				"mode": "repulse"
			  },
			  "onclick": {
				"enable": false,
				"mode": "repulse"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 400,
				"line_linked": {
				  "opacity": 0.5
				}
			  },
			  "bubble": {
				"distance": 400,
				"size": 4,
				"duration": 0.3,
				"opacity": 1,
				"speed": 3
			  },
			  "repulse": {
				"distance": 200,
				"duration": 0.4
			  },
			  "push": {
				"particles_nb": 4
			  },
			  "remove": {
				"particles_nb": 2
			  }
			}
		  },
		  "retina_detect": true
		});
		//END PARTICLES JS CODE
		

		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="icofont-scroll-long-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});
	
    
}(jQuery));