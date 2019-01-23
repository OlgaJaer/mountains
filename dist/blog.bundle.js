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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/popup.js */ \"./src/assets/scripts/modules/popup.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9wb3B1cC5qc1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/popup.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/modules/popup.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// полноэкранное меню \nvar openMenu = document.querySelector(\".header__menu\");\nvar popup = document.querySelector('.popup');\nvar closeMenu = document.querySelector(\".popup__btn\");\n\nopenMenu.onclick = function () {\n    popup.style.display = \"block\";\n    document.body.classList.add('scroll-hidden');\n};\n\ncloseMenu.onclick = function () {\n    popup.style.display = \"none\";\n    document.body.classList.remove('scroll-hidden');\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wb3B1cC5qcz8xNTI1Il0sIm5hbWVzIjpbIm9wZW5NZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicG9wdXAiLCJjbG9zZU1lbnUiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLFdBQVdDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZjtBQUNBLElBQUlDLFFBQVFGLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBLElBQUlFLFlBQVlILFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBaEI7O0FBRUFGLFNBQVNLLE9BQVQsR0FBbUIsWUFBVztBQUMxQkYsVUFBTUcsS0FBTixDQUFZQyxPQUFaLEdBQXNCLE9BQXRCO0FBQ0FOLGFBQVNPLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZUFBNUI7QUFDSCxDQUhEOztBQUtBTixVQUFVQyxPQUFWLEdBQW9CLFlBQVc7QUFDM0JGLFVBQU1HLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNBTixhQUFTTyxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGVBQS9CO0FBQ0gsQ0FIRCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BvcHVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0L/QvtC70L3QvtGN0LrRgNCw0L3QvdC+0LUg0LzQtdC90Y4gXG52YXIgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKTtcbnZhciBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xudmFyIGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2J0blwiKTtcblxub3Blbk1lbnUub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtaGlkZGVuJyk7XG59XG4gIFxuY2xvc2VNZW51Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtaGlkZGVuJyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/popup.js\n");

/***/ })

/******/ });