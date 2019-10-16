LazyLoad=function(a){function b(b,c){var d,e=a.createElement(b);for(d in c)c.hasOwnProperty(d)&&e.setAttribute(d,c[d]);return e}function c(a){var b,c,d=k[a];d&&(b=d.callback,c=d.urls,c.shift(),l=0,!c.length&&(b&&b.call(d.context,d.obj),k[a]=null,m[a].length&&e(a)))}function d(){var b=navigator.userAgent;h={async:!0===a.createElement("script").async},(h.webkit=/AppleWebKit\//.test(b))||(h.ie=/MSIE|Trident/.test(b))||(h.opera=/Opera/.test(b))||(h.gecko=/Gecko\//.test(b))||(h.unknown=!0)}function e(e,l,n,o,q){var r,s,t,u,v,w,x=function(){c(e)},y="css"===e,z=[];if(h||d(),l)if(l="string"==typeof l?[l]:l.concat(),y||h.async||h.gecko||h.opera)m[e].push({urls:l,callback:n,obj:o,context:q});else for(r=0,s=l.length;r<s;++r)m[e].push({urls:[l[r]],callback:r===s-1?n:null,obj:o,context:q});if(!k[e]&&(u=k[e]=m[e].shift())){for(j||(j=a.head||a.getElementsByTagName("head")[0]),v=u.urls.concat(),(r=0,s=v.length);r<s;++r)w=v[r],y?t=h.gecko?b("style"):b("link",{href:w,rel:"stylesheet"}):(t=b("script",{src:w}),t.async=!1),t.className="lazyload",t.setAttribute("charset","utf-8"),h.ie&&!y&&"onreadystatechange"in t&&!("draggable"in t)?t.onreadystatechange=function(){/loaded|complete/.test(t.readyState)&&(t.onreadystatechange=null,x())}:y&&(h.gecko||h.webkit)?h.webkit?(u.urls[r]=t.href,g()):(t.innerHTML="@import \""+w+"\";",f(t)):t.onload=t.onerror=x,z.push(t);for(r=0,s=z.length;r<s;++r)j.appendChild(z[r])}}function f(a){var b;try{b=!!a.sheet.cssRules}catch(d){return l+=1,void(200>l?setTimeout(function(){f(a)},50):b&&c("css"))}c("css")}function g(){var a,b=k.css;if(b){for(a=n.length;0<=--a;)if(n[a].href===b.urls[0]){c("css");break}l+=1,b&&(200>l?setTimeout(g,50):c("css"))}}var h,j,k={},l=0,m={css:[],js:[]},n=a.styleSheets;return{css:function(a,b,c,d){e("css",a,b,c,d)},js:function(a,b,c,d){e("js",a,b,c,d)}}}(this.document);

/**
 * Lazyload scripts
 */

// WOW
if ($('.wow')) {
  LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js', function() {
    new WOW().init()
  });
}

// Animate
LazyLoad.css('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');

// Lazyload
if ($('img.lazy')) {
  LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/12.0.3/lazyload.min.js', function() {
    lazyLoad();
  });
}

// Owl-carousel
if ($('.owl-carousel').length) {
  LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', function() {
    initDefaultSlider();
  });
  LazyLoad.css('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
}

// Slick
if ($('.slider').length) {
  LazyLoad.js(
      ['https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
        'https://rawgit.com/kimmobrunfeldt/progressbar.js/master/dist/progressbar.js'
      ], function() {
    initMainSlider();
    initInfoSlider();
  });
  LazyLoad.css('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css');
}

// Dotdotdot
LazyLoad.js('https://cdnjs.cloudflare.com/ajax/libs/jQuery.dotdotdot/4.0.10/dotdotdot.js', function() {
  initTitleDots();
})

/**
 * Client scripts
 */

// Common scripts

$('a[href*="#"]').click(function() {
  var scroll_el = $(this).attr('href')
  if ($(scroll_el).length != 0) {
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000)
  }
  return false
})

