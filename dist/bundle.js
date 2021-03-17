/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nbody {\n  background: #ef2d4f;\n  height: 100vh;\n}\n@media (max-width: 600px) {\n  body {\n    overflow: hidden;\n  }\n}\n\n.container {\n  border-radius: 10px;\n}\n@media (max-width: 600px) {\n  .container {\n    margin: 1rem auto;\n  }\n}\n.container .calculator {\n  width: 420px;\n  max-width: 95%;\n  margin: 0 auto;\n  padding: calc(0.05 * 100vw) 0;\n}\n@media (max-width: 600px) {\n  .container .calculator {\n    padding: 2rem 0;\n  }\n}\n.container .calculator .display {\n  width: 100%;\n  height: 150px;\n  padding: 1rem;\n  background: white;\n  border-radius: 15px 15px 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 600px) {\n  .container .calculator .display {\n    height: 120px;\n  }\n}\n.container .calculator .display h2 {\n  font-size: 4rem;\n  font-weight: 500;\n  color: #ef2d4f;\n  text-align: right;\n  width: 90%;\n  height: fit-content;\n  padding-bottom: 1rem;\n  overflow-x: auto;\n  overflow-y: hidden;\n  /* width */\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n.container .calculator .display h2::-webkit-scrollbar {\n  width: 10px;\n  border-radius: 5000px;\n  overflow: hidden;\n}\n.container .calculator .display h2::-webkit-scrollbar-track {\n  border-radius: 5000px;\n  background: #691222;\n}\n.container .calculator .display h2::-webkit-scrollbar-thumb {\n  border-radius: 5000px;\n  background: #ee4564;\n}\n.container .calculator .display h2::-webkit-scrollbar-thumb:hover {\n  background: #ee4564;\n}\n.container .calculator .buttons {\n  border-radius: 0 0 15px 15px;\n  padding: 1rem 1rem 2rem;\n  background: white;\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(4, 100px);\n  grid-template-rows: repeat(5, 100px);\n  justify-items: center;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 600px) {\n  .container .calculator .buttons {\n    grid-template-columns: repeat(4, 90px);\n    grid-template-rows: repeat(5, 90px);\n  }\n}\n.container .calculator .buttons::before {\n  content: \"\";\n  border-radius: 100px;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 3px;\n  background: #e6e6e6;\n  width: 86%;\n  transform: translateX(-50%);\n}\n.container .calculator .buttons button {\n  height: 85px;\n  width: 85px;\n  border-radius: 1000px;\n  outline: none;\n  border: none;\n  background: #e6e6e6;\n  color: #333;\n  font-size: 2.6rem;\n  font-weight: 400;\n  text-align: center;\n  margin: auto;\n  line-height: 0px;\n  cursor: pointer;\n  transition: filter 0.3s ease-in-out;\n}\n.container .calculator .buttons button:hover {\n  filter: brightness(0.8);\n}\n.container .calculator .buttons button:active {\n  filter: brightness(0.8);\n  transform: translateY(1px);\n}\n@media (max-width: 600px) {\n  .container .calculator .buttons button {\n    height: 80px;\n    width: 80px;\n    font-size: 2.2rem;\n  }\n}\n.container .calculator .buttons .top {\n  background: #333;\n  color: white;\n  font-size: 2rem;\n}\n.container .calculator .buttons .top:hover {\n  filter: brightness(1.2);\n}\n.container .calculator .buttons .top:active {\n  filter: brightness(1.2);\n}\n@media (max-width: 600px) {\n  .container .calculator .buttons .top {\n    font-size: 1.8rem;\n  }\n}\n.container .calculator .buttons .operator {\n  background: #ef2d4f;\n}\n.container .calculator .buttons .operator:hover {\n  filter: brightness(1.2);\n}\n.container .calculator .buttons .operator:active {\n  filter: brightness(1.2);\n}\n.container .calculator .buttons .zero {\n  grid-column: span 2;\n  width: 188px;\n  text-align: left;\n  padding-left: 1.9rem;\n}\n@media (max-width: 600px) {\n  .container .calculator .buttons .zero {\n    width: 170px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,mJAAA;AAAF;;AAIA;EACE,mBAAA;EACA,aAAA;AADF;AAEE;EAHF;IAII,gBAAA;EACF;AACF;;AAEA;EACE,mBAAA;AACF;AAAE;EAFF;IAGI,iBAAA;EAGF;AACF;AAFE;EACE,YAAA;EACA,cAAA;EACA,cAAA;EACA,6BAAA;AAIJ;AAHI;EALF;IAMI,eAAA;EAMJ;AACF;AALI;EACE,WAAA;EACA,aAAA;EACA,aAAA;EACA,iBAAA;EACA,4BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAON;AANM;EATF;IAUI,aAAA;EASN;AACF;AARM;EACE,eAAA;EACA,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,UAAA;EACA,mBAAA;EACA,oBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EAOA,UAAA;EAMA,WAAA;EAMA,oBAAA;AANR;AAZQ;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;AAcV;AAVQ;EACE,qBAAA;EACA,mBAAA;AAYV;AARQ;EACE,qBAAA;EACA,mBAAA;AAUV;AANQ;EACE,mBAAA;AAQV;AAJI;EACE,4BAAA;EACA,uBAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,uCAAA;EACA,oCAAA;EACA,qBAAA;EACA,uBAAA;EACA,mBAAA;AAMN;AALM;EAXF;IAYI,sCAAA;IACA,mCAAA;EAQN;AACF;AAPM;EACE,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;EACA,2BAAA;AASR;AANM;EACE,YAAA;EACA,WAAA;EACA,qBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,mCAAA;AAQR;AAPQ;EACE,uBAAA;AASV;AAPQ;EACE,uBAAA;EACA,0BAAA;AASV;AAPQ;EAtBF;IAuBI,YAAA;IACA,WAAA;IACA,iBAAA;EAUR;AACF;AARM;EACE,gBAAA;EACA,YAAA;EACA,eAAA;AAUR;AATQ;EACE,uBAAA;AAWV;AATQ;EACE,uBAAA;AAWV;AARQ;EAXF;IAYI,iBAAA;EAWR;AACF;AATM;EACE,mBAAA;AAWR;AAVQ;EACE,uBAAA;AAYV;AAVQ;EACE,uBAAA;AAYV;AATM;EACE,mBAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;AAWR;AATQ;EANF;IAOI,YAAA;EAYR;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nbody {\n  background: #ef2d4f;\n  height: 100vh;\n  @media (max-width: 600px) {\n    overflow: hidden;\n  }\n}\n\n.container {\n  border-radius: 10px;\n  @media (max-width: 600px) {\n    margin: 1rem auto;\n  }\n  .calculator {\n    width: 420px;\n    max-width: 95%;\n    margin: 0 auto;\n    padding: calc(0.05 * 100vw) 0;\n    @media (max-width: 600px) {\n      padding: 2rem 0;\n    }\n    .display {\n      width: 100%;\n      height: 150px;\n      padding: 1rem;\n      background: white;\n      border-radius: 15px 15px 0 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      @media (max-width: 600px) {\n        height: 120px;\n      }\n      h2 {\n        font-size: 4rem;\n        font-weight: 500;\n        color: #ef2d4f;\n        text-align: right;\n        width: 90%;\n        height: fit-content;\n        padding-bottom: 1rem;\n        overflow-x: auto;\n        overflow-y: hidden;\n        /* width */\n        &::-webkit-scrollbar {\n          width: 10px;\n          border-radius: 5000px;\n          overflow: hidden;\n        }\n\n        /* Track */\n        &::-webkit-scrollbar-track {\n          border-radius: 5000px;\n          background: #691222;\n        }\n\n        /* Handle */\n        &::-webkit-scrollbar-thumb {\n          border-radius: 5000px;\n          background: #ee4564;\n        }\n\n        /* Handle on hover */\n        &::-webkit-scrollbar-thumb:hover {\n          background: #ee4564;\n        }\n      }\n    }\n    .buttons {\n      border-radius: 0 0 15px 15px;\n      padding: 1rem 1rem 2rem;\n      background: white;\n      position: relative;\n      display: grid;\n      grid-template-columns: repeat(4, 100px);\n      grid-template-rows: repeat(5, 100px);\n      justify-items: center;\n      justify-content: center;\n      align-items: center;\n      @media (max-width: 600px) {\n        grid-template-columns: repeat(4, 90px);\n        grid-template-rows: repeat(5, 90px);\n      }\n      &::before {\n        content: '';\n        border-radius: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        height: 3px;\n        background: #e6e6e6;\n        width: 86%;\n        transform: translateX(-50%);\n      }\n\n      button {\n        height: 85px;\n        width: 85px;\n        border-radius: 1000px;\n        outline: none;\n        border: none;\n        background: #e6e6e6;\n        color: #333;\n        font-size: 2.6rem;\n        font-weight: 400;\n        text-align: center;\n        margin: auto;\n        line-height: 0px;\n        cursor: pointer;\n        transition: filter 0.3s ease-in-out;\n        &:hover {\n          filter: brightness(0.8);\n        }\n        &:active {\n          filter: brightness(0.8);\n          transform: translateY(1px);\n        }\n        @media (max-width: 600px) {\n          height: 80px;\n          width: 80px;\n          font-size: 2.2rem;\n        }\n      }\n      .top {\n        background: #333;\n        color: white;\n        font-size: 2rem;\n        &:hover {\n          filter: brightness(1.2);\n        }\n        &:active {\n          filter: brightness(1.2);\n        }\n\n        @media (max-width: 600px) {\n          font-size: 1.8rem;\n        }\n      }\n      .operator {\n        background: #ef2d4f;\n        &:hover {\n          filter: brightness(1.2);\n        }\n        &:active {\n          filter: brightness(1.2);\n        }\n      }\n      .zero {\n        grid-column: span 2;\n        width: 188px;\n        text-align: left;\n        padding-left: 1.9rem;\n\n        @media (max-width: 600px) {\n          width: 170px;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
    var nonce =  true ? __webpack_require__.nc : 0;

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

  if (sourceMap && typeof btoa !== 'undefined') {
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");

var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.display = '0';
        this.awaitingOperator = true;
        this.reset = function () {
            _this.display = '0';
            _this.current = null;
            _this.previous = null;
            _this.operation = null;
            _this.awaitingOperator = true;
        };
        this.getDisplay = function () { return _this.display; };
        this.getCurrent = function () { return _this.current; };
        this.getPrevious = function () { return _this.previous; };
        this.setPrevious = function () {
            _this.previous = _this.current;
        };
        this.setOperation = function (input) {
            _this.operation = input;
        };
        this.getOperation = function () { return _this.operation; };
        this.getAwaitingOperator = function () { return _this.awaitingOperator; };
        this.setAwaitingOperator = function (option) {
            _this.awaitingOperator = option;
        };
        this.divide = function () {
            _this.current = +_this.previous / +_this.current;
            _this.previous = null;
        };
        this.multiply = function () {
            _this.current = +_this.previous * +_this.current;
            _this.previous = null;
        };
        this.add = function () {
            _this.current = +_this.previous + +_this.current;
            _this.previous = null;
        };
        this.subtract = function () {
            _this.current = +_this.previous - +_this.current;
            _this.previous = null;
        };
    }
    Calculator.prototype.setDisplay = function (input) {
        this.display = input;
    };
    Calculator.prototype.setCurrent = function (input) {
        this.current = input;
    };
    return Calculator;
}());
var DOM_EVENTS = (function () {
    var digits = document.querySelectorAll('[data-digit]');
    var operators = document.querySelectorAll('[data-operator]');
    var equals = document.querySelector('[data-equals]');
    var clearBtn = document.querySelector('[data-clear]');
    var negOrPos = document.querySelector('[data-negOrPos]');
    var percent = document.querySelector('[data-percent]');
    var displayEl = document.querySelector('#displayText');
    var calculator = new Calculator();
    var updateDisplay = function () {
        displayEl.textContent = calculator.getCurrent() ? calculator.getCurrent().toString() : '0';
    };
    var formatDisplay = function (input) {
        var value;
        if (calculator.getAwaitingOperator()) {
            value =
                calculator.getDisplay() === '0'
                    ? input === '.'
                        ? '0.'
                        : input
                    : calculator.getDisplay() + input;
        }
        else {
            value = calculator.getCurrent() ? calculator.getCurrent() + input : input;
        }
        return value.toString();
    };
    var calculate = function () {
        switch (calculator.getOperation()) {
            case '/':
                calculator.divide();
                break;
            case '*':
                calculator.multiply();
                break;
            case '+':
                calculator.add();
                break;
            case '-':
                calculator.subtract();
                break;
            default:
                return;
        }
    };
    var numberInput = function (input) {
        if (input === '.' && calculator.getDisplay().includes('.'))
            return;
        if (calculator.getAwaitingOperator()) {
            calculator.setCurrent(formatDisplay(input));
            calculator.setDisplay(formatDisplay(input));
        }
        else {
            console.log(calculator.getCurrent());
            calculator.setCurrent(formatDisplay(input));
            calculator.setDisplay(calculator.getCurrent().toString());
            calculator.setAwaitingOperator(true);
        }
        updateDisplay();
    };
    var operatorInput = function (input) {
        calculator.getAwaitingOperator() && calculate();
        updateDisplay();
        calculator.setOperation(input);
        calculator.setPrevious();
        calculator.setCurrent(null);
        calculator.setAwaitingOperator(false);
    };
    digits.forEach(function (digit) {
        digit.addEventListener('click', function () {
            numberInput(digit.value);
        });
    });
    operators.forEach(function (operator) {
        operator.addEventListener('click', function () {
            operatorInput(operator.value);
        });
    });
    equals.addEventListener('click', function () {
        calculate();
        updateDisplay();
    });
    clearBtn.addEventListener('click', function () {
        calculator.reset();
        updateDisplay();
    });
    negOrPos.addEventListener('click', function () {
        calculator.setCurrent(calculator.getCurrent() > 0
            ? -Math.abs(+calculator.getCurrent())
            : Math.abs(+calculator.getCurrent()));
        calculator.setDisplay(calculator.getCurrent().toString());
        updateDisplay();
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsZ0hBQWdILElBQUksa0JBQWtCO0FBQ3RJO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSwyQkFBMkIsZ0tBQWdLLEdBQUcsVUFBVSx3QkFBd0Isa0JBQWtCLEdBQUcsNkJBQTZCLFVB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QUMsT0FBTyxDQUFDLGVBQUs7UUFDbEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUM5QixXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFRO1FBQ3hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDakMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMvQixTQUFTLEVBQUU7UUFDWCxhQUFhLEVBQUU7SUFDakIsQ0FBQyxDQUFDO0lBRUYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUNqQyxVQUFVLENBQUMsS0FBSyxFQUFFO1FBQ2xCLGFBQWEsRUFBRTtJQUNqQixDQUFDLENBQUM7SUFFRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ2pDLFVBQVUsQ0FBQyxVQUFVLENBQ25CLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FDdkM7UUFDRCxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6RCxhQUFhLEVBQUU7SUFDakIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEVBQUUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZWYyZDRmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIH1cXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBtYXgtd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogY2FsYygwLjA1ICogMTAwdncpIDA7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNvbnRhaW5lciAuY2FsY3VsYXRvciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuZGlzcGxheSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGFpbmVyIC5jYWxjdWxhdG9yIC5kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuZGlzcGxheSBoMiB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNlZjJkNGY7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgLyogd2lkdGggKi9cXG4gIC8qIFRyYWNrICovXFxuICAvKiBIYW5kbGUgKi9cXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbn1cXG4uY29udGFpbmVyIC5jYWxjdWxhdG9yIC5kaXNwbGF5IGgyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb250YWluZXIgLmNhbGN1bGF0b3IgLmRpc3BsYXkgaDI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwMDBweDtcXG4gIGJhY2tncm91bmQ6ICM2OTEyMjI7XFxufVxcbi5jb250YWluZXIgLmNhbGN1bGF0b3IgLmRpc3BsYXkgaDI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwMDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZTQ1NjQ7XFxufVxcbi5jb250YWluZXIgLmNhbGN1bGF0b3IgLmRpc3BsYXkgaDI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZTQ1NjQ7XFxufVxcbi5jb250YWluZXIgLmNhbGN1bGF0b3IgLmJ1dHRvbnMge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMTAwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMTAwcHgpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb250YWluZXIgLmNhbGN1bGF0b3IgLmJ1dHRvbnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCA5MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgOTBweCk7XFxuICB9XFxufVxcbi5jb250YWluZXIgLmNhbGN1bGF0b3IgLmJ1dHRvbnM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xcbiAgd2lkdGg6IDg2JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuYnV0dG9ucyBidXR0b24ge1xcbiAgaGVpZ2h0OiA4NXB4O1xcbiAgd2lkdGg6IDg1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY29udGFpbmVyIC5jYWxjdWxhdG9yIC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuYnV0dG9ucyBidXR0b246YWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuYnV0dG9ucyBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuYnV0dG9ucyAudG9wIHtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5jb250YWluZXIgLmNhbGN1bGF0b3IgLmJ1dHRvbnMgLnRvcDpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuYnV0dG9ucyAudG9wOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGFpbmVyIC5jYWxjdWxhdG9yIC5idXR0b25zIC50b3Age1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuYnV0dG9ucyAub3BlcmF0b3Ige1xcbiAgYmFja2dyb3VuZDogI2VmMmQ0ZjtcXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuYnV0dG9ucyAub3BlcmF0b3I6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcbi5jb250YWluZXIgLmNhbGN1bGF0b3IgLmJ1dHRvbnMgLm9wZXJhdG9yOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuLmNvbnRhaW5lciAuY2FsY3VsYXRvciAuYnV0dG9ucyAuemVybyB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgd2lkdGg6IDE4OHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMS45cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb250YWluZXIgLmNhbGN1bGF0b3IgLmJ1dHRvbnMgLnplcm8ge1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxtSkFBQTtBQUFGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBREY7QUFFRTtFQUhGO0lBSUksZ0JBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUFFO0VBRkY7SUFHSSxpQkFBQTtFQUdGO0FBQ0Y7QUFGRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBSUo7QUFISTtFQUxGO0lBTUksZUFBQTtFQU1KO0FBQ0Y7QUFMSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9OO0FBTk07RUFURjtJQVVJLGFBQUE7RUFTTjtBQUNGO0FBUk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBT0EsVUFBQTtFQU1BLFdBQUE7RUFNQSxvQkFBQTtBQU5SO0FBWlE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWNWO0FBVlE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBWVY7QUFSUTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFVVjtBQU5RO0VBQ0UsbUJBQUE7QUFRVjtBQUpJO0VBQ0UsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1OO0FBTE07RUFYRjtJQVlJLHNDQUFBO0lBQ0EsbUNBQUE7RUFRTjtBQUNGO0FBUE07RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBU1I7QUFOTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQVFSO0FBUFE7RUFDRSx1QkFBQTtBQVNWO0FBUFE7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0FBU1Y7QUFQUTtFQXRCRjtJQXVCSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VBVVI7QUFDRjtBQVJNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVVSO0FBVFE7RUFDRSx1QkFBQTtBQVdWO0FBVFE7RUFDRSx1QkFBQTtBQVdWO0FBUlE7RUFYRjtJQVlJLGlCQUFBO0VBV1I7QUFDRjtBQVRNO0VBQ0UsbUJBQUE7QUFXUjtBQVZRO0VBQ0UsdUJBQUE7QUFZVjtBQVZRO0VBQ0UsdUJBQUE7QUFZVjtBQVRNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQVdSO0FBVFE7RUFORjtJQU9JLFlBQUE7RUFZUjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LFxcbiAgICBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNlZjJkNGY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIH1cXG4gIC5jYWxjdWxhdG9yIHtcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDk1JTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IGNhbGMoMC4wNSAqIDEwMHZ3KSAwO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgIH1cXG4gICAgLmRpc3BsYXkge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIGhlaWdodDogMTIwcHg7XFxuICAgICAgfVxcbiAgICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBjb2xvcjogI2VmMmQ0ZjtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgICAgICAvKiB3aWR0aCAqL1xcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwMHB4O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogVHJhY2sgKi9cXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwMHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjkxMjIyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogSGFuZGxlICovXFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMDBweDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VlNDU2NDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWU0NTY0O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuYnV0dG9ucyB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXG4gICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMnJlbTtcXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxMDBweCk7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMTAwcHgpO1xcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgOTBweCk7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA5MHB4KTtcXG4gICAgICB9XFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDNweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxuICAgICAgICB3aWR0aDogODYlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xcbiAgICAgICAgd2lkdGg6IDg1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC50b3Age1xcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG4gICAgICAgIH1cXG4gICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC5vcGVyYXRvciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWYyZDRmO1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLnplcm8ge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgICAgIHdpZHRoOiAxODhweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuOXJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgICB3aWR0aDogMTcwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJ1xuXG5jbGFzcyBDYWxjdWxhdG9yIHtcbiAgcHJpdmF0ZSBkaXNwbGF5OiBzdHJpbmcgPSAnMCdcbiAgcHJpdmF0ZSBjdXJyZW50OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpdmF0ZSBwcmV2aW91czogbnVtYmVyIHwgc3RyaW5nXG4gIHByaXZhdGUgb3BlcmF0aW9uOiBzdHJpbmdcbiAgcHJpdmF0ZSBhd2FpdGluZ09wZXJhdG9yOiBib29sZWFuID0gdHJ1ZVxuXG4gIHB1YmxpYyByZXNldCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmRpc3BsYXkgPSAnMCdcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gICAgdGhpcy5wcmV2aW91cyA9IG51bGxcbiAgICB0aGlzLm9wZXJhdGlvbiA9IG51bGxcbiAgICB0aGlzLmF3YWl0aW5nT3BlcmF0b3IgPSB0cnVlXG4gIH1cblxuICBwdWJsaWMgZ2V0RGlzcGxheSA9ICgpOiBzdHJpbmcgPT4gdGhpcy5kaXNwbGF5XG5cbiAgcHVibGljIHNldERpc3BsYXkoaW5wdXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheSA9IGlucHV0XG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VycmVudCA9ICgpOiBudW1iZXIgfCBzdHJpbmcgPT4gdGhpcy5jdXJyZW50XG5cbiAgcHVibGljIHNldEN1cnJlbnQoaW5wdXQ6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudCA9IGlucHV0XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJldmlvdXMgPSAoKTogbnVtYmVyIHwgc3RyaW5nID0+IHRoaXMucHJldmlvdXNcblxuICBwdWJsaWMgc2V0UHJldmlvdXMgPSAoKSA9PiB7XG4gICAgdGhpcy5wcmV2aW91cyA9IHRoaXMuY3VycmVudFxuICB9XG5cbiAgcHVibGljIHNldE9wZXJhdGlvbiA9IChpbnB1dDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgdGhpcy5vcGVyYXRpb24gPSBpbnB1dFxuICB9XG5cbiAgcHVibGljIGdldE9wZXJhdGlvbiA9ICgpOiBzdHJpbmcgPT4gdGhpcy5vcGVyYXRpb25cblxuICBwdWJsaWMgZ2V0QXdhaXRpbmdPcGVyYXRvciA9ICgpOiBib29sZWFuID0+IHRoaXMuYXdhaXRpbmdPcGVyYXRvclxuXG4gIHB1YmxpYyBzZXRBd2FpdGluZ09wZXJhdG9yID0gKG9wdGlvbjogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgIHRoaXMuYXdhaXRpbmdPcGVyYXRvciA9IG9wdGlvblxuICB9XG5cbiAgcHVibGljIGRpdmlkZSA9ICgpID0+IHtcbiAgICB0aGlzLmN1cnJlbnQgPSArdGhpcy5wcmV2aW91cyAvICt0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnByZXZpb3VzID0gbnVsbFxuICB9XG5cbiAgcHVibGljIG11bHRpcGx5ID0gKCkgPT4ge1xuICAgIHRoaXMuY3VycmVudCA9ICt0aGlzLnByZXZpb3VzICogK3RoaXMuY3VycmVudFxuICAgIHRoaXMucHJldmlvdXMgPSBudWxsXG4gIH1cblxuICBwdWJsaWMgYWRkID0gKCkgPT4ge1xuICAgIHRoaXMuY3VycmVudCA9ICt0aGlzLnByZXZpb3VzICsgK3RoaXMuY3VycmVudFxuICAgIHRoaXMucHJldmlvdXMgPSBudWxsXG4gIH1cblxuICBwdWJsaWMgc3VidHJhY3QgPSAoKSA9PiB7XG4gICAgdGhpcy5jdXJyZW50ID0gK3RoaXMucHJldmlvdXMgLSArdGhpcy5jdXJyZW50XG4gICAgdGhpcy5wcmV2aW91cyA9IG51bGxcbiAgfVxufVxuXG5jb25zdCBET01fRVZFTlRTID0gKCgpID0+IHtcbiAgY29uc3QgZGlnaXRzOiBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRpZ2l0XScpXG4gIGNvbnN0IG9wZXJhdG9yczogTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vcGVyYXRvcl0nKVxuICBjb25zdCBlcXVhbHM6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZXF1YWxzXScpXG4gIGNvbnN0IGNsZWFyQnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNsZWFyXScpXG4gIGNvbnN0IG5lZ09yUG9zOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5lZ09yUG9zXScpXG4gIGNvbnN0IHBlcmNlbnQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGVyY2VudF0nKVxuICBjb25zdCBkaXNwbGF5RWw6IEhUTUxIZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5VGV4dCcpXG5cbiAgY29uc3QgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKClcblxuICBjb25zdCB1cGRhdGVEaXNwbGF5ID0gKCk6IHZvaWQgPT4ge1xuICAgIGRpc3BsYXlFbC50ZXh0Q29udGVudCA9IGNhbGN1bGF0b3IuZ2V0Q3VycmVudCgpID8gY2FsY3VsYXRvci5nZXRDdXJyZW50KCkudG9TdHJpbmcoKSA6ICcwJ1xuICB9XG5cbiAgY29uc3QgZm9ybWF0RGlzcGxheSA9IChpbnB1dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBsZXQgdmFsdWU6IHN0cmluZ1xuXG4gICAgaWYgKGNhbGN1bGF0b3IuZ2V0QXdhaXRpbmdPcGVyYXRvcigpKSB7XG4gICAgICB2YWx1ZSA9XG4gICAgICAgIGNhbGN1bGF0b3IuZ2V0RGlzcGxheSgpID09PSAnMCdcbiAgICAgICAgICA/IGlucHV0ID09PSAnLidcbiAgICAgICAgICAgID8gJzAuJ1xuICAgICAgICAgICAgOiBpbnB1dFxuICAgICAgICAgIDogY2FsY3VsYXRvci5nZXREaXNwbGF5KCkgKyBpbnB1dFxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGNhbGN1bGF0b3IuZ2V0Q3VycmVudCgpID8gY2FsY3VsYXRvci5nZXRDdXJyZW50KCkgKyBpbnB1dCA6IGlucHV0XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gIH1cblxuICBjb25zdCBjYWxjdWxhdGUgPSAoKTogdm9pZCA9PiB7XG4gICAgc3dpdGNoIChjYWxjdWxhdG9yLmdldE9wZXJhdGlvbigpKSB7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgY2FsY3VsYXRvci5kaXZpZGUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGNhbGN1bGF0b3IubXVsdGlwbHkoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGNhbGN1bGF0b3IuYWRkKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICBjYWxjdWxhdG9yLnN1YnRyYWN0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG51bWJlcklucHV0ID0gKGlucHV0OiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBpZiAoaW5wdXQgPT09ICcuJyAmJiBjYWxjdWxhdG9yLmdldERpc3BsYXkoKS5pbmNsdWRlcygnLicpKSByZXR1cm5cbiAgICBpZiAoY2FsY3VsYXRvci5nZXRBd2FpdGluZ09wZXJhdG9yKCkpIHtcbiAgICAgIGNhbGN1bGF0b3Iuc2V0Q3VycmVudChmb3JtYXREaXNwbGF5KGlucHV0KSlcbiAgICAgIGNhbGN1bGF0b3Iuc2V0RGlzcGxheShmb3JtYXREaXNwbGF5KGlucHV0KSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coY2FsY3VsYXRvci5nZXRDdXJyZW50KCkpXG4gICAgICBjYWxjdWxhdG9yLnNldEN1cnJlbnQoZm9ybWF0RGlzcGxheShpbnB1dCkpXG4gICAgICBjYWxjdWxhdG9yLnNldERpc3BsYXkoY2FsY3VsYXRvci5nZXRDdXJyZW50KCkudG9TdHJpbmcoKSlcbiAgICAgIGNhbGN1bGF0b3Iuc2V0QXdhaXRpbmdPcGVyYXRvcih0cnVlKVxuICAgIH1cbiAgICB1cGRhdGVEaXNwbGF5KClcbiAgfVxuXG4gIGNvbnN0IG9wZXJhdG9ySW5wdXQgPSAoaW5wdXQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGNhbGN1bGF0b3IuZ2V0QXdhaXRpbmdPcGVyYXRvcigpICYmIGNhbGN1bGF0ZSgpXG4gICAgdXBkYXRlRGlzcGxheSgpXG4gICAgY2FsY3VsYXRvci5zZXRPcGVyYXRpb24oaW5wdXQpXG4gICAgY2FsY3VsYXRvci5zZXRQcmV2aW91cygpXG4gICAgY2FsY3VsYXRvci5zZXRDdXJyZW50KG51bGwpXG4gICAgY2FsY3VsYXRvci5zZXRBd2FpdGluZ09wZXJhdG9yKGZhbHNlKVxuICB9XG5cbiAgZGlnaXRzLmZvckVhY2goZGlnaXQgPT4ge1xuICAgIGRpZ2l0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbnVtYmVySW5wdXQoZGlnaXQudmFsdWUpXG4gICAgfSlcbiAgfSlcblxuICBvcGVyYXRvcnMuZm9yRWFjaChvcGVyYXRvciA9PiB7XG4gICAgb3BlcmF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gICAgICBvcGVyYXRvcklucHV0KG9wZXJhdG9yLnZhbHVlKVxuICAgIH0pXG4gIH0pXG5cbiAgZXF1YWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICAgIGNhbGN1bGF0ZSgpXG4gICAgdXBkYXRlRGlzcGxheSgpXG4gIH0pXG5cbiAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gICAgY2FsY3VsYXRvci5yZXNldCgpXG4gICAgdXBkYXRlRGlzcGxheSgpXG4gIH0pXG5cbiAgbmVnT3JQb3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gICAgY2FsY3VsYXRvci5zZXRDdXJyZW50KFxuICAgICAgY2FsY3VsYXRvci5nZXRDdXJyZW50KCkgPiAwXG4gICAgICAgID8gLU1hdGguYWJzKCtjYWxjdWxhdG9yLmdldEN1cnJlbnQoKSlcbiAgICAgICAgOiBNYXRoLmFicygrY2FsY3VsYXRvci5nZXRDdXJyZW50KCkpXG4gICAgKVxuICAgIGNhbGN1bGF0b3Iuc2V0RGlzcGxheShjYWxjdWxhdG9yLmdldEN1cnJlbnQoKS50b1N0cmluZygpKVxuICAgIHVwZGF0ZURpc3BsYXkoKVxuICB9KVxufSkoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==