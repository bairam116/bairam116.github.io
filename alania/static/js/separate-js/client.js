var sliderPrevBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10"><g><g><path fill="#252525" d="M4.98 0L0 5l4.98 5 .917-.92L2.48 5.65H14v-1.3H2.48L5.897.92z"/></g></g></svg>',
  sliderNextBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10"><g><g><path fill="#252525" d="M9.02 0L14 5l-4.98 5-.917-.92 3.417-3.43H0v-1.3h11.52L8.103.92z"/></g></g></svg>';

// Проверка на тач устройства
function isTouchDevice() {
  var isTouchDevice = false;

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isTouchDevice = true;
  }

  return isTouchDevice;
}

// Инициализация WOW
function initWOW() {
  new WOW().init();
}

// Инициализация Яндекс Карты
function yandexMapInit(coords, imgSrc) {
  if ($('#map').length) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
          center: coords,
          zoom: 15,
          controls: ['zoomControl']
        }, {
          searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(coords, {}, {
          iconLayout: 'default#image',
          iconImageHref: imgSrc,
          iconImageSize: [46, 60],
          iconImageOffset: [-5, -38]
        });

      myMap.behaviors.disable("scrollZoom");

      myMap.geoObjects.add(myPlacemark);
    });
  }
}

// Обрезание текста
function clippingText() {
  $('.news-item__title').dotdotdot({
    height: 80
  });
}

// Инициализация главного слайдера
function initIndexSlider() {
  $('.main-slider').owlCarousel({
    loop: false,
    margin: 24,
    items: 1,
    dots: true,
    nav: true,
    navContainer: '#main-slider-nav',
    navText: [sliderPrevBtn, sliderNextBtn],
    dotsContainer: '#main-slider-dots',
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
      1920: {
        dots: true,
      },
      992: {
        dots: true
      },
      0: {
        margin: 0,
        dots: false
      }
    }
  });
}

// Инициализация слайдера с фото
function initPhotoSlider() {
  $('.photo-slider').owlCarousel({
    loop: false,
    margin: 24,
    items: 2,
    dots: false,
    nav: true,
    navContainer: '#photo-slider-nav',
    navText: [sliderPrevBtn, sliderNextBtn],
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
      1920: {
        items: 2
      },
      769: {
        items: 2
      },
      768: {
        items: 1
      },
      576: {
        items: 1
      },
      0: {
        items: 1
      }
    }
  });
}

// Инициализация слайдера табов
function initTabsSlider() {
  $('.price-block-tabs').owlCarousel({
    loop: false,
    margin: 55,
    items: 6,
    dots: false,
    nav: false,
    autoWidth: true,
    mouseDrag: true,
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
      1920: {
        items: 6,
        margin: 55,
      },
      1280: {
        margin: 55,
      },
      1279: {
        margin: 32,
      },
      992: {
        margin: 32
      },
      768: {
        items: 4
      }
    }
  });

  $('.price-block-content').owlCarousel({
    loop: false,
    margin: 24,
    items: 4,
    dots: false,
    nav: true,
    navText: [sliderPrevBtn, sliderNextBtn],
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
      1920: {
        items: 4
      },
      768: {
        items: 4
      },
      576: {
        items: 2
      },
      0: {
        items: 2,
        margin: 8
      }
    }
  });
}

// Переключение табов
function toggleTabs() {
  let priceTabItems = document.querySelectorAll('.price-block-tabs__item'),
      priceTabContents = document.querySelectorAll('.price-block-content');

  for (var i = 0 ; i < priceTabItems.length; i++) (function(n) {
    priceTabItems[n].addEventListener('click', function() {
      for (var j = 0; j < priceTabItems.length; j++) {
        priceTabItems[j].classList.remove('price-block-tabs__item_active');
        priceTabContents[j].classList.remove('price-block-content_active');
      }
      priceTabItems[n].classList.add('price-block-tabs__item_active');
      priceTabContents[n].classList.add('price-block-content_active');
    });
  })(i);
}

