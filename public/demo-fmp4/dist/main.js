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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./MP4Buffer.js":
/*!**********************!*\
  !*** ./MP4Buffer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _concatTypedArray = __webpack_require__(/*! concat-typed-array */ "./node_modules/concat-typed-array/lib/index.js");

var _concatTypedArray2 = _interopRequireDefault(_concatTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = function () {
  function Buffer() {
    _classCallCheck(this, Buffer);

    this.buffer = new Uint8Array(0);
  }

  _createClass(Buffer, [{
    key: 'write',
    value: function write() {
      var self = this;

      for (var _len = arguments.length, buffer = Array(_len), _key = 0; _key < _len; _key++) {
        buffer[_key] = arguments[_key];
      }

      buffer.forEach(function (item) {
        if (item) {
          self.buffer = (0, _concatTypedArray2.default)(Uint8Array, self.buffer, item);
        } else {
          window.console.error(item);
        }
      });
    }
  }], [{
    key: 'writeUint32',
    value: function writeUint32(value) {
      return new Uint8Array([value >> 24, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff]);
    }
  }]);

  return Buffer;
}();

exports.default = Buffer;
module.exports = exports['default'];

/***/ }),

/***/ "./error.js":
/*!******************!*\
  !*** ./error.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function Errors(type, vid) {
  var errd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var url = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  _classCallCheck(this, Errors);

  console.log(type, vid, errd, url);
};

exports.default = Errors;
module.exports = exports['default'];

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(/*! event-emitter */ "./node_modules/event-emitter/index.js");

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _deepmerge = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/es.js");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _task = __webpack_require__(/*! ./task */ "./task.js");

var _task2 = _interopRequireDefault(_task);

var _MP4Buffer = __webpack_require__(/*! ./MP4Buffer */ "./MP4Buffer.js");

var _MP4Buffer2 = _interopRequireDefault(_MP4Buffer);

var _parse = __webpack_require__(/*! ./parse */ "./parse/index.js");

var _parse2 = _interopRequireDefault(_parse);

var _error = __webpack_require__(/*! ./error */ "./error.js");

var _error2 = _interopRequireDefault(_error);

var _util = __webpack_require__(/*! ./util */ "./util/index.js");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URL = '../assets/xgplayer-demo.mp4';

var MP4 = function () {
  function MP4(url) {
    var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25 ** 4;

    _classCallCheck(this, MP4);

    (0, _eventEmitter2.default)(this);
    this.url = url;
    this.init(url);
    this.once('moovReady', this.moovParse.bind(this));
    this.cache = new _MP4Buffer2.default();
  }

  /**
     * [getData 根据字节区间下载二进制数据]
     * @param  {Number} [start=0]  [起始字节]
     * @param  {Number} [end=start + this.CHUNK_SIZE] [截止字节]
     */


  _createClass(MP4, [{
    key: 'getData',
    value: function getData() {
      var _this = this;

      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start + this.CHUNK_SIZE;

      var self = this;
      return new Promise(function (resolve, reject) {
        var task = new _task2.default(_this.url, [start, end], _this.withCredentials, resolve);
        task.once('error', function (err) {
          self.emit('error', err);
        });
      });
    }

    /**
       * [init 实例的初始化，主要是获取视频的MOOV元信息]
       */

  }, {
    key: 'init',
    value: function init() {
      var self = this;
      self.getData().then(function (res) {
        var parsed = void 0;

        var moovStart = 0;

        var moov = void 0;

        try {
          parsed = new _parse2.default(res);
        } catch (e) {
          self.emit('error', e.type ? e : new _error2.default('parse', '', { line: 176, handle: '[MP4] init', msg: e.message }));
          return false;
        }
        var boxes = parsed.boxes;
        self._boxes = boxes;
        boxes.every(function (item) {
          moovStart += item.size;
          if (item.type === 'moov') {
            moov = item;
            self.moovBox = moov;
            debugger;
            self.emit('moovReady', moov);
            return false;
          }
          return true;
        });
        if (!moov) {
          var nextBox = parsed.nextBox;
          if (nextBox) {
            if (nextBox.type === 'moov') {
              self.getData(moovStart, moovStart + nextBox.size + 28).then(function (res) {
                var parsed = new _parse2.default(res);
                self._boxes = self._boxes.concat(parsed.boxes);
                moov = parsed.boxes.filter(function (box) {
                  return box.type === 'moov';
                });
                if (moov.length) {
                  self.moovBox = moov[0];
                  self.emit('moovReady', moov);
                } else {
                  self.emit('error', new _error2.default('parse', '', { line: 203, handle: '[MP4] init', msg: 'not find moov box' }));
                }
              });
            } else {
              self.emit('error', new _error2.default('parse', '', { line: 207, handle: '[MP4] init', msg: 'not find moov box' }));
            }
          } else {
            self.getData(moovStart, '').then(function (res) {
              var parsed = new _parse2.default(res);
              if (parsed) {
                self._boxes = self._boxes.concat(parsed.boxes);
                parsed.boxes.every(function (item) {
                  if (item.type === 'moov') {
                    moov = item;
                    self.moovBox = moov;
                    self.emit('moovReady', moov);
                    return false;
                  }
                  return true;
                });
              } else {
                self.emit('error', new _error2.default('parse', '', { line: 225, handle: '[MP4] init', msg: 'not find moov box' }));
              }
            });
          }
        }
      }).catch(function () {
        self.emit('error', new _error2.default('network', '', { line: 231, handle: '[MP4] getData', msg: 'getData failed' }));
      });
    }

    /**
       * [moovParse 解析视频信息]
       * @return {[type]} [description]
       */

  }, {
    key: 'moovParse',
    value: function moovParse() {
      var _this2 = this;

      var self = this;
      var moov = this.moovBox;
      var mvhd = _util2.default.findBox(moov, 'mvhd');
      var traks = _util2.default.findBox(moov, 'trak');
      var videoTrak = void 0;
      var audioTrak = void 0;
      var videoCodec = void 0;
      var audioCodec = void 0;
      var videoTimeScale = void 0;
      var audioTimeScale = void 0;
      var sps = void 0;
      var pps = void 0;
      var profile = void 0;
      var width = void 0;
      var height = void 0;
      var channelCount = void 0;
      var sampleRate = void 0;
      var decoderConfig = void 0;
      traks = [].concat(traks);
      traks.forEach(function (trak) {
        var hdlr = _util2.default.findBox(trak, 'hdlr');
        var mdhd = _util2.default.findBox(trak, 'mdhd');
        if (!hdlr || !mdhd) {
          self.emit('error', new _error2.default('parse', '', { line: 72, handle: '[MP4] moovParse', url: self.url }));
          return;
        }
        if (hdlr.handleType === 'vide' && self.videoOnly) {
          var elst = _util2.default.findBox(trak, 'elst');
          trak.empty_duration = 0;
          if (elst.empty_duration) {
            trak.empty_duration = elst.empty_duration * mdhd.timescale / mvhd.timeScale;
          }

          trak.time_offset = elst.start_time - trak.empty_duration;
        }

        var stsd = _util2.default.findBox(trak, 'stsd');
        var codecBox = stsd.subBox[0];
        if (hdlr.handleType === 'vide') {
          var avcC = _util2.default.findBox(trak, 'avcC');
          var tkhd = _util2.default.findBox(trak, 'tkhd');
          videoTrak = trak;
          videoTimeScale = mdhd.timescale;
          if (avcC) {
            videoCodec = codecBox.type + '.' + _util2.default.toHex(avcC.profile, avcC.profileCompatibility, avcC.AVCLevelIndication).join('');
            sps = avcC.sequence && avcC.sequence.map(function (item) {
              return Number('0x' + item);
            });
            pps = avcC.pps && avcC.pps.map(function (item) {
              return Number('0x' + item);
            });
            profile = avcC.profile;
          } else {
            videoCodec = '' + codecBox.type;
          }
          if (tkhd) {
            width = tkhd.width;
            height = tkhd.height;
          }
        }
        if (hdlr.handleType === 'soun') {
          audioTrak = trak;
          var esds = _util2.default.findBox(trak, 'esds');
          var mp4a = _util2.default.findBox(trak, 'mp4a');
          var ESDescriptor = _util2.default.findBox(trak, 5);
          audioTimeScale = mdhd.timescale;
          if (esds) {
            audioCodec = codecBox.type + '.' + _util2.default.toHex(esds.subBox[0].subBox[0].typeID) + '.' + esds.subBox[0].subBox[0].subBox[0].type;
          } else {
            audioCodec = '' + codecBox.type;
          }
          if (ESDescriptor && ESDescriptor.EScode) {
            decoderConfig = ESDescriptor.EScode.map(function (item) {
              return Number('0x' + item);
            });
          }
          if (mp4a) {
            channelCount = mp4a.channelCount;
            sampleRate = mp4a.sampleRate;
          }
        }
      });
      this.videoTrak = (0, _deepmerge2.default)({}, videoTrak);
      if (!this.videoOnly) {
        this.audioTrak = (0, _deepmerge2.default)({}, audioTrak);
      }
      var mdat = this._boxes.find(function (item) {
        return item.type === 'mdat';
      });
      var videoDuration = _util2.default.seekTrakDuration(videoTrak, videoTimeScale);
      var audioDuration = void 0;
      if (!this.videoOnly) {
        audioDuration = _util2.default.seekTrakDuration(audioTrak, audioTimeScale);
      }
      this.mdatStart = mdat.start;
      var vf = this.videoKeyFrames;
      var videoKeyFramesLength = vf.length - 1;
      vf.forEach(function (item, idx) {
        if (idx < videoKeyFramesLength) {
          _this2.timeRage.push([item.time.time / videoTimeScale, vf[idx + 1].time.time / videoTimeScale]);
        } else {
          _this2.timeRage.push([item.time.time / videoTimeScale, -1]);
        }
      });
      this.meta = {
        videoCodec: videoCodec,
        createTime: mvhd.createTime,
        modifyTime: mvhd.modifyTime,
        duration: videoDuration,
        timeScale: mvhd.timeScale,
        videoDuration: videoDuration,
        videoTimeScale: videoTimeScale,
        endTime: videoDuration,
        sps: sps,
        pps: pps,
        width: width,
        height: height,
        profile: profile,
        pixelRatio: [1, 1],
        channelCount: channelCount,
        sampleRate: sampleRate,
        audioConfig: decoderConfig
      };
      if (!this.videoOnly) {
        this.meta.audioCodec = audioCodec;
        this.meta.audioDuration = audioDuration;
        this.meta.audioTimeScale = audioTimeScale;
        this.meta.duration = mvhd.duration / mvhd.timeScale;
        this.meta.endTime = Math.min(videoDuration, audioDuration);
      }
    }
  }]);

  return MP4;
}();

