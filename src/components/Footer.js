import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="container container-expanded">
            <div className="footerTop">
              <div className="footer-logo">
                <img
                  src="/assets/img/bg/logo-black.svg"
                  className="svg js-tosvg"
                />
              </div>
              <div className="footer-address">
                <div>
                  <img
                    style={{ marginRight: 20 }}
                    width={25}
                    height={25}
                    src="/assets/img/bg/map-pin.png"
                  />

                  <p>
                    Makkah Al Mukarramah Rd,
                    <br /> Al Hada,
                    <br /> Riyadh 11493,
                    <br /> Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <div className="container container-expanded">
              <div className="social-wrap">
                <div className="copyright">
                  <p>© 2023 Esports World Cup. All Rights Reserved</p>
                </div>
                <div className="social">
                  <div className="terms">
                    <a href="terms-of-use.html">Terms of use</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="cookie-policy.html">Cookie Policy</a>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="http://Instagram.com/eswc.official/"
                        target="_blank"
                      >
                        <img
                          src="/assets/img/icons/Instagram.svg"
                          className="svg js-tosvg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javaScript:void(0);">
                        <img
                          src="/assets/img/icons/linkedin.svg"
                          className="svg js-tosvg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javaScript:void(0);">
                        <img
                          src="/assets/img/icons/snapchat.svg"
                          className="svg js-tosvg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="http://Twitter.com/eswc_en" target="_blank">
                        <img
                          src="/assets/img/icons/twitter.svg"
                          className="svg js-tosvg"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://Facebook.com/eswc.official/"
                        target="_blank"
                      >
                        <img
                          src="/assets/img/icons/facebook.svg"
                          className="svg js-tosvg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="http://Youtube.com/@eswc" target="_blank">
                        <img
                          src="/assets/img/icons/youtube.svg"
                          className="svg js-tosvg"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script type="text/javascript" src="/assets/js/scripts.min.js"></script>
    </>
  );
};

export default Footer;