// Состояния инпутов
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
        inputsPlaceholder[n].classList.add('default-form__input-placeholder_active');
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
}

// Состояния textarea
function initTextareaStates() {
  var textareas = document.querySelectorAll('.default-form__textarea'),
    textareasPlaceholder = document.querySelectorAll('.default-form__textarea-placeholder');

  for (var i = 0; i < textareas.length; i++) {
    if (textareas[i].value != '') {
      textareasPlaceholder[i].classList.add('default-form__textarea-placeholder_active');
    }
  }

  for (var i = 0; i < textareas.length; i++) {
    (function(n) {
      textareas[n].addEventListener('focus', function() {
        textareasPlaceholder[n].classList.add('default-form__textarea-placeholder_active');
      });

      textareas[n].addEventListener('blur', function() {
        if (textareas[n].value != '') {
          textareasPlaceholder[n].classList.add('default-form__textarea-placeholder_active');
        } else {
          textareasPlaceholder[n].classList.remove('default-form__textarea-placeholder_active');
        }
      });
    })(i);
  }
}

// Маска телефона
function initPhoneMask() {
  $('input[type="tel"]').mask('+7 (999) 999-99-99', {
    clearIfNotMatch: true
  });
}

// Инициализация Fancybox
function initFancybox() {
  $('.single-image').fancybox({
    clickContent: false,
    buttons: [
      'close'
    ],
    clickContent: function(current, event) {
      return current.type === "image" ? "zoom" : false;
    }
  });
}

// Анимация чисел
function animateNumbers() {
  if (document.querySelector('.numbers-animate')) {
    var target_block = $('.numbers-animate');
    var blockStatus = true;

    var num1 = $('.numbers-grid__value_1').data('value'),
      num2 = $('.numbers-grid__value_2').data('value'),
      num3 = $('.numbers-grid__value_3').data('value'),
      num4 = $('.numbers-grid__value_4').data('value');

    var target = $(target_block),
      targetPos = target.offset().top,
      winHeight = $(window).height(),
      scrollToElem = targetPos - winHeight;

    $(window).scroll(function () {
      var winScrollTop = $(this).scrollTop();
      if (winScrollTop > scrollToElem + 200) {
        var scrollEvent = true;
      }

      if (scrollEvent && blockStatus) {
        blockStatus = false;
        $({numberValue: 0}).animate({numberValue: parseInt(num1)}, {
          duration: 3000,
          easing: 'linear',
          step: function (val) {
            $('.numbers-grid__value_1').html(Math.ceil(val));
          }
        });
        $({numberValue: 0}).animate({numberValue: parseInt(num2)}, {
          duration: 3000,
          easing: 'linear',
          step: function (val) {
            $('.numbers-grid__value_2').html(Math.ceil(val));
          }
        });
        $({numberValue: 0}).animate({numberValue: parseInt(num3)}, {
          duration: 3000,
          easing: 'linear',
          step: function (val) {
            $('.numbers-grid__value_3').html(Math.ceil(val));
          }
        });
        $({numberValue: 0}).animate({numberValue: parseInt(num4)}, {
          duration: 3000,
          easing: 'linear',
          step: function (val) {
            $('.numbers-grid__value_4').html(Math.ceil(val));
          }
        });
      }
    });
  }
}

// Фиксированная высота для блока
function setFormImportantHeight() {
  var mainFormHeight = $('.main-form').height(),
    callbackRowHeight = $('.callback-row').height();

  $('.main-form').height(mainFormHeight);
  $('.callback-row').height(callbackRowHeight);
}

// Выбор рейтинга
function chooseRating() {
  if ($('.form-block__rating').length) {
    var ratingItems = document.querySelectorAll('.form-block__rating-item');

    for (var i = 0; i < ratingItems.length; i++) (function(n) {
      ratingItems[n].addEventListener('click', function() {
        for (var h = 0; h < ratingItems.length; h++) {
          ratingItems[h].classList.remove('form-block__rating-item_active');
        }

        for (var j = 0; j <= n; j++) {
          ratingItems[j].classList.add('form-block__rating-item_active');
        }
      });
    })(i);
  }
}

