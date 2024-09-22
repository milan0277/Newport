import React, { useRef, useState } from 'react'
import './navbar.css'
import milan from '../../assets/Milan.gif'
import underlin from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const[menu,setmenu]=useState('home')
  const menuref=useRef()

  const openmenu=()=>{
    menuref.current.style.right='0';
  }

  const closemenu=()=>{
    menuref.current.style.right='-350px';
  }

  return (
    <div className='navbar'>
        {/* <img  src={milan}  style={{height:'50px',width:'100px'}}/> */}
        <img src={menu_icon} onClick={openmenu}alt='' className='nav-mob-open'/>
        <ul  ref={menuref} className='nav-menu'>
          <img src={menu_close} alt="" className="nav-mob-close" onClick={closemenu}/>
        <li><AnchorLink className='anchorlink'  href='#home'><p onClick={()=>setmenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={underlin} />:<></>}</li>
        <li><AnchorLink className='anchorlink' offset={50} href='#about'><p onClick={()=>setmenu('about')}>Aboutme</p></AnchorLink>{menu==='about'?<img src={underlin} />:<></>}</li>
        <li><AnchorLink className='anchorlink' offset={50} href='#skills'><p onClick={()=>setmenu('skills')}>Skills</p></AnchorLink>{menu==='skills'?<img src={underlin} />:<></>}</li>
        <li><AnchorLink className='anchorlink' offset={50} href='#pro'><p onClick={()=>setmenu('pro')}>Portfolio</p></AnchorLink>{menu==='pro'?<img src={underlin} />:<></>}</li>
        <li><AnchorLink className='anchorlink' offset={50} href='#contact'><p onClick={()=>setmenu('contact')}>Contactme</p></AnchorLink>{menu==='contact'?<img src={underlin} />:<></>}</li>
        </ul>

        

      
    </div>
  )
}

export default Navbar
