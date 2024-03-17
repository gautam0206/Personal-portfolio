import React from "react";
import c from "../../assests/c.png";
import cpp from "../../assests/cpp.png";
import java from "../../assests/java.png";

import html from "../../assests/html.png";
import css from "../../assests/css.png";
import javascript from "../../assests/javascript.png";
import react from "../../assests/react.png";
import redux from "../../assests/redux.png";
import node from "../../assests/node.png";
import mongodb from "../../assests/mongodb.png";
import vscode from "../../assests/vscode.png";
import github from "../../assests/github.png";
import './skills.css'

const Images = () => {
  return (
    <div className="images-conatainer " id='skills'>
      <h2 className="images-heading">Skills</h2>
      <div className="images-list-continer">
        <div className="images-list">
          <img src={c} alt="c" className="images-item" />
          <img src={cpp} alt="cpp" className="images-item" />
          <img src={java} alt="java" className="images-item" />
          <img src={html} alt="html" className="images-item" />
        </div>
        <div className="images-list">
          <img src={css} alt="css" className="images-item" />
          <img src={javascript} alt="javascript" className="images-item" />
          <img src={react} alt="react" className="images-item" />
          <img src={redux} alt="redux" className="images-item" />
        </div>
        <div className="images-list">
          <img src={node} alt="node" className="images-item" />
          <img src={mongodb} alt="mongodb" className="images-item" />
          <img src={vscode} alt="vscode" className="images-item" />
          <img src={github} alt="github" className="images-item" />
        </div>
       
      </div>
    </div>
  );
};

export default Images;
