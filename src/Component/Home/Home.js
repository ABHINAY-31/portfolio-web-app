import React from 'react'
import myPhoto from '../Images/photo.jpg'
import github from '../Images/icons8-github-96.png'
import linkedin from '../Images/icons8-linkedin-96.png'
import leetcode from '../Images/icons8-level-up-your-coding-skills-and-quickly-land-a-job-96.png'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div style={{height:"100%",display:"flex", position:"relative"}}>
      <div className="photo-link" style={{width:"50%", display:"grid", placeContent:"center", position:"relative"}}>
        <div className='pattern' style={{width:"200px",height:"200px", position:"absolute", borderRadius:"50%", top:"25px", left:"10%", background:"#ADD8E6", zIndex:"0"}}></div>

        <div className="fade-in-image" style={{zIndex:"1"}}>
          <img src={myPhoto} width="300px" height="300px" alt="My name is Abhinay Singh" />
        </div>
        <div className='pattern' style={{width:"70px",height:"70px", position:"absolute", borderRadius:"50%", top:"45%", right:"10%", background:"#ADD8E6", zIndex:"0"}}></div>

        <div className="fade-in-image" style={{display:"flex", justifyContent:"space-around", marginTop:"8px", zIndex:"1"}}>
          <Link to="https://github.com/ABHINAY-31" target="_blank">
            <img src={github} width="50px" height="50px" alt="github" />
          </Link>
          <Link to="https://www.linkedin.com/in/abhinay-singh-439279203/" target="_blank"> 
            <img src={linkedin} width="50px" height="50px" alt="linkedin" />
          </Link >  
          <Link to="https://leetcode.com/abhinay31/" target="_blank">
            <img src={leetcode} width="50px" height="50px" alt="leetcode" />
          </Link>
        </div>
        <div className='pattern' style={{width:"110px",height:"110px", position:"absolute", borderRadius:"50%", left:"5%",bottom:"10%", background:"#ADD8E6", zIndex:"0"}}></div>
      </div>
      
      <div className='pattern' style={{width:"150px",height:"150px", position:"absolute", borderRadius:"50%", top:"25px", right:"10%", background:"#ADD8E6", zIndex:"0"}}></div>

      <div className="about-me" style={{width:"50%",display:"grid", placeContent:"center", padding:"50px", position:"relative", zIndex:"1"}}>

        <p className='content' style={{height:"400px", width:"400px", display:"grid", placeContent:"center", color:"white", fontWeight:"400", padding:"20px", zIndex:"1"}}>
        Hi there! <br /> I'm Abhinay Singh, currently pursuing my Bachelor's in Computer Science and Engineering from Chandigarh University. My academic journey has been marked by a CGPA of 8.62.I am passionate about programming and have a strong command of C++. In addition, I have developed skills in web development.When not immersed in code, you can find me exploring new technologies and keeping up with the latest trends in the tech world..
        
        Let's connect and explore the endless possibilities in the world of technology!

        </p>
      </div>
      <div className='pattern' style={{width:"100px",height:"100px", position:"absolute", borderRadius:"50%", top:"60%", right:"20%", background:"#ADD8E6", zIndex:"0"}}></div>
    </div>
  )
}
