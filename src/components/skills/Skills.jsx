import React from 'react'
import theme from '../../assets/theme_pattern.svg'
import skill_data from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'
import './skills.css'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={theme} alt=''/>
      </div>
      <div className="skill-contianer">
      {
      skill_data.map((skills,index)=>{
        return <div className="skill-format" key={index}>
          <h3>{skills. s_no}</h3>
          <h2>{skills.s_name}</h2>
          <p>{skills.s_desc}</p>
          <div className="skills-readmore">
            <p>read more</p>
            <img src={arrow} alt=''/>
          </div>
        </div>

      })
      }
      </div>
      
    </div>
  )
}

export default Skills
