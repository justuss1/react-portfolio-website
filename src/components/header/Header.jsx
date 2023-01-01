import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me3.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Justinas</h1>
        <h5 className='text-light'>Process Consultant & Beginner Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header