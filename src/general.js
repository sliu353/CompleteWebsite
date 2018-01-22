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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
module.exports = __webpack_require__(34);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* BackgroundCheck
   http://kennethcachia.com/background-check
   v1.2.2 */

!function (a, b) {
    true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a.BackgroundCheck = b(a);
}(this, function () {
   "use strict";
   function a(a) {
      if (void 0 === a || void 0 === a.targets) throw "Missing attributes";H.debug = d(a.debug, !1), H.debugOverlay = d(a.debugOverlay, !1), H.targets = g(a.targets), H.images = g(a.images || "img", !0), H.changeParent = d(a.changeParent, !1), H.threshold = d(a.threshold, 50), H.minComplexity = d(a.minComplexity, 30), H.minOverlap = d(a.minOverlap, 50), H.windowEvents = d(a.windowEvents, !0), H.maxDuration = d(a.maxDuration, 500), H.mask = d(a.mask, { r: 0, g: 255, b: 0 }), H.classes = d(a.classes, { dark: "background--dark", light: "background--light", complex: "background--complex" }), void 0 === B && (h(), B && (C.style.position = "fixed", C.style.top = "0px", C.style.left = "0px", C.style.width = "100%", C.style.height = "100%", window.addEventListener(G, x.bind(null, function () {
         k(), w();
      })), window.addEventListener("scroll", x.bind(null, w)), k(), w()));
   }function b() {
      B = null, C = null, D = null, H = {}, E && clearTimeout(E);
   }function c(a) {
      z("debug") && console.log(a);
   }function d(a, b) {
      return e(a, typeof b), void 0 === a ? b : a;
   }function e(a, b) {
      if (void 0 !== a && typeof a !== b) throw "Incorrect attribute type";
   }function f(a) {
      for (var b, d, e = [], f = 0; f < a.length; f++) if (b = a[f], e.push(b), "IMG" !== b.tagName) {
         if (d = window.getComputedStyle(b).backgroundImage, d.split(/,url|, url/).length > 1) throw "Multiple backgrounds are not supported";if (!d || "none" === d) throw "Element is not an <img> but does not have a background-image";e[f] = { img: new Image(), el: e[f] }, d = d.slice(4, -1), d = d.replace(/"/g, ""), e[f].img.src = d, c("CSS Image - " + d);
      }return e;
   }function g(a, b) {
      var c = a;if ("string" == typeof a ? c = document.querySelectorAll(a) : a && 1 === a.nodeType && (c = [a]), !c || 0 === c.length || void 0 === c.length) throw "Elements not found";return b && (c = f(c)), c = Array.prototype.slice.call(c);
   }function h() {
      C = document.createElement("canvas"), C && C.getContext ? (D = C.getContext("2d"), B = !0) : B = !1, i();
   }function i() {
      z("debugOverlay") ? (C.style.opacity = .5, C.style.pointerEvents = "none", document.body.appendChild(C)) : C.parentNode && C.parentNode.removeChild(C);
   }function j(a) {
      var d = new Date().getTime() - a;c("Duration: " + d + "ms"), d > z("maxDuration") && (console.log("BackgroundCheck - Killed"), q(), b());
   }function k() {
      F = { left: 0, top: 0, right: document.body.clientWidth, bottom: window.innerHeight }, C.width = document.body.clientWidth, C.height = window.innerHeight;
   }function l(a, b, c) {
      var d, e;return -1 !== a.indexOf("px") ? d = parseFloat(a) : -1 !== a.indexOf("%") ? (d = parseFloat(a), e = d / 100, d = e * b, c && (d -= c * e)) : d = b, d;
   }function m(a) {
      var b = window.getComputedStyle(a.el);a.el.style.backgroundRepeat = "no-repeat", a.el.style.backgroundOrigin = "padding-box";var c = b.backgroundSize.split(" "),
          d = c[0],
          e = void 0 === c[1] ? "auto" : c[1],
          f = a.el.clientWidth / a.el.clientHeight,
          g = a.img.naturalWidth / a.img.naturalHeight;"cover" === d ? f >= g ? (d = "100%", e = "auto") : (d = "auto", c[0] = "auto", e = "100%") : "contain" === d && (1 / g > 1 / f ? (d = "auto", c[0] = "auto", e = "100%") : (d = "100%", e = "auto")), d = "auto" === d ? a.img.naturalWidth : l(d, a.el.clientWidth), e = "auto" === e ? d / a.img.naturalWidth * a.img.naturalHeight : l(e, a.el.clientHeight), "auto" === c[0] && "auto" !== c[1] && (d = e / a.img.naturalHeight * a.img.naturalWidth);var h = b.backgroundPosition;"top" === h ? h = "50% 0%" : "left" === h ? h = "0% 50%" : "right" === h ? h = "100% 50%" : "bottom" === h ? h = "50% 100%" : "center" === h && (h = "50% 50%"), h = h.split(" ");var i, j;return 4 === h.length ? (i = h[1], j = h[3]) : (i = h[0], j = h[1]), j = j || "50%", i = l(i, a.el.clientWidth, d), j = l(j, a.el.clientHeight, e), 4 === h.length && ("right" === h[0] && (i = a.el.clientWidth - a.img.naturalWidth - i), "bottom" === h[2] && (j = a.el.clientHeight - a.img.naturalHeight - j)), i += a.el.getBoundingClientRect().left, j += a.el.getBoundingClientRect().top, { left: Math.floor(i), right: Math.floor(i + d), top: Math.floor(j), bottom: Math.floor(j + e), width: Math.floor(d), height: Math.floor(e) };
   }function n(a) {
      var b, c, d;if (a.nodeType) {
         var e = a.getBoundingClientRect();b = { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width, height: e.height }, d = a.parentNode, c = a;
      } else b = m(a), d = a.el, c = a.img;d = d.getBoundingClientRect(), b.imageTop = 0, b.imageLeft = 0, b.imageWidth = c.naturalWidth, b.imageHeight = c.naturalHeight;var f,
          g = b.imageHeight / b.height;return b.top < d.top && (f = d.top - b.top, b.imageTop = g * f, b.imageHeight -= g * f, b.top += f, b.height -= f), b.left < d.left && (f = d.left - b.left, b.imageLeft += g * f, b.imageWidth -= g * f, b.width -= f, b.left += f), b.bottom > d.bottom && (f = b.bottom - d.bottom, b.imageHeight -= g * f, b.height -= f), b.right > d.right && (f = b.right - d.right, b.imageWidth -= g * f, b.width -= f), b.imageTop = Math.floor(b.imageTop), b.imageLeft = Math.floor(b.imageLeft), b.imageHeight = Math.floor(b.imageHeight), b.imageWidth = Math.floor(b.imageWidth), b;
   }function o(a) {
      var b = n(a);a = a.nodeType ? a : a.img, b.imageWidth > 0 && b.imageHeight > 0 && b.width > 0 && b.height > 0 ? D.drawImage(a, b.imageLeft, b.imageTop, b.imageWidth, b.imageHeight, b.left, b.top, b.width, b.height) : c("Skipping image - " + a.src + " - area too small");
   }function p(a, b, c) {
      var d = a.className;switch (c) {case "add":
            d += " " + b;break;case "remove":
            var e = new RegExp("(?:^|\\s)" + b + "(?!\\S)", "g");d = d.replace(e, "");}a.className = d.trim();
   }function q(a) {
      for (var b, c = a ? [a] : z("targets"), d = 0; d < c.length; d++) b = c[d], b = z("changeParent") ? b.parentNode : b, p(b, z("classes").light, "remove"), p(b, z("classes").dark, "remove"), p(b, z("classes").complex, "remove");
   }function r(a) {
      var b,
          d,
          e,
          f,
          g = a.getBoundingClientRect(),
          h = 0,
          i = 0,
          j = 0,
          k = 0,
          l = z("mask");if (g.width > 0 && g.height > 0) {
         q(a), a = z("changeParent") ? a.parentNode : a, d = D.getImageData(g.left, g.top, g.width, g.height).data;for (var m = 0; m < d.length; m += 4) d[m] === l.r && d[m + 1] === l.g && d[m + 2] === l.b ? k++ : (h++, b = .2126 * d[m] + .7152 * d[m + 1] + .0722 * d[m + 2], e = b - j, i += e * e, j += e / h);k <= d.length / 4 * (1 - z("minOverlap") / 100) && (f = Math.sqrt(i / h) / 255, j /= 255, c("Target: " + a.className + " lum: " + j + " var: " + f), p(a, j <= z("threshold") / 100 ? z("classes").dark : z("classes").light, "add"), f > z("minComplexity") / 100 && p(a, z("classes").complex, "add"));
      }
   }function s(a, b) {
      return a = (a.nodeType ? a : a.el).getBoundingClientRect(), b = b === F ? b : (b.nodeType ? b : b.el).getBoundingClientRect(), !(a.right < b.left || a.left > b.right || a.top > b.bottom || a.bottom < b.top);
   }function t(a) {
      for (var b, c = new Date().getTime(), d = a && ("IMG" === a.tagName || a.img) ? "image" : "targets", e = a ? !1 : !0, f = z("targets").length, g = 0; f > g; g++) b = z("targets")[g], s(b, F) && ("targets" !== d || a && a !== b ? "image" === d && s(b, a) && r(b) : (e = !0, r(b)));if ("targets" === d && !e) throw a + " is not a target";j(c);
   }function u(a) {
      var b = function (a) {
         var b = 0;return "static" !== window.getComputedStyle(a).position && (b = parseInt(window.getComputedStyle(a).zIndex, 10) || 0, b >= 0 && b++), b;
      },
          c = a.parentNode,
          d = c ? b(c) : 0,
          e = b(a);return 1e5 * d + e;
   }function v(a) {
      var b = !1;return a.sort(function (a, c) {
         a = a.nodeType ? a : a.el, c = c.nodeType ? c : c.el;var d = a.compareDocumentPosition(c),
             e = 0;return a = u(a), c = u(c), a > c && (b = !0), a === c && 2 === d ? e = 1 : a === c && 4 === d && (e = -1), e || a - c;
      }), c("Sorted: " + b), b && c(a), b;
   }function w(a, b, d) {
      if (B) {
         var e = z("mask");c("--- BackgroundCheck ---"), c("onLoad event: " + (d && d.src)), b !== !0 && (D.clearRect(0, 0, C.width, C.height), D.fillStyle = "rgb(" + e.r + ", " + e.g + ", " + e.b + ")", D.fillRect(0, 0, C.width, C.height));for (var f, g, h = d ? [d] : z("images"), i = v(h), j = !1, k = 0; k < h.length; k++) f = h[k], s(f, F) && (g = f.nodeType ? f : f.img, 0 === g.naturalWidth ? (j = !0, c("Loading... " + f.src), g.removeEventListener("load", w), i ? g.addEventListener("load", w.bind(null, null, !1, null)) : g.addEventListener("load", w.bind(null, a, !0, f))) : (c("Drawing: " + f.src), o(f)));d || j ? d && t(d) : t(a);
      }
   }function x(a) {
      z("windowEvents") === !0 && (E && clearTimeout(E), E = setTimeout(a, 200));
   }function y(a, b) {
      if (void 0 === H[a]) throw "Unknown property - " + a;if (void 0 === b) throw "Missing value for " + a;if ("targets" === a || "images" === a) try {
         b = g("images" !== a || b ? b : "img", "images" === a ? !0 : !1);
      } catch (c) {
         throw b = [], c;
      } else e(b, typeof H[a]);q(), H[a] = b, w(), "debugOverlay" === a && i();
   }function z(a) {
      if (void 0 === H[a]) throw "Unknown property - " + a;return H[a];
   }function A() {
      for (var a, b = z("images"), c = [], d = 0; d < b.length; d++) a = n(b[d]), c.push(a);return c;
   }var B,
       C,
       D,
       E,
       F,
       G = void 0 !== window.orientation ? "orientationchange" : "resize",
       H = {};return { init: a, destroy: b, refresh: w, set: y, get: z, getImageData: A };
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function (e) {
  "use strict";
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t);return this.each(function () {
      var t = e(this),
          r = n,
          i = function () {
        var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);i = i.replace(/,/g, "");var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;for (var f = n; f >= 1; f--) {
          var l = parseInt(i / n * f);u && (l = parseFloat(i / n * f).toFixed(a));if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");e.unshift(l);
        }t.data("counterup-nums", e);t.text("0");var c = function () {
          t.text(t.data("counterup-nums").shift());if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);else {
            delete t.data("counterup-nums");t.data("counterup-nums", null);t.data("counterup-func", null);
          }
        };t.data("counterup-func", c);setTimeout(t.data("counterup-func"), r.delay);
      };t.waypoint(i, { offset: "100%", triggerOnce: !0 });
    });
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {var switcher = true;

function openNav() {
  if (switcher) {
    switcher = false;
    $("#main").animate({
      left: "+=" + $('#mySidenav').width(),
      right: "-=" + $('#mySidenav').width()
    }, function () {
      // Animation complete.
    });
    //document.getElementById("main").style.marginRight = (-1 * $('#mySidenav').width()) + "px";
    $("#nav-button").animate({
      left: "+=" + $('#mySidenav').width(),
      right: "-=" + $('#mySidenav').width()
    }, function () {
      $("#nav-button").attr("onclick", "closeNav()");
      $('#main').attr("onclick", "closeNav()");
    });
    $('#ol').show();
    $('#outer-container').css('overflow', 'hidden');
    console.log("\"" + $('#mySidenav').width() + "\"");
  }
}

function closeNav() {
  if (!switcher) {
    switcher = true;
    $("#nav-button").attr("onclick", "openNav()");
    $('#main').attr("onclick", "null");
    $("#main").animate({
      left: "-=" + $('#mySidenav').width(),
      right: "+=" + $('#mySidenav').width()
    }, function () {
      // Animation complete.
    });
    //document.getElementById("main").style.marginRight = (-1 * $('#mySidenav').width()) + "px";
    $("#nav-button").animate({
      left: $(window).width() > 992 ? 50 : 10,
      right: $(window).width() > 992 ? 50 : 10
    }, function () {
      $('#ol').hide();
      $('#outer-container').css('overflow', 'scroll');
    });
  }
}

window.openNav = openNav;
window.closeNav = closeNav;

$(window).resize(function () {
  closeNav();
  $("#nav-button").removeAttr('style');

  //document.getElementById("main").style.left= "0";
  //if ($(window).width() < 992) {
  //  document.getElementById("nav-button").style.left = "10px";
  //  document.getElementById("nav-button").style.top = "10px";
  //} else {
  //  document.getElementById("nav-button").style.left = "50px";
  //  document.getElementById("nav-button").style.top = "50px";
  //}
  //  $("#nav-button").attr("onclick","openNav()");
});

jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $("#top-background-about").height() }, 1000);
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.extend(jQuery.easing, {
	easeInQuad: function (x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * (--t * (t - 2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t /= d) < 1 / 2.75) {
			return c * (7.5625 * t * t) + b;
		} else if (t < 2 / 2.75) {
			return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
		} else if (t < 2.5 / 2.75) {
			return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function checkMedia() {
  var t = "none";return t = window.matchMedia("(min-width: 768px)").matches ? window.matchMedia("(min-width: 992px)").matches ? window.matchMedia("(min-width: 1200px)").matches ? "lg" : "md" : "sm" : "xs";
}function workItemWidth(t, i) {
  var n = "2";return n = "xs" === t ? i.ws_xs : "sm" === t ? i.ws_sm : "md" === t ? i.ws_md : i.ws_lg;
}$(function () {
  $.fn.jportilio = function (t) {
    function i(t) {
      if (!(null != s.filter && s.filter.length > 0)) return !0;var i = t.data("tags");if (null != i && i.length > 0) {
        var n = !1;if (i = i.split(","), i.map(function (t) {
          return -1 != $.inArray(t, s.filter) ? (n = !0, !0) : void 0;
        }), n === !0) return !0;
      }return !1;
    }function n(t) {
      var n = checkMedia(),
          e = workItemWidth(n, s),
          o = t.width() / e,
          a = s.ratio * parseFloat(o) - 2 * s.item_margin,
          r = 0,
          c = 0,
          l = 0,
          h = 0;t.children(".jprt-item").each(function () {
        var n = $(this);if ("cover" === n.data("content-show") && n.find(".jprt-content").css({ height: a + "px" }), "new_section" === n.data("content-show")) {
          var d = n.find(".jprt-content");d.css({ position: "absolute", visibility: "hidden", display: "block", width: t.width() + "px" }), d.css({ position: "", visibility: "", display: "" });
        }if (i(n)) {
          if (n.css({ display: "block", height: a + "px", width: o - 2 * s.item_margin + "px", top: c * (a + parseFloat(2 * s.item_margin)) + h + "px", left: r * o + "px", "margin-top": s.item_margin + "px", "margin-left": s.item_margin + "px" }), n.find(".jprt-caption").css({ height: a + "px" }), n.find(".jprt-hover").css({ height: a + "px" }), n.find(".jprt-content").hasClass("show_new_section")) {
            var w = n.find(".jprt-content"),
                p = w.outerHeight();w.css({ "margin-top": a + "px", width: t.width() - 2 * s.item_margin + "px", "margin-left": -(r * o) + "px" }), l = p, n.find(".jprt-arrow-down-border").css({ display: "block" });
          } else n.find(".jprt-arrow-down-border").css({ display: "none" });r++;
        } else n.css({ height: "0px", width: "0px" }), n.css({ display: "none" });r >= e && (r = 0, c++, h += l, l = 0);
      }), r > 0 && e > r && (h += l), t.css({ height: (c + 1) * (a + 2 * s.item_margin) + h + "px" });
    }var e,
        s = $.extend({}, $.fn.jportilio.defaults, t),
        o = this;return $(window).on("resize", function () {
      clearTimeout(e), e = setTimeout(function () {
        o.each(function () {
          n($(this), "");
        });
      }, 100);
    }), this.each(function () {
      var t = $(this);n(t), $("button[data-jprtgrid=" + t.attr("id") + "]").on("click", function () {
        var i = $(this).data("tag");null != i && (i = i.split(",")), $(this).hasClass("jprt-btn-active") ? ($(this).removeClass("jprt-btn-active"), null != i && s.filter.length > 0 && i.map(function (t) {
          s.filter.splice($.inArray(t, s.filter), 1);
        })) : ($(this).addClass("jprt-btn-active"), 0 == s.filter.length ? null != i && i.length > 0 && (s.filter = i) : null != i && i.length > 0 && i.map(function (t) {
          s.filter.push(t);
        })), n(t);
      }), $('div[data-content-show="redirect"]').on("click", function () {
        var t = $(this).data("content-show");if (null != t && "redirect" === t) {
          var i = $(this).data("content-url");null != i && (window.location.href = i);
        }
      }), $('button[data-content-show="redirect"]').on("click", function () {
        var t = $(this).data("content-show");if (null != t && "redirect" === t) {
          var i = $(this).data("content-url");null != i && (window.location.href = i);
        }
      }), $('div[data-content-show="cover"][class*="jprt-item"]').on("click", function () {
        var t = $(this).find(".jprt-content");t.toggleClass("show");
      }), $('div[data-content-show="new_section"]').on("click", function () {
        var i = $(".show_new_section");i.each(function () {
          $(this).removeClass("show_new_section");
        });var e = $(this).find(".jprt-content");e.hasClass("new_section_shown") ? e.removeClass("new_section_shown") : (e.addClass("show_new_section"), e.addClass("new_section_shown")), n(t);
      });
    });
  }, $.fn.jportilio.defaults = { filter: [], ratio: "0.75", ws_xs: 1, ws_sm: 2, ws_md: 3, ws_lg: 4, item_margin: 0 };
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 * jQuery FlexSlider v2.0
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */

;(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function (el, options) {
    var slider = $(el),
        vars = $.extend({}, $.flexslider.defaults, options),
        namespace = vars.namespace,
        touch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        eventType = touch ? "touchend" : "click",
        vertical = vars.direction === "vertical",
        reverse = vars.reverse,
        carousel = vars.itemWidth > 0,
        fade = vars.animation === "fade",
        asNav = vars.asNavFor !== "",
        methods = {};

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Privat slider methods
    methods = {
      init: function () {
        slider.animating = false;
        slider.currentSlide = vars.startAt;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = slider.currentSlide === 0 || slider.currentSlide === slider.last;
        slider.containerSelector = vars.selector.substr(0, vars.selector.search(' '));
        slider.slides = $(vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(vars.sync).length > 0;
        // SLIDE:
        if (vars.animation === "slide") vars.animation = "swing";
        slider.prop = vertical ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        // TOUCH/USECSS:
        slider.transitions = !vars.video && !fade && vars.useCSS && function () {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if (obj.style[props[i]] !== undefined) {
              slider.pfx = props[i].replace('Perspective', '').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }();
        // CONTROLSCONTAINER:
        if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer);
        // MANUAL:
        if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls);

        // RANDOMIZE:
        if (vars.randomize) {
          slider.slides.sort(function () {
            return Math.round(Math.random()) - 0.5;
          });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // ASNAV:
        if (asNav) methods.asNav.setup();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (vars.controlNav) methods.controlNav.setup();

        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.setup();

        // KEYBOARD:
        if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
          $(document).bind('keyup', function (event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = keycode === 39 ? slider.getTarget('next') : keycode === 37 ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (vars.mousewheel) {
          slider.bind('mousewheel', function (event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = delta < 0 ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (vars.pausePlay) methods.pausePlay.setup();

        // SLIDSESHOW
        if (vars.slideshow) {
          if (vars.pauseOnHover) {
            slider.hover(function () {
              slider.pause();
            }, function () {
              if (!slider.manualPause) slider.play();
            });
          }
          // initialize animation
          vars.initDelay > 0 ? setTimeout(slider.play, vars.initDelay) : slider.play();
        }

        // TOUCH
        if (touch && vars.touch) methods.touch();

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || fade && vars.smoothHeight) $(window).bind("resize focus", methods.resize);

        // API: start() Callback
        setTimeout(function () {
          vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function () {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          slider.slides.click(function (e) {
            e.preventDefault();
            var $slide = $(this),
                target = $slide.index();
            if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
              slider.direction = slider.currentItem < target ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
            }
          });
        }
      },
      controlNav: {
        setup: function () {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else {
            // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function () {
          var type = vars.controlNav === "thumbnails" ? 'control-thumbs' : 'control-paging',
              j = 1,
              item;

          slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              item = vars.controlNav === "thumbnails" ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          slider.controlsContainer ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function (event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              slider.direction = target > slider.currentSlide ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNavScaffold.delegate('a', "click touchstart", function (event) {
              event.preventDefault();
            });
          }
        },
        setupManual: function () {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.live(eventType, function (event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              target > slider.currentSlide ? slider.direction = "next" : slider.direction = "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNav.live("click touchstart", function (event) {
              event.preventDefault();
            });
          }
        },
        set: function () {
          var selector = vars.controlNav === "thumbnails" ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, slider.controlsContainer ? slider.controlsContainer : slider);
        },
        active: function () {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function (action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function () {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function (event) {
            event.preventDefault();
            var target = $(this).hasClass(namespace + 'next') ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.directionNav.bind("click touchstart", function (event) {
              event.preventDefault();
            });
          }
        },
        update: function () {
          var disabledClass = namespace + 'disabled';
          if (!vars.animationLoop) {
            if (slider.pagingCount === 1) {
              slider.directionNav.addClass(disabledClass);
            } else if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
            } else {
              slider.directionNav.removeClass(disabledClass);
            }
          }
        }
      },
      pausePlay: {
        setup: function () {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          // slider.pausePlay.addClass(pausePlayState).text((pausePlayState == 'pause') ? vars.pauseText : vars.playText);
          methods.pausePlay.update(vars.slideshow ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function (event) {
            event.preventDefault();
            if ($(this).hasClass(namespace + 'pause')) {
              slider.pause();
              slider.manualPause = true;
            } else {
              slider.play();
              slider.manualPause = false;
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.pausePlay.bind("click touchstart", function (event) {
              event.preventDefault();
            });
          }
        },
        update: function (state) {
          state === "play" ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
        }
      },
      touch: function () {
        var startX,
            startY,
            offset,
            cwidth,
            dx,
            startT,
            scrolling = false;

        el.addEventListener('touchstart', onTouchStart, false);
        function onTouchStart(e) {
          if (slider.animating) {
            e.preventDefault();
          } else if (e.touches.length === 1) {
            slider.pause();
            // CAROUSEL: 
            cwidth = vertical ? slider.h : slider.w;
            startT = Number(new Date());
            // CAROUSEL:
            offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
            startX = vertical ? e.touches[0].pageY : e.touches[0].pageX;
            startY = vertical ? e.touches[0].pageX : e.touches[0].pageY;

            el.addEventListener('touchmove', onTouchMove, false);
            el.addEventListener('touchend', onTouchEnd, false);
          }
        }

        function onTouchMove(e) {
          dx = vertical ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
          scrolling = vertical ? Math.abs(dx) < Math.abs(e.touches[0].pageX - startY) : Math.abs(dx) < Math.abs(e.touches[0].pageY - startY);

          if (!scrolling || Number(new Date()) - startT > 500) {
            e.preventDefault();
            if (!fade && slider.transitions) {
              if (!vars.animationLoop) {
                dx = dx / (slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0 ? Math.abs(dx) / cwidth + 2 : 1);
              }
              slider.setProps(offset + dx, "setTouch");
            }
          }
        }

        function onTouchEnd(e) {
          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
            var updateDx = reverse ? -dx : dx,
                target = updateDx > 0 ? slider.getTarget('next') : slider.getTarget('prev');

            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 20 || Math.abs(updateDx) > cwidth / 2)) {
              slider.flexAnimate(target, vars.pauseOnAction);
            } else {
              slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
            }
          }
          // finish the touch by undoing the touch session
          el.removeEventListener('touchmove', onTouchMove, false);
          el.removeEventListener('touchend', onTouchEnd, false);
          startX = null;
          startY = null;
          dx = null;
          offset = null;
        }
      },
      resize: function () {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) {
            //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          } else if (vertical) {
            //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function (dur) {
        if (!vertical || fade) {
          var $obj = fade ? slider : slider.viewport;
          dur ? $obj.animate({ "height": slider.slides.eq(slider.animatingTo).height() }, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function (action) {
        var $obj = $(vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate":
            $obj.flexAnimate(target, vars.pauseOnAction, false, true);break;
          case "play":
            if (!$obj.playing && !$obj.asNav) {
              $obj.play();
            }break;
          case "pause":
            $obj.pause();break;
        }
      }

      // public methods
    };slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
      if (!slider.animating && (slider.canAdvance(target) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = slider.currentItem < target ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target / slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;
        // API: before() animation Callback
        vars.before(slider);

        // SLIDESHOW:
        if (pause) slider.pause();

        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");

        // CONTROLNAV
        if (vars.controlNav) methods.controlNav.active();

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.update();

        if (target === slider.last) {
          // API: end() of cycle Callback
          vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!vars.animationLoop) slider.pause();
        }

        // SLIDE:
        if (!fade) {
          var dimension = vertical ? slider.slides.filter(':first').height() : slider.computedW,
              margin,
              slideString,
              calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = vars.itemWidth > slider.w ? vars.itemMargin * 2 : vars.itemMargin;
            calcNext = (slider.itemW + margin) * slider.move * slider.animatingTo;
            slideString = calcNext > slider.limit && slider.visible !== 1 ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
            slideString = reverse ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
            slideString = reverse ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = reverse ? (slider.count - 1 - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", vars.animationSpeed);
          if (slider.transitions) {
            if (!vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function () {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function () {
              slider.wrapup(dimension);
            });
          }
        } else {
          // FADE:
          slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
          slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
        }
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
      }
    };
    slider.wrapup = function (dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function () {
      if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
    };
    // SLIDESHOW:
    slider.pause = function () {
      clearInterval(slider.animatedSlides);
      slider.playing = false;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    };
    // SLIDESHOW:
    slider.play = function () {
      slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
      slider.playing = true;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    };
    slider.canAdvance = function (target) {
      // ASNAV:
      var last = asNav ? slider.pagingCount - 1 : slider.last;
      return asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next" ? false : target === slider.currentSlide && !asNav ? false : vars.animationLoop ? true : slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next" ? false : slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next" ? false : true;
    };
    slider.getTarget = function (dir) {
      slider.direction = dir;
      if (dir === "next") {
        return slider.currentSlide === slider.last ? 0 : slider.currentSlide + 1;
      } else {
        return slider.currentSlide === 0 ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function (pos, special, dur) {
      var target = function () {
        var posCheck = pos ? pos : (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo,
            posCalc = function () {
          if (carousel) {
            return special === "setTouch" ? pos : reverse && slider.animatingTo === slider.last ? 0 : reverse ? slider.limit - (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo : slider.animatingTo === slider.last ? slider.limit : posCheck;
          } else {
            switch (special) {
              case "setTotal":
                return reverse ? (slider.count - 1 - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
              case "setTouch":
                return reverse ? pos : pos;
              case "jumpEnd":
                return reverse ? pos : slider.count * pos;
              case "jumpStart":
                return reverse ? slider.count * pos : pos;
              default:
                return pos;
            }
          }
        }();
        return posCalc * -1 + "px";
      }();

      if (slider.transitions) {
        target = vertical ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = dur !== undefined ? dur / 1000 + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);
    };

    slider.setup = function (type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="flex-viewport"></div>').css({ "overflow": "hidden", "position": "relative" }).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
        }
        slider.newSlides = $(vars.selector, slider);

        sliderOffset = reverse ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function () {
            slider.newSlides.css({ "display": "block" });
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, type === "init" ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function () {
            slider.doMath();
            slider.newSlides.css({ "width": slider.computedW, "float": "left", "display": "block" });
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
          }, type === "init" ? 100 : 0);
        }
      } else {
        // FADE: 
        slider.slides.css({ "width": "100%", "float": "left", "marginRight": "-100%", "position": "relative" });
        if (type === "init") slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
    };

    slider.doMath = function () {
      var slide = slider.slides.first(),
          slideMargin = vars.itemMargin,
          minItems = vars.minItems,
          maxItems = vars.maxItems;

      slider.w = slider.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = vars.itemWidth + slideMargin;
        slider.minW = minItems ? minItems * slider.itemT : slider.w;
        slider.maxW = maxItems ? maxItems * slider.itemT : slider.w;
        slider.itemW = slider.minW > slider.w ? (slider.w - slideMargin * minItems) / minItems : slider.maxW < slider.w ? (slider.w - slideMargin * maxItems) / maxItems : vars.itemWidth > slider.w ? slider.w : vars.itemWidth;
        slider.visible = Math.floor(slider.w / (slider.itemW + slideMargin));
        slider.move = vars.move > 0 && vars.move < slider.visible ? vars.move : slider.visible;
        slider.pagingCount = Math.ceil((slider.count - slider.visible) / slider.move + 1);
        slider.last = slider.pagingCount - 1;
        slider.limit = slider.pagingCount === 1 ? 0 : vars.itemWidth > slider.w ? (slider.itemW + slideMargin * 2) * slider.count - slider.w - slideMargin : (slider.itemW + slideMargin) * slider.count - slider.w;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function (pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (vars.controlNav && !slider.manualControls) {
        if (action === "add" && !carousel || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if (action === "remove" && !carousel || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (vars.directionNav) methods.directionNav.update();
    };

    slider.addSlide = function (obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        pos !== undefined ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        pos !== undefined ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      vars.added(slider);
    };
    slider.removeSlide = function (obj) {
      var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        vertical && reverse ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-", //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li", //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade", //String: Select your animation type, "fade" or "slide"
    easing: "swing", //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false, //{NEW} Boolean: Reverse the animation direction
    animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false, //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode  
    startAt: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true, //Boolean: Animate slider automatically
    slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600, //Integer: Set the speed of animations, in milliseconds
    initDelay: 0, //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false, //Boolean: Randomize slide order

    // Usability features
    pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    useCSS: true, //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true, //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false, //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous", //String: Set the text for the "previous" directionNav item
    nextText: "Next", //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true, //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false, //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false, //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false, //Boolean: Create pause/play dynamic element
    pauseText: "Pause", //String: Set the text for the "pause" pausePlay item
    playText: "Play", //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "", //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "", //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "", //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "", //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0, //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0, //{NEW} Integer: Margin between carousel items.
    minItems: 0, //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0, //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0, //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.

    // Callback API
    start: function () {}, //Callback: function(slider) - Fires when the slider loads the first slide
    before: function () {}, //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function () {}, //Callback: function(slider) - Fires after each slider animation completes
    end: function () {}, //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function () {}, //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function () {} //{NEW} Callback: function(slider) - Fires after a slide is removed


    //FlexSlider: Plugin Function
  };$.fn.flexslider = function (options) {
    options = options || {};
    if (typeof options === "object") {
      return this.each(function () {
        var $this = $(this),
            selector = options.selector ? options.selector : ".slides > li",
            $slides = $this.find(selector);

        if ($slides.length === 1) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play":
          $slider.play();break;
        case "pause":
          $slider.pause();break;
        case "next":
          $slider.flexAnimate($slider.getTarget("next"), true);break;
        case "prev":
        case "previous":
          $slider.flexAnimate($slider.getTarget("prev"), true);break;
        default:
          if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {

    $.fn.extend({

        lightninBox: function (options) {

            var settings = {
                padding: 20,
                margin: 20,
                gallery: true,
                loaderSource: 'img/loader.gif'
            };

            $.extend(settings, options);

            var trigger;
            var src;
            var $lightninBox;
            var $screen;
            var $loader;
            var $close;
            var gallery = {};
            var $content;

            function init() {

                size.init(options);
                build.init(function () {

                    size.setOriginal();
                    size.set(openLightninBox);
                });
            }

            function isImage() {

                return src.indexOf("jpg") > -1 || src.indexOf("gif") > -1 || src.indexOf("png") > -1 || src.indexOf("bmp") > -1;
            }

            window.browserInformation = {
                isOs: navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false,
                isAndroid: navigator.userAgent.indexOf('Mozilla/5.0') > -1 && navigator.userAgent.indexOf('Android ') > -1 && navigator.userAgent.indexOf('AppleWebKit') > -1 && navigator.userAgent.indexOf('Version') > -1
            };

            var build = {

                init: function (callback) {
                    if (!document.getElementById("lightninBox-screen")) {
                        $("body").append("<div id='lightninBox-screen' />");
                    }
                    if (!document.getElementById("lightninBox")) {
                        $("body").append("<div id='lightninBox'></div>");
                    }
                    if (!document.getElementById("lightninBox-loader")) {
                        $("body").append("<img id='lightninBox-loader' src='" + settings.loaderSource + "'></div>");
                    }
                    $screen = $("#lightninBox-screen");
                    $lightninBox = $("#lightninBox");
                    $lightninBox.append("<button class='lb-close'>Close</button>");
                    $loader = $("#lightninBox-loader");
                    $close = $lightninBox.children(".lb-close");

                    addCloseListeners();

                    var _build = isImage() ? this.image : this.player,
                        $slides = gallery.slides();

                    if ($slides && settings.gallery) gallery.init($slides);
                    $loader.addClass("lb-visible");
                    _build(function (_file) {
                        $loader.removeClass("lb-visible");
                        $content = $(_file);
                        $lightninBox.append($content);
                        callback();
                    });
                },

                image: function (callback) {
                    var _image = new Image();

                    _image.onload = function () {
                        _image.onload = null;
                        callback(_image);
                    };

                    _image.src = src;
                },

                player: function (callback) {
                    var _video = document.createElement("video");
                    _video.preload = "auto";
                    _video.autoplay = true;
                    _video.controls = true;

                    if (!window.browserInformation.isOs && !window.browserInformation.isAndroid) {
                        _video.onloadedmetadata = function () {
                            _video.onload = null;
                            callback(_video);
                        };
                    } else {
                        setTimeout(callback(_video), 0);
                    }

                    _video.src = src;
                }

            };

            var size = {

                padding: 0,
                margin: 0,
                outerMargin: 0,
                height: 0,
                width: 0,
                init: function (options) {

                    this.padding = settings.padding;
                    this.margin = settings.margin;
                    this.outerMargin = size.padding * 2 + size.margin * 2;
                },

                set: function (callback) {
                    if (!$screen.add($lightninBox).hasClass("lb-invisible")) $screen.add($lightninBox).addClass("lb-invisible");
                    this.height = this.original.height;
                    this.width = this.original.width;

                    this.setHeight();
                    this.setWidth();
                    $screen.add($lightninBox).removeClass("lb-invisible");
                    if (callback) callback();
                },

                setOriginal: function () {
                    $screen.add($lightninBox).addClass("lb-invisible");
                    size.original = {
                        height: $content.height(),
                        width: $content.width()
                    };
                },

                setHeight: function () {
                    if (this.height + this.outerMargin > window.innerHeight) {

                        var newHeight = window.innerHeight - this.outerMargin;
                        var percentage = Math.round(newHeight * 1 / this.height * 100) / 100;
                        var newWidth = this.width * percentage;

                        if (this.width * percentage + this.outerMargin > window.innerWidth) {
                            newWidth = window.innerWidth - this.outerMargin;
                            percentage = Math.round(newWidth * 1 / this.width * 100) / 100;
                            newHeight = this.height * percentage;
                        }

                        this.height = newHeight;
                        this.width = newWidth;

                        $content.css({
                            height: newHeight,
                            width: newWidth
                        });
                    }
                },

                setWidth: function () {
                    if (this.width + this.outerMargin > window.innerWidth) {

                        var newWidth = window.innerWidth - this.outerMargin;
                        var percentage = Math.round(newWidth * 1 / this.width * 100) / 100;
                        var newHeight = this.height * percentage;

                        if (this.height * percentage + this.outerMargin > window.innerHeight) {
                            newHeight = window.innerHeight - this.outerMargin;
                            percentage = Math.round(newHeight * 1 / this.height * 100) / 100;
                            newWidth = this.width * percentage;
                        }

                        this.height = newHeight;
                        this.width = newWidth;

                        $content.css({
                            height: newHeight,
                            width: newWidth
                        });
                    }
                }
            };

            function addCloseListeners() {

                $screen.add($close).on("click", function (e) {

                    e.preventDefault();

                    closeLightninBox();
                    $screen.off("click");
                    $close.off("click");
                });
            }

            function openLightninBox() {
                trigger.opened = 1;
                $screen.add($lightninBox).addClass("lb-visible");
            }

            function closeLightninBox() {
                trigger.opened = 0;
                $lightninBox.addClass("lb-lightbox-fade-out");
                $screen.addClass("lb-screen-fade-out");
                $lightninBox.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
                    $lightninBox.removeClass("lb-visible lb-lightbox-fade-out");
                    $lightninBox.off('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd').empty();
                    $screen.removeClass("lb-visible lb-screen-fade-out");
                });
            }

            gallery = {

                active: 0,

                init: function ($group) {

                    var _this = this;
                    _this.sources = [];
                    _this.$prev = $("<button class='lb-prev'></button>");
                    _this.$next = $("<button class='lb-next'></button>");

                    $group.each(function (i) {

                        _this.sources.push($(this).attr('href'));
                        if ($(this).attr('href') === src) _this.active = i;
                    });
                    _this.displayArrows();
                    $lightninBox.append(_this.$prev).append(_this.$next);

                    _this.$prev.on("click", $.proxy(_this.goToPrev, _this));
                    _this.$next.on("click", $.proxy(_this.goToNext, _this));
                },

                slides: function () {
                    _lbGroup = $(trigger).attr("data-lb-group");
                    if (!_lbGroup || $(".lightninBox[data-lb-group=" + _lbGroup + "]").length <= 1) return false;else return $(".lightninBox[data-lb-group=" + _lbGroup + "]");
                },

                goToPrev: function () {

                    if (this.active > 0) {
                        --this.active;
                        this.setSrc();
                    }
                },

                goToNext: function () {
                    if (this.active < this.sources.length - 1) {
                        ++this.active;
                        this.setSrc();
                    }
                },

                setSrc: function () {
                    var _this = this;
                    src = _this.sources[_this.active];
                    var _build = isImage() ? build.image : build.player;

                    _build(function (_file) {

                        $content.fadeOut(function () {
                            $content.remove();
                            $lightninBox.prepend($(_file));
                            $content = $lightninBox.find("img,video");
                            size.set(function () {
                                $content.hide().fadeIn();
                                _this.displayArrows();
                            });
                        });
                    });
                },

                displayArrows: function () {
                    if (this.active > 0) this.$prev.addClass("lb-enabled");else this.$prev.removeClass("lb-enabled");
                    if (this.active < this.sources.length - 1) this.$next.addClass("lb-enabled");else this.$next.removeClass("lb-enabled");
                }

            };

            $(this).on("click", function (e) {

                e.preventDefault();
                trigger = this;
                src = $(this).attr('href');
                trigger.opened = 0;
                init();
            });

            $(window).on("resize", function () {
                if (trigger.opened) {
                    size.set();
                }
            });
        }

    });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function ($) {
  $.fn.UItoTop = function (options) {
    var defaults = { text: 'To Top', min: 200, inDelay: 600, outDelay: 400, containerID: 'toTop', containerHoverID: 'toTopHover', scrollSpeed: 1000, easingType: 'linear' },
        settings = $.extend(defaults, options),
        containerIDhash = '#' + settings.containerID,
        containerHoverIDHash = '#' + settings.containerHoverID;$('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');$(containerIDhash).hide().on('click.UItoTop', function () {
      $('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType);$('#' + settings.containerHoverID, this).stop().animate({ 'opacity': 0 }, settings.inDelay, settings.easingType);return false;
    }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function () {
      $(containerHoverIDHash, this).stop().animate({ 'opacity': 1 }, 600, 'linear');
    }, function () {
      $(containerHoverIDHash, this).stop().animate({ 'opacity': 0 }, 700, 'linear');
    });$(window).scroll(function () {
      var sd = $(window).scrollTop();if (typeof document.body.style.maxHeight === "undefined") {
        $(containerIDhash).css({ 'position': 'absolute', 'top': sd + $(window).height() - 50 });
      }
      if (sd > settings.min) $(containerIDhash).fadeIn(settings.inDelay);else $(containerIDhash).fadeOut(settings.Outdelay);
    });
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! http://responsiveslides.com v1.54 by @viljamis */
(function (c, I, B) {
  c.fn.responsiveSlides = function (l) {
    var a = c.extend({ auto: !0, speed: 500, timeout: 4E3, pager: !1, nav: !1, random: !1, pause: !1, pauseControls: !0, prevText: "Previous", nextText: "Next", maxwidth: "", navContainer: "", manualControls: "", namespace: "rslides", before: c.noop, after: c.noop }, l);return this.each(function () {
      B++;var f = c(this),
          s,
          r,
          t,
          m,
          p,
          q,
          n = 0,
          e = f.children(),
          C = e.size(),
          h = parseFloat(a.speed),
          D = parseFloat(a.timeout),
          u = parseFloat(a.maxwidth),
          g = a.namespace,
          d = g + B,
          E = g + "_nav " + d + "_nav",
          v = g + "_here",
          j = d + "_on",
          w = d + "_s",
          k = c("<ul class='" + g + "_tabs " + d + "_tabs' />"),
          x = { "float": "left", position: "relative", opacity: 1, zIndex: 2 },
          y = { "float": "none", position: "absolute", opacity: 0, zIndex: 1 },
          F = function () {
        var b = (document.body || document.documentElement).style,
            a = "transition";if ("string" === typeof b[a]) return !0;s = ["Moz", "Webkit", "Khtml", "O", "ms"];var a = a.charAt(0).toUpperCase() + a.substr(1),
            c;for (c = 0; c < s.length; c++) if ("string" === typeof b[s[c] + a]) return !0;return !1;
      }(),
          z = function (b) {
        a.before(b);F ? (e.removeClass(j).css(y).eq(b).addClass(j).css(x), n = b, setTimeout(function () {
          a.after(b);
        }, h)) : e.stop().fadeOut(h, function () {
          c(this).removeClass(j).css(y).css("opacity", 1);
        }).eq(b).fadeIn(h, function () {
          c(this).addClass(j).css(x);a.after(b);n = b;
        });
      };a.random && (e.sort(function () {
        return Math.round(Math.random()) - 0.5;
      }), f.empty().append(e));e.each(function (a) {
        this.id = w + a;
      });f.addClass(g + " " + d);l && l.maxwidth && f.css("max-width", u);e.hide().css(y).eq(0).addClass(j).css(x).show();F && e.show().css({ "-webkit-transition": "opacity " + h + "ms ease-in-out", "-moz-transition": "opacity " + h + "ms ease-in-out", "-o-transition": "opacity " + h + "ms ease-in-out", transition: "opacity " + h + "ms ease-in-out" });if (1 < e.size()) {
        if (D < h + 100) return;if (a.pager && !a.manualControls) {
          var A = [];e.each(function (a) {
            a += 1;A += "<li><a href='#' class='" + w + a + "'>" + a + "</a></li>";
          });k.append(A);l.navContainer ? c(a.navContainer).append(k) : f.after(k);
        }a.manualControls && (k = c(a.manualControls), k.addClass(g + "_tabs " + d + "_tabs"));(a.pager || a.manualControls) && k.find("li").each(function (a) {
          c(this).addClass(w + (a + 1));
        });if (a.pager || a.manualControls) q = k.find("a"), r = function (a) {
          q.closest("li").removeClass(v).eq(a).addClass(v);
        };a.auto && (t = function () {
          p = setInterval(function () {
            e.stop(!0, !0);var b = n + 1 < C ? n + 1 : 0;(a.pager || a.manualControls) && r(b);z(b);
          }, D);
        }, t());m = function () {
          a.auto && (clearInterval(p), t());
        };a.pause && f.hover(function () {
          clearInterval(p);
        }, function () {
          m();
        });if (a.pager || a.manualControls) q.bind("click", function (b) {
          b.preventDefault();a.pauseControls || m();b = q.index(this);n === b || c("." + j).queue("fx").length || (r(b), z(b));
        }).eq(0).closest("li").addClass(v), a.pauseControls && q.hover(function () {
          clearInterval(p);
        }, function () {
          m();
        });if (a.nav) {
          g = "<a href='#' class='" + E + " prev'>" + a.prevText + "</a><a href='#' class='" + E + " next'>" + a.nextText + "</a>";l.navContainer ? c(a.navContainer).append(g) : f.after(g);var d = c("." + d + "_nav"),
              G = d.filter(".prev");d.bind("click", function (b) {
            b.preventDefault();b = c("." + j);if (!b.queue("fx").length) {
              var d = e.index(b);b = d - 1;d = d + 1 < C ? n + 1 : 0;z(c(this)[0] === G[0] ? b : d);if (a.pager || a.manualControls) r(c(this)[0] === G[0] ? b : d);a.pauseControls || m();
            }
          });
          a.pauseControls && d.hover(function () {
            clearInterval(p);
          }, function () {
            m();
          });
        }
      }if ("undefined" === typeof document.body.style.maxWidth && l.maxwidth) {
        var H = function () {
          f.css("width", "100%");f.width() > u && f.css("width", u);
        };H();c(I).bind("resize", function () {
          H();
        });
      }
    });
  };
})(jQuery, this, 0);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)

(function () {

    // Scroll Variables (tweakable)
    var defaultOptions = {

        // Scrolling Core
        frameRate: 150, // [Hz]
        animationTime: 1800, // [px]
        stepSize: 85, // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 8,
        pulseNormalize: 1,

        // Acceleration
        accelerationDelta: 20, // 20
        accelerationMax: 1, // 1

        // Keyboard Settings
        keyboardSupport: true, // option
        arrowScroll: 50, // [px]

        // Other
        touchpadSupport: true,
        fixedBackground: true,
        excluded: ""
    };

    var options = defaultOptions;

    // Other Variables
    var isExcluded = false;
    var isFrame = false;
    var direction = { x: 0, y: 0 };
    var initDone = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var deltaBuffer = [120, 120, 120];

    var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
        pageup: 33, pagedown: 34, end: 35, home: 36 };

    /***********************************************
     * SETTINGS
     ***********************************************/

    var options = defaultOptions;

    /***********************************************
     * INITIALIZE
     ***********************************************/

    /**
     * Tests if smooth scrolling is allowed. Shuts down everything if not.
     */
    function initTest() {

        var disableKeyboard = false;

        // disable keyboard support if anything above requested it
        if (disableKeyboard) {
            removeEvent("keydown", keydown);
        }

        if (options.keyboardSupport && !disableKeyboard) {
            addEvent("keydown", keydown);
        }
    }

    /**
     * Sets up scrolls array, determines if frames are involved.
     */
    function init() {

        if (!document.body) return;

        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;

        // check compat mode for root element
        root = document.compatMode.indexOf('CSS') >= 0 ? html : body;
        activeElement = body;

        initTest();
        initDone = true;

        // Checks if this script is running in a frame
        if (top != self) {
            isFrame = true;
        }

        /**
         * This fixes a bug where the areas left and right to 
         * the content does not trigger the onmousewheel event
         * on some pages. e.g.: html, body { height: 100% }
         */
        else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {

                html.style.height = 'auto';
                //setTimeout(refresh, 10);

                // clearfix
                if (root.offsetHeight <= windowHeight) {
                    var underlay = document.createElement("div");
                    underlay.style.clear = "both";
                    body.appendChild(underlay);
                }
            }

        // disable fixed background
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = "scroll";
            html.style.backgroundAttachment = "scroll";
        }
    }

    /************************************************
     * SCROLLING 
     ************************************************/

    var que = [];
    var pending = false;
    var lastScroll = +new Date();

    /**
     * Pushes scroll actions to the scrolling queue.
     */
    function scrollArray(elem, left, top, delay) {

        delay || (delay = 1000);
        directionCheck(left, top);

        if (options.accelerationMax != 1) {
            var now = +new Date();
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + 30 / elapsed) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor;
                }
            }
            lastScroll = +new Date();
        }

        // push a scroll command
        que.push({
            x: left,
            y: top,
            lastX: left < 0 ? 0.99 : -0.99,
            lastY: top < 0 ? 0.99 : -0.99,
            start: +new Date()
        });

        // don't act if there's a pending queue
        if (pending) {
            return;
        }

        var scrollWindow = elem === document.body;

        var step = function (time) {

            var now = +new Date();
            var scrollX = 0;
            var scrollY = 0;

            for (var i = 0; i < que.length; i++) {

                var item = que[i];
                var elapsed = now - item.start;
                var finished = elapsed >= options.animationTime;

                // scroll position: [0, 1]
                var position = finished ? 1 : elapsed / options.animationTime;

                // easing [optional]
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }

                // only need the difference
                var x = item.x * position - item.lastX >> 0;
                var y = item.y * position - item.lastY >> 0;

                // add this to the total scrolling
                scrollX += x;
                scrollY += y;

                // update last values
                item.lastX += x;
                item.lastY += y;

                // delete and step back if it's over
                if (finished) {
                    que.splice(i, 1);i--;
                }
            }

            // scroll left and top
            if (scrollWindow) {
                window.scrollBy(scrollX, scrollY);
            } else {
                if (scrollX) elem.scrollLeft += scrollX;
                if (scrollY) elem.scrollTop += scrollY;
            }

            // clean up if there's nothing left to do
            if (!left && !top) {
                que = [];
            }

            if (que.length) {
                requestFrame(step, elem, delay / options.frameRate + 1);
            } else {
                pending = false;
            }
        };

        // start a new queue of actions
        requestFrame(step, elem, 0);
        pending = true;
    }

    /***********************************************
     * EVENTS
     ***********************************************/

    /**
     * Mouse wheel handler.
     * @param {Object} event
     */
    function wheel(event) {

        if (!initDone) {
            init();
        }

        var target = event.target;
        var overflowing = overflowingAncestor(target);

        // use default if there's no overflowing
        // element or default action is prevented    
        if (!overflowing || event.defaultPrevented || isNodeName(activeElement, "embed") || isNodeName(target, "embed") && /\.pdf/i.test(target.src)) {
            return true;
        }

        var deltaX = event.wheelDeltaX || 0;
        var deltaY = event.wheelDeltaY || 0;

        // use wheelDelta if deltaX/Y is not available
        if (!deltaX && !deltaY) {
            deltaY = event.wheelDelta || 0;
        }

        // check if it's a touchpad scroll that should be ignored
        if (!options.touchpadSupport && isTouchpad(deltaY)) {
            return true;
        }

        // scale by step size
        // delta is 120 most of the time
        // synaptics seems to send 1 sometimes
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }

        scrollArray(overflowing, -deltaX, -deltaY);
        event.preventDefault();
    }

    /**
     * Keydown event handler.
     * @param {Object} event
     */
    function keydown(event) {

        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar;

        // do nothing if user is editing text
        // or using a modifier key (except shift)
        // or in a dropdown
        if (/input|textarea|select|embed/i.test(target.nodeName) || target.isContentEditable || event.defaultPrevented || modifier) {
            return true;
        }
        // spacebar should trigger button press
        if (isNodeName(target, "button") && event.keyCode === key.spacebar) {
            return true;
        }

        var shift,
            x = 0,
            y = 0;
        var elem = overflowingAncestor(activeElement);
        var clientHeight = elem.clientHeight;

        if (elem == document.body) {
            clientHeight = window.innerHeight;
        }

        switch (event.keyCode) {
            case key.up:
                y = -options.arrowScroll;
                break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar:
                // (+ shift)
                shift = event.shiftKey ? 1 : -1;
                y = -shift * clientHeight * 0.9;
                break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
            case key.pagedown:
                y = clientHeight * 0.9;
                break;
            case key.home:
                y = -elem.scrollTop;
                break;
            case key.end:
                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                y = damt > 0 ? damt + 10 : 0;
                break;
            case key.left:
                x = -options.arrowScroll;
                break;
            case key.right:
                x = options.arrowScroll;
                break;
            default:
                return true; // a key we don't care about
        }

        scrollArray(elem, x, y);
        event.preventDefault();
    }

    /**
     * Mousedown event only for updating activeElement
     */
    function mousedown(event) {
        activeElement = event.target;
    }

    /***********************************************
     * OVERFLOW
     ***********************************************/

    var cache = {}; // cleared out every once in while
    setInterval(function () {
        cache = {};
    }, 10 * 1000);

    var uniqueID = function () {
        var i = 0;
        return function (el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    }();

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--;) cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    function overflowingAncestor(el) {
        var elems = [];
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                    return setCache(elems, document.body); // scrolling root in WebKit
                }
            } else if (el.clientHeight + 10 < el.scrollHeight) {
                overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
                if (overflow === "scroll" || overflow === "auto") {
                    return setCache(elems, el);
                }
            }
        } while (el = el.parentNode);
    }

    /***********************************************
     * HELPERS
     ***********************************************/

    function addEvent(type, fn, bubble) {
        window.addEventListener(type, fn, bubble || false);
    }

    function removeEvent(type, fn, bubble) {
        window.removeEventListener(type, fn, bubble || false);
    }

    function isNodeName(el, tag) {
        return (el.nodeName || "").toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = x > 0 ? 1 : -1;
        y = y > 0 ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }

    var deltaBufferTimer;

    function isTouchpad(deltaY) {
        if (!deltaY) return;
        deltaY = Math.abs(deltaY);
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);

        var allEquals = deltaBuffer[0] == deltaBuffer[1] && deltaBuffer[1] == deltaBuffer[2];
        var allDivisable = isDivisible(deltaBuffer[0], 120) && isDivisible(deltaBuffer[1], 120) && isDivisible(deltaBuffer[2], 120);
        return !(allEquals || allDivisable);
    }

    function isDivisible(n, divisor) {
        return Math.floor(n / divisor) == n / divisor;
    }

    var requestFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback, element, delay) {
            window.setTimeout(callback, delay || 1000 / 60);
        };
    }();

    /***********************************************
     * PULSE
     ***********************************************/

    /**
     * Viscous fluid with a pulse for part and decay for the rest.
     * - Applies a fixed force over an interval (a damped acceleration), and
     * - Lets the exponential bleed away the velocity over a longer interval
     * - Michael Herf, http://stereopsis.com/stopping/
     */
    function pulse_(x) {
        var val, start, expx;
        // test
        x = x * options.pulseScale;
        if (x < 1) {
            // acceleartion
            val = x - (1 - Math.exp(-x));
        } else {
            // tail
            // the previous animation ended here:
            start = Math.exp(-1);
            // simple viscous drag
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + expx * (1 - start);
        }
        return val * options.pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;

        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }

    var isChrome = /chrome/i.test(window.navigator.userAgent);
    var isMouseWheelSupported = 'onmousewheel' in document;

    if (isMouseWheelSupported && isChrome) {
        addEvent("mousedown", mousedown);
        addEvent("mousewheel", wheel);
        addEvent("load", init);
    };
})();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) return e;
    }return -1;
  },
      e = [].slice;(function (t, e) {
    if (true) {
      return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (n) {
        return e(n, t);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;i = n(r);c = t.call(r, "ontouchstart") >= 0;s = { horizontal: {}, vertical: {} };f = 1;a = {};u = "waypoints-context-id";p = "resize.waypoints";y = "scroll.waypoints";v = 1;w = "waypoints-waypoint-ids";g = "waypoint";m = "waypoints";o = function () {
      function t(t) {
        var e = this;this.$element = t;this.element = t[0];this.didResize = false;this.didScroll = false;this.id = "context" + f++;this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };this.waypoints = { horizontal: {}, vertical: {} };t.data(u, this.id);a[this.id] = this;t.bind(y, function () {
          var t;if (!(e.didScroll || c)) {
            e.didScroll = true;t = function () {
              e.doScroll();return e.didScroll = false;
            };return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });t.bind(p, function () {
          var t;if (!e.didResize) {
            e.didResize = true;t = function () {
              n[m]("refresh");return e.didResize = false;
            };return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }t.prototype.doScroll = function () {
        var t,
            e = this;t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }n.each(t, function (t, r) {
          var i, o, l;l = [];o = r.newScroll > r.oldScroll;i = o ? r.forward : r.backward;n.each(e.waypoints[t], function (t, e) {
            var n, i;if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });l.sort(function (t, e) {
            return t.offset - e.offset;
          });if (!o) {
            l.reverse();
          }return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });return this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll };
      };t.prototype.refresh = function () {
        var t,
            e,
            r,
            i = this;r = n.isWindow(this.element);e = this.$element.offset();this.doScroll();t = { horizontal: { contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: r ? 0 : e.top, contextScroll: r ? 0 : this.oldScroll.y, contextDimension: r ? n[m]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;i = r.options.offset;l = r.offset;o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100);
              }
            }r.offset = o - e.contextOffset + e.contextScroll - i;if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return;
            }if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));return delete a[this.id];
        }
      };return t;
    }();l = function () {
      function t(t, e, r) {
        var i, o;r = n.extend({}, n.fn[g].defaults, r);if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;t = n[m]("viewportHeight");if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }return t - n(this).outerHeight();
          };
        }this.$element = t;this.element = t[0];this.axis = r.horizontal ? "horizontal" : "vertical";this.callback = r.handler;this.context = e;this.enabled = r.enabled;this.id = "waypoints" + v++;this.offset = null;this.options = r;e.waypoints[this.axis][this.id] = this;s[this.axis][this.id] = this;i = (o = t.data(w)) != null ? o : [];i.push(this.id);t.data(w, i);
      }t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }if (this.callback != null) {
          this.callback.apply(this.element, t);
        }if (this.options.triggerOnce) {
          return this.destroy();
        }
      };t.prototype.disable = function () {
        return this.enabled = false;
      };t.prototype.enable = function () {
        this.context.refresh();return this.enabled = true;
      };t.prototype.destroy = function () {
        delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty();
      };t.getWaypointsByElement = function (t) {
        var e, r;r = n(t).data(w);if (!r) {
          return [];
        }e = n.extend({}, s.horizontal, s.vertical);return n.map(r, function (t) {
          return e[t];
        });
      };return t;
    }();d = { init: function (t, e) {
        var r;if (e == null) {
          e = {};
        }if ((r = e.handler) == null) {
          e.handler = t;
        }this.each(function () {
          var t, r, i, s;t = n(this);i = (s = e.context) != null ? s : n.fn[g].defaults.context;if (!n.isWindow(i)) {
            i = t.closest(i);
          }i = n(i);r = a[i.data(u)];if (!r) {
            r = new o(i);
          }return new l(t, r, e);
        });n[m]("refresh");return this;
      }, disable: function () {
        return d._invoke(this, "disable");
      }, enable: function () {
        return d._invoke(this, "enable");
      }, destroy: function () {
        return d._invoke(this, "destroy");
      }, prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      }, next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      }, _traverse: function (t, e, i) {
        var o, l;if (t == null) {
          t = "vertical";
        }if (e == null) {
          e = r;
        }l = h.aggregate(e);o = [];this.each(function () {
          var e;e = n.inArray(this, l[t]);return i(o, e, l[t]);
        });return this.pushStack(o);
      }, _invoke: function (t, e) {
        t.each(function () {
          var t;t = l.getWaypointsByElement(this);return n.each(t, function (t, n) {
            n[e]();return true;
          });
        });return this;
      } };n.fn[g] = function () {
      var t, r;r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.");
      }
    };n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false };h = { refresh: function () {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      }, viewportHeight: function () {
        var t;return (t = r.innerHeight) != null ? t : i.height();
      }, aggregate: function (t) {
        var e, r, i;e = s;if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }if (!e) {
          return [];
        }r = { horizontal: [], vertical: [] };n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });i.sort(function (t, e) {
            return t.offset - e.offset;
          });r[t] = n.map(i, function (t) {
            return t.element;
          });return r[t] = n.unique(r[t]);
        });return r;
      }, above: function (t) {
        if (t == null) {
          t = r;
        }return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      }, below: function (t) {
        if (t == null) {
          t = r;
        }return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      }, left: function (t) {
        if (t == null) {
          t = r;
        }return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      }, right: function (t) {
        if (t == null) {
          t = r;
        }return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      }, enable: function () {
        return h._invoke("enable");
      }, disable: function () {
        return h._invoke("disable");
      }, destroy: function () {
        return h._invoke("destroy");
      }, extendFn: function (t, e) {
        return d[t] = e;
      }, _invoke: function (t) {
        var e;e = n.extend({}, s.vertical, s.horizontal);return n.each(e, function (e, n) {
          n[t]();return true;
        });
      }, _filter: function (t, e, r) {
        var i, o;i = a[n(t).data(u)];if (!i) {
          return [];
        }o = [];n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });o.sort(function (t, e) {
          return t.offset - e.offset;
        });return n.map(o, function (t) {
          return t.element;
        });
      } };n[m] = function () {
      var t, n;n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };return i.load(function () {
      return n[m]("refresh");
    });
  });
}).call(this);

/***/ })
/******/ ]);
//# sourceMappingURL=general.js.map