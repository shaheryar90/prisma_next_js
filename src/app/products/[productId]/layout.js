import React from "react";
function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}
export default function layoutDetail({ children }) {
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error Loading product");
  // }
  return (
    <>
      {children}
      <h2>product Feature detail</h2>
    </>
  );
}

// in this nested layout in any route so with the help of this we can do it
//  it only work when we oage render of productid
// how to handling error in layout
