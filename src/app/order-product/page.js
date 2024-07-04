"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function orderProduct() {
  const router = useRouter();
  const handleClick = () => {
    alert("Order placed successfully");
    router.push("/");
    // this is called programitcally navigation
  };
  return (
    <div>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
