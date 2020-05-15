(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/pages/home/home.component.js":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_pullAt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/pullAt */ "./node_modules/lodash/pullAt.js");
/* harmony import */ var lodash_pullAt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pullAt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  template: __webpack_require__(/*! ./home.html */ "./src/app/pages/home/home.html"),
  controller: ContactController,
  controllerAs: 'vm'
});
ContactController.$inject = ['$localStorage'];

function ContactController($localStorage) {
  // init
  var vm = this;
  vm.$onInit = onInit;
  vm.addTodo = addTodo;
  vm.remaining = remaining;
  vm.onRemove = onRemove;
  vm.filterByStatus = filterByStatus;
  vm.todoListForm = null;
  vm.todoList = [];

  function onInit() {
    vm.todoList = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()($localStorage, 'todoList') || [];
  }

  function addTodo() {
    var value = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(vm.todoListForm, 'text.value', null);

    if (!value) {
      return sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
        title: 'Error',
        text: 'Text cannot be empty!',
        type: 'error',
        html: true,
        showConfirmButton: false
      });
    }

    vm.todoList.push({
      text: value,
      completed: false
    });
    vm.todoListForm.reset();
  }

  function remaining() {
    return lodash_size__WEBPACK_IMPORTED_MODULE_3___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_2___default()(lodash_clone__WEBPACK_IMPORTED_MODULE_1___default()(vm.todoList), {
      completed: true
    }));
  }

  function onRemove(index) {
    if (confirm('Are you sure you want to delete?')) {
      lodash_pullAt__WEBPACK_IMPORTED_MODULE_0___default()(vm.todoList, index);
    }
  }

  function filterByStatus(completed) {
    return lodash_filter__WEBPACK_IMPORTED_MODULE_2___default()(lodash_clone__WEBPACK_IMPORTED_MODULE_1___default()(vm.todoList), {
      completed: completed
    });
  }
}

/***/ }),

/***/ "./src/app/pages/home/home.html":
/*!**************************************!*\
  !*** ./src/app/pages/home/home.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container todo-list-container\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card px-3\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<h4 class=\"card-title\">Awesome Todo list</h4>\n\t\t\t\t<div class=\"add-items d-flex\">\n\t\t\t\t\t<form name=\"vm.todoListForm\" class=\"form-horizontal animated fadeIn d-flex form-todo-list\" novalidate>\n\t\t\t\t\t\t<input name=\"text\" type=\"text\" ng-model=\"vm.todoListForm.text.value\" class=\"form-control todo-list-input\" placeholder=\"What do you need to do today?\">\n\t\t\t\t\t\t<button class=\"add btn btn-primary font-weight-bold todo-list-add-btn\" ng-click=\"vm.addTodo()\">Add</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\n\t\t\t\t<div ng-if=\"vm.filterByStatus(false).length\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h3>New: </h3>\n\t\t\t\t\t<div class=\"input-group mb-3\" ng-repeat=\"(index, todo) in vm.filterByStatus(false)\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<div class=\"input-group-text\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"todo.completed\" aria-label=\"Checkbox for following text input\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control completed-{{todo.completed}}\" ng-model=\"todo.text\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-remove\" ng-click=\"vm.onRemove(index)\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div ng-if=\"vm.filterByStatus(true).length\">\n\t\t\t\t\t<hr>\n\n\t\t\t\t\t<h3>Completed: </h3>\n\t\t\t\t\t<div class=\"input-group mb-3\" ng-repeat=\"(index, todo) in vm.filterByStatus(true)\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<div class=\"input-group-text\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"todo.completed\" aria-label=\"Checkbox for following text input\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control completed-{{todo.completed}}\" ng-model=\"todo.text\">\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-remove\" ng-click=\"vm.onRemove(index)\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }),

/***/ "./src/app/pages/home/home.module.js":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.js ***!
  \*******************************************/
/*! exports provided: homeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeModule", function() { return homeModule; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.route */ "./src/app/pages/home/home.route.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.js");
// core
 // local



var homeModule = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('contact', []) // Routing
.run(_home_route__WEBPACK_IMPORTED_MODULE_1__["default"]) // Components
.component('home', _home_component__WEBPACK_IMPORTED_MODULE_2__["default"]).name;

/***/ }),

/***/ "./src/app/pages/home/home.route.js":
/*!******************************************!*\
  !*** ./src/app/pages/home/home.route.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appRun; });
appRun.$inject = ['PortalRouteProvider'];
function appRun(PortalRouteProvider) {
  PortalRouteProvider.configureStates(getStates());
}

function getStates() {
  return [{
    name: 'app.home',
    url: '/home',
    component: 'home',
    data: {
      title: 'Home'
    }
  }];
}

/***/ })

}]);
//# sourceMappingURL=1-8ba12d8096ed28c47b39.chunk.js.map