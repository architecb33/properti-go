webpackJsonp([9],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_html_template__ = __webpack_require__(372);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHtmlTemplateModule", function() { return CustomHtmlTemplateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CustomHtmlTemplateModule = (function () {
    function CustomHtmlTemplateModule() {
    }
    return CustomHtmlTemplateModule;
}());
CustomHtmlTemplateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__custom_html_template__["a" /* CustomHtmlTemplate */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__custom_html_template__["a" /* CustomHtmlTemplate */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__custom_html_template__["a" /* CustomHtmlTemplate */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__custom_html_template__["a" /* CustomHtmlTemplate */]
        ]
    })
], CustomHtmlTemplateModule);

//# sourceMappingURL=custom-html-template.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHtmlTemplate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 * Template for creating custom HTML pages
 */
var CustomHtmlTemplate = (function () {
    function CustomHtmlTemplate(navParams, nav, modalCtrl, renderer, elementRef, viewCtrl, platform, translate, storage, events, toastCtrl, globalvars, headerLogoService) {
        this.navParams = navParams;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.translate = translate;
        this.storage = storage;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.globalvars = globalvars;
        this.headerLogoService = headerLogoService;
        this.rtlBack = false;
        this.show_segments = false;
        this.show_header_logo = false;
        this.pagetitle = navParams.data.title;
        if (navParams.data.is_home == true) {
            this.doLogo();
        }
        // kill vids on android
        if (platform.is('android')) {
            this.killVideos();
        }
        this.pages = this.getPages(); // not just pages: this is the whole myappp data
        this.menus = {
            side: this.getSideMenu(),
            tabs: this.getTabs()
        };
        this.segments = this.getSegments();
    }
    CustomHtmlTemplate.prototype.ngOnInit = function () {
        var slug = this.navParams.data.slug;
        this.slug = slug;
        this.customClasses = 'custom-page page-' + this.slug;
        this.listener();
    };
    CustomHtmlTemplate.prototype.ionViewWillEnter = function () {
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
    };
    CustomHtmlTemplate.prototype.listener = function () {
        // Listen for link clicks, open in in app browser
        this.listenFunc = this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) {
            if (event.target.href && event.target.href.indexOf('http') >= 0) {
                event.preventDefault();
                if (event.target.target && event.target.target) {
                    window.open(event.target.href, event.target.target);
                }
                else {
                    window.open(event.target.href, '_blank');
                }
            }
        });
    };
    // changes the back button transition direction if app is RTL
    CustomHtmlTemplate.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    CustomHtmlTemplate.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    // stop videos from playing when app is exited, required by Google
    CustomHtmlTemplate.prototype.killVideos = function () {
        var _this = this;
        this.platform.pause.subscribe(function () {
            var frames = _this.elementRef.nativeElement.getElementsByTagName('iframe');
            var Vidsrc;
            var _loop_1 = function (i) {
                if (/youtube|wistia|vimeo/.test(frames[i].src)) {
                    Vidsrc = frames[i].src;
                    frames[i].src = '';
                    setTimeout(function () {
                        frames[i].src = Vidsrc;
                    }, 500);
                }
            };
            for (var i in frames) {
                _loop_1(i);
            }
        });
    };
    CustomHtmlTemplate.prototype.random = function (min, max) {
        if (min == null && max == null) {
            max = 1;
        }
        min = +min || 0;
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * ((+max || 0) - min + 1));
    };
    CustomHtmlTemplate.prototype.doLogo = function () {
        var _this = this;
        // check if logo file exists. If so, show it
        this.headerLogoService.checkLogo().then(function (data) {
            _this.show_header_logo = true;
            _this.header_logo_url = data;
        }).catch(function (e) {
            // no logo, do nothing
            //console.log(e)
        });
    };
    /**
     * Get side menu index by page slug
     */
    CustomHtmlTemplate.prototype.getMenuIndexBySlug = function (slug) {
        return this.getIndexBySlug(slug, this.menus.side);
    };
    /**
     * Get tab menu index by page slug
     * @param slug page slug
     */
    CustomHtmlTemplate.prototype.getTabIndexBySlug = function (slug) {
        return this.getIndexBySlug(slug, this.menus.tabs);
    };
    /**
     * Side or tab menus
     * @param slug page slug
     * @param pages menu or tab pages
     */
    CustomHtmlTemplate.prototype.getIndexBySlug = function (slug, pages) {
        var menu_index;
        var count = 0;
        if (!pages)
            return menu_index;
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            if (page.slug && page.slug == slug) {
                menu_index = count;
            }
            count++;
        }
        ;
        if (!menu_index && menu_index !== 0)
            console.log(pages); // you can find the slugs here
        return menu_index;
    };
    CustomHtmlTemplate.prototype.getPage = function (page_slug) {
        var _this = this;
        var menu_index;
        var page;
        menu_index = this.getMenuIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.menus.side[menu_index];
        }
        menu_index = this.getTabIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.menus.tabs[menu_index];
        }
        // otherwise . . .
        this.translate.get('Page not found').subscribe(function (text) {
            _this.presentToast(text);
        });
        return false;
    };
    CustomHtmlTemplate.prototype.pushPage = function (page) {
        if (typeof page === 'string') {
            page = this.getPage(page);
            if (page === false)
                return;
        }
        if (page.target === '_blank' && page.extra_classes.indexOf('system') >= 0) {
            window.open(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            window.open(page.url, page.target, null);
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        if (page.type === 'apppages' && page.page_type === 'list') {
            this.nav.push('PostList', page, opt);
        }
        else if (page.type === 'apppages') {
            this.nav.push(this.getPageModuleName(page.page_id), page, opt);
        }
        else if (page.url) {
            this.nav.push('Iframe', page, opt);
        }
        else {
            this.nav.push(page.component, page.navparams, opt);
        }
    };
    CustomHtmlTemplate.prototype.openPage = function (page) {
        if (typeof page === 'string') {
            page = this.getPage(page);
            if (page === false)
                return;
        }
        if (page.target === '_blank' && page.extra_classes.indexOf('system') >= 0) {
            window.open(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            window.open(page.url, page.target, null);
            return;
        }
        if (page.type === 'apppages' && page.page_type === 'list') {
            this.nav.setRoot('PostList', page);
        }
        else if (page.type === 'apppages') {
            this.nav.setRoot(this.getPageModuleName(page.page_id), page);
        }
        else if (page.url) {
            this.nav.setRoot('Iframe', page);
        }
        else {
            this.nav.setRoot(page.component, page.navparams);
        }
    };
    CustomHtmlTemplate.prototype.back = function () {
        this.nav.pop();
    };
    CustomHtmlTemplate.prototype.mediaModal = function (src, img) {
        if (img === void 0) { img = null; }
        var modal = this.modalCtrl.create('MediaPlayer', { source: src, image: img });
        modal.present();
    };
    CustomHtmlTemplate.prototype.updateData = function () {
        window.localStorage.removeItem('myappp');
        this.storage.remove('segments');
        this.events.publish('data:update', true);
    };
    CustomHtmlTemplate.prototype.changeRTL = function (event, rtl) {
        if (rtl) {
            this.platform.setDir('rtl', true);
        }
        else {
            this.platform.setDir('ltr', true);
        }
        this.storage.set('is_rtl', rtl);
    };
    CustomHtmlTemplate.prototype.showSegments = function () {
        var modal = this.modalCtrl.create('PushSettings');
        modal.present();
    };
    CustomHtmlTemplate.prototype.showLanguages = function () {
        var modal = this.modalCtrl.create('LanguageSettings');
        modal.present();
    };
    CustomHtmlTemplate.prototype.loginModal = function () {
        this.login_modal = this.modalCtrl.create('LoginModal');
        this.login_modal.present();
    };
    CustomHtmlTemplate.prototype.getPages = function () {
        if (!this.pages) {
            this.pages = JSON.parse(window.localStorage.getItem('myappp'));
        }
        return this.pages;
    };
    CustomHtmlTemplate.prototype.getSegments = function () {
        if (!this.segments)
            this.segments = JSON.parse(window.localStorage.getItem('segments'));
        return this.segments;
    };
    CustomHtmlTemplate.prototype.getSideMenu = function () {
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        return myappp.menus.items;
    };
    CustomHtmlTemplate.prototype.getTabs = function () {
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        return myappp.tab_menu.items;
    };
    CustomHtmlTemplate.prototype.getPageModuleName = function (page_id) {
        console.log('isInProductionMode', this.globalvars.isInProductionMode);
        if (this.globalvars.isInProductionMode)
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    return CustomHtmlTemplate;
}());
CustomHtmlTemplate = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
        priority: 'high'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/custom-html-template/custom-html-template.html"*/'<ion-header>\n\n  <ion-navbar>\n\n	<ion-buttons start>\n		<button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n			<ion-icon name="arrow-back"></ion-icon>\n			{{\'Back\' | translate }}\n		</button>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n	</ion-buttons>\n\n	<img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    <ion-title *ngIf="!show_header_logo">{{pagetitle | translate}}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="customClasses">\n\nContent goes here\n\n</ion-content>\n'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/custom-html-template/custom-html-template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__["a" /* HeaderLogo */]])
], CustomHtmlTemplate);

//# sourceMappingURL=custom-html-template.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map