new MP4(URL);

/***/ }),

/***/ "./node_modules/concat-typed-array/lib/concat.js":
/*!*******************************************************!*\
  !*** ./node_modules/concat-typed-array/lib/concat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ResultConstructor) {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;

      totalLength += arr.length;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = new ResultConstructor(totalLength);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _arr = _step2.value;

      result.set(_arr, offset);
      offset += _arr.length;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/concat-typed-array/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/concat-typed-array/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _concat = __webpack_require__(/*! ./concat */ "./node_modules/concat-typed-array/lib/concat.js");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = _concat2.default;

/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! type/value/is */ "./node_modules/type/value/is.js"),
    isPlainFunction = __webpack_require__(/*! type/plain-function/is */ "./node_modules/type/plain-function/is.js"),
    assign = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js"),
    normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js"),
    contains = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/#/contains/index.js");

var d = module.exports = function (dscr, value /*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set /*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

/***/ }),

/***/ "./node_modules/deepmerge/dist/es.js":
/*!*******************************************!*\
  !*** ./node_modules/deepmerge/dist/es.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
	return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function (element) {
		return cloneUnlessOtherwiseSpecified(element, options);
	});
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function (key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function (key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination;
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options);
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options);
	} else {
		return mergeObject(target, source, options);
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array');
	}

	return array.reduce(function (prev, next) {
		return deepmerge(prev, next, options);
	}, {});
};

var deepmerge_1 = deepmerge;

exports.default = deepmerge_1;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function

module.exports = function () {};

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/assign/is-implemented.js")() ? Object.assign : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/assign/shim.js");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign,
	    obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! ../keys */ "./node_modules/es5-ext/object/keys/index.js"),
    value = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js"),
    max = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error,
	    i,
	    length = max(arguments.length, 2),
	    assign;
	dest = Object(value(dest));
	assign = function assign(key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};

/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "./node_modules/es5-ext/function/noop.js")(); // Support ES3 engines

module.exports = function (val) {
  return val !== _undefined && val !== null;
};

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/keys/shim.js");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "./node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) {
  return keys(isValue(object) ? Object(object) : object);
};

/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach,
    create = Object.create;

var process = function process(src, obj) {
	var key;
	for (key in src) {
		obj[key] = src[key];
	}
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/string/#/contains/is-implemented.js")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/string/#/contains/shim.js");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString /*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};

/***/ }),

/***/ "./node_modules/event-emitter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/event-emitter/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var d = __webpack_require__(/*! d */ "./node_modules/d/index.js"),
    callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js"),
    apply = Function.prototype.apply,
    call = Function.prototype.call,
    create = Object.create,
    defineProperty = Object.defineProperty,
    defineProperties = Object.defineProperties,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    descriptor = { configurable: true, enumerable: false, writable: true },
    on,
    _once2,
    off,
    emit,
    methods,
    descriptors,
    base;

on = function on(type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;else if (_typeof(data[type]) === 'object') data[type].push(listener);else data[type] = [data[type], listener];

	return this;
};

_once2 = function once(type, listener) {
	var _once, self;

	callable(listener);
	self = this;
	on.call(this, type, _once = function once() {
		off.call(self, type, _once);
		apply.call(listener, this, arguments);
	});

	_once.__eeOnceListener__ = listener;
	return this;
};

off = function off(type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === 'object') {
		for (i = 0; candidate = listeners[i]; ++i) {
			if (candidate === listener || candidate.__eeOnceListener__ === listener) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];else listeners.splice(i, 1);
			}
		}
	} else {
		if (listeners === listener || listeners.__eeOnceListener__ === listener) {
			delete data[type];
		}
	}

	return this;
};

emit = function emit(type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) {
			args[i - 1] = arguments[i];
		}listeners = listeners.slice();
		for (i = 0; listener = listeners[i]; ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
			case 1:
				call.call(listeners, this);
				break;
			case 2:
				call.call(listeners, this, arguments[1]);
				break;
			case 3:
				call.call(listeners, this, arguments[1], arguments[2]);
				break;
			default:
				l = arguments.length;
				args = new Array(l - 1);
				for (i = 1; i < l; ++i) {
					args[i - 1] = arguments[i];
				}
				apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: _once2,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(_once2),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function exports(o) {
	return o == null ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;

/***/ }),

/***/ "./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(/*! ../prototype/is */ "./node_modules/type/prototype/is.js");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};

/***/ }),

/***/ "./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isValue = __webpack_require__(/*! ../value/is */ "./node_modules/type/value/is.js");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value === "undefined" ? "undefined" : _typeof(value));
};

