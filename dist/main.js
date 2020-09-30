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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _controllers_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_4__);



// import projectViews from "./views/projectViews";



const app = (() => {
  localStorage.clear();

  const main = document.querySelector("#main");

  window.innerWidth > 900
    ? main.classList.add("large")
    : main.classList.add("small");

  const handleResize = () => {
    if (window.innerWidth < 900) {
      main.classList.remove("large");
      main.classList.add("small");
    } else if (window.innerWidth > 900) {
      main.classList.add("large");
      main.classList.remove("small");
    }
  };

  const freshStart = () => {
    let project = { id: Object(_helpers_index__WEBPACK_IMPORTED_MODULE_4__["makeId"])(), name: "Welcome!", tasks: [] };
    let task = {
      title: "Click On Me!",
      date: "",
      priority: "low",
      description:
        "Welcome to Get ER Done! Feel free to make projects, make tasks, and check them off! Have fun and be productive!",
      done: false,
    };
    project.tasks.push(task);
    let projects = [project];
    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setProjects(projects);
    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setCurrentProject(projects[0]);
    render();
  };

  const render = () => {
    let currentProject = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject();
    let projects = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects();
    _controllers_projects__WEBPACK_IMPORTED_MODULE_2__["default"].render(projects, currentProject);
    _controllers_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].render(currentProject);
  };

  const start = () => {
    localStorage.length > 0 ? render() : freshStart();
  };

  window.addEventListener("resize", handleResize);

  start();

  return { render };
})();

