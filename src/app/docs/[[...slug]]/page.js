"use client";

import React from "react";

export default function docs({ params }) {
  console.log(params, "Params in docs");
  if (params.slug?.length == 2)
    return (
      <h3>
        View docs for {params.slug[0]} and {params.slug[1]}
      </h3>
    );
  return <h3>features in docs</h3>;
}

// in this we are making  nested dynamic routes through [[...slug]] for docs. When you navigate to "/docs/[[...slug]]" it will display docs for
