"use client";

import React, { createContext, useContext, useState } from 'react';
import { User } from '@/lib/types';
import { dummyUsers } from '@/lib/dummy-data';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, propertyType?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string, propertyType?: string) => {
    // Simulate API call
    const foundUser = dummyUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      if (propertyType && foundUser.propertyType && foundUser.propertyType !== propertyType) {
        toast.error("You don't have access to this property type");
        return;
      }
      
      setUser(foundUser);
      toast.success('Login successful!');
      router.push('/dashboard');
    } else {
      toast.error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}