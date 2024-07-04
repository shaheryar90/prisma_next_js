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

const MainPageSection = ({ data }) => {
  return (
    <>
      <div className="main-container">
        <div className="child-1-conatiner">
          <p className="text-style">POISED TO BECOME THE NEW GLOBAL SPORT</p>
          <h3 className="text-style-heading">
            RAPID GROWTH, LIMITLESS POTENTIAL
          </h3>
          <p className="text-style-content">
            Esports is on the rise. In an ever-evolving, borderless, digital
            world with a young and actively engaged audience, esports is
            transcending boundaries to become the New Global Sport.
          </p>
          <p className="text-style-content">
            Its growth journey is only in its infancy – driven by a
            technologically savvy viewer base, harnessing a growing roster of
            competitive games, and leveraging a market of billions of gamers
            around the globe.
          </p>
        </div>
        <div className="child-2-conatiner">
          <img
            className="main-image-md"
            src="/assets/img/bg/main-section-image.png"
          />
          <img
            className="main-image-lg"
            src="/assets/img/bg/main-image-lg.png"
          />
          <img
            className="main-image-laptop"
            src="/assets/img/bg/main-image-laptop.png"
          />
          <img
            className="img-blue"
            src="/assets/img/bg/main-section-side-bg.png"
          />
          <img
            className="img-purple"
            src="/assets/img/bg/main-side-bg-purple.png"
          />
        </div>
      </div>
      <div className="child-3-container">
        <div className="child-3-content">
          <h3 className="text-heading-section">{"> 3 bn"}</h3>
          <h5 className="text-content-section">{"active gamers worldwide"}</h5>
        </div>
        <div className="child-3-content">
          <h3 className="text-heading-section">{"5x"}</h3>
          <h5 className="text-content-section">
            {"market growth forecasted by 2030"}
          </h5>
        </div>
        <div className="child-3-content">
          <h3 className="text-heading-section">{"3x"}</h3>
          <h5 className="text-content-section">
            {"audience growth, to 1.8 bn viewers, expected in next decade"}
          </h5>
        </div>
        <div className="child-3-content">
          <h3 className="text-heading-section">{"> 60%"}</h3>
          <h5 className="text-content-section">
            {"of esports viewers are aged between 16 and 34 years"}
          </h5>
        </div>
      </div>
    </>
  );
};

export default MainPageSection;
