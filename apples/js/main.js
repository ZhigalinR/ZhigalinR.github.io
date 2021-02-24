/* Sliders */
var swiper = new Swiper('.slider-style-banner', {
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 40,
	speed: 600,
	navigation: {
        nextEl: '.ssb-next',
        prevEl: '.ssb-prev',
	},	
	pagination: {
		el: '.ssb-pagination',
	},
	breakpoints: {
        0: {          
			spaceBetween: 10,
			centeredSlides: true,				
        },        
		770: {          
			centeredSlides: false,
			spaceBetween: 20,			
        },        
        1640: {
			spaceBetween: 40,
        },
      }	
});

var swiper = new Swiper('.bw-slider', {
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 20,
	speed: 600,
		
	breakpoints: {
        0: {          
			spaceBetween: 10,
			centeredSlides: true,				
        },        
		768: {          
			centeredSlides: false,
        },        
        1640: {
			
        },
      }	
});


var swiper = new Swiper('.product-item-slider', {
	lazy: true,
	loop: true,	
	slidesPerView: 4,
	spaceBetween: 40,
	speed: 600,
	navigation: {
        nextEl: '.ps-button-next',
        prevEl: '.ps-button-prev',
	},	
	breakpoints: {
        0: {          
			spaceBetween: 10,			
			slidesPerView: 1,
        }, 
		420: {          
			spaceBetween: 10,			
			slidesPerView: 1,
        }, 
		700: {          
			spaceBetween: 10,			
			slidesPerView: 2,
        },  
		768: {          
			centeredSlides: false,			
			slidesPerView: 2,
			spaceBetween: 20,
        }, 
		980: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
        1640: {
			spaceBetween: 40,			
        },
      }	
});

/* Scrollbar */
$(document).ready(function() {
	new SimpleBar(document.getElementById('myElement'));
});

/* Select */
$(document).ready(function() {
	$('.js-example-basic-single').select2({
		minimumResultsForSearch: Infinity
	});	
});


/* File input */
const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})
