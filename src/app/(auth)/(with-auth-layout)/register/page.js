"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import SplitText from "gsap-trial/SplitText";
import getUsers from "../../../../../services/getUsers";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);
gsap.registerPlugin(TextPlugin, SplitText);
export default async function Register() {
  const containerRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const myTextRef = useRef(null);
  const [userList, setUserList] = useState([]);
  var tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });
  useEffect(() => {
    async function fetchData() {
      var getUserList = await getUsers();
      setUserList(getUserList.data); // Assuming getUserList.data contains the array of users
      console.log(getUserList, "Fetched User List");
    }

    fetchData();

    if (containerRef.current && frontRef.current && backRef.current) {
      const container = containerRef.current;
      const front = frontRef.current;
      const back = backRef.current;

      gsap.fromTo(
        container,
        { x: "-200%" },
        { x: "0%", duration: 10, ease: "power3.out" }
      );
      const flipCard = () => {
        gsap.to(front, { duration: 0.5, rotationY: 180, opacity: 0 });
        gsap.to(back, { duration: 0.5, rotationY: 0, opacity: 1, x: "0%" });
      };

      // Function to flip the card back
      const flipBack = () => {
        gsap.to(back, {
          duration: 0.5,
          rotationY: -180,
          opacity: 0,
          x: "-100%",
        });
        gsap.to(front, { duration: 0.5, rotationY: 0, opacity: 1 });
      };

      // Event listeners for hover effect
      container.addEventListener("mouseenter", flipCard);
      container.addEventListener("mouseleave", flipBack);
      const split = new SplitText(myTextRef.current, {
        type: "chars",
        charsClass: "char",
      });

      tl.fromTo(
        split.chars,
        {
          y: "50%", // Start from a position below (adjust as needed)
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          ease: "elastic.out",
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
        },
        "+=0.2" // Delay between animations
      );
      return () => {
        container.removeEventListener("mouseenter", flipCard);
        container.removeEventListener("mouseleave", flipBack);
      };
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="register-container"
        style={{
          width: 400,
          height: 400,
          position: "relative",
          margin: "100px auto",
        }}
      >
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
            backgroundColor: "#f0f0f0",
            borderRadius: 10,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            opacity: 1, // Ensure front side is initially visible
          }}
        >
          <h3 ref={myTextRef}>Login Page</h3>

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
            opacity: 0, // Ensure back side is initially hidden
            x: "-100%", // Position off-screen to the left initially
          }}
        >
          <h3>Back of the Card</h3>
          <Link href="/blog">
            <p>Go Back</p>
          </Link>
        </div>
      </div>
      <div style={{ border: "1px solid black", margin: "300px 300px" }}>
        {userList.map((item, ind) => (
          <div key={ind} style={{}}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
