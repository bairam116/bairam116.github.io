/**
 * LazyLoad (Not remove) !!!
 */

LazyLoad=function(a){function b(b,c){var d,e=a.createElement(b);for(d in c)c.hasOwnProperty(d)&&e.setAttribute(d,c[d]);return e}function c(a){var b,c,d=k[a];d&&(b=d.callback,c=d.urls,c.shift(),l=0,!c.length&&(b&&b.call(d.context,d.obj),k[a]=null,m[a].length&&e(a)))}function d(){var b=navigator.userAgent;h={async:!0===a.createElement("script").async},(h.webkit=/AppleWebKit\//.test(b))||(h.ie=/MSIE|Trident/.test(b))||(h.opera=/Opera/.test(b))||(h.gecko=/Gecko\//.test(b))||(h.unknown=!0)}function e(e,l,n,o,q){var r,s,t,u,v,w,x=function(){c(e)},y="css"===e,z=[];if(h||d(),l)if(l="string"==typeof l?[l]:l.concat(),y||h.async||h.gecko||h.opera)m[e].push({urls:l,callback:n,obj:o,context:q});else for(r=0,s=l.length;r<s;++r)m[e].push({urls:[l[r]],callback:r===s-1?n:null,obj:o,context:q});if(!k[e]&&(u=k[e]=m[e].shift())){for(j||(j=a.head||a.getElementsByTagName("head")[0]),v=u.urls.concat(),(r=0,s=v.length);r<s;++r)w=v[r],y?t=h.gecko?b("style"):b("link",{href:w,rel:"stylesheet"}):(t=b("script",{src:w}),t.async=!1),t.className="lazyload",t.setAttribute("charset","utf-8"),h.ie&&!y&&"onreadystatechange"in t&&!("draggable"in t)?t.onreadystatechange=function(){/loaded|complete/.test(t.readyState)&&(t.onreadystatechange=null,x())}:y&&(h.gecko||h.webkit)?h.webkit?(u.urls[r]=t.href,g()):(t.innerHTML="@import \""+w+"\";",f(t)):t.onload=t.onerror=x,z.push(t);for(r=0,s=z.length;r<s;++r)j.appendChild(z[r])}}function f(a){var b;try{b=!!a.sheet.cssRules}catch(d){return l+=1,void(200>l?setTimeout(function(){f(a)},50):b&&c("css"))}c("css")}function g(){var a,b=k.css;if(b){for(a=n.length;0<=--a;)if(n[a].href===b.urls[0]){c("css");break}l+=1,b&&(200>l?setTimeout(g,50):c("css"))}}var h,j,k={},l=0,m={css:[],js:[]},n=a.styleSheets;return{css:function(a,b,c,d){e("css",a,b,c,d)},js:function(a,b,c,d){e("js",a,b,c,d)}}}(this.document);

if ($('.wow')) {
  LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js', function() {
    new WOW().init()
  });
}

LazyLoad.css('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');

if ($('.owl-carousel').length) {
  LazyLoad.js([
    'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js'
  ], function() {
    if ($('.default-slider').length) {
      initDefaultSlider();
    }

    if ($('.goodbook-promo-slider').length) {
      initIndexGoodbookSlider();
    }

    if ($('.item-card-page-slider').length) {
      initItemCardPageSlider();
    }

    if ($('.more-info-tabs-slider').length) {
      initMoreInfoTabsSlider();
    }

    if ($('.shop-photos-slider').length) {
      initShopPhotosSlider();
    }

    if ($('.review-photo-slider').length) {
      initReviewPhotoSlider();
    }
  });
  LazyLoad.css([
    'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css'
  ]);
}

if ($('.slider').length) {
  LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js', function() {
    initQuestionsSlider();
  });
  LazyLoad.css('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css');
}

if ($('.nice-select').length) {
  LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js', function() {
    initNiceSelect();
    niceSelectedSelectedColor();
  });
  LazyLoad.css('https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css');
}

LazyLoad.js('https://cdn.jsdelivr.net/npm/scroll-lock@2.1.2/dist/scroll-lock.min.js');

LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/jQuery.dotdotdot/4.0.10/dotdotdot.js', function() {
  initTitleDots();
});

if ($('input[type="tel"]').length) {
  LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js', function() {
    initPhoneMask();
  });
}

if ($('.js-range-slider').length) {
  LazyLoad.css('https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.0/css/ion.rangeSlider.min.css');
}

if ($('.datepicker').length) {
  LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.3/flatpickr.min.js', function() {
    initDatepicker();
  });
  LazyLoad.css('https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.3/flatpickr.min.css');
}

function isTouchDevice() {
  var isTouchDevice = false;

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isTouchDevice = true;
  }

  return isTouchDevice;
}

// Фиксирование блока соц. сетей
function fixedSocialBlock() {
  var windowWidth = $(window).width(),
    bottomOffset = 72,
    socialBlock = $('.social-block');

  if (windowWidth <= 1366) {
    bottomOffset = 56;
  }

  $(document).on('scroll', function() {
    var difference = ($(window).scrollTop() + $(window).height()) - ($(document).height() - bottomOffset);

    if (($(window).scrollTop() + $(window).height()) >= ($(document).height() - bottomOffset)) {
      socialBlock.css({
        'bottom': difference,
      });
    } else {
      socialBlock.css({
        'bottom': 0,
      });
    }
  });
}

// Открытие мегаменю
function openMegamenu() {
  $('body').on('click', '.js-megamenu-open', function() {
    scrollLock.disablePageScroll();
    $('.actions-menu__item_active').removeClass('actions-menu__item_active');
    $('.megamenu-wrapper-close-btn').addClass('megamenu-wrapper-close-btn_active');
    $('.megamenu-wrapper').addClass('megamenu-wrapper_active');

    $('.megamenu-wrapper__img-tile_active').attr('style', $('.megamenu-wrapper__img-tile_active').attr('data-lazy-background-image'));
  });
}

