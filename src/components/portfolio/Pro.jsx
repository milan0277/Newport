import React from 'react'
import './pro.css'
import theme from '../../assets/theme_pattern.svg'
import projects from '../../assets/mywork_data'
import arr from '../../assets/arrow_icon.svg'
const Pro = () => {
  return (
    <div className='pro' id='pro'>
        <div className="pro-title">
            <h1>My Projects</h1>
            <img src={theme} alt=''/>
        </div>
        <div className="my-pro">
            {
                projects.map((p,i)=>{
                        return <img src={p.w_img} alt='' key={i}/>
                })
            }
             
        </div>
        {/* <div className="p-showmore">
            <p>show more</p>
            <img src={arr} alt=''/>
        </div> */}
    </div>
  )
}

export default Pro
