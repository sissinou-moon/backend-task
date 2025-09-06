import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('metrics')
  getMetrics() {
    return this.dashboardService.getMetrics();
  }

  @Get('revenue')
  getRevenue() {
    return this.dashboardService.getRevenue();
  }

  @Get('customer-satisfaction')
  getCustomerSatisfaction() {
    return this.dashboardService.getCustomerSatisfaction();
  }

  @Get('visitor-insights')
  getVisitorInsights() {
    return this.dashboardService.getVisitorInsights();
  }

  @Get('top-products')
  getTopProducts() {
    return this.dashboardService.getTopProducts();
  }

  @Get('country-sales')
  getCountrySales() {
    return this.dashboardService.getCountrySales();
  }

  @Get('target-reality')
  getTargetReality() {
    return this.dashboardService.getTargetReality();
  }

  @Get('level')
  getLevel() {
    return this.dashboardService.getLevel();
  }
}
