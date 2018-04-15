(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["reactformlib"] = factory(require("react"));
	else
		root["reactformlib"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheetManager = exports.ServerStyleSheet = exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isPlainObject = __webpack_require__(31);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _stylis = __webpack_require__(33);

var _stylis2 = _interopRequireDefault(_stylis);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(37);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$2(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$2;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

//      
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if ((0, _isPlainObject2.default)(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      return [].concat(ruleSet, flatten(chunk, executionContext));
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    return ruleSet.concat(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    (0, _isPlainObject2.default)(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

//      
var stylis = new _stylis2.default({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: true
});

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

//      
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var charsLength = chars.length;

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = chars[x % charsLength] + name;
  }

  return chars[x % charsLength] + name;
};

//      


var interleave = function interleave(strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
};

//      
var css = function css(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(strings, interpolations));
};

//      
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//gm;

var extractCompsFromCSS = function extractCompsFromCSS(maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
};

//      
/* eslint-disable camelcase, no-undef */

var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : null;
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

//      
/* eslint-disable no-underscore-dangle */
/*
 * Browser Style Sheet with Rehydration
 *
 * <style data-styled-components="x y z"
 *        data-styled-components-is-local="true">
 *   /· sc-component-id: a ·/
 *   .sc-a { ... }
 *   .x { ... }
 *   /· sc-component-id: b ·/
 *   .sc-b { ... }
 *   .y { ... }
 *   .z { ... }
 * </style>
 *
 * Note: replace · with * in the above snippet.
 * */
var COMPONENTS_PER_TAG = 40;

var BrowserTag = function () {
  function BrowserTag(el, isLocal) {
    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    classCallCheck(this, BrowserTag);

    this.el = el;
    this.isLocal = isLocal;
    this.ready = false;

    var extractedComps = extractCompsFromCSS(existingSource);

    this.size = extractedComps.length;
    this.components = extractedComps.reduce(function (acc, obj) {
      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
      return acc;
    }, {});
  }

  BrowserTag.prototype.isFull = function isFull() {
    return this.size >= COMPONENTS_PER_TAG;
  };

  BrowserTag.prototype.addComponent = function addComponent(componentId) {
    if (!this.ready) this.replaceElement();
    if (process.env.NODE_ENV !== 'production' && this.components[componentId]) {
      throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    }

    var comp = { componentId: componentId, textNode: document.createTextNode('') };
    this.el.appendChild(comp.textNode);

    this.size += 1;
    this.components[componentId] = comp;
  };

  BrowserTag.prototype.inject = function inject(componentId, css, name) {
    if (!this.ready) this.replaceElement();
    var comp = this.components[componentId];

    if (process.env.NODE_ENV !== 'production' && !comp) {
      throw new Error('Must add a new component before you can inject css into it');
    }
    if (comp.textNode.data === '') {
      comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');
    }

    comp.textNode.appendData(css);
    if (name) {
      var existingNames = this.el.getAttribute(SC_ATTR);
      this.el.setAttribute(SC_ATTR, existingNames ? existingNames + ' ' + name : name);
    }

    var nonce = getNonce();

    if (nonce) {
      this.el.setAttribute('nonce', nonce);
    }
  };

  BrowserTag.prototype.toHTML = function toHTML() {
    return this.el.outerHTML;
  };

  BrowserTag.prototype.toReactElement = function toReactElement() {
    throw new Error("BrowserTag doesn't implement toReactElement!");
  };

  BrowserTag.prototype.clone = function clone() {
    throw new Error('BrowserTag cannot be cloned!');
  };

  /* Because we care about source order, before we can inject anything we need to
   * create a text node for each component and replace the existing CSS. */

  BrowserTag.prototype.replaceElement = function replaceElement() {
    var _this = this;

    this.ready = true;
    // We have nothing to inject. Use the current el.
    if (this.size === 0) return;

    // Build up our replacement style tag
    var newEl = this.el.cloneNode();
    newEl.appendChild(document.createTextNode('\n'));

    Object.keys(this.components).forEach(function (key) {
      var comp = _this.components[key];

      // eslint-disable-next-line no-param-reassign
      comp.textNode = document.createTextNode(comp.cssFromDOM);
      newEl.appendChild(comp.textNode);
    });

    if (!this.el.parentNode) {
      throw new Error("Trying to replace an element that wasn't mounted!");
    }

    // The ol' switcheroo
    this.el.parentNode.replaceChild(newEl, this.el);
    this.el = newEl;
  };

  return BrowserTag;
}();

/* Factory function to separate DOM operations from logical ones*/

var BrowserStyleSheet = {
  create: function create() {
    var tags = [];
    var names = {};

    /* Construct existing state from DOM */
    var nodes = document.querySelectorAll('[' + SC_ATTR + ']');
    var nodesLength = nodes.length;

    for (var i = 0; i < nodesLength; i += 1) {
      var el = nodes[i];

      tags.push(new BrowserTag(el, el.getAttribute(LOCAL_ATTR) === 'true', el.innerHTML));

      var attr = el.getAttribute(SC_ATTR);
      if (attr) {
        attr.trim().split(/\s+/).forEach(function (name) {
          names[name] = true;
        });
      }
    }

    /* Factory for making more tags */
    var tagConstructor = function tagConstructor(isLocal) {
      var el = document.createElement('style');
      el.type = 'text/css';
      el.setAttribute(SC_ATTR, '');
      el.setAttribute(LOCAL_ATTR, isLocal ? 'true' : 'false');
      if (!document.head) throw new Error('Missing document <head>');
      document.head.appendChild(el);
      return new BrowserTag(el, isLocal);
    };

    return new StyleSheet(tagConstructor, tags, names);
  }
};

//      
var SC_ATTR = 'data-styled-components';
var LOCAL_ATTR = 'data-styled-components-is-local';
var CONTEXT_KEY = '__styled-components-stylesheet__';

/* eslint-disable flowtype/object-type-delimiter */

/* eslint-enable flowtype/object-type-delimiter */

var instance = null;
// eslint-disable-next-line no-use-before-define
var clones = [];

var StyleSheet = function () {
  function StyleSheet(tagConstructor) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, StyleSheet);
    this.hashes = {};
    this.deferredInjections = {};
    this.stylesCacheable = typeof document !== 'undefined';

    this.tagConstructor = tagConstructor;
    this.tags = tags;
    this.names = names;
    this.constructComponentTagMap();
  }

  // helper for `ComponentStyle` to know when it cache static styles.
  // staticly styled-component can not safely cache styles on the server
  // without all `ComponentStyle` instances saving a reference to the
  // the styleSheet instance they last rendered with,
  // or listening to creation / reset events. otherwise you might create
  // a component with one stylesheet and render it another api response
  // with another, losing styles on from your server-side render.


  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
    var _this = this;

    this.componentTags = {};

    this.tags.forEach(function (tag) {
      Object.keys(tag.components).forEach(function (componentId) {
        _this.componentTags[componentId] = tag;
      });
    });
  };

  /* Best level of caching—get the name from the hash straight away. */

  StyleSheet.prototype.getName = function getName(hash) {
    return this.hashes[hash.toString()];
  };

  /* Second level of caching—if the name is already in the dom, don't
   * inject anything and record the hash for getName next time. */

  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
    if (!this.names[name]) return false;

    this.hashes[hash.toString()] = name;
    return true;
  };

  /* Third type of caching—don't inject components' componentId twice. */

  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
    return !!this.componentTags[componentId];
  };

  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.deferredInject(componentId, isLocal, css);
      });
    }

    this.getOrCreateTag(componentId, isLocal);
    this.deferredInjections[componentId] = css;
  };

  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.inject(componentId, isLocal, css);
      });
    }

    var tag = this.getOrCreateTag(componentId, isLocal);

    var deferredInjection = this.deferredInjections[componentId];
    if (deferredInjection) {
      tag.inject(componentId, deferredInjection);
      delete this.deferredInjections[componentId];
    }

    tag.inject(componentId, css, name);

    if (hash && name) {
      this.hashes[hash.toString()] = name;
    }
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    return this.tags.map(function (tag, i) {
      return tag.toReactElement('sc-' + i);
    });
  };

  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
    var existingTag = this.componentTags[componentId];
    if (existingTag) {
      return existingTag;
    }

    var lastTag = this.tags[this.tags.length - 1];
    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
    this.componentTags[componentId] = componentTag;
    componentTag.addComponent(componentId);
    return componentTag;
  };

  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
    var newTag = this.tagConstructor(isLocal);
    this.tags.push(newTag);
    return newTag;
  };

  StyleSheet.reset = function reset(isServer) {
    instance = StyleSheet.create(isServer);
  };

  /* We can make isServer totally implicit once Jest 20 drops and we
   * can change environment on a per-test basis. */

  StyleSheet.create = function create() {
    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';

    return (isServer ? ServerStyleSheet : BrowserStyleSheet).create();
  };

  StyleSheet.clone = function clone(oldSheet) {
    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
      return tag.clone();
    }), _extends({}, oldSheet.names));

    newSheet.hashes = _extends({}, oldSheet.hashes);
    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
    clones.push(newSheet);

    return newSheet;
  };

  createClass(StyleSheet, null, [{
    key: 'instance',
    get: function get$$1() {
      return instance || (instance = StyleSheet.create());
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

//      
var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.props.sheet, _ref;
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return _react2.default.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(_react.Component);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(StyleSheet), _propTypes2.default.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

StyleSheetManager.propTypes = {
  sheet: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(StyleSheet), _propTypes2.default.instanceOf(ServerStyleSheet)]).isRequired
};

//      
/* eslint-disable no-underscore-dangle */
var ServerTag = function () {
  function ServerTag(isLocal) {
    classCallCheck(this, ServerTag);

    this.isLocal = isLocal;
    this.components = {};
    this.size = 0;
    this.names = [];
  }

  ServerTag.prototype.isFull = function isFull() {
    return false;
  };

  ServerTag.prototype.addComponent = function addComponent(componentId) {
    if (process.env.NODE_ENV !== 'production' && this.components[componentId]) {
      throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    }
    this.components[componentId] = { componentId: componentId, css: '' };
    this.size += 1;
  };

  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
    var _this = this;

    return Object.keys(this.components).reduce(function (styles, k) {
      return styles + _this.components[k].css;
    }, '');
  };

  ServerTag.prototype.inject = function inject(componentId, css, name) {
    var comp = this.components[componentId];

    if (process.env.NODE_ENV !== 'production' && !comp) {
      throw new Error('Must add a new component before you can inject css into it');
    }
    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';

    comp.css += css.replace(/\n*$/, '\n');

    if (name) this.names.push(name);
  };

  ServerTag.prototype.toHTML = function toHTML() {
    var attrs = ['type="text/css"', SC_ATTR + '="' + this.names.join(' ') + '"', LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];

    var nonce = getNonce();

    if (nonce) {
      attrs.push('nonce="' + nonce + '"');
    }

    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
  };

  ServerTag.prototype.toReactElement = function toReactElement(key) {
    var _attrs;

    var attrs = (_attrs = {}, _attrs[SC_ATTR] = this.names.join(' '), _attrs[LOCAL_ATTR] = this.isLocal.toString(), _attrs);

    var nonce = getNonce();

    if (nonce) {
      attrs.nonce = nonce;
    }

    return _react2.default.createElement('style', _extends({
      key: key,
      type: 'text/css'
    }, attrs, {
      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
    }));
  };

  ServerTag.prototype.clone = function clone() {
    var _this2 = this;

    var copy = new ServerTag(this.isLocal);
    copy.names = [].concat(this.names);
    copy.size = this.size;
    copy.components = Object.keys(this.components).reduce(function (acc, key) {
      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
      return acc;
    }, {});

    return copy;
  };

  return ServerTag;
}();

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    this.instance = StyleSheet.clone(StyleSheet.instance);
  }

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new Error("Can't collect styles once you've called getStyleTags!");
    }
    return _react2.default.createElement(StyleSheetManager, { sheet: this.instance }, children);
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toReactElements();
  };

  ServerStyleSheet.create = function create() {
    return new StyleSheet(function (isLocal) {
      return new ServerTag(isLocal);
    });
  };

  return ServerStyleSheet;
}();

//      

var LIMIT = 200;

var createWarnTooManyClasses = function createWarnTooManyClasses(displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
};

//      
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 **/
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ntrol|ord)s|o(?:lor(?:Interpolation)?|ntent)|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|o(?:ntextMenu|ls)|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|(?:rossOrigi|olSpa)n|apHeight|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|in(?:tercep|lis)|restar|forma|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz])$/;

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = function validAttr(name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
};

//      


function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

//      


function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}

//      

/* eslint-disable no-undef */
function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

//      


var determineTheme = function determineTheme(props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
};

//      
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

//      
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

//      
// Helper to call a given function, only once
var once = function once(cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
};

var _ThemeProvider$childC;
var _ThemeProvider$contex;

//      
/* globals React$Element */
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = _propTypes2.default.shape({
  getTheme: _propTypes2.default.func,
  subscribe: _propTypes2.default.func,
  unsubscribe: _propTypes2.default.func
});

var warnChannelDeprecated = void 0;
if (process.env.NODE_ENV !== 'production') {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;
      });
    }
    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (process.env.NODE_ENV !== 'production') {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.broadcast.publish(this.getTheme(nextProps.theme));
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if (process.env.NODE_ENV !== 'production' && !(0, _isPlainObject2.default)(mergedTheme)) {
        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
      }
      return mergedTheme;
    }
    if (!(0, _isPlainObject2.default)(theme)) {
      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return _react2.default.Children.only(this.props.children);
  };

  return ThemeProvider;
}(_react.Component);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = _propTypes2.default.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

//      

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var _StyledComponent = function _StyledComponent(ComponentStyle, constructWithOptions) {
  var identifiers = {};

  /* We depend on components having unique IDs */
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

    var componentId = void 0;

    /**
     * only fall back to hashing the component injection order if
     * a proper displayName isn't provided by the babel plugin
     */
    if (!_displayName) {
      var nr = (identifiers[displayName] || 0) + 1;
      identifiers[displayName] = nr;

      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
    } else {
      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
    }

    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  var BaseStyledComponent = function (_Component) {
    inherits(BaseStyledComponent, _Component);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      classCallCheck(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' ? attr(context) : attr;
        return acc;
      }, {});

      return _extends({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          attrs = _constructor.attrs,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.instance;

      // staticaly styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
      } else {
        var executionContext = this.buildExecutionContext(theme, props);
        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

        if (process.env.NODE_ENV !== 'production' && warnTooManyClasses !== undefined) {
          warnTooManyClasses(className);
        }

        return className;
      }
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var componentStyle = this.constructor.componentStyle;

      var styledContext = this.context[CHANNEL_NEXT];

      // If this is a staticaly-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
        this.setState({ generatedClassName: generatedClassName });
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || {};
        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
        this.setState({ theme: theme, generatedClassName: _generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // If this is a staticaly-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle;

      if (componentStyle.isStatic) {
        return;
      }

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext();
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;

      var isTargetTag = isTag(target);

      var className = [
      // eslint-disable-next-line react/prop-types
      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends({}, this.attrs, {
        className: className
      });

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return (0, _react.createElement)(target, propsForElement);
    };

    return BaseStyledComponent;
  }(_react.Component);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;

    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);

        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);

          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = _propTypes2.default.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(StyleSheet), _propTypes2.default.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.target = target;

    if (process.env.NODE_ENV !== 'production') {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    return StyledComponent;
  };

  return createStyledComponent;
};

// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

//      
var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled copmonent
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (typeof value === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHRMEnabled = typeof module !== 'undefined' && module.hot && process.env.NODE_ENV !== 'production';

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = function _ComponentStyle(nameGenerator, flatten, stringifyRules) {
  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHRMEnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;
      if (!StyleSheet.instance.hasInjectedComponent(this.componentId)) {
        var placeholder = process.env.NODE_ENV !== 'production' ? '.' + componentId + ' {}' : '';
        StyleSheet.instance.deferredInject(componentId, true, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */

    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          lastClassName = this.lastClassName;

      if (isStatic && lastClassName !== undefined) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var hash = doHash(this.componentId + flatCSS.join(''));

      var existingName = styleSheet.getName(hash);
      if (existingName !== undefined) {
        if (styleSheet.stylesCacheable) {
          this.lastClassName = existingName;
        }
        return existingName;
      }

      var name = nameGenerator(hash);
      if (styleSheet.stylesCacheable) {
        this.lastClassName = existingName;
      }
      if (styleSheet.alreadyInjected(hash, name)) {
        return name;
      }

      var css = '\n' + stringifyRules(flatCSS, '.' + name);
      // NOTE: this can only be set when we inject the class-name.
      // For some reason, presumably due to how css is stringifyRules behaves in
      // differently between client and server, styles break.
      styleSheet.inject(this.componentId, true, css, hash, name);
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return nameGenerator(doHash(str));
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
};

//      
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

//      

var _styled = function _styled(styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
};

//      
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = function _keyframes(nameGenerator, stringifyRules, css) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(replaceWhitespace(JSON.stringify(rules)));

    var existingName = StyleSheet.instance.getName(hash);
    if (existingName) return existingName;

    var name = nameGenerator(hash);
    if (StyleSheet.instance.alreadyInjected(hash, name)) return name;

    var generatedCSS = stringifyRules(rules, name, '@keyframes');
    StyleSheet.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
    return name;
  };
};

//      
var _injectGlobal = function _injectGlobal(stringifyRules, css) {
  var injectGlobal = function injectGlobal(strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(JSON.stringify(rules));

    var componentId = 'sc-global-' + hash;
    if (StyleSheet.instance.hasInjectedComponent(componentId)) return;

    StyleSheet.instance.inject(componentId, false, stringifyRules(rules));
  };

  return injectGlobal;
};

//      


var _constructWithOptions = function _constructWithOptions(css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (process.env.NODE_ENV !== 'production' && typeof tag !== 'string' && typeof tag !== 'function') {
      // $FlowInvalidInputTest
      throw new Error('Cannot create styled-component for component: ' + tag);
    }

    /* This is callable directly as a template function */
    var templateFunction = function templateFunction(strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || {}, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
};

//      
/* globals ReactClass */

var wrapWithTheme = function wrapWithTheme(Component$$1) {
  var _WithTheme$contextTyp;

  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

  var shouldSetInnerRef = isStyledComponent(Component$$1) ||
  // NOTE: We can't pass a ref to a stateless functional component
  typeof Component$$1 === 'function' && !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var theme = this.state.theme;

      return _react2.default.createElement(Component$$1, _extends({
        theme: theme
      }, this.props, {
        innerRef: shouldSetInnerRef ? innerRef : undefined,
        ref: shouldSetInnerRef ? undefined : innerRef
      }));
    };

    return WithTheme;
  }(_react2.default.Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = _propTypes2.default.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);

  return (0, _hoistNonReactStatics2.default)(WithTheme, Component$$1);
};

//      

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

exports.css = css;
exports.keyframes = keyframes;
exports.injectGlobal = injectGlobal;
exports.ThemeProvider = ThemeProvider;
exports.withTheme = wrapWithTheme;
exports.ServerStyleSheet = ServerStyleSheet;
exports.StyleSheetManager = StyleSheetManager;
exports.default = styled;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(30)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = colorConfigMerger;

var _commonFunc = __webpack_require__(10);

var _commonFunc2 = _interopRequireDefault(_commonFunc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorConfigMerger(config1, config2) {
	if (!config1) {
		return config2;
	}

	var mergeConfig = {};
	for (var key in config2) {
		if (!_commonFunc2.default.isUndefined(config1[key])) {
			mergeConfig[key] = config1[key];
		} else {
			mergeConfig[key] = config2[key];
		}
	}

	return mergeConfig;
}
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FixedDivWrapper = exports.SubHeadingWrapper = exports.InlineWrapper = exports.VhAlignedWrapper = exports.HeadingWrapper = exports.AnimatedBorder = exports.BlockWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\twidth:100%;\n\tdisplay : flex;\n\tflex-direction : row;\n\tjustify-content : flex-start;\n'], ['\n\twidth:100%;\n\tdisplay : flex;\n\tflex-direction : row;\n\tjustify-content : flex-start;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\twidth : 100%;\n\tdisplay : flex;\n\tjustify-content : center;\n\tborder-bottom : var(--headingBorder);\n\tpadding: 5px 0;\n\tfont-size : var(--headingFontSize);\n\tfont-weight : 400;\n'], ['\n\twidth : 100%;\n\tdisplay : flex;\n\tjustify-content : center;\n\tborder-bottom : var(--headingBorder);\n\tpadding: 5px 0;\n\tfont-size : var(--headingFontSize);\n\tfont-weight : 400;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tfont-size : var(--subheadingFontSize);\n\tfont-weight : 300;\n\tpadding-top : 10px;\n\tborder : none;\n'], ['\n\tfont-size : var(--subheadingFontSize);\n\tfont-weight : 300;\n\tpadding-top : 10px;\n\tborder : none;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tposition:relative;\n\ttop:-2px;\n\twidth:100%;\n\theight:2px;\n\tbackground:', ';\n\ttransform:', ';\n\ttransition:all 0.4s;\n\tz-index:1;\n'], ['\n\tposition:relative;\n\ttop:-2px;\n\twidth:100%;\n\theight:2px;\n\tbackground:', ';\n\ttransform:', ';\n\ttransition:all 0.4s;\n\tz-index:1;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    width: 300px;\n  \ttransform : translate(-50%,-50%);\n    font-size: 1rem;\n    display : ', ';\n'], ['\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    width: 300px;\n  \ttransform : translate(-50%,-50%);\n    font-size: 1rem;\n    display : ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tdisplay : inline-block;\n'], ['\n\tdisplay : inline-block;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tposition : fixed ; \n\ttop : 0;\n\tleft : 0;\n\tbottom : 0;\n\tright : 0;\n\tbackground-color : var(--popupBgColor);\n\tz-index : 2;\n\tdisplay : ', ';\n'], ['\n\tposition : fixed ; \n\ttop : 0;\n\tleft : 0;\n\tbottom : 0;\n\tright : 0;\n\tbackground-color : var(--popupBgColor);\n\tz-index : 2;\n\tdisplay : ', ';\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlockWrapper = _styledComponents2.default.div(_templateObject);

var HeadingWrapper = _styledComponents2.default.div(_templateObject2);

var SubHeadingWrapper = HeadingWrapper.extend(_templateObject3);

var AnimatedBorder = _styledComponents2.default.div(_templateObject4, function (props) {
	return props.valid ? 'var(--defaultGreen)' : 'var(--defaultRed)';
}, function (props) {
	return props.focused || !props.valid ? 'scale(1)' : 'scale(0)';
});

var VhAlignedWrapper = _styledComponents2.default.div(_templateObject5, function (props) {
	return props.open ? 'block' : 'none';
});

var InlineWrapper = _styledComponents2.default.div(_templateObject6);
var FixedDivWrapper = _styledComponents2.default.div(_templateObject7, function (props) {
	return props.open ? 'block' : 'none';
});

exports.BlockWrapper = BlockWrapper;
exports.AnimatedBorder = AnimatedBorder;
exports.HeadingWrapper = HeadingWrapper;
exports.VhAlignedWrapper = VhAlignedWrapper;
exports.InlineWrapper = InlineWrapper;
exports.SubHeadingWrapper = SubHeadingWrapper;
exports.FixedDivWrapper = FixedDivWrapper;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commonFunc = __webpack_require__(10);

var _commonFunc2 = _interopRequireDefault(_commonFunc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*class ClosePopupListener{
	init(){
		this.eventListeners = {}
		document.addEventListener('click',this.eventListenersFunc.bind(this))
	}

	eventListenersFunc(e){
		(Object.keys(this.eventListeners)||[]).map((key)=>{
			(this.eventListeners[key])(e)
		})
	}

	addListenerFunc(func){
		if(typeof func != "function"){
			return null
		}
		let key = CommonFunc.randString(10)
		while(this.eventListeners[key]){
			key = CommonFunc.randString(10)
		}

		this.eventListeners[key] = func
		return key
	}

	removeListenerFunc(key){
		if(key){
			delete this.eventListeners[key]
		}
	}

	destroy(){
		document.removeEventListener('click',this.eventListenersFunc.bind(this))
	}
}*/

var ClosePopupListener = function () {
	function ClosePopupListener() {
		_classCallCheck(this, ClosePopupListener);
	}

	_createClass(ClosePopupListener, [{
		key: 'addListenerFunc',
		value: function addListenerFunc(func) {
			document.addEventListener('click', func);
		}
	}, {
		key: 'removeListenerFunc',
		value: function removeListenerFunc(func) {
			document.removeEventListener('click', func);
		}
	}]);

	return ClosePopupListener;
}();

exports.default = new ClosePopupListener();
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _closePopupListener = __webpack_require__(5);

var _closePopupListener2 = _interopRequireDefault(_closePopupListener);

var _sharedStyledComponents = __webpack_require__(3);

var _debounce = __webpack_require__(38);

var _debounce2 = _interopRequireDefault(_debounce);

var _keyPressHandlerOnList = __webpack_require__(14);

var _keyPressHandlerOnList2 = _interopRequireDefault(_keyPressHandlerOnList);

var _styledComponents = __webpack_require__(15);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoComplete = function (_React$PureComponent) {
	_inherits(AutoComplete, _React$PureComponent);

	function AutoComplete(props) {
		_classCallCheck(this, AutoComplete);

		var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

		_this.blurHandler = _this.blurHandler.bind(_this);
		_this.focusHandler = _this.focusHandler.bind(_this);
		_this.onChangeHandler = _this.onChangeHandler.bind(_this);
		_this.keyPressHandlerInstance = new _keyPressHandlerOnList2.default(0);
		_this.handleKeyPress = _this.handleKeyPress.bind(_this);
		_this.preventDropdownClose = _this.preventDropdownClose.bind(_this);
		_this.setItem = _this.setItem.bind(_this);
		_this.onListItemClick = _this.onListItemClick.bind(_this);

		_this.state = {
			isDown: props.value && props.value.label ? false : true,
			autoCompList: [],
			value: props.value || null,
			isFocused: false,
			selectedListIndex: -1
		};
		return _this;
	}

	_createClass(AutoComplete, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.debounceFunc = (0, _debounce2.default)(this.debounceOnChangeHandler, 200);
		}
	}, {
		key: 'debounceOnChangeHandler',
		value: function debounceOnChangeHandler(value) {
			var _this2 = this;

			var fetchPromise = this.props.fetchFunc;
			fetchPromise(value).then(function (res) {
				_this2.keyPressHandlerInstance.updateListLength.call(_this2.keyPressHandlerInstance, res.length);
				_this2.setState({
					autoCompList: res
				});
			}, function (err) {
				_this2.keyPressHandlerInstance.updateListLength.call(_this2.keyPressHandlerInstance, 0);
				_this2.setState({
					autoCompList: []
				});
			});
		}
	}, {
		key: 'onChangeHandler',
		value: function onChangeHandler(e) {
			var value = e.target.value.length ? e.target.value : null;

			this.debounceFunc(value);

			if (value) {
				this.setState({
					value: {
						label: value,
						isAutoCompleteListItem: false
					}
				});
			} else {
				this.setState({
					value: null
				});
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				value: nextProps.value || null,
				isDown: nextProps.value && nextProps.value.label ? false : true
			});
		}
	}, {
		key: 'focusHandler',
		value: function focusHandler(e) {
			this.setState({
				isDown: false,
				isFocused: true
			});
		}
	}, {
		key: 'blurHandler',
		value: function blurHandler(e) {
			if (!this.forceDropdownOpen) {

				this.setState({
					isFocused: false
				});

				if (!this.state.value) {
					this.setState({
						isDown: true
					});
				}

				this.props.setItem(this.props.name, this.state.value);
			}

			this.forceDropdownOpen = false;
		}
	}, {
		key: 'setSelectedItem',
		value: function setSelectedItem() {
			var selectedListItemId = null;
			if (this.state.selectedListIndex >= 0) {

				selectedListItemId = this.state.autoCompList[this.state.selectedListIndex].id;
			}

			if (selectedListItemId) {
				this.setItem(selectedListItemId);
			}
		}
	}, {
		key: 'setItem',
		value: function setItem(id) {

			var ret = null,
			    list = this.state.autoCompList;

			for (var i = 0; i < list.length; i++) {
				var item = list[i];
				if (item.id == id) {
					ret = item;
					break;
				}
			}

			if (ret) {
				ret.isAutoCompleteListItem = true;
				this.props.setItem(this.props.name, ret);
				this.keyPressHandlerInstance.updateListLength.call(this.keyPressHandlerInstance, 0);
				this.setState({
					autoCompList: [],
					value: ret,
					isFocused: false
				});
			}
		}
	}, {
		key: 'onListItemClick',
		value: function onListItemClick(e) {
			this.setItem(e.target.id);
		}
	}, {
		key: 'handleKeyPress',
		value: function handleKeyPress(e) {
			if (e.keyCode == '13') {
				this.setSelectedItem();
			} else {
				var index = this.keyPressHandlerInstance.handleKeyPress.call(this.keyPressHandlerInstance, e.keyCode);
				console.log(index);
				this.setState({
					selectedListIndex: index
				});
			}
		}
	}, {
		key: 'preventDropdownClose',
		value: function preventDropdownClose() {
			this.forceDropdownOpen = true;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var props = this.props,
			    list = this.state.autoCompList;

			var innerHtml = this.state.isFocused && list.map(function (item, index) {
				if (index == _this3.state.selectedListIndex) {
					return _react2.default.createElement(
						_styledComponents.SelectedListItem,
						{ id: item.id,
							onClick: _this3.onListItemClick,
							onMouseDown: _this3.preventDropdownClose },
						item.label
					);
				}
				return _react2.default.createElement(
					_styledComponents.ListItem,
					{ id: item.id,
						onClick: _this3.onListItemClick,
						onMouseDown: _this3.preventDropdownClose },
					item.label
				);
			});

			return _react2.default.createElement(
				_styledComponents.Wrapper,
				{ tabIndex: -1, id: props.name,
					onKeyDown: this.handleKeyPress },
				_react2.default.createElement(
					_styledComponents.SearchBox,
					{ isDown: this.state.isDown,
						isValid: props.isValid,
						errorText: props.errorText || '',
						helpText: props.helpText || '' },
					_react2.default.createElement('input', { type: 'text', value: this.state.value && this.state.value.label || '',
						onChange: this.onChangeHandler,
						onBlur: this.blurHandler,
						onFocus: this.focusHandler,
						readOnly: props.readOnly }),
					_react2.default.createElement(
						'label',
						null,
						props.label
					),
					_react2.default.createElement(_sharedStyledComponents.AnimatedBorder, { valid: props.isValid,
						focused: this.state.isFocused })
				),
				_react2.default.createElement(
					_styledComponents.SearchList,
					null,
					innerHtml
				)
			);
		}
	}]);

	return AutoComplete;
}(_react2.default.PureComponent);

