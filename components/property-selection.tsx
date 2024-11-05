"use client";

import { useRouter } from "next/navigation";
import { Building2, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function PropertySelection() {
  const router = useRouter();

  const properties = [
    {
      type: "hotel",
      title: "Hotel",
      description: "Manage hotel properties and reservations",
      icon: Building2,
    },
    {
      type: "hostel",
      title: "Hostel",
      description: "Manage hostel properties and reservations",
      icon: Home,
    },
  ];

  const handleSelect = (type: string) => {
    router.push(`/login?type=${type}`);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
      {properties.map((property) => (
        <Card
          key={property.type}
          className={cn(
            "p-6 cursor-pointer hover:border-primary transition-colors",
            "flex flex-col items-center text-center space-y-4"
          )}
          onClick={() => handleSelect(property.type)}
        >
          <div className="p-4 bg-primary/10 rounded-full">
            <property.icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{property.title}</h2>
            <p className="text-muted-foreground">{property.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}