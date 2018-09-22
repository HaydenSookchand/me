webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"profile-card\">\n        <div id=\"profile-name\">\n            Hayden Sookchand\n        </div>\n        <a routerLink=\"/profile\">\n            <div id=\"profile-pic\"></div>\n        </a>\n    </div>\n    <div id=\"app\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        var profilePic = document.getElementById('profile-pic');
        //TweenLite.to(profilePic, 4, { ease: Bounce.easeOut, y: 10 });
        // TweenLite.to(profilePic, 2.8, { ease: Elastic.easeOut.config(1, 0.1), y: 10 });    
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
                    { path: 'me/home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
                    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__["a" /* GalleryComponent */] },
                    { path: 'me/gallery', component: __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__["a" /* GalleryComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */] }
                ], { useHash: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.list-container{\n\tcolor:white;\n}\n/*a little bit of reset*/\n#services-list, #services-list p, #services-list h3 {\nlist-style: none;\nmargin:20px; padding:0;\n}\n#services-list > li{\n  float:left;\n  margin-right: 20px;\n  width: 100%;\n}\n#services-list > li > .image{\n  display:block;\n  float:left;\n  margin-right:10px;\n}\n/*\nthis instructions are to force the dimensions of image and its container <a>\n*/\n#services-list > li > .image,\n#services-list > li > .image > img{\n  width:150px; height:150px;\n}\n.profile-component-footer{\n    margin:0 auto;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"list-container\">\n\n<ul id=\"services-list\">\n<li *ngFor=\"let data of this.data\">\n  <a href=\"{{data.link}}}\" class=\"image\">\n    <img src=\"{{data.image}}\" >\n  </a>\n  <div class=\"content\">\n    <h3> {{ data.name }}</h3>\n    <p style=\"width:80%\"> {{ data.desc}} </p>\n  </div>\n</li>\n</ul>\n\n</div>\n\n\n<div id=\"quote\">\"You only live once, but if you do it right, once is enough\"</div>\n\n<!--Make sure this home button image is cached  -->\n<div class=\"profile-component-footer\">\n    <div>\n        <a routerLink=\"/home\">\n            <img id=\"home\" class=\"icon\" src=\"assets/home.png\" style=\"margin:o auto;\">\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent(http) {
        this.http = http;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('./assets/configs/gallery.json').subscribe(function (data) {
            _this.data = data;
        });
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app2',
            template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n    <a routerLink=\"/gallery\">\n        <div class=\"grid-item\">\n            <img class=\"icon\" src=\"assets/feed.png\">\n        </div>\n    </a>\n\n    <a routerLink=\"/gallery\">\n        <div class=\"grid-item\">\n            <img class=\"icon\" src=\"assets/hearts.png\">\n        </div>\n    </a>\n\n    <a routerLink=\"/profile\">\n        <div class=\"grid-item\">\n            <img class=\"icon\" src=\"assets/info.png\">\n        </div>\n    </a>\n   \n</div>\n\n<div class=\"grid-container\">\n    <a *ngFor=\"let data of this.data\" href={{data.link}}>\n        <div class=\"grid-item\">\n            <img class=\"icon\" src=\"{{data.image}}\">\n        </div>\n    </a>\n</div>\n<div id=\"quote\">\"You only live once, but if you do it right, once is enough\"</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('./assets/configs/home.json').subscribe(function (data) {
            _this.data = data;
            _this.name = data[0].name;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.profile-component-container{\n    width: 300px;\n    height: 300px;\n    overflow-y: hidden;\n    opacity:1;\n}\n\n\n\n.profile-component-info{\n    padding-top: 100px;\n}\n\n\n\n.profile-component-footer{\n    margin:0 auto;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n}\n\n\n\n#replay{\n  opacity :0;\n}\n\n\n\n.addPadding{\n  padding-top: 40px;\n}\n\n\n\n#home{\n  opacity :0;\n}\n\n\n\n.small-text{\n  font-size: 18px;\n}\n\n\n\n.small-mid-text{\n  font-size: 25px;\n}\n\n\n\n.medium-text{\n  font-size: 28px;\n}\n\n\n\n.large-text{\n  font-size: 32px;\n}\n\n\n\n.slide {\n  overflow: hidden;\n    position: absolute;\n    display: block;\n    color:white; \n    text-align: center;\n    width: 300px;\n    font-size: 28px;\n    opacity:0;\n    left:-5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Pull all this from Config !-->\n\n<div id=\"profile-component-container\" class=\"profile-component-container\" (window:resize)=\"handleResize();\">\n    <div class=\"profile-component-info\">\n        <div *ngFor=\"let profileData of this.profileData\" id=\"{{profileData.id}}\" class=\"{{profileData.class}}\">\n            <div class=\"{{profileData.textSize}}\"> {{profileData.text}}</div>\n            <div class=\"{{profileData.textSize2}} addPadding\">{{profileData.text2}} </div>\n        </div>\n    </div>\n</div>\n\n<!--Make sure this home button image is cached  -->\n<div class=\"profile-component-footer\">\n    <div>\n        <a routerLink=\"/home\">\n            <img id=\"home\" class=\"icon\" src=\"assets/home.png\" style=\"margin:o auto;\">\n        </a>\n    </div>\n\n    <div>\n        <img style=\"width:20px;height:20px;\" id=\"replay\" src=\"assets/play.png\" (click)=\"handleReplay();\">\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(http) {
        this.http = http;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get data - maybe use a service?
        this.http.get('./assets/configs/profile.json').subscribe(function (data) {
            _this.profileData = data;
        });
        //Timeout is allowing for angular to create the divs from data in the json file
        var that = this;
        setTimeout(function () {
            _this.init();
        }, 100);
    };
    ProfileComponent.prototype.init = function () {
        this.bindToElements();
        this.setUpAnimations();
        this.playAnimations();
    };
    /** ***************************** Bind and Setup ***************************************************/
    ProfileComponent.prototype.bindToElements = function () {
        this.createSlideBindings();
        this.homeButton = document.getElementById("home");
        this.replayButton = document.getElementById("replay");
        this.profileContainer = document.getElementById("profile-component-container");
    };
    ProfileComponent.prototype.createSlideBindings = function () {
        // This reads tha amount of items in the json file to determine how many items to map 2 instead of manually having to enter code 
        //this.items1 = document.getElementById("slide-1");
        //this.items2 = document.getElementById("slide-2");
        this.items = [];
        for (var b = 0; b < this.profileData.length; b++) {
            console.log(this.profileData[b].id);
            this.items[b] = document.getElementById(this.profileData[b].id);
        }
    };
    ProfileComponent.prototype.setUpAnimations = function () {
        this.textAnimation = new __WEBPACK_IMPORTED_MODULE_1_gsap__["TimelineMax"]({ repeat: 0 });
    };
    /** ***************************** Play Animations ***************************************************/
    ProfileComponent.prototype.playAnimations = function () {
        this.x = this.getMiddleX();
        this.textAnimation.to(this.homeButton, 0.5, { scale: 1, opacity: 1, y: 0 });
        this.playSlideAnimations();
        this.playButtonAnimations();
    };
    ProfileComponent.prototype.playSlideAnimations = function () {
        console.log(this.items.length);
        for (var a = 0; a < this.items.length; a++) {
            this.textAnimation.fromTo(this.items[a], 1, { opacity: 0, x: 0, xPercent: -50 }, { opacity: 1, x: this.x, xPercent: -50 });
            this.textAnimation.to(this.items[a], 1, { opacity: 0, x: window.innerWidth - 150 }, "+=3");
        }
    };
    ProfileComponent.prototype.playButtonAnimations = function () {
        this.textAnimation.to(this.homeButton, 1, { scale: 3, opacity: 1, y: -(window.innerHeight / 2) });
        this.textAnimation.to(this.replayButton, 0.4, { scale: 3, opacity: 1, y: -((window.innerHeight / 2) - 100) });
    };
    /** ***************************** Reset Animations ***************************************************/
    ProfileComponent.prototype.resetButtonAnimations = function () {
        this.textAnimation.to(this.homeButton, 0.1, { scale: 1, y: 0 });
        this.textAnimation.to(this.replayButton, 0.1, { scale: 1, opacity: 0, y: 0 });
    };
    ProfileComponent.prototype.resetSlideAnimations = function () {
        for (var a = 0; a < this.items.length; a++) {
            this.textAnimation.to(this.items[a], 0.1, { opacity: 0, x: 0, xPercent: -50 });
        }
    };
    ProfileComponent.prototype.resetAnimations = function () {
        this.resetButtonAnimations(this);
        this.resetSlideAnimations(this);
    };
    /** ***************************** Reset Animations ***************************************************/
    // Handle Click on replay
    ProfileComponent.prototype.handleReplay = function () {
        this.resetButtonAnimations(this);
        this.playAnimations(this);
    };
    // Handle Window Resize
    ProfileComponent.prototype.handleResize = function () {
        this.textAnimation.totalProgress(1).kill();
        this.resetAnimations();
        this.playAnimations(this);
    };
    // Get the correct X value - like to move this out into a co-ordinate class
    ProfileComponent.prototype.getMiddleX = function () {
        return window.innerWidth / 2;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map