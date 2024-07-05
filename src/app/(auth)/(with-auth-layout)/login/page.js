"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);
export default function Login() {
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    if (frontRef.current && backRef.current) {
      const front = frontRef.current;
      const back = backRef.current;

      // Initial setup: hide back face
      gsap.set(back, { opacity: 0, rotationY: -180 });

      // Function to flip the card
      const flipCard = () => {
        const timeline = gsap.timeline();
        timeline.to(front, { duration: 0.5, rotationY: 180, opacity: 0 });
        timeline.to(back, { duration: 0.5, rotationY: 0, opacity: 1 }, "-=0.5");
      };

      // Function to flip the card back
      const flipBack = () => {
        const timeline = gsap.timeline();
        timeline.to(back, { duration: 0.5, rotationY: -180, opacity: 0 });
        timeline.to(
          front,
          { duration: 0.5, rotationY: 0, opacity: 1 },
          "-=0.5"
        );
      };

      // Event listeners for hover effect
      front.addEventListener("mouseenter", flipCard);
      back.addEventListener("mouseleave", flipBack);

      return () => {
        front.removeEventListener("mouseenter", flipCard);
        back.removeEventListener("mouseleave", flipBack);
      };
    }
  }, []);
  return (
    <>
      <div
        className="login-container"
        style={{
          width: 400,
          height: 400,
          perspective: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "100px 300px 100px 500px",
          backgroundColor: "#f0f0f0",
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Front side of the card */}
        <div
          ref={frontRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>login page</h3>
          <Link href="/blog">
            <p>Blog</p>
          </Link>
        </div>

        {/* Back side of the card */}
        <div
          ref={backRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#e0e0e0",
            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>Back of the card</h3>
          <Link href="/blog">
            <p>Go Back</p>
          </Link>
        </div>
      </div>
    </>
  );
}

// (auth) if we make folder like that so it mean it omit this folder from the route
