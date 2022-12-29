import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {BsCodeSlash} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1> Hello I'm Hamza!</h1>
        <h3 className='text-light'>Computer Science, Economics and Finance Student at McGill University</h3>
        <CTA />
        <HeaderSocials />
        <BsCodeSlash className='codeicon' size={200}/>
        

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div>
        */}

      </div>
    </header>
  )
}

export default Header
