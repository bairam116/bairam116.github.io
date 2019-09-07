$(document).ready(function() {
  new WOW().init();
});

window.onload = function() {

  if (document.querySelector('.icon_twitter')) {
    let iconTwitterHover = new Image(),
      iconYoutubeHover = new Image(),
      iconTelegramHover = new Image(),
      iconFacebookHover = new Image();

    iconTwitterHover.src = '../img/icons/icon_twitter_hover.svg';
    iconYoutubeHover.src = '../img/icons/icon_youtube_hover.svg';
    iconTelegramHover.src = '../img/icons/icon_telegram_hover.svg';
    iconFacebookHover.src = '../img/icons/icon_facebook_hover.svg';
  }



  if (document.querySelector('.menu-btn')) {

    let menuBtn = document.querySelector('.menu-btn'),
        hiddenMainMenu = document.querySelector('.hidden-main-menu');

    menuBtn.addEventListener('click', function() {
      if (menuBtn.classList.contains('menu-btn_active')) {
        this.classList.remove('menu-btn_active');
        hiddenMainMenu.classList.remove('hidden-main-menu_active');
      } else {
        this.classList.add('menu-btn_active');
        hiddenMainMenu.classList.add('hidden-main-menu_active');
      }
    });
  }



  if (document.querySelector('feedback-form')) {
    let inputWidth = document.querySelector('.feedback-form__input').clientWidth,
        selectMenu = document.querySelector('.ui-menu');

    selectMenu.style.width = inputWidth + 'px';
  }



  if (document.querySelector('.ico-tabs')) {
    let icoTabs = document.querySelectorAll('.ico-tab'),
        tabsContent = document.querySelectorAll('.tab-content');

    for (let i = 0; i < icoTabs.length; i++) (function(n) {
      icoTabs[n].addEventListener('click', function() {
        clearIcoTabsActive();
        this.classList.add('ico-tab_active');
        clearTabsContentActive();
        tabsContent[n].classList.add('tab-content_active');
      });
    })(i);

    function clearIcoTabsActive() {
      for (let i = 0; i < icoTabs.length; i++) {
        icoTabs[i].classList.remove('ico-tab_active');
      }
    }

    function clearTabsContentActive() {
      for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('tab-content_active');
      }
    }
  }

}
