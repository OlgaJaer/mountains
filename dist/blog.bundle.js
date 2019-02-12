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
eval("\n\n__webpack_require__(/*! ./modules/popup.js */ \"./src/assets/scripts/modules/popup.js\");\n\n__webpack_require__(/*! ./modules/articles.js */ \"./src/assets/scripts/modules/articles.js\");\n\n__webpack_require__(/*! ./modules/blogMenu.js */ \"./src/assets/scripts/modules/blogMenu.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9wb3B1cC5qc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2FydGljbGVzLmpzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvYmxvZ01lbnUuanNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/articles.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/articles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nav = document.querySelector('.js-blog-menu');\nvar navList = nav.querySelector('.js-blog-menu__list');\nvar navBtn = nav.getElementsByClassName('js-scroll-article');\n//const articlesList = document.getElementsByClassName('js-articles');\nvar articles = document.querySelectorAll(\".js-article\");\nvar activeBtnClass = 'blog-menu__item--active'; //\nvar speed = 1;\nvar clickAnimation = false;\nvar positionArticles = [];\nvar navBtnArray = Array.from(navBtn);\nvar articlesArray = Array.from(articles);\nnavList.children[0].classList.add(activeBtnClass);\n\nwindow.addEventListener(\"load\", init);\n\nfunction anchorActive() {\n    var _loop = function _loop(i) {\n        navBtn[i].addEventListener('click', function (e) {\n            clickAnimation = true;\n            if (!navBtn[i].classList.contains(activeBtnClass)) {\n                for (var j = 0; j < navBtn.length; j++) {\n                    navBtn[j].classList.remove(activeBtnClass);\n                    this.classList.add(activeBtnClass);\n                }\n            }\n\n            var windowY = window.pageYOffset;\n            var indexBtn = e.target.dataset.infdexButton;\n            var currentArticle = document.querySelector('[data-article = \"' + indexBtn + '\"]');\n            var coord = currentArticle.getBoundingClientRect().top;\n            var start = null;\n\n            requestAnimationFrame(step);\n\n            function step(time) {\n                if (start === null) start = time;\n                var progress = time - start;\n\n                var coordY = void 0;\n                if (coord < 0) {\n                    coordY = Math.max(windowY - progress / speed, windowY + coord);\n                } else {\n                    coordY = Math.min(windowY + progress / speed, windowY + coord);\n                }\n\n                window.scrollTo(0, coordY);\n\n                if (coordY != windowY + coord) {\n                    requestAnimationFrame(step);\n                } else {\n                    clickAnimation = false;\n                }\n            }\n        });\n    };\n\n    for (var i = 0; i < navBtn.length; i++) {\n        _loop(i);\n    }\n}\n\nfunction init() {\n    positionArticles = setPositionArticles(articlesArray);\n\n    anchorActive();\n    scrollActiveClass();\n\n    window.addEventListener(\"scroll\", scrollActiveClass);\n}\n\nfunction scrollActiveClass() {\n    positionArticles.forEach(function (el, i) {\n        var currentEl = navBtnArray[i];\n        if (clickAnimation) return;\n\n        if (isVisible(el, currentEl)) {\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n                for (var _iterator = navBtnArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var iter = _step.value;\n\n                    iter.classList.remove(activeBtnClass);\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return) {\n                        _iterator.return();\n                    }\n                } finally {\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n\n            currentEl.classList.add(activeBtnClass);\n        }\n    });\n}\n\nfunction isVisible(element) {\n    var scroll = window.pageYOffset;\n\n    return scroll >= element.top - 50 && scroll < element.bottom;\n}\n\nfunction setPositionArticles(elements) {\n    var position = [];\n    Array.from(elements).forEach(function (item, i) {\n        position[i] = {};\n        position[i].item = item;\n        position[i].top = item.getBoundingClientRect().top + window.pageYOffset;\n        position[i].bottom = item.getBoundingClientRect().bottom + window.pageYOffset;\n    });\n\n    return position;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hcnRpY2xlcy5qcz8wOTQ2Il0sIm5hbWVzIjpbIm5hdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdkxpc3QiLCJuYXZCdG4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYXJ0aWNsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlQnRuQ2xhc3MiLCJzcGVlZCIsImNsaWNrQW5pbWF0aW9uIiwicG9zaXRpb25BcnRpY2xlcyIsIm5hdkJ0bkFycmF5IiwiQXJyYXkiLCJmcm9tIiwiYXJ0aWNsZXNBcnJheSIsImNoaWxkcmVuIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJhbmNob3JBY3RpdmUiLCJpIiwiZSIsImNvbnRhaW5zIiwiaiIsImxlbmd0aCIsInJlbW92ZSIsIndpbmRvd1kiLCJwYWdlWU9mZnNldCIsImluZGV4QnRuIiwidGFyZ2V0IiwiZGF0YXNldCIsImluZmRleEJ1dHRvbiIsImN1cnJlbnRBcnRpY2xlIiwiY29vcmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzdGFydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0ZXAiLCJ0aW1lIiwicHJvZ3Jlc3MiLCJjb29yZFkiLCJNYXRoIiwibWF4IiwibWluIiwic2Nyb2xsVG8iLCJzZXRQb3NpdGlvbkFydGljbGVzIiwic2Nyb2xsQWN0aXZlQ2xhc3MiLCJmb3JFYWNoIiwiZWwiLCJjdXJyZW50RWwiLCJpc1Zpc2libGUiLCJpdGVyIiwiZWxlbWVudCIsInNjcm9sbCIsImJvdHRvbSIsImVsZW1lbnRzIiwicG9zaXRpb24iLCJpdGVtIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWjtBQUNBLElBQU1DLFVBQVVILElBQUlFLGFBQUosQ0FBa0IscUJBQWxCLENBQWhCO0FB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RGpEO0FBRUgsS0FORDs7QUFRQSxXQUFPOEIsUUFBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYXJ0aWNsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYmxvZy1tZW51Jyk7XG5jb25zdCBuYXZMaXN0ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ibG9nLW1lbnVfX2xpc3QnKTtcbmNvbnN0IG5hdkJ0biA9IG5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1zY3JvbGwtYXJ0aWNsZScpO1xuLy9jb25zdCBhcnRpY2xlc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1hcnRpY2xlcycpO1xuY29uc3QgYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWFydGljbGVcIik7XG5jb25zdCBhY3RpdmVCdG5DbGFzcyA9ICdibG9nLW1lbnVfX2l0ZW0tLWFjdGl2ZSc7Ly9cbmNvbnN0IHNwZWVkID0gMTsgXG5sZXQgY2xpY2tBbmltYXRpb24gPSBmYWxzZTtcbmxldCBwb3NpdGlvbkFydGljbGVzID0gW107XG5sZXQgbmF2QnRuQXJyYXkgPSBBcnJheS5mcm9tKG5hdkJ0bik7XG5jb25zdCBhcnRpY2xlc0FycmF5ID0gQXJyYXkuZnJvbShhcnRpY2xlcyk7XG5uYXZMaXN0LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoYWN0aXZlQnRuQ2xhc3MpOyBcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXQpO1xuXG5mdW5jdGlvbiBhbmNob3JBY3RpdmUoKSB7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2QnRuLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICBuYXZCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7IFxuICAgICAgICAgICAgY2xpY2tBbmltYXRpb24gPSB0cnVlOyBcbiAgICAgICAgICAgIGlmICghKG5hdkJ0bltpXS5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlQnRuQ2xhc3MpKSkgeyBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5hdkJ0bi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBuYXZCdG5bal0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVCdG5DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChhY3RpdmVCdG5DbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgd2luZG93WSA9IHdpbmRvdy5wYWdlWU9mZnNldDsgXG4gICAgICAgICAgICBjb25zdCBpbmRleEJ0biA9IGUudGFyZ2V0LmRhdGFzZXQuaW5mZGV4QnV0dG9uOyBcbiAgICAgICAgICAgIGxldCBjdXJyZW50QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWFydGljbGUgPSBcIiR7aW5kZXhCdG59XCJdYCk7IFxuICAgICAgICAgICAgbGV0IGNvb3JkID0gY3VycmVudEFydGljbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wOyBcbiAgICAgICAgICAgIGxldCBzdGFydCA9IG51bGw7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7IFxuICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT09IG51bGwpICBzdGFydCA9IHRpbWU7XG4gICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gdGltZSAtIHN0YXJ0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBjb29yZFk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkWSA9IE1hdGgubWF4KHdpbmRvd1kgLSBwcm9ncmVzcyAvIHNwZWVkLCB3aW5kb3dZICsgY29vcmQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZFkgPSBNYXRoLm1pbih3aW5kb3dZICsgcHJvZ3Jlc3MgLyBzcGVlZCwgd2luZG93WSArIGNvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGNvb3JkWSk7IFxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRZICE9IHdpbmRvd1kgKyBjb29yZCkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrQW5pbWF0aW9uID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7IFxuICAgIHBvc2l0aW9uQXJ0aWNsZXMgPSBzZXRQb3NpdGlvbkFydGljbGVzKGFydGljbGVzQXJyYXkpO1xuICAgIFxuICAgIGFuY2hvckFjdGl2ZSgpO1xuICAgIHNjcm9sbEFjdGl2ZUNsYXNzKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxBY3RpdmVDbGFzcyk7IFxufVxuXG5mdW5jdGlvbiBzY3JvbGxBY3RpdmVDbGFzcygpIHtcbiAgICBwb3NpdGlvbkFydGljbGVzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50RWwgPSBuYXZCdG5BcnJheVtpXTtcbiAgICAgICAgaWYgKGNsaWNrQW5pbWF0aW9uKSByZXR1cm47IFxuICAgICAgICBcbiAgICAgICAgaWYgKGlzVmlzaWJsZShlbCwgY3VycmVudEVsKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyIG9mIG5hdkJ0bkFycmF5KSB7XG4gICAgICAgICAgICAgICAgaXRlci5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUJ0bkNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgY3VycmVudEVsLmNsYXNzTGlzdC5hZGQoYWN0aXZlQnRuQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtZW50KSB7XG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIHJldHVybiBzY3JvbGwgPj0gZWxlbWVudC50b3AgLSA1MCAmJiBzY3JvbGwgPCBlbGVtZW50LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gc2V0UG9zaXRpb25BcnRpY2xlcyhlbGVtZW50cykge1xuICAgIGxldCBwb3NpdGlvbiA9IFtdO1xuICAgIEFycmF5LmZyb20oZWxlbWVudHMpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcG9zaXRpb25baV0gPSB7fTtcbiAgICAgICAgcG9zaXRpb25baV0uaXRlbSA9IGl0ZW07XG4gICAgICAgIHBvc2l0aW9uW2ldLnRvcCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBwb3NpdGlvbltpXS5ib3R0b20gPVxuICAgICAgICAgICAgaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBwb3NpdGlvbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/articles.js\n");

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