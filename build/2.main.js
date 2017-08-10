webpackJsonp([2],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_details__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_scroll_profile_scroll__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_stretchy_header_stretchy_header__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPageModule", function() { return PostDetailsPageModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_5__components_profile_scroll_profile_scroll__["a" /* ProfileScroll */],
            __WEBPACK_IMPORTED_MODULE_6__components_stretchy_header_stretchy_header__["a" /* StretchyHeader */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4__pipes_sanitize_html_sanitize_html_module__["a" /* SanitizeHtmlModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__post_details__["a" /* PostDetailsPage */]
        ]
    })
], PostDetailsPageModule);

//# sourceMappingURL=post-details.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaPlayer; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/macintosh/Documents/devapp/Properti-Go/src/pages/media-player/media-player.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ \'Media Player\' | translate }}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <vg-player>\n        <vg-overlay-play [ngStyle]="{\'background-image\': \'url(\' + image + \')\'}"></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n\n        <vg-scrub-bar>\n            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n\n        <vg-controls>\n            <vg-play-pause></vg-play-pause>\n            <vg-playback-button></vg-playback-button>\n\n            <vg-time-display property="current" format="mm:ss"></vg-time-display>\n\n            <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>\n\n            <!-- <vg-time-display property="left" format="mm:ss"></vg-time-display> -->\n            <vg-time-display property="total" format="mm:ss"></vg-time-display>\n\n            <!-- <vg-track-selector></vg-track-selector>\n            <vg-mute></vg-mute> -->\n            <vg-volume></vg-volume>\n\n            <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n\n        <video vgMedia preload="auto" crossorigin autoplay>\n            <source [src]="source">\n        </video>\n    </vg-player>\n\n</ion-content>'/*ion-inline-end:"/Users/macintosh/Documents/devapp/Properti-Go/src/pages/media-player/media-player.html"*/,
        selector: 'media-player'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
], MediaPlayer);

