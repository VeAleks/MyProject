(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n\t<div class=\"container\">\n\t\t<app-main-nav></app-main-nav>\n\t\t<a href=\"#\" class=\"logo\">\n\t\t\t<img alt=\"{{logoAlt}}\" src=\"{{logoDesktop}}\" class=\"logo-desktop\">\n\t\t\t<img alt=\"{{logoAlt}}\" src=\"{{logoMobile}}\" class=\"logo-mobile\">\n\t\t</a>\n\t</div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearfix:after {\n  content: '';\n  display: block;\n  clear: both; }\n\n.ellipsis {\n  white-space: nowrap;\n  /* 1 */\n  text-overflow: ellipsis;\n  /* 2 */\n  overflow: hidden; }\n\nheader {\n  position: fixed;\n  width: 100%;\n  padding: 15px 0;\n  z-index: 100;\n  background: #fff;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15); }\n\n@media screen and (min-width: 1024px) {\n  header {\n    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.27);\n    position: static;\n    padding: 56px 0 52px; } }\n\n.container {\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  max-width: 980px;\n  margin: 0 auto; }\n\n@media (min-width: 1024px) {\n    .container {\n      justify-content: space-between; } }\n\n.logo {\n  display: inline-block; }\n\n@media (max-width: 1023px) {\n  .logo-desktop {\n    display: none; } }\n\n@media (min-width: 1024px) {\n  .logo-mobile {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.logoDesktop = 'assets/images/logo.png';
        this.logoMobile = 'assets/images/logo-m.png';
        this.logoAlt = 'assets/images/logo.png';
        this.flagHidden = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click)=\"toggleState($event)\" [@openerState]=\"navbarVisible\" class=\"menu-trigger\"><span></span></a>\n<nav [@navbarState]=\"navbarVisible\" (@navbarState.start)=\"animationStart($event)\"(@navbarState.done)=\"animationDone($event)\">\n\t<ul [@itemsAmation]=\"itemsVisible\">\n\t\t<li *ngFor=\"let menuItem of menuItems\"><a href=\"#\">{{menuItem}}</a></li>\n\t</ul>\n</nav>"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.clearfix:after {\n  content: '';\n  display: block;\n  clear: both; }\n\n.ellipsis {\n  white-space: nowrap;\n  /* 1 */\n  text-overflow: ellipsis;\n  /* 2 */\n  overflow: hidden; }\n\n@media (max-width: 1023px) {\n  nav {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: #fff;\n    overflow: hidden;\n    box-shadow: none;\n    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15); } }\n\n@media (min-width: 1024px) {\n  nav {\n    height: auto !important; } }\n\n.menu-trigger {\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 40px;\n  height: 24px;\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 0; }\n\n@media screen and (min-width: 1024px) {\n  .menu-trigger {\n    display: none; } }\n\n.menu-trigger:before, .menu-trigger:after,\n  .menu-trigger span {\n    content: '';\n    position: absolute;\n    width: 40px;\n    height: 4px;\n    background: #00c492;\n    transition: all 0.5s;\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.menu-trigger span {\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n.menu-trigger:before {\n    top: 0; }\n\n.menu-trigger:after {\n    bottom: 0; }\n\n.menu-trigger.active span {\n    opacity: 0; }\n\n.menu-trigger.active:before {\n    -webkit-transform: rotate(-45deg) translate(-6px, 8px);\n            transform: rotate(-45deg) translate(-6px, 8px); }\n\n.menu-trigger.active:after {\n    -webkit-transform: rotate(45deg) translate(-5px, -8px);\n            transform: rotate(45deg) translate(-5px, -8px); }\n\nul {\n  font-size: 20px;\n  text-align: center;\n  padding: 20px 0;\n  background: #fff; }\n\n@media (min-width: 1024px) {\n    ul {\n      opacity: 1 !important;\n      display: flex;\n      font-size: 17px;\n      padding: 0;\n      box-shadow: none;\n      background: none; } }\n\nul a {\n    padding: 10px 0;\n    display: block;\n    text-decoration: none;\n    color: #00c492; }\n\n@media (min-width: 1024px) {\n      ul a {\n        transition: color 0.3s linear, border 0.3s linear;\n        color: #595959;\n        border: solid transparent;\n        border-width: 3px 0;\n        -webkit-transform: translateY(0) !important;\n                transform: translateY(0) !important;\n        opacity: 1 !important; } }\n\nul a:hover {\n      color: #333;\n      border-bottom-color: #00c492; }\n\n@media (min-width: 1024px) {\n    ul li {\n      margin-right: 43px; } }\n"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
        this.menuItems = [
            'News',
            'Portfolio',
            'Information',
            'Journal',
            'Contact'
        ];
        this.navbarVisible = 'inactive';
        this.flagHidden = true;
        this.itemsVisible = 'inactive';
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    MainNavComponent.prototype.toggleState = function (e) {
        this.flagHidden = !this.flagHidden;
        this.navbarVisible = this.flagHidden ? 'inactive' : 'active';
    };
    MainNavComponent.prototype.animationDone = function (e) {
        if (e.toState === 'active') {
            this.itemsVisible = 'active';
        }
    };
    MainNavComponent.prototype.animationStart = function (e) {
        if (e.toState === 'inactive') {
            this.itemsVisible = 'inactive';
        }
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/main-nav/main-nav.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('navbarState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 500ms ease-in-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openerState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.5
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive <=> active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('itemsAmation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('li', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-30px)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('li', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(100, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)' }))
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('a', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('a', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms 100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-100px)' })))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksandr/Development/Dmitriy/Task4/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map