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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    getMetrics() {
        return this.dashboardService.getMetrics();
    }
    getRevenue() {
        return this.dashboardService.getRevenue();
    }
    getCustomerSatisfaction() {
        return this.dashboardService.getCustomerSatisfaction();
    }
    getVisitorInsights() {
        return this.dashboardService.getVisitorInsights();
    }
    getTopProducts() {
        return this.dashboardService.getTopProducts();
    }
    getCountrySales() {
        return this.dashboardService.getCountrySales();
    }
    getTargetReality() {
        return this.dashboardService.getTargetReality();
    }
    getLevel() {
        return this.dashboardService.getLevel();
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('metrics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getMetrics", null);
__decorate([
    (0, common_1.Get)('revenue'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getRevenue", null);
__decorate([
    (0, common_1.Get)('customer-satisfaction'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getCustomerSatisfaction", null);
__decorate([
    (0, common_1.Get)('visitor-insights'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getVisitorInsights", null);
__decorate([
    (0, common_1.Get)('top-products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getTopProducts", null);
__decorate([
    (0, common_1.Get)('country-sales'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getCountrySales", null);
__decorate([
    (0, common_1.Get)('target-reality'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getTargetReality", null);
__decorate([
    (0, common_1.Get)('level'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getLevel", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map