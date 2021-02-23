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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_back_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/back.jpg */ \"./src/img/back.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_back_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/**********************************************\\r\\n*** GENERAL\\r\\n**********************************************/\\r\\n\\r\\n* {\\r\\n  margin: 1;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/*game */\\r\\n.game {\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  top: 150px;\\r\\n  transform: translateX(-50%);\\r\\n  height: 300px;\\r\\n  width: 300px;\\r\\n}\\r\\n.board {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n.square.left {\\r\\n  clear: both;\\r\\n  border-right-style: solid;\\r\\n}\\r\\n.square.top {\\r\\n  border-bottom-style: solid;\\r\\n}\\r\\n.square.right {\\r\\n  border-left-style: solid;\\r\\n}\\r\\n.square.bottom {\\r\\n  border-top-style: solid;\\r\\n}\\r\\n.square {\\r\\n  float: left;\\r\\n  width: 33.333333333%;\\r\\n  height: 33.333333333%;\\r\\n  cursor: pointer;\\r\\n  border-width: 5px;\\r\\n  border-color: black;\\r\\n}\\r\\n.square .x,\\r\\n.square .o {\\r\\n  position: relative;\\r\\n  will-change: transform;\\r\\n  -webkit-transform: translate3d(0, 0, 0);\\r\\n  transform: translate3d(0, 0, 0);\\r\\n  -webkit-animation: appear 0.2s cubic-bezier(0.5, 1.8, 0.1, 1.1);\\r\\n  -moz-animation: appear 0.2s cubic-bezier(0.5, 1.8, 0.1, 1.1);\\r\\n  animation: appear 0.2s cubic-bezier(0.5, 1.8, 0.1, 1.1);\\r\\n}\\r\\n.x {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.final-score {\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  transform: translateX(-50%);\\r\\n  top: 520px;\\r\\n  color: #555;\\r\\n  font-size: 18px;\\r\\n  font-family: \\\"Lato\\\";\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n  width: 160px;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.final-score:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.clearfix::after {\\r\\n  content: \\\"\\\";\\r\\n  display: table;\\r\\n  clear: both;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-image: linear-gradient(\\r\\n      rgba(62, 20, 20, 0.4),\\r\\n      rgba(62, 20, 20, 0.4)\\r\\n    ),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  font-family: Lato;\\r\\n  font-weight: 300;\\r\\n  position: relative;\\r\\n  height: 100vh;\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n.win-row {\\r\\n  background-color: #e7edca;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  width: 1000px;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: #fff;\\r\\n  box-shadow: 10px 10px 10px rgba(10, 10, 10, 0.8);\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.player-0-panel,\\r\\n.player-1-panel {\\r\\n  width: 50%;\\r\\n  float: left;\\r\\n  height: 600px;\\r\\n  padding: 100px;\\r\\n}\\r\\n\\r\\n/**********************************************\\r\\n*** PLAYERS\\r\\n**********************************************/\\r\\n\\r\\n.player-name {\\r\\n  font-size: 40px;\\r\\n  text-align: center;\\r\\n  text-transform: uppercase;\\r\\n  letter-spacing: 2px;\\r\\n  font-weight: 100;\\r\\n  margin-top: 20px;\\r\\n  margin-bottom: 10px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.player-score {\\r\\n  text-align: center;\\r\\n  font-size: 80px;\\r\\n  font-weight: 100;\\r\\n  color: #eb4d4d;\\r\\n  margin-bottom: 130px;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  background-color: #f7f7f7;\\r\\n}\\r\\n.active .player-name {\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n.active .player-name::after {\\r\\n  content: \\\"\\\\2022\\\";\\r\\n  font-size: 47px;\\r\\n  position: absolute;\\r\\n  color: #eb4d4d;\\r\\n  top: -7px;\\r\\n  right: 10px;\\r\\n}\\r\\n\\r\\n.player-current-box {\\r\\n  background-color: #eb4d4d;\\r\\n  color: #fff;\\r\\n  width: 40%;\\r\\n  margin: 0 auto;\\r\\n  padding: 12px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.player-current-label {\\r\\n  text-transform: uppercase;\\r\\n  margin-bottom: 10px;\\r\\n  font-size: 12px;\\r\\n  color: #222;\\r\\n}\\r\\n\\r\\n.player-current-score {\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  position: absolute;\\r\\n  width: 200px;\\r\\n  left: 50%;\\r\\n  transform: translateX(-50%);\\r\\n  color: #555;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-family: Lato;\\r\\n  font-size: 20px;\\r\\n  text-transform: uppercase;\\r\\n  cursor: pointer;\\r\\n  font-weight: 300;\\r\\n  transition: background-color 0.3s, color 0.3s;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  font-weight: 600;\\r\\n}\\r\\nbutton:hover i {\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\nbutton:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\ni {\\r\\n  color: #eb4d4d;\\r\\n  display: inline-block;\\r\\n  margin-right: 15px;\\r\\n  font-size: 32px;\\r\\n  line-height: 1;\\r\\n  vertical-align: text-top;\\r\\n  margin-top: -4px;\\r\\n  transition: margin 0.3s;\\r\\n}\\r\\n\\r\\n.btn-new {\\r\\n  top: 45px;\\r\\n}\\r\\n.btn-roll {\\r\\n  top: 100px;\\r\\n}\\r\\n.btn-hold {\\r\\n  top: 100px;\\r\\n}\\r\\n.btn-computer {\\r\\n  top: 100px;\\r\\n}\\r\\n.draw {\\r\\n  top: 100px;\\r\\n}\\r\\n\\r\\n.dice {\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  top: 200px;\\r\\n  transform: translateX(-50%);\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.winner {\\r\\n  background-color: #f7f7f7;\\r\\n}\\r\\n.winner .player-name {\\r\\n  font-weight: 300;\\r\\n  color: #eb4d4d;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tictactoe/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tictactoe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://tictactoe/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/img/back.jpg":
/*!**************************!*\
  !*** ./src/img/back.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"201b913cb7e6efdf9b7e0af0733b95ed.jpg\");\n\n//# sourceURL=webpack://tictactoe/./src/img/back.jpg?");

/***/ }),

