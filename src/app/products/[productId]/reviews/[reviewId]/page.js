"use client";

import { notFound } from "next/navigation";
import React from "react";

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}
export default function productDetailsReview({ params }) {
  console.log(params, "Params in productDetails");
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error Loading review");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return <h3>{`Review about product ${params.reviewId}`}</h3>;
}

// in this we have nested dynamic routes for products and reviews with respective params. When you navigate to "/products/[productId]" it