AutoComplete.propTypes = {
	label: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired,
	setItem: _propTypes2.default.func.isRequired,
	fetchFunc: _propTypes2.default.func.isRequired
};

exports.default = AutoComplete;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonFunc = function () {
	function CommonFunc() {
		_classCallCheck(this, CommonFunc);
	}

	_createClass(CommonFunc, [{
		key: "randString",
		value: function randString(x) {
			var s = "";
			while (s.length < x && x > 0) {
				var r = Math.random();
				s += r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65));
			}
			return s;
		}
	}, {
		key: "isUndefined",
		value: function isUndefined(value) {
			if (value || value === 0 || value == "" || value == false) {
				return false;
			}

			return true;
		}
	}]);

	return CommonFunc;
}();

exports.default = new CommonFunc();
module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(34)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(36)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyUp = 38;
var KeyDown = 40;

var KeyPressHandlerOnList = function () {
	function KeyPressHandlerOnList(listLength) {
		_classCallCheck(this, KeyPressHandlerOnList);

		this.listLength = listLength;
		this.index = -1;
	}

	_createClass(KeyPressHandlerOnList, [{
		key: "handleKeyPress",
		value: function handleKeyPress(keyCode) {
			//debugger
			switch (keyCode) {
				case KeyDown:
					{
						var tempIndex = this.index + 1;
						if (tempIndex >= 0 && tempIndex < this.listLength) {
							this.index = tempIndex;
						}
						return this.index;
					}

				case KeyUp:
					{
						var _tempIndex = this.index - 1;
						if (_tempIndex >= 0 && _tempIndex < this.listLength) {
							this.index = _tempIndex;
						}
						return this.index;
					}

				default:
					{
						return this.index;
					}
			}
		}
	}, {
		key: "updateListLength",
		value: function updateListLength(newLength) {
			this.listLength = newLength;
			this.index = -1;
		}
	}]);

	return KeyPressHandlerOnList;
}();

exports.default = KeyPressHandlerOnList;
module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedListItem = exports.ListItem = exports.SearchList = exports.SearchBox = exports.Wrapper = exports.CSSVariables = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --inputBorderWidth : ', ';\n  --dropdownColor : ', ';\n  --dropdownBgColor : ', ';\n  --dropdownHoverColor : ', ';\n  --dropdownHoverBgColor : ', ';\n  --labelFontSize : ', ';\n  --inputFontSize : ', ';\n  --dropdownShadow : ', ';\n  --inputPadding : ', ';\n'], ['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --inputBorderWidth : ', ';\n  --dropdownColor : ', ';\n  --dropdownBgColor : ', ';\n  --dropdownHoverColor : ', ';\n  --dropdownHoverBgColor : ', ';\n  --labelFontSize : ', ';\n  --inputFontSize : ', ';\n  --dropdownShadow : ', ';\n  --inputPadding : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t  width : 100%;\n    position: relative;\n    outline : none;\n'], ['\n\t  width : 100%;\n    position: relative;\n    outline : none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tposition : relative;\n\tpadding: 15px 0 0;\n\tinput{\n      position:relative;\n      z-index:1;\n      width: 100%;\n\t    border: none;\n\t    border-style: solid;//', ';\n      border-width : var(--inputBorderWidth);\n\t    border-color: var(--inputBorderColor);\n\t    box-sizing: border-box;\n\t    font-size: var(--inputFontSize);\n\t    background-color:transparent;\n\t    color : var(--inputColor);\t\n\t    outline : none;\n\t}\n\n\tlabel{\n\t\tposition:absolute;\n\t\tleft : 0px;\n\t\ttop : 14px;\n\t\tcolor: var(--labelColor);\n\t\ttransform:', ';\n\t\ttransform-origin:top left;\n\t\ttransition:all 0.4s;\n\t\tfont-size : var(--labelFontSize);\n\t}\n\n\t&:after{\n\t\tcontent:"', '";\n        position: absolute;\n        font-size: var(--infoFontSize);\n        color: ', ';\n    \tleft: 0px;\n    \tbackground: var(--infoBgColor);\n    \tpadding: 5px;\n    \tbox-shadow: var(--infoBoxShadow);\n    \tdisplay: ', ';\n    \tz-index: 1;\n\t}\n\t\n'], ['\n\tposition : relative;\n\tpadding: 15px 0 0;\n\tinput{\n      position:relative;\n      z-index:1;\n      width: 100%;\n\t    border: none;\n\t    border-style: solid;//', ';\n      border-width : var(--inputBorderWidth);\n\t    border-color: var(--inputBorderColor);\n\t    box-sizing: border-box;\n\t    font-size: var(--inputFontSize);\n\t    background-color:transparent;\n\t    color : var(--inputColor);\t\n\t    outline : none;\n\t}\n\n\tlabel{\n\t\tposition:absolute;\n\t\tleft : 0px;\n\t\ttop : 14px;\n\t\tcolor: var(--labelColor);\n\t\ttransform:', ';\n\t\ttransform-origin:top left;\n\t\ttransition:all 0.4s;\n\t\tfont-size : var(--labelFontSize);\n\t}\n\n\t&:after{\n\t\tcontent:"', '";\n        position: absolute;\n        font-size: var(--infoFontSize);\n        color: ', ';\n    \tleft: 0px;\n    \tbackground: var(--infoBgColor);\n    \tpadding: 5px;\n    \tbox-shadow: var(--infoBoxShadow);\n    \tdisplay: ', ';\n    \tz-index: 1;\n\t}\n\t\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\twidth: 100%;\n    position: absolute;\n    background: var(--dropdownBgColor);\n    box-shadow: var(--dropdownShadow);\n    font-size: var(--inputFontSize);\n    color: var(--dropdownColor);\n    z-index:3;\n    max-height : 200px;\n    overflow : auto;\n'], ['\n\twidth: 100%;\n    position: absolute;\n    background: var(--dropdownBgColor);\n    box-shadow: var(--dropdownShadow);\n    font-size: var(--inputFontSize);\n    color: var(--dropdownColor);\n    z-index:3;\n    max-height : 200px;\n    overflow : auto;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t  box-sizing: border-box;\n    padding: 10px 5px 10px 10px;\n    &:hover{\n    \tbackground-color: var(--dropdownHoverBgColor);\n\t    opacity: 0.8;\n\t    color: var(--dropdownHoverColor);\n    }\n'], ['\n\t  box-sizing: border-box;\n    padding: 10px 5px 10px 10px;\n    &:hover{\n    \tbackground-color: var(--dropdownHoverBgColor);\n\t    opacity: 0.8;\n\t    color: var(--dropdownHoverColor);\n    }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tbackground-color : var(--dropdownHoverBgColor);\n\topacity: 0.8;\n\tcolor: var(--dropdownHoverColor);\n'], ['\n\tbackground-color : var(--dropdownHoverBgColor);\n\topacity: 0.8;\n\tcolor: var(--dropdownHoverColor);\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CSSVariables = _styledComponents2.default.div(_templateObject, function (props) {
  return props.LABEL_COLOR;
}, function (props) {
  return props.INPUT_COLOR;
}, function (props) {
  return props.INPUT_BORDER_COLOR;
}, function (props) {
  return props.INPUT_BORDER_WIDTH;
}, function (props) {
  return props.DROPDOWN_COLOR;
}, function (props) {
  return props.DROPDOWN_BACKGROUND;
}, function (props) {
  return props.DROPDOWN_HOVER_COLOR;
}, function (props) {
  return props.DROPDOWN_HOVER_BG_COLOR;
}, function (props) {
  return props.LABEL_FONT_SIZE;
}, function (props) {
  return props.INPUT_FONT_SIZE;
}, function (props) {
  return props.DROPDOWN_SHADOW;
}, function (props) {
  return props.INPUT_PADDING;
});

var Wrapper = _styledComponents2.default.div(_templateObject2);

var SearchBox = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.isValid ? '1px solid' : 'none';
}, function (props) {
  return props.isDown ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.6)";
}, function (props) {
  return props.isValid ? props.helpText : props.errorText;
}, function (props) {
  return props.isValid ? 'var(--defaultGreen)' : 'var(--defaultRed)';
}, function (props) {
  return props.isValid && props.helpText || !props.isValid && props.errorText ? 'block' : 'none';
});

var SearchList = _styledComponents2.default.div(_templateObject4);

var ListItem = _styledComponents2.default.div(_templateObject5);

var SelectedListItem = ListItem.extend(_templateObject6);

exports.CSSVariables = CSSVariables;
exports.Wrapper = Wrapper;
exports.SearchBox = SearchBox;
exports.SearchList = SearchList;
exports.ListItem = ListItem;
exports.SelectedListItem = SelectedListItem;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_React$PureComponent) {
	_inherits(CheckBox, _React$PureComponent);

	function CheckBox(props) {
		_classCallCheck(this, CheckBox);

		var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

		_this.onChangeHandler = _this.onChangeHandler.bind(_this);
		return _this;
	}

	_createClass(CheckBox, [{
		key: 'onChangeHandler',
		value: function onChangeHandler(e) {
			console.log('CheckBox', e, e.target.checked);
			this.props.setItem(this.props.name, e.target.checked);
		}
	}, {
		key: 'render',
		value: function render() {

			var props = this.props;

			return _react2.default.createElement(
				_styledComponents.Wrapper,
				{ isVisible: true, checked: props.value },
				_react2.default.createElement(
					_styledComponents.CheckboxWrapper,
					null,
					_react2.default.createElement(
						_styledComponents.InputWrapper,
						null,
						_react2.default.createElement('input', { id: props.name, type: 'checkbox',
							name: props.name,
							onChange: this.onChangeHandler,
							readOnly: props.readOnly }),
						_react2.default.createElement(_styledComponents.Tick, { checked: props.value })
					),
					_react2.default.createElement(
						'label',
						{ htmlFor: props.name },
						props.label
					)
				)
			);
		}
	}]);

	return CheckBox;
}(_react2.default.PureComponent);

exports.default = CheckBox;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InputWrapper = exports.Tick = exports.Wrapper = exports.CheckboxWrapper = exports.CSSVariables = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\t--labelColor : ', ';\n\t--helpTextColor : ', ';\n\t--errorTextColor : ', ';\n\t--defaultGreen : ', ';\n\t--defaultRed : ', ';\n\t--defaultBlue :', ';\n\t--labelFontSize : ', ';\n\t--inputFontSize : ', ';\n\t--infoFontSize : ', ';\n\t--infoBgColor : ', ';\n\t--infoBoxShadow : ', ';\n \t--checkboxBorderTrue : ', ';\n \t--checkboxBorderFalse : ', ';\n \t--checkboxTrikColor : ', ';\n'], ['\n\t--labelColor : ', ';\n\t--helpTextColor : ', ';\n\t--errorTextColor : ', ';\n\t--defaultGreen : ', ';\n\t--defaultRed : ', ';\n\t--defaultBlue :', ';\n\t--labelFontSize : ', ';\n\t--inputFontSize : ', ';\n\t--infoFontSize : ', ';\n\t--infoBgColor : ', ';\n\t--infoBoxShadow : ', ';\n \t--checkboxBorderTrue : ', ';\n \t--checkboxBorderFalse : ', ';\n \t--checkboxTrikColor : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition:relative;\n\t//padding : 15px 0 0;\n\tinput[type=\'checkbox\']{\n\t\t-webkit-appearance: none;\n\t    width: 16px;\n\t    height: 16px;\n\t    border: 2px solid;\n\t    border-color : ', ';\n\t    vertical-align: bottom;\n\t    border-radius: 4px;\n\t    z-index:1;\n\t    position : relative;\n\t    outline : none;\n\t    margin : 3px;\n\t}\n\n\t&:hover{\n\t\tbackground : \'#c3c3c3\';\n\t}\n'], ['\n\tposition:relative;\n\t//padding : 15px 0 0;\n\tinput[type=\'checkbox\']{\n\t\t-webkit-appearance: none;\n\t    width: 16px;\n\t    height: 16px;\n\t    border: 2px solid;\n\t    border-color : ', ';\n\t    vertical-align: bottom;\n\t    border-radius: 4px;\n\t    z-index:1;\n\t    position : relative;\n\t    outline : none;\n\t    margin : 3px;\n\t}\n\n\t&:hover{\n\t\tbackground : \'#c3c3c3\';\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tdisplay: inline-block;\n    position: relative;\n    z-index: 1;\n    background: transparent;\n\n    label{\n    \tfont-size : var(--labelFontSize);\n    \tcolor : var(--labelColor);\n    }\n\n\t&:after{\n\t\tposition: absolute;\n\t    content: \'\';\n\t    width: 46px;\n\t    height: 46px;\n\t    background: #333;\n\t    border-radius: 50%;\n\t    top: -9px;\n\t    left: -13px;\n\t    opacity: 0;\n\t    transform : scale(1);\n\t    transition : all 0.4s;\n\t    z-index : -1;\n\t}\n\n\t&:active:after{\n\t\topacity:1;\n\t\ttransform : scale(0);\n\t\ttransition : all 0s;\n\t}\n'], ['\n\tdisplay: inline-block;\n    position: relative;\n    z-index: 1;\n    background: transparent;\n\n    label{\n    \tfont-size : var(--labelFontSize);\n    \tcolor : var(--labelColor);\n    }\n\n\t&:after{\n\t\tposition: absolute;\n\t    content: \'\';\n\t    width: 46px;\n\t    height: 46px;\n\t    background: #333;\n\t    border-radius: 50%;\n\t    top: -9px;\n\t    left: -13px;\n\t    opacity: 0;\n\t    transform : scale(1);\n\t    transition : all 0.4s;\n\t    z-index : -1;\n\t}\n\n\t&:active:after{\n\t\topacity:1;\n\t\ttransform : scale(0);\n\t\ttransition : all 0s;\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tdisplay : ', ';\n\tposition : absolute;\n\ttop : 50%;\n\tleft : 50%;\n\twidth : 6px;\n\theight : 2px;\n\tborder : 2px solid;\n\tborder-color : var(--checkboxTrikColor);\n\tborder-top-color : transparent;\n\tborder-right-color : transparent;\n\ttransform : translate(-50%,-50%) rotate(-45deg);\n\tz-index : 0;\t\n'], ['\n\tdisplay : ', ';\n\tposition : absolute;\n\ttop : 50%;\n\tleft : 50%;\n\twidth : 6px;\n\theight : 2px;\n\tborder : 2px solid;\n\tborder-color : var(--checkboxTrikColor);\n\tborder-top-color : transparent;\n\tborder-right-color : transparent;\n\ttransform : translate(-50%,-50%) rotate(-45deg);\n\tz-index : 0;\t\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay : inline-block;\n\n'], ['\n\tposition: relative;\n\tdisplay : inline-block;\n\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CSSVariables = _styledComponents2.default.div(_templateObject, function (props) {
	return props.LABEL_COLOR;
}, function (props) {
	return props.HELPTEXT_COLOR;
}, function (props) {
	return props.ERRORTEXT_COLOR;
}, function (props) {
	return props.DEFAULT_GREEN_COLOR;
}, function (props) {
	return props.DEFAULT_RED_COLOR;
}, function (props) {
	return props.DEFAULT_BLUE_COLOR;
}, function (props) {
	return props.LABEL_FONT_SIZE;
}, function (props) {
	return props.INPUT_FONT_SIZE;
}, function (props) {
	return props.INFO_FONT_SIZE;
}, function (props) {
	return props.INFO_BG_COLOR;
}, function (props) {
	return props.INFO_BOX_SHADOW;
}, function (props) {
	return props.CHECKBOX_BORDER_TRUE;
}, function (props) {
	return props.CHECKBOX_BORDER_FALSE;
}, function (props) {
	return props.CHECKBOX_TICK_COLOR;
});

var Wrapper = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.checked ? 'var(--checkboxBorderTrue)' : 'var(--checkboxBorderFalse)';
});

var CheckboxWrapper = _styledComponents2.default.div(_templateObject3);

var Tick = _styledComponents2.default.div(_templateObject4, function (props) {
	return props.checked ? 'block' : 'none';
});

var InputWrapper = _styledComponents2.default.div(_templateObject5);

exports.CSSVariables = CSSVariables;
exports.CheckboxWrapper = CheckboxWrapper;
exports.Wrapper = Wrapper;
exports.Tick = Tick;
exports.InputWrapper = InputWrapper;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _timepicker = __webpack_require__(43);

var _timepicker2 = _interopRequireDefault(_timepicker);

var _calendar = __webpack_require__(45);

var _calendar2 = _interopRequireDefault(_calendar);

var _sharedStyledComponents = __webpack_require__(3);

var _input = __webpack_require__(47);

var _input2 = _interopRequireDefault(_input);

var _styledComponents = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePicker = function (_React$PureComponent) {
	_inherits(DateTimePicker, _React$PureComponent);

	function DateTimePicker(props) {
		_classCallCheck(this, DateTimePicker);

		var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

		var datetime = _this.getDateTime(props.value);
		_this.toggleCalendar = _this.toggleCalendar.bind(_this);
		_this.handleDateSelect = _this.handleDateSelect.bind(_this);
		_this.toggleDropdown = _this.toggleDropdown.bind(_this);
		_this.closeTimePicker = _this.closeTimePicker.bind(_this);
		_this.setItem = _this.setItem.bind(_this);
		_this.setTime = _this.setTime.bind(_this);
		_this.setDateTime = _this.setDateTime.bind(_this);
		_this.closePopup = _this.closePopup.bind(_this);
		_this.stopBubbling = _this.stopBubbling.bind(_this);

		_this.state = {
			openTime: false,
			openCalendar: false,
			date: datetime.date,
			time: datetime.time
		};
		return _this;
	}

	_createClass(DateTimePicker, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'closePopup',
		value: function closePopup(e) {
			this.setState({
				openTime: false,
				openCalendar: false
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			//console.log('componentWillReceiveProps')
			var timestamp = nextProps.value || nextProps.value == 0 ? nextProps.value : null,
			    datetime = this.getDateTime(timestamp);
			this.setState({
				date: datetime.date,
				time: datetime.time
			});
		}
	}, {
		key: 'getDateTime',
		value: function getDateTime(timestamp) {

			if (!this.props.showdate) {
				var timezoneOffset = new Date().getTimezoneOffset();
				timestamp = timestamp + timezoneOffset * 60000;
			}
			var newDate = new Date(timestamp),
			    ampm = 'AM',
			    hours = newDate.getHours(),
			    minute = newDate.getMinutes();
			//console.log(hours,minute,ampm)
			if (hours > 12) {
				hours = hours - 12;
				ampm = 'PM';
			}

			if (hours == 12) {
				ampm = 'PM';
			}

			if (hours == 0) {
				hours = '12';
				ampm = 'AM';
			}

			if (minute < 10) {
				minute = '0' + minute;
			}

			var currDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0, 0).getTime();

			return {
				date: currDate,
				time: {
					hour: hours,
					minute: minute,
					ampm: ampm
				}
			};
		}
	}, {
		key: 'toggleDropdown',
		value: function toggleDropdown() {
			this.setState(function (state, props) {
				return {
					openCalendar: false,
					openTime: !state.openTime
				};
			});
		}
	}, {
		key: 'closeTimePicker',
		value: function closeTimePicker() {
			this.setState({
				openTime: false
			});
		}
	}, {
		key: 'setTime',
		value: function setTime(time) {
			this.setItem(this.state.date, time);
		}
	}, {
		key: 'setItem',
		value: function setItem(date, time) {
			var dateObj = new Date(date),
			    dateTimestamp = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 0, 0, 0, 0).getTime();
			var timestamp = 0;

			if (this.props.showdate) {
				timestamp = timestamp + dateTimestamp;
			}

			if (this.props.showtime) {
				timestamp = timestamp + this.calculateMillisecs(time);
			}

			this.props.setItem(this.props.name, timestamp);
		}
	}, {
		key: 'calculateMillisecs',
		value: function calculateMillisecs(time) {
			var millisecs = 0;
			if (time['hour'] == '12') {} else {
				millisecs += parseInt(time['hour']) * 60 * 60 * 1000;
			}

			return millisecs + parseInt(time['minute']) * 60 * 1000 + (time['ampm'] == 'PM' ? 12 * 60 * 60 * 1000 : 0);
		}
	}, {
		key: 'toggleCalendar',
		value: function toggleCalendar() {
			this.setState(function (state) {
				return {
					openTime: false,
					openCalendar: !state.openCalendar
				};
			});
		}
	}, {
		key: 'handleDateSelect',
		value: function handleDateSelect(timestamp) {
			this.setItem(timestamp, this.state.time);
		}
	}, {
		key: 'setDateTime',
		value: function setDateTime(date, time) {
			this.setItem(date, time);
		}
	}, {
		key: 'stopBubbling',
		value: function stopBubbling(e) {
			e.stopPropagation();
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			return _react2.default.createElement(
				_styledComponents.Wrapper,
				null,
				_react2.default.createElement(_input2.default, { showdate: props.showdate,
					showtime: props.showtime,
					time: this.state.time,
					date: this.state.date,
					handleDatetimeChange: this.setDateTime,
					label: props.label }),
				_react2.default.createElement(_styledComponents.DateInputWrapper, { showdate: props.showdate,
					onClick: this.toggleCalendar }),
				_react2.default.createElement(_styledComponents.TimeInputWrapper, { showtime: props.showtime,
					onClick: this.toggleDropdown }),
				_react2.default.createElement(
					_sharedStyledComponents.FixedDivWrapper,
					{ open: this.state.openCalendar || this.state.openTime,
						onClick: this.closePopup },
					_react2.default.createElement(
						_sharedStyledComponents.VhAlignedWrapper,
						{ open: this.state.openCalendar || this.state.openTime,
							onClick: this.stopBubbling },
						this.state.openCalendar ? _react2.default.createElement(_calendar2.default, { selectedDate: this.state.date,
							onDateSelection: this.handleDateSelect }) : null,
						_react2.default.createElement(_timepicker2.default, { open: this.state.openTime,
							closeTimePicker: this.closeTimePicker,
							setItem: this.setTime,
							time: this.state.time })
					)
				)
			);
		}
	}]);

	return DateTimePicker;
}(_react2.default.PureComponent);

