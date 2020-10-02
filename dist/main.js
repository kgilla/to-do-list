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
/* harmony import */ var _controllers_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_4__);






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
      id: Object(_helpers_index__WEBPACK_IMPORTED_MODULE_4__["makeId"])(),
      title: "Click On Me!",
      date: "",
      priority: "low",
      description:
        "Welcome to Get ER Done! Feel free to make projects, make tasks, and check them off! Have fun and be productive!",
      done: false,
      project: project.id,
    };
    project.tasks.push(task.id);
    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setTasks([task]);
    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setProjects([project]);
    render(project);
  };

  const render = (project) => {
    let projects = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects();
    _controllers_projects__WEBPACK_IMPORTED_MODULE_2__["default"].render(projects, project);
    _controllers_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].render(project);
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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* form stuff */\nform {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(100% - 2rem);\n  max-width: 30rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n  background: #fff;\n  color: #333;\n  border-radius: 0.5rem;\n  font-family: \"Roboto\", sans-serif;\n  z-index: 6;\n}\n\n#project-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 1rem;\n  border: 0.1rem solid #aaa;\n  border-radius: 0.5rem;\n}\n\n.form-heading {\n  margin-bottom: 1rem;\n  font-size: 1.4rem;\n  font-weight: 700;\n  text-align: center;\n}\n\n.form-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  width: 100%;\n}\n\n.form-input {\n  position: relative;\n  width: 100%;\n  border: 0.1rem solid #ddd;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  font-family: inherit;\n  font-size: 1rem;\n}\n\n.form-label {\n  padding: 0.5rem 0;\n  font-size: 1rem;\n}\n\n.form-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 1.5pt #1976d2;\n}\n\n.text-area {\n  width: 100%;\n  min-height: 10rem;\n  resize: none;\n  font-family: inherit;\n}\n\n.form-button {\n  width: 100%;\n  padding: 0.5rem 0;\n  background: #1976d2;\n  border: none;\n  border-radius: 0.5rem;\n  color: #fff;\n  font-size: 1rem;\n}\n\n.form-button:hover {\n  cursor: pointer;\n  filter: brightness(90%);\n}\n\n#overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 5;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  background: transparent;\n  bottom: 0;\n  color: transparent;\n  cursor: pointer;\n  height: auto;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n\n.input-error {\n  border: 0.1rem solid red;\n}\n\n#project-header {\n  height: 6rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1rem;\n}\n\n.project-heading {\n  font-size: 1.4rem;\n  font-weight: 700;\n}\n\n#new-task {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  background: #1976d2;\n  border-radius: 0.5rem;\n  color: #fff;\n  font-size: 1rem;\n}\n\n#new-task:hover {\n  cursor: pointer;\n  background: #1e88e5;\n}\n\n#tasks {\n  padding: 0 1rem;\n}\n\n.task-box {\n  display: grid;\n  grid-template-columns: 3rem repeat(3, 1fr) 3rem;\n  grid-template-rows: 4rem;\n  align-items: center;\n  margin: 1rem 0;\n  border-bottom: 0.1rem solid #eee;\n}\n\n.complete-button {\n  grid-column: 1/2;\n  place-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2.5rem;\n  width: 2.5rem;\n  border-radius: 50%;\n  outline: none;\n  z-index: 2;\n}\n\n.complete-button:hover {\n  animation: grow 0.3s linear;\n  animation-iteration-count: 1;\n  cursor: pointer;\n}\n\n.checkmark {\n  color: #fff;\n  font-size: 1.5rem;\n}\n\n.task-info {\n  grid-column: 2/5;\n  display: flex;\n  flex-direction: column;\n}\n\n.task-name {\n  padding: 0 2rem;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n.task-date {\n  padding: 0 2rem;\n  font-size: 1rem;\n  font-style: italic;\n  color: #777;\n}\n\n.task-option {\n  grid-column: 5/6;\n  place-self: end;\n  padding: 1rem;\n}\n\n.task-option:hover {\n  cursor: pointer;\n}\n\n.text-done {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n.task-complete {\n  background: #1976d2;\n}\n\n.high {\n  border: 0.2rem solid #a93226;\n  background: #f9ebea;\n}\n\n.medium {\n  border: 0.2rem solid #d4ac0d;\n  background: #fef9e7;\n}\n\n.low {\n  border: 0.2rem solid #229954;\n  background: #e9f7ef;\n}\n\n#task-details-box {\n  margin-bottom: 1rem;\n  background: #fff;\n  border-bottom: 0.1rem solid #eee;\n  border-radius: 0.5rem;\n  font-family: \"Roboto\", sans-serif;\n  z-index: 6;\n  overflow: hidden;\n}\n\n#details-header {\n  position: relative;\n  padding: 1rem;\n}\n\n.details-title {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #000;\n}\n\n.details-date {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #666;\n}\n\n#edit-task-button {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 1rem;\n}\n\n#details-main {\n  padding: 0 1rem 1rem 1rem;\n}\n\n.details-description {\n  font-size: 1rem;\n  line-height: 2;\n}\n\n.details-footer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.details-footer i {\n  padding-bottom: 1rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  border: 0.1rem solid #eee;\n}\n\n#side-nav {\n  position: fixed;\n  top: 4rem;\n  bottom: auto;\n  width: 20rem;\n  padding: 1rem;\n  background: #f3f5f9;\n  z-index: 3;\n  transition: all 0.7s ease-in-out;\n}\n\n#all-tasks i {\n  color: #2980b9;\n}\n\n#tasks-today i {\n  color: #27ae60;\n}\n\n#tasks-week i {\n  color: #e67e22;\n}\n\n#projects {\n  height: calc(100vh - 6rem);\n  padding-bottom: 1rem;\n  overflow-y: auto;\n}\n\n#projects:last-child {\n  margin-bottom: 1rem;\n}\n\n#sidenav-title-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 0.1rem solid #ddd;\n}\n\n#sidenav-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #000;\n}\n\n.sidenav-item {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n  line-height: 2;\n}\n\n.sidenav-item:hover {\n  background: #fff;\n  cursor: pointer;\n}\n\n.sidenav-item-icon {\n  color: #333;\n  margin-right: 1rem;\n}\n\n.sidenav-item-name {\n  color: #222;\n  margin-right: 0.5rem;\n}\n\n.sidenav-item-count {\n  color: #aaa;\n}\n\n#plus {\n  margin-right: 0.5rem;\n  color: #333;\n  font-size: 0.8rem;\n}\n\n#new-project-button {\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 1rem;\n  border: none;\n  border-radius: 0.5rem;\n  background: none;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n}\n\n#new-project-button:hover {\n  cursor: pointer;\n}\n\n.collapse {\n  left: -20rem;\n}\n\n.expand {\n  left: 0;\n}\n\nhtml {\n  font-size: 16px;\n}\n\n* {\n  line-height: 1.5;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  min-height: 100vh;\n  max-width: 100vw;\n  grid-template-columns: 20rem repeat(4, 1fr);\n  grid-template-rows: 4rem 1fr;\n  background: #fff;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* header */\n#header {\n  position: fixed;\n  width: 100%;\n  grid-area: 1/1/2/6;\n  display: grid;\n  grid-template-columns: 3rem 1fr 3rem;\n  align-content: center;\n  height: 4rem;\n  padding: 0 2rem;\n  justify-content: center;\n  align-items: center;\n  background: #203148;\n}\n\n.brand {\n  grid-column: 2/3;\n  justify-self: center;\n  color: #fff;\n  font-size: 1.8rem;\n  font-weight: 900;\n  text-align: center;\n}\n\n#expand-nav {\n  grid-column: 1/2;\n  border: none;\n  background: none;\n  color: #fff;\n  font-size: 2rem;\n}\n#expand-nav :hover {\n  cursor: pointer;\n}\n\n/* main stuff */\n#main {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.large {\n  grid-area: 2/2/3/6;\n}\n\n.small {\n  grid-area: 2/1/3/6;\n}\n\n/* text spots in center */\n.welcome-mat {\n  position: relative;\n  top: 25%;\n  text-align: center;\n}\n\n.welcome-header {\n  color: #ccc;\n  font-size: 1.5rem;\n}\n\n.surprise {\n  padding: 3rem;\n  color: #ccc;\n  font-size: 4rem;\n}\n\n/* class toggles */\n.hidden {\n  display: none;\n}\n\n.selected {\n  background: #fff;\n}\n\n.error {\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  background-color: #f1948a;\n  color: #943126;\n  border-radius: 0.5rem;\n}\n\n.open-form {\n  animation: spin 0.3s linear;\n}\n\n.curtain {\n  animation: curtain 0.2s linear;\n}\n\n.slide-in {\n  animation: slide-in 0.2s linear;\n}\n\n.expand {\n  animation: expand 0.2s linear;\n}\n\n@keyframes slide-in {\n  0% {\n    left: -20vw;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes curtain {\n  0% {\n    top: -100vh;\n  }\n  100% {\n    top: 0vh;\n  }\n}\n@keyframes spin {\n  0% {\n    rotate: 0;\n  }\n  100% {\n    rotate: 180deg;\n  }\n}\n@keyframes shake {\n  0% {\n    left: -5px;\n  }\n  100% {\n    right: -5px;\n  }\n}\n@keyframes grow {\n  0% {\n    height: 2.5rem;\n    width: 2.5rem;\n  }\n  25% {\n    height: 2.75rem;\n    width: 2.75rem;\n  }\n  50% {\n    height: 3rem;\n    width: 3rem;\n  }\n  75% {\n    height: 2.75rem;\n    width: 2.75rem;\n  }\n  100% {\n    height: 2.5rem;\n    width: 2.5rem;\n  }\n}\n@keyframes expand {\n  0% {\n    height: 4rem;\n  }\n  25% {\n    height: 6rem;\n  }\n  50% {\n    height: 8rem;\n  }\n  75% {\n    height: 10rem;\n  }\n  100% {\n    height: 100%;\n  }\n}\n@media screen and (max-width: 599px) {\n  .e-options {\n    flex-direction: column;\n  }\n}\n@media screen and (min-width: 600px) {\n  .e-options {\n    flex-direction: column;\n  }\n}\n@media screen and (min-width: 900px) {\n  .e-options {\n    flex-direction: row;\n  }\n}", ""]);
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
/* harmony import */ var _views_taskViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_4__);






