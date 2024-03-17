import "./project.css";
import { FaReact } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Project = () => {
  return (
    <section id="projects">
      <div className="container-project">
        <h1 className="project-heading">My Projects</h1>
        <div className="project-List">
          <div className="work">
            <div className="icon-list">
              <FaReact className="icon" />
              <SiRedux className="icon" />
              <FaNode className="icon" />
              <DiMongodb className="icon" />
            </div>
            <h3>SellSphere E-commerce Platform</h3>
            <p>
             SellShere is an E-commerce Platform where user can buy and sell items.
            </p>
            <a href="https://sell-sphere-frontend.vercel.app/" className="link" target="_blank" rel="noreferrer" >
              <FaExternalLinkAlt className="iconlink" />
            </a>
          </div>
          <div className="work">
            <div className="icon-list">
              <FaNode className="icon" />

              <IoLogoJavascript className="icon" />
            </div>
            <h3>NPM Node Module for Weather</h3>
            <p>
             Realtime-Weather-Forecast is npm node module to get weather by enter city name.
            </p>
            <a href="https://www.npmjs.com/package/realtime-weather-forcast" className="link" target="_blank" rel="noreferrer" >
              <FaExternalLinkAlt className="iconlink" />
            </a>
          </div>

          <div className="work">
            <div className="icon-list">
              <FaHtml5 className="icon" />
              <FaCss3 className="icon" />
              <IoLogoJavascript className="icon" />
            </div>
            <h3>Music WebApp</h3>
            <p>
             An Personalized App which is user friendly.
            </p>
            <a href="https://github.com/gautam0206" className="link" target="_blank" rel="noreferrer" >
              <FaExternalLinkAlt className="iconlink" />
            </a>
          </div>
        </div>
        <button type="submit" value="send" className="submitbtn">
        <a
        href="https://github.com/gautam0206"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        View More
      </a>
        </button>
       
      </div>
     
    </section>
  );
};

export default Project;
