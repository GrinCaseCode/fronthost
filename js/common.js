$(document).ready(function() {
	 /* Search */
    $('.search_form_open').click(function () {
        $('.search_form').toggleClass('active');
        $(this).fadeToggle();
    });
    if (window.matchMedia('(min-width:931px)').matches) {
        $(document).click(function (event) {
            if (!$(event.target).closest('.search_form').length) {
                $('body').find('.search_form').removeClass('active');
                $('.search_form_open').fadeIn();
            }
        });
        $(document).keyup(function (event) {
            if (event.keyCode == 27) {
                $('.search_form_open').fadeIn();
                $('.search_form').removeClass('active');
            }
        });
    };

 $('form.search_form').on('submit', function (event) {
                var search;
                search = $(this).find('input[name=q]').val();
                if (!!search) {
                    return true
                }
                $('.search_form').removeClass('active');
                $('.search_form_open').show();
                return false;

            });

  $('.input-date').datetimepicker({
    format: 'DD/MM/YYYY',
 });

   $("#fl_inp").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#fl_nm").html(filename);
    });


$(".input-phone").mask("+7 (999) 999-99-99");


	$('.menu_btn').click(function () {
        $('.overlay,.mob_menu_container').fadeToggle();
        $(this).toggleClass('active');
    });
    $('.overlay').click(function () {
        $('.overlay,.mob_menu_container').fadeOut();
        $('.menu_btn').toggleClass('active');
    });
    if(window.matchMedia('(max-width:930px)').matches){
    }else{
        $('.overlay,.mob_menu_container').fadeOut();
        $('.menu_btn').removeClass('active');
    };

	$(".product-btn_basket").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
		});

	$(".item-product__like").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
		});

	$(".list-size__item").click(function(e) {
			e.preventDefault();
			$(".list-size__item").removeClass("active");
			$(this).toggleClass("active");
		});

    $(".btn-add").click(function(e) {
            e.preventDefault();
            $(this).toggleClass("active");
        });


$(".list-brand__link").click(function(e) {
            e.preventDefault();
            $(this).toggleClass("active");
        });

$(".sidebar-lk__btn").click(function(e) {
            e.preventDefault();
            if ($(".sidebar-lk__item:not('.active')").is(":hidden")) {
            $(".sidebar-lk__item:not('.active')").slideDown(200);
        } else {
           $(".sidebar-lk__item:not('.active')").slideUp(200);
        }
        });

$(".catalog-nav-btn").click(function(e) {
            e.preventDefault();
            if ($(".nav-catalog li:not('.active')").is(":hidden")) {
            $(".nav-catalog li:not('.active')").slideDown(200);
        } else {
           $(".nav-catalog li:not('.active')").slideUp(200);
        }
        });

$(".btn-main_sidebar").click(function(e) {
            e.preventDefault();
            $(this).toggleClass("active");
             $(".sidebar-catalog").slideToggle(200);
              if ($(".btn-main_sidebar").hasClass("active")) {
           $(".btn-main_sidebar span").html("Свернуть подробный фильтр");
        } else {
         $(".btn-main_sidebar span").html("Открыть подробный фильтр");
        }
        });

/*image profile*/
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.image-profile__pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".image-profile__input").on('change', function(){
        readURL(this);
        var filename = $(this).val().replace(/.*\\/, "");
        if( $('.image-profile__pic').attr('src') != ''){

        }else {
            $(".image-profile").addClass("active");
        }
    });
	//слайдер

	$('.slider-wrap').each(function(){
		var $this = $(this),
		$blockArrows = $('.controls-arrows', $this),
		$blockDots = $('.controls-dots', $this),
		$slick = $('.slider-products', $this);
		$slick.slick({
			dots: true,
			arrows: true,
			slidesToShow: 4,
			touchThreshold: 1000,
			slidesToScroll: 1,
			appendArrows: $blockArrows,
			appendDots: $blockDots,
			responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow:2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 749,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
		});
	});

	  var $slider = $('.magazine_block_slider');
    $slider.each(function () {
        var speed = $(this).data('speed');
        $(this).slick({
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            fade: true,
            autoplaySpeed: speed,
            speed: 1000,
            responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow:2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 749,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
        });
    })

    $('.index_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        arrows: true,
        prevArrow: '.my_prev',
        nextArrow: '.my_next',
        responsive: [{
            breakpoint: 931,
            settings: {
                arrow: false,
                prevArrow: '',
                nextArrow: '',
            }
        }]
    });

    $('.slider-offer-lk').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });

    $('.slider-banner').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });

    $(".section-card .slider-card-for").not('.slick-initialized').slick({
          infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.section-card .slider-card-nav',
    });

      $(".section-card .slider-card-nav").not('.slick-initialized').slick({
          infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        vertical: true,
  focusOnSelect: true,
        asNavFor: '.section-card .slider-card-for',
         responsive: [
         {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
         {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
               vertical: false,
            }
        }
        ]
    });

    
