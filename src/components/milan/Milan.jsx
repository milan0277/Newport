import React from 'react'
import './milan.css'
import profile_icon from '../../assets/Milan.gif'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Milan = () => {
  return (
    <div id='home' className='milan'>
      <img src={profile_icon} alt=''/>
      <h1><span>I'm Milan Rawat</span>, MERN stack developer from India</h1>
      <p>Enthusiastic MERN Stack Developer with a solid understanding of Javascript,React js,Node js,Express js and MongoDB </p>
      <div className="milan-action">
      <div className="milan-connect"><AnchorLink offset={50} href='#contact' className='anchorlink'>Connect with me</AnchorLink></div>
      <div className="milan-resume"> <a target='_blank' href='https://drive.google.com/file/d/1BTXh6AsHXTYHwCKOS6yyMNzkvb6KUPkM/view?usp=drive_link' alt="#">My resume</a></div>

      </div>

    </div>
  )
}

export default Milan