// Закрытие мегаменю
function closeMegamenu() {
  $('body').on('click', '.js-megamenu-close', function() {
    scrollLock.enablePageScroll();
    $('.megamenu-wrapper-close-btn').removeClass('megamenu-wrapper-close-btn_active');
    $('.megamenu-wrapper').removeClass('megamenu-wrapper_active');
  });
}

$('.megamenu-mobile__dd-row').on('click', function() {
  var itemParent = $(this).parent(),
    isElActive = itemParent.hasClass('megamenu-mobile__dd-item_active');

  $('.megamenu-mobile__dd-item').removeClass('megamenu-mobile__dd-item_active');

  if (isElActive) {
    itemParent.removeClass('megamenu-mobile__dd-item_active');
  } else {
    itemParent.addClass('megamenu-mobile__dd-item_active');
  }
});

// Отключение перехода в ЛК на устройствах с touch'ом
function disableLkMenuItem() {
  if ($(window).width() <= 992) {
    $('.actions-menu__link_lk').on('click', function(e) {
      e.preventDefault();
      if ($(this).parent().hasClass('actions-menu__item_active')) {
        $(this).parent().toggleClass('actions-menu__item_active');
      } else {
        $(this).parent().addClass('actions-menu__item_active');
      }
    });
  }

  if ($(window).width() <= 576) {
    $('.actions-menu__link_lk').on('click', function(e) {
      e.preventDefault();

      if ($('.megamenu-wrapper').hasClass('megamenu-wrapper_active')) {
        scrollLock.enablePageScroll();
        $('.megamenu-wrapper-close-btn').removeClass('megamenu-wrapper-close-btn_active');
        $('.megamenu-wrapper').removeClass('megamenu-wrapper_active');
      }
    });
  }
}

// Открытие модального окна
function openPopup() {
  $('body').on('click', '.js-popup-open', function(e) {
    e.preventDefault();
    if ($('.popup-wrapper_active').length) {
      scrollLock.enablePageScroll();
      $('.popup-wrapper').removeClass('popup-wrapper_active');
    }
    scrollLock.disablePageScroll();
    $($(this).attr('data-popup-class')).addClass('popup-wrapper_active');
  });
}

// Закрытие модального окна
function closePopup() {
  $('body').on('click', '.js-popup-close', function(e) {
    e.preventDefault();
    scrollLock.enablePageScroll();
    $('.popup-wrapper').removeClass('popup-wrapper_active');
  });
}

// Открытие фильтра
function openFilter() {
  $('body').on('click', '.js-filter-open', function() {
    scrollLock.disablePageScroll();
    $('.main').addClass('main_active');
    $('.filter-form').addClass('filter-form_active');
  });
}

// Закрытие фильтра
function closeFilter() {
  $('body').on('click', '.js-filter-close', function() {
    scrollLock.enablePageScroll();
    $('.main').removeClass('main_active');
    $('.filter-form').removeClass('filter-form_active');
  });
}

// Фиксирование левого меню
function fixedLkLeftMenu() {
  var CONST_OFFSET = 0;

  if ($('.content-nav').length) {
    var header = $('.header'),
        contentNav = $('.content-nav'),
        contentNavColumnLeft = $('.content-nav__column_left');

    $(window).on('scroll', function() {
      var menuOffsetTop = contentNav.offset().top - $(window).scrollTop(),
          containerOffset = contentNav.offset().top + contentNav.height(),
          columnOffset = contentNavColumnLeft.offset().top + contentNavColumnLeft.height() + header.height() + 1;

      if (menuOffsetTop < header.height()) {
        contentNavColumnLeft.addClass('content-nav__column_fixed');

        if (columnOffset >= containerOffset + 1) {
          contentNavColumnLeft.addClass('content-nav__column_fixed-bottom');
          CONST_OFFSET = contentNavColumnLeft.offset().top;
        }

        if (CONST_OFFSET > ($(window).scrollTop() + $('.header').height())) {
          contentNavColumnLeft.removeClass('content-nav__column_fixed-bottom');
        }
      } else {
        contentNavColumnLeft.removeClass('content-nav__column_fixed');
      }
    });
  }
}

// Табы
function initTabs() {
  $('body').on('click', '.tabs__item', function() {
    var $tabsContent = $('.tabs-content');
    $('.tabs__item').removeClass('tabs__item_active');
    $tabsContent.removeClass('tabs-content_active');
    $(this).addClass('tabs__item_active');
    $tabsContent.eq($(this).index()).addClass('tabs-content_active');
  });
}

// Табы в слайдере
function initSliderTabs() {
  $('body').on('click', '.slider-tabs .owl-item', function() {
    var $tabsContent = $('.tabs-content');
    $('.slider-tabs .owl-item:first-of-type').addClass('slider-tabs__item_active');
    $('.owl-item').removeClass('slider-tabs__item_active');
    $tabsContent.removeClass('tabs-content_active');
    $(this).addClass('slider-tabs__item_active');
    $tabsContent.eq($(this).index()).addClass('tabs-content_active');
  });

  $('body').on('click', '.slider-tabs .slick-slide', function() {
    var $tabsContent = $('.tabs-content');
    $('.slider-tabs .slick-slide:first-of-type').addClass('slider-tabs__item_active');
    $('.slick-slide').removeClass('slider-tabs__item_active');
    $tabsContent.removeClass('tabs-content_active');
    $(this).addClass('slider-tabs__item_active');
    $tabsContent.eq($(this).index()).addClass('tabs-content_active');
  });
}