/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* form stuff */\nform {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 30rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n  background: #fff;\n  color: #333;\n  border-radius: 0.5rem;\n  font-family: \"Roboto\", sans-serif;\n  z-index: 6;\n}\n\n.form-heading {\n  margin-bottom: 1rem;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-align: center;\n}\n\n.form-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  width: 100%;\n}\n\n.form-input {\n  position: relative;\n  width: 100%;\n  border: 0.1rem solid #ddd;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  font-family: inherit;\n  font-size: 1rem;\n}\n\n.form-label {\n  padding: 0.5rem 0;\n  font-size: 1rem;\n}\n\n.form-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 1.5pt #1976d2;\n}\n\n.text-area {\n  width: 100%;\n  min-height: 10rem;\n  resize: none;\n  font-family: inherit;\n}\n\n.form-button {\n  width: 100%;\n  padding: 0.5rem 0;\n  background: #1976d2;\n  border: none;\n  border-radius: 0.5rem;\n  color: #fff;\n  font-size: 1rem;\n}\n\n.form-button:hover {\n  cursor: pointer;\n  filter: brightness(90%);\n}\n\n#form-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 5;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  background: transparent;\n  bottom: 0;\n  color: transparent;\n  cursor: pointer;\n  height: auto;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n\n.input-error {\n  border: 0.1rem solid red;\n}\n\n#project-header {\n  height: 4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 0.1rem solid #eee;\n}\n\n.project-heading {\n  font-size: 1.4rem;\n  font-weight: 700;\n}\n\n/* side nav */\n#side-nav {\n  grid-area: 2/1/3/2;\n  top: 4rem;\n  bottom: auto;\n  width: 100%;\n  background: #f3f5f9;\n  z-index: 3;\n  transition: all 0.7s ease-in-out;\n}\n\n.collapse {\n  left: -20rem;\n}\n\n.expand {\n  left: 0;\n}\n\n#project-header-box {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 4rem;\n  margin-bottom: 0.5rem;\n  border-bottom: 0.1rem solid #ddd;\n}\n\n#new-project-header {\n  grid-column: 1/3;\n  place-self: center;\n  color: #000;\n  font-size: 1.4rem;\n  font-weight: 700;\n}\n\n#new-project {\n  grid-column: 4/5;\n  place-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2.5rem;\n  width: 2.5rem;\n  background: #1976d2;\n  border-radius: 50%;\n}\n\n#plus {\n  color: #fff;\n  font-size: 1.4rem;\n}\n\n#new-project:hover {\n  background: #1e88e5;\n  cursor: pointer;\n}\n\n#project-form {\n  position: fixed;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding: 0.5rem 1rem;\n  margin: 0.2rem;\n  border: 0.1rem solid #aaa;\n  outline: none;\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  font-weight: 500;\n}\n#project-form :focus {\n  outline: none;\n  border: none;\n}\n\n#projects {\n  height: calc(100vh - 9rem);\n  padding-bottom: 1rem;\n  overflow-y: auto;\n}\n\n#projects:last-child {\n  margin-bottom: 1rem;\n}\n\n.project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  margin: 0.2rem;\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.project:hover {\n  background: #fff;\n  cursor: pointer;\n}\n\n.p-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-name {\n  padding: 0 0.5rem;\n}\n\n.d-box {\n  display: flex;\n  justify-content: flex-end;\n  align-content: center;\n}\n\n.d-box:hover {\n  cursor: pointer;\n}\n\n.delete {\n  padding-left: 0.5rem;\n}\n\n#new-task {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  background: #1976d2;\n  border-radius: 0.5rem;\n  color: #fff;\n  font-size: 1rem;\n}\n\n#new-task:hover {\n  cursor: pointer;\n  background: #1e88e5;\n}\n\n#tasks {\n  margin: 0 5vw;\n}\n\n.task-box {\n  display: grid;\n  grid-template-columns: 5rem repeat(3, 1fr) 5rem;\n  grid-template-rows: 4rem;\n  align-items: center;\n  margin: 1rem 0;\n  border-bottom: 0.1rem solid #eee;\n}\n\n.complete-button {\n  grid-column: 1/2;\n  place-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  width: 50%;\n  border-radius: 50%;\n  outline: none;\n}\n\n.complete-button:hover {\n  animation: grow 0.3s linear;\n  animation-iteration-count: 1;\n}\n\n.checkmark {\n  color: #fff;\n  font-size: 1.5rem;\n}\n\n.task-info {\n  grid-column: 2/5;\n  display: flex;\n  flex-direction: column;\n}\n\n.task-name {\n  padding: 0 2rem;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n.task-date {\n  padding: 0 2rem;\n  font-size: 1rem;\n  font-style: italic;\n  color: #777;\n}\n\n.task-option {\n  grid-column: 5/6;\n  place-self: end;\n  padding: 1rem;\n}\n\n.task-option:hover {\n  cursor: pointer;\n}\n\n.text-done {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.task-complete {\n  background: #1976d2;\n}\n\n.high {\n  border: 0.2rem solid #a93226;\n  background: #f9ebea;\n}\n\n.medium {\n  border: 0.2rem solid #d4ac0d;\n  background: #fef9e7;\n}\n\n.low {\n  border: 0.2rem solid #229954;\n  background: #e9f7ef;\n}\n\nhtml {\n  font-size: 16px;\n}\n\n* {\n  line-height: 1.5;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  min-height: 100vh;\n  max-width: 100vw;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 4rem 1fr;\n  background: #fff;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* header */\n#header {\n  position: fixed;\n  width: 100%;\n  grid-area: 1/1/2/6;\n  display: grid;\n  grid-template-columns: 3rem 1fr 3rem;\n  align-content: center;\n  height: 4rem;\n  padding: 0 2rem;\n  justify-content: center;\n  align-items: center;\n  background: #203148;\n}\n\n.brand {\n  grid-column: 2/3;\n  justify-self: center;\n  color: #fff;\n  font-size: 1.8rem;\n  font-weight: 900;\n  text-align: center;\n}\n\n#expand-nav {\n  grid-column: 1/2;\n  border: none;\n  background: none;\n  color: #fff;\n  font-size: 2rem;\n}\n#expand-nav :hover {\n  cursor: pointer;\n}\n\n/* main stuff */\n#main {\n  width: 100%;\n}\n\n.large {\n  grid-area: 2/2/3/6;\n}\n\n.small {\n  grid-area: 2/1/3/6;\n}\n\n/* text spots in center */\n.welcome-mat {\n  position: relative;\n  top: 25%;\n  text-align: center;\n}\n\n.welcome-header {\n  color: #ccc;\n  font-size: 1.5rem;\n}\n\n.surprise {\n  padding: 3rem;\n  color: #ccc;\n  font-size: 4rem;\n}\n\n/* class toggles */\n.hidden {\n  display: none;\n}\n\n.selected {\n  background: #fff;\n}\n\n.error {\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  background-color: #f1948a;\n  color: #943126;\n  border-radius: 0.5rem;\n}\n\n.open-form {\n  animation: spin 0.3s linear;\n}\n\n.curtain {\n  animation: curtain 0.2s linear;\n}\n\n.slide-in {\n  animation: slide-in 0.2s linear;\n}\n\n@keyframes slide-in {\n  0% {\n    left: -20vw;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes curtain {\n  0% {\n    top: -100vh;\n  }\n  100% {\n    top: 0vh;\n  }\n}\n@keyframes spin {\n  0% {\n    rotate: 0;\n  }\n  100% {\n    rotate: 180deg;\n  }\n}\n@keyframes shake {\n  0% {\n    left: -5px;\n  }\n  100% {\n    right: -5px;\n  }\n}\n@keyframes grow {\n  0% {\n    height: 60%;\n    width: 50%;\n  }\n  25% {\n    height: 65%;\n    width: 55%;\n  }\n  50% {\n    height: 70%;\n    width: 60%;\n  }\n  75% {\n    height: 65%;\n    width: 55%;\n  }\n  100% {\n    height: 60%;\n    width: 50%;\n  }\n}\n@media screen and (max-width: 599px) {\n  .e-options {\n    flex-direction: column;\n  }\n}\n@media screen and (min-width: 600px) {\n  .e-options {\n    flex-direction: column;\n  }\n}\n@media screen and (min-width: 900px) {\n  .e-options {\n    flex-direction: row;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _views_taskViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);





const tasks = (() => {
  let currentProject = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject();
  let projects = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects();

  const newTask = document.querySelector("#new-task");

  const openForm = (i = "") => {
    let currentProject = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentProject();
    i !== "" ? _forms__WEBPACK_IMPORTED_MODULE_2__["default"].openTaskForm(currentProject.tasks[i]) : _forms__WEBPACK_IMPORTED_MODULE_2__["default"].openTaskForm;
  };

  const create = (task) => {
    let i = projects.findIndex((p) => p.id === currentProject.id);
    currentProject.tasks.push(task);
    projects[i] = currentProject;
    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setProjects(projects);
    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setCurrentProject(currentProject);
    _app__WEBPACK_IMPORTED_MODULE_0__["default"].render();
  };

  // const update = (event) => {
  //   taskChanger(event);
  //   closeTask(event);
  //   renderTasks(currentProject(), true);
  //   projects.save(currentProject());
  // };

  // const destroy = (event) => {
  //   let taskIndex = event.currentTarget.parentNode.getAttribute("data");
  //   let c = currentProject();
  //   c.tasks.splice(taskIndex, 1);
  //   views.render(c);
  //   projects.save(currentProject());
  // };

  // const updateTask = (event) => {
  //   taskChanger(event);
  //   closeTask(event);
  //   renderTasks(currentProject(), true);
  //   projects.save(currentProject());
  // };

  // const deleteTask = (event) => {
  //   let taskIndex = event.currentTarget.parentNode.getAttribute("data");
  //   let c = currentProject();
  //   c.tasks.splice(taskIndex, 1);
  //   view.render(c);
  //   projects.save(currentProject());
  // };

  const handleTaskComplete = (index) => {
    let project = projects.find((p) => p.id == currentProject.id);
    project.tasks[index].done
      ? (project.tasks[index].done = false)
      : (project.tasks[index].done = true);
    saveProjects(projects);
    let taskbox = document.querySelector(`div[data="${index}"]`);
    _views_taskViews__WEBPACK_IMPORTED_MODULE_1__["default"].markTaskComplete(project.tasks[index], taskbox);
  };

  const render = (currentProject) => {
    console.log(currentProject);
    _views_taskViews__WEBPACK_IMPORTED_MODULE_1__["default"].renderTasks(currentProject);
  };

  newTask.addEventListener("click", openForm);

  return {
    create,
    openForm,
    handleTaskComplete,
    render,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (tasks);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_formViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _controllers_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _controllers_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




const forms = (() => {
  const formBox = document.querySelector("#form-box");
  const formOverlay = document.querySelector("#form-overlay");

  const openTaskForm = (task = "") => {
    formOverlay.classList.toggle("hidden");
    _views_formViews__WEBPACK_IMPORTED_MODULE_0__["default"].taskForm(task);
  };

  const openProjectForm = (project = "") => {
    formOverlay.classList.toggle("hidden");
    _views_formViews__WEBPACK_IMPORTED_MODULE_0__["default"].projectForm(project);
  };

  const handleOverlayClick = (e) => {
    if (e.target == formOverlay) {
      closeForm();
    }
  };
  const closeForm = () => {
    formOverlay.classList.toggle("hidden");
    formBox.innerHTML = "";
  };

  const validateFormData = (data) => {
    if (data.title == "") {
      const error = { message: "Your task needs a name" };
      _views_formViews__WEBPACK_IMPORTED_MODULE_0__["default"].addError(error);
    } else if (data.name == "") {
      const error = { message: "Your project needs a name" };
      _views_formViews__WEBPACK_IMPORTED_MODULE_0__["default"].addError(error);
    } else {
      data.title ? _controllers_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].create(data) : _controllers_projects__WEBPACK_IMPORTED_MODULE_1__["default"].create(data);
      closeForm();
    }
  };

  formOverlay.addEventListener("click", handleOverlayClick);

  return { openProjectForm, openTaskForm, validateFormData };
})();

/* harmony default export */ __webpack_exports__["default"] = (forms);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const formViews = (() => {
  const formBox = document.querySelector("#form-box");

  const getTaskFormData = () => {
    const title = document.querySelector('[name="title"]').value;
    const date = document.querySelector('[name="date"]').value;
    const priority = document.querySelector('[name="priority"]:checked').value;
    const description = document.querySelector('[name="description"]').value;
    const data = { title, date, priority, description, done: false };
    _controllers_forms__WEBPACK_IMPORTED_MODULE_1__["default"].validateFormData(data);
  };

  const getProjectFormData = () => {
    const name = document.querySelector('[name="name"]').value;
    const data = { id: Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["makeId"])(), name, tasks: [] };
    _controllers_forms__WEBPACK_IMPORTED_MODULE_1__["default"].validateFormData(data);
  };

  const addError = (error) => {
    const errorBox = document.querySelector("#error-box");
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "error" }, error.message, errorBox);
  };

  // Task Form Views

  const title = (parent, task = {}) => {
    const div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "form-section" }, "", parent);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "form-label", for: "title" }, "Task Name", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "input",
      {
        type: "text",
        name: "title",
        class: "form-input",
        value: task ? task.title : "",
      },
      "",
      div
    );
  };

  const date = (parent, task = {}) => {
    const div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "form-section" }, "", parent);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "form-label", for: "date" }, "Due Date", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "input",
      {
        type: "date",
        name: "date",
        class: "form-input date",
        value: task ? task.date : "",
      },
      "",
      div
    );
  };

  const radioButtons = (parent) => {
    const div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "form-section" }, "", parent);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "form-label" }, "Task Priority", div);
    const radios = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "radio-buttons" }, "", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "input",
      {
        type: "radio",
        name: "priority",
        value: "low",
      },
      "",
      radios
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "radio-label", for: "low" }, "Low", radios);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "input",
      {
        type: "radio",
        name: "priority",
        value: "medium",
      },
      "",
      radios
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "radio-label", for: "medium" }, "Medium", radios);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "input",
      {
        type: "radio",
        name: "priority",
        value: "high",
      },
      "",
      radios
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "radio-label", for: "high" }, "High", radios);
  };

  const description = (parent, task = {}) => {
    const div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "form-section" }, "", parent);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "label",
      { class: "form-label", for: "description" },
      "Task Description",
      div
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "textarea",
      { type: "text", name: "description", class: "form-input text-area" },
      task ? task.description : "",
      div
    );
  };

  const button = (parent, text) => {
    const button = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "button",
      { type: "button", class: "form-button" },
      text,
      parent
    );
    button.addEventListener("click", getTaskFormData);
  };

  const taskForm = (task = "", error = "") => {
    const form = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("form", { id: "task-form" }, "", formBox);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "h1",
      { class: "form-heading" },
      task ? "Edit Task" : "Create Task",
      form
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { id: "error-box" }, "", form);
    title(form, task ? task : null);
    date(form, task ? task : null);
    radioButtons(form);
    description(form, task ? task : null);
    button(form, task ? "Edit Task" : "Create Task");
    task
      ? (document.querySelector(`[value=${task.priority}]`).checked = true)
      : (document.querySelector('[value="low"]').checked = true);
  };

  // Project Form Views

  const projectForm = (project = "") => {
    const form = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("form", { id: "project-form" }, "", formBox);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "h1",
      { class: "form-heading" },
      project ? "Edit Project" : "Create Project",
      form
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { id: "error-box" }, "", form);
    const div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "form-section" }, "", form);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "form-label", for: "name" }, "Project Name", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "input",
      { class: "form-input", name: "name", value: project ? project.name : "" },
      "",
      div
    );
    const button = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "button",
      { type: "button", class: "form-button" },
      project ? "Edit Project" : "Create Project",
      form
    );
    button.addEventListener("click", getProjectFormData);
  };

  return {
    taskForm,
    projectForm,
    addError,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (formViews);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

exports.maker = (type, attributes, text, place) => {
  let element = document.createElement(type);
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
  element.textContent = text;
  place.appendChild(element);
  return element;
};

exports.makeId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_projectViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);