function initTitleDots() {
  $('.event-top-card__text').dotdotdot({
    height: 40
  })

  $('.index-about__paragraph').dotdotdot({
    height: 60
  })

  $('.service-item__description').dotdotdot({
    height: 60
  })

  $('.event-promo-card__description').dotdotdot({
    height: 24
  })

  $('.news-item__title').dotdotdot({
    height: 48
  })

  $('.news-item__description').dotdotdot({
    height: 40
  })
}

// Other scripts

function slowShowBody() {
  $('body').removeClass('loading')
}

function lazyLoadBackgroundImage() {
  var images = $('.background-lazy')

  images.each(function() {
    if (typeof $(this).attr('style') == 'undefined') {
      if ($(window).scrollTop() + $(window).height() >= $(this)[0].getBoundingClientRect().top) {
        $(this).attr('style', $(this).attr('data-lazy-image'))
      }
    }
  })

  $(window).on('scroll', function() {
    images.each(function() {
      if (typeof $(this).attr('style') == 'undefined') {
        if ($(window).scrollTop() + $(window).height() >= $(this)[0].getBoundingClientRect().top) {
          $(this).attr('style', $(this).attr('data-lazy-image'))
        }
      }
    })
  })

}

function lazyLoad() {
  var lazyLazy = new LazyLoad({
    elements_selector: ".lazy",
  });
}

function fixHeader() {
  if ($(window).width > 960) {
    var header = $('.header'),
        staticHeaderMenuItems = $('.header__complicated .common-menu__item'),
        headerLight = $('.header__light'),
        headerLightMenu = $('.header__light .common-menu')

    $(window).on('scroll', function() {
      var windowScrollTop = $(window).scrollTop()

      if (windowScrollTop >= 200) {
        headerLight.css('border-color', 'rgba(12, 154, 221, .4)')
        headerLightMenu.css('display', 'flex')
      } else {
        headerLight.css('border-color', 'transparent')
        headerLightMenu.css('display', 'none')
      }

      if (windowScrollTop >= 690) {
        header.addClass('header_fixed')
        staticHeaderMenuItems.removeClass('common-menu__item_active')
      } else {
        header.removeClass('header_fixed')
      }
    });
  }
}

function showHeaderDropdownMenu() {
  var staticHeaderMenuItems = $('.header__complicated .common-menu__item')

  staticHeaderMenuItems.on('click', function() {
    staticHeaderMenuItems.removeClass('common-menu__item_active')
    staticHeaderMenuItems.eq($(this).index()).addClass('common-menu__item_active')
  })
}

function fixSidebar() {
  var sidebar = $('.sidebar')

  if (sidebar.length) {
    var headerLight = $('.header__light'),
        mainRow = $('.main-row'),
        sidebarOffsetTop = sidebar.offset().top,
        sidebarStaticOffset = 120

    if (mainRow.height() > 1200) {
      $(window).on('scroll', function() {
        var windowScrollTop = $(window).scrollTop()

        if (windowScrollTop <= sidebarOffsetTop) {
          sidebar.removeClass('sidebar_fixed')
        }

        if (sidebar[0].getBoundingClientRect().top <= (headerLight[0].clientHeight + sidebarStaticOffset - 40)) {
          sidebar.addClass('sidebar_fixed')
        }

        if (sidebar[0].getBoundingClientRect().top >= 110) {
          sidebar.removeClass('sidebar_fixed-bottom')
        }

        if ((sidebar.offset().top + sidebar[0].clientHeight) >= ($(document).height() - $('.footer')[0].clientHeight - sidebarStaticOffset - 44)) {
          sidebar.addClass('sidebar_fixed-bottom')
        }
      })
    } else {
      sidebar.addClass('sidebar_static')
    }
  }
}

function setBackgroundImage(selector) {
  var visibleImg = selector.find('.slick-active .slider__img')
  visibleImg.attr('style', visibleImg.attr('data-lazy-image'))
}