// Открытие выпадающего списка
function openTopNavDropdown() {
  var hasDropdown = !!$('.top-nav-option__dd-btn').length;

  if ($(window).width() <= 991) {
    $('body').on('click', '.top-nav-option__dd-btn', function() {
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('top-nav-option__dd-btn_active');
    });

    if (hasDropdown) {
      $('body').on('click', '.top-nav-option__title', function() {
        $('body').toggleClass('overflow-hidden');
        $('.top-nav-option__dd-btn').toggleClass('top-nav-option__dd-btn_active');
      });
    }
  } else {
    $('body').on('click', '.top-nav-option__dd-btn', function() {
      $(this).toggleClass('top-nav-option__dd-btn_active');
    });

    if (hasDropdown) {
      $('body').on('click', '.top-nav-option__title', function() {
        $('.top-nav-option__dd-btn').toggleClass('top-nav-option__dd-btn_active');
      });
    }
  }
}

// Открытие выпадающего списка в ЛК
function openTopNavDropdownLk() {
  if ($(window).width() <= 991) {
    $('body').on('click', '.js-lk-menu-open, .js-lk-menu-open + .top-nav-option__title', function() {
      $('body').toggleClass('overflow-hidden');
      $('.top-nav-option__hidden-arrow').toggleClass('top-nav-option__hidden-arrow_active');
      $('.content-nav__column_lk').toggleClass('content-nav__column_lk_active');
    });
  }
}

// Spinner количества товаров
function spinnerAmount() {
  if ($('.amount-toggle').length) {
    if ($('.amount-toggle__count').attr('data-max')) {
      var inputs = document.querySelectorAll('.amount-toggle__count'),
          inputsDecrBtn = document.querySelectorAll('.amount-toggle__btn_decr'),
          inputsIncrBtn = document.querySelectorAll('.amount-toggle__btn_incr');

      for (var i = 0; i < inputs.length; i++) {
        var maxLength = inputs[i].getAttribute('data-max').length;

        inputs[i].setAttribute('maxlength', maxLength);
      }

      for (var j = 0; j < inputs.length; j++) (function(n) {
        inputs[n].addEventListener('focus', function() {
          var currentValue = this.value,
              maxValue = this.getAttribute('data-max');

          this.oninput = function(e) {
            var tempValue = parseInt(e.target.value);

            if (tempValue > maxValue) {
              this.value = currentValue;
            }
          }

          this.onblur = function(e) {
            var tempValue = parseInt(e.target.value);

            if (isNaN(tempValue)) {
              this.value = 1;
            }
          }
        });

        inputsDecrBtn[n].addEventListener('click', function() {
          var currentInput = this.closest('.amount-toggle').querySelector('.amount-toggle__count'),
              currentValue = parseInt(currentInput.value);

          if (currentValue > 1) {
            currentInput.value = currentValue - 1;
            $(currentInput).trigger('change');
          }
        });

        inputsIncrBtn[n].addEventListener('click', function() {
          var currentInput = this.closest('.amount-toggle').querySelector('.amount-toggle__count'),
              currentValue = parseInt(currentInput.value),
              tempCurrentValue = currentValue,
              maxValue = parseInt(currentInput.getAttribute('data-max'));

          if (++tempCurrentValue <= maxValue) {
            currentInput.value = currentValue + 1;
            $(currentInput).trigger('change');
          }
        });
      })(j);
    }
  }
}

// Открытие списка заказов на мобилке
function openSelectedItems() {
  if ($(window).width() <= 992) {
    $('.order-wrapper__selected-items-title').on('click', function() {
      $('.order-wrapper__selected-items').toggleClass('order-wrapper__selected-items_active');
    });
  }
}

var sliderPrevBtn = '<svg xmlns="http://www.w3.org/2000/svg", width="34", height="10", viewBox="0 0 34 10"><g><g><g><path fill="none", stroke="#54402c", stroke-miterlimit="50", d="M34 5H2"/></g><g><path fill="none", stroke="#54402c", stroke-linecap="square", stroke-miterlimit="50", d="M6 1L2 5"/></g><g><path fill="none", stroke="#54402c", stroke-linecap="square", stroke-miterlimit="50", d="M6 9L2 5"/></g></g></g></svg>',
  sliderNextBtn = '<svg xmlns="http://www.w3.org/2000/svg", width="33", height="10", viewBox="0 0 33 10"><g><g><g><path fill="none", stroke="#54402c", stroke-miterlimit="50", d="M0 5h32"/></g><g><path fill="none", stroke="#54402c", stroke-linecap="square", stroke-miterlimit="50", d="M28 1l4 4"/></g><g><path fill="none", stroke="#54402c", stroke-linecap="square", stroke-miterlimit="50", d="M28 9l4-4"/></g></g></g></svg>';

// Goodbook слайдер на главной
function initIndexGoodbookSlider() {
  $('.goodbook-promo-slider').owlCarousel({
    loop: false,
    margin: 0,
    items: 1,
    lazyLoad: true,
    nav: true,
    dots: false,
    smartSpeed: 500,
    navText: [sliderPrevBtn, sliderNextBtn],
    mouseDrag: false
  });
}

function calcCurrentIndex(e, number) {
  return Math.round((Math.ceil((e.item.index + number) / e.page.size)) + 0.26);
}

function calcAllIndex(e) {
  return Math.round(Math.ceil((e.item.count / e.page.size)) + 0.26);
}

