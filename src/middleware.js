"use client";

import { NextResponse } from "next/server";

export function middleware(req) {
  // Get the cookie value
  let verify = req.cookies.get("loggedIn");
  let url = req.url;

  // List of protected paths
  const protectedPaths = ["/dashboard", "/blog", "/products"];

  // Check if the requested URL includes any of the protected paths
  const isProtectedPath = protectedPaths.some((path) => url.includes(path));

  if (!verify && isProtectedPath) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  // Proceed to the next middleware or route handler
  return NextResponse.next();
}

// it's use for checkign user is login or not
