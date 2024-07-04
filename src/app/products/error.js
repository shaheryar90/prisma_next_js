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
