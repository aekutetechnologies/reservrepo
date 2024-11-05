"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function RecentBookings() {
  // Dummy data - in real app, this would come from an API
  const bookings = [
    {
      id: 1,
      guest: "John Doe",
      checkIn: "2024-03-20",
      checkOut: "2024-03-25",
      room: "101",
      status: "Confirmed",
      amount: 750,
    },
    {
      id: 2,
      guest: "Jane Smith",
      checkIn: "2024-03-22",
      checkOut: "2024-03-24",
      room: "205",
      status: "Pending",
      amount: 450,
    },
    {
      id: 3,
      guest: "Mike Johnson",
      checkIn: "2024-03-23",
      checkOut: "2024-03-26",
      room: "304",
      status: "Confirmed",
      amount: 600,
    },
  ];

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Bookings</h2>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Guest</TableHead>
              <TableHead>Check-in</TableHead>
              <TableHead>Check-out</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.guest}</TableCell>
                <TableCell>{booking.checkIn}</TableCell>
                <TableCell>{booking.checkOut}</TableCell>
                <TableCell>{booking.room}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">${booking.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}