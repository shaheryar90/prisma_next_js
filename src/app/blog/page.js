import Link from "next/link";
import React from "react";

export const metadata = {
  title: {
    absolute: "blog",
  },
};
export default function page() {
  return (
    <>
      <Link href="/login">
        <p>Login</p>
      </Link>
      <h2>My blog</h2>;
    </>
  );
}

//  ************************** * in blog folder we have nested routes **************************

// if we give  in absolute so it show on browser
