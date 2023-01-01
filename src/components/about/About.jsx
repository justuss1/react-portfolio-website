import React from 'react'
import "./about.css"
import ME from "../../assets/me2.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>10+ Year Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>100+ Wordwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icons'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse odit, consequuntur numquam, cum provident laborum, animi id voluptas debitis nemo voluptatum aspernatur tempore in nobis repudiandae deleniti eligendi ipsa?</p>
          <a href="#contact" className='contact'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About