/***/ }),

/***/ "./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ../function/is */ "./node_modules/type/function/is.js");

var classRe = /^\s*class[\s{/}]/,
    functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};

/***/ }),

/***/ "./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ../object/is */ "./node_modules/type/object/is.js");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};

/***/ }),

/***/ "./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ES3 safe

var _undefined = void 0;

module.exports = function (value) {
  return value !== _undefined && value !== null;
};

/***/ }),

/***/ "./parse/box.js":
/*!**********************!*\
  !*** ./parse/box.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stream = __webpack_require__(/*! ./stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _error = __webpack_require__(/*! ../error */ "./error.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box = function () {
  function Box() {
    _classCallCheck(this, Box);

    this.headSize = 8;
    this.size = 0;
    this.type = '';
    this.subBox = [];
    this.start = -1;
  }

  _createClass(Box, [{
    key: 'readHeader',
    value: function readHeader(stream) {
      this.start = stream.position;
      this.size = stream.readUint32();
      this.type = String.fromCharCode(stream.readUint8(), stream.readUint8(), stream.readUint8(), stream.readUint8());
      if (this.size === 1) {
        this.size = stream.readUint64();
      } else if (this.size === 0) {
        if (this.type !== 'mdat') {
          throw new _error2.default('parse', '', { line: 19, handle: '[Box] readHeader', msg: 'parse mp4 mdat box failed' });
        }
      }
      if (this.type === 'uuid') {
        var uuid = [];
        for (var i = 0; i < 16; i++) {
          uuid.push(stream.readUint8());
        }
      }
    }
  }, {
    key: 'readBody',
    value: function readBody(stream) {
      var end = this.size - stream.position + this.start;
      var type = this.type;
      this.data = stream.buffer.slice(stream.position, stream.position + end);
      stream.position += this.data.byteLength;
      var parser = void 0;
      if (Box.containerBox.find(function (item) {
        return item === type;
      })) {
        parser = Box.containerParser;
      } else {
        parser = Box[type];
      }
      if (parser && parser instanceof Function) {
        parser.call(this);
      }
    }
  }, {
    key: 'read',
    value: function read(stream) {
      this.readHeader(stream);
      this.readBody(stream);
    }
  }], [{
    key: 'containerParser',
    value: function containerParser() {
      var stream = new _stream2.default(this.data);
      var size = stream.buffer.byteLength;
      var self = this;
      while (stream.position < size) {
        var box = new Box();
        box.readHeader(stream);
        self.subBox.push(box);
        box.readBody(stream);
      }
      delete self.data;
      stream = null;
    }
  }]);

  return Box;
}();

Box.containerBox = ['moov', 'trak', 'edts', 'mdia', 'minf', 'dinf', 'stbl', 'mvex', 'moof', 'traf', 'mfra'];

exports.default = Box;
module.exports = exports['default'];

/***/ }),

/***/ "./parse/box/MP4DecConfigDescrTag.js":
/*!*******************************************!*\
  !*** ./parse/box/MP4DecConfigDescrTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.MP4DecConfigDescrTag = function (stream) {
  var box = new _box2.default();
  var size = void 0;
  box.type = stream.readUint8();
  size = stream.readUint8();
  if (size === 0x80) {
    box.extend = true;
    stream.skip(2);
    size = stream.readUint8() + 5;
  } else {
    size += 2;
  }
  box.size = size;
  box.typeID = stream.readUint8();
  // 6 bits stream type,1 bit upstream flag,1 bit reserved flag
  box.streamUint = stream.readUint8();
  box.bufferSize = _stream2.default.readByte(stream.dataview, 3);
  box.maximum = stream.readUint32();
  box.average = stream.readUint32();
  box.subBox.push(_box2.default.MP4DecSpecificDescrTag(stream));
  return box;
};

/***/ }),

/***/ "./parse/box/MP4DecSpecificDescrTag.js":
/*!*********************************************!*\
  !*** ./parse/box/MP4DecSpecificDescrTag.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.MP4DecSpecificDescrTag = function (stream) {
  var box = new _box2.default();
  var size = void 0,
      dataSize = void 0;
  box.type = stream.readUint8();
  size = stream.readUint8();
  if (size === 0x80) {
    box.extend = true;
    stream.skip(2);
    size = stream.readUint8() + 5;
    dataSize = size - 5;
  } else {
    dataSize = size;
    size += 2;
  }
  box.size = size;
  var EScode = [];
  for (var i = 0; i < dataSize; i++) {
    EScode.push(Number(stream.readUint8()).toString(16).padStart(2, '0'));
  }
  box.EScode = EScode;
  delete box.subBox;
  return box;
};

/***/ }),

/***/ "./parse/box/MP4ESDescrTag.js":
/*!************************************!*\
  !*** ./parse/box/MP4ESDescrTag.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.MP4ESDescrTag = function (stream) {
  var box = new _box2.default();
  var size = void 0;
  box.type = stream.readUint8();
  size = stream.readUint8();
  if (size === 0x80) {
    box.extend = true;
    stream.skip(2);
    size = stream.readUint8() + 5;
  } else {
    size += 2;
  }
  box.size = size;
  box.esID = stream.readUint16();
  box.priority = stream.readUint8();
  box.subBox.push(_box2.default.MP4DecConfigDescrTag(stream));
  box.subBox.push(_box2.default.SLConfigDescriptor(stream));
  return box;
};

/***/ }),

/***/ "./parse/box/SLConfigDescriptor.js":
/*!*****************************************!*\
  !*** ./parse/box/SLConfigDescriptor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.SLConfigDescriptor = function (stream) {
  var box = new _box2.default();
  var size = void 0;
  box.type = stream.readUint8();
  size = stream.readUint8();
  if (size === 0x80) {
    box.extend = true;
    stream.skip(2);
    size = stream.readUint8() + 5;
  } else {
    size += 2;
  }
  box.size = size;
  box.SL = stream.readUint8();
  delete box.subBox;
  return box;
};

/***/ }),

