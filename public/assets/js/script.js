
//Hide Loading Box (Preloader)
function handlePreloader() {
	if (jQuery('.preloader').length) {
		jQuery('.preloader').delay(200).fadeOut(500);
	}
}


//Update Header Style and Scroll to Top
function headerStyle() {
	if (jQuery('.main-header').length) {
		var windowpos = $(window).scrollTop();
		var siteHeader = jQuery('.main-header');
		var scrollLink = jQuery('.scroll-to-top');

		var HeaderHight = jQuery('.main-header').height();
		if (windowpos >= HeaderHight) {
			siteHeader.addClass('fixed-header');
			scrollLink.fadeIn(300);
		} else {
			siteHeader.removeClass('fixed-header');
			scrollLink.fadeOut(300);
		}

	}
}

headerStyle();


//Submenu Dropdown Toggle
if (jQuery('.main-header li.dropdown ul').length) {
	jQuery('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

	//Dropdown Button
	jQuery('.main-header li.dropdown .dropdown-btn').on('click', function () {
		$(this).prev('ul').slideToggle(500);
	});

	//Dropdown Menu / Fullscreen Nav
	jQuery('.fullscreen-menu .navigation li.dropdown > a').on('click', function () {
		$(this).next('ul').slideToggle(500);
	});

	//Disable dropdown parent link
	jQuery('.navigation li.dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	//Disable dropdown parent link
	jQuery('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function (e) {
		e.preventDefault();
	});
}


//Mobile Nav Hide Show
if (jQuery('.mobile-menu').length) {

	jQuery('.mobile-menu .menu-box').mCustomScrollbar();

	var mobileMenuContent = jQuery('.main-header .nav-outer .main-menu').html();
	jQuery('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
	jQuery('.sticky-header .main-menu').append(mobileMenuContent);

	//Dropdown Button
	jQuery('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	jQuery('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	jQuery('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});

}


//Header Search
if (jQuery('.search-box-outer').length) {
	jQuery('.search-box-outer').on('click', function () {
		$('body').addClass('search-active');
	});
	jQuery('.close-search').on('click', function () {
		$('body').removeClass('search-active');
	});
}


//Hidden Bar Menu Config
function hiddenBarMenuConfig() {
	var menuWrap = jQuery('.hidden-bar .side-menu');
	// appending expander button
	menuWrap.find('.dropdown').children('a').append(function () {
		return '<button type="button" class="btn expander"><i class="icon fa fa-angle-down"></i></button>';
	});
	// hidding submenu 
	menuWrap.find('.dropdown').children('ul').hide();
	// toggling child ul
	menuWrap.find('.btn.expander').each(function () {
		$(this).on('click', function () {
			$(this).parent() // return parent of .btn.expander (a) 
				.parent() // return parent of a (li)
				.children('ul').slideToggle();

			// adding class to expander container
			$(this).parent().toggleClass('current');
			// toggling arrow of expander
			$(this).find('i').toggleClass('fa-angle-up fa-angle-down');

			return false;

		});
	});
}

hiddenBarMenuConfig();

//Hidden Sidebar
if (jQuery('.hidden-bar').length) {
	var hiddenBar = jQuery('.hidden-bar');
	var hiddenBarOpener = jQuery('.hidden-bar-opener');
	var hiddenBarCloser = jQuery('.hidden-bar-closer');
	jQuery('.hidden-bar-wrapper').mCustomScrollbar();

	//Show Sidebar
	hiddenBarOpener.on('click', function () {
		hiddenBar.addClass('visible-sidebar');
	});

	//Hide Sidebar
	hiddenBarCloser.on('click', function () {
		hiddenBar.removeClass('visible-sidebar');
	});

}






//Custom Seclect Box
if (jQuery('.custom-select-box').length) {
	jQuery('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
}



//Parallax Scene for Icons
if (jQuery('.parallax-scene-1').length) {
	var scene = jQuery('.parallax-scene-1').get(0);
	var parallaxInstance = new Parallax(scene);
}
if (jQuery('.parallax-scene-2').length) {
	var scene = jQuery('.parallax-scene-2').get(0);
	var parallaxInstance = new Parallax(scene);
}
if (jQuery('.parallax-scene-3').length) {
	var scene = jQuery('.parallax-scene-3').get(0);
	var parallaxInstance = new Parallax(scene);
}
if (jQuery('.parallax-scene-4').length) {
	var scene = jQuery('.parallax-scene-4').get(0);
	var parallaxInstance = new Parallax(scene);
}



if (jQuery('.paroller').length) {
	jQuery('.paroller').paroller({
		factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
		factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
		type: 'foreground',     // background, foreground  
		direction: 'horizontal' // vertical, horizontal  
	});
}



//Gallery Filters
if (jQuery('.filter-list').length) {
	jQuery('.filter-list').mixItUp({});
}


//Fact Counter + Text Count
if (jQuery('.count-box').length) {
	jQuery('.count-box').appear(function () {

		var $t = $(this),
			n = $t.find(".count-text").attr("data-stop"),
			r = parseInt($t.find(".count-text").attr("data-speed"), 10);

		if (!$t.hasClass("counted")) {
			$t.addClass("counted");
			$({
				countNum: $t.find(".count-text").text()
			}).animate({
				countNum: n
			}, {
				duration: r,
				easing: "linear",
				step: function () {
					$t.find(".count-text").text(Math.floor(this.countNum));
				},
				complete: function () {
					$t.find(".count-text").text(this.countNum);
				}
			});
		}

	}, { accY: 0 });
}


//Main Slider Carousel
if (jQuery('.main-slider-carousel').length) {
	jQuery('.main-slider-carousel').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		loop: true,
		margin: 0,
		nav: true,
		autoHeight: true,
		smartSpeed: 500,
		autoplay: 6000,
		navText: ['<span class="flaticon-back-1"></span>', '<span class="flaticon-arrow-pointing-to-right"></span>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			800: {
				items: 1
			},
			1024: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
}



// Testimonial Carousel
if (jQuery('.testimonial-carousel').length) {
	jQuery('.testimonial-carousel').owlCarousel({
		loop: true,
		margin: 70,
		nav: true,
		smartSpeed: 500,
		autoplay: 4000,
		navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			480: {
				items: 1,
				margin: 0
			},
			600: {
				items: 1,
				margin: 0
			},
			800: {
				items: 2,
				margin: 30
			},
			1024: {
				items: 2
			}
		}
	});
}




// Single Item Carousel
if (jQuery('.single-item-carousel').length) {
	jQuery('.single-item-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		smartSpeed: 500,
		autoplay: 4000,
		navText: ['<span class="flaticon-left-arrow-2"></span>', '<span class="flaticon-right-arrow-2"></span>'],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			600: {
				items: 1
			},
			800: {
				items: 1
			},
			1024: {
				items: 1
			}
		}
	});
}





//Masonary
function enableMasonry() {
	if (jQuery('.masonry-items-container').length) {

		var winDow = $(window);
		// Needed variables
		var $container = jQuery('.masonry-items-container');

		$container.isotope({
			itemSelector: '.masonry-item',
			masonry: {
				columnWidth: '.masonry-item.col-lg-4'
			},
			animationOptions: {
				duration: 500,
				easing: 'linear'
			}
		});

		winDow.bind('resize', function () {

			$container.isotope({
				itemSelector: '.masonry-item',
				animationOptions: {
					duration: 500,
					easing: 'linear',
					queue: false
				}
			});
		});
	}
}

enableMasonry();





//Progress Bar
if (jQuery('.progress-line').length) {
	jQuery('.progress-line').appear(function () {
		var el = $(this);
		var percent = el.data('width');
		$(el).css('width', percent + '%');
	}, { accY: 0 });
}



//Tabs Box
if (jQuery('.tabs-box').length) {
	jQuery('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
		e.preventDefault();
		var target = $($(this).attr('data-tab'));

		if ($(target).is(':visible')) {
			return false;
		} else {
			target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
			target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		}
	});
}



//LightBox / Fancybox
if (jQuery('.lightbox-image').length) {
	jQuery('.lightbox-image').fancybox({
		openEffect: 'fade',
		closeEffect: 'fade',
		helpers: {
			media: {}
		}
	});
}


//Contact Form Validation
if ($('#contact-form').length) {
	$('#contact-form').validate({
		rules: {
			username: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			}
		}
	});
}



// Scroll to a Specific Div
if (jQuery('.scroll-to-target').length) {
	$(".scroll-to-target").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1500);

	});
}



// Elements Animation
if (jQuery('.wow').length) {
	var wow = new WOW(
		{
			boxClass: 'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0,          // distance to the element when triggering the animation (default is 0)
			mobile: true,       // trigger animations on mobile devices (default is true)
			live: true       // act on asynchronously loaded content (default is true)
		}
	);
	wow.init();
}



/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

$(window).on('scroll', function () {
	headerStyle();
});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

$(window).on('load', function () {
	handlePreloader();
	enableMasonry();
});