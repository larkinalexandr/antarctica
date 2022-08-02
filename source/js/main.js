import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.header__nav-button');
  const menuItem = document.querySelectorAll('.header__nav-list a');
  const headerMenuWrapper = document.querySelector('.header__menu-wrapper');
  const map = document.querySelector('.contacts__map');

  if (window.localStorage) {
    const elements = document.querySelectorAll('[name]');

    for (let i = 0; i < elements.length; i++) {
      (function (element) {
        const name = element.getAttribute('name');

        element.value = localStorage.getItem(name) || element.value;

        element.onkeyup = function () {
          localStorage.setItem(name, element.value);
        };
      })(elements[i]);
    }
  }

  // close mobile-menu
  const closeMenu = () => {
    header.classList.remove('is-opened');
    header.classList.add('is-closed');
    document.body.style.overflow = 'visible';
  };

  // open mobile-menu
  const openMenu = () => {
    header.classList.remove('is-closed');
    header.classList.add('is-opened');
    document.body.style.overflow = 'hidden';
  };

  if (headerMenuWrapper) {
    headerMenuWrapper.addEventListener('click', (evt) => {
      if (evt.target === headerMenuWrapper) {
        closeMenu();
      }
    });
  }

  if (menuItem.length > 0) {
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].addEventListener('click', () => {
        closeMenu();
      });
    }
  }

  if (header) {
    header.classList.remove('no-js');
    header.classList.remove('is-opened');
    header.classList.add('is-closed');
  }

  if (map) {
    map.classList.remove('no-js');
  }

  if (menuButton && header) {
    menuButton.addEventListener('click', () => {
      if (header.classList.contains('is-closed')) {
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
