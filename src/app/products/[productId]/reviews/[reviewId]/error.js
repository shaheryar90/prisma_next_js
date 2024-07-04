"use client";

import React from "react";

export default function ErrorBoundary({ error, reset }) {
  return (
    <div>
      {error.message}
      <button onClick={reset}>Try Again</button>
    </div>
  );
}

// this concept is used for error handling in next js
// if error comes so reset ufnction take another try  and page render
