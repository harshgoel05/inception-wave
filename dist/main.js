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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "<app-navbar></app-navbar>\n<div class= \"main\">\n<router-outlet></router-outlet>\n<!-- <app-whoarewe></app-whoarewe>\n<app-services></app-services>\n<app-gallery></app-gallery>\n<app-communities></app-communities> -->\n<app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.main {\n  width: 100%;\n  overflow: hidden; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _whoarewe_whoarewe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./whoarewe/whoarewe.component */ "./src/app/whoarewe/whoarewe.component.ts");
/* harmony import */ var _communities_communities_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./communities/communities.component */ "./src/app/communities/communities.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gallerypage/gallerypage.component */ "./src/app/gallerypage/gallerypage.component.ts");
/* harmony import */ var _kritarth_kritarth_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kritarth/kritarth.component */ "./src/app/kritarth/kritarth.component.ts");
/* harmony import */ var _megha_megha_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./megha/megha.component */ "./src/app/megha/megha.component.ts");
/* harmony import */ var _kartik_kartik_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kartik/kartik.component */ "./src/app/kartik/kartik.component.ts");
/* harmony import */ var _gautam_gautam_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gautam/gautam.component */ "./src/app/gautam/gautam.component.ts");
/* harmony import */ var _gagan_gagan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gagan/gagan.component */ "./src/app/gagan/gagan.component.ts");
/* harmony import */ var _divi_divi_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./divi/divi.component */ "./src/app/divi/divi.component.ts");
/* harmony import */ var _gaurav_gaurav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./gaurav/gaurav.component */ "./src/app/gaurav/gaurav.component.ts");
/* harmony import */ var _shivang_shivang_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shivang/shivang.component */ "./src/app/shivang/shivang.component.ts");
/* harmony import */ var _vishal_vishal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./vishal/vishal.component */ "./src/app/vishal/vishal.component.ts");
/* harmony import */ var _rakshita_rakshita_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rakshita/rakshita.component */ "./src/app/rakshita/rakshita.component.ts");
/* harmony import */ var _kriti_kriti_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./kriti/kriti.component */ "./src/app/kriti/kriti.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
                _whoarewe_whoarewe_component__WEBPACK_IMPORTED_MODULE_14__["WhoareweComponent"],
                _communities_communities_component__WEBPACK_IMPORTED_MODULE_15__["CommunitiesComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"],
                _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_17__["GallerypageComponent"],
                _kritarth_kritarth_component__WEBPACK_IMPORTED_MODULE_18__["KritarthComponent"],
                _megha_megha_component__WEBPACK_IMPORTED_MODULE_19__["MeghaComponent"],
                _kartik_kartik_component__WEBPACK_IMPORTED_MODULE_20__["KartikComponent"],
                _gautam_gautam_component__WEBPACK_IMPORTED_MODULE_21__["GautamComponent"],
                _gagan_gagan_component__WEBPACK_IMPORTED_MODULE_22__["GaganComponent"],
                _divi_divi_component__WEBPACK_IMPORTED_MODULE_23__["DiviComponent"],
                _gaurav_gaurav_component__WEBPACK_IMPORTED_MODULE_24__["GauravComponent"],
                _shivang_shivang_component__WEBPACK_IMPORTED_MODULE_25__["ShivangComponent"],
                _vishal_vishal_component__WEBPACK_IMPORTED_MODULE_26__["VishalComponent"],
                _rakshita_rakshita_component__WEBPACK_IMPORTED_MODULE_27__["RakshitaComponent"],
                _kriti_kriti_component__WEBPACK_IMPORTED_MODULE_28__["KritiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallerypage/gallerypage.component */ "./src/app/gallerypage/gallerypage.component.ts");
/* harmony import */ var _kritarth_kritarth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kritarth/kritarth.component */ "./src/app/kritarth/kritarth.component.ts");
/* harmony import */ var _kartik_kartik_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kartik/kartik.component */ "./src/app/kartik/kartik.component.ts");
/* harmony import */ var _gaurav_gaurav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gaurav/gaurav.component */ "./src/app/gaurav/gaurav.component.ts");
/* harmony import */ var _megha_megha_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./megha/megha.component */ "./src/app/megha/megha.component.ts");
/* harmony import */ var _divi_divi_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./divi/divi.component */ "./src/app/divi/divi.component.ts");
/* harmony import */ var _gagan_gagan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gagan/gagan.component */ "./src/app/gagan/gagan.component.ts");
/* harmony import */ var _gautam_gautam_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gautam/gautam.component */ "./src/app/gautam/gautam.component.ts");
/* harmony import */ var _shivang_shivang_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shivang/shivang.component */ "./src/app/shivang/shivang.component.ts");
/* harmony import */ var _vishal_vishal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vishal/vishal.component */ "./src/app/vishal/vishal.component.ts");
/* harmony import */ var _rakshita_rakshita_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rakshita/rakshita.component */ "./src/app/rakshita/rakshita.component.ts");
/* harmony import */ var _kriti_kriti_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kriti/kriti.component */ "./src/app/kriti/kriti.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__["NucleoiconsComponent"] },
    { path: 'gallery', component: _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_9__["GallerypageComponent"] },
    { path: 'kritarth', component: _kritarth_kritarth_component__WEBPACK_IMPORTED_MODULE_10__["KritarthComponent"] },
    { path: 'kartik', component: _kartik_kartik_component__WEBPACK_IMPORTED_MODULE_11__["KartikComponent"] },
    { path: 'gaurav', component: _gaurav_gaurav_component__WEBPACK_IMPORTED_MODULE_12__["GauravComponent"] },
    { path: 'megha', component: _megha_megha_component__WEBPACK_IMPORTED_MODULE_13__["MeghaComponent"] },
    { path: 'arshia', component: _divi_divi_component__WEBPACK_IMPORTED_MODULE_14__["DiviComponent"] },
    { path: 'gagan', component: _gagan_gagan_component__WEBPACK_IMPORTED_MODULE_15__["GaganComponent"] },
    { path: 'pratik', component: _gautam_gautam_component__WEBPACK_IMPORTED_MODULE_16__["GautamComponent"] },
    { path: 'shivang', component: _shivang_shivang_component__WEBPACK_IMPORTED_MODULE_17__["ShivangComponent"] },
    { path: 'vishal', component: _vishal_vishal_component__WEBPACK_IMPORTED_MODULE_18__["VishalComponent"] },
    { path: 'rakshita', component: _rakshita_rakshita_component__WEBPACK_IMPORTED_MODULE_19__["RakshitaComponent"] },
    { path: 'kriti', component: _kriti_kriti_component__WEBPACK_IMPORTED_MODULE_20__["KritiComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/communities/communities.component.html":
/*!********************************************************!*\
  !*** ./src/app/communities/communities.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main\">\n  <div class=\"text-center\">\n      <hr>\n      <h1 class=\"mainheader \">Join out Communities!</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5 justify-content-center align-self-center\">\n      <img class=\"img-responsive img-fluid\" src=\"../../assets/img/net2.png\" width=100%>\n    </div>\n    <div class=\"col-7 justify-content-center align-self-center\">\n      <div class=\"text-container \">\n      <p>Inception Wave took the initiative to bring like minded people together and provide them a common \n         platform to help them learn from each other and grow as an individual. We started with 5 communities for Artists, \n          Writers, Photographers etc. and now we have more than 2000 people in 23 communities combined.</p>\n      </div>\n    </div>\n  </div>\n      <div class=\"buttons-container text-center\">\n        <button type=\"button\" class=\"btn btn-default\">Entrepreneurship</button>\n        <button type=\"button\" class=\"btn btn-success\">Automobile Industry</button>\n        <button type=\"button\" class=\"btn btn-info\">Fashionpreneurs</button>\n        <button type=\"button\" class=\"btn btn-warning\">Daily Motivation</button>\n        <button type=\"button\" class=\"btn btn-danger\">Movies/TV Series Enthusiasts</button>\n      </div>\n\n</div>\n<!--\nhttps://chat.whatsapp.com/JFRCV4No4JzGTOH9fbcTtZ\nhttps://chat.whatsapp.com/GBSaG3dLBTvEWuz1kuL8o6\nhttps://chat.whatsapp.com/FKbmCegUFBSJcPohuY3nIr\nhttps://chat.whatsapp.com/BsOQxKiA9ar8PeVvSQzOYL\nhttps://chat.whatsapp.com/DOUE6ZoLy43CmviPBrOEXb\n\nTo join the other, previously formed communities, ping on 7566194750. --> -->"

/***/ }),

