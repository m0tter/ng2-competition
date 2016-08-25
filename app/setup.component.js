"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var competition_service_1 = require('./competition.service');
var SetupComponent = (function () {
    function SetupComponent(compService, router) {
        this.compService = compService;
        this.router = router;
        this.addingCompetition = false;
    }
    SetupComponent.prototype.getCompetitions = function () {
        var _this = this;
        this.compService
            .getCompetitions()
            .then(function (comps) { _this.competitions = comps; })
            .catch(function (error) { return _this.error = error; });
    };
    SetupComponent.prototype.onSelect = function (comp) {
        this.selectedCompetition = comp;
        this.addingCompetition = false;
    };
    SetupComponent.prototype.deleteComp = function (comp, event) { };
    SetupComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCompetition.id]);
    };
    SetupComponent.prototype.ngOnInit = function () {
        this.getCompetitions();
    };
    SetupComponent = __decorate([
        core_1.Component({
            selector: 'setup',
            templateUrl: 'app/setup.component.html',
            styleUrls: ['app/setup.component.css']
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService, router_1.Router])
    ], SetupComponent);
    return SetupComponent;
}());
exports.SetupComponent = SetupComponent;
//# sourceMappingURL=setup.component.js.map