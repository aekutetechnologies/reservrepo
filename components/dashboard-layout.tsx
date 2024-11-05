"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  LayoutDashboard,
  CalendarPlus,
  Calendar,
  DollarSign,
  ClipboardList,
  LogOut,
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Create Booking", href: "/dashboard/create-booking", icon: CalendarPlus },
    { name: "View Bookings", href: "/dashboard/bookings", icon: Calendar },
    { name: "Register Expenses", href: "/dashboard/register-expense", icon: DollarSign },
    { name: "View Expenses", href: "/dashboard/expenses", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-card border-r">
        <div className="flex h-16 items-center gap-2 px-6 border-b">
          <Building2 className="h-6 w-6" />
          <span className="font-semibold">ResManager</span>
        </div>

        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}