//# sourceMappingURL=media-player.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileScroll; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileScroll = (function () {
    function ProfileScroll(element, renderer, plt, ct, app) {
        this.element = element;
        this.renderer = renderer;
        this.plt = plt;
        this.ct = ct;
        this.app = app;
        if (this.plt.is('iphone') || this.plt.is('ios')) {
            this.statusBarHeiht = 20;
        }
        else {
            this.statusBarHeiht = 10;
        }
    }
    ProfileScroll.prototype.ngOnInit = function () {
        this.content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.fix_content = this.element.nativeElement.getElementsByClassName('fixed-content')[0];
        this.mainContent = this.content.getElementsByClassName('main-content')[0];
        this.header = document.getElementsByClassName("strechy-header")[0];
        this.stretchy_header_title = document.getElementsByClassName("stretchy_header_title")[0];
        this.blur_filter = document.getElementsByClassName("blur-filter")[0] || '';
        this.headerHeight = this.header.clientHeight;
        this.profile_picture = this.content.getElementsByClassName('picture')[0] || '';
        this.backButton = document.getElementsByClassName('back')[0];
        this.toolbar = this.header.parentElement.getElementsByClassName('toolbar')[0];
        console.log(this.header);
        if (this.plt.is('iphone') || this.plt.is('ios')) {
            this.renderer.setElementStyle(this.backButton, 'top', 'calc( calc( 66px - 40px)) ');
            this.content.classList.add("has_stretch_header_ios");
            this.fix_content.classList.add("has_stretch_header_ios");
            if (!this.toolbar) {
                this.renderer.setElementStyle(this.mainContent, 'margin-top', '-64px ');
            }
            // this.toolbar.classList.add("statusbar-padding");
        }
        else {
            this.renderer.setElementStyle(this.backButton, 'top', 'calc( calc( 46px - 40px )) ');
            this.content.classList.add("has_stretch_header_md");
            this.fix_content.classList.add("has_stretch_header_md");
            if (!this.toolbar) {
                this.renderer.setElementStyle(this.mainContent, 'margin-top', '-56px ');
            }
        }
        this.renderer.setElementStyle(this.content, 'paddingTop', 'calc( ' + this.headerHeight + 'px) ');
        if (this.toolbar) {
            if (this.plt.is('iphone') || this.plt.is('ios')) {
                this.content.classList.add("has_stretch_header_ios");
                this.fix_content.classList.add("has_stretch_header_ios");
            }
            else {
                this.content.classList.add("has_stretch_header_md");
                this.fix_content.classList.add("has_stretch_header_md");
            }
        }
        this.renderer.setElementStyle(this.content, 'marginTop', '44px');
        this.renderer.setElementStyle(this.fix_content, 'marginTop', '44px');
        this.renderer.setElementStyle(this.content, 'z-index', '9999999');
        this.renderer.setElementStyle(this.mainContent, 'position', 'relative');
        this.renderer.setElementStyle(this.mainContent, 'z-index', '9999999');
        // this.renderer.setElementStyle(this.mainContent, 'top', '-10px');
        this.renderer.setElementStyle(this.stretchy_header_title, 'visibility', 'hidden');
        this.renderer.setElementStyle(this.blur_filter, 'visibility', 'hidden');
    };
    ProfileScroll.prototype.getOffset = function (el) {
        var _x = 0;
        var _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    };
    ProfileScroll.prototype.onWindowResize = function (ev) {
        this.headerHeight = this.header.clientHeight;
    };
    ProfileScroll.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateStretchyHeader(ev);
        });
    };
    ProfileScroll.prototype.updateStretchyHeader = function (ev) {
        if (ev.scrollTop >= 0) {
            this.renderer.setElementStyle(this.stretchy_header_title, 'visibility', 'hidden');
            this.stretchy_header_title.getElementsByClassName('title')[0].classList.add("onBottom");
            this.translateAmt = Math.round(ev.scrollTop);
            this.scaleAmt = (1 - (ev.scrollTop / 100));
            this.renderer.setElementStyle(this.blur_filter, 'visibility', 'hidden');
            if (ev.scrollTop == 0) {
                this.renderer.setElementStyle(this.header, 'height', this.headerHeight + 'px');
                if (this.profile_picture) {
                    this.renderer.setElementStyle(this.profile_picture, 'webkitTransform', 'translate3d(0,0,0) scale(1,1)');
                    this.renderer.setElementStyle(this.profile_picture, 'transformOrigin', 'bottom');
                }
                this.renderer.setElementStyle(this.mainContent, 'z-index', '9999');
                this.renderer.setElementStyle(this.header, 'z-index', '10');
            }
            else {
                if ((this.headerHeight - this.translateAmt) <= 46 + this.statusBarHeiht) {
                    // console.log( this.toolbar )
                    // if( this.toolbar.length != null )
                    // {
                    this.renderer.setElementStyle(this.content, 'z-index', ' 1');
                    this.renderer.setElementStyle(this.header, 'height', 46 + this.statusBarHeiht + 'px');
                    this.renderer.setElementStyle(this.header, 'z-index', '99999');
                    this.renderer.setElementStyle(this.blur_filter, 'visibility', 'visible');
                    this.renderer.setElementStyle(this.blur_filter, 'opacity', '1');
                    this.renderer.setElementStyle(this.stretchy_header_title, 'visibility', 'visible');
                    this.stretchy_header_title.getElementsByClassName('title')[0].classList.remove("onBottom");
                    // }
                }
                else {
                    this.renderer.setElementStyle(this.stretchy_header_title, 'visibility', 'hidden');
                    this.stretchy_header_title.getElementsByClassName('title')[0].classList.add("onBottom");
                    this.renderer.setElementStyle(this.header, 'height', 'calc( ' + this.headerHeight + 'px - ' + this.translateAmt + 'px )');
                    this.renderer.setElementStyle(this.content, 'z-index', ' 9999999');
                    if ((this.headerHeight - this.translateAmt) <= 100) {
                        this.scaleAmt = (1 - ((ev.scrollTop - (this.headerHeight - 100)) / 100)).toFixed(2);
                        if (this.profile_picture) {
                            this.renderer.setElementStyle(this.profile_picture, 'webkitTransform', 'translate3d(0,0,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
                            this.renderer.setElementStyle(this.profile_picture, 'transformOrigin', 'bottom');
                        }
                        this.renderer.setElementStyle(this.mainContent, 'z-index', '9999');
                        this.renderer.setElementStyle(this.header, 'z-index', '10');
                    }
                }
            }
        }
        else {
            this.translateAmt = Math.round(ev.scrollTop);
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
            this.renderer.setElementStyle(this.content, 'z-index', ' 9999999');
            this.renderer.setElementStyle(this.header, 'z-index', '1');
            this.renderer.setElementStyle(this.header, 'height', 'calc( ' + this.headerHeight + 'px - ' + this.translateAmt + 'px )');
            this.renderer.setElementStyle(this.stretchy_header_title, 'visibility', 'hidden');
            this.stretchy_header_title.getElementsByClassName('title')[0].classList.add("onBottom");
            // Animate opacity of the blur backdrop filter
            this.scaleAmt = ((0 - (ev.scrollTop / 100)) * 1.4).toFixed(2);
            this.renderer.setElementStyle(this.blur_filter, 'visibility', 'visible');
            if (this.scaleAmt <= 1) {
                this.renderer.setElementStyle(this.blur_filter, 'opacity', this.scaleAmt);
            }
            else {
                this.renderer.setElementStyle(this.blur_filter, 'opacity', '1');
            }
        }
    };
    return ProfileScroll;
}());
ProfileScroll = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[profile-scroll]',
        //   directives: '[MyCustomDirective]',
        host: {
            '(ionScroll)': 'onContentScroll($event)',
            '(window:resize)': 'onWindowResize($event)'
        },
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Content */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]])
], ProfileScroll);

