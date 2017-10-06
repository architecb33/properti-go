webpackJsonp([9],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalvars_globalvars__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(36);
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
  Push Notifications

  See http://ionicframework.com/docs/v2/native/push/
*/
var PushService = (function () {
    function PushService(http, globalvars, storage, Device) {
        this.http = http;
        this.globalvars = globalvars;
        this.storage = storage;
        this.Device = Device;
    }
    // Subscribe for push through our API service
    PushService.prototype.subscribeDevice = function (token) {
        var _this = this;
        this.platform = this.Device.platform;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/subscribe/';
        this.appid = this.globalvars.getAppId();
        var params = '?token=' + token + '&platform=' + this.platform + '&id=' + this.appid;
        console.debug('subscribeDevice', this.api + params);
        return new Promise(function (resolve) {
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { return console.warn('subscribeDevice error' + error); });
        });
    };
    // sends device id to WordPress to save as user meta, which we use later to send pushes to specific devices.
    PushService.prototype.sendDeviceToWp = function (id, ajaxurl) {
        var _this = this;
        var params = '?action=ap3_add_device_id&endpoint=' + id;
        // console.log('sending device id to wp: ' + ajaxurl + params );
        return new Promise(function (resolve) {
            _this.http.post(ajaxurl + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { return console.warn('sendDeviceToWp error', error); });
        });
    };
    // Subscribe to a topic, for push segmenting
    PushService.prototype.subscribeToTopic = function (token, topicArn) {
        var _this = this;
        this.platform = this.Device.platform;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/subscribe/';
        this.appid = this.globalvars.getAppId();
        var params = '?token=' + token + '&platform=' + this.platform + '&id=' + this.appid + '&topicarn=' + topicArn;
        return new Promise(function (resolve) {
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(JSON.parse(data));
            }, function (error) { return console.warn('subscribe topic error' + error); });
        });
    };
    // Unsubscribe. Requires subscriptionArn which is returned after subscribing to a topic.
    PushService.prototype.unsubscribe = function (subscriptionArn) {
        var _this = this;
        var apiRoot = this.globalvars.getApiRoot();
        this.api = apiRoot + 'wp-json/ap3/v1/unsubscribe/';
        var params = '?subscriptionArn=' + subscriptionArn;
        return new Promise(function (resolve) {
            _this.http.post(_this.api + params, null, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(JSON.parse(data));
            }, function (error) { return console.warn('Unsubscribe error' + error); });
        });
    };
    return PushService;
}());
PushService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_3__globalvars_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */]])
], PushService);

//# sourceMappingURL=push.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/custom-pages/custom-page.module": [
		318,
		1
	],
	"../pages/iframe/iframe.module": [
		320,
		3
	],
	"../pages/language-settings/language-settings.module": [
		321,
		8
	],
	"../pages/login-modal/login-modal.module": [
		322,
		7
	],
	"../pages/media-player/media-player.module": [
		319,
		0
	],
	"../pages/post-details/post-details.module": [
		323,
		2
	],
	"../pages/post-list/post-list.module": [
		324,
		6
	],
	"../pages/push-settings/push-settings.module": [
		325,
		5
	],
	"../pages/tabs/tabs.module": [
		326,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCamera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_action_sheet__ = __webpack_require__(218);
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
  Generated class for the Menus provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AppCamera = (function () {
    function AppCamera(actionSheet, Camera, Device, Transfer, File) {
        this.actionSheet = actionSheet;
        this.Camera = Camera;
        this.Device = Device;
        this.Transfer = Transfer;
        this.File = File;
        this.options = {
            quality: 30,
            destinationType: this.Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            targetWidth: 1204,
            targetHeight: 1204
        };
        this.appbuddy = false;
    }
    AppCamera.prototype.openSheet = function (appbuddy) {
        var _this = this;
        var buttonLabels = ['Take Photo', 'Photo Library'];
        this.actionSheet.show({
            title: 'Choose an image',
            buttonLabels: buttonLabels,
            addCancelButtonWithLabel: 'Cancel',
            destructiveButtonLast: true
        }).then(function (buttonIndex) {
            if (buttonIndex === 1) {
                _this.takePicture(appbuddy);
            }
            else if (buttonIndex === 2) {
                _this.photoLibrary(appbuddy);
            }
        });
    };
    AppCamera.prototype.takePicture = function (appbuddy) {
        if (appbuddy) {
            this.appbuddy = true;
        }
        this.options.sourceType = this.Camera.PictureSourceType.CAMERA;
        this.doCamera();
    };
    AppCamera.prototype.photoLibrary = function (appbuddy) {
        if (appbuddy) {
            this.appbuddy = true;
        }
        // console.log('appbuddy app-camera.ts', this.appbuddy);
        this.options.sourceType = this.Camera.PictureSourceType.PHOTOLIBRARY;
        this.doCamera();
    };
    AppCamera.prototype.doCamera = function () {
        var _this = this;
        // sneak in the progress bar while taking/choosing photo for better UX
        this.progress_timeout = setTimeout(function () {
            _this.uploadProgress(5, 100);
        }, 1000);
        this.Camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // let base64Image = "data:image/jpeg;base64," + imageData;
            _this.uploadPhoto(imageData);
        }, function (err) {
            _this.hideProgress();
            alert(err);
        });
    };
    AppCamera.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // only look in active stack
        var components = document.querySelectorAll('#nav > ng-component');
        for (var i = components.length - 1; i >= 0; i--) {
            if (!components[i].hasAttribute('hidden')) {
                // this is the shown ng-component element
                var active = components[i];
            }
        }
        // If we have tabs views stack differently
        if (active.querySelectorAll('ion-tabs .show-tabbar').length) {
            // tabs exist, define iframe relative to active tab
            var page = active.querySelectorAll('ion-tab[aria-hidden=false] .show-page');
            this.iframe = page[0].getElementsByClassName('ap3-iframe')[0];
            return;
        }
        // if no tabs
        this.iframe = active.querySelector('#ap3-iframe');
        this.iframedoc = this.iframe.contentWindow.document;
    };
    AppCamera.prototype.uploadPhoto = function (imageURI) {
        var _this = this;
        var fileTransfer = this.Transfer.create();
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        this.iframewin = this.iframe.contentWindow.window;
        var image = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        var name = image.split("?")[0];
        var anumber = image.split("?")[1];
        var ajaxurl = this.iframewin.apppCore.ajaxurl;
        if ('Android' === this.Device.platform) {
            image = anumber + '.jpg';
        }
        // this creates a random string based on the date
        var d = new Date().toTimeString();
        var random = d.replace(/[\W_]+/g, "").substr(0, 6);
        var options = {
            fileKey: 'appp_cam_file',
            // prepend image name with random string to avoid duplicate upload errors
            fileName: imageURI ? random + image : random,
            mimeType: 'image/jpeg',
            httpMethod: "POST",
            chunkedMode: false
        };
        var params = {
            form_fields: null,
            form_values: null,
            appp_action: null,
            action: null,
            nonce: null,
        };
        var form_fields = [];
        var form_values = [];
        var iterator;
        var form = this.iframedoc.getElementById('appp_camera_form');
        var form_elements = form.elements;
        var shortcode_actions = ['new', 'this', 'library'];
        params.appp_action = 'attach'; // default: attach to BP activity
        // console.log('elements', form_elements);
        for (iterator = 0; iterator < form_elements.length; iterator++) {
            form_fields[iterator] = form_elements[iterator].name;
            form_values[iterator] = form_elements[iterator].value;
            // console.log(form_elements[iterator].name, form_elements[iterator].value);
            // set the action from the shortcode param
            if (form_elements[iterator].name == 'appp_action' && shortcode_actions.indexOf(form_elements[iterator].value) > -1) {
                params.appp_action = form_elements[iterator].value;
                params.action = form_elements[iterator].value;
            }
        }
        params.form_fields = JSON.stringify(form_fields);
        params.form_values = JSON.stringify(form_values);
        // Maybe do appbuddy attach stuff. Difference is the action, nonce, and transfer success function.
        if (this.appbuddy === true) {
            // console.log('appbuddy upload');
            // see appcamera/inc/AppPresser_Camera_Ajax.php
            params.action = 'upload_image';
            if (this.iframedoc.getElementById('apppcamera-upload-image')) {
                params.nonce = this.iframedoc.getElementById('apppcamera-upload-image').value;
            }
            else if (this.iframedoc.getElementById('attach-photo')) {
                params.nonce = this.iframedoc.getElementById('attach-photo').getAttribute('data-nonce');
            }
            options.params = params;
            fileTransfer.upload(imageURI, ajaxurl, options, true).then(function (msg) {
                _this.attachWin(msg);
            }).catch(function (e) {
                console.warn(e);
                _this.appbuddy = false;
                _this.hideProgress();
            });
        }
        else {
            // Not appbuddy, do normal photo upload
            this.iframedoc.getElementById('appp_cam_post_title').value = '';
            options.params = params;
            fileTransfer.upload(imageURI, encodeURI(ajaxurl), options, true).then(function (r) {
                _this.uploadWin(r);
            }).catch(function (e) {
                _this.uploadErr(e);
            });
        }
        fileTransfer.onProgress(function (e) {
            if (e.lengthComputable) {
                _this.uploadProgress(e.loaded, e.total);
            }
        });
    };
    AppCamera.prototype.uploadProgress = function (loaded, total) {
        if (typeof (this.iframedoc) === "undefined") {
            this.findIframe();
        }
        var progress = this.iframedoc.getElementById('cam-progress');
        progress.style.visibility = 'visible';
        var perc = Math.floor(loaded / total * 100);
        progress.value = perc;
    };
    AppCamera.prototype.hideProgress = function () {
        clearTimeout(this.progress_timeout);
        if (typeof (this.iframedoc) === "undefined") {
            this.findIframe();
        }
        var progress = this.iframedoc.getElementById('cam-progress');
        progress.style.visibility = 'hidden';
        progress.value = 0;
    };
    // handles displaying image in appbuddy activity modal after uploaded
    AppCamera.prototype.attachWin = function (r) {
        // console.log('attach win', r);
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        var action = this.iframedoc.getElementById('appp_action').value;
        var imgUrl = this.camUtil(r.response);
        var imgTag = (imgUrl) ? '<img src="' + imgUrl + '">' : '';
        this.iframedoc.getElementById('attach-image').value = imgUrl;
        this.iframedoc.getElementById('image-status').innerHTML = imgTag;
        this.hideProgress();
        this.iframedoc.getElementById('cam-status').innerHTML = '';
        // hide action sheet
        this.iframedoc.getElementById('attach-image-sheet').className =
            this.iframedoc.getElementById('attach-image-sheet').className.replace(/\bactive\b/, 'hide');
        this.appbuddy = false;
    };
    AppCamera.prototype.uploadWin = function (r) {
        // console.log('upload win', r);
        this.findIframe();
        this.iframedoc = this.iframe.contentWindow.document;
        var appcamera = this.iframe.contentWindow.window.appcamera;
        var msg = appcamera.msg.moderation;
        var status = this.iframedoc.getElementById('cam-status');
        if (!appcamera.moderation_on) {
            msg = appcamera.msg.success;
        }
        status.innerHTML = '<p>' + msg + '</p>';
        this.hideProgress();
        // clear message after 5 sec
        setTimeout(function () {
            status.innerHTML = '';
        }, 5000);
    };
    AppCamera.prototype.uploadErr = function (e) {
        console.warn(e);
        this.hideProgress();
    };
    // parse and fetch the image url we need
    AppCamera.prototype.camUtil = function (response) {
        var debug = false;
        if (response && response.indexOf("http") > 0) {
            var regex = new RegExp("(\"http(.*)\/upload(.*)\.(jpg|png)\")", "gm");
            var matches = response.match(regex);
            if (debug && matches && matches.length) {
                if (response != matches[0]) {
                    // console.log('attach img raw response', response, matches);
                }
                // console.log('attach img', matches);
            }
            if (matches[0]) {
                return JSON.parse(matches[0]);
            }
        }
        return '';
    };
    return AppCamera;
}());
AppCamera = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_action_sheet__["a" /* ActionSheet */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
], AppCamera);

