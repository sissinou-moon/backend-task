"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
let DashboardService = class DashboardService {
    getMetrics() {
        return {
            totalSales: 12500,
            totalOrders: 320,
            productSold: 890,
            newCustomers: 150,
        };
    }
    getRevenue() {
        return [
            { day: 'Mon', onlineSales: 1200, offlineSales: 800 },
            { day: 'Tue', onlineSales: 1400, offlineSales: 600 },
            { day: 'Wed', onlineSales: 1600, offlineSales: 750 },
            { day: 'Thu', onlineSales: 1800, offlineSales: 900 },
        ];
    }
    getCustomerSatisfaction() {
        return [
            { month: 'Jan', value: 85 },
            { month: 'Feb', value: 88 },
            { month: 'Mar', value: 92 },
        ];
    }
    getVisitorInsights() {
        return [
            { month: 'Jan', loyal: 120, new: 80, unique: 60 },
            { month: 'Feb', loyal: 150, new: 100, unique: 70 },
            { month: 'Mar', loyal: 180, new: 90, unique: 75 },
            { month: 'Apr', loyal: 200, new: 110, unique: 90 },
            { month: 'May', loyal: 170, new: 120, unique: 85 },
            { month: 'Jun', loyal: 220, new: 130, unique: 95 },
            { month: 'Jul', loyal: 210, new: 140, unique: 100 },
            { month: 'Aug', loyal: 230, new: 150, unique: 110 },
            { month: 'Sep', loyal: 240, new: 160, unique: 120 },
            { month: 'Oct', loyal: 260, new: 170, unique: 130 },
            { month: 'Nov', loyal: 270, new: 180, unique: 140 },
            { month: 'Dec', loyal: 300, new: 200, unique: 150 },
        ];
    }
    getTopProducts() {
        return [
            { name: 'iPhone 15', popularity: 95, salesPercent: 35 },
            { name: 'MacBook Pro', popularity: 90, salesPercent: 28 },
            { name: 'AirPods', popularity: 80, salesPercent: 20 },
        ];
    }
    getCountrySales() {
        return [
            { country: 'USA', sales: 4000 },
            { country: 'Germany', sales: 2500 },
            { country: 'Japan', sales: 3000 },
        ];
    }
    getTargetReality() {
        return [
            { month: 'Jan', reality: 4500, target: 5000 },
            { month: 'Feb', reality: 4700, target: 5200 },
            { month: 'Mar', reality: 5200, target: 5500 },
        ];
    }
    getLevel() {
        return [
            { month: 'Jan', volume: 1200, services: 400 },
            { month: 'Feb', volume: 1500, services: 450 },
            { month: 'Mar', volume: 1800, services: 500 },
        ];
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)()
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map