//# sourceMappingURL=profile-scroll.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StretchyHeader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StretchyHeader = (function () {
    function StretchyHeader(element, renderer, http, plt) {
        this.element = element;
        this.renderer = renderer;
        this.http = http;
        this.plt = plt;
    }
    StretchyHeader.prototype.ngOnChanges = function (changes) {
        this.header = this.element.nativeElement.getElementsByClassName('strechy-header')[0];
        if (changes.backgroundHeader.currentValue != '') {
            this.renderer.setElementStyle(this.header, 'backgroundImage', 'url(' + changes.backgroundHeader.currentValue + ')');
        }
        this.showBackButtonValue = changes.showBackButton.currentValue;
    };
    StretchyHeader.prototype.ngOnInit = function () {
        this.header = this.element.nativeElement.getElementsByClassName('strechy-header')[0];
        // console.log( this.header.getElementsByClassName('toolbar')[0] );
        var newH = this.headerHeight;
        if (this.hasNavbar == "true") {
            if (this.plt.is('iphone') || this.plt.is('ios')) {
                newH = parseInt(this.headerHeight) + 64;
            }
            else {
                newH = parseInt(this.headerHeight) + 56;
            }
        }
        else if (this.showBackButton == 'true' && this.hasNavbar == "false") {
            if (this.plt.is('iphone') || this.plt.is('ios')) {
                newH = parseInt(this.headerHeight) + 64;
            }
            else {
                newH = parseInt(this.headerHeight) + 56;
            }
        }
        this.renderer.setElementStyle(this.header, 'height', '50' + 'vh');
        this.renderer.setElementStyle(this.header, 'z-index', '2');
        this.htmlToAdd = '<h5 class="title animated onBottom" no-padding no-margin >' + this.title + '</h5>';
        if (this.showBackButton == "false") {
            this.renderer.setElementStyle(this.element.nativeElement.getElementsByClassName('back')[0], 'display', 'none');
        }
    };
    return StretchyHeader;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StretchyHeader.prototype, "headerHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StretchyHeader.prototype, "backgroundHeader", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StretchyHeader.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StretchyHeader.prototype, "showBackButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StretchyHeader.prototype, "hasNavbar", void 0);
StretchyHeader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'strechy-header',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
        template: '<ion-header>' +
            '<ng-content></ng-content>' +
            '<ion-icon name="arrow-back" class="back" navPop ></ion-icon>' +
            '<div class="strechy-header" id="strechy-header" text-center >' +
            '<div class="blur-filter"></div>' +
            '<ion-row class="stretchy_header_title vertical-align-content ">' +
            '<ion-col [innerHtml]="htmlToAdd"> ' +
            '</ion-col>' +
            '</ion-row>' +
            '</div>' +
            '</ion-header>',
        styles: ['.back{position: absolute;z-index: 999;color: #fff;font-size: 30px;left: 10px;z-index: 999999}.stretchy_header_title{width:100%;}.stretchy_header_title .tweet_number{ color: #fff;z-index: 999;position: relative;font-size: 0.7em; }.blur-filter{ position:absolute; width:100%; height:100%;-webkit-backdrop-filter: blur(20px); opacity: 0;}.vertical-align-content {display: flex!important;align-self: flex-end}.picture{}']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Platform */]])
], StretchyHeader);

//# sourceMappingURL=stretchy-header.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_player_media_player__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_video_video_utils__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsPage; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/macintosh/Documents/devapp/Properti-Go/src/pages/post-details/post-details.html"*/'<strechy-header\n  headerHeight="200"\n  title="{{selectedItem.title.rendered}}"\n	backgroundHeader="{{ selectedItem.featured_image_urls.large }}"\n  showBackButton = "true"\n  hasNavbar = "true"\n  >\n</strechy-header>\n\n\n<ion-icon name="share" class="sharebutton" (click)="share()"></ion-icon>\n\n\n<ion-content profile-scroll class="no-scroll">\n\n<div class="main-content">\n\n <div *ngIf="selectedItem" class="selection">\n    <h2 [innerHTML]="selectedItem.title.rendered"></h2>\n    <div *ngIf="selectedItem.appp && selectedItem.appp.post_detail && selectedItem.appp.post_detail.below_title" [innerHTML]="selectedItem.appp.post_detail.below_title"></div>\n    <div *ngIf="content" [innerHTML]="content"></div>\n    <div *ngIf="selectedItem.appp && selectedItem.appp.post_detail && selectedItem.appp.post_detail.below_content" [innerHTML]="selectedItem.appp.post_detail.below_content | sanitizeHtml"></div>\n </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macintosh/Documents/devapp/Properti-Go/src/pages/post-details/post-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_5__providers_video_video_utils__["a" /* VideoUtils */]])
], PostDetailsPage);

//# sourceMappingURL=post-details.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sanitize_html__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__sanitize_html__["a" /* SanitizeHtml */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__sanitize_html__["a" /* SanitizeHtml */]]
    })
], SanitizeHtmlModule);

//# sourceMappingURL=sanitize-html.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtml; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sanitizeHtml'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */]])
], SanitizeHtml);

//# sourceMappingURL=sanitize-html.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map