"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RoomSelectorProps {
  onSelect: (roomId: string) => void;
  selectedRoom: string | null;
}

export function RoomSelector({ onSelect, selectedRoom }: RoomSelectorProps) {
  // Dummy room data - in a real app, this would come from an API
  const rooms = [
    { id: "101", type: "Standard", price: 100, available: true },
    { id: "102", type: "Standard", price: 100, available: false },
    { id: "201", type: "Deluxe", price: 200, available: true },
    { id: "202", type: "Deluxe", price: 200, available: true },
    { id: "301", type: "Suite", price: 300, available: true },
    { id: "302", type: "Suite", price: 300, available: false },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {rooms.map((room) => (
        <Card
          key={room.id}
          className={cn(
            "p-4 cursor-pointer transition-colors",
            selectedRoom === room.id && "border-primary",
            !room.available && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => room.available && onSelect(room.id)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Room {room.id}</h3>
              <p className="text-sm text-muted-foreground">{room.type}</p>
            </div>
            <Badge variant={room.available ? "default" : "secondary"}>
              {room.available ? "Available" : "Occupied"}
            </Badge>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold">${room.price}</p>
            <p className="text-sm text-muted-foreground">per night</p>
          </div>
        </Card>
      ))}
    </div>
  );
}