// Слайдеров товаров
function initDefaultSlider() {
  var defaultSlider = $('.default-slider');

  defaultSlider.each(function() {
    $(this).owlCarousel({
      loop: false,
      margin: 0,
      items: 4,
      lazyLoad: true,
      nav: true,
      dots: false,
      onInitialized: function(e) {
        var slider = $(this)[0].$element,
          defaultSliderAllIndex = slider.closest('.default-slider-wrapper').find('.default-slider-wrapper__counter-all'),
          defaultSliderCurrentIndex = slider.closest('.default-slider-wrapper').find('.default-slider-wrapper__counter-current'),
          number = calcAllIndex(e);

        if (number < 10) {
          defaultSliderAllIndex.text('0' + number);
        } else {
          defaultSliderAllIndex.text('' + number);
        }

        var itemsLength = $(this)[0].$element.find('.owl-item').length,
          counterWrapper = $(this)[0].$element.closest('.default-slider-wrapper').find('.default-slider-wrapper__controls');

        if ($(window).outerWidth() >= 1600) {
          if (itemsLength <= 4) {
            counterWrapper.hide();
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, 4);
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number);
            } else {
              defaultSliderCurrentIndex.text('' + number);
            }
          });
        } else if ($(window).outerWidth() <= 576) {
          if (itemsLength === 1) {
            counterWrapper.hide();
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, 1);
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number);
            } else {
              defaultSliderCurrentIndex.text('' + number);
            }
          });
        } else if ($(window).outerWidth() <= 992) {
          if (itemsLength <= 2) {
            counterWrapper.hide();
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, 2);
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number);
            } else {
              defaultSliderCurrentIndex.text('' + number);
            }
          });
        } else if ($(window).outerWidth() <= 1599) {
          if (itemsLength <= 3) {
            counterWrapper.hide();
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, 3);
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number);
            } else {
              defaultSliderCurrentIndex.text('' + number);
            }
          });
        }

        // disable scroll
        slider.on('drag.owl.carousel', function(event) {
          document.ontouchmove = function(e) {
            e.preventDefault()
          }
        });

        // enable scroll
        slider.on('dragged.owl.carousel', function(event) {
          document.ontouchmove = function(e) {
            return true
          }
        });

        function lazyLoad() {
          var sliderOffsetTop = slider[0].getBoundingClientRect().top;

          if ($(window).scrollTop() + $(window).height() >= sliderOffsetTop) {
            var activeSlideLazyImg = slider.find('.owl-item.active .swiper-slide:first-of-type .swiper-lazy');

            if (activeSlideLazyImg.length) {
              activeSlideLazyImg.each(function () {
                if ($(this)[0].hasAttribute('src')) {
                } else {
                  $(this).attr('src', $(this).attr('data-src'));

                  $(this).one('load', function () {
                    $(this).closest('.swiper-slide').find('.lazy-preloader').addClass('lazy-preloader_hidden');
                  });
                }
              });
            }
          }
        }

        lazyLoad();

        $(window).on('scroll', lazyLoad);

        slider.on('translated.owl.carousel', function() {
          lazyLoad();
        });
      },
      slideBy: 4,
      smartSpeed: 500,
      navContainer: $(this).closest('.default-slider-wrapper').find('.default-slider-wrapper__btns'),
      navText: [sliderPrevBtn, sliderNextBtn],
      responsiveClass: true,
      responsive: {
        1600: {
          items: 4,
          slideBy: 4
        },
        993: {
          items: 3,
          slideBy: 3
        },
        992: {
          items: 2,
          slideBy: 2
        },
        769: {
          items: 2,
          slideBy: 2
        },
        768: {
          items: 2,
          slideBy: 2
        },
        577: {
          items: 2,
          slideBy: 2
        },
        576: {
          items: 1,
          slideBy: 1
        },
        0: {
          items: 1,
          slideBy: 1
        }
      }
    });
  });
}

function initLazyLoad() {
  if ($('.swiper-slide').length) {
    var activeSlideLazyImg = $('.item-card-grid .swiper-slide:first-of-type .swiper-lazy');

    activeSlideLazyImg.each(function() {
      $(this).attr('src', $(this).attr('data-src'));

      $(this).one('load', function() {
        $(this).closest('.swiper-slide').find('.lazy-preloader').addClass('lazy-preloader_hidden');
      });
    });
  }
}

// Слайдер картинок в карточке товара
function initItemPhotosSlider() {
  var isTouchDeviceResult = isTouchDevice();

  if (isTouchDeviceResult) {
    $('.swiper-slide_active').removeClass('swiper-slide_active');
    $('.item-card__slider-view-dots').hide();

    var imagesSwiper = new Swiper('.swiper-container', {
      loop: false,
      speed: 300,
      dots: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      watchOverflow: true,
      preloadImages: false,
      lazy: {
        loadOnTransitionStart: true
      }
    });
  } else {
    if (document.querySelector('.item-card')) {

      var itemCards = document.querySelectorAll('.item-card');

      if (document.documentElement.clientWidth > 992) {

        for (var i = 0; i < itemCards.length; i++) {
          (function(n) {
            itemCards[n].addEventListener('mouseenter', function() {
              var images = itemCards[n].querySelectorAll('.swiper-slide'),
                slides = itemCards[n].querySelectorAll('.item-card__nav-item'),
                dots = itemCards[n].querySelectorAll('.item-card__slider-dot');

              for (var j = 0; j < slides.length; j++) {
                (function(k) {
                  slides[k].addEventListener('mouseenter', function() {
                    for (var g = 0; g < slides.length; g++) {
                      images[g].classList.remove('swiper-slide_active');
                      slides[g].classList.remove('item-card__nav-item_active');
                      dots[g].classList.remove('item-card__slider-dot_active');
                    }

                    images[k].classList.add('swiper-slide_active');
                    slides[k].classList.add('item-card__nav-item_active');
                    dots[k].classList.add('item-card__slider-dot_active');

                    var img = images[k].querySelector('.swiper-lazy');

                    if (img.hasAttribute('data-src')) {
                      img.setAttribute('src', img.getAttribute('data-src'));

                      img.addEventListener('load', function() {
                        img.closest('.swiper-slide').querySelector('.lazy-preloader').classList.add('lazy-preloader_hidden');
                      });
                    }
                  });
                })(j);
              }
            });
          })(i);
        }

      } else {

        for (var i = 0; i < itemCards.length; i++) {
          (function(n) {
            itemCards[n].addEventListener('click', function() {
              var images = itemCards[n].querySelectorAll('.item-card__img'),
                slides = itemCards[n].querySelectorAll('.item-card__nav-item');

              for (var j = 0; j < slides.length; j++) {
                (function(k) {
                  slides[k].addEventListener('click', function() {
                    for (var g = 0; g < slides.length; g++) {
                      images[g].classList.remove('item-card__img_active');
                      slides[g].classList.remove('item-card__nav-item_active');
                    }

                    images[k].classList.add('item-card__img_active');
                    slides[k].classList.add('item-card__nav-item_active');
                  });
                })(j);
              }
            });
          })(i);
        }

      }

      for (var i = 0; i < itemCards.length; i++) {
        var slidesLength = itemCards[i].querySelectorAll('.swiper-slide').length;
        if (slidesLength <= 1) {
          itemCards[i].querySelector('.item-card__slider-view-dots').style.display = 'none';
        }
      }

    }
  }
}

