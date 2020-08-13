/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/js/modules/slider.js":
/*!***********************************!*\
  !*** ./demo/js/modules/slider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
    const slider = document.querySelector('.offer__slider'),
        slides = document.querySelectorAll('.offer__slide'),
        prew = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        sliderWrapper = document.querySelector('.offer__slider-wrapper'),
        sliderFields = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(sliderWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    prepare(slideIndex);

    sliderFields.style.width = 100 * slides.length + '%';
    sliderFields.style.display = 'flex';
    sliderFields.style.transition = '0.5s all';

    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    })

//для нормаьного отображения абсолютно спозиционированных элементов
    slider.style.position = 'relative';

    let dots = [];

//Динамически создадим элемент
    const indicators =document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = 'position: absolute;\n' +
        '    right: 0;\n' +
        '    bottom: 0;\n' +
        '    left: 0;\n' +
        '    z-index: 15;\n' +
        '    display: flex;\n' +
        '    justify-content: center;\n' +
        '    margin-right: 15%;\n' +
        '    margin-left: 15%;\n' +
        '    list-style: none;';
    slider.append(indicators);

//Создадим точки по колличеству картинок в слайдере
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = 'box-sizing: content-box;\n' +
            '    flex: 0 1 auto;\n' +
            '    width: 30px;\n' +
            '    height: 6px;\n' +
            '    margin-right: 3px;\n' +
            '    margin-left: 3px;\n' +
            '    cursor: pointer;\n' +
            '    background-color: #fff;\n' +
            '    background-clip: padding-box;\n' +
            '    border-top: 10px solid transparent;\n' +
            '    border-bottom: 10px solid transparent;\n' +
            '    opacity: .5;\n' +
            '    transition: opacity .6s ease;';
        indicators.append(dot);

        if (i == 0) {
            dot.style.opacity = '1';
        }
        dots.push(dot);
    }

    function prepare(index) {
        if (index > slides.length) {
            slideIndex = 1;
        } else if (index < 1) {
            slideIndex = slides.length;
        }
        slideIndex < 10 ? current.textContent = `0${slideIndex}` : current.textContent = slideIndex;
    }

    function dotsActivity() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    next.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

        sliderFields.style.transform = `translateX(-${offset}px)`;

        prepare(++slideIndex);

        dotsActivity();
    });

    prew.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1)

        } else {
            offset -= +width.replace(/\D/g, '');
        }

        sliderFields.style.transform = `translateX(-${offset}px)`;

        prepare(--slideIndex);

        dotsActivity();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = +width.replace(/\D/g, '') * (slideTo - 1);
            sliderFields.style.transform = `translateX(-${offset}px)`;

            prepare(slideIndex);

            dotsActivity();
        })
    })
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./demo/js/script.js":
/*!***************************!*\
  !*** ./demo/js/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./demo/js/modules/slider.js");


window.addEventListener('DOMContentLoaded', () => {
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map