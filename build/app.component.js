"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import
// importing Component from core
var core_1 = require("@angular/core");
// Decorator
var AppComponent = function AppComponent() {
    _classCallCheck(this, AppComponent);
};
AppComponent = __decorate([core_1.Component({
    // the element defined in the index.html
    selector: "my-app",
    // Given this configuration, when the browser URL for this application becomes /showHide, 
    // the router matches that URL to the route path /showHide 
    // and displays the ShowHideComponent after a RouterOutlet that you've placed in the host view's HTML.
    template: "\n    <navigation-bar></navigation-bar>\n    <router-outlet></router-outlet>"
})], AppComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map