/***/ "./parse/box/avc1.js":
/*!***************************!*\
  !*** ./parse/box/avc1.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.avc1 = function () {
  var stream = new _stream2.default(this.data);
  var self = this;
  stream.skip(6);
  this.dataReferenceIndex = stream.readUint16();
  stream.skip(16);
  this.width = stream.readUint16();
  this.height = stream.readUint16();
  this.horizresolution = stream.readUint32();
  this.vertresolution = stream.readUint32();
  stream.skip(4);
  this.frameCount = stream.readUint16();
  stream.skip(1);
  for (var i = 0; i < 31; i++) {
    String.fromCharCode(stream.readUint8());
  }
  this.depth = stream.readUint16();
  stream.skip(2);
  while (stream.position < stream.buffer.byteLength) {
    var box = new _box2.default();
    box.readHeader(stream);
    self.subBox.push(box);
    box.readBody(stream);
  }
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/avcC.js":
/*!***************************!*\
  !*** ./parse/box/avcC.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.avcC = function () {
  var stream = new _stream2.default(this.data);
  this.configVersion = stream.readUint8();
  this.profile = stream.readUint8();
  this.profileCompatibility = stream.readUint8();
  this.AVCLevelIndication = stream.readUint8();
  this.lengthSizeMinusOne = (stream.readUint8() & 3) + 1;
  this.numOfSequenceParameterSets = stream.readUint8() & 31;
  var sequenceLength = stream.readUint16();
  this.sequenceLength = sequenceLength;
  var sequence = [];
  for (var i = 0; i < sequenceLength; i++) {
    sequence.push(Number(stream.readUint8()).toString(16));
  }
  this.ppsCount = stream.readUint8();
  var ppsLength = stream.readUint16();
  this.ppsLength = ppsLength;
  var pps = [];
  for (var _i = 0; _i < ppsLength; _i++) {
    pps.push(Number(stream.readUint8()).toString(16));
  }
  this.pps = pps;
  this.sequence = sequence;
  var last = [];var dataviewLength = stream.dataview.byteLength;
  while (stream.position < dataviewLength) {
    last.push(stream.readUint8());
  }
  this.last = last;
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/btrt.js":
/*!***************************!*\
  !*** ./parse/box/btrt.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.btrt = function () {
  var stream = new _stream2.default(this.data);
  this.bufferSizeDB = stream.readUint32();
  this.maxBitrate = stream.readUint32();
  this.avgBitrate = stream.readUint32();
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/co64.js":
/*!***************************!*\
  !*** ./parse/box/co64.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.co64 = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for (var i = 0, count = this.count; i < count; i++) {
    entries.push(stream.readUint64());
  }
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/ctts.js":
/*!***************************!*\
  !*** ./parse/box/ctts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.ctts = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);

  this.entryCount = stream.readUint32();
  var entry = [];
  this.entry = entry;
  for (var i = 0, count = this.entryCount; i < count; i++) {
    entry.push({
      count: stream.readUint32(),
      offset: stream.readUint32()
    });
  }
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/dref.js":
/*!***************************!*\
  !*** ./parse/box/dref.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.dref = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  var entryCount = stream.readUint32();
  this.entryCount = entryCount;
  var self = this;
  // 暂时不支持离散视频，视频的部分内容由url指定
  for (var i = 0; i < entryCount; i++) {
    var box = new _box2.default();
    self.subBox.push(box);
    box.read(stream);
  }
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/elst.js":
/*!***************************!*\
  !*** ./parse/box/elst.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.elst = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  var entries = [];
  var entry_count = stream.readUint32();
  this.empty_duration = 0; // empty duration of the first edit list entry
  this.start_time = 0; // start time of the media
  var edit_start_index = 0;
  this.entries = entries;
  for (var i = 0; i < entry_count; i++) {
    var entry = {};
    entries.push(entry);
    if (this.version === 1) {
      entry.segment_duration = stream.readUint64();
      entry.media_time = stream.readUint64();
    } else {
      entry.segment_duration = stream.readUint32();
      entry.media_time = stream.readInt32();
    }
    entry.media_rate_integer = stream.readInt16();
    entry.media_rate_fraction = stream.readInt16();

    if (i === 0 && entry.media_time === -1) {
      /* if empty, the first entry is the start time of the stream
        * relative to the presentation itself */
      this.empty_duration = entry.segment_duration;
      edit_start_index = 1;
    } else if (i === edit_start_index && entry.media_time >= 0) {
      this.start_time = entry.media_time;
    }
  }

  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/esds.js":
/*!***************************!*\
  !*** ./parse/box/esds.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.esds = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  var box = _box2.default.MP4ESDescrTag(stream);
  this.subBox.push(box);
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/ftyp.js":
/*!***************************!*\
  !*** ./parse/box/ftyp.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.ftyp = function () {
  var stream = new _stream2.default(this.data);
  this.major_brand = String.fromCharCode(stream.readUint8(), stream.readUint8(), stream.readUint8(), stream.readUint8());
  this.minor_version = stream.readUint32();
  var compatibleBrands = [];
  for (var i = 0, len = Math.floor((stream.buffer.byteLength - 8) / 4); i < len; i++) {
    compatibleBrands.push(String.fromCharCode(stream.readUint8(), stream.readUint8(), stream.readUint8(), stream.readUint8()));
  }
  this.compatible_brands = compatibleBrands;
  stream = null;
  delete this.subBox;
  delete this.data;
};

/***/ }),

/***/ "./parse/box/hdlr.js":
/*!***************************!*\
  !*** ./parse/box/hdlr.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.hdlr = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  stream.skip(4);
  this.handleType = '' + String.fromCharCode(stream.readUint8()) + String.fromCharCode(stream.readUint8()) + String.fromCharCode(stream.readUint8()) + String.fromCharCode(stream.readUint8());
  stream.skip(12);
  var name = [];
  while (stream.position < this.size - 8) {
    name.push(String.fromCharCode(stream.readUint8()));
  }
  this.name = name.join('');
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/hmhd.js":
/*!***************************!*\
  !*** ./parse/box/hmhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/iods.js":
/*!***************************!*\
  !*** ./parse/box/iods.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.iods = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  var content = [];
  var length = stream.buffer.byteLength;
  while (stream.position < length) {
    content.push(stream.readUint8());
  }
  this.content = content;
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/mdat.js":
/*!***************************!*\
  !*** ./parse/box/mdat.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.mdat = function () {
  delete this.subBox;
};

/***/ }),

/***/ "./parse/box/mdhd.js":
/*!***************************!*\
  !*** ./parse/box/mdhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _date = __webpack_require__(/*! ../date */ "./parse/date.js");

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.mdhd = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  if (this.version === 1) {
    this.create = stream.readUint64();
    this.modify = stream.readUint64();
    this.createTime = new _date2.default().setTime(this.create * 1000);
    this.modifyTime = new _date2.default().setTime(this.modify * 1000);
    this.timescale = stream.readUint32();
    this.duration = stream.readUint64();
  } else {
    this.create = stream.readUint32();
    this.modify = stream.readUint32();
    this.createTime = new _date2.default().setTime(this.create * 1000);
    this.modifyTime = new _date2.default().setTime(this.modify * 1000);
    this.timescale = stream.readUint32();
    this.duration = stream.readUint32();
  }
  this.language = stream.readUint16();
  stream.readUint16();
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/mfhd.js":
/*!***************************!*\
  !*** ./parse/box/mfhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/mp4a.js":
/*!***************************!*\
  !*** ./parse/box/mp4a.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.mp4a = function () {
  var stream = new _stream2.default(this.data);
  stream.skip(6);
  this.dataReferenceIndex = stream.readUint16();
  stream.skip(8);
  this.channelCount = stream.readUint16();
  this.sampleSize = stream.readUint16();
  stream.skip(4);
  this.sampleRate = stream.readUint32() >> 16;
  var box = new _box2.default();
  box.readHeader(stream);
  this.subBox.push(box);
  box.readBody(stream);
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/mvhd.js":
/*!***************************!*\
  !*** ./parse/box/mvhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _date = __webpack_require__(/*! ../date */ "./parse/date.js");

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.mvhd = function () {
  var stream = new _stream2.default(this.data);

  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.create = stream.readUint32();
  this.modify = stream.readUint32();
  this.createTime = new _date2.default().setTime(this.create * 1000);
  this.modifyTime = new _date2.default().setTime(this.modify * 1000);
  this.timeScale = stream.readUint32();
  this.duration = stream.readUint32();
  this.rate = stream.readUint16() + '.' + stream.readUint16();
  this.volume = stream.readUint8() + '.' + stream.readUint8();
  // 越过保留的10字节
  _stream2.default.readByte(stream.dataview, 8);
  _stream2.default.readByte(stream.dataview, 2);
  // 视频转换矩阵
  var matrix = [];
  for (var i = 0; i < 9; i++) {
    matrix.push(stream.readUint16() + '.' + stream.readUint16());
  }
  this.matrix = matrix;
  _stream2.default.readByte(stream.dataview, 24);
  this.nextTrackID = stream.readUint32();
  delete this.subBox;
  delete this.data;
};

/***/ }),

