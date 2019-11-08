(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/login/login.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title text-center>Iniciar Sesión</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <img class=\"icon\" src=\"assets/icon/logo.png\" alt=\"\">\n\n  <ion-item>\n    <ion-label position=\"floating\" color=\"secondary\">Email</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\" color=\"primary\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\">Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\" name=\"password\" color=\"primary\"></ion-input>\n  </ion-item>\n\n  <br>\n\n  <ion-button (click)=\"onSubmitLogin()\" fill=\"outline\" expand=\"block\" color=\"secondary\">Sign In</ion-button>\n\n  <p text-center routerLink=\"/registro\" style=\"color:#7d7f7d\"><u>Sign Up</u></p>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/componentes/login/login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/componentes/login/login.module.ts ***!
  \***************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/componentes/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/componentes/login/login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/componentes/login/login.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vQzpcXFVzZXJzXFxBbGVqYW5kcmFcXERvY3VtZW50c1xcVVBCLTR0b1NlbWVzdHJlXFxJbmdlbmllcmlhIGRlIFNvZnR3YXJlXFxhcHBDb21wcmFWZW50YS1DYXJsYVxcYXBwQ29tcHJhVmVudGEvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNDAlO1xyXG59IiwiLmljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDQwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/login/login.page.ts":
/*!*************************************************!*\
  !*** ./src/app/componentes/login/login.page.ts ***!
  \*************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






//import { LatLng } from '@ionic-native/google-maps';
var LoginPage = /** @class */ (function () {
    function LoginPage(authService, db, router, geolocation) {
        this.authService = authService;
        this.db = db;
        this.router = router;
        this.geolocation = geolocation;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.geolocation.getCurrentPosition().then(function (geposition) {
            console.log(geposition);
        });
    };
    LoginPage.prototype.onSubmitLogin = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (geposition) {
            var latitud = geposition.coords.latitude.toString();
            var longitud = geposition.coords.longitude.toString();
            _this.authService.login(_this.email, _this.password).then(function (res) {
                _this.authService.update_location(latitud, longitud);
                _this.router.navigate(['/tabs']);
            }).catch(function (err) { return alert('Datos ingresados incorrectos!'); });
        }).catch(function (err) { return alert('No se logro actualizar la ubicación, verifique la conexión con el GPS'); });
        this.email = "";
        this.password = "";
    };
    LoginPage.ctorParameters = function () { return [
        { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/componentes/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=componentes-login-login-module-es5.js.map