// Слайдер вопросов
function initQuestionsSlider() {
  var questionTabsSlider = $('#question-tabs-slider');

  $('.variable-width').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('#question-tabs-slider .slick-slide:first-of-type').addClass('slider-tabs__item_active');
}

// Изменение заголовок в корзине
function changeCartTitle() {
  if ($(window).width() <= 576) {
    $('.lk-cart-row__text_1').text($('.lk-cart-row__text_1').data('title') + ':');
    $('.lk-cart-row__text_2').text($('.lk-cart-row__text_2').data('title') + ':');
  }
}

// Обрезание строки в карточке товара
function initTitleDots() {
  $('.item-card__name').dotdotdot({
    height: 48
  });

  $('.checked-item-card__name').dotdotdot({
    height: 40
  });

  $('.review-item__title').dotdotdot({
    height: 138
  });

  if ($(window).width() <= 576) {
    $('.review-item-unique__title').dotdotdot({
      height: 116
    });
  }

  $('.goodbook-promo-unique__title').dotdotdot({
    height: 250
  });

  $('.goodbook-promo-unique__title_small').dotdotdot({
    height: 72
  });

  $('.lk-item-card__name').dotdotdot({
    height: 60
  });

  $('.stock-item__title').dotdotdot({
    height: 120
  });

  $('.goodbook-promo__title').dotdotdot({
    height: 250
  });

  if ($(window).width() <= 576) {
    $('.goodbook-promo__title').dotdotdot({
      height: 120
    });

    $('.goodbook-promo-unique__title').dotdotdot({
      height: 120
    });

    $('.goodbook-promo-unique__title_small').dotdotdot({
      height: 70
    });
  }

  $('.index-about__paragraph').dotdotdot({
    height: 280
  });

  $('.order-item__name').dotdotdot({
    height: 50
  });
}

// Табы в мегаменю
$('.megamenu-wrapper__catalog-menu-item').on('mouseover', function() {
  $('.product-category-content').removeClass('product-category-content_active');
  $('.product-category-content').eq($(this).index()).addClass('product-category-content_active');
  $('.megamenu-wrapper__img-tile').removeClass('megamenu-wrapper__img-tile_active');
  $('.megamenu-wrapper__img-tile').eq($(this).index()).addClass('megamenu-wrapper__img-tile_active');
  $('.megamenu-wrapper__img-tile').eq($(this).index()).attr('style', $('.megamenu-wrapper__img-tile').eq($(this).index()).attr('data-lazy-background-image'));
});

// Focus/Blur полей ввода
function initInputStates() {
  var inputs = document.querySelectorAll('.default-form__input'),
    inputsPlaceholder = document.querySelectorAll('.default-form__input-placeholder');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value != '') {
      inputsPlaceholder[i].classList.add('default-form__input-placeholder_active');
    }
  }

  for (var i = 0; i < inputs.length; i++) {
    (function(n) {
      inputs[n].addEventListener('focus', function() {
        if (!this.readOnly) {
          inputsPlaceholder[n].classList.add('default-form__input-placeholder_active');
        }
      });

      inputs[n].addEventListener('blur', function() {
        if (inputs[n].value != '') {
          inputsPlaceholder[n].classList.add('default-form__input-placeholder_active');
        } else {
          inputsPlaceholder[n].classList.remove('default-form__input-placeholder_active');
        }
      });
    })(i);
  }

  $('.default-form__input-password-btn').on('click', function() {
    if ($(this).hasClass('default-form__input-password-btn_active')) {
      $(this).removeClass('default-form__input-password-btn_active');
      $(this).parent().find('input').attr('type', 'password');
    } else {
      $(this).addClass('default-form__input-password-btn_active');
      $(this).parent().find('input').attr('type', 'text');
    }
  });
}

// Проверка выбранной даты календаря
$('.date-input-wrapper__input').on('change', function() {
  $(this).parent().find('.date-input-wrapper__input-placeholder').addClass('date-input-wrapper__input-placeholder_active');
});

// Инициализация маски номера телефона
function initPhoneMask() {
  $('input[type="tel"]').mask('+7(999)999-99-99', {
    clearIfNotMatch: true
  });
}

// Инициализация календаря
function initDatepicker() {
  $('.datepicker').flatpickr({
    'locale': 'ru',
    'dateFormat': 'd.m.Y',
    'maxDate': 'today'
  });
}

