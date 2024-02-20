import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Middleware logic can be added here if needed
  },
  {
    pages: {
      signIn: '/login'
    },
    callbacks: {
      authorized: ({ token, req }) => {
        // Check if user is logged in
        if (!token) {
          return false;
        }

        // Extract the base path from the URL
        const basePath = req.nextUrl.pathname.split('/')[1];

        // Check if the base path is 'admin'
        if (basePath === 'admin') {
          // Allow access only if the user has the 'ADMIN' or 'STAFF' role
          return token.role === 'ADMIN' || token.role === 'STAFF';
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