/***/ "./parse/box/nmhd.js":
/*!***************************!*\
  !*** ./parse/box/nmhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/pasp.js":
/*!***************************!*\
  !*** ./parse/box/pasp.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.pasp = function () {
  var stream = new _stream2.default(this.data);
  this.content = stream.buffer.slice(0, this.size - 8);
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/sbgp.js":
/*!***************************!*\
  !*** ./parse/box/sbgp.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/sdtp.js":
/*!***************************!*\
  !*** ./parse/box/sdtp.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/smhd.js":
/*!***************************!*\
  !*** ./parse/box/smhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.smhd = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.balance = stream.readInt8() + '.' + stream.readInt8();
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/stco.js":
/*!***************************!*\
  !*** ./parse/box/stco.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.stco = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for (var i = 0, count = this.count; i < count; i++) {
    entries.push(stream.readUint32());
  }
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/stsc.js":
/*!***************************!*\
  !*** ./parse/box/stsc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.stsc = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for (var i = 0, count = this.count; i < count; i++) {
    entries.push({
      first_chunk: stream.readUint32(),
      samples_per_chunk: stream.readUint32(),
      sample_desc_index: stream.readUint32()
    });
  }
  for (var _i = 0, _count = this.count, entry, preEntry; _i < _count - 1; _i++) {
    entry = entries[_i];
    preEntry = entries[_i - 1];
    entry.chunk_count = entries[_i + 1].first_chunk - entry.first_chunk;
    entry.first_sample = _i === 0 ? 1 : preEntry.first_sample + preEntry.chunk_count * preEntry.samples_per_chunk;
  }
  if (this.count === 1) {
    var _entry = entries[0];
    _entry.first_sample = 1;
    _entry.chunk_count = 0;
  } else if (this.count > 1) {
    var last = entries[this.count - 1];var pre = entries[this.count - 2];
    last.first_sample = pre.first_sample + pre.chunk_count * pre.samples_per_chunk;
    last.chunk_count = 0;
  }
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/stsd.js":
/*!***************************!*\
  !*** ./parse/box/stsd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.stsd = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.entryCount = stream.readUint32();
  var box = new _box2.default();
  box.readHeader(stream);
  this.subBox.push(box);
  box.readBody(stream);
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/stsh.js":
/*!***************************!*\
  !*** ./parse/box/stsh.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/stss.js":
/*!***************************!*\
  !*** ./parse/box/stss.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.stss = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for (var i = 0, count = this.count; i < count; i++) {
    entries.push(stream.readUint32());
  }
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/stsz.js":
/*!***************************!*\
  !*** ./parse/box/stsz.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.stsz = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.sampleSize = stream.readUint32();
  this.count = stream.readUint32();
  var entries = [];
  this.entries = entries;
  for (var i = 0, count = this.count; i < count; i++) {
    entries.push(stream.readUint32());
  }
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/stts.js":
/*!***************************!*\
  !*** ./parse/box/stts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.stts = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3);
  this.count = stream.readUint32();
  var entry = [];
  for (var i = 0, count = this.count; i < count; i++) {
    entry.push({
      sampleCount: stream.readUint32(),
      sampleDuration: stream.readUint32()
    });
  }
  this.entry = entry;
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/stz2.js":
/*!***************************!*\
  !*** ./parse/box/stz2.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/tfhd.js":
/*!***************************!*\
  !*** ./parse/box/tfhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/tkhd.js":
/*!***************************!*\
  !*** ./parse/box/tkhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _date = __webpack_require__(/*! ../date */ "./parse/date.js");

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.tkhd = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = _stream2.default.readByte(stream.dataview, 3, 0);
  if (this.version === 1) {
    this.create = stream.readUint64();
    this.modify = stream.readUint64();
    this.createTime = new _date2.default().setTime(this.create * 1000);
    this.modifyTime = new _date2.default().setTime(this.modify * 1000);
    this.trackID = stream.readUint32();
    this.reserverd = stream.readUint32();
    this.duration = stream.readUint64();
  } else {
    this.create = stream.readUint32();
    this.modify = stream.readUint32();
    this.createTime = new _date2.default().setTime(this.create * 1000);
    this.modifyTime = new _date2.default().setTime(this.modify * 1000);
    this.trackID = stream.readUint32();
    this.reserverd = stream.readUint32();
    this.duration = stream.readUint32();
  }
  stream.readUint64();
  this.layer = stream.readInt16();
  this.alternate_group = stream.readInt16();
  this.volume = stream.readInt16() >> 8;
  stream.readUint16();
  // 视频转换矩阵
  var matrix = [];
  for (var i = 0; i < 9; i++) {
    matrix.push(stream.readUint16() + '.' + stream.readUint16());
  }
  this.matrix = matrix;
  this.width = stream.readUint16() + '.' + stream.readUint16();
  this.height = stream.readUint16() + '.' + stream.readUint16();
  delete this.data;
  delete this.subBox;
  stream = null;
};

/***/ }),

/***/ "./parse/box/traf.js":
/*!***************************!*\
  !*** ./parse/box/traf.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/trun.js":
/*!***************************!*\
  !*** ./parse/box/trun.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./parse/box/udta.js":
/*!***************************!*\
  !*** ./parse/box/udta.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.udta = function () {
  delete this.subBox;
};

/***/ }),

/***/ "./parse/box/url.js":
/*!**************************!*\
  !*** ./parse/box/url.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default['url '] = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = [stream.readUint8(), stream.readUint8(), stream.readUint8()];
  var location = [];var length = stream.buffer.byteLength;
  while (stream.position < length) {
    location.push(stream.readUint8());
  }
  this.location = location;
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/box/vmhd.js":
/*!***************************!*\
  !*** ./parse/box/vmhd.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _box = __webpack_require__(/*! ../box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _stream = __webpack_require__(/*! ../stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_box2.default.vmhd = function () {
  var stream = new _stream2.default(this.data);
  this.version = stream.readUint8();
  this.flag = [stream.readUint8(), stream.readUint8(), stream.readUint8()];
  this.graphicsmode = stream.readUint16();
  this.opcolor = [stream.readUint16(), stream.readUint16(), stream.readUint16()];
  delete this.subBox;
  delete this.data;
  stream = null;
};

/***/ }),

/***/ "./parse/date.js":
/*!***********************!*\
  !*** ./parse/date.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UTC = function () {
  function UTC() {
    _classCallCheck(this, UTC);

    var time = new Date();
    time.setFullYear(1904);
    time.setMonth(0);
    time.setDate(1);
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);
    this.time = time;
  }

  _createClass(UTC, [{
    key: "setTime",
    value: function setTime(value) {
      this.time.setTime(this.time.getTime() + value * 1);
      return this.time.toLocaleString();
    }
  }]);

  return UTC;
}();

exports.default = UTC;
module.exports = exports["default"];

/***/ }),

/***/ "./parse/index.js":
/*!************************!*\
  !*** ./parse/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _box = __webpack_require__(/*! ./box */ "./parse/box.js");

var _box2 = _interopRequireDefault(_box);

var _concatTypedArray = __webpack_require__(/*! concat-typed-array */ "./node_modules/concat-typed-array/lib/index.js");

var _concatTypedArray2 = _interopRequireDefault(_concatTypedArray);