const projects = (() => {
  let projects = _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
  let currentProject = _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentProject();

  const getProjectFormData = () => {};

  const create = (data) => {
    projects.push(data);
    console.log(projects.slice(-1)[0]);
    _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentProject(projects.slice(-1)[0]);
    _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].setProjects(projects);
    _app__WEBPACK_IMPORTED_MODULE_2__["default"].render();
  };

  // const deleteProject = (e) => {
  //   let i = e.currentTarget.parentNode.parentNode.getAttribute("data");
  //   let name = projects.index[i].name;
  //   projects.deleteProject(name);
  //   projects.index.splice(i, 1);
  //   if (projects.index.length == 0) {
  //     views.renderHome();
  //   } else {
  //     views.init(projects.index[0]);
  //   }
  // };

  const changeProject = (i) => {
    // // setCurrentProject(index[i]);
    // view.renderProjectHeader(currentProject);
    // tasks.renderTasks(currentProject, true);
  };

  const render = (projects, currentProject) => {
    _views_projectViews__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjectHeader(currentProject);
    _views_projectViews__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects(projects, currentProject);
  };

  // const newProjectChanger = (project) => {
  //   renderProjects();
  //   tasks.renderTasks(project);
  //   // projectList.lastChild.classList.toggle("selected");
  // };

  return {
    create,
    // save,
    // deleteProject,
    changeProject,
    getProjectFormData,
    render,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (projects);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _controllers_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_2__);




const projectViews = (() => {
  const projectList = document.querySelector("#projects");
  const projectHeader = document.querySelector("#project-header");
  const sideNav = document.querySelector("#side-nav");
  const expandNav = document.querySelector("#expand-nav");

  window.innerWidth < 900 ? sideNav.classList.add("collapse") : null;
  window.innerWidth > 900 ? expandNav.classList.add("hidden") : null;

  // states
  // let currentProject = getCurrentProject();

  // functions for changing projects

  // const rerenderProjects = () => {
  //   let selected = document.querySelector(".selected").getAttribute("data");
  //   renderProjects();
  //   projectList.childNodes[selected].classList.toggle("selected");
  // };

  // const changeProject = (event) => {
  //   if (event.target != event.currentTarget.lastChild.lastChild) {
  //     document.querySelector(".selected").classList.toggle("selected");
  //     event.currentTarget.classList.toggle("selected");
  //     currentProject = projects.index[event.currentTarget.getAttribute("data")];
  //     rerenderProjects();
  //     taskViews.renderTasks(currentProject, true);
  //   }
  // };

  // const newProjectChanger = (project) => {
  //   currentProject = project;
  //   renderProjects();
  //   taskViews.renderTasks(currentProject, true);
  //   projectList.lastChild.classList.toggle("selected");
  // };

  // main project rendering

  const handleProjectChange = (e) => {
    if (e.currentTarget.classList[1] == undefined) {
      _controllers_projects__WEBPACK_IMPORTED_MODULE_0__["default"].changeProject(e.currentTarget.attributes[1].value);
      document.querySelector(".selected").classList.toggle("selected");
      e.currentTarget.classList.toggle("selected");
    }
  };

  const showNewProjectForm = () => {
    _controllers_forms__WEBPACK_IMPORTED_MODULE_1__["default"].openProjectForm();
  };

  const showEditProjectForm = () => {
    _controllers_forms__WEBPACK_IMPORTED_MODULE_1__["default"].openProjectForm(currentProject);
  };

  const renderProject = (project, currentProject) => {
    let p = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])(
      "div",
      {
        class:
          project.id === currentProject.id ? "project selected" : "project",
      },
      "",
      projectList
    );
    let b = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("div", { class: "p-box" }, "", p);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("i", { class: "far fa-calendar-check project-icon" }, "", b);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("h3", { class: "project-name" }, project.name, b);
    let d = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("div", { class: "d-box" }, "", p);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("h3", { class: "project-count" }, `${project.tasks.length}`, d);
    p.addEventListener("click", handleProjectChange);
  };

  const renderProjects = (projects, currentProject) => {
    projectList.innerHTML = "";
    projects.forEach((project) => renderProject(project, currentProject));
    const newButton = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])(
      "button",
      { type: "button", id: "new-project-button" },
      "New Project",
      projectList
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("i", { class: "fas fa-plus", id: "plus" }, "", newButton);
    newButton.addEventListener("click", showNewProjectForm);
  };

  const renderProjectHeader = (project) => {
    projectHeader.innerHTML = "";
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("h2", { class: "project-heading" }, project.name, projectHeader);
    let button = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("button", { id: "edit-task" }, "", projectHeader);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("i", { class: "fas fa-ellipsis-h", id: "ellipsis" }, "", button);
    button.addEventListener("click", showEditProjectForm);
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 900) {
      sideNav.classList.add("collapse");
      expandNav.classList.remove("hidden");
    } else if (window.innerWidth > 900) {
      sideNav.classList.remove("collapse");
      expandNav.classList.add("hidden");
    }
  };

  const handleClick = () => {
    sideNav.classList.toggle("collapse");
    sideNav.classList.toggle("slide-in");
  };

  /* event listeners */

  window.addEventListener("resize", handleWindowResize);
  expandNav.addEventListener("click", handleClick);

  return {
    renderProjects,
    renderProjectHeader,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (projectViews);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _controllers_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_2__);




