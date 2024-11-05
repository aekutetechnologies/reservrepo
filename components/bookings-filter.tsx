"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookingsFilterProps {
  filter: {
    status: string;
    dateRange: string;
  };
  onFilterChange: (filter: { status: string; dateRange: string }) => void;
}

export function BookingsFilter({ filter, onFilterChange }: BookingsFilterProps) {
  return (
    <div className="flex flex-col gap-4 mb-6 sm:flex-row">
      <Select
        value={filter.status}
        onValueChange={(status) => onFilterChange({ ...filter, status })}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Bookings</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="upcoming">Upcoming</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filter.dateRange}
        onValueChange={(dateRange) => onFilterChange({ ...filter, dateRange })}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Select date range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Time</SelectItem>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
          <SelectItem value="year">This Year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}