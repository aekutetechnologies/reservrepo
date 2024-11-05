"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard-layout";
import { BookingForm } from "@/components/booking-form";
import { RoomSelector } from "@/components/room-selector";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CreateBooking() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Create Booking</h1>
          <p className="text-muted-foreground">Create a new reservation for a guest.</p>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="booking" className="space-y-6">
            <TabsList>
              <TabsTrigger value="booking">Booking Details</TabsTrigger>
              <TabsTrigger value="room">Room Selection</TabsTrigger>
            </TabsList>

            <TabsContent value="booking">
              <BookingForm selectedRoom={selectedRoom} />
            </TabsContent>

            <TabsContent value="room">
              <RoomSelector onSelect={setSelectedRoom} selectedRoom={selectedRoom} />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
}