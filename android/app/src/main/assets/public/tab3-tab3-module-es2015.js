(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color =\"success\">\n    <ion-title >\n      Pedidos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h3 text-center style=\"color:#3a727f\"><b><u>Registrar Pedido: </u></b> </h3>\n\n    \n    <ion-item>\n        <ion-label position=\"floating\" color=\"success\">Cliente: </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"cliente\" name=\"cliente\" color=\"primary\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\" color=\"success\">Nombre de Producto: </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"producto\" name=\"producto\" color=\"primary\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\" color=\"success\">Cantidad: </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"cantidad\" name=\"cantidad\" color=\"primary\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\" color=\"success\">Fecha: </ion-label>\n        <ion-datetime [(ngModel)]=\"fecha\" name=\"fecha\" color=\"primary\" displayFormat=\"MM/DD/YYYY\" min=\"2015-01-01\" max=\"2030-12-12\"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"success\">Total a pagar: </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"total\" name=\"total\" color=\"primary\"></ion-input>\n  </ion-item>\n\n    <ion-list>\n        <ion-radio-group [(ngModel)]=\"pago\">\n          <ion-list-header>\n            <ion-label color=\"success\">Forma de Pago: </ion-label>\n          </ion-list-header>\n      \n          <ion-item>\n            <ion-label color=\"success\">Efectivo</ion-label>\n            <ion-radio slot=\"start\" value=\"efectivo\" checked></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label color=\"success\">Tarjeta</ion-label>\n            <ion-radio slot=\"start\" value=\"tarjeta\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n    <br>\n\n    <ion-button fill=\"outline\" expand=\"block\" color=\"success\" (click)=\"onSubmitPedido()\">Guardar Pedido</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/auth.service */ "./src/app/servicios/auth.service.ts");



let Tab3Page = class Tab3Page {
    constructor(auth) {
        this.auth = auth;
    }
    onSubmitPedido() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.auth.pedido(this.cliente, this.producto, this.cantidad, this.fecha, this.total, this.pago).then(auth => {
                console.log(auth);
            }).catch(err => console.log(err));
            this.cliente = "";
            this.producto = "";
            this.cantidad = "";
            this.fecha = "";
            this.total = "";
            this.pago = "";
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map