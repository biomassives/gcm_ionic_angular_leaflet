(self["webpackChunkaulageo"] = self["webpackChunkaulageo"] || []).push([["src_app_addpoint_addpoint_module_ts"],{

/***/ 7795:
/*!*****************************************************!*\
  !*** ./src/app/addpoint/addpoint-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddpointPageRoutingModule": () => (/* binding */ AddpointPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _addpoint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addpoint.page */ 6897);




const routes = [
    {
        path: '',
        component: _addpoint_page__WEBPACK_IMPORTED_MODULE_0__.AddpointPage
    }
];
let AddpointPageRoutingModule = class AddpointPageRoutingModule {
};
AddpointPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddpointPageRoutingModule);



/***/ }),

/***/ 8211:
/*!*********************************************!*\
  !*** ./src/app/addpoint/addpoint.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddpointPageModule": () => (/* binding */ AddpointPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _addpoint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addpoint-routing.module */ 7795);
/* harmony import */ var _addpoint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addpoint.page */ 6897);







let AddpointPageModule = class AddpointPageModule {
};
AddpointPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addpoint_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddpointPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_addpoint_page__WEBPACK_IMPORTED_MODULE_1__.AddpointPage]
    })
], AddpointPageModule);



/***/ }),

/***/ 6897:
/*!*******************************************!*\
  !*** ./src/app/addpoint/addpoint.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddpointPage": () => (/* binding */ AddpointPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addpoint_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addpoint.page.html */ 8790);
/* harmony import */ var _addpoint_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addpoint.page.scss */ 6874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);





let AddpointPage = class AddpointPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.defaultDate = "2020-04-01";
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            label: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            dob: [this.defaultDate],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]+$')]]
        });
    }
    getDate(e) {
        let date = new Date(e.target.value).toISOString().substring(0, 10);
        this.ionicForm.get('dob').setValue(date, {
            onlyself: true
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.ionicForm.value);
        }
    }
};
AddpointPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
AddpointPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-addpoint',
        template: _raw_loader_addpoint_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addpoint_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddpointPage);



/***/ }),

/***/ 6874:
/*!*********************************************!*\
  !*** ./src/app/addpoint/addpoint.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRwb2ludC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 8790:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addpoint/addpoint.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add a map point</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Label</ion-label>\n      <ion-input formControlName=\"label\" type=\"text\"></ion-input>\n    </ion-item>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.label.errors?.required\">\n      Name is required.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\">\n      Name should be min 2 chars long.\n    </span>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n    </ion-item>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n      Email is required.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n      Please provide valid email id.\n    </span>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">DOB</ion-label>\n      <ion-datetime (ionChange)=\"getDate($event)\" formControlName=\"dob\" [value]=\"defaultDate\"></ion-datetime>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Mobile</ion-label>\n      <ion-input maxlength=\"10\" formControlName=\"mobile\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.mobile.errors?.required\">\n      Mobile number is required.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.mobile.errors?.pattern\">\n      Only numerical values allowed.\n    </span>\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_addpoint_addpoint_module_ts.js.map