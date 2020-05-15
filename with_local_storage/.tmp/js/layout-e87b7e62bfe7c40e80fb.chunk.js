(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout"],{

/***/ "./src/app/pages/pages.module.js":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.js ***!
  \***************************************/
/*! exports provided: pagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagesModule", function() { return pagesModule; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.route */ "./src/app/pages/pages.route.js");
// core
 // local


var pagesModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('pages', []).run(_pages_route__WEBPACK_IMPORTED_MODULE_1__["default"]).name;

/***/ }),

/***/ "./src/app/pages/pages.route.js":
/*!**************************************!*\
  !*** ./src/app/pages/pages.route.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainRoute; });
// Inject
MainRoute.$inject = ['PortalRouteProvider'];
function MainRoute(PortalRouteProvider) {
  /**
   * States configuration for routes
   *
   * @memberof AdminCustomerRoute
   */
  var states = [// Root
  {
    name: 'app.pages',
    component: 'pages'
  }, {
    name: 'app.pages.home.**',
    url: '/home',
    lazyLoad: function lazyLoad($transition$) {
      var $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/pages/home/home.module.js")).then(function (mod) {
        return $ocLazyLoad.inject(mod.homeModule);
      })["catch"](function (err) {
        throw new Error('Ooops, something went wrong, ' + err);
      });
    }
  }];
  /**
   * States configuration for routes
   *
   * @memberof AdminCustomerRoute
   */

  PortalRouteProvider.configureStates(states, '/home');
}

/***/ })

}]);
//# sourceMappingURL=layout-e87b7e62bfe7c40e80fb.chunk.js.map