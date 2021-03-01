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
		 clickable: true,
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
			centeredSlides: false,
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
			enteredSlides: false,
        },
      }	
});



var swiper = new Swiper('.product-item-slider',  {
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
			slidesPerView: 2,
			spaceBetween: 20,
        }, 
		980: {
			slidesPerView: 4,
			spaceBetween: 20,			
		},
        1640: {
			spaceBetween: 40,	
			slidesPerView: 4,
        },
      }	
});


var mySwiper;

var elements = document.querySelectorAll('.swiper-container');
Array.prototype.forEach.call(elements, function(el, i){
		
	  console.log(el);	
		
      mySwiper = new Swiper('.' + el.getAttribute('data-id'), {
		
		  lazy: true,
		  loop: false,	
		  slidesPerView: 4,
		  spaceBetween: 40,
		  speed: 600,
		  navigation: {
			  
			 	nextEl: el.nextElementSibling.nextElementSibling,
				prevEl: el.nextElementSibling,
			  
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
				slidesPerView: 2,
				spaceBetween: 20,
			}, 
			980: {
				slidesPerView: 4,
				spaceBetween: 20,			
			},
			1640: {
				spaceBetween: 40,	
				slidesPerView: 4,
			},
		  }	 
		  
	  });    
		
});




var swiper = new Swiper('.small-banner-slider-wrapper', {
	lazy: true,
	loop: true,	
	slidesPerView: 3,
	spaceBetween: 40,	
	speed: 600,
	navigation: {
        nextEl: '.small-sb-next',
        prevEl: '.small-sb-prev',
	},	
	pagination: {
		el: '.small-sb-pagination',
		clickable: true,
	},
	breakpoints: {
        0: {          
			spaceBetween: 10,
			slidesPerView: 1,
			
        },        
		540: {          
			spaceBetween: 10,
			slidesPerView: 2,
			
		},
		770: {          
			centeredSlides: false,
			spaceBetween: 20,		
			slidesPerView: 3,
        },        
        1640: {
			spaceBetween: 40,
			slidesPerView: 3,
			centeredSlides: false
        },
      }	
})


var swiper = new Swiper('.pc-slider-wrapper', {
	lazy: true,
	loop: false,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 600,
	navigation: {
        nextEl: '.pc-next',
        prevEl: '.pc-prev',
	},	
	pagination: {
		el: '.pc-pagination',
		clickable: true,
	},
	
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


/* Accordion */  
$(document).ready(function () {

    var acc = document.getElementsByClassName("qait");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

});

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})
