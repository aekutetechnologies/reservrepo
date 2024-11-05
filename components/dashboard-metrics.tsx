"use client";

import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";

export function DashboardMetrics() {
  // Dummy data - in real app, this would come from an API
  const metrics = {
    dailyRevenue: 2580,
    dailyExpenses: 850,
    occupancyRate: 85,
    revenueChange: 12.5,
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Daily Revenue</p>
            <h3 className="text-2xl font-bold">${metrics.dailyRevenue}</h3>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-destructive/10 rounded-full">
            <DollarSign className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Daily Expenses</p>
            <h3 className="text-2xl font-bold">${metrics.dailyExpenses}</h3>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Occupancy Rate</p>
            <h3 className="text-2xl font-bold">{metrics.occupancyRate}%</h3>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            {metrics.revenueChange >= 0 ? (
              <TrendingUp className="h-6 w-6 text-primary" />
            ) : (
              <TrendingDown className="h-6 w-6 text-destructive" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Revenue Change</p>
            <h3 className="text-2xl font-bold">
              {metrics.revenueChange >= 0 ? "+" : ""}{metrics.revenueChange}%
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
}