const taskViews = (() => {
  // document selectors
  const main = document.querySelector("#tasks");

  //state
  // let currentProject = "";

  // // task form functions
  // const showform = () => {
  //   forms.openTaskForm();
  // };

  // const showEditTaskForm = (e) => {
  //   const i = e.currentTarget.parentNode.attributes[1].value;
  //   forms.openTaskForm(currentProject.tasks[i]);
  // };

  // const validateForm = () => {
  //   if (form[0].value == "") {
  //     formError(form[0]);
  //   } else if (form[1].value == "") {
  //     formError(form[1]);
  //   } else {
  //     let radio = document.querySelector("input[name=r1]:checked").value;
  //     return [form[0].value, form[1].value, radio, form[5].value];
  //   }
  // };

  // const getTaskData = () => {
  //   let taskData = validateForm();
  //   if (taskData) {
  //     tasks.create(taskData, currentProject());
  //     form.reset();
  //     showform();
  //   }
  // };
  const handleClick = (e) => {
    let i = e.currentTarget.parentNode.attributes[1].value;
    _controllers_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].openForm(i);
  };

  const markTaskComplete = (task, taskbox) => {
    let c = taskbox.firstChild;
    c.firstChild.classList.toggle("hidden");
    c.classList.toggle(task.priority);
    c.classList.toggle("task-complete");
    c.nextSibling.children[0].classList.toggle("text-done");
    c.nextSibling.children[1].classList.toggle("text-done");
  };

  const completeTask = (e) => {
    let i = e.currentTarget.parentNode.attributes[1].value;
    _controllers_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].handleTaskComplete(i);
  };

  const renderWelcome = () => {
    let mat = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("div", { class: "welcome-mat" }, "", main);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("h2", { class: "welcome-header" }, "Wow Such Empty!", mat);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("i", { class: "far fa-surprise surprise" }, "", mat);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])(
      "h2",
      { class: "welcome-header" },
      "Could You Be Done... Everything?!",
      mat
    );
  };

  const taskMaker = (task, index) => {
    let div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("div", { class: "task-box", data: index }, "", main);

    let b = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("a", { class: `complete-button ${task.priority}` }, "", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("i", { class: "fas fa-check checkmark hidden" }, "", b);

    let i = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("div", { class: "task-info" }, "", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("h2", { class: "task-name" }, task.title, i);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("p", { class: "task-date" }, task.dueDate, i);

    let e = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_2__["maker"])("i", { class: "fas fa-ellipsis-h task-option" }, "", div);

    b.addEventListener("click", completeTask);
    if (task.done == true) {
      markTaskComplete(task, div);
    }
    e.addEventListener("click", handleClick);
  };

  const renderTasks = (project) => {
    main.innerHTML = "";
    if (project.tasks.length == 0) {
      renderWelcome();
    } else {
      project.tasks.forEach((task, i) => taskMaker(task, i));
    }
  };

  return {
    renderTasks,
    markTaskComplete,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (taskViews);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const store = (() => {
  const setCurrentProject = (project) => {
    localStorage.removeItem("currentProject");
    localStorage.setItem("currentProject", JSON.stringify(project));
  };

  const getCurrentProject = () => {
    return JSON.parse(window.localStorage.getItem("currentProject"));
  };

  const setProjects = (projects) => {
    localStorage.removeItem("projects");
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const getProjects = () => {
    return JSON.parse(window.localStorage.getItem("projects"));
  };

  // const deleteProject = (name) => {
  //   localStorage.removeItem(name);
  // };

  return {
    getCurrentProject,
    setCurrentProject,
    getProjects,
    setProjects,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ })
/******/ ]);