const tasks = (() => {
  const newTask = document.querySelector("#new-task");
  const overlay = document.querySelector("#overlay");

  const create = (data) => {
    const { title, date, priority, description, project } = data;

    let task = {
      id: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["makeId"])(),
      title,
      date,
      priority,
      description,
      project,
      done: false,
    };

    let projects = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getProjects();
    let tasks = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getTasks();

    tasks.push(task);

    let savedProject = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].findProject(task.project);
    savedProject.tasks.push(task.id);
    let i = projects.findIndex((p) => p.id === task.project);
    projects[i] = savedProject;

    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setTasks(tasks);
    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setProjects(projects);

    _app__WEBPACK_IMPORTED_MODULE_0__["default"].render(savedProject);
  };

  const update = (data) => {
    const { id, title, date, priority, description, done } = data;

    const task = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].findTask(id);

    const newTask = {
      id,
      title,
      date,
      priority,
      description,
      project: task.project,
      done,
    };

    let tasks = _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].getTasks();
    let i = tasks.findIndex((task) => task.id === newTask.id);
    tasks[i] = newTask;
    _helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].setTasks(tasks);
    _app__WEBPACK_IMPORTED_MODULE_0__["default"].render(_helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].findProject(newTask.project));
  };

  const destroy = () => {};

  const handleTaskComplete = (index) => {
    // let projects = store.getProjects();
    // let i = projects.findIndex((p) => p.id == currentProject.id);
    // currentProject.tasks[index].done
    //   ? (currentProject.tasks[index].done = false)
    //   : (currentProject.tasks[index].done = true);
    // projects[i] = currentProject;
    // store.setProjects(projects);
    // let taskbox = document.querySelector(`div[data="${index}"]`);
    // view.markTaskComplete(currentProject.tasks[index], taskbox);
  };

  const openForm = (id = "") => {
    if (id) {
      _forms__WEBPACK_IMPORTED_MODULE_2__["default"].openTaskForm(_helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].findTask(id));
    } else {
      _forms__WEBPACK_IMPORTED_MODULE_2__["default"].openTaskForm();
    }
  };

  const handleClick = () => {
    openForm();
  };

  const openDetails = (i) => {
    overlay.classList.toggle("hidden");
    _views_taskViews__WEBPACK_IMPORTED_MODULE_1__["default"].renderTaskDetails(project.tasks[i], i);
  };

  const render = (project) => {
    _views_taskViews__WEBPACK_IMPORTED_MODULE_1__["default"].render(_helpers_store__WEBPACK_IMPORTED_MODULE_3__["default"].populateTasks(project));
  };

  newTask.addEventListener("click", handleClick);

  return {
    create,
    update,
    destroy,
    handleTaskComplete,
    openForm,
    openDetails,
    render,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (tasks);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_1__);