exports.default = DateTimePicker;
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateInputWrapper = exports.TimeInputWrapper = exports.Wrapper = exports.CSSVariables = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSize : ', ';\n  --labelFontSizeSmall : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n  --datePickerBgColor : ', ';\n  --datePickerHeaderColor : ', ';\n  --datePickerHeaderBorder : ', ';\n  --datePickerArrowColor : ', ';\n  --datePickerDateColor : ', ';\n  --datePickerSelectedDateColor : ', ';\n  --datePickerSelectedDateBgColor : ', ';\n  --timepickerHeaderBgColor : ', ';\n  --timepickerHeaderColor : ', ';\n  --timepickerHeaderBorderColor : ', ';\n  --timepickerColumnBorderColor : ', ';\n  --timepickerColumnBgColor : ', ';\n  --timepickerColumnColor : ', ';\n  --timepickerSelectedCellColor : ', ';\n  --timepickerFooterColor : ', ';\n  --timepickerFooterBgColor : ', ';\n  --calendarShadow : ', ';\n  --timepickerShadow : ', ';\n  --popupBgColor : ', ';\n  --inputBorderWidth : ', ';\n  --inputBorderColor : ', ';\n'], ['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSize : ', ';\n  --labelFontSizeSmall : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n  --datePickerBgColor : ', ';\n  --datePickerHeaderColor : ', ';\n  --datePickerHeaderBorder : ', ';\n  --datePickerArrowColor : ', ';\n  --datePickerDateColor : ', ';\n  --datePickerSelectedDateColor : ', ';\n  --datePickerSelectedDateBgColor : ', ';\n  --timepickerHeaderBgColor : ', ';\n  --timepickerHeaderColor : ', ';\n  --timepickerHeaderBorderColor : ', ';\n  --timepickerColumnBorderColor : ', ';\n  --timepickerColumnBgColor : ', ';\n  --timepickerColumnColor : ', ';\n  --timepickerSelectedCellColor : ', ';\n  --timepickerFooterColor : ', ';\n  --timepickerFooterBgColor : ', ';\n  --calendarShadow : ', ';\n  --timepickerShadow : ', ';\n  --popupBgColor : ', ';\n  --inputBorderWidth : ', ';\n  --inputBorderColor : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display : flex;\n  flex-direction : row;\n  padding : 5px 5px 0px;\n  align-items: flex-end;\n  border-width : var(--inputBorderWidth);\n  border-color: var(--inputBorderColor);\n  border-style : solid;\n'], ['\n  display : flex;\n  flex-direction : row;\n  padding : 5px 5px 0px;\n  align-items: flex-end;\n  border-width : var(--inputBorderWidth);\n  border-color: var(--inputBorderColor);\n  border-style : solid;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width:20px;\n  height:20px;\n  background : url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3LjE2cHgiIGhlaWdodD0iOTcuMTZweCIgdmlld0JveD0iMCAwIDk3LjE2IDk3LjE2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ny4xNiA5Ny4xNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OC41OCwwQzIxLjc5MywwLDAsMjEuNzkzLDAsNDguNThzMjEuNzkzLDQ4LjU4LDQ4LjU4LDQ4LjU4czQ4LjU4LTIxLjc5Myw0OC41OC00OC41OFM3NS4zNjcsMCw0OC41OCwweiBNNDguNTgsODYuODIzDQoJCQljLTIxLjA4NywwLTM4LjI0NC0xNy4xNTUtMzguMjQ0LTM4LjI0M1MyNy40OTMsMTAuMzM3LDQ4LjU4LDEwLjMzN1M4Ni44MjQsMjcuNDkyLDg2LjgyNCw0OC41OFM2OS42NjcsODYuODIzLDQ4LjU4LDg2LjgyM3oiLz4NCgkJPHBhdGggZD0iTTczLjg5OCw0Ny4wOEg1Mi4wNjZWMjAuODNjMC0yLjIwOS0xLjc5MS00LTQtNGMtMi4yMDksMC00LDEuNzkxLTQsNHYzMC4yNWMwLDIuMjA5LDEuNzkxLDQsNCw0aDI1LjgzMg0KCQkJYzIuMjA5LDAsNC0xLjc5MSw0LTRTNzYuMTA3LDQ3LjA4LDczLjg5OCw0Ny4wOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==) \n                no-repeat center;\n  background-size : 100%;\n  visibility : ', ';\n  cursor : pointer;\n'], ['\n  width:20px;\n  height:20px;\n  background : url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3LjE2cHgiIGhlaWdodD0iOTcuMTZweCIgdmlld0JveD0iMCAwIDk3LjE2IDk3LjE2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ny4xNiA5Ny4xNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OC41OCwwQzIxLjc5MywwLDAsMjEuNzkzLDAsNDguNThzMjEuNzkzLDQ4LjU4LDQ4LjU4LDQ4LjU4czQ4LjU4LTIxLjc5Myw0OC41OC00OC41OFM3NS4zNjcsMCw0OC41OCwweiBNNDguNTgsODYuODIzDQoJCQljLTIxLjA4NywwLTM4LjI0NC0xNy4xNTUtMzguMjQ0LTM4LjI0M1MyNy40OTMsMTAuMzM3LDQ4LjU4LDEwLjMzN1M4Ni44MjQsMjcuNDkyLDg2LjgyNCw0OC41OFM2OS42NjcsODYuODIzLDQ4LjU4LDg2LjgyM3oiLz4NCgkJPHBhdGggZD0iTTczLjg5OCw0Ny4wOEg1Mi4wNjZWMjAuODNjMC0yLjIwOS0xLjc5MS00LTQtNGMtMi4yMDksMC00LDEuNzkxLTQsNHYzMC4yNWMwLDIuMjA5LDEuNzkxLDQsNCw0aDI1LjgzMg0KCQkJYzIuMjA5LDAsNC0xLjc5MSw0LTRTNzYuMTA3LDQ3LjA4LDczLjg5OCw0Ny4wOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==) \n                no-repeat center;\n  background-size : 100%;\n  visibility : ', ';\n  cursor : pointer;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width:20px;\n  height:20px;\n  background : url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNTcsNGgtN1YxYzAtMC41NTMtMC40NDctMS0xLTFoLTdjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2M0gxOVYxYzAtMC41NTMtMC40NDctMS0xLTFoLTdjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2M0gzDQoJCUMyLjQ0Nyw0LDIsNC40NDcsMiw1djExdjQzYzAsMC41NTMsMC40NDcsMSwxLDFoNTRjMC41NTMsMCwxLTAuNDQ3LDEtMVYxNlY1QzU4LDQuNDQ3LDU3LjU1Myw0LDU3LDR6IE00MywyaDV2M3YzaC01VjVWMnogTTEyLDJoNQ0KCQl2M3YzaC01VjVWMnogTTQsNmg2djNjMCwwLjU1MywwLjQ0NywxLDEsMWg3YzAuNTUzLDAsMS0wLjQ0NywxLTFWNmgyMnYzYzAsMC41NTMsMC40NDcsMSwxLDFoN2MwLjU1MywwLDEtMC40NDcsMS0xVjZoNnY5SDRWNnoNCgkJIE00LDU4VjE3aDUydjQxSDR6Ii8+DQoJPHBhdGggZD0iTTM4LDIzaC03aC0yaC03aC0yaC05djl2MnY3djJ2OWg5aDJoN2gyaDdoMmg5di05di0ydi03di0ydi05aC05SDM4eiBNMzEsMjVoN3Y3aC03VjI1eiBNMzgsNDFoLTd2LTdoN1Y0MXogTTIyLDM0aDd2N2gtNw0KCQlWMzR6IE0yMiwyNWg3djdoLTdWMjV6IE0xMywyNWg3djdoLTdWMjV6IE0xMywzNGg3djdoLTdWMzR6IE0yMCw1MGgtN3YtN2g3VjUweiBNMjksNTBoLTd2LTdoN1Y1MHogTTM4LDUwaC03di03aDdWNTB6IE00Nyw1MGgtNw0KCQl2LTdoN1Y1MHogTTQ3LDQxaC03di03aDdWNDF6IE00NywyNXY3aC03di03SDQ3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=)\n               no-repeat center;\n  background-size : 100%;\n  visibility : ', ';\n  margin-right : 5px;\n  cursor : pointer;\n'], ['\n  width:20px;\n  height:20px;\n  background : url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNTcsNGgtN1YxYzAtMC41NTMtMC40NDctMS0xLTFoLTdjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2M0gxOVYxYzAtMC41NTMtMC40NDctMS0xLTFoLTdjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2M0gzDQoJCUMyLjQ0Nyw0LDIsNC40NDcsMiw1djExdjQzYzAsMC41NTMsMC40NDcsMSwxLDFoNTRjMC41NTMsMCwxLTAuNDQ3LDEtMVYxNlY1QzU4LDQuNDQ3LDU3LjU1Myw0LDU3LDR6IE00MywyaDV2M3YzaC01VjVWMnogTTEyLDJoNQ0KCQl2M3YzaC01VjVWMnogTTQsNmg2djNjMCwwLjU1MywwLjQ0NywxLDEsMWg3YzAuNTUzLDAsMS0wLjQ0NywxLTFWNmgyMnYzYzAsMC41NTMsMC40NDcsMSwxLDFoN2MwLjU1MywwLDEtMC40NDcsMS0xVjZoNnY5SDRWNnoNCgkJIE00LDU4VjE3aDUydjQxSDR6Ii8+DQoJPHBhdGggZD0iTTM4LDIzaC03aC0yaC03aC0yaC05djl2MnY3djJ2OWg5aDJoN2gyaDdoMmg5di05di0ydi03di0ydi05aC05SDM4eiBNMzEsMjVoN3Y3aC03VjI1eiBNMzgsNDFoLTd2LTdoN1Y0MXogTTIyLDM0aDd2N2gtNw0KCQlWMzR6IE0yMiwyNWg3djdoLTdWMjV6IE0xMywyNWg3djdoLTdWMjV6IE0xMywzNGg3djdoLTdWMzR6IE0yMCw1MGgtN3YtN2g3VjUweiBNMjksNTBoLTd2LTdoN1Y1MHogTTM4LDUwaC03di03aDdWNTB6IE00Nyw1MGgtNw0KCQl2LTdoN1Y1MHogTTQ3LDQxaC03di03aDdWNDF6IE00NywyNXY3aC03di03SDQ3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=)\n               no-repeat center;\n  background-size : 100%;\n  visibility : ', ';\n  margin-right : 5px;\n  cursor : pointer;\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CSSVariables = _styledComponents2.default.div(_templateObject, function (props) {
  return props.LABEL_COLOR;
}, function (props) {
  return props.INPUT_COLOR;
}, function (props) {
  return props.INPUT_BORDER_COLOR;
}, function (props) {
  return props.HELPTEXT_COLOR;
}, function (props) {
  return props.ERRORTEXT_COLOR;
}, function (props) {
  return props.DEFAULT_GREEN_COLOR;
}, function (props) {
  return props.DEFAULT_RED_COLOR;
}, function (props) {
  return props.DEFAULT_BLUE_COLOR;
}, function (props) {
  return props.LABEL_FONT_SIZE;
}, function (props) {
  return props.LABEL_FONT_SIZE_SMALL;
}, function (props) {
  return props.INPUT_FONT_SIZE;
}, function (props) {
  return props.INFO_FONT_SIZE;
}, function (props) {
  return props.INFO_BG_COLOR;
}, function (props) {
  return props.INFO_BOX_SHADOW;
}, function (props) {
  return props.DATE_PICKER_BG_COLOR;
}, function (props) {
  return props.DATE_PICKER_HEADER_COLOR;
}, function (props) {
  return props.DATE_PICKER_HEADER_BORDER;
}, function (props) {
  return props.DATE_PICKER_ARROW_COLOR;
}, function (props) {
  return props.DATE_PICKER_DATE_COLOR;
}, function (props) {
  return props.DATE_PICKER_SELECTED_DATE_COLOR;
}, function (props) {
  return props.DATE_PICKER_SELECTED_DATE_BG_COLOR;
}, function (props) {
  return props.TIME_PICKER_HEADER_BG_COLOR;
}, function (props) {
  return props.TIME_PICKER_HEADER_COLOR;
}, function (props) {
  return props.TIME_PICKER_HEADER_BORDER_COLOR;
}, function (props) {
  return props.TIME_PICKER_COLUMN_BORDER_COLOR;
}, function (props) {
  return props.TIME_PICKER_COLUMN_BG_COLOR;
}, function (props) {
  return props.TIME_PICKER_COLUMN_COLOR;
}, function (props) {
  return props.TIME_PICKER_SELECTED_CELL_COLOR;
}, function (props) {
  return props.TIME_PICKER_FOOTER_COLOR;
}, function (props) {
  return props.TIME_PICKER_FOOTER_BG_COLOR;
}, function (props) {
  return props.DATE_PICKER_SHADOW;
}, function (props) {
  return props.TIME_PICKER_SHADOW;
}, function (props) {
  return props.POPUP_BG_COLOR;
}, function (props) {
  return props.INPUT_BORDER_WIDTH;
}, function (props) {
  return props.INPUT_BORDER_COLOR;
});

var Wrapper = _styledComponents2.default.div(_templateObject2);

var TimeInputWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.showtime ? 'visible' : 'hidden';
});

var DateInputWrapper = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.showdate ? 'visible' : 'hidden';
});

exports.CSSVariables = CSSVariables;
exports.Wrapper = Wrapper;
exports.TimeInputWrapper = TimeInputWrapper;
exports.DateInputWrapper = DateInputWrapper;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _closePopupListener = __webpack_require__(5);

var _closePopupListener2 = _interopRequireDefault(_closePopupListener);

var _keyPressHandlerOnList = __webpack_require__(14);

var _keyPressHandlerOnList2 = _interopRequireDefault(_keyPressHandlerOnList);

var _styledComponents = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$PureComponent) {
	_inherits(Dropdown, _React$PureComponent);

	function Dropdown(props) {
		_classCallCheck(this, Dropdown);

		var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

		_this.toggleList = _this.toggleList.bind(_this);
		_this.setOption = _this.setOption.bind(_this);
		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.openList = _this.openList.bind(_this);
		_this.keyPressHandlerInstance = new _keyPressHandlerOnList2.default((props.optionsList || []).length);
		_this.handleKeyPress = _this.handleKeyPress.bind(_this);
		_this.preventDropdownClose = _this.preventDropdownClose.bind(_this);
		_this.onblur_parent = _this.onblur_parent.bind(_this);
		_this.onfocus_parent = _this.onfocus_parent.bind(_this);
		_this.onfocus_child = _this.onfocus_child.bind(_this);
		_this.onblur_child = _this.onblur_child.bind(_this);
		_this.tabPressed = true;

		_this.state = {
			selectedItem: props.value,
			optionsList: props.optionsList || [],
			listOpen: false,
			selectedListIndex: -1
		};
		return _this;
	}

	_createClass(Dropdown, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.closePopupKey = _closePopupListener2.default.addListenerFunc(this.closePopup.bind(this));
		}
	}, {
		key: 'closePopup',
		value: function closePopup(e) {
			if (!e.target.closest('#' + this.props.name) && this.state.listOpen) {
				this.setState({
					listOpen: false,
					filteredList: null
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_closePopupListener2.default.removeListenerFunc(this.closePopupKey);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			//console.log('dd',nextProps)
			this.keyPressHandlerInstance.updateListLength.call(this.keyPressHandlerInstance, (nextProps.optionsList || []).length);
			this.setState({
				selectedItem: nextProps.value,
				optionsList: nextProps.optionsList || []
			});
		}
	}, {
		key: 'toggleList',
		value: function toggleList() {
			if (!this.props.readOnly) {
				this.setState(function (prevState, props) {
					return {
						listOpen: !prevState.listOpen,
						filteredList: null
					};
				});
			}
		}
	}, {
		key: 'openList',
		value: function openList() {
			if (!this.props.readOnly) {
				this.setState({
					listOpen: true,
					filteredList: null
				});
			}
		}
	}, {
		key: 'closeList',
		value: function closeList() {
			if (!this.props.readOnly) {
				this.setState({
					listOpen: false,
					filteredList: null
				});
			}
		}
	}, {
		key: 'setOption',
		value: function setOption(e) {
			var _this2 = this;

			var value = e.target.id;
			this.state.optionsList.forEach(function (option) {
				if (option.id == value) {
					_this2.props.setItem(_this2.props.name, option);
				}
			});

			this.toggleList();
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions(e) {
			var searchVal = e.target.value;
			var filteredList = this.state.optionsList.filter(function (option) {
				var patt = new RegExp(searchVal, 'i');
				return patt.test(option.label);
			});

			this.keyPressHandlerInstance.updateListLength.call(this.keyPressHandlerInstance, (filteredList || []).length);

			this.setState({
				filteredList: filteredList
			});
		}
	}, {
		key: 'setSelectedItem',
		value: function setSelectedItem() {
			var selectedListItem = null,
			    list = this.state.filteredList || this.state.optionsList;
			if (this.state.selectedListIndex >= 0) {
				selectedListItem = list[this.state.selectedListIndex];
			}

			if (selectedListItem) {
				this.props.setItem(this.props.name, selectedListItem);
				this.toggleList();
			}
		}
	}, {
		key: 'handleKeyPress',
		value: function handleKeyPress(e) {
			this.tabPressed = false;
			if (e.keyCode == '13') {
				this.setSelectedItem();
			} else if (e.keyCode == '9') {
				this.tabPressed = true;
			} else {
				var index = this.keyPressHandlerInstance.handleKeyPress.call(this.keyPressHandlerInstance, e.keyCode);
				this.setState({
					selectedListIndex: index
				});
			}
		}
	}, {
		key: 'preventDropdownClose',
		value: function preventDropdownClose() {
			this.forceDropdownOpen = true;
		}
	}, {
		key: 'blurHandler',
		value: function blurHandler(e) {
			if (!this.forceDropdownOpen) {
				this.closeList();
			}

			this.forceDropdownOpen = false;
		}
	}, {
		key: 'onblur_parent',
		value: function onblur_parent(e) {
			console.log('onblur_parent');
			this.tabPressed = true;
		}
	}, {
		key: 'onblur_child',
		value: function onblur_child(e) {
			console.log('onblur_child');
			if (this.tabPressed && this.state.listOpen) {
				this.blurHandler(e);
			}
		}
	}, {
		key: 'onfocus_parent',
		value: function onfocus_parent(e) {
			console.log('onfocus_parent');
			if (this.tabPressed && !this.state.listOpen) {
				this.openList(e);
			}
		}
	}, {
		key: 'onfocus_child',
		value: function onfocus_child(e) {
			console.log('onfocus_child');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var props = this.props;
			var selectedValue = this.state.selectedItem && this.state.selectedItem.label || 'Select an option',
			    listHtml = (this.state.filteredList || this.state.optionsList).map(function (option, index) {

				if (index == _this3.state.selectedListIndex) {
					return _react2.default.createElement(
						_styledComponents.SelectedListItem,
						{ id: option.id, onClick: _this3.setOption },
						option.label
					);
				}

				return _react2.default.createElement(
					_styledComponents.ListItem,
					{ id: option.id, onClick: _this3.setOption },
					option.label
				);
			});

			return _react2.default.createElement(
				_styledComponents.Wrapper,
				{ id: props.name, tabIndex: 0,
					onBlur: this.onblur_parent,
					onFocus: this.onfocus_parent.bind(this),
					onKeyDown: this.handleKeyPress,
					onMouseDown: function onMouseDown() {
						_this3.tabPressed = false;
					},
					isValid: props.isValid,
					helpText: props.helpText, errorText: props.errorText },
				_react2.default.createElement(
					'label',
					null,
					props.label
				),
				_react2.default.createElement(
					'span',
					{ onClick: this.toggleList /*onMouseDown={this.preventDropdownClose}*/ },
					selectedValue
				),
				this.state.listOpen ? _react2.default.createElement(
					_styledComponents.DropdownListWrapper,
					null,
					_react2.default.createElement('input', { ref: function ref(elem) {
							_this3.inputRef = elem;
						},
						type: 'text', onChange: this.filterOptions,
						onFocus: this.onfocus_child.bind(this),
						onBlur: this.onblur_child.bind(this) }),
					listHtml
				) : null
			);
		}
	}]);

	return Dropdown;
}(_react2.default.PureComponent);

exports.default = Dropdown;
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedListItem = exports.ListItem = exports.DropdownListWrapper = exports.Wrapper = exports.CSSVariables = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --dropdownColor : ', ';\n  --dropdownBgColor : ', ';\n  --dropdownHoverColor : ', ';\n  --dropdownHoverBgColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSizeSmall : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --dropdownShadow : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n  --inputBorderWidth : ', ';\n'], ['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --dropdownColor : ', ';\n  --dropdownBgColor : ', ';\n  --dropdownHoverColor : ', ';\n  --dropdownHoverBgColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSizeSmall : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --dropdownShadow : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n  --inputBorderWidth : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    //padding: 10px 0;\n    position:relative;\n    outline : none;\n\n    span{\n    \twidth: 100%;\n\t    display: block;\n\t    font-size : var(--inputFontSize);\n\t    padding: 15px 0px 0px;\n\t    box-sizing: border-box;\n      border-style : solid;\n      border-width : var(--inputBorderWidth);\n      border-color : var(--inputBorderColor);\n\t    color : var(--inputColor);\n    }\n\n    span:after{\n\t\tposition: absolute;\n\t    content: \'\';\n\t    right: 10px;\n\t    top: 45%;\n\t    border-top: 8px solid;\n\t    border-right: 6px solid transparent;\n\t    border-bottom: 6px solid transparent;\n\t    border-left: 6px solid transparent;\n\t}\n\n    label{\n    \tposition: absolute;\n\t    top: 2px;\n\t    left: 0px;\n\t    font-size: var(--labelFontSizeSmall);\n\t    color: var(--labelColor);\n    }\n\n    &:after{\n    \tcontent:"', '";\n      position: absolute;\n      left:0px;\n      top : 105%;\n      font-size: var(--infoFontSize);\n      color: ', ';\n    \tbackground: var(--infoBgColor);\n    \tpadding: 5px;\n    \tbox-shadow: var(--infoBoxShadow);\n    \tdisplay: ', ';\n        z-index: 1;\n    }\n'], ['\n    //padding: 10px 0;\n    position:relative;\n    outline : none;\n\n    span{\n    \twidth: 100%;\n\t    display: block;\n\t    font-size : var(--inputFontSize);\n\t    padding: 15px 0px 0px;\n\t    box-sizing: border-box;\n      border-style : solid;\n      border-width : var(--inputBorderWidth);\n      border-color : var(--inputBorderColor);\n\t    color : var(--inputColor);\n    }\n\n    span:after{\n\t\tposition: absolute;\n\t    content: \'\';\n\t    right: 10px;\n\t    top: 45%;\n\t    border-top: 8px solid;\n\t    border-right: 6px solid transparent;\n\t    border-bottom: 6px solid transparent;\n\t    border-left: 6px solid transparent;\n\t}\n\n    label{\n    \tposition: absolute;\n\t    top: 2px;\n\t    left: 0px;\n\t    font-size: var(--labelFontSizeSmall);\n\t    color: var(--labelColor);\n    }\n\n    &:after{\n    \tcontent:"', '";\n      position: absolute;\n      left:0px;\n      top : 105%;\n      font-size: var(--infoFontSize);\n      color: ', ';\n    \tbackground: var(--infoBgColor);\n    \tpadding: 5px;\n    \tbox-shadow: var(--infoBoxShadow);\n    \tdisplay: ', ';\n        z-index: 1;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tposition : absolute;\n    background : var(--dropdownBgColor);\n    width : 100%;\n    box-shadow : var(--dropdownShadow);\n    font-size : var(--inputFontSize);\n    z-index : 3;\n    max-height : 200px;\n    overflow : auto;\n    input{\n    \twidth : 100%;\n    \tbox-sizing : border-box;\n    \tfont-size : 1rem;\n    \tpadding : 0 5px;\n    }\n'], ['\n\tposition : absolute;\n    background : var(--dropdownBgColor);\n    width : 100%;\n    box-shadow : var(--dropdownShadow);\n    font-size : var(--inputFontSize);\n    z-index : 3;\n    max-height : 200px;\n    overflow : auto;\n    input{\n    \twidth : 100%;\n    \tbox-sizing : border-box;\n    \tfont-size : 1rem;\n    \tpadding : 0 5px;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tbox-sizing : border-box;\n   \tpadding : 3px 0px 3px 10px;\n\n\t&:hover{\n\t\tbackground-color: var(--dropdownHoverBgColor);\n\t    opacity: 0.8;\n\t    color: var(--dropdownHoverColor);\n\t}\n'], ['\n\tbox-sizing : border-box;\n   \tpadding : 3px 0px 3px 10px;\n\n\t&:hover{\n\t\tbackground-color: var(--dropdownHoverBgColor);\n\t    opacity: 0.8;\n\t    color: var(--dropdownHoverColor);\n\t}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tbackground-color: var(--dropdownHoverBgColor);\n    opacity: 0.8;\n    color: var(--dropdownHoverColor);\n'], ['\n\tbackground-color: var(--dropdownHoverBgColor);\n    opacity: 0.8;\n    color: var(--dropdownHoverColor);\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CSSVariables = _styledComponents2.default.div(_templateObject, function (props) {
  return props.LABEL_COLOR;
}, function (props) {
  return props.INPUT_COLOR;
}, function (props) {
  return props.INPUT_BORDER_COLOR;
}, function (props) {
  return props.HELPTEXT_COLOR;
}, function (props) {
  return props.ERRORTEXT_COLOR;
}, function (props) {
  return props.DROPDOWN_COLOR;
}, function (props) {
  return props.DROPDOWN_BACKGROUND;
}, function (props) {
  return props.DROPDOWN_HOVER_COLOR;
}, function (props) {
  return props.DROPDOWN_HOVER_BG_COLOR;
}, function (props) {
  return props.DEFAULT_GREEN_COLOR;
}, function (props) {
  return props.DEFAULT_RED_COLOR;
}, function (props) {
  return props.DEFAULT_BLUE_COLOR;
}, function (props) {
  return props.LABEL_FONT_SIZE_SMALL;
}, function (props) {
  return props.INPUT_FONT_SIZE;
}, function (props) {
  return props.INFO_FONT_SIZE;
}, function (props) {
  return props.DROPDOWN_SHADOW;
}, function (props) {
  return props.INFO_BG_COLOR;
}, function (props) {
  return props.INFO_BOX_SHADOW;
}, function (props) {
  return props.INPUT_BORDER_WIDTH;
});

var Wrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.isValid ? props.helpText : props.errorText;
}, function (props) {
  return props.isValid ? 'var(--defaultGreen)' : 'var(--defaultRed)';
}, function (props) {
  return props.isValid && props.helpText || !props.isValid && props.errorText ? 'block' : 'none';
});
var DropdownListWrapper = _styledComponents2.default.div(_templateObject3);

var ListItem = _styledComponents2.default.div(_templateObject4);

var SelectedListItem = ListItem.extend(_templateObject5);

exports.CSSVariables = CSSVariables;
exports.Wrapper = Wrapper;
exports.DropdownListWrapper = DropdownListWrapper;
exports.ListItem = ListItem;
exports.SelectedListItem = SelectedListItem;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sharedStyledComponents = __webpack_require__(3);

var _styledComponents = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabeledInput = function (_React$PureComponent) {
	_inherits(LabeledInput, _React$PureComponent);

	function LabeledInput(props) {
		_classCallCheck(this, LabeledInput);

		var _this = _possibleConstructorReturn(this, (LabeledInput.__proto__ || Object.getPrototypeOf(LabeledInput)).call(this, props));

		_this.changeHandler = _this.changeHandler.bind(_this);
		_this.focusHandler = _this.focusHandler.bind(_this);
		_this.blurHandler = _this.blurHandler.bind(_this);
		_this.state = {
			isDown: props.value ? false : true,
			isFocused: false
		};
		return _this;
	}

	_createClass(LabeledInput, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				isDown: nextProps.value ? false : true
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'changeHandler',
		value: function changeHandler(e) {
			this.props.setItem(this.props.name, e.target.value);
		}
	}, {
		key: 'focusHandler',
		value: function focusHandler(e) {
			this.setState({
				isDown: false,
				isFocused: true
			});
		}
	}, {
		key: 'blurHandler',
		value: function blurHandler(e) {
			this.setState({
				isFocused: false
			});

			if (!e.target.value) {
				this.setState({
					isDown: true
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			return _react2.default.createElement(
				_styledComponents.InputWrapper,
				{ isValid: props.isValid, errorText: props.errorText || '', helpText: props.helpText || '',
					isDown: this.state.isDown },
				_react2.default.createElement('input', { type: props.type, value: props.value || '',
					onChange: this.changeHandler,
					disabled: props.isDisabled,
					onFocus: this.focusHandler,
					onBlur: this.blurHandler,
					readOnly: props.readOnly }),
				_react2.default.createElement(_sharedStyledComponents.AnimatedBorder, { focused: this.state.isFocused,
					valid: props.isValid }),
				_react2.default.createElement(
					'label',
					null,
					props.label
				)
			);
		}
	}]);

	return LabeledInput;
}(_react2.default.PureComponent);

exports.default = LabeledInput;
module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InputWrapper = exports.CSSVariables = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';  \n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSize : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n'], ['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';  \n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSize : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tpadding:15px 0 0;\n\tposition:relative;\n\n\t&:after{\n      content:"', '";\n      position: absolute;\n      left:0px;\n      font-size: var(--infoFontSize);\n      color: ', ';\n      background: var(--infoBgColor);\n\t    padding: 5px;\n\t    box-shadow: var(--infoBoxShadow);\n\t    display: ', ';\n\t    z-index: 1;\n    }\n\n\tinput{\n\t\tposition:relative;\n\t\tz-index:1;\n\t\toutline:none;\n\t\tborder:none;\n\t\tborder-bottom:', ';\n\t\tborder-bottom-color: var(--inputBorderColor);\n\t\tcolor: var(--inputColor);\n\t\twidth:100%;\n\t\tbackground:transparent;\n\t\tfont-size : var(--inputFontSize);\n\t\tbox-sizing : border-box;\n\t}\n\n\tlabel{\n\t\tposition:absolute;\n\t\tleft:0px;\n\t\ttop:14px;\n\t\tcolor: var(--labelColor);\n\t\ttransform:', ';\n\t\ttransform-origin:top left;\n\t\ttransition:all 0.4s;\t\n\t\tfont-size : var(--labelFontSize);\t\t\t\t\t\t\t\n\t}\n'], ['\n\tpadding:15px 0 0;\n\tposition:relative;\n\n\t&:after{\n      content:"', '";\n      position: absolute;\n      left:0px;\n      font-size: var(--infoFontSize);\n      color: ', ';\n      background: var(--infoBgColor);\n\t    padding: 5px;\n\t    box-shadow: var(--infoBoxShadow);\n\t    display: ', ';\n\t    z-index: 1;\n    }\n\n\tinput{\n\t\tposition:relative;\n\t\tz-index:1;\n\t\toutline:none;\n\t\tborder:none;\n\t\tborder-bottom:', ';\n\t\tborder-bottom-color: var(--inputBorderColor);\n\t\tcolor: var(--inputColor);\n\t\twidth:100%;\n\t\tbackground:transparent;\n\t\tfont-size : var(--inputFontSize);\n\t\tbox-sizing : border-box;\n\t}\n\n\tlabel{\n\t\tposition:absolute;\n\t\tleft:0px;\n\t\ttop:14px;\n\t\tcolor: var(--labelColor);\n\t\ttransform:', ';\n\t\ttransform-origin:top left;\n\t\ttransition:all 0.4s;\t\n\t\tfont-size : var(--labelFontSize);\t\t\t\t\t\t\t\n\t}\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CSSVariables = _styledComponents2.default.div(_templateObject, function (props) {
	return props.LABEL_COLOR;
}, function (props) {
	return props.INPUT_COLOR;
}, function (props) {
	return props.INPUT_BORDER_COLOR;
}, function (props) {
	return props.HELPTEXT_COLOR;
}, function (props) {
	return props.ERRORTEXT_COLOR;
}, function (props) {
	return props.DEFAULT_GREEN_COLOR;
}, function (props) {
	return props.DEFAULT_RED_COLOR;
}, function (props) {
	return props.DEFAULT_BLUE_COLOR;
}, function (props) {
	return props.LABEL_FONT_SIZE;
}, function (props) {
	return props.INPUT_FONT_SIZE;
}, function (props) {
	return props.INFO_FONT_SIZE;
}, function (props) {
	return props.INFO_BG_COLOR;
}, function (props) {
	return props.INFO_BOX_SHADOW;
});

var InputWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.isValid ? props.helpText : props.errorText;
}, function (props) {
	return props.isValid ? 'var(--defaultGreen)' : 'var(--defaultRed)';
}, function (props) {
	return props.isValid && props.helpText || !props.isValid && props.errorText ? 'block' : 'none';
}, function (props) {
	return props.isValid ? '1px solid' : 'none';
}, function (props) {
	return props.isDown ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.6)";
});

exports.CSSVariables = CSSVariables;
exports.InputWrapper = InputWrapper;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectInputCore = function (_React$PureComponent) {
	_inherits(SelectInputCore, _React$PureComponent);

	function SelectInputCore(props) {
		_classCallCheck(this, SelectInputCore);

		var _this = _possibleConstructorReturn(this, (SelectInputCore.__proto__ || Object.getPrototypeOf(SelectInputCore)).call(this, props));

		_this.isDown = false;
		_this.selectedOption = props.value || null;
		_this.state = {
			optionsList: props.optionsList || []
		};
		return _this;
	}

	_createClass(SelectInputCore, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.selectedOption = nextProps.value || null;
			this.setState({
				optionsList: nextProps.optionsList || []
			});
		}
	}, {
		key: 'selectHandler',
		value: function selectHandler(e) {
			var _this2 = this;

			var selectedVal = e.target.value;
			this.state.optionsList.forEach(function (option) {
				if (option.id == selectedVal) {
					_this2.selectedOption = option;
				}
			});

			if (this.selectedOption) {
				this.props.setItem(this.props.name, this.selectedOption);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var props = this.props;
			var optionsHtml = this.state.optionsList.map(function (option) {
				if (_this3.selectedOption && option.id == _this3.selectedOption.id) {
					return _react2.default.createElement(
						'option',
						{ value: option.id,
							className: 'selected',
							selected: true },
						option.label
					);
				}
				return _react2.default.createElement(
					'option',
					{ value: option.id },
					option.label
				);
			});

			if (!this.selectedOption) {
				optionsHtml.push(_react2.default.createElement(
					'option',
					{ value: '', disabled: true, selected: true },
					'Select an option'
				));
			}

			return _react2.default.createElement(
				_styledComponents.Wrapper,
				{ isDown: this.isDown, isValid: props.isValid,
					helpText: props.helpText, errorText: props.errorText },
				_react2.default.createElement(
					_styledComponents.SelectWrapper,
					null,
					_react2.default.createElement(
						'select',
						{ onChange: this.selectHandler.bind(this) },
						optionsHtml
					),
					_react2.default.createElement(_styledComponents.Arrow, null)
				),
				_react2.default.createElement(
					'label',
					null,
					props.label
				)
			);
		}
	}]);

	return SelectInputCore;
}(_react2.default.PureComponent);

exports.default = SelectInputCore;
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = exports.SelectWrapper = exports.Wrapper = exports.CSSVariables = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --dropdownColor : ', ';\n  --dropdownBgColor : ', ';\n  --dropdownHoverColor : ', ';\n  --dropdownHoverBgColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSizeSmall : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --dropdownShadow : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n  --selectOptionColor : ', ';\n'], ['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --dropdownColor : ', ';\n  --dropdownBgColor : ', ';\n  --dropdownHoverColor : ', ';\n  --dropdownHoverBgColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSizeSmall : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --dropdownShadow : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n  --selectOptionColor : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t  position: relative;\n   // padding: 10px 0;\n  \n    select{\n    \t-webkit-appearance: none;\n\t    padding: 15px 10px 5px;\n\t    width: 100%;\n\t    font-size: 1rem;\n\t    outline: none;\n\t    font-weight:300;\n      background : inherit;\n\t    color : var(--inputColor);\n    }\n\n    option{\n      color : var(--selectOptionColor);\n    }\n\n    label{\n    \tposition: absolute;\n\t    top: 2px;\n\t    left:10px;\n\t    font-size: 0.75rem;\n\t    color: var(--labelColor);\n    }\n\n    &:after{\n    \tcontent:"', '";\n        position: absolute;\n        top : 105%;\n        left:0px;\n        font-size: var(--infoFontSize);\n        color: ', ';\n\t    background: var(--infoBgColor);\n\t    padding: 5px;\n\t    box-shadow: var(--infoBoxShadow);\n    \tdisplay: ', ';\n        z-index : 1;\n    }\n'], ['\n\t  position: relative;\n   // padding: 10px 0;\n  \n    select{\n    \t-webkit-appearance: none;\n\t    padding: 15px 10px 5px;\n\t    width: 100%;\n\t    font-size: 1rem;\n\t    outline: none;\n\t    font-weight:300;\n      background : inherit;\n\t    color : var(--inputColor);\n    }\n\n    option{\n      color : var(--selectOptionColor);\n    }\n\n    label{\n    \tposition: absolute;\n\t    top: 2px;\n\t    left:10px;\n\t    font-size: 0.75rem;\n\t    color: var(--labelColor);\n    }\n\n    &:after{\n    \tcontent:"', '";\n        position: absolute;\n        top : 105%;\n        left:0px;\n        font-size: var(--infoFontSize);\n        color: ', ';\n\t    background: var(--infoBgColor);\n\t    padding: 5px;\n\t    box-shadow: var(--infoBoxShadow);\n    \tdisplay: ', ';\n        z-index : 1;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tposition:relative;\n  select{\n    position : relative;\n    z-index : 1;\n  }\n'], ['\n\tposition:relative;\n  select{\n    position : relative;\n    z-index : 1;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tposition: absolute;\n    right: 10px;\n    top: 45%;\n    border-top: 8px solid;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-left: 6px solid transparent;\n'], ['\n\tposition: absolute;\n    right: 10px;\n    top: 45%;\n    border-top: 8px solid;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    border-left: 6px solid transparent;\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CSSVariables = _styledComponents2.default.div(_templateObject, function (props) {
  return props.LABEL_COLOR;
}, function (props) {
  return props.INPUT_COLOR;
}, function (props) {
  return props.INPUT_BORDER_COLOR;
}, function (props) {
  return props.HELPTEXT_COLOR;
}, function (props) {
  return props.ERRORTEXT_COLOR;
}, function (props) {
  return props.DROPDOWN_COLOR;
}, function (props) {
  return props.DROPDOWN_BACKGROUND;
}, function (props) {
  return props.DROPDOWN_HOVER_COLOR;
}, function (props) {
  return props.DROPDOWN_HOVER_BG_COLOR;
}, function (props) {
  return props.DEFAULT_GREEN_COLOR;
}, function (props) {
  return props.DEFAULT_RED_COLOR;
}, function (props) {
  return props.DEFAULT_BLUE_COLOR;
}, function (props) {
  return props.LABEL_FONT_SIZE_SMALL;
}, function (props) {
  return props.INPUT_FONT_SIZE;
}, function (props) {
  return props.INFO_FONT_SIZE;
}, function (props) {
  return props.DROPDOWN_SHADOW;
}, function (props) {
  return props.INFO_BG_COLOR;
}, function (props) {
  return props.INFO_BOX_SHADOW;
}, function (props) {
  return props.SELECT_OPTION_COLOR;
});

var Wrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.isValid ? props.helpText : props.errorText;
}, function (props) {
  return props.isValid ? 'var(--defaultGreen)' : 'var(--defaultRed)';
}, function (props) {
  return props.isValid && props.helpText || !props.isValid && props.errorText ? 'block' : 'none';
});

var SelectWrapper = _styledComponents2.default.div(_templateObject3);

var Arrow = _styledComponents2.default.div(_templateObject4);

exports.CSSVariables = CSSVariables;
exports.Wrapper = Wrapper;
exports.SelectWrapper = SelectWrapper;
exports.Arrow = Arrow;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sharedStyledComponents = __webpack_require__(3);

var _styledComponents = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtonGroup = function (_React$PureComponent) {
	_inherits(RadioButtonGroup, _React$PureComponent);

	function RadioButtonGroup(props) {
		_classCallCheck(this, RadioButtonGroup);

		var _this = _possibleConstructorReturn(this, (RadioButtonGroup.__proto__ || Object.getPrototypeOf(RadioButtonGroup)).call(this, props));

		_this.onChangeHandler = _this.onChangeHandler.bind(_this);
		return _this;
	}

	_createClass(RadioButtonGroup, [{
		key: 'onChangeHandler',
		value: function onChangeHandler(e) {
			var value = this.props.optionsList.filter(function (option) {
				if (option.id == e.target.value) {
					return true;
				}

				return false;
			});
			this.props.setItem(e.target.name, value[0]);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props,
			    optionsHtml = props.optionsList.map(function (option) {
				if (option.display == 'block') {
					return _react2.default.createElement(
						_sharedStyledComponents.BlockWrapper,
						null,
						_react2.default.createElement(
							_styledComponents.RadioOption,
							null,
							_react2.default.createElement('input', { type: 'radio',
								name: props.name,
								value: option.id,
								onChange: _this2.onChangeHandler,
								checked: option.id == (props.value && props.value.id) }),
							_react2.default.createElement(
								'label',
								null,
								option.label
							)
						)
					);
				}
				return _react2.default.createElement(
					_styledComponents.RadioOption,
					null,
					_react2.default.createElement('input', { type: 'radio',
						name: props.name,
						value: option.id,
						onChange: _this2.onChangeHandler,
						checked: option.id == (props.value && props.value.id) }),
					_react2.default.createElement(
						'label',
						null,
						option.label
					)
				);
			});

			return _react2.default.createElement(
				_styledComponents.Wrapper,
				null,
				_react2.default.createElement(
					'p',
					null,
					props.label
				),
				optionsHtml
			);
		}
	}]);

	return RadioButtonGroup;
}(_react2.default.PureComponent);

exports.default = RadioButtonGroup;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioOption = exports.Wrapper = exports.CSSVariables = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSize : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n'], ['\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --labelFontSize : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t//padding:10px 0 0;\n\tp{\n\t\tmargin:0px;\n\t\tfont-size : var(--labelFontSize);\n\t\tcolor : var(--labelColor);\n\t}\n'], ['\n\t//padding:10px 0 0;\n\tp{\n\t\tmargin:0px;\n\t\tfont-size : var(--labelFontSize);\n\t\tcolor : var(--labelColor);\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tdisplay : inline-block;\n\tmargin: 5px 10px 0 0;\n\tfont-size : var(--inputFontSize);\n\tcolor : var(--inputColor);\n'], ['\n\tdisplay : inline-block;\n\tmargin: 5px 10px 0 0;\n\tfont-size : var(--inputFontSize);\n\tcolor : var(--inputColor);\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CSSVariables = _styledComponents2.default.div(_templateObject, function (props) {
  return props.LABEL_COLOR;
}, function (props) {
  return props.INPUT_COLOR;
}, function (props) {
  return props.INPUT_BORDER_COLOR;
}, function (props) {
  return props.HELPTEXT_COLOR;
}, function (props) {
  return props.ERRORTEXT_COLOR;
}, function (props) {
  return props.DEFAULT_GREEN_COLOR;
}, function (props) {
  return props.DEFAULT_RED_COLOR;
}, function (props) {
  return props.DEFAULT_BLUE_COLOR;
}, function (props) {
  return props.LABEL_FONT_SIZE;
}, function (props) {
  return props.INPUT_FONT_SIZE;
}, function (props) {
  return props.INFO_FONT_SIZE;
}, function (props) {
  return props.INFO_BG_COLOR;
}, function (props) {
  return props.INFO_BOX_SHADOW;
});

var Wrapper = _styledComponents2.default.div(_templateObject2);
var RadioOption = _styledComponents2.default.div(_templateObject3);

exports.CSSVariables = CSSVariables;
exports.Wrapper = Wrapper;
exports.RadioOption = RadioOption;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.SelectInput = exports.RadioButtonGroup = exports.TextInput = exports.NumberInput = exports.ReactForm = exports.DropDown = exports.DateTime = exports.CheckBox = exports.AutoComplete = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _autocomplete = __webpack_require__(29);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _checkbox = __webpack_require__(40);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _datetimeInput = __webpack_require__(42);

var _datetimeInput2 = _interopRequireDefault(_datetimeInput);

var _dropdown = __webpack_require__(50);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _form = __webpack_require__(52);

var _form2 = _interopRequireDefault(_form);

var _labeledInput = __webpack_require__(60);

var _radioButtonGroup = __webpack_require__(62);

var _radioButtonGroup2 = _interopRequireDefault(_radioButtonGroup);

var _select = __webpack_require__(64);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AutoComplete = _autocomplete2.default;
exports.CheckBox = _checkbox2.default;
exports.DateTime = _datetimeInput2.default;
exports.DropDown = _dropdown2.default;
exports.ReactForm = _form2.default;
exports.NumberInput = _labeledInput.NumberInput;
exports.TextInput = _labeledInput.TextInput;
exports.RadioButtonGroup = _radioButtonGroup2.default;
exports.SelectInput = _select2.default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(9);

var _core2 = _interopRequireDefault(_core);

var _colorConfig = __webpack_require__(39);

var _colorConfig2 = _interopRequireDefault(_colorConfig);

var _styledComponents = __webpack_require__(15);

var _colorConfigMerger = __webpack_require__(2);

var _colorConfigMerger2 = _interopRequireDefault(_colorConfigMerger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoComplete = function (_React$Component) {
	_inherits(AutoComplete, _React$Component);

	function AutoComplete() {
		_classCallCheck(this, AutoComplete);

		return _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).apply(this, arguments));
	}

	_createClass(AutoComplete, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    styleConfig = (0, _colorConfigMerger2.default)(props.colorConfig, _colorConfig2.default),
			    inputConfig = props.inputConfig;

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(_core2.default, inputConfig)
			);
		}
	}]);

	return AutoComplete;
}(_react2.default.Component);

exports.default = AutoComplete;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(32);

