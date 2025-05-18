/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": () => (/* binding */ afterMain),
/* harmony export */   "afterRead": () => (/* binding */ afterRead),
/* harmony export */   "afterWrite": () => (/* binding */ afterWrite),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "basePlacements": () => (/* binding */ basePlacements),
/* harmony export */   "beforeMain": () => (/* binding */ beforeMain),
/* harmony export */   "beforeRead": () => (/* binding */ beforeRead),
/* harmony export */   "beforeWrite": () => (/* binding */ beforeWrite),
/* harmony export */   "bottom": () => (/* binding */ bottom),
/* harmony export */   "clippingParents": () => (/* binding */ clippingParents),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "left": () => (/* binding */ left),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "modifierPhases": () => (/* binding */ modifierPhases),
/* harmony export */   "placements": () => (/* binding */ placements),
/* harmony export */   "popper": () => (/* binding */ popper),
/* harmony export */   "read": () => (/* binding */ read),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "top": () => (/* binding */ top),
/* harmony export */   "variationPlacements": () => (/* binding */ variationPlacements),
/* harmony export */   "viewport": () => (/* binding */ viewport),
/* harmony export */   "write": () => (/* binding */ write)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ex.js */ "./src/js/components/ex.js");
// подключение js компонентов


/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню


// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {

// import './vendor/focus-visible.js';

/***/ }),

/***/ "./src/js/components/ex.js":
/*!*********************************!*\
  !*** ./src/js/components/ex.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var graph_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graph-tabs */ "./node_modules/graph-tabs/src/graph-tabs.js");


