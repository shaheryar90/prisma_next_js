import React, { useState } from "react";
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

const Data = [
  {
    id: 1,
    content: "300+ GAMING, ESPORTS & SPORTS LEADERS ATTENDING",
  },
  {
    id: 2,
    content: "FIRESIDE CHATS, PANELS & SESSIONS WITH TOP EXECUTIVES & EXPERTS",
  },
  {
    id: 3,
    content:
      "BILATERAL MEETINGS PROVIDING INVALUABLE OPPORTUNITIES TO NETWORK WITH INDUSTRY LEADERS",
  },
  {
    id: 4,
    content: "ONE MONUMENTAL ANNOUNCEMENT",
  },
];
export default function Submit({ data }) {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (id) => {
    setSelectedBox(id);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        {" "}
        <div className="submit-container">
          <div className="submit-pic-content">
            <img className="xl-screen" src="/assets/img/bg/submit-img.PNG" />
            <img className="lg-screen" src="/assets/img/bg/submit-img-lg.PNG" />
            <img
              className="sm-screen"
              src="/assets/img/bg/submit-img-small.PNG"
            />
          </div>
          <div className="submit-content">
            <div className="child-1-conatiner">
              <p className="text-style">About the summit</p>
              <h3 className="text-style-heading">
                CONVENING KEY INDUSTRY LEADERS IN RIYADH
              </h3>
              <p className="text-style-content">
                The New Global Sport Summit is a groundbreaking gathering of
                global leaders in the gaming, sports, and esports industries.
              </p>
              <p className="text-style-content">
                This exclusive invitation-only event will convene the key
                stakeholders of the gaming and sports industries, including top
                game publishers, event organizers, streaming partners, players,
                sports icons, and policymakers.
              </p>
            </div>
          </div>
        </div>
        <div className="submit-box-container">
          {Data.map((item, ind) => {
            return (
              <div
                key={item.id}
                className={`submit-box-content ${
                  selectedBox === item.id ? "selected" : ""
                }`}
                onClick={() => handleBoxClick(item.id)}
              >
                <h6 className="text-content">{item.content}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