/***/ "./src/img/o.png":
/*!***********************!*\
  !*** ./src/img/o.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c88e11a3a293ae4022e2d43adc08c019.png\");\n\n//# sourceURL=webpack://tictactoe/./src/img/o.png?");

/***/ }),

/***/ "./src/img/x.png":
/*!***********************!*\
  !*** ./src/img/x.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"bab7b3af68398ebf64fefd3936e6a054.png\");\n\n//# sourceURL=webpack://tictactoe/./src/img/x.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://tictactoe/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tictactoe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/game/Game.js":
/*!**************************!*\
  !*** ./src/game/Game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\nlet winConditions = [\r\n  (positions) => {\r\n    return positions\r\n      .reduce((group, item) => {\r\n        let groupItem = group.find((_items) =>\r\n          _items.some((_item) => _item.x === item.x)\r\n        );\r\n        if (groupItem) {\r\n          groupItem.push(item);\r\n        } else {\r\n          group.push([item]);\r\n        }\r\n        return group;\r\n      }, [])\r\n      .find((g) => g.length >= 3);\r\n  },\r\n  (positions) => {\r\n    return positions\r\n      .reduce((group, item) => {\r\n        let groupItem = group.find((_items) =>\r\n          _items.some((_item) => _item.y === item.y)\r\n        );\r\n        if (groupItem) {\r\n          groupItem.push(item);\r\n        } else {\r\n          group.push([item]);\r\n        }\r\n        return group;\r\n      }, [])\r\n      .find((g) => g.length >= 3);\r\n  },\r\n  (positions) => {\r\n    let winConditions = positions.filter((item) => item.x === item.y);\r\n    if (winConditions.length >= 3) return winConditions;\r\n  },\r\n  (positions) => {\r\n    let winConditions = positions.filter((item) => item.x + item.y === 2);\r\n    if (winConditions.length >= 3) return winConditions;\r\n  },\r\n];\r\nconst allAvailable = [\r\n  { x: 0, y: 0 },\r\n  { x: 0, y: 1 },\r\n  { x: 0, y: 2 },\r\n  { x: 1, y: 0 },\r\n  { x: 1, y: 1 },\r\n  { x: 1, y: 2 },\r\n  { x: 2, y: 0 },\r\n  { x: 2, y: 1 },\r\n  { x: 2, y: 2 },\r\n];\r\nclass Game {\r\n  constructor(player1, player2) {\r\n    this.player1 = player1;\r\n    this.player2 = player2;\r\n  }\r\n\r\n  setPlayer1(player) {\r\n    this.player1 = player;\r\n  }\r\n  setPlayer2(player) {\r\n    this.player2 = player;\r\n  }\r\n\r\n  start() {\r\n    this.player1.isActive = true;\r\n    this.player2.isActive = false;\r\n    // if (this.player1.type === 1) {\r\n    //   this.player1.setActive(true);\r\n    // }\r\n    // this.player2.setActive(false);\r\n    // this.activePlayer = this.player1;\r\n  }\r\n\r\n  getActivePlayer() {\r\n    console.log(\"palyer 1 is active\", this.player1.isActive);\r\n    console.log(\"palyer 2 is active\", this.player2.isActive);\r\n    if (this.player1.isActive) {\r\n      return { icon: \"x\", player: this.player1 };\r\n    } else if (this.player2.isActive) {\r\n      return { icon: \"o\", player: this.player2 };\r\n    }\r\n  }\r\n  getIdlePlayer() {\r\n    if (!this.player1.isActive) {\r\n      return this.player1;\r\n    } else if (!this.player2.isActive) {\r\n      return this.player2;\r\n    }\r\n  }\r\n\r\n  remaining(player1occupied, player2occupied) {\r\n    let allOccupied = [...player1occupied, ...player2occupied];\r\n    return allAvailable.filter(\r\n      (_position) =>\r\n        !allOccupied.some(\r\n          (occupied) => occupied.x === _position.x && occupied.y === _position.y\r\n        )\r\n    );\r\n  }\r\n\r\n  toggleActivePlayer() {\r\n    this.player1.isActive = !this.player1.isActive;\r\n    this.player2.isActive = !this.player2.isActive;\r\n\r\n    let activePlayer = this.getActivePlayer();\r\n    // activePlayer.player.setActive(true);\r\n    if (activePlayer.player.type === 1) {\r\n      activePlayer.player.startThinking();\r\n    }\r\n\r\n    console.log(\"palyer 1 is active\", this.player1.isActive);\r\n    console.log(\"palyer 2 is active\", this.player2.isActive);\r\n    // if (this.player1.isActive) {\r\n    //   this.activePlayer = this.player1;\r\n    //   return;\r\n    // }\r\n    // this.activePlayer = this.player2;\r\n  }\r\n  process() {\r\n    console.log(\"process\");\r\n    let winPosition = this.checkIfwin(this.getActivePlayer().player.position);\r\n    if (winPosition) {\r\n      return {\r\n        win: true,\r\n        winner: this.getActivePlayer(),\r\n        winPosition: winPosition,\r\n      };\r\n    } else if (\r\n      this.remaining(this.player1.position, this.player2.position).length <= 0\r\n    ) {\r\n      return {\r\n        win: true,\r\n        winner: null,\r\n        winPosition: [],\r\n      };\r\n    } else {\r\n      this.toggleActivePlayer();\r\n      return { win: false, winner: null, winPosition: [] };\r\n    }\r\n  }\r\n\r\n  checkIfwin(positions) {\r\n    if (positions.length < 3) {\r\n      return false;\r\n    } else {\r\n      for (let condition of winConditions) {\r\n        let _condition = condition(positions);\r\n        // console.log(_condition);\r\n        if (_condition) {\r\n          return _condition;\r\n        }\r\n      }\r\n      return false;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tictactoe/./src/game/Game.js?");

/***/ }),

