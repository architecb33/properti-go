webpackJsonp([2],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPageModule", function() { return PostDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_details__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PostDetailsPageModule = (function () {
    function PostDetailsPageModule() {
    }
    return PostDetailsPageModule;
}());
PostDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__["a" /* SanitizeHtmlModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */]
        ]
    })
], PostDetailsPageModule);

//# sourceMappingURL=post-details.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaPlayer = (function () {
    function MediaPlayer(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.source = navParams.get('source');
        this.image = navParams.get('image');
    }
    MediaPlayer.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return MediaPlayer;
}());
MediaPlayer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/macintosh/Documents/devapp/Properti-Go+/src/pages/media-player/media-player.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ \'Media Player\' | translate }}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <vg-player>\n        <vg-overlay-play [ngStyle]="{\'background-image\': \'url(\' + image + \')\'}"></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n\n        <vg-scrub-bar>\n            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n\n        <vg-controls>\n            <vg-play-pause></vg-play-pause>\n            <vg-playback-button></vg-playback-button>\n\n            <vg-time-display property="current" format="mm:ss"></vg-time-display>\n\n            <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>\n\n            <!-- <vg-time-display property="left" format="mm:ss"></vg-time-display> -->\n            <vg-time-display property="total" format="mm:ss"></vg-time-display>\n\n            <!-- <vg-track-selector></vg-track-selector>\n            <vg-mute></vg-mute> -->\n            <vg-volume></vg-volume>\n\n            <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n\n        <video vgMedia preload="auto" crossorigin autoplay>\n            <source [src]="source">\n        </video>\n    </vg-player>\n\n</ion-content>'/*ion-inline-end:"/Users/macintosh/Documents/devapp/Properti-Go+/src/pages/media-player/media-player.html"*/,
        selector: 'media-player'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
], MediaPlayer);

//# sourceMappingURL=media-player.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_player_media_player__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_video_video_utils__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostDetailsPage = (function () {
    function PostDetailsPage(nav, navParams, sanitizer, modalCtrl, renderer, elementRef, viewCtrl, platform, SocialSharing, videoUtils) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.SocialSharing = SocialSharing;
        this.videoUtils = videoUtils;
        this.rtlBack = false;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = this.navParams.get('item');
        this.content = sanitizer.bypassSecurityTrustHtml(this.selectedItem.content.rendered);
        // Listen for link clicks, open in in app browser
        this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', function (event) {
            _this.iabLinks(event.target);
        });
        if (platform.is('android')) {
            this.videoUtils.killVideos(this.elementRef);
        }
    }
    PostDetailsPage.prototype.iabLinks = function (el) {
        var target = '_blank';
        if (el.href && el.href.indexOf('http') >= 0) {
            if (el.classList && el.classList.contains('system'))
                target = '_system';
            event.preventDefault();
            window.open(el.href, target);
        }
        else if (el.tagName == 'IMG' && el.parentNode.href && el.parentNode.href.indexOf('http') >= 0) {
            // handle image tags that have link as the parent
            if (el.parentNode.classList && el.parentNode.classList.contains('system'))
                target = '_system';
            event.preventDefault();
            window.open(el.parentNode.href, target);
        }
    };
    PostDetailsPage.prototype.ionViewWillEnter = function () {
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
    };
    PostDetailsPage.prototype.mediaModal = function (src, img) {
        if (img === void 0) { img = null; }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__media_player_media_player__["a" /* MediaPlayer */], { source: src, image: img });
        modal.present();
    };
    PostDetailsPage.prototype.share = function () {
        this.SocialSharing.share(this.selectedItem.title.rendered, null, null, this.selectedItem.link).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    // changes the back button transition direction if app is RTL
    PostDetailsPage.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    return PostDetailsPage;
}());
PostDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/macintosh/Documents/devapp/Properti-Go+/src/pages/post-details/post-details.html"*/'<ion-header>\n	<ion-navbar>\n\n		<ion-buttons start>\n			<button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n			    <ion-icon name="arrow-back"></ion-icon>\n			    {{\'Back\' | translate }}\n			</button>\n\n			<button ion-button menuToggle *ngIf="!selectedItem">\n			  <ion-icon name="menu"></ion-icon>\n			</button>\n\n		</ion-buttons>\n\n		<ion-title><span [innerHTML]="selectedItem.title.rendered"></span></ion-title>\n\n		<ion-buttons end>\n			<button ion-button (click)="share()">\n				<ion-icon name="share"></ion-icon>\n			</button>\n		</ion-buttons>\n		\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n <div *ngIf="selectedItem" class="selection">\n\n 	<div *ngIf="selectedItem.appp && selectedItem.appp.post_detail && selectedItem.appp.post_detail.above_title" [innerHTML]="selectedItem.appp.post_detail.above_title"></div>\n\n    <h2 [innerHTML]="selectedItem.title.rendered"></h2>\n\n    <div *ngIf="selectedItem.appp && selectedItem.appp.post_detail && selectedItem.appp.post_detail.below_title" [innerHTML]="selectedItem.appp.post_detail.below_title"></div>\n\n    <div *ngIf="content" [innerHTML]="content"></div>\n\n    <div *ngIf="selectedItem.appp && selectedItem.appp.post_detail && selectedItem.appp.post_detail.below_content" [innerHTML]="selectedItem.appp.post_detail.below_content | sanitizeHtml"></div>\n </div>\n</ion-content>'/*ion-inline-end:"/Users/macintosh/Documents/devapp/Properti-Go+/src/pages/post-details/post-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_5__providers_video_video_utils__["a" /* VideoUtils */]])
], PostDetailsPage);

//# sourceMappingURL=post-details.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sanitize_html__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SanitizeHtmlModule = (function () {
    function SanitizeHtmlModule() {
    }
    return SanitizeHtmlModule;
}());
SanitizeHtmlModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__sanitize_html__["a" /* SanitizeHtml */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__sanitize_html__["a" /* SanitizeHtml */]]
    })
], SanitizeHtmlModule);

//# sourceMappingURL=sanitize-html.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtml = (function () {
    function SanitizeHtml(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtml.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    return SanitizeHtml;
}());
SanitizeHtml = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sanitizeHtml'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], SanitizeHtml);

//# sourceMappingURL=sanitize-html.js.map

/***/ })

});
//# sourceMappingURL=2.js.map