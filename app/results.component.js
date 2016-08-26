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
var competition_service_1 = require('./competition.service');
var ResultsComponent = (function () {
    function ResultsComponent(compService) {
        this.compService = compService;
        this.selectedCompetition = null;
    }
    ResultsComponent.prototype.getCompetitons = function () {
        var _this = this;
        this.compService.getCompetitions()
            .then(function (resp) { return _this.competitions = resp; })
            .catch(function (error) { return _this.errorHandler(error); });
    };
    ResultsComponent.prototype.ngOnInit = function () {
        this.getCompetitons();
    };
    ResultsComponent.prototype.errorHandler = function (error) {
        console.error('An error occurred in ResultComponent ', error);
        return Promise.reject(error.message || error);
    };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: 'competition-results',
            templateUrl: 'app/results.component.html',
            styleUrls: ['app/results.component.css']
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map