function initMainSlider() {
  var jsMainSlider = $('.js-main-slider')

  if (jsMainSlider.length) {
    jsMainSlider.on('init', function(event, slick) {
      var counterCurrentSelector = slick.$slider.closest('.main-slider').find('.slider-controls__counter-current'),
          counterAllSelector = slick.$slider.closest('.main-slider').find('.slider-controls__counter-all')

      counterCurrentSelector.text('0' + (slick.currentSlide + 1))
      counterAllSelector.text('0' + slick.slideCount)

      setBackgroundImage(jsMainSlider)
    })

    var mainSlider = jsMainSlider.slick({
      infinite: false,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      prevArrow: $('.main-slider .slider-controls__btn_prev'),
      nextArrow: $('.main-slider .slider-controls__btn_next'),
      asNavFor: '.js-main-slider-dots'
    })

    var bar = new ProgressBar.Line('.main-slider .slider-controls__progress', {
      easing: 'linear',
      duration: 5000,
      color: '#0C9ADD',
      svgStyle: { width: '100%', height: '1px' }
    })

    bar.animate(1)

    mainSlider.on('afterChange', function(event, slick) {
      var counterCurrentSelector = slick.$slider.closest('.main-slider').find('.slider-controls__counter-current')
      counterCurrentSelector.text('0' + (slick.currentSlide + 1))

      if (slick.currentSlide !== slick.slideCount - 1) {
        bar.set(0)
        bar.animate(1)
      } else {
        bar.set(0)
        bar.stop()
      }

      setBackgroundImage(jsMainSlider)
    })

    $('.js-main-slider-dots').slick({
      infinite: false,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.js-main-slider',
      focusOnSelect: true
    })
  }
}

function initInfoSlider() {
  var jsInfoSlider = $('.js-info-slider')

  if (jsInfoSlider.length) {
    jsInfoSlider.on('init', function(event, slick) {
      var counterCurrentSelector = slick.$slider.closest('.info-slider').find('.slider-controls__counter-current'),
          counterAllSelector = slick.$slider.closest('.info-slider').find('.slider-controls__counter-all')

      counterCurrentSelector.text('0' + (slick.currentSlide + 1))
      counterAllSelector.text('0' + slick.slideCount)

      setBackgroundImage(jsInfoSlider)
    })

    var infoSlider = jsInfoSlider.slick({
      infinite: false,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      prevArrow: $('.info-slider .slider-controls__btn_prev'),
      nextArrow: $('.info-slider .slider-controls__btn_next'),
      asNavFor: '.js-info-values-slider'
    })

    var bar = new ProgressBar.Line('.info-slider .slider-controls__progress', {
      easing: 'linear',
      duration: 5000,
      color: '#0C9ADD',
      svgStyle: { width: '100%', height: '1px' }
    })

    bar.animate(1)

    infoSlider.on('afterChange', function(event, slick) {
      var counterCurrentSelector = slick.$slider.closest('.info-slider').find('.slider-controls__counter-current')
      counterCurrentSelector.text('0' + (slick.currentSlide + 1))

      if (slick.currentSlide !== slick.slideCount - 1) {
        bar.set(0)
        bar.animate(1)
      } else {
        bar.set(0)
        bar.stop()
      }

      setBackgroundImage(jsInfoSlider)
    })

    $('.js-info-values-slider').slick({
      infinite: false,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      asNavFor: '.js-info-slider',
      focusOnSelect: true
    })
  }
}