/***/ "./src/game/GameLogic.js":
/*!*******************************!*\
  !*** ./src/game/GameLogic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"minMax\": () => (/* binding */ minMax)\n/* harmony export */ });\nfunction minMax(player1, player2) {\r\n  let board = [{}, {}, {}];\r\n  for (let move of player1) {\r\n    board[move.x][move.y] = \"o\";\r\n  }\r\n  for (let move of player2) {\r\n    board[move.x][move.y] = \"x\";\r\n  }\r\n  for (let i = 0; i < 3; i++) {\r\n    for (let j = 0; j < 3; j++) {\r\n      if (!board[i][j]) {\r\n        board[i][j] = \"\";\r\n      }\r\n    }\r\n  }\r\n\r\n  let bestMove = findBestMove(board);\r\n\r\n  return { x: bestMove.row, y: bestMove.col };\r\n}\r\n\r\nlet player = \"o\",\r\n  opponent = \"x\";\r\nfunction isMovesLeft(board) {\r\n  for (let i = 0; i < 3; i++)\r\n    for (let j = 0; j < 3; j++) if (board[i][j] == \"\") return true;\r\n  return false;\r\n}\r\n\r\nfunction evaluate(b) {\r\n  // Checking for Rows for X or O victory.\r\n  for (let row = 0; row < 3; row++) {\r\n    if (b[row][0] == b[row][1] && b[row][1] == b[row][2]) {\r\n      if (b[row][0] == player) return +10;\r\n      else if (b[row][0] == opponent) return -10;\r\n    }\r\n  }\r\n\r\n  // Checking for Columns for X or O victory.\r\n  for (let col = 0; col < 3; col++) {\r\n    if (b[0][col] == b[1][col] && b[1][col] == b[2][col]) {\r\n      if (b[0][col] == player) return +10;\r\n      else if (b[0][col] == opponent) return -10;\r\n    }\r\n  }\r\n\r\n  // Checking for Diagonals for X or O victory.\r\n  if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {\r\n    if (b[0][0] == player) return +10;\r\n    else if (b[0][0] == opponent) return -10;\r\n  }\r\n\r\n  if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {\r\n    if (b[0][2] == player) return +10;\r\n    else if (b[0][2] == opponent) return -10;\r\n  }\r\n\r\n  // Else if none of them have won then return 0\r\n  return 0;\r\n}\r\n\r\n// This is the minimax function. It considers all\r\n// the possible ways the game can go and returns\r\n// the value of the board\r\nfunction minimax(board, depth, isMax) {\r\n  let score = evaluate(board);\r\n\r\n  // If Maximizer has won the game return his/her\r\n  // evaluated score\r\n  if (score == 10) return score;\r\n\r\n  // If Minimizer has won the game return his/her\r\n  // evaluated score\r\n  if (score == -10) return score;\r\n\r\n  // If there are no more moves and no winner then\r\n  // it is a tie\r\n  if (isMovesLeft(board) == false) return 0;\r\n\r\n  // If this maximizer's move\r\n  if (isMax) {\r\n    let best = -1000;\r\n\r\n    // Traverse all cells\r\n    for (let i = 0; i < 3; i++) {\r\n      for (let j = 0; j < 3; j++) {\r\n        // Check if cell is empty\r\n        if (board[i][j] == \"\") {\r\n          // Make the move\r\n          board[i][j] = player;\r\n          best = Math.max(best, minimax(board, depth + 1, !isMax));\r\n\r\n          // Undo the move\r\n          board[i][j] = \"\";\r\n        }\r\n      }\r\n    }\r\n    return best;\r\n  }\r\n\r\n  // If this minimizer's move\r\n  else {\r\n    let best = 1000;\r\n\r\n    // Traverse all cells\r\n    for (let i = 0; i < 3; i++) {\r\n      for (let j = 0; j < 3; j++) {\r\n        // Check if cell is empty\r\n        if (board[i][j] == \"\") {\r\n          // Make the move\r\n          board[i][j] = opponent;\r\n\r\n          // Call minimax recursively and choose\r\n          // the minimum value\r\n          best = Math.min(best, minimax(board, depth + 1, !isMax));\r\n\r\n          // Undo the move\r\n          board[i][j] = \"\";\r\n        }\r\n      }\r\n    }\r\n    return best;\r\n  }\r\n}\r\n\r\n// This will return the best possible move for the player\r\nfunction findBestMove(board) {\r\n  let bestVal = -1000;\r\n  let bestMove = {};\r\n  bestMove.row = -1;\r\n  bestMove.col = -1;\r\n\r\n  // Traverse all cells, evaluate minimax function for\r\n  // all empty cells. And return the cell with optimal\r\n  // value.\r\n  for (let i = 0; i < 3; i++) {\r\n    for (let j = 0; j < 3; j++) {\r\n      // Check if cell is empty\r\n      if (board[i][j] == \"\") {\r\n        // Make the move\r\n        board[i][j] = player;\r\n\r\n        // compute evaluation function for this\r\n        // move.\r\n        let moveVal = minimax(board, 0, false);\r\n\r\n        // Undo the move\r\n        board[i][j] = \"\";\r\n\r\n        // If the value of the current move is\r\n        // more than the best value, then update\r\n        // best/\r\n        if (moveVal > bestVal) {\r\n          bestMove.row = i;\r\n          bestMove.col = j;\r\n          bestVal = moveVal;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return bestMove;\r\n}\r\n\n\n//# sourceURL=webpack://tictactoe/./src/game/GameLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/Game */ \"./src/game/Game.js\");\n/* harmony import */ var _objects_Human__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Human */ \"./src/objects/Human.js\");\n/* harmony import */ var _objects_Computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/Computer */ \"./src/objects/Computer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_UIController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/UIController */ \"./src/ui/UIController.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet ui = new _ui_UIController__WEBPACK_IMPORTED_MODULE_4__.default();\r\nlet player1,\r\n  player2,\r\n  gamePlaying = true;\r\nlet game = null;\r\n\r\nvar initiateComponents = function () {\r\n  gamePlaying = true;\r\n  ui.init();\r\n  player1 = new _objects_Human__WEBPACK_IMPORTED_MODULE_1__.Human();\r\n  player2 = new _objects_Computer__WEBPACK_IMPORTED_MODULE_2__.Computer();\r\n  // player1.setActive(true);\r\n\r\n  game = new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Game(player1, player2);\r\n  // game.activePlayer = player1;\r\n\r\n  // player1.listen(\"think\", (position) => {\r\n  //   next(position);\r\n  // });\r\n  player2.listen(\"think\", (position) => {\r\n    next(position);\r\n  });\r\n  player2.startThinking();\r\n  game.start();\r\n};\r\n\r\nvar setUpEvents = function () {\r\n  document\r\n    .querySelector(ui.elements.newGame)\r\n    .addEventListener(\"click\", function () {\r\n      initiateComponents();\r\n    });\r\n\r\n  document\r\n    .querySelector(ui.elements.board)\r\n    .addEventListener(\"click\", function (event) {\r\n      let targetId = event.target.id;\r\n      let targets = targetId.split(\"-\")[1];\r\n      var element1 = parseFloat(targets.charAt(0));\r\n      var element2 = parseFloat(targets.charAt(1));\r\n      next({ x: element1, y: element2 });\r\n    });\r\n  // on computer button click set second player as computer\r\n  document\r\n    .querySelector(ui.elements.computer)\r\n    .addEventListener(\"click\", function () {\r\n      game.player1 = new _objects_Computer__WEBPACK_IMPORTED_MODULE_2__.Computer();\r\n      game.player1.listen(\"think\", (position) => {\r\n        next(position);\r\n      });\r\n      game.player2 = new _objects_Computer__WEBPACK_IMPORTED_MODULE_2__.Computer();\r\n      game.player2.listen(\"think\", (position) => {\r\n        next(position);\r\n      });\r\n      game.activePlayer = game.player1;\r\n      game.player1.startThinking();\r\n    });\r\n};\r\n\r\nfunction next(position) {\r\n  if (gamePlaying) {\r\n    // let itemId = event.target.id;\r\n    let activePlayer = game.getActivePlayer();\r\n    let idlePlayer = game.getIdlePlayer();\r\n    console.log(\"activeplayer\", activePlayer);\r\n    console.log(\"idleplayer\", idlePlayer);\r\n    activePlayer.player.addPosition(position);\r\n    ui.render(position, activePlayer.icon);\r\n\r\n    if (idlePlayer.type === 1) {\r\n      idlePlayer.watch(position);\r\n    }\r\n\r\n    let { win, winner, winPosition } = game.process();\r\n    if (win) {\r\n      if (winner) {\r\n        ui.setWinnerStatus(winner.player.type, winPosition);\r\n      } else {\r\n        ui.setWinnerStatus(null, null);\r\n      }\r\n      gamePlaying = false;\r\n    } else {\r\n      ui.toggleActivePanel();\r\n    }\r\n  }\r\n}\r\n\r\ninitiateComponents();\r\nsetUpEvents();\r\n\r\n// init();\r\n\n\n//# sourceURL=webpack://tictactoe/./src/index.js?");

/***/ }),