function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor, prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isObject(val) {
  return val != null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && Array.isArray(val) === false;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {
	/* eslint-disable */
	( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module['exports'] = factory(null) :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory(null)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : window['stylis'] = factory(null);
})( /** @param {*=} options */function factory(options) {
	/* eslint-disable */

	'use strict';

	/**
  * Notes
  *
  * The ['<method name>'] pattern is used to support closure compiler
  * the jsdoc signatures are also used to the same effect
  *
  * ----
  *
  * int + int + int === n4 [faster]
  *
  * vs
  *
  * int === n1 && int === n2 && int === n3
  *
  * ----
  *
  * switch (int) { case ints...} [faster]
  *
  * vs
  *
  * if (int == 1 && int === 2 ...)
  *
  * ----
  *
  * The (first*n1 + second*n2 + third*n3) format used in the property parser
  * is a simple way to hash the sequence of characters
  * taking into account the index they occur in
  * since any number of 3 character sequences could produce duplicates.
  *
  * On the other hand sequences that are directly tied to the index of the character
  * resolve a far more accurate measure, it's also faster
  * to evaluate one condition in a switch statement
  * than three in an if statement regardless of the added math.
  *
  * This allows the vendor prefixer to be both small and fast.
  */

	var nullptn = /^\0+/g; /* matches leading null characters */
	var formatptn = /[\0\r\f]/g; /* matches new line, null and formfeed characters */
	var colonptn = /: */g; /* splits animation rules */
	var cursorptn = /zoo|gra/; /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g; /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g; /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g; /* animation properties */
	var elementptn = / *[\0] */g; /* selector elements */
	var selectorptn = /,\r+?/g; /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g; /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g; /* matches :global(.*) */
	var invalidptn = /\W+/g; /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/; /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g; /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g; /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g; /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g; /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g; /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g; /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g; /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/; /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g; /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g; /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g; /* match properties leading semicolon */
	var selfptn = /-self|flex-/g; /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/; /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/; /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/; /* match max/min/fit-content, fill-available
                                                        /* vendors */
	var webkit = '-webkit-';
	var moz = '-moz-';
	var ms = '-ms-';

	/* character codes */
	var SEMICOLON = 59; /* ; */
	var CLOSEBRACES = 125; /* } */
	var OPENBRACES = 123; /* { */
	var OPENPARENTHESES = 40; /* ( */
	var CLOSEPARENTHESES = 41; /* ) */
	var OPENBRACKET = 91; /* [ */
	var CLOSEBRACKET = 93; /* ] */
	var NEWLINE = 10; /* \n */
	var CARRIAGE = 13; /* \r */
	var TAB = 9; /* \t */
	var AT = 64; /* @ */
	var SPACE = 32; /*   */
	var AND = 38; /* & */
	var DASH = 45; /* - */
	var UNDERSCORE = 95; /* _ */
	var STAR = 42; /* * */
	var COMMA = 44; /* , */
	var COLON = 58; /* : */
	var SINGLEQUOTE = 39; /* ' */
	var DOUBLEQUOTE = 34; /* " */
	var FOWARDSLASH = 47; /* / */
	var GREATERTHAN = 62; /* > */
	var PLUS = 43; /* + */
	var TILDE = 126; /* ~ */
	var NULL = 0; /* \0 */
	var FORMFEED = 12; /* \f */
	var VERTICALTAB = 11; /* \v */

	/* special identifiers */
	var KEYFRAME = 107; /* k */
	var MEDIA = 109; /* m */
	var SUPPORTS = 115; /* s */
	var PLACEHOLDER = 112; /* p */
	var READONLY = 111; /* o */
	var IMPORT = 169; /* <at>i */
	var CHARSET = 163; /* <at>c */
	var DOCUMENT = 100; /* <at>d */
	var PAGE = 112; /* <at>p */

	var column = 1; /* current column */
	var line = 1; /* current line numebr */
	var pattern = 0; /* :pattern */

	var cascade = 1; /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1; /* vendor prefix */
	var escape = 1; /* escape :global() pattern */
	var compress = 0; /* compress output */
	var semicolon = 0; /* no/semicolon option */
	var preserve = 0; /* preserve empty selectors */

	/* empty reference */
	var array = [];

	/* plugins */
	var plugins = [];
	var plugged = 0;
	var should = null;

	/* plugin context */
	var POSTS = -2;
	var PREPS = -1;
	var UNKWN = 0;
	var PROPS = 1;
	var BLCKS = 2;
	var ATRUL = 3;

	/* plugin newline context */
	var unkwn = 0;

	/* keyframe animation */
	var keyed = 1;
	var key = '';

	/* selector namespace */
	var nscopealt = '';
	var nscope = '';

	/**
  * Compile
  *
  * @param {Array<string>} parent
  * @param {Array<string>} current
  * @param {string} body
  * @param {number} id
  * @param {number} depth
  * @return {string}
  */
	function compile(parent, current, body, id, depth) {
		var bracket = 0; /* brackets [] */
		var comment = 0; /* comments /* // or /* */
		var parentheses = 0; /* functions () */
		var quote = 0; /* quotes '', "" */

		var first = 0; /* first character code */
		var second = 0; /* second character code */
		var code = 0; /* current character code */
		var tail = 0; /* previous character code */
		var trail = 0; /* character before previous code */
		var peak = 0; /* previous non-whitespace code */

		var counter = 0; /* count sequence termination */
		var context = 0; /* track current context */
		var atrule = 0; /* track @at-rule context */
		var pseudo = 0; /* track pseudo token index */
		var caret = 0; /* current character index */
		var format = 0; /* control character formating context */
		var insert = 0; /* auto semicolon insertion */
		var invert = 0; /* inverted selector pattern */
		var length = 0; /* generic length address */
		var eof = body.length; /* end of file(length) */
		var eol = eof - 1; /* end of file(characters) */

		var char = ''; /* current character */
		var chars = ''; /* current buffer of characters */
		var child = ''; /* next buffer of characters */
		var out = ''; /* compiled body */
		var children = ''; /* compiled children */
		var flat = ''; /* compiled leafs */
		var selector; /* generic selector address */
		var result; /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret);

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
					}

					quote = parentheses = bracket = 0;
					eof++;
					eol++;
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '');
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE:
								{
									break;
								}
							default:
								{
									chars += body.charAt(caret);
								}
						}

						code = SEMICOLON;
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA:
							{
								insert = 0;
							}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE:
							{
								break;
							}
						// valid
						default:
							{
								insert = 0;
								length = caret;
								first = code;
								caret--;
								code = SEMICOLON;

								while (length < eof) {
									switch (body.charCodeAt(length++)) {
										case NEWLINE:
										case CARRIAGE:
										case SEMICOLON:
											{
												++caret;
												code = first;
												length = eof;
												break;
											}
										case COLON:
											{
												if (format > 0) {
													++caret;
													code = first;
												}
											}
										case OPENBRACES:
											{
												length = eof;
											}
									}
								}
							}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES:
						{
							chars = chars.trim();
							first = chars.charCodeAt(0);
							counter = 1;
							length = ++caret;

							while (caret < eof) {
								code = body.charCodeAt(caret);

								switch (code) {
									case OPENBRACES:
										{
											counter++;
											break;
										}
									case CLOSEBRACES:
										{
											counter--;
											break;
										}
								}

								if (counter === 0) {
									break;
								}

								caret++;
							}

							child = body.substring(length, caret);

							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0);
							}

							switch (first) {
								// @at-rule
								case AT:
									{
										if (format > 0) {
											chars = chars.replace(formatptn, '');
										}

										second = chars.charCodeAt(1);

										switch (second) {
											case DOCUMENT:
											case MEDIA:
											case SUPPORTS:
											case DASH:
												{
													selector = current;
													break;
												}
											default:
												{
													selector = array;
												}
										}

										child = compile(current, selector, child, second, depth + 1);
										length = child.length;

										// preserve empty @at-rule
										if (preserve > 0 && length === 0) {
											length = chars.length;
										}

										// execute plugins, @at-rule context
										if (plugged > 0) {
											selector = select(array, chars, invert);
											result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id);
											chars = selector.join('');

											if (result !== void 0) {
												if ((length = (child = result.trim()).length) === 0) {
													second = 0;
													child = '';
												}
											}
										}

										if (length > 0) {
											switch (second) {
												case SUPPORTS:
													{
														chars = chars.replace(supportsptn, supports);
													}
												case DOCUMENT:
												case MEDIA:
												case DASH:
													{
														child = chars + '{' + child + '}';
														break;
													}
												case KEYFRAME:
													{
														chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''));
														child = chars + '{' + child + '}';

														if (prefix === 1 || prefix === 2 && vendor('@' + child, 3)) {
															child = '@' + webkit + child + '@' + child;
														} else {
															child = '@' + child;
														}
														break;
													}
												default:
													{
														child = chars + child;

														if (id === PAGE) {
															child = (out += child, '');
														}
													}
											}
										} else {
											child = '';
										}

										break;
									}
								// selector
								default:
									{
										child = compile(current, select(current, chars, invert), child, id, depth + 1);
									}
							}

							children += child;

							// reset
							context = 0;
							insert = 0;
							pseudo = 0;
							format = 0;
							invert = 0;
							atrule = 0;
							chars = '';
							child = '';
							code = body.charCodeAt(++caret);
							break;
						}
					case CLOSEBRACES:
					case SEMICOLON:
						{
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim();

							if ((length = chars.length) > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0);

									// first character is a letter or dash, buffer has a space character
									if (first === DASH || first > 96 && first < 123) {
										length = (chars = chars.replace(' ', ':')).length;
									}
								}

								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
										if ((length = (chars = result.trim()).length) === 0) {
											chars = '\0\0';
										}
									}
								}

								first = chars.charCodeAt(0);
								second = chars.charCodeAt(1);

								switch (first + second) {
									case NULL:
										{
											break;
										}
									case IMPORT:
									case CHARSET:
										{
											flat += chars + body.charAt(caret);
											break;
										}
									default:
										{
											if (chars.charCodeAt(length - 1) === COLON) break;

											out += property(chars, first, second, chars.charCodeAt(2));
										}
								}
							}

							// reset
							context = 0;
							insert = 0;
							pseudo = 0;
							format = 0;
							invert = 0;
							chars = '';
							code = body.charCodeAt(++caret);
							break;
						}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE:
					{
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES:
									{
										break;
									}
								default:
									{
										// current buffer has a colon
										if (pseudo > 0) {
											insert = 1;
										}
									}
							}
						}

						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0;
						} else if (cascade + context === 0) {
							format = 1;
							chars += '\0';
						}

						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id);
						}

						// next line, reset column position
						column = 1;
						line++;
						break;
					}
				case SEMICOLON:
				case CLOSEBRACES:
					{
						if (comment + quote + parentheses + bracket === 0) {
							column++;
							break;
						}
					}
				default:
					{
						// increment column position
						column++;

						// current character
						char = body.charAt(caret);

						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE:
								{
									if (quote + bracket + comment === 0) {
										switch (tail) {
											case COMMA:
											case COLON:
											case TAB:
											case SPACE:
												{
													char = '';
													break;
												}
											default:
												{
													if (code !== SPACE) {
														char = ' ';
													}
												}
										}
									}
									break;
								}
							// escape breaking control characters
							case NULL:
								{
									char = '\\0';
									break;
								}
							case FORMFEED:
								{
									char = '\\f';
									break;
								}
							case VERTICALTAB:
								{
									char = '\\v';
									break;
								}
							// &
							case AND:
								{
									// inverted selector pattern i.e html &
									if (quote + comment + bracket === 0 && cascade > 0) {
										invert = 1;
										format = 1;
										char = '\f' + char;
									}
									break;
								}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108:
								{
									if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
										switch (caret - pseudo) {
											// ::placeholder
											case 2:
												{
													if (tail === PLACEHOLDER && body.charCodeAt(caret - 3) === COLON) {
														pattern = tail;
													}
												}
											// :read-only
											case 8:
												{
													if (trail === READONLY) {
														pattern = trail;
													}
												}
										}
									}
									break;
								}
							// :<pattern>
							case COLON:
								{
									if (quote + comment + bracket === 0) {
										pseudo = caret;
									}
									break;
								}
							// selectors
							case COMMA:
								{
									if (comment + parentheses + quote + bracket === 0) {
										format = 1;
										char += '\r';
									}
									break;
								}
							// quotes
							case DOUBLEQUOTE:
								{
									if (comment === 0) {
										quote = quote === code ? 0 : quote === 0 ? code : quote;
									}
									break;
								}
							case SINGLEQUOTE:
								{
									if (comment === 0) {
										quote = quote === code ? 0 : quote === 0 ? code : quote;
									}
									break;
								}
							// attributes
							case OPENBRACKET:
								{
									if (quote + comment + parentheses === 0) {
										bracket++;
									}
									break;
								}
							case CLOSEBRACKET:
								{
									if (quote + comment + parentheses === 0) {
										bracket--;
									}
									break;
								}
							// functions
							case CLOSEPARENTHESES:
								{
									if (quote + comment + bracket === 0) {
										parentheses--;
									}
									break;
								}
							case OPENPARENTHESES:
								{
									if (quote + comment + bracket === 0) {
										if (context === 0) {
											switch (tail * 2 + trail * 3) {
												// :matches
												case 533:
													{
														break;
													}
												// :global, :not, :nth-child etc...
												default:
													{
														counter = 0;
														context = 1;
													}
											}
										}

										parentheses++;
									}
									break;
								}
							case AT:
								{
									if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
										atrule = 1;
									}
									break;
								}
							// block/line comments
							case STAR:
							case FOWARDSLASH:
								{
									if (quote + bracket + parentheses > 0) {
										break;
									}

									switch (comment) {
										// initialize line/block comment context
										case 0:
											{
												switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
													// //
													case 235:
														{
															comment = FOWARDSLASH;
															break;
														}
													// /*
													case 220:
														{
															length = caret;
															comment = STAR;
															break;
														}
												}
												break;
											}
										// end block comment context
										case STAR:
											{
												if (code === FOWARDSLASH && tail === STAR) {
													// /*<!> ... */, !
													if (body.charCodeAt(length + 2) === 33) {
														out += body.substring(length, caret + 1);
													}
													char = '';
													comment = 0;
												}
											}
									}
								}
						}

						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES:
										{
											if (context === 0) {
												// outside of an isolated context i.e nth-child(<...>)
												switch (tail) {
													case TAB:
													case SPACE:
													case NEWLINE:
													case CARRIAGE:
														{
															char = char + '\0';
															break;
														}
													default:
														{
															char = '\0' + char + (code === COMMA ? '' : '\0');
														}
												}
												format = 1;
											} else {
												// within an isolated context, sleep untill it's terminated
												switch (code) {
													case OPENPARENTHESES:
														{
															context = ++counter;
															break;
														}
													case CLOSEPARENTHESES:
														{
															if ((context = --counter) === 0) {
																format = 1;
																char += '\0';
															}
															break;
														}
												}
											}
											break;
										}
									case TAB:
									case SPACE:
										{
											switch (tail) {
												case NULL:
												case OPENBRACES:
												case CLOSEBRACES:
												case SEMICOLON:
												case COMMA:
												case FORMFEED:
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE:
													{
														break;
													}
												default:
													{
														// ignore in isolated contexts
														if (context === 0) {
															format = 1;
															char += '\0';
														}
													}
											}
										}
								}
							}

							// concat buffer of characters
							chars += char;

							// previous non-whitespace character code
							if (code !== SPACE && code !== TAB) {
								peak = code;
							}
						}
					}
			}

			// tail character codes
			trail = tail;
			tail = code;

			// visit every character
			caret++;
		}

		length = out.length;

		// preserve empty selector
		if (preserve > 0) {
			if (length === 0 && children.length === 0 && current[0].length === 0 === false) {
				if (id !== MEDIA || current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0]) {
					length = current.join(',').length + 2;
				}
			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current;

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id);

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children;
				}
			}

			out = selector.join(',') + '{' + out + '}';

			if (prefix * pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2)) pattern = 0;

				switch (pattern) {
					// ::read-only
					case READONLY:
						{
							out = out.replace(readonlyptn, ':' + moz + '$1') + out;
							break;
						}
					// ::placeholder
					case PLACEHOLDER:
						{
							out = out.replace(plcholdrptn, '::' + webkit + 'input-$1') + out.replace(plcholdrptn, '::' + moz + '$1') + out.replace(plcholdrptn, ':' + ms + 'input-$1') + out;
							break;
						}
				}

				pattern = 0;
			}
		}

		return flat + out + children;
	}

	/**
  * Select
  *
  * @param {Array<string>} parent
  * @param {string} current
  * @param {number} invert
  * @return {Array<string>}
  */
	function select(parent, current, invert) {
		var selectors = current.trim().split(selectorptn);
		var out = selectors;

		var length = selectors.length;
		var l = parent.length;

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1:
				{
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim();
					}
					break;
				}
			// >2 parent selectors, nested
			default:
				{
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim();
						}
					}
				}
		}

		return out;
	}

	/**
  * Scope
  *
  * @param {string} parent
  * @param {string} current
  * @param {number} invert
  * @param {number} level
  * @return {string}
  */
	function scope(parent, current, invert, level) {
		var selector = current;
		var code = selector.charCodeAt(0);

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0);
		}

		switch (code) {
			// &
			case AND:
				{
					switch (cascade + level) {
						case 0:
						case 1:
							{
								if (parent.trim().length === 0) {
									break;
								}
							}
						default:
							{
								return selector.replace(andptn, '$1' + parent.trim());
							}
					}
					break;
				}
			// :
			case COLON:
				{
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103:
							{
								if (escape > 0 && cascade > 0) {
									return selector.replace(escapeptn, '$1').replace(andptn, '$1' + nscope);
								}
								break;
							}
						default:
							{
								// :hover
								return parent.trim() + selector.replace(andptn, '$1' + parent.trim());
							}
					}
				}
			default:
				{
					// html &
					if (invert * cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1') + parent.trim());
					}
				}
		}

		return parent + selector;
	}

	/**
  * Property
  *
  * @param {string} input
  * @param {number} first
  * @param {number} second
  * @param {number} third
  * @return {string}
  */
	function property(input, first, second, third) {
		var index = 0;
		var out = input + ';';
		var hash = first * 2 + second * 3 + third * 4;
		var cache;

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out);
		} else if (prefix === 0 || prefix === 2 && !vendor(out, 1)) {
			return out;
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015:
				{
					// text-shadow/text-align/text-transform, a
					return out.charCodeAt(10) === 97 ? webkit + out + out : out;
				}
			// filter/fill f, i, l
			case 951:
				{
					// filter, t
					return out.charCodeAt(3) === 116 ? webkit + out + out : out;
				}
			// color/column, c, o, l
			case 963:
				{
					// column, n
					return out.charCodeAt(5) === 110 ? webkit + out + out : out;
				}
			// box-decoration-break, b, o, x
			case 1009:
				{
					if (out.charCodeAt(4) !== 100) {
						break;
					}
				}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942:
				{
					return webkit + out + out;
				}
			// appearance: a, p, p
			case 978:
				{
					return webkit + out + moz + out + out;
				}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983:
				{
					return webkit + out + moz + out + ms + out + out;
				}
			// background/backface-visibility, b, a, c
			case 883:
				{
					// backface-visibility, -
					return out.charCodeAt(8) === DASH ? webkit + out + out : out;
				}
			// flex: f, l, e
			case 932:
				{
					if (out.charCodeAt(4) === DASH) {
						switch (out.charCodeAt(5)) {
							// flex-grow, g
							case 103:
								{
									return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out;
								}
							// flex-shrink, s
							case 115:
								{
									return webkit + out + ms + out.replace('shrink', 'negative') + out;
								}
							// flex-basis, b
							case 98:
								{
									return webkit + out + ms + out.replace('basis', 'preferred-size') + out;
								}
						}
					}

					return webkit + out + ms + out + out;
				}
			// order: o, r, d
			case 964:
				{
					return webkit + out + ms + 'flex' + '-' + out + out;
				}
			// justify-items/justify-content, j, u, s
			case 1023:
				{
					// justify-content, c
					if (out.charCodeAt(8) !== 99) {
						break;
					}

					cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
					return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out;
				}
			// cursor, c, u, r
			case 1005:
				{
					return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out;
				}
			// writing-mode, w, r, i
			case 1000:
				{
					cache = out.substring(13).trim();
					index = cache.indexOf('-') + 1;

					switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
						// vertical-lr
						case 226:
							{
								cache = out.replace(writingptn, 'tb');
								break;
							}
						// vertical-rl
						case 232:
							{
								cache = out.replace(writingptn, 'tb-rl');
								break;
							}
						// horizontal-tb
						case 220:
							{
								cache = out.replace(writingptn, 'lr');
								break;
							}
						default:
							{
								return out;
							}
					}

					return webkit + out + ms + cache + out;
				}
			// position: sticky
			case 1017:
				{
					if (out.indexOf('sticky', 9) === -1) {
						return out;
					}
				}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975:
				{
					index = (out = input).length - 10;
					cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim();

					switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0)) {
						// inline-
						case 203:
							{
								// inline-box
								if (cache.charCodeAt(8) < 111) {
									break;
								}
							}
						// inline-box/sticky
						case 115:
							{
								out = out.replace(cache, webkit + cache) + ';' + out;
								break;
							}
						// inline-flex
						// flex
						case 207:
						case 102:
							{
								out = out.replace(cache, webkit + (hash > 102 ? 'inline-' : '') + 'box') + ';' + out.replace(cache, webkit + cache) + ';' + out.replace(cache, ms + cache + 'box') + ';' + out;
							}
					}

					return out + ';';
				}
			// align-items, align-center, align-self: a, l, i, -
			case 938:
				{
					if (out.charCodeAt(5) === DASH) {
						switch (out.charCodeAt(6)) {
							// align-items, i
							case 105:
								{
									cache = out.replace('-items', '');
									return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out;
								}
							// align-self, s
							case 115:
								{
									return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out;
								}
							// align-content
							default:
								{
									return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out;
								}
						}
					}
					break;
				}
			// min/max
			case 973:
			case 989:
				{
					// min-/max- height/width/block-size/inline-size
					if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
						break;
					}
				}
			// height/width: min-content / width: max-content
			case 931:
			case 953:
				{
					if (dimensionptn.test(input) === true) {
						// stretch
						if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115) return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch');else return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out;
					}
					break;
				}
			// transform, transition: t, r, a
			case 962:
				{
					out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out;

					// transitions
					if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
						return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out;
					}

					break;
				}
		}

		return out;
	}

	/**
  * Vendor
  *
  * @param {string} content
  * @param {number} context
  * @return {boolean}
  */
	function vendor(content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{');
		var key = content.substring(0, context !== 3 ? index : 10);
		var value = content.substring(index + 1, content.length - 1);

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context);
	}

	/**
  * Supports
  *
  * @param {string} match
  * @param {string} group
  * @return {string}
  */
	function supports(match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));

		return out !== group + ';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '(' + group + ')';
	}

	/**
  * Animation
  *
  * @param {string} input
  * @return {string}
  */
	function animation(input) {
		var length = input.length;
		var index = input.indexOf(':', 9) + 1;
		var declare = input.substring(0, index).trim();
		var out = input.substring(index, length - 1).trim();

		switch (input.charCodeAt(9) * keyed) {
			case 0:
				{
					break;
				}
			// animation-*, -
			case DASH:
				{
					// animation-name, n
					if (input.charCodeAt(10) !== 110) {
						break;
					}
				}
			// animation/animation-name
			default:
				{
					// split in case of multiple animations
					var list = out.split((out = '', animationptn));

					for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
						var value = list[i];
						var items = value.split(propertiesptn);

						while (value = items[index]) {
							var peak = value.charCodeAt(0);

							if (keyed === 1 && (
							// letters
							peak > AT && peak < 90 || peak > 96 && peak < 123 || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							peak === DASH && value.charCodeAt(1) !== DASH)) {
								// not a number/function
								switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
									case 1:
										{
											switch (value) {
												// not a valid reserved keyword
												case 'infinite':case 'alternate':case 'backwards':case 'running':
												case 'normal':case 'forwards':case 'both':case 'none':case 'linear':
												case 'ease':case 'ease-in':case 'ease-out':case 'ease-in-out':
												case 'paused':case 'reverse':case 'alternate-reverse':case 'inherit':
												case 'initial':case 'unset':case 'step-start':case 'step-end':
													{
														break;
													}
												default:
													{
														value += key;
													}
											}
										}
								}
							}

							items[index++] = value;
						}

						out += (i === 0 ? '' : ',') + items.join(' ');
					}
				}
		}

		out = declare + out + ';';

		if (prefix === 1 || prefix === 2 && vendor(out, 1)) return webkit + out + out;

		return out;
	}

	/**
  * Isolate
  *
  * @param {Array<string>} current
  */
	function isolate(current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn);
			var out = '';

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue;
				}

				tail = out.charCodeAt(out.length - 1);
				code = element.charCodeAt(0);
				padding = '';

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:
							{
								break;
							}
						default:
							{
								padding = ' ';
							}
					}
				}

				switch (code) {
					case AND:
						{
							element = padding + nscopealt;
						}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES:
						{
							break;
						}
					case OPENBRACKET:
						{
							element = padding + element + nscopealt;
							break;
						}
					case COLON:
						{
							switch (element.charCodeAt(1) * 2 + element.charCodeAt(2) * 3) {
								// :global
								case 530:
									{
										if (escape > 0) {
											element = padding + element.substring(8, size - 1);
											break;
										}
									}
								// :hover, :nth-child(), ...
								default:
									{
										if (j < 1 || elements[j - 1].length < 1) {
											element = padding + nscopealt + element;
										}
									}
							}
							break;
						}
					case COMMA:
						{
							padding = '';
						}
					default:
						{
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2');
							} else {
								element = padding + element + nscopealt;
							}
						}
				}

				out += element;
			}

			selector[i] = out.replace(formatptn, '').trim();
		}

		return selector;
	}

	/**
  * Proxy
  *
  * @param {number} context
  * @param {string} content
  * @param {Array<string>} selectors
  * @param {Array<string>} parents
  * @param {number} line
  * @param {number} column
  * @param {number} length
  * @param {number} id
  * @param {number} depth
  * @param {number} at
  * @return {(string|void|*)}
  */
	function proxy(context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null:
					{
						break;
					}
				default:
					{
						out = next;
					}
			}
		}

		switch (out) {
			case void 0:
			case false:
			case true:
			case null:
			case content:
				{
					break;
				}
			default:
				{
					return out;
				}
		}
	}

	/**
  * Minify
  *
  * @param {(string|*)} output
  * @return {string}
  */
	function minify(output) {
		return output.replace(formatptn, '').replace(beforeptn, '').replace(afterptn, '$1').replace(tailptn, '$1').replace(whiteptn, ' ');
	}

	/**
  * Use
  *
  * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
  */
	function use(plugin) {
		switch (plugin) {
			case void 0:
			case null:
				{
					plugged = plugins.length = 0;
					break;
				}
			default:
				{
					switch (plugin.constructor) {
						case Array:
							{
								for (var i = 0, length = plugin.length; i < length; ++i) {
									use(plugin[i]);
								}
								break;
							}
						case Function:
							{
								plugins[plugged++] = plugin;
								break;
							}
						case Boolean:
							{
								unkwn = !!plugin | 0;
							}
					}
				}
		}

		return use;
	}

	/**
  * Set
  *
  * @param {*} options
  */
	function set(options) {
		for (var name in options) {
			var value = options[name];
			switch (name) {
				case 'keyframe':
					keyed = value | 0;break;
				case 'global':
					escape = value | 0;break;
				case 'cascade':
					cascade = value | 0;break;
				case 'compress':
					compress = value | 0;break;
				case 'semicolon':
					semicolon = value | 0;break;
				case 'preserve':
					preserve = value | 0;break;
				case 'prefix':
					should = null;

					if (!value) {
						prefix = 0;
					} else if (typeof value !== 'function') {
						prefix = 1;
					} else {
						prefix = 2;
						should = value;
					}
			}
		}

		return set;
	}

	/**
  * Stylis
  *
  * @param {string} selector
  * @param {string} input
  * @return {*}
  */
	function stylis(selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector);
		}

		// setup
		var ns = selector;
		var code = ns.charCodeAt(0);

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0);
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-');
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1;

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns;
		} else {
			nscopealt = ns;
		}

		var selectors = [nscope];
		var result;

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0);

			if (result !== void 0 && typeof result === 'string') {
				input = result;
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0);

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0);

			// bypass minification
			if (result !== void 0 && typeof (output = result) !== 'string') {
				code = 0;
			}
		}

		// reset
		key = '';
		nscope = '';
		nscopealt = '';
		pattern = 0;
		line = 1;
		column = 1;

		return compress * code === 0 ? output : minify(output);
	}

	stylis['use'] = use;
	stylis['set'] = set;

	if (options !== void 0) {
		set(options);
	}

	return stylis;
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(12);
var assign = __webpack_require__(13);

var ReactPropTypesSecret = __webpack_require__(8);
var checkPropTypes = __webpack_require__(35);

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(7);
  var warning = __webpack_require__(12);
  var ReactPropTypesSecret = __webpack_require__(8);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var ReactPropTypesSecret = __webpack_require__(8);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {}
            }
        }
    }

    return targetComponent;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function debounced() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;

      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	LABEL_FONT_SIZE: '1.1rem',
	INPUT_FONT_SIZE: '1rem',
	LABEL_COLOR: '#9896b1',
	INPUT_COLOR: '#3b3a4b',
	INPUT_BORDER_COLOR: '#9896b1',
	INPUT_BORDER_WIDTH: '0px 0px 1px 0px',
	DROPDOWN_COLOR: '#333',
	DROPDOWN_BACKGROUND: 'white',
	DROPDOWN_HOVER_COLOR: '#FFF',
	DROPDOWN_HOVER_BG_COLOR: '#007FFF',
	DROPDOWN_SHADOW: '2px 2px 10px 0px #d3d3d3'
};
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(16);

var _core2 = _interopRequireDefault(_core);

var _colorConfig = __webpack_require__(41);

var _colorConfig2 = _interopRequireDefault(_colorConfig);

var _styledComponents = __webpack_require__(17);

var _colorConfigMerger = __webpack_require__(2);

var _colorConfigMerger2 = _interopRequireDefault(_colorConfigMerger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_React$Component) {
	_inherits(CheckBox, _React$Component);

	function CheckBox() {
		_classCallCheck(this, CheckBox);

		return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
	}

	_createClass(CheckBox, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    styleConfig = (0, _colorConfigMerger2.default)(props.colorConfig, _colorConfig2.default),
			    inputConfig = props.inputConfig;

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(_core2.default, inputConfig)
			);
		}
	}]);

	return CheckBox;
}(_react2.default.Component);

exports.default = CheckBox;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	LABEL_FONT_SIZE: '1.1rem',
	LABEL_COLOR: '#9896b1',
	CHECKBOX_BORDER_FALSE: '#6C6D6D',
	CHECKBOX_BORDER_TRUE: '#007FFF',
	CHECKBOX_TICK_COLOR: '#007FFF'
};
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(18);

var _core2 = _interopRequireDefault(_core);

var _colorConfig = __webpack_require__(49);

var _colorConfig2 = _interopRequireDefault(_colorConfig);

var _styledComponents = __webpack_require__(19);

var _colorConfigMerger = __webpack_require__(2);

var _colorConfigMerger2 = _interopRequireDefault(_colorConfigMerger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTime = function (_React$Component) {
	_inherits(DateTime, _React$Component);

	function DateTime() {
		_classCallCheck(this, DateTime);

		return _possibleConstructorReturn(this, (DateTime.__proto__ || Object.getPrototypeOf(DateTime)).apply(this, arguments));
	}

	_createClass(DateTime, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    styleConfig = (0, _colorConfigMerger2.default)(props.colorConfig, _colorConfig2.default),
			    inputConfig = props.inputConfig;

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(_core2.default, inputConfig)
			);
		}
	}]);

	return DateTime;
}(_react2.default.Component);