function initDefaultSlider() {
  function calcCurrentIndex(e, number) {
    return Math.round((Math.ceil((e.item.index + number) / e.page.size)) + 0.26)
  }

  function calcAllIndex(e) {
    return Math.round(Math.ceil((e.item.count / e.page.size)) + 0.26)
  }

  var defaultSlider = $('.default-slider')

  defaultSlider.each(function() {
    var itemsMargin = parseInt($(this).attr('data-margin')),
        itemsLengthDefault = parseInt($(this).attr('data-items-default')),
        itemsLength0 = parseInt($(this).attr('data-items-0')),
        itemsLength576 = parseInt($(this).attr('data-items-576')),
        itemsLength768 = parseInt($(this).attr('data-items-768')),
        itemsLength992 = parseInt($(this).attr('data-items-992')),
        itemsLength1366 = parseInt($(this).attr('data-items-1366'))

    $(this).owlCarousel({
      loop: false,
      margin: itemsMargin,
      items: itemsLengthDefault,
      nav: true,
      dots: false,
      touchDrag: false,
      lazyLoad: true,
      onInitialized: function(e) {
        var slider = $(this)[0].$element,
            defaultSliderAllIndex = slider.closest('.default-slider-wrapper').find('.default-slider-wrapper__counter-all'),
            defaultSliderCurrentIndex = slider.closest('.default-slider-wrapper').find('.default-slider-wrapper__counter-current'),
            number = calcAllIndex(e)

        if (number < 10) {
          defaultSliderAllIndex.text('0' + number)
        } else {
          defaultSliderAllIndex.text('' + number)
        }

        var itemsLength = $(this)[0].$element.find('.owl-item').length,
            counterWrapper = $(this)[0].$element.closest('.default-slider-wrapper').find('.default-slider-wrapper__controls')

        if ($(window).outerWidth() >= 1366) {
          if (itemsLength <= itemsLength1366) {
            counterWrapper.hide()
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, itemsLength1366)
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number)
            } else {
              defaultSliderCurrentIndex.text('' + number)
            }
          })
        } else if ($(window).outerWidth() <= 576) {
          if (itemsLength === itemsLength0) {
            counterWrapper.hide()
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, itemsLength0)
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number)
            } else {
              defaultSliderCurrentIndex.text('' + number)
            }
          })
        } else if ($(window).outerWidth() <= 768) {
          if (itemsLength <= itemsLength576) {
            counterWrapper.hide()
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, itemsLength576)
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number)
            } else {
              defaultSliderCurrentIndex.text('' + number)
            }
          })
        } else if ($(window).outerWidth() <= 992) {
          if (itemsLength <= itemsLength768) {
            counterWrapper.hide()
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, itemsLength768)
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number)
            } else {
              defaultSliderCurrentIndex.text('' + number)
            }
          })
        } else if ($(window).outerWidth() <= 1365) {
          if (itemsLength <= itemsLength992) {
            counterWrapper.hide()
          }

          slider.on('changed.owl.carousel', function(e) {
            var number = calcCurrentIndex(e, itemsLength992)
            if (number < 10) {
              defaultSliderCurrentIndex.text('0' + number)
            } else {
              defaultSliderCurrentIndex.text('' + number)
            }
          })
        }

        function isImageInVisibleArea() {
          $(e.target).find('.owl-item.active [data-src]:not(.loaded)').each(function(i, v) {
            if (typeof $(this).attr('style') == 'undefined') {
              if ($(window).scrollTop() + $(window).height() >= $(this)[0].getBoundingClientRect().top) {
                $(v).addClass('loaded').css('background-image', 'url(' + $(v).attr('data-src') + ')')
              }
            }
          })
        }

        isImageInVisibleArea()

        $(window).on('scroll', function() {
          isImageInVisibleArea()
        })

        slider.on('translated.owl.carousel', function(e) {
          $(e.target).find('.owl-item.active [data-src]:not(.loaded)').each(function(i, v) {
            $(v).addClass('loaded').css('background-image', 'url(' + $(v).attr('data-src') + ')')
          })
        })
      },
      slideBy: 1,
      smartSpeed: 500,
      navContainer: $(this).closest('.default-slider-wrapper').find('.default-slider-wrapper__btns'),
      navText: [$(this).closest('.default-slider-wrapper').find('.slider-controls__btn_prev'), $(this).closest('.default-slider-wrapper').find('.slider-controls__btn_next')],
      responsiveClass: true,
      responsive: {
        0: {
          items: itemsLength0
        },
        576: {
          items: itemsLength576
        },
        768: {
          items: itemsLength768
        },
        992: {
          items: itemsLength992
        },
        1366: {
          items: itemsLength1366
        }
      }
    })
  })
}

