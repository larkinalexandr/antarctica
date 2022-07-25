import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // const headerWrapper = document.querySelector('.header');
  // const menuButton = document.querySelector('.header__nav-button');
  // const menuItem = document.querySelectorAll('.header__nav-list a');
  // const headerMenuWrapper = document.querySelector('.header__menu-wrapper');
  // const map = document.querySelector('.contacts__map');

  // close mobile-menu
  const closeMenu = () => {
    headerWrapper.classList.remove('is-opened');
    headerWrapper.classList.add('is-closed');
    document.body.style.overflow = 'visible';
  };

  // open mobile-menu
  const openMenu = () => {
    headerWrapper.classList.remove('is-closed');
    headerWrapper.classList.add('is-opened');
    document.body.style.overflow = 'hidden';
  };

  headerMenuWrapper.addEventListener('click', (evt) => {
    if (evt.target === headerMenuWrapper) {
      closeMenu();
    }
  });

  if (menuItem.length > 0) {
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].addEventListener('click', () => {
        closeMenu();
      });
    }
  }

  if (headerWrapper) {
    headerWrapper.classList.remove('no-js');
    headerWrapper.classList.remove('is-opened');
    headerWrapper.classList.add('is-closed');
  }

  if (map) {
    map.classList.remove('no-js');
  }

  if (menuButton && headerWrapper) {
    menuButton.addEventListener('click', () => {
      if (headerWrapper.classList.contains('is-closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