//# sourceMappingURL=app-camera.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_admob__ = __webpack_require__(220);
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
  Admob

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AppAds = (function () {
    function AppAds(AdMob) {
        this.AdMob = AdMob;
    }
    AppAds.prototype.setOptions = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__ionic_native_admob__["a" /* AdMob */])
            return;
        var isTesting = false;
        // set position to top (2) or bottom (8) https://github.com/floatinghotpot/cordova-admob-pro/wiki/1.2-Method:-AdMob.setOptions()
        var pos = 8;
        this.AdMob.setOptions({
            position: pos,
            isTesting: isTesting // receiving test ad
        });
    };
    AppAds.prototype.createBanner = function (id) {
        console.log('create banner ' + id);
        if (!this.AdMob)
            return;
        this.AdMob.createBanner({
            adId: id,
            autoShow: true
        });
    };
    AppAds.prototype.interstitial = function (id) {
        if (!this.AdMob)
            return;
        this.AdMob.prepareInterstitial({
            adId: id,
            autoShow: true,
            adSize: 'SMART_BANNER'
        });
    };
    return AppAds;
}());
AppAds = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_admob__["a" /* AdMob */]])
], AppAds);

//# sourceMappingURL=appads.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbConnect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(222);
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
  Facebook Connect

  See http://ionicframework.com/docs/v2/native/facebook/
*/
var FbConnect = (function () {
    function FbConnect(http, storage, events, Facebook) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.Facebook = Facebook;
        this.fbconnectvars = {
            debug: false,
            login_scope: ['email', 'public_profile', 'user_friends'],
            l10n: {
                login_msg: 'Thanks for logging in, {{USERNAME}}!',
                fetch_user_fail: 'Sorry, login failed',
                not_authorized: 'Please log into this app.',
                fb_not_logged_in: 'Please log into Facebook.',
                wp_login_error: 'WordPress login error',
                login_fail: 'Login error, please try again.'
            }
        };
    }
    FbConnect.prototype.init = function () {
        var debug = this.fbconnectvars.debug;
        this.findIframe();
        // (<any>) syntax is to avoid typescript errors
        this.iframedoc = this.iframe.contentWindow.document;
        this.iframewin = this.iframe.contentWindow.window;
        if (typeof this.iframewin.apppfb == 'undefined') {
            return;
        }
        if (typeof this.iframewin.apppfb.l10n !== 'undefined') {
            this.fbconnectvars.l10n = this.iframewin.apppfb.l10n;
        }
    };
    FbConnect.prototype.login = function () {
        var _this = this;
        this.init();
        this.Facebook.login(this.fbconnectvars.login_scope).then(function (result) {
            // we get back an auth response here, should save it or something
            _this.statusChangeCallback(result);
        });
        // return false; // so not to submit the form
    };
    FbConnect.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // only look in active stack
        var components = document.querySelectorAll('#nav > ng-component');
        for (var i = components.length - 1; i >= 0; i--) {
            if (!components[i].hasAttribute('hidden')) {
                // this is the shown ng-component element
                var active = components[i];
            }
        }
        // If we have tabs views stack differently
        if (active.querySelectorAll('ion-tabs .show-tabbar').length) {
            // tabs exist, define iframe relative to active tab
            var page = active.querySelectorAll('ion-tab[aria-hidden=false] .show-page');
            this.iframe = page[0].getElementsByClassName('ap3-iframe')[0];
            return;
        }
        // if no tabs
        this.iframe = active.querySelector('#ap3-iframe');
    };
    // This is called with the results from from FB.getLoginStatus().
    FbConnect.prototype.statusChangeCallback = function (response) {
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.fbMe(response);
        }
        else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.not_authorized;
        }
        else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.fb_not_logged_in;
        }
    };
    FbConnect.prototype.fbMe = function (response) {
        var _this = this;
        this.Facebook.api("/me?fields=" + this.iframewin.apppfb.me_fields, null).then(function (response) {
            _this.fetchUser_Callback(response);
        });
    };
    // This function is called after a callback
    // from retreiving the user's email and fb_id
    FbConnect.prototype.fetchUser_Callback = function (response) {
        var _this = this;
        if (this.iframedoc.getElementById('status')) {
            this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.login_msg.replace('{{USERNAME}}', response.name);
        }
        // Send user info to WordPress login function
        if (typeof response.name != 'undefined' && typeof response.email != 'undefined') {
            this.wplogin(response.name, response.email).then(function (data) {
                // successfully logged in
                var context = _this.iframewin.location.pathname.substring(0, _this.iframewin.location.pathname.lastIndexOf("/"));
                var baseURL = _this.iframewin.location.protocol + '//' + _this.iframewin.location.hostname + (_this.iframewin.location.port ? ':' + _this.iframewin.location.port : '') + context;
                var app_ver = (_this.iframewin.apppCore.ver) ? _this.iframewin.apppCore.ver : '2';
                if (data && data["redirect_url"]) {
                    var redirect_url = data["redirect_url"];
                    if (redirect_url.indexOf('?') === -1 && redirect_url.indexOf('appp=') === -1) {
                        _this.iframewin.location.href = redirect_url + "?appp=" + app_ver;
                        return;
                    }
                    else if (redirect_url.indexOf('appp=') === -1) {
                        _this.iframewin.location.href = redirect_url + "&appp=" + app_ver;
                        return;
                    }
                    else {
                        _this.iframewin.location.href = data["redirect_url"];
                        return;
                    }
                }
                _this.iframewin.location.href = baseURL + "?appp=" + app_ver;
                _this.storage.set('user_login', data);
                // hide/show menu items in main app component
                _this.events.publish('user:login', data);
            });
        }
        else {
            console.log(response);
        }
    };
    // This function is called after a callback
    // from retreiving the user's email and fb_id
    FbConnect.prototype.fetchUser_CallbackError = function (response) {
        this.iframedoc.getElementById('status').innerHTML = this.fbconnectvars.l10n.fetch_user_fail;
    };
    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    FbConnect.prototype.checkLoginState = function () {
        var _this = this;
        this.Facebook.getLoginStatus().then(function (result) {
            _this.statusChangeCallback(result);
        });
    };
    /* Returns promise.
     * Usage: this.wplogin(name,email).then( response => { // do something });
     */
    FbConnect.prototype.wplogin = function (name, email) {
        var _this = this;
        var nameStripped = name.replace(/\s+/g, '');
        var params = '?appp=3&action=appp_wp_fblogin&user_email=' + email + '&full_name=' + nameStripped + '&security=' + this.iframewin.apppfb.security;
        return new Promise(function (resolve) {
            _this.http.post(_this.iframewin.apppCore.ajaxurl + params, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) { return alert(_this.fbconnectvars.l10n.wp_login_error); });
        });
    };
    return FbConnect;
}());
FbConnect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]])
], FbConnect);

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWoo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(224);
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
  Appwoo