exports.default = DateTime;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePickerCore = function (_React$PureComponent) {
	_inherits(TimePickerCore, _React$PureComponent);

	function TimePickerCore(props) {
		_classCallCheck(this, TimePickerCore);

		var _this = _possibleConstructorReturn(this, (TimePickerCore.__proto__ || Object.getPrototypeOf(TimePickerCore)).call(this, props));

		_this.hours = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
		_this.minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
		_this.ampm = ['AM', 'PM'];

		_this.state = {
			time: props.time
		};
		return _this;
	}

	_createClass(TimePickerCore, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				time: nextProps.time
			});
		}
	}, {
		key: 'selecthour',
		value: function selecthour(val) {
			var time = this.state.time;
			time['hour'] = val;
			this.props.setItem(time);
		}
	}, {
		key: 'selectmin',
		value: function selectmin(val) {
			var time = this.state.time;
			time['minute'] = val;
			this.props.setItem(time);
		}
	}, {
		key: 'selectAMPM',
		value: function selectAMPM(val) {
			var time = this.state.time;
			time['ampm'] = val;
			this.props.setItem(time);
		}
	}, {
		key: 'render',
		value: function render() {
			var timePickerState = this.props.open ? 'timepicker-dropdown' : 'hide',
			    self = this,
			    hourHtml = this.hours.map(function (item, index) {
				if (item != self.state.time.hour) {
					return _react2.default.createElement(
						'div',
						{ className: 'cell', onClick: self.selecthour.bind(self, item) },
						_react2.default.createElement(
							'span',
							{ className: 'time-num-span' },
							item
						)
					);
				} else {
					return _react2.default.createElement(
						'div',
						{ className: 'cell selected', onClick: self.selecthour.bind(self, item) },
						_react2.default.createElement(
							'span',
							{ className: 'time-num-span' },
							item
						)
					);
				}
			}),
			    minuteHtml = this.minutes.map(function (item, index) {
				if (item != self.state.time.minute) {
					return _react2.default.createElement(
						'div',
						{ className: 'cell', onClick: self.selectmin.bind(self, item) },
						_react2.default.createElement(
							'span',
							{ className: 'time-num-span' },
							item
						)
					);
				} else {
					return _react2.default.createElement(
						'div',
						{ className: 'cell selected', onClick: self.selectmin.bind(self, item) },
						_react2.default.createElement(
							'span',
							{ className: 'time-num-span' },
							item
						)
					);
				}
			}),
			    ampmHtml = this.ampm.map(function (item, index) {
				if (item != self.state.time.ampm) {
					return _react2.default.createElement(
						'div',
						{ className: 'cell', onClick: self.selectAMPM.bind(self, item) },
						_react2.default.createElement(
							'span',
							{ className: 'time-num-span' },
							item
						)
					);
				} else {
					return _react2.default.createElement(
						'div',
						{ className: 'cell selected', onClick: self.selectAMPM.bind(self, item) },
						_react2.default.createElement(
							'span',
							{ className: 'time-num-span' },
							item
						)
					);
				}
			});

			return _react2.default.createElement(
				_styledComponents.Wrapper,
				{ open: this.props.open },
				_react2.default.createElement(
					_styledComponents.Header,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'label-cell' },
						'Hour'
					),
					_react2.default.createElement(
						'div',
						{ className: 'label-cell' },
						'Minute'
					),
					_react2.default.createElement(
						'div',
						{ className: 'label-cell' },
						'AM/PM'
					)
				),
				_react2.default.createElement(
					_styledComponents.Column,
					null,
					hourHtml
				),
				_react2.default.createElement(
					_styledComponents.Column,
					null,
					minuteHtml
				),
				_react2.default.createElement(
					_styledComponents.LastColumn,
					null,
					ampmHtml
				),
				_react2.default.createElement(
					_styledComponents.CloseTimePicker,
					{ onClick: this.props.closeTimePicker },
					'DONE'
				)
			);
		}
	}]);

	return TimePickerCore;
}(_react2.default.PureComponent);

exports.default = TimePickerCore;
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CloseTimePicker = exports.LastColumn = exports.Column = exports.Header = exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\twidth: 100%;\n    height: 230px;\n    overflow: hidden;\n    position: relative;\n    z-index: 3;\n    text-align: center;\n    box-shadow : var(--timepickerShadow);\n    display : ', ';\n'], ['\n\twidth: 100%;\n    height: 230px;\n    overflow: hidden;\n    position: relative;\n    z-index: 3;\n    text-align: center;\n    box-shadow : var(--timepickerShadow);\n    display : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\twidth: 100%;\n\tposition: absolute;\n\ttop:-1px;\n\tbackground-color: var(--timepickerHeaderBgColor);\n\tcolor : var(--timepickerHeaderColor);\n\t.label-cell{\n\t\ttext-align: center;\n\t\twidth: 33.3%;\n\t\theight: 100%;\n\t\tdisplay: inline-block;\n\t    padding: 7px 0;\n\t    box-sizing: border-box;\n\t    border-right: 1px solid;\n\t    border-color : var(--timepickerHeaderBorderColor);\n\t    font-weight: 300;\n\t}\n\t.label-cell:last-child{\n\t\tborder-right: none;\n\t}\n'], ['\n\twidth: 100%;\n\tposition: absolute;\n\ttop:-1px;\n\tbackground-color: var(--timepickerHeaderBgColor);\n\tcolor : var(--timepickerHeaderColor);\n\t.label-cell{\n\t\ttext-align: center;\n\t\twidth: 33.3%;\n\t\theight: 100%;\n\t\tdisplay: inline-block;\n\t    padding: 7px 0;\n\t    box-sizing: border-box;\n\t    border-right: 1px solid;\n\t    border-color : var(--timepickerHeaderBorderColor);\n\t    font-weight: 300;\n\t}\n\t.label-cell:last-child{\n\t\tborder-right: none;\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\n\twidth: 33.3%;\n    height: 98%;\n    padding: 33px 0 39px;\n    overflow: scroll;\n    box-sizing: border-box;\n    border-right: 1px solid var(--timepickerColumnBorderColor);\n    display: inline-block;\n    background-color: var(--timepickerColumnBgColor);\n    color: var(--timepickerColumnColor);\n\n\t.cell{\n\t\tcursor: pointer;\n\t\tpadding: 14px 0;\n\n\t\t.time-num-span{\n\t\t\tborder-bottom:1px solid var(--timepickerColumnColor);\n\t\t\tpadding: 6px 14px;\n\t\t}\n\t}\n\t.cell.selected{\n\t\n\t\t.time-num-span{\n\t\t\tbackground-color: var(--timepickerSelectedCellColor);\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n'], ['\n\t\n\twidth: 33.3%;\n    height: 98%;\n    padding: 33px 0 39px;\n    overflow: scroll;\n    box-sizing: border-box;\n    border-right: 1px solid var(--timepickerColumnBorderColor);\n    display: inline-block;\n    background-color: var(--timepickerColumnBgColor);\n    color: var(--timepickerColumnColor);\n\n\t.cell{\n\t\tcursor: pointer;\n\t\tpadding: 14px 0;\n\n\t\t.time-num-span{\n\t\t\tborder-bottom:1px solid var(--timepickerColumnColor);\n\t\t\tpadding: 6px 14px;\n\t\t}\n\t}\n\t.cell.selected{\n\t\n\t\t.time-num-span{\n\t\t\tbackground-color: var(--timepickerSelectedCellColor);\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tborder : none;\n'], ['\n\tborder : none;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\ttext-align: center;\n\tbackground-color: var(--timepickerFooterBgColor);\n\tcolor: var(--timepickerFooterColor);\n\tcursor: pointer;\n\tpadding: 10px 0;\n'], ['\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\ttext-align: center;\n\tbackground-color: var(--timepickerFooterBgColor);\n\tcolor: var(--timepickerFooterColor);\n\tcursor: pointer;\n\tpadding: 10px 0;\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
	return props.open ? 'block' : 'none';
});

var Header = _styledComponents2.default.div(_templateObject2);

var Column = _styledComponents2.default.div(_templateObject3);

var LastColumn = Column.extend(_templateObject4);

var CloseTimePicker = _styledComponents2.default.div(_templateObject5);

exports.Wrapper = Wrapper;
exports.Header = Header;
exports.Column = Column;
exports.LastColumn = LastColumn;
exports.CloseTimePicker = CloseTimePicker;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_React$PureComponent) {
	_inherits(Calendar, _React$PureComponent);

	function Calendar(props) {
		_classCallCheck(this, Calendar);

		var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

		_this._numOfDays = [0, 0, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28];
		_this._totalBlocks = 42;
		_this._today = new Date().setHours(0, 0, 0, 0);
		_this._monthTexts = ["", "", "", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"];
		_this._handleMonthSelection = _this._handleMonthSelection.bind(_this);
		_this.state = {
			_selection: undefined,
			_calendarView: undefined,
			_view: undefined,
			_selectedIndex: undefined,
			_today: undefined,
			_isMonthView: false
		};
		return _this;
	}

	_createClass(Calendar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this._handleCurrentSelection(this.props.selectedDate, Date.now());
		}
	}, {
		key: '_handleSelection',
		value: function _handleSelection(index, date) {
			var view = this.state._view;
			var month = view.month < 13 ? view.month - 1 : view.month - 13;
			var year = view.year;

			var selectedDate = new Date(year, month, date).setHours(0, 0, 0, 0);

			if (selectedDate == this._today || !this.props.restrictOldDates && selectedDate < this._today || !this.props.restrictFutureDates && selectedDate > this._today) {
				this.setState({
					_selectedIndex: index,
					_selection: {
						index: index,
						date: date,
						month: view.month,
						year: view.year
					}
				});
				if (this.props.onDateSelection) {
					this.props.onDateSelection(selectedDate);
				}
			}
		}
	}, {
		key: '_handleCurrentSelection',
		value: function _handleCurrentSelection(timeStamp, todayTimestamp) {
			var viewDate = new Date(timeStamp || todayTimestamp);
			var month = viewDate.getMonth();
			month = month >= 2 ? month + 1 : month + 13;
			var year = viewDate.getFullYear();
			var date = viewDate.getDate();

			var selectedDay = this._getDayNum(month, year);

			var today = new Date(todayTimestamp);
			var currMonth = today.getMonth();
			currMonth = currMonth >= 2 ? currMonth + 1 : currMonth + 13;
			var currYear = today.getFullYear();
			var currDate = today.getDate();

			this.setState({
				_calendarView: selectedDay,
				_today: {
					date: currDate,
					month: currMonth,
					year: currYear
				},
				_view: {
					month: month,
					year: year,
					monthText: this._monthTexts[month]
				},
				_selection: {
					index: selectedDay.startDay + date - 1,
					date: date,
					month: month,
					year: year
				},
				_selectedIndex: selectedDay.startDay + date - 1
			});
		}
	}, {
		key: '_handleMonthSelection',
		value: function _handleMonthSelection(month) {
			//debugger
			var year = this.state._view.year;
			this.setState({
				_calendarView: this._getDayNum(month, year),
				_view: {
					month: month,
					year: year,
					monthText: this._monthTexts[month]
				},
				_isMonthView: false
				// _selectedIndex: undefined,
				// _selection: undefined, // change here
			});
		}
	}, {
		key: '_handleMonthOptions',
		value: function _handleMonthOptions() {
			this.setState({
				_isMonthView: true
			});
		}
	}, {
		key: '_changeMonth',
		value: function _changeMonth(isForward) {
			var view = this.state._view;
			var year = view.year;
			var month = view.month;

			if (isForward) {
				month = month + 1;
				if (month > 14) {
					month = month - 12;
				}
				if (month == 13) {
					year += 1;
				}
			} else {
				month = month - 1;
				if (month < 3) {
					month = month + 12;
				}
				if (month == 12) {
					year -= 1;
				}
			}

			this.setState({
				_isMonthView: false,
				_calendarView: this._getDayNum(month, year),
				_view: {
					month: month,
					year: year,
					monthText: this._monthTexts[month]
				}
				// _selectedIndex: undefined,
				// _selection: undefined,
			});
		}
	}, {
		key: '_getDayNum',
		value: function _getDayNum(month, yrs) {
			var year = month == 13 || month == 14 ? (yrs - 1).toString() : yrs.toString();
			var m = month,
			    d = 1,
			    c = parseInt(year.substring(0, 2)),
			    y = parseInt(year.substring(2));

			var w = d + Math.floor(13 * (m + 1) / 5) + y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c;
			var prevMonth = m - 1 == 2 ? 14 : m - 1;
			var prevYear = prevMonth == 12 ? yrs - 1 : yrs;
			return {
				startDay: w >= 0 ? w % 7 != 0 ? w % 7 : 7 : 7 - Math.abs(w) % 7,
				numOfDay: m != 14 ? this._numOfDays[m] : yrs % 4 == 0 ? 29 : 28,
				previousMonthDays: prevMonth != 14 ? this._numOfDays[prevMonth] : prevYear % 4 == 0 ? 29 : 28
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var blocksHtml = [];
			var calendarView = this.state._calendarView;
			var showYear = false;

			if (this.state._view && this.state._today) {
				var checkToday = this.state._view.month == this.state._today.month && this.state._view.year == this.state._today.year ? true : false;
				var isToday = void 0;
				var isSelectedViewVisible = void 0;
				if (this.state._selection) {
					if (this.state._view.month == this.state._selection.month && this.state._view.year == this.state._selection.year) {
						isSelectedViewVisible = true;
					}
				}

				if (calendarView) {
					for (var index = 1; index <= this._totalBlocks; index++) {
						var date = index - calendarView.startDay + 1;
						isToday = checkToday && date == this.state._today.date ? true : false;

						if (index < calendarView.startDay) {
							blocksHtml.push(_react2.default.createElement(CalendarBlock, { key: "block_index_" + index,
								text: calendarView.previousMonthDays - calendarView.startDay + index + 1,
								isDisabled: true }));
						} else if (index > calendarView.startDay + calendarView.numOfDay - 1) {
							blocksHtml.push(_react2.default.createElement(CalendarBlock, { key: "block_index_" + index,
								text: index - calendarView.startDay - calendarView.numOfDay + 1,
								isDisabled: true }));
						} else {
							blocksHtml.push(_react2.default.createElement(CalendarBlock, { text: date,
								onSelection: this._handleSelection.bind(this, index, date),
								selected: index == this.state._selectedIndex && isSelectedViewVisible,
								key: "block_index_" + index,
								isToday: isToday }));
						}
					}
				}

				if (this.state._view.year != this.state._today.year) {
					showYear = true;
				}
			}

			return _react2.default.createElement(
				_styledComponents.Wrapper,
				null,
				_react2.default.createElement(
					_styledComponents.Header,
					null,
					_react2.default.createElement('span', { className: 'left-arrow arrow',
						id: 'left_arrow',
						onClick: this._changeMonth.bind(this, false) }),
					_react2.default.createElement('span', { className: 'right-arrow arrow',
						id: 'right_arrow',
						onClick: this._changeMonth.bind(this, true) }),
					_react2.default.createElement(
						'span',
						{ className: 'month-span', id: 'month_span',
							onClick: this._handleMonthOptions.bind(this) },
						this.state._view ? !showYear ? this.state._view.monthText : this.state._view.monthText + ", " + this.state._view.year : ""
					)
				),
				this.state._isMonthView ? _react2.default.createElement(MonthSelector, { onMonthSelection: this._handleMonthSelection }) : _react2.default.createElement(
					_styledComponents.CalenderContent,
					{ id: 'content_calender' },
					_react2.default.createElement(
						'div',
						{ className: 'day-name-div' },
						_react2.default.createElement(
							'div',
							{ className: 'block' },
							'Su'
						),
						_react2.default.createElement(
							'div',
							{ className: 'block' },
							'Mo'
						),
						_react2.default.createElement(
							'div',
							{ className: 'block' },
							'Tu'
						),
						_react2.default.createElement(
							'div',
							{ className: 'block' },
							'We'
						),
						_react2.default.createElement(
							'div',
							{ className: 'block' },
							'Th'
						),
						_react2.default.createElement(
							'div',
							{ className: 'block' },
							'Fr'
						),
						_react2.default.createElement(
							'div',
							{ className: 'block' },
							'Sa'
						)
					),
					blocksHtml
				)
			);
		}
	}]);

	return Calendar;
}(_react2.default.PureComponent);

/************************************************ Blocks ***************************************************/

exports.default = Calendar;
var CalendarBlock = _react2.default.createClass({
	displayName: 'CalendarBlock',

	getInitialState: function getInitialState() {
		return {
			_isSelected: false,
			_isToday: false
		};
	},

	componentDidMount: function componentDidMount() {
		this.setState({
			_isSelected: this.props.selected,
			_isToday: this.props.isToday
		});
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.setState({
			_isSelected: nextProps.selected,
			_isToday: nextProps.isToday
		});
	},

	_handleSelection: function _handleSelection() {
		if (this.props.onSelection) {
			this.props.onSelection();
		}
	},

	render: function render() {
		var selectedClass = this.state._isSelected ? " selected-block " : " ";
		var todayClass = this.state._isToday && !this.state._isSelected ? " today " : " ";
		var disabledClass = this.props.isDisabled ? " disabled " : " ";
		return _react2.default.createElement(
			'div',
			{ className: "block numbers " + disabledClass,
				onClick: this._handleSelection },
			_react2.default.createElement(
				'span',
				{ className: "number-span " + selectedClass + todayClass },
				this.props.text
			)
		);
	}
});

/****************************************** Month Selector ********************************************/

var MonthSelector = _react2.default.createClass({
	displayName: 'MonthSelector',


	getInitialState: function getInitialState() {
		this._months = [{ text: "Jan", value: 13 }, { text: "Feb", value: 14 }, { text: "Mar", value: 3 }, { text: "Apr", value: 4 }, { text: "May", value: 5 }, { text: "Jun", value: 6 }, { text: "Jul", value: 7 }, { text: "Aug", value: 8 }, { text: "Sep", value: 9 }, { text: "Oct", value: 10 }, { text: "Nov", value: 11 }, { text: "Dec", value: 12 }];
		return {};
	},

	_handleSelection: function _handleSelection(month) {
		this.props.onMonthSelection(month);
	},

	render: function render() {
		var _this2 = this;

		var monthsHtml = this._months.map(function (month) {
			return _react2.default.createElement(
				'div',
				{ className: 'month-block', onClick: _this2._handleSelection.bind(_this2, month.value) },
				month.text
			);
		});
		return _react2.default.createElement(
			'div',
			{ className: 'month-selector', id: 'month_selector' },
			monthsHtml
		);
	}
});
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalenderContent = exports.Header = exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\tfont-weight: 300;\n\tbox-sizing: border-box;\n\tpadding: 0 8px;\n\tbackground-color: var(--datePickerBgColor);\n\tbox-shadow : var(--calendarShadow);\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\tfont-weight: 300;\n\tbox-sizing: border-box;\n\tpadding: 0 8px;\n\tbackground-color: var(--datePickerBgColor);\n\tbox-shadow : var(--calendarShadow);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tpadding: 12px 0;\n\ttext-align: center;\n\tcolor: var(--datePickerHeaderColor);\n\ttext-transform: uppercase;\n\tborder-bottom: var(--datePickerHeaderBorder);\n\n\t.month-span{\n\t//cursor: pointer;\n\t//font-size: 1.2em;\n\t}\n\n\t.arrow{\n\t\tposition: absolute;\n\t\twidth: 25px;\n\t\theight: 25px;\n\t\ttop: 12px;\n\t\tcursor: pointer;\n\t}\n\n\t.left-arrow{\n\t\tleft: 5px;\n\t}\n\n\t.left-arrow:before,\n\t.left-arrow:after{\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tleft: 5px;\n\t\twidth: 10px;\n\t\theight: 2px;\n\t\tbackground-color: var(--datePickerArrowColor);\n\t}\n\n\t.left-arrow:before{\n\t\ttop: 8px;\n\t\ttransform : rotate(-40deg);\n\t}\n\n\t.left-arrow:after{\n\t\ttop: 14px;\n\t\ttransform : rotate(40deg);\n\t}\n\n\t.right-arrow{\n\t\tright: 5px;\n\t}\n\n\t.right-arrow:before,\n\t.right-arrow:after{\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tright: 5px;\n\t\twidth: 10px;\n\t\theight: 2px;\n\t\tbackground-color: var(--datePickerArrowColor);\n\t}\n\n\t.right-arrow:before{\n\t\ttop: 14px;\n\t\ttransform : rotate(-40deg);\n\t}\n\n\t.right-arrow:after{\n\t\ttop: 8px;\n\t\ttransform : rotate(40deg);\n\t}\n'], ['\n\tposition: relative;\n\tpadding: 12px 0;\n\ttext-align: center;\n\tcolor: var(--datePickerHeaderColor);\n\ttext-transform: uppercase;\n\tborder-bottom: var(--datePickerHeaderBorder);\n\n\t.month-span{\n\t//cursor: pointer;\n\t//font-size: 1.2em;\n\t}\n\n\t.arrow{\n\t\tposition: absolute;\n\t\twidth: 25px;\n\t\theight: 25px;\n\t\ttop: 12px;\n\t\tcursor: pointer;\n\t}\n\n\t.left-arrow{\n\t\tleft: 5px;\n\t}\n\n\t.left-arrow:before,\n\t.left-arrow:after{\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tleft: 5px;\n\t\twidth: 10px;\n\t\theight: 2px;\n\t\tbackground-color: var(--datePickerArrowColor);\n\t}\n\n\t.left-arrow:before{\n\t\ttop: 8px;\n\t\ttransform : rotate(-40deg);\n\t}\n\n\t.left-arrow:after{\n\t\ttop: 14px;\n\t\ttransform : rotate(40deg);\n\t}\n\n\t.right-arrow{\n\t\tright: 5px;\n\t}\n\n\t.right-arrow:before,\n\t.right-arrow:after{\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tright: 5px;\n\t\twidth: 10px;\n\t\theight: 2px;\n\t\tbackground-color: var(--datePickerArrowColor);\n\t}\n\n\t.right-arrow:before{\n\t\ttop: 14px;\n\t\ttransform : rotate(-40deg);\n\t}\n\n\t.right-arrow:after{\n\t\ttop: 8px;\n\t\ttransform : rotate(40deg);\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tfont-size: 0.8em;\n\tmargin-bottom: 10px;\n\n\t.day-name-div{\n\t\tcolor: $orange-color;\n\t\tmargin-top: 8px;\n\t\tmargin-bottom: 8px;\n\t}\n\n\t.block{\n\t\tdisplay: inline-block;\n\t\twidth: 14.2%;\n\t\ttext-align: center;\n\t\tbox-sizing: border-box;\n\t}\n\t.numbers{\n\t\tpadding: 6px 0;\n\t\tcursor: pointer;\n\t\tcolor: var(--datePickerDateColor);\n\t\tbox-sizing: border-box;\n\t}\n\t.number-span{\n\t\tpadding: 5px;\n\t\tborder-radius: 50%;\n\t\tdisplay: inline-block;\n\t\tmin-width: 32px;\n\t\tbox-sizing: border-box;\n\t}\n\n\t.number-span.selected-block{\n\t\tbackground-color: var(--datePickerSelectedDateBgColor);\n\t\tcolor : var(--datePickerSelectedDateColor);\n\t\t//color: $header-color;\n\t}\n\n\t.number-span.today{\n\t\tbox-sizing: border-box;\n\t\tborder: 1px solid var(--datePickerSelectedDateBgColor);\n\t}\n\n\t.numbers.disabled{\n\t\tcolor: #78688F;\n\t\tcursor: default;\n\t}\n'], ['\n\tfont-size: 0.8em;\n\tmargin-bottom: 10px;\n\n\t.day-name-div{\n\t\tcolor: $orange-color;\n\t\tmargin-top: 8px;\n\t\tmargin-bottom: 8px;\n\t}\n\n\t.block{\n\t\tdisplay: inline-block;\n\t\twidth: 14.2%;\n\t\ttext-align: center;\n\t\tbox-sizing: border-box;\n\t}\n\t.numbers{\n\t\tpadding: 6px 0;\n\t\tcursor: pointer;\n\t\tcolor: var(--datePickerDateColor);\n\t\tbox-sizing: border-box;\n\t}\n\t.number-span{\n\t\tpadding: 5px;\n\t\tborder-radius: 50%;\n\t\tdisplay: inline-block;\n\t\tmin-width: 32px;\n\t\tbox-sizing: border-box;\n\t}\n\n\t.number-span.selected-block{\n\t\tbackground-color: var(--datePickerSelectedDateBgColor);\n\t\tcolor : var(--datePickerSelectedDateColor);\n\t\t//color: $header-color;\n\t}\n\n\t.number-span.today{\n\t\tbox-sizing: border-box;\n\t\tborder: 1px solid var(--datePickerSelectedDateBgColor);\n\t}\n\n\t.numbers.disabled{\n\t\tcolor: #78688F;\n\t\tcursor: default;\n\t}\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Header = _styledComponents2.default.div(_templateObject2);

var CalenderContent = _styledComponents2.default.div(_templateObject3);

exports.Wrapper = Wrapper;
exports.Header = Header;
exports.CalenderContent = CalenderContent;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(48);

var _sharedStyledComponents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatetimeInput = function (_React$PureComponent) {
	_inherits(DatetimeInput, _React$PureComponent);

	function DatetimeInput(props) {
		_classCallCheck(this, DatetimeInput);

		var _this = _possibleConstructorReturn(this, (DatetimeInput.__proto__ || Object.getPrototypeOf(DatetimeInput)).call(this, props));

		_this.onTimeChangeHandler = _this.onTimeChangeHandler.bind(_this);
		_this.onDateChangeHandler = _this.onDateChangeHandler.bind(_this);

		_this.time = props.time;
		_this.date = props.date;
		return _this;
	}

	_createClass(DatetimeInput, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.time = nextProps.time;
			this.date = nextProps.date;
		}
	}, {
		key: 'onTimeChangeHandler',
		value: function onTimeChangeHandler(e) {
			var val = e.target.value,
			    name = e.target.name,
			    maxLength = e.target.maxLength;

			if (!maxLength || maxLength >= val.length) {
				this.time[name] = val;
				this.props.handleDatetimeChange(this.date, this.time);
			}
		}
	}, {
		key: 'onDateChangeHandler',
		value: function onDateChangeHandler(e) {
			var val = e.target.value,
			    name = e.target.name,
			    maxLength = e.target.maxLength;

			if (maxLength >= val.length) {
				this.dateDisplayObj[name] = val;
				this.date = new Date(this.dateDisplayObj['year'], this.dateDisplayObj['month'] - 1, this.dateDisplayObj['date']).setHours(0, 0, 0, 0);
				this.props.handleDatetimeChange(this.date, this.time);
			}
		}
	}, {
		key: 'spreadTimestamp',
		value: function spreadTimestamp() {
			var date = new Date(this.date);
			return {
				date: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
				month: date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
				year: date.getFullYear()
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props,
			    optionsHtml = [_react2.default.createElement(
				'option',
				{ value: 'AM', selected: this.time['ampm'] == 'AM' },
				'AM'
			), _react2.default.createElement(
				'option',
				{ value: 'PM', selected: this.time['ampm'] == 'PM' },
				'PM'
			)];
			this.dateDisplayObj = null;

			if (props.showdate) {
				this.dateDisplayObj = this.spreadTimestamp();
			}

			return _react2.default.createElement(
				_styledComponents.InputWrapper,
				null,
				props.showdate ? _react2.default.createElement(
					_styledComponents.InlineDateWrapper,
					null,
					_react2.default.createElement('input', { type: 'number',
						name: 'date',
						size: '2',
						min: '01',
						max: '31',
						maxLength: 2,
						value: this.dateDisplayObj['date'],
						onChange: this.onDateChangeHandler }),
					_react2.default.createElement(
						'span',
						null,
						'/'
					),
					_react2.default.createElement('input', { type: 'number',
						name: 'month',
						size: '2',
						min: '01',
						max: '12',
						maxLength: 2,
						value: this.dateDisplayObj['month'],
						onChange: this.onDateChangeHandler }),
					_react2.default.createElement(
						'span',
						null,
						'/'
					),
					_react2.default.createElement('input', { type: 'number',
						name: 'year',
						size: '4',
						min: '1900',
						max: '2200',
						maxLength: 4,
						value: this.dateDisplayObj['year'],
						onChange: this.onDateChangeHandler })
				) : null,
				props.showtime ? _react2.default.createElement(
					_sharedStyledComponents.InlineWrapper,
					null,
					_react2.default.createElement('input', { type: 'number',
						size: '2',
						value: this.time['hour'] < 10 ? '0' + this.time['hour'] : this.time['hour'],
						name: 'hour',
						min: '01',
						max: '12',
						maxLength: 2,
						onChange: this.onTimeChangeHandler }),
					_react2.default.createElement(
						'span',
						null,
						':'
					),
					_react2.default.createElement('input', { type: 'number',
						size: '2',
						value: this.time['minute'],
						name: 'minute',
						min: '00',
						max: '55',
						step: '5',
						maxLength: 2,
						onChange: this.onTimeChangeHandler }),
					_react2.default.createElement(
						'select',
						{ name: 'ampm', tabIndex: 0,
							onChange: this.onTimeChangeHandler },
						optionsHtml
					)
				) : null,
				_react2.default.createElement(
					'label',
					null,
					props.label
				)
			);
		}
	}]);

	return DatetimeInput;
}(_react2.default.PureComponent);