// Валидация формы авторизации
function validateAuthForm() {
  if ($('.auth-form').length) {
    $('.auth-form').validate({
      errorPlacement: function(error, element) {
        return true;
      },
      rules: {
        password: {
          minlength: 6,
          maxlength: 255
        },
      }
    });
  }
}

// Валидация формы восстановления пароля
function validateRestorePasswordForm() {
  if ($('.restore-password-form').length) {
    $('.restore-password-form').validate({
      errorPlacement: function(error, element) {
        return true;
      }
    });
  }
}

// Валидация формы сообщения о доступности
function validateReportAvailableForm() {
  if ($('.report-available-form').length) {
    $('.report-available-form').validate({
      errorPlacement: function(error, element) {
        return true;
      }
    });
  }
}

// Валидация формы регистрации
function validateRegisterForm() {
  if ($('.register-form').length) {
    $('.register-form').validate({
      errorPlacement: function(error, element) {
        return true;
      },
      rules: {
        password: {
          minlength: 6,
          maxlength: 255
        },
        passwordRepeat: {
          minlength: 6,
          maxlength: 255
        },
      }
    });
  }
}

// Валидация формы подписки на рассылку
function validateMailingForm() {
  if ($('.mailing-form').length) {
    $('.mailing-form').validate({
      errorPlacement: function(error, element) {
        return true;
      }
    });
  }
}

// Валидация формы заказа
function validateOrderForm() {
  if ($('.order_add').length) {
    $('.order_add').validate({
      errorPlacement: function(error, element) {
        return true;
      },
      rules: {
        postcode: {
          minlength: 6,
          maxlength: 6
        }
      }
    });
  }
}

// Валидация формы персональных данных
function validatePersonalInfoForm() {
  if ($('.personal-info-form').length) {
    $('.personal-info-form').validate({
      errorPlacement: function(error, element) {
        return true;
      },
      rules: {
        password: {
          minlength: 6,
          maxlength: 255
        },
        passwordRepeat: {
          minlength: 6,
          maxlength: 255
        },
        postcode: {
          minlength: 6,
          maxlength: 6
        }
      }
    });
  }
}

// Валидация формы отправки сообщения
function validateMessageForm() {
  if ($('.message-form').length) {
    $('.message-form').validate({
      errorPlacement: function(error, element) {
        return true;
      }
    });
  }
}

// Выпадающие списки фильтра
function filterDropdownItems() {
  $('body').on('click', '.filter-item', function(e) {
    if ($(e.target).hasClass('filter-item__row')) {
      if ($(this).hasClass('filter-item_active')) {
        $(this).removeClass('filter-item_active');
      } else {
        $('.filter-item').removeClass('filter-item_active');
        $(this).addClass('filter-item_active');
      }
    }

    $('.top-nav-option__dd-btn').removeClass('top-nav-option__dd-btn_active');
  });

  $(document).on('mouseup', function(e) {
    var div = $('.filter-item');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.filter-item').removeClass('filter-item_active');
    }
  });
}

// Слайдер цен
function initPriceSlider(filterKey, filterMin, filterMax, filterFrom, filterTo) {
  var slider = $('.js-range-slider' + '.' + filterKey),
    $minPriceInt = $('.min-price' + '.' + filterKey),
    $maxPriceInt = $('.max-price' + '.' + filterKey);
  if (slider.length) {
    var $rangeSlider = slider;

    $rangeSlider.ionRangeSlider({
      'type': 'double',
      'min': filterMin,
      'max': filterMax,
      //'from_min': filterFrom,
      //'to_max': filterTo,
      'from': filterFrom,
      'to': filterTo,
      'hide_min_max': true,
      'hide_from_to': true
    });

    $rangeSlider.on('change', function () {
      var $inp = $(this),
        v = $inp.prop('value'),
        min = v.split(';')[0],
        max = v.split(';')[1];

      $minPriceInt.val(min).keyup();
      $maxPriceInt.val(max).keyup();
      $minPriceInt.attr('min', min);
      $maxPriceInt.attr('max', max);
    });

    var $dataRangeSlider = slider.data('ionRangeSlider');
    $minPriceInt.on('change', function () {
      $dataRangeSlider.update({
        from: $(this).val()
      });
    });
    $maxPriceInt.on('change', function () {
      $dataRangeSlider.update({
        to: $(this).val()
      });
    });
  }
}

// Селекты
function initNiceSelect() {
  $('select.nice-select').niceSelect();
}

// Цвет выбранного элемента niceSelect
function niceSelectedSelectedColor() {
  $('.nice-select .option').on('click', function() {
    $(this).parent().parent().find('.current').addClass('current_active');
  });
}

// Выпадающий список для меню в подвале
function initFooterDropdown() {
  var footerMenuBtns = document.querySelectorAll('.footer-menu-wrapper__column-btn'),
    footerMenuItems = document.querySelectorAll('.footer-menu-wrapper__menu-wrapper');

  for (var i = 0; i < footerMenuBtns.length; i++) {
    (function(n) {
      footerMenuBtns[n].addEventListener('click', function() {
        if (this.classList.contains('footer-menu-wrapper__column-btn_active')) {
          for (var j = 0; j < footerMenuItems.length; j++) {
            footerMenuBtns[j].classList.remove('footer-menu-wrapper__column-btn_active');
            footerMenuItems[j].classList.remove('footer-menu-wrapper__menu-wrapper_active');
          }

          this.classList.remove('footer-menu-wrapper__column-btn_active');
          footerMenuItems[n].classList.remove('footer-menu-wrapper__menu-wrapper_active');
        } else {
          for (var j = 0; j < footerMenuItems.length; j++) {
            footerMenuBtns[j].classList.remove('footer-menu-wrapper__column-btn_active');
            footerMenuItems[j].classList.remove('footer-menu-wrapper__menu-wrapper_active');
          }

          this.classList.add('footer-menu-wrapper__column-btn_active');
          footerMenuItems[n].classList.add('footer-menu-wrapper__menu-wrapper_active');
        }
      });
    })(i);
  }
}