/***/ "./src/objects/Computer.js":
/*!*********************************!*\
  !*** ./src/objects/Computer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Computer\": () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/objects/Player.js\");\n/* harmony import */ var _game_GameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/GameLogic */ \"./src/game/GameLogic.js\");\n\r\n\r\n\r\nconst allAvailable = [\r\n  { x: 0, y: 0 },\r\n  { x: 0, y: 1 },\r\n  { x: 0, y: 2 },\r\n  { x: 1, y: 0 },\r\n  { x: 1, y: 1 },\r\n  { x: 1, y: 2 },\r\n  { x: 2, y: 0 },\r\n  { x: 2, y: 1 },\r\n  { x: 2, y: 2 },\r\n];\r\n\r\nclass Computer extends _Player__WEBPACK_IMPORTED_MODULE_0__.Player {\r\n  constructor() {\r\n    super(1);\r\n    this.position1 = [];\r\n  }\r\n  listen(listenType, next) {\r\n    if (listenType === \"think\") this.thinkCallBack = next;\r\n  }\r\n  think() {\r\n    // let allOccupied = [...this.position, ...this.position1];\r\n    // let allRemainingPositions = allAvailable.filter(\r\n    //   (_position) =>\r\n    //     !allOccupied.some(\r\n    //       (occupied) => occupied.x === _position.x && occupied.y === _position.y\r\n    //     )\r\n    // );\r\n    let finilizedPosition = (0,_game_GameLogic__WEBPACK_IMPORTED_MODULE_1__.minMax)(this.position, this.position1, 2);\r\n\r\n    this.thinkCallBack(finilizedPosition);\r\n  }\r\n\r\n  startThinking() {\r\n    console.log(\"set active computer\");\r\n    // super.setActive(active);\r\n    // if (active) {\r\n    console.log(\"computer is playing now\");\r\n    setTimeout(() => {\r\n      this.think();\r\n    }, 1000);\r\n    // }\r\n  }\r\n\r\n  watch(position) {\r\n    // console.log(this.position1);\r\n    this.position1 = [...this.position1, position];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tictactoe/./src/objects/Computer.js?");