// Общий скролл к элементам
$('body').on( 'click', '.js-scroller', function(e) {
  e.preventDefault();
  let el = $(this);
  let dest = el.attr('href');
  if(dest !== undefined && dest !== '') {
    $('html, body').animate({
        scrollTop: $(dest).offset().top
      }, 1000
    );
  }
  return false;
});

// Уникальный скролл к форме на странице отзывов
$('body').on( 'click', '.js-scroller-unique', function(e) {
  e.preventDefault();
  let el = $(this);
  let dest = el.attr('href');
  if(dest !== undefined && dest !== '') {
    $('html, body').animate({
        scrollTop: $(dest).offset().top - 77 // fixed header height
      }, 1000
    );
  }
  return false;
});

// Фиксирование шапки при скролле на один экран + 300px
var windowVisibleHeight = $(window).height();

$(window).on('scroll', function(e) {
  if ($(window).scrollTop() > windowVisibleHeight + 300) {
    $('.header').addClass('header_fixed');
  } else {
    $('.header').removeClass('header_fixed');
  }
});

// Открытие мегаменю
$('body').on('click', '.js-menu-toggle', function() {
  if ($(this).hasClass('header__menu-btn_active')) {
    scrollLock.enablePageScroll();
    $(this).removeClass('header__menu-btn_active');
    $('.header').removeClass('header_active');
    setTimeout(function() {
      $('.megamenu').removeClass('megamenu_active');
    }, 750);
    $('body').removeClass('overflow-hidden');
  } else {
    scrollLock.disablePageScroll();
    $(this).addClass('header__menu-btn_active');
    $('.header').addClass('header_active');
    setTimeout(function() {
      $('.megamenu').addClass('megamenu_active');
    }, 500);
    $('body').addClass('overflow-hidden');
  }
});

// Просмотр ответа на вопрос
$('body').on('click', '.js-open-faq-answer', function() {
  if ($(this).hasClass('question-item_active')) {
    $(this).removeClass('question-item_active');
    $(this).find('.question-item__btn-text').text('+');
  } else {
    $(this).addClass('question-item_active');
    $(this).find('.question-item__btn-text').text('-');
  }
});

// Просмотр ответа на отзыв
$('body').on('click', '.js-open-review-answer', function() {
  let parentClass = $(this).parent().parent();
  parentClass.toggleClass('review-item_active');

  if (parentClass.hasClass('review-item_active')) {
    $(this).find('.question-item__btn-text').text('-');
  } else {
    $(this).find('.question-item__btn-text').text('+');
  }
});

// Закрытие успешного сообщения маленькой формы
$('body').on('click', '.js-success-content-small-close', function() {
  $('.callback-row').removeClass('callback-row_success');
});

// Закрытие успешного сообщения большой формы
$('body').on('click', '.js-success-content-big-close', function() {
  $('.main-form').removeClass('main-form_success');
});

// Открытие попапа обратного звонка
$('body').on('click', '.js-callback-popup-open', function(e) {
  e.preventDefault();
  $('body').addClass('overflow-hidden');
  $('.popup-wrapper_callback').addClass('popup-wrapper_active');
});

// Открытие попапов
$('body').on('click', '.js-popup-close', function(e) {
  e.preventDefault();
  $('body').removeClass('overflow-hidden');
  $('.popup-wrapper').removeClass('popup-wrapper_active');
  $('.popup__inner').removeClass('popup__inner_success');
});

// Вызов успешного сообщения в попапе
function showModalSuccessMessage() {
  $('.popup-wrapper .callback-form').on('submit', function(e) {
    e.preventDefault();
    $(this).closest('.popup__inner').addClass('popup__inner_success');
  });
}

showModalSuccessMessage();

// Скролл наверх страницы с подвала
$('body').on('click', '.footer__scroller-btn', function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});

