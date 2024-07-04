// import { useRouter } from "next/router";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Header = () => {
//   const router = useRouter();

//   const removeSlash = (str) => {
//     if (str.charAt(0) == "/") {
//       str = str.substr(1);
//     }
//     return str;
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <header className="header">
//         <div className="sec-news-slide">
//           <div className="container container-expanded">
//             <div className="sec-box">
//               <div className="newsBox">
//                 <div className="news-title">
//                   <p className="extra-condensed-black-italic upperCase">
//                     Latest News
//                   </p>
//                 </div>
//                 <div className="news-slider js-newsSlider">
//                   <Slider {...sliderSettings}>
//                     <div className="slider-box">
//                       <p className="small slider-info">
//                         <a href="#">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Sed mattis turpis eu urna dapibus tristique.
//                         </a>
//                       </p>
//                     </div>
//                     <div className="slider-box">
//                       <p className="small slider-info">
//                         <a href="#">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Sed mattis turpis eu urna dapibus tristique
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Sed mattis turpis eu urna dapibus tristique.
//                         </a>
//                       </p>
//                     </div>
//                     <div className="slider-box">
//                       <p className="small slider-info">
//                         <a href="#">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit. Sed mattis turpis eu urna dapibus tristique.
//                         </a>
//                       </p>
//                     </div>
//                   </Slider>
//                 </div>
//               </div>
//               <div className="counter">
//                 <div className="counter-title">
//                   <p className="extra-condensed-black-italic upperCase">
//                     Countdown to launch
//                   </p>
//                 </div>
//                 <div className="countdown">
//                   <p className="small condensed-medium"></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container container-expanded">
//           <div className="header-wrapper">
//             <div className="header-logo">
//               <a href="/">
//                 <img
//                   // Replace the following with the actual path to your logo
//                   src="/assets/img/logo/logo.svg"
//                   className="svg js-tosvg"
//                   alt="Logo"
//                 />
//               </a>
//             </div>
//             <div className="menuIcon">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//             <div className="header-listing">
//               <ul>
//                 <li className="menu-link">
//                   <a href="javascript:void(0);">Nav1</a>
//                 </li>
//                 <li className="menu-link">
//                   <a href="javascript:void(0);">Nav2</a>
//                 </li>
//                 <li className="menu-link">
//                   <a href="/faq.html">Nav3</a>
//                 </li>
//                 <li className="lag-switch">
//                   <a
//                     className="en"
//                     onClick={() => {
//                       window.location.replace(
//                         `/${router.locale === "ar" ? "en" : "ar"}/${removeSlash(
//                           router.asPath
//                         )}`
//                       );
//                     }}
//                   >
//                     EN
//                   </a>
//                   <a
//                     className="ar"
//                     onClick={() => {
//                       window.location.replace(
//                         `/${router.locale === "ar" ? "en" : "ar"}/${removeSlash(
//                           router.asPath
//                         )}`
//                       );
//                     }}
//                   >
//                     AR
//                   </a>
//                 </li>
//               </ul>
//               <div className="menu--footer">
//                 <div className="munu-footer--wrapper">
//                   <p>© 2023 Saudi Esports Federation | All rights reserved</p>
//                   <div className="social">
//                     <ul>
//                       <li>
//                         <a
//                           href="http://Instagram.com/eswc.official/"
//                           target="_blank"
//                         >
//                           <img
//                             // Replace the following with the actual path to your image
//                             src="/assets/img/icons/ic-instagram.svg"
//                             className="svg js-tosvg"
//                           />
//                         </a>
//                       </li>
//                       {/* ... (similarly for other social icons) */}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
