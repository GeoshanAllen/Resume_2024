import React from "react";
import "../styles.css";
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <div className="header mt-1">    
      <img
        className="logo"
        src="Allen_Resume_Black.png"
        alt="allenResume"
      />
      <h1 className="app-subtitle">M ALLEN GEOSHAN</h1>
      <h2 className="app-subtitle">SDET</h2>
      <div>
        <span  className="para">Automation Tester with a pragmatic approach, leveraged on nuances, with gifted presentation skills.</span>
        <br></br>
        <span  className="para">Always eager to explore new contributions in the field of Automation Testing and Application Design.</span>
      </div>
      
    </div>
  );
}