const taskViews = (() => {
  const main = document.querySelector("#tasks");

  const openEditForm = (e) => {
    let id = e.currentTarget.parentNode.parentNode.attributes[1].value;
    _controllers_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].openForm(id);
  };

  const openNewForm = () => {
    _controllers_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].openForm();
  };

  const showDetails = (e) => {
    if (
      e.target !== e.currentTarget.firstChild &&
      e.target !== e.currentTarget.firstChild.firstChild
    ) {
      e.currentTarget.classList.toggle("hidden");
      e.currentTarget.nextSibling.classList.toggle("expand");
      e.currentTarget.nextSibling.classList.toggle("hidden");
    }
  };

  const hideDetails = (e) => {
    e.currentTarget.parentNode.parentNode.classList.toggle("expand");
    e.currentTarget.parentNode.parentNode.classList.toggle("hidden");
    e.currentTarget.parentNode.parentNode.previousSibling.classList.toggle(
      "hidden"
    );
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
    _controllers_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].handleTaskComplete(i);
  };

  const renderWelcome = () => {
    let mat = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("div", { class: "welcome-mat" }, "", main);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("h2", { class: "welcome-header" }, "Wow Such Empty!", mat);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("i", { class: "far fa-surprise surprise" }, "", mat);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
      "h2",
      { class: "welcome-header" },
      "Could You Be Done... Everything?!",
      mat
    );
  };

  const renderTaskDetails = (parent, task) => {
    let div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
      "div",
      { class: "task-details-box hidden", data: task.id },
      "",
      parent
    );
    let header = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("header", { id: "details-header" }, "", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("h2", { class: "details-title" }, task.title, header);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("h3", { class: "details-date" }, task.date, header);
    let b = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
      "i",
      { class: "fas fa-ellipsis-h", id: "edit-task-button" },
      "",
      header
    );
    b.addEventListener("click", openEditForm);

    let main = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("main", { id: "details-main" }, "", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("p", { class: "details-description" }, task.description, main);
    let footer = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("footer", { class: "details-footer" }, "", div);
    let close = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("i", { class: "fas fa-chevron-up" }, "", footer);
    close.addEventListener("click", hideDetails);
  };

  const renderTask = (parent, task) => {
    let div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("div", { class: "task-box", data: task.id }, "", parent);

    let b = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
      "div",
      { class: `complete-button ${task.priority}` },
      "",
      div
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("i", { class: "fas fa-check checkmark hidden" }, "", b);

    let c = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("div", { class: "task-info" }, "", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("h2", { class: "task-name" }, task.title, c);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("p", { class: "task-date" }, task.date, c);

    b.addEventListener("click", completeTask);
    if (task.done == true) {
      markTaskComplete(task, div);
    }
    div.addEventListener("click", showDetails);
  };

  const taskMaker = (task) => {
    let div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
      "div",
      { class: "task-container", data: task.id },
      "",
      main
    );
    renderTask(div, task);
    renderTaskDetails(div, task);
  };

  const render = (project) => {
    main.innerHTML = "";
    if (project.tasks.length == 0) {
      renderWelcome();
    } else {
      project.tasks.forEach((task, i) => taskMaker(task, i));
      let b = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
        "button",
        { type: "button", id: "new-task-button" },
        "Add Task",
        main
      );
      Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("i", { class: "fas fa-plus", id: "plus" }, "", b);
      b.addEventListener("click", openNewForm);
    }
  };

  return {
    render,
    renderTaskDetails,
    markTaskComplete,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (taskViews);


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_formViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _controllers_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _controllers_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




const forms = (() => {
  const formBox = document.querySelector("#box");
  const overlay = document.querySelector("#overlay");

  const openTaskForm = (task = "") => {
    overlay.classList.toggle("hidden");
    _views_formViews__WEBPACK_IMPORTED_MODULE_0__["default"].taskForm(task);
  };

  const openProjectForm = (project = "") => {
    overlay.classList.toggle("hidden");
    _views_formViews__WEBPACK_IMPORTED_MODULE_0__["default"].projectForm(project);
  };

  const closeForm = () => {
    overlay.classList.toggle("hidden");
    formBox.innerHTML = "";
  };

  const handleOverlayClick = (e) => {
    if (e.target == overlay) {
      closeForm();
    }
  };

  const getTaskFormData = (taskId = "") => {
    const title = document.querySelector('[name="title"]').value;
    const date = document.querySelector('[name="date"]').value;
    const priority = document.querySelector('[name="priority"]:checked').value;
    const description = document.querySelector('[name="description"]').value;
    const project = taskId
      ? null
      : document.querySelector('[name="project"]').value;
    const data = {
      id: taskId,
      title,
      date,
      priority,
      description,
      project,
    };
    forms.validateFormData(data);
  };

  const getProjectFormData = (projectId = "") => {
    const name = document.querySelector('[name="name"]').value;
    const data = { id: projectId, name };
    forms.validateFormData(data);
  };

  const validateFormData = (data) => {
    if (data.title == "") {
      const error = { message: "Your task needs a name" };
      _views_formViews__WEBPACK_IMPORTED_MODULE_0__["default"].addError(error);
    } else if (data.name == "") {
      const error = { message: "Your project needs a name" };
      _views_formViews__WEBPACK_IMPORTED_MODULE_0__["default"].addError(error);
    } else {
      if (data.id) {
        data.title
          ? _controllers_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].update(data)
          : _controllers_projects__WEBPACK_IMPORTED_MODULE_1__["default"].update(data);
      } else {
        data.title
          ? _controllers_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].create(data)
          : _controllers_projects__WEBPACK_IMPORTED_MODULE_1__["default"].create(data);
      }
      closeForm();
    }
  };

  overlay.addEventListener("click", handleOverlayClick);

  return {
    openProjectForm,
    openTaskForm,
    validateFormData,
    getTaskFormData,
    getProjectFormData,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (forms);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _controllers_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);




const formViews = (() => {
  const formBox = document.querySelector("#box");

  const addError = (error) => {
    const errorBox = document.querySelector("#error-box");
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "error" }, error.message, errorBox);
  };

  const handleTaskSubmit = (e) => {
    e.currentTarget.taskId
      ? _controllers_forms__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskFormData(e.currentTarget.taskId)
      : _controllers_forms__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskFormData();
  };

  const handleProjectSubmit = (e) => {
    e.currentTarget.projectId
      ? _controllers_forms__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectFormData(e.currentTarget.projectId)
      : _controllers_forms__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectFormData();
  };

  // Task Form Views

  const title = (parent, task = {}) => {
    const div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "form-section" }, "", parent);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "form-label", for: "title" }, "Task Name", div);
    let input = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
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
    input.focus();
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

  const selectProject = (parent) => {
    const projects = _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
    const div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("div", { class: "form-section" }, "", parent);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("label", { class: "form-label", for: "project" }, "Project", div);
    const select = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "select",
      { class: "form-input", name: "project" },
      "",
      div
    );
    projects.forEach((project) => {
      Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])("option", { value: project.id }, project.name, select);
    });
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

  const button = (parent, task) => {
    const button = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "button",
      { type: "button", class: "form-button" },
      task ? "Update Task" : "Create Task",
      parent
    );
    button.taskId = task ? task.id : null;
    button.addEventListener("click", handleTaskSubmit);
  };

  const taskForm = (task = "") => {
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
    task ? null : selectProject(form);
    button(form, task);
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
    let input = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "input",
      {
        class: "form-input",
        name: "name",
        value: project ? project.name : "",
      },
      "",
      div
    );
    const button = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_0__["maker"])(
      "button",
      { type: "button", class: "form-button" },
      project ? "Edit Project" : "Create Project",
      form
    );

    button.projectId = project ? project.id : null;

    button.addEventListener("click", handleProjectSubmit);

    input.focus();
  };

  return {
    taskForm,
    projectForm,
    addError,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (formViews);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const store = (() => {
  const getTasks = () => {
    return JSON.parse(window.localStorage.getItem("tasks"));
  };

  const setTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const setProjects = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const getProjects = () => {
    return JSON.parse(window.localStorage.getItem("projects"));
  };

  const findTask = (id) => {
    const tasks = getTasks();
    const task = tasks.find((task) => task.id === id);
    return task;
  };

  const findProject = (id) => {
    const projects = getProjects();
    const project = projects.find((project) => project.id === id);
    return project;
  };

  const populateTasks = (project) => {
    let taskIndex = [];
    const tasks = getTasks();
    project.tasks.forEach((task) => {
      let t = tasks.find((a) => task === a.id);
      taskIndex.push(t);
    });
    project.tasks = taskIndex;
    return project;
  };

  return {
    getTasks,
    setTasks,
    populateTasks,
    findTask,
    getProjects,
    setProjects,
    findProject,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_projectViews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_4__);






const projects = (() => {
  const create = (data) => {
    const project = { id: Object(_helpers_index__WEBPACK_IMPORTED_MODULE_4__["makeId"])(), name: data.name, tasks: [] };
    let projects = _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
    projects.push(project);
    _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].setProjects(projects);
    _app__WEBPACK_IMPORTED_MODULE_2__["default"].render(project);
  };

  const changeProject = (id) => {
    _app__WEBPACK_IMPORTED_MODULE_2__["default"].render(_helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].findProject(id));
  };

  const update = (data) => {
    const { id, name } = data;
    let projects = _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
    let i = projects.findIndex((p) => p.id === id);
    projects[i].name = name;
    _helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].setProjects(projects);
    _app__WEBPACK_IMPORTED_MODULE_2__["default"].render(projects[i]);
  };

  const destroy = () => {};

  const openForm = (id = "") => {
    id ? _forms__WEBPACK_IMPORTED_MODULE_3__["default"].openProjectForm(_helpers_store__WEBPACK_IMPORTED_MODULE_1__["default"].findProject(id)) : _forms__WEBPACK_IMPORTED_MODULE_3__["default"].openProjectForm();
  };

  const render = (projects, project) => {
    _views_projectViews__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjectHeader(project);
    _views_projectViews__WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects(projects, project);
  };

  return {
    create,
    changeProject,
    update,
    destroy,
    openForm,
    render,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (projects);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_index__WEBPACK_IMPORTED_MODULE_1__);



const projectViews = (() => {
  const projectList = document.querySelector("#projects");
  const projectHeader = document.querySelector("#project-header");
  const sideNav = document.querySelector("#side-nav");
  const expandNav = document.querySelector("#expand-nav");

  window.innerWidth < 900 ? sideNav.classList.add("collapse") : null;
  window.innerWidth > 900 ? expandNav.classList.add("hidden") : null;

  const handleProjectChange = (e) => {
    if (e.currentTarget.classList[1] == undefined) {
      _controllers_projects__WEBPACK_IMPORTED_MODULE_0__["default"].changeProject(e.currentTarget.attributes[1].value);
    }
  };

  const showNewProjectForm = () => {
    _controllers_projects__WEBPACK_IMPORTED_MODULE_0__["default"].openForm();
  };

  const showEditProjectForm = (e) => {
    const id = e.currentTarget.parentNode.attributes[1].value;
    _controllers_projects__WEBPACK_IMPORTED_MODULE_0__["default"].openForm(id);
  };

  const renderProject = (project, selected) => {
    let div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
      "div",
      {
        class:
          project.id === selected.id ? "sidenav-item selected" : "sidenav-item",
        data: project.id,
      },
      "",
      projectList
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("i", { class: "far fa-calendar-check sidenav-item-icon" }, "", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("h3", { class: "sidenav-item-name" }, project.name, div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
      "h3",
      { class: "sidenav-item-count" },
      `${project.tasks.length}`,
      div
    );
    div.addEventListener("click", handleProjectChange);
  };

  const renderProjects = (projects, selected) => {
    projectList.innerHTML = "";
    let div = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("div", { id: "sidenav-title-box" }, "", projectList);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("h2", { id: "sidenav-title" }, "Projects", div);
    let b = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("button", { id: "sidenav-title-button" }, "", div);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("i", { class: "fas fa-plus" }, "", b);
    projects.forEach((project) => renderProject(project, selected));
    const sideItemButton = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])(
      "button",
      { type: "button", id: "new-project-button" },
      "New Project",
      projectList
    );
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("i", { class: "fas fa-plus", id: "plus" }, "", sideItemButton);
    b.addEventListener("click", showNewProjectForm);
    sideItemButton.addEventListener("click", showNewProjectForm);
  };

  const renderProjectHeader = (project) => {
    projectHeader.innerHTML = "";
    projectHeader.setAttribute("data", project.id);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("h2", { class: "project-heading" }, project.name, projectHeader);
    let button = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("button", { id: "edit-task" }, "", projectHeader);
    Object(_helpers_index__WEBPACK_IMPORTED_MODULE_1__["maker"])("i", { class: "fas fa-ellipsis-h", id: "ellipsis" }, "", button);
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


/***/ })
/******/ ]);