/***/ }),

/***/ "./src/objects/Human.js":
/*!******************************!*\
  !*** ./src/objects/Human.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Human\": () => (/* binding */ Human)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/objects/Player.js\");\n\r\n\r\nclass Human extends _Player__WEBPACK_IMPORTED_MODULE_0__.Player {\r\n  constructor() {\r\n    super(0);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tictactoe/./src/objects/Human.js?");

/***/ }),

/***/ "./src/objects/Player.js":
/*!*******************************!*\
  !*** ./src/objects/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\r\n  constructor(type) {\r\n    this.isActive = false;\r\n    this.type = type;\r\n    this.position = [];\r\n  }\r\n  addPosition(position) {\r\n    // this.i.push(element1);\r\n    // this.j.push(element2);\r\n    this.position = [...this.position, position];\r\n  }\r\n  setActive(status) {\r\n    console.log(\"setactive called by \", this.type, status);\r\n    this.isActive = status;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tictactoe/./src/objects/Player.js?");

/***/ }),

/***/ "./src/ui/UIController.js":
/*!********************************!*\
  !*** ./src/ui/UIController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _img_x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/x.png */ \"./src/img/x.png\");\n/* harmony import */ var _img_o_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/o.png */ \"./src/img/o.png\");\n\r\n\r\n\r\nclass UI {\r\n  constructor() {\r\n    this.elements = {\r\n      board: \".board\",\r\n      newGame: \".btn-new\",\r\n      computer: \".btn-computer\",\r\n    };\r\n    this.html = {\r\n      x: `<div class=\"x\"><img src =${_img_x_png__WEBPACK_IMPORTED_MODULE_0__.default} width=\"100\" height=\"100\"></div>`,\r\n      o: `<div class=\"o\"><img src =${_img_o_png__WEBPACK_IMPORTED_MODULE_1__.default} width=\"100\" height=\"100\"></div>`,\r\n    };\r\n    this.activePanel = 0;\r\n\r\n    this.side1text = document.querySelector(\"#name-0\");\r\n    this.side2text = document.querySelector(\"#name-1\");\r\n    this.panel1 = document.querySelector(\".player-0-panel\"); //.classList.remove(\"winner\");\r\n    this.panel2 = document.querySelector(\".player-1-panel\"); //.classList.remove(\"winner\");\r\n\r\n    //document.querySelector(\".player-0-panel\").classList.add(\"active\");\r\n    //document.querySelector(\".player-1-panel\").classList.remove(\"active\");\r\n  }\r\n\r\n  render(position, type) {\r\n    if (\r\n      !document.querySelector(\"#box-\" + position.x + position.y).hasChildNodes()\r\n    ) {\r\n      document\r\n        .querySelector(\"#box-\" + position.x + position.y)\r\n        .insertAdjacentHTML(\"beforeend\", this.html[type]);\r\n    }\r\n  }\r\n\r\n  init() {\r\n    this.panel1.classList.add(\"active\");\r\n    this.panel2.classList.remove(\"active\");\r\n    this.activePanel = 0;\r\n    this.side1text.textContent = \"Player 1\";\r\n    this.side2text.textContent = \"Player 2\";\r\n    this.panel1.classList.remove(\"winner\");\r\n    this.panel2.classList.remove(\"winner\");\r\n\r\n    for (var i = 0; i < 3; i++) {\r\n      for (var j = 0; j < 3; j++) {\r\n        var parentNode = document.getElementById(\"box-\" + i + j);\r\n        while (parentNode.firstChild) {\r\n          parentNode.removeChild(parentNode.firstChild);\r\n          parentNode.classList.remove(\"win-row\");\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  toggleActivePanel() {\r\n    if (this.activePanel === 0) {\r\n      this.activePanel = 1;\r\n      this.panel2.classList.add(\"active\");\r\n      this.panel1.classList.remove(\"active\");\r\n    } else if (this.activePanel === 1) {\r\n      this.activePanel = 0;\r\n      this.panel2.classList.remove(\"active\");\r\n      this.panel1.classList.add(\"active\");\r\n    }\r\n  }\r\n\r\n  setPlayerText(side, text) {\r\n    switch (side) {\r\n      case 0:\r\n        this.side1text.textContent = text;\r\n        return;\r\n      case 1:\r\n        this.side2text.textContent = text;\r\n        return;\r\n      default:\r\n        return;\r\n    }\r\n  }\r\n\r\n  setWinnerStatus(side, positions) {\r\n    if (side && positions) {\r\n      this.setPlayerText(side, \"WINNER\");\r\n      document\r\n        .querySelector(\".player-\" + side + \"-panel\")\r\n        .classList.add(\"winner\");\r\n      positions.forEach((position) => {\r\n        document\r\n          .querySelector(\"#box-\" + position.x + position.y)\r\n          .classList.add(\"win-row\");\r\n      });\r\n    } else {\r\n      this.setPlayerText(0, \"DRAW\");\r\n      this.setPlayerText(1, \"DRAW\");\r\n      document.querySelector(\".player-\" + 0 + \"-panel\").classList.add(\"winner\");\r\n      document.querySelector(\".player-\" + 1 + \"-panel\").classList.add(\"winner\");\r\n    }\r\n  }\r\n\r\n  setActivePanel(side, action) {\r\n    let panel;\r\n    switch (side) {\r\n      case 1:\r\n        panel = this.panel1;\r\n        break;\r\n      case 2:\r\n        panel = this.panel2;\r\n        break;\r\n    }\r\n    if (action) {\r\n      panel.classList.add(\"active\");\r\n    } else {\r\n      panel.classList.remove(\"active\");\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tictactoe/./src/ui/UIController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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