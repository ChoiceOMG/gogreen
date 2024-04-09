import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // Middleware logic can be added here if needed
  },
  {
    pages: {
      signIn: '/login',
      signOut: '/'
    },
    callbacks: {
      authorized: ({ token, req }) => {
        // Check if user is logged in
        if (!token) {
          return false;
        }

        // Extract the base path from the URL

        if (!token.id) {
          NextResponse.redirect(new URL('/login', req.url));
          return false;
        }
        // Allow access to other paths
        return true;
      }
    }
  }
);

export const config = {
  matcher: ['/admin/:path*'] // Apply the middleware to all routes under /admin/
};
