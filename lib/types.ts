export type UserRole = 'admin' | 'owner' | 'employee';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  propertyId?: string;
  propertyType?: 'hotel' | 'hostel';
}

export interface Booking {
  id: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  roomNumber: string;
  status: 'active' | 'completed' | 'cancelled';
  totalAmount: number;
  propertyId: string;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  propertyId: string;
}