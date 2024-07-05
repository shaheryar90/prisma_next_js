"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
// import { Metadata } from "next";
import { useEffect, useRef } from "react";
// export async function generateMetadata({ params, searchParams }, parent) {
//   return { title: `product ${params?.productId}` };
// }

export default function contact({ params }) {
  const container = useRef();
  const tl = useRef();
  gsap.registerPlugin(ScrollTrigger);
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
    gsap.to("[data-speed]", {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute("data-speed"))) *
        ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });
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
        <p>
          Add a <code>data-speed</code> attribute to any element. 1 = normal
          scroll speed, 0 = no movement, 0.5 = half-speed, etc.
        </p>

        <div className="box-container-1">
          <div className="box green" data-speed="0.25">
            0.25
          </div>
          <div className="box purple" data-speed="0.4">
            0.4
          </div>
          <div className="box orange" data-speed="0">
            0
          </div>
          <div className="box red" data-speed="1">
            1
          </div>
          <div className="box blue" data-speed="0.75">
            0.75
          </div>
        </div>
      </main>
    </>
  );
}
