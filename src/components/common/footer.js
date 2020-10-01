import React from "react";
import "./css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
const Footer = ({hide}) => {
  return (
    <div className={`footer ${hide ? "half-height": "height"}`}>
          <div className={`bg ${hide ? "half-height": "full-height"}`}></div>
      <div className="text">
        {hide ? "no love" :
        <>
        <div className="row">
          <div className="col-md-9 ">
          <p className="text-center"> Our app features over 8 years of past WAEC questions with detailed solutions in Mathematics, Physics, 
          Chemistry and Biology; making it an excellent tool for preparing for and cracking WAEC. Students in SSS/SHS 3 
          classes in Nigeria, Ghana, Sierra Leone, Liberia and the Gambia can take advantage of this quality resource put 
          together by excellent lesson teachers to pass WAEC/WASSCE exams. Timed practice WAEC exams available on the app 
          not only help SS/SHS 3 students to measure their preparedness, it also helps them learn time management, WAEC exam format, and accuracy skills.</p>
          </div>
        </div>
        </>}
        <div className="">
          <ul className="flex2 menu">
            <li>Home</li>
            <li>Return Policy</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
          <ul className="flex2 menu">
            <li><FontAwesomeIcon icon={faFacebook} /> </li>
            <li><FontAwesomeIcon icon={faInstagram} /> </li>
            <li><FontAwesomeIcon icon={faTwitter} /> </li>
            <li><FontAwesomeIcon icon={faWhatsapp } /> </li>
          </ul>
          <p>LERO © 2020.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer;
