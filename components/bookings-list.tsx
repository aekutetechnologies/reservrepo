"use client";

import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, FileEdit, XCircle, CheckCircle } from "lucide-react";

interface BookingsListProps {
  filter: {
    status: string;
    dateRange: string;
  };
}

export function BookingsList({ filter }: BookingsListProps) {
  // Dummy data - in a real app, this would come from an API
  const bookings = [
    {
      id: "1",
      guestName: "John Doe",
      roomNumber: "101",
      checkIn: new Date("2024-03-15"),
      checkOut: new Date("2024-03-20"),
      status: "active",
      amount: 500,
    },
    {
      id: "2",
      guestName: "Jane Smith",
      roomNumber: "202",
      checkIn: new Date("2024-03-20"),
      checkOut: new Date("2024-03-25"),
      status: "upcoming",
      amount: 750,
    },
    {
      id: "3",
      guestName: "Mike Johnson",
      roomNumber: "301",
      checkIn: new Date("2024-02-15"),
      checkOut: new Date("2024-02-20"),
      status: "completed",
      amount: 1000,
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      active: "default",
      upcoming: "secondary",
      completed: "default",
      cancelled: "destructive",
    };

    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Guest Name</TableHead>
          <TableHead>Room</TableHead>
          <TableHead>Check-in</TableHead>
          <TableHead>Check-out</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell>{booking.guestName}</TableCell>
            <TableCell>{booking.roomNumber}</TableCell>
            <TableCell>{format(booking.checkIn, "MMM dd, yyyy")}</TableCell>
            <TableCell>{format(booking.checkOut, "MMM dd, yyyy")}</TableCell>
            <TableCell>{getStatusBadge(booking.status)}</TableCell>
            <TableCell className="text-right">${booking.amount}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <FileEdit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark as Complete
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <XCircle className="mr-2 h-4 w-4" />
                    Cancel Booking
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}