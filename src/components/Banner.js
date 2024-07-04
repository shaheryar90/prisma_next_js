"use client";

import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch(
    "https://private-6c6b32-dalapis.apiary-mock.com/en/faqs",
    {
      headers: {
        "Accept-Language": "en",
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

const Banner = ({ data }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Head>
        <title>Banner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="page-home">
        <div className="main-Container">
          <div className="side-bg">
            <img width={400} src="/assets/img/bg/bg-blue-side.png" />
          </div>
          <div className="side-bg2">
            <img height={"auto"} src="/assets/img/bg/bg-blue-side2.png" />
          </div>
          <div className="side-bg3">
            <img width={150} src="/assets/img/bg/bg-purple-side.png" />
          </div>
          <div className="imageWrapper">
            <img
              width="100%"
              className="img-large"
              src="/assets/img/bg/banner-bg.png"
            />
            <img
              width="100%"
              className="img-mid"
              src="/assets/img/bg/banner-bg-800w.png"
            />
            <img
              width="100%"
              className="img-small"
              src="/assets/img/bg/banner-bg-400w.png"
            />

            <div className="navBarContent">
              <img
                src="/assets/img/bg/logo.png"
                className="logo-image"
                alt="Logo"
              />
              <div className="navbar-container">
                <a href="#">Why esports?</a>
                <a href="#">About the Summit</a>
                <a href="#">Summit Highlights</a>
                <a href="#">Topics</a>
                <a href="#">Contact</a>
              </div>
              <div className="sideBar-container">
                <div className="hamburger" onClick={toggleSidebar}>
                  &#9776;
                </div>
                <div
                  id="sidebar"
                  className={`sidebar ${sidebarOpen ? "open" : ""}`}
                >
                  <a
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={closeSidebar}
                  >
                    &times;
                  </a>
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Services</a>
                  <a href="#">Contact</a>
                </div>
                <div className="lang-container">
                  <a href="#">EN | AR</a>
                </div>
              </div>
            </div>
            <div className="banner-content">
              <h5>THE NEW GLOBAL SPORT SUMMIT</h5>
              <h3>
                SHAPING THE NEXT <br /> GENERATION OF ESPORTS
              </h3>
            </div>

            <div className="time-show-container">
              <div className="location-container">
                <img src="/assets/img/bg/map-pin.png" alt="Location" />
                <p className="text-style">
                  The Ritz-Carlton, Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="horizontal-line"></div>
              <div className="vertical-line"></div>

              <div className="time-container" style={{ marginRight: 15 }}>
                <img src="/assets/img/bg/clock.png" alt="Time" />
                <p className="text-style">
                  9am – 5pm, Monday, October 23, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .sidebar.open {
          width: 250px;
        }
      `}</style>
    </>
  );
};

export default Banner;
