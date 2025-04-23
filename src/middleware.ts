import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { v7 as uuidv7 } from 'uuid';

// Middleware function to set sessionCartId cookie
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;

  // Check if accessToken exists (user is logged in)
  if (!accessToken) {
    // If no accessToken, skip setting sessionCartId or any other logic
    return NextResponse.next();
  }

  let sessionCartId = request.cookies.get('sessionCartId')?.value;

  // Debugging: Log the cookie and the request
  // console.log('Request cookies:', request.cookies);
  // console.log('Access Token:', accessToken);
  // console.log('Session Cart ID:', sessionCartId);

  // If sessionCartId is not set, generate a new one
  if (!sessionCartId) {
    sessionCartId = uuidv7();

    // Create a new response and set the sessionCartId cookie
    const response = NextResponse.next();

    // Set the cookie with additional options for security
    response.cookies.set('sessionCartId', sessionCartId, {
      httpOnly: true, // Prevents JS access to the cookie
      // secure: process.env.NODE_ENV === 'production', // Secure flag for production
      sameSite: 'strict', // Prevents CSRF attacks
    });

    console.log('Setting new sessionCartId cookie:', sessionCartId);

    return response;
  } else {
    console.log('Session Cart ID already exists:', sessionCartId);
    return NextResponse.next();
  }
}

// Optional: Apply middleware to only the home page ('/')
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
