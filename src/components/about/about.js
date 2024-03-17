import React, { useState } from "react";
import "./about.css";
import symbol from "../../assests/image.jpg";

const Skills = () => {
  //     var tablinks=document.getElementsByClassName("tab-links");
  //     var tabcontents=document.getElementsByClassName("tab-contents");
  //    function opentab(tabname){
  //     for(tablink of tablinks){
  //         tablink.classList.remove("active-link");
  //     }
  //     for(tabcontent of tabcontents){
  //         tabcontent.classList.remove("active-tab");
  //     }
  //     event.currentTarget.classList.add("active-link");
  //     document.getElementById(tabname).classList.add("active-tab");

  //    }
  const [activeTab, setActiveTab] = useState("education");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about">
      <div className="container-skills">
        <div className="row">
          <div className="about-col-1">
            <img src={symbol} alt="symbol"  className="about-img"/>
          </div>
          <div className="about-col-2">
            <h1 className="sub-title-about">About Me</h1>
            <p className="about-para">
              With proficiency in C, C++, and JavaScript, I've spearheaded
              projects such as the SellSphere E-Commerce Platform, showcasing
              expertise in MERN stack development and real-time data
              visualization. My adeptness extends to backend technologies like
              Node.js and databases such as MongoDB, ensuring robust and
              scalable solutions for diverse project requirements.
            </p>
            <div className="tab-titles">
            <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => openTab("education")}
              >
                Education
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => openTab("experience")}
              >
                Experience
              </p>
             
            </div>

            <div
              className={`tab-contents ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              <ul>
                <li>
                  <span>Internship</span>
                  <br />
                  <span>Junior Software Engineer, RK Info System</span>
                  <br />
                  JAN 2024 - Present
                </li>
                <li><button className="resumebtn"><a href="https://drive.google.com/file/d/1lPz1iwVWD4tRHQBYj3xfk9dUr5mRPpNB/view?usp=drive_link" target="_blank" rel='noopener noreferrer' className="resume-link">Resume Download</a></button></li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>B.tech(Information Technology) | 2024</span>
                  <br />
                  Guru Jambheshwar University of Science and Technology
                </li>
                <li>
                  <span>12 Grade | 2020</span>
                  <br />
                  92.6% Aggarwal Public School, Faridabad
                </li>
                <li>
                  <span>10 Grade | 2018</span>
                  <br />
                  81% Aggarwal Public School, Faridabad
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