*/
var AppWoo = (function () {
    function AppWoo(iab) {
        this.iab = iab;
    }
    AppWoo.prototype.paypal = function (paypal_url, redirect) {
        var _this = this;
        this.browser = this.iab.create(paypal_url, '_blank');
        this.browser.addEventListener('exit', function () {
            _this.browserClose(redirect);
        });
        this.browser.addEventListener('loadstop', function (event) {
            _this.loadstopEvent(event);
        });
    };
    AppWoo.prototype.browserClose = function (redirect) {
        // need to find iframe and change src
        this.findIframe();
        this.iframe.src = redirect;
    };
    AppWoo.prototype.loadstopEvent = function (event) {
        // get base url
        var test_url = event.url.split('/')[2];
        this.findIframe();
        var src = this.iframe.src;
        src = src.split('/')[2];
        // If url in in-app browser is one of our own,
        if (src == test_url) {
            // redirect
            this.iframe.src = event.url;
            // and trigger the in-app browser to close
            this.browser.close();
        }
    };
    AppWoo.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // only look in active stack
        var components = document.querySelectorAll('#nav > ng-component');
        for (var i = components.length - 1; i >= 0; i--) {
            if (!components[i].hasAttribute('hidden')) {
                // this is the shown ng-component element
                var active = components[i];
            }
        }
        // If we have tabs views stack differently
        if (active.querySelectorAll('ion-tabs .show-tabbar').length) {
            // tabs exist, define iframe relative to active tab
            var page = active.querySelectorAll('ion-tab[aria-hidden=false] .show-page');
            this.iframe = page[0].getElementsByClassName('ap3-iframe')[0];
            return;
        }
        // if no tabs
        this.iframe = active.querySelector('#ap3-iframe');
    };
    return AppWoo;
}());
AppWoo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], AppWoo);

//# sourceMappingURL=appwoo.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(37);
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
// on first load, use app-data.json file and save to localstorage.
// check if app needs update in background, set localstorage item
// on next load, if app needs update, go get new data and overwrite localstorage.
*/
var AppData = (function () {
    function AppData(http, Device) {
        this.http = http;
        this.Device = Device;
        this.data = null;
        this.local = false;
        this.updateNeeded = false;
    }
    /*
     * Get data in this priority:
     * 1. localStorage
     * 2. API
     * 3. app-data.json file
     * If anything fails, we go to the next one
     *
     * App is built with app-data.json file, which is never updated. Only API data and localStorage are updated, so falling back to app-data.json might break stuff, so it's a last resort.
     * If we are not on a device, always get data from the API. This makes sure the preview shows latest changes.
     */
    AppData.prototype.load = function (apiurl) {
        var _this = this;
        var item = window.localStorage.getItem('myappp');
        this.local = JSON.parse(item);
        this.updateNeeded = (window.localStorage.getItem('myappp_update') == 'true') ? true : false;
        if (this.Device.platform != 'iOS' && this.Device.platform != 'Android') {
            // if we are not on a device, don't cache data. helps preview update faster
            this.updateNeeded = true;
        }
        return new Promise(function (resolve, reject) {
            if (_this.local && _this.updateNeeded != true) {
                console.log('using localStorage data');
                // send back localstorage item
                resolve(_this.local);
            }
            else if (!_this.local && _this.updateNeeded != true) {
                console.log('using app-data.json');
                // get local app-data file
                _this.getData('app-data.json').then(function (data) {
                    resolve(data);
                });
            }
            else {
                console.log('get data from API');
                // get data from api
                _this.getData(apiurl).then(function (data) {
                    resolve(data);
                })
                    .catch(function (err) {
                    // API is down, or bad url, so we need to get app-data.json file. Send back to app.component.ts line 78
                    reject(err);
                });
            }
        });
    };
    AppData.prototype.getData = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                window.localStorage.removeItem('myappp');
                _this.local = window.localStorage.setItem('myappp', JSON.stringify(data));
                resolve(data);
            }, function (error) {
                // API is down, or bad url, send back to line 65
                reject(error);
            });
        });
    };
    /*
     * When you click "go live" in the app builder, it increments the update version, and this function tells the app to get new data on the next load.
     */
    AppData.prototype.checkForUpdates = function (apiurl) {
        var _this = this;
        var item = window.localStorage.getItem('myappp');
        this.local = JSON.parse(item);
        // Runs in the background, and set the app to update on the next load
        // check if local app_update_version and remote version match, set updateNeeded accordingly
        this.http.get(apiurl)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            if (_this.local.meta && data.meta && _this.local.meta.app_update_version != data.meta.app_update_version) {
                window.localStorage.setItem('myappp_update', 'true');
            }
            else {
                window.localStorage.removeItem('myappp_update');
            }
        });
    };
    AppData.prototype.handleError = function (err) {
        console.warn(err);
    };
    return AppData;
}());
AppData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
], AppData);

//# sourceMappingURL=appdata.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGeo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
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
  AppGeo

*/
var AppGeo = (function () {
    function AppGeo(Geolocation, http) {
        this.Geolocation = Geolocation;
        this.http = http;
        this.geolocation_options = {};
        this.position_options = null;
        this.url = '';
        this.beacon_started = false;
        this.interval_id = 0;
        this.wordpress_url = '';
    }
    AppGeo.prototype.startBeacon = function (geouserpref) {
        console.log('start geolocation beacon');
        if (geouserpref.interval && geouserpref.wordpress_url) {
            if (this.position_options === null) {
                this.setCurrentPositionOptions(geouserpref);
            }
            if (this.position_options && this.beacon_started === false) {
                this.beacon_started = true;
                this.wordpress_url = geouserpref.wordpress_url;
                this.geoLocate_user();
                this.interval_id = this.start_userInterval(geouserpref.interval);
                console.log('start interval_id', this.interval_id);
            }
        }
        else {
            this.stopBeacon('No interval or wordpress_url supplied');
        }
    };
    AppGeo.prototype.stopBeacon = function (msg) {
        console.log('stop interval_id', this.interval_id);
        clearInterval(this.interval_id);
        console.log('geouser beacon stopped', msg);
        this.beacon_started = false;
    };
    AppGeo.prototype.start_userInterval = function (interval) {
        var _this = this;
        if (interval) {
            // check every 60 seconds
            return window.setInterval(function () {
                _this.geoLocate_user();
            }, interval);
        }
        else {
            console.log('geouserpref interval not set');
        }
    };
    ;
    // store location data for user
    AppGeo.prototype.geoLocate_user = function () {
        var _this = this;
        this.Geolocation.getCurrentPosition().then(function (position) {
            _this.onSuccessGeoUser(position);
        }).catch(function (error) {
            _this.stopBeacon(error.message);
        });
    };
    ;
    AppGeo.prototype.getCurrentPositionOptions = function () {
        return this.position_options;
    };
    AppGeo.prototype.setCurrentPositionOptions = function (geouserdata) {
        var timeout, maximumAge, enableHighAccuracy;
        var default_options = {
            timeout: 5000,
            maximumAge: 3000,
            enableHighAccuracy: true,
        };
        var geolocation_options = geouserdata.options;
        if (typeof geolocation_options !== 'undefined') {
            // Timeout
            if (typeof geolocation_options.timeout !== 'undefined') {
                timeout = parseInt(geolocation_options.timeout);
                if (timeout && timeout >= 1000) {
                    default_options.timeout = timeout;
                }
            }
            // maximumAge
            if (typeof geolocation_options.maximumAge !== 'undefined') {
                maximumAge = parseInt(geolocation_options.maximumAge);
                if (maximumAge && maximumAge >= 1000) {
                    default_options.maximumAge = maximumAge;
                }
            }
            // enableHighAccuracy
            if (typeof geolocation_options.enableHighAccuracy !== 'undefined') {
                enableHighAccuracy = parseInt(geolocation_options.enableHighAccuracy);
                default_options.enableHighAccuracy = (enableHighAccuracy); // force a boolean
            }
        }
        this.position_options = default_options;
    };
    ;
    AppGeo.prototype.onSuccessGeoUser = function (position) {
        var _this = this;
        console.log('longitude', position.coords.longitude);
        console.log('latitude', position.coords.latitude);
        var ajax_url = this.wordpress_url + 'wp-admin/admin-ajax.php?action=appp_geo_user';
        var data = {
            'longitude': position.coords.longitude,
            'latitude': position.coords.latitude
        };
        this.http.post(ajax_url, data).subscribe(function (data) {
            var response = data.json();
            if (response.success === false) {
                _this.stopBeacon(response.data);
            }
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    ;
    return AppGeo;
}());
AppGeo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], AppGeo);

//# sourceMappingURL=appgeo.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLogo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderLogo = (function () {
    function HeaderLogo(http) {
        this.http = http;
        this.url = 'assets/header-logo.png';
    }
    HeaderLogo.prototype.checkLogo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('./assets/header-logo.png')
                .subscribe(function (data) {
                // logo file exists, return url 
                resolve(_this.url);
            }, function (error) {
                // logo file does not exist
                reject(error);
            });
        });
    };
    return HeaderLogo;
}());
HeaderLogo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], HeaderLogo);

//# sourceMappingURL=header-logo.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPlogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
 * Login to WordPress from the app