// Инициализация формы в несколько шагов
function initFormFunctional() {
  var slides = $('.step-form__slide').length - 1, // индекс с 0
      currentIndex = 0, // индекс с 0
      progressBarWidth = 100 / (slides + 1),
      progressBarItem = $('.step-form__progress-bar-item'),
      counterCurrent = $('.step-form__counter-current'),
      counterAll = $('.step-form__counter-all'),
      hiddenTexts = $('.step-form-wrapper__woman-hidden-text'),
      hiddenTitles = $('.step-form__hidden-title'),
      stepFormSlide = $('.step-form__slide');

  stepFormSlide.each(function (indx) {
    if($(this).hasClass('step-form__slide_active')){
      currentIndex = indx;
    }
  });
  // Установка начальных значений счетчика
  counterCurrent.text('01');
  counterAll.text('0' + (slides + 1));

  progressBarItem.css('width', progressBarWidth * (currentIndex + 1) + '%');
  counterCurrent.text('0' + (currentIndex + 1));
  $('.step-form-wrapper__woman-text').text(hiddenTexts.eq(currentIndex).text());
  $('.step-form__title').text(hiddenTitles.eq(currentIndex).text());



  // Изменение progress бара и текущего индекса
  function setProgressValues() {
    progressBarItem.css('width', progressBarWidth * (currentIndex + 1) + '%');
    counterCurrent.text('0' + (currentIndex + 1));
  }

  // Клик по кнопке "Назад"
  $('body').on('click','.step-form__btn_prev', function(e) {
    e.preventDefault();

    if (currentIndex === 0) {
      currentIndex = 0;
    } else {
      currentIndex--;
      setProgressValues();
    }

    stepFormSlide.removeClass('step-form__slide_active');
    stepFormSlide.eq(currentIndex).addClass('step-form__slide_active');

    $('.step-form-wrapper__woman-text').text(hiddenTexts.eq(currentIndex).text());
    $('.step-form__title').text(hiddenTitles.eq(currentIndex).text());
  });

  // Клик по кнопке "Далее"
  $('body').on('click','.step-form__btn_next', function(e) {
    e.preventDefault();

    if (currentIndex === slides) {
      currentIndex = slides;
    } else {
      currentIndex++;
      setProgressValues();

      if (currentIndex === slides) {
        $('.step-form__bottom-row').css('display', 'none');
      }
    }

    stepFormSlide.removeClass('step-form__slide_active');
    stepFormSlide.eq(currentIndex).addClass('step-form__slide_active');

    $('.step-form-wrapper__woman-text').text(hiddenTexts.eq(currentIndex).text());
    $('.step-form__title').text(hiddenTitles.eq(currentIndex).text());
  });

  $('body').on('click','.step-form__grid-item', function() {
    $(this).parent().find('.step-form__grid-item_active').removeClass('step-form__grid-item_active');
    $(this).addClass('step-form__grid-item_active');
  });

  $('body').on('click','.step-form__checkbox-item', function() {
    $(this).addClass('step-form__checkbox-item_active');
  });
}

// Закрытие сообщения об успешной отправке формы в несколько шагов
$('body').on('click', '.js-step-form-success-close', function() {
  $('.step-form-wrapper').removeClass('step-form-wrapper_success');
});

// Инициализация слайдера отзывов
if ($('.reviews-slider__item').length == 1) {
  $('.reviews-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 500,
    mouseDrag: false,
    touchDrag: false
  });
} else {
  $('.reviews-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 500
  });
}

// Инициализация слайдера лицензий
if ($('.license-photo-slider__item').length == 1) {
  $('.license-photo-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 500,
    mouseDrag: false,
    touchDrag: false
  });
} else {
  $('.license-photo-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 500
  });
}

$(document).ready(function() {
  initWOW();
  clippingText();
  initIndexSlider();
  initPhotoSlider();
  initTabsSlider();
  toggleTabs();
  initInputStates();
  initTextareaStates();
  initPhoneMask();
  initFancybox();
  animateNumbers();
  chooseRating();
  initFormFunctional();
});

$(window).on('load', function() {
  setFormImportantHeight();
});
