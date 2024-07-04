import Link from "next/link";
import React from "react";

export default function login() {
  return (
    <>
      <h3>login page</h3>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
    </>
  );
}

// (auth) if we make folder like that so it mean it omit this folder from the route