/***/ "./src/app/communities/communities.component.scss":
/*!********************************************************!*\
  !*** ./src/app/communities/communities.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/communities/communities.component.ts":
/*!******************************************************!*\
  !*** ./src/app/communities/communities.component.ts ***!
  \******************************************************/
/*! exports provided: CommunitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitiesComponent", function() { return CommunitiesComponent; });
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

var CommunitiesComponent = /** @class */ (function () {
    function CommunitiesComponent() {
    }
    CommunitiesComponent.prototype.ngOnInit = function () {
    };
    CommunitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-communities',
            template: __webpack_require__(/*! ./communities.component.html */ "./src/app/communities/communities.component.html"),
            styles: [__webpack_require__(/*! ./communities.component.scss */ "./src/app/communities/communities.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommunitiesComponent);
    return CommunitiesComponent;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"tim-title\">\n                <h3>Buttons\n                    <br/>\n                    <small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                </div>\n            </div>\n        </div>\n            <br/>\n        <div class=\"tim-title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <br/>\n        <div class=\"tim-title\">\n            <h3>Inputs</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-success\">\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-danger\">\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    Unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                    Checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                    Disabled unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                    Disabled checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                    Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n                    Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n                    Disabled Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n                    Disabled Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Toggle Buttons</h3>\n                </div>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\">\n                </bSwitch>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\"\n                    [(ngModel)]=\"state_default\"> Toggle is off\n                </bSwitch>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Sliders</h3>\n                </div>\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n                <br>\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
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

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-basicelements></app-basicelements>\n<app-navigation></app-navigation>\n<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Progress Bar</h3>\n                    <br/>\n                </div>\n                <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n                <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n                <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Pagination</h3>\n                    <br/>\n                </div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                <br/>\n                <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Navigation Tabs</h3>\n                </div>\n\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Home\">\n                                <ng-template ngbTabContent>\n                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Profile\">\n                                <ng-template ngbTabContent>\n                                    <p>Here is your profile.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Messages\">\n                                <ng-template ngbTabContent>\n                                    <p>Here are your messages.</p>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Labels</h3>\n                </div>\n                <span class=\"label label-default\">Default</span>\n                <span class=\"label label-primary\">Primary</span>\n                <span class=\"label label-info\">Info</span>\n                <span class=\"label label-success\">Success</span>\n                <span class=\"label label-warning\">Warning</span>\n                <span class=\"label label-danger\">Danger</span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section section-notifications\" id=\"notifications\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Notification</h3>\n        </div>\n    </div>\n    <app-notification></app-notification>\n</div>\n<app-typography></app-typography>\n<div class=\"section javascript-components\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Angular Native Components</h2>\n        </div>\n        <div class=\"row\" id=\"modals\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Modal</h3>\n                </div>\n                <app-modal-component></app-modal-component>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Popovers</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                    on right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                    on top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                    on left\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                    on bottom\n                </button>\n\n            </div>\n            <br/>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Datepicker</h3>\n                </div>\n                <div class=\"row\">\n                    <div class='col-sm-6'>\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group date\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\n                                    <div class=\"input-group-append\">\n                                        <span class=\"glyphicon glyphicon-calendar input-group-text\">\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Tooltips</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                   on right\n               </button>\n               <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                  on left\n               </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                   on top\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                   on bottom\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section\" id=\"carousel\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Carousel</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <div class=\"card page-carousel\">\n                    <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere else</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Here it is</p>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
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

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_6__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n        <div class=\"container\">\n            <ng-container *ngIf=\"alert.icon\">\n                <i class=\"nc-icon {{alert.icon}}\"></i>\n            </ng-container>\n\n            {{ alert.message }}\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n            </button>\n        </div>\n    </ngb-alert>\n</p>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
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

var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__(/*! ./nucleoicons.component.html */ "./src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/divi/divi.component.html":
/*!******************************************!*\
  !*** ./src/app/divi/divi.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/arshia.jpeg?alt=media&token=5d9b4685-20a3-48b0-8357-a74afc58ab87\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Arshia Agrawal<br /></h4>\n                    <h6 class=\"description\">Human Resource Manager</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>The job of management is not to select the best ideas, it is to create a system that allows for the best ideas to emerge.\n                            Keeping this in mind, with her keen interest in management, she brings out perfection in people around her. That being said, she is also an avid reader and a trained singer. When she isn't working, you'll find her scrounging through the kitchen like a goblin. \n                            Her mantra : Stay Hungry, Stay Foolish! ✌️ </p>\n                    <br />\n                 <a href=\"https://www.facebook.com/arshiaagrawal98\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/arshu.01/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/arshia-agrawal-9b1384159\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/divi/divi.component.scss":
/*!******************************************!*\
  !*** ./src/app/divi/divi.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/divi/divi.component.ts":
/*!****************************************!*\
  !*** ./src/app/divi/divi.component.ts ***!
  \****************************************/
/*! exports provided: DiviComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiviComponent", function() { return DiviComponent; });
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

var DiviComponent = /** @class */ (function () {
    function DiviComponent() {
    }
    DiviComponent.prototype.ngOnInit = function () {
    };
    DiviComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-divi',
            template: __webpack_require__(/*! ./divi.component.html */ "./src/app/divi/divi.component.html"),
            styles: [__webpack_require__(/*! ./divi.component.scss */ "./src/app/divi/divi.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DiviComponent);
    return DiviComponent;
}());



/***/ }),

/***/ "./src/app/gagan/gagan.component.html":
/*!********************************************!*\
  !*** ./src/app/gagan/gagan.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://scontent-bom1-2.xx.fbcdn.net/v/t31.0-8/26170620_1581515925274011_7486114019938893198_o.jpg?_nc_cat=104&_nc_oc=AQmaLUp2cLp-7MT95y_7nytalvOdGKAM7mDnqb8B5l5OZJEmgvJsj97EbWwG7X0ZABA&_nc_ht=scontent-bom1-2.xx&oh=59e995a671240e2f960e354611da132d&oe=5E2B6660\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Gagan Goel<br /></h4>\n                    <h6 class=\"description\">Manager</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Gagan Goel is one of the co-founders of Inception Wave Pvt. Ltd. He is a member of our technical team, and have an exemplary knowledge of application development, Java, JavaScript, Ionic Framework. \n                            Gagan is also the content writer at Inception Wave. A little twisted with words but never short of them.\n                            He plays Table Tennis and has a great zeal for cricket. In his spare time, he loves to sketch.</p>\n                    <br />\n                 <a href=\"https://www.facebook.com/gagan.goel.967\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/kuzuri97/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/gagan-goel-9115a0158/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gagan/gagan.component.scss":
/*!********************************************!*\
  !*** ./src/app/gagan/gagan.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gagan/gagan.component.ts":
/*!******************************************!*\
  !*** ./src/app/gagan/gagan.component.ts ***!
  \******************************************/
/*! exports provided: GaganComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaganComponent", function() { return GaganComponent; });
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

var GaganComponent = /** @class */ (function () {
    function GaganComponent() {
    }
    GaganComponent.prototype.ngOnInit = function () {
    };
    GaganComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gagan',
            template: __webpack_require__(/*! ./gagan.component.html */ "./src/app/gagan/gagan.component.html"),
            styles: [__webpack_require__(/*! ./gagan.component.scss */ "./src/app/gagan/gagan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GaganComponent);
    return GaganComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
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

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/gallerypage/gallerypage.component.html":
/*!********************************************************!*\
  !*** ./src/app/gallerypage/gallerypage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  gallerypage works!\n</p>\n"

/***/ }),

/***/ "./src/app/gallerypage/gallerypage.component.scss":
/*!********************************************************!*\
  !*** ./src/app/gallerypage/gallerypage.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallerypage/gallerypage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gallerypage/gallerypage.component.ts ***!
  \******************************************************/
/*! exports provided: GallerypageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerypageComponent", function() { return GallerypageComponent; });
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

var GallerypageComponent = /** @class */ (function () {
    function GallerypageComponent() {
    }
    GallerypageComponent.prototype.ngOnInit = function () {
    };
    GallerypageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallerypage',
            template: __webpack_require__(/*! ./gallerypage.component.html */ "./src/app/gallerypage/gallerypage.component.html"),
            styles: [__webpack_require__(/*! ./gallerypage.component.scss */ "./src/app/gallerypage/gallerypage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GallerypageComponent);
    return GallerypageComponent;
}());



/***/ }),

/***/ "./src/app/gaurav/gaurav.component.html":
/*!**********************************************!*\
  !*** ./src/app/gaurav/gaurav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://infinity-effects.firebaseapp.com/gp2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Gaurav Prasad<br /></h4>\n                    <h6 class=\"description\">Chief Technical Officer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Gaurav Prasad is an experienced mobile application developer with a demonstrated history of working in the Information Technology and Services domain. He is skilled in C++, SendGrid, Android, Mean Stack, and Java and has worked in several projects. Being a strong engineering professional and a student pursuing his B.Tech in Computer Science, he stands out from the crowd and is an integral part of team. </p>\n                    <br />\n                 <a href=\"https://www.facebook.com/gaurav.prasad.77\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/_.gaurav11._/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/gaurav-prasad-946307161/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gaurav/gaurav.component.scss":
/*!**********************************************!*\
  !*** ./src/app/gaurav/gaurav.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gaurav/gaurav.component.ts":
/*!********************************************!*\
  !*** ./src/app/gaurav/gaurav.component.ts ***!
  \********************************************/
/*! exports provided: GauravComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GauravComponent", function() { return GauravComponent; });
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

var GauravComponent = /** @class */ (function () {
    function GauravComponent() {
    }
    GauravComponent.prototype.ngOnInit = function () {
    };
    GauravComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gaurav',
            template: __webpack_require__(/*! ./gaurav.component.html */ "./src/app/gaurav/gaurav.component.html"),
            styles: [__webpack_require__(/*! ./gaurav.component.scss */ "./src/app/gaurav/gaurav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GauravComponent);
    return GauravComponent;
}());



/***/ }),

/***/ "./src/app/gautam/gautam.component.html":
/*!**********************************************!*\
  !*** ./src/app/gautam/gautam.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/pratik.jpeg?alt=media&token=8c16ede7-5778-4f88-8080-1a622b773746\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Pratik Gupta<br /></h4>\n                    <h6 class=\"description\">Marketeer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>He has keen interest in working with IOT related projects. He is well versed in C,C++ and is a Machine Learning enthusiast.He loves to play cricket and likes to listen to music in his spare time. He is a travel freak and always ready to learn new skills and explore new horizons.</p>\n                    <br />\n                 <a href=\"https://www.facebook.com/pratikgupta58367\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/pratik__g07/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/pratik-g-141180119\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gautam/gautam.component.scss":
/*!**********************************************!*\
  !*** ./src/app/gautam/gautam.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gautam/gautam.component.ts":
/*!********************************************!*\
  !*** ./src/app/gautam/gautam.component.ts ***!
  \********************************************/
/*! exports provided: GautamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GautamComponent", function() { return GautamComponent; });
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

var GautamComponent = /** @class */ (function () {
    function GautamComponent() {
    }
    GautamComponent.prototype.ngOnInit = function () {
    };
    GautamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gautam',
            template: __webpack_require__(/*! ./gautam.component.html */ "./src/app/gautam/gautam.component.html"),
            styles: [__webpack_require__(/*! ./gautam.component.scss */ "./src/app/gautam/gautam.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GautamComponent);
    return GautamComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/backgroundimage1.jpg')\">\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <img class=\"companylogo\" src=\"assets/img/logo.png\" alt=\"logo\">\n                    <h2 class=\"presentation-title\">Inception Wave</h2>\n                </div>\n                <h2 class=\"presentation-subtitle text-center\">Ameliorating Work Culture</h2>\n            </div>\n        </div>\n    </div>\n</div>   \n\n<div  class=\"row whoarewerow\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-3 wecontainer\">\n        <h3 class=\"whoarewe1 \" float=\"left\">Who are We?</h3> \n    </div>\n    <div class=\"col-8\">\n        <p class=\"right\" float=\"right\">\n            Inception Wave is an Indian software company,\n            currently working on developing a social media platform to bring together like minded \n            individuals and help them improve their productivity by collaborating and achieving common \n            goals and milestones. Inception Wave was founded in December '18 and got incorporated in February '19.\n             Currently, 10 exceptionally motivated individuals are working day and night to bring the company's vision to reality.\n        </p>\n    </div>\n  </div>\n\n  <div style=\"background:black\">\n    <div class=row>\n        <div class=\"col-md-12\">\n            <br>\n            <p style=\"text-align: center;color: white;font-size: 38px;\">\n             <b>Our Projects </b>\n            </p>\n        </div>\n    </div>\n    <div style=\"padding:5%\"  class=\"row\">\n        <div  class=\"col-md-4\">\n            <div style=\"padding:0px\" class=\" card team-player\">\n                    <h4 style=\"text-align: center\" class=\"category text-primary\">SRMpedia</h4>                                \n                <div  class=\"card-body\">\n                    <p  class=\"description\" style=\"color:black;font-size: 15px\">College is the beginning of a new chapter in our lives. We step out of our homes, our cocoons into this entirely new world, were we try to find a place for ourselves. New place, new faces and a new language can often be intimidating. SRMIST being a place with a huge student population and a vast campus in the city of Chennai provides you with a plethora of activities you could indulge in but also leaves the students feeling overwhelmed and confused. Struggling to find the way is very common among the students and in addition, the language being new makes things harder.\n                        We bring you SRMpedia, an app or rather your own personal guide which will be an answer to all your problems.\n                    </p>                               \n                </div>\n            </div>\n        </div>\n <div  class=\"col-md-4\">\n                <div style=\"padding:0px\"  class=\" card team-player\">\n                        <h4 style=\"text-align: center\" class=\"category text-primary\">Grapido</h4>\n\n                    \n                    <div  class=\"card-body\">\n                    <p  class=\"description\" style=\"color:black;font-size: 15px\">Ever find yourself stuck in a situation where you don’t really know how to proceed in life to follow your passion? Ever wondered where you can find yourself a good mentor whom you can look upto? Or have you ever thought of finding people like you to help you do wonders !!\n                        We are pretty sure that once in a while, you do. We did too !\n                        \n                        Grapido is India’s very first spatially optimised growth-oriented social media platform to help you connect with like minded individuals around you, work together to nurture your skills and follow your passion to achieve common goals and milestones. It is a platform where you can showcase your talent and learn from others at the same time.</p>\n        </div>\n                </div>\n            </div>\n            <div  class=\"col-md-4\">\n                    <div style=\"padding:0px\"  class=\" card team-player\">\n                            <h4 style=\"text-align: center\" class=\"category text-primary\">Swift Care</h4>\n    \n                        \n                        <div  class=\"card-body\">\n                        <p  class=\"description\" style=\"color:black;font-size: 15px\">We aim to automate the medical out patient cycle by removing waiting queues for the patients needing medical attention and/or to get victim's medical information like allergies, blood group in case of an accident or any other emergency.\n                                This application provides an interface between the doctor and a patient and keeps record of patients' medical history makeing it convenient for doctors to keep track and store transfers and transaction history. This app also finds patterns among the diseases along with location data and plots using heatmap if a disease is spreading violently and notifies users in those locations suggesting the precautions to take. </p>\n                    </div>\n                    </div>\n       \n        \n    </div>\n    </div>\n  </div>\n\n  <div class=\"services\">\n    <div class=\"text-center\">\n          <h2 class=\"ourservices\">OUR SERVICES</h2>\n      <div  class=row>\n        <div class=\"col\">\n          <img class=\"servicesimage1\" src=\"../../assets/img/vectors/web.png\">\n        </div>\n        <div class=\"col\">\n          <img class=\"servicesimage2\" src=\"../../assets/img/vectors/app.png\" height=\"50%\" >\n        </div>\n        <div class=\"col\">\n          <img class=\"servicesimage3\" src=\"../../assets/img/vectors/buisness.png\" >\n        </div>\n      </div>\n  \n      <div class=\"row\">\n          <div class=\"col\">\n            <h3 class=\"servehead\">Web Development</h3>\n          </div>\n          <div class=\"col\">\n            <h3 class=\"servehead\">Application Development</h3>\n          </div>\n          <div class=\"col\">\n            <h3 class=\"servehead\">Marketing & Buisness Solutions</h3>\n          </div>\n      </div>\n  </div>\n  </div>\n\n\n  <div class=\"section\" id=\"carousel\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <div class=\"card page-carousel\">\n                    <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img class=\"gallery-img\"  src=\"../../assets/img/1.jpeg\" alt=\"Random first slide\">\n                            <!-- <div class=\"carousel-caption\">\n                                <p>Somewhere</p>\n                            </div> -->\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img class=\"gallery-img\" src=\"../../assets/img/2.jpeg\" alt=\"Random second slide\">\n                            <!-- <div class=\"carousel-caption\">\n                                <p>Somewhere else</p>\n                            </div> -->\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img class=\"gallery-img\" src=\"../../assets/img/3.jpeg\" alt=\"Random third slide\">\n                            <!-- <div class=\"carousel-caption\">\n                                <p>Here it is</p>\n                            </div> -->\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img class=\"gallery-img\" src=\"../../assets/img/4.jpeg\" alt=\"Random third slide\">\n                            <!-- <div class=\"carousel-caption\">\n                                <p>Here it is</p>\n                            </div> -->\n                        </ng-template>\n                        <ng-template ngbSlide>\n                          <img class=\"gallery-img\" src=\"../../assets/img/5.jpeg\" alt=\"Random third slide\">\n                          <!-- <div class=\"carousel-caption\">\n                              <p>Here it is</p>\n                          </div> -->\n                        </ng-template>  \n                    </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"btn-container\">\n      <a [routerLink]=\"['/landing']\" class=\"btn  btn-round\">Dive into the Gallery</a>\n  </div>\n  </div>\n\n                     <div id=\"images\">\n                         <p style=\"text-align: center\" class=\"aboutus\">\n                            <br>\n          About Us\n                         </p>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    \n                                    <div  class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                 <a [routerLink]=\"['/user-profile']\">     <h4 style=\"text-align:center\" class=\"images-title\">Yash<br> Aggarwal</h4> </a>\n                                 <a [routerLink]=\"['/user-profile']\"> <p style=\"text-align: center\">    <img   src=\"https://firebasestorage.googleapis.com/v0/b/linkhub-19f1f.appspot.com/o/lukyjtghcfgjvhkj.jpg?alt=media&token=799ae455-17db-4d8f-b032-fda6840701c3\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                        <p  style=\"font-size: 10px\" class=\"text-center\">Director</p>\n                                    </div>\n                                        <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n<a [routerLink]=\"['/kritarth']\"><h4 style=\"text-align:center\" class=\"images-title\">Kritarth<br>Mittal</h4></a>\n<a [routerLink]=\"['/kritarth']\"><p style=\"text-align: center\"> <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/WhatsApp%20Image%202019-06-13%20at%2015.34.13.jpeg?alt=media&token=05fa1654-0315-4990-9048-11bcf0a84600\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                <p style=\"font-size: 10px\" class=\"text-center\">Chief Executive Officer</p>\n                                            </div>\n                                            <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                    <a [routerLink]=\"['/kartik']\">     <h4 style=\"text-align:center\" class=\"images-title\">Kartik<br>Tiwari</h4></a>\n                                                    <a [routerLink]=\"['/kartik']\"><p style=\"text-align: center\"> <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/kartik.jpeg?alt=media&token=f9a8a76f-108e-47de-920f-efa8dde9f155\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                    <p style=\"font-size: 10px\" class=\"text-center\">Chief Operating Officer</p>\n                                                </div>\n                                                <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                        <a [routerLink]=\"['/gaurav']\">                    <h4 style=\"text-align:center\" class=\"images-title\">Gaurav<br> Prasad</h4></a>\n                                                            <a [routerLink]=\"['/gaurav']\">     <p style=\"text-align: center\">           <img src=\"https://infinity-effects.firebaseapp.com/gp2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                        <p style=\"font-size: 10px\" class=\"text-center\">Chief Technical Officer</p>\n                                                    </div>\n                                 \n                                </div>\n                                <div class=\"row\">\n                                        <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                <a [routerLink]=\"['/megha']\">                                             <h4 style=\"text-align:center\" class=\"images-title\">Megha<br>Garg</h4></a>\n                                                    <a [routerLink]=\"['/megha']\">        <p style=\"text-align: center\">                 <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/mega.jpeg?alt=media&token=9fc68c3d-fd02-49a7-acfb-8a7bbb91470c\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                <p style=\"font-size: 10px\" class=\"text-center\">Director</p>\n                                            </div>\n                                            <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                <a [routerLink]=\"['/arshia']\">                                        <h4 style=\"text-align:center\" class=\"images-title\">Arshia<br> Agrawal</h4></a>\n                                                    <a [routerLink]=\"['/arshia']\">      <p style=\"text-align: center\">                            <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/arshia.jpeg?alt=media&token=5d9b4685-20a3-48b0-8357-a74afc58ab87\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                <p style=\"font-size: 10px\" class=\"text-center\">Human Resource Manager</p>\n                                            </div>\n                                            <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                <a [routerLink]=\"['/kriti']\">                                        <h4 style=\"text-align:center\" class=\"images-title\">Kriti<br> Mittal</h4></a>\n                                                    <a [routerLink]=\"['/kriti']\">          <p style=\"text-align: center\">                        <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/kriti.jpeg?alt=media&token=06ad8963-938a-4280-a241-9fdffb1ac719\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                <p style=\"font-size: 10px\" class=\"text-center\">Region Head MP</p>\n                                            </div>\n                                                <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                        <a [routerLink]=\"['/rakshita']\">                                        <h4 style=\"text-align:center\" class=\"images-title\">Rakshita<br> Singhal</h4></a>\n                                                            <a [routerLink]=\"['/rakshita']\">          <p style=\"text-align: center\">                        <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/rakshita.jpeg?alt=media&token=f661137a-e493-4944-9551-04013dc49e76\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                        <p style=\"font-size: 10px\" class=\"text-center\">Region Head MP</p>\n                                                    </div>\n                                     \n                                    </div>\n                                    <div class=\"row\">\n                                            <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                    <a [routerLink]=\"['/pratik']\">           <h4 style=\"text-align:center\" class=\"images-title\">Pratik<br> Gupta</h4></a>\n                                                        <a [routerLink]=\"['/pratik']\">   <p style=\"text-align: center\">     <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/pratik.jpeg?alt=media&token=8c16ede7-5778-4f88-8080-1a622b773746\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                    <p style=\"font-size: 10px\" class=\"text-center\">Region Head Gujrat</p>\n                                                </div>\n                                            <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                    <a [routerLink]=\"['/gagan']\">                          <h4 style=\"text-align:center\" class=\"images-title\">Gagan<br>Goel</h4></a>\n                                                        <a [routerLink]=\"['/gagan']\">            <p style=\"text-align: center\">                 <img src=\"https://scontent-bom1-2.xx.fbcdn.net/v/t31.0-8/26170620_1581515925274011_7486114019938893198_o.jpg?_nc_cat=104&_nc_oc=AQmaLUp2cLp-7MT95y_7nytalvOdGKAM7mDnqb8B5l5OZJEmgvJsj97EbWwG7X0ZABA&_nc_ht=scontent-bom1-2.xx&oh=59e995a671240e2f960e354611da132d&oe=5E2B6660\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                    <p style=\"font-size: 10px\" class=\"text-center\">Manager</p>\n                                                </div>\n                                            <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                    <a [routerLink]=\"['/shivang']\">         <h4 style=\"text-align:center\" class=\"images-title\">Shivang<br>Kaul</h4></a>\n                                                        <a [routerLink]=\"['/shivang']\">  <p style=\"text-align: center\">        <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/WhatsApp%20Image%202019-06-13%20at%2015.34.05.jpeg?alt=media&token=7961ae51-d1b1-42ef-ac60-feb6bdee3d14\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                    <p style=\"font-size: 10px\" class=\"text-center\">Mobile Application Developer</p>\n                                                </div>\n                                               \n                                                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\" routerLinkActive=\"active\">\n                                                            <a [routerLink]=\"['/vishal']\">         <h4 style=\"text-align:center\" class=\"images-title\">Vishal<br> Sharma</h4></a>\n                                                                <a [routerLink]=\"['/vishal']\">  <p style=\"text-align: center\">          <img src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/vishal.jpeg?alt=media&token=a7504449-b540-4461-ba68-1e039c15c353\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\"></p></a>\n                                                            <p style=\"font-size: 10px\" class=\"text-center\">Marketeer</p>\n                                                        </div>\n                                         \n                                        </div>\n                            </div>\n                        </div>\n                        <br><br>\n\n                        <div class=\"main1\">\n                                <div class=\"text-center\">\n                                    <hr>\n                                    <h1 class=\"mainheader1\">Join out Communities!</h1>\n                                </div>\n                                <div class=\"row\">\n                                  <div class=\"col-5 justify-content-center align-self-center\">\n                                    <img class=\"img-responsive img-fluid\" src=\"../../assets/img/net2.png\" width=100%>\n                                  </div>\n                                  <div class=\"col-6 align-self-center\">\n                                    <div class=\"text-container \">\n                                    <p style=\"font-size: 20px\">Inception Wave took the initiative to bring like minded people together and provide them a common \n                                       platform to help them learn from each other and grow as an individual. We started with 5 communities for Artists, \n                                        Writers, Photographers etc. and now we have more than 5000+ people in 36 communities combined.</p>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-1\"></div>\n                                </div>\n                                    <div class=\"buttons-container text-center\">\n                                      <button type=\"button\" class=\"btn btn-default\">Entrepreneurship</button>\n                                      <button type=\"button\" class=\"btn btn-success\">Automobile Industry</button>\n                                      <button type=\"button\" class=\"btn btn-info\">Fashionpreneurs</button>\n                                      <button type=\"button\" class=\"btn btn-warning\">Daily Motivation</button>\n                                      <button type=\"button\" class=\"btn btn-danger\">Movies/TV Series Enthusiasts</button>\n                                    </div>\n                              \n                              </div>\n                              <!--\n                              https://chat.whatsapp.com/JFRCV4No4JzGTOH9fbcTtZ\n                              https://chat.whatsapp.com/GBSaG3dLBTvEWuz1kuL8o6\n                              https://chat.whatsapp.com/FKbmCegUFBSJcPohuY3nIr\n                              https://chat.whatsapp.com/BsOQxKiA9ar8PeVvSQzOYL\n                              https://chat.whatsapp.com/DOUE6ZoLy43CmviPBrOEXb\n                              \n                              To join the other, previously formed communities, ping on 7566194750. -->\n<!-- \n    <div class=\"main\">\n        <app-components></app-components>\n    </div> -->\n\n\n    \n<!-- <app-gallery></app-gallery> -->  \n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Ultra&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather&display=swap\");\n.whoarewerow {\n  padding-top: 5%;\n  padding-bottom: 4%; }\n.wecontainer {\n  margin: auto; }\n.whoarewe1 {\n  vertical-align: middle;\n  text-align: center;\n  font-size: 55px;\n  font-family: serif; }\n.right {\n  padding-right: 5%;\n  font-size: 23px;\n  text-align: justify; }\n.servehead {\n  font-family: 'Montserrat'; }\n.appcol, .buiscol, .webcol {\n  padding-left: 5%;\n  padding-right: 5%;\n  transition: 5s ease;\n  padding-top: 1.5%; }\n@media only screen and (max-width: 600px) {\n  .right {\n    font-size: 13px; }\n  .whoarewe1 {\n    font-size: 30px; }\n  .servehead {\n    font-size: 13px; } }\n@font-face {\n  font-family: \"LemonMilk\";\n  src: url('LemonMilk.otf') format(\"truetype\"); }\n.ourservices {\n  font-family: 'LemonMilk';\n  font-size: 70px;\n  color: #3b3b3b;\n  padding-bottom: 2%; }\n.services {\n  color: black;\n  background-color: #f0f0f0;\n  background-size: 100%;\n  padding-top: 3%;\n  padding-bottom: 5%; }\n.servicesimage1 {\n  width: 70%; }\n.servicesimage2 {\n  width: 65%;\n  height: 100%; }\n.servicesimage3 {\n  width: 70%;\n  height: 100%; }\n.servehead {\n  font-family: 'Merriweather', serif;\n  padding: 1%; }\n@media only screen and (max-width: 600px) {\n  .ourservices {\n    font-size: 30px; }\n  .servehead {\n    font-size: 13px; } }\n.btn {\n  vertical-align: middle;\n  background: linear-gradient(to right, #e75e44 50%, #e91b00 50%);\n  background-position: left bottom;\n  background-size: 200% 100%;\n  border: 0;\n  transition: all 1.2s ease; }\n.btn:hover {\n  background-position: right bottom; }\n.btn-container {\n  text-align: center; }\n.container-fluid {\n  padding: 5%;\n  padding-bottom: 0%; }\n.section {\n  background-color: #f0f0f0;\n  background-position: 50% 50%;\n  background-size: cover; }\n.companylogo {\n  width: 20vw; }\n.wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n.gallery-img {\n  height: 40% !important; }\n.img-circle {\n  height: 120px !important;\n  width: 120px !important; }\n.aboutus {\n  font-family: 'LemonMilk';\n  font-size: 30px;\n  color: #3b3b3b;\n  padding-bottom: 2%; }\n@font-face {\n  font-family: \"LemonMilk\";\n  src: url('LemonMilk.otf') format(\"truetype\"); }\n.mainheader1 {\n  font-family: LemonMilk;\n  padding-top: 2%;\n  padding-bottom: 2%; }\n.main1 {\n  color: white;\n  background-color: black;\n  align-items: center; }\nhr {\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  padding-bottom: 3%;\n  margin-left: 25%;\n  margin-right: 25%; }\n.text-container {\n  vertical-align: middle; }\np {\n  font-size: 1.6vw;\n  text-align: justify; }\n.btn {\n  margin: 3%;\n  white-space: normal; }\n@media only screen and (max-width: 600px) {\n  .mainheader {\n    font-size: 25px; }\n  p {\n    font-size: 12px; }\n  .btn {\n    width: auto;\n    font-size: 8px;\n    margin: 2%; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { GalleryComponent } from 'app/gallery/gallery.component';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/kartik/kartik.component.html":
/*!**********************************************!*\
  !*** ./src/app/kartik/kartik.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/kartik.jpeg?alt=media&token=f9a8a76f-108e-47de-920f-efa8dde9f155\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Kartik Tiwari<br /></h4>\n                    <h6 class=\"description\">Chief Operations Officer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Kartik Tiwari is one of the co-founders of Inception Wave Pvt. Ltd. He is the member of the technical team at Inception Wave and in control of web development.\n                            He has a splendid understanding of the application and web development, Java, JavaScript, Node.js and Ionic Framework. \n                            Kartik is an all-time cricket lover and always ready to help anyone in his field</p>\n                    <br />\n                 <a href=\"https://www.facebook.com/profile.php?id=100010205568132\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/__kartiktiwari__/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/kartik-tiwari-52b870176/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/kartik/kartik.component.scss":
/*!**********************************************!*\
  !*** ./src/app/kartik/kartik.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kartik/kartik.component.ts":
/*!********************************************!*\
  !*** ./src/app/kartik/kartik.component.ts ***!
  \********************************************/
/*! exports provided: KartikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KartikComponent", function() { return KartikComponent; });
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

var KartikComponent = /** @class */ (function () {
    function KartikComponent() {
    }
    KartikComponent.prototype.ngOnInit = function () {
    };
    KartikComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kartik',
            template: __webpack_require__(/*! ./kartik.component.html */ "./src/app/kartik/kartik.component.html"),
            styles: [__webpack_require__(/*! ./kartik.component.scss */ "./src/app/kartik/kartik.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], KartikComponent);
    return KartikComponent;
}());



/***/ }),

/***/ "./src/app/kritarth/kritarth.component.html":
/*!**************************************************!*\
  !*** ./src/app/kritarth/kritarth.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/WhatsApp%20Image%202019-06-13%20at%2015.34.13.jpeg?alt=media&token=05fa1654-0315-4990-9048-11bcf0a84600\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Kritarth Mittal<br /></h4>\n                    <h6 class=\"description\">Chief Executing Officer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Kritarth Mittal is one of the co-founders of Inception Wave with a demonstrated history of working in the computer software industry. Skilled in C, C++, Python (Programming Language), Machine Learning, Java, and Data Structures, He is also a strong marketing professional pursuing his Bachelor of Technology in Computer Science from SRM University. He likes to learn, ideate and innovate in his spare time. He has won pitching competitions and assisted others for the same. He also has a strong network of professionals and investors from the industry which comes in handy from time to time.</p>\n                    <br />\n                 <a href=\"https://www.facebook.com/kritarhmittal\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/_the.unfathomed.senor_/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/kritarth-mittal/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/kritarth/kritarth.component.scss":
/*!**************************************************!*\
  !*** ./src/app/kritarth/kritarth.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kritarth/kritarth.component.ts":
/*!************************************************!*\
  !*** ./src/app/kritarth/kritarth.component.ts ***!
  \************************************************/
/*! exports provided: KritarthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KritarthComponent", function() { return KritarthComponent; });
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

var KritarthComponent = /** @class */ (function () {
    function KritarthComponent() {
    }
    KritarthComponent.prototype.ngOnInit = function () {
    };
    KritarthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kritarth',
            template: __webpack_require__(/*! ./kritarth.component.html */ "./src/app/kritarth/kritarth.component.html"),
            styles: [__webpack_require__(/*! ./kritarth.component.scss */ "./src/app/kritarth/kritarth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], KritarthComponent);
    return KritarthComponent;
}());



/***/ }),

/***/ "./src/app/kriti/kriti.component.html":
/*!********************************************!*\
  !*** ./src/app/kriti/kriti.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/kriti.jpeg?alt=media&token=06ad8963-938a-4280-a241-9fdffb1ac719\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Kriti Mittal<br /></h4>\n                    <h6 class=\"description\">Region Head MP</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>\n                            She has a profound knowledge about Interior Design and Development. She has worked on 3D Studio Max, Adobe Photoshop, AutoCAD, Google Sketchup etc. during her Bachelor of Design from SNDT University. She likes to sing and paint in her spare time.\n                         </p>\n                    <br />\n                 <a href=\"https://m.facebook.com/profile.php?id=100011806600726\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://instagram.com/ms.designer_km\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/kriti-mittal-97bb95147\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/kriti/kriti.component.scss":
/*!********************************************!*\
  !*** ./src/app/kriti/kriti.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kriti/kriti.component.ts":
/*!******************************************!*\
  !*** ./src/app/kriti/kriti.component.ts ***!
  \******************************************/
/*! exports provided: KritiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KritiComponent", function() { return KritiComponent; });
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

var KritiComponent = /** @class */ (function () {
    function KritiComponent() {
    }
    KritiComponent.prototype.ngOnInit = function () {
    };
    KritiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kriti',
            template: __webpack_require__(/*! ./kriti.component.html */ "./src/app/kriti/kriti.component.html"),
            styles: [__webpack_require__(/*! ./kriti.component.scss */ "./src/app/kriti/kriti.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], KritiComponent);
    return KritiComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/7.jpeg');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>Gallery</h1>\n            <h3>Scroll down to explore the memorious images.</h3>\n        </div>\n    </div>\n</div>\n<div class=\"image-container\">\n    <img src=\"../../assets/img/1.jpeg\">\n    <img src=\"../../assets/img/2.jpeg\">\n    <img src=\"../../assets/img/3.jpeg\">\n    <img src=\"../../assets/img/4.jpeg\">\n    <img src=\"../../assets/img/5.jpeg\">\n    <img src=\"../../assets/img/6.jpeg\">\n    <img src=\"../../assets/img/7.jpeg\">\n    <img src=\"../../assets/img/8.jpeg\">\n    <img src=\"../../assets/img/1.jpeg\">\n</div>\n\n\n\n\n\n<!-- <div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">Let's talk product</h2>\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\n            </div>\n        </div>\n        <br/><br/>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">New Ideas</h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Statistics</h4>\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Delightful design</h4>\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">Let's talk about us</h2>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Henry Ford</h4>\n                                <h6 class=\"card-category\">Product Manager</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Sophie West</h4>\n                                <h6 class=\"card-category\">Designer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Robert Orben</h4>\n                                <h6 class=\"card-category\">Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-container {\n  background-image: url('antoine-barres.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\nimg {\n  border: 3px solid orange;\n  width: 25%;\n  margin: 4%; }\n\nimg:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  transition-duration: 0.5s; }\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/megha/megha.component.html":
/*!********************************************!*\
  !*** ./src/app/megha/megha.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/mega.jpeg?alt=media&token=9fc68c3d-fd02-49a7-acfb-8a7bbb91470c\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Megha Garg<br /></h4>\n                    <h6 class=\"description\">Director</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Megha is the director and one of the co-founders of the Inception Wave Pvt. Ltd.\n                            She is a technical member of our team working shoulder to shoulder with her male counterparts.\n                            She is an exceptional developer at Inception Wave and she is passionate to develop applications for the greater good. There is no doubt about her expertise in the field of Java, JavaScript, Node.js and Ionic Framework.\n                            On top of this, Megha is a very good singer.</p>\n                    <br />\n                 <a href=\"https://www.facebook.com/mg.megha18\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/megha_garg18/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/megha-garg-111491153/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/megha/megha.component.scss":
/*!********************************************!*\
  !*** ./src/app/megha/megha.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/megha/megha.component.ts":
/*!******************************************!*\
  !*** ./src/app/megha/megha.component.ts ***!
  \******************************************/
/*! exports provided: MeghaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeghaComponent", function() { return MeghaComponent; });
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

var MeghaComponent = /** @class */ (function () {
    function MeghaComponent() {
    }
    MeghaComponent.prototype.ngOnInit = function () {
    };
    MeghaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-megha',
            template: __webpack_require__(/*! ./megha.component.html */ "./src/app/megha/megha.component.html"),
            styles: [__webpack_require__(/*! ./megha.component.scss */ "./src/app/megha/megha.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MeghaComponent);
    return MeghaComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/linkhub-19f1f.appspot.com/o/lukyjtghcfgjvhkj.jpg?alt=media&token=799ae455-17db-4d8f-b032-fda6840701c3\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Yash Aggarwal<br /></h4>\n                    <h6 class=\"description\">Director</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Yash Aggarwal is the director and one of the co-founders of Inception Wave Inc. He is the technical lead at Inception Wave and a brilliant app developer having commendable knowledge in Ionic Framework, Javascript, Node.js , Hybrid Applications and Public Speaking. \n                            On the top of it,He is an ardent fan of cricket and is often spotted grooving to music. He is also the co-founder of SRMpedia and team lead of Think Digital at SRM University.</p>\n                    <br />\n                 <a href=\"https://www.facebook.com/profile.php?id=100035861134628\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/dsm_7050/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/yash-aggarwal-1497b9173/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/rakshita/rakshita.component.html":
/*!**************************************************!*\
  !*** ./src/app/rakshita/rakshita.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n        <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n            <div class=\"filter\"></div>\n        </div>\n        <div class=\"section profile-content\">\n            <div class=\"container\">\n                <div class=\"owner\">\n                    <div style=\"max-width:100%;\"class=\"avatar\">\n                        <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/rakshita.jpeg?alt=media&token=f661137a-e493-4944-9551-04013dc49e76\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                    </div>\n                    <div class=\"name\">\n                        <h4 class=\"title\">Rakshita Singhal<br /></h4>\n                        <h6 class=\"description\">Region Head MP</h6>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                        <p>\n                           She is a Facebook Udacity Scholar with a lot of experience in Data Science and Machine Learning. She has strong Leadership and Management skills and is well versed in programming languages such as C, C++, Java and Python. Apart from being a tech enthusiast, She is a national player and Black Belt in Taekwondo. She also loves to sketch, sing and write in her spare time. </p>\n                        <br />\n                     <a href=\"https://m.facebook.com/rakshitasinghal4\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                     <a href=\"https://www.instagram.com/rak.says.hi/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                     <a href=\"https://www.linkedin.com/in/rakshita-singhal-41524310a\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                    </div>\n                </div>\n                <br/>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/rakshita/rakshita.component.scss":
/*!**************************************************!*\
  !*** ./src/app/rakshita/rakshita.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rakshita/rakshita.component.ts":
/*!************************************************!*\
  !*** ./src/app/rakshita/rakshita.component.ts ***!
  \************************************************/
/*! exports provided: RakshitaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RakshitaComponent", function() { return RakshitaComponent; });
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

var RakshitaComponent = /** @class */ (function () {
    function RakshitaComponent() {
    }
    RakshitaComponent.prototype.ngOnInit = function () {
    };
    RakshitaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rakshita',
            template: __webpack_require__(/*! ./rakshita.component.html */ "./src/app/rakshita/rakshita.component.html"),
            styles: [__webpack_require__(/*! ./rakshita.component.scss */ "./src/app/rakshita/rakshita.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RakshitaComponent);
    return RakshitaComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Services -->\n<div class=\"services\">\n  <div class=\"text-center\">\n        <h2 class=\"ourservices\">OUR SERVICES</h2>\n    <div  class=row>\n      <div class=\"col\">\n        <img class=\"servicesimage1\" src=\"../../assets/img/vectors/web.png\">\n      </div>\n      <div class=\"col\">\n        <img class=\"servicesimage2\" src=\"../../assets/img/vectors/app.png\" height=\"50%\" >\n      </div>\n      <div class=\"col\">\n        <img class=\"servicesimage3\" src=\"../../assets/img/vectors/buisness.png\" >\n      </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">\n          <h3 class=\"servehead\">Web Development</h3>\n        </div>\n        <div class=\"col\">\n          <h3 class=\"servehead\">Application Development</h3>\n        </div>\n        <div class=\"col\">\n          <h3 class=\"servehead\">Marketing & Buisness Solutions</h3>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"LemonMilk\";\n  src: url('LemonMilk.otf') format(\"truetype\"); }\n\n.ourservices {\n  font-family: 'LemonMilk';\n  font-size: 70px;\n  color: #3b3b3b;\n  padding-bottom: 2%; }\n\n.services {\n  color: black;\n  background-color: #f0f0f0;\n  background-size: 100%;\n  padding-top: 3%;\n  padding-bottom: 5%; }\n\n.servicesimage1 {\n  width: 70%; }\n\n.servicesimage2 {\n  width: 65%;\n  height: 100%; }\n\n.servicesimage3 {\n  width: 70%;\n  height: 100%; }\n\n.servehead {\n  font-family: 'Merriweather', serif;\n  padding: 1%; }\n\n@media only screen and (max-width: 600px) {\n  .ourservices {\n    font-size: 30px; }\n  .servehead {\n    font-size: 13px; } }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
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

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\"> \n        <div>\n            <h1 class=\"center\">Contact Us</h1>\n            <hr>\n            <p class=\"center para\">\n                For any query, suggestion or feedback, feel free to contact us using below details.<br>\n                <img src=\"../../../assets/img/phone.png\">6379403492<br>\n                <img src=\"../../../assets/img/phone.png\">7566194750<br>\n                <img src=\"../../../assets/img/mail.png\"> wave.inception@gmail.com\n            </p>\n\n        </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\nfooter {\n  background-color: black;\n  color: white;\n  padding-bottom: 3.5%;\n  padding-top: 1%; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  width: 80%; }\n\np {\n  font-size: 20px; }\n\nimg {\n  width: 20px; }\n\n@media only screen and (max-width: 600px) {\n  p {\n    font-size: 14px; }\n  h1 {\n    font-size: 24px; } }\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"https://www.inceptionwave.in\">Inception Wave</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook!\" data-placement=\"bottom\" href=\"https://www.facebook.com/inceptionwave1202/\" target=\"_blank\">\n                        <i class=\"fa fa-facebook\"></i>\n                        <p class=\"d-lg-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram!\" data-placement=\"bottom\" href=\"https://www.instagram.com/inception_wave/\" target=\"_blank\">\n                        <i class=\"fa fa-instagram\"></i>\n                        <p class=\"d-lg-none\">Instagram</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Linkedin!\" data-placement=\"bottom\" href=\"https://www.linkedin.com/company/inceptionwave/\" target=\"_blank\">\n                        <i class=\"fa fa-linkedin\"></i>\n                        <p class=\"d-lg-none\">LinkedIn</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" >\n                    <a href=\"http://tinyurl.com/iwapply19\" class=\"btn btn-internship btn-round\" target=\"_blank\">Apply for Internship</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-internship {\n  background: linear-gradient(to right, dodgerblue 50%, darkorchid 50%);\n  background-position: left bottom;\n  background-size: 200% 100%;\n  border: 0;\n  transition: all 1.2s ease; }\n\n.btn-internship:hover {\n  background-position: right bottom; }\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shivang/shivang.component.html":
/*!************************************************!*\
  !*** ./src/app/shivang/shivang.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/WhatsApp%20Image%202019-06-13%20at%2015.34.05.jpeg?alt=media&token=7961ae51-d1b1-42ef-ac60-feb6bdee3d14\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Shivang Kaul<br /></h4>\n                    <h6 class=\"description\">Mobile Application Developer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>While growing up, this guy had just one thing in mind - \"I want to do something in the field of computer science and do innovations in the field\".\n                            He is a tech savvy guy with an unceasing sense of wonder, skilled in Firebase, Ionic Framework, C++ and Web based applications.\n                            He is one of the technical heads at Inception Wave. Before you explain it, he codes it. </p>\n                    <br />\n                 <a href=\"https://www.facebook.com/shivang.kaul.7\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/shangkaul/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"https://www.linkedin.com/in/shivang-k-876906110/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shivang/shivang.component.scss":
/*!************************************************!*\
  !*** ./src/app/shivang/shivang.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shivang/shivang.component.ts":
/*!**********************************************!*\
  !*** ./src/app/shivang/shivang.component.ts ***!
  \**********************************************/
/*! exports provided: ShivangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShivangComponent", function() { return ShivangComponent; });
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

var ShivangComponent = /** @class */ (function () {
    function ShivangComponent() {
    }
    ShivangComponent.prototype.ngOnInit = function () {
    };
    ShivangComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shivang',
            template: __webpack_require__(/*! ./shivang.component.html */ "./src/app/shivang/shivang.component.html"),
            styles: [__webpack_require__(/*! ./shivang.component.scss */ "./src/app/shivang/shivang.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShivangComponent);
    return ShivangComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                      <div class=\"card card-register\">\n                          <h3 class=\"title\">Welcome</h3>\n                          <div class=\"social-line text-center\">\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                  <i class=\"fa fa-facebook-square\"></i>\n                              </a>\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                  <i class=\"fa fa-google-plus\"></i>\n                              </a>\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                  <i class=\"fa fa-twitter\"></i>\n                              </a>\n                          </div>\n                          <form class=\"register-form\">\n                              <label>Email</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-email-85\"></i>\n                                  </span>\n                                </div>\n\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                              </div>\n\n                              <label>Password</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-key-25\"></i>\n                                  </span>\n                                </div>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                              </div>\n                              <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                          </form>\n                          <div class=\"forgot\">\n                              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                          </div>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n                </div>\n            </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/vishal/vishal.component.html":
/*!**********************************************!*\
  !*** ./src/app/vishal/vishal.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image:linear-gradient(#4B79A1,#283E51)\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div style=\"max-width:100%;\"class=\"avatar\">\n                    <img style=\"height:250px;width:250px\" src=\"https://firebasestorage.googleapis.com/v0/b/eethal-magazine.appspot.com/o/vishal.jpeg?alt=media&token=a7504449-b540-4461-ba68-1e039c15c353\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Vishal Sharma</h4>\n                    <h6 class=\"description\">Marketeer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Vishal is one of the members of our marketing team.Implementing the strategies in the best possible manner is his motive and he does it day in day out.\n                            Above all he is a very good manager and keeps every member in line respective of other's work.</p>\n                    <br />\n                 <a href=\"https://www.facebook.com/profile.php?id=100002464933143\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-facebook\"></i></button></a>\n                 <a href=\"https://www.instagram.com/vishal208sharma/\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-instagram\"></i></button></a>\n                 <a href=\"#\">   <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-linkedin\"></i></button></a>\n                </div>\n            </div>\n            <br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vishal/vishal.component.scss":
/*!**********************************************!*\
  !*** ./src/app/vishal/vishal.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vishal/vishal.component.ts":
/*!********************************************!*\
  !*** ./src/app/vishal/vishal.component.ts ***!
  \********************************************/
/*! exports provided: VishalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VishalComponent", function() { return VishalComponent; });
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

var VishalComponent = /** @class */ (function () {
    function VishalComponent() {
    }
    VishalComponent.prototype.ngOnInit = function () {
    };
    VishalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vishal',
            template: __webpack_require__(/*! ./vishal.component.html */ "./src/app/vishal/vishal.component.html"),
            styles: [__webpack_require__(/*! ./vishal.component.scss */ "./src/app/vishal/vishal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VishalComponent);
    return VishalComponent;
}());



/***/ }),

/***/ "./src/app/whoarewe/whoarewe.component.html":
/*!**************************************************!*\
  !*** ./src/app/whoarewe/whoarewe.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row whoarewerow\">\n  <div class=\"col-4 wecontainer\">\n      <h3 class=\"whoarewe1 \" float=\"left\">Who are We?</h3> \n  </div>\n  <div class=\"col-8\">\n      <p class=\"right\" float=\"right\">\n          Inception Wave is an Indian software company,\n          currently working on developing a social media platform to bring together like minded \n          individuals and help them improve their productivity by collaborating and achieving common \n          goals and milestones. Inception Wave was founded in December '18 and got incorporated in February '19.\n           Currently, 10 exceptionally motivated individuals are working day and night to bring the company's vision to reality.\n      </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/whoarewe/whoarewe.component.scss":
/*!**************************************************!*\
  !*** ./src/app/whoarewe/whoarewe.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Ultra&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat&display=swap\");\n.whoarewerow {\n  padding-top: 5%;\n  padding-bottom: 4%; }\n.wecontainer {\n  margin: auto; }\n.whoarewe1 {\n  vertical-align: middle;\n  text-align: center;\n  font-size: 55px;\n  font-family: 'Ultra', serif; }\n.right {\n  padding-right: 5%;\n  font-size: 23px;\n  text-align: justify; }\n.servehead {\n  font-family: 'Montserrat'; }\n.appcol, .buiscol, .webcol {\n  padding-left: 5%;\n  padding-right: 5%;\n  transition: 5s ease;\n  padding-top: 1.5%; }\n@media only screen and (max-width: 600px) {\n  .right {\n    font-size: 13px; }\n  .whoarewe1 {\n    font-size: 30px; }\n  .servehead {\n    font-size: 13px; } }\n"

/***/ }),

/***/ "./src/app/whoarewe/whoarewe.component.ts":
/*!************************************************!*\
  !*** ./src/app/whoarewe/whoarewe.component.ts ***!
  \************************************************/
/*! exports provided: WhoareweComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoareweComponent", function() { return WhoareweComponent; });
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

var WhoareweComponent = /** @class */ (function () {
    function WhoareweComponent() {
    }
    WhoareweComponent.prototype.ngOnInit = function () {
    };
    WhoareweComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whoarewe',
            template: __webpack_require__(/*! ./whoarewe.component.html */ "./src/app/whoarewe/whoarewe.component.html"),
            styles: [__webpack_require__(/*! ./whoarewe.component.scss */ "./src/app/whoarewe/whoarewe.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhoareweComponent);
    return WhoareweComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yash\Desktop\iw website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map