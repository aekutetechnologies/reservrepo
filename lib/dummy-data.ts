import { User, Booking, Expense } from './types';

export const dummyUsers: User[] = [
  {
    id: '1',
    email: 'admin@resmanager.com',
    password: 'admin123', // In real app, passwords would be hashed
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'owner@hotel.com',
    password: 'owner123',
    name: 'Hotel Owner',
    role: 'owner',
    propertyId: 'hotel1',
    propertyType: 'hotel',
  },
  {
    id: '3',
    email: 'staff@hostel.com',
    password: 'staff123',
    name: 'Hostel Staff',
    role: 'employee',
    propertyId: 'hostel1',
    propertyType: 'hostel',
  },
];

export const dummyBookings: Booking[] = [
  {
    id: 'b1',
    guestName: 'John Doe',
    checkIn: '2024-03-20',
    checkOut: '2024-03-25',
    roomNumber: '101',
    status: 'active',
    totalAmount: 500,
    propertyId: 'hotel1',
  },
  {
    id: 'b2',
    guestName: 'Jane Smith',
    checkIn: '2024-03-18',
    checkOut: '2024-03-22',
    roomNumber: 'Bed 3A',
    status: 'active',
    totalAmount: 120,
    propertyId: 'hostel1',
  },
];

export const dummyExpenses: Expense[] = [
  {
    id: 'e1',
    description: 'Cleaning Supplies',
    amount: 150,
    category: 'Maintenance',
    date: '2024-03-19',
    propertyId: 'hotel1',
  },
  {
    id: 'e2',
    description: 'Utilities',
    amount: 300,
    category: 'Bills',
    date: '2024-03-19',
    propertyId: 'hostel1',
  },
];