(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\tp\ElisaPolystar\src\main.ts */"zUnb");


/***/ }),

/***/ "4zzS":
/*!******************************************!*\
  !*** ./src/app/services/tram.service.ts ***!
  \******************************************/
/*! exports provided: TramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramService", function() { return TramService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_assets_stations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/stations */ "CNB3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TramService {
    constructor(http) {
        this.http = http;
        this.dataUrl = 'assets/tram-data.json';
        this.stations = src_assets_stations__WEBPACK_IMPORTED_MODULE_1__["TRAM_STATIONS"].map(station => station.name);
    }
    getTramDepartures() {
        return this.http.get(this.dataUrl);
    }
    searchTrams(from, to) {
        return this.getTramDepartures().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
            if (!(data === null || data === void 0 ? void 0 : data.departures)) {
                console.error('Invalid or missing data:', data);
                return { trams: [], buses: [] };
            }
            const fromIndex = this.stations.indexOf(from);
            const toIndex = this.stations.indexOf(to);
            if (fromIndex === -1 || toIndex === -1) {
                console.warn('Invalid station names:', { from, to });
                return { trams: [], buses: [] };
            }
            const direction = fromIndex < toIndex ? 2 : 1;
            const departures = data.departures.filter((departure) => departure.direction_code === direction);
            console.log(departures);
            return {
                trams: departures.filter((departure) => { var _a; return ((_a = departure.line) === null || _a === void 0 ? void 0 : _a.transport_mode) === 'TRAM'; }),
                buses: departures.filter((departure) => { var _a; return ((_a = departure.line) === null || _a === void 0 ? void 0 : _a.transport_mode) === 'BUS'; })
            };
        }));
    }
}
TramService.ɵfac = function TramService_Factory(t) { return new (t || TramService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TramService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TramService, factory: TramService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CNB3":
/*!********************************!*\
  !*** ./src/assets/stations.ts ***!
  \********************************/
/*! exports provided: TRAM_STATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAM_STATIONS", function() { return TRAM_STATIONS; });
const TRAM_STATIONS = [
    { name: 'Gullmarsplan' },
    { name: 'Globen' },
    { name: 'Linde' },
    { name: 'Valla torg' },
    { name: 'Årstafältet' },
    { name: 'Årstaberg' },
    { name: 'Årstadal' },
    { name: 'Liljeholmen' },
    { name: 'Trekanten' },
    { name: 'Gröndal' },
    { name: 'Stora Essingen' },
    { name: 'Alviks strand' },
    { name: 'Alvik' },
    { name: 'Mårtensdal' },
    { name: 'Luma' },
    { name: 'Sickla kaj' },
    { name: 'Sickla udde' },
    { name: 'Johannesfred' },
    { name: 'Karlsbodavägen' },
    { name: 'Bällsta bro' },
    { name: 'Sundbybergs centrum' },
    { name: 'Solna Business Park' },
    { name: 'Solna centrum' },
    { name: 'Solna station' },
    { name: 'Bromma Blocks' },
    { name: 'Sickla' }
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICB9Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tram_schedule_tram_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tram-schedule/tram-schedule.component */ "kHLR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _header_formatter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header-formatter.pipe */ "vBSF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _tram_schedule_tram_schedule_component__WEBPACK_IMPORTED_MODULE_3__["TramScheduleComponent"],
        _header_formatter_pipe__WEBPACK_IMPORTED_MODULE_12__["HeaderFormatterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]], exports: [_header_formatter_pipe__WEBPACK_IMPORTED_MODULE_12__["HeaderFormatterPipe"]] }); })();


/***/ }),

/***/ "kHLR":
/*!**********************************************************!*\
  !*** ./src/app/tram-schedule/tram-schedule.component.ts ***!
  \**********************************************************/
/*! exports provided: TramScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TramScheduleComponent", function() { return TramScheduleComponent; });
/* harmony import */ var src_assets_stations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/stations */ "CNB3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tram_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tram.service */ "4zzS");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _header_formatter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../header-formatter.pipe */ "vBSF");













function TramScheduleComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const station_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", station_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", station_r4.name, " ");
} }
function TramScheduleComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const station_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", station_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", station_r5.name, " ");
} }
function TramScheduleComponent_mat_card_17_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TramScheduleComponent_mat_card_17_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "headerFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, col_r14));
} }
function TramScheduleComponent_mat_card_17_ng_container_3_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tram_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const col_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, tram_r18[col_r14], "yyyy-MM-dd HH:mm"), " ");
} }
function TramScheduleComponent_mat_card_17_ng_container_3_td_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const tram_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const col_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tram_r18[col_r14]);
} }
function TramScheduleComponent_mat_card_17_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TramScheduleComponent_mat_card_17_ng_container_3_td_2_span_1_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TramScheduleComponent_mat_card_17_ng_container_3_td_2_ng_template_2_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const col_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r14 === "scheduled" || col_r14 === "expected")("ngIfElse", _r20);
} }
function TramScheduleComponent_mat_card_17_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TramScheduleComponent_mat_card_17_ng_container_3_th_1_Template, 3, 3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TramScheduleComponent_mat_card_17_ng_container_3_td_2_Template, 4, 2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", col_r14);
} }
function TramScheduleComponent_mat_card_17_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
function TramScheduleComponent_mat_card_17_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
function TramScheduleComponent_mat_card_17_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TramScheduleComponent_mat_card_17_ng_container_8_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "headerFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, col_r28));
} }
function TramScheduleComponent_mat_card_17_ng_container_8_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tram_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const col_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, tram_r32[col_r28], "yyyy-MM-dd HH:mm"), " ");
} }
function TramScheduleComponent_mat_card_17_ng_container_8_td_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const tram_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const col_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tram_r32[col_r28]);
} }
function TramScheduleComponent_mat_card_17_ng_container_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TramScheduleComponent_mat_card_17_ng_container_8_td_2_span_1_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TramScheduleComponent_mat_card_17_ng_container_8_td_2_ng_template_2_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const col_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r28 === "scheduled" || col_r28 === "expected")("ngIfElse", _r34);
} }
function TramScheduleComponent_mat_card_17_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TramScheduleComponent_mat_card_17_ng_container_8_th_1_Template, 3, 3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TramScheduleComponent_mat_card_17_ng_container_8_td_2_Template, 4, 2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", col_r28);
} }
function TramScheduleComponent_mat_card_17_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
function TramScheduleComponent_mat_card_17_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
function TramScheduleComponent_mat_card_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TramScheduleComponent_mat_card_17_h3_1_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TramScheduleComponent_mat_card_17_ng_container_3_Template, 3, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TramScheduleComponent_mat_card_17_tr_4_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TramScheduleComponent_mat_card_17_tr_5_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TramScheduleComponent_mat_card_17_h3_6_Template, 2, 0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TramScheduleComponent_mat_card_17_ng_container_8_Template, 3, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TramScheduleComponent_mat_card_17_tr_9_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TramScheduleComponent_mat_card_17_tr_10_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.trams.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r2.trams);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.buses.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r2.buses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
} }
function TramScheduleComponent_mat_card_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No trains or buses found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TramScheduleComponent {
    constructor(tramService, snackBar) {
        this.tramService = tramService;
        this.snackBar = snackBar;
        this.stations = src_assets_stations__WEBPACK_IMPORTED_MODULE_0__["TRAM_STATIONS"];
        this.from = '';
        this.to = '';
        this.trams = [];
        this.buses = [];
        this.searched = false;
        this.displayedColumns = [];
    }
    ngOnInit() {
        this.displayedColumns = ['destination', 'scheduled', 'expected', 'state', 'display'];
    }
    searchTrams() {
        if (!this.from || !this.to) {
            this.showError("Please select both From and To stations.");
            return;
        }
        if (this.from === this.to) {
            this.showError("From and To stations must be different.");
            return;
        }
        this.tramService.searchTrams(this.from, this.to).subscribe(result => {
            console.log(result);
            this.trams = result.trams;
            this.buses = result.buses;
            this.searched = true;
            if (this.trams.length === 0 && this.buses.length === 0) {
                this.showError("No trains or buses found.");
            }
        });
    }
    showError(message) {
        this.snackBar.open(message, "Close", {
            duration: 3000,
            panelClass: ["error-snackbar"]
        });
    }
}
TramScheduleComponent.ɵfac = function TramScheduleComponent_Factory(t) { return new (t || TramScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tram_service__WEBPACK_IMPORTED_MODULE_2__["TramService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
TramScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TramScheduleComponent, selectors: [["app-tram-schedule"]], decls: 19, vars: 6, consts: [[1, "container"], [1, "form-group"], ["appearance", "outline"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "matCardInside", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "matCardInside"], ["mat-table", "", 1, "mat-elevation-z8", "full-width-table", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf", "ngIfElse"], ["normalText", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "error"]], template: function TramScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Tram Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TramScheduleComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TramScheduleComponent_mat_option_9_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TramScheduleComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TramScheduleComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TramScheduleComponent_Template_button_click_15_listener() { return ctx.searchTrams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TramScheduleComponent_mat_card_17_Template, 11, 10, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TramScheduleComponent_mat_card_18_Template, 3, 0, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.trams.length > 0 || ctx.buses.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.trams.length === 0 && ctx.buses.length === 0 && ctx.searched);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]], pipes: [_header_formatter_pipe__WEBPACK_IMPORTED_MODULE_12__["HeaderFormatterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 800px;\n  width: 100%;\n}\n\n.matCardInside[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 760px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 100%;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 700px;\n  margin-top: 10px;\n}\n\n.full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 600px;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n.error-snackbar[_ngcontent-%COMP%] {\n  background-color: #ff4d4d;\n  color: white;\n}\n\n.header-cell[_ngcontent-%COMP%], .data-cell[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n}\n\n.header-cell[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: bold;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: #e0f7fa !important;\n  transition: background-color 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyYW0tc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUtKOztBQURBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREE7RUFDSSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURBO0VBQ0ksMkNBQUE7QUFJSiIsImZpbGUiOiJ0cmFtLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXRDYXJkSW5zaWRlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDc2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5mdWxsLXdpZHRoLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lcnJvci1zbmFja2JhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZDRkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmhlYWRlci1jZWxsLCAuZGF0YS1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaGVhZGVyLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmN2ZhICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo4IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vBSF":
/*!******************************************!*\
  !*** ./src/app/header-formatter.pipe.ts ***!
  \******************************************/
/*! exports provided: HeaderFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFormatterPipe", function() { return HeaderFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderFormatterPipe {
    transform(column) {
        const headers = {
            'destination': 'Final Destination',
            'scheduled': 'Scheduled Time',
            'expected': 'Expected Time',
            'state': 'State',
            'display': 'Time'
        };
        return headers[column] || column;
    }
}
HeaderFormatterPipe.ɵfac = function HeaderFormatterPipe_Factory(t) { return new (t || HeaderFormatterPipe)(); };
HeaderFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "headerFormatter", type: HeaderFormatterPipe, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tram_schedule_tram_schedule_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tram-schedule/tram-schedule.component */ "kHLR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _tram_schedule_tram_schedule_component__WEBPACK_IMPORTED_MODULE_1__["TramScheduleComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map