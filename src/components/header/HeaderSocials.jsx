import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hamzafarooq360" target="_blank"><BsLinkedin size={100}/></a>
        <a href="https://www.github.com/hamzafarooq360" target="_blank"><FaGithub size={100} /></a>
      
    </div>
  )
}

export default HeaderSocials
