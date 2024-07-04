"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <p>Welcome Home !</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
