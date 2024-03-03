import React from "react";
import "./About.css";
import wave from '../Images/1523.jpg'
import backgroundWave from "../Images/rm222batch3-mind-05.jpg";

export default function About() {
  return (
    <div>
      <div
        style={{
          minHeight: "calc(100vh - 90px)",
          display: "flex",
          flexDirection: "column",
          padding: "5px",
          background: `url(${wave})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat"
        }}
      >
        <h1 style={{ textAlign: "center" }}>EDUCATION</h1>
        <div className="cards">
          <div className="card">
            <img src="" alt="" />
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                position: "relative",
                bottom: "-100px",
              }}
            >
              <p>
                Chandigarh University <br />
                Branch: BE <br />
                Course: CSE <br />
                CGPA : 8.62
              </p>
            </div>
          </div>
          <div className="card card1">
          <img src="" alt="" />
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                position: "relative",
                bottom: "-100px",
              }}
            >
              <p>
                Chandigarh University <br />
                Branch: BE <br />
                Course: CSE <br />
                CGPA : 8.62
              </p>
            </div>
          </div>
          <div className="card card2">
          <img src="" alt="" />
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                position: "relative",
                bottom: "-100px",
              }}
            >
              <p>
                Chandigarh University <br />
                Branch: BE <br />
                Course: CSE <br />
                CGPA : 8.62
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
