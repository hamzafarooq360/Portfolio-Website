import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaLaptopCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail/></a>
      

    </nav>
  )
}

export default Nav
