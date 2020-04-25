var $ = require("jquery"); 

$(document).ready(function(){
	'use strict';

	/* btn menu */
	$('.nav_btn').click(function(){
	   $('.nav_btn').toggleClass('nav-active');
		$('.nav').toggleClass('nav-active');
		$('body').toggleClass('overflow');
	});

	


	/* slider choose */
	if ($('.advantage').length) {
		$('.advantage').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  appendArrows: $('.slider_navigation'),
			  prevArrow: "<div class=\"left\"><i class=\"fas fa-angle-left\"></i></div>",
			  nextArrow: "<div class=\"right\"><i class=\"fas fa-angle-right\"></i></div>",
			  responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        	slidesToShow: 2,
			  			slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 576,
			      settings: {
			        	slidesToShow: 1,
			  			slidesToScroll: 1
			      }
			    }
			  ]
		});
			
	}

});