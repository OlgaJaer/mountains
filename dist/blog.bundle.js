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
eval("\n\n__webpack_require__(/*! ./modules/popup.js */ \"./src/assets/scripts/modules/popup.js\");\n\n__webpack_require__(/*! ./modules/articles.js */ \"./src/assets/scripts/modules/articles.js\");\n\n__webpack_require__(/*! ./modules/blogMenu.js */ \"./src/assets/scripts/modules/blogMenu.js\");\n\n__webpack_require__(/*! ./modules/arrow.js */ \"./src/assets/scripts/modules/arrow.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9wb3B1cC5qc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2FydGljbGVzLmpzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvYmxvZ01lbnUuanNcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9hcnJvdy5qc1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/arrow.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/modules/arrow.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n\n    var arrowDown = document.querySelector('.arrow__down');\n    var arrowUp = document.querySelector('.arrow__up');\n    var container = document.querySelector('.wrapper');\n    var header = document.querySelector('.js_header');\n\n    container.onclick = function (e) {\n        var target = e.target;\n\n        if (target === arrowDown) {\n            scrollIt(header.nextElementSibling);\n        }\n\n        if (target === arrowUp) {\n            scrollIt(header);\n        }\n    };\n\n    function scrollIt(element) {\n        window.scrollTo({\n            'behavior': 'smooth',\n            'left': 0,\n            'top': element.offsetTop\n        });\n    }\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hcnJvdy5qcz9mMGNmIl0sIm5hbWVzIjpbImFycm93RG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFycm93VXAiLCJjb250YWluZXIiLCJoZWFkZXIiLCJvbmNsaWNrIiwiZSIsInRhcmdldCIsInNjcm9sbEl0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZWxlbWVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwib2Zmc2V0VG9wIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTs7QUFFVCxRQUFNQSxZQUFZQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWxCO0FBQ0EsUUFBTUMsVUFBVUYsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFoQjtBQUNBLFFBQU1FLFlBQVlILFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBbEI7QUFDQSxRQUFNRyxTQUFTSixTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWY7O0FBRUlFLGNBQVVFLE9BQVYsR0FBb0IsVUFBVUMsQ0FBVixFQUFhO0FBQzdCLFlBQUlDLFNBQVNELEVBQUVDLE1BQWY7O0FBRUEsWUFBSUEsV0FBV1IsU0FBZixFQUEwQjtBQUMxQlMscUJBQVNKLE9BQU9LLGtCQUFoQjtBQUNDOztBQUVELFlBQUlGLFdBQVdMLE9BQWYsRUFBd0I7QUFDeEJNLHFCQUFTSixNQUFUO0FBQ0M7QUFDSixLQVZEOztBQVlKLGFBQVNJLFFBQVQsQ0FBa0JFLE9BQWxCLEVBQTJCO0FBQ3ZCQyxlQUFPQyxRQUFQLENBQWdCO0FBQ1osd0JBQVksUUFEQTtBQUVaLG9CQUFRLENBRkk7QUFHWixtQkFBT0YsUUFBUUc7QUFISCxTQUFoQjtBQUtIO0FBQ0YsQ0ExQkgiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hcnJvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcnJvd0Rvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3dfX2Rvd24nKTtcbiAgICBjb25zdCBhcnJvd1VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93X191cCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzX2hlYWRlcicpO1xuICBcbiAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIFxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gYXJyb3dEb3duKSB7XG4gICAgICAgICAgICBzY3JvbGxJdChoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gYXJyb3dVcCkge1xuICAgICAgICAgICAgc2Nyb2xsSXQoaGVhZGVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHNjcm9sbEl0KGVsZW1lbnQpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICdiZWhhdmlvcic6ICdzbW9vdGgnLFxuICAgICAgICAgICAgJ2xlZnQnOiAwLFxuICAgICAgICAgICAgJ3RvcCc6IGVsZW1lbnQub2Zmc2V0VG9wXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/arrow.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/articles.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/articles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nav = document.querySelector('.js-blog-menu');\nvar navList = nav.querySelector('.js-blog-menu__list');\nvar navBtn = nav.getElementsByClassName('js-scroll-article');\n//const articlesList = document.getElementsByClassName('js-articles');\nvar articles = document.querySelectorAll(\".js-article\");\nvar activeBtnClass = 'blog-menu__item--active'; //\nvar speed = 1;\nvar clickAnimation = false;\nvar positionArticles = [];\nvar navBtnArray = Array.from(navBtn);\nvar articlesArray = Array.from(articles);\nnavList.children[0].classList.add(activeBtnClass);\n\nwindow.addEventListener(\"load\", init);\n\nfunction anchorActive() {\n    var _loop = function _loop(i) {\n        navBtn[i].addEventListener('click', function (e) {\n            clickAnimation = true;\n            if (!navBtn[i].classList.contains(activeBtnClass)) {\n                for (var j = 0; j < navBtn.length; j++) {\n                    navBtn[j].classList.remove(activeBtnClass);\n                    this.classList.add(activeBtnClass);\n                }\n            }\n\n            var windowY = window.pageYOffset;\n            var indexBtn = e.target.dataset.infdexButton;\n            var currentArticle = document.querySelector('[data-article = \"' + indexBtn + '\"]');\n            var coord = currentArticle.getBoundingClientRect().top;\n            var start = null;\n            console.log(windowY);\n            requestAnimationFrame(step);\n\n            function step(time) {\n                if (start === null) start = time;\n                var progress = time - start;\n\n                var coordY = void 0;\n                if (coord < 0) {\n                    coordY = Math.max(windowY - progress / speed, windowY + coord);\n                } else {\n                    coordY = Math.min(windowY + progress / speed, windowY + coord);\n                }\n                console.log(coordY);\n\n                window.scrollTo(0, coordY);\n\n                if (coordY != windowY + coord) {\n                    requestAnimationFrame(step);\n                } else {\n                    clickAnimation = false;\n                }\n            }\n        });\n    };\n\n    for (var i = 0; i < navBtn.length; i++) {\n        _loop(i);\n    }\n}\n\nfunction init() {\n    positionArticles = setPositionArticles(articlesArray);\n\n    anchorActive();\n    scrollActiveClass();\n\n    window.addEventListener(\"scroll\", scrollActiveClass);\n}\n\nfunction scrollActiveClass() {\n    positionArticles.forEach(function (el, i) {\n        var currentEl = navBtnArray[i];\n        if (clickAnimation) return;\n\n        if (isVisible(el, currentEl)) {\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n                for (var _iterator = navBtnArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var iter = _step.value;\n\n                    iter.classList.remove(activeBtnClass);\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return) {\n                        _iterator.return();\n                    }\n                } finally {\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n\n            currentEl.classList.add(activeBtnClass);\n        }\n    });\n}\n\nfunction isVisible(element) {\n    var scroll = window.pageYOffset;\n\n    return scroll >= element.top - 50 && scroll < element.bottom;\n}\n\nfunction setPositionArticles(elements) {\n    var position = [];\n    Array.from(elements).forEach(function (item, i) {\n        position[i] = {};\n        position[i].item = item;\n        position[i].top = item.getBoundingClientRect().top + window.pageYOffset;\n        position[i].bottom = item.getBoundingClientRect().bottom + window.pageYOffset;\n    });\n\n    return position;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hcnRpY2xlcy5qcz8wOTQ2Il0sIm5hbWVzIjpbIm5hdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdkxpc3QiLCJuYXZCdG4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYXJ0aWNsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlQnRuQ2xhc3MiLCJzcGVlZCIsImNsaWNrQW5pbWF0aW9uIiwicG9zaXRpb25BcnRpY2xlcyIsIm5hdkJ0bkFycmF5IiwiQXJyYXkiLCJmcm9tIiwiYXJ0aWNsZXNBcnJheSIsImNoaWxkcmVuIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJhbmNob3JBY3RpdmUiLCJpIiwiZSIsImNvbnRhaW5zIiwiaiIsImxlbmd0aCIsInJlbW92ZSIsIndpbmRvd1kiLCJwYWdlWU9mZnNldCIsImluZGV4QnRuIiwidGFyZ2V0IiwiZGF0YXNldCIsImluZmRleEJ1dHRvbiIsImN1cnJlbnRBcnRpY2xlIiwiY29vcmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwidGltZSIsInByb2dyZXNzIiwiY29vcmRZIiwiTWF0aCIsIm1heCIsIm1pbiIsInNjcm9sbFRvIiwic2V0UG9zaXRpb25BcnRpY2xlcyIsInNjcm9sbEFjdGl2ZUNsYXNzIiwiZm9yRWFjaCIsImVsIiwiY3VycmVudEVsIiwiaXNWaXNpYmxlIiwiaXRlciIsImVsZW1lbnQiLCJzY3JvbGwiLCJib3R0b20iLCJlbGVtZW50cyIsInBvc2l0aW9uIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQVo7QUFDQSxJQUFNQyxVQUFVSCxJQUFJRSxhQUFKLENBQWtC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QyxpQkFBU3ZDLENBQVQsRUFBWXFDLE1BQVosR0FDSUcsS0FBSzFCLHFCQUFMLEdBQTZCdUIsTUFBN0IsR0FBc0N6QyxPQUFPVyxXQURqRDtBQUVILEtBTkQ7O0FBUUEsV0FBT2dDLFFBQVA7QUFDSCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FydGljbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJsb2ctbWVudScpO1xuY29uc3QgbmF2TGlzdCA9IG5hdi5xdWVyeVNlbGVjdG9yKCcuanMtYmxvZy1tZW51X19saXN0Jyk7XG5jb25zdCBuYXZCdG4gPSBuYXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtc2Nyb2xsLWFydGljbGUnKTtcbi8vY29uc3QgYXJ0aWNsZXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtYXJ0aWNsZXMnKTtcbmNvbnN0IGFydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1hcnRpY2xlXCIpO1xuY29uc3QgYWN0aXZlQnRuQ2xhc3MgPSAnYmxvZy1tZW51X19pdGVtLS1hY3RpdmUnOy8vXG5jb25zdCBzcGVlZCA9IDE7IFxubGV0IGNsaWNrQW5pbWF0aW9uID0gZmFsc2U7XG5sZXQgcG9zaXRpb25BcnRpY2xlcyA9IFtdO1xubGV0IG5hdkJ0bkFycmF5ID0gQXJyYXkuZnJvbShuYXZCdG4pO1xuY29uc3QgYXJ0aWNsZXNBcnJheSA9IEFycmF5LmZyb20oYXJ0aWNsZXMpO1xubmF2TGlzdC5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKGFjdGl2ZUJ0bkNsYXNzKTsgXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KTtcblxuZnVuY3Rpb24gYW5jaG9yQWN0aXZlKCkgeyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkJ0bi5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgbmF2QnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyBcbiAgICAgICAgICAgIGNsaWNrQW5pbWF0aW9uID0gdHJ1ZTsgXG4gICAgICAgICAgICBpZiAoIShuYXZCdG5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZUJ0bkNsYXNzKSkpIHsgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuYXZCdG4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2QnRuW2pdLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQnRuQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoYWN0aXZlQnRuQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHdpbmRvd1kgPSB3aW5kb3cucGFnZVlPZmZzZXQ7IFxuICAgICAgICAgICAgY29uc3QgaW5kZXhCdG4gPSBlLnRhcmdldC5kYXRhc2V0LmluZmRleEJ1dHRvbjsgXG4gICAgICAgICAgICBsZXQgY3VycmVudEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1hcnRpY2xlID0gXCIke2luZGV4QnRufVwiXWApOyBcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGN1cnJlbnRBcnRpY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBudWxsOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvd1kpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApOyBcbiAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gc3RlcCh0aW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSAgc3RhcnQgPSB0aW1lO1xuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWUgLSBzdGFydDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRZO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZFkgPSBNYXRoLm1heCh3aW5kb3dZIC0gcHJvZ3Jlc3MgLyBzcGVlZCwgd2luZG93WSArIGNvb3JkKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRZID0gTWF0aC5taW4od2luZG93WSArIHByb2dyZXNzIC8gc3BlZWQsIHdpbmRvd1kgKyBjb29yZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRZKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBjb29yZFkpOyBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNvb3JkWSAhPSB3aW5kb3dZICsgY29vcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGlja0FuaW1hdGlvbiA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkgeyBcbiAgICBwb3NpdGlvbkFydGljbGVzID0gc2V0UG9zaXRpb25BcnRpY2xlcyhhcnRpY2xlc0FycmF5KTtcbiAgICBcbiAgICBhbmNob3JBY3RpdmUoKTtcbiAgICBzY3JvbGxBY3RpdmVDbGFzcygpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQWN0aXZlQ2xhc3MpOyBcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQWN0aXZlQ2xhc3MoKSB7XG4gICAgcG9zaXRpb25BcnRpY2xlcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEVsID0gbmF2QnRuQXJyYXlbaV07XG4gICAgICAgIGlmIChjbGlja0FuaW1hdGlvbikgcmV0dXJuOyBcbiAgICAgICAgXG4gICAgICAgIGlmIChpc1Zpc2libGUoZWwsIGN1cnJlbnRFbCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlciBvZiBuYXZCdG5BcnJheSkge1xuICAgICAgICAgICAgICAgIGl0ZXIuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVCdG5DbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRFbC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUJ0bkNsYXNzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpc1Zpc2libGUoZWxlbWVudCkge1xuICAgIGxldCBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICByZXR1cm4gc2Nyb2xsID49IGVsZW1lbnQudG9wIC0gNTAgJiYgc2Nyb2xsIDwgZWxlbWVudC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIHNldFBvc2l0aW9uQXJ0aWNsZXMoZWxlbWVudHMpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBbXTtcbiAgICBBcnJheS5mcm9tKGVsZW1lbnRzKS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHBvc2l0aW9uW2ldID0ge307XG4gICAgICAgIHBvc2l0aW9uW2ldLml0ZW0gPSBpdGVtO1xuICAgICAgICBwb3NpdGlvbltpXS50b3AgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgcG9zaXRpb25baV0uYm90dG9tID1cbiAgICAgICAgICAgIGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gcG9zaXRpb247XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/articles.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blogMenu.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/blogMenu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar menu = document.querySelector('.blog-menu');\n\nmenu.addEventListener('click', function () {\n    document.querySelector('.js-blog-menu').classList.toggle('blog-menu--close');\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nTWVudS5qcz9mNTM3Il0sIm5hbWVzIjpbIm1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE9BQU9DLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjs7QUFFQUYsS0FBS0csZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0Q0YsYUFBU0MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0UsU0FBeEMsQ0FBa0RDLE1BQWxELENBQXlELGtCQUF6RDtBQUNILENBRkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibG9nTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZy1tZW51Jyk7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYmxvZy1tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnYmxvZy1tZW51LS1jbG9zZScpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blogMenu.js\n");

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