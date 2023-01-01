import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com" target='_blank'> <BsGithub /> </a>
        <a href="https://upwork.com" target='_blank'><SiUpwork /></a>
    </div>
  )
}

export default HeaderSocials