var _stream = __webpack_require__(/*! ./stream */ "./parse/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _vmhd = __webpack_require__(/*! ./box/vmhd.js */ "./parse/box/vmhd.js");

var _vmhd2 = _interopRequireDefault(_vmhd);

var _url = __webpack_require__(/*! ./box/url.js */ "./parse/box/url.js");

var _url2 = _interopRequireDefault(_url);

var _udta = __webpack_require__(/*! ./box/udta.js */ "./parse/box/udta.js");

var _udta2 = _interopRequireDefault(_udta);

var _trun = __webpack_require__(/*! ./box/trun.js */ "./parse/box/trun.js");

var _trun2 = _interopRequireDefault(_trun);

var _traf = __webpack_require__(/*! ./box/traf.js */ "./parse/box/traf.js");

var _traf2 = _interopRequireDefault(_traf);

var _tkhd = __webpack_require__(/*! ./box/tkhd.js */ "./parse/box/tkhd.js");

var _tkhd2 = _interopRequireDefault(_tkhd);

var _tfhd = __webpack_require__(/*! ./box/tfhd.js */ "./parse/box/tfhd.js");

var _tfhd2 = _interopRequireDefault(_tfhd);

var _stz = __webpack_require__(/*! ./box/stz2.js */ "./parse/box/stz2.js");

var _stz2 = _interopRequireDefault(_stz);

var _stts = __webpack_require__(/*! ./box/stts.js */ "./parse/box/stts.js");

var _stts2 = _interopRequireDefault(_stts);

var _stsz = __webpack_require__(/*! ./box/stsz.js */ "./parse/box/stsz.js");

var _stsz2 = _interopRequireDefault(_stsz);

var _stss = __webpack_require__(/*! ./box/stss.js */ "./parse/box/stss.js");

var _stss2 = _interopRequireDefault(_stss);

var _stsh = __webpack_require__(/*! ./box/stsh.js */ "./parse/box/stsh.js");

var _stsh2 = _interopRequireDefault(_stsh);

var _stsd = __webpack_require__(/*! ./box/stsd.js */ "./parse/box/stsd.js");

var _stsd2 = _interopRequireDefault(_stsd);

var _stsc = __webpack_require__(/*! ./box/stsc.js */ "./parse/box/stsc.js");

var _stsc2 = _interopRequireDefault(_stsc);

var _stco = __webpack_require__(/*! ./box/stco.js */ "./parse/box/stco.js");

var _stco2 = _interopRequireDefault(_stco);

var _smhd = __webpack_require__(/*! ./box/smhd.js */ "./parse/box/smhd.js");

var _smhd2 = _interopRequireDefault(_smhd);

var _SLConfigDescriptor = __webpack_require__(/*! ./box/SLConfigDescriptor.js */ "./parse/box/SLConfigDescriptor.js");

var _SLConfigDescriptor2 = _interopRequireDefault(_SLConfigDescriptor);

var _sdtp = __webpack_require__(/*! ./box/sdtp.js */ "./parse/box/sdtp.js");

var _sdtp2 = _interopRequireDefault(_sdtp);

var _sbgp = __webpack_require__(/*! ./box/sbgp.js */ "./parse/box/sbgp.js");

var _sbgp2 = _interopRequireDefault(_sbgp);

var _pasp = __webpack_require__(/*! ./box/pasp.js */ "./parse/box/pasp.js");

var _pasp2 = _interopRequireDefault(_pasp);

var _nmhd = __webpack_require__(/*! ./box/nmhd.js */ "./parse/box/nmhd.js");

var _nmhd2 = _interopRequireDefault(_nmhd);

var _mvhd = __webpack_require__(/*! ./box/mvhd.js */ "./parse/box/mvhd.js");

var _mvhd2 = _interopRequireDefault(_mvhd);

var _MP4ESDescrTag = __webpack_require__(/*! ./box/MP4ESDescrTag.js */ "./parse/box/MP4ESDescrTag.js");

var _MP4ESDescrTag2 = _interopRequireDefault(_MP4ESDescrTag);

var _MP4DecSpecificDescrTag = __webpack_require__(/*! ./box/MP4DecSpecificDescrTag.js */ "./parse/box/MP4DecSpecificDescrTag.js");

var _MP4DecSpecificDescrTag2 = _interopRequireDefault(_MP4DecSpecificDescrTag);

var _MP4DecConfigDescrTag = __webpack_require__(/*! ./box/MP4DecConfigDescrTag.js */ "./parse/box/MP4DecConfigDescrTag.js");

var _MP4DecConfigDescrTag2 = _interopRequireDefault(_MP4DecConfigDescrTag);

var _mp4a = __webpack_require__(/*! ./box/mp4a.js */ "./parse/box/mp4a.js");

var _mp4a2 = _interopRequireDefault(_mp4a);

var _mfhd = __webpack_require__(/*! ./box/mfhd.js */ "./parse/box/mfhd.js");

var _mfhd2 = _interopRequireDefault(_mfhd);

var _mdhd = __webpack_require__(/*! ./box/mdhd.js */ "./parse/box/mdhd.js");

var _mdhd2 = _interopRequireDefault(_mdhd);

var _mdat = __webpack_require__(/*! ./box/mdat.js */ "./parse/box/mdat.js");

var _mdat2 = _interopRequireDefault(_mdat);

var _iods = __webpack_require__(/*! ./box/iods.js */ "./parse/box/iods.js");

var _iods2 = _interopRequireDefault(_iods);

var _hmhd = __webpack_require__(/*! ./box/hmhd.js */ "./parse/box/hmhd.js");

var _hmhd2 = _interopRequireDefault(_hmhd);

var _hdlr = __webpack_require__(/*! ./box/hdlr.js */ "./parse/box/hdlr.js");

var _hdlr2 = _interopRequireDefault(_hdlr);

var _ftyp = __webpack_require__(/*! ./box/ftyp.js */ "./parse/box/ftyp.js");

var _ftyp2 = _interopRequireDefault(_ftyp);

var _esds = __webpack_require__(/*! ./box/esds.js */ "./parse/box/esds.js");

var _esds2 = _interopRequireDefault(_esds);

var _elst = __webpack_require__(/*! ./box/elst.js */ "./parse/box/elst.js");

var _elst2 = _interopRequireDefault(_elst);

var _dref = __webpack_require__(/*! ./box/dref.js */ "./parse/box/dref.js");

var _dref2 = _interopRequireDefault(_dref);

var _ctts = __webpack_require__(/*! ./box/ctts.js */ "./parse/box/ctts.js");

var _ctts2 = _interopRequireDefault(_ctts);

var _co = __webpack_require__(/*! ./box/co64.js */ "./parse/box/co64.js");

var _co2 = _interopRequireDefault(_co);

var _btrt = __webpack_require__(/*! ./box/btrt.js */ "./parse/box/btrt.js");

var _btrt2 = _interopRequireDefault(_btrt);

var _avcC = __webpack_require__(/*! ./box/avcC.js */ "./parse/box/avcC.js");

var _avcC2 = _interopRequireDefault(_avcC);

var _avc = __webpack_require__(/*! ./box/avc1.js */ "./parse/box/avc1.js");

var _avc2 = _interopRequireDefault(_avc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubBox = {};

function _buildTree(v, p, a) {
  var o = v;
  p.map(function (_, i) {
    o[_] = i == p.length - 1 ? a : o[_] || {};
    o = o[_];
  });
}

_buildTree(SubBox, ['box', 'avc1'], _avc2.default);

_buildTree(SubBox, ['box', 'avcC'], _avcC2.default);

_buildTree(SubBox, ['box', 'btrt'], _btrt2.default);

_buildTree(SubBox, ['box', 'co64'], _co2.default);

_buildTree(SubBox, ['box', 'ctts'], _ctts2.default);

_buildTree(SubBox, ['box', 'dref'], _dref2.default);

_buildTree(SubBox, ['box', 'elst'], _elst2.default);

_buildTree(SubBox, ['box', 'esds'], _esds2.default);

_buildTree(SubBox, ['box', 'ftyp'], _ftyp2.default);

_buildTree(SubBox, ['box', 'hdlr'], _hdlr2.default);

_buildTree(SubBox, ['box', 'hmhd'], _hmhd2.default);

_buildTree(SubBox, ['box', 'iods'], _iods2.default);

_buildTree(SubBox, ['box', 'mdat'], _mdat2.default);

_buildTree(SubBox, ['box', 'mdhd'], _mdhd2.default);

_buildTree(SubBox, ['box', 'mfhd'], _mfhd2.default);

_buildTree(SubBox, ['box', 'mp4a'], _mp4a2.default);

_buildTree(SubBox, ['box', 'MP4DecConfigDescrTag'], _MP4DecConfigDescrTag2.default);

_buildTree(SubBox, ['box', 'MP4DecSpecificDescrTag'], _MP4DecSpecificDescrTag2.default);

_buildTree(SubBox, ['box', 'MP4ESDescrTag'], _MP4ESDescrTag2.default);

_buildTree(SubBox, ['box', 'mvhd'], _mvhd2.default);

_buildTree(SubBox, ['box', 'nmhd'], _nmhd2.default);

_buildTree(SubBox, ['box', 'pasp'], _pasp2.default);

_buildTree(SubBox, ['box', 'sbgp'], _sbgp2.default);

_buildTree(SubBox, ['box', 'sdtp'], _sdtp2.default);

_buildTree(SubBox, ['box', 'SLConfigDescriptor'], _SLConfigDescriptor2.default);

_buildTree(SubBox, ['box', 'smhd'], _smhd2.default);

_buildTree(SubBox, ['box', 'stco'], _stco2.default);

_buildTree(SubBox, ['box', 'stsc'], _stsc2.default);

_buildTree(SubBox, ['box', 'stsd'], _stsd2.default);

_buildTree(SubBox, ['box', 'stsh'], _stsh2.default);

_buildTree(SubBox, ['box', 'stss'], _stss2.default);

_buildTree(SubBox, ['box', 'stsz'], _stsz2.default);

_buildTree(SubBox, ['box', 'stts'], _stts2.default);

_buildTree(SubBox, ['box', 'stz2'], _stz2.default);

_buildTree(SubBox, ['box', 'tfhd'], _tfhd2.default);

_buildTree(SubBox, ['box', 'tkhd'], _tkhd2.default);

_buildTree(SubBox, ['box', 'traf'], _traf2.default);

_buildTree(SubBox, ['box', 'trun'], _trun2.default);

_buildTree(SubBox, ['box', 'udta'], _udta2.default);

_buildTree(SubBox, ['box', 'url'], _url2.default);

_buildTree(SubBox, ['box', 'vmhd'], _vmhd2.default);

var Parse = function Parse(buffer) {
  _classCallCheck(this, Parse);

  this.buffer = null;
  this.boxes = [];
  this.nextBox = null;
  this.start = 0;
  var self = this;
  if (self.buffer) {
    (0, _concatTypedArray2.default)(Uint8Array, self.buffer, buffer);
  } else {
    self.buffer = buffer;
  }
  var bufferLength = buffer.byteLength;
  buffer.position = 0;
  var stream = new _stream2.default(buffer);
  while (bufferLength - stream.position >= 8) {
    var box = new _box2.default();
    box.readHeader(stream);
    if (box.size - 8 <= bufferLength - stream.position) {
      box.readBody(stream);
      self.boxes.push(box);
    } else {
      if (box.type === 'mdat') {
        box.readBody(stream);
        self.boxes.push(box);
      } else {
        self.nextBox = box;
        stream.position -= 8;
        break;
      }
    }
  }
  self.buffer = new Uint8Array(self.buffer.slice(stream.position));
};

exports.default = Parse;
module.exports = exports['default'];

/***/ }),