const tabs = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]("tab");
document.addEventListener("DOMContentLoaded", function () {
  var _document$querySelect;
  // Открытие попапа при клике на кнопки с классом hero__link
  const openButtons = document.querySelectorAll(".hero__link");
  const popup = document.getElementById("telegram-popup");
  const closeButton = document.querySelector(".popup-close-btn");

  // Переменные для обработки свайпа
  let touchStartX = 0;
  let touchEndX = 0;
  openButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openPopup();
    });
  });
  closeButton.addEventListener("click", closePopup);

  // Закрытие при клике вне попапа
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });
  function openPopup() {
    popup.classList.add("active");
  }
  function closePopup() {
    popup.classList.remove("active");
  }

  // Закрытие по ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closePopup();
    }
  });

  // Обработка свайпа для мобильных устройств
  if (window.matchMedia("(max-width: 1023px)").matches) {
    popup.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    popup.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, false);
  }
  function handleSwipe() {
    // Определяем минимальное расстояние свайпа для срабатывания (50px)
    const minSwipeDistance = 50;

    // Если свайп влево (start > end) и расстояние достаточное
    if (touchStartX - touchEndX > minSwipeDistance) {
      closePopup();
    }
  }

  // Обработчик изменения размера окна (на случай поворота устройства)
  window.addEventListener("resize", function () {
    // Если после изменения размера экран стал больше 1023px, удаляем обработчики свайпа
    if (!window.matchMedia("(max-width: 1023px)").matches) {
      popup.removeEventListener("touchstart", function () {});
      popup.removeEventListener("touchend", function () {});
    }
  });
  document.querySelector(".tabs__nav").addEventListener("click", function (e) {
    if (e.target.classList.contains("tabs__nav-btn")) {
      // Удаляем класс у всех кнопок
      const buttonsTabsNav = this.querySelectorAll(".tabs__nav-btn");
      buttonsTabsNav.forEach(btn => btn.classList.remove("animate"));

      // Добавляем класс нажатой кнопке
      e.target.classList.add("animate");
    }
  });
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 100);
  document.querySelector(".input-name").addEventListener("input", function () {
    if (this.value.length > 15) {
      this.value = this.value.slice(0, 15);
      // Можно также показать сообщение пользователю
      alert("Максимальная длина - 15 символов");
    }
  });
  document.querySelector(".input-link").addEventListener("input", function () {
    if (this.value.length > 30) {
      this.value = this.value.slice(0, 15);
      // Можно также показать сообщение пользователю
      alert("Максимальная длина - 30 символов");
    }
  });
  function setSwiperNavPosition() {
    const footer = document.querySelector("footer");
    const swiperNavs = document.querySelectorAll(".swiper-nav"); // Все элементы навигации

    // Проверяем, что футер существует и экран шире 1024px
    if (footer && window.innerWidth > 1024) {
      const footerHeight = footer.offsetHeight;

      // Применяем margin-bottom ко всем элементам навигации
      swiperNavs.forEach(nav => {
        nav.style.marginBottom = `${footerHeight - 11}px`;
      });
    } else {
      // Сбрасываем стиль для всех элементов навигации
      swiperNavs.forEach(nav => {
        nav.style.marginBottom = "";
      });
    }
  }

  // Вызываем при загрузке и ресайзе
  window.addEventListener("load", setSwiperNavPosition);
  window.addEventListener("resize", setSwiperNavPosition);

  // Находим все нужные кнопки и блок
  const projectOpenButtons = document.querySelectorAll(".project-open");
  const homeBackButtons = document.querySelectorAll(".home-back");
  const tabsNavButtons = document.querySelectorAll(".tabs__nav-btn");
  const heroContent = document.querySelector(".hero__content");
  const infoGraphButton = document.querySelector(".info-graph-button");

  // Обработка кнопок project-open (переключает класс)
  if (projectOpenButtons && heroContent) {
    projectOpenButtons.forEach(button => {
      button.addEventListener("click", () => {
        heroContent.classList.toggle("project-visible");
      });
    });
  }

  // Обработка кнопок home-back
  if (homeBackButtons && heroContent) {
    homeBackButtons.forEach(button => {
      button.addEventListener("click", () => {
        if (heroContent.classList.contains("project-visible")) {
          // Если есть класс project-visible
          heroContent.classList.remove("project-visible");

          // Удаляем класс animate у всех кнопок табов
          tabsNavButtons.forEach(btn => {
            btn.classList.remove("animate");
          });
        } else if (infoGraphButton) {
          // Если нет класса project-visible, кликаем по info-graph-button
          infoGraphButton.click();
        }
      });
    });
  }

  // Обработка кнопок tabs__nav-btn (удаляет класс project-visible)
  if (tabsNavButtons && heroContent) {
    tabsNavButtons.forEach(button => {
      button.addEventListener("click", () => {
        heroContent.classList.remove("project-visible");
      });
    });
  }

  // Обработка кнопок tabs__nav-btn (удаляет класс project-visible)
  if (tabsNavButtons && heroContent) {
    tabsNavButtons.forEach(button => {
      button.addEventListener("click", () => {
        heroContent.classList.remove("project-visible");
      });
    });
  }
  const swiperInfoGraph = new Swiper(".info-graph-swiper", {
    slidesPerView: _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.auto,
    spaceBetween: 30,
    slideToClickedSlide: false,
    watchSlidesProgress: true,
    allowTouchMove: true,
    loop: false,
    speed: 300,
    freeMode: {
      enabled: true,
      sticky: true
    },
    mousewheel: {
      invert: false
    },
    pagination: {
      el: ".swiper-progressbar",
      type: "progressbar",
      clickable: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      slideChangeTransitionEnd: function () {
        this.slideTo(this.activeIndex, 300);
      }
    },
    // Оставляем твои breakpoints
    breakpoints: {
      0: {
        spaceBetween: 15,
        slidesPerView: _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.auto
      },
      577: {
        slidesPerView: _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.auto,
        spaceBetween: 20
      },
      1025: {
        slidesPerView: _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.auto
      },
      1281: {
        slidesPerView: _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.auto,
        spaceBetween: 20
      },
      1441: {
        slidesPerView: _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.auto,
        spaceBetween: 30
      }
    }
  });
  const swiperModelGraph = new Swiper(".model-graph-swiper", {
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 300,
    freeMode: {
      enabled: true,
      sticky: true
    },
    mousewheel: {
      invert: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-progressbar",
      type: "progressbar"
    }
  });
  const swiperInfoGraphProject = new Swiper(".info-graph-projects-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    preloadImages: true,
    updateOnImagesReady: true,
    speed: 300,
    preloadImages: true,
    updateOnImagesReady: true,
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true
    },
    freeMode: {
      enabled: true,
      sticky: true
    },
    mousewheel: {
      invert: false
    },
    on: {
      slideChangeTransitionEnd: function () {
        // Привязка слайдера после окончания инерции
        this.slideTo(this.activeIndex, 300);
      }
    },
    breakpoints: {
      1024: {
        slidesPerView: _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.auto,
        spaceBetween: 20
      },
      1441: {
        slidesPerView: _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.auto,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-progressbar",
      type: "progressbar"
    }
  });
  // Находим элементы
  const toggleButton = document.querySelector(".info-graph-more");
  const swiperBlock = document.querySelector(".info-graph-swiper");
  const productListBlock = document.querySelector(".info-graph-product-list");

  // Проверяем, что элементы существуют
  if (toggleButton && swiperBlock && productListBlock) {
    // Изначально скрываем product-list (если нужно)
    productListBlock.style.display = "none";

    // Добавляем обработчик клика
    toggleButton.addEventListener("click", function () {
      // Переключаем видимость блоков
      if (swiperBlock.style.display !== "none") {
        swiperBlock.style.display = "none";
        productListBlock.style.display = "grid"; // Используем grid вместо block
        toggleButton.classList.add("active"); // Добавляем класс active
      } else {
        swiperBlock.style.display = "block";
        productListBlock.style.display = "none";
        toggleButton.classList.remove("active"); // Убираем класс active
      }

      // Обновляем Swiper при повторном показе
      if (typeof swiper !== "undefined" && swiperBlock.style.display === "block") {
        swiper.update();
      }
    });
  } else {
    console.error("Один из элементов не найден на странице");
  }
  (_document$querySelect = document.querySelector(".submit-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const telegram = document.getElementById("telegram").value;
    const privacyChecked = document.getElementById("privacy").checked;
    if (!name || !telegram) {
      alert("Заполните все поля!");
      return; // ⛔ Прекратить выполнение, не закрывать попап
    }

    if (!privacyChecked) {
      alert("Подтвердите согласие!");
      return; // ⛔ Прекратить выполнение, не закрывать попап
    }

    // ✅ Все проверки пройдены — продолжаем

    // Отправка данных
    console.log("Данные:", {
      name,
      telegram
    });

    // Очистка формы
    document.getElementById("name").value = "";
    document.getElementById("telegram").value = "";
    document.getElementById("privacy").checked = false;
    closePopup(); // <-- Добавлено закрытие попапа
  });

  // Функция закрытия попапа
  function closePopup() {
    const popup = document.getElementById("telegram-popup");
    popup.classList.remove("active");
  }
  document.querySelector(".reset-swiper").addEventListener("click", function () {
    const moreBlock = document.querySelector(".info-graph-more");
    const swiperContainer = document.querySelector(".info-graph-swiper");
    const productList = document.querySelector(".info-graph-product-list");
    if (moreBlock !== null && moreBlock !== void 0 && moreBlock.classList.contains("active")) {
      moreBlock.classList.remove("active");
    }
    if (swiperContainer) {
      swiperContainer.style.display = "flex";
    }
    if (productList) {
      productList.style.display = "none";
    }

    // Прокрутка к первому слайду для freeMode
    setTimeout(() => {
      if (swiperInfoGraph) {
        swiperInfoGraph.slideTo(0, 0); // Моментально
        swiperInfoGraph.setTranslate(0); // Насильно в начало
        swiperInfoGraph.updateProgress(); // Обновление прогрессбара
      }
    }, 50);
  });
  Fancybox.bind("[data-fancybox]", {
    contentClick: false,
    contentDblClick: false,
    dragToClose: false,
    groupAttr: "",
    groupAll: false,
    keyboard: false,
    defaultType: "image",
    animated: false,
    l10n: {},
    closeButton: "inside",
    backdropClick: "close",
    trapFocus: false
  });
  const closeButtons = document.querySelectorAll(".popup-text-close");

  // Добавляем обработчик для каждой кнопки
  closeButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Отменяем стандартное поведение (если кнопка — ссылка)
      Fancybox.close(); // Закрываем текущий попап Fancybox
    });
  });
  /*   $("[data-fancybox]").fancybox({
    touch: {
      vertical: false,
      momentum: false,
    },
    click: false,
    wheel: "zoom",
    dblclick: "close",
    backdrop: false,
    buttons: [],
    toolbar: false,
    arrows: false,
    infobar: false,
    afterShow: function (instance, current) {
      $(".is-close-btn").on("click", function () {
        $.fancybox.close();
      });
       // ❌ Отключаем перетаскивание
      instance.$refs.stage.off("touchstart.fb");
      instance.$refs.container.off("touchstart.fb");
    },
  }); */
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");


