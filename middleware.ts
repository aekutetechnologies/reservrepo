import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Add protected routes that require authentication
  const protectedRoutes = ['/dashboard'];
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

  if (isProtectedRoute) {
    // In a real app, you'd verify the session/token here
    // For now, we'll just redirect to login if needed
    // This is just a placeholder since we're handling auth client-side
    return NextResponse.next();
  }

  return NextResponse.next();
}