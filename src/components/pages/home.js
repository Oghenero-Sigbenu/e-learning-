import React from 'react';
import Navbar from "../common/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import Footer from "../common/footer";
import {NavLink} from "react-router-dom"
// images
import sideImage from "../../assets/images/real.png"
import studyImage from "../../assets/images/study1.png"
import banner from "../../assets/images/banner.png";
function Home() {
  return (
    <div className="home">
      <Navbar/>
      <div className="row banner">
      <div className="col-md-5 col-sm-12 home-text">
        <p>Super Academic Achievement &
            Mastery for WAEC, NECO, BECE, JAMB, 
            including Junior and Senior Secondary School.</p>
            <h2 style={{fontSize:"40px", fontWeight:"700"}}>The No. 1 E-Learning Platform</h2>
            <small>Studying made easy</small><br></br>
            <div className="fle"><button className="white" >Get Started</button></div>
        </div>
        <div className="col-md-7 col-sm-12 banner-img">
          <img src={studyImage} alt="Banner text"/>
        </div>
    </div>
        <div className="container-fluid">
          <h4 className="text-center center1">What we offer?</h4>
        <div className="row why pd">
            <div className="col-md-4">
              <p className="icon"> 
          <FontAwesomeIcon icon={faTools} />
              </p>
                <h5>Live classes</h5>
                <p>Get access to daily Live Lessons taught by the best tutors.
                   Join unlimited lessons explaining difficult topics in Maths, 
                   English, Science subjects and more. </p>
            </div>
            <div className="col-md-4">
              <p className="icon">
            <FontAwesomeIcon icon={faTools} />
                </p>
                <h5>Free exam practice questions</h5>
                <p>Prepare ahead for upcoming exams, revise concepts you’ve been
                   taught and get real time assessments on your performance.</p>
            </div>
            <div className="col-md-4">
            <p className="icon">
          <FontAwesomeIcon icon={faTools} />
              </p>
                <h5>Video library</h5>
                <p>Learn at your own pace and choose from thousands of richly animated
                   videos explaining all topics in the Junior and Senior secondary curriculum.</p>
            </div>
            <div className="col-md-4">
              <p className="icon">
            <FontAwesomeIcon icon={faTools} />
                </p>
                <h5>Unlimited Access</h5>
                <p>We help you select & set up the best LMS 
                  tools to meet your unique needs</p>
            </div>
        </div>
        <div className="peach pd">
        <div className="row">
        <div className="col-md-7 margin ml-auto mr-auto">
          <h4 className="text-center">Your LERO is curriculum relevant</h4>
          <p className="text-center">The product helps to achieve stellar results for students in Junior and Senior school. 
            Junior school students have access to Mathematics, Basic Science, Basic Technology and
             Business Studies; while Senior students have access to Mathematics, Physics Chemistry &
              Biology, with preparation for WAEC, JAMB and NECO exams.</p>
             <NavLink to="/"><button class="btn-p " >Start Learning</button></NavLink>
        </div>
        </div>
        </div>
        <div className="row pd">
          <div className="col-md-4 ">
            <div className="lesson">
              <h4 className="text-left">You can learn anything, anywhere </h4>
              <p className="text-left">We help you select & set up the best LMS 
                  tools to meet your unique needs.Ask questions, get answers and receive immediate feedback.
                   Live Lessons are designed to be highly interactive sessions.</p>
                  <button class="btn-p" >Start Learning</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={sideImage} alt="Teacher"/>
          </div>
        </div>
        <div className="peach pd">
        <div className="row">
        <div className="col-md-6 col-sm-9 col-12 ml-auto mr-auto">
          <h3 className="text-center">Your LERO is curriculum relevant</h3>
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
              <h4 className="text-left">Introducing Live Lessons</h4>
              <p className="text-left">Get taught by the best tutors in the country when you attend Live Lessons.
               Lessons break down difficult concepts and focus on key areas necessary to achieve academic mastery.
                Whether your goal is to prepare for WAEC or JAMB exams, upcoming school exams or homework, our expert tutors have got you covered.</p>
                <button class="btn-p" >Start Learning</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={banner} alt="Teacher"/>
          </div>
        </div>
          <div className="peach pd">
          <h4 className="text-center center1">Why LERO?</h4>
        <div className="row why">
            <div className="col-md-4">
              <p className="icon"> 
          <FontAwesomeIcon icon={faTools} />
              </p>
                <h5>Trusted Content</h5>
                <p>Get access to daily Live Lessons taught by the best tutors.
                   Join unlimited lessons explaining difficult topics in Maths, 
                   English, Science subjects and more. </p>
            </div>
            <div className="col-md-4">
              <p className="icon">
            <FontAwesomeIcon icon={faTools} />
                </p>
                <h5>Easily Accessible</h5>
                <p>Prepare ahead for upcoming exams, revise concepts you’ve been
                   taught and get real time assessments on your performance.</p>
            </div>
            <div className="col-md-4">
            <p className="icon">
          <FontAwesomeIcon icon={faTools} />
              </p>
                <h5>Free Service</h5>
                <p>Learn at your own pace and choose from thousands of richly animated
                   videos explaining all topics in the Junior and Senior secondary curriculum.</p>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
