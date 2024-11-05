"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/dashboard-layout";
import { DashboardMetrics } from "@/components/dashboard-metrics";
import { RecentBookings } from "@/components/recent-bookings";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/");
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your property.
          </p>
        </div>

        <DashboardMetrics />
        <RecentBookings />
      </div>
    </DashboardLayout>
  );
}