*/
var WPlogin = (function () {
    function WPlogin(http) {
        this.http = http;
        this.data = null;
        var item = window.localStorage.getItem('myappp');
        this.url = JSON.parse(item).wordpress_url;
    }
    /* Returns promise.
     * Usage:
     */
    WPlogin.prototype.login = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.url)
                reject({ data: { message: "No WordPress URL set. " } });
            var url = _this.url + 'wp-admin/admin-ajax.php?action=apppajaxlogin';
            var data = {
                action: 'apppajaxlogin',
                username: form.user,
                password: form.pass
            };
            var formData = new FormData();
            formData.append("username", form.user);
            formData.append("password", form.pass);
            var request = new XMLHttpRequest();
            request.open("POST", url);
            request.send(formData);
            request.onload = function (e) {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        resolve(JSON.parse(request.responseText));
                    }
                    else {
                        reject(JSON.parse(request.statusText));
                    }
                }
            };
        });
    };
    WPlogin.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.url + 'wp-admin/admin-ajax.php?action=apppajaxlogout';
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.success == true)
                    resolve(data);
                reject(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    WPlogin.prototype.handleError = function (err) {
        console.warn(err);
    };
    return WPlogin;
}());
WPlogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], WPlogin);

//# sourceMappingURL=wplogin.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoUtils; });
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


var VideoUtils = (function () {
    function VideoUtils(platform) {
        this.platform = platform;
    }
    // stop videos from playing when app is exited, required by Google
    VideoUtils.prototype.killVideos = function (elementRef) {
        this.platform.pause.subscribe(function () {
            var frames = elementRef.nativeElement.getElementsByTagName('iframe');
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
    return VideoUtils;
}());
VideoUtils = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */]])
], VideoUtils);

//# sourceMappingURL=video-utils.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Posts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(36);
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
  Generated class for the Posts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Posts = (function () {
    function Posts(http, storage) {
        this.http = http;
        this.storage = storage;
        this.data = null;
    }
    Posts.prototype.load = function (url, page) {
        var _this = this;
        // set pagination
        if (!page) {
            var page_1 = '1';
        }
        // if (this.data) {
        //   // already loaded data. this is handled elsewhere for now
        //   return Promise.resolve(this.data);
        // }
        return new Promise(function (resolve, reject) {
            var concat;
            // check if url already has a query param
            if (url.indexOf('?') > 0) {
                concat = '&';
            }
            else {
                concat = '?';
            }
            _this.storage.get('app_language').then(function (lang) {
                var language = '';
                if (lang) {
                    language = '&lang=' + lang;
                }
                _this.http.get(url + concat + 'appp=3&page=' + page + language)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.data = data;
                    resolve(_this.data);
                }, function (error) {
                    // probably a bad url or 404
                    reject(error);
                });
            });
        });
    };
    return Posts;
}());
Posts = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], Posts);

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export MyMissingTranslationHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_extend_menu_extend_menu__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_action_sheet__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_dialogs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_camera_app_camera__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_posts_posts__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_globalvars_globalvars__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_appads_appads__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_facebook_facebook__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_push_push__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_appwoo_appwoo__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_appdata_appdata__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_wplogin_wplogin__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_header_logo_header_logo__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_video_video_utils__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_appgeo_appgeo__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























/* Providers */












/* Other */

