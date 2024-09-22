import React from 'react'
import './about.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/pro.jpg'
import lighting from '../../assets/Milan Rawat.gif'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt=''/>
        </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt=''/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hello, I’m Milan Rawat, a passionate full stack developer with a strong focus on the MERN stack (MongoDB, Express.js, React.js, and Node.js). I recently completed my Bachelor’s in Computer Applications from the Institute of Innovation in Technology and Management, where I built a solid foundation in computer science and software development.</p>
           <p>In addition to my formal education, I completed a MERN stack course from Ducat IT Training Institute, where I honed my skills in building dynamic, full stack web applications. I’m always eager to explore new technologies and stay up to date with industry trends to deliver high-quality, performance-driven solutions.</p>
          <p>I’m enthusiastic about developing both intuitive front-end interfaces and efficient back-end systems, and I’m looking for opportunities to contribute to innovative projects where I can apply and expand my expertise.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
