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
  const productListBlock = document.querySelector(".info-graph-product-list.all");
  const openProjectButtons = document.querySelectorAll(".open-project-in-all");
  const infoGraphProductLists = document.querySelectorAll(".info-graph-product-list.projects");

  // Привязка data-атрибутов и id по порядку
  openProjectButtons.forEach((openProjectButton, index) => {
    const infoGraphProductList = infoGraphProductLists[index];
    if (infoGraphProductList) {
      let infoGraphProductListId = infoGraphProductList.id;
      if (!infoGraphProductListId) {
        infoGraphProductListId = `project-${index + 1}`;
        infoGraphProductList.id = infoGraphProductListId;
      }
      openProjectButton.id = `open-project-in-all-${index + 1}`;
      openProjectButton.setAttribute("data-target-id", infoGraphProductListId);
    }
  });

  // Обработка кликов
  openProjectButtons.forEach(openProjectButton => {
    openProjectButton.addEventListener("click", () => {
      const targetId = openProjectButton.dataset.targetId;

      // Скрываем productListBlock
      if (productListBlock) {
        productListBlock.style.display = "none";
      }

      // Скрываем все infoGraphProductLists и удаляем класс active
      infoGraphProductLists.forEach(infoGraphProductList => {
        infoGraphProductList.classList.remove("active");
        infoGraphProductList.style.display = "none";
      });

      // Показываем нужный блок и добавляем класс active
      const targetBlock = document.getElementById(targetId);
      if (targetBlock) {
        targetBlock.style.display = "grid";
        targetBlock.classList.add("active");
      }
    });
  });
  const buttons = document.querySelectorAll(".open-project-mobile");
  const projects = document.querySelectorAll(".info-graph-product-list.projects");
  const swiper = document.querySelector(".info-graph-swiper.mobile.first");
  const moreAll = document.querySelector(".info-graph-more.all");
  const closeProjects = document.querySelector(".info-graph-more.projects");

  // Открытие проекта
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Скрыть все проекты
      projects.forEach(project => project.classList.remove("active"));

      // Показать нужный проект
      if (projects[index]) {
        projects[index].classList.add("active");
      }

      // Скрыть swiper
      if (swiper) {
        swiper.style.display = "none";
      }

      // Скрыть блок "more all"
      if (moreAll) {
        moreAll.style.display = "none";
      }

      // Показать кнопку закрытия
      if (closeProjects) {
        closeProjects.classList.add("active");
      }
    });
  });

  // Закрытие проекта
  if (closeProjects) {
    closeProjects.addEventListener("click", () => {
      // Скрыть все активные проекты
      projects.forEach(project => project.classList.remove("active"));

      // Показать swiper
      if (swiper) {
        swiper.style.display = "block";
      }

      // Показать moreAll снова
      if (moreAll) {
        moreAll.style.display = "flex";
      }

      // Скрыть кнопку закрытия
      closeProjects.classList.remove("active");
    });
  }
  const secondBtn = document.querySelector(".tabs__nav-btn.second");
  const video = document.querySelector(".tab-video");
  const hoverZone = document.querySelector(".play-hover-zone");
  if (secondBtn && video && hoverZone) {
    // ▶ Воспроизведение при клике на кнопку
    secondBtn.addEventListener("click", function () {
      video.currentTime = 0;
      video.play();
      video.addEventListener("ended", () => {
        video.pause();
        video.currentTime = 0;
      }, {
        once: true
      });
    });

    // ▶ Наведение мыши
    hoverZone.addEventListener("mouseenter", function () {
      if (video.paused) {
        video.currentTime = 0;
        video.play();
      }
    });
    hoverZone.addEventListener("mouseleave", function () {
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // ▶ Автовоспроизведение при скролле на мобильных устройствах
    const playOnVisibleMobile = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && window.innerWidth < 1024 && video.paused) {
          video.currentTime = 0;
          video.play();
          video.addEventListener("ended", () => {
            video.pause();
            video.currentTime = 0;
          }, {
            once: true
          });
        }
      });
    };
    const observer = new IntersectionObserver(playOnVisibleMobile, {
      threshold: 0.5 // видео должно быть минимум на 50% в зоне видимости
    });

    observer.observe(video);

    // ▶ Тап по hoverZone для воспроизведения на мобильных
    hoverZone.addEventListener("touchstart", function () {
      if (video.paused) {
        video.currentTime = 0;
        video.play();
        video.addEventListener("ended", () => {
          video.pause();
          video.currentTime = 0;
        }, {
          once: true
        });
      }
    });
  }
  const openButtons = document.querySelectorAll(".hero__link");
  const popup = document.getElementById("telegram-popup");
  const closeButton = document.querySelector(".popup-close-btn");
  let touchStartX = 0;
  let touchEndX = 0;
  openButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openPopup();
    });
  });
  closeButton.addEventListener("click", closePopup);
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
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closePopup();
    }
  });
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
    const minSwipeDistance = 50;
    if (touchStartX - touchEndX > minSwipeDistance) {
      closePopup();
    }
  }
  function openPopup() {
    popup.classList.add("active");

    // Добавляем состояние в историю при открытии
    history.pushState({
      popupOpen: true
    }, "", window.location.href);
  }
  function closePopup() {
    popup.classList.remove("active");

    // Если мы в состоянии с открытым попапом — идём назад по истории
    if (history.state && history.state.popupOpen) {
      history.back();
    }
  }
  window.addEventListener("popstate", function () {
    if (popup.classList.contains("active")) {
      popup.classList.remove("active");
    }
  });
  window.addEventListener("resize", function () {
    if (!window.matchMedia("(max-width: 1023px)").matches) {
      popup.removeEventListener("touchstart", function () {});
      popup.removeEventListener("touchend", function () {});
    }
  });
  document.querySelector(".tabs__nav").addEventListener("click", function (e) {
    if (e.target.classList.contains("tabs__nav-btn")) {
      const buttonsTabsNav = this.querySelectorAll(".tabs__nav-btn");
      buttonsTabsNav.forEach(btn => btn.classList.remove("animate"));
      e.target.classList.add("animate");
    }
  });
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 100);
  document.querySelector(".input-name").addEventListener("input", function () {
    if (this.value.length > 15) {
      this.value = this.value.slice(0, 15);
      alert("Максимальная длина - 15 символов");
    }
  });
  document.querySelector(".input-link").addEventListener("input", function () {
    if (this.value.length > 30) {
      this.value = this.value.slice(0, 15);
      alert("Максимальная длина - 30 символов");
    }
  });
  function setSwiperNavPosition() {
    const footer = document.querySelector("footer");
    const swiperNavs = document.querySelectorAll(".swiper-nav"); // Все элементы навигации

    if (footer && window.innerWidth > 1024) {
      const footerHeight = footer.offsetHeight;
      swiperNavs.forEach(nav => {
        nav.style.marginBottom = `${footerHeight - 11}px`;
      });
    } else {
      swiperNavs.forEach(nav => {
        nav.style.marginBottom = "";
      });
    }
  }
  window.addEventListener("load", setSwiperNavPosition);
  window.addEventListener("resize", setSwiperNavPosition);
  const projectOpenButtons = document.querySelectorAll(".project-open");
  const homeBackButtons = document.querySelectorAll(".home-back");
  const tabsNavButtons = document.querySelectorAll(".tabs__nav-btn");
  const heroContent = document.querySelector(".hero__content");
  const infoGraphButton = document.querySelector(".info-graph-button");
  const allSwipers = document.querySelectorAll(".info-graph-projects-swiper");
  allSwipers.forEach((swiper, index) => {
    swiper.id = `project-swiper-${index + 1}`;
  });
  projectOpenButtons.forEach((button, index) => {
    button.setAttribute("data-target", `project-swiper-${index + 1}`);
  });
  function resetInfoGraphSlider() {
    setTimeout(() => {
      if (typeof swiperInfoGraph !== "undefined" && swiperInfoGraph) {
        swiperInfoGraph.slideTo(0, 0);
        swiperInfoGraph.setTranslate(0);
        swiperInfoGraph.updateProgress();
      }
    }, 500);
  }
  if (projectOpenButtons && heroContent) {
    projectOpenButtons.forEach(button => {
      button.addEventListener("click", () => {
        heroContent.classList.add("project-visible");
        const targetSwiperId = button.getAttribute("data-target");
        document.querySelectorAll(".info-graph-projects-swiper").forEach(swiper => {
          swiper.classList.remove("active");
        });
        if (targetSwiperId) {
          const targetSwiper = document.getElementById(targetSwiperId);
          if (targetSwiper) targetSwiper.classList.add("active");
        }
      });
    });
  }
  if (homeBackButtons && heroContent) {
    homeBackButtons.forEach(button => {
      button.addEventListener("click", () => {
        if (heroContent.classList.contains("project-visible")) {
          heroContent.classList.remove("project-visible");
          document.querySelectorAll(".info-graph-projects-swiper").forEach(swiper => {
            swiper.classList.remove("active");
          });
          tabsNavButtons.forEach(btn => {
            btn.classList.remove("animate");
          });
        } else if (infoGraphButton) {
          infoGraphButton.click();
        }
      });
    });
  }
  if (tabsNavButtons && heroContent) {
    tabsNavButtons.forEach(button => {
      button.addEventListener("click", () => {
        heroContent.classList.remove("project-visible");
        document.querySelectorAll(".info-graph-projects-swiper").forEach(swiper => {
          swiper.classList.remove("active");
        });
        resetInfoGraphSlider();
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
    },
    watchOverflow: false
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
    },
    watchOverflow: false // ВАЖНО
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
    },
    watchOverflow: false
  });
  const toggleButton = document.querySelector(".info-graph-more.all");
  const swiperBlock = document.querySelector(".info-graph-swiper");
  if (toggleButton && swiperBlock && productListBlock) {
    productListBlock.style.display = "none";
    toggleButton.addEventListener("click", function () {
      // Скрываем и снимаем active с infoGraphProductLists
      infoGraphProductLists.forEach(block => {
        block.style.display = "none";
        block.classList.remove("active");
      });
      if (swiperBlock.style.display !== "none") {
        swiperBlock.style.display = "none";
        productListBlock.style.display = "grid"; // Используем grid вместо block
        toggleButton.classList.add("active"); // Добавляем класс active
      } else {
        swiperBlock.style.display = "block";
        productListBlock.style.display = "none";
        toggleButton.classList.remove("active"); // Убираем класс active
      }

      if (typeof swiper !== "undefined" && swiperBlock.style.display === "block") {
        swiper.update();
      }
    });
  } else {
    console.error("Один из элементов не найден на странице");
  }
  (_document$querySelect = document.querySelector(".submit-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const telegram = document.getElementById("telegram").value.trim();
    const privacyChecked = document.getElementById("privacy").checked;
    if (!name || !telegram) {
      alert("Заполните все поля!");
      return;
    }
    if (!privacyChecked) {
      alert("Подтвердите согласие!");
      return;
    }
    const formData = new FormData();
    formData.append("Имя", name);
    formData.append("Telegram", telegram);
    fetch("send.php", {
      method: "POST",
      body: formData
    }).then(response => response.json()).then(data => {
      if (data.status === "success") {
        document.getElementById("name").value = "";
        document.getElementById("telegram").value = "";
        document.getElementById("privacy").checked = false;
        closePopup();
      } else {
        alert("Ошибка отправки. Попробуйте ещё раз.");
      }
    }).catch(() => {
      alert("Ошибка соединения.");
    });
  });
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
    trapFocus: false,
    on: {
      reveal: fancybox => {
        // Добавляем новую запись в историю при открытии
        history.pushState({
          fancybox: true
        }, "");
      },
      closing: fancybox => {
        // При закрытии возвращаемся назад по истории
        if (history.state && history.state.fancybox) {
          history.back();
        }
      }
    }
  });

  // Закрываем Fancybox при нажатии кнопки "назад"
  window.addEventListener("popstate", function (event) {
    // Закрываем Fancybox, если он открыт
    if (Fancybox.getInstance()) {
      Fancybox.close();
    }
  });

  // Для SPA (если используется роутер)
  window.addEventListener("hashchange", () => {
    if (Fancybox.getInstance()) {
      Fancybox.close();
    }
  });
  const closeButtons = document.querySelectorAll(".popup-text-close");
  closeButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Отменяем стандартное поведение (если кнопка — ссылка)
      Fancybox.close(); // Закрываем текущий попап Fancybox
    });
  });

  const swipers = document.querySelectorAll(".info-graph-projects-swiper"); // Все слайдеры
  const heroTabs = document.querySelector(".hero__tabs"); // Контейнер с padding

  if (!swipers.length || !heroTabs) {
    console.log("Слайдеры или hero__tabs не найдены!");
    return;
  }
  function checkSwiperWidth(swiper) {
    const screenWidth = window.innerWidth;
    const heroTabsPaddingRight = parseFloat(getComputedStyle(heroTabs).paddingRight);
    const swiperWidth = swiper.offsetWidth;
    if (swiperWidth < screenWidth + heroTabsPaddingRight) {
      swiper.classList.add("swiper-full");
    } else {
      swiper.classList.remove("swiper-full");
    }
  }
  swipers.forEach(checkSwiperWidth);
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      swipers.forEach(checkSwiperWidth);
    }, 100);
  });
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