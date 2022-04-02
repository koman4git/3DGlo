/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 april 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst calculator = () => {\n    const calcItems = document.querySelectorAll(\"input[type=text].calc-item\");\n  };\n  \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://3dglo/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menu = document.querySelector('menu')\n    \n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    }\n    const toggleMenu = (e) => {\n        if (menu.classList.contains('active-menu')){\n            if (!e.target.closest('.menu')) {\n                handleMenu()\n            } else if (e.target.closest('.menu') && e.target.closest('ul > li > a')) {\n                handleMenu()\n            } else if (e.target.classList.contains('close-btn')) {\n                e.preventDefault()\n                handleMenu()\n            }\n        } else if (e.target.closest('.menu')) {\n            handleMenu()\n        }\n    }\n    document.body.addEventListener('click', toggleMenu)\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst modal = () => {\n  const modal = document.querySelector(\".popup\");\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const closeBtn = modal.querySelector(\".popup-close\");\n  const screen = window.screen.width;\n\n  buttons.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n      let count = 0;\n      let idInterval;\n\n      modal.style.display = \"block\";\n      popupContent.style.top = -50 + \"%\";\n\n      const animate = () => {\n        count++;\n        idInterval = requestAnimationFrame(animate);\n\n        if (count < 25) {\n          popupContent.style.top = -45 + count * 3 + \"%\";\n        } else {\n          cancelAnimationFrame(idInterval);\n        }\n\n        if (screen < 768) {\n          modal.style.display = \"block\";\n          popupContent.style.top = 20 + \"%\";\n        }\n      };\n\n      animate();\n    });\n  });\n\n  modal.addEventListener('click', (e) => {\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n        modal.style.display = \"none\";\n    };\n  })\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header')\n    const tabs = document.querySelectorAll('.service-header-tab')\n    const tabContent = document.querySelectorAll('.service-tab')\n\n    tabPanel.addEventListener('click', (e) => {\n        if(e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab')\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active')\n                    tabContent[index].classList.remove('d-none')\n                } else {\n                    tab.classList.remove('active')\n                    tabContent[index].classList.add('d-none')\n                }\n            })\n        };\n    })\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinutes = document.getElementById('timer-minutes')\n    const timerSeconds = document.getElementById('timer-seconds')\n    \n    const getTimeRamaining = () => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n        let hours = Math.floor((timeRemaining / 60) / 60)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        hours = hours < 10 ? \"0\" + hours : hours;\n        minutes = minutes < 10 ? \"0\" + minutes : minutes;\n        seconds = seconds < 10 ? \"0\" + seconds : seconds;\n        \n        return {timeRemaining, hours, minutes, seconds}\n    }    \n\n    const upDateClock = () => {\n        let getTime = getTimeRamaining()\n        \n        timerHours.textContent = getTime.hours\n        timerMinutes.textContent = getTime.minutes\n        timerSeconds.textContent = getTime.seconds\n        if(getTime.timeRemaining > 0) {\n           setInterval(upDateClock, 1000) \n        } else {\n            timerHours.textContent = '00'\n            timerMinutes.textContent = '00'\n            timerSeconds.textContent = '00'\n        }\n        \n    }\n    upDateClock()\n    getTimeRamaining()\n    \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst validation = () => {\n  const inputUserName = document.querySelectorAll(\"input[type=text]\");\n  const inputMessage = document.querySelector(\".mess\");\n  const inputEmail = document.querySelectorAll(\"input[type=email\");\n  const inputTel = document.querySelectorAll(\"input[type=tel]\");\n\n  inputUserName.forEach((item) => {\n    if (item.classList.contains(\"calc-item\")) {\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/\\D+/gi, \"\");\n      });\n    } else {\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\-\\s]+/i, \"\");\n      });\n    }\n  });\n\n  inputMessage.addEventListener(\"input\", (e) => {\n    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\-\\s]+/i, \"\");\n  });\n\n  inputEmail.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^\\w@\\-.!~*']+/gi, \"\");\n    });\n  });\n\n  inputTel.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^\\d+()-]+/gi, \"\");\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://3dglo/./src/modules/validation.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;