exports.default = DatetimeInput;
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InlineDateWrapper = exports.InputWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tflex-grow : 1;\n\tposition : relative;\n\tpadding : 10px 0 0;\n\tspan{\n\t\tfont-size : var(--inputFontSize);\n\t\tcolor : var(--inputColor);\n\t}\n\n\tlabel{\n\t\tposition: absolute;\n\t    top: 0px;\n\t    left: 0px;\n\t    font-size: var(--labelFontSizeSmall);\n\t    color: var(--labelColor);\n\t}\n\n\tinput{\n\t\tborder : none;\n\t\toutline : none;\n\t\tbackground : inherit;\n\t\tfont-size : var(--inputFontSize);\n\t}\n\n\tinput[type=\'number\'] {\n\t    -moz-appearance:textfield;\n\t}\n\t/* Webkit browsers like Safari and Chrome */\n\tinput[type=number]::-webkit-inner-spin-button,\n\tinput[type=number]::-webkit-outer-spin-button {\n\t    -webkit-appearance: none;\n\t    margin: 0;\n\t}\n\n\tselect{\n\t\tborder : none;\n\t\toutline : none;\n\t\tbackground : inherit;\n\t\tfont-size : var(--inputFontSize);\n\t\t-webkit-appearance: none;\n\t}\n'], ['\n\tflex-grow : 1;\n\tposition : relative;\n\tpadding : 10px 0 0;\n\tspan{\n\t\tfont-size : var(--inputFontSize);\n\t\tcolor : var(--inputColor);\n\t}\n\n\tlabel{\n\t\tposition: absolute;\n\t    top: 0px;\n\t    left: 0px;\n\t    font-size: var(--labelFontSizeSmall);\n\t    color: var(--labelColor);\n\t}\n\n\tinput{\n\t\tborder : none;\n\t\toutline : none;\n\t\tbackground : inherit;\n\t\tfont-size : var(--inputFontSize);\n\t}\n\n\tinput[type=\'number\'] {\n\t    -moz-appearance:textfield;\n\t}\n\t/* Webkit browsers like Safari and Chrome */\n\tinput[type=number]::-webkit-inner-spin-button,\n\tinput[type=number]::-webkit-outer-spin-button {\n\t    -webkit-appearance: none;\n\t    margin: 0;\n\t}\n\n\tselect{\n\t\tborder : none;\n\t\toutline : none;\n\t\tbackground : inherit;\n\t\tfont-size : var(--inputFontSize);\n\t\t-webkit-appearance: none;\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tpadding-right : 10px;\n'], ['\n\tpadding-right : 10px;\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _sharedStyledComponents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputWrapper = _styledComponents2.default.div(_templateObject);

var InlineDateWrapper = _sharedStyledComponents.InlineWrapper.extend(_templateObject2);

exports.InputWrapper = InputWrapper;
exports.InlineDateWrapper = InlineDateWrapper;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	LABEL_FONT_SIZE_SMALL: '0.75rem',
	INPUT_FONT_SIZE: '1rem',
	LABEL_COLOR: '#9896b1',
	INPUT_COLOR: '#3b3a4b',
	INPUT_BORDER_COLOR: '#9896b1',
	DATE_PICKER_BG_COLOR: 'whitesmoke',
	DATE_PICKER_HEADER_COLOR: '#333',
	DATE_PICKER_HEADER_BORDER: "1px solid #333",
	DATE_PICKER_ARROW_COLOR: '#333',
	DATE_PICKER_DATE_COLOR: '007FFF',
	DATE_PICKER_SELECTED_DATE_BG_COLOR: '#007FFF',
	DATE_PICKER_SELECTED_DATE_COLOR: 'white',
	TIME_PICKER_HEADER_BG_COLOR: 'whitesmoke',
	TIME_PICKER_HEADER_COLOR: '#333',
	TIME_PICKER_HEADER_BORDER_COLOR: '#c3c3c3',
	TIME_PICKER_COLUMN_BORDER_COLOR: '#c3c3c3',
	TIME_PICKER_COLUMN_BG_COLOR: 'white',
	TIME_PICKER_COLUMN_COLOR: '#333',
	TIME_PICKER_SELECTED_CELL_COLOR: '#007FFF',
	TIME_PICKER_FOOTER_COLOR: '#333',
	TIME_PICKER_FOOTER_BG_COLOR: 'whitesmoke',
	DATE_PICKER_SHADOW: 'none',
	TIME_PICKER_SHADOW: 'none',
	INPUT_BORDER_WIDTH: '0px 0px 1px 0px',
	POPUP_BG_COLOR: 'rgba(0,0,0,0.6)'
};
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(20);

var _core2 = _interopRequireDefault(_core);

var _colorConfig = __webpack_require__(51);

var _colorConfig2 = _interopRequireDefault(_colorConfig);

var _styledComponents = __webpack_require__(21);

var _colorConfigMerger = __webpack_require__(2);

var _colorConfigMerger2 = _interopRequireDefault(_colorConfigMerger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTime = function (_React$Component) {
	_inherits(DateTime, _React$Component);

	function DateTime() {
		_classCallCheck(this, DateTime);

		return _possibleConstructorReturn(this, (DateTime.__proto__ || Object.getPrototypeOf(DateTime)).apply(this, arguments));
	}

	_createClass(DateTime, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    styleConfig = (0, _colorConfigMerger2.default)(props.colorConfig, _colorConfig2.default),
			    inputConfig = props.inputConfig;

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(_core2.default, inputConfig)
			);
		}
	}]);

	return DateTime;
}(_react2.default.Component);

exports.default = DateTime;
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	LABEL_FONT_SIZE_SMALL: '0.75rem',
	INPUT_FONT_SIZE: '1rem',
	LABEL_COLOR: '#9896b1',
	INPUT_COLOR: '#3b3a4b',
	INPUT_BORDER_COLOR: '#9896b1',
	DROPDOWN_COLOR: '#333',
	DROPDOWN_BACKGROUND: 'whitesmoke',
	DROPDOWN_INPUT_BACKGROUND: '#efedfb',
	DROPDOWN_HOVER_COLOR: '#FFF',
	DROPDOWN_HOVER_BG_COLOR: '#007FFF',
	DROPDOWN_INPUT_SHADOW: '1px 1px 1px 1px #c3c3c3',
	DROPDOWN_SHADOW: '2px 2px 10px 0px #8e8181',
	INPUT_BORDER_WIDTH: '0 0 1px 0'
};
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(22);

var _core2 = _interopRequireDefault(_core);

var _objectAssign = __webpack_require__(13);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _core3 = __webpack_require__(9);

var _core4 = _interopRequireDefault(_core3);

var _core5 = __webpack_require__(24);

var _core6 = _interopRequireDefault(_core5);

var _core7 = __webpack_require__(20);

var _core8 = _interopRequireDefault(_core7);

var _colorConfig = __webpack_require__(53);

var _colorConfig2 = _interopRequireDefault(_colorConfig);

var _core9 = __webpack_require__(16);

var _core10 = _interopRequireDefault(_core9);

var _core11 = __webpack_require__(26);

var _core12 = _interopRequireDefault(_core11);

var _sharedStyledComponents = __webpack_require__(3);

var _core13 = __webpack_require__(18);

var _core14 = _interopRequireDefault(_core13);

var _core15 = __webpack_require__(54);

var _core16 = _interopRequireDefault(_core15);

var _closePopupListener = __webpack_require__(5);

var _closePopupListener2 = _interopRequireDefault(_closePopupListener);

var _styledComponents = __webpack_require__(59);

var _colorConfigMerger = __webpack_require__(2);

var _colorConfigMerger2 = _interopRequireDefault(_colorConfigMerger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericForm = function (_React$PureComponent) {
	_inherits(GenericForm, _React$PureComponent);

	function GenericForm(props) {
		_classCallCheck(this, GenericForm);

		var _this = _possibleConstructorReturn(this, (GenericForm.__proto__ || Object.getPrototypeOf(GenericForm)).call(this, props));

		_this.formState = _this.init(props.formData);
		_this.setItem = _this.setItem.bind(_this);
		_this.state = {
			reRender: false
		};
		return _this;
	}

	_createClass(GenericForm, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.formUpdated) {
				this.formState = this.init(nextProps.formData);
			}
		}
	}, {
		key: 'init',
		value: function init(formData) {
			console.log('GenericForm', formData);
			var res = {},
			    headingIndex = 0;

			formData.map(function (formItem) {

				if (formItem.type == 'heading' || formItem.type == 'subheading') {
					formItem.name = 'heading_' + headingIndex;
					formItem.required = false;
					headingIndex++;
				}

				if (formItem.type == 'datetime' && !formItem.value) {
					formItem.isValid = true;
					if (formItem.showtime) {
						formItem.value = 0;
					}
					if (formItem.showdate) {
						formItem.value = new Date().setHours(0, 0, 0, 0);
					}
				}

				if (formItem.readOnly) {
					formItem.isValid = true;
				}

				var name = formItem.name;

				res[name] = (0, _objectAssign2.default)({}, formItem, {
					isValid: true, //formItem.isValid?true : !formItem.required,
					isPristine: true
				});
			});

			console.log(res);
			return res;
		}
	}, {
		key: 'setItemHelper',
		value: function setItemHelper(formItem, value) {
			if (value && value.dependent) {
				for (var key in value.dependent) {
					var dependentItem = this.formState[key];
					dependentItem = (0, _objectAssign2.default)({}, dependentItem, value.dependent[key]);
					dependentItem.isValid = this.checkValidity(dependentItem);
					dependentItem.isPristine = false;
					this.formState[key] = dependentItem;
				}
			}

			formItem.value = value;
			formItem.isValid = this.checkValidity(formItem);
			formItem.isPristine = false;
			this.setState(function (state) {
				return {
					reRender: !state.reRender
				};
			});
		}
	}, {
		key: 'setItem',
		value: function setItem(name, value) {
			var _this2 = this;

			var formItem = this.formState[name],
			    dependentFetchItem = {};

			if (formItem.dependentFetchFunc) {
				formItem.dependentFetchFunc(value).then(function (res) {
					dependentFetchItem = res;
					var mergedDependency = (0, _objectAssign2.default)({}, value.dependent || {}, res || {});
					value.dependent = mergedDependency;
					_this2.setItemHelper(formItem, value);
				}).catch(function (err) {

					dependentFetchItem = null;
					_this2.setItemHelper(formItem, value);
				});
			} else {
				this.setItemHelper(formItem, value);
			}
		}
	}, {
		key: 'checkValidity',
		value: function checkValidity(formItem) {

			var value = formItem.value;
			if (value && toString.call(value) == "[object Object]") {

				if (formItem.validityFunction) {
					formItem.errorText = formItem.validityErrorText;
					return formItem.validityFunction(value);
				}

				return true;
			} else if (value || value === 0) {

				if (formItem.validityRegex) {
					var pat = new RegExp(formItem.validityRegex);
					formItem.errorText = formItem.validityErrorText;
					return pat.test(value);
				}

				if (formItem.validityFunction) {
					formItem.errorText = formItem.validityErrorText;
					return formItem.validityFunction(value);
				}

				return true;
			} else {

				if (formItem.requiredCondition && typeof formItem.requiredCondition == "function") {
					formItem.required = formItem.requiredCondition(this.formState);
				}

				if (formItem.required) {
					formItem.errorText = 'Required Input. Please Fill.';
					return false;
				}

				return true;
			}
		}
	}, {
		key: 'onClickHandler',
		value: function onClickHandler(button) {
			if (!button.checkValidity || this.checkFormValidity()) {
				button.onClickHandler(this.formState);
			} else {
				console.log(this.formState);
				this.setState(function (state) {
					return {
						reRender: !state.reRender
					};
				});
			}
		}
	}, {
		key: 'checkFormValidity',
		value: function checkFormValidity() {
			var ret = true;
			for (var key in this.formState) {

				if (!this.checkValidity(this.formState[key])) {
					ret = false;
					this.formState[key].isValid = false;
				}
			}
			return ret;
		}
	}, {
		key: 'getFormElement',
		value: function getFormElement(formItem) {

			var ret = null;

			switch (formItem.type) {

				case 'text':
					{}

				case 'email':
					{}

				case 'number':
					{

						ret = _react2.default.createElement(
							_styledComponents.InputWrapper,
							null,
							_react2.default.createElement(_core2.default, _extends({}, formItem, {
								setItem: this.setItem }))
						);
						break;
					}

				case 'dropdown':
					{

						ret = _react2.default.createElement(
							_styledComponents.DropdownInputWrapper,
							null,
							_react2.default.createElement(_core8.default, _extends({}, formItem, {
								setItem: this.setItem }))
						);
						break;
					}

				case 'checkbox':
					{

						ret = _react2.default.createElement(
							_styledComponents.CheckBoxInputWrapper,
							null,
							_react2.default.createElement(_core10.default, _extends({}, formItem, {
								setItem: this.setItem }))
						);
						break;
					}

				case 'file':
					{

						return null;
					}

				case 'autocomplete':
					{

						ret = _react2.default.createElement(
							_styledComponents.InputWrapper,
							null,
							_react2.default.createElement(_core4.default, _extends({}, formItem, {
								setItem: this.setItem }))
						);
						break;
					}

				case 'select':
					{

						ret = _react2.default.createElement(
							_styledComponents.DropdownInputWrapper,
							null,
							_react2.default.createElement(_core6.default, _extends({}, formItem, {
								setItem: this.setItem }))
						);
						break;
					}

				case 'radiogroup':
					{

						ret = _react2.default.createElement(
							_styledComponents.RadioGroupInputWrapper,
							null,
							_react2.default.createElement(_core12.default, _extends({}, formItem, {
								setItem: this.setItem }))
						);
						break;
					}

				case 'heading':
					{

						ret = _react2.default.createElement(
							_sharedStyledComponents.HeadingWrapper,
							null,
							formItem.label
						);
						break;
					}

				case 'subheading':
					{

						ret = _react2.default.createElement(
							_sharedStyledComponents.SubHeadingWrapper,
							null,
							formItem.label
						);
						break;
					}

				case 'datetime':
					{

						ret = _react2.default.createElement(
							_styledComponents.InputWrapper,
							null,
							_react2.default.createElement(_core14.default, _extends({}, formItem, {
								setItem: this.setItem }))
						);
						break;
					}

				case 'sufflebox':
					{
						ret = _react2.default.createElement(
							_styledComponents.InputWrapper,
							null,
							_react2.default.createElement(_core16.default, _extends({}, formItem, {
								setItem: this.setItem }))
						);
						break;
					}

				default:
					{
						return null;
					}
			}

			if (formItem.display == 'block') {
				return _react2.default.createElement(
					_sharedStyledComponents.BlockWrapper,
					null,
					ret
				);
			}

			return ret;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			console.log('render GenericForm', this.formState);
			var formStateKeys = Object.keys(this.formState) || [],
			    formHtml = formStateKeys.map(function (key) {
				var formItem = _this3.formState[key];
				return _this3.getFormElement(formItem);
			}),
			    buttonsHtml = this.props.formButtons.map(function (item) {
				return _react2.default.createElement(
					_styledComponents.Button,
					_extends({}, item, { onClick: _this3.onClickHandler.bind(_this3, item) }),
					item.label
				);
			}),
			    styleConfig = (0, _colorConfigMerger2.default)(this.props.colorConfig, _colorConfig2.default);

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(
					_styledComponents.FormWrapper,
					null,
					_react2.default.createElement(
						_styledComponents.InputsWrapper,
						null,
						formHtml
					),
					_react2.default.createElement(
						_styledComponents.ButtonsWrapper,
						null,
						buttonsHtml
					)
				)
			);
		}
	}]);

	return GenericForm;
}(_react2.default.PureComponent);

exports.default = GenericForm;
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	FLEX_BASIS: '300px',
	LABEL_FONT_SIZE: '1.1rem',
	LABEL_FONT_SIZE_SMALL: '0.75rem',
	INPUT_FONT_SIZE: '1rem',
	INFO_FONT_SIZE: '0.8rem',
	FORM_BACKGROUND: '#efedfb',
	LABEL_COLOR: '#9896b1',
	INPUT_COLOR: '#3b3a4b',
	INPUT_BORDER_COLOR: '#9896b1',
	INPUT_BORDER_WIDTH: '0px 0px 1px 0px',
	HELPTEXT_COLOR: '#007FFF',
	ERRORTEXT_COLOR: '#DF1D1D',
	DROPDOWN_COLOR: '#333',
	DROPDOWN_BACKGROUND: 'whitesmoke',
	DROPDOWN_INPUT_BACKGROUND: '#efedfb',
	DROPDOWN_HOVER_COLOR: '#FFF',
	DROPDOWN_HOVER_BG_COLOR: '#007FFF',
	DROPDOWN_SHADOW: '2px 2px 10px 0px #8e8181',
	DEFAULT_GREEN_COLOR: '#008000',
	DEFAULT_BLUE_COLOR: '#007FFF',
	DEFAULT_RED_COLOR: '#DF1D1D',
	CHECKBOX_BORDER_FALSE: '#6C6D6D',
	CHECKBOX_BORDER_TRUE: '#007FFF',
	CHECKBOX_TICK_COLOR: '#007FFF',
	INFO_BG_COLOR: 'white',
	INFO_BOX_SHADOW: '1px 1px 8px 0px #c3c3c3',
	HEADING_BORDER: '1px solid #333',
	DATE_PICKER_BG_COLOR: 'whitesmoke',
	DATE_PICKER_HEADER_COLOR: '#333',
	DATE_PICKER_HEADER_BORDER: "1px solid #333",
	DATE_PICKER_ARROW_COLOR: '#333',
	DATE_PICKER_DATE_COLOR: '007FFF',
	DATE_PICKER_SELECTED_DATE_BG_COLOR: '#007FFF',
	DATE_PICKER_SELECTED_DATE_COLOR: 'white',
	TIME_PICKER_HEADER_BG_COLOR: 'whitesmoke',
	TIME_PICKER_HEADER_COLOR: '#333',
	TIME_PICKER_HEADER_BORDER_COLOR: '#c3c3c3',
	TIME_PICKER_COLUMN_BORDER_COLOR: '#c3c3c3',
	TIME_PICKER_COLUMN_BG_COLOR: 'white',
	TIME_PICKER_COLUMN_COLOR: '#333',
	TIME_PICKER_SELECTED_CELL_COLOR: '#007FFF',
	TIME_PICKER_FOOTER_COLOR: '#333',
	TIME_PICKER_FOOTER_BG_COLOR: 'whitesmoke',
	HEADING_FONT_SIZE: '1.1rem',
	SUB_HEADING_FONT_SIZE: '1rem',
	DATE_PICKER_SHADOW: 'none',
	TIME_PICKER_SHADOW: 'none',
	POPUP_BG_COLOR: 'rgba(0,0,0,0.6)',
	SUFFLE_BOX_ITEM_BG: 'linear-gradient(#a3a3a3,#c3c3c3)',
	SUFFLE_BOX_ITEM_BG_SELECTED: 'linear-gradient(#7CB5DD,#7CB501)',
	SUFFLE_BOX_ITEM_COLOR: '#fff'
};
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tfont-size : var(--inputFontSize);\n\tcolor : var(--labelColor);\n\n\tlabel{\n\t\tfont-size : var(--labelFontSize);\n\t}\n'], ['\n\tfont-size : var(--inputFontSize);\n\tcolor : var(--labelColor);\n\n\tlabel{\n\t\tfont-size : var(--labelFontSize);\n\t}\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _box = __webpack_require__(55);

var _box2 = _interopRequireDefault(_box);

var _transferIcons = __webpack_require__(57);

var _transferIcons2 = _interopRequireDefault(_transferIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var SuffleBox = function (_React$Component) {
	_inherits(SuffleBox, _React$Component);

	function SuffleBox(props) {
		_classCallCheck(this, SuffleBox);

		var _this = _possibleConstructorReturn(this, (SuffleBox.__proto__ || Object.getPrototypeOf(SuffleBox)).call(this, props));

		_this.toggleList1Items = _this.toggleList1Items.bind(_this);
		_this.toggleList2Items = _this.toggleList2Items.bind(_this);
		_this.handleDown = _this.handleDown.bind(_this);
		_this.handleUp = _this.handleUp.bind(_this);

		_this.state = {
			optionsList: _this.props.optionsList,
			selectedList: _this.props.selectedList
		};
		return _this;
	}

	_createClass(SuffleBox, [{
		key: 'toggleList1Items',
		value: function toggleList1Items(item) {
			var list = this.state.optionsList || [],
			    newList = this.toggleListItem(item, list);

			this.setState({
				optionsList: newList
			});
		}
	}, {
		key: 'toggleList2Items',
		value: function toggleList2Items(item) {
			var list = this.state.selectedList || [],
			    newList = this.toggleListItem(item, list);

			this.setState({
				selectedList: newList
			});
		}
	}, {
		key: 'toggleListItem',
		value: function toggleListItem(item, list) {
			var newList = list.map(function (listItem) {
				if (item.id == listItem.id) {
					listItem.selected = !listItem.selected;
				}

				return listItem;
			});

			return newList;
		}
	}, {
		key: 'handleDown',
		value: function handleDown() {
			var newOptionsList = [];
			var filterOptions = (this.state.optionsList || []).filter(function (option) {
				if (!option.selected) {
					newOptionsList.push(option);
				} else {
					option.selected = false;
					return option;
				}
			});

			var newSelectedList = [].concat(_toConsumableArray(this.state.selectedList), _toConsumableArray(filterOptions));

			this.props.setItem(this.props.name, {
				selectedList: newSelectedList,
				optionsList: newOptionsList
			});

			this.setState({
				selectedList: newSelectedList,
				optionsList: newOptionsList
			});
		}
	}, {
		key: 'handleUp',
		value: function handleUp() {
			var newSelectedList = [];
			var filterOptions = (this.state.selectedList || []).filter(function (option) {
				if (!option.selected) {
					newSelectedList.push(option);
				} else {
					option.selected = false;
					return option;
				}
			});

			var newOptionsList = [].concat(_toConsumableArray(this.state.optionsList), _toConsumableArray(filterOptions));

			this.props.setItem(this.props.name, {
				selectedList: newSelectedList,
				optionsList: newOptionsList
			});

			this.setState({
				selectedList: newSelectedList,
				optionsList: newOptionsList
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			return _react2.default.createElement(
				Wrapper,
				null,
				_react2.default.createElement(
					'label',
					null,
					props.label
				),
				_react2.default.createElement(_box2.default, { label: props.optionsListLabel,
					list: this.state.optionsList,
					toggleListItem: this.toggleList1Items }),
				_react2.default.createElement(_transferIcons2.default, { handleDown: this.handleDown,
					handleUp: this.handleUp }),
				_react2.default.createElement(_box2.default, { label: props.selectedListLabel,
					list: this.state.selectedList,
					toggleListItem: this.toggleList2Items })
			);
		}
	}]);

	return SuffleBox;
}(_react2.default.Component);

exports.default = SuffleBox;
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tborder : 1px solid var(--inputBorderColor);\n\tborder-radius : 5px;\n\tpadding : 3px;\n\tlabel { \n\t\tmargin-left : 10px;\t\n\t\tfont-weight : 600;\n\t\tcolor : var(--labelColor);\n\t}\n'], ['\n\tborder : 1px solid var(--inputBorderColor);\n\tborder-radius : 5px;\n\tpadding : 3px;\n\tlabel { \n\t\tmargin-left : 10px;\t\n\t\tfont-weight : 600;\n\t\tcolor : var(--labelColor);\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tfont-size : 0.8em;\n'], ['\n\tfont-size : 0.8em;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _listItem = __webpack_require__(56);

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var ListWrapper = _styledComponents2.default.div(_templateObject2);

var Box = function (_React$Component) {
	_inherits(Box, _React$Component);

	function Box(props) {
		_classCallCheck(this, Box);

		return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));
	}

	_createClass(Box, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props,
			    innerHtml = (props.list || []).map(function (item) {
				return _react2.default.createElement(_listItem2.default, { item: item,
					key: item.id,
					toggleSelect: _this2.props.toggleListItem });
			});
			return _react2.default.createElement(
				Wrapper,
				null,
				_react2.default.createElement(
					'label',
					null,
					props.label
				),
				_react2.default.createElement(
					ListWrapper,
					null,
					innerHtml
				)
			);
		}
	}]);

	return Box;
}(_react2.default.Component);

exports.default = Box;
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay : inline-block;\n\tpadding : 5px;\n\tborder-radius : 5px;\n\tcursor : pointer;\n\tbackground : ', ';\n\tcolor : var(--suffleItemColor,#fff);\n\tmargin : 5px;\n'], ['\n\tdisplay : inline-block;\n\tpadding : 5px;\n\tborder-radius : 5px;\n\tcursor : pointer;\n\tbackground : ', ';\n\tcolor : var(--suffleItemColor,#fff);\n\tmargin : 5px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
	return props.selected ? 'var(--suffleItemBGSelected)' : 'var(--suffleItemBG)';
});

