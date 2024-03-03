import React from "react";
import myPhoto from "../Images/myphoto.jpg";
import github from "../Images/icons8-github-96.png";
import linkedin from "../Images/icons8-linkedin-96.png";
import leetcode from "../Images/icons8-level-up-your-coding-skills-and-quickly-land-a-job-96.png";
import backgroundWave from "../Images/rm222batch3-mind-05.jpg";
import cImage from '../Images/c-.png'
import css from '../Images/css-3.png'
import github1 from '../Images/github.png'
import html from '../Images/html-5.png'
import javascript from '../Images/js.png'
import react from '../Images/science.png'

import { Link } from "react-router-dom";
import "./Home.css";
import Contact from "../ContactForm/Contact";
export default function Home() {
  return (
    <div style={{height:"inberit"}}>
      <div
        className="back-image"
        style={{
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundImage: `url(${backgroundWave})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflowX: "hidden",
        }}
      >
        <div className="photo-link">
          <div
            className="pattern"
            style={{
              width: "200px",
              height: "200px",
              position: "absolute",
              borderRadius: "50%",
              top: "25px",
              left: "10%",
              background: "#ADD8E6",
              zIndex: "0",
            }}
          ></div>

          <div className="fade-in-image" style={{ zIndex: "1" }}>
            <img
              src={myPhoto}
              alt="My name is Abhinay Singh"
            />
          </div>
          <div
            className="pattern"
            style={{
              width: "70px",
              height: "70px",
              position: "absolute",
              borderRadius: "50%",
              top: "45%",
              right: "10%",
              background: "#ADD8E6",
              zIndex: "0",
            }}
          ></div>

          <div className="fade-in-image">
            <Link to="https://github.com/ABHINAY-31" target="_blank">
              <img src={github} width="50px" height="50px" alt="github" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/abhinay-singh-439279203/"
              target="_blank"
            >
              <img src={linkedin} width="50px" height="50px" alt="linkedin" />
            </Link>
            <Link to="https://leetcode.com/abhinay31/" target="_blank">
              <img src={leetcode} width="50px" height="50px" alt="leetcode" />
            </Link>
          </div>
          <div
            className="pattern"
            style={{
              width: "110px",
              height: "110px",
              position: "absolute",
              borderRadius: "50%",
              left: "5%",
              bottom: "10%",
              background: "#ADD8E6",
              zIndex: "0",
            }}
          ></div>
        </div>

        <div
          className="pattern"
          style={{
            width: "150px",
            height: "150px",
            position: "absolute",
            borderRadius: "50%",
            top: "25px",
            right: "10%",
            background: "#ADD8E6",
            zIndex: "0",
          }}
        ></div>

        <div className="about-me">
          <h1 className="content">
            Hi there ! 👋
            <br /> <br /> I am Abhinay Singh
            <br /> Aspiring Developer
          </h1>
        </div>
        <div
          className="pattern"
          style={{
            width: "100px",
            height: "100px",
            position: "absolute",
            borderRadius: "50%",
            top: "60%",
            right: "20%",
            background: "#ADD8E6",
            zIndex: "0",
          }}
        ></div>
      </div>
      <div className="skills">
          <h1 style={{textAlign:"center"}}>Skills</h1>
          <div className="MySkills">
            <div className="skill-box" style={{backgroundImage:`url(${cImage})`}}></div>
            <div className="skill-box" style={{backgroundImage:`url(${html})`}}></div>
            <div className="skill-box" style={{backgroundImage:`url(${css})`}}></div>
            <div className="skill-box" style={{backgroundImage:`url(${javascript})`}}></div>
            <div className="skill-box" style={{backgroundImage:`url(${react})`}}></div>
            <div className="skill-box" style={{backgroundImage:`url(${github1})`}}></div>
          </div>
      </div>
      <div className="myForm">
        <Contact/>
      </div>
    </div>
  );
}
