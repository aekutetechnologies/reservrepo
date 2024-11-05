"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard-layout";
import { BookingsList } from "@/components/bookings-list";
import { BookingsFilter } from "@/components/bookings-filter";
import { Card } from "@/components/ui/card";

export default function Bookings() {
  const [filter, setFilter] = useState({
    status: "all",
    dateRange: "all",
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground">Manage your property bookings</p>
        </div>

        <Card className="p-6">
          <BookingsFilter filter={filter} onFilterChange={setFilter} />
          <BookingsList filter={filter} />
        </Card>
      </div>
    </DashboardLayout>
  );
}