$('.type-checks li a').click(function(event) {
        event.preventDefault();
    });
    $('.tabs-type__pane:first').show();
    $('.type-checks li').click(function(event) {
        $(this).parent().find("li").removeClass('active');
        $(this).addClass('active');
        $(".tabs-type__pane").hide();
        var selectTab = $(this).find('a').attr("href");
        $(selectTab).fadeIn();
    });

    $('.tabs-main li a').click(function(event) {
        event.preventDefault();
    });
    $('.tabs-container__pane:first').show();
    $('.tabs-main li').click(function(event) {
        $(this).parent().find("li").removeClass('active');
        $(this).addClass('active');
        $(".tabs-container__pane").hide();
        var selectTab2 = $(this).find('a').attr("href");
        $(selectTab2).fadeIn();
    });

    $('.tabs-lk li a').click(function(event) {
        event.preventDefault();
    });
    $('.tabs-container-lk__pane:first').addClass("active");
    $('.tabs-lk li').click(function(event) {
        $(this).parent().find("li").removeClass('active');
        $(this).addClass('active');
        $(".tabs-container-lk__pane").removeClass('active');
        var selectTab2 = $(this).find('a').attr("href");
        $(selectTab2).addClass("active");
    });

    $('.tabs-lk-icon').click(function(event) {
        event.preventDefault();
         $(this).parent().find("li").slideDown(200); 
        
    });

 $('.tabs-lk li a').click(function() {
         $(this).parent().siblings().slideUp(200);
    });

    $('.type-catalog li a').click(function(event) {
        event.preventDefault();
         $(this).parent().toggleClass("active");
    });

     $('.btn-estimate').click(function(event) {
        event.preventDefault();
        $(this).parent().find(".btn-estimate").removeClass("active");     
         if ($(this).hasClass("active")) {
             $(this).removeClass("active");
        } else {
              $(this).addClass("active");
        }
    });


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	

/*номерация слайдов*/
var $status = $('.counter-slider');
    var $slickElement = $('.slider-look-modal');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span>' + i + '</span>' + '/' + slick.slideCount);
    });
	$slickElement.not('.slick-initialized').slick({
		  infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        asNavFor: '.slider-nav-modal',
         responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }]
    });

    $(".slider-nav-modal").not('.slick-initialized').slick({
		  infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
  focusOnSelect: true,
        asNavFor: '.slider-look-modal',
    });

     $(".modal-wrap .slider-card-for").not('.slick-initialized').slick({
		  infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.modal-wrap .slider-card-nav',
    });

      $(".modal-wrap .slider-card-nav").not('.slick-initialized').slick({
		  infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        vertical: true,
  focusOnSelect: true,
        asNavFor: '.modal-wrap .slider-card-for',
         responsive: [{
            breakpoint: 992,
            settings: {
            	slidesToShow: 3,
               vertical: false,
            }
        }]
    });

      $('.slider-card-brands').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });


       $('.slider-modal-wrapper').each(function(){
        var $this2 = $(this),
        $blockArrows2 = $('.controls-arrows', $this2),
        $blockDots2 = $('.controls-dots', $this2),
        $slick2 = $('.slider-modal-actions', $this2);
        $slick2.not('.slick-initialized').slick({
               infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
            appendArrows: $blockArrows2,
            appendDots: $blockDots2,
        });
    });

        $('.slider-banner').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });


$(".fancybox").fancybox({
		afterShow : function(){
			$('.slider-look-modal').slick('setPosition');
			$(".slider-nav-modal").slick('setPosition');
			$(".slider-card-for").slick('setPosition');
			$(".slider-card-nav").slick('setPosition');
			$(".slider-card-brands").slick('setPosition');
            $(".slider-banner").slick('setPosition');
		},
		beforeShow : function(){
			$(".modal-wrap .slider-card-for").slick('setPosition');
			$(".modal-wrap .slider-card-nav").slick('setPosition');
		}
	});




$(".fancybox-right").fancybox({
     beforeShow : function(){
 $(".fancybox-wrap").addClass("fancy-right");
 $(".slider-modal-actions").slick('setPosition');
}
    });

$('.link-action').click(function(event) {
        event.preventDefault();
        $.fancybox.close();
    });

$('.item-dropdown__name').click(function(event) {
        event.preventDefault();
       
         $(this).parent().toggleClass("active");
          $(this).siblings(".item-dropdown__child").slideToggle(200);
    });



$('.btn-yellow_action').click(function(event) {
        event.preventDefault();
        $(".item-action-modal.active").next(".item-action-modal").addClass("active");
    });

    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

	objectFitImages()

});
    $('.dropdown-scroll').jScrollPane({
         autoReinitialise: true
    });
$(window).on('load', function(){

    $('.total-list').jScrollPane();

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();