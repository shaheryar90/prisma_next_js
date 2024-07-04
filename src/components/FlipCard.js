import React from "react";

export default function FlipCard() {
  return (
    <>
      <img className="text-style-sm" src="/assets/img/bg/text-sm.png" />
      <div className="flip-wrapper">
        <div className="flip-card-container">
          <div className="content-container">
            <h2 className="heading-style">Driving the sector forward</h2>
            <img
              style={{ marginLeft: 60 }}
              className="text-style-lg"
              src="/assets/img/bg/text.svg"
            />
          </div>
          <div className="flip-card-row-0" style={{ display: "flex", gap: 20 }}>
            {[1, 2].map((item, index) => {
              // Check if item is not empty or undefined
              if (item) {
                return (
                  <div className="flip-card" key={index}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src="/assets/img/bg/flip-card-pic.svg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="flip-card-back">
                        <h3 className="flip-card-back-text">
                          Sports at a crossroads in the 21st century
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <>
                    <div
                      className="flip-card-empty"
                      style={{ width: 200, height: 50 }}
                    ></div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <div className="flip-card-row-1">
          {[1, 2, 3, ""].map((item, index) => {
            // Check if item is not empty or undefined
            if (item) {
              return (
                <div className="flip-card" key={index}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="/assets/img/bg/flip-card-pic.svg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="flip-card-back">
                      <h3 className="flip-card-back-text">
                        Sports at a crossroads in the 21st century
                      </h3>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <>
                  <div
                    className="flip-card-empty"
                    style={{ width: 200, height: 50 }}
                  ></div>
                </>
              );
            }
          })}
        </div>
        <div className="flip-card-row-2">
          {[5, "", 7, 8].map((item, index) => {
            // Check if item is not empty or undefined
            if (item) {
              return (
                <div className="flip-card" key={index}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="/assets/img/bg/flip-card-pic.svg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="flip-card-back">
                      <h3 className="flip-card-back-text">
                        Sports at a crossroads in the 21st century
                      </h3>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <>
                  <div
                    className="flip-card-empty"
                    style={{ width: 200, height: 50 }}
                  ></div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
