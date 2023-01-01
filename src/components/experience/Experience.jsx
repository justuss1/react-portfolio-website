import React from 'react'
import { icons } from 'react-icons/lib'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Full Stack Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='expirience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expirience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expirience__details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expirience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expirience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expirience__details-icon'/>
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Business Process Improvement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='expirience__details-icon'/>
            <div>
              <h4>LEAN</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='expirience__details-icon'/>
              <div>
                <h4>TOC</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
        </section>
  )
}

export default Experience