/***/ "./parse/stream.js":
/*!*************************!*\
  !*** ./parse/stream.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _error = __webpack_require__(/*! ../error */ "./error.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stream = function () {
  function Stream(buffer) {
    _classCallCheck(this, Stream);

    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
      this.dataview = new DataView(buffer);
      this.dataview.position = 0;
    } else {
      throw new _error2.default('parse', '', { line: 9, handle: '[Stream] constructor', msg: 'data is valid' });
    }
  }

  _createClass(Stream, [{
    key: 'skip',
    value: function skip(count) {
      var loop = Math.floor(count / 4);
      var last = count % 4;
      for (var i = 0; i < loop; i++) {
        Stream.readByte(this.dataview, 4);
      }
      if (last > 0) {
        Stream.readByte(this.dataview, last);
      }
    }

    /**
       * [readByte 从DataView中读取数据]
       * @param  {DataView} buffer [DataView实例]
       * @param  {Number} size   [读取字节数]
       * @return {Number}        [整数]
       */

  }, {
    key: 'readUint8',
    value: function readUint8() {
      return Stream.readByte(this.dataview, 1);
    }
  }, {
    key: 'readUint16',
    value: function readUint16() {
      return Stream.readByte(this.dataview, 2);
    }
  }, {
    key: 'readUint32',
    value: function readUint32() {
      return Stream.readByte(this.dataview, 4);
    }
  }, {
    key: 'readUint64',
    value: function readUint64() {
      return Stream.readByte(this.dataview, 8);
    }
  }, {
    key: 'readInt8',
    value: function readInt8() {
      return Stream.readByte(this.dataview, 1, true);
    }
  }, {
    key: 'readInt16',
    value: function readInt16() {
      return Stream.readByte(this.dataview, 2, true);
    }
  }, {
    key: 'readInt32',
    value: function readInt32() {
      return Stream.readByte(this.dataview, 4, true);
    }
  }, {
    key: 'position',
    set: function set(value) {
      this.dataview.position = value;
    },
    get: function get() {
      return this.dataview.position;
    }
  }], [{
    key: 'readByte',
    value: function readByte(buffer, size, sign) {
      var res = void 0;
      switch (size) {
        case 1:
          if (sign) {
            res = buffer.getInt8(buffer.position);
          } else {
            res = buffer.getUint8(buffer.position);
          }
          break;
        case 2:
          if (sign) {
            res = buffer.getInt16(buffer.position);
          } else {
            res = buffer.getUint16(buffer.position);
          }
          break;
        case 3:
          if (sign) {
            throw 'not supported for readByte 3';
          } else {
            res = buffer.getUint8(buffer.position) << 16;
            res |= buffer.getUint8(buffer.position + 1) << 8;
            res |= buffer.getUint8(buffer.position + 2);
          }
          break;
        case 4:
          if (sign) {
            res = buffer.getInt32(buffer.position);
          } else {
            res = buffer.getUint32(buffer.position);
          }
          break;
        case 8:
          if (sign) {
            throw new _error2.default('parse', '', { line: 73, handle: '[Stream] readByte', msg: 'not supported for readBody 8' });
          } else {
            res = buffer.getUint32(buffer.position) << 32;
            res |= buffer.getUint32(buffer.position + 4);
          }
          break;
        default:
          res = '';
      }
      buffer.position += size;
      return res;
    }
  }]);

  return Stream;
}();

exports.default = Stream;
module.exports = exports['default'];

/***/ }),

