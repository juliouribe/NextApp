// import { NextRequest, NextResponse } from "next/server";
// Export the middleware from next auth so we redirect to a login page if we
// try to go to a page with /users/*.
export { default } from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/new-page', request.url));
// }

export const config = {
  // *: zero or more parameters
  // +: one or more
  // ?: zero or one
  // whatever you pass here should start with a forward slash
  matcher: ['/users/:id*']
}
