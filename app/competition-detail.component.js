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
var competition_1 = require('./competition');
var school_1 = require('./school');
var CompetitionDetailComponent = (function () {
    function CompetitionDetailComponent(compService, route) {
        this.compService = compService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
        this.selectedSchool = null;
        this.newSchool = new school_1.School();
        this.newTeam = new school_1.Team();
    }
    CompetitionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.compService.getCompetition(id)
                    .then(function (comp) { return _this.competition = comp; });
            }
            else {
                _this.navigated = false;
                _this.competition = new competition_1.Competition();
            }
        });
    };
    CompetitionDetailComponent.prototype.save = function () {
        var _this = this;
        this.compService
            .save(this.competition)
            .then(function (comp) {
            _this.competition = comp;
            _this.goBack(comp);
        })
            .catch(function (error) { return _this.errorHandler(error); });
    };
    CompetitionDetailComponent.prototype.goBack = function (savedComp) {
        if (savedComp === void 0) { savedComp = null; }
        this.close.emit(savedComp);
        if (this.navigated) {
            window.history.back();
        }
    };
    CompetitionDetailComponent.prototype.onSelect = function (school) {
        this.selectedSchool = school;
    };
    CompetitionDetailComponent.prototype.addNewSchool = function () {
        var school = new school_1.School();
        school.teams = [];
        school.name = this.newSchool.name;
        school.short = this.newSchool.short;
        this.competition.schools.push(school);
        this.newSchool = new school_1.School();
    };
    CompetitionDetailComponent.prototype.addNewTeam = function () {
        var team = new school_1.Team();
        team.name = this.newTeam.name;
        this.selectedSchool.teams.push(team);
        this.newTeam.name = '';
    };
    CompetitionDetailComponent.prototype.errorHandler = function (error) {
        console.error('An error occurred in CompetitionDetailComponent ', error);
        return Promise.reject(error.message || error);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', competition_1.Competition)
    ], CompetitionDetailComponent.prototype, "competition", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompetitionDetailComponent.prototype, "close", void 0);
    CompetitionDetailComponent = __decorate([
        core_1.Component({
            selector: 'competition-detail',
            templateUrl: 'app/competition-detail.component.html',
            styleUrls: ['app/competition-detail.component.css']
        }), 
        __metadata('design:paramtypes', [competition_service_1.CompetitionService, router_1.ActivatedRoute])
    ], CompetitionDetailComponent);
    return CompetitionDetailComponent;
}());
exports.CompetitionDetailComponent = CompetitionDetailComponent;
//# sourceMappingURL=competition-detail.component.js.map