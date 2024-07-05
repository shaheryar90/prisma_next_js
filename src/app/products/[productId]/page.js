"use client";

// import { Metadata } from "next";
import { useEffect, useRef } from "react";
// export async function generateMetadata({ params, searchParams }, parent) {
//   return { title: `product ${params?.productId}` };
// }

export default function productDetails({ params }) {
  const container = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".box");
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, "<")
        .to(boxes[2], { y: -166 })
        .reverse();
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <main>
        <section className="boxes-container" ref={container}>
          <h1>Use the button to toggle a Timeline</h1>
          <div>
            <button onClick={toggleTimeline}>Toggle Timeline</button>
          </div>
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
        </section>
      </main>
    </>
  );
}

// how to make dynamic meta data
