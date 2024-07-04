import { Metadata } from "next";
export async function generateMetadata({ params, searchParams }, parent) {
  return { title: `product ${params?.productId}` };
}

export default function productDetails({ params }) {
  return <h3>{`Detail about products ${params.productId}`}</h3>;
}

// how to make dynamic meta data