// Форма оформления заказа
function orderFormFunctional() {
  var step = 1,
      tabs = $('.order-tabs__item'),
      form = $('.order_add'),
      html,
      total;

  tabs.on('click', function () {
    var elem = $(this),
        countError = 0;
    $('.order-tabs-content_active').find('input').each(function () {
      if (($(this).attr('required') === 'required' && $(this).val().length === 0) || $(this).attr('aria-invalid') === 'true') {
        countError++;
      }
    });
    if (countError === 0) {
      step = elem.index();
      tabs.removeClass('order-tabs__item_active');
      elem.addClass('order-tabs__item_active');
      $('.order-tabs-content_active').removeClass('order-tabs-content_active');
      $('.order-tabs-content').eq(step).addClass('order-tabs-content_active');
      step++;
      setOrderInfo();
    }
  });

  $('body').on('click', '.js-next-step-btn', function (e) {
    e.preventDefault();
    var elem = $(this),
        countError = 0;
    elem.closest('.order-tabs-content').find('input').each(function () {
      if (($(this).attr('required') === 'required' && $(this).val().length === 0) || $(this).attr('aria-invalid') === 'true') {
        $(this).addClass('error').attr('aria-invalid', true).valid();
        countError++;
      }
    });
    if (countError > 0) return false;

    $('.order-tabs__item_active').removeClass('order-tabs__item_active');
    tabs.eq(step).addClass('order-tabs__item_active');
    $('.order-tabs-content_active').removeClass('order-tabs-content_active');
    $('.order-tabs-content').eq(step).addClass('order-tabs-content_active');
    $([document.documentElement, document.body]).animate({
      scrollTop: $('.order-wrapper').offset().top - $('.header').height()
    }, 1000);
    step++;
    setOrderInfo();
  });
  //Информация о заказе на последнем шаге
  function setOrderInfo() {
    if(step === '3' || step === 3){
      form.find('ul.order-info').html('');
      var $data = {};
      form.find('input, textearea').each(function () {
        if ($(this).val() !== '') {
          if (typeof($(this).data('name')) !== 'undefined' && $(this).prop('type') !== 'radio' && !$(this).prop("checked")) {
            $data[$(this).data('name')] = $(this).val();
          }
          if (typeof($(this).data('value')) !== 'undefined' && $(this).prop('type') === 'radio' && $(this).prop("checked")) {
            $data[$(this).data('name')] = $(this).data('value');
          } else if (typeof($(this).data('value')) !== 'undefined' && $(this).prop('type') !== 'radio' && !$(this).prop("checked")) {
            $data[$(this).data('name')] = $(this).data('value');
          }
        }
      });
      $.each($data, function (index, value) {
        html = '<li class="order-info__item">' +
            '<span class="order-info__item-title">' + index + ':</span>' +
            '<span class="order-info__item-value">' + value + '</span>' +
            '</li>';
        form.find('ul.order-info').append(html);
      });
      total = '<li class="order-info__item order-wrapper__selected-items_visible-md"><span class="order-info__item-title">Итого к оплате:</span><span class="order-info__item-value">' + $('.all-sum-delivery').html() + '</span></li>';
      form.find('ul.order-info').append(total);
    }
  }
}

// Показать все теги
function showTags() {
  $('body').on('click', '.js-show-tags', function() {
    if ($('.tags-form__list').hasClass('tags-form__list_active')) {
      $(this).text('Все теги');
      $('.tags-form__list').removeClass('tags-form__list_active');
      if ($(window).width() <= 576) {
        $('html, body').animate({
            scrollTop: $('.tags').offset().top - $('.header').height()
          }, 1000
        );
      }
    } else {
      $('.tags-form__list').addClass('tags-form__list_active');
      $(this).text('Скрыть');
    }
  });
}

// Скрыть/Показать кнопку "Всех тегов"
function tagsBtnVisibility(isAjax = false, text = '') {
  if ($('.tags-form').length) {
    var tagItems = document.querySelectorAll('.tags-form__list-item'),
        firstItemOffset = tagItems[0].getBoundingClientRect().top;

    for (var i = 1; i < tagItems.length; i++) {
      if (tagItems[i].getBoundingClientRect().top > firstItemOffset) {
        document.querySelector('.tags-form__more-btn').style.display = 'block';
      }
    }
    if(isAjax === true && text === 'Скрыть'){
      $('.js-show-tags').click();
    }
  }
}

// Инициализация Fancybox
function initFancybox() {
  $('.fancybox-video-link').fancybox({
    helpers: {
      media: {}
    },
    afterShow: function() {
      scrollLock.disablePageScroll();
    },
    beforeClose: function() {
      scrollLock.enablePageScroll();
    }
  });

  $('.single-image').fancybox({
    clickContent: false,
    buttons: [
      'close'
    ],
    arrows: true,
    clickContent: function(current, event) {
      return current.type === 'image' ? 'zoom' : false;
    },
    beforeShow: function() {
      $('.fancybox-button--close').css('pointer-events', 'none');
    },
    afterShow: function() {
      scrollLock.disablePageScroll();
      $('.fancybox-button--close').css('pointer-events', 'unset');
    },
    beforeClose: function() {
      scrollLock.enablePageScroll();
    }
  });
}

