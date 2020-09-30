import React from 'react';
import Navbar from "../common/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import Button from "../common/button";
import Footer from "../common/footer";
// images
import sideImage from "../../assets/images/real.png"
import studyImage from "../../assets/images/study1.png"
function Home() {
  return (
    <div className="home">
      <Navbar/>
      <div className="banner">
        <h2>E-learner</h2>
    </div>
        <div className="container-fluid">
          <h5 className="text-center center">What we offer?</h5>
        <div className="row why pd">
            <div className="col-md-4">
              <p>
          <FontAwesomeIcon icon={faTools} />
              </p>
                <h4>Free</h4>
                <p>We help you select & set up the best LMS 
                  tools to meet your unique needs</p>
            </div>
            <div className="col-md-4">
              <p>
            <FontAwesomeIcon icon={faTools} />
                </p>
                <h4>Free</h4>
                <p>We help you select & set up the best LMS 
                  tools to meet your unique needs</p>
            </div>
            <div className="col-md-4">
            <p>
          <FontAwesomeIcon icon={faTools} />
              </p>
                <h4>Free</h4>
                <p>We help you select & set up the best LMS 
                  tools to meet your unique needs</p>
            </div>
            <div className="col-md-4">
              <p>
            <FontAwesomeIcon icon={faTools} />
                </p>
                <h4>Unlimited Access</h4>
                <p>We help you select & set up the best LMS 
                  tools to meet your unique needs</p>
            </div>
        </div>
        <div className="peach pd">
        <div className="row">
        <div className="col-md-7 ml-auto mr-auto">
          <h3 className="text-center">Your uLesson is curriculum relevant</h3>
          <p className="text-center">The product helps to achieve stellar results for students in Junior and Senior school. 
            Junior school students have access to Mathematics, Basic Science, Basic Technology and
             Business Studies; while Senior students have access to Mathematics, Physics Chemistry &
              Biology, with preparation for WAEC, JAMB and NECO exams.</p>
        </div>
        </div>
        </div>
        <div className="row pd">
          <div className="col-md-4 ">
            <div className="lesson">
              <h3 className="text-left">Highly Interactive Lessons</h3>
              <p className="text-left">We help you select & set up the best LMS 
                  tools to meet your unique needs</p>
                  <Button>Start Learning</Button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={sideImage} alt="Teacher"/>
          </div>
        </div>
        <div className="peach pd">
        <div className="row">
        <div className="col-md-7 ml-auto mr-auto">
          <h3 className="text-center">Your uLesson is curriculum relevant</h3>
          <p className="text-center">The product helps to achieve stellar results for students in Junior and Senior school. 
            Junior school students have access to Mathematics, Basic Science, Basic Technology and
             Business Studies; while Senior students have access to Mathematics, Physics Chemistry &
              Biology, with preparation for WAEC, JAMB and NECO exams.</p>
        </div>
        </div>
        </div>
        <div className="row pd">
          <div className="col-md-4 ">
            <div className="lesson">
              <h3 className="text-left">Introducing Live Lessons</h3>
              <p className="text-left">Get taught by the best tutors in the country when you attend Live Lessons.
               Lessons break down difficult concepts and focus on key areas necessary to achieve academic mastery.
                Whether your goal is to prepare for WAEC or JAMB exams, upcoming school exams or homework, our expert tutors have got you covered.</p>
                  <Button>Start Learning</Button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={studyImage} alt="Teacher"/>
          </div>
        </div>
          <div className="peach pd">
        <div className="row">
        <div className="col-md-7 ml-auto mr-auto">
          <h3 className="text-center">About Us</h3>
          <p>
          Our app features over 8 years of past WAEC questions with detailed solutions in Mathematics, Physics, 
          Chemistry and Biology; making it an excellent tool for preparing for and cracking WAEC. Students in SSS/SHS 3 
          classes in Nigeria, Ghana, Sierra Leone, Liberia and the Gambia can take advantage of this quality resource put 
          together by excellent lesson teachers to pass WAEC/WASSCE exams. Timed practice WAEC exams available on the app 
          not only help SS/SHS 3 students to measure their preparedness, it also helps them learn time management, WAEC exam format, and accuracy skills.
          </p>
        </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
