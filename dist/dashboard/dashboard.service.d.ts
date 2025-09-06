export declare class DashboardService {
    getMetrics(): {
        totalSales: number;
        totalOrders: number;
        productSold: number;
        newCustomers: number;
    };
    getRevenue(): {
        day: string;
        onlineSales: number;
        offlineSales: number;
    }[];
    getCustomerSatisfaction(): {
        month: string;
        value: number;
    }[];
    getVisitorInsights(): {
        month: string;
        loyal: number;
        new: number;
        unique: number;
    }[];
    getTopProducts(): {
        name: string;
        popularity: number;
        salesPercent: number;
    }[];
    getCountrySales(): {
        country: string;
        sales: number;
    }[];
    getTargetReality(): {
        month: string;
        reality: number;
        target: number;
    }[];
    getLevel(): {
        month: string;
        volume: number;
        services: number;
    }[];
}