// Инициализация слайдера фоток страницы карточки товара
function initItemCardPageSlider() {
  $('.item-card-page-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    dots: true,
    nav: true,
    lazyLoad: true,
    smartSpeed: 500,
    navText: [sliderPrevBtn, sliderNextBtn],
    responsiveClass: true,
    responsive: {
      1920: {
        dots: true
      },
      577: {
        dots: true
      },
      576: {
        dots: false
      },
      0: {
        dots: false
      }
    }
  });
}

// Инициализация слайдера табов информации карточки товара
function initMoreInfoTabsSlider() {
  $('.more-info-tabs-slider').owlCarousel({
    loop: false,
    items: 4,
    margin: 60,
    dots: false,
    nav: false,
    autoWidth: true,
    smartSpeed: 500,
    mouseDrag: false,
    responsiveClass: true,
    responsive: {
      1920: {
        items: 4,
        margin: 60
      },
      577: {
        items: 4,
        margin: 60
      },
      576: {
        margin: 24
      },
      320: {
        margin: 24
      },
      0: {
        items: 3,
        margin: 24
      }
    }
  });
}

// Табы информации карточки товара
function initMoreInfoTabs() {
  $('.more-info-tabs-slider .owl-item').on('click', function() {
    var moreInfoTabsItem = $('.more-info-tabs-slider__item'),
      moreInfoTabsContent = $('.more-info-tabs-content');

    moreInfoTabsItem.removeClass('more-info-tabs-slider__item_active');
    moreInfoTabsItem.eq($(this).index()).addClass('more-info-tabs-slider__item_active');

    moreInfoTabsContent.removeClass('more-info-tabs-content_active');
    moreInfoTabsContent.eq($(this).index()).addClass('more-info-tabs-content_active');
  });
}

// Динамическая вставка скрипта Яндекс Карты
function addYandexMapScript() {
  if ($('.map').length) {
    setTimeout(function() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;amp;amp;amp;apikey=&amp;amp;lt;37c93925-7cb4-4f3c-baa9-4311c8e1b882&amp;amp;gt;';
      document.getElementsByTagName('body')[0].appendChild(script);
    }, 2000);
  }
}

// Табы контактов
function contactsTabs() {
  $('body').on('click', '.contacts-tabs__list-item', function() {
    $('.contacts-tabs__list-item').removeClass('contacts-tabs__list-item_active');
    $(this).addClass('contacts-tabs__list-item_active');

    $('.contacts-tabs-content').removeClass('contacts-tabs-content_active');
    $('.contacts-tabs-content').eq($(this).index()).addClass('contacts-tabs-content_active');
  });
}

// Переключение карты и слайдера
function toggleMap() {
  $('body').on('click', '.js-toggle-map', function(e) {
    e.preventDefault();
    var parent = $(this).closest('.contacts-main'),
        columnRight = parent.find('.contacts-main__column_right');

    if (columnRight.hasClass('contacts-main__column_active')) {
      columnRight.removeClass('contacts-main__column_active');
      $(this).text('Посмотреть фото магазина');
    } else {
      columnRight.addClass('contacts-main__column_active');
      $(this).text('Посмотреть на карте');
    }

    if ($(window).width() <= 768) {
      $('html, body').animate({
          scrollTop: columnRight.offset().top - $('.header').height()
        }, 1000
      );
    }
  });
}

// Инициализация слайдера фотографий магазина
function initShopPhotosSlider() {
  $('.shop-photos-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    dots: false,
    nav: true,
    navText: [sliderPrevBtn, sliderNextBtn],
    smartSpeed: 500
  });
}

// Показ/Скрытие товаров в истории заказов
function toggleOrderHistoryItems() {
  var contentNavColumnLeft = $('.content-nav__column_left');

  $('body').on('click', '.js-order-history-more-btn', function() {
    if ($(this).hasClass('order-history-list__more-btn_active')) {
      $(this).removeClass('order-history-list__more-btn_active');
      setTimeout(function() {
        $(window).scroll();
      }, 300);
    } else {
      $(this).addClass('order-history-list__more-btn_active');
      //contentNavColumnLeft.removeClass('content-nav__column_fixed-bottom');
    }
    $(this).closest('.order-history-list__row').toggleClass('order-history-list__row_active');
  });
}

// Инициализация слайдера фотографий обзора
function initReviewPhotoSlider() {
  $('.review-photo-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    dots: false,
    nav: true,
    navText: [sliderPrevBtn, sliderNextBtn],
    smartSpeed: 500
  });
}

$(document).ready(function() {
  fixedSocialBlock();
  openMegamenu();
  closeMegamenu();
  disableLkMenuItem();
  openPopup();
  closePopup();
  openFilter();
  closeFilter();
  fixedLkLeftMenu();
  initTabs();
  initSliderTabs();
  openTopNavDropdown();
  openTopNavDropdownLk();
  spinnerAmount();
  openSelectedItems();
  initLazyLoad();
  initItemPhotosSlider();
  changeCartTitle();
  initInputStates();
  filterDropdownItems();
  initFooterDropdown();
  orderFormFunctional();
  showTags();
  tagsBtnVisibility();
  initFancybox();
  initMoreInfoTabs();
  contactsTabs();
  toggleMap();
  toggleOrderHistoryItems();
  validateAuthForm();
  validateRestorePasswordForm();
  validateReportAvailableForm();
  validateRegisterForm();
  validateMailingForm();
  validateOrderForm();
  validatePersonalInfoForm();
  validateMessageForm();
});

// Закрытие модального окна по клику на Escape
$(document).keyup(function(e) {
  if (e.key === 'Escape') {
    scrollLock.enablePageScroll();
    $('.popup-wrapper').removeClass('popup-wrapper_active');
  }
});