(function () {
  var _document, _document2, _document3, _document4;
  const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
  const overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', e => {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');
    if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', () => {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(el => {
    el.addEventListener('click', () => {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const disableScroll = () => {
  var _document;
  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const enableScroll = () => {
  var _document;
  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./node_modules/graph-tabs/src/graph-tabs.js":
/*!***************************************************!*\
  !*** ./node_modules/graph-tabs/src/graph-tabs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphTabs)
/* harmony export */ });
class GraphTabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {}
    }
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector('.tabs__nav');
      this.tabsBtns = this.tabList.querySelectorAll('.tabs__nav-btn');
      this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
    } else {
      console.error('Селектор data-tabs не существует!');
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error('Количество элементов с одинаковым data-tabs больше одного!');
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error('Количество кнопок и элементов табов не совпадает!');
      return;
    }
  }

  init() {
    this.tabList.setAttribute('role', 'tablist');

    this.tabsBtns.forEach((el, i) => {
      el.setAttribute('role', 'tab');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('id', `${this.selector}${i + 1}`);
      el.classList.remove('tabs__nav-btn--active');
    });

    this.tabsPanels.forEach((el, i) => {
      el.setAttribute('role', 'tabpanel');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
      el.classList.remove('tabs__panel--active');
    });

    this.tabsBtns[0].classList.add('tabs__nav-btn--active');
    this.tabsBtns[0].removeAttribute('tabindex');
    this.tabsBtns[0].setAttribute('aria-selected', 'true');
    this.tabsPanels[0].classList.add('tabs__panel--active');
  }

  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        let currentTab = this.tabList.querySelector('[aria-selected]');

        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });

      el.addEventListener('keydown', (e) => {
        let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

        let dir = null;

        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = 'down';
        } else {
          dir = null;
        }

        if (dir !== null) {
          if (dir === 'down') {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          }
        }
      });
    });
  }

  switchTabs(newTab, oldTab = this.tabs.querySelector('[aria-selected]')) {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');

    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');

    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

    this.tabsPanels[oldIndex].classList.remove('tabs__panel--active');
    this.tabsPanels[index].classList.add('tabs__panel--active');

    this.tabsBtns[oldIndex].classList.remove('tabs__nav-btn--active');
    this.tabsBtns[index].classList.add('tabs__nav-btn--active');

    this.options.isChanged(this);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;