function initCalendar() {
  if ($('#schedule').length) {
    scheduler.templates.tooltip_date_format = scheduler.date.date_to_str('%Y-%m-%d %H:%i')
    scheduler.config.readonly = true

    scheduler.init('schedule', new Date(), 'month')

    scheduler.templates.event_class = function(start, end, event) {
      var css = ''

      if (event.evType) {
        css += 'event_' + getLabel(evType, event.evType).toLowerCase()
      }

      return css
    }

    function getLabel(array, key) {
      for (var i = 0; i < array.length; i++) {
        if (key == array[i].key)
          return array[i].label
      }
      return null
    }

    var evType = [
      { key: 1, label: 'type_1' },
      { key: 2, label: 'type_2' },
      { key: 3, label: 'type_3' }
    ]

    scheduler.parse([
      { start_date: '2019-10-08', end_date: '2019-10-09', text: 'Событие 1', evType: 1 },
      { start_date: '2019-10-08', end_date: '2019-10-09', text: 'Событие следующее', evType: 1 },
      { start_date: '2019-10-08', end_date: '2019-10-09', text: 'Событие следующее', evType: 1 },
      { start_date: '2019-10-08', end_date: '2019-10-15', text: 'Событие 2', evType: 2 },
      { start_date: '2019-10-08', end_date: '2019-10-09', text: 'Событие 1', evType: 3 },
      { start_date: '2019-10-09', end_date: '2019-10-09', text: 'Событие 3', evType: 3 }
    ])
  }
}

function initTypesFilter() {
  $('.event-tabs__item').on('click', function() {
    $('.event-tabs__item').removeClass('event-tabs__item_active')
    $(this).addClass('event-tabs__item_active')

    var activeIndex = $(this).index()

    if (activeIndex === 0) {
      $('.event_type_1, .event_type_2, .event_type_3').css('opacity', '1')
    } else if (activeIndex === 1) {
      $('.event_type_2, .event_type_3').css('opacity', '0')
      $('.event_type_1').css('opacity', '1')
    } else if (activeIndex === 2) {
      $('.event_type_1, .event_type_3').css('opacity', '0')
      $('.event_type_2').css('opacity', '1')
    } else if (activeIndex === 3) {
      $('.event_type_1, .event_type_2').css('opacity', '0')
      $('.event_type_3').css('opacity', '1')
    }
  })
}

function yearsList() {
  $('.years-list__item-title').on('click', function() {
    $('.years-list__item').removeClass('years-list__item_active')
    $(this).closest('.years-list__item').addClass('years-list__item_active')
  })
}

function initInputStates() {
  var inputs = document.querySelectorAll('.default-form__input'),
      inputsPlaceholder = document.querySelectorAll('.default-form__input-placeholder')

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value != '') {
      inputsPlaceholder[i].classList.add('default-form__input-placeholder_active')
    }
  }

  for (var i = 0; i < inputs.length; i++) {
    (function(n) {
      inputs[n].addEventListener('focus', function() {
        if (!this.readOnly) {
          inputsPlaceholder[n].classList.add('default-form__input-placeholder_active')
        }
      })

      inputs[n].addEventListener('blur', function() {
        if (inputs[n].value != '') {
          inputsPlaceholder[n].classList.add('default-form__input-placeholder_active')
        } else {
          inputsPlaceholder[n].classList.remove('default-form__input-placeholder_active')
        }
      })

      inputsPlaceholder[n].addEventListener('click', function() {
        this.classList.add('default-form__input-placeholder_active')
        inputs[n].focus()
      })
    })(i)
  }
}

$(document).ready(function() {
  slowShowBody();
  lazyLoadBackgroundImage();
  fixHeader();
  showHeaderDropdownMenu();
  fixSidebar();
  initCalendar();
  initTypesFilter();
  yearsList();
  initInputStates();
});