var ListItem = function (_React$Component) {
	_inherits(ListItem, _React$Component);

	function ListItem(props) {
		_classCallCheck(this, ListItem);

		var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

		_this.toggleSelect = _this.toggleSelect.bind(_this);
		return _this;
	}

	_createClass(ListItem, [{
		key: 'toggleSelect',
		value: function toggleSelect() {
			this.props.toggleSelect(this.props.item);
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			return _react2.default.createElement(
				Wrapper,
				{ selected: props.item.selected,
					onClick: this.toggleSelect },
				props.item.label
			);
		}
	}]);

	return ListItem;
}(_react2.default.Component);

exports.default = ListItem;
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\ttext-align : center;\n\tmargin : 5px 0;\n\theight : 28px;\n\tdisplay : flex;\n\tjustify-content : center;\n'], ['\n\ttext-align : center;\n\tmargin : 5px 0;\n\theight : 28px;\n\tdisplay : flex;\n\tjustify-content : center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\twidth :20px;\n\theight : 15px;\n\ttransform-origin : center; \n\ttransform : ', ';\n\tpadding 5px;\n\tmargin : 0 5px;\n\tcursor : pointer;\n\tstroke-width : 2px;\n\t&:after{\n\t\tposition: absolute;\n\t    content: \'\';\n\t    width: 46px;\n\t    height: 46px;\n\t    background: #333;\n\t    border-radius: 50%;\n\t    top: -10px;\n\t    left: -10px;\n\t    opacity: 0;\n\t    transform : scale(1);\n\t    transition : all 0.4s;\n\t    z-index : -1;\n\t}\n\n\t&:active:after{\n\t\topacity:1;\n\t\ttransform : scale(0);\n\t\ttransition : all 0s;\n\t}\n'], ['\n\twidth :20px;\n\theight : 15px;\n\ttransform-origin : center; \n\ttransform : ', ';\n\tpadding 5px;\n\tmargin : 0 5px;\n\tcursor : pointer;\n\tstroke-width : 2px;\n\t&:after{\n\t\tposition: absolute;\n\t    content: \'\';\n\t    width: 46px;\n\t    height: 46px;\n\t    background: #333;\n\t    border-radius: 50%;\n\t    top: -10px;\n\t    left: -10px;\n\t    opacity: 0;\n\t    transform : scale(1);\n\t    transition : all 0.4s;\n\t    z-index : -1;\n\t}\n\n\t&:active:after{\n\t\topacity:1;\n\t\ttransform : scale(0);\n\t\ttransition : all 0s;\n\t}\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _arrow = __webpack_require__(58);

var _arrow2 = _interopRequireDefault(_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var TransferIcon = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.up ? 'rotate(90deg)' : 'rotate(-90deg)';
});

var TransferIcons = function (_React$Component) {
	_inherits(TransferIcons, _React$Component);

	function TransferIcons() {
		_classCallCheck(this, TransferIcons);

		return _possibleConstructorReturn(this, (TransferIcons.__proto__ || Object.getPrototypeOf(TransferIcons)).apply(this, arguments));
	}

	_createClass(TransferIcons, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				Wrapper,
				null,
				_react2.default.createElement(
					TransferIcon,
					{ onClick: this.props.handleDown },
					_react2.default.createElement(_arrow2.default, null)
				),
				_react2.default.createElement(
					TransferIcon,
					{ up: true,
						onClick: this.props.handleUp },
					_react2.default.createElement(_arrow2.default, null)
				)
			);
		}
	}]);

	return TransferIcons;
}(_react2.default.Component);

exports.default = TransferIcons;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arrow = function (_React$Component) {
	_inherits(Arrow, _React$Component);

	function Arrow() {
		_classCallCheck(this, Arrow);

		return _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments));
	}

	_createClass(Arrow, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'svg',
				{ width: '20', height: '15',
					stroke: this.props.color || 'black' },
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'm10 0 l-10 7.5 l10 7.5 m-10 -7.5 l18 0', fill: 'none' })
				)
			);
		}
	}]);

	return Arrow;
}(_react2.default.Component);

exports.default = Arrow;
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroupInputWrapper = exports.DropdownInputWrapper = exports.CheckBoxInputWrapper = exports.InputWrapper = exports.Button = exports.ButtonsWrapper = exports.InputsWrapper = exports.FormWrapper = exports.CSSVariables = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  --formBgColor : ', ';\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --inputBorderWidth : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --dropdownColor : ', ';\n  --dropdownBgColor : ', ';\n  --dropdownHoverColor : ', ';\n  --dropdownHoverBgColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --checkboxBorderTrue : ', ';\n  --checkboxBorderFalse : ', ';\n  --checkboxTrikColor : ', ';\n  --flexBasis : ', ';\n  --labelFontSize : ', ';\n  --labelFontSizeSmall : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --dropdownShadow : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n  --headingBorder : ', ';\n  --datePickerBgColor : ', ';\n  --datePickerHeaderColor : ', ';\n  --datePickerHeaderBorder : ', ';\n  --datePickerArrowColor : ', ';\n  --datePickerDateColor : ', ';\n  --datePickerSelectedDateColor : ', ';\n  --datePickerSelectedDateBgColor : ', ';\n  --timepickerHeaderBgColor : ', ';\n  --timepickerHeaderColor : ', ';\n  --timepickerHeaderBorderColor : ', ';\n  --timepickerColumnBorderColor : ', ';\n  --timepickerColumnBgColor : ', ';\n  --timepickerColumnColor : ', ';\n  --timepickerSelectedCellColor : ', ';\n  --timepickerFooterColor : ', ';\n  --timepickerFooterBgColor : ', ';\n  --headingFontSize : ', ';\n  --subheadingFontSize : ', ';\n  --calendarShadow : ', ';\n  --timepickerShadow : ', ';\n  --popupBgColor : ', ';\n  --suffleItemBGSelected : ', ';\n  --suffleItemBG: ', ';\n  --suffleItemColor : ', ';\n'], ['\n  --formBgColor : ', ';\n  --labelColor : ', ';\n  --inputColor : ', ';\n  --inputBorderColor : ', ';\n  --inputBorderWidth : ', ';\n  --helpTextColor : ', ';\n  --errorTextColor : ', ';\n  --dropdownColor : ', ';\n  --dropdownBgColor : ', ';\n  --dropdownHoverColor : ', ';\n  --dropdownHoverBgColor : ', ';\n  --defaultGreen : ', ';\n  --defaultRed : ', ';\n  --defaultBlue :', ';\n  --checkboxBorderTrue : ', ';\n  --checkboxBorderFalse : ', ';\n  --checkboxTrikColor : ', ';\n  --flexBasis : ', ';\n  --labelFontSize : ', ';\n  --labelFontSizeSmall : ', ';\n  --inputFontSize : ', ';\n  --infoFontSize : ', ';\n  --dropdownShadow : ', ';\n  --infoBgColor : ', ';\n  --infoBoxShadow : ', ';\n  --headingBorder : ', ';\n  --datePickerBgColor : ', ';\n  --datePickerHeaderColor : ', ';\n  --datePickerHeaderBorder : ', ';\n  --datePickerArrowColor : ', ';\n  --datePickerDateColor : ', ';\n  --datePickerSelectedDateColor : ', ';\n  --datePickerSelectedDateBgColor : ', ';\n  --timepickerHeaderBgColor : ', ';\n  --timepickerHeaderColor : ', ';\n  --timepickerHeaderBorderColor : ', ';\n  --timepickerColumnBorderColor : ', ';\n  --timepickerColumnBgColor : ', ';\n  --timepickerColumnColor : ', ';\n  --timepickerSelectedCellColor : ', ';\n  --timepickerFooterColor : ', ';\n  --timepickerFooterBgColor : ', ';\n  --headingFontSize : ', ';\n  --subheadingFontSize : ', ';\n  --calendarShadow : ', ';\n  --timepickerShadow : ', ';\n  --popupBgColor : ', ';\n  --suffleItemBGSelected : ', ';\n  --suffleItemBG: ', ';\n  --suffleItemColor : ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tdisplay:flex;\n\tflex-direction:column;\n\tbackground:var(--formBgColor);\n\tfont-weight:300;\n\tinput{\n\t\tfont-weight:300;\n\t\tpadding:4px;\n\t}\n\n\tinput[type=\'number\'] {\n\t    -moz-appearance:textfield;\n\t}\n\t/* Webkit browsers like Safari and Chrome */\n\tinput[type=number]::-webkit-inner-spin-button,\n\tinput[type=number]::-webkit-outer-spin-button {\n\t    -webkit-appearance: none;\n\t    margin: 0;\n\t}\n'], ['\n\tdisplay:flex;\n\tflex-direction:column;\n\tbackground:var(--formBgColor);\n\tfont-weight:300;\n\tinput{\n\t\tfont-weight:300;\n\t\tpadding:4px;\n\t}\n\n\tinput[type=\'number\'] {\n\t    -moz-appearance:textfield;\n\t}\n\t/* Webkit browsers like Safari and Chrome */\n\tinput[type=number]::-webkit-inner-spin-button,\n\tinput[type=number]::-webkit-outer-spin-button {\n\t    -webkit-appearance: none;\n\t    margin: 0;\n\t}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tdisplay:flex;\n\tflex-direction:row;\n\tflex-wrap:wrap;\n\tjustify-content:flex-start;\n\talign-items : center;\n\tpadding:10px;\n\tfont-size:20px;\n'], ['\n\tdisplay:flex;\n\tflex-direction:row;\n\tflex-wrap:wrap;\n\tjustify-content:flex-start;\n\talign-items : center;\n\tpadding:10px;\n\tfont-size:20px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tdisplay:flex;\n\tflex-direction:row;\n\tflex-wrap:wrap;\n\tjustify-content:center;\n\tpadding:10px 0;\n'], ['\n\tdisplay:flex;\n\tflex-direction:row;\n\tflex-wrap:wrap;\n\tjustify-content:center;\n\tpadding:10px 0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tpadding:6px 15px;\n\tcolor:', ';\n\tbackground-color:', ';\n\tborder-radius:3px;\n'], ['\n\tpadding:6px 15px;\n\tcolor:', ';\n\tbackground-color:', ';\n\tborder-radius:3px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tflex-basis: var(--flexBasis);\n\tmargin: 10px;\n\tflex-grow : 1;\n'], ['\n\tflex-basis: var(--flexBasis);\n\tmargin: 10px;\n\tflex-grow : 1;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding : 15px 0 0; \n'], ['\n  padding : 15px 0 0; \n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  padding : 10px 0;\n'], ['\n  padding : 10px 0;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  padding : 10px 0 0;\n'], ['\n  padding : 10px 0 0;\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CSSVariables = _styledComponents2.default.div(_templateObject, function (props) {
  return props.FORM_BACKGROUND;
}, function (props) {
  return props.LABEL_COLOR;
}, function (props) {
  return props.INPUT_COLOR;
}, function (props) {
  return props.INPUT_BORDER_COLOR;
}, function (props) {
  return props.INPUT_BORDER_WIDTH;
}, function (props) {
  return props.HELPTEXT_COLOR;
}, function (props) {
  return props.ERRORTEXT_COLOR;
}, function (props) {
  return props.DROPDOWN_COLOR;
}, function (props) {
  return props.DROPDOWN_BACKGROUND;
}, function (props) {
  return props.DROPDOWN_HOVER_COLOR;
}, function (props) {
  return props.DROPDOWN_HOVER_BG_COLOR;
}, function (props) {
  return props.DEFAULT_GREEN_COLOR;
}, function (props) {
  return props.DEFAULT_RED_COLOR;
}, function (props) {
  return props.DEFAULT_BLUE_COLOR;
}, function (props) {
  return props.CHECKBOX_BORDER_TRUE;
}, function (props) {
  return props.CHECKBOX_BORDER_FALSE;
}, function (props) {
  return props.CHECKBOX_TICK_COLOR;
}, function (props) {
  return props.FLEX_BASIS;
}, function (props) {
  return props.LABEL_FONT_SIZE;
}, function (props) {
  return props.LABEL_FONT_SIZE_SMALL;
}, function (props) {
  return props.INPUT_FONT_SIZE;
}, function (props) {
  return props.INFO_FONT_SIZE;
}, function (props) {
  return props.DROPDOWN_SHADOW;
}, function (props) {
  return props.INFO_BG_COLOR;
}, function (props) {
  return props.INFO_BOX_SHADOW;
}, function (props) {
  return props.HEADING_BORDER;
}, function (props) {
  return props.DATE_PICKER_BG_COLOR;
}, function (props) {
  return props.DATE_PICKER_HEADER_COLOR;
}, function (props) {
  return props.DATE_PICKER_HEADER_BORDER;
}, function (props) {
  return props.DATE_PICKER_ARROW_COLOR;
}, function (props) {
  return props.DATE_PICKER_DATE_COLOR;
}, function (props) {
  return props.DATE_PICKER_SELECTED_DATE_COLOR;
}, function (props) {
  return props.DATE_PICKER_SELECTED_DATE_BG_COLOR;
}, function (props) {
  return props.TIME_PICKER_HEADER_BG_COLOR;
}, function (props) {
  return props.TIME_PICKER_HEADER_COLOR;
}, function (props) {
  return props.TIME_PICKER_HEADER_BORDER_COLOR;
}, function (props) {
  return props.TIME_PICKER_COLUMN_BORDER_COLOR;
}, function (props) {
  return props.TIME_PICKER_COLUMN_BG_COLOR;
}, function (props) {
  return props.TIME_PICKER_COLUMN_COLOR;
}, function (props) {
  return props.TIME_PICKER_SELECTED_CELL_COLOR;
}, function (props) {
  return props.TIME_PICKER_FOOTER_COLOR;
}, function (props) {
  return props.TIME_PICKER_FOOTER_BG_COLOR;
}, function (props) {
  return props.HEADING_FONT_SIZE;
}, function (props) {
  return props.SUB_HEADING_FONT_SIZE;
}, function (props) {
  return props.DATE_PICKER_SHADOW;
}, function (props) {
  return props.TIME_PICKER_SHADOW;
}, function (props) {
  return props.POPUP_BG_COLOR;
}, function (props) {
  return props.SUFFLE_BOX_ITEM_BG_SELECTED;
}, function (props) {
  return props.SUFFLE_BOX_ITEM_BG;
}, function (props) {
  return props.SUFFLE_BOX_ITEM_COLOR;
});

var FormWrapper = _styledComponents2.default.div(_templateObject2);

var InputsWrapper = _styledComponents2.default.div(_templateObject3);

var ButtonsWrapper = _styledComponents2.default.div(_templateObject4);

var Button = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.color || '#333';
}, function (props) {
  return props.bgColor || '#c3c3c3';
});

var InputWrapper = _styledComponents2.default.div(_templateObject6);

var CheckBoxInputWrapper = InputWrapper.extend(_templateObject7);

var DropdownInputWrapper = InputWrapper.extend(_templateObject8);

var RadioGroupInputWrapper = InputWrapper.extend(_templateObject9);

exports.CSSVariables = CSSVariables;
exports.FormWrapper = FormWrapper;
exports.InputsWrapper = InputsWrapper;
exports.ButtonsWrapper = ButtonsWrapper;
exports.Button = Button;
exports.InputWrapper = InputWrapper;
exports.CheckBoxInputWrapper = CheckBoxInputWrapper;
exports.DropdownInputWrapper = DropdownInputWrapper;
exports.RadioGroupInputWrapper = RadioGroupInputWrapper;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TextInput = exports.NumberInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(22);

var _core2 = _interopRequireDefault(_core);

var _colorConfig = __webpack_require__(61);

var _colorConfig2 = _interopRequireDefault(_colorConfig);

var _styledComponents = __webpack_require__(23);

var _colorConfigMerger = __webpack_require__(2);

var _colorConfigMerger2 = _interopRequireDefault(_colorConfigMerger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_React$Component) {
	_inherits(NumberInput, _React$Component);

	function NumberInput() {
		_classCallCheck(this, NumberInput);

		return _possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).apply(this, arguments));
	}

	_createClass(NumberInput, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    styleConfig = props.colorConfig || _colorConfig2.default,
			    inputConfig = props.inputConfig;

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(_core2.default, _extends({ type: 'number' }, inputConfig))
			);
		}
	}]);

	return NumberInput;
}(_react2.default.Component);

var TextInput = function (_React$Component2) {
	_inherits(TextInput, _React$Component2);

	function TextInput() {
		_classCallCheck(this, TextInput);

		return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
	}

	_createClass(TextInput, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    styleConfig = (0, _colorConfigMerger2.default)(props.colorConfig, _colorConfig2.default),
			    inputConfig = props.inputConfig;

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(_core2.default, _extends({ type: 'text' }, inputConfig))
			);
		}
	}]);

	return TextInput;
}(_react2.default.Component);

exports.NumberInput = NumberInput;
exports.TextInput = TextInput;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	FLEX_BASIS: '300px',
	LABEL_FONT_SIZE: '1.1rem',
	LABEL_FONT_SIZE_SMALL: '0.75rem',
	INPUT_FONT_SIZE: '1rem',
	INFO_FONT_SIZE: '0.8rem',
	FORM_BACKGROUND: '#efedfb',
	LABEL_COLOR: '#9896b1',
	INPUT_COLOR: '#3b3a4b',
	INPUT_BORDER_COLOR: '#9896b1',
	HELPTEXT_COLOR: '#007FFF',
	ERRORTEXT_COLOR: '#DF1D1D',
	DROPDOWN_COLOR: '#333',
	DROPDOWN_BACKGROUND: 'whitesmoke',
	DROPDOWN_INPUT_BACKGROUND: '#efedfb',
	DROPDOWN_HOVER_COLOR: '#FFF',
	DROPDOWN_HOVER_BG_COLOR: '#007FFF',
	DROPDOWN_INPUT_SHADOW: '1px 1px 1px 1px #c3c3c3',
	DROPDOWN_SHADOW: '2px 2px 10px 0px #8e8181',
	DEFAULT_GREEN_COLOR: '#008000',
	DEFAULT_BLUE_COLOR: '#007FFF',
	DEFAULT_RED_COLOR: '#DF1D1D',
	CHECKBOX_BORDER_FALSE: '#6C6D6D',
	CHECKBOX_BORDER_TRUE: '#007FFF',
	CHECKBOX_TICK_COLOR: '#007FFF',
	INFO_BG_COLOR: 'white',
	INFO_BOX_SHADOW: '1px 1px 8px 0px #c3c3c3',
	HEADING_BORDER: '1px solid #333',
	DATE_PICKER_BG_COLOR: 'whitesmoke',
	DATE_PICKER_HEADER_COLOR: '#333',
	DATE_PICKER_HEADER_BORDER: "1px solid #333",
	DATE_PICKER_ARROW_COLOR: '#333',
	DATE_PICKER_DATE_COLOR: '007FFF',
	DATE_PICKER_SELECTED_DATE_BG_COLOR: '#007FFF',
	DATE_PICKER_SELECTED_DATE_COLOR: 'white',
	TIME_PICKER_HEADER_BG_COLOR: 'whitesmoke',
	TIME_PICKER_HEADER_COLOR: '#333',
	TIME_PICKER_HEADER_BORDER_COLOR: '#c3c3c3',
	TIME_PICKER_COLUMN_BORDER_COLOR: '#c3c3c3',
	TIME_PICKER_COLUMN_BG_COLOR: 'white',
	TIME_PICKER_COLUMN_COLOR: '#333',
	TIME_PICKER_SELECTED_CELL_COLOR: '#007FFF',
	TIME_PICKER_FOOTER_COLOR: '#333',
	TIME_PICKER_FOOTER_BG_COLOR: 'whitesmoke',
	HEADING_FONT_SIZE: '1.1rem',
	SUB_HEADING_FONT_SIZE: '1rem',
	DATE_PICKER_SHADOW: 'none',
	TIME_PICKER_SHADOW: 'none',
	POPUP_BG_COLOR: 'rgba(0,0,0,0.6)'
};
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(26);

var _core2 = _interopRequireDefault(_core);

var _colorConfig = __webpack_require__(63);

var _colorConfig2 = _interopRequireDefault(_colorConfig);

var _styledComponents = __webpack_require__(27);

var _colorConfigMerger = __webpack_require__(2);

var _colorConfigMerger2 = _interopRequireDefault(_colorConfigMerger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroupExample = function (_React$Component) {
	_inherits(RadioGroupExample, _React$Component);

	function RadioGroupExample() {
		_classCallCheck(this, RadioGroupExample);

		return _possibleConstructorReturn(this, (RadioGroupExample.__proto__ || Object.getPrototypeOf(RadioGroupExample)).apply(this, arguments));
	}

	_createClass(RadioGroupExample, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    styleConfig = (0, _colorConfigMerger2.default)(props.colorConfig, _colorConfig2.default),
			    inputConfig = props.inputConfig;

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(_core2.default, inputConfig)
			);
		}
	}]);

	return RadioGroupExample;
}(_react2.default.Component);

exports.default = RadioGroupExample;
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	FLEX_BASIS: '300px',
	LABEL_FONT_SIZE: '1.1rem',
	LABEL_FONT_SIZE_SMALL: '0.75rem',
	INPUT_FONT_SIZE: '1rem',
	INFO_FONT_SIZE: '0.8rem',
	FORM_BACKGROUND: '#efedfb',
	LABEL_COLOR: '#9896b1',
	INPUT_COLOR: '#3b3a4b',
	INPUT_BORDER_COLOR: '#9896b1',
	HELPTEXT_COLOR: '#007FFF',
	ERRORTEXT_COLOR: '#DF1D1D',
	DROPDOWN_COLOR: '#333',
	DROPDOWN_BACKGROUND: 'whitesmoke',
	DROPDOWN_INPUT_BACKGROUND: '#efedfb',
	DROPDOWN_HOVER_COLOR: '#FFF',
	DROPDOWN_HOVER_BG_COLOR: '#007FFF',
	DROPDOWN_INPUT_SHADOW: '1px 1px 1px 1px #c3c3c3',
	DROPDOWN_SHADOW: '2px 2px 10px 0px #8e8181',
	DEFAULT_GREEN_COLOR: '#008000',
	DEFAULT_BLUE_COLOR: '#007FFF',
	DEFAULT_RED_COLOR: '#DF1D1D',
	CHECKBOX_BORDER_FALSE: '#6C6D6D',
	CHECKBOX_BORDER_TRUE: '#007FFF',
	CHECKBOX_TICK_COLOR: '#007FFF',
	INFO_BG_COLOR: 'white',
	INFO_BOX_SHADOW: '1px 1px 8px 0px #c3c3c3',
	HEADING_BORDER: '1px solid #333',
	DATE_PICKER_BG_COLOR: 'whitesmoke',
	DATE_PICKER_HEADER_COLOR: '#333',
	DATE_PICKER_HEADER_BORDER: "1px solid #333",
	DATE_PICKER_ARROW_COLOR: '#333',
	DATE_PICKER_DATE_COLOR: '007FFF',
	DATE_PICKER_SELECTED_DATE_BG_COLOR: '#007FFF',
	DATE_PICKER_SELECTED_DATE_COLOR: 'white',
	TIME_PICKER_HEADER_BG_COLOR: 'whitesmoke',
	TIME_PICKER_HEADER_COLOR: '#333',
	TIME_PICKER_HEADER_BORDER_COLOR: '#c3c3c3',
	TIME_PICKER_COLUMN_BORDER_COLOR: '#c3c3c3',
	TIME_PICKER_COLUMN_BG_COLOR: 'white',
	TIME_PICKER_COLUMN_COLOR: '#333',
	TIME_PICKER_SELECTED_CELL_COLOR: '#007FFF',
	TIME_PICKER_FOOTER_COLOR: '#333',
	TIME_PICKER_FOOTER_BG_COLOR: 'whitesmoke',
	HEADING_FONT_SIZE: '1.1rem',
	SUB_HEADING_FONT_SIZE: '1rem',
	DATE_PICKER_SHADOW: 'none',
	TIME_PICKER_SHADOW: 'none',
	POPUP_BG_COLOR: 'rgba(0,0,0,0.6)'
};
module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(24);

var _core2 = _interopRequireDefault(_core);

var _colorConfig = __webpack_require__(65);

var _colorConfig2 = _interopRequireDefault(_colorConfig);

var _styledComponents = __webpack_require__(25);

var _colorConfigMerger = __webpack_require__(2);

var _colorConfigMerger2 = _interopRequireDefault(_colorConfigMerger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectInput = function (_React$Component) {
	_inherits(SelectInput, _React$Component);

	function SelectInput() {
		_classCallCheck(this, SelectInput);

		return _possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).apply(this, arguments));
	}

	_createClass(SelectInput, [{
		key: 'render',
		value: function render() {
			var props = this.props,
			    styleConfig = (0, _colorConfigMerger2.default)(props.colorConfig, _colorConfig2.default),
			    inputConfig = props.inputConfig;

			return _react2.default.createElement(
				_styledComponents.CSSVariables,
				styleConfig,
				_react2.default.createElement(_core2.default, inputConfig)
			);
		}
	}]);

	return SelectInput;
}(_react2.default.Component);

exports.default = SelectInput;
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	FLEX_BASIS: '300px',
	LABEL_FONT_SIZE: '1.1rem',
	LABEL_FONT_SIZE_SMALL: '0.75rem',
	INPUT_FONT_SIZE: '1rem',
	FORM_BACKGROUND: '#efedfb',
	LABEL_COLOR: '#9896b1',
	INPUT_COLOR: '#3b3a4b',
	INPUT_BORDER_COLOR: '#9896b1',
	DROPDOWN_COLOR: '#333',
	DROPDOWN_BACKGROUND: 'whitesmoke',
	DROPDOWN_INPUT_BACKGROUND: '#efedfb',
	DROPDOWN_HOVER_COLOR: '#FFF',
	DROPDOWN_HOVER_BG_COLOR: '#007FFF',
	DROPDOWN_INPUT_SHADOW: '1px 1px 1px 1px #c3c3c3',
	DROPDOWN_SHADOW: '2px 2px 10px 0px #8e8181',
	DEFAULT_GREEN_COLOR: '#008000',
	DEFAULT_BLUE_COLOR: '#007FFF',
	DEFAULT_RED_COLOR: '#DF1D1D',
	SELECT_OPTION_COLOR: '#333'
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});