(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-registro-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/registro/registro.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/registro/registro.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title text-center>Registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <img class=\"icon\" src=\"assets/icon/logo.png\" alt=\"\">\n\n    <ion-item>\n        <ion-label position=\"floating\" color=\"tertiary\">Nombre</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"nombre\" name=\"nombre\" color=\"primary\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\" color=\"tertiary\">Apellido</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"apellido\" name=\"apellido\" color=\"primary\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\" color=\"tertiary\">Cédula de Identidad</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"ci\" name=\"ci\" color=\"primary\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\" color=\"tertiary\">Teléfono/Celular</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"telf\" name=\"telf\" color=\"primary\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"tertiary\">Email</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\" color=\"primary\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label position=\"floating\" color=\"tertiary\">Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\" name=\"password\" color=\"primary\"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"cpassword\" name=\"cpassword\"></ion-input>\n    </ion-item> -->\n  \n    <br>\n  \n    <ion-button fill=\"outline\" expand=\"block\" color=\"tertiary\" (click)=\"onSubmitRegister()\">Register</ion-button>\n\n    <p text-center routerLink=\"/login\" style=\"color:#7d7f7d\"><u>Sign In</u></p>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/componentes/registro/registro.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.module.ts ***!
  \*********************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/componentes/registro/registro.page.ts");







var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/componentes/registro/registro.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/registro/registro.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.ts ***!
  \*******************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");





var RegistroPage = /** @class */ (function () {
    //public cpassword: string;
    //aquí
    function RegistroPage(auth, router, geolocation) {
        this.auth = auth;
        this.router = router;
        this.geolocation = geolocation;
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.geolocation.getCurrentPosition().then(function (geposition) {
            console.log(geposition);
        });
    };
    RegistroPage.prototype.onSubmitRegister = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (geposition) {
            // let coord : geposition;
            var latitud = geposition.coords.latitude.toString();
            var longitud = geposition.coords.longitude.toString();
            _this.auth.register(_this.nombre, _this.apellido, _this.ci, _this.telf, _this.email, _this.password, latitud, longitud).then(function (auth) {
                _this.router.navigate(['/tabs']);
                console.log(auth);
            }).catch(function (err) { return console.log(err); });
            _this.nombre = "";
            _this.apellido = "";
            _this.ci = "";
            _this.telf = "";
            _this.email = "";
            _this.password = "";
        });
    };
    RegistroPage.ctorParameters = function () { return [
        { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }
    ]; };
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/componentes/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=componentes-registro-registro-module-es5.js.map