// required for ng translate, tells it to look in assets folder for trans files
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var MyMissingTranslationHandler = (function () {
    function MyMissingTranslationHandler() {
    }
    MyMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return MyMissingTranslationHandler;
}());

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                backButtonText: '',
                backButtonIcon: 'ios-arrow-back',
                loadingEnter: 'loading-pop-in',
                loadingLeave: 'loading-pop-out',
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                pageTransition: 'ios-transition',
                pageTransitionDelay: '0',
                spinner: 'ios',
                tabsPlacement: 'bottom',
                tabsLayout: 'title-hide',
                tabsHideOnSubPages: 'false'
            }, {
                links: [
                    { loadChildren: '../pages/custom-pages/custom-page.module#CustomPageModule', name: 'CustomPage', segment: 'custom-page', priority: 'high', defaultHistory: [] },
                    { loadChildren: '../pages/media-player/media-player.module#MediaPlayerModule', name: 'MediaPlayer', segment: 'media-player', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/iframe/iframe.module#IframeModule', name: 'Iframe', segment: 'iframe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/language-settings/language-settings.module#LanguageSettingsModule', name: 'LanguageSettings', segment: 'language-settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-modal/login-modal.module#LoginModalModule', name: 'LoginModal', segment: 'login-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/post-details/post-details.module#PostDetailsPageModule', name: 'PostDetailsPage', segment: 'post-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/post-list/post-list.module#PostListModule', name: 'PostList', segment: 'post-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/push-settings/push-settings.module#PushSettingsModule', name: 'PushSettings', segment: 'push-settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_36__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__providers_extend_menu_extend_menu__["a" /* ExtendMenuProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* MissingTranslationHandler */], useClass: MyMissingTranslationHandler },
            __WEBPACK_IMPORTED_MODULE_24__providers_camera_app_camera__["a" /* AppCamera */],
            __WEBPACK_IMPORTED_MODULE_25__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_26__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_27__providers_appads_appads__["a" /* AppAds */],
            __WEBPACK_IMPORTED_MODULE_28__providers_facebook_facebook__["a" /* FbConnect */],
            __WEBPACK_IMPORTED_MODULE_29__providers_push_push__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_30__providers_appwoo_appwoo__["a" /* AppWoo */],
            __WEBPACK_IMPORTED_MODULE_31__providers_appdata_appdata__["a" /* AppData */],
            __WEBPACK_IMPORTED_MODULE_35__providers_appgeo_appgeo__["a" /* AppGeo */],
            __WEBPACK_IMPORTED_MODULE_32__providers_wplogin_wplogin__["a" /* WPlogin */],
            __WEBPACK_IMPORTED_MODULE_33__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_action_sheet__["a" /* ActionSheet */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob__["a" /* AdMob */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_dialogs__["a" /* Dialogs */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_34__providers_video_video_utils__["a" /* VideoUtils */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendMenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExtendMenuProvider = (function () {
    function ExtendMenuProvider() {
    }
    return ExtendMenuProvider;
}());
ExtendMenuProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ExtendMenuProvider);

// Default 3D menu type
var Menu3DType = (function (_super) {
    __extends(Menu3DType, _super);
    function Menu3DType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var scale = 0.8;
        var correction = (plt.width() - (scale * plt.width())) / 2;
        var contentOpenedX = ((plt.width() - correction - 42) * (menu.isRightSide ? -1 : 1)) + 'px';
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        contentAni.fromTo('translateX', '0px', contentOpenedX);
        contentAni.fromTo('scale', '1', scale);
        _this.ani.add(contentAni);
        return _this;
    }
    return Menu3DType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d', Menu3DType);
// 3D open type
var Menu3DOpenType = (function (_super) {
    __extends(Menu3DOpenType, _super);
    function Menu3DOpenType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
        var menuAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getMenuElement());
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        menuAni.fromTo('translateX', '-50%', '0');
        menuAni.fromTo('perspective', '100em', '0');
        menuAni.fromTo('rotateY', '90deg', '0');
        _this.ani.add(menuAni);
        contentAni.fromTo('translateX', '0', contentOpenedX);
        _this.ani.add(contentAni);
        return _this;
    }
    return Menu3DOpenType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-open', Menu3DOpenType);
// 3D skew type
var Menu3DSkewType = (function (_super) {
    __extends(Menu3DSkewType, _super);
    function Menu3DSkewType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
        var menuAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getMenuElement());
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        menuAni.fromTo('translateX', '-50%', '0');
        menuAni.fromTo('perspective', '100em', '0');
        menuAni.fromTo('rotateY', '-90deg', '0');
        _this.ani.add(menuAni);
        contentAni.fromTo('translateX', '0', contentOpenedX);
        contentAni.fromTo('rotateY', '0', '45deg');
        _this.ani.add(contentAni);
        menu.getContentElement().parentElement.style.perspective = (plt.width() * 2) + 'px';
        menu.getContentElement().style.transformOrigin = '0 50%';
        return _this;
    }
    return Menu3DSkewType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-skew', Menu3DSkewType);
// 3D fall down type
var Menu3DFallDownType = (function (_super) {
    __extends(Menu3DFallDownType, _super);
    function Menu3DFallDownType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
        var menuAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getMenuElement());
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        menuAni.fromTo('translateY', '-100%', '0');
        _this.ani.add(menuAni);
        contentAni.fromTo('translateX', '0', contentOpenedX);
        _this.ani.add(contentAni);
        return _this;
    }
    return Menu3DFallDownType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-fall-down', Menu3DFallDownType);
// 3D float up type
var Menu3DFloatUpType = (function (_super) {
    __extends(Menu3DFloatUpType, _super);
    function Menu3DFloatUpType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
        var menuAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getMenuElement());
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        menuAni.fromTo('translateY', '100%', '0');
        _this.ani.add(menuAni);
        contentAni.fromTo('translateX', '0', contentOpenedX);
        _this.ani.add(contentAni);
        return _this;
    }
    return Menu3DFloatUpType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-float-up', Menu3DFloatUpType);
//3D scale back type
var Menu3DScaleBackType = (function (_super) {
    __extends(Menu3DScaleBackType, _super);
    function Menu3DScaleBackType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var scale = 0.8;
        var correction = (plt.width() - (scale * plt.width())) / 2;
        var contentOpenedX = ((plt.width() - correction - 60) * (menu.isRightSide ? -1 : 1)) + 'px';
        var menuAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getMenuElement());
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        var backdropApi = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getBackdropElement());
        menuAni.fromTo('translateX', '-100%', '0');
        _this.ani.add(menuAni);
        contentAni.fromTo('translateX', '0', contentOpenedX);
        contentAni.fromTo('scale', '1', scale);
        contentAni.fromTo('rotateY', '0', '-45deg');
        _this.ani.add(contentAni);
        backdropApi.fromTo('opacity', 0.01, 0.35);
        _this.ani.add(backdropApi);
        menu.getContentElement().parentElement.style.perspective = (plt.width() * 3) + 'px';
        menu.getContentElement().style.zIndex = '-2';
        return _this;
    }
    return Menu3DScaleBackType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-scale-back', Menu3DScaleBackType);
// 3D scale up type
var Menu3DScaleUpType = (function (_super) {
    __extends(Menu3DScaleUpType, _super);
    function Menu3DScaleUpType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
        var menuAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getMenuElement());
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        menuAni.fromTo('translateX', '-25%', '0');
        menuAni.fromTo('scale', '0.5', '1');
        _this.ani.add(menuAni);
        contentAni.fromTo('translateX', '0', contentOpenedX);
        _this.ani.add(contentAni);
        return _this;
    }
    return Menu3DScaleUpType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-scale-up', Menu3DScaleUpType);
// 3D rotate out type
var Menu3DRotateOutType = (function (_super) {
    __extends(Menu3DRotateOutType, _super);
    function Menu3DRotateOutType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
        var menuAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getMenuElement());
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        menuAni.fromTo('translateX', '-100%', '0');
        menuAni.fromTo('perspective', '100em', '0');
        menuAni.fromTo('rotateY', '-90deg', '0');
        _this.ani.add(menuAni);
        contentAni.fromTo('translateX', '0', contentOpenedX);
        _this.ani.add(contentAni);
        return _this;
    }
    return Menu3DRotateOutType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-rotate-out', Menu3DRotateOutType);
// 3D reverse slide type
var Menu3DReverseSlideType = (function (_super) {
    __extends(Menu3DReverseSlideType, _super);
    function Menu3DReverseSlideType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var contentOpenedX = (menu.width() * (menu.isRightSide ? -1 : 1)) + 'px';
        var menuAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getMenuElement());
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        menuAni.fromTo('translateX', '100%', '0');
        _this.ani.add(menuAni);
        contentAni.fromTo('translateX', '0', contentOpenedX);
        _this.ani.add(contentAni);
        return _this;
    }
    return Menu3DReverseSlideType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-reverse-slide', Menu3DReverseSlideType);
// 3D content down type
var Menu3DContentDownType = (function (_super) {
    __extends(Menu3DContentDownType, _super);
    function Menu3DContentDownType(menu, plt) {
        var _this = _super.call(this, plt) || this;
        var scale = 0.8;
        var correction = (plt.height() - (scale * plt.height())) / 2;
        var headerHeight = menu.getContentElement().getElementsByTagName('ion-navbar')[0].clientHeight;
        var contentOpenedX = (plt.height() - correction - (headerHeight * scale)) + 'px';
        var contentAni = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Animation */](plt, menu.getContentElement());
        contentAni.fromTo('translateY', '0', contentOpenedX);
        contentAni.fromTo('scale', '1', scale);
        _this.ani.add(contentAni);
        return _this;
    }
    return Menu3DContentDownType;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuType */]));
__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */].registerType('3d-content-down', Menu3DContentDownType);
//# sourceMappingURL=extend-menu.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_app_camera__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appads_appads__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_facebook_facebook__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_push_push__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_appwoo_appwoo__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_appdata_appdata__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_appgeo_appgeo__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_dialogs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_keyboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Framework */





/* Providers (make sure to add to app.module.ts providers too) */








/* Native */









var MyApp = (function () {
    function MyApp(platform, appCamera, menu, globalvars, appads, appgeo, fbconnect, sanitizer, pushService, appwoo, appdata, toastCtrl, storage, modalCtrl, events, translate, Keyboard, SplashScreen, StatusBar, Network, SocialSharing, Device, Push, http, Dialogs, config) {
        var _this = this;
        this.platform = platform;
        this.appCamera = appCamera;
        this.menu = menu;
        this.globalvars = globalvars;
        this.appads = appads;
        this.appgeo = appgeo;
        this.fbconnect = fbconnect;
        this.sanitizer = sanitizer;
        this.pushService = pushService;
        this.appwoo = appwoo;
        this.appdata = appdata;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.translate = translate;
        this.Keyboard = Keyboard;
        this.SplashScreen = SplashScreen;
        this.StatusBar = StatusBar;
        this.Network = Network;
        this.SocialSharing = SocialSharing;
        this.Device = Device;
        this.Push = Push;
        this.http = http;
        this.Dialogs = Dialogs;
        this.config = config;
        this.navparams = [];
        this.showmenu = false;
        this.bothMenus = false;
        this.showLogin = false;
        this.menu_side = "left";
        this.rtl = false;
        this.initializeApp();
        events.subscribe('user:login', function (data) {
            _this.userLogin(data);
        });
        events.subscribe('user:logout', function (obj) {
            _this.userLogout();
        });
        events.subscribe('data:update', function (obj) {
            _this.fetchData(obj);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.apiurl = _this.globalvars.getApi();
            _this.fetchData(false);
            _this.doConnectionEvents();
            _this.attachListeners();
            _this.maybeDoPush();
            // prevents bug where select done button didn't display
            _this.Keyboard.hideKeyboardAccessoryBar(false);
            // Disable scroll fixes webview displacement, but hides content lower on page. Can't use
            //Keyboard.disableScroll(true);
            // check for API updates on resume and on initial load
            _this.platform.resume.subscribe(function () {
                console.log('App resumed');
                _this.appdata.checkForUpdates(_this.apiurl);
            });
            setTimeout(function () {
                _this.appdata.checkForUpdates(_this.apiurl);
            }, 5000);
        });
    };
    MyApp.prototype.fetchData = function (reset) {
        var _this = this;
        // if refreshing the app, have to reset variables first
        if (reset) {
            this.tabs = [];
            this.pages = null;
            this.bothMenus = false;
            this.navparams = [];
            this.showmenu = false;
        }
        // get our app data, then use it. will return either local data, or get from api
        this.appdata.getData('app-data.json').then(function (data) {
            console.log('Got local data file.');
            _this.afterData(data);
        });
    };
    MyApp.prototype.afterData = function (data) {
        this.SplashScreen.hide();
        this.loadMenu(data);
        this.showLogin = (data.side_menu_login == "on") ? true : false;
        this.menu_side = (data.meta.menu_right == true) ? "right" : "left";
        this.rtl = (data.meta.rtl == true) ? true : false;
        this.verifyLanguageFile(data);
        if (this.rtl === true)
            this.platform.setDir('rtl', true);
        this.loadStyles(data);
        this.maybeDoAds(data);
        this.doStatusBar(data);
        this.getSetLang(data);
        this.getSetLogin();
        this.apptitle = data.title;
    };
    MyApp.prototype.loadMenu = function (data) {
        // console.log('loadmenu', data);
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        // If we have a tab menu, set that up
        if (data.tab_menu.items) {
            // Add pages manually here, can use different components like this... (then use the slug name to create your page, etc. www/build/custom.html)
            // let e = { 'title': "Custom Page", 'type': 'apppages', 'class': "information-circle", slug: 'custom', extra_classes: '' };
            // data.tab_menu.items.push( e );
            for (var _i = 0, _a = data.tab_menu.items; _i < _a.length; _i++) {
                var item = _a[_i];
                // set component, default is Iframe
                var root = 'Iframe';
                if (item.type === 'apppages' && item.page_type === 'list') {
                    root = 'PostList';
                }
                else if (item.type === 'apppages') {
                    root = this.getPageModuleName(item.page_id);
                }
                // hide the tab if user added class of hide
                item.show = true;
                if (item.extra_classes.indexOf('hide') >= 0 || item.extra_classes.indexOf('loggedin') >= 0) {
                    item.show = false;
                }
                this.navParamsPush(item, root);
            }
            this.tabs = this.navparams;
            if (typeof this.originalTabs === 'undefined')
                this.originalTabs = this.tabs.slice(); // make a copy
            this.nav.setRoot('TabsPage', this.tabs);
        }
        if (data.menus.items) {
            this.pages = data.menus.items;
            this.showmenu = true;
            // Add pages manually here, can use different components like this... (then use the slug name to create your page, etc. www/build/custom.html)
            // let e = { 'title': "Custom Page", 'component': CustomPage, 'class': "information-circle", 'navparams': { slug: 'custom' }, extra_classes: '' };
            // this.pages.push( e );
            // set the home page to the proper component
            if (this.tabs) {
                this.pages.unshift({ 'title': data.tab_menu.name, 'url': '', 'component': 'TabsPage', 'navparams': this.navparams, 'class': 'home', 'extra_classes': 'hide', 'is_home': true });
            }
            else if (!this.tabs && data.menus.items[0].type === 'apppages') {
                // used for custom logo
                data.menus.items[0].is_home = true;
                // if it's a list page, use PostList component
                if (data.menus.items[0].page_type === 'list') {
                    this.nav.setRoot('PostList', data.menus.items[0]);
                }
                else {
                    // otherwise use CustomPage
                    this.nav.setRoot(this.getPageModuleName(data.menus.items[0].page_id), data.menus.items[0]);
                }
            }
            else {
                // used for custom logo
                data.menus.items[0].is_home = true;
                // anything else uses Iframe component
                this.nav.setRoot('Iframe', data.menus.items[0]);
            }
        }
        // Only show the intro if there's a slug
        if (data.meta.intro_slug && data.meta.intro_slug != '')
            this.maybeShowIntro(data.meta.intro_slug);
        if (data.tab_menu.items && data.menus.items) {
            // we have both menus, use pushPage on sidemenu
            this.bothMenus = true;
        }
    };
    // construct tab items
    MyApp.prototype.navParamsPush = function (item, root) {
        var page;
        this.navparams.push({
            'title': item.title,
            'url': item.url,
            'root': root,
            'icon': item.class,
            'slug': item.slug,
            'list_route': item.list_route,
            'list_display': item.list_display,
            'favorites': item.favorites,
            'extra_classes': item.extra_classes,
            'show': item.show,
            'show_slider': item.show_slider,
            'slide_route': item.slide_route,
            'type': item.type,
            'page_type': item.page_type,
            'page_id': item.page_id,
            'is_home': true
        });
    };
    // If there is a page called "Intro", show it the first time the app is used
    MyApp.prototype.maybeShowIntro = function (slug) {
        this.introshown = window.localStorage.getItem('app-intro-shown');
        if (this.introshown === "true")
            return;
        var page_id = this.getPageIdBySlug(slug);
        var intro = { 'title': "Introduction", 'component': this.getPageModuleName(page_id), 'class': "", 'navparams': { 'slug': slug } };
        this.nav.push(this.getPageModuleName(page_id), intro.navparams);
        window.localStorage.setItem('app-intro-shown', "true");
    };
    /**
     * Get side menu index by page slug
     */
    MyApp.prototype.getMenuIndexBySlug = function (slug) {
        return this.getIndexBySlug(slug, this.pages);
    };
    /**
     * Get tab menu index by page slug
     * @param slug page slug
     */
    MyApp.prototype.getTabIndexBySlug = function (slug) {
        return this.getIndexBySlug(slug, this.tabs);
    };
    /**
     * Side or tab menus
     * @param slug page slug
     * @param pages menu or tab pages
     */
    MyApp.prototype.getIndexBySlug = function (slug, pages) {
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
    MyApp.prototype.getPageIdBySlug = function (slug) {
        var page_id = 0;
        this.pages.forEach(function (page) {
            if (page.slug && page.slug == slug && page.page_id)
                page_id = page.page_id;
        });
        return page_id;
    };
    // side menu link. determine which func to use
    MyApp.prototype.menuLink = function (p, e) {
        if (p.extra_classes.indexOf('submenu-parent') >= 0) {
            this.doSubMenus(e);
            return;
        }
        if (this.bothMenus || (p.extra_classes && p.extra_classes.indexOf('push-page') >= 0)) {
            this.pushPage(p);
        }
        else {
            this.openPage(p);
        }
    };
    // Handles opening and closing submenus
    MyApp.prototype.doSubMenus = function (e) {
        var button;
        if (e.target.classList && e.target.classList.contains('submenu-parent')) {
            button = e.target;
        }
        else if (e.target.classList) {
            button = e.target.closest('.submenu-parent');
        }
        if (button.classList && button.classList.contains('submenu-parent')) {
            if (button.classList.contains('open-menu')) {
                button.classList.remove('open-menu');
            }
            else {
                button.classList.add('open-menu');
            }
            var el = button.nextSibling;
            while (el.classList && el.classList.contains('submenu-child')) {
                if (el.classList.contains('open')) {
                    el.classList.remove('open');
                }
                else {
                    el.classList.add('open');
                }
                el = el.nextSibling;
            }
            return;
        }
    };
    MyApp.prototype.openPage = function (page) {
        // don't do anything if someone clicks a nav divider
        if (typeof (page.extra_classes) != "undefined" && page.extra_classes.indexOf('divider') >= 0)
            return;
        // close the menu when clicking a link from the menu
        this.menu.close();
        if (page.target === '_blank' && typeof (page.extra_classes) !== 'undefined' && page.extra_classes.indexOf('system') >= 0) {
            this.openIab(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            this.openIab(page.url, page.target, null);
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
    MyApp.prototype.pushPage = function (page) {
        // don't do anything if someone clicks a nav divider
        if (typeof (page.extra_classes) != "undefined" && page.extra_classes.indexOf('divider') >= 0)
            return;
        // close the menu when clicking a link from the menu
        this.menu.close();
        if (page.target === '_blank' && page.extra_classes.indexOf('system') >= 0) {
            this.openIab(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            this.openIab(page.url, page.target, null);
            return;
        }
        var opt = {};
        if (this.rtl === true && this.platform.is('ios'))
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
    MyApp.prototype.openTab = function (tab_index) {
        this.restoreTabs();
        var tabs = this.nav.getActiveChildNav();
        if (tabs) {
            this.nav.popToRoot({ animate: true }).then(function () {
                tabs.select(tab_index);
            });
        }
    };
    /**
     * Experimental: need to get this.removeNewTab() working
     * @param page object
     */
    MyApp.prototype.openNewTab = function (page) {
        var _this = this;
        this.nav.popToRoot({ animate: true }).then(function () {
            _this.restoreTabs();
            _this.tabs.unshift(page);
            var loggedin = (typeof _this.login_data === 'object');
            _this.resetTabs(loggedin);
            _this.nav.setRoot('TabsPage', _this.navparams);
        });
    };
    /**
     * Restore the original tabs.
     */
    MyApp.prototype.restoreTabs = function () {
        this.tabs = this.originalTabs.slice(); // copy back
    };
    MyApp.prototype.openMenuLink = function (data) {
        var _this = this;
        var page;
        var menu_index;
        if (typeof data.menulink.menu !== 'undefined') {
            if (typeof data.menulink.menu === 'number')
                menu_index = data.menulink.menu;
            else if (typeof data.menulink.menu === 'string')
                menu_index = this.getMenuIndexBySlug(data.menulink.menu);
            if (typeof menu_index !== 'undefined')
                page = this.pages[menu_index];
        }
        else if (typeof data.menulink.tab_menu !== 'undefined') {
            if (typeof data.menulink.tab_menu === 'number')
                menu_index = data.menulink.tab_menu;
            else if (typeof data.menulink.tab_menu === 'string')
                menu_index = this.getTabIndexBySlug(data.menulink.tab_menu);
            if (typeof menu_index !== 'undefined')
                page = this.tabs[menu_index];
        }
        // Verify logins
        if (page && page.extra_classes) {
            if (page.extra_classes == 'loggedin' && typeof this.login_data != 'object') {
                this.translate.get('Please login').subscribe(function (text) {
                    _this.presentToast(text);
                });
                return;
            }
            if (page.extra_classes == 'loggedout' && typeof this.login_data == 'object') {
                console.log('login_data', this.login_data);
                page = null;
            }
        }
        if (page) {
            if (data.menulink.new_tab) {
                this.openNewTab(page);
            }
            else if (data.menulink.backbtn || typeof data.menulink.menu !== 'undefined') {
                this.pushPage(page);
            }
            else {
                this.openTab(menu_index);
            }
        }
        else {
            this.translate.get('Page not found').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
    };
    MyApp.prototype.getPageModuleName = function (page_id) {
        if (this.globalvars.isInProductionMode)
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    MyApp.prototype.doStatusBar = function (data) {
        if (!this.StatusBar)
            return;
        if (data.meta.light_status_bar == true) {
            // Light text, for dark backgrounds
            this.StatusBar.styleLightContent();
        }
        else {
            // Dark text
            this.StatusBar.styleDefault();
        }
        // Android only, background color
        if (this.platform.is('android')) {
            if (data.meta.design && data.meta.design.status_bar_bkg) {
                this.StatusBar.backgroundColorByHexString(data.meta.design.status_bar_bkg);
            }
        }
    };
    MyApp.prototype.doConnectionEvents = function () {
        var _this = this;
        this.networkState = this.Network.type;
        if (this.networkState === 'none' || this.networkState === 'unknown') {
            this.translate.get('You appear to be offline, app functionality may be limited.').subscribe(function (text) {
                _this.presentToast(text);
            });
        }
    };
    MyApp.prototype.loadStyles = function (data) {
        // console.log( data );
        // kinda hacky, but it works
        var styles = "<style>";
        // toolbar color
        styles += ".toolbar-background-md, .toolbar-background-ios, .tabs-md .tabbar, .tabs-ios .tabbar, .custom-page .menu-card { background: " + data.meta.design.toolbar_background + " }";
        // toolbar text
        styles += ".toolbar-content, .toolbar-title, .bar-button-default, .toolbar .bar-button-default:hover, .toolbar .segment-button, .toolbar button.activated, .tabs .tab-button .tab-button-icon, .tab-button .tab-button-text, .tabbar .tab-button[aria-selected=true] .tab-button-icon, ion-toolbar .button { color: " + data.meta.design.toolbar_color + " }";
        // left menu colors
        styles += ".menu-inner .content-md, .menu-inner .content-ios, .menu-inner ion-list .item { color: " + data.meta.design.left_menu_text + "; background-color: " + data.meta.design.left_menu_bg + " }";
        styles += ".menu-inner .loggedin-msg { color: " + data.meta.design.left_menu_text + " }";
        // left menu icon color
        if (data.meta.design.left_menu_icons) {
            styles += "ion-menu .list-md ion-icon, ion-menu .list-ios ion-icon, .menu-inner .submenu-parent::after { color: " + data.meta.design.left_menu_icons + " }";
            styles += ".menu-inner .item-ios[detail-push] .item-inner, .menu-inner button.item-ios:not([detail-none]) .item-inner, .menu-inner a.item-ios:not([detail-none]) .item-inner { background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='" + data.meta.design.left_menu_icons + "'/></svg>\"); }";
        }
        // body text and background
        styles += ".ion-page ion-content, .ion-page ion-list .item { color: " + data.meta.design.text_color + "; background-color: " + data.meta.design.body_bg + " }";
        styles += "p, .item p { color: " + data.meta.design.text_color + " }";
        // buttons
        styles += ".button-primary, .menu-login-button { background: " + data.meta.design.button_background + "!important; color: " + data.meta.design.button_text_color + " }";
        // headings
        styles += "ion-page h1, ion-page h2, ion-page h3, ion-page h4, ion-page h5, ion-page h6, ion-page ion-list .item h2, ion-page ion-list .item h3, ion-page ion-list .item h4 { color: " + data.meta.design.headings_color + " }";
        // links
        styles += "ion-page ion-content a, ion-page ion-content a:visited { color: " + data.meta.design.link_color + " }";
        styles += data.meta.design.custom_css;
        // hide menu toggle if no left menu
        if (this.showmenu === false) {
            styles += 'ion-navbar .bar-button-menutoggle { display: none !important; }';
        }
        // maybe move menu item to right
        if (this.menu_side === "right" && this.rtl === false || this.menu_side === "left" && this.rtl === true) {
            styles += 'ion-navbar .bar-buttons[start] { order: 7; }';
        }
        styles += "</style>";
        this.styles = this.sanitizer.bypassSecurityTrustHtml(styles);
    };
    /*
    * We are listening for postMessage events from the iframe pages. When something needs to happen, a message is sent from the iframe as a JSON object, such as { iablink: 'http://apppresser.com', target: '_blank', options: '' }. We parse that object here, and do the phonegap stuff like window.open(data.iablink)
    */
    MyApp.prototype.attachListeners = function () {
        var _this = this;
        // When WP site loads, attach our click events
        window.addEventListener('message', function (e) {
            // might be undefined, but we only using strings here
            if (typeof e.data !== 'string' || e.data == '')
                return;
            console.log('postMessage', e.data);
            if (e.data === 'checkin_success') {
                _this.translate.get('Check in successful!').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
            else if (e.data === 'logout') {
                _this.userLogout();
            }
            // if it's not our json object, return
            if (e.data.indexOf('{') != 0)
                return;
            var data = JSON.parse(e.data);
            if (data.url) {
                // push a new page
                var page = { title: data.title, component: 'Iframe', url: data.url, classes: null };
                _this.pushPage(page);
            }
            else if (data.msg) {
                // social sharing was clicked, show that
                _this.SocialSharing.share(data.msg, null, null, data.link);
            }
            else if (data.iablink) {
                // in app browser links
                _this.openIab(data.iablink, data.target, data.options);
            }
            else if (data.camera && data.camera === 'library') {
                if (data.appbuddy === true) {
                    _this.appCamera.photoLibrary(true);
                }
                else {
                    _this.appCamera.photoLibrary(false);
                }
            }
            else if (data.camera && data.camera === 'photo') {
                if (data.appbuddy === true) {
                    _this.appCamera.openSheet(true);
                }
                else {
                    _this.appCamera.takePicture(false);
                }
            }
            else if (data.fblogin) {
                _this.fbconnect.login();
                _this.maybeSendPushId(data.ajaxurl);
            }
            else if (data.paypal_url) {
                _this.appwoo.paypal(data.paypal_url, data.redirect);
            }
            else if (data.loggedin) {
                _this.userLogin(data);
                _this.storage.set('user_login', _this.login_data);
            }
            else if (typeof (data.isloggedin) != "undefined") {
                // make sure app and WP have the same status
                _this.syncLoginStatus(data);
            }
            else if (data.apppage) {
                var page = { title: data.title, component: 'Iframe', url: data.apppage.url, classes: null, page_type: null, type: null };
                _this.openPage(page);
            }
            else if (data.geouserpref) {
                _this.appgeo.startBeacon(data.geouserpref);
            }
            else if (data.menulink) {
                _this.openMenuLink(data);
            }
        }, false); // end eventListener
    };
    MyApp.prototype.openIab = function (link, target, options) {
        if (options === void 0) { options = null; }
        window.open(link, target, options);
    };
    MyApp.prototype.maybeDoAds = function (data) {
        // only show ads on a device
        if (!this.Device.platform)
            return;
        // If we don't have any ads set, stop
        if (data.ads.ios === '' && data.ads.android === '') {
            console.log('No ads');
            return;
        }
        this.appads.setOptions();
        if (this.Device.platform === 'iOS' && data.ads.ios.banner != '') {
            this.appads.createBanner(data.ads.ios.banner);
        }
        if (this.Device.platform === 'Android' && data.ads.android.banner != '') {
            this.appads.createBanner(data.ads.android.banner);
        }
        // show interstitial like this
        // this.appads.interstitial( data.ads.ios.interstitial );
    };
    MyApp.prototype.maybeDoPush = function () {
        var _this = this;
        var push = null;
        try {
            push = this.Push.init({
                android: {
                    icon: "iconpush",
                    senderID: "19789633850",
                    iconColor: "#F7F4E0",
                    vibrate: "true",
                    sound: "true",
                    forceShow: "true"
                },
                ios: {
                    alert: "true",
                    badge: true,
                    clearBadge: true,
                    sound: 'true'
                },
                windows: {}
            });
        }
        catch (err) {
            console.log(err);
            return;
        }
        if (push.error)
            return;
        push.on('registration').subscribe(function (data) {
            _this.storage.set('deviceToken', data.registrationId);
            // kick off aws stuff
            _this.pushService.subscribeDevice(data.registrationId).then(function (result) {
                var newresult = JSON.parse(result);
                _this.storage.set('endpointArn', newresult.endpointArn);
            });
        });
        push.on('notification').subscribe(function (data) {
            // if apppush post URL
            if (data.additionalData && data.additionalData.url && data.additionalData.url.indexOf('http') == 0 && data.additionalData.target && data.additionalData.target == '_self') {
                var page = { title: data.title, component: 'Iframe', url: data.additionalData.url, classes: null };
                _this.pushPage(page);
                return;
            }
            // if there's an external url from apppush custom url field, open in IAB
            if (data.additionalData && data.additionalData.url && data.additionalData.url.indexOf('http') == 0) {
                _this.openIab(data.additionalData.url, '_blank');
                return;
            }
            // if there's an app page, open it
            if (data.additionalData && data.additionalData.page) {
                var page = data.additionalData.page;
                // if page is external, fire the in app browser
                if (page.target === '_blank') {
                    _this.openIab(page.url, page.target);
                    return;
                }
                // if they included an app page, load the page
                _this.pushPage(data.additionalData.page);
            }
            _this.Dialogs.alert(data.message, // message
            data.title, // title
            _this.translate.instant('Done') // buttonName
            );
        });
        push.on('error').subscribe(function (e) {
            console.log(e.message);
        });
    };
    MyApp.prototype.maybeSendPushId = function (ajaxurl) {
        var _this = this;
        if (!ajaxurl)
            ajaxurl = this.getAjaxURL();
        if (!ajaxurl) {
            console.log('Not able to send endpointArn, missing ajaxurl');
            return;
        }
        this.storage.get('endpointArn').then(function (id) {
            if (id) {
                // ajax call to save this to user meta
                _this.pushService.sendDeviceToWp(id, ajaxurl).then(function (result) {
                    console.log(result);
                });
            }
        });
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    MyApp.prototype.menuOpened = function () {
        this.menu.swipeEnable(true);
    };
    MyApp.prototype.menuClosed = function () {
        this.menu.swipeEnable(false);
    };
    MyApp.prototype.openLoginModal = function () {
        this.myLoginModal = this.modalCtrl.create('LoginModal');
        this.myLoginModal.present();
    };
    MyApp.prototype.userLogin = function (data) {
        var _this = this;
        this.login_data = data;
        this.maybeSendPushId();
        // tell the modal we are logged in
        this.events.publish('modal:logindata', data);
        this.translate.get('Login successful').subscribe(function (text) {
            _this.presentToast(text);
        });
        this.maybeLoginRedirect(data);
        if (this.pages)
            this.resetSideMenu(true);
        if (this.tabs)
            this.resetTabs(true);
    };
    /**
     * Handle the appp_login_redirect filter from WordPress
     * @param data Login data
     */
    MyApp.prototype.maybeLoginRedirect = function (data) {
        if (data.login_redirect) {
            console.log('redirecting to ' + data.login_redirect);
            var page = void 0;
            if (typeof data.login_redirect === 'string') {
                page = {
                    title: '',
                    url: data.login_redirect,
                    component: 'Iframe',
                    classes: null,
                    target: '',
                    extra_classes: '',
                };
            }
            else if (typeof data.login_redirect === 'object') {
                page = {
                    title: data.login_redirect.title,
                    url: data.login_redirect.url,
                    component: 'Iframe',
                    classes: null,
                    target: '',
                    extra_classes: '',
                };
            }
            if (page) {
                this.pushPage(page);
            }
        }
    };
    MyApp.prototype.userLogout = function () {
        // this.storage.remove('user_login').then( () => {
        //   this.presentToast('Logged out successfully.')
        // })
        var _this = this;
        this.login_data = null;
        if (this.tabs && this.pages) {
            this.resetTabs(false);
            this.resetSideMenu(false);
        }
        else if (this.tabs) {
            this.resetTabs(false);
        }
        else {
            this.resetSideMenu(false);
            // this.openPage(this.pages[0])
        }
        this.translate.get('Logout successful').subscribe(function (text) {
            _this.presentToast(text);
        });
    };
    // show or hide menu items on login or logout. resetSideMenu(false) for logout
    MyApp.prototype.resetSideMenu = function (login) {
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var item = _a[_i];
            if (login === true && item.extra_classes.indexOf('loggedin') >= 0) {
                item.extra_classes += " show";
            }
            else if (login === false && item.extra_classes.indexOf('loggedin') >= 0) {
                item.extra_classes = item.extra_classes.replace(" show", "");
            }
            else if (login === true && item.extra_classes.indexOf('loggedout') >= 0) {
                item.extra_classes += " hide";
            }
            else if (login === false && item.extra_classes.indexOf('loggedout') >= 0) {
                item.extra_classes = item.extra_classes.replace(" hide", "");
            }
        }
    };
    // show or hide tabs on login or logout. resetTabs(false) for logout
    MyApp.prototype.resetTabs = function (login) {
        this.navparams = [];
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var item = _a[_i];
            // set component, default is Iframe
            var root = 'Iframe';
            if (item.type === 'apppages' && item.page_type === 'list') {
                root = 'PostList';
            }
            else if (item.type === 'apppages') {
                root = this.getPageModuleName(item.page_id);
            }
            // hide the tab if user added class of hide
            item.show = true;
            if (item.extra_classes.indexOf('hide') >= 0) {
                item.show = false;
            }
            if (login === false && item.extra_classes.indexOf('loggedin') >= 0) {
                item.show = false;
            }
            else if (login === true && item.extra_classes.indexOf('loggedout') >= 0) {
                item.show = false;
            }
            item.class = item.icon;
            this.navParamsPush(item, root);
        }
        this.tabs = this.navparams;
        // "refresh" the view by resetting to home tab
        if (login === false) {
            //this.openPage( { 'title': this.tabs[0].title, 'url': '', 'component': 'TabsPage', 'navparams': this.navparams, 'class': this.tabs[0].icon } )
            this.nav.setRoot('TabsPage', this.navparams);
        }
    };
    MyApp.prototype.getSetLogin = function () {
        var _this = this;
        this.storage.get('user_login').then(function (data) {
            if (data) {
                _this.login_data = data;
                if (_this.pages)
                    _this.resetSideMenu(true);
                if (_this.tabs)
                    _this.resetTabs(true);
            }
        });
    };
    MyApp.prototype.getSetLang = function (data) {
        var _this = this;
        if (data.languages) {
            this.storage.set('available_languages', data.languages);
        }
        else {
            this.storage.remove('available_languages');
        }
        this.storage.get('app_language').then(function (lang) {
            if (lang) {
                _this.translate.use(lang);
                _this.setBackBtnText();
            }
        });
    };
    MyApp.prototype.syncLoginStatus = function (data) {
        // sync login status. If WP and app doesn't match up, fix it
        var _this = this;
        if (data.isloggedin == false && this.login_data) {
            // logged out of WP but still logged into app: log out of app
            this.login_data = null;
            this.storage.remove('user_login');
            this.events.publish('modal:logindata', null);
            this.events.publish('user:logout', null);
        }
        else if (data.isloggedin == true && !this.login_data) {
            // logged into WP but logged out of app: log into app
            if (data.avatar_url && data.message) {
                this.login_data = { loggedin: true, avatar: data.avatar_url, message: data.message };
            }
            else {
                this.login_data = { loggedin: true };
            }
            this.storage.set('user_login', this.login_data).then(function () {
                _this.events.publish('modal:logindata', _this.login_data);
            });
        }
    };
    MyApp.prototype.getAjaxURL = function () {
        if (!this.ajax_url) {
            var item = window.localStorage.getItem('myappp');
            var myapp = JSON.parse(item);
            if (myapp.wordpress_url) {
                this.ajax_url = myapp.wordpress_url + 'wp-admin/admin-ajax.php';
            }
            else {
                return '';
            }
        }
        return this.ajax_url;
    };
    MyApp.prototype.verifyLanguageFile = function (data) {
        var _this = this;
        // check if language file exists. If not, default to en.json
        this.langFileExists(data).then(function (data) {
            var lang = data;
            console.log('set language to ' + lang);
            _this.translate.setDefaultLang(lang);
            _this.setBackBtnText();
        });
    };
    MyApp.prototype.langFileExists = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (data.default_language) {
                var lang_1 = data.default_language;
                _this.http.get('./assets/i18n/' + lang_1 + '.json')
                    .subscribe(function (data) {
                    // language file exists, return url
                    resolve(lang_1);
                }, function (error) {
                    // language file does not exist
                    resolve('en');
                });
            }
            else {
                resolve('en');
            }
        });
    };
    MyApp.prototype.setBackBtnText = function () {
        var _this = this;
        this.translate.get('Back').subscribe(function (text) {
            console.log('Back ' + text);
            _this.config.set('ios', 'backButtonText', text);
        });
    };
    MyApp.prototype.shareApp = function () {
        this.SocialSharing.shareWithOptions({ message: "Download PropertiGO app on App Store or Google Play. http://bit.ly/propertigo" }).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/macintosh/Documents/devapp/Properti-Go+/src/app/app.html"*/'\n<div [innerHTML]="styles"></div>\n\n<ion-menu type="3d-scale-up" [content]="content">\n\n\n\n  <ion-content>\n\n\n\n    <div class="sidemainmenu" *ngIf="login_data">\n\n      <ion-list class="listuser" *ngIf="login_data">\n\n        <ion-avatar *ngIf="login_data.avatar" (click)="pushPage(this.pages[1])">\n          <img class="userphoto" [src]="login_data.avatar" />\n          <img class="userphotoplus" src="assets/images/plussign.png">\n        </ion-avatar>\n\n        <button class="buttonprofile" ion-item *ngIf="login_data" (click)="pushPage(this.pages[2])">\n          {{login_data.message | translate}}\n        </button>\n\n        <button class="buttoncart" ion-item *ngIf="login_data" (click)="pushPage(this.pages[3])">\n          <ion-icon name="cart" item-left></ion-icon>\n          My Cart\n        </button>\n\n        <button class="buttonstatus" ion-item *ngIf="login_data" (click)="pushPage(this.pages[4])">\n          <ion-icon name="checkmark-circle-outline" item-left></ion-icon>\n          Booking Status\n        </button>\n\n        <button class="buttonlogin" ion-item *ngIf="login_data" (click)="openLoginModal()">\n          <ion-icon name="log-out" item-left></ion-icon>\n          {{ \'Logout\' | translate }}\n        </button>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div class="sidemainmenu" *ngIf="!login_data">\n\n      <ion-list class="listuser">\n\n        <ion-avatar>\n          <img class="userphoto" src="assets/images/userphoto.jpg">\n        </ion-avatar>\n\n        <span class="loginmessage">You don’t have an account yet. Create one to unlock the booking feature.</span>\n\n        <button class="buttonlogin" ion-item (click)="pushPage(this.pages[2])">\n          {{ \'Login/register\' | translate }}\n        </button>\n\n      </ion-list>\n\n    </div>\n\n    <div class="intromenu">\n      <button class="buttonintro" ion-item (click)="pushPage(this.pages[5])">\n        Intro\n      </button>\n      <ion-icon id="share" (click)="shareApp()" name="share"></ion-icon>\n      <ion-icon id="about" (click)="pushPage(this.pages[6])" name="information-circle"></ion-icon>\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/macintosh/Documents/devapp/Properti-Go+/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_camera_app_camera__["a" /* AppCamera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_7__providers_appads_appads__["a" /* AppAds */],
        __WEBPACK_IMPORTED_MODULE_12__providers_appgeo_appgeo__["a" /* AppGeo */],
        __WEBPACK_IMPORTED_MODULE_8__providers_facebook_facebook__["a" /* FbConnect */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_9__providers_push_push__["a" /* PushService */],
        __WEBPACK_IMPORTED_MODULE_10__providers_appwoo_appwoo__["a" /* AppWoo */],
        __WEBPACK_IMPORTED_MODULE_11__providers_appdata_appdata__["a" /* AppData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_20__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__["a" /* Push */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_18__ionic_native_dialogs__["a" /* Dialogs */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Store global variables to use throughout app

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalVars = (function () {
    function GlobalVars(http) {
        this.http = http;
        this.data = null;
        this.isInProductionMode = false;
        // url should be WP site with AP installed, dynamically changes based on build form
        // appid: string = '163';
        // apiurl: string = 'http://staging.myapppresser.com/test/'
        // endpoint: string = 'wp-json/ap3/v1/app/163';
        this.appid = '38';
        this.apiurl = 'https://myapppresser.com/gravigodesign/';
        this.endpoint = 'wp-json/ap3/v1/app/38';
        this.api = this.apiurl + this.endpoint;
    }
    GlobalVars.prototype.getApi = function () {
        return this.api;
    };
    GlobalVars.prototype.getApiRoot = function () {
        return this.apiurl;
    };
    GlobalVars.prototype.getAppId = function () {
        return this.appid;
    };
    return GlobalVars;
}());
GlobalVars = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], GlobalVars);

//# sourceMappingURL=globalvars.js.map

/***/ })

},[260]);
//# sourceMappingURL=main.js.map