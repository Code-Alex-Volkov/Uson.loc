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
		if($('body').innerWidth() < 768){
			$('.advantage').slick({
				  infinite: true,
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  responsive: [
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
	}

});