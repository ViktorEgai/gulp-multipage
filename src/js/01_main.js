jQuery(document).ready(function ($) {
	//  кнопка наверх
  var toTop = $(".to-top");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200){
     toTop.addClass("to-top--visible");
    }else{
   toTop.removeClass("to-top--visible");
  };
  });  
  $(".to-top").click(function () {                
        $('body,html').animate({scrollTop: 0}, 400);
  });


// попап
  function openOrderPopup() {
    $('.popup').addClass('popup--active');
    $('.popup-wrapper').addClass('popup-wrapper--active');
  }


  function closeOrderPopup() {
    $('.popup').removeClass('popup--active');
    $('.popup-wrapper').removeClass('popup-wrapper--active');
  }
	  $(document).on('click', function (e) {
    const target = e.target;
    if ($(target).attr('href') === '#') e.preventDefault(); 

    if (target.closest('.popup-close') || (!target.closest('.popup-wrapper') && target.closest('.popup'))) {
      e.preventDefault()
      closeOrderPopup();
    }
    if (target.closest('.feedback-btn')) {
      e.preventDefault();
      openOrderPopup();
    }

  })


	$(".header-menu-btn").on("click", function () {
		$(this).toggleClass('active');
		$(".header-mobile-menu").slideToggle();
	});

	// Галерея
	$(".gallery__wrapper").slick({
		dots: false,
		infinite: false,
		speed: 300,
		arrows: true,
		prevArrow: `<button class="gallery-arrow gallery-arrow--prev">
  <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8609 24.3921C13.092 25.161 11.8455 25.161 11.0766 24.3921L0.576632 13.8921C-0.192212 13.1233 -0.192212 11.8767 0.576632 11.1079L11.0766 0.607885C11.8455 -0.160961 13.092 -0.160961 13.8609 0.607885C14.6297 1.37673 14.6297 2.62327 13.8609 3.39212L4.75298 12.5L13.8609 21.6079C14.6297 22.3767 14.6297 23.6233 13.8609 24.3921Z" fill="#CECECE"/>
</svg>
</button>`,
		nextArrow: `<button class="gallery-arrow gallery-arrow--next">
  <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.20163 24.3921C1.97048 25.161 3.21702 25.161 3.98587 24.3921L14.4859 13.8921C15.2547 13.1233 15.2547 11.8767 14.4859 11.1079L3.98587 0.607885C3.21702 -0.160961 1.97048 -0.160961 1.20163 0.607885C0.432789 1.37673 0.432789 2.62327 1.20163 3.39212L10.3095 12.5L1.20163 21.6079C0.432789 22.3767 0.432789 23.6233 1.20163 24.3921Z" fill="#CECECE"/>
</svg>
</button>`,
		responsive: [
			{
				breakpoint: 9999,
				settings: "unslick",
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
	$(".gallery__wrapper").on("afterChange", function (event, slick, currentSlide, nextSlide) {
		$(".gallery-mobile-tip").css("opacity", 0);
	});

	// Слайдер категорий
	$(".cat-list__wrapper").each(function () {
		var $this = $(this);
		$(this).slick({
			dots: false,
			infinite: true,
			speed: 300,
			arrows: true,
			prevArrow: `<button class="cat-list-arrow cat-list-arrow--prev">
  <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8609 24.3921C13.092 25.161 11.8455 25.161 11.0766 24.3921L0.576632 13.8921C-0.192212 13.1233 -0.192212 11.8767 0.576632 11.1079L11.0766 0.607885C11.8455 -0.160961 13.092 -0.160961 13.8609 0.607885C14.6297 1.37673 14.6297 2.62327 13.8609 3.39212L4.75298 12.5L13.8609 21.6079C14.6297 22.3767 14.6297 23.6233 13.8609 24.3921Z" fill="#CECECE"/>
</svg>
</button>`,
			nextArrow: `<button class="cat-list-arrow cat-list-arrow--next">
  <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.20163 24.3921C1.97048 25.161 3.21702 25.161 3.98587 24.3921L14.4859 13.8921C15.2547 13.1233 15.2547 11.8767 14.4859 11.1079L3.98587 0.607885C3.21702 -0.160961 1.97048 -0.160961 1.20163 0.607885C0.432789 1.37673 0.432789 2.62327 1.20163 3.39212L10.3095 12.5L1.20163 21.6079C0.432789 22.3767 0.432789 23.6233 1.20163 24.3921Z" fill="#CECECE"/>
</svg>
</button>`,
			slidesToShow: 3,
			lidesToScroll: 1,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: false,
					},
				},
				

				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});
		$(this).on("afterChange", function (event, slick, currentSlide, nextSlide) {
			console.log($this);
			$this.parent().find(".cat-list-tip").css("opacity", 0);
		});
	});

	// одинаковая высота
	function setEqualHeight(columns) {
		var tallestcolumn = 0;
		columns.each(function () {
			currentHeight = $(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}

	setEqualHeight($(".product-item"));

	// droplist
	$(".droplist-item__title").on("click", function () {
		$(this).find(".droplist-item__icon").toggleClass("active");
		$(this).next().slideToggle(500);
	});

	// табы
	function tabs() {
		$(".news-tab-nav__item").eq(0).addClass("active");
		$(".news-tab-content__item").eq(0).addClass("active");

		var nav = $(".news-tab-nav__item");
		var contentItem = $(".news-tab-content__item");

		for (let i = 0; i < nav.length; i++) {
			nav.eq(i).on("click", function () {
				nav.removeClass("active");
				$(this).addClass("active");
				contentItem.removeClass("active");
				contentItem.eq(i).addClass("active");
			});
		}
		$(".product-tabs-nav__item").eq(0).addClass("active");
		$(".product-tabs-content__item").eq(0).addClass("active");

		var nav = $(".product-tabs-nav__item");
		var contentItem = $(".product-tabs-content__item");

		for (let i = 0; i < nav.length; i++) {
			nav.eq(i).on("click", function () {
				nav.removeClass("active");
				$(this).addClass("active");
				contentItem.removeClass("active");
				contentItem.eq(i).addClass("active");
			});
		}
	}
	tabs();

	// Слайдер на странице товара
	function productSlider() {
		$(".product-slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: `<button class="slick-prev"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" transform="matrix(-1 0 0 1 56 0)" fill="#FAFAFA"/>
<path d="M31.0422 15.6991L20.3594 27.2405C20.1718 27.4432 20.0667 27.7151 20.0667 27.9982C20.0667 28.2813 20.1718 28.5532 20.3594 28.7559L31.0422 40.3017C31.1296 40.3962 31.2341 40.4713 31.3495 40.5227C31.4649 40.574 31.5889 40.6004 31.7142 40.6004C31.8395 40.6004 31.9635 40.574 32.0789 40.5227C32.1944 40.4713 32.2989 40.3962 32.3863 40.3017C32.5661 40.1078 32.6667 39.8475 32.6667 39.5765C32.6667 39.3055 32.5661 39.0453 32.3863 38.8514L22.3405 27.9982L32.3863 17.1472C32.5655 16.9534 32.6657 16.6936 32.6657 16.4232C32.6657 16.1527 32.5655 15.8929 32.3863 15.6991C32.2989 15.6046 32.1944 15.5294 32.0789 15.4781C31.9635 15.4268 31.8395 15.4004 31.7142 15.4004C31.5889 15.4004 31.4649 15.4268 31.3495 15.4781C31.2341 15.5294 31.1296 15.6046 31.0422 15.6991Z" fill="#767676"/>
</svg>
</button>`,
			nextArrow: `<button class="slick-next"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#FAFAFA"/>
<path d="M24.9576 15.6991L35.6404 27.2405C35.828 27.4432 35.933 27.7151 35.933 27.9982C35.933 28.2813 35.828 28.5532 35.6404 28.7559L24.9576 40.3017C24.8702 40.3962 24.7657 40.4713 24.6503 40.5227C24.5348 40.574 24.4108 40.6004 24.2855 40.6004C24.1603 40.6004 24.0362 40.574 23.9208 40.5227C23.8054 40.4713 23.7009 40.3962 23.6135 40.3017C23.4337 40.1078 23.333 39.8475 23.333 39.5765C23.333 39.3055 23.4337 39.0453 23.6135 38.8514L33.6593 27.9982L23.6135 17.1472C23.4343 16.9534 23.334 16.6936 23.334 16.4232C23.334 16.1527 23.4343 15.8929 23.6135 15.6991C23.7009 15.6046 23.8054 15.5294 23.9208 15.4781C24.0362 15.4268 24.1603 15.4004 24.2855 15.4004C24.4108 15.4004 24.5348 15.4268 24.6503 15.4781C24.7657 15.5294 24.8702 15.6046 24.9576 15.6991Z" fill="#767676"/>
</svg>
</button>`,
			fade: true,
			asNavFor: ".product-slider-nav",
		});
		$(".product-slider-nav").slick({
			slidesToShow: 9,
			slidesToScroll: 1,
			variableWidth: true,
			arrows: false,
			asNavFor: ".product-slider",
			// centerMode: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 1,
					},
				},
			],
		});

			$(".product-slider-nav").on("afterChange", function (event, slick, currentSlide, nextSlide) {
		$(".product-slider-tip").css("opacity", 0);
	});
	}
	productSlider();

	// Сладер Вам может понравится
	$(".offer__wrapper").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		prevArrow: `<button class="slick-prev"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" transform="matrix(-1 0 0 1 56 0)" fill="#FAFAFA"/>
<path d="M31.0422 15.6991L20.3594 27.2405C20.1718 27.4432 20.0667 27.7151 20.0667 27.9982C20.0667 28.2813 20.1718 28.5532 20.3594 28.7559L31.0422 40.3017C31.1296 40.3962 31.2341 40.4713 31.3495 40.5227C31.4649 40.574 31.5889 40.6004 31.7142 40.6004C31.8395 40.6004 31.9635 40.574 32.0789 40.5227C32.1944 40.4713 32.2989 40.3962 32.3863 40.3017C32.5661 40.1078 32.6667 39.8475 32.6667 39.5765C32.6667 39.3055 32.5661 39.0453 32.3863 38.8514L22.3405 27.9982L32.3863 17.1472C32.5655 16.9534 32.6657 16.6936 32.6657 16.4232C32.6657 16.1527 32.5655 15.8929 32.3863 15.6991C32.2989 15.6046 32.1944 15.5294 32.0789 15.4781C31.9635 15.4268 31.8395 15.4004 31.7142 15.4004C31.5889 15.4004 31.4649 15.4268 31.3495 15.4781C31.2341 15.5294 31.1296 15.6046 31.0422 15.6991Z" fill="#767676"/>
</svg>
</button>`,
		nextArrow: `<button class="slick-next"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#FAFAFA"/>
<path d="M24.9576 15.6991L35.6404 27.2405C35.828 27.4432 35.933 27.7151 35.933 27.9982C35.933 28.2813 35.828 28.5532 35.6404 28.7559L24.9576 40.3017C24.8702 40.3962 24.7657 40.4713 24.6503 40.5227C24.5348 40.574 24.4108 40.6004 24.2855 40.6004C24.1603 40.6004 24.0362 40.574 23.9208 40.5227C23.8054 40.4713 23.7009 40.3962 23.6135 40.3017C23.4337 40.1078 23.333 39.8475 23.333 39.5765C23.333 39.3055 23.4337 39.0453 23.6135 38.8514L33.6593 27.9982L23.6135 17.1472C23.4343 16.9534 23.334 16.6936 23.334 16.4232C23.334 16.1527 23.4343 15.8929 23.6135 15.6991C23.7009 15.6046 23.8054 15.5294 23.9208 15.4781C24.0362 15.4268 24.1603 15.4004 24.2855 15.4004C24.4108 15.4004 24.5348 15.4268 24.6503 15.4781C24.7657 15.5294 24.8702 15.6046 24.9576 15.6991Z" fill="#767676"/>
</svg>
</button>`,
		fade: false,
		responsive: [
			{
				breakpoint: 768,
      settings: 'unslick'
			}
		]
	});
	$(".reviews-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: `<button class="slick-prev"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" transform="matrix(-1 0 0 1 56 0)" fill="#FAFAFA"/>
<path d="M31.0422 15.6991L20.3594 27.2405C20.1718 27.4432 20.0667 27.7151 20.0667 27.9982C20.0667 28.2813 20.1718 28.5532 20.3594 28.7559L31.0422 40.3017C31.1296 40.3962 31.2341 40.4713 31.3495 40.5227C31.4649 40.574 31.5889 40.6004 31.7142 40.6004C31.8395 40.6004 31.9635 40.574 32.0789 40.5227C32.1944 40.4713 32.2989 40.3962 32.3863 40.3017C32.5661 40.1078 32.6667 39.8475 32.6667 39.5765C32.6667 39.3055 32.5661 39.0453 32.3863 38.8514L22.3405 27.9982L32.3863 17.1472C32.5655 16.9534 32.6657 16.6936 32.6657 16.4232C32.6657 16.1527 32.5655 15.8929 32.3863 15.6991C32.2989 15.6046 32.1944 15.5294 32.0789 15.4781C31.9635 15.4268 31.8395 15.4004 31.7142 15.4004C31.5889 15.4004 31.4649 15.4268 31.3495 15.4781C31.2341 15.5294 31.1296 15.6046 31.0422 15.6991Z" fill="#767676"/>
</svg>
</button>`,
		nextArrow: `<button class="slick-next"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#FAFAFA"/>
<path d="M24.9576 15.6991L35.6404 27.2405C35.828 27.4432 35.933 27.7151 35.933 27.9982C35.933 28.2813 35.828 28.5532 35.6404 28.7559L24.9576 40.3017C24.8702 40.3962 24.7657 40.4713 24.6503 40.5227C24.5348 40.574 24.4108 40.6004 24.2855 40.6004C24.1603 40.6004 24.0362 40.574 23.9208 40.5227C23.8054 40.4713 23.7009 40.3962 23.6135 40.3017C23.4337 40.1078 23.333 39.8475 23.333 39.5765C23.333 39.3055 23.4337 39.0453 23.6135 38.8514L33.6593 27.9982L23.6135 17.1472C23.4343 16.9534 23.334 16.6936 23.334 16.4232C23.334 16.1527 23.4343 15.8929 23.6135 15.6991C23.7009 15.6046 23.8054 15.5294 23.9208 15.4781C24.0362 15.4268 24.1603 15.4004 24.2855 15.4004C24.4108 15.4004 24.5348 15.4268 24.6503 15.4781C24.7657 15.5294 24.8702 15.6046 24.9576 15.6991Z" fill="#767676"/>
</svg>
</button>`,
		fade: false,
		responsive: [
			{
				breakpoint: 768,
      settings: 'unslick'
			}
		]
	});
	

	// color filter toggle
	$('.color-list__arrow').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().next().slideToggle()
	})

	// toggle filter on mobile
	$('#filter-btn').on('click', function() {
		if($(window).width()<768) {
			$('.sidebar').slideDown(500);
		} else {
			$('.sidebar').toggleClass('active')
		}
	})
	$('.sidebar-close').on('click', function() {
		$('.sidebar').slideUp(500);
	})
	function priceFilter() {
	var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};
}
priceFilter()
});