/***/ "./task.js":
/*!*****************!*\
  !*** ./task.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(/*! event-emitter */ "./node_modules/event-emitter/index.js");

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _error = __webpack_require__(/*! ./error */ "./error.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task(url, range, withCredentials, callback) {
    _classCallCheck(this, Task);

    (0, _eventEmitter2.default)(this);
    this.url = url;
    this.range = range;
    this.withCredentials = withCredentials;
    this.id = range.join('-');
    this.on = false;
    var xhr = new window.XMLHttpRequest();
    xhr.target = this;
    xhr.responseType = 'arraybuffer';
    xhr.withCredentials = this.withCredentials || false;
    xhr.open('get', url);
    xhr.setRequestHeader('Range', 'bytes=' + range[0] + '-' + range[1]);
    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 206) {
        if (callback && callback instanceof Function) {
          callback(xhr.response);
        }
      }
      xhr.target.remove();
    };
    xhr.onerror = function (e) {
      xhr.target.emit('error', new _error2.default('network', '', {
        line: 25, handle: '[Task] constructor', msg: e.message, url: url
      }));
      xhr.target.remove();
    };
    xhr.onabort = function () {
      xhr.target.remove();
    };
    this.xhr = xhr;
    Task.queue.push(this);
    this.update();
  }

  _createClass(Task, [{
    key: 'cancel',
    value: function cancel() {
      this.xhr.abort();
    }
  }, {
    key: 'remove',
    value: function remove() {
      var _this = this;

      Task.queue.filter(function (item, idx) {
        if (item.url === _this.url && item.id === _this.id) {
          Task.queue.splice(idx, 1);
          return true;
        }
        return false;
      });
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var Queue = Task.queue;
      var sended = Queue.filter(function (item) {
        return item.on;
      });
      var wait = Queue.filter(function (item) {
        return !item.on;
      });
      var max = Task.limit - sended.length;
      wait.forEach(function (item, idx) {
        if (idx < max) {
          item.run();
        }
      });
    }
  }, {
    key: 'run',
    value: function run() {
      if (this.xhr.readyState === 1) {
        this.on = true;
        this.xhr.send();
      } else {
        this.remove();
      }
    }
  }], [{
    key: 'clear',
    value: function clear() {
      Task.queue.forEach(function (item) {
        if (item.on) {
          item.cancel();
        }
      });
      Task.queue.length = 0;
    }
  }]);

  return Task;
}();

Task.queue = [];
Task.limit = 2;
window.Task = Task;

exports.default = Task;
module.exports = exports['default'];

/***/ }),

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {};

/**
 * [使用递归查询指定type的box]
 * var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
 * @param  {Object} root [JSON对象]
 * @param  {String} type [box的类型]
 * @param  {?Array} type [box]
 * @return {Object|Array<Object>|undefined} [box]
 */
util.findBox = function (root, type) {
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (root.type !== type) {
    if (root && root.subBox) {
      var box = root.subBox.filter(function (item) {
        return item.type === type;
      });
      if (box.length) {
        box.forEach(function (item) {
          return result.push(item);
        });
      } else {
        root.subBox.forEach(function (item) {
          return util.findBox(item, type, result);
        });
      }
    }
  } else {
    result.push(root);
  }
  result = [].concat(result);
  return result.length > 1 ? result : result[0];
};

util.padStart = function (str, length, pad) {
  var charstr = String(pad);var len = length >> 0;var maxlen = Math.ceil(len / charstr.length);
  var chars = [];var r = String(str);
  while (maxlen--) {
    chars.push(charstr);
  }
  return chars.join('').substring(0, len - r.length) + r;
};

/**
 * [十进制转十六进制]
 * @param  {Number} value [要转换的十进制数字]
 * @return {String}       [十六进制]
 */
util.toHex = function () {
  var hex = [];

  for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  value.forEach(function (item) {
    hex.push(util.padStart(Number(item).toString(16), 2, 0));
  });
  return hex;
};

/**
 * [求和计算]
 * @param  {[type]} rst [description]
 * @return {[type]}     [description]
 */
util.sum = function () {
  var count = 0;

  for (var _len2 = arguments.length, rst = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rst[_key2] = arguments[_key2];
  }

  rst.forEach(function (item) {
    count += item;
  });
  return count;
};

/**
 * [计算音视频数据在Mdat中的偏移量]
 * @param  {Array} stsc         [块偏移量]
 * @param  {Number} sample_order [帧次序]
 * @return {Object}              [块的位置和当前帧的偏移数]
 */
util.stscOffset = function (stsc, sample_order) {
  var chunk_index = void 0;var samples_offset = '';
  var chunk_start = stsc.entries.filter(function (item) {
    return item.first_sample <= sample_order && sample_order < item.first_sample + item.chunk_count * item.samples_per_chunk;
  })[0];
  if (!chunk_start) {
    var last_chunk = stsc.entries.pop();
    stsc.entries.push(last_chunk);
    var _chunk_offset = Math.floor((sample_order - last_chunk.first_sample) / last_chunk.samples_per_chunk);
    var last_chunk_index = last_chunk.first_chunk + _chunk_offset;
    var last_chunk_first_sample = last_chunk.first_sample + last_chunk.samples_per_chunk * _chunk_offset;
    return {
      chunk_index: last_chunk_index,
      samples_offset: [last_chunk_first_sample, sample_order]
    };
  }
  var chunk_offset = Math.floor((sample_order - chunk_start.first_sample) / chunk_start.samples_per_chunk);
  var chunk_offset_sample = chunk_start.first_sample + chunk_offset * chunk_start.samples_per_chunk;
  chunk_index = chunk_start.first_chunk + chunk_offset;
  samples_offset = [chunk_offset_sample, sample_order];
  return {
    chunk_index: chunk_index,
    samples_offset: samples_offset
  };
};

util.seekSampleOffset = function (stsc, stco, stsz, order, mdatStart) {
  var chunkOffset = util.stscOffset(stsc, order + 1);
  var result = stco.entries[chunkOffset.chunk_index - 1] + util.sum.apply(null, stsz.entries.slice(chunkOffset.samples_offset[0] - 1, chunkOffset.samples_offset[1] - 1)) - mdatStart;
  if (result === undefined) {
    throw 'result=' + result + ',stco.length=' + stco.entries.length + ',sum=' + util.sum.apply(null, stsz.entries.slice(0, order));
  } else if (result < 0) {
    throw 'result=' + result + ',stco.length=' + stco.entries.length + ',sum=' + util.sum.apply(null, stsz.entries.slice(0, order));
  }
  return result;
};

util.seekSampleTime = function (stts, ctts, order) {
  var time_offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var time = void 0;var duration = void 0;var count = 0;var startTime = 0;var offset = 0;
  stts.entry.every(function (item) {
    duration = item.sampleDuration;
    if (order < count + item.sampleCount) {
      time = startTime + (order - count) * item.sampleDuration;
      return false;
    }
    count += item.sampleCount;
    startTime += item.sampleCount * duration;
    return true;
  });
  if (ctts) {
    var ct = 0;
    ctts.entry.every(function (item) {
      ct += item.count;
      if (order < ct) {
        offset = item.offset;
        return false;
      }
      return true;
    });
  }
  if (!time) {
    time = startTime + (order - count) * duration;
  }
  time -= time_offset;
  return { time: time, duration: duration, offset: offset };
};

util.seekOrderSampleByTime = function (stts, timeScale, time) {
  var startTime = 0;var order = 0;var count = 0;var itemDuration = void 0;
  stts.every(function (item, idx) {
    itemDuration = item.sampleCount * item.sampleDuration / timeScale;
    if (time <= startTime + itemDuration) {
      order = count + Math.ceil((time - startTime) * timeScale / item.sampleDuration);
      startTime += Math.ceil((time - startTime) * timeScale / item.sampleDuration) * item.sampleDuration / timeScale;
      return false;
    }
    startTime += itemDuration;
    count += item.sampleCount;
    return true;
  });
  return { order: order, startTime: startTime };
};

util.seekTrakDuration = function (trak, timeScale) {
  var stts = util.findBox(trak, 'stts');var duration = 0;
  stts.entry.forEach(function (item) {
    duration += item.sampleCount * item.sampleDuration;
  });
  return Number(duration / timeScale).toFixed(4);
};

exports.default = util;
module.exports = exports['default'];

/***/ })

/******/ });
//# sourceMappingURL=main.js.map