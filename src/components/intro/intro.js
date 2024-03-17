import React from "react";
import "./intro.css";
import selfPhoto from "../../assests/selfPhoto.png";
import hireMe from "../../assests/hireMe.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="intoText">I'm <span className='intoName' >Gautam Jain</span> <br />Web developer</span>
        <p className="intoPara">I am a skilled Web developer</p>
        <a href="#contact" className="hireMeLink">
        <img src={hireMe} alt="hireMe" className="hireImg" />
            </a>
      </div>
      <img  src={selfPhoto} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
